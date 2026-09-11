import React from "react";
import { Metadata } from "next";
import StoreClient from "./StoreClient";
import { Coupon, Store } from "../../../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../../../lib/fallbackData";
import { getRegisteredStore, getAllRegisteredSlugs } from "../../../lib/storeRegistry";

export const revalidate = 60; // Revalidate every 60 seconds

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
  const registered = getRegisteredStore(slug);
  if (registered) {
    const { store } = registered;
    const logoUrlStr = store.logo || "";
    const absoluteLogoUrl = logoUrlStr.startsWith("http") ? logoUrlStr : `https://www.couponflock.com${logoUrlStr}`;

    return {
      title: `${store.name} Promo Codes & Verified Discount Codes | CouponFlock`,
      description: `Save money today at ${store.name} with active coupon codes, verified discount offers, and free shipping deals.`,
      alternates: {
        canonical: `https://www.couponflock.com/store/${slug}`,
      },
      openGraph: {
        title: `${store.name} Promo Codes & Verified Discount Codes | CouponFlock`,
        description: `Save money today at ${store.name} with active coupon codes, verified discount offers, and free shipping deals.`,
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
        title: `${store.name} Promo Codes & Verified Discount Codes | CouponFlock`,
        description: `Save money today at ${store.name} with active coupon codes, verified discount offers, and free shipping deals.`,
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
