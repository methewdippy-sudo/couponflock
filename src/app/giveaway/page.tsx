"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

// CONFIGURATION: Replace this with your actual CPAGrip locker URL.
const CPAGRIP_LOCKER_URL = "https://ridefiles.net/1878988";

interface RewardItem {
  id: string;
  name: string;
  value: string;
  category: string;
  logo: React.ReactNode;
  color: string;
  bgGlow: string;
  badge: string;
  status: "available" | "limited" | "out_of_stock";
  rating: string;
}

// Crisp Vector Brand Logos for professional appearance
const WalmartLogo = () => (
  <svg viewBox="0 0 100 100" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0071dc" />
    <g transform="translate(50, 50) scale(0.95)">
      <line x1="0" y1="-7" x2="0" y2="-32" stroke="#ffc220" strokeWidth="8.5" strokeLinecap="round" />
      <line x1="0" y1="-7" x2="0" y2="-32" stroke="#ffc220" strokeWidth="8.5" strokeLinecap="round" transform="rotate(60)" />
      <line x1="0" y1="-7" x2="0" y2="-32" stroke="#ffc220" strokeWidth="8.5" strokeLinecap="round" transform="rotate(120)" />
      <line x1="0" y1="-7" x2="0" y2="-32" stroke="#ffc220" strokeWidth="8.5" strokeLinecap="round" transform="rotate(180)" />
      <line x1="0" y1="-7" x2="0" y2="-32" stroke="#ffc220" strokeWidth="8.5" strokeLinecap="round" transform="rotate(240)" />
      <line x1="0" y1="-7" x2="0" y2="-32" stroke="#ffc220" strokeWidth="8.5" strokeLinecap="round" transform="rotate(300)" />
      <circle cx="0" cy="0" r="5.5" fill="#ffc220" />
    </g>
  </svg>
);

const ShellLogo = () => (
  <svg viewBox="0 0 100 100" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 50,10 C 33,10 19,32 21,58 C 22,68 27,76 30,78 L 28,85 L 72,85 L 70,78 C 73,76 78,68 79,58 C 81,32 67,10 50,10 Z"
      fill="#ffc80c"
      stroke="#f43f5e"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <path d="M 50,10 L 50,85" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 37,15 C 40,43 42,63 37,83" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 63,15 C 60,43 58,63 63,83" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 27,29 C 32,51 35,69 29,80" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 73,29 C 68,51 65,69 71,80" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const PayPalLogo = () => (
  <svg viewBox="0 0 100 100" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(8, 0)">
      <path d="M 24,12 H 48 C 60,12 68,18 66,32 C 64,46 54,52 42,52 H 30 L 22,90 H 8 L 25,12 Z" fill="#003087" />
      <path d="M 36,24 H 60 C 72,24 80,30 78,44 C 76,58 66,64 54,64 H 42 L 34,100 H 20 L 36,24 Z" fill="#0079c1" opacity="0.9" />
    </g>
  </svg>
);

const RobloxLogo = () => (
  <svg viewBox="0 0 100 100" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50, 50) rotate(-15) scale(2.4)">
      <rect x="-13" y="-13" width="26" height="26" fill="#1f2937" rx="3" />
      <rect x="-4.5" y="-4.5" width="9" height="9" fill="#ffffff" rx="1.2" />
    </g>
  </svg>
);

const SteamLogo = () => (
  <svg viewBox="0 0 100 100" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#171a21" />
    <path
      d="M50 20 C64 20 75 31 75 45 C75 57 66 67 55 69 L50 82 C49 85 45 85 44 82 L39 69 C28 67 19 57 19 45 C19 31 30 20 50 20 Z"
      fill="#101822"
    />
    <circle cx="50" cy="45" r="16" fill="none" stroke="#66c0f4" strokeWidth="6" />
    <line x1="50" y1="45" x2="35" y2="70" stroke="#66c0f4" strokeWidth="8" strokeLinecap="round" />
    <circle cx="35" cy="70" r="8" fill="#66c0f4" />
  </svg>
);

const AmazonLogo = () => (
  <svg viewBox="0 0 100 100" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#111827" />
    <g transform="translate(18, 30) scale(0.65)">
      <path d="M48 65 C48 60 52 56 60 56 C68 56 72 60 72 65 V85 H60 V80 C56 84 50 86 44 86 C32 86 24 76 24 64 C24 50 34 40 48 40 H72 V36 C72 24 64 16 48 16 C36 16 28 20 26 26 H42 L48 25" fill="#ffffff" />
      <path d="M 12,98 C 40,120 70,120 98,98" stroke="#ff9900" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M 98,98 L 86,96 M 98,98 L 94,84" stroke="#ff9900" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </svg>
);

const PlayStationLogo = () => (
  <svg viewBox="0 0 100 100" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#003087" />
    <g transform="translate(25, 22) scale(0.55)">
      <path d="M 72,50 C 72,65 52,72 32,72 C 12,72 2,65 2,50 C 2,35 22,28 42,28 C 62,28 72,35 72,50 Z" fill="#00a1e0" opacity="0.8" />
      <path d="M 32,2 H 58 C 72,2 80,10 78,24 C 76,38 66,46 52,46 H 32 V 72 H 18 V 2 Z" fill="#f31107" />
      <circle cx="48" cy="24" r="10" fill="#003087" />
    </g>
  </svg>
);

const GooglePlayLogo = () => (
  <svg viewBox="0 0 100 100" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(8, 0)">
      <path d="M 15,10 L 15,90 L 48,50 Z" fill="#00c8f5" />
      <path d="M 15,10 L 85,50 L 48,50 Z" fill="#00e676" />
      <path d="M 85,50 L 15,90 L 48,50 Z" fill="#ff3d00" />
      <path d="M 15,90 L 15,10 L 48,50 Z" fill="#ffea00" opacity="0.15" />
    </g>
  </svg>
);

export default function GiveawayPage() {
  const [selectedReward, setSelectedReward] = useState<RewardItem | null>(null);
  const [modalStep, setModalStep] = useState<number>(0);
  const [loadingPercent, setLoadingPercent] = useState<number>(0);
  const [loadingStatus, setLoadingStatus] = useState<string>("Initializing...");
  const [userCountry, setUserCountry] = useState<string>("Detecting...");
  const [liveClaim, setLiveClaim] = useState({ user: "James K.", reward: "$100 PayPal Card", time: "just now" });

  const rewards: RewardItem[] = [
    {
      id: "walmart",
      name: "Walmart Gift Card",
      value: "$100",
      category: "Retail & Shopping",
      logo: <WalmartLogo />,
      color: "#0071dc",
      bgGlow: "rgba(0, 113, 220, 0.2)",
      badge: "🔥 Best Value",
      status: "available",
      rating: "⭐ 4.9 (12.4k claimed)",
    },
    {
      id: "gas",
      name: "Shell Gas Card",
      value: "$100",
      category: "Fuel & Travel",
      logo: <ShellLogo />,
      color: "#ffc80c",
      bgGlow: "rgba(255, 200, 12, 0.2)",
      badge: "⚡ High Demand",
      status: "available",
      rating: "⭐ 4.8 (8.1k claimed)",
    },
    {
      id: "paypal",
      name: "PayPal Cash Voucher",
      value: "$100",
      category: "Direct Funds",
      logo: <PayPalLogo />,
      color: "#003087",
      bgGlow: "rgba(0, 48, 135, 0.2)",
      badge: "💎 Premium Payout",
      status: "available",
      rating: "⭐ 5.0 (20.3k claimed)",
    },
    {
      id: "robux",
      name: "Robux Gaming Card",
      value: "10,000",
      category: "Gaming & Entertainment",
      logo: <RobloxLogo />,
      color: "#4f46e5",
      bgGlow: "rgba(79, 70, 229, 0.2)",
      badge: "⏰ Ending Soon",
      status: "limited",
      rating: "⭐ 4.7 (15.8k claimed)",
    },
    {
      id: "steam",
      name: "Steam Wallet Card",
      value: "$50",
      category: "Gaming Wallet",
      logo: <SteamLogo />,
      color: "#171a21",
      bgGlow: "rgba(23, 26, 33, 0.2)",
      badge: "⚡ Hot Offer",
      status: "available",
      rating: "⭐ 4.9 (14.2k claimed)",
    },
    {
      id: "amazon",
      name: "Amazon Gift Card",
      value: "$100",
      category: "E-Commerce",
      logo: <AmazonLogo />,
      color: "#ff9900",
      bgGlow: "rgba(255, 153, 0, 0.2)",
      badge: "⭐ Top Choice",
      status: "available",
      rating: "⭐ 4.9 (25.1k claimed)",
    },
    {
      id: "playstation",
      name: "PlayStation Card",
      value: "$50",
      category: "Console Gaming",
      logo: <PlayStationLogo />,
      color: "#003087",
      bgGlow: "rgba(0, 48, 135, 0.2)",
      badge: "🎮 Console Gamer",
      status: "available",
      rating: "⭐ 4.8 (11.6k claimed)",
    },
    {
      id: "googleplay",
      name: "Google Play Card",
      value: "$50",
      category: "Mobile Store",
      logo: <GooglePlayLogo />,
      color: "#3bccff",
      bgGlow: "rgba(59, 204, 255, 0.2)",
      badge: "📱 Mobile App",
      status: "available",
      rating: "⭐ 4.7 (9.8k claimed)",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      avatar: "S",
      time: "2 mins ago",
      comment: "Just got my $100 Walmart card code in email! It took about 4 minutes to complete the sponsor verification survey. Legit!",
      likes: 14,
    },
    {
      name: "David K.",
      avatar: "D",
      time: "15 mins ago",
      comment: "Was skeptical but the PayPal voucher actually credited to my account. Great interface and very easy instructions.",
      likes: 8,
    },
    {
      name: "Marcus T.",
      avatar: "M",
      time: "48 mins ago",
      comment: "Is the Shell Gas card still active? Edit: Just completed the email task and it verified instantly. Thanks!",
      likes: 22,
    },
  ];

  // Geolocation detection
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_name) {
          setUserCountry(data.country_name);
        } else {
          setUserCountry("United States");
        }
      })
      .catch(() => {
        setUserCountry("United States");
      });
  }, []);

  // Back-button BFCache cleaner
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        setModalStep(0);
        setSelectedReward(null);
        setLoadingPercent(0);
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // Live Claim Ticker logic for high conversion FOMO
  useEffect(() => {
    const users = ["Alex P.", "Jessica M.", "Mustafa A.", "John D.", "Emma W.", "Li Chen"];
    const items = ["$100 Walmart Card", "$100 Shell Gas Card", "$100 PayPal Card", "10,000 Robux Card", "$50 Steam Card", "$100 Amazon Card"];
    
    const interval = setInterval(() => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setLiveClaim({ user: randomUser, reward: randomItem, time: "seconds ago" });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleClaim = (reward: RewardItem) => {
    if (reward.status === "out_of_stock") return;
    setSelectedReward(reward);
    setModalStep(1);
    setLoadingPercent(0);
    setLoadingStatus("Verifying stock status...");

    // Fast, smooth loading progress (1.2 seconds total duration)
    const duration = 1200; 
    const intervalTime = 40;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setLoadingPercent((prev) => {
        const nextValue = Math.min(prev + step, 100);
        
        // Status labels matching progress percentage
        if (nextValue < 35) {
          setLoadingStatus("Verifying stock availability...");
        } else if (nextValue < 75) {
          setLoadingStatus("Reserving code allocation...");
        } else {
          setLoadingStatus("Opening secure verification portal...");
        }

        if (nextValue >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            // Instantly clear modal state before redirect so back-button remains clean
            setModalStep(0);
            setSelectedReward(null);
            setLoadingPercent(0);
            // Redirect to the CPA Locker
            window.location.href = CPAGRIP_LOCKER_URL;
          }, 200);
        }
        return nextValue;
      });
    }, intervalTime);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Background radial gradient glow */}
      <div className={styles.radialGlow1}></div>
      <div className={styles.radialGlow2}></div>

      {/* Live Claims Ticker */}
      <div className={styles.tickerBanner}>
        <div className={styles.tickerContent}>
          <span className={styles.tickerPulse}></span>
          <span>
            <strong>LIVE ACTIVITY:</strong> User <strong>{liveClaim.user}</strong> successfully claimed a{" "}
            <span className={styles.tickerHighlight}>{liveClaim.reward}</span> ({liveClaim.time})
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <span className={styles.promoTag}>🎉 Official Verified Rewards Hub</span>
          <h1 className={styles.heroTitle}>
            Premium Gift Cards & <br />
            <span className={styles.gradientText}>Vouchers Giveaway</span>
          </h1>
          <p className={styles.heroDescription}>
            Unlock daily promotional cards sponsored by global brands. No hidden credit card fields, no payments. Just verified tasks.
          </p>
          <div className={styles.geoVerification}>
            <span className={styles.pulseDot}></span>
            <span>Offers active for users in: <strong>{userCountry}</strong></span>
          </div>
        </div>
      </section>

      {/* Rewards Grid */}
      <section className={styles.gridSection}>
        <div className={styles.rewardsGrid}>
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className={styles.rewardCard}
              style={{ "--glow-color": reward.bgGlow } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardCategory}>{reward.category}</span>
                <span className={styles.cardBadge} style={{ backgroundColor: reward.color }}>
                  {reward.badge}
                </span>
              </div>
              <div className={styles.cardMain}>
                <div className={styles.logoWrapper} style={{ boxShadow: `0 0 20px ${reward.bgGlow}` }}>
                  <div className={styles.cardLogo}>{reward.logo}</div>
                </div>
                <h3 className={styles.cardName}>{reward.name}</h3>
                <span className={styles.cardValue}>{reward.value}</span>
                <span className={styles.cardRating}>{reward.rating}</span>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.statusIndicator}>
                  <span
                    className={styles.statusDot}
                    style={{
                      backgroundColor:
                        reward.status === "available"
                          ? "#10b981"
                          : reward.status === "limited"
                          ? "#f59e0b"
                          : "#ef4444",
                    }}
                  ></span>
                  <span className={styles.statusText}>
                    {reward.status === "available"
                      ? "In Stock & Ready"
                      : reward.status === "limited"
                      ? "Only 2 Slots Remaining"
                      : "Fully Claimed"}
                  </span>
                </div>
                <button
                  onClick={() => handleClaim(reward)}
                  className={styles.claimButton}
                  style={{
                    backgroundColor: reward.color,
                    boxShadow: `0 4px 14px ${reward.bgGlow}`,
                    opacity: reward.status === "out_of_stock" ? 0.5 : 1,
                  }}
                  disabled={reward.status === "out_of_stock"}
                >
                  Get Reward Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>3 Simple Steps to Claim</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.stepItem}>
            <div className={styles.stepNumWrapper}>
              <span className={styles.stepNum}>1</span>
            </div>
            <h4>Choose Voucher</h4>
            <p>Select any verified brand voucher above from the listing matrix.</p>
          </div>
          <div className={styles.stepArrow}>➜</div>
          <div className={styles.stepItem}>
            <div className={styles.stepNumWrapper}>
              <span className={styles.stepNum}>2</span>
            </div>
            <h4>Complete Verification</h4>
            <p>Complete a quick human-check task (survey or app verification) from sponsors.</p>
          </div>
          <div className={styles.stepArrow}>➜</div>
          <div className={styles.stepItem}>
            <div className={styles.stepNumWrapper}>
              <span className={styles.stepNum}>3</span>
            </div>
            <h4>Receive Instantly</h4>
            <p>Once validated, the page redirects you to reveal the final voucher code.</p>
          </div>
        </div>
      </section>

      {/* Social Proof comments */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>User Feedback & Activity</h2>
        <div className={styles.commentsContainer}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.commentBox}>
              <div className={styles.commentAvatar} style={{ backgroundColor: `hsl(${i * 120}, 75%, 45%)` }}>
                {t.avatar}
              </div>
              <div className={styles.commentContent}>
                <div className={styles.commentHeader}>
                  <span className={styles.commentUser}>{t.name}</span>
                  <span className={styles.commentTime}>{t.time}</span>
                </div>
                <p className={styles.commentText}>{t.comment}</p>
                <div className={styles.commentFooter}>
                  <span className={styles.commentLikeBtn}>👍 Like ({t.likes})</span>
                  <span>•</span>
                  <span className={styles.commentReplyBtn}>Reply</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Safe Badges */}
      <section className={styles.trustBanner}>
        <div className={styles.trustBadges}>
          <span className={styles.trustBadge}>🛡️ SSL 256-Bit Secure Connection</span>
          <span className={styles.trustBadge}>✅ 100% Free - Sponsored Content</span>
          <span className={styles.trustBadge}>🤖 Smart Anti-Bot Captcha</span>
        </div>
      </section>

      {/* Compliance Disclaimers */}
      <footer className={styles.complianceFooter}>
        <p>
          <strong>Disclaimer:</strong> CouponFlock is an independent promotional aggregator website. 
          All brand names, logos, and registered trademarks featured on this page are the property of their respective owners. 
          This promotion is not sponsored, endorsed, or affiliated with Walmart, Shell, PayPal, or Roblox. 
          All rewards are sponsored and distributed by third-party advertiser networks upon successful completion of required verification steps.
        </p>
        <p className={styles.footerLinks}>
          <a href="/privacy-policy" className={styles.complianceLink}>Privacy Policy</a>
          <span> | </span>
          <a href="/terms-of-service" className={styles.complianceLink}>Terms of Service</a>
          <span> | </span>
          <a href="/contact" className={styles.complianceLink}>Contact Us</a>
        </p>
      </footer>

      {/* Processing Loader Modal with clean Progress Bar instead of Logs list */}
      {modalStep > 0 && selectedReward && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <div className={styles.modalGlow} style={{ backgroundColor: selectedReward.color }}></div>
            <h3 className={styles.modalTitle}>Processing Allocation</h3>
            
            <div className={styles.spinner}>
              <div className={styles.doubleBounce1} style={{ backgroundColor: selectedReward.color }}></div>
              <div className={styles.doubleBounce2} style={{ backgroundColor: selectedReward.color }}></div>
            </div>

            <p className={styles.modalStatusText}>{loadingStatus}</p>

            <div className={styles.modalProgressBarBg}>
              <div 
                className={styles.modalProgressBarFill} 
                style={{ 
                  width: `${loadingPercent}%`, 
                  backgroundColor: selectedReward.color,
                  boxShadow: `0 0 10px ${selectedReward.bgGlow}` 
                }}
              ></div>
            </div>
            
            <span className={styles.modalProgressPercent}>{Math.round(loadingPercent)}%</span>
          </div>
        </div>
      )}
    </div>
  );
}
