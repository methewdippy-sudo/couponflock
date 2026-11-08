import React from "react";
import { Metadata } from "next";
import StoreClient from "./StoreClient";
import { Coupon, Store } from "../../../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../../../lib/fallbackData";
import { getRegisteredStore, getAllRegisteredSlugs } from "../../../lib/storeRegistry";

export const dynamic = "force-static"; // Pure static SSG, 0% Vercel ISR quota usage

// Pre-render stores at build time
export async function generateStaticParams() {
  const registeredSlugs = getAllRegisteredSlugs();
  const fallbackSlugs = FALLBACK_STORES.map((s) => s.slug);
  
  const allSlugs = Array.from(new Set([...registeredSlugs, ...fallbackSlugs]));
  return allSlugs.map(slug => ({ slug }));
}

interface StorePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: StorePageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // 1. Check Store Registry first
  const now = new Date();
  const monthYear = now.toLocaleString("en-US", { month: "short", year: "numeric" });
  const registered = getRegisteredStore(slug);
  if (registered) {
    const { store, coupons } = registered;
    const topDiscount = coupons?.[0]?.discount || "20% Off";
    const logoUrlStr = store.logo || "";
    const absoluteLogoUrl = logoUrlStr.startsWith("http") ? logoUrlStr : `https://www.couponflock.com${logoUrlStr}`;
    const seoTitle = `${topDiscount} ${store.name} Coupon Codes & Verified Discount Codes (${monthYear}) | CouponFlock`;
    const seoDesc = `Active ${store.name} discount codes and promo codes verified for ${monthYear}. Claim ${topDiscount} instantly with ${coupons.length} tested ${store.name} coupons & free shipping deals.`;

    return {
      title: seoTitle,
      description: seoDesc,
      keywords: [
        `${store.name.toLowerCase()} discount code`,
        `${store.name.toLowerCase()} coupon code`,
        `${store.name.toLowerCase()} promo code`,
        `${store.name.toLowerCase()} coupons ${now.getFullYear()}`,
      ],
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
        },
      },
      alternates: {
        canonical: `https://www.couponflock.com/store/${slug}`,
      },
      openGraph: {
        title: seoTitle,
        description: seoDesc,
        url: `https://www.couponflock.com/store/${slug}`,
        siteName: "CouponFlock",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: absoluteLogoUrl,
            width: 500,
            height: 500,
            alt: `${store.name} Logo`,
          }
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: seoTitle,
        description: seoDesc,
        images: [absoluteLogoUrl],
      }
    };
  }

  // 2. Fallback store lookup
  const fallbackStore = FALLBACK_STORES.find(s => s.slug.toLowerCase() === slug.toLowerCase());
  const storeName = fallbackStore ? fallbackStore.name : slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const logoUrl = getLogoUrl(slug);
  const logoUrlStr = logoUrl || "";
  const absoluteLogoUrl = logoUrlStr.startsWith("http") ? logoUrlStr : `https://www.couponflock.com${logoUrlStr}`;

  return {
    title: `${storeName} Promo Codes & Discount Codes | CouponFlock`,
    description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
    alternates: {
      canonical: `https://www.couponflock.com/store/${slug}`,
    },
    openGraph: {
      title: `${storeName} Promo Codes & Discount Codes | CouponFlock`,
      description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
      url: `https://www.couponflock.com/store/${slug}`,
      siteName: "CouponFlock",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: absoluteLogoUrl,
          width: 500,
          height: 500,
          alt: `${storeName} Logo`,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${storeName} Promo Codes & Discount Codes | CouponFlock`,
      description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
      images: [absoluteLogoUrl],
    }
  };
}

export default async function StorePage({ params }: StorePageProps) {
  const { slug } = await params;

  // 1. High Priority: Check Official Store Registry
  const registered = getRegisteredStore(slug);
  if (registered) {
    return <StoreClient store={registered.store} coupons={registered.coupons} />;
  }

  // 2. Legacy / Fallback dataset lookup
  let coupons: Coupon[] = [];
  let store: Store | null = null;

  const fallbackStore = FALLBACK_STORES.find(s => s.slug.toLowerCase() === slug.toLowerCase());
  if (fallbackStore) {
    const activeStoreLogo = fallbackStore.logo || getLogoUrl(slug);
    const populatedStore: Store = {
      id: fallbackStore.id,
      name: fallbackStore.name,
      slug: slug,
      logo: activeStoreLogo,
      website: fallbackStore.website
    };
    store = populatedStore;

    coupons = FALLBACK_COUPONS.filter(c => {
      const cSlug = (c as any).storeSlug || (typeof c.store === "object" && c.store !== null ? (c.store as Store).slug : String(c.store || "").toLowerCase().replace(/[\s_]+/g, "-"));
      return cSlug === slug;
    }).map(c => {
      const normalizedAffiliate = c.affiliate_url || (c as any).affiliate_link || (c as any).affiliateLink || (fallbackStore as any).affiliateLink || (fallbackStore as any).affiliate_link || fallbackStore.website;
      return {
        ...c,
        affiliate_url: normalizedAffiliate,
        affiliate_link: normalizedAffiliate,
        affiliateLink: normalizedAffiliate,
        store: populatedStore
      };
    });
  }

  // 3. Fallback Shell
  if (!store) {
    const formattedName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    store = {
      id: slug,
      name: formattedName,
      slug: slug,
      logo: getLogoUrl(slug),
      website: `https://${slug}.com`
    };
  }

  return <StoreClient store={store} coupons={coupons} />;
}
