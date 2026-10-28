"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./CopyModal.module.css";
import { Coupon, Store } from "./CouponCard";

interface CopyModalProps {
  coupon: Coupon;
  onClose: () => void;
}

export const CopyModal: React.FC<CopyModalProps> = ({ coupon, onClose }) => {
  const { store, discount, code, description, title } = coupon;
  const [copied, setCopied] = useState(true);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const isDirectDeal =
    !code || code === "" || code.trim() === "" || code === "DEAL" || code === "DIRECT";

  // SSR mount check for createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Copied toast timer
  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Extract store info safely
  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject
    ? (store as Store).name
    : (coupon.storeName || (typeof store === "string" ? store : "Store"));
  const storeLogo = isStoreObject ? (store as Store).logo : undefined;

  // Build store URL with affiliate query params
  const rawStoreUrl =
    coupon.affiliate_link ||
    coupon.affiliate_url ||
    (isStoreObject && (store as Store).website
      ? (store as Store).website
      : `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`);
  const [storeUrl, setStoreUrl] = useState<string>(rawStoreUrl);

  useEffect(() => {
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
        setStoreUrl(urlObj.toString());
      } catch {
        setStoreUrl(rawStoreUrl);
      }
    }
  }, [rawStoreUrl]);

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
      <div className={styles.modal} ref={modalRef} role="dialog" aria-modal="true">
        {/* Top Emerald Header */}
        <div className={styles.emeraldBanner}>
          <div className={styles.bannerBadge}>
            <span className={styles.pulseDot}></span>
            <span>CouponFlock Verified Guarantee</span>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          {/* Brand Row */}
          <div className={styles.brandRow}>
            {storeLogo ? (
              <div className={styles.storeLogoBox}>
                <img src={storeLogo} alt={`${storeName} Logo`} className={styles.storeLogoImg} />
              </div>
            ) : (
              <div className={styles.fallbackLogo}>{storeName.charAt(0).toUpperCase()}</div>
            )}
            <div className={styles.brandDetails}>
              <div className={styles.storeName}>
                <span>{storeName}</span>
                <span className={styles.verifiedCheck}>✓ Verified</span>
              </div>
              <span className={styles.discountBadge}>{discount || "Exclusive Offer"}</span>
            </div>
          </div>

          {/* Offer Title & Details */}
          <div>
            <h3 className={styles.offerTitle}>
              {title || `${discount || "Exclusive savings"} at ${storeName}`}
            </h3>
            {description && <p className={styles.offerDesc}>{description}</p>}
          </div>

          {/* Code Vault / Direct Deal Box */}
          {!isDirectDeal ? (
            <div className={styles.codeVaultBox}>
              <div className={styles.codeVaultLeft}>
                <span className={styles.codeVaultLabel}>✂️ Promo Code</span>
                <span className={styles.codeVaultText}>{code}</span>
              </div>
              <button
                type="button"
                className={`${styles.copyPillBtn} ${copied ? styles.copyPillBtnSuccess : ""}`}
                onClick={handleCopy}
              >
                {copied ? "COPIED! ✓" : "COPY CODE"}
              </button>
            </div>
          ) : (
            <div className={styles.directDealVault}>
              <div className={styles.directDealIcon}>✓</div>
              <div className={styles.directDealInfo}>
                <span className={styles.directDealHeading}>Direct Store Deal Activated</span>
                <span className={styles.directDealSubtext}>
                  No code required. Your verified discount is applied automatically at checkout!
                </span>
              </div>
            </div>
          )}

          {/* 3-Step Instruction Guide */}
          <div className={styles.stepsContainer}>
            <div className={styles.stepItem}>
              <span className={`${styles.stepNum} ${copied ? styles.stepNumCheck : ""}`}>
                {copied ? "✓" : "1"}
              </span>
              <span>{!isDirectDeal ? "Promo code copied to your clipboard" : "Special discount link activated"}</span>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNum}>2</span>
              <span>Official {storeName} website opened in your other tab</span>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNum}>3</span>
              <span>{!isDirectDeal ? "Paste code at checkout to claim savings" : "Enjoy instant price reduction at checkout"}</span>
            </div>
          </div>

          {/* Notice & CTA Button */}
          <p className={styles.redirectNotice}>
            We opened the official <strong>{storeName}</strong> checkout in your other tab. If it did not open, click below:
          </p>

          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryShopBtn}
          >
            <span>Continue to {storeName} Checkout</span>
            <span className={styles.btnArrow}>→</span>
          </a>

          {/* Trust Footer */}
          <div className={styles.trustFooter}>
            <span>🔒 Safe &amp; Official Direct Merchant Redirect • Free Service</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
};

export default CopyModal;
