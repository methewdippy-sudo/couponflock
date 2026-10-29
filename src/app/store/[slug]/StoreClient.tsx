"use client";

import React, { useState, useEffect } from "react";
import storeStyles from "./StoreClient.module.css";
import CopyModal from "../../../components/CopyModal";
import { Coupon, Store } from "../../../components/CouponCard";

interface StoreClientProps {
  store: Store;
  coupons: Coupon[];
}

function sanitizeCodeText(text: string, code?: string): string {
  if (!text || !code || code === "DEAL") return text;
  try {
    const escaped = code.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\export default function StoreClient({ store, coupons }: StoreClientProps) {");
    const regex = new RegExp(`\\b${escaped}\\b`, "gi");
    return text.replace(regex, "••••••••");
  } catch {
    return text;
  }
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

    const targetUrl =
      coupon.affiliate_url ||
      (store as any).affiliate_url ||
      (store as any).affiliateLink ||
      store.website ||
      "https://www.google.com";

    // 1. Instant Clipboard Copy (for codes)
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
    } else {
      setCopiedId(coupon.id);
      setTimeout(() => setCopiedId(null), 3000);
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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>All Stores</span>
        </a>
      </div>

      {/* CouponFlock Verified Store Banner */}
      <section className={storeStyles.storeHeader}>
        <div className={storeStyles.brandInfo}>
          {bannerLogo ? (
            <img
              src={bannerLogo}
              alt={`${store.name} Logo`}
              width={360} height={136}
              className={storeStyles.storeLogo}
              onError={() => setBannerLogoError(true)}
            />
          ) : (
            <div className={storeStyles.fallbackLogo}>{store.name.charAt(0).toUpperCase()}</div>
          )}
          <div>
            <h1 className={storeStyles.storeTitle}>{store.name} Coupons &amp; Verified Promo Codes</h1>
            <p className={storeStyles.storeSubtitle}>
              Hand-tested and verified savings offers for {store.name}. Guaranteed active today.
            </p>
          </div>
        </div>

        <div className={storeStyles.headerTrustBadge}>
          <div className={storeStyles.trustPill}>
            <span className={storeStyles.pulseDot}></span> Verified Active Today
          </div>
          <span className={storeStyles.guaranteeText}>CouponFlock Partner</span>
        </div>
      </section>

      {/* CouponFlock Voucher Tickets Stack */}
      <section className={storeStyles.cardsList}>
        {coupons.map((coupon, idx) => {
          const isDirectDeal = !coupon.code || coupon.code === "DEAL";
          const discountParts = (coupon.discount || "20% OFF").trim().split(" ");
          const discountVal = discountParts[0] || "20%";
          const discountSub = discountParts.slice(1).join(" ") || "OFF";
          const isCopied = copiedId === coupon.id;

          return (
            <div
              key={coupon.id}
              className={`${storeStyles.voucherTicket} ${idx === 0 ? storeStyles.primaryTicket : ""}`}
              onClick={(e) => handleAction(e, coupon)}
            >
              {/* ZONE 1: Value Badge */}
              <div className={storeStyles.valueZone}>
                <span className={storeStyles.notchTop}></span>
                <span className={storeStyles.notchBottom}></span>
                <div>
                  <div className={storeStyles.discountFigure}>{discountVal}</div>
                  <div className={storeStyles.discountSub}>{discountSub}</div>
                </div>
                <span className={storeStyles.valueTagPill}>
                  {isDirectDeal ? "Direct Deal" : "Promo Code"}
                </span>
              </div>

              {/* ZONE 2: Content Details */}
              <div className={storeStyles.contentZone}>
                <div className={storeStyles.statusRow}>
                  {idx === 0 && (
                    <span className={storeStyles.staffPickBadge}>★ Staff Pick</span>
                  )}
                  <span className={storeStyles.verifiedBadge}>✓ Tested Active Today</span>
                </div>

                <h3 className={storeStyles.ticketTitle}>
                  {sanitizeCodeText(coupon.title || `${coupon.discount} at ${store.name}`, coupon.code)}
                </h3>
                <p className={storeStyles.ticketDesc}>{sanitizeCodeText(coupon.description, coupon.code)}</p>

                <div className={storeStyles.ticketMeta}>
                  <span className={storeStyles.metaItem}>✓ Direct Checkout Guarantee</span>
                  <span>•</span>
                  <span className={storeStyles.metaItem}>Official Verified Offer</span>
                </div>
              </div>

              {/* ZONE 3: Action Area — ALL CODES HIDDEN/MASKED */}
              <div className={storeStyles.actionZone}>
                {!isDirectDeal ? (
                  <div className={storeStyles.maskedCodeBox}>
                    <span className={storeStyles.maskedLock}>🔒 CODE</span>
                    <span className={storeStyles.maskedDots}>••••••••</span>
                  </div>
                ) : (
                  <div className={storeStyles.directDealBox}>
                    Direct Store Discount ✓
                  </div>
                )}

                <button
                  type="button"
                  onClick={(e) => handleAction(e, coupon)}
                  className={`${storeStyles.ctaButton} ${isDirectDeal ? storeStyles.ctaDealBtn : storeStyles.ctaCodeBtn}`}
                >
                  {!isDirectDeal ? (
                    <>
                      <span>{isCopied ? "Code Copied! ✓" : "Get Code"}</span>
                      <span className={storeStyles.btnArrow}>→</span>
                    </>
                  ) : (
                    <>
                      <span>{isCopied ? "Opening Offer..." : "Get Deal"}</span>
                      <span className={storeStyles.btnArrow}>→</span>
                    </>
                  )}
                </button>

                <span className={storeStyles.actionNote}>
                  {!isDirectDeal ? "Reveals code & opens site" : "Activates deal & opens site"}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* CouponFlock Authority Trust Banner */}
      <section className={storeStyles.trustStrip}>
        <div className={storeStyles.trustText}>
          <strong>CouponFlock Buyer Guarantee:</strong> All coupon codes and promotional offers are hand-verified daily by our savings specialists. Clicking any deal automatically applies savings and securely redirects you to the official {store.name} checkout.
        </div>
        <div className={storeStyles.trustShield}>
          <span>🛡️ Verified Savings Shield</span>
        </div>
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
