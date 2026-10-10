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
    id: 601,
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
    id: 602,
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
    id: 603,
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
    id: 604,
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
    id: 605,
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
    id: 606,
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
    id: 625,
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
    id: 626,
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
    id: 627,
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
    id: 628,
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
    id: 629,
    name: "CRZ YOGA",
    slug: "crz-yoga",
    aliases: ["crzyoga", "crz-yoga-us", "crzyoga-us"],
    logo: "/logos/crz-yoga.png",
    website: "https://us.crzyoga.com/?ref=sulydaqw",
    affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
    country: "US",
    description: "Premium buttery-soft activewear, high-waisted Butterluxe leggings, workout sports bras, and athletic apparel designed for everyday performance and yoga.",
    coupons: [
      {
        id: "crz-deal-1",
        code: "AUTO-APPLIED",
        is_auto_applied: true,
        discount: "UP TO 80% OFF",
        title: "Up to 80% off official flash sale & clearance deals",
        description: "Discount automatically applied via official partner link. No manual promo code needed at checkout.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-deal-2",
        code: "AUTO-APPLIED",
        is_auto_applied: true,
        discount: "UP TO 15% OFF",
        title: "Buy More Save More: Buy 2 Save 10%, Buy 3 Save 15%",
        description: "Volume discount automatically applied at checkout when purchasing multiple Butterluxe activewear pieces.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-deal-3",
        code: "AUTO-APPLIED",
        is_auto_applied: true,
        discount: "12% OFF",
        title: "12% off official new customer discount (Auto-Applied)",
        description: "Official 12% subscriber savings automatically activated via official referral link.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-deal-4",
        code: "AUTO-APPLIED",
        is_auto_applied: true,
        discount: "UP TO 50% OFF",
        title: "Up to 50% off select Butterluxe™ Collection colors & styles",
        description: "Instant markdown discounts applied automatically on viral buttery-soft yoga leggings and tops.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-deal-5",
        code: "AUTO-APPLIED",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "100% Free standard tracked US shipping on orders $49+",
        description: "Complimentary fast tracked delivery across the United States or faster delivery with Buy with Prime.",
        affiliate_url: "https://us.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 14. CRZ YOGA CANADA (Canadian Market)
  {
    id: 630,
    name: "CRZ YOGA (Canada)",
    slug: "crz-yoga-ca",
    aliases: ["crzyoga-ca", "crz-yoga-canada", "crzyoga-canada"],
    logo: "/logos/crz-yoga.png",
    website: "https://ca.crzyoga.com/?ref=sulydaqw",
    affiliate_url: "https://ca.crzyoga.com/?ref=sulydaqw",
    country: "CA",
    description: "Official CRZ YOGA Canadian store. Butterluxe leggings, workout activewear, and sports bras with fast shipping across Canada.",
    coupons: [
      {
        id: "crz-ca-deal-1",
        code: "AUTO-APPLIED",
        is_auto_applied: true,
        discount: "UP TO 80% OFF",
        title: "Up to 80% off official Canadian flash sale & clearance",
        description: "Huge discounts on buttery-soft yoga leggings and athletic tops automatically applied via link.",
        affiliate_url: "https://ca.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-ca-deal-2",
        code: "AUTO-APPLIED",
        is_auto_applied: true,
        discount: "12% OFF",
        title: "12% off first order discount (Auto-Applied via link)",
        description: "Get 12% off your first Canadian order of Butterluxe leggings automatically activated.",
        affiliate_url: "https://ca.crzyoga.com/?ref=sulydaqw",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "crz-ca-deal-3",
        code: "AUTO-APPLIED",
        is_auto_applied: true,
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
    id: 631,
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
    id: 632,
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
    id: 633,
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
    id: 634,
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
        code: "",
        is_auto_applied: true,
        discount: "EXTRA 10% OFF",
        title: "Extra 10% off for subscribers and official promotions",
        description: "No coupon code required. Extra 10% savings and official seasonal discounts applied automatically at checkout.",
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
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.co.uk%2F",
    logo: "/logos/desktronic.svg",
    description: "Desktronic crafts premium smart electric standing desks engineered with whisper-quiet dual motors, solid wood desktops, and smart anti-collision memory controls for healthy ergonomic workspaces.",
    coupons: [
      {
        id: "desk-deal-0",
        code: "WEVALUEYOU20",
        is_auto_applied: false,
        discount: "£20 OFF",
        title: "£20 off Desktronic standing desks with verified promo code",
        description: "Save £20 on all Desktronic electric height-adjustable standing desks, ergonomic chairs, and accessories with verified coupon code WEVALUEYOU20.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.co.uk%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "desk-deal-1",
        code: "WorkComfort",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off standing desks and ergonomic accessories",
        description: "Save 10% on your entire ergonomic desk setup with verified promo code WorkComfort.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.co.uk%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
    ]
  },
  {
    id: 636,
    name: "Naturnest",
    slug: "naturnest",
    aliases: ["naturnest-us", "naturnest-rooftop-tents", "naturnest-tents", "naturnest-uk"],
    website: "https://www.naturnest.com/",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturnest.com%2F",
    logo: "/logos/naturnest.svg",
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
    logo: "/logos/tuxmat.svg",
    description: "TuxMat manufactures ultimate luxury all-weather custom car floor mats designed with maximum high-wall spill coverage, elegant luxury aesthetics, and 3D laser-scanned precision fit.",
    coupons: [
      {
        id: "tux-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free Fast Shipping Across USA & Canada",
        description: "Get free standard ground delivery on all custom floor mat orders over $100 without any code needed.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tux-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "$30 OFF",
        title: "$30 Off Custom Trunk Cargo Mats with Full Set Order",
        description: "Save $30 automatically at checkout when bundling a matching trunk cargo liner with your 1st & 2nd row mats.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tux-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% Off Exclusive Military & First Responder Discount",
        description: "Active military, veterans, and first responders receive a 20% discount verified directly through ID.me / GovX at checkout.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tux-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 15%",
        title: "Up to 15% Bundle Savings on Complete 3-Row Vehicle Sets",
        description: "Equip SUVs and minivans with complete high-wall protection and enjoy built-in package savings automatically applied.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tux-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "LIFETIME",
        title: "Lifetime Limited Warranty & 100% Perfect Laser Fit",
        description: "Every set includes TuxMat's lifetime warranty guaranteeing maximum coverage without warping, cracking, or slipping.",
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
    logo: "/logos/sungoldpower.svg",
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
    logo: "/logos/sculpfun.svg",
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
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.nl%2F",
    logo: "/logos/desktronic.svg",
    description: "Desktronic produceert hoogwaardige elektrische zit-sta bureaus met fluisterstille dubbele motoren, massief houten tafelbladen en ergonomische bediening voor gezonde werkplekken in Nederland.",
    coupons: [
      {
        id: "desk-nl-0",
        code: "WEVALUEYOU20",
        is_auto_applied: false,
        discount: "20€ KORTING",
        title: "20€ korting op Desktronic zit-sta bureaus met actiecode",
        description: "Bespaar 20€ op alle Desktronic elektrische zit-sta bureaus en ergonomische accessoires met geverifieerde kortingscode WEVALUEYOU20.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.nl%2F",
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
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.nl%2F",
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
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.nl%2F",
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
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.nl%2F",
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
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.nl%2F",
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
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.de%2F",
    logo: "/logos/desktronic.svg",
    description: "Desktronic fertigt hochwertige höhenverstellbare Schreibtische mit leisen Doppelmotoren, massiven Echtholz-Tischplatten und intuitiven Speichersteuerungen für gesunde Ergonomie am Arbeitsplatz.",
    coupons: [
      {
        id: "desk-de-0",
        code: "WEVALUEYOU20",
        is_auto_applied: false,
        discount: "20€ RABATT",
        title: "20€ Rabatt auf Desktronic Schreibtische mit Rabattcode",
        description: "Sichern Sie sich 20€ Rabatt auf alle elektrisch höhenverstellbaren Desktronic Schreibtische mit Gutscheincode WEVALUEYOU20.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.de%2F",
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
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.de%2F",
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
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.de%2F",
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
    logo: "/logos/mirlux.svg",
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
    logo: "/logos/mirlux.svg",
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
    logo: "/logos/wjdexclusives.svg",
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
    logo: "/logos/silvercross.png",
    description: "Silver Cross is the iconic British luxury nursery brand crafting premier strollers, wave prams, reef travel systems, high chairs, and car seats trusted by parents worldwide since 1877.",
    coupons: [
      {
        id: "sc-1",
        code: "SAVE10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off coupon code",
        description: "Save 10% on luxury strollers, pram travel systems, and accessories with verified discount code SAVE10.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-2",
        code: "",
        is_auto_applied: true,
        discount: "40% OFF",
        title: "40% off on sale items",
        description: "Get up to 40% off on select premium baby gear, strollers, and nursery items in the seasonal sale.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-3",
        code: "",
        is_auto_applied: true,
        discount: "70% OFF",
        title: "70% off on bassinets",
        description: "Huge clearance discount of up to 70% off luxury baby bassinets and sleep accessories.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "free shipping over $99",
        description: "Enjoy complimentary tracked ground shipping across the US on all orders over $99.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-5",
        code: "",
        is_auto_applied: true,
        discount: "40% OFF",
        title: "40% off on mealtime set",
        description: "Save 40% on high chairs, booster seats, and ergonomic baby mealtime feeding essentials.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-6",
        code: "",
        is_auto_applied: true,
        discount: "30% OFF",
        title: "30% off on accessory bundle",
        description: "Bundle and save 30% when purchasing coordinating stroller footmuffs, rain covers, and adapters.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-7",
        code: "",
        is_auto_applied: true,
        discount: "$300 OFF",
        title: "$300 off on strollers",
        description: "Save $300 instantly on premium Wave 3 and Reef 2 single-to-double luxury travel systems.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-8",
        code: "",
        is_auto_applied: true,
        discount: "$130 OFF",
        title: "$130 off on travel crib",
        description: "Get $130 off portable, lightweight travel cribs and playards designed for effortless family adventures.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-9",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off on accessories",
        description: "Save 15% on stylish diaper bags, cup holders, changing mats, and pram seat liners.",
        affiliate_url: "/go/silver-cross-us",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sc-10",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on newsletter sign-up",
        description: "Subscribe to the official Silver Cross email club to unlock an immediate 10% discount on your next purchase.",
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
    logo: "/logos/scheels.svg",
    website: "https://www.scheels.com",
    affiliate_url: "/go/scheels",
    country: "US",
    description: "SCHEELS is America's premier sporting goods and outdoor gear destination. Explore athletic footwear, hunting, fishing, camping equipment, and sportswear from top brands like Nike, Hoka, Traeger, and Under Armour.",
    coupons: [
      {
        id: "scheels-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off coupon code & sitewide deals",
        description: "Get exclusive discounts and promotional coupon savings pre-applied at checkout on Scheels.com.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "50% OFF",
        title: "50% off on top brands & clearance gear",
        description: "Save up to 50% on Nike, Hoka, Under Armour, Traeger, and outdoor clearance apparel.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free shipping on qualifying orders $50+",
        description: "Receive free standard ground delivery across the United States on eligible orders over $50.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "50% OFF",
        title: "50% off on girl & women shoes",
        description: "Save up to 50% on athletic sneakers, running shoes, hiking footwear, and casual boots.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "40% OFF",
        title: "40% off - boy's & men's clothing",
        description: "Take up to 40% discount on athletic hoodies, shirts, training shorts, and activewear.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "40% OFF",
        title: "40% off on outer & swimwear",
        description: "Up to 40% off seasonal cold-weather jackets, waterproof shells, fleece, and swimwear.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "30% OFF",
        title: "30% off - backpacks & duffel bags",
        description: "Save 30% on travel bags, tactical packs, school backpacks, and sports gym duffels.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "25% off - hunting items & gear",
        description: "Save 25% on hunting clothing, archery gear, optics, camouflage, and field equipment.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-9",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off on drinkware & coolers",
        description: "Take 20% off Yeti, Stanley, Hydro Flask insulated tumblers, bottles, and outdoor coolers.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off on home & yard products",
        description: "Save 20% on patio accessories, outdoor heating, yard games, and home sports decor.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-11",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off on best selling sporting items",
        description: "15% promotional discount on top-rated fitness, golf, baseball, and athletic gear.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "scheels-deal-12",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on newsletter sign-up",
        description: "Sign up for Scheels VIP email newsletter and receive 10% off your next online order.",
        affiliate_url: "/go/scheels",
        is_verified: true,
        expiry_date: "2026-10-31"
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
        id: "zendure-de-0",
        code: "ZDEDM10OFF",
        is_auto_applied: false,
        discount: "10% RABATT",
        title: "10% Rabatt auf das gesamte Zendure Sortiment",
        description: "Sparen Sie exklusiv 10% auf Balkonkraftwerke, Speicher und Zubehör mit Rabattcode ZDEDM10OFF.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-1",
        code: "SOLAR5",
        is_auto_applied: false,
        discount: "5% RABATT",
        title: "5% Rabatt auf das gesamte Zendure Sortiment",
        description: "Sparen Sie 5% auf Balkonkraftwerk Speicher, SolarFlow und Powerstations mit Rabattcode SOLAR5.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-2",
        code: "BALKON40",
        is_auto_applied: false,
        discount: "BIS ZU 40% RABATT",
        title: "Bis zu 40% Rabatt auf Balkonkraftwerk Speicher & SolarFlow Sets",
        description: "Direkter Rabatt auf ausgewählte Zendure SolarFlow Balkon-Speichersysteme mit Code BALKON40.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-3",
        code: "FREESHIP",
        is_auto_applied: false,
        discount: "KOSTENLOSER VERSAND",
        title: "Kostenloser versicherter Versand innerhalb Deutschlands",
        description: "Alle qualifizierten Bestellungen von SolarFlow Speichern und Powerstations gratis mit Code FREESHIP.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-4",
        code: "SAVE800",
        is_auto_applied: false,
        discount: "BIS ZU 800€ SPAREN",
        title: "Bis zu 800€ Rabatt auf SuperBase V Powerstations & Solar-Sets",
        description: "Mega-Preisvorteil auf mobile Heimspeicher, Notstromaggregate und erweiterbare Batteriesysteme mit Code SAVE800.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-5",
        code: "NEWSLETTER",
        is_auto_applied: false,
        discount: "NEWSLETTER VORTEIL",
        title: "Exklusive Rabatte und Gutscheine per Newsletter",
        description: "Melden Sie sich für den kostenlosen Zendure Newsletter an mit Aktionscode NEWSLETTER.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "zendure-de-6",
        code: "10JAHRE",
        is_auto_applied: false,
        discount: "10 JAHRE GARANTIE",
        title: "Bis zu 10 Jahre Herstellergarantie auf Zendure Solarspeicher",
        description: "Höchste LiFePO4 Akku-Qualität und Sicherheit mit langfristiger Herstellergarantie mit Code 10JAHRE.",
        affiliate_url: "/go/zendure",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 653,
    name: "Duck Head",
    slug: "duckhead",
    aliases: ["duck-head", "duckhead-us", "duck-head-apparel"],
    website: "https://duckhead.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fduckhead.com%2F",
    logo: "/logos/duckhead.svg",
    description: "Duck Head is an iconic American heritage apparel brand established in 1865, renowned for rugged khakis, premium Oxford button-downs, polo shirts, and timeless southern casual wear.",
    coupons: [
      {
        id: "duckhead-code-1",
        code: "WELCOME15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Your First Order with Newsletter Signup",
        description: "Apply promo code WELCOME15 at checkout to receive 15% off classic chinos, button-downs, and casual outerwear.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fduckhead.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "duckhead-code-2",
        code: "SAVE10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "Extra 10% Off Sitewide Heritage Apparel",
        description: "Save an extra 10% on your Duck Head purchase including polos, jackets, and accessories with promo code SAVE10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fduckhead.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "duckhead-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40%",
        title: "Up to 40% Off Seasonal Sale & Heritage Clearance",
        description: "Browse discounted heritage styles with discounts up to 40% automatically deducted at checkout.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fduckhead.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "duckhead-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free Standard Ground Delivery on Orders Over $100",
        description: "Enjoy zero shipping charges on qualifying US apparel orders over $100 automatically.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fduckhead.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 654,
    name: "Dayalane",
    slug: "dayalane",
    aliases: ["dayalane-jewelry", "dayalane-diamonds", "dayalane-us"],
    website: "https://dayalane.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdayalane.com%2F",
    logo: "/logos/dayalane.svg",
    description: "Dayalane crafts exquisite fine jewelry specializing in IGI-certified lab-grown diamond engagement rings, eternity bands, and everyday luxury pieces set in 14K solid gold.",
    coupons: [
      {
        id: "dayalane-code-1",
        code: "DAYA10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Your Entire Lab Diamond Fine Jewelry Order",
        description: "Apply discount code DAYA10 at checkout to save 10% on sparkling lab diamond rings, necklaces, and earrings.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdayalane.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dayalane-code-2",
        code: "SAVE50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 Off Luxury Diamond Jewelry Orders Over $500",
        description: "Receive $50 off high-end eternity bands and certified engagement rings with coupon code SAVE50.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdayalane.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dayalane-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free Fully-Insured Priority Shipping & 30-Day Returns",
        description: "Every Dayalane jewelry order ships securely with tracked insured delivery and 30-day hassle-free returns.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdayalane.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dayalane-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "LIFETIME",
        title: "Lifetime Warranty & Complimentary Luxury Gift Box",
        description: "All lab diamond pieces include authentic grading certificates, signature presentation box, and lifetime warranty.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdayalane.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 655,
    name: "Jack Rogers",
    slug: "jack-rogers",
    aliases: ["jackrogers", "jackrogersusa", "jack-rogers-shoes"],
    website: "https://jackrogersusa.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fjackrogersusa.com%2F",
    logo: "/logos/jack-rogers.svg",
    description: "Jack Rogers is a celebrated American footwear brand famous for its classic handcrafted whipstitched leather sandals, sophisticated flats, wedges, and timeless resort footwear.",
    coupons: [
      {
        id: "jackrogers-code-1",
        code: "HELLO15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Your First Footwear Order with Email Signup",
        description: "Enjoy 15% off classic sandals, flats, and resort heels with promo code HELLO15.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fjackrogersusa.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jackrogers-code-2",
        code: "EXTRA10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "Extra 10% Off Select Handcrafted Whipstitch Sandals",
        description: "Save an extra 10% on iconic leather whipstitch sandals with coupon code EXTRA10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fjackrogersusa.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jackrogers-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 50%",
        title: "Up to 50% Off Seasonal Sandal & Shoe Clearance",
        description: "Shop deeply discounted summer sandals, wedges, and accessories with savings up to 50% applied at checkout.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fjackrogersusa.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jackrogers-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free Standard Shipping on Orders Over $75",
        description: "Receive free ground shipping across the contiguous United States on orders of $75 or more.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fjackrogersusa.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 656,
    name: "City Beauty",
    slug: "city-beauty",
    aliases: ["citybeauty", "city-lips", "citybeauty-us"],
    website: "https://citybeauty.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcitybeauty.com%2F",
    logo: "/logos/city-beauty.svg",
    description: "City Beauty is a science-backed skincare and functional beauty brand renowned for City Lips plumping lip treatment, anti-aging moisturizers, and clinically formulated skin rejuvenation.",
    coupons: [
      {
        id: "citybeauty-code-1",
        code: "CITY15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Sitewide Skincare & City Lips Treatments",
        description: "Use coupon code CITY15 during checkout to save 15% on anti-aging serums and plumping lip glosses.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcitybeauty.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "citybeauty-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "BOGO",
        title: "Buy 2 Get 1 Free on Award-Winning City Lips Gloss",
        description: "Bundle and save on City Lips plumping treatment with automatic multi-pack savings applied in your cart.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcitybeauty.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "citybeauty-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free Fast US Shipping on Orders Over $50",
        description: "Enjoy complimentary tracked US shipping when you spend $50 or more on beauty and skincare essentials.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcitybeauty.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "citybeauty-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "60-DAY GUARANTEE",
        title: "60-Day 100% Money-Back Satisfaction Guarantee",
        description: "Try City Beauty completely risk-free with a full 60-day refund policy even if the bottle is completely empty.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcitybeauty.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
    {
    id: 657,
    name: "USA Berkey Filters",
    slug: "usaberkeyfilters",
    aliases: ["usa-berkey-filters", "berkey-filters", "berkey"],
    website: "https://www.usaberkeyfilters.com/aff/282/",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
    logo: "/logos/usaberkeyfilters.png",
    country: "US",
    description: "USA Berkey Filters is America's premier distributor of authentic Berkey gravity-fed stainless steel water filtration systems, Black Berkey replacement elements, and water purification accessories.",
    coupons: [
      {
        id: "berkey-code-1",
        code: "USA20",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% Off Coupon Code",
        description: "Save 20% on authentic Berkey water filtration systems and bundles with verified coupon code USA20.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "35% OFF",
        title: "35% Off - Hot Sale",
        description: "No code required. Enjoy up to 35% discount on select gravity water filtration models during this hot sale event.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "30% OFF",
        title: "30% Off on Bundles",
        description: "Save 30% when purchasing complete Berkey bundle kits with extra filters, stands, and accessories.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Shipping",
        description: "Get free fast ground shipping on qualifying orders across the continental United States.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-code-6",
        code: "USA20",
        is_auto_applied: false,
        discount: "25% OFF",
        title: "25% Off on Light Water Filter",
        description: "Apply coupon code USA20 at checkout to save on Berkey Light gravity water purifiers.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "$408 DEAL",
        title: "$408 - Royal Water Filter",
        description: "Get the popular Royal Berkey water filter system for medium to large families starting at $408.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "25% Off on Travel Berkey Water Filter",
        description: "Save 25% on compact Travel Berkey water purification systems for outdoor trips and small homes.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-code-9",
        code: "USA20",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% Off on Replacement Filters",
        description: "Use coupon code USA20 at checkout for 20% off authentic Black Berkey replacement filter elements.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% Off on Accessories",
        description: "Save 20% on stainless steel spigots, sight glass spigots, filter stands, and primer kits.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-11",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% Off on Newsletter Signup",
        description: "Subscribe to the official USA Berkey Filters newsletter to unlock an instant 10% discount on your first order.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 658,
    name: "Candy In Bulk",
    slug: "candyinbulk",
    aliases: ["candy-in-bulk", "bulk-candy", "candyinbulk-us"],
    website: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
    affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
    logo: "/logos/candyinbulk.png",
    country: "US",
    description: "Candy In Bulk is America's premier wholesale candy supplier, offering bulk chocolates, gummies, wrapped novelty treats, and party sweets at direct wholesale prices with fast nationwide delivery.",
    coupons: [
      {
        id: "candy-code-1",
        code: "CANDY20",
        is_auto_applied: false,
        discount: "$20 OFF",
        title: "$20 Off Bulk Candy & Sweet Orders",
        description: "Apply verified promo code CANDY20 at checkout for an instant $20 discount on qualifying bulk candy assortments.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-code-2",
        code: "WELCOME10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off First Bulk Candy Order",
        description: "Apply coupon code WELCOME10 at checkout to save 10% on your first wholesale bulk candy purchase.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-code-3",
        code: "WELCOME",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Sitewide Bulk Treats",
        description: "Use verified promo code WELCOME at checkout for an instant 10% discount on bulk gummy bears, chocolates, and party sweets.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Standard US Shipping on Orders Over $49",
        description: "Enjoy zero nationwide delivery fees automatically calculated on qualifying bulk candy orders of $49 or more.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40% OFF",
        title: "Up to 40% Off Select Bulk Candies & Party Treats",
        description: "Instant discount on select wholesale bulk sweets, wrapped chocolates, and party novelties.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "25% Off Cadbury & Premium Bulk Chocolates",
        description: "Enjoy 25% off wholesale milk chocolate balls, candy bars, and gourmet confections.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% Off Bulk Roasted Nuts, Trail Mixes & Snacks",
        description: "Take 20% off party snack selections and roasted nuts packed fresh for weddings and corporate events.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "UNDER $20",
        title: "5 lb Bulk Candy Value Bags Under $20",
        description: "Shop huge 5 lb wholesale candy bags starting under $20 for unbeatable party and holiday value.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-deal-9",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% Off Instant Welcome Discount for New Customers",
        description: "New customer 10% discount activated automatically via verified referral link at official checkout.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "candy-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% Off Newsletter Sign-Up Special Offer",
        description: "Join the official Candy In Bulk newsletter to receive 10% off your initial wholesale purchase.",
        affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  {
    id: 660,
    name: "Mirlux",
    slug: "mirlux",
    aliases: ["mirlux-led", "mirlux-mirrors", "mirlux-us"],
    website: "https://mirlux.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fmirlux.com%2F",
    logo: "/logos/mirlux.svg",
    description: "Mirlux designs high-end smart LED bathroom mirrors, anti-fog backlit vanity mirrors, and luxury Hollywood dressing mirrors with touch sensors and dimmable lighting.",
    coupons: [
      {
        id: "mirlux-code-1",
        code: "MIRLUX10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Smart LED Bathroom & Vanity Mirrors",
        description: "Apply discount code MIRLUX10 at checkout to save 10% on dimmable backlit LED vanity mirrors.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fmirlux.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-code-2",
        code: "VANITY15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Select Anti-Fog Backlit Mirrors",
        description: "Save 15% on luxury Hollywood vanity and frameless anti-fog bathroom mirrors with promo code VANITY15.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fmirlux.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free Fully-Insured Fragile Freight Delivery",
        description: "Every mirror is shipped in reinforced impact-proof wooden crating with zero breakage guarantee.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fmirlux.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mirlux-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "5-YR WARRANTY",
        title: "5-Year Commercial Grade LED Lighting Warranty",
        description: "Mirlux mirrors are built with commercial-grade components and guaranteed with a comprehensive 5-year warranty.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fmirlux.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 661,
    name: "RollerSkateNation",
    slug: "rollerskatenation",
    aliases: ["roller-skate-nation", "skatenation", "rollerskate-nation"],
    website: "https://rollerskatenation.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frollerskatenation.com%2F",
    logo: "/logos/rollerskatenation.svg",
    description: "RollerSkateNation is the premier destination for roller skaters, featuring top-tier quad skates, inline skates, derby gear, wheels, bearings, and outdoor skating apparel for all skill levels.",
    coupons: [
      {
        id: "skatenation-code-1",
        code: "SKATE10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Quad Skates, Inline Skates & Wheels",
        description: "Save 10% on top brand roller skates, outdoor wheels, and protective gear with promo code SKATE10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frollerskatenation.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skatenation-code-2",
        code: "ROLL15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Outdoor Wheels & Roller Derby Packages",
        description: "Upgrade your skating setup with 15% off high-performance wheels and packages using coupon code ROLL15.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frollerskatenation.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skatenation-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40%",
        title: "Up to 40% Off Seasonal Skate Clearance & Deals",
        description: "Save up to 40% on discontinued colors, retro quad roller skates, and youth skates with auto-applied deals.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frollerskatenation.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skatenation-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free Fast Ground Shipping on Orders Over $99",
        description: "All skate packages and accessories over $99 receive fast tracked ground delivery across the US.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frollerskatenation.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 662,
    name: "Petite Plume",
    slug: "petite-plume",
    aliases: ["petiteplume", "petite-plume-sleepwear", "petite-plume-us"],
    website: "https://petite-plume.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpetite-plume.com%2F",
    logo: "/logos/petite-plume.svg",
    description: "Petite Plume creates nostalgic luxury sleepwear and children's loungewear made from the finest brushed cotton, silk, and breathable twill, featured in Vogue and royal nurseries.",
    coupons: [
      {
        id: "plume-code-1",
        code: "PLUME15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Luxury Sleepwear & Family Pajamas",
        description: "Apply discount code PLUME15 at checkout to receive 15% off classic brushed cotton pajamas and robes.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpetite-plume.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plume-code-2",
        code: "FAMILY10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Matching Family Holiday Loungewear",
        description: "Save 10% when outfitting the whole family with matching festive loungewear using promo code FAMILY10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpetite-plume.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plume-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE MONOGRAM",
        title: "Complimentary Custom Monogramming On Select Sets",
        description: "Add personalized custom monogram embroidery to luxury pajamas and robes automatically.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpetite-plume.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plume-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIP",
        title: "Free Standard Ground Delivery on Orders Over $100",
        description: "Enjoy zero delivery fees on luxury sleepwear orders across the contiguous United States.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpetite-plume.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 663,
    name: "Evelyn & Bobbie",
    slug: "evelyn-bobbie",
    aliases: ["evelynbobbie", "evelyn-and-bobbie", "evelynbobbie-us"],
    website: "https://evelynbobbie.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fevelynbobbie.com%2F",
    logo: "/logos/evelyn-bobbie.svg",
    description: "Evelyn & Bobbie designs patented wirefree luxury bras and seamless underwear offering revolutionary all-day lift, pain-free posture support, and invisible shaping for cup sizes A to H.",
    coupons: [
      {
        id: "eb-code-1",
        code: "COMFORT15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Defy & Beyond Wirefree Bras",
        description: "Save 15% on award-winning seamless wireless lift bras and bralettes with promo code COMFORT15.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fevelynbobbie.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-code-2",
        code: "FIRST10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off First Intimates & Undies Order",
        description: "Enjoy 10% off your initial purchase of seamless briefs, thongs, and everyday lounge bras.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fevelynbobbie.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "BUNDLE & SAVE",
        title: "Buy More, Save More on Everyday Panty Packs",
        description: "Unlock automatic bundle savings when purchasing 3+ pairs of seamless hipster or high-waist underwear.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fevelynbobbie.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free US Shipping & Hassle-Free Returns Over $75",
        description: "Enjoy free standard delivery and 30-day fit guarantee exchanges on all qualifying domestic orders.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fevelynbobbie.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 664,
    name: "Frank Darling",
    slug: "frank-darling",
    aliases: ["frankdarling", "frank-darling-diamonds", "frank-darling-jewelry"],
    website: "https://frankdarling.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ffrankdarling.com%2F",
    logo: "/logos/frank-darling.svg",
    description: "Frank Darling handcrafts bespoke engagement rings, lab-grown and natural diamond jewelry, and wedding bands with transparent pricing and customizable 3D sketch designs.",
    coupons: [
      {
        id: "fd-code-1",
        code: "SPARKLE100",
        is_auto_applied: false,
        discount: "$100 OFF",
        title: "$100 Off Custom Diamond Engagement Rings",
        description: "Apply coupon code SPARKLE100 at checkout to receive $100 off custom diamond engagement ring settings.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ffrankdarling.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fd-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE TRY-ON",
        title: "Free Try-At-Home 3D Replica Ring Kit",
        description: "Select up to 3 custom engagement ring styles and receive high-precision sterling silver replicas to test at home for free.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ffrankdarling.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fd-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Insured Overnight US Delivery & Resizing",
        description: "Every fine jewelry order includes complimentary fully-insured FedEx overnight shipping and a free 60-day ring resize.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ffrankdarling.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 665,
    name: "ALOHAS",
    slug: "alohas",
    aliases: ["alohas-shoes", "alohas-fashion", "alohas-us"],
    website: "https://alohas.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Falohas.com%2F",
    logo: "/logos/alohas.svg",
    description: "ALOHAS is a Barcelona-designed sustainable footwear and chic apparel brand famous for zero-waste on-demand leather boots, platform sandals, mules, and runway-ready clothing.",
    coupons: [
      {
        id: "alohas-code-1",
        code: "ALOHAS15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Handcrafted Leather Boots & Shoes",
        description: "Save 15% on artisan Spanish boots, loafers, and party sandals with promo code ALOHAS15.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Falohas.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "alohas-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 30% OFF",
        title: "Up to 30% Off Sustainable Pre-Order Collection",
        description: "Support circular, zero-waste manufacturing and save up to 30% automatically on upcoming shoe arrivals.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Falohas.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "alohas-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Global Express Delivery Over $190",
        description: "Enjoy complimentary tracked express shipping directly from Europe on all footwear orders above $190.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Falohas.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 666,
    name: "Byrokko",
    slug: "byrokko",
    aliases: ["byrokko-tanning", "shine-brown", "byrokko-us"],
    website: "https://www.byrokko.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.byrokko.com%2F",
    logo: "/logos/byrokko.svg",
    description: "Byrokko is the viral creator of Shine Brown tanning accelerators, self-tanning mousses, and nourishing suncare formulas designed for a deep bronze glow with natural ingredients.",
    coupons: [
      {
        id: "byr-code-1",
        code: "BRONZE15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Shine Brown Tanning Creams & Oils",
        description: "Apply discount code BRONZE15 to take 15% off original Shine Brown tanning creams and watermelon body oils.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.byrokko.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "byr-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "BUY 2 GET 1",
        title: "Buy 2 Get 1 Free on Viral Shine Brown Bundles",
        description: "Add 3 tanning creams or oils to cart and receive the 3rd item free automatically at checkout.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.byrokko.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "byr-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Tracked Priority Shipping on Orders Over $50",
        description: "Enjoy zero shipping fees on premium self-tanners, bronzing mists, and skincare across the US.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.byrokko.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 667,
    name: "FlexJobs",
    slug: "flexjobs",
    aliases: ["flex-jobs", "flexjobs-remote", "flexjobs-com"],
    website: "https://www.flexjobs.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.flexjobs.com",
    logo: "/logos/flexjobs.svg",
    description: "FlexJobs is the #1 trusted job search platform for legitimate, 100% scam-free remote, hybrid, and flexible freelance jobs with expert career coaching and skill certifications.",
    coupons: [
      {
        id: "flex-code-1",
        code: "SAVE30",
        is_auto_applied: false,
        discount: "30% OFF",
        title: "30% Off All Remote Job Search Memberships",
        description: "Use coupon code SAVE30 to save 30% on 1-month, 3-month, or annual access to pre-screened remote jobs.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.flexjobs.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flex-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE WEBINARS",
        title: "Free Career Webinars & Resume Review Events",
        description: "Members receive full complimentary access to live workshops with career coaches and hiring managers.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.flexjobs.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flex-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "SATISFACTION",
        title: "14-Day 100% Satisfaction Money-Back Guarantee",
        description: "Try FlexJobs with zero risk — if you are not fully satisfied with your remote job hunt, request a full refund within 14 days.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.flexjobs.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 668,
    name: "Best Bully Sticks",
    slug: "best-bully-sticks",
    aliases: ["bestbullysticks", "best-bullysticks", "bullysticks"],
    website: "https://www.bestbullysticks.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.bestbullysticks.com%2F",
    logo: "/logos/best-bully-sticks.svg",
    description: "Best Bully Sticks offers 100% all-natural, single-ingredient beef bully sticks, antlers, and dental chews for dogs of all sizes, promoting oral health without rawhide or additives.",
    coupons: [
      {
        id: "bbs-code-1",
        code: "BULLY15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off All-Natural Dog Chews & Treats",
        description: "Use coupon code BULLY15 at checkout to receive 15% off odor-free beef bully sticks and dental bones.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.bestbullysticks.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbs-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "SAVE 15%",
        title: "Extra 15% Off Recurring Auto-Ship Subscriptions",
        description: "Save 15% automatically on recurring chew deliveries with flexible scheduling and free cancellation.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.bestbullysticks.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbs-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Domestic US Shipping on Orders Over $79",
        description: "Enjoy complimentary doorstep shipping on premium natural dog chews and treat packs over $79.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.bestbullysticks.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 669,
    name: "DeerRun",
    slug: "deerrun",
    aliases: ["deerruntreadmill", "deer-run", "deerrun-walking-pad"],
    website: "https://deerruntreadmill.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdeerruntreadmill.com%2F",
    logo: "/logos/deerrun.svg",
    description: "DeerRun engineers smart, ultra-quiet under-desk treadmills, folding 2-in-1 walking pads, and compact running machines equipped with PitPat interactive fitness app tracking.",
    coupons: [
      {
        id: "dr-code-1",
        code: "DEER40",
        is_auto_applied: false,
        discount: "$40 OFF",
        title: "$40 Off Smart Under-Desk Treadmills & Walking Pads",
        description: "Apply promo code DEER40 at checkout to take $40 off Q1 and A1 smart under-desk walking treadmills.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdeerruntreadmill.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dr-code-2",
        code: "RUN10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Folding Running Machines & Accessories",
        description: "Save 10% on folding cardio running pads and non-slip shock-absorbing floor mats with coupon RUN10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdeerruntreadmill.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dr-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Fast Tracked Ground Delivery in the US",
        description: "Enjoy 100% free doorstep freight shipping on all home gym walking pads and motorized treadmill units.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdeerruntreadmill.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 670,
    name: "Big Wall Decor",
    slug: "big-wall-decor",
    aliases: ["bigwalldecor", "big-wall-art", "bigwalldecor-us"],
    website: "https://bigwalldecor.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbigwalldecor.com%2F",
    logo: "/logos/big-wall-decor.svg",
    description: "Big Wall Decor produces oversized, high-definition art prints on tear-resistant fabric frames created by trending independent artists from around the world.",
    coupons: [
      {
        id: "bwd-code-1",
        code: "WALL20",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% Off Giant Framed Wall Art & Canvas Prints",
        description: "Use coupon code WALL20 at checkout to save 20% on all extra-large designer wall prints and snap frames.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbigwalldecor.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bwd-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40% OFF",
        title: "Up to 40% Off Trending Artist Collections",
        description: "Save up to 40% automatically on curated abstract, nature, and pop-culture oversized wall art sets.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbigwalldecor.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bwd-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Carbon-Neutral Shipping on US Orders Over $150",
        description: "Enjoy zero shipping charges on oversized framed canvas orders delivered across the United States.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbigwalldecor.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 671,
    name: "Carputech",
    slug: "carputech",
    aliases: ["carputech-carplay", "carputech-wireless", "carputech-adapter"],
    website: "https://www.carputech.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.carputech.com%2F",
    logo: "/logos/carputech.svg",
    description: "Carputech specializes in premium OEM-integrated wireless Apple CarPlay and Android Auto modules, smart Linux touchscreen head units, and plug-and-play automotive tech upgrades.",
    coupons: [
      {
        id: "cpu-code-1",
        code: "CARPLAY50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 Off Wireless CarPlay & Android Auto Modules",
        description: "Apply discount code CARPLAY50 to receive $50 off retrofit smart screen modules for BMW, Audi, Mercedes, and Lexus.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.carputech.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpu-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE WARRANTY",
        title: "Free 2-Year Comprehensive Hardware Warranty",
        description: "All CarPlay decoder boxes and replacement touchscreens include a 2-year warranty with free technical support.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.carputech.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpu-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Worldwide Express Delivery on All Modules",
        description: "Enjoy free worldwide express air shipping with real-time tracking on every automotive smart adapter order.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.carputech.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 672,
    name: "GardePro",
    slug: "gardepro",
    aliases: ["gardepro-camera", "gardepro-trail-cams", "gardepro-hunting"],
    website: "https://gardepro.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgardepro.com%2F",
    logo: "/logos/gardepro.svg",
    description: "GardePro designs cutting-edge 48MP cellular trail cameras, no-glow infrared night vision hunting cams, and WiFi wildlife surveillance gear with ultra-fast 0.1s trigger speeds.",
    coupons: [
      {
        id: "gp-code-1",
        code: "TRAIL15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off 4G Cellular & WiFi Trail Cameras",
        description: "Use coupon code TRAIL15 to save 15% on high-definition night vision wildlife monitoring cameras.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgardepro.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "gp-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "BUNDLE & SAVE",
        title: "Save Up to $60 on Multi-Camera Hunting Packs",
        description: "Get instant bundle discounts when buying 2-pack or 4-pack trail camera kits with solar charging panels.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgardepro.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "gp-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Tracked US Priority Shipping Over $49",
        description: "Receive free ground shipping with live tracking updates on all trail cameras and solar battery kits.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgardepro.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 673,
    name: "Flower Knows",
    slug: "flower-knows",
    aliases: ["flowerknows", "flower-knows-makeup", "flowerknows-cosmetics"],
    website: "https://flowerknows.co",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fflowerknows.co",
    logo: "/logos/flower-knows.svg",
    description: "Flower Knows is the viral vintage romantic cosmetic house creating fairytale embossed eyeshadow palettes, cloud lip creams, and engraved hand mirrors inspired by Baroque and Rococo aesthetics.",
    coupons: [
      {
        id: "fk-code-1",
        code: "FAIRY10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Swan Ballet & Moonlight Mermaid Makeup",
        description: "Save 10% on viral engraved lipstick sets, embossing blushes, and perfume oils with promo code FAIRY10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fflowerknows.co",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fk-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFT",
        title: "Free Limited Edition Hand Mirror on Orders $100+",
        description: "Receive an iconic engraved Baroque handheld makeup mirror automatically with qualifying cosmetic orders.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fflowerknows.co",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fk-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Worldwide Tracked Delivery Over $60",
        description: "Enjoy zero shipping fees on international orders above $60 with secure padded collectible packaging.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fflowerknows.co",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 674,
    name: "Curtarra",
    slug: "curtarra",
    aliases: ["curtarra-curtains", "curtarra-drapes", "curtarra-custom"],
    website: "https://www.curtarra.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.curtarra.com%2F",
    logo: "/logos/curtarra.svg",
    description: "Curtarra crafts bespoke made-to-measure blackout curtains, pinch pleat linen drapes, and motor-compatible drapery panels custom tailored to within 1/8 inch precision.",
    coupons: [
      {
        id: "cur-code-1",
        code: "DRAPE20",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% Off Custom Made-to-Measure Curtains",
        description: "Apply discount code DRAPE20 at checkout to take 20% off custom tailored linen and velvet blackout drapes.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.curtarra.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cur-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE SWATCHES",
        title: "Free Custom Fabric Swatch Sample Box",
        description: "Order up to 10 complimentary luxury drapery fabric samples delivered to your home before buying.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.curtarra.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cur-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Expedited Air Courier Delivery in the US",
        description: "Receive 100% free expedited shipping on all made-to-order curtain panels across the continental US.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.curtarra.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 675,
    name: "Elite Havens",
    slug: "elite-havens",
    aliases: ["elitehavens", "elite-havens-villas", "elitehavens-luxury"],
    website: "http://www.elitehavens.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fwww.elitehavens.com",
    logo: "/logos/elite-havens.svg",
    description: "Elite Havens curates Asia's finest handpicked luxury private villas, beachfront chalets, and estate sanctuaries across Bali, Phuket, Koh Samui, Sri Lanka, and Japan with private chefs and concierge staff.",
    coupons: [
      {
        id: "eh-code-1",
        code: "HAVEN10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Luxury Private Villa Bookings",
        description: "Save 10% on private luxury villas and estates in Bali, Thailand, and Japan with promo code HAVEN10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fwww.elitehavens.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eh-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE CHEF",
        title: "Complimentary Private Chef & Dedicated Butler Service",
        description: "Every luxury estate booking includes a dedicated villa manager, private culinary chef, and housekeeping staff.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fwww.elitehavens.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eh-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "EARLY BIRD",
        title: "Up to 15% Off Early Bird Vacation Reservations",
        description: "Reserve your luxury tropical escape 90+ days in advance to unlock automatic early booking rate discounts.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fwww.elitehavens.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 676,
    name: "Ariel Bath",
    slug: "ariel-bath",
    aliases: ["arielbath", "ariel-vanities", "arielbath-us"],
    website: "https://www.arielbath.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.arielbath.com%2F",
    logo: "/logos/ariel-bath.svg",
    description: "Ariel Bath crafts luxury solid wood bathroom vanities, freestanding soaking acrylic bathtubs, LED anti-fog mirrors, and shower enclosures designed for high-end home remodels.",
    coupons: [
      {
        id: "ab-code-1",
        code: "BATH150",
        is_auto_applied: false,
        discount: "$150 OFF",
        title: "$150 Off Luxury Solid Wood Bathroom Vanities",
        description: "Apply discount code BATH150 at checkout to save $150 on double and single sink bathroom vanity sets.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.arielbath.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ab-code-2",
        code: "SOAK10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Freestanding Acrylic Soaking Tubs",
        description: "Save 10% on modern deep soaking bathtubs and thermostatic whirlpool spa units with coupon SOAK10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.arielbath.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ab-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE CURBSIDE",
        title: "Free Freight Curbside Delivery Across the US",
        description: "Enjoy zero delivery charges on all heavy freight bathroom vanities and freestanding bathtubs.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.arielbath.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 677,
    name: "AusomStore",
    slug: "ausomstore",
    aliases: ["ausom", "ausom-scooter", "ausomstore-us"],
    website: "https://ausomstore.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fausomstore.com",
    logo: "/logos/ausomstore.svg",
    description: "AusomStore builds rugged high-speed dual-motor electric off-road scooters featuring hydraulic disc brakes, SUV-grade suspension, and long-range commuter battery packs.",
    coupons: [
      {
        id: "aus-code-1",
        code: "AUSOM50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 Off Leopard & Gallop Electric Off-Road Scooters",
        description: "Use coupon code AUSOM50 at checkout to take $50 off high-power dual motor electric commuter scooters.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fausomstore.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aus-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFT",
        title: "Free Off-Road Riding Helmet & Front Storage Bag",
        description: "Receive a free rugged tactical storage pouch and protective gear kit automatically with scooter orders.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fausomstore.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aus-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Fast Tracked US Delivery from Local Warehouse",
        description: "Enjoy fast 2-5 day doorstep shipping across the United States from local California and New Jersey depots.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fausomstore.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 678,
    name: "Hardaddy",
    slug: "hardaddy",
    aliases: ["hardaddy-shirts", "hardaddy-menswear", "hardaddy-us"],
    website: "http://hardaddy.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fhardaddy.com",
    logo: "/logos/hardaddy.svg",
    description: "Hardaddy creates vintage Hawaiian shirts, retro floral button-downs, casual Cuban collar camp shirts, and breathable outdoor resort menswear with unique nostalgic prints.",
    coupons: [
      {
        id: "hd-code-1",
        code: "VINTAGE20",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% Off Retro Hawaiian & Camp Collar Shirts",
        description: "Save 20% on all vintage printed short-sleeve resort shirts with promo code VINTAGE20.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fhardaddy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hd-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "BUY 3 GET 4TH FREE",
        title: "Buy 3 Shirts, Get 4th Shirt Completely Free",
        description: "Mix and match any 4 retro shirts or beach shorts in your cart to receive the 4th item free automatically.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fhardaddy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hd-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Tracked Global Shipping on Orders Over $79",
        description: "Enjoy zero international delivery fees on qualifying casual menswear orders delivered worldwide.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fhardaddy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 679,
    name: "Auto-Vox",
    slug: "auto-vox",
    aliases: ["autovox", "auto-vox-camera", "autovox-wireless"],
    website: "https://auto-vox.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fauto-vox.com",
    logo: "/logos/auto-vox.svg",
    description: "Auto-Vox pioneers solar-powered wireless backup cameras, OEM-fit rearview mirror dashcams, and digital wireless reversing camera systems for cars, RVs, trucks, and trailers.",
    coupons: [
      {
        id: "av-code-1",
        code: "BACKUP15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Solar Wireless Backup Camera Kits",
        description: "Apply coupon code BACKUP15 to save 15% on 5-minute DIY installation solar wireless rear cameras.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fauto-vox.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "av-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $60 OFF",
        title: "Up to $60 Off Dual Dash Cam Mirror Systems",
        description: "Save up to $60 automatically on full-touch streaming media mirror dash cameras with night vision.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fauto-vox.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "av-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Tracked Priority Shipping on US Orders Over $50",
        description: "Receive free ground shipping with real-time tracking on all automotive security cameras and accessories.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fauto-vox.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 680,
    name: "Airseekers",
    slug: "airseekers",
    aliases: ["airseekers-robotics", "airseekers-mower", "tron-mower"],
    website: "https://airseekers-robotics.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fairseekers-robotics.com%2F",
    logo: "/logos/airseekers.svg",
    description: "Airseekers invents perimeter-wire-free AI robotic lawn mowers equipped with true 3D omnidirectional vision, multi-zone lawn mapping, and real-time obstacle avoidance technology.",
    coupons: [
      {
        id: "air-code-1",
        code: "MOWER200",
        is_auto_applied: false,
        discount: "$200 OFF",
        title: "$200 Off Tron Wire-Free Robotic Lawn Mowers",
        description: "Use coupon code MOWER200 at checkout to receive $200 off the revolutionary Tron wire-free AI robotic mower.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fairseekers-robotics.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "air-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "3-YR WARRANTY",
        title: "Complimentary 3-Year Comprehensive Machine Warranty",
        description: "Every robotic lawn mower purchase comes with a full 3-year factory warranty and replacement parts support.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fairseekers-robotics.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "air-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Fully Insured Expedited US Delivery",
        description: "Enjoy zero shipping and freight handling fees on high-end robotic mowers delivered right to your door.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fairseekers-robotics.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 681,
    name: "Luhxe",
    slug: "luhxe",
    aliases: ["luhxe-jewelry", "luhxe-moissanite", "luhxediamonds"],
    website: "https://luhxe.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fluhxe.com%2F",
    logo: "/logos/luhxe.svg",
    description: "Luhxe crafts exquisite fine jewelry, brilliant VVS moissanite tennis bracelets, custom iced pendants, and luxury engagement rings designed with exceptional ethical craftsmanship.",
    coupons: [
      {
        id: "luhxe-code-1",
        code: "LUHXE15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Sitewide Fine Jewelry & Moissanite",
        description: "Apply coupon code LUHXE15 at checkout to receive 15% off all moissanite necklaces, bracelets, and rings.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fluhxe.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "luhxe-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40% OFF",
        title: "Up to 40% Off Luxury Tennis Bracelets & Chains",
        description: "Save up to 40% automatically on select sterling silver and solid gold moissanite tennis jewelry collections.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fluhxe.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "luhxe-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Fully Insured Express US Delivery",
        description: "Receive free signature-required insured shipping across the United States on orders over $75.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fluhxe.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 682,
    name: "Renogy",
    slug: "renogy",
    aliases: ["renogy-solar", "renogypower", "renogy-energy"],
    website: "https://renogy.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frenogy.com",
    logo: "/logos/renogy.svg",
    description: "Renogy is an industry leader in renewable solar power solutions, providing premium monocrystalline solar panels, lithium iron phosphate batteries, pure sine wave inverters, and complete off-grid solar kits.",
    coupons: [
      {
        id: "renogy-code-1",
        code: "RENOGY10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Sitewide Solar Panels, Inverters & Kits",
        description: "Save an extra 10% on off-grid solar systems, MPPT charge controllers, and LiFePO4 batteries using promo code RENOGY10.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frenogy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "renogy-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $400 OFF",
        title: "Up to $400 Off Complete Off-Grid & RV Solar Bundles",
        description: "Instant manufacturer discounts on full solar cabin kits, van conversions, and marine battery systems.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frenogy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "renogy-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free FedEx Freight & Ground Shipping Nationwide",
        description: "Enjoy zero shipping costs on all orders delivered anywhere within the continental United States.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frenogy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 683,
    name: "LumyHealth",
    slug: "lumyhealth",
    aliases: ["lumy-health", "lumyhealth-redlight", "lumy"],
    website: "https://lumyhealth.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Flumyhealth.com%2F",
    logo: "/logos/lumyhealth.svg",
    description: "LumyHealth designs medical-grade target and full-body red light therapy panels engineered to stimulate collagen production, accelerate muscle recovery, reduce inflammation, and optimize cellular energy.",
    coupons: [
      {
        id: "lumy-code-1",
        code: "LUMY20",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% Off Clinical Red Light Therapy Panels",
        description: "Redeem coupon code LUMY20 at checkout to unlock 20% off all targeted and full-body red light devices.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Flumyhealth.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lumy-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "$150 OFF",
        title: "Save $150 on Pro Multi-Wave Panel Bundles",
        description: "Automatic $150 bundle savings on dual-wavelength 660nm red and 850nm near-infrared therapy setups.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Flumyhealth.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lumy-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "60-DAY TRIAL",
        title: "60-Day Risk-Free Home Trial & Free Shipping",
        description: "Test your light therapy panel at home with a 100% money-back guarantee and complimentary courier delivery.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Flumyhealth.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 684,
    name: "Meepo",
    slug: "meepo",
    aliases: ["meepoboard", "meepo-electric-skateboard", "meepo-boards"],
    website: "https://www.meepoboard.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.meepoboard.com",
    logo: "/logos/meepo.svg",
    description: "Meepo is a world-renowned pioneer in high-speed electric skateboards and all-terrain e-boards, featuring long-range battery packs, high-torque dual motors, and flexible bamboo-composite decks.",
    coupons: [
      {
        id: "meepo-code-1",
        code: "MEEPO100",
        is_auto_applied: false,
        discount: "$100 OFF",
        title: "$100 Off Voyager & Hurricane All-Terrain Boards",
        description: "Use discount code MEEPO100 at checkout for an instant $100 off high-power long-range electric skateboards.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.meepoboard.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "meepo-code-2",
        code: "MEEPO50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 Off Mini & Commuter E-Skateboards",
        description: "Save $50 on portable shortboards and commuter electric skateboards with coupon code MEEPO50.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.meepoboard.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "meepo-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Expedited Delivery & 6-Month Factory Warranty",
        description: "Zero shipping fees across US mainland plus complimentary 6-month manufacturer parts warranty.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.meepoboard.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 685,
    name: "Purecozy",
    slug: "purecozy",
    aliases: ["purecozyhome", "pure-cozy", "purecozy-bedding"],
    website: "https://purecozyhome.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpurecozyhome.com%2F",
    logo: "/logos/purecozy.svg",
    description: "Purecozy specializes in ultra-soft organic bamboo bed sheets, cooling duvet covers, and breathable silk-blend pillowcases designed for hot sleepers seeking luxurious, temperature-regulating rest.",
    coupons: [
      {
        id: "pure-code-1",
        code: "COZY25",
        is_auto_applied: false,
        discount: "25% OFF",
        title: "25% Off Sitewide Organic Bamboo Sheet Sets",
        description: "Apply voucher code COZY25 during checkout for 25% off all silky soft cooling bamboo bedding sets.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpurecozyhome.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pure-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "BOGO 30% OFF",
        title: "Buy 1 Get 1 30% Off Bamboo Comforter Bundles",
        description: "Add two or more bedding essentials to your cart to instantly receive 30% off your second item.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpurecozyhome.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pure-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "100-NIGHT TRIAL",
        title: "100-Night Risk-Free Sleep Trial with Free Returns",
        description: "Sleep cool and comfortably with a full 100-night money-back guarantee and free ground shipping.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpurecozyhome.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 686,
    name: "TopOak",
    slug: "topoak",
    aliases: ["topoakoverland", "top-oak", "topoak-tent"],
    website: "https://topoakoverland.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ftopoakoverland.com%2F",
    logo: "/logos/topoak.svg",
    description: "TopOak engineers rugged hard-shell and soft-shell rooftop tents, 270-degree vehicle awnings, and overland camping storage built for rugged off-road exploration and all-weather durability.",
    coupons: [
      {
        id: "topoak-code-1",
        code: "OAK150",
        is_auto_applied: false,
        discount: "$150 OFF",
        title: "$150 Off Hard-Shell Rooftop Tents",
        description: "Save $150 on premium aerodynamic aluminum hard shell rooftop tents with coupon code OAK150.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ftopoakoverland.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "topoak-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $350 OFF",
        title: "Up to $350 Off Overland Awning & Tent Packages",
        description: "Automatic multi-item discount applied when bundling rooftop tents with 270-degree freestanding awnings.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ftopoakoverland.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "topoak-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE FREIGHT",
        title: "Free Commercial & Residential Freight Delivery",
        description: "Receive free palletized liftgate freight delivery on heavy rooftop tents across the continental USA.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ftopoakoverland.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 687,
    name: "Bloomist",
    slug: "bloomist",
    aliases: ["bloomist-decor", "bloomist-home", "bloomist-inc"],
    website: "https://bloomist.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbloomist.com",
    logo: "/logos/bloomist.svg",
    description: "Bloomist curates artisan eco-luxury home decor, faux botanicals, hand-thrown pottery, dried floral arrangements, and sustainable architectural design accents crafted in harmony with nature.",
    coupons: [
      {
        id: "bloom-code-1",
        code: "BLOOM15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off First Order of Artisan Home Decor",
        description: "Use voucher code BLOOM15 to receive 15% off your first purchase of sustainable botanicals and handcrafted vases.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbloomist.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bloom-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 30% OFF",
        title: "Up to 30% Off Seasonal Dried Botanicals & Pottery",
        description: "Save up to 30% on selected terracotta vessels, dried blooms, and handcrafted wood decor.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbloomist.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bloom-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Standard Shipping on Orders Over $150",
        description: "Enjoy complimentary domestic ground shipping on all orders totaling $150 or more.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbloomist.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 688,
    name: "Commomy Decor",
    slug: "commomy",
    aliases: ["commomydecor", "commomy-tiles", "commomy-decor"],
    website: "https://commomy.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcommomy.com",
    logo: "/logos/commomy.svg",
    description: "Commomy Decor makes premium 3D peel and stick wall tiles, backsplash tiles, and self-adhesive stone veneers for effortless, budget-friendly kitchen and bathroom home transformations.",
    coupons: [
      {
        id: "commomy-code-1",
        code: "COMMOMY18",
        is_auto_applied: false,
        discount: "18% OFF",
        title: "18% Off Sitewide 3D Peel & Stick Wall Tiles",
        description: "Enter coupon code COMMOMY18 at checkout to get an extra 18% off all tile designs and backsplash bundles.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcommomy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "commomy-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 35% OFF",
        title: "Up to 35% Off Multi-Pack Kitchen Backsplash Packs",
        description: "Bulk pack discounts automatically applied to large room and renovation DIY tile packs.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcommomy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "commomy-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Doorstep Shipping on Orders Exceeding $49",
        description: "Fast free shipping on all orders of $49 or more within the contiguous United States.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcommomy.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 689,
    name: "Acasis",
    slug: "acasis",
    aliases: ["acasis-official", "acasis-hub", "acasis-tech"],
    website: "https://www.acasis.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.acasis.com",
    logo: "/logos/acasis.svg",
    description: "Acasis manufactures high-speed 40Gbps NVMe SSD enclosures, Thunderbolt 4 docking stations, 4K HDMI video capture cards, and versatile USB-C multi-port hubs for creators and professionals.",
    coupons: [
      {
        id: "acasis-code-1",
        code: "ACASIS15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% Off Thunderbolt 4 Enclosures & Docks",
        description: "Apply discount code ACASIS15 at checkout to receive 15% off high-speed NVMe storage enclosures and hubs.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.acasis.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "acasis-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $60 OFF",
        title: "Up to $60 Off 4K Video Capture Cards & Drive Docks",
        description: "Save up to $60 instantly on dual-bay SSD cloners and streaming capture cards.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.acasis.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "acasis-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FREE US SHIPPING",
        title: "Free Tracked Priority Courier Shipping on $50+",
        description: "Enjoy zero delivery fees on orders above $50 with real-time tracking.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.acasis.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 690,
    name: "GepRC",
    slug: "geprc",
    aliases: ["geprc-fpv", "geprc-drones", "gep-rc"],
    website: "https://geprc.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgeprc.com",
    logo: "/logos/geprc.svg",
    description: "GEPRC designs premier high-performance FPV racing quadcopters, CineWhoop drones, carbon fiber frames, brushless motors, and flight controllers for freestyle pilots and cinematic creators.",
    coupons: [
      {
        id: "geprc-code-1",
        code: "GEPRC10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off FPV Drones, CineWhoops & Flight Gear",
        description: "Enter promo code GEPRC10 at checkout for an instant 10% discount on quadcopters and drone accessories.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgeprc.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "geprc-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $80 OFF",
        title: "Up to $80 Off Ready-to-Fly (RTF) Drone Packages",
        description: "Save big on complete BNF and RTF drone kits equipped with digital HD video transmitters.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgeprc.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "geprc-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "WORLDWIDE DELIVERY",
        title: "Secure Tracked Worldwide Shipping on All Flight Gear",
        description: "Safe and insured international transit with factory technician guarantee.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgeprc.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  }
,
  // 701. PISCIFUN (US)
  {
    id: 701,
    name: "Piscifun",
    slug: "piscifun",
    aliases: ["piscifun-us","piscifun-fishing"],
    logo: "/logos/piscifun.png",
    website: "https://www.piscifun.com",
    affiliate_url: "/go/piscifun",
    country: "US",
    description: "Piscifun manufactures high-performance fishing reels, rods, tackle bags, lines, and tournament angling gear at accessible price points.",
    coupons: [
          {
                "id": "pisc-1",
                "code": "WELCOME15",
                "discount": "15% OFF",
                "title": "15% Off Your First Fishing Tackle Order",
                "description": "Save 15% on baitcaster reels, spinning reels, and braided line with verified code.",
                "is_verified": true,
                "affiliate_url": "/go/piscifun"
          },
          {
                "id": "pisc-2",
                "code": "REEL20",
                "discount": "20% OFF",
                "title": "20% Off Torrent & Phantom Baitcasting Reels",
                "description": "Get 20% off tournament-tested carbon fiber baitcasters and precision drag reels.",
                "is_verified": true,
                "affiliate_url": "/go/piscifun"
          },
          {
                "id": "pisc-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 35% OFF",
                "title": "Up to 35% Off Angler Clearance & Seasonal Tackle",
                "description": "Direct instant discount across top-selling rods, tackle boxes, and fishing bags.",
                "is_verified": true,
                "affiliate_url": "/go/piscifun"
          },
          {
                "id": "pisc-4",
                "code": "FREESHIP",
                "discount": "FREE SHIPPING",
                "title": "Free Express Shipping on Orders Over $49",
                "description": "Enjoy complimentary fast tracked delivery across the United States.",
                "is_verified": true,
                "affiliate_url": "/go/piscifun"
          },
          {
                "id": "pisc-5",
                "code": "TACKLE10",
                "discount": "10% OFF",
                "title": "10% Off Sitewide Fishing Gear & Line Bundles",
                "description": "Take 10% off Onyx braided line, waterproof tackle bags, and carbon rods.",
                "is_verified": true,
                "affiliate_url": "/go/piscifun"
          },
          {
                "id": "pisc-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "BUY 2 GET 10%",
                "title": "Buy 2 Reels or Rods & Get Extra 10% Off",
                "description": "Automatic bundle discount applied at checkout on any two rod or reel combos.",
                "is_verified": true,
                "affiliate_url": "/go/piscifun"
          },
          {
                "id": "pisc-7",
                "code": "FLY25",
                "discount": "25% OFF",
                "title": "25% Off Fly Fishing Reels & Line Spools",
                "description": "Exclusive angler discount on CNC-machined aluminum alloy fly fishing reels.",
                "is_verified": true,
                "affiliate_url": "/go/piscifun"
          },
          {
                "id": "pisc-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "WARRANTY INCLUDED",
                "title": "Free 1-Year Manufacturer Warranty on All Reels",
                "description": "Full factory warranty and direct customer support included with every order.",
                "is_verified": true,
                "affiliate_url": "/go/piscifun"
          }
    ]
  },
  // 702. SCARLET DARKNESS (US)
  {
    id: 702,
    name: "Scarlet Darkness",
    slug: "scarlet-darkness",
    aliases: ["scarletdarkness","scarlet-darkness-us"],
    logo: "/logos/scarlet-darkness.png",
    website: "https://scarletdarkness.com",
    affiliate_url: "/go/scarlet-darkness",
    country: "US",
    description: "Scarlet Darkness crafts vintage-inspired retro clothing, Victorian corset gowns, steampunk attire, and Renaissance faire fashion for women.",
    coupons: [
          {
                "id": "scad-1",
                "code": "DARK15",
                "discount": "15% OFF",
                "title": "15% Off Your First Retro & Victorian Fashion Order",
                "description": "Save 15% on elegant corset dresses, skirts, and vintage blouses with code DARK15.",
                "is_verified": true,
                "affiliate_url": "/go/scarlet-darkness"
          },
          {
                "id": "scad-2",
                "code": "GOTH20",
                "discount": "20% OFF",
                "title": "20% Off Renaissance Faire & Steampunk Gowns",
                "description": "Take 20% off bestselling vintage Victorian dresses and pirate renaissance corsets.",
                "is_verified": true,
                "affiliate_url": "/go/scarlet-darkness"
          },
          {
                "id": "scad-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 40% OFF",
                "title": "Up to 40% Off Seasonal Gothic & Vintage Clearance",
                "description": "Instant markdown applied directly across past-season vintage jackets and petticoats.",
                "is_verified": true,
                "affiliate_url": "/go/scarlet-darkness"
          },
          {
                "id": "scad-4",
                "code": "FREESHIP",
                "discount": "FREE SHIPPING",
                "title": "Free Tracked US Shipping on Orders Over $59",
                "description": "Enjoy complimentary standard delivery on all domestic fashion orders.",
                "is_verified": true,
                "affiliate_url": "/go/scarlet-darkness"
          },
          {
                "id": "scad-5",
                "code": "CORSET10",
                "discount": "10% OFF",
                "title": "10% Off Sitewide Vintage Blouses & Corset Tops",
                "description": "Save 10% on smocked peasant blouses, lace shirts, and Renaissance vests.",
                "is_verified": true,
                "affiliate_url": "/go/scarlet-darkness"
          },
          {
                "id": "scad-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "$15 OFF $100",
                "title": "$15 Off Multi-Item Orders Over $100",
                "description": "Automatic tiered discount activated in shopping bag on qualifying totals.",
                "is_verified": true,
                "affiliate_url": "/go/scarlet-darkness"
          },
          {
                "id": "scad-7",
                "code": "VINTAGE25",
                "discount": "25% OFF",
                "title": "25% Off Select Gothic Trench Coats & Cloaks",
                "description": "Special seasonal promotion on velvet capes, hooded cloaks, and steampunk coats.",
                "is_verified": true,
                "affiliate_url": "/go/scarlet-darkness"
          },
          {
                "id": "scad-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "EASY RETURNS",
                "title": "30-Day Hassle-Free Returns & Size Exchanges",
                "description": "Shop with peace of mind with simple returns and exchanges on all clothing.",
                "is_verified": true,
                "affiliate_url": "/go/scarlet-darkness"
          }
    ]
  },
  // 703. KREWE (US)
  {
    id: 703,
    name: "KREWE",
    slug: "krewe",
    aliases: ["krewe-eyewear","krewe-us"],
    logo: "/logos/krewe.png",
    website: "https://www.krewe.com",
    affiliate_url: "/go/krewe",
    country: "US",
    description: "KREWE is an independent New Orleans-based eyewear brand creating handcrafted artisanal sunglasses and luxury prescription optical frames.",
    coupons: [
          {
                "id": "krewe-1",
                "code": "KREWE10",
                "discount": "10% OFF",
                "title": "10% Off First Luxury Eyewear Order with Sign Up",
                "description": "Save 10% on handcrafted Italian acetate sunglasses and titanium frames.",
                "is_verified": true,
                "affiliate_url": "/go/krewe"
          },
          {
                "id": "krewe-2",
                "code": "",
                "is_auto_applied": true,
                "discount": "SECOND CHANCE",
                "title": "Free Lifetime Second Chance Frame Replacement",
                "description": "If you damage or break your frames, KREWE replaces them once for free.",
                "is_verified": true,
                "affiliate_url": "/go/krewe"
          },
          {
                "id": "krewe-3",
                "code": "SUN20",
                "discount": "20% OFF",
                "title": "20% Off Polarized Sunglasses & Core Classics",
                "description": "Exclusive savings on iconic St. Louis, Franklin, and nylon mirror shades.",
                "is_verified": true,
                "affiliate_url": "/go/krewe"
          },
          {
                "id": "krewe-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE 2-DAY",
                "title": "Free 2-Day Express Shipping & Free Returns",
                "description": "Fast premium tracked delivery with complimentary prepaid return labels.",
                "is_verified": true,
                "affiliate_url": "/go/krewe"
          },
          {
                "id": "krewe-5",
                "code": "OPTICAL15",
                "discount": "15% OFF",
                "title": "15% Off Prescription Optical Eyeglasses",
                "description": "Take 15% off custom prescription lenses and handcrafted designer frames.",
                "is_verified": true,
                "affiliate_url": "/go/krewe"
          },
          {
                "id": "krewe-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 30% OFF",
                "title": "Up to 30% Off Archive & Seasonal Vault Sale",
                "description": "Direct discount on limited-edition colorways and handcrafted acetate silhouettes.",
                "is_verified": true,
                "affiliate_url": "/go/krewe"
          },
          {
                "id": "krewe-7",
                "code": "GIFT50",
                "discount": "$50 OFF",
                "title": "$50 Off Orders Over $350 on Eyewear Sets",
                "description": "Save $50 instantly when styling sunglasses with hard cases and chains.",
                "is_verified": true,
                "affiliate_url": "/go/krewe"
          },
          {
                "id": "krewe-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "CLEANING KIT",
                "title": "Complimentary Custom Hard Case & Microfiber Cloth",
                "description": "Premium designer storage case and microfiber cleaning cloth with every pair.",
                "is_verified": true,
                "affiliate_url": "/go/krewe"
          }
    ]
  },
  // 704. PERGOLUX (DE)
  {
    id: 704,
    name: "Pergolux",
    slug: "pergolux",
    aliases: ["pergolux-de","pergolux-pergola"],
    logo: "/logos/pergolux.png",
    website: "https://pergolux.de",
    affiliate_url: "/go/pergolux",
    country: "DE",
    description: "Pergolux designs and manufactures premium bioclimatic louvered pergolas, glass wall systems, and motorized outdoor living solutions.",
    coupons: [
          {
                "id": "perg-1",
                "code": "PERGO500",
                "discount": "€500 OFF",
                "title": "€500 Off Motorized Louvered Pergola Systems",
                "description": "Save €500 on all-weather aluminum pergolas with motorized roof slats.",
                "is_verified": true,
                "affiliate_url": "/go/pergolux"
          },
          {
                "id": "perg-2",
                "code": "GARTEN10",
                "discount": "10% OFF",
                "title": "10% Off Zip Screens, LED Lighting & Heaters",
                "description": "Take 10% off windproof side screens, integrated LED strips, and patio heating.",
                "is_verified": true,
                "affiliate_url": "/go/pergolux"
          },
          {
                "id": "perg-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE CONSULT",
                "title": "Free 3D Patio Visualization & Expert Consultation",
                "description": "Book a complimentary virtual 3D design session for your terrace or garden.",
                "is_verified": true,
                "affiliate_url": "/go/pergolux"
          },
          {
                "id": "perg-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE FREIGHT",
                "title": "Free Curbside Delivery Across Germany & Austria",
                "description": "Insured freight shipping directly to your home with zero shipping surcharge.",
                "is_verified": true,
                "affiliate_url": "/go/pergolux"
          },
          {
                "id": "perg-5",
                "code": "SUMMER15",
                "discount": "15% OFF",
                "title": "15% Off Glass Sliding Wall Add-On Systems",
                "description": "Enclose your pergola into an all-season winter garden with 15% off glass panels.",
                "is_verified": true,
                "affiliate_url": "/go/pergolux"
          },
          {
                "id": "perg-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "5-YEAR WARRANTY",
                "title": "5-Year Full Manufacturer Weatherproof Warranty",
                "description": "100% rustproof powder-coated aluminum guaranteed against severe weather.",
                "is_verified": true,
                "affiliate_url": "/go/pergolux"
          },
          {
                "id": "perg-7",
                "code": "PERGO300",
                "discount": "€300 OFF",
                "title": "€300 Off Skydance & Pergola S2 Models",
                "description": "Direct discount coupon code for freestanding and wall-mounted pergolas.",
                "is_verified": true,
                "affiliate_url": "/go/pergolux"
          },
          {
                "id": "perg-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "DIY GUIDE",
                "title": "Free Step-by-Step Video Assembly Instructions & Tools",
                "description": "Detailed video manual and all necessary hardware for easy DIY setup.",
                "is_verified": true,
                "affiliate_url": "/go/pergolux"
          }
    ]
  },
  // 705. RYOBI (GLOBAL)
  {
    id: 705,
    name: "Ryobi",
    slug: "ryobi",
    aliases: ["ryobi-tools","ryobi-fr","ryobi-eu"],
    logo: "/logos/ryobi.png",
    website: "https://fr.ryobitools.eu",
    affiliate_url: "/go/ryobi",
    country: "GLOBAL",
    description: "Ryobi delivers innovative 18V ONE+ and 36V MAX POWER cordless power tools, garden machinery, mowers, and DIY home improvement equipment.",
    coupons: [
          {
                "id": "ryo-1",
                "code": "ONEPLUS20",
                "discount": "20% OFF",
                "title": "20% Off 18V ONE+ Cordless Power Tool Starter Kits",
                "description": "Save 20% on drill drivers, impact drivers, and Lithium+ battery starter kits.",
                "is_verified": true,
                "affiliate_url": "/go/ryobi"
          },
          {
                "id": "ryo-2",
                "code": "JARDIN15",
                "discount": "15% OFF",
                "title": "15% Off Cordless Garden Trimmers & Lawn Mowers",
                "description": "Take 15% off 36V MAX POWER hedge trimmers, leaf blowers, and mowers.",
                "is_verified": true,
                "affiliate_url": "/go/ryobi"
          },
          {
                "id": "ryo-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE BATTERY",
                "title": "Free Extra 18V 4.0Ah Battery with Bare Tool Combos",
                "description": "Promotional bundle offer: receive a high-capacity battery with qualifying tools.",
                "is_verified": true,
                "affiliate_url": "/go/ryobi"
          },
          {
                "id": "ryo-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE DELIVERY",
                "title": "Free Standard Delivery on Tool Orders Over €50",
                "description": "Complimentary express courier shipping across France and Europe.",
                "is_verified": true,
                "affiliate_url": "/go/ryobi"
          },
          {
                "id": "ryo-5",
                "code": "OUTIL10",
                "discount": "10% OFF",
                "title": "10% Off Sitewide Circular Saws, Sanders & Routers",
                "description": "Save 10% on precision woodworking and home renovation power tools.",
                "is_verified": true,
                "affiliate_url": "/go/ryobi"
          },
          {
                "id": "ryo-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "3-YEAR WARRANTY",
                "title": "3-Year Extended Manufacturer Tool Warranty",
                "description": "Register your Ryobi tool online within 30 days for an extra year of coverage.",
                "is_verified": true,
                "affiliate_url": "/go/ryobi"
          },
          {
                "id": "ryo-7",
                "code": "CLEAN25",
                "discount": "25% OFF",
                "title": "25% Off High Pressure Washers & Wet/Dry Vacuums",
                "description": "Discount on patio washers, compact wet/dry vacs, and cleaning attachments.",
                "is_verified": true,
                "affiliate_url": "/go/ryobi"
          },
          {
                "id": "ryo-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 30% OFF",
                "title": "Up to 30% Off Seasonal DIY & Garden Clearance",
                "description": "Instant discounts on selected bare tools and workshop accessories.",
                "is_verified": true,
                "affiliate_url": "/go/ryobi"
          }
    ]
  },
  // 706. MAGICSHINE (US)
  {
    id: 706,
    name: "Magicshine",
    slug: "magicshine",
    aliases: ["magicshine-us","magicshine-lights"],
    logo: "/logos/magicshine.png",
    website: "https://magicshine.com",
    affiliate_url: "/go/magicshine",
    country: "US",
    description: "Magicshine engineers ultra-bright bicycle headlights, smart radar taillights, and MTB night riding lighting systems trusted by cyclists worldwide.",
    coupons: [
          {
                "id": "mag-1",
                "code": "SHINE15",
                "discount": "15% OFF",
                "title": "15% Off Your First Cycling Light Order",
                "description": "Save 15% on high-lumen bike headlights, taillights, and helmet mounts.",
                "is_verified": true,
                "affiliate_url": "/go/magicshine"
          },
          {
                "id": "mag-2",
                "code": "MONTEER20",
                "discount": "20% OFF",
                "title": "20% Off Monteer & Ray Series MTB Trail Lights",
                "description": "Take 20% off heavy-duty 3000 to 8000 lumen night riding bike headlights.",
                "is_verified": true,
                "affiliate_url": "/go/magicshine"
          },
          {
                "id": "mag-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE RADAR",
                "title": "Free Garmin Mount with SEEMEE Smart Taillights",
                "description": "Automatic bundle bonus: free quarter-turn mount with brake-sensing taillights.",
                "is_verified": true,
                "affiliate_url": "/go/magicshine"
          },
          {
                "id": "mag-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE SHIPPING",
                "title": "Free Worldwide Tracked Shipping on Orders Over $99",
                "description": "Fast doorstep delivery with real-time tracking on all lighting kits.",
                "is_verified": true,
                "affiliate_url": "/go/magicshine"
          },
          {
                "id": "mag-5",
                "code": "COMMUTE10",
                "discount": "10% OFF",
                "title": "10% Off AllVTY City Commuter Bike Lights",
                "description": "Save 10% on anti-glare USB-C rechargeable urban commuting headlamps.",
                "is_verified": true,
                "affiliate_url": "/go/magicshine"
          },
          {
                "id": "mag-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "2-YEAR WARRANTY",
                "title": "2-Year Manufacturer Warranty on All Cycling Lights",
                "description": "Waterproof IPX6/IPX7 certified lights protected by factory warranty.",
                "is_verified": true,
                "affiliate_url": "/go/magicshine"
          },
          {
                "id": "mag-7",
                "code": "COMBO25",
                "discount": "25% OFF",
                "title": "25% Off Headlight & Smart Tail Light Combos",
                "description": "Save 25% when purchasing bundled front and rear illumination sets.",
                "is_verified": true,
                "affiliate_url": "/go/magicshine"
          },
          {
                "id": "mag-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 30% OFF",
                "title": "Up to 30% Off Seasonal Cyclist Flash Sale",
                "description": "Direct discount on battery packs, remote switches, and out-front mounts.",
                "is_verified": true,
                "affiliate_url": "/go/magicshine"
          }
    ]
  },
  // 707. TESMART (US)
  {
    id: 707,
    name: "TESmart",
    slug: "tesmart",
    aliases: ["tesmart-us","tesmart-kvm"],
    logo: "/logos/tesmart.png",
    website: "https://www.tesmart.com",
    affiliate_url: "/go/tesmart",
    country: "US",
    description: "TESmart manufactures enterprise and home office KVM switches, HDMI matrices, and multi-monitor docking solutions for dual/triple workstation setups.",
    coupons: [
          {
                "id": "tes-1",
                "code": "TES10",
                "discount": "10% OFF",
                "title": "10% Off Dual Monitor KVM Switches Sitewide",
                "description": "Save 10% on 4K@60Hz and 8K HDMI/DisplayPort dual-monitor KVM switchers.",
                "is_verified": true,
                "affiliate_url": "/go/tesmart"
          },
          {
                "id": "tes-2",
                "code": "MATRIX15",
                "discount": "15% OFF",
                "title": "15% Off Professional HDMI Matrix Switchers",
                "description": "Take 15% off 4x4 and 8x8 HDMI matrix switches with RS232 and IP control.",
                "is_verified": true,
                "affiliate_url": "/go/tesmart"
          },
          {
                "id": "tes-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE CABLES",
                "title": "Free High-Speed HDMI & USB KVM Cables Included",
                "description": "Every switch comes packaged with complete certified connection cables.",
                "is_verified": true,
                "affiliate_url": "/go/tesmart"
          },
          {
                "id": "tes-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE US SHIPPING",
                "title": "Free Standard Ground Shipping Across the US",
                "description": "Enjoy fast domestic delivery directly from US warehouse facilities.",
                "is_verified": true,
                "affiliate_url": "/go/tesmart"
          },
          {
                "id": "tes-5",
                "code": "TRIPLE20",
                "discount": "20% OFF",
                "title": "20% Off Triple Monitor Multi-PC KVM Workstations",
                "description": "Save 20% when upgrading high-performance trading and engineering desks.",
                "is_verified": true,
                "affiliate_url": "/go/tesmart"
          },
          {
                "id": "tes-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "2-YEAR WARRANTY",
                "title": "2-Year Full Hardware Warranty & Lifetime Tech Support",
                "description": "Dedicated enterprise technical support and warranty coverage on all units.",
                "is_verified": true,
                "affiliate_url": "/go/tesmart"
          },
          {
                "id": "tes-7",
                "code": "SAVE50",
                "discount": "$50 OFF",
                "title": "$50 Off Orders Over $400 on KVM Docking Bundles",
                "description": "Tiered cart discount automatically verified for enterprise bulk orders.",
                "is_verified": true,
                "affiliate_url": "/go/tesmart"
          },
          {
                "id": "tes-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "30-DAY RETURN",
                "title": "30-Day Money-Back Guarantee on All Switchers",
                "description": "Test your workstation setup risk-free with full 30-day return policy.",
                "is_verified": true,
                "affiliate_url": "/go/tesmart"
          }
    ]
  },
  // 708. C.PARAVANO (US)
  {
    id: 708,
    name: "C.Paravano",
    slug: "cparavano",
    aliases: ["c-paravano","cparavano-us"],
    logo: "/logos/cparavano.png",
    website: "https://www.cparavano.com",
    affiliate_url: "/go/cparavano",
    country: "US",
    description: "C.Paravano creates Italian-inspired designer women's footwear, chic comfortable pointed-toe flats, classic pumps, mules, and genuine leather bags.",
    coupons: [
          {
                "id": "cpar-1",
                "code": "PARAVANO15",
                "discount": "15% OFF",
                "title": "15% Off Your First Designer Footwear Purchase",
                "description": "Save 15% on pointed-toe lambskin flats, heels, and leather pumps with code.",
                "is_verified": true,
                "affiliate_url": "/go/cparavano"
          },
          {
                "id": "cpar-2",
                "code": "LOAFER20",
                "discount": "20% OFF",
                "title": "20% Off Luxury Soft Leather Loafers & Mules",
                "description": "Take 20% off bestselling cushioned slip-on loafers and vintage buckle flats.",
                "is_verified": true,
                "affiliate_url": "/go/cparavano"
          },
          {
                "id": "cpar-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 40% OFF",
                "title": "Up to 40% Off Seasonal Runway & Outlet Sale",
                "description": "Direct price markdown on designer slingbacks, sandals, and handbag collections.",
                "is_verified": true,
                "affiliate_url": "/go/cparavano"
          },
          {
                "id": "cpar-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE SHIPPING",
                "title": "Free Express Shipping on Orders Over $100",
                "description": "Complimentary doorstep courier delivery across the United States.",
                "is_verified": true,
                "affiliate_url": "/go/cparavano"
          },
          {
                "id": "cpar-5",
                "code": "PUMP10",
                "discount": "10% OFF",
                "title": "10% Off Sitewide Comfortable Office Block Heels",
                "description": "Save 10% on ergonomic memory-foam cushioned dress shoes for work.",
                "is_verified": true,
                "affiliate_url": "/go/cparavano"
          },
          {
                "id": "cpar-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "BUY 2 GET $25",
                "title": "Buy 2 Pairs & Get $25 Off Instantly",
                "description": "Automatic bundle savings in cart when choosing any two shoe styles.",
                "is_verified": true,
                "affiliate_url": "/go/cparavano"
          },
          {
                "id": "cpar-7",
                "code": "BAG25",
                "discount": "25% OFF",
                "title": "25% Off Genuine Cowhide Crossbody Bags & Totes",
                "description": "Discount on Italian-crafted minimal leather handbags and clutches.",
                "is_verified": true,
                "affiliate_url": "/go/cparavano"
          },
          {
                "id": "cpar-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "30-DAY RETURN",
                "title": "30-Day Hassle-Free Returns & Perfect Fit Guarantee",
                "description": "Easy returns and size swaps to ensure your perfect comfort fit.",
                "is_verified": true,
                "affiliate_url": "/go/cparavano"
          }
    ]
  },
  // 709. SENSER (US)
  {
    id: 709,
    name: "Senser",
    slug: "senser",
    aliases: ["senser-us","senser-fashion"],
    logo: "/logos/senser.png",
    website: "https://www.senser.net",
    affiliate_url: "/go/senser",
    country: "US",
    description: "Senser is a global digital luxury platform connecting shoppers to 500+ European boutiques with guaranteed authentic designer clothing, bags, and shoes.",
    coupons: [
          {
                "id": "sens-1",
                "code": "SENSER50",
                "discount": "$50 OFF",
                "title": "$50 Off Your First Luxury Designer Order Over $400",
                "description": "Save $50 on authentic Saint Laurent, Balenciaga, Gucci, and Prada.",
                "is_verified": true,
                "affiliate_url": "/go/senser"
          },
          {
                "id": "sens-2",
                "code": "LUXURY10",
                "discount": "10% OFF",
                "title": "10% Off Sitewide European Boutique Fashion",
                "description": "Take 10% off current-season runway apparel, sneakers, and designer bags.",
                "is_verified": true,
                "affiliate_url": "/go/senser"
          },
          {
                "id": "sens-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 60% OFF",
                "title": "Up to 60% Off Designer Seasonal Boutique Clearance",
                "description": "Huge instant markdowns sourced directly from authorized European retailers.",
                "is_verified": true,
                "affiliate_url": "/go/senser"
          },
          {
                "id": "sens-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "AUTHENTIC 100%",
                "title": "100% Certified Authenticity & Boutique Inspection Guarantee",
                "description": "Every luxury piece undergoes strict quality and authenticity verification.",
                "is_verified": true,
                "affiliate_url": "/go/senser"
          },
          {
                "id": "sens-5",
                "code": "SNEAKER15",
                "discount": "15% OFF",
                "title": "15% Off Designer Sneakers & Luxury Streetwear",
                "description": "Save 15% on Golden Goose, Alexander McQueen, and Maison Margiela kicks.",
                "is_verified": true,
                "affiliate_url": "/go/senser"
          },
          {
                "id": "sens-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE GLOBAL",
                "title": "Free DHL Express Insured Worldwide Shipping",
                "description": "Fast international shipping with tracking and zero hidden import duty.",
                "is_verified": true,
                "affiliate_url": "/go/senser"
          },
          {
                "id": "sens-7",
                "code": "BAG100",
                "discount": "$100 OFF",
                "title": "$100 Off Designer Leather Handbags Over $800",
                "description": "Exclusive savings on luxury totes, shoulder bags, and card holders.",
                "is_verified": true,
                "affiliate_url": "/go/senser"
          },
          {
                "id": "sens-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "EASY RETURNS",
                "title": "14-Day Global Return Protection on All Luxury Orders",
                "description": "Complimentary prepaid return pickup for total luxury shopping security.",
                "is_verified": true,
                "affiliate_url": "/go/senser"
          }
    ]
  },
  // 710. CANDYROO (UK)
  {
    id: 710,
    name: "Candyroo",
    slug: "candyroo",
    aliases: ["candy-roo","candyroo-uk"],
    logo: "/logos/candyroo.png",
    website: "https://candyroo.co.uk",
    affiliate_url: "/go/candyroo",
    country: "UK",
    description: "Candyroo is the UK's premier pick & mix sweet shop, offering giant pouch sweets, retro British tuckshop favorites, American candy, and gift hampers.",
    coupons: [
          {
                "id": "cand-1",
                "code": "ROO15",
                "discount": "15% OFF",
                "title": "15% Off Your First Pick & Mix Sweet Order",
                "description": "Save 15% on custom sweet pouches, gummy mixes, and retro tuckshop boxes.",
                "is_verified": true,
                "affiliate_url": "/go/candyroo"
          },
          {
                "id": "cand-2",
                "code": "POUCH20",
                "discount": "20% OFF",
                "title": "20% Off 1kg & 2kg Giant Sweet Pouches",
                "description": "Take 20% off bestselling fizzy sweets, vegan jellies, and chocolate pouches.",
                "is_verified": true,
                "affiliate_url": "/go/candyroo"
          },
          {
                "id": "cand-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE UK POST",
                "title": "Free Royal Mail Tracked Delivery Over £35",
                "description": "Free fast shipping to any UK address on orders over £35.",
                "is_verified": true,
                "affiliate_url": "/go/candyroo"
          },
          {
                "id": "cand-4",
                "code": "HAMPER10",
                "discount": "10% OFF",
                "title": "10% Off American Candy & Soda Gift Hampers",
                "description": "Save 10% on imported USA snacks, rare candies, and birthday sweet boxes.",
                "is_verified": true,
                "affiliate_url": "/go/candyroo"
          },
          {
                "id": "cand-5",
                "code": "",
                "is_auto_applied": true,
                "discount": "BUY 3 GET 4TH",
                "title": "Buy 3 Snack Pouches & Get 4th Half Price",
                "description": "Automatic mix & match tuckshop promotion applied at checkout.",
                "is_verified": true,
                "affiliate_url": "/go/candyroo"
          },
          {
                "id": "cand-6",
                "code": "VEGAN15",
                "discount": "15% OFF",
                "title": "15% Off 100% Certified Vegan & Gluten-Free Sweets",
                "description": "Delicious plant-based jelly treats, sour sweets, and dairy-free fudge.",
                "is_verified": true,
                "affiliate_url": "/go/candyroo"
          },
          {
                "id": "cand-7",
                "code": "SWEET5",
                "discount": "£5 OFF",
                "title": "£5 Off Party Pack Orders Over £40",
                "description": "Voucher code valid on wedding favors, sweet buffets, and party bags.",
                "is_verified": true,
                "affiliate_url": "/go/candyroo"
          },
          {
                "id": "cand-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "FRESH PACK",
                "title": "100% Resealable Freshness-Sealed Pouches Guaranteed",
                "description": "Packed fresh daily in eco-friendly resealable food-grade pouches.",
                "is_verified": true,
                "affiliate_url": "/go/candyroo"
          }
    ]
  },
  // 711. GRAYS HOCKEY (UK)
  {
    id: 711,
    name: "Grays Hockey",
    slug: "grays-hockey",
    aliases: ["grayshockey","grays-hockey-uk"],
    logo: "/logos/grays-hockey.png",
    website: "https://www.grays-hockey.com",
    affiliate_url: "/go/grays-hockey",
    country: "UK",
    description: "Grays Hockey is the world's most historic field hockey brand, crafting elite composite sticks, AC/KN series, protective gloves, bags, and shoes.",
    coupons: [
          {
                "id": "gray-1",
                "code": "GRAYS15",
                "discount": "15% OFF",
                "title": "15% Off Your First Field Hockey Equipment Order",
                "description": "Save 15% on composite hockey sticks, gloves, bags, and turf shoes with code.",
                "is_verified": true,
                "affiliate_url": "/go/grays-hockey"
          },
          {
                "id": "gray-2",
                "code": "STICK20",
                "discount": "20% OFF",
                "title": "20% Off Kinetic (KN) & AC Composite Hockey Sticks",
                "description": "Take 20% off world-class carbon fiber sticks with Geocentric Core technology.",
                "is_verified": true,
                "affiliate_url": "/go/grays-hockey"
          },
          {
                "id": "gray-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 40% OFF",
                "title": "Up to 40% Off End-of-Season Stick Clearance",
                "description": "Direct price reductions on past-season professional field hockey gear.",
                "is_verified": true,
                "affiliate_url": "/go/grays-hockey"
          },
          {
                "id": "gray-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE UK POST",
                "title": "Free UK Standard Delivery on Orders Over £50",
                "description": "Fast tracked courier delivery across England, Scotland, Wales, and NI.",
                "is_verified": true,
                "affiliate_url": "/go/grays-hockey"
          },
          {
                "id": "gray-5",
                "code": "GUARD10",
                "discount": "10% OFF",
                "title": "10% Off Shin Guards, Masks & Protective Gear",
                "description": "Protect yourself on turf with 10% off high-impact shin guards and gloves.",
                "is_verified": true,
                "affiliate_url": "/go/grays-hockey"
          },
          {
                "id": "gray-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE BALL",
                "title": "Free Match Hockey Ball with Any Stick Purchase",
                "description": "Free international match ball automatically added with any adult stick.",
                "is_verified": true,
                "affiliate_url": "/go/grays-hockey"
          },
          {
                "id": "gray-7",
                "code": "BAG15",
                "discount": "15% OFF",
                "title": "15% Off Multi-Stick Backpacks & Holdalls",
                "description": "Save 15% on water-resistant kit bags with stick compartments.",
                "is_verified": true,
                "affiliate_url": "/go/grays-hockey"
          },
          {
                "id": "gray-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "PRO CHOICE",
                "title": "Official Equipment of Olympic & International Players",
                "description": "Engineered to strict FIH regulations for championship tournament play.",
                "is_verified": true,
                "affiliate_url": "/go/grays-hockey"
          }
    ]
  },
  // 712. MERACH (UK)
  {
    id: 712,
    name: "Merach",
    slug: "merach",
    aliases: ["merach-uk","merach-fitness"],
    logo: "/logos/merach.png",
    website: "https://uk.merachfit.com",
    affiliate_url: "/go/merach",
    country: "UK",
    description: "Merach develops smart connected home fitness equipment, electromagnetic resistance rowing machines, quiet exercise bikes, and smart treadmills.",
    coupons: [
          {
                "id": "mer-1",
                "code": "MERACH50",
                "discount": "£50 OFF",
                "title": "£50 Off Smart Water & Magnetic Rowing Machines",
                "description": "Save £50 on quiet electromagnetic rowers with Bluetooth app connectivity.",
                "is_verified": true,
                "affiliate_url": "/go/merach"
          },
          {
                "id": "mer-2",
                "code": "BIKE15",
                "discount": "15% OFF",
                "title": "15% Off MERACH Indoor Stationary Exercise Bikes",
                "description": "Take 15% off silent magnetic resistance spinning bikes for home cardio.",
                "is_verified": true,
                "affiliate_url": "/go/merach"
          },
          {
                "id": "mer-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE APP",
                "title": "Free 1-Year MERACH App All-Access Subscription",
                "description": "Access hundreds of on-demand trainer workouts and scenic rowing videos.",
                "is_verified": true,
                "affiliate_url": "/go/merach"
          },
          {
                "id": "mer-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE UK DELIVERY",
                "title": "Free Tracked Heavy-Goods Delivery Across the UK",
                "description": "Free home doorstep delivery on all rowers, treadmills, and exercise bikes.",
                "is_verified": true,
                "affiliate_url": "/go/merach"
          },
          {
                "id": "mer-5",
                "code": "TREAD10",
                "discount": "10% OFF",
                "title": "10% Off Compact Under-Desk Walking Pads",
                "description": "Save 10% on foldable walking treadmills with LED display and remote control.",
                "is_verified": true,
                "affiliate_url": "/go/merach"
          },
          {
                "id": "mer-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "2-YEAR WARRANTY",
                "title": "2-Year Frame & Motor Warranty with Free Support",
                "description": "Peace of mind with comprehensive UK customer support and parts replacement.",
                "is_verified": true,
                "affiliate_url": "/go/merach"
          },
          {
                "id": "mer-7",
                "code": "MERACH80",
                "discount": "£80 OFF",
                "title": "£80 Off Total Gym Bundles Over £600",
                "description": "Tiered voucher code when pairing rower with vibration plate or bike.",
                "is_verified": true,
                "affiliate_url": "/go/merach"
          },
          {
                "id": "mer-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "30-DAY TRIAL",
                "title": "30-Day Risk-Free Home Workout Trial",
                "description": "Experience workout results at home with hassle-free 30-day returns.",
                "is_verified": true,
                "affiliate_url": "/go/merach"
          }
    ]
  },
  // 713. EDEN'S HERBALS (US)
  {
    id: 713,
    name: "Eden's Herbals",
    slug: "edens-herbals",
    aliases: ["edensherbals","xtra-herbals","edens-herbals-us"],
    logo: "/logos/edens-herbals.png",
    website: "https://edensherbals.com",
    affiliate_url: "/go/edens-herbals",
    country: "US",
    description: "Eden's Herbals provides pure third-party lab-tested CBD gummies, organic full spectrum CBD oils, soothing relief creams, and pet wellness tinctures.",
    coupons: [
          {
                "id": "eden-1",
                "code": "EDEN20",
                "discount": "20% OFF",
                "title": "20% Off Your Entire CBD & Wellness Order Sitewide",
                "description": "Save 20% on CBD gummies, full spectrum tinctures, and topicals with code.",
                "is_verified": true,
                "affiliate_url": "/go/edens-herbals"
          },
          {
                "id": "eden-2",
                "code": "GUMMY25",
                "discount": "25% OFF",
                "title": "25% Off 500mg & 1000mg Fruity CBD Gummies",
                "description": "Take 25% off bestselling THC-free organic isolate gummy bears.",
                "is_verified": true,
                "affiliate_url": "/go/edens-herbals"
          },
          {
                "id": "eden-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "BUY 2 GET 1",
                "title": "Buy 2 CBD Products & Get 1 Free Instantly",
                "description": "Automatic checkout deal: mix and match your favorite tinctures and salves.",
                "is_verified": true,
                "affiliate_url": "/go/edens-herbals"
          },
          {
                "id": "eden-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE US SHIPPING",
                "title": "Free Discreet US Shipping on All Orders",
                "description": "Zero shipping fee and plain packaging delivered across the USA.",
                "is_verified": true,
                "affiliate_url": "/go/edens-herbals"
          },
          {
                "id": "eden-5",
                "code": "RELIEF15",
                "discount": "15% OFF",
                "title": "15% Off Cooling CBD Muscle & Joint Salve",
                "description": "Save 15% on deep-penetrating CBD pain relief balms and roll-ons.",
                "is_verified": true,
                "affiliate_url": "/go/edens-herbals"
          },
          {
                "id": "eden-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "LAB CERTIFIED",
                "title": "100% Third-Party Lab Certified Potency & Purity",
                "description": "Every batch verified by independent US laboratories with viewable COAs.",
                "is_verified": true,
                "affiliate_url": "/go/edens-herbals"
          },
          {
                "id": "eden-7",
                "code": "PET20",
                "discount": "20% OFF",
                "title": "20% Off Natural Pet CBD Drops for Dogs & Cats",
                "description": "Promote calm and joint comfort in pets with non-GMO bacon-flavored CBD drops.",
                "is_verified": true,
                "affiliate_url": "/go/edens-herbals"
          },
          {
                "id": "eden-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "MONEY-BACK",
                "title": "30-Day 100% Satisfaction Money-Back Guarantee",
                "description": "Feel the calming difference risk-free or get a complete refund.",
                "is_verified": true,
                "affiliate_url": "/go/edens-herbals"
          }
    ]
  },
  // 714. PUPPER CRUST (US)
  {
    id: 714,
    name: "Pupper Crust",
    slug: "pupper-crust",
    aliases: ["puppercrust","pupper-crust-us"],
    logo: "/logos/pupper-crust.png",
    website: "https://puppercrust.com",
    affiliate_url: "/go/pupper-crust",
    country: "US",
    description: "Pupper Crust crafts wholesome artisan oven-baked dog pizza crusts, gourmet canine treats, and all-natural nutrition made with human-grade ingredients.",
    coupons: [
          {
                "id": "pupp-1",
                "code": "PUPPY20",
                "discount": "20% OFF",
                "title": "20% Off Your First Dog Pizza & Treat Box",
                "description": "Save 20% on all-natural oven-baked dog pizzas and crunchy artisan biscuits.",
                "is_verified": true,
                "affiliate_url": "/go/pupper-crust"
          },
          {
                "id": "pupp-2",
                "code": "SUB15",
                "discount": "15% OFF",
                "title": "15% Off Monthly Treat Subscription Deliveries",
                "description": "Enjoy 15% recurring savings and automated fresh treat boxes every month.",
                "is_verified": true,
                "affiliate_url": "/go/pupper-crust"
          },
          {
                "id": "pupp-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE SHIPPING",
                "title": "Free Tracked US Shipping on Orders Over $40",
                "description": "Complimentary doorstep delivery directly from the bakery oven to your dog.",
                "is_verified": true,
                "affiliate_url": "/go/pupper-crust"
          },
          {
                "id": "pupp-4",
                "code": "BARK10",
                "discount": "10% OFF",
                "title": "10% Off Sitewide Artisan Canine Snacks & Toppers",
                "description": "Take 10% off organic dog treats, training bites, and savory meal toppers.",
                "is_verified": true,
                "affiliate_url": "/go/pupper-crust"
          },
          {
                "id": "pupp-5",
                "code": "",
                "is_auto_applied": true,
                "discount": "BUY 3 GET 1 FREE",
                "title": "Buy 3 Dog Pizzas & Get 1 Free Bonus Pizza",
                "description": "Automatic multi-pack celebration offer applied at checkout.",
                "is_verified": true,
                "affiliate_url": "/go/pupper-crust"
          },
          {
                "id": "pupp-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "HUMAN-GRADE",
                "title": "100% Real Human-Grade Ingredients & Zero Preservatives",
                "description": "Crafted without artificial colors, fillers, wheat gluten, or mystery meats.",
                "is_verified": true,
                "affiliate_url": "/go/pupper-crust"
          },
          {
                "id": "pupp-7",
                "code": "BIRTHDAY25",
                "discount": "25% OFF",
                "title": "25% Off Pup Birthday Party Bundles & Kits",
                "description": "Celebrate your pup's special day with party pizzas, hats, and treat pouches.",
                "is_verified": true,
                "affiliate_url": "/go/pupper-crust"
          },
          {
                "id": "pupp-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "TASTE GUARANTEE",
                "title": "100% Tail-Wagging Taste Guarantee or Full Refund",
                "description": "If your furry friend does not love it, get a prompt, courteous refund.",
                "is_verified": true,
                "affiliate_url": "/go/pupper-crust"
          }
    ]
  },
  // 715. ZOUPW (US)
  {
    id: 715,
    name: "ZOUPW",
    slug: "zoupw",
    aliases: ["zoupw-power","zoupw-us"],
    logo: "/logos/zoupw.png",
    website: "https://zoupw.com",
    affiliate_url: "/go/zoupw",
    country: "US",
    description: "ZOUPW develops rugged portable power stations, monocrystalline solar panels, LiFePO4 battery generators, and outdoor off-grid energy gear.",
    coupons: [
          {
                "id": "zoup-1",
                "code": "POWER100",
                "discount": "$100 OFF",
                "title": "$100 Off Portable LiFePO4 Power Stations",
                "description": "Save $100 on 600W to 2000W portable solar generators for camping & emergencies.",
                "is_verified": true,
                "affiliate_url": "/go/zoupw"
          },
          {
                "id": "zoup-2",
                "code": "SOLAR15",
                "discount": "15% OFF",
                "title": "15% Off Foldable Monocrystalline Solar Panels",
                "description": "Take 15% off 100W and 200W high-efficiency waterproof solar charging kits.",
                "is_verified": true,
                "affiliate_url": "/go/zoupw"
          },
          {
                "id": "zoup-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 30% OFF",
                "title": "Up to 30% Off Solar Generator Power Bundles",
                "description": "Instant package markdown when purchasing power station plus solar panels.",
                "is_verified": true,
                "affiliate_url": "/go/zoupw"
          },
          {
                "id": "zoup-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE EXPEDITED",
                "title": "Free Expedited US Shipping on All Power Units",
                "description": "Fast delivery directly from domestic warehouses with insured tracking.",
                "is_verified": true,
                "affiliate_url": "/go/zoupw"
          },
          {
                "id": "zoup-5",
                "code": "CAMP10",
                "discount": "10% OFF",
                "title": "10% Off Sitewide Power Inverters & GaN Fast Chargers",
                "description": "Save 10% on car jump starters, fast charging blocks, and DC accessories.",
                "is_verified": true,
                "affiliate_url": "/go/zoupw"
          },
          {
                "id": "zoup-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "3500+ CYCLES",
                "title": "Long-Life LiFePO4 Batteries Rated for 10+ Years",
                "description": "Premium battery chemistry ensuring over 3500 full charge cycles to 80%.",
                "is_verified": true,
                "affiliate_url": "/go/zoupw"
          },
          {
                "id": "zoup-7",
                "code": "SAVE50",
                "discount": "$50 OFF",
                "title": "$50 Off Emergency Blackout Home Backup Sets",
                "description": "Code valid on heavy-duty expandable battery systems over $500.",
                "is_verified": true,
                "affiliate_url": "/go/zoupw"
          },
          {
                "id": "zoup-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "2-YEAR WARRANTY",
                "title": "2-Year Manufacturer Warranty & Hassle-Free Returns",
                "description": "Full factory warranty coverage and dedicated 24/7 technical customer support.",
                "is_verified": true,
                "affiliate_url": "/go/zoupw"
          }
    ]
  },
  // 716. BIRDFY (US)
  {
    id: 716,
    name: "Birdfy",
    slug: "birdfy",
    aliases: ["birdfy-us","birdfy-feeder"],
    logo: "/logos/birdfy.png",
    website: "https://www.birdfy.com",
    affiliate_url: "/go/birdfy",
    country: "US",
    description: "Birdfy creates AI-powered smart bird feeder cameras that automatically identify 6,000+ bird species, capture full HD video, and alert you on your phone.",
    coupons: [
          {
                "id": "bird-1",
                "code": "BIRDFY15",
                "discount": "15% OFF",
                "title": "15% Off Your First Smart AI Bird Feeder Camera",
                "description": "Save 15% on 1080p/2K wireless smart bird feeder cams with AI bird recognition.",
                "is_verified": true,
                "affiliate_url": "/go/birdfy"
          },
          {
                "id": "bird-2",
                "code": "DUAL40",
                "discount": "$40 OFF",
                "title": "$40 Off Birdfy Feeder Dual-Camera Solar Bundles",
                "description": "Take $40 off dual-lens smart feeders with continuous solar power panels.",
                "is_verified": true,
                "affiliate_url": "/go/birdfy"
          },
          {
                "id": "bird-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE AI ACCESS",
                "title": "Free Lifetime AI Bird Species Identification Included",
                "description": "Automatically recognize over 6,000 global bird species with zero recurring fee.",
                "is_verified": true,
                "affiliate_url": "/go/birdfy"
          },
          {
                "id": "bird-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE SHIPPING",
                "title": "Free Standard US Shipping on Orders Over $99",
                "description": "Tracked express shipping directly to your doorstep with safe delivery.",
                "is_verified": true,
                "affiliate_url": "/go/birdfy"
          },
          {
                "id": "bird-5",
                "code": "HUMMING20",
                "discount": "20% OFF",
                "title": "20% Off Smart Hummingbird Feeders & Nectar Sets",
                "description": "Save 20% on precision camera feeders tailored for hummingbirds.",
                "is_verified": true,
                "affiliate_url": "/go/birdfy"
          },
          {
                "id": "bird-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 35% OFF",
                "title": "Up to 35% Off Seasonal Holiday Nature Bundles",
                "description": "Direct discount on feeder extension perches, suet balls, and camera accessories.",
                "is_verified": true,
                "affiliate_url": "/go/birdfy"
          },
          {
                "id": "bird-7",
                "code": "FEEDER10",
                "discount": "10% OFF",
                "title": "10% Off Sitewide Solar Panels & Mounting Poles",
                "description": "Get 10% off universal tree mounts, wall brackets, and high-gain solar panels.",
                "is_verified": true,
                "affiliate_url": "/go/birdfy"
          },
          {
                "id": "bird-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "2-YEAR WARRANTY",
                "title": "2-Year Full Hardware Warranty & IP65 Weatherproofing",
                "description": "Completely waterproof design built to withstand snow, rain, and heat.",
                "is_verified": true,
                "affiliate_url": "/go/birdfy"
          }
    ]
  },
  // 717. PAPABLIC (US)
  {
    id: 717,
    name: "Papablic",
    slug: "papablic",
    aliases: ["papablic-baby","papablic-us"],
    logo: "/logos/papablic.png",
    website: "https://papablic.com",
    affiliate_url: "/go/papablic",
    country: "US",
    description: "Papablic designs parenting-friendly baby essentials, steam bottle sterilizers and dryers, infant sonic toothbrushes, and breast pump storage systems.",
    coupons: [
          {
                "id": "papa-1",
                "code": "BABY15",
                "discount": "15% OFF",
                "title": "15% Off Your First Baby Essentials Order",
                "description": "Save 15% on steam sterilizers, bottle warmers, and sonic infant toothbrushes.",
                "is_verified": true,
                "affiliate_url": "/go/papablic"
          },
          {
                "id": "papa-2",
                "code": "STEAM20",
                "discount": "20% OFF",
                "title": "20% Off Steam Baby Bottle Sterilizer & Dryer Pro",
                "description": "Take 20% off bestselling large-capacity 3-in-1 bottle sterilizer and dryers.",
                "is_verified": true,
                "affiliate_url": "/go/papablic"
          },
          {
                "id": "papa-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE US SHIPPING",
                "title": "Free Standard Shipping on Orders Over $45",
                "description": "Enjoy fast, reliable tracked delivery across the United States.",
                "is_verified": true,
                "affiliate_url": "/go/papablic"
          },
          {
                "id": "papa-4",
                "code": "BRUSH10",
                "discount": "10% OFF",
                "title": "10% Off Sonic Baby Toothbrush & Replacement Heads",
                "description": "Save 10% on gentle LED lighted vibrating toothbrushes for toddlers.",
                "is_verified": true,
                "affiliate_url": "/go/papablic"
          },
          {
                "id": "papa-5",
                "code": "",
                "is_auto_applied": true,
                "discount": "BUY 2 GET 15%",
                "title": "Buy 2 Feeding Accessories & Save Extra 15%",
                "description": "Automatic bundle discount on silicone brushes, pacifier wipes, and bags.",
                "is_verified": true,
                "affiliate_url": "/go/papablic"
          },
          {
                "id": "papa-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "BPA-FREE 100%",
                "title": "100% Food-Grade BPA-Free & Medical Grade Safety",
                "description": "Certified safe materials meeting strict pediatric infant safety standards.",
                "is_verified": true,
                "affiliate_url": "/go/papablic"
          },
          {
                "id": "papa-7",
                "code": "PUMP25",
                "discount": "25% OFF",
                "title": "25% Off Breast Pump Storage Bags & Organizers",
                "description": "Discount on space-saving breastmilk freezer bags and drying racks.",
                "is_verified": true,
                "affiliate_url": "/go/papablic"
          },
          {
                "id": "papa-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "LIFETIME SUPPORT",
                "title": "Lifetime Customer Support & 1-Year Replacement Warranty",
                "description": "Hassle-free replacement policy with dedicated support for new parents.",
                "is_verified": true,
                "affiliate_url": "/go/papablic"
          }
    ]
  },
  // 718. NATUREHIKE (AU)
  {
    id: 718,
    name: "Naturehike",
    slug: "naturehike",
    aliases: ["naturehike-au","naturehike-outdoor"],
    logo: "/logos/naturehike.png",
    website: "https://www.naturehike.au",
    affiliate_url: "/go/naturehike",
    country: "AU",
    description: "Naturehike creates ultralight camping tents, lightweight goose down sleeping bags, compact hiking furniture, and premium outdoor gear for backpackers.",
    coupons: [
          {
                "id": "natu-1",
                "code": "HIKE15",
                "discount": "15% OFF",
                "title": "15% Off Your First Ultralight Camping Order",
                "description": "Save 15% on Cloud-Up backpacking tents, sleeping pads, and hiking poles.",
                "is_verified": true,
                "affiliate_url": "/go/naturehike"
          },
          {
                "id": "natu-2",
                "code": "TENT20",
                "discount": "20% OFF",
                "title": "20% Off Cloud-Up & Star River Ultralight Tents",
                "description": "Take 20% off 20D silicone-coated waterproof 1-person and 2-person tents.",
                "is_verified": true,
                "affiliate_url": "/go/naturehike"
          },
          {
                "id": "natu-3",
                "code": "",
                "is_auto_applied": true,
                "discount": "UP TO 35% OFF",
                "title": "Up to 35% Off Outdoor Camping Gear Clearance",
                "description": "Instant discounts on titanium cookware, headlamps, and compact backpacks.",
                "is_verified": true,
                "affiliate_url": "/go/naturehike"
          },
          {
                "id": "natu-4",
                "code": "",
                "is_auto_applied": true,
                "discount": "FREE AU POST",
                "title": "Free Standard Delivery Across Australia Over $99",
                "description": "Fast tracked courier dispatch from Melbourne/Sydney warehouses.",
                "is_verified": true,
                "affiliate_url": "/go/naturehike"
          },
          {
                "id": "natu-5",
                "code": "SLEEP10",
                "discount": "10% OFF",
                "title": "10% Off Goose Down Sleeping Bags & Inflatable Mats",
                "description": "Save 10% on compact packable down bags rated for extreme cold nights.",
                "is_verified": true,
                "affiliate_url": "/go/naturehike"
          },
          {
                "id": "natu-6",
                "code": "",
                "is_auto_applied": true,
                "discount": "LIFETIME SUPPORT",
                "title": "1-Year Warranty & Dedicated Outdoor Gear Support",
                "description": "Reliable materials and waterproof craftsmanship built for rugged terrain.",
                "is_verified": true,
                "affiliate_url": "/go/naturehike"
          },
          {
                "id": "natu-7",
                "code": "CHAIR25",
                "discount": "25% OFF",
                "title": "25% Off Ultralight Folding Camping Chairs & Tables",
                "description": "Discount on aircraft-grade aluminum portable chairs weighing under 1kg.",
                "is_verified": true,
                "affiliate_url": "/go/naturehike"
          },
          {
                "id": "natu-8",
                "code": "",
                "is_auto_applied": true,
                "discount": "30-DAY RETURN",
                "title": "30-Day Hassle-Free Returns & Money-Back Guarantee",
                "description": "Gear up for your next bushwalking or trail adventure completely risk-free.",
                "is_verified": true,
                "affiliate_url": "/go/naturehike"
          }
    ]
  }
,
  {
    "id": 719,
    "name": "Aquasana",
    "slug": "aquasana",
    "aliases": ["aquasana-filters", "aquasana-water", "aquasana-us", "aquasana-water-filters"],
    "website": "https://www.aquasana.com",
    "affiliate_url": "/go/aquasana",
    "logo": "/logos/aquasana.png",
    "description": "Aquasana designs industry-leading home water filtration systems, including whole house water filters, under-sink reverse osmosis systems, and shower filters engineered to remove up to 99% of contaminants while preserving healthy minerals.",
    "coupons": [
      {
        "id": "aqua-1",
        "code": "",
        "is_auto_applied": true,
        "discount": "UP TO 50% OFF",
        "title": "Up to 50% Off Select Whole House & Under-Sink Water Filtration Systems",
        "description": "No coupon code required. Instant discount applied automatically at checkout across select whole house Rhino filters and drinking water systems.",
        "is_verified": true,
        "affiliate_url": "/go/aquasana"
      },
      {
        "id": "aqua-2",
        "code": "",
        "is_auto_applied": true,
        "discount": "15% OFF SUBSCRIPTION",
        "title": "Water for Life: 15% Off Auto-Ship Replacement Filters + Free Delivery",
        "description": "Join the Water for Life program to receive 15% discount on authentic replacement cartridges with automatic free scheduled shipping.",
        "is_verified": true,
        "affiliate_url": "/go/aquasana"
      },
      {
        "id": "aqua-3",
        "code": "",
        "is_auto_applied": true,
        "discount": "FREE SHIPPING",
        "title": "Free Fast Standard Delivery on All US Water Filter Orders Over $45",
        "description": "Enjoy free nationwide shipping automatically calculated at checkout on qualifying filtration systems and replacement accessories.",
        "is_verified": true,
        "affiliate_url": "/go/aquasana"
      },
      {
        "id": "aqua-4",
        "code": "",
        "is_auto_applied": true,
        "discount": "90-DAY GUARANTEE",
        "title": "90-Day Pure Satisfaction Risk-Free In-Home Money-Back Guarantee",
        "description": "Try any Aquasana filtration unit in your home with complete peace of mind backed by a full 90-day official return guarantee.",
        "is_verified": true,
        "affiliate_url": "/go/aquasana"
      }
    ]
  },
  // 720. UPLIFT DESK (US)
  {
    id: 720,
    name: "UPLIFT Desk",
    slug: "upliftdesk",
    aliases: ["uplift-desk", "upliftdesk-com", "uplift", "uplift-standing-desk"],
    website: "https://www.upliftdesk.com",
    affiliate_url: "/go/upliftdesk",
    logo: "/logos/upliftdesk.png",
    country: "US",
    description: "UPLIFT Desk is the #1 rated ergonomic standing desk and office furniture manufacturer in Austin, Texas. Engineered with commercial-grade dual motors, industry-leading 15-year warranty, customizable solid wood desktops, and free nationwide delivery.",
    coupons: [
      {
        id: "uplift-code-1",
        code: "WELCOME",
        is_auto_applied: false,
        discount: "$20 OFF",
        title: "$20 Off Welcome Discount for New Customers",
        description: "Apply promo code WELCOME at checkout for an instant $20 discount on qualifying first-time standing desk and ergonomic workspace orders.",
        affiliate_url: "/go/upliftdesk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "uplift-code-2",
        code: "FALL",
        is_auto_applied: false,
        discount: "UP TO $300 OFF",
        title: "Up to $300 Off + 5 Free Accessories (Fall Focus Sale)",
        description: "Apply promo code FALL at checkout to save $100 off $999+, $150 off $1,499+, $200 off $1,999+, or $300 off $2,999+ plus choose 5 free ergonomic accessories (up to $275 value).",
        affiliate_url: "/go/upliftdesk",
        is_verified: true,
        expiry_date: "2026-11-02"
      },
      {
        id: "uplift-code-3",
        code: "ROF5",
        is_auto_applied: false,
        discount: "5% OFF",
        title: "5% Off Sitewide Ergonomic Desks & Office Gear",
        description: "Enter verified coupon code ROF5 at checkout to receive 5% off standing desks, ergonomic chairs, and monitor arms.",
        affiliate_url: "/go/upliftdesk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "uplift-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "5 FREE GIFTS",
        title: "5 Free Ergonomic Accessories with Standing Desk Purchase",
        description: "Choose up to 5 free accessories (valued up to $275) automatically included during custom desk configuration at official checkout.",
        affiliate_url: "/go/upliftdesk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "uplift-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Standard US Nationwide Delivery on All Standing Desks",
        description: "Enjoy zero delivery fees calculated automatically at checkout across the lower 48 US states on all standing desks and accessories.",
        affiliate_url: "/go/upliftdesk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "uplift-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "15-YR WARRANTY",
        title: "Industry-Leading 15-Year Commercial Warranty Included Free",
        description: "Every UPLIFT V2 standing desk includes an all-inclusive 15-year warranty covering frame, motors, controller, and desktop.",
        affiliate_url: "/go/upliftdesk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "uplift-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "30-DAY TRIAL",
        title: "30-Day Risk-Free In-Office Trial & Free Returns",
        description: "Test your UPLIFT standing desk in your home or office for 30 days risk-free with prepaid return shipping.",
        affiliate_url: "/go/upliftdesk",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "uplift-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40% OFF",
        title: "Up to 40% Off Certified Open Box & Clearance Desks",
        description: "Save big on certified like-new standing desks, ergonomic seating, and monitor mounts with full 15-year warranty protection.",
        affiliate_url: "/go/upliftdesk",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 721. CHOMP SHOP (US)
  {
    id: 721,
    name: "Chomp Shop",
    slug: "chompshop",
    aliases: ["chomp-shop", "chompshop-com", "chompsaw", "chomp-saw"],
    website: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
    affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
    logo: "/logos/chompshop.png",
    country: "US",
    description: "Chomp Shop creates the award-winning ChompSaw, a kid-safe power tool designed for cutting cardboard with ease. Empowering young makers to explore hands-on creativity and 3D STEAM projects safely.",
    coupons: [
      {
        id: "chomp-code-1",
        code: "METHEWDIPPY",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% off coupon code",
        description: "Apply exclusive coupon code METHEWDIPPY at checkout to save up to 20% on your ChompSaw order and cardboard craft supplies.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-code-2",
        code: "METHEWDIPPY",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off discount code sitewide",
        description: "Use verified discount code METHEWDIPPY at checkout for an instant 10% discount on all ChompSaw maker tools and accessories.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off on bundles",
        description: "Save 15% automatically on ChompSaw tool and materials bundles. No coupon code required.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE PRINTS",
        title: "free 3d prints on your order",
        description: "Get complimentary 3D print project templates automatically added to your qualifying maker order.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free shipping",
        description: "Enjoy zero nationwide delivery fees automatically calculated on eligible domestic US orders.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "25% off - replacement parts",
        description: "Take 25% off replacement cutting blades, safety guards, and maker accessories.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off on cardboard projects",
        description: "Special 20% discount on cardboard design project packs and STEAM creator kits.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "$72 OFF",
        title: "$72 off annual - club subscribe",
        description: "Save $72 each year when you subscribe to the annual Chomp Maker Club membership.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-deal-9",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off on accessories",
        description: "Discount applied automatically on guide rails, safety mats, and craft attachments.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      },
      {
        id: "chomp-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on newsletter signup",
        description: "Sign up for the official Chompshop newsletter to unlock an instant 10% welcome discount.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-10-31"
      }
    ]
  },
  {
    id: 722,
    name: "Nuvio Recovery",
    slug: "nuvio-recovery",
    aliases: ["nuviorecovery", "nuvio-recovery-us", "nuvio"],
    website: "https://nuviorecovery.com",
    affiliate_url: "/go/nuviorecovery",
    logo: "/logos/nuvio-recovery.png",
    description: "Nuvio Recovery engineers advanced wellness and recovery equipment including red light therapy mats, cold plunge ice bath chillers, therapy masks, and targeted healing caps.",
    coupons: [
      {
        id: "nuvio-1",
        code: "METHEW50",
        is_auto_applied: true,
        discount: "$50 OFF",
        title: "15% off coupon code",
        description: "Get $50 off your order with exclusive promo code METHEW50 at checkout.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-2",
        code: "",
        is_auto_applied: true,
        discount: "65% OFF",
        title: "65% off - Prime Day Sale",
        description: "Save up to 65% on top-rated recovery equipment during the limited-time sale event.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-3",
        code: "METHEW50",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off discount code sitewide",
        description: "Unlock sitewide savings with verified coupon code METHEW50 on all wellness systems.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-4",
        code: "",
        is_auto_applied: true,
        discount: "60% OFF",
        title: "60% off recovery chiller pro",
        description: "Enjoy up to 60% off high-performance Recovery Chiller Pro systems for cold water therapy.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free shipping",
        description: "Get complimentary free shipping on your qualifying Nuvio Recovery device orders across the US.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-6",
        code: "",
        is_auto_applied: true,
        discount: "50% OFF",
        title: "50% red light therapy mat",
        description: "Save 50% on full-body red light therapy mats for deep muscle recovery and cellular repair.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-7",
        code: "",
        is_auto_applied: true,
        discount: "40% OFF",
        title: "40% off red light therapy mask",
        description: "Receive 40% discount on medical-grade LED red light therapy facial masks for skin rejuvenation.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-8",
        code: "",
        is_auto_applied: true,
        discount: "30% OFF",
        title: "30% off long recovery pod",
        description: "Take 30% off spacious long recovery pods for optimal home cold plunge and contrast therapy.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-9",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off red light therapy cap",
        description: "Get 20% off targeted red light therapy caps designed for scalp health and hair rejuvenation.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-10",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on newsletter sign-up",
        description: "Sign up for the Nuvio Recovery newsletter to get 10% off your next recovery purchase.",
        affiliate_url: "/go/nuviorecovery",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 723,
    name: "SEEQ Supply",
    slug: "seeq-supply",
    aliases: ["seeqsupply", "seeq"],
    website: "https://www.seeqsupply.com/METHEW87649",
    affiliate_url: "/go/seeq-supply",
    logo: "/logos/seeqsupply.png",
    description: "SEEQ Supply creates revolutionary clear whey protein isolate that tastes crisp, light, and refreshing like fruit juice with 20g+ protein per serving and zero milky aftertaste.",
    coupons: [
      {
        id: "seeq-1",
        code: "METHEW87649",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off your entire order sitewide",
        description: "Save an extra 10% on clear whey protein isolate tubs and starter packs with verified coupon code METHEW87649.",
        affiliate_url: "/go/seeq-supply",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFT",
        title: "Free shaker bottle on qualifying orders",
        description: "Get a free custom SEEQ shaker bottle automatically added at checkout with qualifying orders over $35.",
        affiliate_url: "/go/seeq-supply",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-3",
        code: "METHEW87649",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off multi-tub clear whey bundles",
        description: "Stack savings on 2-tub and 3-tub clear whey isolate variety packs.",
        affiliate_url: "/go/seeq-supply",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free US shipping on orders over $75",
        description: "Get free fast tracked standard shipping across the United States on orders of $75 or more.",
        affiliate_url: "/go/seeq-supply",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-5",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off with subscribe & save",
        description: "Save 20% on every recurring shipment with flexible delivery intervals and no long-term commitment.",
        affiliate_url: "/go/seeq-supply",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-6",
        code: "METHEW87649",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off single-serve stick packs",
        description: "Save 10% on convenient travel-ready clear protein isolate single serve stick packs.",
        affiliate_url: "/go/seeq-supply",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-7",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off student & military discount",
        description: "Verified active military, first responders, and students unlock 10% off their purchases.",
        affiliate_url: "/go/seeq-supply",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-8",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off newsletter welcome discount",
        description: "Subscribe to the official SEEQ email community for an instant 10% coupon.",
        affiliate_url: "/go/seeq-supply",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 724,
    name: "Nushape",
    slug: "nushape",
    aliases: ["nushape-pt", "nushape-red-light", "nushape-therapy"],
    website: "https://www.nushape.com/METHEW88461",
    affiliate_url: "/go/nushape",
    logo: "/logos/nushape.png",
    description: "Nushape designs clinical-grade red light therapy and photobiomodulation devices, including the patented Red Light Therapy Belt and targeted phototherapy wraps for body contouring and cellular recovery.",
    coupons: [
      {
        id: "nushape-1",
        code: "METHEW88461",
        is_auto_applied: true,
        discount: "$50 OFF",
        title: "$50 off clinical red light therapy wrap",
        description: "Save $50 on patented phototherapy wraps and body contouring systems with verified code METHEW88461.",
        affiliate_url: "/go/nushape",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-2",
        code: "METHEW88461",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off sitewide discount code",
        description: "Enjoy 10% savings across all medical-grade LED red light therapy devices at checkout.",
        affiliate_url: "/go/nushape",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $100 OFF",
        title: "Up to $100 off red light therapy bundles",
        description: "Save up to $100 when purchasing complete clinical photobiomodulation bundle packages.",
        affiliate_url: "/go/nushape",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked courier shipping",
        description: "All Nushape therapy devices include complimentary tracked delivery to the US and worldwide.",
        affiliate_url: "/go/nushape",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-5",
        code: "METHEW88461",
        is_auto_applied: true,
        discount: "$70 OFF",
        title: "$70 off phototherapy pain relief belt",
        description: "Get $70 off targeted near-infrared and 660nm red light relief wrap devices.",
        affiliate_url: "/go/nushape",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-6",
        code: "",
        is_auto_applied: true,
        discount: "1-YEAR WARRANTY",
        title: "100% Free 1-year manufacturer warranty",
        description: "Every Nushape system includes full 1-year coverage and a 14-day clinical trial guarantee.",
        affiliate_url: "/go/nushape",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-7",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off practitioner & clinic orders",
        description: "Save 15% on multi-unit professional clinic and wellness studio packages.",
        affiliate_url: "/go/nushape",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-8",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on email newsletter sign-up",
        description: "Subscribe to Nushape clinical insights and get an instant 10% discount on your initial order.",
        affiliate_url: "/go/nushape",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 725,
    name: "SkinnyFit",
    slug: "skinnyfit",
    aliases: ["skinny-fit", "skinnyfit-tea", "skinnyfit-collagen"],
    website: "https://www.skinnyfit.com/METHEW18019",
    affiliate_url: "/go/skinnyfit",
    logo: "/logos/skinnyfit.png",
    description: "SkinnyFit produces top-rated Super Youth multi-collagen peptides, detox cleansing teas, and beauty superfoods formulated for vibrant skin, joints, and gut health.",
    coupons: [
      {
        id: "skinny-1",
        code: "METHEW18019",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off sitewide discount code",
        description: "Save 15% on Super Youth multi-collagen and beauty nutrition with verified promo code METHEW18019.",
        affiliate_url: "/go/skinnyfit",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40% OFF",
        title: "Up to 40% off multi-collagen bundles",
        description: "Save up to 40% when purchasing 3-month or 6-month Super Youth collagen bundles.",
        affiliate_url: "/go/skinnyfit",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-3",
        code: "METHEW18019",
        is_auto_applied: true,
        discount: "$10 OFF",
        title: "$10 off detox wellness tea 28-day cleanse",
        description: "Take $10 off SkinnyFit Detox and ZzzTox cleansing tea blends with code METHEW18019.",
        affiliate_url: "/go/skinnyfit",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFT",
        title: "Free shaker bottle & detox guide on bundles",
        description: "Receive a free SkinnyFit glass bottle, shaker, and nutrition plan with select bundle orders.",
        affiliate_url: "/go/skinnyfit",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free US shipping on all subscription orders",
        description: "Enjoy zero delivery fees and automatic monthly savings with flexible subscription plans.",
        affiliate_url: "/go/skinnyfit",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-6",
        code: "METHEW18019",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off beauty juice & green superfoods",
        description: "Save 20% on Skinny Greens and Beauty Juice superfood blends at checkout.",
        affiliate_url: "/go/skinnyfit",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-7",
        code: "",
        is_auto_applied: true,
        discount: "90-DAY GUARANTEE",
        title: "90-Day 100% money-back guarantee",
        description: "Experience risk-free shopping with SkinnyFit's industry-leading 90-day satisfaction guarantee.",
        affiliate_url: "/go/skinnyfit",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-8",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off first order with newsletter",
        description: "Join the SkinnyFit community newsletter to unlock an immediate 10% welcome discount.",
        affiliate_url: "/go/skinnyfit",
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
