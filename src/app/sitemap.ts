import { MetadataRoute } from "next";
import { FALLBACK_STORES, FALLBACK_POSTS } from "../lib/fallbackData";

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

  // All 493 store pages
  const storePages = (FALLBACK_STORES || []).map((s) => ({
    url: `${baseUrl}/store/${s.slug}`,
    lastModified: staticDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // All 284 blog guide pages
  const blogPages = (FALLBACK_POSTS || []).map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: staticDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...storePages, ...blogPages];
}
