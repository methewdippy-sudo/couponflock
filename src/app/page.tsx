import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../lib/fallbackData";
import { STORE_REGISTRY } from "../lib/storeRegistry";

export const revalidate = 600; // Cache page and revalidate in background every 10 minutes

export default async function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  
  // Format registered stores and coupons for the homepage
  const registryStores: Store[] = STORE_REGISTRY.map((rs) => ({
    id: rs.id,
    name: rs.name,
    slug: rs.slug,
    logo: rs.logo || getLogoUrl(rs.slug),
    website: rs.affiliate_url || rs.website,
  }));

  const registryCoupons: Coupon[] = STORE_REGISTRY.flatMap((rs) => {
    const s: Store = {
      id: rs.id,
      name: rs.name,
      slug: rs.slug,
      logo: rs.logo || getLogoUrl(rs.slug),
      website: rs.affiliate_url || rs.website,
    };
    return rs.coupons.map((c) => ({
      id: c.id,
      code: c.code,
      discount: c.discount,
      title: c.title,
      description: c.description,
      is_verified: c.is_verified,
      expiry_date: c.expiry_date || "2026-12-31",
      store: s,
      storeSlug: rs.slug,
      affiliate_url: c.affiliate_url || rs.affiliate_url || rs.website,
      affiliate_link: c.affiliate_url || rs.affiliate_url || rs.website,
      affiliateLink: c.affiliate_url || rs.affiliate_url || rs.website,
      image: c.image,
    }));
  });

  // Descending order on homepage:
  // Hides newly added active ad campaigns (DRM Lab, iM8, etc.) from page 1 so competitors cannot see them.
  // Established fallback stores & coupons appear first. Direct store URLs and search continue working 100%.
  const seenSlugs = new Set<string>();
  const initialCombinedStores: Store[] = [];
  for (const st of [...FALLBACK_STORES, ...registryStores]) {
    if (!seenSlugs.has(st.slug.toLowerCase())) {
      seenSlugs.add(st.slug.toLowerCase());
      initialCombinedStores.push(st);
    }
  }
  let stores: Store[] = [...initialCombinedStores].reverse();
  let coupons: Coupon[] = [...FALLBACK_COUPONS, ...registryCoupons].reverse();

  if (apiUrl && apiUrl.startsWith("http") && !apiUrl.includes("localhost")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      const [couponsRes, storesRes] = await Promise.all([
        fetch(`${apiUrl}/api/coupons?populate=store&pagination[pageSize]=200`, { 
          next: { revalidate: 600 },
          signal: controller.signal
        }),
        fetch(`${apiUrl}/api/stores?pagination[pageSize]=200`, { 
          next: { revalidate: 600 },
          signal: controller.signal
        })
      ]);
      clearTimeout(timeoutId);

      if (couponsRes.ok && storesRes.ok) {
        const couponsData = await couponsRes.json();
        const storesData = await storesRes.json();

        if (Array.isArray(couponsData.data) && couponsData.data.length > 0) {
          const strapiCoupons: Coupon[] = couponsData.data.map((c: any) => ({
            id: c.id,
            code: c.code,
            discount: c.discount,
            description: c.description,
            is_verified: !!c.is_verified,
            expiry_date: c.expiry_date,
            affiliate_url: c.affiliate_url || "",
            store: c.store ? {
              id: c.store.id,
              name: c.store.name,
              slug: c.store.slug,
              logo: c.store.logo?.url ? `${apiUrl}${c.store.logo.url}` : getLogoUrl(c.store.slug),
              website: c.store.website
            } : "Unknown"
          }));
          coupons = [...FALLBACK_COUPONS, ...strapiCoupons, ...registryCoupons].reverse();
        }

        if (Array.isArray(storesData.data) && storesData.data.length > 0) {
          const strapiStores: Store[] = storesData.data.map((s: any) => ({
            id: s.id,
            name: s.name,
            slug: s.slug,
            logo: s.logo?.url ? `${apiUrl}${s.logo.url}` : getLogoUrl(s.slug),
            website: s.website
          }));
          const mergedSeen = new Set<string>();
          const mergedStores: Store[] = [];
          for (const st of [...FALLBACK_STORES, ...strapiStores, ...registryStores]) {
            if (!mergedSeen.has(st.slug.toLowerCase())) {
              mergedSeen.add(st.slug.toLowerCase());
              mergedStores.push(st);
            }
          }
          stores = [...mergedStores].reverse();
        }
      }
    } catch (err) {
      // Gracefully silent on Strapi timeout, uses static dataset immediately
    }
  }

  return (
    <main>
      <HomeClient initialCoupons={coupons} initialStores={stores} />
    </main>
  );
}
