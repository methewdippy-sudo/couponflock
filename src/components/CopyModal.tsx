"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [copied, setCopied] = useState(true); // Set to true as it is copied automatically on click
  const modalRef = useRef<HTMLDivElement>(null);

  const isDirectDeal = !code || code === "" || code.trim() === "" || code === "DEAL" || code === "DIRECT";

  // Set timeout to reset the copied visual state after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Extract store properties safely
  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject ? (store as Store).name : (coupon.storeName || (typeof store === "string" ? store : "Store"));
  const storeLogo = isStoreObject ? (store as Store).logo : undefined;
  
  // Create a fallback URL based on the store slug or affiliate link
  const storeUrl = coupon.affiliate_link || coupon.affiliate_url || (isStoreObject && (store as Store).website ? (store as Store).website : `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
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
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.modal} ref={modalRef}>
        
        {/* Close Button */}
        <button className={styles.btnClose} onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>

        {/* Modal Content */}
        <div className={styles.content}>
          
          {/* Header Store Banner & Discount */}
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
            <div className={styles.discountBadge}>
              {discount}
            </div>
            <p className={styles.description}>{description}</p>
          </div>

          {/* Code Copy Area */}
          <div className={styles.copyArea}>
            {isDirectDeal ? (
              <>
                <p className={styles.copyLabel}>No coupon code required. The discount will be automatically applied at checkout!</p>
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

          {/* Redirect / Instructions Message */}
          <div className={styles.redirectNotice}>
            <InfoIcon />
            <div className={styles.noticeText}>
              <p>
                {isDirectDeal ? (
                  <>We have redirected you to <span className={styles.highlight}>{storeName}</span> in a new tab.</>
                ) : (
                  <>We have opened <span className={styles.highlight}>{storeName}&apos;s</span> website in a new tab.</>
                )}
              </p>
              <p className={styles.noticeSubText}>
                {isDirectDeal ? (
                  <>If the website did not load, please click the button below to claim your discount manually:</>
                ) : (
                  <>If it didn&apos;t open automatically, you can click the link below to visit the official store:</>
                )}
              </p>
            </div>
          </div>

          {/* Action Link to shop manually */}
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
};

export default CopyModal;
