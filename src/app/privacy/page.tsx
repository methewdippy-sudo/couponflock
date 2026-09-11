import React from "react";

export const metadata = {
  title: "Privacy Policy | CouponFlock",
  description: "Learn how CouponFlock.com collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 24px", fontFamily: "var(--font-outfit), sans-serif", lineHeight: "1.7" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px", letterSpacing: "-0.03em" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "32px", fontSize: "0.95rem" }}>
        Last updated: May 23, 2026
      </p>

      <section style={{ marginBottom: "28px" }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
          Welcome to <strong>CouponFlock.com</strong>. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, protect, and use information when you use our website to find discount codes and promo offers.
        </p>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
          1. Information We Collect
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "12px" }}>
          We do not require you to create an account or provide any personal details to browse coupons on CouponFlock. However, we may collect:
        </p>
        <ul style={{ paddingLeft: "20px", color: "var(--text-secondary)", marginBottom: "12px" }}>
          <li style={{ marginBottom: "6px" }}><strong>Usage Data:</strong> Pages visited, coupon clicks, and search queries to improve our platform experience.</li>
          <li style={{ marginBottom: "6px" }}><strong>Cookies & Tracking:</strong> We use cookies to track affiliate clicks, analyze traffic, and ensure that our redirect tracking works seamlessly.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
          2. How We Use Your Information
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          We use the collected data to personalize your experience, track store success rates, process coupon click statistics, and ensure our affiliate tracking runs smoothly. We never sell, trade, or share your data with unauthorized third parties.
        </p>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
          3. Affiliate Links Disclosure
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          CouponFlock.com participates in affiliate marketing programs. This means that when you click a "Get Code" button, the link that opens in the background contains a tracking/affiliate identifier. If you make a purchase at the store, we may receive a small commission at no additional cost to you. This support helps us keep CouponFlock free for everyone.
        </p>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
          4. Contact Us
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          If you have any questions or suggestions regarding our Privacy Policy, feel free to contact us at support@couponflock.com.
        </p>
      </section>
    </div>
  );
}
