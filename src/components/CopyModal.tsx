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
        <div className={styles.emeraldHeader}>
          <div className={styles.headerVaultBadge}>
            <span className={styles.shieldIcon}>🛡️</span>
            <div>
              <span className={styles.vaultTitle}>CouponFlock Verified Vault</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className={styles.livePill}>
              <span className={styles.pulseDot}></span> ACTIVE
            </span>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          {/* Store Brand Row */}
          <div className={styles.storeBrandRow}>
            {storeLogo ? (
              <div className={styles.storeLogoWrapper}>
                <img src={storeLogo} alt={`${storeName} Logo`} className={styles.storeLogoImg} />
              </div>
            ) : (
              <div className={styles.fallbackLogo}>{storeName.charAt(0).toUpperCase()}</div>
            )}
            <div className={styles.brandTextInfo}>
              <div className={styles.storeHeading}>
                <span>{storeName}</span>
                <span className={styles.verifiedCheckBadge}>✓ Verified Partner</span>
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "#64748b" }}>
                Official checkout savings offer
              </p>
            </div>
          </div>

          {/* Hero Savings Card */}
          <div className={styles.savingsHeroCard}>
            <div className={styles.discountBigText}>{discount || "EXCLUSIVE DISCOUNT"}</div>
            <p className={styles.offerSubtitle}>
              {title || description || `${discount} instant discount applied for ${storeName}`}
            </p>
          </div>

          {/* Unique Coupon Voucher Ticket Box */}
          {!isDirectDeal ? (
            <div className={styles.ticketBox}>
              <div className={styles.ticketLeft}>
                <span className={styles.ticketLabel}>✂️ YOUR EXCLUSIVE PROMO CODE:</span>
                <span className={styles.ticketCodeString}>{code}</span>
              </div>
              <button
                type="button"
                className={`${styles.copyCodeBtn} ${copied ? styles.copyCodeBtnCopied : ""}`}
                onClick={handleCopy}
              >
                {copied ? "COPIED TO CLIPBOARD! ✓" : "COPY CODE"}
              </button>
            </div>
          ) : (
            <div className={styles.directDealVault}>
              <div className={styles.directDealCheckIcon}>✓</div>
              <div className={styles.directDealInfo}>
                <span className={styles.directDealTitle}>Direct Deal Activated</span>
                <span className={styles.directDealSubtext}>
                  No code needed. Your special discount link has been activated for checkout!
                </span>
              </div>
            </div>
          )}

          {/* 3-Step Progress Checklist */}
          <div className={styles.progressCard}>
            <div className={styles.progressStep}>
              <span className={`${styles.stepCircle} ${copied ? styles.stepCircleDone : ""}`}>
                {copied ? "✓" : "1"}
              </span>
              <span>
                {!isDirectDeal ? `Promo code "${code}" copied to clipboard` : "Direct discount link activated"}
              </span>
            </div>
            <div className={styles.progressStep}>
              <span className={styles.stepCircle}>2</span>
              <span>Official {storeName} checkout tab opened</span>
            </div>
            <div className={styles.progressStep}>
              <span className={styles.stepCircle}>3</span>
              <span>
                {!isDirectDeal ? "Paste code at checkout to claim your savings" : "Discount will reflect automatically at checkout"}
              </span>
            </div>
          </div>

          {/* Bottom Primary Checkout Button */}
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCheckoutBtn}
          >
            <span>Continue to {storeName} Checkout</span>
            <span className={styles.btnArrow}>→</span>
          </a>

          {/* Trust Guarantee Note */}
          <div className={styles.guaranteeNote}>
            <span>🔒 100% Free Service • Direct Official Merchant Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
};

export default CopyModal;
