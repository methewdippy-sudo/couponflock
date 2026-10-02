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
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Falgolaser.com%2F",
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
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.usaberkeyfilters.com%2F",
        permanent: true,
      },
      {
        source: "/go/berkey",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fwww.usaberkeyfilters.com%2F",
        permanent: true,
      },
      {
        source: "/go/candyinbulk",
        destination: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fcandyinbulk.com%2F",
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
      }
    ];
  },
};

export default nextConfig;
