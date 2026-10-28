"use client";

import React, { useState, useEffect } from "react";
import storeStyles from "./StoreClient.module.css";
import CopyModal from "../../../components/CopyModal";
import { Coupon, Store } from "../../../components/CouponCard";

interface StoreClientProps {
  store: Store;
  coupons: Coupon[];
}

export default function StoreClient({ store, coupons }: StoreClientProps) {
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [copiedId, setCopiedId] = useState<string | number | null>(null);
  const [bannerLogoError, setBannerLogoError] = useState(false);

  // Auto-open modal if URL has ?coupon= param (from tabunder flow)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const couponId = params.get("coupon");
      if (couponId) {
        const found = coupons.find((c) => String(c.id) === couponId);
        if (found) {
          setActiveCoupon(found);
        }
      }
    }
  }, [coupons]);

  const handleAction = (e: React.MouseEvent, coupon: Coupon) => {
    e.preventDefault();
    e.stopPropagation();

    const targetUrl = coupon.affiliate_url || (store as any).affiliate_url || (store as any).affiliateLink || store.website || "https://www.google.com";

    // 1. Instant Clipboard Copy
    if (coupon.code && coupon.code !== "DEAL") {
      if (typeof document !== "undefined") {
        try {
          const textArea = document.createElement("textarea");
          textArea.value = coupon.code;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";
          textArea.style.top = "-9999px";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        } catch {}
      }
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code).catch(() => {});
      }
      setCopiedId(coupon.id);
      setTimeout(() => setCopiedId(null), 4000);
    }

    // 2. Open modal in a NEW TAB (keeps user on our page)
    try {
      if (typeof window !== "undefined") {
        const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
        window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.warn("Failed to open popup tab:", err);
    }

    // 3. TABUNDER: Redirect CURRENT tab to official merchant store
    if (typeof window !== "undefined") {
      window.location.href = targetUrl;
    }
  };

  const bannerLogo = !bannerLogoError && store.logo ? store.logo : null;

  return (
    <div className={storeStyles.pageContainer}>
      {/* Back to All Stores */}
      <div className={storeStyles.backLinkContainer}>
        <a href="/" className={storeStyles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to All Stores</span>
        </a>
      </div>

      {/* Focused Store Header (Exact PerkVue Standard) */}
      <section className={storeStyles.storeHeader}>
        <div className={storeStyles.brandInfo}>
          {bannerLogo ? (
            <img
              src={bannerLogo}
              alt={`${store.name} Logo`}
              width={200} height={96}
              className={storeStyles.storeLogo}
              onError={() => setBannerLogoError(true)}
            />
          ) : (
            <div className={storeStyles.fallbackLogo}>{store.name.charAt(0).toUpperCase()}</div>
          )}
          <div>
            <h1 className={storeStyles.storeTitle}>{store.name} Exclusive Offers</h1>
            <p className={storeStyles.storeSubtitle}>
              Direct verified savings &amp; exclusive partner discounts. Tested active today.
            </p>
          </div>
        </div>

        <div className={storeStyles.trustPill}>
          <span className={storeStyles.pulseDot}></span> Tested Active Today
        </div>
      </section>

      {/* 2-Card Focus Grid (Above-the-fold) */}
      <section className={storeStyles.cardsGrid}>
        {coupons.map((coupon, idx) => {
          const isDirectDeal = !coupon.code || coupon.code === "DEAL";
          const discountParts = (coupon.discount || "20% OFF").trim().split(" ");
          const graphicMain = discountParts[0] || "20%";
          const graphicSub = discountParts.slice(1).join(" ") || "OFF";
          const isCopied = copiedId === coupon.id;

          return (
            <div
              key={coupon.id}
              className={`${storeStyles.cardContainer} ${idx === 0 ? storeStyles.primaryCard : ""}`}
              onClick={(e) => handleAction(e, coupon)}
            >
              {/* Header */}
              <div className={storeStyles.cardHeader}>
                <span className={storeStyles.verifiedPill}>
                  <span className={storeStyles.pulsingDot}></span> Verified Active Today
                </span>
                <span className={storeStyles.badge3dExtruded}>
                  {isDirectDeal ? "DIRECT REWARD" : "100% SUCCESS"}
                </span>
              </div>

              {/* Main Body with 3D Graphic */}
              <div className={storeStyles.cardBody}>
                <div className={storeStyles.offerRow}>
                  <div className={isDirectDeal ? storeStyles.valueGraphicEmerald : storeStyles.valueGraphicNavy}>
                    <span className={storeStyles.graphicMain}>{graphicMain}</span>
                    <span className={storeStyles.graphicSub}>{graphicSub}</span>
                  </div>
                  <div className={storeStyles.offerText}>
                    <h3 className={storeStyles.cardTitle}>{coupon.title || `${coupon.discount} at ${store.name}`}</h3>
                    <p className={storeStyles.cardDesc}>{coupon.description}</p>
                  </div>
                </div>

                {/* 3D Code Box */}
                {!isDirectDeal ? (
                  <div className={storeStyles.codeBox3d}>
                    <div className={storeStyles.codeLabelWrapper}>
                      <span className={storeStyles.codeLabel}>Promo Code:</span>
                      <span className={storeStyles.codeBadge}>{coupon.code && coupon.code.toLowerCase() === "methew" ? coupon.code : "••••••••"}</span>
                    </div>
                    <span className={storeStyles.autoCopiedPill}>
                      {isCopied ? "Copied! ✓" : (coupon.code && coupon.code.toLowerCase() === "methew" ? "Exclusive Code" : "Click to Reveal")}
                    </span>
                  </div>
                ) : (
                  <div className={storeStyles.dealFeatureRow}>
                    <span className={storeStyles.dealFeatureText}>Auto-applied at checkout</span>
                    <span className={storeStyles.dealFeatureBadge}>No Code Needed ✓</span>
                  </div>
                )}
              </div>

              {/* Push Button */}
              <div className={storeStyles.cardFooter}>
                <button
                  type="button"
                  onClick={(e) => handleAction(e, coupon)}
                  className={`${storeStyles.ctaButton} ${isDirectDeal ? storeStyles.btn3dEmerald : storeStyles.btn3dNavy}`}
                >
                  {!isDirectDeal ? (
                    <>
                      <span>{isCopied ? "Code Copied! ✓" : "Get Code"}</span>
                      <span className={storeStyles.arrowIcon}>→</span>
                    </>
                  ) : (
                    <>
                      <span>{isCopied ? "Opening Offer..." : "Get Deal"}</span>
                      <span className={storeStyles.arrowIcon}>→</span>
                    </>
                  )}
                </button>

                <div className={storeStyles.trustFooter}>
                  <span>✓ Official Checkout Guarantee</span>
                  <span>•</span>
                  <span>Verified Working Today</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Clean Trust Strip */}
      <section className={storeStyles.trustNote}>
        <div className={storeStyles.trustNoteText}>
          <strong>PromoRegistry Direct Checkout Standard:</strong> Clicking any offer automatically copies your code and opens the official {store.name} checkout.
        </div>
        <span className={storeStyles.secureBadge}>🔒 Direct Checkout Verified</span>
      </section>

      {/* Copy Modal */}
      {activeCoupon && (
        <CopyModal
          coupon={activeCoupon}
          onClose={() => setActiveCoupon(null)}
        />
      )}
    </div>
  );
}
