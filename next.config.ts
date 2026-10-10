import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build timestamp changes every deploy → forces Turbopack to generate new chunk hashes
  // → browsers cannot serve stale immutable-cached JS after a new deployment
  env: {
    NEXT_PUBLIC_BUILD_TIME: Date.now().toString(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/logos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/coupons/:slug",
        destination: "/deals/:slug",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/go/chompshop",
        destination: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        permanent: false,
      },
      {
        source: "/go/chomp-shop",
        destination: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=referral&utm_campaign=methew-dippy",
        permanent: false,
      },
      {
        source: "/go/upliftdesk",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.upliftdesk.com%2F",
        permanent: false,
      },
      {
        source: "/go/uplift-desk",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.upliftdesk.com%2F",
        permanent: false,
      },
      {
        source: "/go/desktronic",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.co.uk%2F",
        permanent: false,
      },
      {
        source: "/go/desktronic-uk",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.co.uk%2F",
        permanent: false,
      },
      {
        source: "/go/desktronic-us",
        destination: "https://www.xjcs5z7m.com/METHEWDIPPY/",
        permanent: false,
      },
      {
        source: "/go/desktronic-nl",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.nl%2F",
        permanent: false,
      },
      {
        source: "/go/desktronic-de",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdesktronic.de%2F",
        permanent: false,
      },
      {
        source: "/go/mirlux-nl",
        destination: "https://www.awin1.com/cread.php?awinmid=101763&awinaffid=1909602&clickref=CF-NL&ued=https%3A%2F%2Fmirlux.nl%2F",
        permanent: false,
      },
      {
        source: "/go/mirlux-de",
        destination: "https://www.awin1.com/cread.php?awinmid=123796&awinaffid=1909602&clickref=CF-DE&ued=https%3A%2F%2Fmirlux.de%2F",
        permanent: false,
      },
      {
        source: "/go/wjd-exclusives-us",
        destination: "https://lkmstore.com/g/hIgUjRa",
        permanent: false,
      },
      {
        source: "/go/silver-cross-us",
        destination: "https://app.linkscircle.com/short/0pSe401hQq",
        permanent: false,
      },
      {
        source: "/go/nuviorecovery",
        destination: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        permanent: false,
      },
      {
        source: "/go/nuvio-recovery",
        destination: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        permanent: false,
      },
      {
        source: "/go/seeq-supply",
        destination: "https://www.seeqsupply.com/METHEW87649",
        permanent: false,
      },
      {
        source: "/go/seeqsupply",
        destination: "https://www.seeqsupply.com/METHEW87649",
        permanent: false,
      },
      {
        source: "/go/seeq",
        destination: "https://www.seeqsupply.com/METHEW87649",
        permanent: false,
      },
      {
        source: "/go/nushape",
        destination: "https://www.nushape.com/METHEW88461",
        permanent: false,
      },
      {
        source: "/go/skinnyfit",
        destination: "https://www.skinnyfit.com/METHEW18019",
        permanent: false,
      },
      {
        source: "/go/skinny-fit",
        destination: "https://www.skinnyfit.com/METHEW18019",
        permanent: false,
      },
      {
        source: "/go/scheels",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.scheels.com%2F",
        permanent: false,
      },
      {
        source: "/go/scheels-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.scheels.com%2F",
        permanent: false,
      },
      {
        source: "/go/algolaser",
        destination: "https://algolaser.com/?ref=METHEWDIPPY",
        permanent: false,
      },
      {
        source: "/go/zendure",
        destination: "https://www.awin1.com/cread.php?awinmid=68786&awinaffid=1909602&clickref=CF-DE&ued=https%3A%2F%2Fzendure.de%2F",
        permanent: false,
      },
      {
        source: "/go/zendure-de",
        destination: "https://www.awin1.com/cread.php?awinmid=68786&awinaffid=1909602&clickref=CF-DE&ued=https%3A%2F%2Fzendure.de%2F",
        permanent: false,
      },
      {
        source: "/go/desktronic-4leg",
        destination: "https://desktronic.co.uk/products/4-leg-standing-desk?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/desktronic-frame-homeone",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-frame-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/desktronic-frame-homepro",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-frame-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/desktronic-desk-homepro",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/desktronic-desk-homeone",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/aliexpress",
        destination: "https://litl.si/maEX3",
        permanent: true,
      },
      {
        source: "/go/aliexpress-uk",
        destination: "https://clickm.me/KcGRy",
        permanent: true,
      },
      {
        source: "/go/aliexpress-de",
        destination: "https://clickm.me/XG6K4",
        permanent: true,
      },
      {
        source: "/go/lululemon",
        destination: "https://vert.si/Ji_M2o",
        permanent: true,
      },
      {
        source: "/go/samsung",
        destination: "https://clickm.me/z-MUd",
        permanent: true,
      },
      {
        source: "/go/samsung-uk",
        destination: "https://vert.si/ytzp9",
        permanent: true,
      },
      {
        source: "/go/songmics",
        destination: "https://clickm.me/-B5pP1",
        permanent: true,
      },
      {
        source: "/go/songmics-de",
        destination: "https://clickm.me/i4mrOB",
        permanent: true,
      },
      {
        source: "/go/lookfantastic",
        destination: "https://litl.si/mbiiz0",
        permanent: true,
      },
      {
        source: "/go/lookfantastic-de",
        destination: "https://clickm.me/RdyZ3-",
        permanent: true,
      },
      {
        source: "/go/lookfantastic-nl",
        destination: "https://clickm.me/BJu1xe",
        permanent: true,
      },
      {
        source: "/go/kiko",
        destination: "https://www.kikocosmetics.com",
        permanent: true,
      },
      {
        source: "/go/aosom",
        destination: "https://vert.si/ReOuZI",
        permanent: true,
      },
      {
        source: "/go/anycubic-us",
        destination: "https://us.anycubic3d.com/?ref=METHEWDIPPY",
        permanent: true,
      },
      {
        source: "/go/hitway-uk",
        destination: "https://uk.hitway.eu/?ref=METHEWDIPPY",
        permanent: true,
      },
      {
        source: "/go/wolfbox-uk",
        destination: "https://uk.wolfbox.com/?ref=METHEWDIPPY",
        permanent: true,
      },
      {
        source: "/go/fitueyes-uk",
        destination: "https://uk.fitueyes.com/?ref=METHEWDIPPY",
        permanent: true,
      },
      {
        source: "/go/helvetus",
        destination: "https://helvetus.com/?ref=METHEWDIPPY",
        permanent: true,
      },
      {
        source: "/go/xsteel-targets",
        destination: "https://www.xsteeltargets.com/?ref=METHEWDIPPY",
        permanent: true,
      },
      {
        source: "/go/reconstitution-solution",
        destination: "https://reconstitution-solution.io/?ref=METHEWDIPPY",
        permanent: true,
      },
      {
        source: "/go/tuxmat",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        permanent: true,
      },
      {
        source: "/go/tuxmat-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        permanent: true,
      },
      {
        source: "/go/tuxmat-ca",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tuxmat.com",
        permanent: true,
      },
      {
        source: "/go/duckhead",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fduckhead.com%2F",
        permanent: true,
      },
      {
        source: "/go/duck-head",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fduckhead.com%2F",
        permanent: true,
      },
      {
        source: "/go/dayalane",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdayalane.com%2F",
        permanent: true,
      },
      {
        source: "/go/jack-rogers",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fjackrogersusa.com%2F",
        permanent: true,
      },
      {
        source: "/go/jackrogers",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fjackrogersusa.com%2F",
        permanent: true,
      },
      {
        source: "/go/city-beauty",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcitybeauty.com%2F",
        permanent: true,
      },
      {
        source: "/go/citybeauty",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcitybeauty.com%2F",
        permanent: true,
      },
      {
        source: "/go/hotel-tonight",
        destination: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=19660&url=https%3A%2F%2Fwww.hoteltonight.com",
        permanent: true,
      },
      {
        source: "/go/swatch",
        destination: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74223&url=https%3A%2F%2Fwww.swatch.com%2Fen-us",
        permanent: true,
      },
      {
        source: "/go/harrys",
        destination: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20715&url=http%3A%2F%2Fwww.harrys.com%2F",
        permanent: true,
      },
      {
        source: "/go/shipt",
        destination: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9&url=https%3A%2F%2Fwww.shipt.com%2F",
        permanent: true,
      },
      {
        source: "/go/usaberkeyfilters",
        destination: "https://www.usaberkeyfilters.com/aff/282/",
        permanent: true,
      },
      {
        source: "/go/usa-berkey-filters",
        destination: "https://www.usaberkeyfilters.com/aff/282/",
        permanent: true,
      },
      {
        source: "/go/berkey",
        destination: "https://www.usaberkeyfilters.com/aff/282/",
        permanent: true,
      },
      {
        source: "/go/candy-in-bulk",
        destination: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        permanent: true,
      },
      {
        source: "/go/candyinbulk",
        destination: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
        permanent: true,
      },
      {
        source: "/go/silvercross",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsilvercrossus.com%2F",
        permanent: true,
      },
      {
        source: "/go/silvercrossus",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsilvercrossus.com%2F",
        permanent: true,
      },
      {
        source: "/go/mirlux",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fmirlux.com%2F",
        permanent: true,
      },
      {
        source: "/go/rollerskatenation",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frollerskatenation.com%2F",
        permanent: true,
      },
      {
        source: "/go/petite-plume",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpetite-plume.com%2F",
        permanent: true,
      },
      {
        source: "/go/petiteplume",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpetite-plume.com%2F",
        permanent: true,
      },
      {
        source: "/go/evelyn-bobbie",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fevelynbobbie.com%2F",
        permanent: true,
      },
      {
        source: "/go/evelynbobbie",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fevelynbobbie.com%2F",
        permanent: true,
      },
      {
        source: "/go/frank-darling",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ffrankdarling.com%2F",
        permanent: true,
      },
      {
        source: "/go/frankdarling",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ffrankdarling.com%2F",
        permanent: true,
      },
      {
        source: "/go/alohas",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Falohas.com%2F",
        permanent: true,
      },
      {
        source: "/go/byrokko",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.byrokko.com%2F",
        permanent: true,
      },
      {
        source: "/go/flexjobs",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.flexjobs.com",
        permanent: true,
      },
      {
        source: "/go/best-bully-sticks",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.bestbullysticks.com%2F",
        permanent: true,
      },
      {
        source: "/go/bestbullysticks",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.bestbullysticks.com%2F",
        permanent: true,
      },
      {
        source: "/go/deerrun",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fdeerruntreadmill.com%2F",
        permanent: true,
      },
      {
        source: "/go/big-wall-decor",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbigwalldecor.com%2F",
        permanent: true,
      },
      {
        source: "/go/bigwalldecor",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbigwalldecor.com%2F",
        permanent: true,
      },
      {
        source: "/go/carputech",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.carputech.com%2F",
        permanent: true,
      },
      {
        source: "/go/gardepro",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgardepro.com%2F",
        permanent: true,
      },
      {
        source: "/go/flower-knows",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fflowerknows.co",
        permanent: true,
      },
      {
        source: "/go/flowerknows",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fflowerknows.co",
        permanent: true,
      },
      {
        source: "/go/curtarra",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.curtarra.com%2F",
        permanent: true,
      },
      {
        source: "/go/elite-havens",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fwww.elitehavens.com",
        permanent: true,
      },
      {
        source: "/go/elitehavens",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fwww.elitehavens.com",
        permanent: true,
      },
      {
        source: "/go/ariel-bath",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.arielbath.com%2F",
        permanent: true,
      },
      {
        source: "/go/arielbath",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.arielbath.com%2F",
        permanent: true,
      },
      {
        source: "/go/ausomstore",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fausomstore.com",
        permanent: true,
      },
      {
        source: "/go/ausom",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fausomstore.com",
        permanent: true,
      },
      {
        source: "/go/hardaddy",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=http%3A%2F%2Fhardaddy.com",
        permanent: true,
      },
      {
        source: "/go/auto-vox",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fauto-vox.com",
        permanent: true,
      },
      {
        source: "/go/autovox",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fauto-vox.com",
        permanent: true,
      },
      {
        source: "/go/airseekers",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fairseekers-robotics.com%2F",
        permanent: true,
      },
      {
        source: "/go/luhxe",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fluhxe.com%2F",
        permanent: true,
      },
      {
        source: "/go/luhxe-jewelry",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fluhxe.com%2F",
        permanent: true,
      },
      {
        source: "/go/renogy",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frenogy.com",
        permanent: true,
      },
      {
        source: "/go/renogy-solar",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Frenogy.com",
        permanent: true,
      },
      {
        source: "/go/lumyhealth",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Flumyhealth.com%2F",
        permanent: true,
      },
      {
        source: "/go/lumy-health",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Flumyhealth.com%2F",
        permanent: true,
      },
      {
        source: "/go/meepo",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.meepoboard.com",
        permanent: true,
      },
      {
        source: "/go/meepoboard",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.meepoboard.com",
        permanent: true,
      },
      {
        source: "/go/purecozy",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpurecozyhome.com%2F",
        permanent: true,
      },
      {
        source: "/go/purecozyhome",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpurecozyhome.com%2F",
        permanent: true,
      },
      {
        source: "/go/topoak",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ftopoakoverland.com%2F",
        permanent: true,
      },
      {
        source: "/go/topoakoverland",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ftopoakoverland.com%2F",
        permanent: true,
      },
      {
        source: "/go/bloomist",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbloomist.com",
        permanent: true,
      },
      {
        source: "/go/bloomist-decor",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fbloomist.com",
        permanent: true,
      },
      {
        source: "/go/commomy",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcommomy.com",
        permanent: true,
      },
      {
        source: "/go/commomy-decor",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcommomy.com",
        permanent: true,
      },
      {
        source: "/go/acasis",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.acasis.com",
        permanent: true,
      },
      {
        source: "/go/acasis-official",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.acasis.com",
        permanent: true,
      },
      {
        source: "/go/geprc",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgeprc.com",
        permanent: true,
      },
      {
        source: "/go/geprc-fpv",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fgeprc.com",
        permanent: true,
      },
      {
        source: "/go/thedrmlab",
        destination: "https://www.thedrmlab.com/methewdippy",
        permanent: true,
      },
      {
        source: "/go/the-drm-lab",
        destination: "https://www.thedrmlab.com/methewdippy",
        permanent: true,
      },
      {
        source: "/go/bouquets-by-post",
        destination: "https://bouquetsbypost.com/muhammadhaziqueali",
        permanent: true,
      },
      {
        source: "/go/seed-needs",
        destination: "https://www.seedneeds.com/dippy",
        permanent: true,
      },
      {
        source: "/go/im8",
        destination: "https://www.im8health.com/RICHARD05376",
        permanent: true,
      },
      {
        source: "/go/im8health",
        destination: "https://www.im8health.com/RICHARD05376",
        permanent: true,
      },
      {
        source: "/go/im8-health",
        destination: "https://www.im8health.com/RICHARD05376",
        permanent: true,
      },
      {
        source: "/go/transparent-labs",
        destination: "https://vert.si/g693JE",
        permanent: true,
      },
      {
        source: "/go/garten-und-freizeit",
        destination: "https://litl.si/5p50u",
        permanent: true,
      },
      {
        source: "/go/dreamcloud",
        destination: "https://vert.si/dJUkDu",
        permanent: true,
      },
      {
        source: "/go/qidi-us",
        destination: "https://us.qidi3d.com/?sca_ref=10216933.GBxI9fhaM2YhHIe",
        permanent: true,
      },
      {
        source: "/go/qidi-de",
        destination: "https://qidi3d-de.myshopify.com?sca_ref=12082423.h3UYEVqJ6Tg",
        permanent: true,
      },
      {
        source: "/go/qidi-uk",
        destination: "https://qidi3d-uk.myshopify.com?sca_ref=12082424.7VZOgmHzi7mV",
        permanent: true,
      },
      {
        source: "/go/qidi-ca",
        destination: "https://qidi3d-ca.myshopify.com?sca_ref=12082426.lb4pfrcPLtarI",
        permanent: true,
      },
      {
        source: "/go/qidi-au",
        destination: "https://qiditech3d-au.myshopify.com?sca_ref=12082425.u0nAUHxvoBprsex",
        permanent: true,
      },
      {
        source: "/go/mellow-sleep",
        destination: "https://mellowsleep.com/RICHARD1",
        permanent: true,
      },
      {
        source: "/go/comfrt",
        destination: "https://comfrt.com",
        permanent: true,
      },
      {
        source: "/go/dc-house",
        destination: "https://www.dchousepower.com/?ref=ikafrwml",
        permanent: true,
      },
      {
        source: "/go/dchouse",
        destination: "https://www.dchousepower.com/?ref=ikafrwml",
        permanent: true,
      },
      {
        source: "/go/filter-baby",
        destination: "https://filterbaby.com/discount/FILTER15?ref=promoregistry",
        permanent: true,
      },
      {
        source: "/go/crz-yoga",
        destination: "https://us.crzyoga.com/?ref=sulydaqw",
        permanent: true,
      },
      {
        source: "/go/crz-yoga-ca",
        destination: "https://ca.crzyoga.com/?ref=sulydaqw",
        permanent: true,
      },
      {
        source: "/go/redusculpt",
        destination: "https://www.redusculpt.com/METHEW46097",
        permanent: true,
      },
      {
        source: "/go/tenways",
        destination: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        permanent: true,
      },
      {
        source: "/go/tenways-nl",
        destination: "https://www.tenways.com/?ref=nta1mzr&utm_source=tapfiliate&utm_medium=affiliate&utm_campaign=nta1mzr",
        permanent: true,
      },
      {
        source: "/go/naturnest",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturnest.com%2F",
        permanent: true,
      },
      {
        source: "/go/sungoldpower",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
        permanent: true,
      },
      {
        source: "/go/sculpfun",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.sculpfun.com",
        permanent: true,
      },
      {
        source: "/go/piscifun",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.piscifun.com%2F",
        permanent: false,
      },
      {
        source: "/go/piscifun-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.piscifun.com%2F",
        permanent: false,
      },
      {
        source: "/go/scarlet-darkness",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fscarletdarkness.com%2F",
        permanent: false,
      },
      {
        source: "/go/scarlet-darkness-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fscarletdarkness.com%2F",
        permanent: false,
      },
      {
        source: "/go/krewe",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.krewe.com%2F",
        permanent: false,
      },
      {
        source: "/go/krewe-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.krewe.com%2F",
        permanent: false,
      },
      {
        source: "/go/pergolux",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpergolux.de%2F",
        permanent: false,
      },
      {
        source: "/go/pergolux-de",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpergolux.de%2F",
        permanent: false,
      },
      {
        source: "/go/ryobi",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ffr.ryobitools.eu%2F",
        permanent: false,
      },
      {
        source: "/go/ryobi-fr",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Ffr.ryobitools.eu%2F",
        permanent: false,
      },
      {
        source: "/go/magicshine",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fmagicshine.com%2F",
        permanent: false,
      },
      {
        source: "/go/magicshine-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fmagicshine.com%2F",
        permanent: false,
      },
      {
        source: "/go/tesmart",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tesmart.com%2F",
        permanent: false,
      },
      {
        source: "/go/tesmart-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.tesmart.com%2F",
        permanent: false,
      },
      {
        source: "/go/cparavano",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.cparavano.com%2F",
        permanent: false,
      },
      {
        source: "/go/cparavano-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.cparavano.com%2F",
        permanent: false,
      },
      {
        source: "/go/senser",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.senser.net%2F",
        permanent: false,
      },
      {
        source: "/go/senser-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.senser.net%2F",
        permanent: false,
      },
      {
        source: "/go/candyroo",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcandyroo.co.uk%2F",
        permanent: false,
      },
      {
        source: "/go/candyroo-uk",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcandyroo.co.uk%2F",
        permanent: false,
      },
      {
        source: "/go/grays-hockey",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.grays-hockey.com%2F",
        permanent: false,
      },
      {
        source: "/go/grays-hockey-uk",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.grays-hockey.com%2F",
        permanent: false,
      },
      {
        source: "/go/merach",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fuk.merachfit.com%2F",
        permanent: false,
      },
      {
        source: "/go/merach-uk",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fuk.merachfit.com%2F",
        permanent: false,
      },
      {
        source: "/go/edens-herbals",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fedensherbals.com%2F",
        permanent: false,
      },
      {
        source: "/go/edens-herbals-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fedensherbals.com%2F",
        permanent: false,
      },
      {
        source: "/go/pupper-crust",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpuppercrust.com%2F",
        permanent: false,
      },
      {
        source: "/go/pupper-crust-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpuppercrust.com%2F",
        permanent: false,
      },
      {
        source: "/go/zoupw",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fzoupw.com%2F",
        permanent: false,
      },
      {
        source: "/go/zoupw-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fzoupw.com%2F",
        permanent: false,
      },
      {
        source: "/go/birdfy",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.birdfy.com%2F",
        permanent: false,
      },
      {
        source: "/go/birdfy-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.birdfy.com%2F",
        permanent: false,
      },
      {
        source: "/go/papablic",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpapablic.com%2F",
        permanent: false,
      },
      {
        source: "/go/papablic-us",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fpapablic.com%2F",
        permanent: false,
      },
      {
        source: "/go/naturehike",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturehike.au%2F",
        permanent: false,
      },
      {
        source: "/go/naturehike-au",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.naturehike.au%2F",
        permanent: false,
      },
      {
        source: "/go/aquasana",
        destination: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=http%3A%2F%2Fwww.aquasana.com%2F",
        permanent: false,
      },
      {
        source: "/go/aquasana-us",
        destination: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=http%3A%2F%2Fwww.aquasana.com%2F",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
