import { Store, Coupon, StoreProduct } from "../components/CouponCard";
import { getLogoUrl } from "./fallbackData";

export interface RegistryCoupon {
  id: string;
  code: string; // empty string for direct auto-applied deals
  discount: string;
  title: string;
  description: string;
  is_verified: boolean;
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
    logo: "/logos/thedrmlab.png",
    website: "https://www.thedrmlab.com/methewdippy",
    affiliate_url: "https://www.thedrmlab.com/methewdippy",
    country: "US",
    description: "Advanced at-home clinical micro-infusion treatments for acne scars, enlarged pores, and skin rejuvenation.",
    products: [
      {
        id: "drm-prod-1",
        name: "THE DRM LAB™ Micro-Infusion System",
        badge: "Best Seller • 0.5mm Needles",
        discount: "10% OFF with METHEW",
        description: "Clinical at-home micro-infusion device designed to deliver active serums directly into the skin barrier for reduced pore size and smoother texture.",
        image: "/images/thedrmlab/micro-infusion-system.webp",
        url: "https://www.thedrmlab.com/methewdippy"
      },
      {
        id: "drm-prod-2",
        name: "THE DRM LAB™ PDRN Regenerative Serum",
        badge: "Medical Formula • Salmon DNA",
        discount: "CLINICAL GRADE",
        description: "Pure medical-grade PDRN active regenerative serum formulated to boost cellular repair, stimulate collagen synthesis, and smooth deep acne scars.",
        image: "/images/thedrmlab/pdrn-treatment.webp",
        url: "https://www.thedrmlab.com/methewdippy"
      },
      {
        id: "drm-prod-3",
        name: "Clinical Trial Results: Acne Scars & Pore Minimization",
        badge: "12-Week Study • 94% Success",
        discount: "BEFORE & AFTER",
        description: "Documented patient transformation demonstrating dramatic reduction in acne scars and visible pore tightening after 3 clinical micro-infusion sessions.",
        image: "/images/thedrmlab/clinical-results-1.webp",
        url: "https://www.thedrmlab.com/methewdippy"
      },
      {
        id: "drm-prod-4",
        name: "Clinical Trial Results: Fine Lines & Skin Elasticity",
        badge: "Dermatologist Tested",
        discount: "PROVEN RESULTS",
        description: "Visible restoration of skin firmness, reduction of forehead and smile lines, and deep dermal hydration.",
        image: "/images/thedrmlab/clinical-results-2.webp",
        url: "https://www.thedrmlab.com/methewdippy"
      }
    ],
    coupons: [
      {
        id: "drm-deal-1",
        code: "METHEW",
        discount: "10% OFF",
        title: "10% off your entire clinical skincare order sitewide",
        description: "Save 10% on PDRN Advanced Infusion Treatment and clinical skincare with verified coupon code METHEW.",
        image: "/images/thedrmlab/micro-infusion-system.webp",
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
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-2",
        code: "",
        discount: "FROM £18",
        title: "Fresh postal bouquets from £18 with 7-day freshness guarantee",
        description: "Hand-arranged celebration flowers and seasonal postal stems direct through the letterbox.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-3",
        code: "",
        discount: "FREE CARD",
        title: "Free personalized gift message card with every floral order",
        description: "Every postal flower bouquet includes a complimentary personalized gift message card.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-4",
        code: "",
        discount: "FRESH BLOOMS",
        title: "Special hand-tied birthday & anniversary postal flower gifts",
        description: "Freshly picked carnations, freesia, and luxury postal roses delivered safely across the UK.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-5",
        code: "",
        discount: "LETTERBOX",
        title: "Guaranteed letterbox delivery - recipient does not need to be home",
        description: "Specially packaged postal boxes slip easily through standard UK letterboxes to stay fresh.",
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

  // 4. TRANSPARENT LABS (US Market)
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
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-2",
        code: "METHEWDIPPY",
        discount: "5% OFF",
        title: "5% off 12V 100Ah / 24V deep-cycle trolling motor & RV batteries",
        description: "Get 5% instant discount on deep-cycle lithium marine and RV batteries with verified code METHEWDIPPY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-3",
        code: "METHEWDIPPY",
        discount: "5% OFF",
        title: "5% off off-grid solar panels, inverters & charge controllers",
        description: "Apply 5% discount on complete off-grid solar power systems with code METHEWDIPPY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-4",
        code: "METHEWDIPPY",
        discount: "EXTRA 5% OFF",
        title: "Extra 5% off large capacity battery bank orders",
        description: "Stack an extra 5% savings on all high-capacity lithium battery bank orders using code METHEWDIPPY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-5",
        code: "",
        discount: "UP TO 35%",
        title: "Up to 35% off weekly flash sales on LiFePO4 power systems",
        description: "Save up to 35% on lightweight waterproof trolling motor and RV marine lithium batteries.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-6",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US doorstep delivery on all battery orders",
        description: "Enjoy 100% free tracked US doorstep delivery with 10-year warranty on all DC House power systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 12. IM8 HEALTH (David Beckham Daily Ultimate Longevity & Nutrition)
  {
    id: 633,
    name: "IM8 Health",
    slug: "im8health",
    aliases: ["im8-health", "im8", "im8health-us", "im8-health-us"],
    logo: "/logos/im8health.png",
    website: "https://www.im8health.com/METHEW29111",
    affiliate_url: "https://www.im8health.com/METHEW29111",
    country: "US",
    description: "Daily all-in-one ultimate longevity nutrition and essential multivitamin powder founded by David Beckham.",
    coupons: [
      {
        id: "im8-deal-1",
        code: "METHEW29111",
        discount: "20% OFF",
        title: "20% off exclusive promo code sitewide (verified working)",
        description: "Save 20% on Daily Ultimate Essentials and Longevity supplements with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-2",
        code: "METHEW29111",
        discount: "30% OFF",
        title: "30% off Welcome Kit + 5 free travel sachets + shaker cup",
        description: "Get 30% discount on the complete IM8 Welcome Starter Kit with exclusive code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-3",
        code: "METHEW29111",
        discount: "15% OFF",
        title: "15% off first order discount code on all longevity powders",
        description: "Apply 15% instant discount across all single and multi-pack nutrition orders with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-4",
        code: "METHEW29111",
        discount: "30% OFF",
        title: "30% off Daily Ultimate Essentials Pro 90-day subscription",
        description: "Unlock 30% recurring savings on the 90-day supply bundle using code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-5",
        code: "METHEW29111",
        discount: "EXTRA 20% OFF",
        title: "Extra 20% off Daily Ultimate Longevity monthly subscription",
        description: "Stack an extra 20% off on all monthly recurring wellness subscriptions with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-6",
        code: "METHEW29111",
        discount: "$208/MO STACK",
        title: "The Beckham Stack Bundle starting from just $208/mo",
        description: "Get the complete David Beckham Longevity Stack at special promotional pricing with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-7",
        code: "",
        discount: "FREE GIFTS",
        title: "Free signature shaker + travel tin with any starter kit",
        description: "Receive a free premium shaker bottle and signature travel tin automatically on starter orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-8",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US doorstep delivery on all orders",
        description: "Enjoy 100% free tracked US doorstep delivery on all starter kits and supplement subscriptions.",
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
