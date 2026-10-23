import { MetadataRoute } from "next";
import { FALLBACK_STORES, FALLBACK_POSTS } from "../lib/fallbackData";
import { getAllRegisteredSlugs } from "../lib/storeRegistry";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.couponflock.com";
  const staticDate = new Date("2026-08-15T00:00:00Z");

  // Core static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: staticDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/budget-tracker`,
      lastModified: staticDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/notion-second-brain`,
      lastModified: staticDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/giveaway`,
      lastModified: staticDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // STEALTH SHIELD: Sensitive campaign stores from STORE_REGISTRY are 100% EXCLUDED from sitemap.xml!
  // Competitors scraping sitemap.xml will only see harmless generic public fallback stores.
  const fallbackSlugs = (FALLBACK_STORES || [])
    .map((s) => s.slug)
    .filter(slug => !SENSITIVE_BLACKLIST.has((slug || "").toLowerCase()));
  const combinedSlugs = Array.from(new Set(fallbackSlugs));

  // All store pages
  const storePages = combinedSlugs.map((slug) => ({
    url: `${baseUrl}/store/${slug}`,
    lastModified: staticDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // All blog guide pages (excluding sensitive competitor stores)
  const blogPages = (FALLBACK_POSTS || [])
    .filter(p => !Array.from(SENSITIVE_BLACKLIST).some(b => (p.slug || "").toLowerCase().includes(b)))
    .map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: staticDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...storePages, ...blogPages];
}
