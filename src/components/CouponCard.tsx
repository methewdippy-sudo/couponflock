"use client";

import React, { useState } from "react";
import styles from "./CouponCard.module.css";
import { getLogoUrl } from "../lib/fallbackData";

export interface StoreProduct {
  id: string;
  name: string;
  badge?: string;
  discount?: string;
  description: string;
  image: string;
  url: string;
}

export interface Store {
  id?: string | number;
  name: string;
  logo?: string;
  slug?: string;
  website?: string;
  products?: StoreProduct[];
  description?: string;
}

export interface Coupon {
  id: string | number;
  code: string;
  discount: string;
  title?: string;
  description: string;
  is_verified: boolean;
  expiry_date: string;
  store: string | Store;
  storeSlug?: string;
  affiliate_url?: string;
  affiliate_link?: string;
  affiliateLink?: string;
  image?: string;
  [key: string]: any;
}

interface CouponCardProps {
  coupon: Coupon;
  onGetCode: (coupon: Coupon) => void;
  isBestDeal?: boolean;
}

/**
 * Extracts clean domain from any URL for Clearbit logo lookup.
 * Handles affiliate redirects by guessing domain from store name.
 */
function extractDomain(url?: string, storeName?: string): string | null {
  if (!url) {
    // Guess domain from store name as last resort
    if (storeName) {
      const clean = storeName.toLowerCase().replace(/[^a-z0-9]/g, "");
      return `${clean}.com`;
    }
    return null;
  }
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    // Skip affiliate redirect domains - use store name instead
    const redirectDomains = ["vert.si", "litl.si", "csl.admitad.com", "fatcoupon.com", "shrsl.com"];
    if (redirectDomains.some(d => hostname.includes(d))) {
      if (storeName) {
        const clean = storeName.toLowerCase().replace(/[^a-z0-9]/g, "");
        return `${clean}.com`;
      }
      return null;
    }
    // For Shopify stores, extract brand name
    if (hostname.endsWith(".myshopify.com")) {
      const brand = hostname.replace(".myshopify.com", "").replace(/3d-?/g, "");
      return `${brand}.com`;
    }
    return hostname;
  } catch {
    return null;
  }
}

export const CouponCard: React.FC<CouponCardProps> = ({ coupon, onGetCode, isBestDeal = false }) => {
  const { store, discount, code, is_verified, title, description, expiry_date } = coupon;
  const [logoError, setLogoError] = useState(false);

  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject ? (store as Store).name : (typeof store === "string" ? store : "Store");
  const storeWebsite = isStoreObject ? (store as Store).website : undefined;
  const rawSlug = (coupon as any).storeSlug || (isStoreObject ? (store as Store).slug : undefined) || (typeof store === "string" ? store.toLowerCase().replace(/[s_]+/g, "-") : undefined);
  const cleanBaseSlug = rawSlug ? String(rawSlug).replace(/-(us|uk|de|ca|fr|nl|es|it|au|nz)$/i, "") : undefined;
  
  // Local logo from /public/logos/
  const localLogo = 
    (isStoreObject && (store as Store).logo ? (store as Store).logo : undefined) ||
    (coupon as any).logo ||
    (rawSlug ? getLogoUrl(rawSlug) : undefined) ||
    (cleanBaseSlug ? getLogoUrl(cleanBaseSlug) : undefined) ||
    (storeName ? getLogoUrl(storeName.toLowerCase().replace(/[s_]+/g, "-")) : undefined) ||
    (storeName ? getLogoUrl(storeName.toLowerCase().replace(/[s_]+/g, "-").replace(/-(us|uk|de|ca|fr|nl|es|it|au|nz)$/i, "")) : undefined);

  // Clearbit logo as fallback for stores without local logos
  const domain = extractDomain(storeWebsite, storeName);
  const clearbitLogo = domain ? `https://logo.clearbit.com/${domain}` : null;
  
  // Final logo: local first, then Clearbit, then null (letter fallback)
  const finalLogo = logoError ? null : (localLogo || clearbitLogo);

  const hasCode = !!code && code.trim() !== "" && code !== "DEAL" && code !== "DIRECT";
  const displayTitle = title || description || discount;
  const displayDesc = description && description !== title ? description : null;

  // Format expiry date cleanly
  const formattedExpiry = React.useMemo(() => {
    if (!expiry_date) return null;
    try {
      const d = new Date(expiry_date);
      const now = new Date();
      if (d.getTime() < now.getTime()) return null;
      return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return null;
    }
  }, [expiry_date]);

  const rawStoreUrl = coupon.affiliate_url || 
                      (coupon as any).affiliate_link || 
                      (coupon as any).affiliateLink || 
                      (isStoreObject ? ((store as any).affiliateLink || (store as any).affiliate_link || (store as any).affiliate_url) : undefined) || 
                      storeWebsite || 
                      `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`;

  const [targetUrl, setTargetUrl] = useState<string>(rawStoreUrl);

  React.useEffect(() => {
    if (typeof window !== "undefined" && rawStoreUrl) {
      const isAffiliate = rawStoreUrl.includes("admitad") || 
                          rawStoreUrl.includes("convert") || 
                          rawStoreUrl.includes("csl") || 
                          rawStoreUrl.includes("bouquetsbypost") || 
                          rawStoreUrl.includes("im8health") || 
                          rawStoreUrl.includes("thedrmlab") || 
                          rawStoreUrl.includes("litl.si") ||
                          rawStoreUrl.includes("fatcoupon") ||
                          rawStoreUrl.includes("/go/");
      if (isAffiliate) {
        try {
          const utmCampaign = sessionStorage.getItem("utm_campaign") || "";
          const utmTerm = sessionStorage.getItem("utm_term") || "";
          const gclid = sessionStorage.getItem("gclid") || "";
          
          const urlObj = rawStoreUrl.startsWith("http")
            ? new URL(rawStoreUrl)
            : new URL(rawStoreUrl, window.location.origin);
          
          if (utmCampaign) urlObj.searchParams.set("subid1", utmCampaign);
          if (utmTerm) urlObj.searchParams.set("subid2", utmTerm);
          if (gclid) urlObj.searchParams.set("subid3", gclid);
          
          setTargetUrl(urlObj.toString());
        } catch {
          setTargetUrl(rawStoreUrl);
        }
      } else {
        setTargetUrl(rawStoreUrl);
      }
    }
  }, [rawStoreUrl]);

  const handleClick = (e: React.MouseEvent) => {
    // 1. Synchronously copy coupon code to user's clipboard
    if (hasCode) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = code;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(textArea);
      } catch {}
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).catch(() => {});
      }
    }

    // 2. Open CopyModal popup on current tab and log analytics
    onGetCode(coupon);

    // Native anchor tag target="_blank" handles opening new tab without popup blocker intervention
  };

  return (
    <a 
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${isBestDeal ? styles.bestDealCard : ""}`}
      onClick={handleClick}
    >
      {/* Left: Product Image or Brand Logo */}
      <div className={styles.logoSection}>
        {coupon.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={coupon.image} 
            alt={displayTitle || storeName} 
            className={styles.productImg} 
            loading="lazy" 
            decoding="async"
            width={140}
            height={100}
          />
        ) : finalLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={finalLogo} 
            alt={storeName} 
            className={styles.logoImg} 
            loading="lazy" 
            decoding="async"
            width={140}
            height={80}
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className={styles.logoFallback}>
            {storeName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Center: Content */}
      <div className={styles.contentSection}>
        {/* Tags row */}
        <div className={styles.tagsRow}>
          {discount && (
            <span className={styles.discountTag}>{discount}</span>
          )}
          {hasCode ? (
            <span className={styles.codeTag}>Code</span>
          ) : (
            <span className={styles.dealTag}>Deal</span>
          )}
          {is_verified && (
            <span className={styles.verifiedTag}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified
            </span>
          )}
          {isBestDeal && (
            <span className={styles.bestTag}>Best Deal</span>
          )}
        </div>

        {/* Title */}
        <h3 className={styles.title}>{displayTitle}</h3>

        {/* Description */}
        {displayDesc && (
          <p className={styles.desc}>{displayDesc}</p>
        )}

        {/* Expiry */}
        {formattedExpiry && (
          <span className={styles.expiry}>Expires {formattedExpiry}</span>
        )}
      </div>

      {/* Right: Action Button */}
      <div className={styles.actionSection}>
        {hasCode ? (
          <div className={styles.codeBtn}>
            <span className={styles.codeBtnLabel}>Get Code</span>
            <span className={styles.codeBtnPreview}>{code.slice(0, 3)}···</span>
          </div>
        ) : (
          <div className={styles.dealBtn}>
            Get Deal
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </div>
        )}
      </div>
    </a>
  );
};

export default CouponCard;
