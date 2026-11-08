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
              alt="CouponFlock - Verified Promo Codes & Smart Savings"
              height="38"
              style={{ objectFit: "contain", height: "38px" }}
            />
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="navLinks desktopOnly">
            <a href="/" className="navLinkItem">
              Home
            </a>
            <a href="/#stores" className="navLinkItem">
              Stores
            </a>
            <a href="/#coupons" className="navLinkItem">
              Top Deals
            </a>
            <a href="/blog" className="navLinkItem">
              Blog
            </a>
            <a href="/about" className="navLinkItem">
              About Us
            </a>
            <a href="/contact" className="navLinkItem">
              Contact
            </a>
          </nav>

          {/* Desktop Action Area */}
          <div className="actionsArea desktopOnly">
            <a href="/#coupons" className="ctaButton">
              Explore Deals
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
            Home
          </a>
          <a href="/#stores" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            Stores
          </a>
          <a href="/#coupons" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            Top Deals
          </a>
          <a href="/blog" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            Blog
          </a>
          <a href="/about" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            About Us
          </a>
          <a href="/contact" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            Contact
          </a>
        </nav>

        <div className="sidebarFooter">
          <a href="/#coupons" className="sidebarCtaButton" onClick={toggleSidebar}>
            Explore Verified Deals
          </a>
          <p className="sidebarFooterText">100% Hand-Tested Promo Codes &amp; Deals</p>
        </div>
      </aside>
    </>
  );
}
