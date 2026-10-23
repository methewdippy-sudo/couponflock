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

// STRICT STEALTH BLACKLIST: Purges all competitor & campaign keywords from public homepage
const SENSITIVE_KEYWORDS = [
  "qidi", "berkey", "candy-in-bulk", "candy in bulk", "dc-house", "dchouse",
  "im8", "pongbot", "swa-sabers", "swa sabers", "chompshop", "chomp shop", "larine"
];

function isSensitive(str: string): boolean {
  const lower = (str || "").toLowerCase();
  return SENSITIVE_KEYWORDS.some(k => lower.includes(k));
}

export default async function HomePage() {
  const seenSlugs = new Set<string>();
  const topStores: Store[] = [];
  const middleStores: Store[] = [];

  const topCoupons: Coupon[] = [];
  const middleCoupons: Coupon[] = [];

  // Registered store slugs (our private affiliate campaign stores - 100% EXCLUDED from homepage)
  const registeredSlugs = new Set(STORE_REGISTRY.map(r => (r.slug || "").toLowerCase()));

  // 1. Gather Top Priority Brands (Nike, Adidas, Amazon, Walmart, Apple, etc.)
  for (const slug of TOP_FEATURED_SLUGS) {
    const found = FALLBACK_STORES.find(s => (s.slug || "").toLowerCase() === slug);
    if (found && !seenSlugs.has(slug)) {
      seenSlugs.add(slug);
      topStores.push(found);
    }
  }

  // 2. Gather Other Fallback Stores (EXCLUDING all registered affiliate stores, already seen top stores, and any sensitive keywords)
  for (const st of FALLBACK_STORES) {
    const slug = (st.slug || "").toLowerCase();
    const name = (st.name || "").toLowerCase();
    const web = (st.website || "").toLowerCase();
    if (!seenSlugs.has(slug) && !registeredSlugs.has(slug) && !isSensitive(slug) && !isSensitive(name) && !isSensitive(web)) {
      seenSlugs.add(slug);
      middleStores.push(st);
    }
  }

  // Combine stores: Top authority brands FIRST -> other clean fallback stores ONLY
  const stores: Store[] = [...topStores, ...middleStores];

  // Separate coupons: Only clean coupons for safe brands
  const topSlugSet = new Set(TOP_FEATURED_SLUGS);
  for (const c of FALLBACK_COUPONS) {
    const storeSlug = (c.storeSlug || "").toLowerCase();
    const storeName = (typeof c.store === "object" && c.store !== null ? (c.store.slug || "") + " " + (c.store.name || "") : String(c.store || "")).toLowerCase();
    const title = (c.title || "").toLowerCase();
    const desc = (c.description || "").toLowerCase();
    const code = (c.code || "").toLowerCase();
    const url = (c.affiliate_url || "").toLowerCase();

    const fullText = `${storeSlug} ${storeName} ${title} ${desc} ${code} ${url}`;

    if (!isSensitive(fullText)) {
      const topSlug = typeof c.store === "object" && c.store !== null ? (c.store as Store).slug : String(c.store || "").toLowerCase().replace(/\s+/g, "-");
      if (topSlugSet.has(topSlug)) {
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
