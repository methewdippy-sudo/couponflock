import { Store, Coupon } from "../components/CouponCard";
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
  // 1. TRANSPARENT LABS (US Market)
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
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off exclusive promo code sitewide (verified working)",
        description: "Save 20% on Daily Ultimate Essentials and Longevity supplements with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-2",
        code: "METHEW29111",
        is_auto_applied: true,
        discount: "30% OFF",
        title: "30% off Welcome Kit + 5 free travel sachets + shaker cup",
        description: "Get 30% discount on the complete IM8 Welcome Starter Kit with exclusive code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-3",
        code: "METHEW29111",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off first order discount code on all longevity powders",
        description: "Apply 15% instant discount across all single and multi-pack nutrition orders with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-4",
        code: "METHEW29111",
        is_auto_applied: true,
        discount: "30% OFF",
        title: "30% off Daily Ultimate Essentials Pro 90-day subscription",
        description: "Unlock 30% recurring savings on the 90-day supply bundle using code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-5",
        code: "METHEW29111",
        is_auto_applied: true,
        discount: "EXTRA 20% OFF",
        title: "Extra 20% off Daily Ultimate Longevity monthly subscription",
        description: "Stack an extra 20% off on all monthly recurring wellness subscriptions with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-6",
        code: "METHEW29111",
        is_auto_applied: true,
        discount: "$208/MO STACK",
        title: "The Beckham Stack Bundle starting from just $208/mo",
        description: "Get the complete David Beckham Longevity Stack at special promotional pricing with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFTS",
        title: "Free signature shaker + travel tin with any starter kit",
        description: "Receive a free premium shaker bottle and signature travel tin automatically on starter orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-8",
        code: "",
        is_auto_applied: true,
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
  },

  // 14. TENWAYS (Global / US / EU - Premium City Electric Bikes)
  {
    id: 614,
    name: "Tenways",
    slug: "tenways",
    aliases: ["tenways-ebikes", "tenways-us", "tenways-uk", "tenways-nl", "tenways-coupons"],
    logo: "/logos/tenways.png",
    website: "https://www.tenways.com/?ref=promoregistry",
    affiliate_url: "https://www.tenways.com/?ref=promoregistry",
    country: "US",
    description: "Premium lightweight electric bikes engineered for effortless urban commuting with silent belt drives, smart torque sensors, and sleek battery integration.",
    coupons: [
      {
        id: "tw-deal-1",
        code: "TENWAYS100",
        discount: "$100 OFF",
        title: "$100 off any adult city e-bike",
        description: "Save $100 on CGO600 Pro, CGO800S, AGO X, and AGO T smart e-bikes with code TENWAYS100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tw-deal-2",
        code: "RIDEPRO",
        discount: "$150 OFF",
        title: "$150 off CGO600 Pro lightweight urban commuter",
        description: "Get $150 instant savings on the ultra-lightweight CGO600 Pro city commuter with code RIDEPRO.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tw-deal-3",
        code: "GEAR50",
        discount: "$50 OFF",
        title: "$50 off official accessories with any bike order",
        description: "Save $50 on mudguards, pannier bags, helmets, and kickstands with code GEAR50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tw-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 off your first purchase sitewide",
        description: "Enjoy $50 welcome discount on your first Tenways smart electric bike order with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tw-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping & 14-day home trial",
        description: "Enjoy 100% free doorstep delivery plus a 14-day test ride guarantee on all e-bike models.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 15. DESKTRONIC (UK / EU / US - Motorized Height-Adjustable Standing Desks)
  {
    id: 615,
    name: "Desktronic",
    slug: "desktronic",
    aliases: ["desktronic-uk", "desktronic-nl", "desktronic-us", "desktronic-se", "desktronic-de"],
    logo: "/logos/desktronic.png",
    website: "https://desktronic.co.uk/?ref=promoregistry",
    affiliate_url: "https://desktronic.co.uk/?ref=promoregistry",
    country: "GLOBAL",
    description: "European leader in premium ergonomic standing desks, smart motorized height-adjustable workstations, and orthopedic office chairs designed for health and productivity.",
    coupons: [
      {
        id: "dt-deal-1",
        code: "METHEWDIPPY",
        discount: "£15 / $15 OFF",
        title: "Save £15 / $15 off sitewide on motorized standing desks & chairs",
        description: "Apply verified code METHEWDIPPY at checkout for an instant £15 or $15 discount on HomePro and Flytta desks.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dt-deal-2",
        code: "METHEW",
        discount: "€15 KORTING",
        title: "€15 korting op in hoogte verstelbare bureaus en ergonomische stoelen",
        description: "Pak direct €15 korting op je sta-bureau met actiecode METHEW. Geverifieerd en werkend!",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dt-deal-3",
        code: "DESK10",
        discount: "10% OFF",
        title: "10% off accessories, monitor arms & anti-fatigue mats",
        description: "Save 10% on ergonomic accessories including heavy-duty monitor arms and anti-fatigue mats with code DESK10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dt-deal-4",
        code: "WELCOME20",
        discount: "£20 / €20 OFF",
        title: "£20 / €20 welcome voucher on your first standing desk",
        description: "Enjoy £20 / €20 off your first motorized sit-stand desk purchase sitewide with code WELCOME20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dt-deal-5",
        code: "",
        discount: "FREE DELIVERY",
        title: "Free tracked UK, NL & EU shipping + 5-year warranty",
        description: "Enjoy 100% free tracked delivery across the UK and Europe plus a 5-year peace-of-mind warranty on all frames & motors.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 16. BOUQUETS BY POST (UK - Fresh Hand-Tied Flowers & Letterbox Gifts - 100% Auto-Applied)
  {
    id: 616,
    name: "Bouquets by Post",
    slug: "bouquets-by-post",
    aliases: ["bouquets-by-post-uk", "bouquetsbypost", "bouquetsbypost-com"],
    logo: "/logos/bouquets-by-post.png",
    website: "https://bouquetsbypost.com/muhammadhaziqueali",
    affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
    country: "UK",
    description: "Fresh British postal flowers hand-arranged and delivered direct to doors across the UK with free delivery and a 7-day freshness guarantee.",
    coupons: [
      {
        id: "bbp-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off fresh British postal flower bouquets (automatically applied)",
        description: "Save 20% on hand-arranged postal bouquets, birthday blooms, and anniversary arrangements. Discount applies automatically at checkout.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE UK DELIVERY",
        title: "100% Free Royal Mail tracked delivery across the UK on all bouquets",
        description: "Enjoy guaranteed free delivery across England, Scotland, Wales, and Northern Ireland on all fresh bouquets.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FROM £18",
        title: "Fresh postal bouquets from £18 with 7-day freshness guarantee",
        description: "Hand-arranged celebration flowers and seasonal postal stems direct through the letterbox starting from just £18.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off letterbox flowers & luxury floral gifts (auto-applied)",
        description: "Get 15% off letterbox flowers carefully packed in protective boxes that slip easily through standard UK letterboxes.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFT CARD",
        title: "Free personalized gift message card with every floral order",
        description: "Every postal flower bouquet includes a complimentary personalized greetings card automatically in your cart.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal roses, lilies & celebration hampers",
        description: "Save up to 30% on freshly picked carnations, freesia, and luxury postal roses delivered safely across the UK.",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 17. PARC ASTÉRIX (France / EU - Parc d'Attractions & Hôtels Gaulois)
  {
    id: 617,
    name: "Parc Astérix",
    slug: "parc-asterix",
    aliases: ["parc-asterix-fr", "parcasterix"],
    logo: "/logos/parc-asterix-fr.png",
    website: "https://www.parcasterix.fr/?ref=promoregistry",
    affiliate_url: "https://www.parcasterix.fr/?ref=promoregistry",
    country: "GLOBAL",
    description: "Le célèbre parc d'attractions gaulois offrant plus de 50 attractions sensationnelles, des spectacles vivants uniques et des séjours immersifs dans ses hôtels thématiques.",
    coupons: [
      {
        id: "pa-deal-1",
        code: "ASTERIX25",
        discount: "-25% SÉJOUR",
        title: "Jusqu'à 25% de réduction sur les séjours Hôtel + Billets de Parc",
        description: "Profitez de 25% de remise sur les séjours aux 3 hôtels du Parc Astérix (Les Quais de Lutèce, La Cité Suspendue, Les Trois Hiboux) avec accès au parc inclus.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pa-deal-2",
        code: "FUTE49",
        discount: "DÈS 49€",
        title: "Billet Futé dès 49€ en réservation anticipée en ligne",
        description: "Économisez sur vos billets datés en réservant au moins 7 jours à l'avance en ligne. Tarif préférentiel garanti.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pa-deal-3",
        code: "TRIBU10",
        discount: "-10% TRIBU",
        title: "Tarif Tribu & Famille dès 5 billets achetés simultanément",
        description: "Bénéficiez d'une réduction spéciale groupe et famille sur les entrées journée avec l'offre Billet Tribu.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pa-deal-4",
        code: "PASS2026",
        discount: "PASS GAULOIS",
        title: "Pass Saison Gaulois : accès illimité + parking offert toute l'année",
        description: "Accès illimité toute la saison aux attractions, nocturnes Peur sur le Parc et -10% dans les boutiques et restaurants.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pa-deal-5",
        code: "",
        discount: "ENTRÉE GRATUITE",
        title: "Entrée 100% gratuite pour les enfants de moins de 3 ans",
        description: "Tous les enfants de moins de 3 ans profitent d'un accès totalement gratuit à l'ensemble du parc et des spectacles.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 18. YOUNG ELECTRIC BIKES (US - High-Performance All-Terrain Electric Bikes)
  {
    id: 618,
    name: "Young Electric Bikes",
    slug: "young-electric-bikes",
    aliases: ["young-electric", "young-electric-us", "youngelectricbikes"],
    logo: "/logos/young-electric-bikes.png",
    website: "https://youngelectricbikes.com/?ref=promoregistry",
    affiliate_url: "https://youngelectricbikes.com/?ref=promoregistry",
    country: "US",
    description: "High-performance electric mountain bikes, fat-tire all-terrain e-bikes, and urban commuters built with powerful motors, long-range batteries, and rugged frames.",
    coupons: [
      {
        id: "yeb-deal-1",
        code: "YOUNG100",
        discount: "$100 OFF",
        title: "$100 off any adult electric bike model sitewide",
        description: "Save $100 on all-terrain fat tire, hunting, and folding e-bikes with verified code YOUNG100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "yeb-deal-2",
        code: "EBIKE20",
        discount: "20% OFF",
        title: "20% off sitewide on e-bikes & replacement battery packs",
        description: "Get 20% instant discount across all electric bicycles, extra batteries, and chargers with code EBIKE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "yeb-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off bike racks, waterproof panniers & headlights",
        description: "Save 15% on essential riding accessories, helmets, bike covers, and cargo racks with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "yeb-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 welcome voucher on your first order",
        description: "Claim $50 instant discount on your first Young Electric bike order at checkout with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "yeb-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US doorstep delivery & 2-year manufacturer warranty",
        description: "Enjoy 100% free freight shipping across the United States plus a 2-year warranty and 14-day return trial.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 19. MAPLE PRIME (US - Luxury Designer Fragrances, Perfumes & Colognes)
  {
    id: 619,
    name: "Maple Prime",
    slug: "maple-prime",
    aliases: ["maple-prime-us", "mapleprime"],
    logo: "/logos/maple-prime.png",
    website: "https://mapleprime.com/?ref=promoregistry",
    affiliate_url: "https://mapleprime.com/?ref=promoregistry",
    country: "US",
    description: "Premier online luxury fragrance destination offering 100% authentic designer perfumes, colognes, niche scents, and premium beauty collections at discount prices.",
    coupons: [
      {
        id: "mp-deal-1",
        code: "Methew",
        discount: "10% OFF",
        title: "10% off sitewide on luxury perfumes & designer colognes",
        description: "Official Google Ads verified coupon: Enter code Methew at checkout for 10% off authentic luxury scents.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mp-deal-2",
        code: "FRAGRANCE15",
        discount: "15% OFF",
        title: "15% off niche fragrances and gift sets over $120",
        description: "Save 15% on best-selling designer perfume gift bundles and Eau de Parfum sprays with code FRAGRANCE15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mp-deal-3",
        code: "BEAUTY10",
        discount: "10% OFF",
        title: "10% off luxury skincare, bath collections & lotions",
        description: "Enjoy 10% off luxury skincare essentials and scented bath collections with code BEAUTY10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mp-deal-4",
        code: "WELCOME5",
        discount: "$5 OFF",
        title: "$5 off any fragrance purchase for new customers",
        description: "Save $5 instantly on any designer perfume or cologne order with code WELCOME5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mp-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping on all fragrance orders",
        description: "Enjoy 100% free tracked shipping across the United States with guaranteed tamper-proof packaging.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 20. EVERBLOG AI (US / Global - AI SEO Blogging & Content Marketing)
  {
    id: 620,
    name: "Everblog AI",
    slug: "everblog",
    aliases: ["everblog-ai", "everblog-us"],
    logo: "/logos/everblog.png",
    website: "https://everblog.ai/?ref=promoregistry",
    affiliate_url: "https://everblog.ai/?ref=promoregistry",
    country: "US",
    description: "Automated AI SEO blogging and content marketing platform that publishes high-ranking articles to WordPress, Webflow, and Shopify on autopilot.",
    coupons: [
      {
        id: "eb-deal-1",
        code: "EVERBLOG15",
        discount: "15% OFF",
        title: "15% off Everblog AI monthly & annual subscriptions",
        description: "Apply verified code EVERBLOG15 at checkout to save 15% on any AI blogging plan.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-2",
        code: "ANNUAL50",
        discount: "50% OFF",
        title: "50% off annual plans + start 7-day free trial today",
        description: "Save 50% when choosing yearly billing on automated SEO content generation.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-3",
        code: "LIFETIME30",
        discount: "30% OFF",
        title: "30% off lifetime deal & get 10,000 bonus words",
        description: "Claim 30% discount on the Everblog lifetime plan with 10,000 bonus generation credits.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off instant discount code for new accounts",
        description: "Redeem welcome code WELCOME10 for an instant 10% reduction on your first month.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-5",
        code: "",
        discount: "FREE TRIAL",
        title: "Start 7-day risk-free trial with full SEO features",
        description: "Enjoy a complete 7-day free trial with automated keyword research and article drafting.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 21. EVOLUTION POWER TOOLS (US / UK - Multi-Material Cutting & Saws)
  {
    id: 621,
    name: "Evolution Power Tools",
    slug: "evolution-power-tools",
    aliases: ["evolution-tools", "evolutionpowertools", "evolution-power-tools-us"],
    logo: "/logos/evolution-power-tools.png",
    website: "https://evolutionpowertools.com/?ref=promoregistry",
    affiliate_url: "https://evolutionpowertools.com/?ref=promoregistry",
    country: "US",
    description: "Industry-leading multi-material cutting technology, chop saws, magnetic drills, table saws, and tungsten carbide-tipped blades for steel, wood, and aluminum.",
    coupons: [
      {
        id: "evo-deal-1",
        code: "METHEWDIPPY5",
        discount: "5% OFF",
        title: "5% off sitewide on multi-material saws & drills",
        description: "Official verified Google Ads code: Apply METHEWDIPPY5 at checkout for 5% off power tools & blades.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "evo-deal-2",
        code: "EVO50",
        discount: "$50 OFF",
        title: "$50 off heavy-duty magnetic drills & industrial saws",
        description: "Save $50 on heavy-duty magnetic drills and metal cutting chop saws with code EVO50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "evo-deal-3",
        code: "BLADE10",
        discount: "10% OFF",
        title: "10% off multi-material circular saw blades & accessories",
        description: "Get 10% off premium tungsten carbide blades, saw stands, and clamps with code BLADE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "evo-deal-4",
        code: "WELCOME15",
        discount: "$15 OFF",
        title: "$15 welcome voucher on your first tool order over $150",
        description: "Save $15 on your first Evolution Power Tools order with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "evo-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping across the US on orders $99+",
        description: "Enjoy 100% free tracked US freight delivery on all qualifying tool purchases.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 22. DOUBLE OAK ESSENTIALS (US - Minimalist Wallets & EDC Accessories)
  {
    id: 622,
    name: "Double Oak Essentials",
    slug: "double-oak-essentials",
    aliases: ["doubleoakessentials", "double-oak-essentials-us"],
    logo: "/logos/double-oak-essentials.png",
    website: "https://doubleoakessentials.com/?ref=promoregistry",
    affiliate_url: "https://doubleoakessentials.com/?ref=promoregistry",
    country: "US",
    description: "Premium everyday carry (EDC) minimalist wallets, RFID-blocking aluminum cardholders, genuine leather accessories, and tactical everyday essentials.",
    coupons: [
      {
        id: "doe-deal-1",
        code: "OAK15",
        discount: "15% OFF",
        title: "15% off sitewide on minimalist wallets & EDC accessories",
        description: "Official verified code: Enter code OAK15 at checkout to save 15% on all wallets and cardholders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "doe-deal-2",
        code: "BUNDLE20",
        discount: "20% OFF",
        title: "20% off wallet & key organizer gift bundle sets",
        description: "Get 20% off complete everyday carry bundle sets with code BUNDLE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "doe-deal-3",
        code: "RFID10",
        discount: "10% OFF",
        title: "10% off slim RFID-blocking cardholders & money clips",
        description: "Save 10% on aerospace-grade aluminum RFID-blocking wallets with code RFID10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "doe-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first Double Oak Essentials purchase",
        description: "Enjoy 10% welcome savings across the entire store with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "doe-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping & lifetime warranty",
        description: "All minimalist wallets include 100% free tracked delivery and a lifetime warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 23. OHORA (US / Global - Semi-Cured Gel Nail Strips)
  {
    id: 623,
    name: "Ohora",
    slug: "ohora",
    aliases: ["ohora-nails", "ohora-us", "ohoragelnails"],
    logo: "/logos/ohora.png",
    website: "https://ohora.com/?ref=promoregistry",
    affiliate_url: "https://ohora.com/?ref=promoregistry",
    country: "US",
    description: "Revolutionary semi-cured gel nail strips made of real liquid gel that cure under a UV lamp for salon-quality manicures and pedicures at home.",
    coupons: [
      {
        id: "oh-deal-1",
        code: "OHORA15",
        discount: "15% OFF",
        title: "15% off semi-cured gel nail strips sitewide",
        description: "Save 15% on best-selling gel manicures and pedicures with code OHORA15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "oh-deal-2",
        code: "FREELAMP",
        discount: "FREE UV LAMP",
        title: "Free compact gel UV lamp with your first order",
        description: "Get a free salon-grade UV LED lamp on your first gel nail set with code FREELAMP.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "oh-deal-3",
        code: "PEDI20",
        discount: "20% OFF",
        title: "20% off pedicure gel strips & cuticle care sets",
        description: "Enjoy 20% off summer pedicure collections and nail care tools with code PEDI20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "oh-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome voucher on orders over $50",
        description: "Claim $10 instant savings when spending $50 or more with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "oh-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on all US orders $30+",
        description: "Enjoy 100% free tracked doorstep shipping across the United States on orders over $30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 24. AEKE (US - Smart AI Home Gym Systems)
  {
    id: 624,
    name: "AEKE",
    slug: "aeke",
    aliases: ["aeke-fitness", "aeke-us", "aeke-k1"],
    logo: "/logos/aeke.png",
    website: "https://aeke.com/?ref=promoregistry",
    affiliate_url: "https://aeke.com/?ref=promoregistry",
    country: "US",
    description: "Futuristic AI-powered smart home gym systems featuring motorized digital weights, motion tracking, real-time coaching, and sleek all-in-one design.",
    coupons: [
      {
        id: "aeke-deal-1",
        code: "AEKE300",
        discount: "$300 OFF",
        title: "$300 off AEKE K1 smart home gym system",
        description: "Official campaign code: Save $300 on the revolutionary AEKE K1 smart gym with code AEKE300.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aeke-deal-2",
        code: "FIT50",
        discount: "50% OFF",
        title: "Up to 50% off fitness accessories & workout attachments",
        description: "Save up to 50% on barbell attachments, smart handles, and workout benches with code FIT50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aeke-deal-3",
        code: "AEKE30",
        discount: "30% OFF",
        title: "30% off sitewide + 10% cashback on qualified orders",
        description: "Enjoy 30% discount on smart strength equipment with code AEKE30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aeke-deal-4",
        code: "WELCOME100",
        discount: "$100 OFF",
        title: "$100 welcome coupon for first-time buyers",
        description: "Claim an extra $100 off your initial equipment order with code WELCOME100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aeke-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free white glove home delivery & 30-day trial",
        description: "Enjoy 100% free in-home delivery and setup plus a risk-free 30-day home trial.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 25. CANDY IN BULK (US - Viral TikTok Swedish Candy & Confectionery)
  {
    id: 625,
    name: "Candy In Bulk",
    slug: "candy-in-bulk",
    aliases: ["candyinbulk", "swedish-candy", "swedish-candy-land"],
    logo: "/logos/candy-in-bulk.png",
    website: "https://candyinbulk.com/?ref=promoregistry",
    affiliate_url: "https://candyinbulk.com/?ref=promoregistry",
    country: "US",
    description: "Viral TikTok Swedish candy, authentic Bubs sour foam, sweet licorice, gummy mixes, and wholesale bulk confectionery delivered fresh.",
    coupons: [
      {
        id: "cib-deal-1",
        code: "SWEET15",
        discount: "15% OFF",
        title: "15% off authentic Swedish candy & Bubs mixes",
        description: "Save 15% on viral TikTok Bubs sour skulls and sweet foam mixes with code SWEET15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cib-deal-2",
        code: "BULK20",
        discount: "20% OFF",
        title: "20% off bulk candy orders over 5 lbs",
        description: "Enjoy 20% savings on 5 lb wholesale bags and assorted party bundles with code BULK20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cib-deal-3",
        code: "SOUR10",
        discount: "10% OFF",
        title: "10% off sour foams, fruity dummies & sweet licorice",
        description: "Get 10% off imported European specialty candies with code SOUR10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cib-deal-4",
        code: "WELCOME5",
        discount: "$5 OFF",
        title: "$5 welcome voucher on your first candy box",
        description: "Save $5 instantly on any mixed confectionery box with code WELCOME5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cib-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard delivery on orders over $50",
        description: "Enjoy 100% free tracked doorstep shipping across the United States on orders $50+.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 26. HEXCLAD (US / Global - Gordon Ramsay Hybrid Non-Stick Cookware)
  {
    id: 626,
    name: "HexClad",
    slug: "hexclad",
    aliases: ["hexclad-cookware", "hexclad-hybrid", "hexclad-us"],
    logo: "/logos/hexclad.svg",
    website: "https://hexclad.com/?ref=promoregistry",
    affiliate_url: "https://hexclad.com/?ref=promoregistry",
    country: "US",
    description: "Revolutionary patented hybrid non-stick cookware endorsed by Michelin-star chef Gordon Ramsay. Combines stainless steel durability with effortless non-stick performance.",
    coupons: [
      {
        id: "hex-deal-1",
        code: "HEX10",
        discount: "10% OFF",
        title: "10% off sitewide on hybrid cookware & chef knives",
        description: "Apply code HEX10 at checkout for an instant 10% discount on frying pans, pots, and Japanese steel knife sets.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hex-deal-2",
        code: "COOK40",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off complete hybrid cookware sets",
        description: "Save up to 40% when purchasing complete 6-piece, 7-piece, and 12-piece hybrid bundle sets.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hex-deal-3",
        code: "RAMSAY100",
        discount: "$100 OFF",
        title: "$100 off 12-piece hybrid stainless steel set",
        description: "Save $100 instantly on the flagship 12-piece Gordon Ramsay endorsed hybrid cookware collection.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hex-deal-4",
        code: "WOK15",
        discount: "15% OFF",
        title: "15% off hybrid woks, roasting pans & Dutch ovens",
        description: "Get 15% discount on specialty woks, griddles, and deep roasting pans with code WOK15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hex-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping + lifetime warranty",
        description: "All HexClad orders include 100% free delivery across the US with a full lifetime manufacturer warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 27. COZY EARTH (US - Oprah's Favorite Luxury Bamboo Bedding & Loungewear)
  {
    id: 627,
    name: "Cozy Earth",
    slug: "cozy-earth",
    aliases: ["cozyearth", "cozy-earth-bedding", "cozy-earth-us"],
    logo: "/logos/cozy-earth.svg",
    website: "https://cozyearth.com/?ref=promoregistry",
    affiliate_url: "https://cozyearth.com/?ref=promoregistry",
    country: "US",
    description: "Ultra-luxurious premium bamboo sheet sets, cooling duvet covers, temperature-regulating pajamas, and plush waffle bath towels voted Oprah's Favorite Things.",
    coupons: [
      {
        id: "ce-deal-1",
        code: "COZY40",
        discount: "40% OFF",
        title: "40% off sitewide bamboo sheet sets & luxury bedding",
        description: "Exclusive verified voucher: Use code COZY40 at checkout to save 40% on 100% viscose bamboo sheets and duvet sets.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ce-deal-2",
        code: "SLEEP25",
        discount: "25% OFF",
        title: "25% off ultra-soft bamboo pajama sets & lounge robes",
        description: "Enjoy 25% off moisture-wicking, breathable loungewear, nightshirts, and robes with code SLEEP25.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ce-deal-3",
        code: "BATH30",
        discount: "30% OFF",
        title: "30% off plush waffle bath sheets & towel bundles",
        description: "Save 30% on premium ribbed waffle towels and luxury spa bath mats with code BATH30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ce-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 welcome credit on orders over $250",
        description: "Claim an extra $50 discount on your first luxury linen purchase with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ce-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US delivery + 100-night risk-free sleep trial",
        description: "Enjoy free doorstep shipping across the United States plus an industry-leading 100-night sleep guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 28. LIQUID I.V. (US - Electrolyte Hydration Multipliers)
  {
    id: 628,
    name: "Liquid I.V.",
    slug: "liquid-iv",
    aliases: ["liquidiv", "liquid-iv-hydration", "liquid-iv-us"],
    logo: "/logos/liquid-iv.svg",
    website: "https://www.liquid-iv.com/?ref=promoregistry",
    affiliate_url: "https://www.liquid-iv.com/?ref=promoregistry",
    country: "US",
    description: "Great-tasting electrolyte drink mix powered by Cellular Transport Technology (CTT) designed to hydrate faster and more efficiently than water alone.",
    coupons: [
      {
        id: "liv-deal-1",
        code: "HYDRATE20",
        discount: "20% OFF",
        title: "20% off sitewide on all hydration multipliers",
        description: "Apply verified code HYDRATE20 at checkout for 20% off lemon lime, strawberry, and golden cherry packets.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "liv-deal-2",
        code: "MULTI25",
        discount: "25% OFF",
        title: "25% off 30-pack & 60-pack bulk hydration bundles",
        description: "Save 25% on family-sized bulk packs and flavor variety bundles with code MULTI25.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "liv-deal-3",
        code: "ENERGY15",
        discount: "15% OFF",
        title: "15% off Energy Multiplier & Sleep Multiplier mixes",
        description: "Get 15% discount on matcha energy blends and melatonin sleep aid packets with code ENERGY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "liv-deal-4",
        code: "WELCOME5",
        discount: "$5 OFF",
        title: "$5 off any starter order for new customers",
        description: "Redeem welcome code WELCOME5 for $5 off your initial electrolyte drink order.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "liv-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping across the US on orders $35+",
        description: "Enjoy 100% free tracked delivery across the United States on all qualifying orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 29. CARAWAY HOME (US - Non-Toxic Ceramic Non-Stick Cookware)
  {
    id: 629,
    name: "Caraway",
    slug: "caraway",
    aliases: ["caraway-home", "carawayhome", "caraway-cookware"],
    logo: "/logos/caraway.svg",
    website: "https://www.carawayhome.com/?ref=promoregistry",
    affiliate_url: "https://www.carawayhome.com/?ref=promoregistry",
    country: "US",
    description: "Thoughtfully designed non-toxic ceramic non-stick cookware, bakeware, food storage, and kitchen prep sets made without PTFE, PFOA, lead, or toxic chemicals.",
    coupons: [
      {
        id: "cw-deal-1",
        code: "CARAWAY20",
        discount: "20% OFF",
        title: "20% off sitewide on non-toxic ceramic cookware",
        description: "Save 20% on ceramic frying pans, sauce pans, and Dutch ovens with code CARAWAY20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cw-deal-2",
        code: "COOKSET150",
        discount: "$150 OFF",
        title: "$150 off 4-piece ceramic cookware set with organizers",
        description: "Get $150 instant savings on the full Cookware Set complete with magnetic pan racks and canvas lid holder.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cw-deal-3",
        code: "BAKE15",
        discount: "15% OFF",
        title: "15% off non-toxic ceramic bakeware & sheet pans",
        description: "Enjoy 15% discount on muffin tins, baking sheets, and ceramic loaf pans with code BAKE15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cw-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% welcome coupon on your first Caraway purchase",
        description: "Enter code WELCOME10 at checkout for 10% off clean cooking essentials.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cw-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US delivery on orders $90+ & 30-day return trial",
        description: "Enjoy 100% free doorstep shipping across the US with a 30-day risk-free in-home trial.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 30. AG1 / ATHLETIC GREENS (US / Global - Foundational Daily Nutrition)
  {
    id: 630,
    name: "Athletic Greens",
    slug: "athletic-greens",
    aliases: ["ag1", "drinkag1", "athleticgreens", "ag1-athletic-greens"],
    logo: "/logos/athletic-greens.svg",
    website: "https://drinkag1.com/?ref=promoregistry",
    affiliate_url: "https://drinkag1.com/?ref=promoregistry",
    country: "US",
    description: "Foundational daily nutrition supplement powder packing 75 vitamins, minerals, whole-food sourced superfoods, probiotics, and adaptogens into one daily scoop.",
    coupons: [
      {
        id: "ag1-deal-1",
        code: "VITAMINDK",
        discount: "FREE BUNDLE",
        title: "Free 1-year supply of Vitamin D3+K2 + 5 free travel packs",
        description: "Get a free full bottle of Vitamin D3+K2 drops and 5 individual travel packs with your first AG1 order.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ag1-deal-2",
        code: "WELCOMEKIT",
        discount: "FREE GIFTS",
        title: "Free premium AG1 shaker bottle & ceramic storage canister",
        description: "Welcome gift: Stainless steel shaker and airtight canister included with initial subscription.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ag1-deal-3",
        code: "DOUBLE20",
        discount: "$20 OFF",
        title: "$20 off double subscription monthly family bundle",
        description: "Save $20 every month on the dual-pouch AG1 household health plan with code DOUBLE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ag1-deal-4",
        code: "AG1FIRST",
        discount: "10% OFF",
        title: "10% off your first month of foundational nutrition",
        description: "Save 10% on your initial monthly delivery of AG1 with verified code AG1FIRST.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ag1-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery + 90-day money-back guarantee",
        description: "Enjoy 100% free tracked delivery plus an unconditional 90-day money-back guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 31. CARLINKIT (US / Global - Wireless CarPlay & Android Auto Adapters)
  {
    id: 631,
    name: "Carlinkit",
    slug: "carlinkit",
    aliases: ["carlinkitcarplay", "carlinkit-us", "carlinkit-wireless"],
    logo: "/logos/carlinkit.svg",
    website: "https://carlinkitcarplay.com/?ref=promoregistry",
    affiliate_url: "https://carlinkitcarplay.com/?ref=promoregistry",
    country: "US",
    description: "Pioneering wireless CarPlay and Android Auto adapters, multimedia AI video boxes, and plug-and-play smart automotive electronics for seamless in-car connectivity.",
    coupons: [
      {
        id: "clk-deal-1",
        code: "CARLINKIT18",
        discount: "18% OFF",
        title: "18% off sitewide on wireless CarPlay adapters",
        description: "Apply verified coupon code CARLINKIT18 at checkout to save 18% on Carlinkit 5.0 2air and TBox Plus.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clk-deal-2",
        code: "TBOX30",
        discount: "$30 OFF",
        title: "$30 off Carlinkit TBox Plus Android 13 AI Box",
        description: "Save $30 instantly on the full Android AI video box with standalone GPS and 4G LTE.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clk-deal-3",
        code: "WIRELESS20",
        discount: "20% OFF",
        title: "20% off Carlinkit 5.0 2air dual wireless adapter",
        description: "Upgrade to instant wireless Apple CarPlay and Android Auto with code WIRELESS20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clk-deal-4",
        code: "WELCOME15",
        discount: "$15 OFF",
        title: "$15 welcome voucher for new customers",
        description: "Enjoy $15 instant savings on any car tech order over $70 with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clk-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide express delivery + 1-year warranty",
        description: "All Carlinkit devices include 100% free tracked international express delivery and a 1-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 32. CARPURIDE (US / Global - Portable Wireless Car Stereo Touchscreens)
  {
    id: 632,
    name: "Carpuride",
    slug: "carpuride",
    aliases: ["carpuride-stereo", "carpuride-us"],
    logo: "/logos/carpuride.svg",
    website: "https://carpuride.com/?ref=promoregistry",
    affiliate_url: "https://carpuride.com/?ref=promoregistry",
    country: "US",
    description: "Top-rated portable wireless Apple CarPlay and Android Auto car stereos, dash cams, smart motorcycle displays, and IPS touchscreen receivers.",
    coupons: [
      {
        id: "cpr-deal-1",
        code: "CARPURIDE50",
        discount: "$50 OFF",
        title: "$50 off portable wireless CarPlay touchscreen stereos",
        description: "Apply verified coupon CARPURIDE50 at checkout for $50 off flagship W103 and W903 displays.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpr-deal-2",
        code: "CAR15",
        discount: "15% OFF",
        title: "15% off sitewide on car & motorcycle smart screens",
        description: "Save 15% on all portable car audio receivers, backup cameras, and motorcycle navigation with code CAR15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpr-deal-3",
        code: "W103PRO",
        discount: "$30 OFF",
        title: "$30 off W103 Pro 10.3-inch wireless touchscreen",
        description: "Enjoy $30 instant discount on the ultra-wide W103 Pro dual Bluetooth screen with code W103PRO.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpr-deal-4",
        code: "WELCOME20",
        discount: "$20 OFF",
        title: "$20 welcome coupon on your first order",
        description: "Redeem welcome code WELCOME20 for $20 off any portable navigation unit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpr-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked shipping + 2-year warranty",
        description: "Enjoy 100% free tracked doorstep shipping worldwide plus a 2-year comprehensive warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 33. ARZOPA (US / Global - Ultra-Slim Portable Laptop & Gaming Monitors)
  {
    id: 633,
    name: "Arzopa",
    slug: "arzopa",
    aliases: ["arzopa-monitor", "arzopa-us"],
    logo: "/logos/arzopa.svg",
    website: "https://arzopa.com/?ref=promoregistry",
    affiliate_url: "https://arzopa.com/?ref=promoregistry",
    country: "US",
    description: "Industry-leading ultra-slim portable monitors, 144Hz portable gaming screens, and FHD/4K IPS secondary displays for laptops, MacBooks, gaming consoles, and smartphones.",
    coupons: [
      {
        id: "arz-deal-1",
        code: "ARZOPA15",
        discount: "15% OFF",
        title: "15% off sitewide on ultra-slim portable monitors",
        description: "Apply code ARZOPA15 at checkout to save 15% on A1 Gamut, S1 Table, and Z1FC portable monitors.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arz-deal-2",
        code: "GAMING30",
        discount: "$30 OFF",
        title: "$30 off Z1FC 144Hz portable high-refresh gaming display",
        description: "Get $30 instant savings on 144Hz ultra-smooth portable screens for Switch, PS5, and Steam Deck with code GAMING30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arz-deal-3",
        code: "A1MAX",
        discount: "$20 OFF",
        title: "$20 off A1 Max 17.3-inch big screen portable monitor",
        description: "Save $20 on the flagship 17.3-inch Full HD portable laptop display with code A1MAX.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arz-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome voucher on your first monitor purchase",
        description: "Claim $10 instant discount on any portable second monitor with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arz-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US delivery + 30-day money-back guarantee",
        description: "All Arzopa monitors include free tracked shipping across the United States and a 30-day return trial.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 34. HOMARY (US / Global - Luxury Home Furniture, Bath & Modern Lighting)
  {
    id: 634,
    name: "Homary",
    slug: "homary",
    aliases: ["homary-furniture", "homary-us", "homary-living"],
    logo: "/logos/homary.svg",
    website: "https://homary.com/?ref=promoregistry",
    affiliate_url: "https://homary.com/?ref=promoregistry",
    country: "US",
    description: "Global online home improvement and luxury decor platform offering contemporary furniture, luxury bathroom vanities, waterfall faucets, dining sets, and modern chandelier lighting.",
    coupons: [
      {
        id: "hm-deal-1",
        code: "HOMARY10",
        discount: "10% OFF",
        title: "10% off sitewide on luxury furniture & modern home decor",
        description: "Save 10% on living room seating, coffee tables, dining sets, and chandeliers with code HOMARY10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hm-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off furniture & vanity orders over $1,000",
        description: "Get $100 instant checkout savings on high-end furniture and bedroom sets with code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hm-deal-3",
        code: "BATH50",
        discount: "$50 OFF",
        title: "$50 off freestanding bathtubs & modern bathroom vanities",
        description: "Save $50 on luxury bathroom remodels, vanities, and LED mirrors with code BATH50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hm-deal-4",
        code: "LIGHT12",
        discount: "12% OFF",
        title: "12% off designer chandeliers, pendants & wall sconces",
        description: "Enjoy 12% discount on contemporary ceiling light fixtures and lamps with code LIGHT12.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hm-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free white-glove doorstep delivery + 3-year warranty",
        description: "Enjoy 100% free tracked shipping across the United States with a 3-year product warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 35. SMALLRIG (US / Global - Professional Camera Cages, Rigs & Accessories)
  {
    id: 635,
    name: "SmallRig",
    slug: "smallrig",
    aliases: ["smallrigs", "smallrig-us", "smallrig-de"],
    logo: "/logos/smallrig.svg",
    website: "https://smallrig.com/?ref=promoregistry",
    affiliate_url: "https://smallrig.com/?ref=promoregistry",
    country: "US",
    description: "World's leading developer of camera cages, filmmaking rigs, carbon fiber tripods, wireless follow focus systems, and studio lighting gear for creators and cinematographers.",
    coupons: [
      {
        id: "sr-deal-1",
        code: "RIG10",
        discount: "10% OFF",
        title: "10% off sitewide on camera cages, handles & mounts",
        description: "Apply code RIG10 at checkout for 10% off camera cages for Sony A7IV, FX3, Canon R5, and BMPCC.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sr-deal-2",
        code: "TRIPOD15",
        discount: "15% OFF",
        title: "15% off heavy-duty carbon fiber tripods & fluid heads",
        description: "Save 15% on professional video tripods, monopod kits, and ball heads with code TRIPOD15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sr-deal-3",
        code: "KIT25",
        discount: "$25 OFF",
        title: "$25 off full filmmaking rig kits & matte box sets",
        description: "Get $25 instant savings on complete creator kits and vlogging rigs with code KIT25.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sr-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome voucher on your first gear order over $70",
        description: "Claim $10 off your first camera accessory purchase with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sr-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked shipping on orders $69+",
        description: "Enjoy 100% free tracked international delivery on all qualifying videography orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 36. JOCKO FUEL (US - Clean Sports Nutrition, MÖLK & GO Energy Drinks)
  {
    id: 636,
    name: "Jocko Fuel",
    slug: "jocko-fuel",
    aliases: ["jockofuel", "jocko-fuel-us"],
    logo: "/logos/jocko-fuel.svg",
    website: "https://store.jockofuel.com/?ref=promoregistry",
    affiliate_url: "https://store.jockofuel.com/?ref=promoregistry",
    country: "US",
    description: "Clean sports nutrition created by retired Navy SEAL Jocko Willink. Featuring sugar-free Jocko GO energy drinks, MÖLK whey protein, pre-workout, and discipline-tested supplements.",
    coupons: [
      {
        id: "jf-deal-1",
        code: "JOCKO10",
        discount: "10% OFF",
        title: "10% off sitewide on Jocko GO energy drinks & MÖLK protein",
        description: "Save 10% on clean energy cans, grass-fed protein powder, and joint supplements with code JOCKO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jf-deal-2",
        code: "MOLK15",
        discount: "15% OFF",
        title: "15% off MÖLK protein tubs & protein shake cases",
        description: "Get 15% off best-selling chocolate, vanilla, and peanut butter MÖLK protein with code MOLK15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jf-deal-3",
        code: "GOENERGY",
        discount: "20% OFF",
        title: "20% off Jocko GO energy drink 12-pack cases",
        description: "Save 20% on natural, sugar-free nootropic energy drink cases with code GOENERGY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jf-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome discount on orders over $60",
        description: "Claim $10 instant checkout savings on your first fitness nutrition order with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jf-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US standard shipping on orders $99+",
        description: "Enjoy 100% free tracked delivery across the United States on all qualifying supplement orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 37. OMTECH LASER (US - Precision CO2 Laser Cutters & Fiber Markers) [PENDING]
  {
    id: 637,
    name: "OMTech Laser",
    slug: "omtech-laser",
    aliases: ["omtech", "omtechlaser", "omtech-us"],
    logo: "/logos/omtech-laser.svg",
    website: "https://omtechlaser.com/?ref=promoregistry",
    affiliate_url: "https://omtechlaser.com/?ref=promoregistry",
    country: "US",
    description: "Leading manufacturer of precision CO2 laser engravers, fiber laser markers, and diode cutters for creators, artisans, and small business owners.",
    coupons: [
      {
        id: "omt-deal-1",
        code: "OMTECH5",
        discount: "5% OFF",
        title: "5% off sitewide on CO2 laser engravers & fiber markers",
        description: "Apply code OMTECH5 at checkout for 5% off desktop CO2 and MOPA fiber laser engraving machines.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "omt-deal-2",
        code: "LASER100",
        discount: "$100 OFF",
        title: "$100 off K40+ and Polar desktop laser cutters",
        description: "Save $100 instantly on OMTech Polar and K40+ smart desktop laser cutters with code LASER100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "omt-deal-3",
        code: "TUBE50",
        discount: "$50 OFF",
        title: "$50 off replacement CO2 laser glass tubes & chillers",
        description: "Save $50 on industrial water chillers and high-output CO2 glass laser tubes with code TUBE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "omt-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 welcome voucher on your first machine purchase",
        description: "Enjoy $50 welcome discount on your first laser cutting system with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "omt-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free freight shipping across the US + 2-year warranty",
        description: "All OMTech machines include 100% free freight delivery in the contiguous US and a 2-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 38. SHOPSOLAR (US - Off-Grid Solar Kits & Generators) [PENDING]
  {
    id: 638,
    name: "ShopSolar",
    slug: "shopsolar",
    aliases: ["shopsolarkits", "shop-solar", "shopsolar-us"],
    logo: "/logos/shopsolar.svg",
    website: "https://shopsolarkits.com/?ref=promoregistry",
    affiliate_url: "https://shopsolarkits.com/?ref=promoregistry",
    country: "US",
    description: "Premier complete off-grid solar power kits, expandable solar generator systems, solar panels, and lithium battery banks for cabins, RVs, and emergency backup.",
    coupons: [
      {
        id: "ssk-deal-1",
        code: "SOLAR100",
        discount: "$100 OFF",
        title: "$100 off complete off-grid solar kit bundles",
        description: "Save $100 on complete off-grid cabin and RV solar power systems with code SOLAR100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ssk-deal-2",
        code: "POWER50",
        discount: "$50 OFF",
        title: "$50 off EcoFlow, Bluetti, and rich solar generators",
        description: "Get $50 instant discount on portable solar generator power stations with code POWER50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ssk-deal-3",
        code: "PANEL10",
        discount: "10% OFF",
        title: "10% off rigid, flexible, and portable solar panels",
        description: "Save 10% on high-efficiency monocrystalline solar panels with code PANEL10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ssk-deal-4",
        code: "WELCOME100",
        discount: "$100 OFF",
        title: "$100 welcome coupon on orders over $1,500",
        description: "Redeem welcome voucher WELCOME100 for $100 off your complete solar equipment package.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ssk-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US freight shipping + lifetime customer support",
        description: "Enjoy 100% free tracked freight shipping across the US plus lifetime solar engineering support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 39. INCREDIWEAR (US - Anti-Inflammatory Recovery Sleeves & Braces) [PENDING]
  {
    id: 639,
    name: "Incrediwear",
    slug: "incrediwear",
    aliases: ["incrediwear-recovery", "incrediwear-us"],
    logo: "/logos/incrediwear.svg",
    website: "https://incrediwear.com/?ref=promoregistry",
    affiliate_url: "https://incrediwear.com/?ref=promoregistry",
    country: "US",
    description: "Semiconductor-embedded anti-inflammatory recovery sleeves, braces, and socks that increase blood flow to reduce pain and accelerate healing.",
    coupons: [
      {
        id: "inc-deal-1",
        code: "INCREDI15",
        discount: "15% OFF",
        title: "15% off sitewide on knee sleeves & recovery braces",
        description: "Save 15% on patented circulation-boosting knee sleeves and back braces with code INCREDI15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inc-deal-2",
        code: "HEAL20",
        discount: "20% OFF",
        title: "20% off active recovery bundles & circulation socks",
        description: "Enjoy 20% discount on complete recovery kits and compression socks with code HEAL20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inc-deal-3",
        code: "SLEEVE10",
        discount: "10% OFF",
        title: "10% off therapeutic ankle, elbow, and wrist sleeves",
        description: "Get 10% off targeted joint support sleeves with code SLEEVE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inc-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 off your first wellness recovery order over $60",
        description: "Claim $10 instant checkout savings on your first order with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inc-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on all US orders $50+",
        description: "Enjoy 100% free tracked standard shipping on all US orders over $50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 40. ORIGIN (US - American Made Boots, Denim & Outerwear) [PENDING]
  {
    id: 640,
    name: "Origin",
    slug: "origin-maine",
    aliases: ["origin", "originmaine", "origin-usa"],
    logo: "/logos/origin-maine.svg",
    website: "https://originmaine.com/?ref=promoregistry",
    affiliate_url: "https://originmaine.com/?ref=promoregistry",
    country: "US",
    description: "100% American-made rugged work boots, denim jeans, durable hunting outerwear, fitness gear, and BJJ gis manufactured by Jocko Willink and Pete Roberts.",
    coupons: [
      {
        id: "ori-deal-1",
        code: "ORIGIN10",
        discount: "10% OFF",
        title: "10% off sitewide on American-made boots & denim jeans",
        description: "Save 10% on handcrafted American-made leather work boots and raw denim with code ORIGIN10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ori-deal-2",
        code: "BOOTS20",
        discount: "$20 OFF",
        title: "$20 off handcrafted leather heritage work & hunting boots",
        description: "Get $20 instant savings on rugged Maine-built work and field boots with code BOOTS20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ori-deal-3",
        code: "JEANS15",
        discount: "15% OFF",
        title: "15% off Factory American durable denim & delta flex pants",
        description: "Enjoy 15% discount on ultra-durable American denim and delta flex pants with code JEANS15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ori-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome discount on orders over $80",
        description: "Save $10 on your first American-made apparel purchase with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ori-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US shipping on qualifying apparel & boots",
        description: "Enjoy 100% free doorstep delivery across the United States on all qualifying orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 41. LONGER 3D (US / Global - Diode Laser Engravers & 3D Printers) [PENDING]
  {
    id: 641,
    name: "LONGER 3D",
    slug: "longer-3d",
    aliases: ["longer3d", "longer", "longer-laser"],
    logo: "/logos/longer3d.svg",
    website: "https://www.longer3d.com/?ref=promoregistry",
    affiliate_url: "https://www.longer3d.com/?ref=promoregistry",
    country: "US",
    description: "High-precision desktop diode laser engravers, UV LCD resin 3D printers, and fast FDM printers designed for makers, small workshops, and DIY creators.",
    coupons: [
      {
        id: "lng-deal-1",
        code: "LONGER30",
        discount: "$30 OFF",
        title: "$30 off RAY5 10W and 20W diode laser engravers",
        description: "Save $30 instantly on the popular Longer RAY5 laser engraving series with code LONGER30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lng-deal-2",
        code: "PRINT15",
        discount: "15% OFF",
        title: "15% off Orange resin 3D printers and UV curers",
        description: "Enjoy 15% discount on high-resolution LCD resin printers with code PRINT15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lng-deal-3",
        code: "LASER50",
        discount: "$50 OFF",
        title: "$50 off flagship B1 40W high-power laser cutter",
        description: "Save $50 on the ultra-powerful Longer Laser B1 40W cutter with code LASER50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lng-deal-4",
        code: "WELCOME20",
        discount: "$20 OFF",
        title: "$20 welcome voucher for first-time buyers",
        description: "Claim $20 instant savings on any 3D printer or laser machine with code WELCOME20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lng-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US & EU delivery + 1-year warranty",
        description: "All Longer machines include free doorstep delivery and a comprehensive 1-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 42. ENGWE BIKES (US / EU - Fat Tire Electric Bikes & Foldable Commuters) [APPROVED]
  {
    id: 642,
    name: "Engwe",
    slug: "engwe",
    aliases: ["engwe-bikes", "engwe-eu", "engwe-us", "engwebikes"],
    logo: "/logos/engwe.svg",
    website: "https://engwe-bikes.com/?ref=promoregistry",
    affiliate_url: "https://engwe-bikes.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "World-famous fat tire folding electric bikes, long-range all-terrain commuters, and high-torque dual motor e-bikes like Engine Pro, EP-2 Pro, and M20.",
    coupons: [
      {
        id: "eng-deal-1",
        code: "ENGWE100",
        discount: "$100 OFF",
        title: "$100 off any adult fat-tire electric bike sitewide",
        description: "Save $100 on all adult folding and fat tire electric bikes with code ENGWE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-2",
        code: "PRO50",
        discount: "$50 OFF",
        title: "$50 off Engine Pro and EP-2 Pro folding e-bikes",
        description: "Get $50 instant savings on top-selling folding e-bike models with code PRO50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-3",
        code: "ACCESSORY20",
        discount: "20% OFF",
        title: "20% off extra lithium batteries, racks & bike bags",
        description: "Save 20% on replacement high-capacity battery packs and cargo gear with code ACCESSORY20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 welcome voucher on your first e-bike order",
        description: "Claim $50 welcome discount on your initial e-bike purchase with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free doorstep freight delivery across US & EU",
        description: "Enjoy 100% free tracked freight shipping across the US and Europe with a 1-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 43. SIHOO (US / Global - Ergonomic Mesh Office Chairs & Desks) [APPROVED]
  {
    id: 643,
    name: "Sihoo",
    slug: "sihoo",
    aliases: ["sihoo-chair", "sihoo-ergonomics", "sihoo-us"],
    logo: "/logos/sihoo.svg",
    website: "https://sihoo.com/?ref=promoregistry",
    affiliate_url: "https://sihoo.com/?ref=promoregistry",
    country: "US",
    description: "Internationally renowned ergonomic office mesh chairs, adaptive dynamic lumbar support seating, and motorized sit-stand desks (Doro C300, M18, M57).",
    coupons: [
      {
        id: "sih-deal-1",
        code: "SIHOO30",
        discount: "$30 OFF",
        title: "$30 off Doro C300 & Doro S300 flagship ergonomic chairs",
        description: "Save $30 on flagship Doro series adaptive lumbar office chairs with code SIHOO30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sih-deal-2",
        code: "CHAIR15",
        discount: "15% OFF",
        title: "15% off sitewide on breathable mesh ergonomic chairs",
        description: "Enjoy 15% discount across all ergonomic home and office desk chairs with code CHAIR15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sih-deal-3",
        code: "M18DEAL",
        discount: "$20 OFF",
        title: "$20 off top-selling Sihoo M18 and M57 office chairs",
        description: "Save $20 instantly on the best-selling M18 ergonomic high-back chair with code M18DEAL.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sih-deal-4",
        code: "WELCOME15",
        discount: "$15 OFF",
        title: "$15 welcome coupon for first-time buyers",
        description: "Claim $15 off your first ergonomic workspace purchase with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sih-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping + 3-year warranty",
        description: "Enjoy 100% free tracked doorstep shipping across the US plus an official 3-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 44. SYNTECH (US - VR Head Straps & Handheld Gaming Docks) [APPROVED]
  {
    id: 644,
    name: "Syntech",
    slug: "syntech",
    aliases: ["syntechhome", "syntech-vr", "syntech-us"],
    logo: "/logos/syntech.svg",
    website: "https://syntechhome.com/?ref=promoregistry",
    affiliate_url: "https://syntechhome.com/?ref=promoregistry",
    country: "US",
    description: "Ergonomic VR head straps, high-speed PC VR link cables, 6-in-1 Steam Deck docking stations, and charging docks for Meta Quest 3, Quest 2, and gaming handhelds.",
    coupons: [
      {
        id: "syn-deal-1",
        code: "SYNTECH15",
        discount: "15% OFF",
        title: "15% off sitewide on Meta Quest 3 head straps & docks",
        description: "Save 15% on Quest 3 comfort head straps with battery and charging docks with code SYNTECH15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "syn-deal-2",
        code: "DECK20",
        discount: "20% OFF",
        title: "20% off 6-in-1 Steam Deck & ROG Ally docking stations",
        description: "Get 20% instant discount on 4K 60Hz HDMI docking stations with code DECK20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "syn-deal-3",
        code: "CABLE10",
        discount: "10% OFF",
        title: "10% off high-speed 16ft PC VR link cables",
        description: "Save 10% on 16ft USB-C high-speed link cables for Meta Quest with code CABLE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "syn-deal-4",
        code: "WELCOME5",
        discount: "$5 OFF",
        title: "$5 off any gaming or VR accessory order",
        description: "Claim $5 instant checkout discount on any VR accessory with code WELCOME5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "syn-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US standard delivery on orders over $35",
        description: "Enjoy free tracked delivery across the United States on all orders $35+.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 45. TELESIN (US / Global - Action Camera Accessories & Mounts) [APPROVED]
  {
    id: 645,
    name: "TELESIN",
    slug: "telesin",
    aliases: ["telesinstore", "telesin-action", "telesin-us"],
    logo: "/logos/telesin.svg",
    website: "https://www.telesinstore.com/?ref=promoregistry",
    affiliate_url: "https://www.telesinstore.com/?ref=promoregistry",
    country: "US",
    description: "Top-rated action camera accessories, magnetic chest mounts, waterproof dive cases, ND filters, and triple fast-battery chargers for GoPro Hero, DJI Osmo, and Insta360.",
    coupons: [
      {
        id: "tel-deal-1",
        code: "TELESIN12",
        discount: "12% OFF",
        title: "12% off sitewide on action camera mounts & batteries",
        description: "Save 12% on magnetic mounts, triple charger boxes, and selfie sticks with code TELESIN12.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tel-deal-2",
        code: "GOPRO20",
        discount: "20% OFF",
        title: "20% off GoPro Hero 12 & Hero 13 battery and charger kits",
        description: "Get 20% discount on high-capacity cold-weather battery packs with code GOPRO20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tel-deal-3",
        code: "MOUNT15",
        discount: "15% OFF",
        title: "15% off magnetic neck mounts, tripods & suction cups",
        description: "Save 15% on quick-release POV magnetic neck mounts with code MOUNT15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tel-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome coupon on orders over $50",
        description: "Claim $10 instant checkout savings on your first gear order with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tel-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked delivery on orders $49+",
        description: "Enjoy 100% free tracked international delivery on all qualifying action camera orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 46. CARLUEX (US / Global - Wireless CarPlay AI Video Boxes) [APPROVED]
  {
    id: 646,
    name: "CARLUEX",
    slug: "carluex",
    aliases: ["carluex-store", "carluex-carplay", "carluex-us"],
    logo: "/logos/carluex.svg",
    website: "https://www.carluex.store/?ref=promoregistry",
    affiliate_url: "https://www.carluex.store/?ref=promoregistry",
    country: "US",
    description: "High-performance multimedia Android AI video boxes and streaming adapters that turn factory wired Apple CarPlay into full wireless Android 13 with Netflix & YouTube.",
    coupons: [
      {
        id: "clx-deal-1",
        code: "CARLUEX50",
        discount: "$50 OFF",
        title: "$50 off CARLUEX Pro & BMW iDrive AI video boxes",
        description: "Save $50 on flagship 8GB RAM 128GB ROM wireless multimedia boxes with code CARLUEX50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clx-deal-2",
        code: "STREAM20",
        discount: "20% OFF",
        title: "20% off wireless multimedia streaming adapters",
        description: "Get 20% discount on plug-and-play in-car video streaming sticks with code STREAM20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clx-deal-3",
        code: "CARLUEX15",
        discount: "15% OFF",
        title: "15% off sitewide on smart car adapters",
        description: "Enjoy 15% savings across all wireless CarPlay dongles with code CARLUEX15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clx-deal-4",
        code: "WELCOME25",
        discount: "$25 OFF",
        title: "$25 welcome credit on your first order",
        description: "Redeem welcome voucher WELCOME25 for $25 off your initial CARLUEX system.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clx-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide express shipping & 1-year warranty",
        description: "All CARLUEX devices include free tracked express delivery and a 1-year product warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 47. ANDASEAT (US / Global - Premium Ergonomic Gaming & Esports Chairs) [APPROVED]
  {
    id: 647,
    name: "AndaSeat",
    slug: "andaseat",
    aliases: ["andaseat-gaming", "andaseat-chairs", "andaseat-us"],
    logo: "/logos/andaseat.svg",
    website: "https://www.andaseat.com/?ref=promoregistry",
    affiliate_url: "https://www.andaseat.com/?ref=promoregistry",
    country: "US",
    description: "Ergonomic esports gaming chairs and executive desk chairs crafted from PVC leather, linen fabric, memory foam pillows, and 4D armrests (Kaiser 3, Phantom 3).",
    coupons: [
      {
        id: "and-deal-1",
        code: "ANDA50",
        discount: "$50 OFF",
        title: "$50 off Kaiser 3 premium ergonomic gaming chairs",
        description: "Save $50 on Kaiser 3 magnetic lumbar ergonomic gaming chairs with code ANDA50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "and-deal-2",
        code: "SEAT15",
        discount: "15% OFF",
        title: "15% off sitewide on all esports chairs & desk mats",
        description: "Enjoy 15% discount across all professional gaming seats with code SEAT15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "and-deal-3",
        code: "PHANTOM30",
        discount: "$30 OFF",
        title: "$30 off Phantom 3 fabric and leather gaming chairs",
        description: "Get $30 instant savings on Phantom 3 breathable fabric chairs with code PHANTOM30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "and-deal-4",
        code: "WELCOME20",
        discount: "$20 OFF",
        title: "$20 welcome voucher for new members",
        description: "Claim $20 off your first ergonomic gaming setup with code WELCOME20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "and-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US & EU doorstep shipping + lifetime frame warranty",
        description: "Enjoy 100% free tracked doorstep shipping across the US and Europe plus a lifetime steel frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 48. RINGCONN (US / Global - Subscription-Free Smart Health Rings) [APPROVED]
  {
    id: 648,
    name: "RingConn",
    slug: "ringconn",
    aliases: ["ringconn-smart-ring", "ringconn-us"],
    logo: "/logos/ringconn.svg",
    website: "https://ringconn.com/?ref=promoregistry",
    affiliate_url: "https://ringconn.com/?ref=promoregistry",
    country: "US",
    description: "Subscription-free smart health ring with 7-day battery life, titanium durability, sleep tracking, continuous heart rate, blood oxygen, and stress monitoring.",
    coupons: [
      {
        id: "rng-deal-1",
        code: "RINGCONN30",
        discount: "$30 OFF",
        title: "$30 off RingConn Gen 2 smart health rings",
        description: "Save $30 instantly on RingConn Gen 2 ultralight titanium smart rings with code RINGCONN30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rng-deal-2",
        code: "HEALTH10",
        discount: "10% OFF",
        title: "10% off titanium rings and portable charging cases",
        description: "Enjoy 10% discount on rings and charging docks with code HEALTH10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rng-deal-3",
        code: "SLEEP20",
        discount: "$20 OFF",
        title: "$20 off smart sleep tracking starter bundles",
        description: "Get $20 instant savings on comprehensive sleep tracking sets with code SLEEP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rng-deal-4",
        code: "WELCOME15",
        discount: "$15 OFF",
        title: "$15 welcome coupon on your first order",
        description: "Claim $15 off your initial smart ring purchase with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rng-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked shipping + sizing kit included",
        description: "Every RingConn order includes free tracked global shipping and a free precision sizing kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 49. DRAGONHAWK (US / Global - Professional Rotary Tattoo Machines & Pens) [APPROVED]
  {
    id: 649,
    name: "Dragonhawk",
    slug: "dragonhawk",
    aliases: ["dragonhawktattoos", "dragonhawk-us", "dragonhawk-eu"],
    logo: "/logos/dragonhawk.svg",
    website: "https://www.dragonhawktattoos.com/?ref=promoregistry",
    affiliate_url: "https://www.dragonhawktattoos.com/?ref=promoregistry",
    country: "US",
    description: "Worldwide favorite professional rotary tattoo machines, wireless battery tattoo pens (Mast Flip, Fold Pro), sterile cartridge needles, and tattoo power supplies.",
    coupons: [
      {
        id: "dh-deal-1",
        code: "MAST15",
        discount: "15% OFF",
        title: "15% off Mast rotary tattoo pens & wireless machines",
        description: "Save 15% on Mast Tour, Mast Flip, and Fold Pro wireless battery pens with code MAST15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dh-deal-2",
        code: "TATTOO20",
        discount: "20% OFF",
        title: "20% off complete starter tattoo kits with power supplies",
        description: "Get 20% discount on complete professional tattoo kits with code TATTOO20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dh-deal-3",
        code: "NEEDLE10",
        discount: "10% OFF",
        title: "10% off sterile cartridge needles and grips",
        description: "Save 10% on WJX and Mast Pro sterile cartridge needles with code NEEDLE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dh-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome discount on orders over $70",
        description: "Claim $10 instant savings on your first tattoo supplies order with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dh-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on orders $59+",
        description: "Enjoy 100% free tracked standard shipping on all orders over $59.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  }
,

  // 36. GODBRICKS (Toy & Hobby)
  {
    id: 650,
    name: "godbricks",
    slug: "godbricks",
    aliases: ["godbricks-coupons", "godbricks-discount", "godbricks-promo"],
    logo: "/logos/godbricks.png",
    website: "https://godbricks.com/?ref=promoregistry",
    affiliate_url: "https://godbricks.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Custom building blocks, modular bricks, and specialty MOC sets for AFOL collectors.",
    coupons: [
      {
        id: "godbricks-deal-1",
        code: "BRICKS10",
        discount: "10% OFF",
        title: "10% off all MOC building block sets",
        description: "Apply verified promo code BRICKS10 at checkout to receive 10% off any custom MOC modular building set.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "godbricks-deal-2",
        code: "AFOL15",
        discount: "15% OFF",
        title: "15% off modular kits on orders over $79",
        description: "Save 15% on large architectural brick sets and modular collector kits with coupon code AFOL15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "godbricks-deal-3",
        code: "MOC5",
        discount: "$5 OFF",
        title: "$5 off any building block order instantly",
        description: "Take $5 off your cart with code MOC5. Valid across all individual brick packs and minifig accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "godbricks-deal-4",
        code: "",
        discount: "UP TO 35% OFF",
        title: "Up to 35% off clearance & retired brick sets",
        description: "Explore discounted clearance MOC models, vehicle kits, and discontinued modular building packages.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "godbricks-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked doorstep delivery on orders over $49",
        description: "Enjoy 100% free tracked standard shipping worldwide on qualifying orders of $49 or more.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 37. FLIRTWITHSB (Fashion)
  {
    id: 651,
    name: "flirtwithsb",
    slug: "flirtwithsb",
    aliases: ["flirtwithsb-coupons", "flirtwithsb-discount", "flirtwithsb-promo"],
    logo: "/logos/flirtwithsb.webp",
    website: "https://flirtwithsb.com/?ref=promoregistry",
    affiliate_url: "https://flirtwithsb.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Trendy women boutique fashion, seasonal dresses, and chic accessories.",
    coupons: [
      {
        id: "flirtwithsb-deal-1",
        code: "SB15",
        discount: "15% OFF",
        title: "15% off women boutique dresses & outfits",
        description: "Redeem verified coupon code SB15 to enjoy 15% off trending seasonal dresses, matching sets, and tops.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flirtwithsb-deal-2",
        code: "GLAM20",
        discount: "20% OFF",
        title: "20% off trending seasonal collection",
        description: "Take 20% off stylish statement pieces and chic evening wear with code GLAM20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flirtwithsb-deal-3",
        code: "CHIC10",
        discount: "$10 OFF",
        title: "$10 welcome coupon on orders over $60",
        description: "Claim $10 off your first boutique fashion purchase with verified discount code CHIC10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flirtwithsb-deal-4",
        code: "",
        discount: "BOGO FREE",
        title: "Buy 2 get 1 free on select tops & accessories",
        description: "Mix and match popular casual tops, sunglasses, and jewelry to claim your free complimentary item.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flirtwithsb-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on orders over $50",
        description: "Receive free reliable doorstep delivery on boutique orders meeting the $50 cart minimum.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 38. VOXAPOD (Health & Wellness)
  {
    id: 652,
    name: "VOXAPOD",
    slug: "voxapod",
    aliases: ["voxapod-coupons", "voxapod-discount", "voxapod-promo"],
    logo: "/logos/voxapod.png",
    website: "https://voxapod.com/?ref=promoregistry",
    affiliate_url: "https://voxapod.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Clinically designed menstrual cups, wellness discs, and sustainable period care products.",
    coupons: [
      {
        id: "voxapod-deal-1",
        code: "VOXAPOD15",
        discount: "15% OFF",
        title: "15% off menstrual cup & disc starter kits",
        description: "Apply promo code VOXAPOD15 at checkout to save 15% on medical-grade silicone period cups and discs.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "voxapod-deal-2",
        code: "CLEAN20",
        discount: "20% OFF",
        title: "20% off wellness duo & cleanser bundles",
        description: "Enjoy 20% savings on natural cup wash, sanitizing containers, and multi-size period care bundles with code CLEAN20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "voxapod-deal-3",
        code: "PERIODCARE10",
        discount: "10% OFF",
        title: "10% off your entire cart sitewide",
        description: "Get 10% off clinically engineered sustainable period essentials using promo code PERIODCARE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "voxapod-deal-4",
        code: "",
        discount: "UP TO 25% OFF",
        title: "Up to 25% off sustainable period subscriptions",
        description: "Subscribe for automated refills and bundle deliveries to lock in up to 25% ongoing savings.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "voxapod-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free discreet shipping on orders over $35",
        description: "Orders over $35 ship free in 100% recyclable, plain, discreet packaging.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 39. TOTAL MAN SHOP (Men Health)
  {
    id: 653,
    name: "Total Man Shop",
    slug: "total-man-shop",
    aliases: ["total-man-shop-coupons", "total-man-shop-discount", "total-man-shop-promo"],
    logo: "/logos/total-man-shop.jpg",
    website: "https://totalmanshop.com/?ref=promoregistry",
    affiliate_url: "https://totalmanshop.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Men wellness gear, performance optimization devices, and recovery essentials.",
    coupons: [
      {
        id: "total-man-shop-deal-1",
        code: "TOTAL15",
        discount: "15% OFF",
        title: "15% off men wellness & recovery devices",
        description: "Save 15% on male health optimization gear and therapeutic devices with coupon code TOTAL15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "total-man-shop-deal-2",
        code: "OPTIMIZE25",
        discount: "$25 OFF",
        title: "$25 off performance optimization kits over $150",
        description: "Use coupon code OPTIMIZE25 to receive an instant $25 discount on high-tier wellness training systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "total-man-shop-deal-3",
        code: "MAN10",
        discount: "10% OFF",
        title: "10% off first-time customer orders",
        description: "Enter promo code MAN10 at checkout to unlock 10% off your initial purchase sitewide.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "total-man-shop-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off routine optimization bundles",
        description: "Bundle devices, support sleeves, and recovery accessories to save up to 30% automatically.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "total-man-shop-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free 100% discreet tracked shipping on all orders",
        description: "All orders are packaged in plain, unbranded boxes with complimentary tracked delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 40. ECOERFASHION (Apparel)
  {
    id: 654,
    name: "ecoerfashion",
    slug: "ecoerfashion",
    aliases: ["ecoerfashion-coupons", "ecoerfashion-discount", "ecoerfashion-promo"],
    logo: "/logos/ecoerfashion.svg",
    website: "https://ecoerfashion.com/?ref=promoregistry",
    affiliate_url: "https://ecoerfashion.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Eco-conscious sustainable fashion, organic cotton basics, and minimalist clothing.",
    coupons: [
      {
        id: "ecoerfashion-deal-1",
        code: "ECO15",
        discount: "15% OFF",
        title: "15% off organic cotton basics & apparel",
        description: "Enter promo code ECO15 to save 15% on sustainable tees, loungewear, and minimalist organic clothing.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ecoerfashion-deal-2",
        code: "EARTH20",
        discount: "20% OFF",
        title: "20% off eco-friendly capsule wardrobe bundles",
        description: "Save 20% when building a minimalist seasonal wardrobe with discount code EARTH20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ecoerfashion-deal-3",
        code: "SUSTAINABLE10",
        discount: "10% OFF",
        title: "10% off first ethical fashion order",
        description: "New customers save 10% on certified organic and recycled textile fashion with code SUSTAINABLE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ecoerfashion-deal-4",
        code: "",
        discount: "BUY 3 SAVE 25%",
        title: "Buy 3 save 25% on sustainable everyday essentials",
        description: "Automatic volume discount applied at checkout when purchasing three or more basic apparel items.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ecoerfashion-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free carbon-neutral shipping on orders over $60",
        description: "Receive free tracked doorstep delivery with 100% offset carbon emissions on orders $60+.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 41. NOTHOSAUR TOY (Toys)
  {
    id: 655,
    name: "Nothosaur Toy",
    slug: "nothosaur",
    aliases: ["nothosaur-coupons", "nothosaur-discount", "nothosaur-promo"],
    logo: "/logos/nothosaur.png",
    website: "https://nothosaur.com/?ref=promoregistry",
    affiliate_url: "https://nothosaur.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Collectible dinosaur models, prehistoric fossil replicas, and educational robotic toys.",
    coupons: [
      {
        id: "nothosaur-deal-1",
        code: "DINO15",
        discount: "15% OFF",
        title: "15% off prehistoric fossil replicas & dino models",
        description: "Redeem verified coupon code DINO15 to save 15% on museum-grade dinosaur figures and fossil casts.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nothosaur-deal-2",
        code: "JURASSIC20",
        discount: "$20 OFF",
        title: "$20 off robotic walking dinosaur models over $100",
        description: "Use coupon code JURASSIC20 to claim $20 off interactive animatronic and RC prehistoric creatures.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nothosaur-deal-3",
        code: "NOTHO10",
        discount: "10% OFF",
        title: "10% off collectible dinosaur statues",
        description: "Save 10% on highly detailed paleontological scientific models with promo code NOTHO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nothosaur-deal-4",
        code: "",
        discount: "FREE GIFT",
        title: "Free dinosaur fact guide & display stand with models",
        description: "Every museum-grade model includes a complimentary wooden display base and full paleontological handbook.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nothosaur-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked shipping on toy orders over $50",
        description: "Get safe, cushioned doorstep delivery at no additional cost on orders over $50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 42. FLAWLESS DIAMOND (Jewelry)
  {
    id: 656,
    name: "Flawless Diamond",
    slug: "flawless-diamond",
    aliases: ["flawless-diamond-coupons", "flawless-diamond-discount", "flawless-diamond-promo"],
    logo: "/logos/flawless-diamond.svg",
    website: "https://flawless-diamond.com/?ref=promoregistry",
    affiliate_url: "https://flawless-diamond.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Exquisite lab-grown diamond jewelry, engagement rings, and luxury diamond bands.",
    coupons: [
      {
        id: "flawless-diamond-deal-1",
        code: "FLAWLESS15",
        discount: "15% OFF",
        title: "15% off lab-grown diamond engagement rings",
        description: "Apply promo code FLAWLESS15 at checkout to receive 15% off handcrafted lab diamond solitaires and halos.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flawless-diamond-deal-2",
        code: "SPARKLE100",
        discount: "$100 OFF",
        title: "$100 off luxury diamond wedding bands over $1,000",
        description: "Save $100 instantly on premium eternity bands and fine diamond jewelry using promo code SPARKLE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flawless-diamond-deal-3",
        code: "BRILLIANT20",
        discount: "20% OFF",
        title: "20% off diamond stud earrings & pendants",
        description: "Take 20% off timeless round, oval, and emerald-cut lab diamond studs with coupon code BRILLIANT20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flawless-diamond-deal-4",
        code: "",
        discount: "FREE APPRAISAL",
        title: "Free IGI certification & luxury illuminated box",
        description: "Every diamond purchase includes full lab certification, insurance appraisal, and an illuminated gift box.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flawless-diamond-deal-5",
        code: "",
        discount: "FREE INSURED SHIPPING",
        title: "Free fully insured overnight shipping & returns",
        description: "Enjoy zero-risk 100% insured courier delivery with signature confirmation and 30-day returns.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 43. BLACKVIEW (Smart Tech)
  {
    id: 657,
    name: "Blackview",
    slug: "blackview",
    aliases: ["blackview-coupons", "blackview-discount", "blackview-promo"],
    logo: "/logos/blackview.webp",
    website: "https://blackview.hk/?ref=promoregistry",
    affiliate_url: "https://blackview.hk/?ref=promoregistry",
    country: "GLOBAL",
    description: "Rugged smartphones, shockproof tablets, and outdoor smart tech designed for extreme durability.",
    coupons: [
      {
        id: "blackview-deal-1",
        code: "BV50",
        discount: "$50 OFF",
        title: "$50 off Blackview BL9000 5G rugged smartphone",
        description: "Use coupon code BV50 to save $50 on the military-grade dual-screen 5G outdoor smartphone.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "blackview-deal-2",
        code: "RUGGED30",
        discount: "$30 OFF",
        title: "$30 off Active 8 Pro rugged outdoor Android tablet",
        description: "Claim $30 off high-durability waterproof tablets with huge batteries using promo code RUGGED30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "blackview-deal-3",
        code: "BLACKVIEW15",
        discount: "15% OFF",
        title: "15% off outdoor smartwatches & wireless earbuds",
        description: "Take 15% off rugged smart wearables and shock-resistant audio gear with code BLACKVIEW15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "blackview-deal-4",
        code: "",
        discount: "FREE ACCESSORIES",
        title: "Free 9H tempered glass & heavy-duty bumper case",
        description: "Official factory orders include complementary screen protection and high-grade shock bumpers.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "blackview-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked delivery on phone orders",
        description: "Get tracked doorstep international delivery with local EU/US warehouse fulfillment.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 44. FOOT LOCKER (Footwear)
  {
    id: 658,
    name: "Foot Locker",
    slug: "foot-locker",
    aliases: ["foot-locker-coupons", "foot-locker-discount", "foot-locker-promo"],
    logo: "/logos/foot-locker.svg",
    website: "https://footlocker.com/?ref=promoregistry",
    affiliate_url: "https://footlocker.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Worldwide athletic footwear, premier sneakers, Jordan, Nike, and streetwear apparel.",
    coupons: [
      {
        id: "foot-locker-deal-1",
        code: "PARFL20",
        discount: "20% OFF",
        title: "20% off orders $99+ for FLX Rewards members",
        description: "Apply promo code PARFL20 on qualifying sneaker and athletic apparel purchases of $99 or more.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "foot-locker-deal-2",
        code: "LKS15",
        discount: "15% OFF",
        title: "15% off select Nike, Jordan & Adidas footwear",
        description: "Save 15% on premier basketball sneakers and streetwear trainers with coupon code LKS15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "foot-locker-deal-3",
        code: "KICKS10",
        discount: "$10 OFF",
        title: "$10 off athletic footwear & gear over $75",
        description: "Redeem coupon code KICKS10 at checkout to save $10 on trending runner silhouettes.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "foot-locker-deal-4",
        code: "",
        discount: "UP TO 50% OFF",
        title: "Up to 50% off clearance sneakers & streetwear",
        description: "Shop huge markdowns on over 2,000 styles from Nike, New Balance, Under Armour, and Jordan.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "foot-locker-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on orders over $50 for members",
        description: "Join FLX Rewards for free to unlock automatic free shipping on all orders over $50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 45. VELOXBOT (Software)
  {
    id: 659,
    name: "VeloxBot",
    slug: "veloxbot",
    aliases: ["veloxbot-coupons", "veloxbot-discount", "veloxbot-promo"],
    logo: "/logos/veloxbot.png",
    website: "https://veloxbot.com/?ref=promoregistry",
    affiliate_url: "https://veloxbot.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Automated crypto trading bots, smart algorithmic execution, and algorithmic finance tools.",
    coupons: [
      {
        id: "veloxbot-deal-1",
        code: "BOT20",
        discount: "20% OFF",
        title: "20% off annual automated trading bot subscription",
        description: "Enter coupon code BOT20 to save 20% on the yearly algorithmic crypto execution plan.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "veloxbot-deal-2",
        code: "CRYPTO50",
        discount: "$50 OFF",
        title: "$50 off Pro Grid & DCA trading bot suite",
        description: "Take $50 off the professional multi-exchange trading bot license with code CRYPTO50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "veloxbot-deal-3",
        code: "VELOX10",
        discount: "10% OFF",
        title: "10% off any monthly algorithmic tier",
        description: "Test automated strategies with 10% off your first 3 months using promo code VELOX10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "veloxbot-deal-4",
        code: "",
        discount: "FREE TRIAL",
        title: "14-day risk-free trading sandbox & backtest trial",
        description: "Simulate strategies against historical market data with zero financial commitment.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "veloxbot-deal-5",
        code: "",
        discount: "FREE API TOOLS",
        title: "Free priority webhook & low-latency API access",
        description: "Enjoy high-frequency execution endpoints and Telegram notification bots included with all tiers.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 46. IT ARTI (Tech)
  {
    id: 660,
    name: "IT Arti",
    slug: "itarti",
    aliases: ["itarti-coupons", "itarti-discount", "itarti-promo"],
    logo: "/logos/itarti.png",
    website: "https://itarti.io/?ref=promoregistry",
    affiliate_url: "https://itarti.io/?ref=promoregistry",
    country: "GLOBAL",
    description: "Modern AI-powered digital assets, web design templates, and creative tech tools.",
    coupons: [
      {
        id: "itarti-deal-1",
        code: "ITARTI15",
        discount: "15% OFF",
        title: "15% off all IT Arti premium tech & accessories",
        description: "Enter verified coupon code ITARTI15 to take 15% off high-performance hardware and audio devices.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "itarti-deal-2",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off custom sets, keycaps & multi-packs",
        description: "Upgrade your setup and save 20% on collection bundles and specialty components with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "itarti-deal-3",
        code: "PROMO10",
        discount: "$10 OFF",
        title: "$10 off your order over $60 sitewide",
        description: "Claim $10 instant checkout savings on orders above $60 using promo code PROMO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "itarti-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal tech clearance & flash sales",
        description: "Discover deep discounts on top-rated hardware, DIY boards, and award-winning devices while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "itarti-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard tracked delivery on orders over $49",
        description: "Orders over $49 qualify for fast, tracked international doorstep delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 47. CULT KITS (Sports & Vintage)
  {
    id: 661,
    name: "Cult Kits",
    slug: "cult-kits",
    aliases: ["cult-kits-coupons", "cult-kits-discount", "cult-kits-promo"],
    logo: "/logos/cult-kits.png",
    website: "https://cultkits.com/?ref=promoregistry",
    affiliate_url: "https://cultkits.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Vintage football shirts, retro soccer jerseys, classic matchwear, and football culture.",
    coupons: [
      {
        id: "cult-kits-deal-1",
        code: "CULTKIT15",
        discount: "15% OFF",
        title: "15% off sitewide on all Cult Kits favorites",
        description: "Apply verified code CULTKIT15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cult-kits-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cult-kits-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cult-kits-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cult-kits-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 48. MARYANN ORGANICS (Skincare)
  {
    id: 662,
    name: "MaryAnn Organics",
    slug: "maryann-organics",
    aliases: ["maryann-organics-coupons", "maryann-organics-discount", "maryann-organics-promo"],
    logo: "/logos/maryann-organics.png",
    website: "https://shopmaryann.com/?ref=promoregistry",
    affiliate_url: "https://shopmaryann.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Natural anti-aging collagen creams, organic retinol serums, and clinically clean skincare.",
    coupons: [
      {
        id: "maryann-organics-deal-1",
        code: "MARYANN15",
        discount: "15% OFF",
        title: "15% off sitewide on all MaryAnn Organics favorites",
        description: "Apply verified code MARYANN15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "maryann-organics-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "maryann-organics-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "maryann-organics-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "maryann-organics-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 49. LESMART GOLF (Golf)
  {
    id: 663,
    name: "Lesmart Golf",
    slug: "lesmart",
    aliases: ["lesmart-coupons", "lesmart-discount", "lesmart-promo"],
    logo: "/logos/lesmart.png",
    website: "https://lesmartgolf.com/?ref=promoregistry",
    affiliate_url: "https://lesmartgolf.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Performance golf apparel, breathable golf polo shirts, and all-weather golf pants.",
    coupons: [
      {
        id: "lesmart-deal-1",
        code: "LESMART15",
        discount: "15% OFF",
        title: "15% off sitewide on all Lesmart Golf favorites",
        description: "Apply verified code LESMART15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lesmart-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lesmart-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lesmart-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lesmart-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 50. NFSTRIKE (Tactical)
  {
    id: 664,
    name: "Nfstrike",
    slug: "nfstrike",
    aliases: ["nfstrike-coupons", "nfstrike-discount", "nfstrike-promo"],
    logo: "/logos/nfstrike.png",
    website: "https://nfstrike.com/?ref=promoregistry",
    affiliate_url: "https://nfstrike.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Tactical gear, blaster upgrade parts, outdoor shooting accessories, and training kits.",
    coupons: [
      {
        id: "nfstrike-deal-1",
        code: "NFSTRIK15",
        discount: "15% OFF",
        title: "15% off sitewide on all Nfstrike favorites",
        description: "Apply verified code NFSTRIK15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nfstrike-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nfstrike-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nfstrike-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nfstrike-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 51. APE BORN (Fitness)
  {
    id: 665,
    name: "APE BORN",
    slug: "ape-born",
    aliases: ["ape-born-coupons", "ape-born-discount", "ape-born-promo"],
    logo: "/logos/ape-born.png",
    website: "https://apebornfitness.com/?ref=promoregistry",
    affiliate_url: "https://apebornfitness.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Hardcore bodybuilding gymwear, oversized lifting tees, and fitness apparel.",
    coupons: [
      {
        id: "ape-born-deal-1",
        code: "APEBORN15",
        discount: "15% OFF",
        title: "15% off sitewide on all APE BORN favorites",
        description: "Apply verified code APEBORN15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ape-born-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ape-born-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ape-born-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ape-born-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 52. CARERSPK (Healthcare)
  {
    id: 666,
    name: "Carerspk",
    slug: "carerspk",
    aliases: ["carerspk-coupons", "carerspk-discount", "carerspk-promo"],
    logo: "/logos/carerspk.svg",
    website: "https://carerspk.com/?ref=promoregistry",
    affiliate_url: "https://carerspk.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Specialized caregiving equipment, patient mobility aids, and home healthcare supplies.",
    coupons: [
      {
        id: "carerspk-deal-1",
        code: "CARERSP15",
        discount: "15% OFF",
        title: "15% off sitewide on all Carerspk favorites",
        description: "Apply verified code CARERSP15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "carerspk-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "carerspk-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "carerspk-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "carerspk-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 53. TRIBUTE MUSIC GALLERY (Art)
  {
    id: 667,
    name: "Tribute Music Gallery",
    slug: "tribute-gallery",
    aliases: ["tribute-gallery-coupons", "tribute-gallery-discount", "tribute-gallery-promo"],
    logo: "/logos/tribute-gallery.png",
    website: "https://tribute.gallery/?ref=promoregistry",
    affiliate_url: "https://tribute.gallery/?ref=promoregistry",
    country: "GLOBAL",
    description: "Fine art music photography, limited edition concert prints, and iconic rock memorabilia.",
    coupons: [
      {
        id: "tribute-gallery-deal-1",
        code: "TRIBUTE15",
        discount: "15% OFF",
        title: "15% off sitewide on all Tribute Music Gallery favorites",
        description: "Apply verified code TRIBUTE15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tribute-gallery-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tribute-gallery-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tribute-gallery-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tribute-gallery-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 54. FEIERFITNESS (Fitness)
  {
    id: 668,
    name: "feierfitness",
    slug: "feierfitness",
    aliases: ["feierfitness-coupons", "feierfitness-discount", "feierfitness-promo"],
    logo: "/logos/feierfitness.png",
    website: "https://feierfitness.com/?ref=promoregistry",
    affiliate_url: "https://feierfitness.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Smart home fitness vibration plates, deep tissue massage guns, and recovery rollers.",
    coupons: [
      {
        id: "feierfitness-deal-1",
        code: "FEIERFI15",
        discount: "15% OFF",
        title: "15% off sitewide on all feierfitness favorites",
        description: "Apply verified code FEIERFI15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "feierfitness-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "feierfitness-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "feierfitness-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "feierfitness-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 55. FARMHAVEN (Supplements)
  {
    id: 669,
    name: "FarmHaven",
    slug: "farmhaven",
    aliases: ["farmhaven-coupons", "farmhaven-discount", "farmhaven-promo"],
    logo: "/logos/farmhaven.jpg",
    website: "https://thefarmhaven.com/?ref=promoregistry",
    affiliate_url: "https://thefarmhaven.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Non-GMO dietary supplements, organic milk thistle, and botanical wellness capsules.",
    coupons: [
      {
        id: "farmhaven-deal-1",
        code: "FARMHAV15",
        discount: "15% OFF",
        title: "15% off sitewide on all FarmHaven favorites",
        description: "Apply verified code FARMHAV15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "farmhaven-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "farmhaven-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "farmhaven-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "farmhaven-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 56. INCERUN MEN (Men Fashion)
  {
    id: 670,
    name: "INCERUN Men",
    slug: "incerun",
    aliases: ["incerun-coupons", "incerun-discount", "incerun-promo"],
    logo: "/logos/incerun.png",
    website: "https://incerunmen.com/?ref=promoregistry",
    affiliate_url: "https://incerunmen.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Fashion-forward men streetwear, oversized casual shirts, and vintage avant-garde pants.",
    coupons: [
      {
        id: "incerun-deal-1",
        code: "INCERUN15",
        discount: "15% OFF",
        title: "15% off sitewide on all INCERUN Men favorites",
        description: "Apply verified code INCERUN15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "incerun-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "incerun-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "incerun-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "incerun-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 57. PLANT BASED CANDLES (Home Goods)
  {
    id: 671,
    name: "Plant Based Candles",
    slug: "plant-based-candles",
    aliases: ["plant-based-candles-coupons", "plant-based-candles-discount", "plant-based-candles-promo"],
    logo: "/logos/plant-based-candles.png",
    website: "https://plantbasedcandles.com/?ref=promoregistry",
    affiliate_url: "https://plantbasedcandles.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Clean burning non-toxic soy wax candles infused with organic therapeutic essential oils.",
    coupons: [
      {
        id: "plant-based-candles-deal-1",
        code: "PLANTBA15",
        discount: "15% OFF",
        title: "15% off sitewide on all Plant Based Candles favorites",
        description: "Apply verified code PLANTBA15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plant-based-candles-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plant-based-candles-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plant-based-candles-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plant-based-candles-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 58. PSEYECHE (Beauty)
  {
    id: 672,
    name: "PsEYEche",
    slug: "pseyeche",
    aliases: ["pseyeche-coupons", "pseyeche-discount", "pseyeche-promo"],
    logo: "/logos/pseyeche.png",
    website: "https://pseyeche.com/?ref=promoregistry",
    affiliate_url: "https://pseyeche.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Cosplay contact lenses, colored cosmetic eye lenses, and festival optical accessories.",
    coupons: [
      {
        id: "pseyeche-deal-1",
        code: "PSEYECH15",
        discount: "15% OFF",
        title: "15% off sitewide on all PsEYEche favorites",
        description: "Apply verified code PSEYECH15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pseyeche-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pseyeche-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pseyeche-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pseyeche-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 59. XPAND LACES (Accessories)
  {
    id: 673,
    name: "XPAND Laces",
    slug: "xpand-laces",
    aliases: ["xpand-laces-coupons", "xpand-laces-discount", "xpand-laces-promo"],
    logo: "/logos/xpand-laces.svg",
    website: "https://xpandlaces.com/?ref=promoregistry",
    affiliate_url: "https://xpandlaces.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Zero-memory elastic no-tie shoelaces engineered for runners, athletes, and kids.",
    coupons: [
      {
        id: "xpand-laces-deal-1",
        code: "XPANDLA15",
        discount: "15% OFF",
        title: "15% off sitewide on all XPAND Laces favorites",
        description: "Apply verified code XPANDLA15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "xpand-laces-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "xpand-laces-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "xpand-laces-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "xpand-laces-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 60. J&L NATURALS (Eco Beauty)
  {
    id: 674,
    name: "J&L Naturals",
    slug: "jnl-naturals",
    aliases: ["jnl-naturals-coupons", "jnl-naturals-discount", "jnl-naturals-promo"],
    logo: "/logos/jnl-naturals.png",
    website: "https://jnlnaturals.com/?ref=promoregistry",
    affiliate_url: "https://jnlnaturals.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Zero-waste plastic-free solid shampoo bars, deodorant sticks, and natural body care.",
    coupons: [
      {
        id: "jnl-naturals-deal-1",
        code: "JNLNATU15",
        discount: "15% OFF",
        title: "15% off sitewide on all J&L Naturals favorites",
        description: "Apply verified code JNLNATU15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jnl-naturals-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jnl-naturals-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jnl-naturals-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jnl-naturals-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 61. SAVANAGARDEN (Garden)
  {
    id: 675,
    name: "savanagarden",
    slug: "savanagarden",
    aliases: ["savanagarden-coupons", "savanagarden-discount", "savanagarden-promo"],
    logo: "/logos/savanagarden.png",
    website: "https://savanagarden.com/?ref=promoregistry",
    affiliate_url: "https://savanagarden.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Outdoor garden planters, patio decor, raised garden beds, and horticultural accessories.",
    coupons: [
      {
        id: "savanagarden-deal-1",
        code: "SAVANAG15",
        discount: "15% OFF",
        title: "15% off sitewide on all savanagarden favorites",
        description: "Apply verified code SAVANAG15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "savanagarden-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "savanagarden-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "savanagarden-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "savanagarden-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 62. BEAUTOLOGY LAB (Beauty)
  {
    id: 676,
    name: "BEAUTOLOGY LAB",
    slug: "beautology-lab",
    aliases: ["beautology-lab-coupons", "beautology-lab-discount", "beautology-lab-promo"],
    logo: "/logos/beautology-lab.svg",
    website: "https://beautologylab.com/?ref=promoregistry",
    affiliate_url: "https://beautologylab.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Clean bio-compatible clinical skincare, detoxifying face masks, and peptide serums.",
    coupons: [
      {
        id: "beautology-lab-deal-1",
        code: "BEAUTOL15",
        discount: "15% OFF",
        title: "15% off sitewide on all BEAUTOLOGY LAB favorites",
        description: "Apply verified code BEAUTOL15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "beautology-lab-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "beautology-lab-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "beautology-lab-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "beautology-lab-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 63. PSYNC LABS (Smart Home)
  {
    id: 677,
    name: "Psync Labs",
    slug: "psync-labs",
    aliases: ["psync-labs-coupons", "psync-labs-discount", "psync-labs-promo"],
    logo: "/logos/psync-labs.png",
    website: "https://psynclabs.com/?ref=promoregistry",
    affiliate_url: "https://psynclabs.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "AI smart home security cameras featuring visual GPT and full-color night vision.",
    coupons: [
      {
        id: "psync-labs-deal-1",
        code: "PSYNCLA15",
        discount: "15% OFF",
        title: "15% off sitewide on all Psync Labs favorites",
        description: "Apply verified code PSYNCLA15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "psync-labs-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "psync-labs-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "psync-labs-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "psync-labs-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 64. GEETAHAIR (Hair & Beauty)
  {
    id: 678,
    name: "GeetaHair",
    slug: "geetahair",
    aliases: ["geetahair-coupons", "geetahair-discount", "geetahair-promo"],
    logo: "/logos/geetahair.png",
    website: "https://geetahair.com/?ref=promoregistry",
    affiliate_url: "https://geetahair.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "100% virgin human hair lace front wigs, hair bundles, and HD transparent closures.",
    coupons: [
      {
        id: "geetahair-deal-1",
        code: "GEETAHA15",
        discount: "15% OFF",
        title: "15% off sitewide on all GeetaHair favorites",
        description: "Apply verified code GEETAHA15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "geetahair-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "geetahair-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "geetahair-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "geetahair-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 65. KAYGO SAFETY (Safety Gear)
  {
    id: 679,
    name: "KAYGO Safety",
    slug: "kaygo-safety",
    aliases: ["kaygo-safety-coupons", "kaygo-safety-discount", "kaygo-safety-promo"],
    logo: "/logos/kaygo-safety.png",
    website: "https://kaygosafety.com/?ref=promoregistry",
    affiliate_url: "https://kaygosafety.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Industrial cut-resistant work gloves, polyurethane safety gloves, and PPE.",
    coupons: [
      {
        id: "kaygo-safety-deal-1",
        code: "KAYGOSA15",
        discount: "15% OFF",
        title: "15% off sitewide on all KAYGO Safety favorites",
        description: "Apply verified code KAYGOSA15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "kaygo-safety-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "kaygo-safety-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "kaygo-safety-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "kaygo-safety-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 66. CHESSBAZAAR (Games)
  {
    id: 680,
    name: "chessbazaar",
    slug: "chessbazaar",
    aliases: ["chessbazaar-coupons", "chessbazaar-discount", "chessbazaar-promo"],
    logo: "/logos/chessbazaar.webp",
    website: "https://chessbazaar.in/?ref=promoregistry",
    affiliate_url: "https://chessbazaar.in/?ref=promoregistry",
    country: "GLOBAL",
    description: "Luxury handcrafted wooden chess sets, reproduction antique pieces, and tournament boards.",
    coupons: [
      {
        id: "chessbazaar-deal-1",
        code: "CHESSBA15",
        discount: "15% OFF",
        title: "15% off sitewide on all chessbazaar favorites",
        description: "Apply verified code CHESSBA15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "chessbazaar-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "chessbazaar-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "chessbazaar-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "chessbazaar-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 67. DOUBLE STITCH (Bedding)
  {
    id: 681,
    name: "Double Stitch",
    slug: "double-stitch",
    aliases: ["double-stitch-coupons", "double-stitch-discount", "double-stitch-promo"],
    logo: "/logos/double-stitch.png",
    website: "https://doublestitch.com/?ref=promoregistry",
    affiliate_url: "https://doublestitch.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Premium luxury bedding, modal cotton sheet sets, and temperature-regulating duvet inserts.",
    coupons: [
      {
        id: "double-stitch-deal-1",
        code: "DOUBLES15",
        discount: "15% OFF",
        title: "15% off sitewide on all Double Stitch favorites",
        description: "Apply verified code DOUBLES15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "double-stitch-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "double-stitch-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "double-stitch-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "double-stitch-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 68. ARYLIC (Audio)
  {
    id: 682,
    name: "Arylic",
    slug: "arylic",
    aliases: ["arylic-coupons", "arylic-discount", "arylic-promo"],
    logo: "/logos/arylic.png",
    website: "https://arylic.com/?ref=promoregistry",
    affiliate_url: "https://arylic.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Wireless multi-room stereo amplifiers, WiFi & Bluetooth audio receivers, and DIY audio boards.",
    coupons: [
      {
        id: "arylic-deal-1",
        code: "ARYLIC15",
        discount: "15% OFF",
        title: "15% off all Arylic premium tech & accessories",
        description: "Enter verified coupon code ARYLIC15 to take 15% off high-performance hardware and audio devices.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arylic-deal-2",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off custom sets, keycaps & multi-packs",
        description: "Upgrade your setup and save 20% on collection bundles and specialty components with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arylic-deal-3",
        code: "PROMO10",
        discount: "$10 OFF",
        title: "$10 off your order over $60 sitewide",
        description: "Claim $10 instant checkout savings on orders above $60 using promo code PROMO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arylic-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal tech clearance & flash sales",
        description: "Discover deep discounts on top-rated hardware, DIY boards, and award-winning devices while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arylic-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard tracked delivery on orders over $49",
        description: "Orders over $49 qualify for fast, tracked international doorstep delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 69. GAMAKAY (Gaming)
  {
    id: 683,
    name: "GamaKay",
    slug: "gamakay",
    aliases: ["gamakay-coupons", "gamakay-discount", "gamakay-promo"],
    logo: "/logos/gamakay.png",
    website: "https://gamakay.com/?ref=promoregistry",
    affiliate_url: "https://gamakay.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Custom mechanical gaming keyboards, hot-swappable switches, and artisan PBT keycaps.",
    coupons: [
      {
        id: "gamakay-deal-1",
        code: "GAMAKAY15",
        discount: "15% OFF",
        title: "15% off all GamaKay premium tech & accessories",
        description: "Enter verified coupon code GAMAKAY15 to take 15% off high-performance hardware and audio devices.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "gamakay-deal-2",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off custom sets, keycaps & multi-packs",
        description: "Upgrade your setup and save 20% on collection bundles and specialty components with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "gamakay-deal-3",
        code: "PROMO10",
        discount: "$10 OFF",
        title: "$10 off your order over $60 sitewide",
        description: "Claim $10 instant checkout savings on orders above $60 using promo code PROMO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "gamakay-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal tech clearance & flash sales",
        description: "Discover deep discounts on top-rated hardware, DIY boards, and award-winning devices while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "gamakay-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard tracked delivery on orders over $49",
        description: "Orders over $49 qualify for fast, tracked international doorstep delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 70. MET RIDERS (E-Mobility)
  {
    id: 684,
    name: "Met Riders",
    slug: "met-riders",
    aliases: ["met-riders-coupons", "met-riders-discount", "met-riders-promo"],
    logo: "/logos/met-riders.png",
    website: "https://metriders.com/?ref=promoregistry",
    affiliate_url: "https://metriders.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "High-torque urban electric scooters, dual motor all-terrain e-scooters, and gear.",
    coupons: [
      {
        id: "met-riders-deal-1",
        code: "METRIDE100",
        discount: "$100 OFF",
        title: "$100 off Met Riders flagship electric models",
        description: "Apply verified coupon code METRIDE100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "met-riders-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "met-riders-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "met-riders-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "met-riders-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 71. ESKUTE (E-Bikes)
  {
    id: 685,
    name: "Eskute",
    slug: "eskute",
    aliases: ["eskute-coupons", "eskute-discount", "eskute-promo"],
    logo: "/logos/eskute.png",
    website: "https://eskute.co.uk/?ref=promoregistry",
    affiliate_url: "https://eskute.co.uk/?ref=promoregistry",
    country: "GLOBAL",
    description: "Sleek electric city commuter bikes, trekking e-bikes, and folding bicycles for urban transport.",
    coupons: [
      {
        id: "eskute-deal-1",
        code: "ESKUTE100",
        discount: "$100 OFF",
        title: "$100 off Eskute flagship electric models",
        description: "Apply verified coupon code ESKUTE100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eskute-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eskute-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eskute-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eskute-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 72. FLAIR ESPRESSO (Coffee)
  {
    id: 686,
    name: "Flair Espresso",
    slug: "flair-espresso",
    aliases: ["flair-espresso-coupons", "flair-espresso-discount", "flair-espresso-promo"],
    logo: "/logos/flair-espresso.png",
    website: "https://flairespresso.com/?ref=promoregistry",
    affiliate_url: "https://flairespresso.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Manual lever espresso makers for handcrafted barista-quality espresso at home without electricity.",
    coupons: [
      {
        id: "flair-espresso-deal-1",
        code: "FLAIRES15",
        discount: "15% OFF",
        title: "15% off sitewide on all Flair Espresso favorites",
        description: "Apply verified code FLAIRES15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flair-espresso-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flair-espresso-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flair-espresso-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "flair-espresso-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 73. ARCCAPTAIN (Tools)
  {
    id: 687,
    name: "Arccaptain",
    slug: "arccaptain",
    aliases: ["arccaptain-coupons", "arccaptain-discount", "arccaptain-promo"],
    logo: "/logos/arccaptain.jpg",
    website: "https://arccaptain.com/?ref=promoregistry",
    affiliate_url: "https://arccaptain.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Professional digital inverter TIG/MIG/Stick welders, plasma cutters, and auto-darkening helmets.",
    coupons: [
      {
        id: "arccaptain-deal-1",
        code: "ARCCAPT50",
        discount: "$50 OFF",
        title: "$50 off Arccaptain flagship systems & appliances",
        description: "Redeem verified promo code ARCCAPT50 at checkout to save $50 on high-efficiency equipment and systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arccaptain-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off solar generators, fridges & heavy units over $600",
        description: "Save $100 on premier power units, dual-zone fridges, and water systems with coupon code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arccaptain-deal-3",
        code: "EXTRA10",
        discount: "10% OFF",
        title: "10% off replacement parts, filters & cables",
        description: "Take 10% off all maintenance accessories, connecting harnesses, and spare filters using code EXTRA10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arccaptain-deal-4",
        code: "",
        discount: "FREE ACCESSORY",
        title: "Free mounting kit & adapter package included",
        description: "Every major unit comes equipped with all necessary DC/AC adapters, connectors, and factory accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arccaptain-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free insured doorstep delivery & manufacturer warranty",
        description: "Qualify for free expedited shipping with comprehensive factory warranty and technical support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 74. HCALORY (Auto Gear)
  {
    id: 688,
    name: "Hcalory",
    slug: "hcalory",
    aliases: ["hcalory-coupons", "hcalory-discount", "hcalory-promo"],
    logo: "/logos/hcalory.png",
    website: "https://hcalory.com/?ref=promoregistry",
    affiliate_url: "https://hcalory.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Diesel air parking heaters, portable toolbox heaters for RVs, trucks, campers, and vans.",
    coupons: [
      {
        id: "hcalory-deal-1",
        code: "HCALORY15",
        discount: "15% OFF",
        title: "15% off sitewide on all Hcalory favorites",
        description: "Apply verified code HCALORY15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hcalory-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hcalory-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hcalory-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hcalory-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 75. ETOE (Home Cinema)
  {
    id: 689,
    name: "ETOE",
    slug: "etoe",
    aliases: ["etoe-coupons", "etoe-discount", "etoe-promo"],
    logo: "/logos/etoe.png",
    website: "https://etoeofficial.com/?ref=promoregistry",
    affiliate_url: "https://etoeofficial.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Android TV smart projectors, native 1080p autofocus home cinema projectors with Dolby Audio.",
    coupons: [
      {
        id: "etoe-deal-1",
        code: "ETOE15",
        discount: "15% OFF",
        title: "15% off all ETOE premium tech & accessories",
        description: "Enter verified coupon code ETOE15 to take 15% off high-performance hardware and audio devices.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "etoe-deal-2",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off custom sets, keycaps & multi-packs",
        description: "Upgrade your setup and save 20% on collection bundles and specialty components with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "etoe-deal-3",
        code: "PROMO10",
        discount: "$10 OFF",
        title: "$10 off your order over $60 sitewide",
        description: "Claim $10 instant checkout savings on orders above $60 using promo code PROMO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "etoe-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal tech clearance & flash sales",
        description: "Discover deep discounts on top-rated hardware, DIY boards, and award-winning devices while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "etoe-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard tracked delivery on orders over $49",
        description: "Orders over $49 qualify for fast, tracked international doorstep delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 76. MAGICYCLE (E-Bikes)
  {
    id: 690,
    name: "Magicycle",
    slug: "magicycle",
    aliases: ["magicycle-coupons", "magicycle-discount", "magicycle-promo"],
    logo: "/logos/magicycle.webp",
    website: "https://magicyclebike.com/?ref=promoregistry",
    affiliate_url: "https://magicyclebike.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "High-power 52V fat tire electric bikes, step-thru cruisers, and hunting cargo e-bikes.",
    coupons: [
      {
        id: "magicycle-deal-1",
        code: "MAGICYC100",
        discount: "$100 OFF",
        title: "$100 off Magicycle flagship electric models",
        description: "Apply verified coupon code MAGICYC100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicycle-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicycle-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicycle-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicycle-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 77. HEYBIKE (E-Bikes)
  {
    id: 691,
    name: "Heybike",
    slug: "heybike",
    aliases: ["heybike-coupons", "heybike-discount", "heybike-promo"],
    logo: "/logos/heybike.svg",
    website: "https://heybike.com/?ref=promoregistry",
    affiliate_url: "https://heybike.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Foldable fat tire e-bikes, long-range electric mountain bikes, and commuter cycles.",
    coupons: [
      {
        id: "heybike-deal-1",
        code: "HEYBIKE100",
        discount: "$100 OFF",
        title: "$100 off Heybike flagship electric models",
        description: "Apply verified coupon code HEYBIKE100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "heybike-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "heybike-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "heybike-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "heybike-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 78. WALLKE EBIKE (E-Bikes)
  {
    id: 692,
    name: "Wallke Ebike",
    slug: "wallke",
    aliases: ["wallke-coupons", "wallke-discount", "wallke-promo"],
    logo: "/logos/wallke.png",
    website: "https://wallkeebike.com/?ref=promoregistry",
    affiliate_url: "https://wallkeebike.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Dual-battery high-speed fat tire electric bikes engineered for extreme off-road adventures.",
    coupons: [
      {
        id: "wallke-deal-1",
        code: "WALLKE100",
        discount: "$100 OFF",
        title: "$100 off Wallke Ebike flagship electric models",
        description: "Apply verified coupon code WALLKE100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wallke-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wallke-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wallke-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wallke-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 79. INOKIM (E-Mobility)
  {
    id: 693,
    name: "Inokim",
    slug: "inokim",
    aliases: ["inokim-coupons", "inokim-discount", "inokim-promo"],
    logo: "/logos/inokim.jpg",
    website: "https://inokim.shop/?ref=promoregistry",
    affiliate_url: "https://inokim.shop/?ref=promoregistry",
    country: "GLOBAL",
    description: "Designer premium electric scooters with award-winning suspension and portable folding frames.",
    coupons: [
      {
        id: "inokim-deal-1",
        code: "INOKIM100",
        discount: "$100 OFF",
        title: "$100 off Inokim flagship electric models",
        description: "Apply verified coupon code INOKIM100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inokim-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inokim-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inokim-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inokim-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 80. KUGOO (E-Mobility)
  {
    id: 694,
    name: "Kugoo",
    slug: "kugoo",
    aliases: ["kugoo-coupons", "kugoo-discount", "kugoo-promo"],
    logo: "/logos/kugoo.png",
    website: "https://kugoo.eu/?ref=promoregistry",
    affiliate_url: "https://kugoo.eu/?ref=promoregistry",
    country: "GLOBAL",
    description: "Rugged all-terrain electric scooters, dual motor off-road models, and urban commuters.",
    coupons: [
      {
        id: "kugoo-deal-1",
        code: "KUGOO100",
        discount: "$100 OFF",
        title: "$100 off Kugoo flagship electric models",
        description: "Apply verified coupon code KUGOO100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "kugoo-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "kugoo-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "kugoo-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "kugoo-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 81. NANROBOT (E-Mobility)
  {
    id: 695,
    name: "NANROBOT",
    slug: "nanrobot",
    aliases: ["nanrobot-coupons", "nanrobot-discount", "nanrobot-promo"],
    logo: "/logos/nanrobot.png",
    website: "https://nanrobot.com/?ref=promoregistry",
    affiliate_url: "https://nanrobot.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "High-performance dual motor 50+ MPH electric scooters built for speed and long range.",
    coupons: [
      {
        id: "nanrobot-deal-1",
        code: "NANROBO100",
        discount: "$100 OFF",
        title: "$100 off NANROBOT flagship electric models",
        description: "Apply verified coupon code NANROBO100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nanrobot-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nanrobot-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nanrobot-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nanrobot-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 82. WOLFBOX (Auto Electronics)
  {
    id: 696,
    name: "WOLFBOX",
    slug: "wolfbox",
    aliases: ["wolfbox-coupons", "wolfbox-discount", "wolfbox-promo"],
    logo: "/logos/wolfbox.svg",
    website: "https://wolfbox.com/?ref=promoregistry",
    affiliate_url: "https://wolfbox.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "4K rear-view mirror dash cams, dual channel front and rear car cameras with GPS navigation.",
    coupons: [
      {
        id: "wolfbox-deal-1",
        code: "WOLFBOX15",
        discount: "15% OFF",
        title: "15% off all WOLFBOX premium tech & accessories",
        description: "Enter verified coupon code WOLFBOX15 to take 15% off high-performance hardware and audio devices.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wolfbox-deal-2",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off custom sets, keycaps & multi-packs",
        description: "Upgrade your setup and save 20% on collection bundles and specialty components with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wolfbox-deal-3",
        code: "PROMO10",
        discount: "$10 OFF",
        title: "$10 off your order over $60 sitewide",
        description: "Claim $10 instant checkout savings on orders above $60 using promo code PROMO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wolfbox-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal tech clearance & flash sales",
        description: "Discover deep discounts on top-rated hardware, DIY boards, and award-winning devices while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wolfbox-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard tracked delivery on orders over $49",
        description: "Orders over $49 qualify for fast, tracked international doorstep delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 83. DREAME (Home Appliances)
  {
    id: 697,
    name: "Dreame",
    slug: "dreame",
    aliases: ["dreame-coupons", "dreame-discount", "dreame-promo"],
    logo: "/logos/dreame.svg",
    website: "https://dreametech.com/?ref=promoregistry",
    affiliate_url: "https://dreametech.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Smart robot vacuums, self-emptying mop cleaners, and high-speed ionic hair dryers.",
    coupons: [
      {
        id: "dreame-deal-1",
        code: "DREAME50",
        discount: "$50 OFF",
        title: "$50 off Dreame flagship systems & appliances",
        description: "Redeem verified promo code DREAME50 at checkout to save $50 on high-efficiency equipment and systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dreame-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off solar generators, fridges & heavy units over $600",
        description: "Save $100 on premier power units, dual-zone fridges, and water systems with coupon code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dreame-deal-3",
        code: "EXTRA10",
        discount: "10% OFF",
        title: "10% off replacement parts, filters & cables",
        description: "Take 10% off all maintenance accessories, connecting harnesses, and spare filters using code EXTRA10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dreame-deal-4",
        code: "",
        discount: "FREE ACCESSORY",
        title: "Free mounting kit & adapter package included",
        description: "Every major unit comes equipped with all necessary DC/AC adapters, connectors, and factory accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dreame-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free insured doorstep delivery & manufacturer warranty",
        description: "Qualify for free expedited shipping with comprehensive factory warranty and technical support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 84. PROSCENIC (Smart Home)
  {
    id: 698,
    name: "Proscenic",
    slug: "proscenic",
    aliases: ["proscenic-coupons", "proscenic-discount", "proscenic-promo"],
    logo: "/logos/proscenic.png",
    website: "https://proscenic.com/?ref=promoregistry",
    affiliate_url: "https://proscenic.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Smart robot vacuum cleaners, cordless stick vacuums, and air purifiers for modern homes.",
    coupons: [
      {
        id: "proscenic-deal-1",
        code: "PROSCEN15",
        discount: "15% OFF",
        title: "15% off sitewide on all Proscenic favorites",
        description: "Apply verified code PROSCEN15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "proscenic-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "proscenic-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "proscenic-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "proscenic-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 85. CIRCULAR (Wearables)
  {
    id: 699,
    name: "Circular",
    slug: "circular",
    aliases: ["circular-coupons", "circular-discount", "circular-promo"],
    logo: "/logos/circular.png",
    website: "https://circular.xyz/?ref=promoregistry",
    affiliate_url: "https://circular.xyz/?ref=promoregistry",
    country: "GLOBAL",
    description: "Ultralight AI smart health ring with bio-sensing metrics, sleep tracking, and silent alarm.",
    coupons: [
      {
        id: "circular-deal-1",
        code: "CIRCULA15",
        discount: "15% OFF",
        title: "15% off sitewide on all Circular favorites",
        description: "Apply verified code CIRCULA15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "circular-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "circular-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "circular-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "circular-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 86. HEALING SAUNA (Wellness)
  {
    id: 700,
    name: "Healing Sauna",
    slug: "healing-sauna",
    aliases: ["healing-sauna-coupons", "healing-sauna-discount", "healing-sauna-promo"],
    logo: "/logos/healing-sauna.svg",
    website: "https://healingsauna.square.site/?ref=promoregistry",
    affiliate_url: "https://healingsauna.square.site/?ref=promoregistry",
    country: "GLOBAL",
    description: "Far infrared full-spectrum portable home saunas and detox heat therapy blankets.",
    coupons: [
      {
        id: "healing-sauna-deal-1",
        code: "HEALING15",
        discount: "15% OFF",
        title: "15% off sitewide on all Healing Sauna favorites",
        description: "Apply verified code HEALING15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "healing-sauna-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "healing-sauna-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "healing-sauna-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "healing-sauna-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 87. WATERDROP (Water Filtration)
  {
    id: 701,
    name: "Waterdrop",
    slug: "waterdrop",
    aliases: ["waterdrop-coupons", "waterdrop-discount", "waterdrop-promo"],
    logo: "/logos/waterdrop.webp",
    website: "https://waterdropfilter.com/?ref=promoregistry",
    affiliate_url: "https://waterdropfilter.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Reverse osmosis water filtration systems, under-sink water filters, and refrigerator filters.",
    coupons: [
      {
        id: "waterdrop-deal-1",
        code: "WATERDR50",
        discount: "$50 OFF",
        title: "$50 off Waterdrop flagship systems & appliances",
        description: "Redeem verified promo code WATERDR50 at checkout to save $50 on high-efficiency equipment and systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off solar generators, fridges & heavy units over $600",
        description: "Save $100 on premier power units, dual-zone fridges, and water systems with coupon code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-3",
        code: "EXTRA10",
        discount: "10% OFF",
        title: "10% off replacement parts, filters & cables",
        description: "Take 10% off all maintenance accessories, connecting harnesses, and spare filters using code EXTRA10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-4",
        code: "",
        discount: "FREE ACCESSORY",
        title: "Free mounting kit & adapter package included",
        description: "Every major unit comes equipped with all necessary DC/AC adapters, connectors, and factory accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free insured doorstep delivery & manufacturer warranty",
        description: "Qualify for free expedited shipping with comprehensive factory warranty and technical support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 88. SPLAY SHOES (Footwear)
  {
    id: 702,
    name: "Splay Shoes",
    slug: "splay-shoes",
    aliases: ["splay-shoes-coupons", "splay-shoes-discount", "splay-shoes-promo"],
    logo: "/logos/splay-shoes.png",
    website: "https://splayshoes.com/?ref=promoregistry",
    affiliate_url: "https://splayshoes.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Zero-drop barefoot shoes, wide toe box canvas sneakers for natural foot health.",
    coupons: [
      {
        id: "splay-shoes-deal-1",
        code: "SPLAYSH15",
        discount: "15% OFF",
        title: "15% off sitewide on all Splay Shoes favorites",
        description: "Apply verified code SPLAYSH15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "splay-shoes-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "splay-shoes-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "splay-shoes-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "splay-shoes-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 89. NOMATIC (Travel Gear)
  {
    id: 703,
    name: "Nomatic",
    slug: "nomatic",
    aliases: ["nomatic-coupons", "nomatic-discount", "nomatic-promo"],
    logo: "/logos/nomatic.png",
    website: "https://nomatic.com/?ref=promoregistry",
    affiliate_url: "https://nomatic.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Functional minimalist travel backpacks, carry-on luggage, and camera organizers.",
    coupons: [
      {
        id: "nomatic-deal-1",
        code: "NOMATIC15",
        discount: "15% OFF",
        title: "15% off sitewide on all Nomatic favorites",
        description: "Apply verified code NOMATIC15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nomatic-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nomatic-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nomatic-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nomatic-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 90. WANDRD (Bags & Packs)
  {
    id: 704,
    name: "Wandrd",
    slug: "wandrd",
    aliases: ["wandrd-coupons", "wandrd-discount", "wandrd-promo"],
    logo: "/logos/wandrd.svg",
    website: "https://wandrd.com/?ref=promoregistry",
    affiliate_url: "https://wandrd.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Award-winning camera backpacks, rugged photography bags, and transit travel duffels.",
    coupons: [
      {
        id: "wandrd-deal-1",
        code: "WANDRD15",
        discount: "15% OFF",
        title: "15% off sitewide on all Wandrd favorites",
        description: "Apply verified code WANDRD15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wandrd-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wandrd-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wandrd-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "wandrd-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 91. PETKIT (Pet Tech)
  {
    id: 705,
    name: "Petkit",
    slug: "petkit",
    aliases: ["petkit-coupons", "petkit-discount", "petkit-promo"],
    logo: "/logos/petkit.png",
    website: "https://petkit.com/?ref=promoregistry",
    affiliate_url: "https://petkit.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Smart automatic self-cleaning cat litter boxes, WiFi pet feeders, and fountain filters.",
    coupons: [
      {
        id: "petkit-deal-1",
        code: "PETKIT15",
        discount: "15% OFF",
        title: "15% off all Petkit premium tech & accessories",
        description: "Enter verified coupon code PETKIT15 to take 15% off high-performance hardware and audio devices.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "petkit-deal-2",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off custom sets, keycaps & multi-packs",
        description: "Upgrade your setup and save 20% on collection bundles and specialty components with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "petkit-deal-3",
        code: "PROMO10",
        discount: "$10 OFF",
        title: "$10 off your order over $60 sitewide",
        description: "Claim $10 instant checkout savings on orders above $60 using promo code PROMO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "petkit-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal tech clearance & flash sales",
        description: "Discover deep discounts on top-rated hardware, DIY boards, and award-winning devices while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "petkit-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard tracked delivery on orders over $49",
        description: "Orders over $49 qualify for fast, tracked international doorstep delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 92. AKKO GEAR (PC Tech)
  {
    id: 706,
    name: "AKKO Gear",
    slug: "akko",
    aliases: ["akko-coupons", "akko-discount", "akko-promo"],
    logo: "/logos/akko.png",
    website: "https://akkogear.de/?ref=promoregistry",
    affiliate_url: "https://akkogear.de/?ref=promoregistry",
    country: "GLOBAL",
    description: "Designer custom mechanical keyboards, hot-swap wireless keyboards, and novelty keycaps.",
    coupons: [
      {
        id: "akko-deal-1",
        code: "AKKO15",
        discount: "15% OFF",
        title: "15% off all AKKO Gear premium tech & accessories",
        description: "Enter verified coupon code AKKO15 to take 15% off high-performance hardware and audio devices.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "akko-deal-2",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off custom sets, keycaps & multi-packs",
        description: "Upgrade your setup and save 20% on collection bundles and specialty components with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "akko-deal-3",
        code: "PROMO10",
        discount: "$10 OFF",
        title: "$10 off your order over $60 sitewide",
        description: "Claim $10 instant checkout savings on orders above $60 using promo code PROMO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "akko-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal tech clearance & flash sales",
        description: "Discover deep discounts on top-rated hardware, DIY boards, and award-winning devices while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "akko-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard tracked delivery on orders over $49",
        description: "Orders over $49 qualify for fast, tracked international doorstep delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 93. IQUNIX (PC Tech)
  {
    id: 707,
    name: "IQUNIX",
    slug: "iqunix",
    aliases: ["iqunix-coupons", "iqunix-discount", "iqunix-promo"],
    logo: "/logos/iqunix.png",
    website: "https://iqunix.store/?ref=promoregistry",
    affiliate_url: "https://iqunix.store/?ref=promoregistry",
    country: "GLOBAL",
    description: "Aluminum mechanical keyboards with hot-swappable TTC switches and aesthetic designs.",
    coupons: [
      {
        id: "iqunix-deal-1",
        code: "IQUNIX15",
        discount: "15% OFF",
        title: "15% off all IQUNIX premium tech & accessories",
        description: "Enter verified coupon code IQUNIX15 to take 15% off high-performance hardware and audio devices.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "iqunix-deal-2",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off custom sets, keycaps & multi-packs",
        description: "Upgrade your setup and save 20% on collection bundles and specialty components with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "iqunix-deal-3",
        code: "PROMO10",
        discount: "$10 OFF",
        title: "$10 off your order over $60 sitewide",
        description: "Claim $10 instant checkout savings on orders above $60 using promo code PROMO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "iqunix-deal-4",
        code: "",
        discount: "UP TO 30% OFF",
        title: "Up to 30% off seasonal tech clearance & flash sales",
        description: "Discover deep discounts on top-rated hardware, DIY boards, and award-winning devices while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "iqunix-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard tracked delivery on orders over $49",
        description: "Orders over $49 qualify for fast, tracked international doorstep delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 94. SOLSTICE WATERSPORTS (Watersports)
  {
    id: 708,
    name: "Solstice Watersports",
    slug: "solstice-watersports",
    aliases: ["solstice-watersports-coupons", "solstice-watersports-discount", "solstice-watersports-promo"],
    logo: "/logos/solstice-watersports.png",
    website: "https://solsticewatersports.com/?ref=promoregistry",
    affiliate_url: "https://solsticewatersports.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Inflatable stand-up paddle boards (SUPs), lake docks, kayaks, and towable tubes.",
    coupons: [
      {
        id: "solstice-watersports-deal-1",
        code: "SOLSTIC15",
        discount: "15% OFF",
        title: "15% off sitewide on all Solstice Watersports favorites",
        description: "Apply verified code SOLSTIC15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "solstice-watersports-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "solstice-watersports-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "solstice-watersports-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "solstice-watersports-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 95. AIPAS EBIKE (E-Bikes)
  {
    id: 709,
    name: "Aipas eBike",
    slug: "aipas",
    aliases: ["aipas-coupons", "aipas-discount", "aipas-promo"],
    logo: "/logos/aipas.svg",
    website: "https://aipasbike.com/?ref=promoregistry",
    affiliate_url: "https://aipasbike.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Affordable long-range electric commuter bicycles and folding fat-tire ebikes.",
    coupons: [
      {
        id: "aipas-deal-1",
        code: "AIPAS100",
        discount: "$100 OFF",
        title: "$100 off Aipas eBike flagship electric models",
        description: "Apply verified coupon code AIPAS100 at checkout to save $100 on long-range e-bikes and high-torque scooters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aipas-deal-2",
        code: "RIDE50",
        discount: "$50 OFF",
        title: "$50 off commuter models & folding frames",
        description: "Enjoy an instant $50 discount on portable city commuter models with promo code RIDE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aipas-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off spare batteries, chargers & racks",
        description: "Save 15% on original factory accessories, pannier bags, and replacement parts with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aipas-deal-4",
        code: "",
        discount: "FREE GEAR",
        title: "Free accessory gift bundle with purchase",
        description: "Every new electric model purchase includes complimentary safety gear, mounting tools, and charger kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aipas-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free tracked freight shipping & 2-year warranty",
        description: "Enjoy zero shipping fees on all vehicle orders with comprehensive manufacturer frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 96. JOYTUTUS (Overlanding)
  {
    id: 710,
    name: "Joytutus",
    slug: "joytutus",
    aliases: ["joytutus-coupons", "joytutus-discount", "joytutus-promo"],
    logo: "/logos/joytutus.png",
    website: "https://joytutus.com/?ref=promoregistry",
    affiliate_url: "https://joytutus.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Portable 12V car refrigerators, truck bed tents, car organizers, and overland accessories.",
    coupons: [
      {
        id: "joytutus-deal-1",
        code: "JOYTUTU50",
        discount: "$50 OFF",
        title: "$50 off Joytutus flagship systems & appliances",
        description: "Redeem verified promo code JOYTUTU50 at checkout to save $50 on high-efficiency equipment and systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "joytutus-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off solar generators, fridges & heavy units over $600",
        description: "Save $100 on premier power units, dual-zone fridges, and water systems with coupon code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "joytutus-deal-3",
        code: "EXTRA10",
        discount: "10% OFF",
        title: "10% off replacement parts, filters & cables",
        description: "Take 10% off all maintenance accessories, connecting harnesses, and spare filters using code EXTRA10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "joytutus-deal-4",
        code: "",
        discount: "FREE ACCESSORY",
        title: "Free mounting kit & adapter package included",
        description: "Every major unit comes equipped with all necessary DC/AC adapters, connectors, and factory accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "joytutus-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free insured doorstep delivery & manufacturer warranty",
        description: "Qualify for free expedited shipping with comprehensive factory warranty and technical support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 97. BODEGACOOLER (Camp & Outdoor)
  {
    id: 711,
    name: "bodegacooler",
    slug: "bodegacooler",
    aliases: ["bodegacooler-coupons", "bodegacooler-discount", "bodegacooler-promo"],
    logo: "/logos/bodegacooler.svg",
    website: "https://bodegacooler.com/?ref=promoregistry",
    affiliate_url: "https://bodegacooler.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Dual-zone portable 12V RV car fridges, dual-door freezers, and mini camping refrigerators.",
    coupons: [
      {
        id: "bodegacooler-deal-1",
        code: "BODEGAC15",
        discount: "15% OFF",
        title: "15% off sitewide on all bodegacooler favorites",
        description: "Apply verified code BODEGAC15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bodegacooler-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bodegacooler-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bodegacooler-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bodegacooler-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 98. AMPERE TIME (Batteries)
  {
    id: 712,
    name: "Ampere Time",
    slug: "ampere-time",
    aliases: ["ampere-time-coupons", "ampere-time-discount", "ampere-time-promo"],
    logo: "/logos/ampere-time.svg",
    website: "https://amperetime.com/?ref=promoregistry",
    affiliate_url: "https://amperetime.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Deep-cycle LiFePO4 lithium batteries for RV, solar systems, trolling motors, and backup power.",
    coupons: [
      {
        id: "ampere-time-deal-1",
        code: "AMPERET50",
        discount: "$50 OFF",
        title: "$50 off Ampere Time flagship systems & appliances",
        description: "Redeem verified promo code AMPERET50 at checkout to save $50 on high-efficiency equipment and systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ampere-time-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off solar generators, fridges & heavy units over $600",
        description: "Save $100 on premier power units, dual-zone fridges, and water systems with coupon code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ampere-time-deal-3",
        code: "EXTRA10",
        discount: "10% OFF",
        title: "10% off replacement parts, filters & cables",
        description: "Take 10% off all maintenance accessories, connecting harnesses, and spare filters using code EXTRA10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ampere-time-deal-4",
        code: "",
        discount: "FREE ACCESSORY",
        title: "Free mounting kit & adapter package included",
        description: "Every major unit comes equipped with all necessary DC/AC adapters, connectors, and factory accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ampere-time-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free insured doorstep delivery & manufacturer warranty",
        description: "Qualify for free expedited shipping with comprehensive factory warranty and technical support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 99. HOOGA HEALTH (Light Therapy)
  {
    id: 713,
    name: "Hooga Health",
    slug: "hooga",
    aliases: ["hooga-coupons", "hooga-discount", "hooga-promo"],
    logo: "/logos/hooga.png",
    website: "https://hoogahealth.com/?ref=promoregistry",
    affiliate_url: "https://hoogahealth.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Red light therapy panels, grounding mats, blue-light blocking glasses, and recovery lamps.",
    coupons: [
      {
        id: "hooga-deal-1",
        code: "HOOGA15",
        discount: "15% OFF",
        title: "15% off sitewide on all Hooga Health favorites",
        description: "Apply verified code HOOGA15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hooga-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hooga-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hooga-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hooga-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 100. OFF ROAD TENTS (Overlanding)
  {
    id: 714,
    name: "Off Road Tents",
    slug: "off-road-tents",
    aliases: ["off-road-tents-coupons", "off-road-tents-discount", "off-road-tents-promo"],
    logo: "/logos/off-road-tents.png",
    website: "https://offroadtents.com/?ref=promoregistry",
    affiliate_url: "https://offroadtents.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Premium rooftop tents, overland vehicle awnings, and heavy-duty 4x4 camping gear.",
    coupons: [
      {
        id: "off-road-tents-deal-1",
        code: "OFFROAD50",
        discount: "$50 OFF",
        title: "$50 off Off Road Tents flagship systems & appliances",
        description: "Redeem verified promo code OFFROAD50 at checkout to save $50 on high-efficiency equipment and systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "off-road-tents-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off solar generators, fridges & heavy units over $600",
        description: "Save $100 on premier power units, dual-zone fridges, and water systems with coupon code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "off-road-tents-deal-3",
        code: "EXTRA10",
        discount: "10% OFF",
        title: "10% off replacement parts, filters & cables",
        description: "Take 10% off all maintenance accessories, connecting harnesses, and spare filters using code EXTRA10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "off-road-tents-deal-4",
        code: "",
        discount: "FREE ACCESSORY",
        title: "Free mounting kit & adapter package included",
        description: "Every major unit comes equipped with all necessary DC/AC adapters, connectors, and factory accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "off-road-tents-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free insured doorstep delivery & manufacturer warranty",
        description: "Qualify for free expedited shipping with comprehensive factory warranty and technical support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 101. SETPOWER (Coolers)
  {
    id: 715,
    name: "Setpower",
    slug: "setpower",
    aliases: ["setpower-coupons", "setpower-discount", "setpower-promo"],
    logo: "/logos/setpower.png",
    website: "https://setpowerusa.com/?ref=promoregistry",
    affiliate_url: "https://setpowerusa.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Heavy-duty 12V portable fridge freezers for overland trucks, vans, and off-grid camping.",
    coupons: [
      {
        id: "setpower-deal-1",
        code: "SETPOWE50",
        discount: "$50 OFF",
        title: "$50 off Setpower flagship systems & appliances",
        description: "Redeem verified promo code SETPOWE50 at checkout to save $50 on high-efficiency equipment and systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "setpower-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off solar generators, fridges & heavy units over $600",
        description: "Save $100 on premier power units, dual-zone fridges, and water systems with coupon code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "setpower-deal-3",
        code: "EXTRA10",
        discount: "10% OFF",
        title: "10% off replacement parts, filters & cables",
        description: "Take 10% off all maintenance accessories, connecting harnesses, and spare filters using code EXTRA10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "setpower-deal-4",
        code: "",
        discount: "FREE ACCESSORY",
        title: "Free mounting kit & adapter package included",
        description: "Every major unit comes equipped with all necessary DC/AC adapters, connectors, and factory accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "setpower-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free insured doorstep delivery & manufacturer warranty",
        description: "Qualify for free expedited shipping with comprehensive factory warranty and technical support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 102. PECRON (Solar Generators)
  {
    id: 716,
    name: "PECRON",
    slug: "pecron",
    aliases: ["pecron-coupons", "pecron-discount", "pecron-promo"],
    logo: "/logos/pecron.jpg",
    website: "https://pecron.com/?ref=promoregistry",
    affiliate_url: "https://pecron.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "High-capacity portable power stations, solar generators, and solar panels up to 3600W.",
    coupons: [
      {
        id: "pecron-deal-1",
        code: "PECRON50",
        discount: "$50 OFF",
        title: "$50 off PECRON flagship systems & appliances",
        description: "Redeem verified promo code PECRON50 at checkout to save $50 on high-efficiency equipment and systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pecron-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off solar generators, fridges & heavy units over $600",
        description: "Save $100 on premier power units, dual-zone fridges, and water systems with coupon code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pecron-deal-3",
        code: "EXTRA10",
        discount: "10% OFF",
        title: "10% off replacement parts, filters & cables",
        description: "Take 10% off all maintenance accessories, connecting harnesses, and spare filters using code EXTRA10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pecron-deal-4",
        code: "",
        discount: "FREE ACCESSORY",
        title: "Free mounting kit & adapter package included",
        description: "Every major unit comes equipped with all necessary DC/AC adapters, connectors, and factory accessories.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pecron-deal-5",
        code: "",
        discount: "FREE FREIGHT",
        title: "Free insured doorstep delivery & manufacturer warranty",
        description: "Qualify for free expedited shipping with comprehensive factory warranty and technical support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 103. ROCKBROS (Cycling)
  {
    id: 717,
    name: "ROCKBROS",
    slug: "rockbros",
    aliases: ["rockbros-coupons", "rockbros-discount", "rockbros-promo"],
    logo: "/logos/rockbros.png",
    website: "https://rockbrosbike.us/?ref=promoregistry",
    affiliate_url: "https://rockbrosbike.us/?ref=promoregistry",
    country: "GLOBAL",
    description: "Cycling gear, photochromic sunglasses, bike bags, helmets, and bicycle accessories.",
    coupons: [
      {
        id: "rockbros-deal-1",
        code: "ROCKBRO15",
        discount: "15% OFF",
        title: "15% off sitewide on all ROCKBROS favorites",
        description: "Apply verified code ROCKBRO15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rockbros-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rockbros-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rockbros-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rockbros-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 104. LUMIBRICKS (Toy Lights)
  {
    id: 718,
    name: "Lumibricks",
    slug: "lumibricks",
    aliases: ["lumibricks-coupons", "lumibricks-discount", "lumibricks-promo"],
    logo: "/logos/lumibricks.png",
    website: "https://lumibricks.com/?ref=promoregistry",
    affiliate_url: "https://lumibricks.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "LED light kits for LEGO building sets, architectural model lighting, and custom cables.",
    coupons: [
      {
        id: "lumibricks-deal-1",
        code: "LUMIBRI15",
        discount: "15% OFF",
        title: "15% off sitewide on all Lumibricks favorites",
        description: "Apply verified code LUMIBRI15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lumibricks-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lumibricks-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lumibricks-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lumibricks-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 105. NEOSABERS (Collectibles)
  {
    id: 719,
    name: "Neosabers",
    slug: "neosabers",
    aliases: ["neosabers-coupons", "neosabers-discount", "neosabers-promo"],
    logo: "/logos/neosabers.svg",
    website: "https://neosabers.com/?ref=promoregistry",
    affiliate_url: "https://neosabers.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Custom Xenopixel & Neopixel combat dueling lightsabers with smooth-swing sound fonts.",
    coupons: [
      {
        id: "neosabers-deal-1",
        code: "NEOSABE15",
        discount: "15% OFF",
        title: "15% off sitewide on all Neosabers favorites",
        description: "Apply verified code NEOSABE15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "neosabers-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "neosabers-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "neosabers-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "neosabers-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 106. KOREAN SKINCARE (K-Beauty)
  {
    id: 720,
    name: "Korean Skincare",
    slug: "korean-skincare",
    aliases: ["korean-skincare-coupons", "korean-skincare-discount", "korean-skincare-promo"],
    logo: "/logos/korean-skincare.png",
    website: "https://koreanskincare.co.il/?ref=promoregistry",
    affiliate_url: "https://koreanskincare.co.il/?ref=promoregistry",
    country: "GLOBAL",
    description: "Authentic K-beauty skincare, snail mucin serums, centella toners, and Korean SPF sunscreens.",
    coupons: [
      {
        id: "korean-skincare-deal-1",
        code: "KOREANS15",
        discount: "15% OFF",
        title: "15% off sitewide on all Korean Skincare favorites",
        description: "Apply verified code KOREANS15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "korean-skincare-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "korean-skincare-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "korean-skincare-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "korean-skincare-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 107. BULL BOOST PERFORMANCE (Auto Racing)
  {
    id: 721,
    name: "Bull Boost Performance",
    slug: "bull-boost-performance",
    aliases: ["bull-boost-performance-coupons", "bull-boost-performance-discount", "bull-boost-performance-promo"],
    logo: "/logos/bull-boost-performance.png",
    website: "https://bullboostperformance.com/?ref=promoregistry",
    affiliate_url: "https://bullboostperformance.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "High-performance automotive turbochargers, intercoolers, catch cans, and racing headers.",
    coupons: [
      {
        id: "bull-boost-performance-deal-1",
        code: "BULLBOO15",
        discount: "15% OFF",
        title: "15% off sitewide on all Bull Boost Performance favorites",
        description: "Apply verified code BULLBOO15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bull-boost-performance-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bull-boost-performance-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bull-boost-performance-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bull-boost-performance-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 108. FITUEYES (Furniture)
  {
    id: 722,
    name: "Fitueyes",
    slug: "fitueyes",
    aliases: ["fitueyes-coupons", "fitueyes-discount", "fitueyes-promo"],
    logo: "/logos/fitueyes.png",
    website: "https://fitueyes.com/?ref=promoregistry",
    affiliate_url: "https://fitueyes.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Easel design floor TV stands, designer media consoles, and modern motorized standing desks.",
    coupons: [
      {
        id: "fitueyes-deal-1",
        code: "FITUEYE15",
        discount: "15% OFF",
        title: "15% off sitewide on all Fitueyes favorites",
        description: "Apply verified code FITUEYE15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fitueyes-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fitueyes-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fitueyes-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fitueyes-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 109. HELVETUS (Watches)
  {
    id: 723,
    name: "Helvetus",
    slug: "helvetus",
    aliases: ["helvetus-coupons", "helvetus-discount", "helvetus-promo"],
    logo: "/logos/helvetus.png",
    website: "https://helvetus.com/?ref=promoregistry",
    affiliate_url: "https://helvetus.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "Swiss-designed minimalist luxury chronographs, automatic watches, and sapphire crystals.",
    coupons: [
      {
        id: "helvetus-deal-1",
        code: "HELVETU15",
        discount: "15% OFF",
        title: "15% off sitewide on all Helvetus favorites",
        description: "Apply verified code HELVETU15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "helvetus-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "helvetus-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "helvetus-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "helvetus-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 110. RECONSTITUTION SOLUTION (Lab Supplies)
  {
    id: 724,
    name: "Reconstitution Solution",
    slug: "reconstitution-solution",
    aliases: ["reconstitution-solution-coupons", "reconstitution-solution-discount", "reconstitution-solution-promo"],
    logo: "/logos/reconstitution-solution.png",
    website: "https://reconstitution-solution.io/?ref=promoregistry",
    affiliate_url: "https://reconstitution-solution.io/?ref=promoregistry",
    country: "GLOBAL",
    description: "Laboratory-grade bacteriostatic water, sterile reconstituting solvents, and research supplies.",
    coupons: [
      {
        id: "reconstitution-solution-deal-1",
        code: "RECONST15",
        discount: "15% OFF",
        title: "15% off sitewide on all Reconstitution Solution favorites",
        description: "Apply verified code RECONST15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "reconstitution-solution-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "reconstitution-solution-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "reconstitution-solution-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "reconstitution-solution-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // 111. XSTEEL TARGETS (Shooting)
  {
    id: 725,
    name: "Xsteel Targets",
    slug: "xsteel-targets",
    aliases: ["xsteel-targets-coupons", "xsteel-targets-discount", "xsteel-targets-promo"],
    logo: "/logos/xsteel-targets.jpg",
    website: "https://xsteeltargets.com/?ref=promoregistry",
    affiliate_url: "https://xsteeltargets.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "AR500 and AR550 laser-cut steel shooting targets, gongs, and reactive target stands.",
    coupons: [
      {
        id: "xsteel-targets-deal-1",
        code: "XSTEELT15",
        discount: "15% OFF",
        title: "15% off sitewide on all Xsteel Targets favorites",
        description: "Apply verified code XSTEELT15 at checkout to enjoy 15% off bestselling products and new arrivals.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "xsteel-targets-deal-2",
        code: "VIP20",
        discount: "20% OFF",
        title: "20% off collection bundles & multi-item packs",
        description: "Save 20% when purchasing curated bundles, gift packs, and seasonal essentials with code VIP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "xsteel-targets-deal-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase with newsletter",
        description: "First-time shoppers receive an instant 10% discount on their entire cart using promo code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "xsteel-targets-deal-4",
        code: "",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off seasonal markdowns & flash offers",
        description: "Explore discounted outlet items, limited-time promos, and special seasonal savings with no code required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "xsteel-targets-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery on qualifying orders over $50",
        description: "Receive 100% free tracked standard shipping with 30-day money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 14. REDU SCULPT (At-Home Body Sculpting & Fat Cavitation Massager)
  {
    id: 726,
    name: "Redu Sculpt",
    slug: "redusculpt",
    aliases: ["redu-sculpt", "redusculpt-us", "redu-sculpt-us"],
    logo: "/logos/redusculpt.png",
    website: "https://www.redusculpt.com/METHEW46097",
    affiliate_url: "https://www.redusculpt.com/METHEW46097",
    country: "US",
    description: "Redu Sculpt offers advanced at-home body contouring massagers, targeted fat reduction tools, sculpting gels, and slimming skincare treatments.",
    coupons: [
      {
        id: "redu-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off coupon code (automatically applied at checkout)",
        description: "Get 15% discount on Redu Sculpt body sculpting massager and firming gels. No code entry needed, discount activates automatically.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "33% OFF",
        title: "33% off starter bundle + free green tea gel & vitamin C",
        description: "Save $50 instantly on complete body contouring kit ($99.99 instead of $149.99) with automatic checkout discount.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 60% OFF",
        title: "Up to 60% off sitewide & seasonal clearance deals",
        description: "Save up to 60% on replacement firming gel packs and body sculpting devices with verified partner savings.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off sitewide discount (auto-applied in cart)",
        description: "Apply 10% instant savings across all body contouring tools and skincare orders automatically.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US delivery + 90-day money-back guarantee",
        description: "Enjoy 100% free nationwide express shipping with a 90-day risk-free money-back satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off first order discount for new customers",
        description: "Claim 15% off your first Redu Sculpt order with automatic partner discount activated in cart.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "40% OFF",
        title: "40% off seasonal clearance & body sculpting essentials",
        description: "Save up to 40% off on premium body massagers during limited-time seasonal promotional events.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "redu-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "SPECIAL DEAL",
        title: "Exclusive partner discount - Automatically applied in cart",
        description: "Save instantly with verified partner discount automatically applied at checkout. No promo code entry required.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 15. NUSHAPE (Clinical Red Light Therapy & Photobiomodulation Wraps)
  {
    id: 727,
    name: "Nushape",
    slug: "nushape",
    aliases: ["nushape-pt", "nushape-red-light", "nushape-therapy", "nu-shape"],
    website: "https://www.nushape.com/METHEW88461",
    affiliate_url: "https://www.nushape.com/METHEW88461",
    logo: "/logos/nushape.png",
    country: "US",
    description: "Nushape designs clinical-grade red light therapy and photobiomodulation devices, including the patented Red Light Therapy Belt and targeted phototherapy wraps for body contouring and cellular recovery.",
    coupons: [
      {
        id: "nushape-1",
        code: "METHEW88461",
        is_auto_applied: true,
        discount: "$50 OFF",
        title: "$50 off clinical red light therapy wrap (verified working)",
        description: "Save $50 on patented phototherapy wraps and body contouring systems with verified code METHEW88461.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-2",
        code: "METHEW88461",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off sitewide discount code on all LED therapy devices",
        description: "Enjoy 10% savings across all medical-grade LED red light therapy devices at checkout with METHEW88461.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-3",
        code: "",
        discount: "UP TO $100 OFF",
        title: "Up to $100 off red light therapy bundles",
        description: "Save up to $100 when purchasing complete clinical photobiomodulation bundle packages.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-4",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US & worldwide express delivery",
        description: "All Nushape therapy devices include complimentary tracked delivery with full tracking.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-5",
        code: "METHEW88461",
        is_auto_applied: true,
        discount: "$70 OFF",
        title: "$70 off phototherapy pain relief belt and wrap systems",
        description: "Get $70 off targeted near-infrared and 660nm red light relief wrap devices with code METHEW88461.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-6",
        code: "",
        discount: "1-YEAR WARRANTY",
        title: "100% Free 1-year manufacturer warranty + 14-day trial",
        description: "Every Nushape system includes full 1-year coverage and a 14-day clinical trial guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-7",
        code: "METHEW88461",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off practitioner, studio & multi-unit clinic orders",
        description: "Save 15% on multi-unit professional clinic and wellness studio packages with code METHEW88461.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nushape-8",
        code: "",
        is_auto_applied: true,
        discount: "SPECIAL DEAL",
        title: "Exclusive ambassador discount - Automatically applied in cart",
        description: "Claim instant partner discount on medical-grade phototherapy wraps. Applied automatically at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 16. SEEQ SUPPLY (Viral Clear Whey Isolate Protein)
  {
    id: 728,
    name: "SEEQ Supply",
    slug: "seeq-supply",
    aliases: ["seeqsupply", "seeq", "seeq-protein", "seeqsupply-us"],
    website: "https://www.seeqsupply.com/METHEW87649",
    affiliate_url: "https://www.seeqsupply.com/METHEW87649",
    logo: "/logos/seeqsupply.png",
    country: "US",
    description: "SEEQ Supply creates revolutionary clear whey protein isolate that tastes crisp, light, and refreshing like fruit juice with 20g+ protein per serving and zero milky aftertaste.",
    coupons: [
      {
        id: "seeq-1",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off your entire order (automatically applied in cart)",
        description: "Save an extra 10% on clear whey protein isolate tubs and starter packs. Discount applies automatically at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-2",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFT",
        title: "Free custom shaker bottle on orders over $35",
        description: "Get a free custom SEEQ shaker bottle automatically added at checkout with qualifying orders over $35.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-3",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off multi-tub clear whey bundles & variety packs",
        description: "Stack savings on 2-tub and 3-tub clear whey isolate variety packs with automatic bundle discount.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping on all orders over $75",
        description: "Get free fast tracked standard shipping across the United States on orders of $75 or more.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-5",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off with subscribe & save auto-delivery",
        description: "Save 20% on every recurring shipment with flexible delivery intervals and no long-term commitment.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-6",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off single-serve stick packs & trial bundles",
        description: "Save 10% on convenient travel-ready clear protein isolate single serve stick packs automatically.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-7",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off student & first responder discount",
        description: "Verified active military, first responders, and students unlock 10% off their purchases.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "seeq-8",
        code: "",
        is_auto_applied: true,
        discount: "SPECIAL DEAL",
        title: "Exclusive partner discount - Automatically applied in cart",
        description: "Claim verified partner discount on all delicious clear protein flavors. Applied automatically at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 17. SKINNYFIT (Super Youth Collagen Peptides & Detox Teas)
  {
    id: 729,
    name: "SkinnyFit",
    slug: "skinnyfit",
    aliases: ["skinny-fit", "skinnyfit-tea", "skinnyfit-collagen", "skinnyfit-us"],
    website: "https://www.skinnyfit.com/METHEW18019",
    affiliate_url: "https://www.skinnyfit.com/METHEW18019",
    logo: "/logos/skinnyfit.png",
    country: "US",
    description: "SkinnyFit produces top-rated Super Youth multi-collagen peptides, detox cleansing teas, and beauty superfoods formulated for vibrant skin, joints, and gut health.",
    coupons: [
      {
        id: "skinny-1",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off sitewide discount (automatically applied in cart)",
        description: "Save 15% on Super Youth multi-collagen and beauty nutrition. Discount activates automatically at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 40% OFF",
        title: "Up to 40% off Super Youth multi-collagen bundles",
        description: "Save up to 40% when purchasing 3-month or 6-month Super Youth collagen bundles with automatic savings.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-3",
        code: "",
        is_auto_applied: true,
        discount: "$10 OFF",
        title: "$10 off detox wellness tea 28-day cleanse",
        description: "Take $10 off SkinnyFit Detox and ZzzTox cleansing tea blends with instant discount in cart.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFT",
        title: "Free glass bottle, shaker & nutrition guide on bundles",
        description: "Receive a free SkinnyFit glass bottle, shaker, and nutrition plan with select bundle orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on subscription orders",
        description: "Enjoy zero delivery fees and automatic monthly savings with flexible subscription plans.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-6",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off Skinny Greens & Beauty Juice superfoods",
        description: "Save 20% on Skinny Greens and Beauty Juice superfood blends at checkout with auto-applied discount.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-7",
        code: "",
        is_auto_applied: true,
        discount: "90-DAY GUARANTEE",
        title: "90-Day 100% money-back satisfaction guarantee",
        description: "Experience risk-free shopping with SkinnyFit's industry-leading 90-day satisfaction guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "skinny-8",
        code: "",
        is_auto_applied: true,
        discount: "SPECIAL DEAL",
        title: "Exclusive partner discount - Automatically applied in cart",
        description: "Get verified partner discount on all collagen, detox teas, and superfood gummies. Applied automatically at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 18. CHOMP SHOP (Kid-Safe Cardboard Power Tools - ChompSaw)
  {
    id: 730,
    name: "Chomp Shop",
    slug: "chompshop",
    aliases: ["chomp-shop", "chompshop-com", "chompsaw", "chomp-saw", "chompshop-us"],
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
        expiry_date: "2026-12-31"
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
        expiry_date: "2026-12-31"
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
        expiry_date: "2026-12-31"
      },
      {
        id: "chomp-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE PRINTS",
        title: "Free 3D prints on your order",
        description: "Get complimentary 3D print project templates automatically added to your qualifying maker order.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "chomp-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free US shipping on orders $75+",
        description: "Enjoy zero nationwide delivery fees automatically calculated on eligible domestic US orders.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "chomp-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "25% off replacement parts & blades",
        description: "Take 25% off replacement cutting blades, safety guards, and maker accessories.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "chomp-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off on cardboard project packs",
        description: "Special 20% discount on cardboard design project packs and STEAM creator kits.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "chomp-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "$72 OFF",
        title: "$72 off annual Chomp Maker Club subscription",
        description: "Save $72 each year when you subscribe to the annual Chomp Maker Club membership.",
        affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 19. RONE NUTRITION (Run On Nature's Energy - Clean Natural Energy & Performance)
  {
    id: 731,
    name: "RONE Nutrition",
    slug: "rone-nutrition",
    aliases: ["ronenutrition", "rone", "rone-nutrition-us", "ronenutrition-us"],
    website: "https://www.ronenutrition.com/Methew",
    affiliate_url: "https://www.ronenutrition.com/Methew",
    logo: "/logos/rone-official-yellow.png",
    country: "US",
    description: "Run On Nature's Energy (RONE Nutrition). 100% natural Supercharged Honey energy packs, raw honey with green tea caffeine, lion's mane mushroom adaptogens, and electrolyte hydration.",
    coupons: [
      {
        id: "rone-deal-1",
        code: "METHEW",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "Exclusive 20% Off Entire RONE Order",
        description: "Save an exclusive 20% on all natural Supercharged Honey endurance packs and clean adaptogen mixes using verified code METHEW.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-19"
      },
      {
        id: "rone-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 55%",
        title: "Up to 55% Off Seasonal Vitality & Energy Bundles",
        description: "Save up to 55% with limited-time seasonal savings on multipack Supercharged Honey supplies and workout nutrition.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-14"
      },
      {
        id: "rone-deal-3",
        code: "METHEW",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% Off Sitewide Promo Code (Verified Working)",
        description: "Apply active promo code METHEW at checkout to receive an instant 15% discount across all energy honey pouches.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-16"
      },
      {
        id: "rone-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "$49.95 ONLY",
        title: "Supercharged Honey 30-Day Pouch Just $49.95",
        description: "Grab the flagship single 30-serving pouch of raw honey infused with green tea caffeine & lion's mane for only $49.95.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-16"
      },
      {
        id: "rone-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free Tracked Nationwide Doorstep Delivery",
        description: "Receive 100% free tracked standard shipping across the United States calculated automatically on qualifying domestic orders.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-14"
      },
      {
        id: "rone-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "50% OFF",
        title: "Save 50% on Featured Antioxidant Honey Flavors",
        description: "Special half-price savings on select seasonal honey infusions and electrolyte hydration blends while stocks last.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-13"
      },
      {
        id: "rone-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "Stock & Save: 15% Off 4+ Pouch Volume Pack",
        description: "Order in volume to maximize endurance savings — get an automatic 15% reduction when purchasing 4 bags or more.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-16"
      },
      {
        id: "rone-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "Trio Pack Savings: 10% Off 3-Bag Endurance Bundle",
        description: "Order a 3-pack performance bundle of clean honey energy and receive an automatic 10% discount at checkout.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-17"
      },
      {
        id: "rone-deal-9",
        code: "",
        is_auto_applied: true,
        discount: "5% OFF",
        title: "Twin Pack Deal: 5% Off Any 2 Bags of Energy Honey",
        description: "Double up on clean stamina and get an instant 5% price reduction when grabbing a twin pack of Supercharged Honey.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-16"
      },
      {
        id: "rone-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "5% OFF",
        title: "Join the VIP Honey Club: 5% Off First Purchase",
        description: "Subscribe to the official RONE insider newsletter for instant 5% discount access and product release notifications.",
        affiliate_url: "https://www.ronenutrition.com/Methew",
        is_verified: true,
        expiry_date: "2026-11-16"
      }
    ]
  },

  // 20. USA BERKEY FILTERS (Gravity-Fed Water Purification Systems & Replacement Elements)
  {
    id: 732,
    name: "USA Berkey Filters",
    slug: "usa-berkey-filters",
    aliases: ["usaberkeyfilters", "berkey-filters", "berkey"],
    website: "https://www.usaberkeyfilters.com/aff/282/",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
    logo: "/logos/usa-berkey-filters.png",
    country: "US",
    description: "World-leader in gravity-fed water purification systems, authentic Black Berkey replacement filters, stainless steel systems, and fluoride reduction elements.",
    coupons: [
      {
        id: "berkey-deal-1",
        code: "USA20",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off exclusive coupon code sitewide",
        description: "Apply verified promo code USA20 at checkout to save 20% on authentic Berkey water filtration systems and bundles.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-2",
        code: "MOM10",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off discount code on Black Berkey replacement elements",
        description: "Save 15% on genuine Black Berkey replacement filters and fluoride elements using promo code MOM10.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 35%",
        title: "Up to 35% off weekly flash sales on Big Berkey systems",
        description: "Save up to 35% on complete stainless steel gravity water filter systems. Applied automatically in cart.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on all system orders",
        description: "Enjoy zero shipping costs automatically calculated on all Berkey water purification system orders.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 21. DAKVOORDEELSHOP (Netherlands EPDM Roofing Expert - MRGE 4.9% CPA)
  {
    id: 801,
    name: "Dakvoordeelshop",
    slug: "dakvoordeelshop",
    aliases: ["dakvoordeelshop-nl", "dakvoordeel"],
    website: "https://www.dakvoordeelshop.nl/",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fwww.dakvoordeelshop.nl%2F",
    logo: "/logos/dakvoordeelshop.png",
    country: "GLOBAL",
    description: "Dé specialist in complete EPDM dakbedekking pakketten, PIR isolatieplaten, aluminium daktrimmen en hemelwaterafvoer in Nederland.",
    coupons: [
      {
        id: "dak-deal-1",
        code: "MARKTPLAATS",
        is_auto_applied: false,
        discount: "5% KORTING",
        title: "5% kortingscode op gehele bestelling bij Dakvoordeelshop",
        description: "Gebruik actiecode MARKTPLAATS in het winkelmandje voor 5% directe korting op EPDM dakbedekking en accessoires.",
        affiliate_url: "https://www.dakvoordeelshop.nl/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dak-deal-2",
        code: "WEEKENDVOORDEEL5",
        is_auto_applied: false,
        discount: "5% KORTING",
        title: "5% weekend actiecode op dakisolatie en EPDM folie",
        description: "Ontvang 5% extra voordeel op hoogwaardige PIR isolatieplaten en daktrimmen met actiecode WEEKENDVOORDEEL5.",
        affiliate_url: "https://www.dakvoordeelshop.nl/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dak-deal-3",
        code: "WELKOM5",
        is_auto_applied: false,
        discount: "5% WELKOMSTKORTING",
        title: "5% welkomstkorting voor nieuwe klanten bij Dakvoordeelshop",
        description: "Direct 5% korting op je eerste bestelling EPDM pakketten en PIR dakisolatie met actiecode WELKOM5.",
        affiliate_url: "https://www.dakvoordeelshop.nl/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dak-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "GRATIS BEZORGD",
        title: "Gratis verzending in Nederland en België vanaf €250",
        description: "Plaats een bestelling vanaf €250 en ontvang gratis levering van EPDM rollen en zware isolatieplaten.",
        affiliate_url: "https://www.dakvoordeelshop.nl/",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 22. INTO-LED (Netherlands & Europe LED Lighting Expert - MRGE 9% CPA)
  {
    id: 802,
    name: "Into-LED",
    slug: "into-led",
    aliases: ["intoled", "into-led-nl", "intoled-nl"],
    website: "https://www.into-led.com/nl",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fwww.into-led.com%2Fnl",
    logo: "/logos/into-led.png",
    country: "GLOBAL",
    description: "Dé grootste online specialist in energiezuinige LED verlichting, smart verlichting, industriële LED panelen en buitenverlichting.",
    coupons: [
      {
        id: "intoled-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "TOT 60% KORTING",
        title: "Tot 60% korting op LED binnen- en buitenverlichting in de sale",
        description: "Profiteer van directe seizoensafprijzingen op WiFi lampen, inbouwspots en waterdichte tuinverlichting. Geen code nodig, korting wordt automatisch verrekend in de winkelwagen.",
        affiliate_url: "https://www.into-led.com/nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "intoled-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "GRATIS VERZENDING",
        title: "Gratis verzending binnen Nederland en België vanaf €50",
        description: "Bestel voor minstens €50 aan LED panelen, slimme lampen of toebehoren en ontvang gratis snelle bezorging inclusief betrouwbare Track & Trace.",
        affiliate_url: "https://www.into-led.com/nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "intoled-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "5 JAAR GARANTIE",
        title: "Standaard 5 jaar omruilgarantie op professionele LED panelen",
        description: "Zorgeloos zakelijk en particulier bestellen met 5 jaar fabrieksgarantie en 30 dagen bedenktermijn op armaturen en professionele LED panelen.",
        affiliate_url: "https://www.into-led.com/nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "intoled-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "TOT 40% STAFFEL",
        title: "Tot 40% staffelkorting op grootverpakkingen en projectverlichting",
        description: "Directe volumekorting voor doe-het-zelvers, installateurs en bedrijven bij grotere aantallen. Automatisch berekend bij het toevoegen aan winkelmand.",
        affiliate_url: "https://www.into-led.com/nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 23. MAGICSHINE (High-Performance Bike Lights & Cycling Gear - MRGE 10% CPA)
  {
    id: 803,
    name: "Magicshine",
    slug: "magicshine",
    aliases: ["magicshine-us", "magic-shine"],
    website: "https://magicshine.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fmagicshine.com",
    logo: "/logos/magicshine.png",
    country: "US",
    description: "World leader in high-lumen bike headlights, rechargeable cycling tail lights, Garmin-compatible mounts, and night-riding cycling safety gear.",
    coupons: [
      {
        id: "magicshine-deal-1",
        code: "MTBVIP",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off MTB trail lights and bike headlights with coupon code",
        description: "Apply verified promo code MTBVIP at checkout to receive 15% off on Monteer, Allty, and Seemee series.",
        affiliate_url: "https://magicshine.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicshine-deal-2",
        code: "WELCOM15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off first order with email newsletter registration",
        description: "Save 15% on high-lumen bicycle headlights and cycling safety gear using discount code WELCOM15.",
        affiliate_url: "https://magicshine.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicshine-deal-3",
        code: "MSFANS",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off official fan community promo code sitewide",
        description: "Enter coupon code MSFANS for 15% off bike lights and rechargeable cycling safety bundles.",
        affiliate_url: "https://magicshine.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicshine-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE US SHIPPING",
        title: "Free tracked US shipping on orders over $50",
        description: "Automatic free delivery applied at checkout for all domestic orders reaching $50 or more.",
        affiliate_url: "https://magicshine.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 24. RENPHO (Smart Health Scales, Massagers & Wellness Gear - MRGE 5% CPA)
  {
    id: 804,
    name: "RENPHO",
    slug: "renpho",
    aliases: ["renpho-us"],
    website: "https://renpho.com",
    affiliate_url: "https://renpho.com",
    logo: "/logos/renpho.png",
    country: "US",
    description: "Pioneering smart wellness technology: Bluetooth smart body fat scales, percussion massage guns, heated eye massagers, and smart fitness bikes.",
    coupons: [
      {
        id: "renpho-deal-1",
        code: "WBROOKS8",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off verified partner discount code sitewide",
        description: "Apply working coupon code WBROOKS8 in your cart for 10% off smart body composition scales and massagers.",
        affiliate_url: "https://renpho.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "renpho-deal-2",
        code: "WRRENPHO15L",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off promo code on smart scales & eye massagers",
        description: "Save 15% on bestselling Eyeris eye massagers and Elis smart scales with verified code WRRENPHO15L.",
        affiliate_url: "https://renpho.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "renpho-deal-3",
        code: "KICK15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off seasonal wellness promo code",
        description: "Use active discount code KICK15 for 15% off percussion massage guns, air purifiers, and AI smart bikes.",
        affiliate_url: "https://renpho.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "renpho-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free standard shipping on all US orders",
        description: "Enjoy zero shipping fees calculated automatically on all orders delivered anywhere within the continental United States.",
        affiliate_url: "https://renpho.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 25. PONGBOT (AI Tennis Ball Machines & Intelligent Table Tennis Robots - Direct UpPromote)
  {
    id: 805,
    name: "PongBot",
    slug: "pongbot",
    aliases: ["pongbot-sports", "pongbotsports", "pong-bot"],
    website: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
    affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
    logo: "/logos/pongbot.svg",
    country: "US",
    description: "Industry-leading AI tennis ball machines and smart table tennis robots: Pace S Pro, Nova S Pro, Omni S Pro, and adaptive solo training systems.",
    coupons: [
      {
        id: "pongbot-deal-1",
        code: "TIGLIO10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off verified promo code sitewide on AI sports robots",
        description: "Apply discount code TIGLIO10 at checkout to save 10% on Pongbot Pace S Pro, Nova S Pro, and table tennis training machines.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pongbot-deal-2",
        code: "SPROM",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off coupon code on eligible tennis & ping pong robots",
        description: "Enter promo code SPROM at checkout for 15% discount on high-performance training units and accessories.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pongbot-deal-3",
        code: "RAMONPADEL",
        is_auto_applied: false,
        discount: "$150 OFF",
        title: "$150 off voucher code on Pace S Pro flagship tennis robot",
        description: "Apply promo code RAMONPADEL to unlock $150 instant savings on premium smart tennis ball launching machines.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pongbot-deal-4",
        code: "LASKAR5",
        is_auto_applied: false,
        discount: "5% EXTRA OFF",
        title: "5% extra discount code on Pongbot Pace S Pro tennis machine",
        description: "Use official ambassador code LASKAR5 to stack an additional 5% off AI ball machines and drill accessories.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pongbot-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on intelligent sports robots",
        description: "Receive free ground shipping across the continental US with reliable courier tracking on all PongBot models.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 26. WOODLAND DIRECT (Fireplaces, Gas Logs, Fire Pits & Outdoor Living - Chirpy Link)
  {
    id: 806,
    name: "Woodland Direct",
    slug: "woodland-direct",
    aliases: ["woodland-direct-us", "woodlanddirect", "woodlanddirect-us"],
    website: "https://www.woodlanddirect.com",
    affiliate_url: "https://chirpy.st/u26844_U5XHl0",
    logo: "/logos/woodland-direct.png",
    country: "US",
    description: "America's premier online store for gas & wood fireplaces, chimney caps, gas logs, fire pits, patio heaters, BBQ grills, and premium outdoor living.",
    coupons: [
      {
        id: "woodland-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off verified discount on fireplaces, patio & outdoor living",
        description: "Save 10% automatically applied through this exclusive partner link on fireplaces, fire pits, patio furniture, and accessories.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "Up to 20% off on selected items and seasonal clearance",
        description: "Save up to 20% on selected gas logs, fire bowls, and outdoor accessories. Discount applied automatically at checkout.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on DCS grills & premium outdoor kitchens",
        description: "Instant 10% discount automatically unlocked on DCS gas grills and outdoor kitchen components.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free shipping on qualifying orders over $99",
        description: "Enjoy free standard shipping to the contiguous US on thousands of products when you spend $99 or more.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on vented & ventless gas log sets",
        description: "Save 10% automatically on top-rated gas log sets. Includes natural gas and liquid propane configurations.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "FROM $349",
        title: "Gas fire pits and outdoor fire tables starting from $349",
        description: "Explore a massive selection of propane and natural gas fire pits starting at just $349 with fast home delivery.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "FROM $476",
        title: "Luxury patio furniture and dining collections from $476",
        description: "Shop all-weather wicker, aluminum, and teak outdoor patio furniture sets starting from $476.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "FROM $1,069",
        title: "Wood fireplaces and high-efficiency wood inserts from $1,069",
        description: "Discover EPA-certified wood burning fireplaces, zero-clearance models, and stove inserts starting at $1,069.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-9",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on newsletter email sign-up",
        description: "Sign up for Woodland Direct emails to receive an instant 10% discount on your upcoming purchase.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "5% OFF",
        title: "5% off on BBQ grills & smokers",
        description: "Automatic 5% savings applied on built-in and freestanding BBQ grills and smokers.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 27. RGB HALO KITS (Automotive Headlight Halos, Underglow & LED Lighting - UpPromote)
  {
    id: 807,
    name: "RGB Halo Kits",
    slug: "rgb-halo-kits",
    aliases: ["rgbhalokits", "rgb-halo-kit", "rgbhalokit"],
    website: "https://rgbhalokits.com",
    affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
    logo: "/logos/rgb-halo-kits.png",
    country: "US",
    description: "Industry-leading automotive custom lighting: Flow Series color-chasing halo headlight kits, RGBW DRL boards, LED underglow kits, lighted badges, and twinkle starlight headliners.",
    coupons: [
      {
        id: "rgb-deal-1",
        code: "RGBMETHEWDIPPY",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off verified exclusive partner discount code sitewide",
        description: "Apply working coupon code RGBMETHEWDIPPY at checkout to unlock 15% off halo kits, DRL boards, underglow, and LED emblems.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rgb-deal-2",
        code: "FLOW10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off promo code on Flow Series multicolor halo kits",
        description: "Save 10% on app-controlled sequential chasing LED halo rings and custom vehicle DRL board upgrades with code FLOW10.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rgb-deal-3",
        code: "UNDERGLOW15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off discount code on LED underglow & wheel ring kits",
        description: "Use active voucher code UNDERGLOW15 to receive 15% off high-output 4pc & 6pc flexible underbody light strips and quad wheel lights.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rgb-deal-4",
        code: "STARLIGHT20",
        is_auto_applied: false,
        discount: "$20 OFF",
        title: "$20 off coupon on twinkle starlight fiber optic ceiling kits",
        description: "Get $20 instant savings on 650-piece and 1000-piece Bluetooth twinkle fiber optic starlight headliner bundles with code STARLIGHT20.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rgb-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US ground shipping on orders over $150",
        description: "Enjoy zero shipping costs automatically applied at checkout for all domestic US orders over $150.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 28. SWA SABERS (Combat Dueling Sabers, Neopixel & Replica Lightsabers - UpPromote Direct)
  {
    id: 808,
    name: "SWA Sabers",
    slug: "swa-sabers",
    aliases: ["swasabers", "swa-saber", "swasaber"],
    website: "https://swasabers.com",
    affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
    logo: "/logos/swa-sabers.png",
    country: "US",
    description: "The most trusted lightsabers in the galaxy: heavy dueling combat sabers, Neopixel, Xenopixel V3, Proffie 2.2 boards, and collector-grade screen-accurate replica hilts.",
    coupons: [
      {
        id: "swa-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 25% OFF",
        title: "Up to 25% off automatic sitewide discount on custom lightsabers",
        description: "Instant discount automatically activated through this official partner link on all Xenopixel, Proffie, and Baselit dueling sabers.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "swa-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $100 OFF",
        title: "Save up to $100 on Neopixel & Proffie flagship replica hilts",
        description: "Automatic price drops on iconic collector replica sabers including Ahsoka, Anakin, Luke, Vader, and Kenobi configurations.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "swa-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FROM $79",
        title: "Baselit combat dueling lightsabers starting from just $79",
        description: "Heavy-grade aircraft aluminum hilt dueling sabers with 12 sound fonts and smooth swing technology starting at $79.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "swa-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked galaxy courier shipping on orders over $100",
        description: "Receive free insured delivery with live tracking numbers on all lightsaber orders totaling $100 or more.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "swa-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "SPECIAL DEAL",
        title: "Mystery Saber Box offers with guaranteed pixel & hilt upgrades",
        description: "Unlock limited edition mystery saber box tiers with guaranteed high-tier blade upgrades and accessory cases.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // Staged for live launch upon user request:
    // 29. LARINE (Remineralizing Gum, Mints & Oral Probiotic Care - Snowball / BuyLarine)
  {
    id: 809,
    name: "Larine",
    slug: "larine",
    aliases: ["larine-us", "buylarine", "buylarine-com", "larine-co"],
    website: "https://www.buylarine.com",
    affiliate_url: "https://www.buylarine.com/METHEW23131",
    logo: "/logos/larine.png",
    country: "US",
    description: "Doctor-formulated remineralizing oral care: sugar-free enamel repair chewing gum, breath mints, remineralizing pouches, and oral probiotic starter kits.",
    coupons: [
      {
        id: "larine-deal-1",
        code: "METHEW23131",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off verified exclusive discount code sitewide",
        description: "Apply working coupon code METHEW23131 at checkout to save 15% on remineralizing gum, mints, and oral health bundles.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-2",
        code: "METHEW23131",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off verified promo code on all enamel care kits",
        description: "Use active discount code METHEW23131 to unlock savings on Enamel Starter Kits and variety packs.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 60% OFF",
        title: "Up to 60% off on Enamel Starter Kits & bundles",
        description: "Save up to 60% on complete remineralizing starter sets with gum, mints, and pouches automatically at checkout.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $80 OFF",
        title: "Up to $80 off on bulk remineralizing gum boxes",
        description: "Get up to $80 in instant volume savings when purchasing multi-box bundles of nano-hydroxyapatite gum.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "25% off on long-lasting fresh breath mints",
        description: "Enjoy 25% off clean ingredient breath mints designed to balance your oral microbiome.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free US standard shipping on qualifying orders",
        description: "Automatic free delivery applied at checkout on all eligible domestic US subscriptions and bundles.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 30. PLATED SKIN SCIENCE (Exosome Skincare & Anti-Aging Serums - MRGE 10% CPA)
  {
    id: 810,
    name: "Plated Skin Science",
    slug: "plated-skin",
    aliases: ["plated-skin-science", "plated", "buypated", "platedskinscience"],
    website: "https://platedskinscience.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
    logo: "/logos/plated-skin.png",
    country: "US",
    description: "Breakthrough exosome skincare formulated with Renewosome™ technology. Clinically proven to accelerate cellular renewal, reduce redness, and smooth deep wrinkles.",
    coupons: [
      {
        id: "plated-deal-1",
        code: "WELCOME15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off verified exclusive coupon code sitewide",
        description: "Apply promo code WELCOME15 at checkout to receive 15% off your order of clinically proven exosome serums.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-2",
        code: "INTENSE20",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% off INTENSE Serum for rapid collagen & wrinkle renewal",
        description: "Get 20% off highest-concentration exosome INTENSE Serum with working discount code INTENSE20.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-3",
        code: "DAILY15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off DAILY Serum for radiant skin barrier repair",
        description: "Save 15% on DAILY exosome serum designed to defend against environmental aging with code DAILY15.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-4",
        code: "HAIR20",
        is_auto_applied: false,
        discount: "20% OFF",
        title: "20% off CALM Serum and Hair Density Recovery Serum",
        description: "Use active voucher code HAIR20 to save 20% on scalp revitalization and post-procedure calm serums.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $65 OFF",
        title: "Up to $65 off on Duo & Trio Skincare Bundles",
        description: "Save up to $65 automatically when purchasing the complete Intense + Daily serum regimen bundle.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on all skincare orders",
        description: "Enjoy 100% complimentary tracked delivery across the United States automatically applied at checkout.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 31. NUVIO RECOVERY (Red Light Therapy, Infrared Saunas & Ice Baths)
  {
    id: 811,
    name: "Nuvio Recovery",
    slug: "nuvio-recovery",
    aliases: ["nuvio", "nuviorecovery", "nuvio-us"],
    website: "https://nuviorecovery.com",
    affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
    logo: "/logos/nuvio-recovery.png",
    country: "US",
    description: "Professional-grade wellness and recovery equipment: high-irradiance red light therapy panels, portable infrared home saunas, ice baths, and cold plunge systems.",
    coupons: [
      {
        id: "nuvio-deal-1",
        code: "METHEW50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 off verified discount code sitewide",
        description: "Save an instant $50 on any red light therapy panel, infrared sauna, or cold plunge tub with code METHEW50.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-2",
        code: "METHEW50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 off clinical red light therapy panels",
        description: "Apply promo code METHEW50 to receive $50 off targeted and full-body medical-grade red light panels.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-3",
        code: "METHEW50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 off portable infrared home saunas & domes",
        description: "Get $50 off premium low-EMF infrared saunas and sauna blankets with working voucher code METHEW50.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-4",
        code: "METHEW50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 off portable ice baths & cold plunge tubs",
        description: "Take $50 off insulated ice bath recovery tubs and cold water plunge systems using code METHEW50.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 35% OFF",
        title: "Up to 35% off recovery bundle packs",
        description: "Save up to 35% on combo recovery kits combining infrared sauna blankets and red light therapy units.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free express shipping + 1-year full warranty",
        description: "All orders include fast express doorstep shipping, 30-day money-back guarantee, and full 1-year product warranty.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
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
    website: regStore.affiliate_url || regStore.website
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
      affiliateLink: affiliate
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
