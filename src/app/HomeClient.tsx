"use client";

import React, { useState, useMemo } from "react";
import styles from "./page.module.css";
import CouponCard, { Coupon, Store } from "../components/CouponCard";
import CopyModal from "../components/CopyModal";

interface HomeClientProps {
  initialCoupons: Coupon[];
  initialStores: Store[];
}

export default function HomeClient({ initialCoupons, initialStores }: HomeClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStoreSlug, setSelectedStoreSlug] = useState<string | null>(null);
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);

  const [storePage, setStorePage] = useState(1);
  const [couponPage, setCouponPage] = useState(1);

  const STORES_PER_PAGE = 16;
  const COUPONS_PER_PAGE = 12;

  const isFirstRender = React.useRef(true);

  // Reset pagination when filters change to ensure the user always sees results from page 1
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setStorePage(1);
    setCouponPage(1);
  }, [searchQuery, selectedStoreSlug]);

  // Initialize states from URL parameters if present
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cpage = params.get("cpage");
      const spage = params.get("spage");
      if (cpage) {
        const p = parseInt(cpage, 10);
        if (!isNaN(p)) setCouponPage(p);
      }
      if (spage) {
        const p = parseInt(spage, 10);
        if (!isNaN(p)) setStorePage(p);
      }
    }
  }, []);


  // Auto-open coupon modal if coupon parameter is present in URL
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkParams = () => {
        const params = new URLSearchParams(window.location.search);
        const couponParam = params.get("coupon");
        const codeParam = params.get("code");
        if (couponParam || codeParam) {
          const found = initialCoupons.find(c => 
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
  }, [initialCoupons]);

  // Handle hash scrolling dynamically on initial render/hydration
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

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

  // Filter coupons based on search query and active store filter
  const filteredCoupons = useMemo(() => {
    return initialCoupons.filter((coupon) => {
      if (!coupon) return false;
      const isStoreObject = typeof coupon.store === "object" && coupon.store !== null;
      const storeName = isStoreObject ? ((coupon.store as Store)?.name || "") : (typeof coupon.store === "string" ? coupon.store : "");
      const storeSlug = isStoreObject ? ((coupon.store as Store)?.slug || "") : (storeName ? storeName.toLowerCase().replace(/\s+/g, "-") : "");

      // Filter by store slug if selected
      if (selectedStoreSlug && storeSlug !== selectedStoreSlug) {
        return false;
      }

      // Filter by search query (match store name, store slug, coupon code, or description)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const cleanQuery = query.replace(/[^a-z0-9]/g, "");
        const cleanStoreName = storeName.toLowerCase().replace(/[^a-z0-9]/g, "");
        const cleanStoreSlug = storeSlug.toLowerCase().replace(/[^a-z0-9]/g, "");

        const matchesStore = storeName ? (
          storeName.toLowerCase().includes(query) || 
          cleanStoreName.includes(cleanQuery) || 
          cleanStoreSlug.includes(cleanQuery)
        ) : false;
        const matchesCode = coupon.code ? coupon.code.toLowerCase().includes(query) : false;
        const matchesDesc = coupon.description ? coupon.description.toLowerCase().includes(query) : false;
        const matchesDiscount = coupon.discount ? coupon.discount.toLowerCase().includes(query) : false;

        return matchesStore || matchesCode || matchesDesc || matchesDiscount;
      }

      return true;
    });
  }, [initialCoupons, searchQuery, selectedStoreSlug]);

  // Dynamically filter stores by search query (supports store name, slug, and no-space variations)
  const filteredStores = useMemo(() => {
    if (searchQuery.trim() === "") return initialStores;
    const query = searchQuery.toLowerCase().trim();
    const cleanQuery = query.replace(/[^a-z0-9]/g, "");

    return initialStores.filter((store) => {
      if (!store || !store.name) return false;
      const name = store.name.toLowerCase();
      const slug = (store.slug || "").toLowerCase();
      const cleanName = name.replace(/[^a-z0-9]/g, "");
      const cleanSlug = slug.replace(/[^a-z0-9]/g, "");

      return (
        name.includes(query) ||
        slug.includes(query) ||
        (cleanQuery.length > 1 && (cleanName.includes(cleanQuery) || cleanSlug.includes(cleanQuery)))
      );
    });
  }, [initialStores, searchQuery]);

  const paginatedStores = useMemo(() => {
    const startIndex = (storePage - 1) * STORES_PER_PAGE;
    return filteredStores.slice(startIndex, startIndex + STORES_PER_PAGE);
  }, [filteredStores, storePage]);

  const paginatedCoupons = useMemo(() => {
    const startIndex = (couponPage - 1) * COUPONS_PER_PAGE;
    return filteredCoupons.slice(startIndex, startIndex + COUPONS_PER_PAGE);
  }, [filteredCoupons, couponPage]);

  const totalStorePages = Math.ceil(filteredStores.length / STORES_PER_PAGE);
  const totalCouponPages = Math.ceil(filteredCoupons.length / COUPONS_PER_PAGE);

  const renderPagination = (currentPage: number, totalPages: number, onPageChange: (page: number) => void, sectionId?: string) => {
    if (totalPages <= 1) return null;
    
    const pages: (number | string)[] = [];
    const delta = 1; // Number of pages to show before and after current page
    
    // Always include page 1
    pages.push(1);
    
    let left = currentPage - delta;
    let right = currentPage + delta;
    
    if (left < 2) {
      left = 2;
      right = Math.min(2 + delta * 2, totalPages - 1);
    }
    if (right > totalPages - 1) {
      right = totalPages - 1;
      left = Math.max(totalPages - 1 - delta * 2, 2);
    }
    
    if (left > 2) {
      pages.push("...");
    }
    
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }
    
    if (right < totalPages - 1) {
      pages.push("...");
    }
    
    // Always include last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    const handlePageClick = (e: React.MouseEvent, p: number) => {
      e.preventDefault();
      e.stopPropagation();
      onPageChange(p);
      
      // Update URL parameters
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        if (sectionId === "coupons") {
          params.set("cpage", String(p));
        } else if (sectionId === "stores") {
          params.set("spage", String(p));
        }
        const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
        window.history.pushState({}, "", newUrl);
      }

      if (typeof window !== "undefined" && sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    return (
      <div className={styles.paginationContainer}>
        <button
          type="button"
          onClick={(e) => handlePageClick(e, currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.paginationBtn} ${currentPage === 1 ? styles.paginationBtnDisabled : ""}`}
        >
          ← Prev
        </button>
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`ell-${idx}`} className={styles.paginationEllipsis} style={{ padding: "0 8px", color: "var(--text-tertiary)", fontWeight: "bold" }}>
                ...
              </span>
            );
          }
          const pageNum = p as number;
          return (
            <button
              type="button"
              key={pageNum}
              onClick={(e) => handlePageClick(e, pageNum)}
              className={`${styles.paginationBtn} ${currentPage === pageNum ? styles.paginationBtnActive : ""}`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          type="button"
          onClick={(e) => handlePageClick(e, currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.paginationBtn} ${currentPage === totalPages ? styles.paginationBtnDisabled : ""}`}
        >
          Next →
        </button>
      </div>
    );
  };


  const handleGetCode = (coupon: Coupon) => {
    const isStoreObject = typeof coupon.store === "object" && coupon.store !== null;
    const storeName = isStoreObject ? (coupon.store as Store).name : (coupon.store as string);
    const website = isStoreObject ? (coupon.store as Store).website : undefined;
    const rawStoreUrl = coupon.affiliate_url || website || `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`;
    
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
                          rawStoreUrl.includes("litl.si") ||
                          rawStoreUrl.includes("fatcoupon") ||
                          rawStoreUrl.includes("/go/");
      if (isAffiliate) {
        try {
          const utmCampaign = sessionStorage.getItem("utm_campaign") || "";
          const utmTerm = sessionStorage.getItem("utm_term") || "";
          const gclid = sessionStorage.getItem("gclid") || "";
          const urlObj = new URL(rawStoreUrl);
          
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

  // Dynamically find matching stores based on the search query with automatic deduplication
  const matchedStores = useMemo(() => {
    if (searchQuery.trim() === "") return [];
    const query = searchQuery.toLowerCase().trim();
    const cleanQuery = query.replace(/[^a-z0-9]/g, "");

    const matches = initialStores.filter(store => {
      if (!store || !store.name) return false;
      const name = store.name.toLowerCase();
      const slug = (store.slug || "").toLowerCase();
      const cleanName = name.replace(/[^a-z0-9]/g, "");
      const cleanSlug = slug.replace(/[^a-z0-9]/g, "");

      return (
        name.includes(query) ||
        slug.includes(query) ||
        (cleanQuery.length > 1 && (cleanName.includes(cleanQuery) || cleanSlug.includes(cleanQuery)))
      );
    });

    const seen = new Set<string>();
    return matches.filter(store => {
      const key = store.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [initialStores, searchQuery]);

  return (
    <div className={styles.mainContainer}>
      {/* Hero Search Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>🦅 Flock to 100% verified discount codes & exclusive promo deals</span>
          <h1 className={styles.heroTitle}>
            Flock to the Best Deals. <span className={styles.gradientText}>Never Pay Full Price.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We test every single code before adding it here. If it&apos;s on CouponFlock, it works — guaranteed. No expired junk, no clickbait traps.
          </p>

          {/* Premium Search Bar */}
          <div className={styles.searchBarWrapper}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for brands, discount codes, or items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (matchedStores.length > 0) {
                    const topStore = matchedStores[0];
                    if (topStore && topStore.slug) {
                      window.location.href = `/store/${topStore.slug}`;
                    }
                  } else {
                    const element = document.getElementById("stores") || document.getElementById("coupons");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }
              }}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery("")} 
                className={styles.btnClearSearch}
                aria-label="Clear search"
              >
                Clear
              </button>
            )}

            {/* Dynamic Autocomplete Suggestion Dropdown */}
            {searchQuery.trim() !== "" && matchedStores.length > 0 && (
              <div className={styles.searchSuggestionsDropdown}>
                {matchedStores.map((store) => (
                  <a 
                    key={store.id || store.slug} 
                    href={`/store/${store.slug}`}
                    className={styles.searchSuggestionItem}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `/store/${store.slug}`;
                    }}
                  >
                    {store.logo ? (
                      <img src={store.logo} alt={store.name} className={styles.suggestionLogo} />
                    ) : (
                      <div className={styles.suggestionFallback}>{store.name.charAt(0).toUpperCase()}</div>
                    )}
                    <span className={styles.suggestionName}>{store.name}</span>
                    <span className={styles.suggestionBadge}>View Coupons</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Premium Popular Searches Tagline */}
          <div className={styles.popularSearches}>
            <span className={styles.popularSearchesTitle}>⚡ Popular Searches:</span>
            {["Apple", "Amazon", "Nike", "Hostinger"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className={styles.popularSearchTag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Auto-Scrolling Trending Brands Carousel */}
      <div className={styles.carouselContainer}>
        <p className={styles.carouselTitle}>🔥 Hot Trending Brands</p>
        <div className={styles.carouselSlider}>
          <div className={styles.carouselTrack}>
            {/* First Set of Brands */}
            {initialStores.slice(0, 20).map((store) => (
              <a 
                key={`slide1-${store.id || store.slug}`} 
                href={`/store/${store.slug}`} 
                className={styles.carouselItem}
                title={`Visit ${store.name} Store`}
              >
                {store.logo ? (
                  <img 
                    src={store.logo} 
                    alt={store.name} 
                    className={styles.carouselLogo} 
                    loading="lazy" 
                    decoding="async"
                    width={36}
                    height={36}
                  />
                ) : (
                  <div className={styles.carouselFallback}>{store.name.charAt(0).toUpperCase()}</div>
                )}
                <span>{store.name}</span>
              </a>
            ))}
            {/* Second Duplicate Set for Seamless Loop */}
            {initialStores.slice(0, 20).map((store) => (
              <a 
                key={`slide2-${store.id || store.slug}`} 
                href={`/store/${store.slug}`} 
                className={styles.carouselItem}
                title={`Visit ${store.name} Store`}
              >
                {store.logo ? (
                  <img 
                    src={store.logo} 
                    alt={store.name} 
                    className={styles.carouselLogo} 
                    loading="lazy" 
                    decoding="async"
                    width={36}
                    height={36}
                  />
                ) : (
                  <div className={styles.carouselFallback}>{store.name.charAt(0).toUpperCase()}</div>
                )}
                <span>{store.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={styles.contentLayout}>
        
        {/* Dynamic Search Results: Matching Stores */}
        {matchedStores.length > 0 && (
          <section className={styles.filterSection}>
            <h3 className={styles.sectionTitle} style={{ fontSize: "1.2rem", color: "var(--primary-blue)" }}>
              Matching Brands ({matchedStores.length})
            </h3>
            <div className={styles.storesGrid} style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}>
              {matchedStores.map((store) => (
                <a
                  key={store.id || store.slug}
                  href={`/store/${store.slug}`}
                  className={styles.storeCard}
                  style={{ padding: "16px 12px" }}
                >
                  {store.logo ? (
                    <div className={styles.storeCardLogoWrapper} style={{ width: "48px", height: "48px", marginBottom: "8px" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={store.logo} 
                        alt={store.name} 
                        className={styles.storeCardLogo} 
                        loading="lazy" 
                        decoding="async" 
                        width={48} 
                        height={48} 
                      />
                    </div>
                  ) : (
                    <div className={styles.storeCardFallback} style={{ width: "48px", height: "48px", fontSize: "1.2rem", marginBottom: "8px" }}>
                      {store.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className={styles.storeCardName} style={{ fontSize: "0.95rem" }}>{store.name}</span>
                  <span className={styles.storeCardLink} style={{ fontSize: "0.78rem" }}>Go to Store →</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Featured Brands Grid */}
        <section id="stores" className={styles.filterSection}>
          <h2 className={styles.sectionTitle}>Browse Coupons by Brand</h2>
          <p className={styles.sectionSubtitle}>Click on any brand to open its dedicated store page and view verified discount codes.</p>
          <div className={styles.storesGrid}>
            {paginatedStores.map((store) => (
              <a
                key={store.id || store.slug}
                href={`/store/${store.slug}`}
                className={styles.storeCard}
              >
                {store.logo ? (
                  <div className={styles.storeCardLogoWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={store.logo} 
                      alt={store.name} 
                      className={styles.storeCardLogo} 
                      loading="lazy" 
                      decoding="async" 
                      width={48} 
                      height={48} 
                    />
                  </div>
                ) : (
                  <div className={styles.storeCardFallback}>
                    {store.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className={styles.storeCardName}>{store.name}</span>
                <span className={styles.storeCardLink}>View Coupons →</span>
              </a>
            ))}
          </div>
          {renderPagination(storePage, totalStorePages, setStorePage, "stores")}
        </section>

        {/* Coupons Grid Section */}
        <section id="coupons" className={styles.couponsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {selectedStoreSlug 
                ? `${initialStores.find(s => s.slug === selectedStoreSlug)?.name} Coupons` 
                : "Latest Promo Codes"
              }
            </h2>
            <span className={couponCountStyle}>
              {filteredCoupons.length} {filteredCoupons.length === 1 ? "Deal" : "Deals"} Available
            </span>
          </div>

          {filteredCoupons.length > 0 ? (
            <>
              <div className={styles.couponsGrid}>
                {paginatedCoupons.map((coupon) => (
                  <div key={coupon.id} className="animate-slide-up">
                    <CouponCard coupon={coupon} onGetCode={handleGetCode} />
                  </div>
                ))}
              </div>
              {renderPagination(couponPage, totalCouponPages, setCouponPage, "coupons")}
            </>
          ) : (
            <div className={styles.noResults}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15h8M9 9h.01M15 9h.01" strokeLinecap="round" />
              </svg>
              <h3>No coupons found</h3>
              <p>We couldn&apos;t find any discount codes matching &quot;{searchQuery}&quot;. Try searching for something else or browse other brands.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedStoreSlug(null); }} 
                className={styles.btnResetFilters}
              >
                View All Coupons
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Copy Code Popup Modal */}
      {activeCoupon && (
        <CopyModal coupon={activeCoupon} onClose={() => setActiveCoupon(null)} />
      )}
    </div>
  );
}

// Inline constant for styles compilation compatibility
const couponCount = "couponCount";
const couponCountStyle = styles[couponCount] || "";
