import React from "react";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px 24px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "16px", fontWeight: 800, color: "var(--text-primary)" }}>404 - Page Not Found</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "32px", fontSize: "1.1rem", lineHeight: "1.6" }}>
        We couldn't find the page or store you are looking for. It may have been moved, renamed, or no longer exists.
      </p>
      <a 
        href="/" 
        style={{
          backgroundColor: "var(--primary-blue)",
          color: "#ffffff",
          padding: "12px 28px",
          borderRadius: "var(--radius-md)",
          fontWeight: 600,
          textDecoration: "none",
          display: "inline-block",
          transition: "background-color 0.2s"
        }}
      >
        Go Back Home
      </a>
    </div>
  );
}
