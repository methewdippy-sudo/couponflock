import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        source: "/go/desktronic-uk",
        destination: "https://desktronic.co.uk/muhammadhaziqueali",
        permanent: true,
      },
      {
        source: "/go/desktronic-us",
        destination: "https://www.xjcs5z7m.com/METHEWDIPPY/",
        permanent: true,
      },
      {
        source: "/go/desktronic-nl",
        destination: "https://desktronic.nl/methewdippy",
        permanent: true,
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
        source: "/go/tuxmat-us",
        destination: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=41895&url=https%3A%2F%2Fwww.tuxmat.com%2F",
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
      }
    ];
  },
};

export default nextConfig;
