import { Store, Coupon, StoreProduct } from "../components/CouponCard";
import { getLogoUrl } from "./fallbackData";

export interface RegistryCoupon {
  id: string;
  code: string; // empty string for direct auto-applied deals
  discount: string;
  title: string;
  description: string;
  is_verified: boolean;
  is_auto_applied?: boolean;
  expiry_date?: string;
  affiliate_url?: string;
  image?: string;
}

export interface RegistryStore {
  id: number | string;
  name: string;
  slug: string; // Canonical slug
  aliases?: string[]; // All alternate URLs that resolve to this store
  logo?: string;
  website: string;
  affiliate_url: string;
  country?: "US" | "UK" | "DE" | "CA" | "AU" | "GLOBAL";
  description?: string;
  products?: StoreProduct[];
  coupons: RegistryCoupon[];
}

/**
 * ============================================================================
 * PROMOREGISTRY OFFICIAL STORE & COUPONS REGISTRY
 * ============================================================================
 * Add or update any brand here. 
 * - Handles canonical slug resolution & aliases automatically.
 * - Guarantees 100% coupon isolation (zero rogue coupons from other stores).
 * - Guarantees 100% affiliate link propagation across all deal buttons.
 */
export const STORE_REGISTRY: RegistryStore[] = [
  // 1. THE DRM LAB (US / UK / Global Market)
  {
    id: 621,
    name: "THE DRM LAB",
    slug: "thedrmlab",
    aliases: ["the-drm-lab", "drm-lab", "drmlab"],
    logo: "/logos/thedrmlab.svg",
    website: "https://www.thedrmlab.com/methewdippy",
    affiliate_url: "https://www.thedrmlab.com/methewdippy",
    country: "US",
    description: "Advanced at-home clinical micro-infusion treatments for acne scars, enlarged pores, and skin rejuvenation.",
    coupons: [
      {
        id: "drm-deal-1",
        code: "METHEW",
        discount: "10% OFF",
        title: "10% off your entire clinical skincare order sitewide",
        description: "Save 10% on PDRN Advanced Infusion Treatment and clinical skincare with verified coupon code METHEW.",
        image: "/images/thedrmlab/micro-infusion-system.webp",
        affiliate_url: "https://www.thedrmlab.com/methewdippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "drm-deal-2",
        code: "",
        discount: "UP TO 20% OFF",
        title: "Up to 20% off multi-month skincare bundles & refill sets",
        description: "Save up to 20% on multi-infusion refill packs and complete skin transformation bundles automatically applied at checkout.",
        image: "/images/thedrmlab/pdrn-treatment.webp",
        affiliate_url: "https://www.thedrmlab.com/methewdippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "drm-deal-3",
        code: "",
        discount: "FREE SHIPPING",
        title: "100% Free worldwide tracked shipping & 90-day guarantee",
        description: "Enjoy completely free tracked courier delivery across the US, UK, CA, and worldwide on all orders.",
        image: "/images/thedrmlab/clinical-results-1.webp",
        affiliate_url: "https://www.thedrmlab.com/methewdippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "drm-deal-4",
        code: "METHEW",
        discount: "15% OFF",
        title: "15% off Micro-Infusion Clinical Starter Kit",
        description: "Get 15% discount on the complete at-home clinical micro-infusion system and PDRN serum with code METHEW.",
        image: "/images/thedrmlab/clinical-results-2.webp",
        affiliate_url: "https://www.thedrmlab.com/methewdippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "drm-deal-5",
        code: "METHEW",
        discount: "EXTRA $20 OFF",
        title: "Extra $20 off PDRN Serum 3-Month Transformation Bundle",
        description: "Save an extra $20 on the 3-month PDRN cellular repair bundle plus free worldwide shipping with code METHEW.",
        image: "/images/thedrmlab/clinical-results-3.webp",
        affiliate_url: "https://www.thedrmlab.com/methewdippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 2. BOUQUETS BY POST (UK Fresh Postal Flowers - DIRECT DEALS ONLY)
  {
    id: 624,
    name: "Bouquets by Post",
    slug: "bouquets-by-post",
    aliases: ["bouquetsbypost", "bouquets-by-post-uk", "bouquetsbypost-com"],
    logo: "/logos/bouquets-by-post.png",
    website: "https://bouquetsbypost.com/muhammadhaziqueali",
    affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
    country: "UK",
    description: "Fresh British postal flowers hand-arranged and delivered direct to doors across the UK with free delivery and a 7-day freshness guarantee.",
    coupons: [
      {
        id: "bbp-deal-1",
        code: "",
        discount: "FREE UK DELIVERY",
        title: "100% Free Royal Mail delivery across the UK on all bouquets",
        description: "Enjoy guaranteed free delivery across England, Scotland, Wales, and Northern Ireland on all fresh bouquets.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-2",
        code: "",
        discount: "FROM £18",
        title: "Fresh postal bouquets from £18 with 7-day freshness guarantee",
        description: "Hand-arranged celebration flowers and seasonal postal stems direct through the letterbox.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-3",
        code: "",
        discount: "FREE CARD",
        title: "Free personalized gift message card with every floral order",
        description: "Every postal flower bouquet includes a complimentary personalized gift message card.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-4",
        code: "",
        discount: "FRESH BLOOMS",
        title: "Special hand-tied birthday & anniversary postal flower gifts",
        description: "Freshly picked carnations, freesia, and luxury postal roses delivered safely across the UK.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-5",
        code: "",
        discount: "LETTERBOX",
        title: "Guaranteed letterbox delivery - recipient does not need to be home",
        description: "Specially packaged postal boxes slip easily through standard UK letterboxes to stay fresh.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 3. SEED NEEDS (US Gardening Market - DIRECT DEALS ONLY)
  {
    id: 622,
    name: "Seed Needs",
    slug: "seed-needs",
    aliases: ["seedneeds", "seed-needs-co"],
    logo: "/logos/seed-needs.png",
    website: "https://www.seedneeds.com/dippy",
    affiliate_url: "https://www.seedneeds.com/dippy",
    country: "US",
    description: "Non-GMO heirloom flower seeds, herb seeds, and vegetable seed packets for home gardeners across the United States.",
    coupons: [
      {
        id: "seed-deal-1",
        code: "",
        discount: "15% OFF",
        title: "Up to 15% off heirloom flower and garden seeds sitewide",
        description: "Save on flower seed packets, wild flower mixes, and organic vegetable seeds.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seed-deal-2",
        code: "",
        discount: "10% OFF",
        title: "10% off wildflower seed packets & herb assortments",
        description: "Enjoy savings on open-pollinated wildflower seeds and heirloom herb collections.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seed-deal-3",
        code: "",
        discount: "BULK SAVINGS",
        title: "Discounts on bulk seed assortments and pollinator mixes",
        description: "Get great value on bulk seed varieties and bee-friendly wildflower garden collections.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seed-deal-4",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on orders over $35",
        description: "Enjoy free tracked delivery across the USA on qualifying seed and gardening supply orders of $35 or more.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 4. iM8 HEALTH (US Longevity Nutrition & Daily Essentials)
  {
    id: 43,
    name: "iM8 Health",
    slug: "im8health",
    aliases: ["im8-health", "im8", "im8health-us", "im8-health-us"],
    logo: "/logos/im8health.png",
    website: "https://www.im8health.com/RICHARD05376",
    affiliate_url: "https://www.im8health.com/RICHARD05376",
    country: "US",
    description: "Daily ultimate longevity and essentials nutrition system co-founded by David Beckham, clinically formulated for cellular rejuvenation and optimal health.",
    coupons: [
      {
        id: "im8-deal-1",
        code: "RICHARD05376",
        discount: "20% OFF",
        title: "20% off your entire first order sitewide",
        description: "Save 20% on iM8 Daily Ultimate Essentials and longevity nutrition with verified code RICHARD05376.",
        affiliate_url: "https://www.im8health.com/RICHARD05376",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-2",
        code: "RICHARD05376",
        discount: "30% OFF",
        title: "30% off Welcome Kit plus free shaker cup",
        description: "Get 30% discount on the iM8 Welcome Kit plus complimentary shaker cup using promo code RICHARD05376.",
        affiliate_url: "https://www.im8health.com/RICHARD05376",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-3",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on all subscription orders",
        description: "Enjoy 100% free delivery across the United States on all qualifying iM8 Health orders.",
        affiliate_url: "https://www.im8health.com/RICHARD05376",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 5. TRANSPARENT LABS (US Market)
  {
    id: 601,
    name: "Transparent Labs",
    slug: "transparent-labs",
    aliases: ["transparent-labs-us"],
    logo: "/logos/transparent-labs.png",
    website: "https://vert.si/g693JE",
    affiliate_url: "https://vert.si/g693JE",
    country: "US",
    description: "100% transparent sports nutrition, clean pre-workouts, and premium protein powders.",
    coupons: [
      {
        id: "tl-deal-1",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off promo code sitewide",
        description: "Save 10% on pre-workout, whey protein isolate, and creatine with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-2",
        code: "TL10",
        discount: "10% OFF",
        title: "10% off 100% grass-fed whey protein isolate & creatine HMB",
        description: "Get 10% off clean grass-fed whey isolate and creatine supplements with code TL10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-3",
        code: "SUBSCRIBE15",
        discount: "15% OFF",
        title: "15% off subscription orders + free gifts",
        description: "Get 15% recurring savings on all supplement subscriptions with code SUBSCRIBE15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-4",
        code: "APP10",
        discount: "10% OFF",
        title: "10% off your entire first mobile app order",
        description: "Save 10% when ordering via the official Transparent Labs app with code APP10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-5",
        code: "SAVE10",
        discount: "10% OFF",
        title: "10% off bulk pre-workout, BULK black & LEAN",
        description: "Save 10% on best-selling BULK Pre-Workout and LEAN thermogenic with code SAVE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-6",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on orders over $99",
        description: "Enjoy 100% free tracked delivery across the United States on orders over $99.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 2. GARTEN UND FREIZEIT (Germany / EU Market)
  {
    id: 602,
    name: "Garten und Freizeit",
    slug: "garten-und-freizeit",
    aliases: ["garten-und-freizeit-de"],
    logo: "/logos/garten-und-freizeit.png",
    website: "https://litl.si/5p50u",
    affiliate_url: "https://litl.si/5p50u",
    country: "DE",
    description: "Exklusive Gartenmöbel, Loungemöbel, Sonnenschirme und Premium Grills in Deutschland.",
    coupons: [
      {
        id: "guf-deal-1",
        code: "",
        discount: "BIS ZU 60%",
        title: "Bis zu 60% Rabatt auf Gartenmöbel & Loungesets",
        description: "Exklusive Rabatte auf Premium Gartenmöbel und Esstischgruppen im Sommersale.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "guf-deal-2",
        code: "",
        discount: "50€ RABATT",
        title: "50€ Sofort-Rabatt auf ausgewählte Terrassenmöbel",
        description: "Sparen Sie 50€ direkt im Warenkorb bei qualifizierten Marken-Gartenmöbeln.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "guf-deal-3",
        code: "",
        discount: "GRATIS VERSAND",
        title: "Kostenloser Speditionsversand ab 500€ Bestellwert",
        description: "Kostenfreie und versicherte Lieferung direkt in Ihren Garten innerhalb Deutschlands.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "guf-deal-4",
        code: "",
        discount: "40% RABATT",
        title: "Bis zu 40% Rabatt auf Gasgrills & Grillzubehör",
        description: "Top-Angebote auf Premium Gasgrills, Holzkohlegrills und Outdoor-Küchen.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "guf-deal-5",
        code: "",
        discount: "20% RABATT",
        title: "20% Rabatt auf Ampelschirme & Sonnenschutz",
        description: "Hochwertige Sonnenschirme, Pavillons und Zubehör mit 20% Direktabzug.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 3. DREAMCLOUD (United Kingdom Market)
  {
    id: 603,
    name: "DreamCloud",
    slug: "dreamcloud",
    aliases: ["dreamcloud-uk", "dreamcloud-us"],
    logo: "/logos/dreamcloud.png",
    website: "https://vert.si/dJUkDu",
    affiliate_url: "https://vert.si/dJUkDu",
    country: "UK",
    description: "Luxury hybrid memory foam mattresses with 365-night trial and lifetime warranty.",
    coupons: [
      {
        id: "dc-deal-1",
        code: "VIPONLY",
        discount: "15% OFF",
        title: "15% off luxury hybrid mattress coupon code",
        description: "Save an extra 15% on DreamCloud Luxury Hybrid mattresses with verified code VIPONLY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dc-deal-2",
        code: "BLUELIGHT",
        discount: "10% OFF",
        title: "10% off sitewide discount code",
        description: "Get 10% off your entire mattress & bedding order with code BLUELIGHT at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dc-deal-3",
        code: "",
        discount: "UP TO 50%",
        title: "Up to 50% off mattress & luxury bedding bundles",
        description: "Save up to 50% when bundling luxury pillows, sheets, and mattress protectors.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dc-deal-4",
        code: "",
        discount: "40% OFF",
        title: "40% off DreamCloud Luxury Hybrid Mattress",
        description: "Get 40% instant reduction on all mattress sizes including Single, Double, King & Super King.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dc-deal-5",
        code: "",
        discount: "FREE DELIVERY",
        title: "Free premium delivery + 365-night home trial",
        description: "Enjoy 100% free delivery across the UK, 365-night sleep trial, and a lifetime warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 4. QIDI US (United States)
  {
    id: 620,
    name: "QIDI US",
    slug: "qidi-us",
    aliases: ["qidi-tech", "qidi-tech-us"],
    logo: "/logos/qidi.png",
    website: "https://us.qidi3d.com/?sca_ref=10216933.GBxI9fhaM2YhHIe",
    affiliate_url: "https://us.qidi3d.com/?sca_ref=10216933.GBxI9fhaM2YhHIe",
    country: "US",
    description: "Official QIDI high-speed CoreXY 3D printers (Q1 Pro, Plus4, Max4), high-temp hotends, and engineering filaments in the US.",
    coupons: [
      {
        id: "qidi-us-1",
        code: "50FOR800",
        discount: "$50 OFF",
        title: "$50 off discount code on orders over $800",
        description: "Save $50 on high-end CoreXY 3D printers (Max4, Plus5 & multi-color bundles) with code 50FOR800.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-2",
        code: "40FOR700",
        discount: "$40 OFF",
        title: "$40 off promo code on purchases over $700",
        description: "Get $40 instant savings on QIDI Plus4 and high-speed industrial printers with code 40FOR700.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-3",
        code: "30FOR500",
        discount: "$30 OFF",
        title: "$30 off coupon code - orders over $500",
        description: "Save $30 on QIDI Q2, Q2C, and enclosed CoreXY printer orders over $500 with code 30FOR500.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-4",
        code: "HIGH5",
        discount: "5% OFF",
        title: "5% off official newsletter coupon code (verified working)",
        description: "Save 5% on all 3D printers, high-temp hotends, and accessories with verified code HIGH5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-5",
        code: "SH5",
        discount: "5% OFF",
        title: "5% off first order instant discount code sitewide",
        description: "Apply 5% instant discount across all 3D printers, filament rolls, and drying boxes with code SH5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-6",
        code: "",
        discount: "UP TO 55%",
        title: "Up to 55% off Back to School Sale on CoreXY 3D printers",
        description: "Save up to 55% on enclosed high-speed industrial 3D printers and high-temp filament packages.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-7",
        code: "",
        discount: "$14.99 DEAL",
        title: "$14.99 basic filament mystery box clearance deal",
        description: "Get high-speed PLA/PETG filament mystery spools starting at only $14.99 while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-8",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US local warehouse shipping on orders over $39.99",
        description: "Enjoy 100% free tracked US doorstep delivery with 1-year official warranty on all 3D printer orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 5. QIDI DE (Germany / EU)
  {
    id: 621,
    name: "QIDI DE",
    slug: "qidi-de",
    aliases: ["qidi"],
    logo: "/logos/qidi.png",
    website: "https://qidi3d-de.myshopify.com?sca_ref=12082423.h3UYEVqJ6Tg",
    affiliate_url: "https://qidi3d-de.myshopify.com?sca_ref=12082423.h3UYEVqJ6Tg",
    country: "DE",
    description: "Hochgeschwindigkeits-CoreXY 3D-Drucker für anspruchsvolle Ingenieure in Deutschland und EU.",
    coupons: [
      {
        id: "qidi-de-1",
        code: "30FOR500",
        discount: "30€ RABATT",
        title: "30€ rabattcode bestellwert 500€",
        description: "Sichern Sie sich 30€ Rabatt ab einem Mindestbestellwert von 500€ mit Code 30FOR500.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-de-2",
        code: "40FOR700",
        discount: "40€ RABATT",
        title: "40€ rabattcode bestellwert 700€",
        description: "Erhalten Sie 40€ Direktabzug ab 700€ Bestellwert mit Code 40FOR700.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-de-3",
        code: "80FOR1200",
        discount: "80€ RABATT",
        title: "80€ rabattcode bestellwert 1200€",
        description: "80€ Großbestellungs-Rabatt ab 1200€ Einkaufswert mit Code 80FOR1200.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-de-4",
        code: "",
        discount: "40% RABATT",
        title: "40% rabatt auf 3D drucker & filamente",
        description: "Sparen Sie bis zu 40% auf Hochtemperatur 3D Drucker und Filament Bundles.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-de-5",
        code: "",
        discount: "GRATIS VERSAND",
        title: "Kostenloser Speditionsversand in DE & EU",
        description: "Kostenlose Lieferung auf alle 3D-Drucker innerhalb Deutschlands und der EU.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 6. QIDI UK (United Kingdom)
  {
    id: 622,
    name: "QIDI UK",
    slug: "qidi-uk",
    logo: "/logos/qidi.png",
    website: "https://qidi3d-uk.myshopify.com?sca_ref=12082424.7VZOgmHzi7mV",
    affiliate_url: "https://qidi3d-uk.myshopify.com?sca_ref=12082424.7VZOgmHzi7mV",
    country: "UK",
    description: "Official QIDI high-speed CoreXY 3D printers and carbon-fiber materials in the UK.",
    coupons: [
      {
        id: "qidi-uk-1",
        code: "HIGH5",
        discount: "20% OFF",
        title: "20% off discount code sitewide",
        description: "Get 20% off sitewide at QIDI UK with verified promo code HIGH5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-uk-2",
        code: "35FOR500",
        discount: "£35 OFF",
        title: "£35 off code - order over £500",
        description: "Save £35 on 3D printer orders over £500 with code 35FOR500.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-uk-3",
        code: "25FOR400",
        discount: "£25 OFF",
        title: "£25 off code - spend over £400",
        description: "Save £25 on 3D printers and parts with verified code 25FOR400.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-uk-4",
        code: "",
        discount: "50% OFF",
        title: "50% off on 3d printers & accessories",
        description: "Save up to 50% on high-speed CoreXY 3D printers and filaments in the UK.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-uk-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked UK delivery",
        description: "Enjoy 100% free tracked delivery across the UK on all printer orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 7. QIDI CA (Canada)
  {
    id: 623,
    name: "QIDI CA",
    slug: "qidi-ca",
    logo: "/logos/qidi.png",
    website: "https://qidi3d-ca.myshopify.com?sca_ref=12082426.lb4pfrcPLtarI",
    affiliate_url: "https://qidi3d-ca.myshopify.com?sca_ref=12082426.lb4pfrcPLtarI",
    country: "CA",
    description: "Official QIDI 3D printers and technical support for Canada.",
    coupons: [
      {
        id: "qidi-ca-1",
        code: "PRINT10-CA",
        discount: "10% OFF",
        title: "10% off discount code sitewide",
        description: "Get 10% off sitewide across Canada with code PRINT10-CA.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-ca-2",
        code: "50FOR800",
        discount: "$50 OFF",
        title: "$50 off code - purchase over $800 CAD",
        description: "Save $50 on orders over $800 with verified code 50FOR800.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-ca-3",
        code: "40FOR700",
        discount: "$40 OFF",
        title: "$40 off code - order over $700 CAD",
        description: "Get $40 off CoreXY 3D printers with code 40FOR700 in Canada.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-ca-4",
        code: "",
        discount: "55% OFF",
        title: "55% off on 3d printers & weekly deals",
        description: "Save up to 55% on 3D printers and filaments across Canada.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-ca-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free shipping across Canada",
        description: "Enjoy 100% free tracked delivery across all Canadian provinces.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 8. QIDI AU (Australia)
  {
    id: 624,
    name: "QIDI AU",
    slug: "qidi-au",
    logo: "/logos/qidi.png",
    website: "https://qiditech3d-au.myshopify.com?sca_ref=12082425.u0nAUHxvoBprsex",
    affiliate_url: "https://qiditech3d-au.myshopify.com?sca_ref=12082425.u0nAUHxvoBprsex",
    country: "AU",
    description: "Official QIDI 3D printers, direct warranty, and accessories in Australia.",
    coupons: [
      {
        id: "qidi-au-1",
        code: "PRINT10-CA",
        discount: "10% OFF",
        title: "10% off coupon code",
        description: "Get 10% off your entire 3D printer purchase with code PRINT10-CA in Australia.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-au-2",
        code: "100FOR1600",
        discount: "$100 OFF",
        title: "$100 off promo - purchase over $1600 AUD",
        description: "Get $100 instant discount on orders over $1600 with code 100FOR1600.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-au-3",
        code: "35FOR700",
        discount: "$35 OFF",
        title: "$35 off code - order over $700 AUD",
        description: "Save $35 on 3D printers and accessories with code 35FOR700.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-au-4",
        code: "",
        discount: "45% OFF",
        title: "45% off on 3d printers & accessories",
        description: "Save up to 45% on high-speed industrial 3D printers in Australia.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-au-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free shipping across Australia",
        description: "Enjoy 100% free tracked delivery across Australia on all printer models.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 9. MELLOW SLEEP (100% Auto-Applied Affiliate Deals)
  {
    id: 630,
    name: "Mellow Sleep",
    slug: "mellow-sleep",
    aliases: ["mellow"],
    logo: "/logos/mellow-sleep.svg",
    website: "https://mellowsleep.com/RICHARD1",
    affiliate_url: "https://mellowsleep.com/RICHARD1",
    country: "US",
    description: "Affordable luxury memory foam mattresses, modern solid wood bed frames, and sleep accessories.",
    coupons: [
      {
        id: "mellow-deal-1",
        code: "",
        discount: "15% OFF",
        title: "15% off discount sitewide (auto-applied at checkout)",
        description: "Click to activate 15% instant discount on mattresses, toppers, and bed frames automatically at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mellow-deal-2",
        code: "",
        discount: "15% OFF",
        title: "15% off memory foam mattresses & cooling toppers",
        description: "Enjoy 15% off premium cooling memory foam mattresses. Discount applied automatically via link.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mellow-deal-3",
        code: "",
        discount: "UP TO $100",
        title: "Up to $100 off solid wood bed frames & platform bases",
        description: "Get up to $100 instant savings on modern upholstered and solid wood bed frames.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mellow-deal-4",
        code: "",
        discount: "10% OFF",
        title: "10% off your entire first sleep order",
        description: "Activate 10% new customer discount automatically applied to your cart.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mellow-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free nationwide shipping + 100-night risk-free trial",
        description: "Enjoy 100% free doorstep delivery across the US and a 100-night trial with free returns.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 10. COMFRT CLOTHING (Weighted Anxiety Relief Hoodies)
  {
    id: 631,
    name: "Comfrt",
    slug: "comfrt",
    aliases: ["comfrt-clothing"],
    logo: "/logos/comfrt.png",
    website: "https://comfrt.com",
    affiliate_url: "https://comfrt.com",
    country: "US",
    description: "The original anxiety relief weighted hoodies, premium oversized sweatpants, and lounge sets.",
    coupons: [
      {
        id: "comfrt-deal-1",
        code: "WELCOME15",
        discount: "15% OFF",
        title: "15% off weighted hoodies coupon code",
        description: "Save 15% on original anxiety relief weighted hoodies and sweatpants with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "comfrt-deal-2",
        code: "SAVE10",
        discount: "10% OFF",
        title: "10% off discount code sitewide",
        description: "Apply 10% instant discount across all oversized hoodies, sweatpants, and lounge sets with code SAVE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "comfrt-deal-3",
        code: "COMFRT20",
        discount: "20% OFF",
        title: "20% off lounge sets & sweatpants bundle",
        description: "Save 20% when bundling any 2 weighted hoodies or lounge pants with code COMFRT20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "comfrt-deal-4",
        code: "",
        discount: "UP TO 30%",
        title: "Up to 30% off anxiety relief weighted collection",
        description: "Save up to 30% on best-selling weighted hoodies engineered for calming anxiety.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "comfrt-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked shipping on orders over $75",
        description: "Enjoy 100% free tracked shipping across the United States on all apparel orders over $75.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 11. DC HOUSE (LiFePO4 Lithium Batteries & Solar Power)
  {
    id: 632,
    name: "DC House",
    slug: "dc-house",
    aliases: ["dchouse", "dc-house-power"],
    logo: "/logos/dc-house.png",
    website: "https://www.dchousepower.com/?ref=ikafrwml",
    affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
    country: "US",
    description: "High-performance LiFePO4 lithium batteries, off-grid solar kits, inverters, and trolling motor battery solutions.",
    coupons: [
      {
        id: "dchouse-deal-1",
        code: "METHEWDIPPY",
        discount: "5% OFF",
        title: "5% off promo code sitewide (verified working)",
        description: "Save 5% on all 12V 100Ah LiFePO4 lithium batteries, solar panels, and inverters with code METHEWDIPPY.",
        affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-2",
        code: "METHEWDIPPY",
        discount: "5% OFF",
        title: "5% off 12V 100Ah / 24V deep-cycle trolling motor & RV batteries",
        description: "Get 5% instant discount on deep-cycle lithium marine and RV batteries with verified code METHEWDIPPY.",
        affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-3",
        code: "METHEWDIPPY",
        discount: "5% OFF",
        title: "5% off off-grid solar panels, inverters & charge controllers",
        description: "Apply 5% discount on complete off-grid solar power systems with code METHEWDIPPY.",
        affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-4",
        code: "METHEWDIPPY",
        discount: "EXTRA 5% OFF",
        title: "Extra 5% off large capacity battery bank orders",
        description: "Stack an extra 5% savings on all high-capacity lithium battery bank orders using code METHEWDIPPY.",
        affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-5",
        code: "",
        discount: "UP TO 35%",
        title: "Up to 35% off weekly flash sales on LiFePO4 power systems",
        description: "Save up to 35% on lightweight waterproof trolling motor and RV marine lithium batteries.",
        affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-6",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US doorstep delivery on all battery orders",
        description: "Enjoy 100% free tracked US doorstep delivery with 10-year warranty on all DC House power systems.",
        affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 13. FILTER BABY (US Market - Dermatologist-Approved Skincare Water Filter)
  {
    id: 613,
    name: "Filter Baby",
    slug: "filter-baby",
    aliases: ["filter-baby-coupons", "filterbaby", "filter-baby-us"],
    logo: "/logos/filter-baby.png",
    website: "https://filterbaby.com/discount/FILTER15?ref=promoregistry",
    affiliate_url: "https://filterbaby.com/discount/FILTER15?ref=promoregistry",
    country: "US",
    description: "Clinically tested, dermatologist-approved faucet water filters designed to eliminate harsh tap water contaminants and promote clear, glowing skin.",
    coupons: [
      {
        id: "fb-deal-1",
        code: "FILTER15",
        discount: "15% OFF",
        title: "15% off sitewide on all faucet filters & refills",
        description: "Save 15% on the genuine Filterbaby 2.0 skincare water filter and replacements with code FILTER15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fb-deal-2",
        code: "GLOW20",
        discount: "20% OFF",
        title: "20% off annual filter replacement subscriptions",
        description: "Get 20% off yearly PRO refill subscriptions for continuous contaminant-free, skin-clearing water.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fb-deal-3",
        code: "BUNDLE30",
        discount: "30% OFF",
        title: "Up to 30% off starter bundles & faucet adapters",
        description: "Save up to 30% when ordering the Filterbaby Deluxe bundle complete with multi-fit universal adapters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fb-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase sitewide",
        description: "Enjoy 10% off your entire first order of clinically proven skincare tap water filters with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fb-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping & 60-day money-back trial",
        description: "Enjoy 100% free tracked delivery across the United States plus a risk-free 60-day money back guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 13. CRZ YOGA (Butterluxe Leggings, Sports Bras & Athleisure Activewear)
  {
    id: 633,
    name: "CRZ YOGA",
    slug: "crz-yoga",
    aliases: ["crzyoga", "crz-yoga-us", "crzyoga-us"],
    logo: "/logos/crz-yoga.svg",
    website: "https://us.crzyoga.com/?ref=sulydaqw",
    affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
    country: "US",
    description: "Premium buttery-soft activewear, high-waisted Butterluxe leggings, workout sports bras, and athletic apparel designed for everyday performance and yoga.",
    coupons: [
      {
        id: "crz-deal-1",
        code: "WELCOME15",
        discount: "15% OFF",
        title: "15% off your entire first activewear order sitewide",
        description: "Save 15% on Butterluxe leggings, sports bras, and athletic tops with verified code WELCOME15.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-deal-2",
        code: "BUTTER20",
        discount: "20% OFF",
        title: "20% off Butterluxe Collection multi-pair bundles",
        description: "Get 20% discount on buttery-soft Butterluxe leggings and active sets applied at checkout with code BUTTER20.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-deal-3",
        code: "",
        discount: "UP TO 50% OFF",
        title: "Up to 50% off official clearance & seasonal sale",
        description: "Save up to 50% on select colors, yoga tops, running shorts, and leggings while supplies last.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-deal-4",
        code: "MAIL15",
        discount: "15% OFF",
        title: "15% off newsletter subscriber coupon code",
        description: "Claim 15% off your shopping cart with verified email subscriber promo code MAIL15.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "100% Free standard tracked US shipping on orders $49+",
        description: "Enjoy complimentary fast tracked delivery across the United States on all qualifying CRZ YOGA orders.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 14. CRZ YOGA CANADA (Canadian Market)
  {
    id: 634,
    name: "CRZ YOGA (Canada)",
    slug: "crz-yoga-ca",
    aliases: ["crzyoga-ca", "crz-yoga-canada", "crzyoga-canada"],
    logo: "/logos/crz-yoga.svg",
    website: "https://ca.crzyoga.com/?ref=sulydaqw",
    affiliate_url: "https://ca.crzyoga.com/?ref=sulydaqw",
    country: "CA",
    description: "Official CRZ YOGA Canadian store. Butterluxe leggings, workout activewear, and sports bras with fast shipping across Canada.",
    coupons: [
      {
        id: "crz-ca-deal-1",
        code: "WELCOME15",
        discount: "15% OFF",
        title: "15% off first order across Canada sitewide",
        description: "Save 15% on your first Canadian order of Butterluxe leggings and yoga gear with code WELCOME15.",
        affiliate_url: "https://ca.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-ca-deal-2",
        code: "BUTTER20",
        discount: "20% OFF",
        title: "20% off Butterluxe bundle activewear orders",
        description: "Claim 20% off multi-item leggings and activewear bundles with code BUTTER20.",
        affiliate_url: "https://ca.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-ca-deal-3",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked Canadian shipping on orders CA$65+",
        description: "Enjoy free standard shipping to all Canadian provinces on orders over CA$65.",
        affiliate_url: "https://ca.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 13. REDU SCULPT (US / Global Body Sculpting Massagers)
  {
    id: 630,
    name: "Redu Sculpt",
    slug: "redusculpt",
    aliases: ["redu-sculpt", "redusculpt-us", "redu-sculpt-us"],
    logo: "/logos/redusculpt.jpg",
    website: "https://www.redusculpt.com/METHEW46097",
    affiliate_url: "https://www.redusculpt.com/METHEW46097",
    country: "US",
    description: "Redu Sculpt offers advanced at-home body contouring massagers, targeted fat reduction tools, sculpting gels, and slimming skincare treatments.",
    coupons: [
      {
        id: "redu-deal-1",
        code: "METHEW46097",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off coupon code",
        description: "Get an exclusive and verified discount code automatically applied at checkout.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-2",
        code: "",
        discount: "40% OFF",
        title: "40% off - Season Sale",
        description: "Save up to 40% off on body contouring massagers during the seasonal clearance event.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-3",
        code: "METHEW46097",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off discount code sitewide",
        description: "Save 10% on all orders with verified discount pre-activated on your session.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-4",
        code: "",
        discount: "60% OFF",
        title: "60% off on subscription",
        description: "Save up to 60% with auto-delivery on replacement gel pads and sculpting refill sets.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free shipping",
        description: "Enjoy free standard shipping on all body sculpting orders across the United States.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-6",
        code: "",
        discount: "60% OFF",
        title: "60% off on gel & oil",
        description: "Get 60% off on Redu Sculpt sculpting gel and firming massage oil.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-7",
        code: "",
        discount: "46% OFF",
        title: "46% off - body sculpting essentials",
        description: "Save 46% off on complete body contouring essentials starter bundle.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-8",
        code: "",
        discount: "33% OFF",
        title: "33% off on bundles",
        description: "Save 33% when buying body sculpting massager value packs and gift sets.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-9",
        code: "",
        discount: "20% OFF",
        title: "20% off on supplements",
        description: "Get 20% discount on Redu Sculpt dietary wellness supplements.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-10",
        code: "",
        discount: "$30 OFF",
        title: "$30 off on green tea",
        description: "Save $30 instantly on green tea dietary extracts at checkout.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-11",
        code: "",
        discount: "15% OFF",
        title: "15% off on newsletter signup",
        description: "Sign up for the newsletter to unlock 15% off your first purchase.",
        affiliate_url: "https://www.redusculpt.com/METHEW46097",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 14. TENWAYS (Lightweight Commuter E-Bikes - US / UK / Global)
  {
    id: 631,
    name: "Tenways",
    slug: "tenways",
    aliases: ["tenways-us", "tenways-uk", "tenwaysebike", "tenways-ebike"],
    logo: "/logos/tenways.svg",
    website: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
    affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
    country: "GLOBAL",
    description: "Tenways crafts high-performance, lightweight commuter electric bikes featuring smooth magnetic torque sensors, Gates carbon belt drives, and long-range portable batteries.",
    coupons: [
      {
        id: "tenways-deal-0",
        code: "TENAFF30",
        is_auto_applied: true,
        discount: "$30 / €30 OFF",
        title: "$30 / €30 off sitewide discount promo code",
        description: "Save $30 / €30 off any Tenways electric bike purchase with exclusive coupon code TENAFF30.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-deal-1",
        code: "TENWAYS100",
        discount: "$100 OFF",
        title: "$100 off sitewide on lightweight commuter electric bikes",
        description: "Save $100 / £100 off premium lightweight commuter e-bikes including CGO600 Pro and CGO800S with verified coupon code TENWAYS100.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-deal-2",
        code: "",
        discount: "UP TO $500 OFF",
        title: "Up to $500 off dual e-bike bundles & multi-bike packages",
        description: "Save up to $500 on 'Double the Love' bundle purchases when buying two Tenways electric bikes together.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-deal-3",
        code: "CGO150",
        discount: "$150 OFF",
        title: "$150 off CGO600 Pro & AGO Series Trekking E-Bikes",
        description: "Claim an instant $150 discount on CGO600 Pro lightweight urban e-bikes and high-torque AGO series models.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 off first order & welcome referral discount",
        description: "Get $50 off your first Tenways electric bike purchase when using this verified referral promo code at checkout.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free doorstep delivery & complimentary toolkit on all e-bikes",
        description: "Enjoy 100% free tracked courier shipping and a complimentary assembly tool kit across US, UK, and Europe on all e-bike orders.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-deal-6",
        code: "",
        discount: "SPECIAL SAVINGS",
        title: "Exclusive ID.me & Student Beans discounts for military and students",
        description: "Save extra with verified status on ID.me or Student Beans at official Tenways checkout.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 15. TENWAYS NL (Netherlands - Official Dutch E-Bike Store)
  {
    id: 632,
    name: "Tenways NL",
    slug: "tenways-nl",
    aliases: ["tenwaysnl", "tenways-nederland", "tenways-fiets"],
    logo: "/logos/tenways.svg",
    website: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
    affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
    country: "GLOBAL",
    description: "Bespaar op Tenways elektrische fietsen in Nederland met geverifieerde kortingscodes, gratis verzending en exclusieve aanbiedingen.",
    coupons: [
      {
        id: "tenways-nl-1",
        code: "TENAFF30",
        is_auto_applied: true,
        discount: "30€ KORTING",
        title: "30€ kortingscode",
        description: "Ontvang een exclusieve en geverifieerde kortingscode voor 30€ korting op je Tenways e-bike bestelling.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-2",
        code: "",
        discount: "300€ KORTING",
        title: "300€ korting - terug naar school aanbieding",
        description: "Bespaar tot wel 300€ op geselecteerde Tenways e-bikes tijdens de speciale seizoensactie.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-3",
        code: "TENAFF30",
        is_auto_applied: true,
        discount: "10% KORTING",
        title: "10% kortingscode voor de hele website",
        description: "Krijg 10% korting op het hele assortiment elektrische fietsen met deze geverifieerde kortingscode.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-4",
        code: "",
        discount: "€100 KORTING",
        title: "€100 korting op de CGO600 Pro",
        description: "Profiteer van 100€ directe korting op de populaire Tenways CGO600 Pro lichtgewicht stadsfiets.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-5",
        code: "",
        discount: "GRATIS VERZENDING",
        title: "Gratis verzending",
        description: "Geniet van 100% gratis bezorging en een gratis montageset bij aankoop van elke Tenways elektrische fiets.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-6",
        code: "",
        discount: "100€ KORTING",
        title: "100€ korting op comfort ontmoet stijl",
        description: "Bespaar 100€ op de Tenways CGO800S comfortabele elektrische stadsfiets met lage instap.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-7",
        code: "",
        discount: "40% KORTING",
        title: "40% korting op stads-e-bikes",
        description: "Bespaar tot wel 40% op geselecteerde stads-elektrische fietsen en outlet modellen.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-8",
        code: "",
        discount: "30% KORTING",
        title: "30% korting op elektrische bakfiets",
        description: "Krijg 30% voordeel op Tenways elektrische bakfietsen en handige cargo accessoires.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-9",
        code: "",
        discount: "20% KORTING",
        title: "20% korting op flitsaanbiedingen",
        description: "Tijdelijke flitsaanbiedingen met 20% korting op geselecteerde Tenways e-bike modellen.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-10",
        code: "",
        discount: "10% KORTING",
        title: "10% korting op accessoires",
        description: "Bespaar 10% op fietstassen, kettingsloten, spatborden, bagagedragers en helmen.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-11",
        code: "",
        discount: "100€ KORTING",
        title: "100€ studentenkorting",
        description: "Studenten ontvangen 100€ extra voordeel via Student Beans verificatie bij het afrekenen.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tenways-nl-12",
        code: "",
        discount: "30€ KORTING",
        title: "30€ korting op nieuwsbriefabonnement",
        description: "Meld je aan voor de officiële Tenways nieuwsbrief en ontvang direct 30€ korting op je eerste bestelling.",
        affiliate_url: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 16. ALGOLASER (Smart Diode Laser Engravers & Cutters)
  {
    id: 633,
    name: "AlgoLaser",
    slug: "algolaser",
    aliases: ["algo-laser", "algolaser-us", "algolaser-global", "algolasercom"],
    logo: "/logos/algolaser.png",
    website: "https://algolaser.com/?ref=METHEWDIPPY",
    affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
    country: "US",
    description: "AlgoLaser pioneers cutting-edge smart diode laser engravers and cutters including Alpha MK2, Delta, and DIY series, delivering professional precision for wood, metal, acrylic, and craft businesses.",
    coupons: [
      {
        id: "algo-deal-0",
        code: "ALMDS10",
        discount: "8% OFF",
        title: "8% off sitewide official discount promo code",
        description: "Save 8% on all AlgoLaser smart laser engravers, cutters, and accessories with verified coupon code ALMDS10.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $300 OFF",
        title: "Up to $300 off - seasonal flash sale on laser engravers",
        description: "Save up to $300 on AlgoLaser Alpha MK2, Delta smart cutters, and DIY diode packages during the seasonal promotion.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off sitewide instant discount",
        description: "Enjoy an extra 10% discount automatically applied to all laser engravers, enclosures, and rotary rollers.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "$200 OFF",
        title: "$200 off AlgoLaser Alpha MK2 (22W / 40W)",
        description: "Get $200 instant price reduction on the flagship AlgoLaser Alpha MK2 heavy-duty diode laser cutter.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "$150 OFF",
        title: "$150 off AlgoLaser Delta Smart Touchscreen",
        description: "Save $150 on the AlgoLaser Delta smart laser cutter featuring built-in touch control and high-speed offline engraving.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked priority shipping",
        description: "Get 100% free door-to-door tracked delivery on laser cutters and engraving machine orders across US, EU & UK.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "30% OFF",
        title: "Up to 30% off creator bundles & value packs",
        description: "Save 30% when ordering complete maker kits including honeycomb panels, air assist pump, and protective enclosures.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "6% OFF",
        title: "6% off first order newsletter signup",
        description: "Subscribe to the official AlgoLaser newsletter to claim an instant 6% welcome bonus on your first machine.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "$80 OFF",
        title: "$80 off AlgoLaser DIY Kit 10W/20W",
        description: "Save $80 on the beginner-friendly AlgoLaser DIY Kit compact diode laser engraver.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-9",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "25% off materials & plywood consumables",
        description: "Enjoy 25% off high-grade basswood sheets, acrylic plates, and metal marking spray refills.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "$50 OFF",
        title: "$50 off rotary roller axis attachments",
        description: "Take $50 off cylindrical rotary roller accessories for engraving tumblers, mugs, and glass bottles.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-11",
        code: "",
        is_auto_applied: true,
        discount: "WARRANTY",
        title: "Free 1-year warranty & 90-day price match",
        description: "Every machine includes a full 1-year manufacturer warranty, 30-day return window, and official technical support.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "algo-deal-12",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off education & business purchases",
        description: "Exclusive 15% discount for educational institutions, maker labs, and small craft business bulk orders.",
        affiliate_url: "https://algolaser.com/?ref=METHEWDIPPY",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 635,
    name: "Desktronic",
    slug: "desktronic",
    aliases: ["desktronic-uk", "desktronic-se", "desktronic-standing-desk", "desktronic-eu"],
    website: "https://desktronic.co.uk/",
    affiliate_url: "/go/desktronic-uk",
    logo: "https://ui.awin.com/images/upload/merchant/profile/107055.png",
    description: "Desktronic crafts premium smart electric standing desks engineered with whisper-quiet dual motors, solid wood desktops, and smart anti-collision memory controls for healthy ergonomic workspaces.",
    coupons: [
      {
        id: "desk-deal-0",
        code: "WEVALUEYOU20",
        is_auto_applied: false,
        discount: "£20 OFF",
        title: "£20 off Desktronic standing desks with verified promo code",
        description: "Save £20 on all Desktronic electric height-adjustable standing desks, ergonomic chairs, and accessories with verified coupon code WEVALUEYOU20.",
        affiliate_url: "/go/desktronic-uk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "Up to £100 off standing desks and ergonomic sale",
        description: "Get automatic discounts on Desktronic standing desks and ergonomic chairs, ergonomic chairs, and accessories.",
        affiliate_url: "/go/desktronic-uk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "£100 OFF",
        title: "£100 off Desktronic Pro One Dual-Motor Standing Desk",
        description: "Get £100 off the flagship Desktronic Pro One with ultra-stable 3-stage legs and smart presets.",
        affiliate_url: "/go/desktronic-uk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "£50 OFF",
        title: "£50 off Desktronic Home One Compact Desk",
        description: "Upgrade your home office with £50 savings on the space-saving Home One electric desk series.",
        affiliate_url: "/go/desktronic-uk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free express shipping across the UK & Germany",
        description: "Enjoy zero delivery fees on all standing desks and large packages with tracked curb delivery.",
        affiliate_url: "/go/desktronic-uk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "5-YR WAR",
        title: "5-Year full warranty & 30-day money-back trial",
        description: "Every Desktronic desk includes a comprehensive 5-year frame and motor warranty plus risk-free returns.",
        affiliate_url: "/go/desktronic-uk",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 636,
    name: "Naturnest",
    slug: "naturnest",
    aliases: ["naturnest-us", "naturnest-rooftop-tents", "naturnest-tents", "naturnest-uk"],
    website: "https://www.naturnest.com/",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturnest.com%2F",
    logo: "https://www.naturnest.com/cdn/shop/files/logo_300x.png",
    description: "Naturnest designs rugged all-weather aluminum hard shell rooftop tents, vehicle awnings, and overlanding camping solutions engineered for effortless 60-second setup and extreme outdoor comfort.",
    coupons: [
      {
        id: "nest-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "5% OFF",
        title: "Up to $300 off hard shell rooftop tents sale",
        description: "Claim instant seasonal savings on hard shell rooftop tents and awnings all hard shell rooftop tents and overlanding awnings.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturnest.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nest-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "$300 OFF",
        title: "$300 off Naturnest Polaris Aluminum Hard Shell Tent",
        description: "Save $300 on the aerodynamic low-profile Polaris hard shell camper with high-density foam mattress.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturnest.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nest-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "$200 OFF",
        title: "$200 off 270-Degree Freestanding Overland Awnings",
        description: "Get $200 instant discount on heavy-duty 280G ripstop waterproof awnings with built-in LED lighting.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturnest.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nest-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free freight shipping across the US contiguous states",
        description: "Enjoy complimentary curbside freight delivery on all rooftop tents with heavy-duty crate protection.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturnest.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nest-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "2-YR WAR",
        title: "2-Year manufacturer warranty & weatherproof guarantee",
        description: "Complete 2-year warranty covering frame, gas struts, hydraulic hinges, and waterproof fabric integrity.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturnest.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 637,
    name: "TuxMat",
    slug: "tuxmat",
    aliases: ["tuxmat-us", "tuxmat-ca", "tux-mat", "tuxmat-car-mats"],
    website: "https://www.tuxmat.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
    logo: "https://www.tuxmat.com/cdn/shop/files/tuxmat-logo_300x.png",
    description: "TuxMat manufactures ultimate luxury all-weather custom car floor mats designed with maximum high-wall spill coverage, elegant luxury aesthetics, and 3D laser-scanned precision fit.",
    coupons: [
      {
        id: "tux-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "Up to 15% off custom fit all-weather floor mats",
        description: "Save 10% on maximum coverage car floor mats and cargo trunk liners with auto-applied bundle savings.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tux-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "Up to 15% off complete 1st, 2nd & 3rd row bundle sets",
        description: "Equip your whole vehicle with premium high-wall laser protection and save up to 15% automatically.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tux-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "$30 OFF",
        title: "$30 off Trunk Cargo Liners with Floor Mat Purchase",
        description: "Add a matching custom cargo trunk tray to your floor mat order and save $30 at checkout.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tux-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free shipping to USA and Canada on orders over $100",
        description: "Get fast tracked ground delivery with zero freight fees across the US and Canadian provinces.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tux-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "LIFETIME",
        title: "Lifetime limited warranty & perfect laser fit guarantee",
        description: "Backed by TuxMat's signature lifetime warranty protecting against cracking, warping, and peeling.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 638,
    name: "SunGoldPower",
    slug: "sungoldpower",
    aliases: ["sungold-power", "sungoldpower-us", "sun-gold-power"],
    website: "https://sungoldpower.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
    logo: "https://sungoldpower.com/cdn/shop/files/logo_300x.png",
    description: "SunGoldPower provides high-efficiency off-grid pure sine wave solar inverters, server rack lithium batteries, and complete solar power kits for whole home backup and off-grid living.",
    coupons: [
      {
        id: "sgp-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "6% OFF",
        title: "Up to $500 off off-grid solar inverters and kits",
        description: "Enjoy an extra 6% off solar inverters, lithium batteries, and solar kits with direct manufacturer promotional pricing.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sgp-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "$500 OFF",
        title: "$500 off 6500W 48V Off-Grid Inverter Bundles",
        description: "Save $500 on all-in-one pure sine wave inverter chargers with dual MPPT solar controllers.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sgp-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free shipping across the continental US",
        description: "Zero shipping cost on heavy inverter equipment and palletized battery kits.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 639,
    name: "Sculpfun",
    slug: "sculpfun",
    aliases: ["sculpfun-laser", "sculpfun-us", "sculp-fun"],
    website: "https://www.sculpfun.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.sculpfun.com",
    logo: "https://www.sculpfun.com/cdn/shop/files/logo_300x.png",
    description: "Sculpfun pioneers high-speed desktop diode laser engravers and cutters designed for precision craft, wood carving, metal marking, and custom fabrication businesses.",
    coupons: [
      {
        id: "sculp-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "Up to $120 off S30 laser engravers and cutters",
        description: "Get 10% off all Sculpfun S30 laser engravers, expansion kits, and accessories with direct factory promotional discounts.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.sculpfun.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sculp-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "$120 OFF",
        title: "$120 off Sculpfun S30 Ultra 33W Laser Cutter",
        description: "Save $120 on the heavy-duty 33W optical power laser machine with automatic assist kit.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.sculpfun.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 640,
    name: "Desktronic NL",
    slug: "desktronic-nl",
    aliases: ["desktronic-netherlands", "desktronicnl"],
    website: "https://desktronic.nl/",
    affiliate_url: "/go/desktronic-nl",
    logo: "https://ui.awin.com/images/upload/merchant/profile/107055.png",
    description: "Desktronic produceert hoogwaardige elektrische zit-sta bureaus met fluisterstille dubbele motoren, massief houten tafelbladen en ergonomische bediening voor gezonde werkplekken in Nederland.",
    coupons: [
      {
        id: "desk-nl-0",
        code: "WEVALUEYOU20",
        is_auto_applied: false,
        discount: "20€ KORTING",
        title: "20€ korting op Desktronic zit-sta bureaus met actiecode",
        description: "Bespaar 20€ op alle Desktronic elektrische zit-sta bureaus en ergonomische accessoires met geverifieerde kortingscode WEVALUEYOU20.",
        affiliate_url: "/go/desktronic-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-nl-1",
        code: "",
        is_auto_applied: true,
        discount: "100€ KORTING",
        title: "100€ korting op Desktronic Pro One met dubbele motor",
        description: "Profiteer van 100€ directe korting op het vlaggenschip Pro One zit-sta bureau met 3-traps poten en geheugentoetsen.",
        affiliate_url: "/go/desktronic-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-nl-2",
        code: "",
        is_auto_applied: true,
        discount: "50€ KORTING",
        title: "50€ korting op Desktronic Home One compact bureau",
        description: "Upgrade je thuiswerkplek met 50€ voordeel op de ruimtebesparende Home One elektrische serie.",
        affiliate_url: "/go/desktronic-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-nl-3",
        code: "",
        is_auto_applied: true,
        discount: "GRATIS VERZENDING",
        title: "Gratis bezorging in heel Nederland en België",
        description: "Geen bezorgkosten op alle zit-sta bureaus en grote pakketten met veilige drempellevering.",
        affiliate_url: "/go/desktronic-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-nl-4",
        code: "",
        is_auto_applied: true,
        discount: "5 JAAR GARANTIE",
        title: "5 Jaar volledige garantie en 30 dagen risicoloos proefdraaien",
        description: "Elk Desktronic bureau wordt geleverd met 5 jaar fabrieksgarantie op frame en motoren plus 30 dagen retourrecht.",
        affiliate_url: "/go/desktronic-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 641,
    name: "Desktronic DE",
    slug: "desktronic-de",
    aliases: ["desktronic-germany", "desktronicde"],
    website: "https://desktronic.de/",
    affiliate_url: "/go/desktronic-de",
    logo: "https://ui.awin.com/images/upload/merchant/profile/107055.png",
    description: "Desktronic fertigt hochwertige höhenverstellbare Schreibtische mit leisen Doppelmotoren, massiven Echtholz-Tischplatten und intuitiven Speichersteuerungen für gesunde Ergonomie am Arbeitsplatz.",
    coupons: [
      {
        id: "desk-de-0",
        code: "WEVALUEYOU20",
        is_auto_applied: false,
        discount: "20€ RABATT",
        title: "20€ Rabatt auf Desktronic Schreibtische mit Rabattcode",
        description: "Sichern Sie sich 20€ Rabatt auf alle elektrisch höhenverstellbaren Desktronic Schreibtische mit Gutscheincode WEVALUEYOU20.",
        affiliate_url: "/go/desktronic-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-de-1",
        code: "",
        is_auto_applied: true,
        discount: "100€ RABATT",
        title: "100€ Rabatt auf Desktronic Pro One Doppelmotor Schreibtisch",
        description: "100€ Sofortrabatt auf den Premium-Schreibtisch Pro One mit stabilen 3-Segment-Beinen und Antikollisionssensor.",
        affiliate_url: "/go/desktronic-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-de-2",
        code: "",
        is_auto_applied: true,
        discount: "50€ RABATT",
        title: "50€ Rabatt auf Desktronic Home One Modell",
        description: "Perfekt fürs Homeoffice: 50€ Ersparnis auf die kompakte Home One Stehschreibtisch-Serie.",
        affiliate_url: "/go/desktronic-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-de-3",
        code: "",
        is_auto_applied: true,
        discount: "GRATIS VERSAND",
        title: "Kostenloser Speditionsversand in ganz Deutschland",
        description: "Keine Lieferkosten auf alle Schreibtische und ergonomische Büromöbel mit Sendungsverfolgung.",
        affiliate_url: "/go/desktronic-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-de-4",
        code: "",
        is_auto_applied: true,
        discount: "5 JAHRE GARANTIE",
        title: "5 Jahre Rundum-Garantie und 30 Tage Rückgaberecht",
        description: "Jeder Schreibtisch ist mit 5 Jahren Herstellergarantie auf Rahmen und Motoren geschützt.",
        affiliate_url: "/go/desktronic-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 642,
    name: "Mirlux NL",
    slug: "mirlux-nl",
    aliases: ["mirlux", "mirluxnl", "mirlux-spiegels"],
    website: "https://mirlux.nl/",
    affiliate_url: "/go/mirlux-nl",
    logo: "https://ui.awin.com/images/upload/merchant/profile/101763.png",
    description: "Mirlux ontwerpt en produceert luxe LED badkamerspiegels op maat, slimme spiegels met spiegelverwarming, touch-bediening en dimbare verlichting in Nederland.",
    coupons: [
      {
        id: "mirlux-nl-0",
        code: "10OFF",
        is_auto_applied: false,
        discount: "10% KORTING",
        title: "10% Korting op alle Mirlux spiegels met kortingscode",
        description: "Profiteer van 10% extra korting op je gehele bestelling bij Mirlux met de exclusieve kortingscode 10OFF.",
        affiliate_url: "/go/mirlux-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-nl-1",
        code: "WLKS",
        is_auto_applied: false,
        discount: "15% KORTING",
        title: "15% Kortingscode op Mirlux design badkamerspiegels",
        description: "Bespaar 15% op luxe LED spiegels en badkamermeubels met geverifieerde actiecode WLKS.",
        affiliate_url: "/go/mirlux-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-nl-2",
        code: "",
        is_auto_applied: true,
        discount: "TOT 50% KORTING",
        title: "Tot 50% Korting op geselecteerde badkamerspiegels in de Sale",
        description: "Grote kortingen op populaire modellen LED spiegels met geïntegreerde verlichting en verwarming. Geen code vereist.",
        affiliate_url: "/go/mirlux-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-nl-3",
        code: "",
        is_auto_applied: true,
        discount: "GRATIS VERZENDING",
        title: "Gratis verzending op alle bestellingen in Nederland",
        description: "Veilige en verzekerde verzending direct bij u thuisbezorgd zonder extra bezorgkosten.",
        affiliate_url: "/go/mirlux-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-nl-4",
        code: "",
        is_auto_applied: true,
        discount: "2 JAAR GARANTIE",
        title: "2 Jaar volledige garantie op LED verlichting en elektronica",
        description: "Hoogwaardige kwaliteit gegarandeerd met 2 jaar officiële fabrieksgarantie en 30 dagen bedenktermijn.",
        affiliate_url: "/go/mirlux-nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 643,
    name: "Mirlux DE",
    slug: "mirlux-de",
    aliases: ["mirlux-germany", "mirluxde"],
    website: "https://mirlux.de/",
    affiliate_url: "/go/mirlux-de",
    logo: "https://ui.awin.com/images/upload/merchant/profile/123796.png",
    description: "Mirlux steht für luxuriöse LED-Badspiegel nach Maß mit integrierter Spiegelheizung, dimmbarer Beleuchtung, Touch-Schaltern und edlen Rahmen in Deutschland.",
    coupons: [
      {
        id: "mirlux-de-0",
        code: "WLKS",
        is_auto_applied: false,
        discount: "15% RABATT",
        title: "15% Rabattcode auf alle Mirlux Badspiegel",
        description: "Sparen Sie 15% auf das gesamte Sortiment an maßgefertigten LED-Spiegeln mit dem Gutscheincode WLKS.",
        affiliate_url: "/go/mirlux-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-de-1",
        code: "10OFF",
        is_auto_applied: false,
        discount: "10% RABATT",
        title: "10% Gutscheincode für Neukunden und Newsletter",
        description: "Erhalten Sie 10% Rabatt auf Ihre erste Spiegelbestellung mit dem Rabattcode 10OFF.",
        affiliate_url: "/go/mirlux-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-de-2",
        code: "",
        is_auto_applied: true,
        discount: "BIS ZU 40% RABATT",
        title: "Bis zu 40% Rabatt im Mirlux Sale auf Design-Spiegel",
        description: "Attraktive Rabatte auf sofort lieferbare LED-Badspiegel und Hollywood-Spiegel. Automatisch an der Kasse abgezogen.",
        affiliate_url: "/go/mirlux-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-de-3",
        code: "",
        is_auto_applied: true,
        discount: "KOSTENLOSER VERSAND",
        title: "Kostenloser versicherter Versand innerhalb Deutschlands",
        description: "Spezial-Spiegelversand mit bruchsicherer Verpackung ohne zusätzliche Versandkosten.",
        affiliate_url: "/go/mirlux-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-de-4",
        code: "",
        is_auto_applied: true,
        discount: "2 JAHRE GARANTIE",
        title: "2 Jahre Herstellergarantie auf alle LED-Komponenten",
        description: "Höchste deutsche Sicherheits- und Qualitätsstandards mit CE-Zertifizierung und 2 Jahren Garantie.",
        affiliate_url: "/go/mirlux-de",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 644,
    name: "WJD Exclusives",
    slug: "wjd-exclusives-us",
    aliases: ["wjd-exclusives", "wjd", "wjd-exclusive", "wjdexclusives"],
    website: "https://wjdexclusives.com/",
    affiliate_url: "/go/wjd-exclusives-us",
    logo: "https://ui.awin.com/images/upload/merchant/profile/82685.png",
    description: "WJD Exclusives is a premier New York jeweler specializing in authentic 10K and 14K solid gold chains, Miami Cuban link bracelets, certified diamond pendants, rings, and luxury jewelry.",
    coupons: [
      {
        id: "wjd-0",
        code: "THANKYOU2023",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off WJD Exclusives Coupon Code Sitewide",
        description: "Save 15% on real gold chains, Cuban links, diamond jewelry, and custom pendants with verified coupon code THANKYOU2023.",
        affiliate_url: "/go/wjd-exclusives-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wjd-1",
        code: "THANKYOU2023",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Sitewide on Fine Gold & Diamond Jewelry",
        description: "Enjoy an extra 10% discount on entire jewelry collection with code THANKYOU2023.",
        affiliate_url: "/go/wjd-exclusives-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wjd-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 60% OFF",
        title: "Up to 60% Off Flash Deals & Weekly Gold Specials",
        description: "Massive markdowns on trending chains, rope chains, rings, and bracelets. Discount automatically applied at checkout.",
        affiliate_url: "/go/wjd-exclusives-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wjd-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Insured US Shipping On All Orders",
        description: "Complimentary fully insured domestic doorstep delivery with signature on all authentic jewelry orders.",
        affiliate_url: "/go/wjd-exclusives-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wjd-4",
        code: "",
        is_auto_applied: true,
        discount: "CERTIFIED GOLD",
        title: "100% Guaranteed Genuine Gold & 30-Day Hassle-Free Returns",
        description: "Every item stamped and certified authentic with 30-day money-back guarantee and lifetime diamond upgrade options.",
        affiliate_url: "/go/wjd-exclusives-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 645,
    name: "Silver Cross US",
    slug: "silver-cross-us",
    aliases: ["silver-cross", "silvercross", "silvercrossus"],
    website: "https://silvercrossus.com/",
    affiliate_url: "/go/silver-cross-us",
    logo: "https://ui.awin.com/images/upload/merchant/profile/47379.png",
    description: "Silver Cross is the iconic British luxury nursery brand crafting premier strollers, wave prams, reef travel systems, high chairs, and car seats trusted by parents worldwide since 1877.",
    coupons: [
      {
        id: "sc-0",
        code: "SAVE10",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Silver Cross Coupon Code on Strollers & Gear",
        description: "Save 15% on luxury strollers, pram travel systems, and accessories with verified discount code SAVE10.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-1",
        code: "",
        is_auto_applied: true,
        discount: "$300 OFF",
        title: "$300 Off Silver Cross Stroller Accessory Bundle Deals",
        description: "Bundle and save up to $300 on Wave and Reef 2 stroller combinations including bassinet, tandem seat, and footmuff.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 50% OFF",
        title: "Up to 50% Off Silver Cross Seasonal Sale & Clearance",
        description: "Exclusive discounts on luxury baby strollers, high chairs, diaper bags, and travel cribs. No code needed.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Doorstep Shipping Across Contiguous United States",
        description: "Get free standard shipping on all stroller systems, car seats, and accessories delivered directly to your door.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-4",
        code: "",
        is_auto_applied: true,
        discount: "3-YEAR WARRANTY",
        title: "3-Year Manufacturer Warranty on All Luxury Strollers",
        description: "Every Silver Cross stroller comes with a comprehensive 3-year warranty for complete peace of mind.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 26. SCHEELS (US Sporting Goods, Outdoor Gear, Footwear & Apparel)
  {
    id: 650,
    name: "SCHEELS",
    slug: "scheels",
    aliases: ["scheels-us", "scheels-sports", "scheels-com"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Scheels_logo.svg",
    website: "https://www.scheels.com",
    affiliate_url: "/go/scheels",
    country: "US",
    description: "SCHEELS is America's premier sporting goods and outdoor gear destination. Explore athletic footwear, hunting, fishing, camping equipment, and sportswear from top brands like Nike, Hoka, Traeger, and Under Armour.",
    coupons: [
      {
        id: "scheels-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 50% OFF",
        title: "Up to 50% off clearance sports gear & outdoor equipment",
        description: "Save up to 50% on top hunting, fishing, camping, and athletic gear. Direct savings applied at checkout.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "scheels-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40% OFF",
        title: "Up to 40% off athletic footwear: Nike, Hoka, On Cloud & Brooks",
        description: "Huge discounts on top performance running shoes and athletic footwear for men, women, and kids.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "scheels-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free standard ground shipping on qualifying orders $50+",
        description: "Get free fast tracked ground delivery across the United States on all qualifying orders over $50.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "scheels-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "40% OFF",
        title: "Up to 40% off select outerwear, sports clothing & swimwear",
        description: "Save up to 40% on top seasonal apparel, jackets, and sportswear for the whole family.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "scheels-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "Up to 25% off hunting gear, camping essentials & optics",
        description: "Direct markdown deals on hunting blinds, hunting accessories, and camping supplies.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "scheels-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "PRICE MATCH",
        title: "SCHEELS Price Match Guarantee on all authorized retailers",
        description: "Find a lower price on an identical in-stock item at any authorized competitor, and SCHEELS will match it.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 651,
    name: "Zendure DE",
    slug: "zendure",
    aliases: ["zendure-de", "zendure-germany", "zendurede"],
    website: "https://zendure.de/",
    affiliate_url: "/go/zendure",
    logo: "/logos/zendure.png",
    country: "DE",
    description: "Zendure ist ein führender Innovator für intelligente Energiespeicher und Balkonkraftwerk-Lösungen in Deutschland. Entdecken Sie SolarFlow Systeme, Hyper 2000, SuperBase mobile Powerstations und hocheffiziente Solarmodule.",
    coupons: [
      {
        id: "zendure-de-1",
        code: "",
        is_auto_applied: true,
        discount: "5% RABATT",
        title: "5% Rabatt auf das gesamte Zendure Sortiment",
        description: "Sparen Sie 5% auf Balkonkraftwerk Speicher, SolarFlow und Powerstations. Automatisch an der Kasse aktiviert.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-2",
        code: "",
        is_auto_applied: true,
        discount: "BIS ZU 40% RABATT",
        title: "Bis zu 40% Rabatt auf Balkonkraftwerk Speicher & SolarFlow Sets",
        description: "Direkter Rabatt auf ausgewählte Zendure SolarFlow Balkon-Speichersysteme im offiziellen Onlineshop.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-3",
        code: "",
        is_auto_applied: true,
        discount: "KOSTENLOSER VERSAND",
        title: "Kostenloser versicherter Versand innerhalb Deutschlands",
        description: "Alle qualifizierten Bestellungen von SolarFlow Speichern und Powerstations werden gratis und schnell geliefert.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-4",
        code: "",
        is_auto_applied: true,
        discount: "BIS ZU 800€ SPAREN",
        title: "Bis zu 800€ Rabatt auf SuperBase V Powerstations & Solar-Sets",
        description: "Mega-Preisvorteil auf mobile Heimspeicher, Notstromaggregate und erweiterbare Batteriesysteme.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-5",
        code: "",
        is_auto_applied: true,
        discount: "NEWSLETTER VORTEIL",
        title: "Exklusive Rabatte und Gutscheine per Newsletter",
        description: "Melden Sie sich für den kostenlosen Zendure Newsletter an und sichern Sie sich regelmäßige Aktionsangebote.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-6",
        code: "",
        is_auto_applied: true,
        discount: "10 JAHRE GARANTIE",
        title: "Bis zu 10 Jahre Herstellergarantie auf Zendure Solarspeicher",
        description: "Höchste LiFePO4 Akku-Qualität und Sicherheit mit langfristiger Herstellergarantie auf SolarFlow Speicher.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  }
];


/**
 * Fast lookup map for all aliases and canonical slugs
 */
const ALIAS_LOOKUP: Record<string, RegistryStore> = {};
STORE_REGISTRY.forEach(store => {
  ALIAS_LOOKUP[store.slug.toLowerCase()] = store;
  if (store.aliases) {
    store.aliases.forEach(alias => {
      ALIAS_LOOKUP[alias.toLowerCase()] = store;
    });
  }
});

/**
 * Resolves any slug (canonical or alias) and returns populated Store & Coupon objects
 */
export function getRegisteredStore(requestedSlug: string): { store: Store; coupons: Coupon[] } | null {
  const norm = requestedSlug.toLowerCase().trim();
  const regStore = ALIAS_LOOKUP[norm];
  if (!regStore) return null;

  const logoUrl = regStore.logo || getLogoUrl(regStore.slug) || getLogoUrl(norm);

  const populatedStore: Store = {
    id: regStore.id,
    name: regStore.name,
    slug: requestedSlug, // Preserves the exact URL slug accessed
    logo: logoUrl,
    website: regStore.affiliate_url || regStore.website,
    products: regStore.products,
    description: regStore.description
  };

  const populatedCoupons: Coupon[] = regStore.coupons.map(c => {
    const affiliate = c.affiliate_url || regStore.affiliate_url || regStore.website;
    return {
      id: c.id,
      code: c.code || "",
      discount: c.discount,
      title: c.title,
      description: c.description,
      is_verified: c.is_verified,
      is_auto_applied: c.is_auto_applied,
      expiry_date: c.expiry_date || "2026-12-31",
      store: populatedStore,
      storeSlug: requestedSlug,
      affiliate_url: affiliate,
      affiliate_link: affiliate,
      affiliateLink: affiliate,
      image: c.image
    };
  });

  return {
    store: populatedStore,
    coupons: populatedCoupons
  };
}

/**
 * Returns all slugs (canonical + aliases) for Next.js generateStaticParams
 */
export function getAllRegisteredSlugs(): string[] {
  return Object.keys(ALIAS_LOOKUP);
}

/**
 * Utility to register a new store dynamically or during runtime
 */
export function registerStore(config: RegistryStore): void {
  STORE_REGISTRY.push(config);
  ALIAS_LOOKUP[config.slug.toLowerCase()] = config;
  if (config.aliases) {
    config.aliases.forEach(alias => {
      ALIAS_LOOKUP[alias.toLowerCase()] = config;
    });
  }
}
