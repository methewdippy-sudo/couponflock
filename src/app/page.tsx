import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../lib/fallbackData";

export const revalidate = 600; // Cache page and revalidate in background every 10 minutes

// STRICT HOMEPAGE EXCLUSION LIST:
// All active ad campaigns, sensitive stores, and stores worked on must NEVER appear on the homepage.
// Dedicated store landing pages (/store/[slug]) remain 100% active and unaffected for Google Ads.
const EXCLUDED_HOMEPAGE_SLUGS = new Set([
  // Core registry / active Google Ads stores:
  "thedrmlab", "the-drm-lab", "drm-lab", "drmlab",
  "im8health", "im8-health", "im8", "im8health-us", "im8-health-us",
  "bouquets-by-post", "bouquetsbypost", "bouquets-by-post-uk", "bouquetsbypost-com",
  "seed-needs", "seedneeds", "seed-needs-us",
  "transparent-labs", "transparentlabs", "transparent-labs-us",
  "garten-und-freizeit", "garten-und-freizeit-de",
  "dreamcloud", "dreamcloud-us", "dreamcloud-uk", "dreamcloudsleep",
  "qidi-us", "qidi-de", "qidi-uk", "qidi-ca", "qidi-au", "qidi-tech", "qidi",
  "mellow-sleep", "mellow", "mellowsleep",
  "comfrt", "comfrt-clothing",
  "dc-house", "dc-house-power", "dchouse",
  "filter-baby", "filterbaby",
  // Other worked / custom affiliate brands:
  "everblog",
  "maple-prime", "mapleprime",
  "orolay",
  "jsaux",
  "amerlife",
  "aeke", "aeke-us", "aeke-k1",
  "parasol-co", "parasolco",
  "uflower",
]);

export default async function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  
  // Filter fallback stores: strictly off-topic, generic public brands (Amazon, Nike, Adidas, Walmart, Target, etc.)
  const seenSlugs = new Set<string>();
  const stores: Store[] = [];

  for (const st of FALLBACK_STORES) {
    const slug = (st.slug || "").toLowerCase();
    if (!EXCLUDED_HOMEPAGE_SLUGS.has(slug) && !seenSlugs.has(slug)) {
      seenSlugs.add(slug);
      stores.push(st);
    }
  }

  // Filter fallback coupons: strictly for allowed off-topic public brands (top 60 featured deals for instant page load)
  const coupons: Coupon[] = FALLBACK_COUPONS.filter((c) => {
    const isStoreObj = typeof c.store === "object" && c.store !== null;
    const storeSlug = (c as any).storeSlug || (isStoreObj ? (c.store as Store).slug : "") || (typeof c.store === "string" ? c.store.toLowerCase().replace(/\s+/g, "-") : "");
    const cleanSlug = String(storeSlug).toLowerCase();
    return !EXCLUDED_HOMEPAGE_SLUGS.has(cleanSlug);
  }).slice(0, 60);

  return (
    <main>
      <HomeClient initialCoupons={coupons} initialStores={stores} />
    </main>
  );
}
