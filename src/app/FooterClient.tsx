"use client";

import React, { useState, useEffect, useCallback } from "react";
import { trackEvent, captureUrlTrackingParams } from "../lib/telemetry";

export default function FooterClient() {
  const [clickCount, setClickCount] = useState(0);
  const [showPortalLink, setShowPortalLink] = useState(false);

  const handleCopyrightClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setShowPortalLink(true);
      setClickCount(0);
    }
  };

  useEffect(() => {
    if (clickCount > 0 && clickCount < 5) {
      const timer = setTimeout(() => setClickCount(0), 3000);
      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey) {
      if (e.key === "K" || e.key === "k") {
        e.preventDefault();
        window.location.href = "/admin/ai-creator";
      } else if (e.key === "D" || e.key === "d") {
        e.preventDefault();
        window.location.href = "/admin/dashboard";
      } else if (e.key === "T" || e.key === "t") {
        e.preventDefault();
        window.location.href = "/admin/telemetry";
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      captureUrlTrackingParams();
      const pathname = window.location.pathname || "/";
      const isStore = pathname.startsWith("/store/") || pathname.startsWith("/deals/");
      const slug = isStore ? pathname.split("/").filter(Boolean)[1] || "" : "";
      trackEvent({
        site: "CouponFlock",
        eventType: isStore ? "store_view" : "page_view",
        path: pathname,
        storeSlug: slug,
      });
    }
  }, []);

  return (
    <footer className="mainFooter">
      <div className="footerContainer">
        <div className="footerMainSection">
          <a href="/" className="logoContainer" style={{ marginBottom: "12px", display: "inline-flex" }}>
            <img
              src="/couponflock-logo.svg"
              alt="CouponFlock Logo"
              height="34"
              style={{ objectFit: "contain", height: "34px" }}
            />
          </a>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", maxWidth: "320px" }}>
            Where smart shoppers flock for 100% hand-tested coupon codes, perforated checkout vouchers, and verified daily brand deals.
          </p>
          <p style={{ color: "var(--text-tertiary)", fontSize: "0.75rem", lineHeight: "1.5", maxWidth: "320px", marginTop: "12px" }}>
            CouponFlock partners directly with leading retail networks to verify promo codes every 4 hours with zero ad clutter.
          </p>
        </div>

        <div className="footerLinksContainer">
          <div className="footerColumn">
            <h4 className="footerColHeader">Flock Radar</h4>
            <a href="/" className="footerLinkItem">Deal Radar Home</a>
            <a href="/#stores" className="footerLinkItem">701+ Brand Stores</a>
            <a href="/blog" className="footerLinkItem">Smart Shopping Guides</a>
            <a href="/about" className="footerLinkItem">About CouponFlock</a>
            <a href="/contact" className="footerLinkItem">Contact Us</a>
          </div>
          <div className="footerColumn">
            <h4 className="footerColHeader">Community Perks</h4>
            <a href="/budget-tracker" className="footerLinkItem">Budget Google Sheets</a>
            <a href="/notion-second-brain" className="footerLinkItem">Notion Second Brain</a>
            <a href="/giveaway" className="footerLinkItem">Gift Card Giveaways</a>
          </div>
          <div className="footerColumn">
            <h4 className="footerColHeader">Legal & Trust</h4>
            <a href="/privacy" className="footerLinkItem">Privacy Policy</a>
            <a href="/terms" className="footerLinkItem">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p
          style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", cursor: "default", userSelect: "none" }}
          onClick={handleCopyrightClick}
        >
          © {new Date().getFullYear()} CouponFlock.com — Where Smart Shoppers Flock for Verified Savings. All Rights Reserved.
        </p>

        {showPortalLink && (
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "12px" }}>
            <a
              href="/admin/ai-creator"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 16px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#059669",
                backgroundColor: "rgba(5, 150, 105, 0.08)",
                border: "1px solid rgba(5, 150, 105, 0.2)",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              <span>🤖</span> AI Creator Portal
            </a>
            <a
              href="/admin/dashboard"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 16px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              <span>📈</span> AI ROI Dashboard
            </a>
            <a
              href="/admin/telemetry"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 16px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#d97706",
                backgroundColor: "rgba(217, 119, 6, 0.08)",
                border: "1px solid rgba(217, 119, 6, 0.22)",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              <span>📡</span> Live User & Click Telemetry
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
