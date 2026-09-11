import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Gift Cards & Voucher Rewards | CouponFlock",
  description: "Participate in CouponFlock's official rewards giveaway portal. Claim free Robux, Walmart gift cards, Steam wallet codes, and PayPal vouchers instantly.",
  keywords: ["free gift cards", "robux codes", "walmart giveaway", "steam wallet codes", "promoregistry rewards"],
  openGraph: {
    title: "CouponFlock Giveaways - Claim Free Digital Rewards",
    description: "Claim free digital gift cards, game codes, and vouchers instantly. Safe, verified, and direct transfers.",
    url: "https://couponflock.com/giveaway",
    siteName: "CouponFlock",
    images: [
      {
        url: "https://couponflock.com/images/budget-tracker-cover.jpg",
        width: 1200,
        height: 630,
        alt: "CouponFlock Giveaways",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CouponFlock Rewards - Claim Free Gift Cards",
    description: "Verified rewards giveaway registry. Claim Robux, Walmart, and Steam wallet codes instantly.",
    images: ["https://couponflock.com/images/budget-tracker-cover.jpg"],
  },
};

export default function GiveawayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I claim my free gift card reward?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Select your desired brand card on our giveaway dashboard, complete the quick security verification check, and instantly copy your voucher code."
                }
              },
              {
                "@type": "Question",
                "name": "Are the voucher rewards verified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all voucher codes are generated and verified in real-time. Make sure to complete the sponsor verification tasks correctly."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
