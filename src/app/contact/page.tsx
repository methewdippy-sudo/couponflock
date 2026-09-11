"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    
    // Simulate successful message submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 24px", fontFamily: "var(--font-outfit), sans-serif" }}>
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
          ✉ Get In Touch
        </span>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px", letterSpacing: "-0.03em" }}>
          Contact Us
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.5", maxWidth: "600px", margin: "0 auto" }}>
          Have any questions, brand partnerships inquiries, or deal feedback? Drop us a message, and our team will get back to you within 24 hours.
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "40px", 
        alignItems: "start" 
      }}>
        {/* Contact Info Card */}
        <div style={{ 
          backgroundColor: "#ffffff", 
          border: "1px solid var(--border-light)", 
          borderRadius: "var(--radius-lg)", 
          padding: "32px", 
          boxShadow: "var(--shadow-md)",
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
              Corporate Email
            </h3>
            <a href="mailto:support@couponflock.com" style={{ color: "var(--primary-blue)", fontWeight: 600, fontSize: "0.95rem" }}>
              support@couponflock.com
            </a>
            <p style={{ fontSize: "0.82rem", color: "var(--text-tertiary)", marginTop: "4px" }}>
              For general inquiries, support requests, and user help.
            </p>
          </div>

          <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
              Business partnerships
            </h3>
            <a href="mailto:partners@couponflock.com" style={{ color: "var(--accent-green)", fontWeight: 600, fontSize: "0.95rem" }}>
              partners@couponflock.com
            </a>
            <p style={{ fontSize: "0.82rem", color: "var(--text-tertiary)", marginTop: "4px" }}>
              For advertising, affiliate networks, and brand manager relationships.
            </p>
          </div>

          <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
              Corporate Office
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              CouponFlock Ltd.<br />
              100 Pine Street, Suite 1250<br />
              San Francisco, CA 94111<br />
              United States
            </p>
          </div>
        </div>

        {/* Contact Form Card */}
        {isSubmitted ? (
          <div style={{ 
            backgroundColor: "#ffffff", 
            border: "1px solid var(--border-light)", 
            borderRadius: "var(--radius-lg)", 
            padding: "48px 32px", 
            boxShadow: "var(--shadow-md)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}>
            <div style={{ 
              width: "64px", 
              height: "64px", 
              borderRadius: "50%", 
              backgroundColor: "var(--accent-green-light)", 
              color: "var(--accent-green-hover)", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              marginBottom: "20px"
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>
              Message Received!
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>
              Thank you for reaching out to CouponFlock.com. Our support team has received your message and will respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ 
            backgroundColor: "#ffffff", 
            border: "1px solid var(--border-light)", 
            borderRadius: "var(--radius-lg)", 
            padding: "32px", 
            boxShadow: "var(--shadow-md)",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                required
                style={{ 
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 16px",
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  outline: "none",
                  fontFamily: "var(--font-outfit), sans-serif"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. john@example.com"
                required
                style={{ 
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 16px",
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  outline: "none",
                  fontFamily: "var(--font-outfit), sans-serif"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help you?"
                style={{ 
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 16px",
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  outline: "none",
                  fontFamily: "var(--font-outfit), sans-serif"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your detailed query or advertising offer here..."
                required
                rows={4}
                style={{ 
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 16px",
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "var(--font-outfit), sans-serif"
                }}
              />
            </div>

            <button type="submit" style={{ 
              backgroundColor: "var(--primary-blue)",
              color: "#ffffff",
              border: "none",
              borderRadius: "var(--radius-md)",
              padding: "12px 24px",
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "var(--shadow-sm)",
              transition: "all var(--transition-fast)",
              fontFamily: "var(--font-outfit), sans-serif"
            }}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
