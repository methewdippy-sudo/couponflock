"use client";

import React, { useState, useMemo } from "react";
import styles from "../../page.module.css";
import storeStyles from "./StoreClient.module.css";
import CouponCard, { Coupon, Store } from "../../../components/CouponCard";
import CopyModal from "../../../components/CopyModal";

interface StoreClientProps {
  store: Store;
  coupons: Coupon[];
}

export default function StoreClient({ store, coupons }: StoreClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [bannerLogoError, setBannerLogoError] = useState(false);

  // Clearbit logo fallback for store banner
  const bannerLogo = useMemo(() => {
    if (bannerLogoError) return null;
    if (store.logo) return store.logo;
    // Try Clearbit
    const website = store.website;
    if (website) {
      try {
        const hostname = new URL(website).hostname.replace(/^www\./, "");
        const redirectDomains = ["vert.si", "litl.si", "csl.admitad.com", "fatcoupon.com", "shrsl.com"];
        if (!redirectDomains.some(d => hostname.includes(d))) {
          if (hostname.endsWith(".myshopify.com")) {
            const brand = hostname.replace(".myshopify.com", "").replace(/3d-?/g, "");
            return `https://logo.clearbit.com/${brand}.com`;
          }
          return `https://logo.clearbit.com/${hostname}`;
        }
      } catch { /* ignore */ }
    }
    // Guess from store name
    const clean = store.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    return `https://logo.clearbit.com/${clean}.com`;
  }, [store.logo, store.website, store.name, bannerLogoError]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      if (typeof window !== "undefined") {
        localStorage.setItem(`subscribed_${store.slug}`, email);
        if ((window as any).gtag) {
          (window as any).gtag("event", "sign_up", {
            event_category: "Newsletter",
            event_label: store.name,
            method: "Email"
          });
        }
      }
      setSubscribed(true);
      setEmail("");
    }
  };

  // Auto-open coupon modal if coupon parameter is present in URL
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkParams = () => {
        const params = new URLSearchParams(window.location.search);
        const couponParam = params.get("coupon");
        const codeParam = params.get("code");
        if (couponParam || codeParam) {
          const found = coupons.find(c => 
            (couponParam && String(c.id) === String(couponParam)) ||
            (codeParam && c.code === codeParam)
          );
          if (found) {
            setActiveCoupon(found);
          }
        }
      };

      // Check instantly
      checkParams();

      // Check with a small delay to handle hydration perfectly
      const timer = setTimeout(checkParams, 150);
      return () => clearTimeout(timer);
    }
  }, [coupons]);

  // Search Icon Component
  const SearchIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.searchIcon}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );

  // Back Arrow Icon
  const BackIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );

  const GlobeIcon = () => (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  // Filter coupons based on search query within this store
  const filteredCoupons = useMemo(() => {
    if (searchQuery.trim() === "") return coupons;
    const query = searchQuery.toLowerCase();
    return coupons.filter((coupon) => {
      const matchesCode = coupon.code ? coupon.code.toLowerCase().includes(query) : false;
      const matchesDesc = coupon.description ? coupon.description.toLowerCase().includes(query) : false;
      const matchesDiscount = coupon.discount ? coupon.discount.toLowerCase().includes(query) : false;
      return matchesCode || matchesDesc || matchesDiscount;
    });
  }, [coupons, searchQuery]);

  const verifiedCount = coupons.filter(c => c.is_verified).length;
  const successRate = coupons.length > 0 ? Math.round((verifiedCount / coupons.length) * 100) : 100;

  const handleGetCode = (coupon: Coupon) => {
    const isStoreObject = typeof coupon.store === "object" && coupon.store !== null;
    const storeName = isStoreObject ? (coupon.store as Store).name : (coupon.store as string);
    const website = isStoreObject ? (coupon.store as Store).website : undefined;
    const rawStoreUrl = coupon.affiliate_url || (coupon as any).affiliate_link || (coupon as any).affiliateLink || (store as any).affiliateLink || (store as any).affiliate_link || (store as any).affiliate_url || website || `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`;
    
    // Append Google Ads campaign and keyword SubIDs if it's an affiliate redirect link
    let storeUrl = rawStoreUrl;
    if (typeof window !== "undefined" && rawStoreUrl) {
      const isAffiliate = rawStoreUrl.includes("admitad") || 
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
          
          storeUrl = urlObj.toString();
        } catch (e) {
          console.warn("Failed to append tracking SubIDs:", e);
        }
      }
    }
    
    const isDirect = !coupon.code || coupon.code === "DEAL" || coupon.code === "DIRECT";

    // 1. Copy code to clipboard
    // On iOS: use only async clipboard API (no focus/execCommand — those show the keyboard and break the event chain)
    // On desktop: use execCommand synchronous fallback for broadest compatibility
    if (!isDirect && coupon.code) {
      const ua2 = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const iosDevice = /iPhone|iPad|iPod/i.test(ua2);
      if (!iosDevice) {
        // Desktop / Android: synchronous execCommand copy
        try {
          const textArea = document.createElement("textarea");
          textArea.value = coupon.code;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";
          textArea.style.top = "-9999px";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          textArea.setSelectionRange(0, 99999);
          document.execCommand("copy");
          document.body.removeChild(textArea);
        } catch {
          // Silently continue
        }
      }
      // Also try async clipboard API (works on both, no-op if fails)
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code).catch(() => {});
      }
    }

    // 2. Immediately open popup modal on current page
    setActiveCoupon(coupon);

    // 3. GA4 Button Click Event Tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      try {
        (window as any).gtag("event", "generate_lead", {
          event_category: "Affiliate Button Click",
          event_label: `${storeName} - ${coupon.discount}`,
          value: 1.0,
          currency: "USD",
          coupon_id: String(coupon.id),
          is_direct_deal: isDirect
        });
      } catch {
        // Ignore analytics errors
      }
    }

    // 4. Device-specific Smart Routing
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isIOS) {
      // iPhone / iPad: Just open the store affiliate URL in a new tab.
      // window.open from a direct button click (user gesture) always works on iOS Safari.
      window.open(storeUrl, "_blank");
    } else {
      // Android / Desktop / Laptop: Exact PromoRegistry Tabunder Flow
      try {
        const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
        window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
      } catch (err) {
        console.warn("Failed to open our website in a new tab:", err);
      }
      window.location.href = storeUrl;
    }
  };

  const [officialWebsiteUrl, setOfficialWebsiteUrl] = useState<string | null>(null);

  const baseStoreUrl = (store as any).affiliateLink || (store as any).affiliate_link || (store as any).affiliate_url || coupons.find(c => c.affiliate_url || (c as any).affiliate_link || (c as any).affiliateLink)?.affiliate_url || (coupons.find(c => (c as any).affiliate_link) as any)?.affiliate_link || (coupons.find(c => (c as any).affiliateLink) as any)?.affiliateLink || store.website || `https://www.google.com/search?q=${encodeURIComponent(store.name + " official website")}`;

  React.useEffect(() => {
    let finalUrl = baseStoreUrl;
    try {
      if (baseStoreUrl) {
        const isAffiliate = baseStoreUrl.includes("admitad") || 
                            baseStoreUrl.includes("convert") || 
                            baseStoreUrl.includes("csl") || 
                            baseStoreUrl.includes("bouquetsbypost") || 
                            baseStoreUrl.includes("crzyoga") || 
                            baseStoreUrl.includes("litl.si") ||
                            baseStoreUrl.includes("fatcoupon") ||
                            baseStoreUrl.includes("/go/");
        if (isAffiliate) {
          const utmCampaign = sessionStorage.getItem("utm_campaign") || "";
          const utmTerm = sessionStorage.getItem("utm_term") || "";
          const gclid = sessionStorage.getItem("gclid") || "";
          
          const urlObj = baseStoreUrl.startsWith("http")
            ? new URL(baseStoreUrl)
            : new URL(baseStoreUrl, window.location.origin);
          
          if (utmCampaign) urlObj.searchParams.set("subid1", utmCampaign);
          if (utmTerm) urlObj.searchParams.set("subid2", utmTerm);
          if (gclid) urlObj.searchParams.set("subid3", gclid);
          
          finalUrl = urlObj.toString();
        }
      }
    } catch (e) {
      console.warn("Failed to process officialWebsiteUrl:", e);
    }
    setOfficialWebsiteUrl(finalUrl);
  }, [baseStoreUrl]);

  return (
    <div className={styles.mainContainer}>
      {/* Back button link */}
      <div className={storeStyles.backLinkContainer}>
        <a href="/" className={storeStyles.backLink}>
          <BackIcon />
          <span>Back to All Stores</span>
        </a>
      </div>

      {/* Store Header Banner Card */}
      <section className={storeStyles.storeBanner}>
        <div className={storeStyles.storeBannerHeader}>
          {bannerLogo ? (
            <div className={storeStyles.storeLargeLogoWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={bannerLogo} 
                alt={store.name} 
                className={storeStyles.storeLargeLogo} 
                width={100}
                height={100}
                decoding="async"
                fetchPriority="high"
                onError={() => setBannerLogoError(true)}
              />
            </div>
          ) : (
            <div className={storeStyles.storeLargeLogoFallback}>
              {store.name.charAt(0).toUpperCase()}
            </div>
          )}
          
          <div className={storeStyles.storeMetaInfo}>
            <div className={storeStyles.storeTitleRow}>
              <h1 className={storeStyles.storeTitle}>{store.name} Deals & Discounts</h1>
              <span className={storeStyles.storeVerifiedBadge}>100% Working</span>
            </div>
            <p className={storeStyles.storeSubtitle}>
              Save money today at {store.name} with verified discounts, free shipping codes, and promotional deals.
            </p>
            
            <a 
              href={officialWebsiteUrl || baseStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={storeStyles.storeWebsiteLink}
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "generate_lead", {
                    event_category: "Official Website Link Click",
                    event_label: store.name,
                    value: 1.0,
                    currency: "USD"
                  });
                }
              }}
            >
              <GlobeIcon />
              <span>Visit Official Website</span>
            </a>
          </div>

          {store.slug === "thedrmlab" && (
            <div className={storeStyles.storeHeroVisualWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/thedrmlab/micro-infusion-system.webp" 
                alt="THE DRM LAB Clinical System" 
                className={storeStyles.storeHeroVisualImg}
                width={220}
                height={140}
              />
            </div>
          )}
        </div>

        {/* Store Coupon Statistics Grid */}
        <div className={storeStyles.statsGrid}>
          <div className={storeStyles.statCard}>
            <span className={storeStyles.statValue}>{coupons.length}</span>
            <span className={storeStyles.statLabel}>Available Offers</span>
          </div>
          <div className={storeStyles.statCard}>
            <span className={storeStyles.statValue}>{verifiedCount}</span>
            <span className={storeStyles.statLabel}>Verified Deals</span>
          </div>
          <div className={storeStyles.statCard}>
            <span className={storeStyles.statValue} style={{ color: "var(--accent-green)" }}>
              {successRate}%
            </span>
            <span className={storeStyles.statLabel}>Success Rate</span>
          </div>
        </div>
      </section>

      {/* Featured Products & Clinical Treatments Showcase */}
      {store.products && store.products.length > 0 && (
        <section className={storeStyles.productsShowcaseSection}>
          <div className={storeStyles.showcaseHeader}>
            <div>
              <h2 className={storeStyles.showcaseTitle}>Featured Products & Clinical Treatments</h2>
              <p className={storeStyles.showcaseSubtitle}>
                Explore best-selling medical-grade devices and active regenerative skincare from {store.name}
              </p>
            </div>
            <a 
              href={officialWebsiteUrl || baseStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={storeStyles.showcaseShopAllLink}
            >
              Shop All Products &rarr;
            </a>
          </div>

          <div className={storeStyles.productsGrid}>
            {store.products.map((prod) => (
              <a 
                key={prod.id} 
                href={prod.url || officialWebsiteUrl || baseStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={storeStyles.productCard}
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "select_item", {
                      item_name: prod.name,
                      item_category: store.name,
                    });
                  }
                }}
              >
                <div className={storeStyles.productImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className={storeStyles.productImage}
                    loading="lazy"
                    decoding="async"
                  />
                  {prod.badge && (
                    <span className={storeStyles.productBadge}>{prod.badge}</span>
                  )}
                </div>
                <div className={storeStyles.productCardContent}>
                  {prod.discount && (
                    <span className={storeStyles.productDiscount}>{prod.discount}</span>
                  )}
                  <h3 className={storeStyles.productName}>{prod.name}</h3>
                  <p className={storeStyles.productDescription}>{prod.description}</p>
                  <span className={storeStyles.productButton}>
                    View on Official Store
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Search and Grid Filter Layout */}
      <div className={styles.contentLayout}>
        <div className={storeStyles.searchAndTitleRow}>
          <h2 className={styles.sectionTitle}>Active {store.name} Deals & Discounts</h2>
          
          <div className={`${styles.searchBarWrapper} ${storeStyles.searchBarOverride}`}>
            <SearchIcon />
            <input
              type="text"
              placeholder={`Search ${store.name} deals...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="search"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className={styles.btnClearSearch}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <section className={styles.couponsSection}>
          {filteredCoupons.length > 0 ? (
            <div className={storeStyles.storeCouponsList}>
              {filteredCoupons.map((coupon, idx) => (
                <div key={coupon.id}>
                  <CouponCard coupon={coupon} onGetCode={handleGetCode} isBestDeal={idx === 0} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15h8M9 9h.01M15 9h.01" strokeLinecap="round" />
              </svg>
              <h3>No coupons found</h3>
              <p>No matching coupons were found for &quot;{searchQuery}&quot; in this store.</p>
              <button 
                onClick={() => setSearchQuery("")} 
                className={styles.btnResetFilters}
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        {/* Email Subscription Box */}
        <section className={storeStyles.newsletterSection}>
          {subscribed ? (
            <div className={storeStyles.newsletterSuccess}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#10b981", marginBottom: "8px" }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <h4>Successfully subscribed!</h4>
              <p>We will alert you as soon as new {store.name} discount codes are released.</p>
            </div>
          ) : (
            <div className={storeStyles.newsletterBody}>
              <div className={storeStyles.newsletterContent}>
                <h4>Never miss a {store.name} discount again!</h4>
                <p>Subscribe to get the best verified coupons and deals sent straight to your inbox.</p>
              </div>
              <form onSubmit={handleSubscribe} className={storeStyles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className={storeStyles.newsletterInput}
                />
                <button type="submit" className={storeStyles.newsletterSubmit}>
                  Subscribe
                </button>
              </form>
            </div>
          )}
        </section>

        {/* 4. SEO Coupon Redemption Guide */}
        <section className={storeStyles.seoGuideSection}>
          <h2 className={storeStyles.seoGuideTitle}>How to Redeem a {store.name} Promo Code</h2>
          <div className={storeStyles.seoGuideContent}>
            <p>
              Saving money at {store.name} is quick and easy when you use a verified coupon code from CouponFlock. 
              Follow these simple steps to claim your discount:
            </p>
            <ol className={storeStyles.seoGuideSteps}>
              <li>
                <strong>Choose Your Offer:</strong> Browse our list of active {store.name} discount codes and deals above. 
                Find the offer that matches your shopping needs and click <strong>&quot;Show Coupon Code&quot;</strong> or <strong>&quot;Get Deal&quot;</strong>.
              </li>
              <li>
                <strong>Copy the Code:</strong> A popup window will display the promo code. Click the code box to automatically copy 
                it to your clipboard.
              </li>
              <li>
                <strong>Shop the Store:</strong> Click the link to go to the official {store.name} website, select your items, and add 
                them to your shopping cart.
              </li>
              <li>
                <strong>Apply the Discount:</strong> At checkout, look for the promo code input box (often labeled &quot;Promo Code&quot;, &quot;Discount Code&quot;, 
                or &quot;Voucher&quot;). Paste your copied code into this box and click apply. Your total price will be reduced instantly!
              </li>
            </ol>
            <p className={storeStyles.seoGuideFooter}>
              All {store.name} coupons on CouponFlock are verified daily by our team to ensure you get the best possible discount at checkout.
            </p>
          </div>
        </section>

        {/* 5. Custom Brand SEO Content & FAQs for High Rankings */}
        {store.slug === "hotel-tonight" && (
          <section className={storeStyles.seoGuideSection} style={{ marginTop: "24px" }}>
            <h2 className={storeStyles.seoGuideTitle}>Expert Savings Guide for HotelTonight</h2>
            <div className={storeStyles.seoGuideContent} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                To get the absolute lowest prices on your next booking with HotelTonight, keep these proven tips in mind:
              </p>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>1. How do I use a Hotel Tonight Promo Code?</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Unlike typical booking engines, HotelTonight promo codes are designed to be applied directly in their mobile app. Open the app, go to your Account Profile, select &quot;Invites &amp; Promo Codes&quot;, and paste your coupon there. The credits will be deducted from your next reservation.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>2. Join HT Perks Loyalty Program</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  HT Perks is HotelTonight&apos;s official rewards program. You level up automatically as you spend. Level 1 gets you extra 8% off, Level 2 gets you 12% off plus other perks, and Level 3 unlocks up to 15% off and additional booking credits.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>3. Reveal the Daily Drop Deal</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Checking the app daily unlocks the &quot;Daily Drop&quot; feature, which provides highly discounted, localized rates (sometimes 30% to 40% off). These deals expire within 15 minutes of being revealed, so act fast!
                </p>
              </div>
            </div>
          </section>
        )}

        {store.slug === "swatch" && (
          <section className={storeStyles.seoGuideSection} style={{ marginTop: "24px" }}>
            <h2 className={storeStyles.seoGuideTitle}>How to Get the Best Deals on Swatch Watches</h2>
            <div className={storeStyles.seoGuideContent} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                Swatch watches are highly sought-after Swiss timepieces. While they rarely offer massive sitewide sales, you can easily save using these strategies:
              </p>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>1. Join the Swatch Club</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Becoming a member of the Swatch Club grants you exclusive access to limited-edition watch releases (such as the MoonSwatch series), free entry to brand events, and members-only discount codes throughout the year.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>2. Get Free Shipping on Your Order</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Swatch offers free standard shipping on all orders over $50. Since most Swatch watches cost between $80 and $250, you are almost guaranteed to qualify for free shipping.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>3. Swatch Warranty and Returns</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Every Swatch watch purchased using verified links comes with a 24-month international warranty, covering material and manufacturing defects. Plus, you get 14-day free returns on unworn items.
                </p>
              </div>
            </div>
          </section>
        )}

        {store.slug === "tuxmat-us" && (
          <section className={storeStyles.seoGuideSection} style={{ marginTop: "24px" }}>
            <h2 className={storeStyles.seoGuideTitle}>Why TuxMat Floor Liners Are Worth the Investment</h2>
            <div className={storeStyles.seoGuideContent} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                TuxMat custom-fit floor liners offer ultimate cabin protection. Here is how to maximize your savings:
              </p>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>1. Maximum Coverage &amp; Perfect Fit</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  TuxMat liners are laser-measured for exact vehicle specifications, providing up to 3x more coverage than competing brands. They cover the entire footwell and side panels, protecting your vehicle from snow, water, mud, and salt.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>2. Does TuxMat Have a Lifetime Warranty?</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Yes, TuxMat floor liners come with a lifetime warranty against manufacturer defects. This means your purchase is fully protected for the lifetime of your vehicle, making it a high-value purchase.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>3. Save with TuxMat Promo Codes</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Use verified TuxMat promo codes to save up to 10% off sitewide, plus get free standard shipping across the United States. Signing up for their email list is also a great way to receive exclusive first-purchase coupon codes.
                </p>
              </div>
            </div>
          </section>
        )}

        {store.slug === "harrys" && (
          <section className={storeStyles.seoGuideSection} style={{ marginTop: "24px" }}>
            <h2 className={storeStyles.seoGuideTitle}>Harry&apos;s Shaving &amp; Grooming Savings Guide</h2>
            <div className={storeStyles.seoGuideContent} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                Harry&apos;s provides premium shaving kits, blades, and body care. Follow these tips to get the best value:
              </p>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>1. Get the $5 Trial Shave Set</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  New customers can purchase a Harry&apos;s Starter Set for just $5 (valued at $13). This includes a Truman razor handle, a 5-blade cartridge, foaming shave gel, and a travel blade cover.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>2. Subscribe to Shave Plan Refills</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  By joining a custom shave plan, you save on replacement blade cartridges and receive free shipping on all recurring refills. You can easily adjust, pause, or cancel your subscription at any time.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>3. How to Apply a Harry&apos;s Promo Code?</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  To redeem your coupon code at Harry&apos;s, add your razor sets, blades, or body wash to the cart. During checkout, paste your promo code in the discount field and click apply to see your updated total.
                </p>
              </div>
            </div>
          </section>
        )}

        {store.slug === "shipt" && (
          <section className={storeStyles.seoGuideSection} style={{ marginTop: "24px" }}>
            <h2 className={storeStyles.seoGuideTitle}>How to Save Big on Shipt Grocery Delivery</h2>
            <div className={storeStyles.seoGuideContent} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                Shipt offers convenient grocery and same-day home delivery. Maximize your budget with these savings hacks:
              </p>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>1. Save 50% on Shipt Annual Membership</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Look out for active promo codes that offer up to 50% off the annual Shipt membership, reducing the cost from $99 to just $49 for your first year of unlimited free deliveries on orders over $35.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>2. Get Free Delivery on Orders Over $35</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Shipt members get free delivery on all eligible retail, grocery, and pharmacy orders over $35. Combine smaller orders into a single weekly delivery to avoid standard delivery fees.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: "4px" }}>3. Shop Exclusives &amp; Weekly Retailer Deals</h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Check the Shipt app daily for exclusive digital coupons and buy-one-get-one deals from popular local retailers like Target, CVS, Costco, and major grocery chains.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Copy modal popup */}
      {activeCoupon && (
        <CopyModal coupon={activeCoupon} onClose={() => setActiveCoupon(null)} />
      )}
    </div>
  );
}
