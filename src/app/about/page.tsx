import React from "react";

export const metadata = {
  title: "About Us | CouponFlock",
  description: "Learn more about CouponFlock.com, our mission, and our 100% verified coupon verification process.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 24px", fontFamily: "var(--font-outfit), sans-serif", lineHeight: "1.7" }}>
      {/* Decorative Badge */}
      <span style={{ 
        display: "inline-block", 
        backgroundColor: "var(--primary-blue-light)", 
        color: "var(--primary-blue-hover)", 
        padding: "6px 16px", 
        borderRadius: "var(--radius-full)", 
        fontSize: "0.85rem", 
        fontWeight: 700, 
        marginBottom: "16px",
        boxShadow: "var(--shadow-sm)"
      }}>
        ✨ Our Story
      </span>

      <h1 style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px", letterSpacing: "-0.03em" }}>
        About CouponFlock
      </h1>
      
      <p style={{ color: "var(--text-secondary)", marginBottom: "32px", fontSize: "1.1rem", lineHeight: "1.6" }}>
        Welcome to <strong>CouponFlock.com</strong>, your ultimate destination for verified, active, and high-value discount coupons and promotional codes online.
      </p>

      <hr style={{ border: "none", borderTop: "1px solid var(--border-light)", marginBottom: "32px" }} />

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px", letterSpacing: "-0.01em" }}>
          1. Our Mission
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
          At CouponFlock, our mission is simple: <strong>to help shoppers save money effortlessly.</strong> We understand how frustrating it is to find coupon codes that are expired, invalid, or fake. That is why we built a centralized registry designed to curate, test, and host only 100% working discounts for the world's most popular brands.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px", letterSpacing: "-0.01em" }}>
          2. How We Verify Coupons
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
          Unlike automated scrapers that dump hundreds of broken links, we take a hands-on approach to quality control. Our dedicated team of deal hunters manually tests every single promo code uploaded to our platform:
        </p>
        <ul style={{ paddingLeft: "20px", color: "var(--text-secondary)", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <strong>Manual Checkouts:</strong> We copy the code and apply it directly at the merchant's official checkout page to verify the exact percentage or dollar amount saved.
          </li>
          <li>
            <strong>Daily Rotations:</strong> We monitor coupon validity windows daily to ensure expired codes are updated or labeled clearly, saving you time and click fatigue.
          </li>
          <li>
            <strong>Exclusive Partnerships:</strong> We coordinate directly with popular brands to secure verified exclusive codes that you cannot find anywhere else.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px", letterSpacing: "-0.01em" }}>
          3. Absolute Trust & Transparency
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
          CouponFlock.com is fully committed to compliance and consumer safety. We strictly adhere to FTC guidelines and advertising standards. We partner with reputable affiliate networks to deliver verified store links. When you save money using our codes, the store may pay us a small commission—which allows us to keep our services 100% free to the public!
        </p>
      </section>

      <section style={{ 
        backgroundColor: "var(--bg-secondary)", 
        border: "1px solid var(--border-light)", 
        borderRadius: "var(--radius-lg)", 
        padding: "24px", 
        boxShadow: "var(--shadow-md)",
        textAlign: "center"
      }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
          Have a Question or Deal to Share?
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "16px" }}>
          Our support team is always ready to assist you. Get in touch with us today!
        </p>
        <a 
          href="/contact" 
          style={{ 
            display: "inline-block", 
            backgroundColor: "var(--primary-blue)", 
            color: "#ffffff", 
            padding: "10px 24px", 
            borderRadius: "var(--radius-md)", 
            fontSize: "0.9rem", 
            fontWeight: 600,
            transition: "all var(--transition-fast)"
          }}
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
