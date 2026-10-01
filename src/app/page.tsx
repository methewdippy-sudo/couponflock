import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../lib/fallbackData";
import { STORE_REGISTRY } from "../lib/storeRegistry";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const seenSlugs = new Set<string>();
  const stores: Store[] = [];
  const coupons: Coupon[] = [];

  // 1. First Priority: Add all active registered stores (SCHEELS, Zendure, Desktronic, DC House, etc.)
  for (const reg of STORE_REGISTRY) {
    const slug = (reg.slug || "").toLowerCase();
    if (!seenSlugs.has(slug)) {
      seenSlugs.add(slug);
      const storeObj: Store = {
        id: reg.id,
        name: reg.name,
        slug: reg.slug,
        logo: reg.logo,
        website: reg.website,
        affiliate_url: reg.affiliate_url,
        description: reg.description
      };
      stores.push(storeObj);

      if (reg.coupons) {
        for (const c of reg.coupons) {
          coupons.push({
            ...c,
            store: storeObj,
            storeSlug: reg.slug
          });
        }
      }
    }
  }

  // 2. Second Priority: Add fallback brand stores (Nike, Amazon, Walmart, Target, etc.)
  for (const st of FALLBACK_STORES) {
    const slug = (st.slug || "").toLowerCase();
    if (!seenSlugs.has(slug)) {
      seenSlugs.add(slug);
      stores.push(st);
    }
  }

  // 3. Add top fallback coupons
  for (const c of FALLBACK_COUPONS) {
    if (coupons.length >= 100) break;
    coupons.push(c);
  }

  return (
    <main>
      <HomeClient initialCoupons={coupons} initialStores={stores} />
    </main>
  );
}
