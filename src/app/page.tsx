import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";
import { FALLBACK_STORES, FALLBACK_COUPONS } from "../lib/fallbackData";
import { STORE_REGISTRY } from "../lib/storeRegistry";

export const revalidate = 60; // Revalidate every 60 seconds

// Top premier household brands to feature prominently on the homepage (Nike, Amazon, Adidas, Apple, etc.)
const TOP_FEATURED_SLUGS = [
  "nike",
  "adidas",
  "amazon",
  "walmart",
  "target",
  "apple",
  "samsung",
  "puma",
  "ebay",
  "starbucks",
  "steam",
  "aliexpress",
  "adobe",
  "canva",
  "nordvpn",
  "lenovo",
  "fiverr",
  "bookingcom",
  "hostinger",
  "udemy"
];

export default async function HomePage() {
  const seenSlugs = new Set<string>();
  const topStores: Store[] = [];
  const middleStores: Store[] = [];
  const endStores: Store[] = [];

  const topCoupons: Coupon[] = [];
  const middleCoupons: Coupon[] = [];
  const endCoupons: Coupon[] = [];

  // Registered store slugs (our affiliate campaign stores to push to the very end)
  const registeredSlugs = new Set(STORE_REGISTRY.map(r => (r.slug || "").toLowerCase()));

  // 1. Gather Top Priority Brands (Nike, Adidas, Amazon, Walmart, Apple, etc.)
  for (const slug of TOP_FEATURED_SLUGS) {
    const found = FALLBACK_STORES.find(s => (s.slug || "").toLowerCase() === slug);
    if (found && !seenSlugs.has(slug)) {
      seenSlugs.add(slug);
      topStores.push(found);
    }
  }

  // 2. Gather Other Fallback Stores (excluding registered affiliate stores and already seen top stores)
  for (const st of FALLBACK_STORES) {
    const slug = (st.slug || "").toLowerCase();
    if (!seenSlugs.has(slug) && !registeredSlugs.has(slug)) {
      seenSlugs.add(slug);
      middleStores.push(st);
    }
  }

  // 3. Put Registered Campaign Stores (Scheels, Zendure, Desktronic, AlgoLaser, etc.) at the VERY END
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
      endStores.push(storeObj);

      if (reg.coupons) {
        for (const c of reg.coupons) {
          endCoupons.push({
            ...c,
            store: storeObj,
            storeSlug: reg.slug
          });
        }
      }
    }
  }

  // Combine stores: Top authority brands FIRST -> other fallback stores -> Registered campaign stores LAST
  const stores: Store[] = [...topStores, ...middleStores, ...endStores];

  // Separate coupons: Top authority coupons FIRST -> other fallback coupons -> Registered campaign coupons LAST
  const topSlugSet = new Set(TOP_FEATURED_SLUGS);
  for (const c of FALLBACK_COUPONS) {
    const storeName = typeof c.store === "object" && c.store !== null ? (c.store as Store).slug : String(c.store || "").toLowerCase().replace(/\s+/g, "-");
    if (topSlugSet.has(storeName)) {
      topCoupons.push(c);
    } else {
      middleCoupons.push(c);
    }
  }

  const coupons: Coupon[] = [...topCoupons, ...middleCoupons, ...endCoupons];

  return (
    <main>
      <HomeClient initialCoupons={coupons} initialStores={stores} />
    </main>
  );
}
