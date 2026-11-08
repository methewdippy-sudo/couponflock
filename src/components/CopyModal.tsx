"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./CopyModal.module.css";
import { Coupon, Store } from "./CouponCard";

interface CopyModalProps {
  coupon: Coupon | null;
  onClose: () => void;
}

export const CopyModal: React.FC<CopyModalProps> = ({ coupon, onClose }) => {
  const [copied, setCopied] = useState(true);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!coupon) return;
    setCopied(true);
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

  const modalContent = (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalCard} ref={modalRef} role="dialog" aria-modal="true">
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className={styles.brandHeader}>
          {storeLogo ? (
            <div className={styles.logoBox}>
              <img src={storeLogo} alt={storeName} className={styles.logoImg} />
            </div>
          ) : (
            <div className={styles.logoFallback}>{storeName.charAt(0).toUpperCase()}</div>
          )}

          <span className={styles.statusPill}>
            <span className={styles.pulseDot}></span> Verified &amp; Active Today
          </span>

          <div className={styles.discountHeadline}>
            {discount || "20% OFF"} at {storeName}
          </div>
          <h2 className={styles.offerTitle}>
            {title || `${discount} Verified Discount at ${storeName}`}
          </h2>
          {description && <p className={styles.offerDesc}>{description}</p>}
        </div>

        {!isDirectDeal ? (
          <div className={styles.codeVault} onClick={handleCopy}>
            <span className={styles.codeLabel}>Tap Below to Copy Promo Code:</span>
            <div className={styles.codeInnerRow}>
              <span className={styles.codeString}>{code}</span>
              <button
                type="button"
                onClick={handleCopy}
                className={`${styles.copyBtn} ${copied ? styles.copyBtnCopied : ""}`}
              >
                {copied ? "✓ Copied!" : "Copy Code"}
              </button>
            </div>
            <div className={styles.copiedToast}>
              {copied
                ? `✓ Code copied! Paste it at ${storeName} checkout.`
                : `Click "Copy Code" and apply at ${storeName} checkout.`}
            </div>
          </div>
        ) : (
          <div className={styles.directBox}>
            <div className={styles.directCheck}>✓</div>
            <div>
              <div className={styles.directTitle}>Direct Discount Activated</div>
              <div className={styles.directSub}>
                No code needed — your special pricing is unlocked at {storeName} checkout.
              </div>
            </div>
          </div>
        )}

        <a
          href={finalStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.checkoutBtn}
        >
          <span>Continue to {storeName}</span>
          <span>→</span>
        </a>

        <div className={styles.footerNote}>
          🔒 100% Free • Direct Official Store Redirect
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CopyModal;
