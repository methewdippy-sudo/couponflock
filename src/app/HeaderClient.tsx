"use client";

import React, { useState } from "react";

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="mainHeader">
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

          {/* Desktop Nav Links */}
          <nav className="navLinks desktopOnly">
            <a href="/" className="navLinkItem">Home</a>
            <a href="/#stores" className="navLinkItem">All Stores</a>
            <a href="/#coupons" className="navLinkItem">Active Deals</a>
            <a href="/about" className="navLinkItem">About Us</a>
            <a href="/contact" className="navLinkItem">Contact Us</a>
          </nav>

          {/* Desktop Action Area */}
          <div className="actionsArea desktopOnly">
            <a href="/#stores" className="ctaButton">Browse Brands</a>
          </div>

          {/* Mobile Hamburger/Three-Dot Toggle Button */}
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
            <span className="sidebarLinkIcon">🏠</span> Home
          </a>
          <a href="/#stores" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">🏷️</span> All Stores
          </a>
          <a href="/#coupons" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">🔥</span> Active Deals
          </a>
          <a href="/about" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">✨</span> About Us
          </a>
          <a href="/contact" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">📞</span> Contact Us
          </a>
        </nav>

        <div className="sidebarFooter">
          <a href="/#stores" className="sidebarCtaButton" onClick={toggleSidebar}>
            Browse Brands
          </a>
          <p className="sidebarFooterText">100% Verified Promo Codes & Coupons</p>
        </div>
      </aside>
    </>
  );
}
