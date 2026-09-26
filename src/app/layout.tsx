import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "CouponFlock | 100% Verified Coupon Codes, Promo Deals & Discounts",
  description: "Where smart shoppers flock for verified coupons, promo codes, and discount savings. Tested daily for Nike, Amazon, Mellow Sleep, Desktronic, Dreame, and 500+ top brands.",
  openGraph: {
    title: "CouponFlock | 100% Verified Coupon Codes & Discounts",
    description: "Flock to verified savings. Tested promo codes, deals, and discounts on CouponFlock.com.",
    url: 'https://www.couponflock.com',
    siteName: 'CouponFlock',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CouponFlock | 100% Verified Coupon Codes & Discounts",
    description: "Flock to verified savings. Tested promo codes, deals, and discounts on CouponFlock.com.",
  },
  other: {
    'impact-site-verification': 'e8243051-e329-4f57-aedc-5f4539bfc2ac',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-292RBXPKZ3";

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <meta name="google-site-verification" content="v4tNxY46v-W3u6LuCye9tAvrFVxeyn_tNNV7R5q24Iw" />
        <meta name="impact-site-verification" value="e8243051-e329-4f57-aedc-5f4539bfc2ac" />
        <meta name="impact-site-verification" content="e8243051-e329-4f57-aedc-5f4539bfc2ac" />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {/* Crisp Live Chat Widget */}
        <Script id="crisp-widget" strategy="lazyOnload">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="c7db60dc-54a5-4cb2-ab98-3f52994e91b3";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
        {/* AvantLink Affiliate Verification - Non-blocking lazyOnload */}
        <Script
          id="avantlink-verification"
          src="https://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=376c8fc11d613d19a45cd4c0fa5dddd7e411c6c9"
          strategy="lazyOnload"
        />
        <meta name="fo-verify" content="21153cba-a2c3-435d-aff2-e91717e8564c" />
        <meta name="verify-admitad" content="dc1c933d28" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Rich Structured JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CouponFlock",
              "url": "https://couponflock.com",
              "description": "Where smart shoppers flock for verified coupons, promo codes, and discount savings.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://couponflock.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CouponFlock",
              "url": "https://couponflock.com",
              "logo": "https://couponflock.com/couponflock-logo.svg"
            })
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {/* Navigation Header */}
        <HeaderClient />

        {/* Main Content */}
        <main style={{ flex: 1, paddingBottom: "60px" }}>
          {children}
        </main>

        {/* Elegant Footer with Secret Admin Access */}
        <FooterClient />

        {/* Skimlinks script - Non-blocking lazyOnload */}
        <Script 
          id="skimlinks-script"
          type="text/javascript" 
          src="https://s.skimresources.com/js/306923X1795194.skimlinks.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
