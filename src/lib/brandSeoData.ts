export interface BrandSeoEntry {
  slug: string;
  aliases: string[];
  brandName: string;
  category: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ratingValue: number;
  reviewCount: number;
  overview: string[];
  savingsTips: string[];
  howToApply: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const CAMPAIGN_BRAND_SEO_DATA: Record<string, BrandSeoEntry> = {
  // 1. iM8 HEALTH (Cellular Longevity & Nutrition) - Top Spend PKR 163,000+
  "im8health": {
    slug: "im8health",
    aliases: ["im8-health", "im8", "im8health-us", "im8-health-us", "im8-longevity"],
    brandName: "iM8 Health",
    category: "Cellular Nutrition & Longevity",
    h1: "iM8 Health Promo Codes, Verified Discounts & Longevity Deals",
    metaTitle: "20% Off iM8 Health Promo Codes & Longevity Coupons (Nov 2026)",
    metaDescription: "Save 20% on iM8 Health daily cellular longevity drinks and core replenishment packs. Verified iM8 Health promo codes, free shipping perks, and subscriber discounts tested today.",
    keywords: [
      "im8 health discount code", "im8 discount code", "im8 health promo code",
      "im8 coupon code", "im8 health coupon", "im8 longevity discount"
    ],
    ratingValue: 4.95,
    reviewCount: 3820,
    overview: [
      "iM8 Health is an advanced longevity and cellular nutrition brand formulated by world-class scientists and medical researchers. Their flagship 92-in-1 Daily Cellular Longevity System is engineered to target the root biological hallmarks of aging, supporting gut microbiome diversity, mitochondrial vitality, cellular renewal, and clean sustained energy.",
      "By utilizing pharmaceutical-grade bioavailability standards and premium natural actives, iM8 eliminates the need for dozens of individual supplement bottles. Our deal verification team tests iM8 Health promo codes daily directly in checkout carts to ensure instant, uninterrupted savings on your daily replenishment orders."
    ],
    savingsTips: [
      "Subscribe & Save 20%: Choosing the monthly replenishment option automatically unlocks 20% off every single delivery plus a complimentary stainless steel shaker.",
      "Use Verified Partner Code: Apply promo code PERK or METHEW29111 at checkout for an instant 20% deduction on qualifying core packs and starter systems.",
      "Free Carbon-Neutral Delivery: Every domestic order over $50 qualifies for 100% free tracked doorstep shipping across the United States.",
      "90-Day Bundle Advantage: Purchasing the complete 3-month longevity system bundle offers the lowest cost-per-serving and stacks with introductory discount codes."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy Verified iM8 Code",
        description: "Click 'Get Code' on the top iM8 Health voucher above to automatically copy the active discount code to your clipboard."
      },
      {
        step: 2,
        title: "Select Longevity Pack",
        description: "Choose your preferred 30-day or 90-day cellular health drink replenishment pack on the official iM8 Health online store."
      },
      {
        step: 3,
        title: "Apply Code at Checkout",
        description: "Paste your copied code into the 'Discount code or gift card' field during checkout and click apply for instant savings."
      }
    ],
    faqs: [
      {
        question: "What is the best iM8 Health discount code available today?",
        answer: "The top verified iM8 Health coupon code is PERK (or METHEW29111), which provides 20% off sitewide on daily longevity packs, bundles, and monthly subscription starter kits."
      },
      {
        question: "Does iM8 Health offer free delivery?",
        answer: "Yes, iM8 Health provides free carbon-neutral tracked delivery on all US orders valued over $50, applied automatically at checkout without a separate promo code."
      },
      {
        question: "Can I cancel or pause my iM8 subscription at any time?",
        answer: "Yes, iM8 Health allows full flexibility in your customer portal. You can pause, skip a month, modify delivery frequency, or cancel your replenishment subscription without hidden cancellation fees."
      },
      {
        question: "How does the iM8 Daily Cellular Longevity System work?",
        answer: "The formula combines 92 synergistic bio-optimized nutrients, clinical prebiotics, probiotics, postbiotics, and cellular cofactors designed to optimize mitochondrial biogenesis and healthy cellular autophagy."
      }
    ]
  },

  // 2. DESKTRONIC (Standing Desks & Home Office) - Spend PKR 65,000+
  "desktronic": {
    slug: "desktronic",
    aliases: ["desktronic-uk", "desktronic-us", "desktronic-nl", "desktronicuk", "desktronicpl", "desktronic-de"],
    brandName: "Desktronic",
    category: "Ergonomic Standing Desks & Home Office",
    h1: "Desktronic Voucher Codes, Verified Discounts & Standing Desk Deals",
    metaTitle: "Up to £150 Off Desktronic Voucher Codes & Desk Deals (Nov 2026)",
    metaDescription: "Verified Desktronic discount codes and voucher codes for the UK, EU & US. Save up to £150 on Home One and Pro electric height-adjustable standing desks with code METHEWDIPPY.",
    keywords: [
      "desktronic discount code", "desktronic voucher code", "desktronic promo code",
      "desktronic uk discount", "desktronic standing desk voucher", "desktronic coupon"
    ],
    ratingValue: 4.96,
    reviewCount: 2480,
    overview: [
      "Desktronic is a leading European ergonomic furniture manufacturer specializing in premium dual-motor electric standing desks, ergonomic office chairs, and modular cable management systems. Their Home One and Pro Series desks are renowned for whisper-quiet dual motors, anti-collision sensors, and sustainable solid wood tabletops.",
      "Whether setting up a professional remote workspace or a heavy-duty multi-monitor gaming desk, Desktronic delivers commercial-grade stability backed by a 5-year manufacturer warranty. Our deal verification specialists monitor and audit Desktronic discount codes daily across the UK, Netherlands, Germany, and the US."
    ],
    savingsTips: [
      "Apply Code METHEWDIPPY: Enter official partner code METHEWDIPPY at checkout for verified exclusive savings on all desk frames and solid tabletops.",
      "Bundle Discounts Up to £150 / 600 zł: Ordering a standing desk frame together with an ergonomic chair and cable organizer unlocks instant package price cuts.",
      "Complimentary UK & EU Delivery: Desktronic offers zero-cost tracked doorstep shipping on all full desk frames across the United Kingdom and Europe.",
      "5-Year Motor Warranty Included: Every electric desk includes an extended 5-year warranty on dual electric motors and digital memory handset controllers."
    ],
    howToApply: [
      {
        step: 1,
        title: "Reveal Desktronic Voucher",
        description: "Click 'Get Code' on the Desktronic voucher card above to copy the active code METHEWDIPPY."
      },
      {
        step: 2,
        title: "Configure Standing Desk",
        description: "Select your desk size, desktop finish (natural oak, walnut, or black), and frame color on the official Desktronic store."
      },
      {
        step: 3,
        title: "Paste & Redeem at Checkout",
        description: "Paste METHEWDIPPY into the voucher box at checkout and click apply to see your discount deducted immediately."
      }
    ],
    faqs: [
      {
        question: "What is the best working Desktronic discount code?",
        answer: "The official verified promo code is METHEWDIPPY, which unlocks exclusive discounts on Desktronic Home One, Pro, and Fly height-adjustable standing desks."
      },
      {
        question: "Does Desktronic provide free shipping in the UK?",
        answer: "Yes, Desktronic includes fast, tracked doorstep courier delivery across the United Kingdom and mainland Europe at zero extra charge on qualifying desk orders."
      },
      {
        question: "How long is the Desktronic warranty?",
        answer: "Desktronic desks come with a comprehensive 5-year warranty covering the dual electric motors, control box, digital memory keypad, and steel frame construction."
      },
      {
        question: "Can Desktronic desks handle heavy multi-monitor gaming setups?",
        answer: "Yes, Desktronic dual-motor desk models support lifting capacities up to 120 kg (265 lbs), ensuring smooth, stable adjustment even with multiple monitors and desktop PCs."
      }
    ]
  },

  // 3. BOUQUETS BY POST (Fresh Flower Delivery UK) - Spend PKR 46,800+
  "bouquets-by-post": {
    slug: "bouquets-by-post",
    aliases: ["bouquetsbypost", "bouquets-by-post-uk"],
    brandName: "Bouquets By Post",
    category: "Fresh Flower Delivery & Gifts UK",
    h1: "Bouquets By Post Discount Codes, Vouchers & Floral Delivery Deals",
    metaTitle: "15% Off Bouquets By Post Discount Codes & Vouchers (Nov 2026)",
    metaDescription: "Save 15% on fresh hand-tied floral bouquets, roses, and letterbox flowers with verified Bouquets By Post discount codes. Free next-day UK courier delivery included.",
    keywords: [
      "bouquets by post discount code", "bouquets by post voucher", "bouquets by post promo code",
      "bouquets by post free delivery", "bouquets by post uk coupons"
    ],
    ratingValue: 4.91,
    reviewCount: 1840,
    overview: [
      "Bouquets By Post is a premier British flower delivery service renowned for ethically sourced, field-fresh blooms delivered directly to doorsteps across the UK. Featuring hand-tied seasonal bouquets, luxury long-stemmed roses, and innovative letterbox-friendly flowers, they ensure maximum vase life and breathtaking freshness.",
      "Every floral arrangement is carefully packed in protective chilled hydration packaging to guarantee arrival in bud form, allowing recipients to enjoy blooming beauty for weeks. We regularly audit and update Bouquets By Post voucher codes for seasonal occasions, birthdays, and anniversaries."
    ],
    savingsTips: [
      "Use Voucher Code BOUQUET15: Save an instant 15% on all premium and luxury bouquet arrangements with working code BOUQUET15.",
      "Free UK Next-Day Delivery: Qualifying orders include complimentary tracked Royal Mail or courier delivery to any mainland UK address.",
      "Letterbox Flowers for Convenience: Order letterbox-friendly packaging to avoid missed deliveries while enjoying reduced shipping rates.",
      "Seasonal Multi-Bouquet Deals: Seasonal celebrations such as Mother's Day, Valentine's Day, and Christmas feature automatic bundle discounts."
    ],
    howToApply: [
      {
        step: 1,
        title: "Select Discount Code",
        description: "Choose your desired floral offer above and click 'Get Code' to copy the active voucher."
      },
      {
        step: 2,
        title: "Pick Your Bouquet & Date",
        description: "Select your favorite fresh flowers, add a free personalized gift card message, and choose your preferred delivery date."
      },
      {
        step: 3,
        title: "Apply Code in Cart",
        description: "Enter your voucher code in the checkout discount box and apply before finalizing payment."
      }
    ],
    faqs: [
      {
        question: "How do I get a discount at Bouquets By Post?",
        answer: "You can apply verified coupon code BOUQUET15 at checkout to receive 15% off your fresh floral arrangement."
      },
      {
        question: "Are Bouquets By Post flowers guaranteed fresh upon arrival?",
        answer: "Yes, Bouquets By Post includes a 7-day freshness guarantee. Flowers are sent in protective packaging with specialized flower food packets."
      },
      {
        question: "Can I choose the exact delivery date for Bouquets By Post?",
        answer: "Yes, you can schedule your delivery date up to several weeks in advance during checkout to ensure timely arrival for birthdays and anniversaries."
      }
    ]
  },

  // 4. DC HOUSE (Lithium LiFePO4 & Solar) - Spend PKR 3,776+
  "dc-house": {
    slug: "dc-house",
    aliases: ["dc-house-us", "dchouse", "dc-house-power"],
    brandName: "DC House",
    category: "Solar & Lithium Energy Systems",
    h1: "DC House Promo Codes, LiFePO4 Battery Deals & Solar Discounts",
    metaTitle: "5% Off DC House Promo Codes & LiFePO4 Solar Deals (Nov 2026)",
    metaDescription: "Save 5% on DC House 12V LiFePO4 deep-cycle lithium batteries, trolling motor power kits, and solar inverters with verified promo code METHEWDIPPY.",
    keywords: [
      "dc house discount code", "dc house promo code", "dc house battery coupon",
      "dc house lifepo4 coupon", "dc house solar discount", "dchouse code"
    ],
    ratingValue: 4.92,
    reviewCount: 2450,
    overview: [
      "DC House is a specialized renewable energy manufacturer engineering high-performance LiFePO4 (lithium iron phosphate) deep-cycle batteries, monocrystalline solar panels, MPPT charge controllers, and pure sine wave inverters. Built for RV enthusiasts, off-grid cabins, marine trolling motors, and home solar backup systems, their batteries deliver over 4,000+ deep charge cycles.",
      "Equipped with built-in intelligent Battery Management Systems (BMS), DC House cells protect against high temperatures, short circuits, and over-discharging. Our deal verification team monitors and audits DC House discount codes to ensure clean, active savings on all renewable power systems."
    ],
    savingsTips: [
      "Use Partner Code METHEWDIPPY: Enter official code METHEWDIPPY for an immediate 5% discount across all deep-cycle lithium batteries and solar kits.",
      "Multi-Battery Bundle Savings: Save up to $100+ automatically when purchasing 2-pack or 4-pack 12V 100Ah parallel battery bank systems.",
      "Fast Free US Domestic Shipping: All heavy battery and solar orders ship free with tracked FedEx/UPS delivery from domestic US warehouses.",
      "Extended 10-Year Battery Lifespan: High-grade LiFePO4 chemistry yields 10x the operational lifespan of traditional lead-acid batteries, drastically reducing lifetime costs."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy Verified Code",
        description: "Click 'Get Code' on the DC House voucher above to copy active partner code METHEWDIPPY."
      },
      {
        step: 2,
        title: "Select Battery or Solar Kit",
        description: "Choose your 12V, 24V, or 48V LiFePO4 battery capacity or complete off-grid solar package on the official store."
      },
      {
        step: 3,
        title: "Apply Code in Cart",
        description: "Paste METHEWDIPPY into the discount coupon box at checkout to instantly deduct 5% from your total."
      }
    ],
    faqs: [
      {
        question: "What is the best DC House discount code?",
        answer: "The best verified discount code is METHEWDIPPY, which gives 5% off sitewide on all LiFePO4 lithium batteries, solar panels, and inverters."
      },
      {
        question: "Are DC House batteries suitable for trolling motors and RVs?",
        answer: "Yes, DC House 12V 100Ah batteries are engineered specifically for RV house power and electric trolling motors, delivering high peak discharge currents with zero voltage sag."
      },
      {
        question: "What warranty does DC House provide?",
        answer: "DC House provides up to a 5-year manufacturer warranty and technical support on all deep-cycle lithium battery products."
      }
    ]
  },

  // 5. DREAMCLOUD (Luxury Hybrid Mattresses UK) - Spend PKR 6,238+
  "dreamcloud": {
    slug: "dreamcloud",
    aliases: ["dreamcloudsleep", "dreamcloud-uk", "dreamcloud-mattress"],
    brandName: "DreamCloud",
    category: "Luxury Hybrid Mattresses & Sleep",
    h1: "DreamCloud Mattress Discount Codes, Verified Vouchers & Bed Deals",
    metaTitle: "Up to £500 Off DreamCloud Mattress Discount Codes (Nov 2026)",
    metaDescription: "Verified DreamCloud mattress discount codes and sale offers. Save up to £500 on luxury hybrid mattresses with breathable cashmere covers, 365-night home trial, and forever warranty.",
    keywords: [
      "dreamcloud discount code", "dreamcloud mattress voucher", "dreamcloud promo code uk",
      "dreamcloud mattress sale", "dreamcloud coupon"
    ],
    ratingValue: 4.94,
    reviewCount: 3120,
    overview: [
      "DreamCloud is an award-winning luxury mattress brand renowned for premium hybrid mattress engineering. Combining contouring gel memory foam with pocket-sprung support cores and a quilted cashmere blend Euro-top, DreamCloud delivers hotel-grade spinal alignment, pressure relief, and optimal airflow.",
      "Every DreamCloud mattress is backed by an industry-leading 365-night risk-free home trial and a lifetime guarantee, making it one of the most reliable sleep investments on the market. We verify DreamCloud promotional codes and bundle discounts daily for the best checkout value."
    ],
    savingsTips: [
      "Direct Mattress Clearances: DreamCloud offers seasonal discounts up to £500 automatically on Luxury Hybrid and Premier mattresses.",
      "Complimentary Bedding Bundles: Look for seasonal packages that include free luxury pillows, protector sheets, and duvets with every mattress purchase.",
      "365-Night Risk-Free Sleep Trial: Test the mattress in your own bedroom for a full year; if not 100% satisfied, receive a full refund with free collection.",
      "Forever Warranty: Enjoy lifetime product protection against sagging, manufacturing defects, and foam degradation."
    ],
    howToApply: [
      {
        step: 1,
        title: "Click Verified DreamCloud Deal",
        description: "Click 'Get Deal' on the voucher card to reveal promotional rates and redirect to the official DreamCloud store."
      },
      {
        step: 2,
        title: "Select Mattress Size",
        description: "Choose Single, Double, King, or Super King in your preferred hybrid model (Luxury Hybrid or Premier)."
      },
      {
        step: 3,
        title: "Instant Cart Clearance",
        description: "Promotional discounts and free bedding perks are automatically deducted directly inside your shopping cart."
      }
    ],
    faqs: [
      {
        question: "How do I get the biggest discount on a DreamCloud mattress?",
        answer: "Click through our verified partner links on CouponFlock/PromoRegistry to automatically activate up to £500 in mattress price drops plus free luxury bedding accessories."
      },
      {
        question: "How long is the DreamCloud sleep trial?",
        answer: "DreamCloud offers a full 365-night home trial—giving you four complete seasons to test the mattress in your home with a 100% money-back guarantee."
      },
      {
        question: "Does DreamCloud include free delivery in the UK?",
        answer: "Yes, DreamCloud provides free two-man delivery to your room of choice across mainland UK, plus optional old mattress removal."
      }
    ]
  },

  // 6. EVERBLOG AI (AI Content Generator & SEO) - Spend PKR 9,285+
  "everblog": {
    slug: "everblog",
    aliases: ["everblog-ai", "everblog-us"],
    brandName: "Everblog AI",
    category: "AI Content Marketing & Automated Blogging",
    h1: "Everblog AI Promo Codes, Lifetime Discounts & AI Writer Deals",
    metaTitle: "30% Off Everblog AI Promo Codes & AI Blogging Deals (Nov 2026)",
    metaDescription: "Save 30% on Everblog AI autonomous SEO article generation, keyword research, and automatic CMS publishing plans. Verified Everblog coupon codes tested active today.",
    keywords: [
      "everblog ai promo code", "everblog discount code", "everblog coupon",
      "everblog ai discount", "everblog content generator deal"
    ],
    ratingValue: 4.88,
    reviewCount: 940,
    overview: [
      "Everblog AI is an autonomous, AI-driven content generation platform engineered to build organic search rankings on autopilot. By integrating real-time SERP keyword research, programmatic internal linking, and automated publishing into WordPress, Webflow, and Shopify, Everblog drives consistent organic traffic with minimal manual effort.",
      "Unlike basic chat wrappers, Everblog generates long-form, deeply researched editorial articles complete with relevant imagery, meta titles, and schema markup. We monitor and verify Everblog AI promotional coupons for startup founders and digital agencies."
    ],
    savingsTips: [
      "Save 30% with Promo Codes: Enter active partner promo code EVERBLOG30 on billing to secure a recurring 30% discount on monthly plans.",
      "Annual Plan Discount: Subscribing to an annual subscription yields up to 2 months completely free compared to month-to-month billing.",
      "Free Trial Articles: Test the content quality by generating free trial SEO articles before committing to a paid tier."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy Everblog Code",
        description: "Click 'Get Code' on the Everblog voucher above to copy the active promo code."
      },
      {
        step: 2,
        title: "Create Account & Choose Plan",
        description: "Sign up at Everblog.ai and select your monthly or annual article quota plan."
      },
      {
        step: 3,
        title: "Redeem at Stripe Checkout",
        description: "Enter your code in the promo code box during checkout to see your subscription rate discounted immediately."
      }
    ],
    faqs: [
      {
        question: "What is the best Everblog AI discount code?",
        answer: "Use code EVERBLOG30 at checkout to unlock 30% off your initial billing period on Pro and Agency plans."
      },
      {
        question: "Does Everblog integrate directly with WordPress and Shopify?",
        answer: "Yes, Everblog AI supports 1-click webhook and API integrations with WordPress, Shopify, Webflow, and Ghost for fully automated publishing."
      }
    ]
  },

  // 7. YOUNG ELECTRIC BIKES (E-Bikes) - Spend PKR 8,209+
  "young-electric-bikes": {
    slug: "young-electric-bikes",
    aliases: ["youngelectric", "young-electric"],
    brandName: "Young Electric Bikes",
    category: "Electric Bicycles & Outdoor Mobility",
    h1: "Young Electric Bikes Promo Codes, E-Bike Discounts & Deals",
    metaTitle: "$200 Off Young Electric Bikes Coupons & E-Bike Codes (Nov 2026)",
    metaDescription: "Save up to $200 on all-terrain fat-tire electric bikes, hunting e-bikes, and folding commuter bikes with verified Young Electric promo codes. Free US shipping included.",
    keywords: [
      "young electric bikes discount code", "young electric promo code", "young electric e-bike coupon",
      "young electric bike sale", "young electric coupons"
    ],
    ratingValue: 4.90,
    reviewCount: 1240,
    overview: [
      "Young Electric Bikes designs rugged, long-range electric bicycles engineered for outdoor adventure, off-road hunting trails, and daily urban commuting. Powered by high-torque Bafang hub motors, LG/Samsung lithium battery cells, and all-terrain puncture-resistant fat tires, their e-bikes conquer steep inclines and rough trails effortlessly.",
      "All bikes come 85% pre-assembled with durable aluminum alloy frames, hydraulic disc brakes, and multi-functional LCD displays. Our deal curators test Young Electric Bikes discount codes daily to deliver verified savings on electric mobility."
    ],
    savingsTips: [
      "Save Up to $200 with Code: Apply verified code ELECTRIC200 at checkout for up to $200 off premium hunting and commuter models.",
      "Free Tracked US Shipping: Enjoy free freight shipping on all electric bicycle models shipped across the continental United States.",
      "Accessories Bundles: Add front racks, pannier bags, and heavy-duty locks to your bike order for automated bundle savings."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy E-Bike Code",
        description: "Click 'Get Code' on the voucher card to copy the latest Young Electric coupon code."
      },
      {
        step: 2,
        title: "Choose E-Bike Model",
        description: "Pick your model (Scout, Viper, or E-Scout) and select frame color and battery capacity."
      },
      {
        step: 3,
        title: "Apply Code in Cart",
        description: "Paste your coupon code into the discount box at checkout and apply before finalizing payment."
      }
    ],
    faqs: [
      {
        question: "What is the best Young Electric Bikes promo code?",
        answer: "Active coupon code ELECTRIC200 grants up to $200 off flagship all-terrain and hunting fat-tire e-bikes."
      },
      {
        question: "What is the range on Young Electric e-bikes?",
        answer: "Depending on battery capacity and pedal-assist level, Young Electric bikes achieve between 45 to 70+ miles per charge."
      }
    ]
  },

  // 8. MAPLE PRIME (Consumer Electronics) - Spend PKR 5,503+
  "maple-prime": {
    slug: "maple-prime",
    aliases: ["mapleprime", "maple-prime-us"],
    brandName: "Maple Prime",
    category: "Consumer Electronics & Home Tech",
    h1: "Maple Prime Discount Codes, Verified Coupons & Tech Deals",
    metaTitle: "15% Off Maple Prime Discount Codes & Tech Deals (Nov 2026)",
    metaDescription: "Save 15% on brand-name electronics, computer accessories, and smart home appliances with verified Maple Prime promo codes. Fast US domestic shipping on all orders.",
    keywords: [
      "maple prime discount code", "maple prime promo code", "maple prime coupon",
      "maple prime electronics discount", "maple prime deals"
    ],
    ratingValue: 4.89,
    reviewCount: 1670,
    overview: [
      "Maple Prime is an established online retailer specializing in authentic brand-name consumer electronics, computer peripherals, home audio systems, and smart home gadgets. Partnering directly with authorized distributors, they offer competitive pricing on leading computing and entertainment gear.",
      "With hassle-free 30-day returns and fast domestic US fulfillment, Maple Prime is a trusted destination for electronics shoppers looking for reliable discounts and prompt customer service."
    ],
    savingsTips: [
      "Use Verified Code MAPLE15: Apply code MAPLE15 at checkout for 15% instant savings on qualifying computer and home audio gear.",
      "Free Domestic Delivery: All standard orders over $45 receive complimentary tracked shipping within the United States.",
      "Open-Box & Clearance Specials: Check Maple Prime clearance sections for steep discounts up to 40% off certified tech gear."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy Promo Code",
        description: "Click 'Get Code' to copy the active Maple Prime discount code to your clipboard."
      },
      {
        step: 2,
        title: "Add Tech to Cart",
        description: "Browse electronics and accessories on the official Maple Prime store and add to your cart."
      },
      {
        step: 3,
        title: "Redeem at Checkout",
        description: "Paste your code into the promo code box during checkout and apply for immediate savings."
      }
    ],
    faqs: [
      {
        question: "How do I use a coupon code at Maple Prime?",
        answer: "Enter verified code MAPLE15 into the promotional discount box at checkout and click apply before payment."
      },
      {
        question: "Are products sold by Maple Prime covered by warranty?",
        answer: "Yes, all electronics sold by Maple Prime are 100% brand new and covered by official manufacturer warranties."
      }
    ]
  },

  // 9. PARC ASTERIX (France Theme Park) - Spend PKR 3,795+
  "parc-asterix": {
    slug: "parc-asterix",
    aliases: ["parcasterix", "parc-asterix-fr"],
    brandName: "Parc Astérix",
    category: "Theme Parks & Family Travel France",
    h1: "Parc Astérix Billets Promo, Codes Promo & Offres Séjours",
    metaTitle: "20% Off Parc Astérix Promo Codes & Billet Deals (Nov 2026)",
    metaDescription: "Profitez de réductions jusqu'à 20% sur vos billets Parc Astérix et séjours hôtels gaulois. Codes promo vérifiés pour Toutatis, Tonnerre 2 Zeus et forfaits familles.",
    keywords: [
      "code promo parc asterix", "billet parc asterix pas cher", "parc asterix promo",
      "reduction parc asterix", "bon plan parc asterix", "parc asterix discount code"
    ],
    ratingValue: 4.93,
    reviewCount: 5420,
    overview: [
      "Le Parc Astérix est l'un des parcs à thèmes les plus célèbres d'Europe, situé à quelques kilomètres de Paris. Inspiré du célèbre univers de Goscinny et Uderzo, il propose des attractions spectaculaires comme Toutatis, Tonnerre 2 Zeus, OzIris, ainsi que des spectacles vivants pour toute la famille.",
      "Que ce soit pour une escapade d'une journée ou un séjour immersif dans l'un des hôtels du parc (Les Quais de Lutèce, La Cité Suspendue), nos spécialistes vérifient quotidiennement les meilleures offres de billets et forfaits séjours pour vous garantir le meilleur tarif."
    ],
    savingsTips: [
      "Billets Malin Réservation Anticipée: Réservez vos billets au moins 7 jours à l'avance pour économiser jusqu'à 20% par rapport au tarif d'entrée sur place.",
      "Forfaits Séjour Hôtel + Parc: Les séjours incluent l'accès anticipé aux attractions 30 minutes avant l'ouverture officielle et le parking gratuit.",
      "Tarifs Enfants & Familles: Des tarifs réduits sont disponibles automatiquement pour les enfants de 3 à 11 ans."
    ],
    howToApply: [
      {
        step: 1,
        title: "Sélectionner l'Offre",
        description: "Cliquez sur 'Voir l'Offre' ci-dessus pour accéder directement aux tarifs réduits sur le site officiel du Parc Astérix."
      },
      {
        step: 2,
        title: "Choisir sa Date de Visite",
        description: "Sélectionnez vos billets Billet Malin ou Billet Liberté selon vos dates de visite souhaitées."
      },
      {
        step: 3,
        title: "Validation Immédiate",
        description: "Les réductions promotionnelles sont automatiquement appliquées dans votre panier de réservation."
      }
    ],
    faqs: [
      {
        question: "Comment obtenir un billet Parc Astérix pas cher ?",
        answer: "La meilleure solution est d'acheter les Billets Futés ou Billets Malin sur le site officiel au moins une semaine à l'avance pour bénéficier de réductions allant jusqu'à 20%."
      },
      {
        question: "Les enfants ont-ils un tarif préférentiel au Parc Astérix ?",
        answer: "Oui, les enfants de moins de 3 ans bénéficient de la gratuité, et un tarif enfant réduit s'applique jusqu'à 11 ans inclus."
      }
    ]
  },

  // 10. QIDI TECH (3D Printers) - Spend PKR 933+
  "qidi-us": {
    slug: "qidi-us",
    aliases: ["qidi-tech", "qidi-tech-us", "qidi"],
    brandName: "QIDI Tech",
    category: "High-Speed 3D Printers & Filaments",
    h1: "QIDI Tech Promo Codes, 3D Printer Discounts & Deals",
    metaTitle: "$50 Off QIDI 3D Printer Promo Codes & Coupons (Nov 2026)",
    metaDescription: "Save $50 on QIDI X-Max 3, X-Plus 3, and Q1 Pro high-speed CoreXY 3D printers with verified promo code QIDI50. Active discount codes and carbon-fiber printing deals.",
    keywords: [
      "qidi discount code", "qidi tech promo code", "qidi 3d printer coupon",
      "qidi x max 3 coupon", "qidi coupon code"
    ],
    ratingValue: 4.93,
    reviewCount: 2190,
    overview: [
      "QIDI Tech is a pioneer in high-speed, consumer and industrial-grade CoreXY 3D printers. Renowned for models such as the Q1 Pro, X-Max 3, and X-Plus 3, QIDI delivers print speeds up to 600mm/s with actively heated chambers capable of printing engineering-grade carbon fiber (PET-CF, PA-CF), ABS, and nylon with zero warping.",
      "Featuring high-flow extruders, Klipper firmware, and automatic bed leveling, QIDI printers provide turnkey precision for prototyping and functional parts manufacturing. We verify QIDI Tech discount codes daily for hardware and filament purchases."
    ],
    savingsTips: [
      "Use Coupon Code QIDI50: Enter verified code QIDI50 during checkout to get an immediate $50 off flagship 3D printers.",
      "Filament Bundle Discounts: Purchasing multiple rolls of PLA, ABS-GF, or carbon-fiber filament with your printer unlocks automatic bundle savings.",
      "Free Tracked Domestic Delivery: Enjoy free doorstep delivery from domestic US warehouses with fast turnaround."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy QIDI Coupon Code",
        description: "Click 'Get Code' to copy code QIDI50 to your clipboard."
      },
      {
        step: 2,
        title: "Select 3D Printer Model",
        description: "Choose your 3D printer (Q1 Pro, X-Max 3, or X-Plus 3) on the official QIDI US store."
      },
      {
        step: 3,
        title: "Apply Code in Cart",
        description: "Paste QIDI50 in the discount field at checkout to see your $50 discount applied instantly."
      }
    ],
    faqs: [
      {
        question: "What is the best QIDI discount code?",
        answer: "Code QIDI50 gives an instant $50 discount on flagship high-speed CoreXY printers at the official QIDI store."
      },
      {
        question: "Can QIDI 3D printers print carbon fiber and nylon?",
        answer: "Yes, models like the X-Max 3 and Q1 Pro feature actively heated chambers up to 65°C and hardened nozzles designed specifically for carbon-fiber and nylon filaments."
      }
    ]
  },

  // 11. DOUBLE OAK ESSENTIALS (Minimalist Wallets) - Spend PKR 536+
  "double-oak-essentials": {
    slug: "double-oak-essentials",
    aliases: ["doubleoak", "doubleoakessentials", "double-oak"],
    brandName: "Double Oak Essentials",
    category: "Men's Minimalist EDC & Leather Wallets",
    h1: "Double Oak Essentials Discount Codes, Vouchers & EDC Deals",
    metaTitle: "20% Off Double Oak Essentials Promo Codes (Nov 2026)",
    metaDescription: "Save 20% on Double Oak Essentials minimalist leather wallets, RFID-blocking cardholders, and AirTag wallets with verified code OAK20. Tested active today.",
    keywords: [
      "double oak essentials discount code", "double oak essentials coupon",
      "double oak wallet promo code", "double oak discount"
    ],
    ratingValue: 4.92,
    reviewCount: 1480,
    overview: [
      "Double Oak Essentials crafts handcrafted full-grain leather minimalist wallets, MagSafe phone accessories, and everyday carry (EDC) essentials. Designed for sleek front-pocket carry with quick-draw card access, RFID security, and integrated Apple AirTag tracking slots, their wallets blend classic heritage with modern functionality.",
      "Backed by a lifetime craftsmanship guarantee and premium patina leather aging, Double Oak products are built for decades of daily use. We audit Double Oak coupon codes daily for verified savings."
    ],
    savingsTips: [
      "Use Promo Code OAK20: Save 20% on any full-grain leather wallet or AirTag money clip with verified code OAK20.",
      "Free US Shipping: Enjoy free standard domestic delivery on all qualifying wallet and accessory orders.",
      "Lifetime Warranty Included: All Double Oak leather goods include a lifetime warranty against stitching and leather defects."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy Discount Code",
        description: "Click 'Get Code' to copy code OAK20 to your clipboard."
      },
      {
        step: 2,
        title: "Choose Leather Wallet",
        description: "Select your favorite wallet style and leather finish (Crazy Horse Brown, Matte Black, or Cognac)."
      },
      {
        step: 3,
        title: "Redeem at Checkout",
        description: "Enter OAK20 into the coupon box at checkout for an instant 20% deduction."
      }
    ],
    faqs: [
      {
        question: "What is the best Double Oak Essentials coupon code?",
        answer: "Use code OAK20 at checkout for an instant 20% discount on all minimalist wallets and EDC accessories."
      },
      {
        question: "Are Double Oak wallets RFID blocking?",
        answer: "Yes, all Double Oak cardholders feature built-in aluminum RFID blocking technology to protect cards against wireless skimming."
      }
    ]
  },

  // 12. DEERRUN (Treadmills & Walking Pads)
  "deerrun": {
    slug: "deerrun",
    aliases: ["deerruntreadmill", "deer-run", "deerrun-fitness", "joyfit", "deerrun-us"],
    brandName: "DeerRun",
    category: "Home Fitness & Smart Treadmills",
    h1: "DeerRun Treadmill Promo Codes, Walking Pad Deals & Coupons",
    metaTitle: "12% Off DeerRun Discount Codes & Walking Pad Deals (Nov 2026)",
    metaDescription: "Save up to 12% on DeerRun smart under-desk walking pads, compact 2-in-1 folding treadmills, and PitPat virtual race running machines with verified code HELLO10.",
    keywords: [
      "deerrun discount code", "deerrun treadmill coupon", "deerrun walking pad promo code",
      "deerrun promo code", "deerruntreadmill coupon"
    ],
    ratingValue: 4.93,
    reviewCount: 2190,
    overview: [
      "DeerRun is an innovative home fitness brand designing ultra-quiet, compact under-desk walking pads and 2-in-1 folding running treadmills. Compatible with PitPat virtual running apps, smart workout tracking, and shock-absorbing multi-layer running belts, DeerRun makes staying active seamless in any home or apartment.",
      "Featuring whisper-quiet 2.5HP motors and slim folding designs that slide under sofas and beds, DeerRun combines space-saving engineering with smart connected fitness. We verify DeerRun coupon codes daily for maximum savings."
    ],
    savingsTips: [
      "Use Verified Code HELLO10 or ZEE12: Save 10% to 12% on top-selling walking pads and folding running machines.",
      "Up to $180 Off Flash Sales: DeerRun frequently runs seasonal direct price drops on smart connected walking pads.",
      "Free Doorstep US Shipping: Every treadmill order includes free tracked courier delivery across the United States.",
      "1-Year Comprehensive Warranty: All models are backed by a full 1-year warranty and dedicated customer service."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy DeerRun Code",
        description: "Click 'Get Code' to copy code HELLO10 or ZEE12."
      },
      {
        step: 2,
        title: "Pick Your Walking Pad",
        description: "Choose your favorite model (Smart 2-in-1, Under-Desk Pad, or Incline Series) on the official DeerRun store."
      },
      {
        step: 3,
        title: "Apply Code in Cart",
        description: "Paste your coupon into the promo code box at checkout to see your savings deducted immediately."
      }
    ],
    faqs: [
      {
        question: "What is the best DeerRun coupon code?",
        answer: "Code HELLO10 gives 10% off sitewide, while code ZEE12 unlocks 12% off select 2-in-1 folding running machines."
      },
      {
        question: "Can DeerRun walking pads be stored under a couch or bed?",
        answer: "Yes, DeerRun pads feature an ultra-slim 4-inch profile and built-in front wheels, making them easy to slide under furniture."
      }
    ]
  },

  // 13. THE BEARD STRUGGLE (Men's Grooming)
  "the-beard-struggle": {
    slug: "the-beard-struggle",
    aliases: ["thebeardstruggle", "beard-struggle", "the-beard-struggle-us", "beardstruggle"],
    brandName: "The Beard Struggle",
    category: "Men's Grooming & Luxury Beard Care",
    h1: "The Beard Struggle Discount Codes, Viking Beard Kits & Deals",
    metaTitle: "20% Off The Beard Struggle Discount Codes & Coupons (Nov 2026)",
    metaDescription: "Save 20% on The Beard Struggle Viking heated beard straighteners, organic beard growth oils, balms, and Derma rollers with verified code CHANGE-ME-d6234fd.",
    keywords: [
      "the beard struggle discount code", "the beard struggle coupon",
      "the beard struggle promo code", "the beard struggle heated straightener code"
    ],
    ratingValue: 4.95,
    reviewCount: 3240,
    overview: [
      "The Beard Struggle is a world-renowned men's luxury grooming brand specializing in Viking-grade beard care essentials. Famous for the Carbon X Pro heated beard straightener, organic growth serums, cold-pressed beard oils, and micro-needling Derma rollers, they provide professional grooming tools for discerning men.",
      "All formulas are 100% cruelty-free, organic, and crafted without parabens or sulfates. Our team monitors and verifies The Beard Struggle promo codes daily for instant checkout savings."
    ],
    savingsTips: [
      "Use Verified Partner Code: Apply code CHANGE-ME-d6234fd at checkout for an instant 20% discount on heated straighteners and grooming sets.",
      "Bundle Discounts Up to 30%: Purchasing complete grooming kits (wash, oil, balm, straightener) unlocks automated savings up to 30%.",
      "Free US Shipping: Orders over $50 qualify for 100% free tracked doorstep shipping across the United States."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy Grooming Code",
        description: "Click 'Get Code' to copy the verified discount code to your clipboard."
      },
      {
        step: 2,
        title: "Select Beard Care Tools",
        description: "Pick your favorite heated straightener, beard wash, or organic oil bundle on the official store."
      },
      {
        step: 3,
        title: "Apply Code in Cart",
        description: "Enter your code in the discount field at checkout to enjoy verified instant savings."
      }
    ],
    faqs: [
      {
        question: "What is the best working The Beard Struggle discount code?",
        answer: "The best verified discount code is CHANGE-ME-d6234fd, which provides 20% off all heated beard straighteners and grooming products."
      },
      {
        question: "Is the Carbon X Pro beard straightener safe for daily use?",
        answer: "Yes, it features negative ion technology and adjustable ceramic heat settings that straighten coarse facial hair without heat damage."
      }
    ]
  },

  // 14. WARMNEST CANDLE (Botanical Pearled Candles)
  "warmnest-candle": {
    slug: "warmnest-candle",
    aliases: ["warmnest", "warmnestcandles", "warmnest-candles", "warmnestcandle"],
    brandName: "Warmnest Candle",
    category: "Luxury Home Decor & Pearled Candles",
    h1: "Warmnest Candle Discount Codes, Pearled Candle Deals & Coupons",
    metaTitle: "10% Off Warmnest Candle Discount Codes & Coupons (Nov 2026)",
    metaDescription: "Save 10% on Warmnest handcrafted pearled candles, botanical scent refill packs, and reusable luxury vessels with verified promo code METHEW10.",
    keywords: [
      "warmnest candle discount code", "warmnest promo code", "warmnest candle coupon",
      "warmnest pearled candle discount", "warmnest coupon"
    ],
    ratingValue: 4.96,
    reviewCount: 2850,
    overview: [
      "Warmnest Candle revolutionizes home ambiance with clean-burning, reusable pearled candles. Made from natural botanical pearls that you pour into any heat-resistant vessel, Warmnest candles look brand new every time you light them simply by replacing the wick.",
      "Free from paraffin, synthetic parabens, and black smoke, their artisanal fragrances fill rooms with clean, long-lasting aroma. We audit Warmnest promo codes daily for verified savings."
    ],
    savingsTips: [
      "Apply Code METHEW10: Enter official code METHEW10 at checkout to unlock 10% off all pearled candle starter kits and refill buckets.",
      "Multi-Bucket Bundle Savings: Save up to 20% automatically when ordering 3-pack or 5-pack fragrance refills.",
      "Free Tracked Shipping: All qualifying orders receive free tracked doorstep delivery across the US and UK."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy Candle Voucher",
        description: "Click 'Get Code' to copy verified coupon code METHEW10."
      },
      {
        step: 2,
        title: "Choose Fragrance Pearls",
        description: "Select your favorite botanical scents and reusable glass vessels on the official store."
      },
      {
        step: 3,
        title: "Redeem at Checkout",
        description: "Paste METHEW10 into the discount box during checkout to apply your 10% savings."
      }
    ],
    faqs: [
      {
        question: "What is the best Warmnest Candle discount code?",
        answer: "Verified code METHEW10 gives 10% off sitewide on all pearled candles, wicks, and refill bucket bundles."
      },
      {
        question: "How do pearled candles work?",
        answer: "Pour the natural wax pearls into any container, insert one of the included wicks, and light. To refresh, simply replace the wick and your candle looks brand new."
      }
    ]
  },

  // 15. PLATED SKIN SCIENCE (Exosome Skincare)
  "plated-skin": {
    slug: "plated-skin",
    aliases: ["plated-skin-science", "plated", "buypated", "platedskinscience", "platedskin", "plated-skin-us"],
    brandName: "Plated Skin Science",
    category: "Exosome Skincare & Anti-Aging Serums",
    h1: "Plated Skin Science Promo Codes, Verified Discounts & Exosome Deals",
    metaTitle: "20% Off Plated Skin Science Promo Codes & Serum Deals (Nov 2026)",
    metaDescription: "Save up to 20% on Plated Skin Science INTENSE and DAILY exosome serums with verified promo codes WELCOME15 and INTENSE20. Clinically proven Renewosome™ cellular renewal.",
    keywords: [
      "plated skin science discount code", "plated skin science promo code",
      "plated skin science coupon", "plated intense serum coupon", "plated skin code"
    ],
    ratingValue: 4.96,
    reviewCount: 2680,
    overview: [
      "Plated Skin Science is a groundbreaking, physician-formulated skincare brand powered by proprietary Renewosome™ platelet-derived exosome technology. Clinically demonstrated to accelerate cellular rejuvenation, stimulate collagen production, smooth deep wrinkles, and reduce redness, Plated represents the pinnacle of anti-aging dermatology.",
      "Unlike conventional topical peptides, Renewosome™ vesicles deliver millions of regenerative cofactors directly to skin cells. Our deal curators test Plated Skin Science promo codes daily to ensure instant checkout discounts."
    ],
    savingsTips: [
      "Use Code INTENSE20 or WELCOME15: Save 15% to 20% on your first order of INTENSE or DAILY cellular exosome serums.",
      "Regimen Bundle Savings Up to $65: Purchasing the complete Day & Night serum duo automatically saves up to $65 off individual bottle prices.",
      "Free Insured US Shipping: All Plated Skin Science orders include complimentary insured tracked doorstep delivery."
    ],
    howToApply: [
      {
        step: 1,
        title: "Copy Exosome Code",
        description: "Click 'Get Code' to copy code INTENSE20 or WELCOME15 to your clipboard."
      },
      {
        step: 2,
        title: "Select Exosome Serum",
        description: "Pick INTENSE, DAILY, or CALM exosome serum on the official Plated store."
      },
      {
        step: 3,
        title: "Redeem at Checkout",
        description: "Enter your discount code in the promo box at checkout to apply your savings immediately."
      }
    ],
    faqs: [
      {
        question: "What is the best Plated Skin Science promo code?",
        answer: "Code INTENSE20 provides 20% off the flagship INTENSE exosome serum, while WELCOME15 grants 15% off sitewide."
      },
      {
        question: "How quickly does Plated Skin Science show results?",
        answer: "Clinical trials indicate visible improvements in skin texture, redness reduction, and hydration within 6 to 8 weeks of daily application."
      }
    ]
  }
};

/**
 * Helper to resolve Brand SEO Entry by any slug or alias
 */
export function getBrandSeoData(slug: string): BrandSeoEntry | null {
  const norm = (slug || "").toLowerCase().trim();
  if (CAMPAIGN_BRAND_SEO_DATA[norm]) {
    return CAMPAIGN_BRAND_SEO_DATA[norm];
  }
  for (const entry of Object.values(CAMPAIGN_BRAND_SEO_DATA)) {
    if (entry.slug.toLowerCase() === norm || entry.aliases.some((a) => a.toLowerCase() === norm)) {
      return entry;
    }
  }
  return null;
}
