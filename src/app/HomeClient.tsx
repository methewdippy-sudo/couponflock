"use client";

import React, { useState, useMemo } from "react";
import styles from "./page.module.css";
import CouponCard, { Coupon, Store } from "../components/CouponCard";
import CopyModal from "../components/CopyModal";
import { trackEvent } from "../lib/telemetry";

interface HomeClientProps {
  initialCoupons: Coupon[];
  initialStores: Store[];
}

export default function HomeClient({ initialCoupons, initialStores }: HomeClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStoreSlug, setSelectedStoreSlug] = useState<string | null>(null);
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [voucherFilter, setVoucherFilter] = useState<"all" | "code" | "deal" | "ship">("all");
  const [sortBy, setSortBy] = useState<"popular" | "discount" | "newest">("popular");

  const [storePage, setStorePage] = useState(1);
  const [couponPage, setCouponPage] = useState(1);

  const STORES_PER_PAGE = 16;
  const COUPONS_PER_PAGE = 12;

  // Secret backdoor operator '--' states (connects to server-side /api/vault-search)
  const [secretStores, setSecretStores] = useState<Store[]>([]);
  const [isSecretSearching, setIsSecretSearching] = useState(false);
  const isSecretMode = searchQuery.trim().endsWith("--") || searchQuery.trim().includes("--");

  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    const trimmed = searchQuery.trim();
    if (trimmed.endsWith("--") || trimmed.includes("--")) {
      const clean = trimmed.replace(/-+$/, "").trim().toLowerCase();
      if (clean === "telemetry" || clean === "analytics") {
        window.location.href = "/admin/telemetry";
        return;
      }
      if (clean.length > 0) {
        setIsSecretSearching(true);
        fetch(`/api/vault-search?q=${encodeURIComponent(trimmed)}`)
          .then((res) => res.json())
          .then((data) => {
            if (data && Array.isArray(data.results)) {
              setSecretStores(data.results);
            } else {
              setSecretStores([]);
            }
          })
          .catch(() => setSecretStores([]))
          .finally(() => setIsSecretSearching(false));
      } else {
        setSecretStores([]);
      }
    } else {
      if (secretStores.length > 0) {
        setSecretStores([]);
      }
    }
  }, [searchQuery]);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setStorePage(1);
    setCouponPage(1);
  }, [searchQuery, selectedStoreSlug, voucherFilter, sortBy]);

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

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkParams = () => {
        const params = new URLSearchParams(window.location.search);
        const couponParam = params.get("coupon");
        const codeParam = params.get("code");
        if (couponParam || codeParam) {
          const found = initialCoupons.find(
            (c) =>
              (couponParam && String(c.id) === String(couponParam)) ||
              (codeParam && c.code === codeParam)
          );
          if (found) {
            setActiveCoupon(found);
          }
        }
      };

      checkParams();
      const timer = setTimeout(checkParams, 150);
      return () => clearTimeout(timer);
    }
  }, [initialCoupons]);

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

  // Filter and sort coupons (strictly from initialCoupons, never exposing secret stores on normal search)
  const filteredCoupons = useMemo(() => {
    const rawQ = searchQuery.trim().toLowerCase();
    if (rawQ.endsWith("--") || rawQ.includes("--")) {
      return [];
    }

    const list = initialCoupons.filter((coupon) => {
      if (!coupon) return false;
      const isStoreObject = typeof coupon.store === "object" && coupon.store !== null;
      const storeName = isStoreObject ? ((coupon.store as Store)?.name || "") : typeof coupon.store === "string" ? coupon.store : "";
      const storeSlug = isStoreObject ? ((coupon.store as Store)?.slug || "") : storeName ? storeName.toLowerCase().replace(/\s+/g, "-") : "";

      if (selectedStoreSlug && storeSlug !== selectedStoreSlug) {
        return false;
      }

      if (voucherFilter !== "all") {
        const hasCode = Boolean(coupon.code && coupon.code !== "DEAL" && coupon.code !== "DIRECT");
        const isShip = (coupon.discount || "").toLowerCase().includes("ship") || (coupon.description || "").toLowerCase().includes("free shipping");
        if (voucherFilter === "code" && !hasCode) return false;
        if (voucherFilter === "deal" && hasCode) return false;
        if (voucherFilter === "ship" && !isShip) return false;
      }

      if (rawQ !== "") {
        const cleanQuery = rawQ.replace(/[^a-z0-9]/g, "");
        const cleanStoreName = storeName.toLowerCase().replace(/[^a-z0-9]/g, "");
        const cleanStoreSlug = storeSlug.toLowerCase().replace(/[^a-z0-9]/g, "");

        const matchesStore = storeName
          ? storeName.toLowerCase().includes(rawQ) ||
            cleanStoreName.includes(cleanQuery) ||
            cleanStoreSlug.includes(cleanQuery)
          : false;
        const matchesCode = coupon.code ? coupon.code.toLowerCase().includes(rawQ) : false;
        const matchesDesc = coupon.description ? coupon.description.toLowerCase().includes(rawQ) : false;
        const matchesDiscount = coupon.discount ? coupon.discount.toLowerCase().includes(rawQ) : false;

        return matchesStore || matchesCode || matchesDesc || matchesDiscount;
      }

      return true;
    });

    const sorted = [...list];
    if (sortBy === "discount") {
      sorted.sort((a, b) => {
        const numA = parseInt((a.discount || "").replace(/[^0-9]/g, ""), 10) || 0;
        const numB = parseInt((b.discount || "").replace(/[^0-9]/g, ""), 10) || 0;
        return numB - numA;
      });
    } else if (sortBy === "newest") {
      sorted.reverse();
    }

    return sorted;
  }, [initialCoupons, searchQuery, selectedStoreSlug, voucherFilter, sortBy]);

  // Dynamically filter public safe stores by search query
  const filteredStores = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query === "") return initialStores;
    if (query.endsWith("--") || query.includes("--")) return [];

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
    const delta = 1;
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

    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    const handlePageClick = (e: React.MouseEvent, p: number) => {
      e.preventDefault();
      e.stopPropagation();
      onPageChange(p);

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
              <span key={`ell-${idx}`} style={{ padding: "0 8px", color: "var(--text-tertiary)", fontWeight: "bold" }}>
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
    const storeSlug = isStoreObject ? (coupon.store as Store).slug : "";
    const website = isStoreObject ? (coupon.store as Store).website : undefined;
    const rawStoreUrl = coupon.affiliate_url || website || `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`;

    let storeUrl = rawStoreUrl;
    if (typeof window !== "undefined" && rawStoreUrl) {
      const isAffiliate =
        rawStoreUrl.includes("admitad") ||
        rawStoreUrl.includes("convert") ||
        rawStoreUrl.includes("csl") ||
        rawStoreUrl.includes("bouquetsbypost") ||
        rawStoreUrl.includes("im8health") ||
        rawStoreUrl.includes("thedrmlab") ||
        rawStoreUrl.includes("dchousepower") ||
        rawStoreUrl.includes("litl.si") ||
        rawStoreUrl.includes("fatcoupon") ||
        rawStoreUrl.includes("/go/");
      if (isAffiliate && !rawStoreUrl.includes("connectadtrack.com")) {
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

    trackEvent({
      site: "CouponFlock",
      eventType: "coupon_click",
      storeSlug,
      storeName,
      couponId: String(coupon.id),
      couponCode: isDirect ? "AUTO-DEAL" : coupon.code,
      discount: coupon.discount,
      targetUrl: storeUrl,
    });

    if (!isDirect && coupon.code) {
      const ua2 = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const iosDevice = /iPhone|iPad|iPod/i.test(ua2);
      if (!iosDevice) {
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
        } catch {}
      }
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code).catch(() => {});
      }
    }

    try {
      const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
      window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
    } catch (e) {
      console.warn("Failed to open CouponFlock in a new tab:", e);
    }

    setActiveCoupon(coupon);
    window.location.href = storeUrl;
  };

  // Dynamically find matching stores based on the search query
  const matchedStores = useMemo(() => {
    if (searchQuery.trim() === "") return [];
    const rawQuery = searchQuery.trim().toLowerCase();

    if (rawQuery.endsWith("--") || rawQuery.includes("--")) {
      return secretStores;
    }

    const query = rawQuery;
    const cleanQuery = query.replace(/[^a-z0-9]/g, "");

    const matches = initialStores.filter((store) => {
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
    return matches.filter((store) => {
      const key = store.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [initialStores, searchQuery, secretStores]);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CouponFlock",
    url: "https://couponflock.com",
    description: "Verified promo codes, perforated discount vouchers, and instant store deals across 700+ top retail brands.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://couponflock.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className={styles.mainContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* =========================================================
          COUPONFLOCK HERO SECTION
          ========================================================= */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            ✓ 100% Hand-Tested Promo Codes &amp; Verified Store Deals
          </span>
          <h1 className={styles.heroTitle}>
            Smart Savings Made Simple. <span className={styles.gradientText}>Save at 700+ Brands.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Browse thousands of verified promo codes and direct store discounts updated daily. Click any coupon to copy the code and save at checkout.
          </p>

          {/* Search Bar */}
          <div className={styles.searchBarWrapper}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for stores, brands, or promo codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const q = searchQuery.trim();
                  if (q) {
                    trackEvent({
                      site: "CouponFlock",
                      eventType: "search",
                      searchQuery: q.endsWith("--") ? "[secret-operator]" : q,
                    });
                  }
                  if (q.endsWith("--") || q.includes("--")) {
                    const clean = q.replace(/-+$/, "").trim().toLowerCase();
                    if (clean === "telemetry" || clean === "analytics") {
                      window.location.href = "/admin/telemetry";
                      return;
                    }
                    if (secretStores.length > 0) {
                      const target = secretStores[0];
                      window.location.href =
                        target.website && target.website.startsWith("/")
                          ? target.website
                          : `/store/${target.slug}`;
                      return;
                    }
                    if (clean) {
                      fetch(`/api/vault-search?q=${encodeURIComponent(q)}`)
                        .then((res) => res.json())
                        .then((data) => {
                          if (data && data.results && data.results.length > 0) {
                            const top = data.results[0];
                            window.location.href =
                              top.website && top.website.startsWith("/")
                                ? top.website
                                : `/store/${top.slug}`;
                          } else {
                            window.location.href = `/store/${clean}`;
                          }
                        })
                        .catch(() => {
                          window.location.href = `/store/${clean}`;
                        });
                      return;
                    }
                  }
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
            {searchQuery.trim() !== "" &&
              (isSecretMode ? secretStores.length > 0 || isSecretSearching : matchedStores.length > 0) && (
                <div className={styles.searchSuggestionsDropdown}>
                  {isSecretMode && (
                    <div
                      style={{
                        padding: "8px 14px",
                        background: "#ecfdf5",
                        borderBottom: "1px solid #a7f3d0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#047857",
                      }}
                    >
                      <span>🔓 Confidential Vault Search Active</span>
                      <span>{isSecretSearching ? "Searching..." : `${secretStores.length} Found`}</span>
                    </div>
                  )}
                  {(isSecretMode ? secretStores : matchedStores).map((store) => {
                    const hrefUrl =
                      isSecretMode && store.website && store.website.startsWith("/")
                        ? store.website
                        : `/store/${store.slug}`;
                    return (
                      <a
                        key={store.id || store.slug}
                        href={hrefUrl}
                        className={styles.searchSuggestionItem}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = hrefUrl;
                        }}
                      >
                        {store.logo ? (
                          <img src={store.logo} alt={store.name} className={styles.suggestionLogo} />
                        ) : (
                          <div className={styles.suggestionFallback}>{store.name.charAt(0).toUpperCase()}</div>
                        )}
                        <span className={styles.suggestionName}>{store.name}</span>
                        <span className={styles.suggestionBadge}>View Vouchers →</span>
                      </a>
                    );
                  })}
                </div>
              )}
          </div>

          {/* Popular Searches */}
          <div className={styles.popularSearches}>
            <span className={styles.popularSearchesTitle}>Popular Brands:</span>
            {["Nike", "Apple", "Sephora", "Adidas", "Lululemon", "Samsung"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className={styles.popularSearchTag}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* 4-Column Emerald Key Metrics Trust Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
              gap: "12px",
              marginTop: "32px",
              padding: "16px 20px",
              background: "#ffffff",
              border: "1px solid #a7f3d0",
              borderRadius: "16px",
              boxShadow: "0 4px 14px rgba(5, 150, 105, 0.06)",
            }}
          >
            <div>
              <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#059669" }}>700+</div>
              <div style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>Partner Brands</div>
            </div>
            <div>
              <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#059669" }}>2,800+</div>
              <div style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>Verified Vouchers</div>
            </div>
            <div>
              <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#047857" }}>Every 4 Hrs</div>
              <div style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>Live Code Testing</div>
            </div>
            <div>
              <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a" }}>100% Free</div>
              <div style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>No Sign-Up Needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Auto-Scrolling Trending Brands Carousel */}
      <div className={styles.carouselContainer}>
        <p className={styles.carouselTitle}>Trending Partner Stores — Click Any Store to View Verified Coupons</p>
        <div className={styles.carouselSlider}>
          <div className={styles.carouselTrack}>
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
                    width={28}
                    height={28}
                  />
                ) : (
                  <div className={styles.carouselFallback}>{store.name.charAt(0).toUpperCase()}</div>
                )}
                <span>{store.name}</span>
              </a>
            ))}
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
                    width={28}
                    height={28}
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
        {/* Featured Top Partner Brands (4-Card Executive Row) */}
        <section style={{ marginBottom: "44px" }}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Featured Partner Brands</h2>
              <p className={styles.sectionSubtitle}>
                Most redeemed retail partners with verified active promo codes today
              </p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {initialStores.slice(0, 4).map((store, idx) => {
              const highlights = [
                "Up to 40% Off + Extra Promo Code",
                "Verified Sitewide Discount + Free Shipping",
                "20% Off Member & Seasonal Clearance",
                "15% Off First Order + Bonus Gift",
              ];
              return (
                <a
                  key={`feat-${store.slug}`}
                  href={`/store/${store.slug}`}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #d1fae5",
                    borderTop: "4px solid #059669",
                    borderRadius: "16px",
                    padding: "20px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "14px",
                    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        color: "#047857",
                        background: "#ecfdf5",
                        border: "1px solid #a7f3d0",
                        padding: "3px 9px",
                        borderRadius: "999px",
                      }}
                    >
                      ✓ Verified Today
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        color: "#b45309",
                        background: "#fffbeb",
                        border: "1px solid #fde68a",
                        padding: "3px 8px",
                        borderRadius: "999px",
                      }}
                    >
                      ★ Top Brand
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {store.logo ? (
                      <img
                        src={store.logo}
                        alt={store.name}
                        style={{
                          width: "48px",
                          height: "48px",
                          objectFit: "contain",
                          borderRadius: "10px",
                          border: "1px solid #f1f5f9",
                          padding: "4px",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "10px",
                          background: "#ecfdf5",
                          color: "#059669",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                        }}
                      >
                        {store.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>{store.name}</div>
                      <div style={{ fontSize: "0.82rem", color: "#475569", marginTop: "2px" }}>
                        {highlights[idx % highlights.length]}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "10px",
                      borderTop: "1px solid #f1f5f9",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#059669",
                    }}
                  >
                    <span>View Active Vouchers</span>
                    <span>→</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Browse All Stores Grid */}
        <section id="stores" className={styles.filterSection}>
          <h2 className={styles.sectionTitle}>Browse All Partner Stores</h2>
          <p className={styles.sectionSubtitle}>
            Select any store below to view all active promo codes and verified discounts.
          </p>
          <div className={styles.storesGrid}>
            {paginatedStores.map((store) => (
              <a
                key={store.id || store.slug}
                href={`/store/${store.slug}`}
                className={styles.storeCard}
              >
                {store.logo ? (
                  <div className={styles.storeCardLogoWrapper}>
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

        {/* Coupons Feed Section */}
        <section id="coupons" className={styles.couponsSection}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                {selectedStoreSlug
                  ? `${initialStores.find((s) => s.slug === selectedStoreSlug)?.name || "Store"} Coupons`
                  : "Top Verified Promo Codes & Deals"}
              </h2>
              <p className={styles.sectionSubtitle}>
                Showing {filteredCoupons.length} active offers tested by our team
              </p>
            </div>

            {/* Clean Emerald Filter & Sort Bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              {[
                { key: "all", label: "All Deals" },
                { key: "code", label: "Promo Codes" },
                { key: "deal", label: "Store Sales" },
                { key: "ship", label: "Free Shipping" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setVoucherFilter(tab.key as any)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "10px",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    border: voucherFilter === tab.key ? "1px solid #059669" : "1px solid #cbd5e1",
                    background: voucherFilter === tab.key ? "#059669" : "#ffffff",
                    color: voucherFilter === tab.key ? "#ffffff" : "#334155",
                    transition: "all 0.15s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "10px",
                  fontSize: "0.84rem",
                  fontWeight: 700,
                  border: "1px solid #cbd5e1",
                  background: "#ffffff",
                  color: "#0f172a",
                  cursor: "pointer",
                }}
              >
                <option value="popular">Sort: Most Popular</option>
                <option value="discount">Sort: Highest Discount</option>
                <option value="newest">Sort: Newest Added</option>
              </select>
            </div>
          </div>

          {filteredCoupons.length > 0 ? (
            <>
              <div className={styles.couponsGrid}>
                {paginatedCoupons.map((coupon) => (
                  <CouponCard
                    key={coupon.id}
                    coupon={coupon}
                    onGetCode={handleGetCode}
                  />
                ))}
              </div>
              {renderPagination(couponPage, totalCouponPages, setCouponPage, "coupons")}
            </>
          ) : (
            <div className={styles.emptyState}>
              <h3 className={styles.emptyTitle}>No matching coupons found</h3>
              <p className={styles.emptyDesc}>
                We couldn&apos;t find any active offers matching &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedStoreSlug(null);
                  setVoucherFilter("all");
                }}
                className={styles.btnResetFilters}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Copy Modal */}
      <CopyModal
        coupon={activeCoupon}
        onClose={() => setActiveCoupon(null)}
      />
    </div>
  );
}
