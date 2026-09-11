import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../lib/fallbackData";

export const revalidate = 600; // Cache page and revalidate in background every 10 minutes

export default async function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  
  let coupons: Coupon[] = FALLBACK_COUPONS;
  let stores: Store[] = FALLBACK_STORES;

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
          coupons = couponsData.data.map((c: any) => ({
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
        }

        if (Array.isArray(storesData.data) && storesData.data.length > 0) {
          stores = storesData.data.map((s: any) => ({
            id: s.id,
            name: s.name,
            slug: s.slug,
            logo: s.logo?.url ? `${apiUrl}${s.logo.url}` : getLogoUrl(s.slug),
            website: s.website
          }));
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
