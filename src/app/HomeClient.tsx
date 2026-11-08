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

const BENTO_PICKS = [
  {
    badge: "🔥 #1 FLOCK PICK TODAY",
    brand: "Nike Official",
    slug: "nike",
    offer: "Up to 40% Off Member Footwear & Apparel",
    sub: "Verified 18 mins ago • 1,420 Flock Uses",
    color: "#065f46",
    accent: "#34d399",
  },
  {
    badge: "⚡ FLASH VOUCHER DROP",
    brand: "Apple Store",
    slug: "apple",
    offer: "$150 Instant Trade-In & Accessory Credits",
    sub: "Verified 35 mins ago • 980 Flock Uses",
    color: "#0f172a",
    accent: "#fbbf24",
  },
  {
    badge: "🏆 MOST REDEEMED",
    brand: "Sephora Beauty",
    slug: "sephora",
    offer: "20% Off Prestige Skincare & Gift Sets",
    sub: "Verified 1 hour ago • 1,890 Flock Uses",
    color: "#064e3b",
    accent: "#6ee7b7",
  },
];

export default function HomeClient({ initialCoupons, initialStores }: HomeClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStoreSlug, setSelectedStoreSlug] = useState<string | null>(null);
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [voucherFilter, setVoucherFilter] = useState<"all" | "code" | "deal">("all");
  const [sortBy, setSortBy] = useState<"popular" | "discount" | "newest">("popular");

  const [storePage, setStorePage] = useState(1);
  const [couponPage, setCouponPage] = useState(1);

  const STORES_PER_PAGE = 16;
  const COUPONS_PER_PAGE = 12;

  const isFirstRender = React.useRef(true);

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

  // Filter and sort coupons
  const filteredCoupons = useMemo(() => {
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
        if (voucherFilter === "code" && !hasCode) return false;
        if (voucherFilter === "deal" && hasCode) return false;
      }

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const cleanQuery = query.replace(/[^a-z0-9]/g, "");
        const cleanStoreName = storeName.toLowerCase().replace(/[^a-z0-9]/g, "");
        const cleanStoreSlug = storeSlug.toLowerCase().replace(/[^a-z0-9]/g, "");

        const matchesStore = storeName
          ? storeName.toLowerCase().includes(query) ||
            cleanStoreName.includes(cleanQuery) ||
            cleanStoreSlug.includes(cleanQuery)
          : false;
        const matchesCode = coupon.code ? coupon.code.toLowerCase().includes(query) : false;
        const matchesDesc = coupon.description ? coupon.description.toLowerCase().includes(query) : false;
        const matchesDiscount = coupon.discount ? coupon.discount.toLowerCase().includes(query) : false;

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

  // Dynamically filter stores by search query
  const filteredStores = useMemo(() => {
    if (searchQuery.trim() === "") return initialStores;
    const query = searchQuery.toLowerCase().trim();
    const SENSITIVE_KEYWORDS = [
      "im8", "qidi", "berkey", "pongbot", "candy-in-bulk", "candy in bulk", "candyinbulk",
      "dc-house", "dchouse", "larine", "swa-sabers", "swasabers", "chompshop"
    ];
    if (!query.endsWith("--") && SENSITIVE_KEYWORDS.some((k) => query.includes(k))) {
      return [];
    }
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

  // Dynamically find matching stores based on the search query with automatic deduplication
  const matchedStores = useMemo(() => {
    if (searchQuery.trim() === "") return [];
    const rawQuery = searchQuery.trim().toLowerCase();

    if (rawQuery.endsWith("--")) {
      const secretKey = rawQuery.slice(0, -2).trim().replace(/[^a-z0-9]/g, "");
      if (secretKey === "telemetry" || secretKey === "analytics") {
        if (typeof window !== "undefined") window.location.href = "/admin/telemetry";
        return [];
      }
      const secretRoutes: Record<string, { name: string; slug: string; url: string; logo?: string }> = {
        im8: { name: "iM8 Health", slug: "im8-health-us", url: "/deals/im8-health-us", logo: "/logos/im8health.png" },
        im8health: { name: "iM8 Health", slug: "im8-health-us", url: "/deals/im8-health-us", logo: "/logos/im8health.png" },
        pongbot: { name: "PongBot Sports", slug: "pongbot-us", url: "/deals/pongbot-us", logo: "/logos/pongbot.png" },
        swasabers: { name: "SWA Sabers", slug: "swa-sabers-us", url: "/deals/swa-sabers-us", logo: "/logos/swa-sabers.png" },
        candyinbulk: { name: "Candy In Bulk", slug: "candy-in-bulk-us", url: "/deals/candy-in-bulk-us", logo: "/logos/candyroo.png" },
        candy: { name: "Candy In Bulk", slug: "candy-in-bulk-us", url: "/deals/candy-in-bulk-us", logo: "/logos/candyroo.png" },
        chompshop: { name: "ChompShop", slug: "chompshop-us", url: "/deals/chompshop-us", logo: "/logos/chompshop.png" },
        dchouse: { name: "DC House", slug: "dc-house", url: "/store/dc-house", logo: "/logos/dc-house.png" },
        usaberkey: { name: "USA Berkey Filters", slug: "usa-berkey-filters", url: "/store/usa-berkey-filters", logo: "/logos/usa-berkey-filters.png" },
        berkey: { name: "USA Berkey Filters", slug: "usa-berkey-filters", url: "/store/usa-berkey-filters", logo: "/logos/usa-berkey-filters.png" },
        qidi: { name: "QIDI Tech", slug: "qidi-tech", url: "/store/qidi-tech", logo: "/logos/qidi.png" },
        larine: { name: "Larine Enamel Care", slug: "larine", url: "/store/larine", logo: "/logos/buy-larine-u.png" },
      };
      if (secretRoutes[secretKey]) {
        const item = secretRoutes[secretKey];
        return [
          {
            id: 999999,
            name: item.name,
            slug: item.slug,
            logo: item.logo,
            website: item.url,
            affiliate_url: item.url,
          } as Store,
        ];
      }
    }

    const SENSITIVE_KEYWORDS = [
      "im8", "qidi", "berkey", "pongbot", "candy-in-bulk", "candy in bulk", "candyinbulk",
      "dc-house", "dchouse", "larine", "swa-sabers", "swasabers", "chompshop"
    ];
    if (SENSITIVE_KEYWORDS.some((k) => rawQuery.includes(k))) {
      return [];
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
  }, [initialStores, searchQuery]);

  return (
    <div className={styles.mainContainer}>
      {/* =========================================================
          COUPONFLOCK DEAL RADAR + 3-CARD BENTO HERO
          ========================================================= */}
      <section className={styles.heroSection} style={{ paddingBottom: "48px" }}>
        <div className={styles.heroContent} style={{ maxWidth: "920px" }}>
          <span
            className={styles.heroBadge}
            style={{
              background: "#ecfdf5",
              border: "1px solid #6ee7b7",
              color: "#047857",
            }}
          >
            🦅 Smart Shopper Deal Radar — 701+ Verified Brands &amp; Perforated Vouchers
          </span>
          <h1 className={styles.heroTitle} style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
            Flock to Verified Savings. <span className={styles.gradientText}>Peel &amp; Save Instantly.</span>
          </h1>
          <p className={styles.heroSubtitle} style={{ marginBottom: "28px" }}>
            Our community deal radar tests every promo voucher every 4 hours. Click any perforated ticket below to copy your verified code and unlock instant cart discounts.
          </p>

          {/* Search Radar Bar */}
          <div className={styles.searchBarWrapper} style={{ border: "2px solid #a7f3d0", maxWidth: "640px" }}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search 701+ brands, perforated vouchers, or items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const q = searchQuery.trim().toLowerCase();
                  if (q) {
                    trackEvent({
                      site: "CouponFlock",
                      eventType: "search",
                      searchQuery: q.endsWith("--") ? "[secret-operator]" : q,
                    });
                  }
                  if (q.endsWith("--")) {
                    const secretKey = q.slice(0, -2).trim().replace(/[^a-z0-9]/g, "");
                    if (secretKey === "telemetry" || secretKey === "analytics") {
                      window.location.href = "/admin/telemetry";
                      return;
                    }
                    const secretRoutes: Record<string, string> = {
                      im8: "/deals/im8-health-us",
                      im8health: "/deals/im8-health-us",
                      pongbot: "/deals/pongbot-us",
                      swasabers: "/deals/swa-sabers-us",
                      candyinbulk: "/deals/candy-in-bulk-us",
                      candy: "/deals/candy-in-bulk-us",
                      chompshop: "/deals/chompshop-us",
                      dchouse: "/store/dc-house",
                      usaberkey: "/store/usa-berkey-filters",
                      berkey: "/store/usa-berkey-filters",
                      qidi: "/store/qidi-tech",
                      larine: "/store/larine",
                    };
                    if (secretRoutes[secretKey]) {
                      window.location.href = secretRoutes[secretKey];
                      return;
                    } else if (secretKey.length > 2) {
                      window.location.href = "/deals/" + secretKey;
                      return;
                    }
                  }
                  if (matchedStores.length > 0) {
                    const topStore = matchedStores[0];
                    if (topStore && topStore.slug) {
                      window.location.href = topStore.id === 999999 && topStore.website ? topStore.website : `/store/${topStore.slug}`;
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
                      window.location.href = store.id === 999999 && store.website ? store.website : `/store/${store.slug}`;
                    }}
                  >
                    {store.logo ? (
                      <img src={store.logo} alt={store.name} className={styles.suggestionLogo} />
                    ) : (
                      <div className={styles.suggestionFallback}>{store.name.charAt(0).toUpperCase()}</div>
                    )}
                    <span className={styles.suggestionName}>{store.name}</span>
                    <span className={styles.suggestionBadge}>Peel Vouchers</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Trending Flock Tags */}
          <div className={styles.popularSearches}>
            <span className={styles.popularSearchesTitle}>🔥 Flock Radar Picks:</span>
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

          {/* 3-Card Bento Highlight Grid inside Hero (Unique to CouponFlock) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
              width: "100%",
              marginTop: "34px",
              textAlign: "left",
            }}
          >
            {BENTO_PICKS.map((pick) => (
              <a
                key={pick.slug}
                href={`/store/${pick.slug}`}
                style={{
                  background: pick.color,
                  color: "#ffffff",
                  borderRadius: "18px",
                  padding: "20px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "10px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 12px 28px -8px rgba(6, 78, 59, 0.25)",
                  transition: "transform 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      padding: "3px 9px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.12)",
                      color: pick.accent,
                    }}
                  >
                    {pick.badge}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "#a7f3d0", fontWeight: 700 }}>Peel Ticket →</span>
                </div>
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>{pick.brand}</div>
                  <div style={{ fontSize: "0.88rem", color: "#ecfdf5", marginTop: "3px", fontWeight: 500 }}>{pick.offer}</div>
                </div>
                <div style={{ fontSize: "0.73rem", color: "#a7f3d0", borderTop: "1px dashed rgba(255,255,255,0.18)", paddingTop: "8px" }}>
                  ✓ {pick.sub}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Auto-Scrolling Trending Brands Carousel */}
      <div className={styles.carouselContainer}>
        <p className={styles.carouselTitle}>🦅 Live Flock Brand Radar — Click Any Brand to Peel Vouchers</p>
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
                    width={36}
                    height={36}
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
                  <span className={styles.storeCardLink} style={{ fontSize: "0.78rem" }}>Peel Vouchers →</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Featured Brands Grid */}
        <section id="stores" className={styles.filterSection}>
          <h2 className={styles.sectionTitle}>🦅 Browse Vouchers by Brand Radar</h2>
          <p className={styles.sectionSubtitle}>
            Select any brand below to open its dedicated voucher booth and peel 100% tested promo codes.
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
                <span className={styles.storeCardLink}>Peel Vouchers →</span>
              </a>
            ))}
          </div>
          {renderPagination(storePage, totalStorePages, setStorePage, "stores")}
        </section>

        {/* Coupons Grid Section with Interactive Voucher Filter & Sort Controls */}
        <section id="coupons" className={styles.couponsSection}>
          <div className={styles.sectionHeader} style={{ flexWrap: "wrap", gap: "14px" }}>
            <div>
              <h2 className={styles.sectionTitle}>
                {selectedStoreSlug
                  ? `${initialStores.find((s) => s.slug === selectedStoreSlug)?.name} Perforated Vouchers`
                  : "✂️ Live Perforated Voucher Feed"}
              </h2>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              {[
                { id: "all", label: "All Vouchers" },
                { id: "code", label: "✂️ Promo Codes" },
                { id: "deal", label: "⚡ Auto-Applied Sales" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setVoucherFilter(tab.id as "all" | "code" | "deal")}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    border: voucherFilter === tab.id ? "1px solid #059669" : "1px solid #d1fae5",
                    background: voucherFilter === tab.id ? "#059669" : "#f0fdf4",
                    color: voucherFilter === tab.id ? "#ffffff" : "#065f46",
                  }}
                >
                  {tab.label}
                </button>
              ))}

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "popular" | "discount" | "newest")}
                style={{
                  padding: "7px 12px",
                  borderRadius: "999px",
                  border: "1px solid #a7f3d0",
                  background: "#ffffff",
                  color: "#065f46",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <option value="popular">Sort: 🔥 Most Popular</option>
                <option value="discount">Sort: 💎 Highest Savings</option>
                <option value="newest">Sort: ✨ Newly Verified</option>
              </select>

              <span className={couponCountStyle}>
                {filteredCoupons.length} {filteredCoupons.length === 1 ? "Deal" : "Deals"}
              </span>
            </div>
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
              <h3>No vouchers found</h3>
              <p>We couldn&apos;t find any discount codes matching &quot;{searchQuery}&quot;. Try searching for something else or reset your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedStoreSlug(null);
                  setVoucherFilter("all");
                }}
                className={styles.btnResetFilters}
              >
                View All Vouchers
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

const couponCount = "couponCount";
const couponCountStyle = styles[couponCount] || "";
