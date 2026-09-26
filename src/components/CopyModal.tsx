"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./CopyModal.module.css";
import { Coupon, Store } from "./CouponCard";

interface CopyModalProps {
  coupon: Coupon;
  onClose: () => void;
}

// Icons
const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CopyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const CopyModal: React.FC<CopyModalProps> = ({ coupon, onClose }) => {
  const { store, discount, code, description } = coupon;
  const [copied, setCopied] = useState(true);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Detect iOS Safari
  const isIOS =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const isDirectDeal =
    !code || code === "" || code.trim() === "" || code === "DEAL" || code === "DIRECT";

  // Mount check — needed for createPortal (SSR safety)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset copied state after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Extract store properties safely
  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject
    ? (store as Store).name
    : (coupon.storeName || (typeof store === "string" ? store : "Store"));
  const storeLogo = isStoreObject ? (store as Store).logo : undefined;

  // Build store URL
  const rawStoreUrl =
    coupon.affiliate_link ||
    coupon.affiliate_url ||
    (isStoreObject && (store as Store).website
      ? (store as Store).website
      : `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`);
  const [storeUrl, setStoreUrl] = useState<string>(rawStoreUrl);

  useEffect(() => {
    if (typeof window !== "undefined" && rawStoreUrl) {
      const isAffiliate =
        rawStoreUrl.includes("admitad") ||
        rawStoreUrl.includes("convert") ||
        rawStoreUrl.includes("csl") ||
        rawStoreUrl.includes("bouquetsbypost") ||
        rawStoreUrl.includes("im8health") ||
        rawStoreUrl.includes("thedrmlab") ||
        rawStoreUrl.includes("dchousepower") ||
        rawStoreUrl.includes("crzyoga") ||
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
          setStoreUrl(urlObj.toString());
        } catch {
          setStoreUrl(rawStoreUrl);
        }
      } else {
        setStoreUrl(rawStoreUrl);
      }
    }
  }, [rawStoreUrl]);

  // Simple scroll lock — just overflow hidden on html+body (safest across all browsers)
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleCopy = async () => {
    if (isDirectDeal) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      try {
        const ta = document.createElement("textarea");
        ta.value = code;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {}
    }
  };

  // The modal content JSX
  const modalContent = (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      // Inline critical styles as hard backup — cannot be overridden by any parent CSS
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
        visibility: "visible",
        backgroundColor: "rgba(15, 23, 42, 0.45)",
      }}
    >
      <div
        className={styles.modal}
        ref={modalRef}
        style={{ opacity: 1, transform: "none", visibility: "visible" }}
      >
        {/* Close Button */}
        <button className={styles.btnClose} onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>

        {/* Modal Content */}
        <div className={styles.content}>
          {/* Header */}
          <div className={styles.header}>
            {storeLogo ? (
              <div className={styles.storeLogoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={storeLogo} alt={storeName} className={styles.storeLogo} />
              </div>
            ) : (
              <div className={styles.storeLogoFallback}>
                {storeName.charAt(0).toUpperCase()}
              </div>
            )}
            <h2 id="modal-title" className={styles.title}>
              {isDirectDeal ? `${storeName} Deal Activated` : `Copy Code for ${storeName}`}
            </h2>
            <div className={styles.discountBadge}>{discount}</div>
            <p className={styles.description}>{description}</p>
          </div>

          {/* Code Copy Area */}
          <div className={styles.copyArea}>
            {isDirectDeal ? (
              <>
                <p className={styles.copyLabel}>
                  No coupon code required. The discount will be automatically applied at checkout!
                </p>
                <div className={styles.dealActivatedBox}>
                  <CheckIcon />
                  <span>Deal Activated!</span>
                </div>
              </>
            ) : (
              <>
                <p className={styles.copyLabel}>Copy the promo code below and paste it at checkout:</p>
                <button
                  className={`${styles.codeContainer} ${copied ? styles.copied : ""}`}
                  onClick={handleCopy}
                  title="Click to copy code"
                  aria-live="polite"
                >
                  <span className={styles.codeText}>{code}</span>
                  <div className={`${styles.copyIndicator} ${copied ? styles.copyIndicatorSuccess : ""}`}>
                    {copied ? (
                      <>
                        <CheckIcon />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon />
                        <span>Copy Code</span>
                      </>
                    )}
                  </div>
                </button>
              </>
            )}
          </div>

          {/* Notice */}
          <div className={styles.redirectNotice}>
            <InfoIcon />
            <div className={styles.noticeText}>
              <p>
                {isIOS ? (
                  <>Tap the button below to visit <span className={styles.highlight}>{storeName}</span> and apply your code at checkout.</>
                ) : isDirectDeal ? (
                  <>We have redirected you to <span className={styles.highlight}>{storeName}</span> in a new tab.</>
                ) : (
                  <>We have opened <span className={styles.highlight}>{storeName}&apos;s</span> website in a new tab.</>
                )}
              </p>
              <p className={styles.noticeSubText}>
                {isIOS ? (
                  <>The store will open in a new tab so you can keep this code visible.</>
                ) : isDirectDeal ? (
                  <>If the website did not load, please click the button below to claim your discount manually:</>
                ) : (
                  <>If it didn&apos;t open automatically, you can click the link below to visit the official store:</>
                )}
              </p>
            </div>
          </div>

          {/* Shop Link */}
          <div className={styles.actionContainer}>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={isDirectDeal ? styles.shopLinkPrimary : styles.shopLink}
            >
              <span>{isDirectDeal ? `Claim Deal at ${storeName}` : `Shop at ${storeName}`}</span>
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Use React Portal to render modal directly at document.body
  // This bypasses ALL parent CSS — nothing can interfere with visibility
  if (!mounted) return null;
  return createPortal(modalContent, document.body);
};

export default CopyModal;
