"use client";

import React, { useState } from "react";

interface GeneratedData {
  store: {
    name: string;
    slug: string;
    website: string;
  };
  coupon: {
    code: string;
    discount: string;
    description: string;
    expiry_date: string;
    is_verified: boolean;
  };
}

export default function AICreatorPage() {
  // Input fields state
  const [geminiKey, setGeminiKey] = useState("");
  const [strapiToken, setStrapiToken] = useState("");
  const [strapiUrl, setStrapiUrl] = useState("http://localhost:1337");
  const [portalPassword, setPortalPassword] = useState("");
  const [prompt, setPrompt] = useState("");

  // UI state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<GeneratedData | null>(null);

  // Authentication check (simple client-side protection so public visitors don't see this tool)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (portalPassword === "admin123" || portalPassword === "promoai") {
      setIsAuthenticated(true);
      setError(null);
      addLog("Successfully logged in to AI Creator Portal.");
    } else {
      setError("Incorrect Portal Access Password.");
    }
  };

  const addLog = (msg: string) => {
    setLog((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleGenerateAndCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!geminiKey) {
      setError("Please enter your Gemini API Key.");
      return;
    }
    if (!prompt) {
      setError("Please describe the store or coupon you want to create.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccessData(null);
    setLog([]);
    addLog("Initiating AI-Powered Store & Coupon Creation...");

    try {
      // 1. Call Gemini 2.5 Flash API directly using their key
      addLog("Connecting to Gemini API...");
      const systemPrompt = `You are a highly structured database generation assistant for CouponFlock.com.
You must analyze the user's instructions and return a valid JSON object that represents a Store and a Coupon to be created in our Strapi v5 database.
The JSON must follow this exact format strictly:
{
  "store": {
    "name": "Store Name",
    "slug": "store-slug-in-lowercase",
    "website": "https://store-domain.com"
  },
  "coupon": {
    "code": "COUPONCODE",
    "discount": "Discount Value (e.g. 15% OFF, $50 OFF, Free Shipping)",
    "description": "Ergonomic, attractive marketing description (max 200 chars).",
    "expiry_date": "2026-12-31T23:59:59.000Z",
    "is_verified": true
  }
}
Do not include any markdown syntax like \`\`\`json or \`\`\`. Return ONLY the raw JSON string itself so it can be parsed immediately with JSON.parse. Make the coupon descriptions extremely premium, verified, and detailed.`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: systemPrompt },
                  { text: `User request: ${prompt}` },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText} (${response.status})`);
      }

      const resData = await response.json();
      const textResponse = resData.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      
      if (!textResponse) {
        throw new Error("Empty response received from Gemini API.");
      }

      addLog("Gemini content generated successfully. Parsing JSON structures...");
      
      // Sanitize potential markdown code block format if Gemini ignores system prompt instructions
      let cleanedJsonString = textResponse;
      if (cleanedJsonString.startsWith("```")) {
        cleanedJsonString = cleanedJsonString.replace(/^```json\s*/, "").replace(/```$/, "").trim();
      }

      const generatedData: GeneratedData = JSON.parse(cleanedJsonString);
      addLog(`AI Data Parsed. Store: "${generatedData.store.name}", Coupon Code: "${generatedData.coupon.code}".`);

      // 2. Insert Store into Strapi
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
      if (strapiToken) {
        headers["Authorization"] = `Bearer ${strapiToken}`;
      }

      addLog(`Checking if Store "${generatedData.store.name}" already exists in Strapi...`);
      const storeCheckRes = await fetch(
        `${strapiUrl}/api/stores?filters[slug][$eq]=${generatedData.store.slug}`,
        { method: "GET" }
      );

      let storeDocumentId = "";
      let storeId = "";

      if (storeCheckRes.ok) {
        const storeCheckData = await storeCheckRes.json();
        if (Array.isArray(storeCheckData.data) && storeCheckData.data.length > 0) {
          storeDocumentId = storeCheckData.data[0].documentId || storeCheckData.data[0].id;
          storeId = storeCheckData.data[0].id;
          addLog(`Existing Store found in database. Using existing store id/documentId: ${storeDocumentId}.`);
        }
      }

      if (!storeDocumentId) {
        addLog(`Store does not exist. Creating new Store "${generatedData.store.name}" in Strapi...`);
        const storeCreateRes = await fetch(`${strapiUrl}/api/stores`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            data: {
              name: generatedData.store.name,
              slug: generatedData.store.slug,
              website: generatedData.store.website,
            },
            status: "published",
          }),
        });

        if (!storeCreateRes.ok) {
          const errData = await storeCreateRes.json();
          throw new Error(`Failed to create Store in Strapi: ${JSON.stringify(errData.error || errData)}`);
        }

        const storeCreateData = await storeCreateRes.json();
        storeDocumentId = storeCreateData.data.documentId || storeCreateData.data.id;
        storeId = storeCreateData.data.id;
        addLog(`Store "${generatedData.store.name}" created and published successfully!`);
      }

      // 3. Insert Coupon into Strapi
      addLog(`Creating and publishing Coupon "${generatedData.coupon.code}" linked to Store ID ${storeDocumentId}...`);
      const couponCreateRes = await fetch(`${strapiUrl}/api/coupons`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          data: {
            code: generatedData.coupon.code,
            discount: generatedData.coupon.discount,
            description: generatedData.coupon.description,
            expiry_date: generatedData.coupon.expiry_date,
            is_verified: generatedData.coupon.is_verified,
            store: storeDocumentId, // Relate to the created store
          },
          status: "published",
        }),
      });

      if (!couponCreateRes.ok) {
        const errData = await couponCreateRes.json();
        throw new Error(`Failed to create Coupon in Strapi: ${JSON.stringify(errData.error || errData)}`);
      }

      addLog(`Coupon "${generatedData.coupon.code}" created and published successfully!`);
      addLog("Database sync complete. Site is fully updated with new entries!");
      
      setSuccessData(generatedData);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred during generation.");
      addLog(`❌ Process Failed: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0b0f19",
      backgroundImage: "radial-gradient(circle at top right, rgba(2, 132, 199, 0.15), transparent 400px), radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.1), transparent 400px)",
      color: "#f8fafc",
      fontFamily: "var(--font-outfit), sans-serif",
      padding: "80px 24px"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Header Block */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(2, 132, 199, 0.15)",
            border: "1px solid rgba(2, 132, 199, 0.3)",
            padding: "8px 16px",
            borderRadius: "999px",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#38bdf8",
            marginBottom: "16px"
          }}>
            <span>🤖</span> AI Database Creator
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Gemini AI <span style={{ color: "#38bdf8" }}>Seeder Portal</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            Add premium stores and verified coupons to your live Strapi database instantly using natural language prompts.
          </p>
        </div>

        {/* 1. Login Page */}
        {!isAuthenticated ? (
          <div style={{
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "var(--radius-lg)",
            padding: "40px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            maxWidth: "450px",
            margin: "0 auto"
          }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px", textAlign: "center" }}>Enter Access Password</h3>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input
                type="password"
                placeholder="Enter password (default: promoai)"
                value={portalPassword}
                onChange={(e) => setPortalPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#ffffff",
                  fontSize: "0.95rem"
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#0284c7",
                  color: "#ffffff",
                  border: "none",
                  padding: "14px",
                  borderRadius: "var(--radius-md)",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background-color 0.2s"
                }}
              >
                Unlock AI Portal
              </button>
            </form>
            {error && (
              <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "16px", textAlign: "center" }}>⚠️ {error}</p>
            )}
          </div>
        ) : (
          /* 2. Main Dashboard Page */
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            
            {/* Input Config Form */}
            <form onSubmit={handleGenerateAndCreate} style={{
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: "12px" }}>
                🔑 Credentials Configuration
              </h3>

              {/* Secrets Group */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", marginBottom: "8px" }}>
                    Gemini API Key
                  </label>
                  <input
                    type="password"
                    placeholder="AIzaSy..."
                    value={geminiKey}
                    onChange={(e) => setGeminiKey(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      color: "#ffffff",
                      fontSize: "0.9rem"
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", marginBottom: "8px" }}>
                    Strapi API Token (Optional if open)
                  </label>
                  <input
                    type="password"
                    placeholder="Bearer API Token..."
                    value={strapiToken}
                    onChange={(e) => setStrapiToken(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      color: "#ffffff",
                      fontSize: "0.9rem"
                    }}
                  />
                </div>
              </div>

              {/* Strapi URL */}
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", marginBottom: "8px" }}>
                  Strapi API URL Endpoint
                </label>
                <input
                  type="text"
                  placeholder="e.g. http://localhost:1337 or https://backend.onrender.com"
                  value={strapiUrl}
                  onChange={(e) => setStrapiUrl(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#ffffff",
                    fontSize: "0.9rem"
                  }}
                />
              </div>

              {/* Natural Language Prompt */}
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: "12px", marginTop: "12px" }}>
                ✍️ Generation Command
              </h3>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", marginBottom: "8px" }}>
                  What should the AI create? (Be descriptive!)
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g., Create a coupon for massive mobile offering a 12% off on power banks with code POWERUP, or add a new store called Tenways US with $150 off electric bikes..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    resize: "none",
                    lineHeight: "1.5"
                  }}
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  backgroundColor: isLoading ? "#475569" : "#0284c7",
                  color: "#ffffff",
                  border: "none",
                  padding: "16px",
                  borderRadius: "var(--radius-md)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px"
                }}
              >
                {isLoading ? (
                  <>
                    <span style={{ display: "inline-block", animation: "successPulse 1s infinite" }}>⏳</span> Processing Database Sync...
                  </>
                ) : (
                  <>
                    <span>🚀</span> Generate & Inject Entries
                  </>
                )}
              </button>

              {error && (
                <div style={{
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  padding: "16px",
                  borderRadius: "var(--radius-md)",
                  color: "#f87171",
                  fontSize: "0.9rem"
                }}>
                  ⚠️ <strong>Generation Error:</strong> {error}
                </div>
              )}
            </form>

            {/* Logs console output */}
            {log.length > 0 && (
              <div style={{
                backgroundColor: "#020617",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                fontFamily: "monospace",
                fontSize: "0.85rem",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
              }}>
                <h4 style={{ color: "#38bdf8", marginBottom: "12px", display: "flex", justifyContent: "space-between" }}>
                  <span>💻 Terminal Console Output</span>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>Real-time sync</span>
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "200px", overflowY: "auto" }}>
                  {log.map((line, idx) => (
                    <div key={idx} style={{ color: line.includes("❌") ? "#f87171" : line.includes("successfully") ? "#34d399" : "#e2e8f0" }}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Success Block */}
            {successData && (
              <div className="animate-slide-up" style={{
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}>
                <h3 style={{ color: "#34d399", fontSize: "1.4rem", fontWeight: 800, marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span>🎉</span> AI Entry Injected Successfully!
                </h3>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  <div style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "var(--radius-md)", padding: "20px" }}>
                    <h4 style={{ color: "#38bdf8", fontSize: "0.9rem", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase" }}>Created Store</h4>
                    <p style={{ margin: "4px 0" }}><strong>Name:</strong> {successData.store.name}</p>
                    <p style={{ margin: "4px 0" }}><strong>Slug:</strong> {successData.store.slug}</p>
                    <p style={{ margin: "4px 0" }}><strong>URL:</strong> <a href={successData.store.website} target="_blank" rel="noreferrer" style={{ color: "#38bdf8", textDecoration: "underline" }}>{successData.store.website}</a></p>
                  </div>
                  <div style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "var(--radius-md)", padding: "20px" }}>
                    <h4 style={{ color: "#10b981", fontSize: "0.9rem", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase" }}>Injected Coupon</h4>
                    <p style={{ margin: "4px 0" }}><strong>Code:</strong> <code style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "2px 6px", borderRadius: "4px" }}>{successData.coupon.code}</code></p>
                    <p style={{ margin: "4px 0" }}><strong>Discount:</strong> {successData.coupon.discount}</p>
                    <p style={{ margin: "4px 0" }}><strong>Description:</strong> {successData.coupon.description}</p>
                    <p style={{ margin: "4px 0" }}><strong>Expiry:</strong> {new Date(successData.coupon.expiry_date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
