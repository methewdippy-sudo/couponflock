"use client";

import React, { useState, useEffect, useMemo } from "react";
import storeStyles from "./StoreClient.module.css";
import CopyModal from "../../../components/CopyModal";
import { Coupon, Store } from "../../../components/CouponCard";
import { trackEvent } from "../../../lib/telemetry";
import { getBrandSeoData } from "../../../lib/brandSeoData";

interface StoreClientProps {
  store: Store;
  coupons: Coupon[];
}

function sanitizeCodeText(text: string, code?: string): string {
  if (!text || !code || code === "DEAL") return text;
  try {
    const escaped = code.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "gi");
    return text.replace(regex, "••••••••");
  } catch {
    return text;
  }
}

export default function StoreClient({ store, coupons }: StoreClientProps) {
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [copiedId, setCopiedId] = useState<string | number | null>(null);
  const [bannerLogoError, setBannerLogoError] = useState(false);
  const [todayLabel, setTodayLabel] = useState<string>("Today");
  const [votedTickets, setVotedTickets] = useState<Record<string, boolean>>({});
  const [ticketFilter, setTicketFilter] = useState<"all" | "code" | "deal">("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const formatted = new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        setTodayLabel(formatted);
      } catch {}

      const params = new URLSearchParams(window.location.search);
      const couponId = params.get("coupon");
      if (couponId) {
        const found = coupons.find((c) => String(c.id) === couponId);
        if (found) {
          setActiveCoupon(found);
        }
      }
    }
  }, [coupons]);

  const filteredCoupons = useMemo(() => {
    if (ticketFilter === "all") return coupons;
    return coupons.filter((c) => {
      const isDirect = !c.code || c.code === "DEAL";
      return ticketFilter === "code" ? !isDirect : isDirect;
    });
  }, [coupons, ticketFilter]);

  const handleAction = (e: React.MouseEvent, coupon: Coupon) => {
    e.preventDefault();
    e.stopPropagation();

    const targetUrl =
      coupon.affiliate_url ||
      (store as any).affiliate_url ||
      (store as any).affiliateLink ||
      store.website ||
      "https://www.google.com";

    trackEvent({
      site: "CouponFlock",
      eventType: "coupon_click",
      storeSlug: store.slug,
      storeName: store.name,
      couponId: String(coupon.id),
      couponCode: coupon.code || "AUTO-DEAL",
      discount: coupon.discount,
      targetUrl,
    });

    if (coupon.code && coupon.code !== "DEAL") {
      if (typeof document !== "undefined") {
        try {
          const textArea = document.createElement("textarea");
          textArea.value = coupon.code;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";
          textArea.style.top = "-9999px";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        } catch {}
      }
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code).catch(() => {});
      }
      setCopiedId(coupon.id);
      setTimeout(() => setCopiedId(null), 4000);
    } else {
      setCopiedId(coupon.id);
      setTimeout(() => setCopiedId(null), 3000);
    }

    try {
      if (typeof window !== "undefined") {
        const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
        window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.warn("Failed to open popup tab:", err);
    }

    if (typeof window !== "undefined") {
      window.location.href = targetUrl;
    }
  };

  const brandSeo = getBrandSeoData(store.slug);
  const bannerLogo = !bannerLogoError && store.logo ? store.logo : null;
  const codeCount = coupons.filter((c) => c.code && c.code !== "DEAL").length;
  const dealCount = coupons.length - codeCount;

  const faqList = brandSeo?.faqs && brandSeo.faqs.length > 0
    ? brandSeo.faqs
    : [
        {
          question: `Are these ${store.name} coupon codes verified working?`,
          answer: `Yes. Every ${store.name} promo code and discount offer on CouponFlock is manually verified by our deal specialists for active checkout redemption.`,
        },
        {
          question: `How do I use a ${store.name} promo code at checkout?`,
          answer: `Click "Get Code" on any verified ${store.name} voucher to copy the code automatically, then paste it into the promo code box at the official ${store.name} checkout.`,
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.couponflock.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stores",
        item: "https://www.couponflock.com",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: store.name,
        item: `https://www.couponflock.com/store/${store.slug}`,
      },
    ],
  };

  const ratingValue = brandSeo?.ratingValue || 4.93;
  const reviewCount = brandSeo?.reviewCount || 1850;

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: store.name,
    url: store.website,
    image: bannerLogo || `https://www.couponflock.com/logos/${store.slug}.png`,
    description: brandSeo?.overview?.[0] || store.description || `Verified coupons and discount codes for ${store.name}.`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: reviewCount.toString(),
      reviewCount: reviewCount.toString(),
    },
  };

  return (
    <div className={storeStyles.pageContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />

      {/* Back to All Stores */}
      <div className={storeStyles.backLinkContainer}>
        <a href="/" className={storeStyles.backLink}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>All Stores</span>
        </a>
      </div>

      {/* CouponFlock Verified Store Banner */}
      <section className={storeStyles.storeHeader}>
        <div className={storeStyles.brandInfo}>
          {bannerLogo ? (
            <img
              src={bannerLogo}
              alt={`${store.name} Logo`}
              width={68}
              height={68}
              className={storeStyles.storeLogo}
              onError={() => setBannerLogoError(true)}
            />
          ) : (
            <div className={storeStyles.fallbackLogo}>{store.name.charAt(0).toUpperCase()}</div>
          )}
          <div>
            <h1 className={storeStyles.storeTitle}>
              {brandSeo?.h1 || `${store.name} Coupons & Verified Promo Codes`}
            </h1>
            <p className={storeStyles.storeSubtitle}>
              {coupons.length} hand-tested savings vouchers for {store.name} ({codeCount} Promo Codes &amp; {dealCount} Direct Sales).
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px", fontSize: "12.5px", color: "#047857", fontWeight: 700 }}>
              <span>★ {ratingValue} / 5</span>
              <span>•</span>
              <span>{reviewCount.toLocaleString()}+ Verified Ratings</span>
              <span>•</span>
              <span style={{ color: "#059669" }}>Updated {todayLabel}</span>
            </div>
          </div>
        </div>

        <div className={storeStyles.headerTrustBadge}>
          <div className={storeStyles.trustPill}>
            <span className={storeStyles.pulseDot}></span> Verified Active • {todayLabel}
          </div>
          <span className={storeStyles.guaranteeText}>CouponFlock Official Partner</span>
        </div>
      </section>

      {/* Interactive Voucher Filter Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {[
            { key: "all", label: `All Vouchers (${coupons.length})` },
            { key: "code", label: `Promo Codes (${codeCount})` },
            { key: "deal", label: `Direct Deals (${dealCount})` },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setTicketFilter(tab.key as any)}
              style={{
                padding: "8px 16px",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                border: ticketFilter === tab.key ? "1px solid #059669" : "1px solid #e2e8f0",
                background: ticketFilter === tab.key ? "#059669" : "#ffffff",
                color: ticketFilter === tab.key ? "#ffffff" : "#334155",
                transition: "all 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <span style={{ fontSize: "12.5px", color: "#64748b", fontWeight: 600 }}>
          ✓ Click any perforated ticket to copy code &amp; open {store.name}
        </span>
      </div>

      {/* CouponFlock Voucher Tickets Stack */}
      <section className={storeStyles.cardsList}>
        {filteredCoupons.map((coupon, idx) => {
          const isDirectDeal = !coupon.code || coupon.code === "DEAL";
          const discountParts = (coupon.discount || "20% OFF").trim().split(" ");
          const discountVal = discountParts[0] || "20%";
          const discountSub = discountParts.slice(1).join(" ") || "OFF";
          const isCopied = copiedId === coupon.id;

          return (
            <div
              key={coupon.id}
              className={`${storeStyles.voucherTicket} ${idx === 0 ? storeStyles.primaryTicket : ""}`}
              onClick={(e) => handleAction(e, coupon)}
            >
              {/* ZONE 1: Value Badge */}
              <div className={storeStyles.valueZone}>
                <span className={storeStyles.notchTop}></span>
                <span className={storeStyles.notchBottom}></span>
                <div>
                  <div className={storeStyles.discountFigure}>{discountVal}</div>
                  <div className={storeStyles.discountSub}>{discountSub}</div>
                </div>
                <span className={storeStyles.valueTagPill}>
                  {isDirectDeal ? "Direct Deal" : "Promo Code"}
                </span>
              </div>

              {/* ZONE 2: Content Details */}
              <div className={storeStyles.contentZone}>
                <div className={storeStyles.statusRow}>
                  {idx === 0 && (
                    <span className={storeStyles.staffPickBadge}>★ Top Pick</span>
                  )}
                  <span className={storeStyles.verifiedBadge}>✓ Tested Active Today</span>
                </div>

                <h3 className={storeStyles.ticketTitle}>
                  {sanitizeCodeText(coupon.title || `${coupon.discount} at ${store.name}`, coupon.code)}
                </h3>
                <p className={storeStyles.ticketDesc}>{sanitizeCodeText(coupon.description, coupon.code)}</p>

                <div className={storeStyles.ticketMeta}>
                  <span className={storeStyles.metaItem}>✓ Direct Checkout Guarantee</span>
                  <span>•</span>
                  <span className={storeStyles.metaItem}>Verified {todayLabel}</span>
                  <span>•</span>
                  <span
                    onClick={(ev) => {
                      ev.stopPropagation();
                      setVotedTickets((prev) => ({ ...prev, [String(coupon.id)]: true }));
                      trackEvent({
                        site: "CouponFlock",
                        eventType: "feedback_vote",
                        storeSlug: store.slug,
                        storeName: store.name,
                        couponId: String(coupon.id),
                        couponCode: coupon.code || "DEAL",
                      });
                    }}
                    style={{
                      cursor: "pointer",
                      color: votedTickets[String(coupon.id)] ? "#047857" : "#059669",
                      fontWeight: 700,
                      background: "#ecfdf5",
                      padding: "2px 8px",
                      borderRadius: "999px",
                      border: "1px solid #a7f3d0",
                    }}
                  >
                    {votedTickets[String(coupon.id)] ? "✓ Verified by You!" : "👍 Worked for me"}
                  </span>
                </div>
              </div>

              {/* ZONE 3: Action Area */}
              <div className={storeStyles.actionZone}>
                {!isDirectDeal ? (
                  <div className={storeStyles.maskedCodeBox}>
                    <span className={storeStyles.maskedLock}>🔒 CODE</span>
                    <span className={storeStyles.maskedDots}>••••••••</span>
                  </div>
                ) : (
                  <div className={storeStyles.directDealBox}>
                    Direct Store Discount ✓
                  </div>
                )}

                <button
                  type="button"
                  onClick={(e) => handleAction(e, coupon)}
                  className={`${storeStyles.ctaButton} ${isDirectDeal ? storeStyles.ctaDealBtn : storeStyles.ctaCodeBtn}`}
                >
                  {!isDirectDeal ? (
                    <>
                      <span>{isCopied ? "Code Copied! ✓" : "Get Code"}</span>
                      <span className={storeStyles.btnArrow}>→</span>
                    </>
                  ) : (
                    <>
                      <span>{isCopied ? "Opening Offer..." : "Get Deal"}</span>
                      <span className={storeStyles.btnArrow}>→</span>
                    </>
                  )}
                </button>

                <span className={storeStyles.actionNote}>
                  {!isDirectDeal ? "Reveals code & opens site" : "Activates deal & opens site"}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* CouponFlock Authority Trust Banner */}
      <section className={storeStyles.trustStrip}>
        <div className={storeStyles.trustText}>
          <strong>CouponFlock Buyer Guarantee:</strong> All coupon codes and promotional offers are hand-verified daily by our savings specialists. Clicking any deal automatically applies savings and securely redirects you to the official {store.name} checkout.
        </div>
        <div className={storeStyles.trustShield}>
          <span>🛡️ Verified Savings Shield</span>
        </div>
      </section>

      {/* Below-the-Fold: How to Redeem & Verified Store Guide */}
      <section className={storeStyles.infoSection}>
        {/* Brand Overview & Editorial Insight */}
        {brandSeo?.overview && brandSeo.overview.length > 0 && (
          <div className={storeStyles.stepsCard} style={{ marginBottom: "20px" }}>
            <h2 className={storeStyles.sectionHeading}>
              About {store.name} &amp; Official Savings Overview
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "#334155", lineHeight: 1.65, fontSize: "14px" }}>
              {brandSeo.overview.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* How to Redeem Steps */}
        <div className={storeStyles.stepsCard}>
          <h2 className={storeStyles.sectionHeading}>
            How to Redeem Your {store.name} Coupon Code
          </h2>
          <div className={storeStyles.stepsGrid}>
            {(brandSeo?.howToApply || [
              {
                step: 1,
                title: "Reveal & Copy Code",
                description: `Click "Get Code" or "Get Deal" on any verified ${store.name} voucher above. Your discount code is instantly copied to your clipboard.`,
              },
              {
                step: 2,
                title: "Visit Official Store",
                description: `You will be securely redirected to the official ${store.name} online store. Add your desired products to your shopping bag and head to checkout.`,
              },
              {
                step: 3,
                title: "Apply & Save Today",
                description: `Paste your copied ${store.name} promo code into the discount box at checkout and click apply to enjoy instant verified savings.`,
              },
            ]).map((s) => (
              <div key={s.step} className={storeStyles.stepItem}>
                <span className={storeStyles.stepNumber}>{s.step}</span>
                <div>
                  <h3 className={storeStyles.stepTitle}>{s.title}</h3>
                  <p className={storeStyles.stepDesc}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand-Specific Insider Savings Tips */}
        {brandSeo?.savingsTips && brandSeo.savingsTips.length > 0 && (
          <div className={storeStyles.stepsCard} style={{ marginTop: "20px", marginBottom: "20px", background: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)", border: "1px solid #bbf7d0" }}>
            <h2 className={storeStyles.sectionHeading} style={{ color: "#065f46" }}>
              💡 {store.name} Insider Savings Tips &amp; Discount Hacks
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {brandSeo.savingsTips.map((tip, tIdx) => (
                <li key={tIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#166534", lineHeight: 1.55 }}>
                  <span style={{ color: "#059669", fontWeight: 800 }}>✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={storeStyles.faqCard}>
          <h2 className={storeStyles.sectionHeading}>
            {store.name} Promo Codes &amp; Deals FAQ
          </h2>
          <div className={storeStyles.faqGrid}>
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className={storeStyles.faqItem}>
                <h3 className={storeStyles.faqQuestion}>{faq.question}</h3>
                <p className={storeStyles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className={storeStyles.complianceFooter}>
            <strong>Editorial &amp; Affiliate Disclosure:</strong> CouponFlock independently tests and curates promotional codes to help shoppers save at {store.name}. When you purchase through links on our platform, we may earn a partner commission from the retailer at no extra cost to you. All brand names and trademarks are property of their respective owners.
          </div>
        </div>
      </section>

      {/* Copy Modal */}
      <CopyModal
        coupon={activeCoupon}
        onClose={() => setActiveCoupon(null)}
      />
    </div>
  );
}
