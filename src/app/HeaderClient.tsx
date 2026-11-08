"use client";

import React, { useState } from "react";

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* CouponFlock Community Savings Radar Top Strip */}
      <div
        style={{
          background: "linear-gradient(90deg, #064e3b 0%, #047857 50%, #065f46 100%)",
          color: "#ecfdf5",
          fontSize: "0.76rem",
          fontWeight: 600,
          padding: "7px 16px",
          borderBottom: "1px solid rgba(167, 243, 208, 0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                background: "#f59e0b",
                color: "#0f172a",
                fontWeight: 800,
                fontSize: "0.68rem",
                padding: "2px 8px",
                borderRadius: "999px",
                textTransform: "uppercase",
              }}
            >
              🦅 LIVE DEAL RADAR
            </span>
            <span>
              Where Smart Shoppers Flock — Every Promo Code Hand-Tested Every 4 Hours!
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#a7f3d0", fontWeight: 700 }}>
            <span>💰 $1.4M+ Saved by the Flock</span>
            <span>•</span>
            <span style={{ color: "#fde68a" }}>🔥 701+ Verified Brands</span>
          </div>
        </div>
      </div>

      <header className="mainHeader" style={{ background: "rgba(255, 255, 255, 0.94)", borderBottom: "2px solid #d1fae5" }}>
        <div className="headerContainer">
          {/* Logo Area */}
          <a href="/" className="logoContainer">
            <img
              src="/couponflock-logo.svg"
              alt="CouponFlock - Where Smart Shoppers Flock for Verified Deals"
              height="38"
              style={{ objectFit: "contain", height: "38px" }}
            />
          </a>

          {/* Desktop Floating Pill Nav Links */}
          <nav
            className="navLinks desktopOnly"
            style={{
              background: "#f0fdf4",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid #bbf7d0",
              gap: "20px",
            }}
          >
            <a href="/" className="navLinkItem">
              🦅 Deal Radar
            </a>
            <a href="/#stores" className="navLinkItem">
              🏷️ 701+ Brands
            </a>
            <a href="/#coupons" className="navLinkItem">
              ✂️ Voucher Feed
            </a>
            <a href="/blog" className="navLinkItem">
              📖 Savings Hacks
            </a>
            <a href="/about" className="navLinkItem">
              ✓ Our Guarantee
            </a>
          </nav>

          {/* Desktop Action Area */}
          <div className="actionsArea desktopOnly" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#b45309",
                background: "#fef3c7",
                border: "1px solid #fde68a",
                padding: "6px 12px",
                borderRadius: "999px",
              }}
            >
              ⚡ 2,839 Active Deals
            </span>
            <a
              href="/#coupons"
              className="ctaButton"
              style={{
                background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                borderRadius: "999px",
                boxShadow: "0 4px 12px rgba(5, 150, 105, 0.25)",
              }}
            >
              Explore Hot Deals →
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className={`mobileMenuToggle ${isOpen ? "active" : ""}`}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <div className="menuBar"></div>
            <div className="menuBar"></div>
            <div className="menuBar"></div>
          </button>
        </div>
      </header>

      {/* Off-Canvas Sidebar Backdrop Overlay */}
      {isOpen && <div className="sidebarOverlay" onClick={toggleSidebar}></div>}

      {/* Off-Canvas Sidebar Menu */}
      <aside className={`offCanvasSidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebarHeader">
          <div className="logoContainer">
            <img
              src="/couponflock-logo.svg"
              alt="CouponFlock Logo"
              height="32"
              style={{ objectFit: "contain", height: "32px" }}
            />
          </div>
          <button className="sidebarCloseButton" onClick={toggleSidebar} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="sidebarNavLinks">
          <a href="/" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">🦅</span> Deal Radar Home
          </a>
          <a href="/#stores" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">🏷️</span> 701+ Verified Brands
          </a>
          <a href="/#coupons" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">✂️</span> Live Voucher Feed
          </a>
          <a href="/blog" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">📖</span> Smart Shopping Blog
          </a>
          <a href="/about" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">✨</span> Why CouponFlock
          </a>
          <a href="/contact" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">📞</span> Contact the Flock
          </a>
        </nav>

        <div className="sidebarFooter">
          <a href="/#coupons" className="sidebarCtaButton" onClick={toggleSidebar}>
            Explore Verified Vouchers
          </a>
          <p className="sidebarFooterText">100% Hand-Tested Promo Codes & Deals</p>
        </div>
      </aside>
    </>
  );
}
