"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./CopyModal.module.css";
import { Coupon, Store } from "./CouponCard";
import { trackEvent } from "../lib/telemetry";

interface CopyModalProps {
  coupon: Coupon | null;
  onClose: () => void;
}

export const CopyModal: React.FC<CopyModalProps> = ({ coupon, onClose }) => {
  const [copied, setCopied] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [sampleCart, setSampleCart] = useState<number>(100);
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!coupon) return;
    setCopied(true);
    setVoted(null);
    const timer = setTimeout(() => setCopied(false), 3000);
    return () => clearTimeout(timer);
  }, [coupon]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!mounted || !coupon) return null;

  const { store, discount, code, description, title } = coupon;
  const isDirectDeal =
    !code || code === "" || code.trim() === "" || code === "DEAL" || code === "DIRECT";

  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject
    ? (store as Store).name
    : coupon.storeName || (typeof store === "string" ? store : "Store");
  const storeSlug = isStoreObject ? (store as Store).slug : "";
  const storeLogo = isStoreObject ? (store as Store).logo : undefined;

  const rawStoreUrl =
    coupon.affiliate_link ||
    coupon.affiliate_url ||
    (isStoreObject && (store as Store).website
      ? (store as Store).website
      : `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`);

  let finalStoreUrl = rawStoreUrl;
  if (typeof window !== "undefined" && rawStoreUrl) {
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
      finalStoreUrl = urlObj.toString();
    } catch {
      finalStoreUrl = rawStoreUrl;
    }
  }

  // Estimate savings from discount string
  const percentMatch = (discount || "").match(/(\d+)\s*%/);
  const dollarMatch = (discount || "").match(/\$\s*(\d+)/);
  const pct = percentMatch ? parseInt(percentMatch[1], 10) : 20;
  const estimatedSavings = dollarMatch
    ? Math.min(sampleCart * 0.5, parseInt(dollarMatch[1], 10))
    : Math.round((sampleCart * pct) / 100);

  const handleCopy = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!code || isDirectDeal) return;

    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }

    if (typeof document !== "undefined") {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = code;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      } catch {}
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleVote = (choice: "yes" | "no") => {
    setVoted(choice);
    trackEvent({
      site: "CouponFlock",
      eventType: "feedback_vote",
      storeSlug,
      storeName,
      couponId: String(coupon.id),
      couponCode: code || "DEAL",
    });
  };

  const modalContent = (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.ticketModal} ref={modalRef} role="dialog" aria-modal="true">
        {/* LEFT STUB: Emerald Perforated Ticket Stub + Savings Calculator */}
        <div className={styles.leftStub}>
          <span className={styles.notchTop}></span>
          <span className={styles.notchBottom}></span>

          <div className={styles.stubHeader}>
            <span className={styles.stubBadge}>
              <span className={styles.pulseDot}></span> Verified Ticket
            </span>

            {storeLogo ? (
              <div className={styles.logoBox}>
                <img src={storeLogo} alt={storeName} className={styles.logoImg} />
              </div>
            ) : (
              <div className={styles.logoFallback}>{storeName.charAt(0).toUpperCase()}</div>
            )}

            <div className={styles.stubDiscount}>{discount || "20% OFF"}</div>
            <div className={styles.stubStoreName}>at {storeName}</div>
          </div>

          {/* Interactive Cart Savings Estimator */}
          <div className={styles.estimatorBox}>
            <div className={styles.estimatorTitle}>Quick Savings Estimator</div>
            <div className={styles.cartPills}>
              {[50, 100, 250].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setSampleCart(amt)}
                  className={`${styles.cartPill} ${sampleCart === amt ? styles.cartPillActive : ""}`}
                >
                  ${amt} Cart
                </button>
              ))}
            </div>
            <div className={styles.estimatorResult}>
              <span>Est. Savings:</span>
              <span className={styles.estimatorSaved}>-${estimatedSavings.toFixed(0)} USD</span>
            </div>
          </div>

          <div className={styles.stubFooter}>✓ Tested Active Today • 100% Free</div>
        </div>

        {/* RIGHT ZONE: Perforated Code Reveal & Actions */}
        <div className={styles.rightZone}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className={styles.offerHeader}>
            <span className={styles.verifiedTag}>✓ Hand-Tested Checkout Voucher</span>
            <h2 className={styles.offerTitle}>
              {title || `${discount} Verified Discount at ${storeName}`}
            </h2>
            <p className={styles.offerDesc}>{description}</p>
          </div>

          {!isDirectDeal ? (
            <div className={styles.perforatedCodeBox}>
              <div className={styles.codeMeta}>
                <span className={styles.scissorLabel}>✂️ Tear-Off Promo Code:</span>
                <span className={styles.codeValue}>{code}</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className={`${styles.peelCopyBtn} ${copied ? styles.peelCopyBtnCopied : ""}`}
              >
                {copied ? "✓ Code Copied!" : "Copy Code"}
              </button>
            </div>
          ) : (
            <div className={styles.directDealBanner}>
              <div className={styles.directIcon}>✓</div>
              <div>
                <div className={styles.directTextTitle}>Instant Store Discount Activated</div>
                <div className={styles.directTextSub}>
                  No promo code needed — your special pricing is unlocked automatically at {storeName}.
                </div>
              </div>
            </div>
          )}

          <div className={styles.bottomSection}>
            <div className={styles.feedbackRow}>
              <span>Did this {storeName} voucher work for you?</span>
              {voted ? (
                <span className={styles.voteThanks}>✓ Thanks for verifying!</span>
              ) : (
                <div className={styles.voteBtns}>
                  <button type="button" onClick={() => handleVote("yes")} className={styles.voteBtn}>
                    👍 Yes
                  </button>
                  <button type="button" onClick={() => handleVote("no")} className={styles.voteBtn}>
                    👎 No
                  </button>
                </div>
              )}
            </div>

            <a
              href={finalStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.checkoutCta}
            >
              <span>Go to Official {storeName} Store</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CopyModal;
