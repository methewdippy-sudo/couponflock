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
        <div className="footerGrid">
          {/* Brand Column */}
          <div>
            <a href="/" className="logoContainer" style={{ display: "inline-flex", marginBottom: "12px" }}>
              <img
                src="/couponflock-logo.svg"
                alt="CouponFlock Logo"
                height="34"
                style={{ objectFit: "contain", height: "34px" }}
              />
            </a>
            <p className="footerBrandDesc">
              Where smart shoppers flock for 100% hand-tested discount codes, exclusive merchant vouchers, and verified savings with zero ad clutter.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "14px", fontSize: "0.8rem", color: "#059669", fontWeight: 700 }}>
              <span>🔒 SSL Secured</span>
              <span>•</span>
              <span>✓ Verified Daily</span>
            </div>
          </div>

          {/* Column 1: Popular Brands */}
          <div>
            <h4 className="footerColumnTitle">Popular Stores</h4>
            <ul className="footerLinks">
              <li><a href="/store/im8health" className="footerLinkItem">iM8 Health</a></li>
              <li><a href="/store/desktronic" className="footerLinkItem">Desktronic</a></li>
              <li><a href="/store/dreamcloud" className="footerLinkItem">DreamCloud</a></li>
              <li><a href="/store/bouquets-by-post" className="footerLinkItem">Bouquets By Post</a></li>
              <li><a href="/store/everblog" className="footerLinkItem">Everblog AI</a></li>
              <li><a href="/#stores" className="footerLinkItem">Browse All 700+ Stores →</a></li>
            </ul>
          </div>

          {/* Column 2: Perks & Tools */}
          <div>
            <h4 className="footerColumnTitle">Perks & Tools</h4>
            <ul className="footerLinks">
              <li><a href="/#coupons" className="footerLinkItem">Trending Vouchers</a></li>
              <li><a href="/blog" className="footerLinkItem">Smart Shopping Guides</a></li>
              <li><a href="/budget-tracker" className="footerLinkItem">Budget Google Sheets</a></li>
              <li><a href="/notion-second-brain" className="footerLinkItem">Notion Second Brain</a></li>
              <li><a href="/giveaway" className="footerLinkItem">Member Giveaways</a></li>
            </ul>
          </div>

          {/* Column 3: Trust & Legal */}
          <div>
            <h4 className="footerColumnTitle">Trust & Legal</h4>
            <ul className="footerLinks">
              <li><a href="/about" className="footerLinkItem">About CouponFlock</a></li>
              <li><a href="/contact" className="footerLinkItem">Contact Deal Team</a></li>
              <li><a href="/privacy" className="footerLinkItem">Privacy Policy</a></li>
              <li><a href="/terms" className="footerLinkItem">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="footerBottom">
          <p
            style={{ fontSize: "0.84rem", color: "var(--text-tertiary)", cursor: "default", userSelect: "none" }}
            onClick={handleCopyrightClick}
          >
            © {new Date().getFullYear()} CouponFlock.com — All Rights Reserved. Direct affiliate checkout partner.
          </p>

          <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)" }}>
            Discounts hand-verified in shopping carts daily.
          </p>
        </div>

        {/* Secret Admin Portals (Toggled on 5 clicks) */}
        {showPortalLink && (
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "14px" }}>
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
