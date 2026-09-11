import React from "react";

export const metadata = {
  title: "Terms of Service | CouponFlock",
  description: "Terms and conditions for using CouponFlock.com.",
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 24px", fontFamily: "var(--font-outfit), sans-serif", lineHeight: "1.7" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px", letterSpacing: "-0.03em" }}>
        Terms of Service
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "32px", fontSize: "0.95rem" }}>
        Last updated: May 23, 2026
      </p>

      <section style={{ marginBottom: "28px" }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
          Welcome to <strong>CouponFlock.com</strong>. By accessing and using our website, you agree to comply with and be bound by the following terms of service. If you do not agree to these terms, please refrain from using our platform.
        </p>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
          1. Use of the Site
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          CouponFlock provides promotional discount codes, coupon codes, and deal listings for informational purposes only. All discount offers are provided free of charge for personal, non-commercial use.
        </p>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
          2. Accuracy of Coupon Codes
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          While we make every effort to test and verify all promo codes on CouponFlock.com, we cannot guarantee that every deal is 100% active or working at any given moment. Store policies, exclusions, and expiration limits change dynamically. We are not responsible for any failed transactions or invalid codes during checkout.
        </p>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
          3. External Links & Merchants
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Our website links to merchant stores (such as Amazon, Nike, Walmart) via affiliate links that open in a new tab. We are an independent platform and do not own, control, or take responsibility for any products, services, checkout experiences, or content on these external third-party merchant sites.
        </p>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
          4. Contact Information
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          For inquiries or legal feedback, please reach out to us at legal@couponflock.com.
        </p>
      </section>
    </div>
  );
}
