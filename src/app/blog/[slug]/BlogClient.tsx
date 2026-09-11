"use client";

import React, { useState, useEffect, useMemo } from "react";
import styles from "./BlogClient.module.css";
import { BlogPost, Product, BLOGS_DATABASE } from "../../../lib/blogs";

interface BlogClientProps {
  post: BlogPost;
}

// Simulated real-time buyer names and locations for the FOMO social proof popup
const FOMO_ACTIVITIES = [
  { name: "Emma", location: "London, UK", product: "Maternity Stroller Bundle", time: "2 mins ago" },
  { name: "Jessica", location: "Manchester, UK", product: "Organic Tallow Skin Balm", time: "5 mins ago" },
  { name: "Sophie", location: "Birmingham, UK", product: "Maternity Stroller Bundle", time: "10 mins ago" },
  { name: "Chloe", location: "Bristol, UK", product: "Organic Tallow Skin Balm", time: "12 mins ago" },
  { name: "Hannah", location: "Glasgow, UK", product: "Maternity Stroller Bundle", time: "15 mins ago" }
];

const STORE_LINKS: Record<string, string> = {
  "lululemon": "/store/lululemon",
  "sephora": "/store/sephora",
  "ulta": "/store/ulta",
  "desktronic": "/store/desktronic-us",
  "hellofresh": "/store/hellofresh",
  "turo": "/store/turo",
  "masterclass": "/store/masterclass",
  "agoda": "/store/agoda",
  "viator": "/store/viator",
  "cider": "/store/cider",
  "temu": "/store/temu",
  "costco": "/store/costco",
  "best buy": "/store/best-buy",
  "kohl's": "/store/kohls",
  "asos": "/store/asos",
  "etsy": "/store/etsy",
  "wayfair": "/store/wayfair",
  "home depot": "/store/home-depot",
  "expedia": "/store/expedia",
  "airbnb": "/store/airbnb",
  "anycubic": "/store/anycubic-us",
  "tenways": "/store/tenways",
  "tuxmat": "/store/tuxmat-us",
  "hoteltonight": "/store/hotel-tonight",
  "swatch": "/store/swatch",
  "fitueyes": "/store/fitueyes-uk",
  "hitway": "/store/hitway-uk",
  "wolfbox": "/store/wolfbox-uk",
  "nobody's child": "/store/nobodys-child"
};

export default function BlogClient({ post }: BlogClientProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shareUrl, setShareUrl] = useState("https://couponflock.com");
  
  // Interactive UI States
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [fomoIndex, setFomoIndex] = useState(0);
  const [showFomo, setShowFomo] = useState(false);

  const [activeSection, setActiveSection] = useState("overview");

  // Dynamically query related reviews matching the same category (max 3)
  const relatedPosts = useMemo(() => {
    return Object.values(BLOGS_DATABASE)
      .filter((b) => b.slug !== post.slug && b.category === post.category)
      .slice(0, 3);
  }, [post.slug, post.category]);

  // Set up scroll-spy IntersectionObserver for Table of Contents
  useEffect(() => {
    const sectionIds = ["overview", "comparison", "reviews", "faq", "newsletter"];
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px", // Highlight active section when it crosses the middle of the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(shareUrl);
      setToastMessage("🔗 Copied link to clipboard!");
      setTimeout(() => setToastMessage(null), 2500);
    } catch (e) {
      console.warn("Failed to copy link:", e);
    }
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + shareUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };


  // Monitor scroll for the reading progress bar and initialize shareUrl
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FOMO notifications interval loop
  useEffect(() => {
    // Show first popup after 5 seconds
    const startTimer = setTimeout(() => {
      setShowFomo(true);
    }, 4000);

    const fomoInterval = setInterval(() => {
      setShowFomo(false);
      // Wait for exit animation, then update index and show next
      setTimeout(() => {
        setFomoIndex((prev) => (prev + 1) % FOMO_ACTIVITIES.length);
        setShowFomo(true);
      }, 1000);
    }, 15000); // Trigger every 15 seconds

    return () => {
      clearTimeout(startTimer);
      clearInterval(fomoInterval);
    };
  }, []);

  const handleAction = async (product: Product) => {
    // 1. Copy coupon code to clipboard
    try {
      await navigator.clipboard.writeText(product.couponCode);
      setToastMessage(`⚡ Code "${product.couponCode}" copied! Opening deal...`);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setToastMessage("Opening deal...");
    }

    // 2. Clear toast after 2.5s
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);

    // 3. Redirect to the affiliate URL in a new window/tab, passing subids
    let targetUrl = product.affiliateUrl;
    if (typeof window !== "undefined" && targetUrl) {
      const isAffiliate = targetUrl.includes("admitad") || 
                          targetUrl.includes("convert") || 
                          targetUrl.includes("csl") || 
                          targetUrl.includes("bouquetsbypost") || 
                          targetUrl.includes("litl.si") ||
                          targetUrl.includes("fatcoupon") ||
                          targetUrl.includes("/go/");
      if (isAffiliate) {
        try {
          const utmCampaign = sessionStorage.getItem("utm_campaign") || "";
          const utmTerm = sessionStorage.getItem("utm_term") || "";
          const gclid = sessionStorage.getItem("gclid") || "";
          
          const urlObj = targetUrl.startsWith("http")
            ? new URL(targetUrl)
            : new URL(targetUrl, window.location.origin);
          
          if (utmCampaign) urlObj.searchParams.set("subid1", utmCampaign);
          if (utmTerm) urlObj.searchParams.set("subid2", utmTerm);
          if (gclid) urlObj.searchParams.set("subid3", gclid);
          
          targetUrl = urlObj.toString();
        } catch (e) {
          console.warn("Failed to append tracking SubIDs in BlogClient:", e);
        }
      }
    }

    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setToastMessage("💌 Thanks for joining! Keep an eye on your inbox.");
      setNewsletterEmail("");
      setTimeout(() => setToastMessage(null), 2500);
    }
  };

  // Generate a shareable Pinterest URL for a specific product
  const getPinterestShareUrl = (product: Product) => {
    const media = product.imageUrl;
    const desc = encodeURIComponent(`Love this! Get the ${product.name} from ${product.brand} and use code ${product.couponCode} for discounts!`);
    return `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(media)}&description=${desc}`;
  };

  const renderParagraphWithLinks = (text: string) => {
    let modifiedText: React.ReactNode[] = [text];
    
    Object.entries(STORE_LINKS).forEach(([brand, href]) => {
      const newSegments: React.ReactNode[] = [];
      const regex = new RegExp(`\\b(${brand})\\b`, "gi");
      
      modifiedText.forEach((segment) => {
        if (typeof segment !== "string") {
          newSegments.push(segment);
          return;
        }
        
        const parts = segment.split(regex);
        parts.forEach((part, index) => {
          if (part.toLowerCase() === brand.toLowerCase()) {
            newSegments.push(
              <a 
                key={`${brand}-${index}`} 
                href={href} 
                className={styles.seoInternalLink}
              >
                {part}
              </a>
            );
          } else if (part) {
            newSegments.push(part);
          }
        });
      });
      
      if (newSegments.length > 0) {
        modifiedText = newSegments;
      }
    });
    
    return modifiedText;
  };

  const currentFomo = FOMO_ACTIVITIES[fomoIndex];

  return (
    <div className={styles.container}>
      {/* Top Reading Progress Bar */}
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toast}>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating FOMO Sales Proof Notification */}
      {showFomo && (
        <div className={styles.fomoPopup}>
          <div className={styles.fomoPulse} />
          <div className={styles.fomoContent}>
            <strong>{currentFomo.name}</strong> from {currentFomo.location} <br />
            claimed deal on <strong>{currentFomo.product}</strong> <br />
            <small style={{ color: "#94a3b8" }}>{currentFomo.time}</small>
          </div>
        </div>
      )}

      {/* Back Link */}
      <a href="/blog" className={styles.backLink}>
        <span>←</span> Back to Blogs
      </a>

      {/* Article Header */}
      <header className={styles.header}>
        <span className={styles.categoryBadge}>{post.category}</span>
        <h1 className={styles.title}>{post.title}</h1>
        
        {/* Editorial Author Bio */}
        <div className={styles.authorCard}>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
            alt="Editorial Writer"
            className={styles.authorAvatar}
          />
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>Written by Sarah Jenkins</span>
            <div className={styles.metaInfo}>
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span style={{ color: "#0ea5e9", fontWeight: 600 }}>Verified Editor</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- INTERACTIVE SHOP THE LOOK HOTSPOT CANVAS --- */}
      <div className={styles.hotspotCanvas} id="overview">
        <img
          src={post.bannerImage}
          alt={post.title}
          className={styles.bannerImage}
          loading="eager"
        />

        {/* Hotspots mapped over image */}
        {post.hotspots.map((spot) => (
          <div key={spot.productId}>
            <div
              className={styles.hotspotPin}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onClick={() => setActiveHotspot(activeHotspot === spot.productId ? null : spot.productId)}
              title={`View ${spot.title}`}
            />
            {activeHotspot === spot.productId && (
              <div 
                className={styles.hotspotPopover}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              >
                <span className={styles.popoverTitle}>{spot.title}</span>
                <span className={styles.popoverPrice}>{spot.price}</span>
                <button 
                  onClick={() => {
                    scrollToSection(spot.productId);
                    setActiveHotspot(null);
                  }}
                  className={styles.popoverBtn}
                >
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Responsive Three-Column Split Layout */}
      <div className={styles.layoutWrapper}>
        
        {/* LEFT COLUMN: Floating sticky social share bar */}
        <aside className={styles.shareSidebar}>
          <span className={styles.shareTitle}>Share</span>
          <button onClick={handleCopyLink} className={styles.shareBtn} title="Copy article link">
            🔗
          </button>
          <button onClick={shareOnTwitter} className={styles.shareBtn} title="Share on X (Twitter)">
            🐦
          </button>
          <button onClick={shareOnFacebook} className={styles.shareBtn} title="Share on Facebook">
            👤
          </button>
          <button onClick={shareOnWhatsApp} className={styles.shareBtn} title="Share on WhatsApp">
            💬
          </button>
        </aside>

        {/* MIDDLE COLUMN: Article content components */}
        <main className={styles.mainContent}>
          {/* Dropcap Article Body */}
          <article className={styles.articleBody}>
            {post.content.map((paragraph, index) => {
              const paragraphWithLinks = renderParagraphWithLinks(paragraph);
              
              if (index === 0) {
                const quickAnswerText = paragraph.split(".").slice(0, 2).join(".") + ".";
                
                return (
                  <React.Fragment key={index}>
                    <p className={styles.paragraph}>
                      {paragraphWithLinks}
                    </p>
                    
                    <div className={styles.featuredSnippetBox}>
                      <div className={styles.featuredSnippetHeader}>
                        <span className={styles.featuredSnippetIcon}>💡</span>
                        <strong className={styles.featuredSnippetTitle}>Quick Answer / Summary</strong>
                      </div>
                      <p className={styles.featuredSnippetText}>
                        {renderParagraphWithLinks(quickAnswerText)}
                      </p>
                    </div>
                  </React.Fragment>
                );
              }
              
              const headingText = index === 1 ? "Key Findings & Deep Dive" : "Verdict & Recommendation";
              return (
                <React.Fragment key={index}>
                  <h2 className={styles.seoSubheading}>{headingText}</h2>
                  <p className={styles.paragraph}>
                    {paragraphWithLinks}
                  </p>
                </React.Fragment>
              );
            })}
          </article>

          {/* --- FEATURED COMPARISON TABLE --- */}
          <section id="comparison" style={{ marginBottom: "56px" }}>
            <h2 className={styles.sectionTitle}>At A Glance Comparison</h2>
            <div className={styles.tableContainer}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Discount Code</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {post.products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img src={product.imageUrl} alt={product.name} className={styles.tableImg} />
                      </td>
                      <td style={{ fontWeight: 600 }}>{product.name}</td>
                      <td>
                        <span style={{ color: "#16a34a", fontWeight: 700 }}>{product.price}</span>
                      </td>
                      <td>
                        <code style={{ background: "#f1f5f9", padding: "4px 8px", borderRadius: "6px" }}>{product.couponCode}</code>
                      </td>
                      <td>
                        <button 
                          className={styles.tableBtn}
                          onClick={() => scrollToSection(product.id)}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Products Reviews Grid */}
          <section id="reviews">
            <h2 className={styles.sectionTitle}>Detailed Product Reviews</h2>
            <div className={styles.productGrid}>
              {post.products.map((product) => (
                <div key={product.id} id={product.id} className={styles.productCard}>
                  
                  {/* Product Image & Hover Overlays */}
                  <div className={styles.imageContainer}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={styles.productImage}
                      loading="lazy"
                    />
                    
                    {/* Floating Discount Tag */}
                    <div className={styles.savingsTag}>
                      {product.savingsText}
                    </div>

                    {/* Pinterest Save Button Overlay */}
                    <div className={styles.pinterestOverlay}>
                      <a
                        href={getPinterestShareUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.pinterestBtn}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.56-.99 3.99-.28 1.18.59 2.14 1.76 2.14 2.11 0 3.73-2.23 3.73-5.44 0-2.84-2.04-4.83-4.96-4.83-3.38 0-5.36 2.54-5.36 5.15 0 1.02.39 2.12.88 2.72.1.12.11.23.08.35-.09.37-.28 1.14-.32 1.3-.05.21-.17.26-.39.15-1.46-.68-2.38-2.81-2.38-4.52 0-3.68 2.67-7.06 7.71-7.06 4.05 0 7.2 2.89 7.2 6.75 0 4.03-2.54 7.27-6.07 7.27-1.19 0-2.3-.62-2.68-1.35l-.73 2.78c-.26 1.01-.98 2.27-1.46 3.05C8.98 23.83 10.45 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                        </svg>
                        <span>Save to Pinterest</span>
                      </a>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className={styles.detailsContainer}>
                    <div className={styles.cardHeader}>
                      <span className={styles.brandLabel}>{product.brand}</span>
                      <div className={styles.verifiedBadge}>
                        <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Verified Deal</span>
                      </div>
                    </div>

                    <h3 className={styles.productName}>{product.name}</h3>

                    {/* Rating system */}
                    <div className={styles.ratingRow}>
                      <div className={styles.stars}>★ ★ ★ ★ ★</div>
                      <span>{product.rating.toFixed(1)} ({product.reviewsCount} reviews)</span>
                    </div>

                    <p className={styles.description}>{product.description}</p>

                    {/* --- PROS & CONS GRID --- */}
                    <div className={styles.prosConsGrid}>
                      <div className={styles.prosColumn}>
                        <h4>Pros</h4>
                        <ul className={styles.prosList}>
                          {product.pros.map((pro, idx) => (
                            <li key={idx}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.consColumn}>
                        <h4>Cons</h4>
                        <ul className={styles.consList}>
                          {product.cons.map((con, idx) => (
                            <li key={idx}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing section */}
                    <div className={styles.priceSection}>
                      <span className={styles.currentPrice}>{product.price}</span>
                      {product.originalPrice && (
                        <span className={styles.originalPrice}>
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Actions Footer */}
                    <div className={styles.actionFooter}>
                      <div 
                        className={styles.codeBlock}
                        onClick={() => handleAction(product)}
                        title="Click to copy promo code"
                      >
                        <span className={styles.codeLabel}>Promo Code:</span>
                        <span className={styles.codeValue}>{product.couponCode}</span>
                      </div>
                      
                      <button
                        onClick={() => handleAction(product)}
                        className={styles.shopButton}
                      >
                        <span>Claim Deal</span>
                        <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                          <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* --- FAQ SECTION --- */}
          <section id="faq" className={styles.faqSection}>
            <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
            {post.faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeFaq === index ? styles.faqActive : ""}`}
              >
                <div 
                  className={styles.faqQuestion} 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon}>+</span>
                </div>
                <div className={`${styles.faqAnswer} ${activeFaq === index ? styles.faqAnswerActive : ""}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </section>

          {/* --- NEWSLETTER CAPTURE WIDGET --- */}
          <section id="newsletter" className={styles.newsletterBox}>
            <h3 className={styles.newsTitle}>Unlock Secret Weekly Promo Codes</h3>
            <p className={styles.newsText}>
              Join the Registry Club list to receive direct, exclusive, and early-bird coupon codes on trending Pinterest finds. Zero spam, unsubscribe anytime.
            </p>
            <form onSubmit={handleNewsletterSubmit} className={styles.newsForm}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className={styles.newsInput}
                required
              />
              <button type="submit" className={styles.newsBtn}>
                Join Free
              </button>
            </form>
          </section>
        </main>

        {/* RIGHT COLUMN: Sticky Table of Contents & Quick info */}
        <aside className={styles.tocSidebar}>
          <div className={styles.tocCard}>
            <h4 className={styles.tocTitle}>Table of Contents</h4>
            <ul className={styles.tocList}>
              <li 
                onClick={() => scrollToSection("overview")} 
                className={`${styles.tocItem} ${activeSection === "overview" ? styles.tocItemActive : ""}`}
              >
                Overview
              </li>
              <li 
                onClick={() => scrollToSection("comparison")} 
                className={`${styles.tocItem} ${activeSection === "comparison" ? styles.tocItemActive : ""}`}
              >
                Comparison Table
              </li>
              <li 
                onClick={() => scrollToSection("reviews")} 
                className={`${styles.tocItem} ${activeSection === "reviews" ? styles.tocItemActive : ""}`}
              >
                Detailed Reviews
              </li>
              <li 
                onClick={() => scrollToSection("faq")} 
                className={`${styles.tocItem} ${activeSection === "faq" ? styles.tocItemActive : ""}`}
              >
                FAQs
              </li>
              <li 
                onClick={() => scrollToSection("newsletter")} 
                className={`${styles.tocItem} ${activeSection === "newsletter" ? styles.tocItemActive : ""}`}
              >
                Newsletter
              </li>
            </ul>
          </div>
        </aside>

      </div>

      {/* --- RELATED REVIEWS SECTION --- */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <h3 className={styles.sectionTitle} style={{ fontSize: "1.6rem" }}>
            Related Brand Reviews
          </h3>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((relatedPost) => (
              <a 
                key={relatedPost.slug} 
                href={`/blog/${relatedPost.slug}`} 
                className={styles.relatedCard}
              >
                <img 
                  src={relatedPost.bannerImage} 
                  alt={relatedPost.title} 
                  className={styles.relatedImg} 
                />
                <div className={styles.relatedContent}>
                  <span className={styles.relatedCategory}>{relatedPost.category}</span>
                  <h4 className={styles.relatedTitle}>{relatedPost.title}</h4>
                  <span className={styles.relatedLink}>Read Review →</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
