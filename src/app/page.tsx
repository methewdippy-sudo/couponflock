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

// STRICT STEALTH BLACKLIST: These campaign & competitor stores are completely purged from homepage and search!
const SENSITIVE_BLACKLIST = new Set([
  "qidi", "qidi-us", "qidi-de", "qidi-uk", "qidi-ca", "qidi-au", "qidi-tech",
  "usa-berkey-filters", "berkey",
  "candy-in-bulk", "candy-in-bulk-us",
  "dc-house", "dchouse",
  "im8", "im8-health", "im8health", "im8-health-us",
  "pongbot", "pongbot-us",
  "swa-sabers", "swa-sabers-us",
  "chompshop", "chompshop-us", "chomp-shop",
  "larine", "larine-company", "buy-larine-u"
]);

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
    if (!seenSlugs.has(slug) && !registeredSlugs.has(slug) && !SENSITIVE_BLACKLIST.has(slug)) {
      seenSlugs.add(slug);
      middleStores.push(st);
    }
  }

  // 3. STEALTH MODE: Sensitive campaign stores from STORE_REGISTRY are NEVER exposed on the public homepage!
  // The homepage only contains clean, high-authority generic brands (Nike, Amazon, Walmart, Target, etc.).

  // Combine stores: Top authority brands FIRST -> other clean fallback stores ONLY
  const stores: Store[] = [...topStores, ...middleStores];

  // Separate coupons: Top authority coupons FIRST -> other fallback coupons -> Registered campaign coupons LAST
  const topSlugSet = new Set(TOP_FEATURED_SLUGS);
  for (const c of FALLBACK_COUPONS) {
    const storeName = typeof c.store === "object" && c.store !== null ? (c.store as Store).slug : String(c.store || "").toLowerCase().replace(/\s+/g, "-");
    if (!SENSITIVE_BLACKLIST.has(storeName)) {
      if (topSlugSet.has(storeName)) {
        topCoupons.push(c);
      } else {
        middleCoupons.push(c);
      }
    }
  }

  const coupons: Coupon[] = [...topCoupons, ...middleCoupons];

  return (
    <main>
      <HomeClient initialCoupons={coupons} initialStores={stores} />
    </main>
  );
}
