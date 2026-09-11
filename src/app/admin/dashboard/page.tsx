"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import styles from "./Dashboard.module.css";

interface CampaignDetail {
  id: string;
  name: string;
  status: string;
  spend: number;
  clicks: number;
  impressions: number;
}

interface BrandStats {
  id: string;
  name: string;
  clicks: number;
  spend: number;
  conversions: number;
  revenue: number;
  roi: number;
  status: string;
  recommendation: string;
  campaignsDetail: CampaignDetail[];
}

interface Summary {
  totalSpend: number;
  totalRevenue: number;
  netProfit: number;
  avgRoi: number;
}

interface DashboardPayload {
  startDate: string;
  endDate: string;
  summary: Summary;
  brands: BrandStats[];
  dataSource: string;
  error?: string;
}

export default function AdminDashboard() {
  // Authentication states
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Date Range states
  const todayStr = new Date().toISOString().split("T")[0];
  const past30DaysStr = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
  
  const [startDate, setStartDate] = useState(past30DaysStr);
  const [endDate, setEndDate] = useState(todayStr);

  // Data states
  const [payload, setPayload] = useState<DashboardPayload | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Modals / Overrides states
  const [activeBrandModal, setActiveBrandModal] = useState<BrandStats | null>(null);
  const [overrideBrandId, setOverrideBrandId] = useState<string | null>(null);
  const [overrideSpend, setOverrideSpend] = useState("");
  const [overrideRevenue, setOverrideRevenue] = useState("");
  const [overrideRevenueCurrency, setOverrideRevenueCurrency] = useState("PKR");
  const [manualAdjustments, setManualAdjustments] = useState<{ [key: string]: { spend: number, revenue: number } }>({});

  // Authentication barrier
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123" || password === "promoai") {
      setIsAuthenticated(true);
      setLoginError("");
      sessionStorage.setItem("dashboard_auth", "true");
    } else {
      setLoginError("Incorrect Access Password.");
    }
  };

  // Hydrate auth and manual adjustments status
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAuth = sessionStorage.getItem("dashboard_auth") === "true";
      if (isAuth) {
        setIsAuthenticated(true);
      }
      try {
        const stored = localStorage.getItem("dashboard_manual_adjustments");
        if (stored) {
          setManualAdjustments(JSON.parse(stored));
        }
      } catch (err) {
        console.warn("Failed to load manual adjustments:", err);
      }
    }
  }, []);

  // Quick date range selectors
  const setQuickRange = (range: string) => {
    const today = new Date();
    let start = new Date();
    let end = new Date();

    switch (range) {
      case "today":
        break;
      case "yesterday":
        start.setDate(today.getDate() - 1);
        end.setDate(today.getDate() - 1);
        break;
      case "last7":
        start.setDate(today.getDate() - 7);
        break;
      case "last30":
        start.setDate(today.getDate() - 30);
        break;
      case "thisMonth":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        break;
      case "lastMonth":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        break;
    }

    // Set local dates in YYYY-MM-DD
    setStartDate(start.toISOString().split("T")[0]);
    setEndDate(end.toISOString().split("T")[0]);
  };

  // Fetch Dashboard Stats API
  const fetchStats = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = `/api/dashboard?start_date=${startDate}&end_date=${endDate}`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `Server returned error: ${response.statusText}`);
      }
      setPayload(data);
    } catch (err: any) {
      console.error("Dashboard fetch error:", err);
      setError(err.message || "Failed to load dashboard statistics from Google Ads.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [startDate, endDate]);

  // Fetch when authenticated and dates change
  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
    }
  }, [isAuthenticated, fetchStats]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchStats();
  };

  // Save manual overrides
  const handleSaveOverride = (e: React.FormEvent) => {
    e.preventDefault();
    if (!overrideBrandId) return;

    const spendOffset = parseFloat(overrideSpend) || 0;
    
    // Currency conversion logic
    const rawRev = parseFloat(overrideRevenue) || 0;
    let revOffset = rawRev;
    if (overrideRevenueCurrency === "GBP") revOffset = rawRev * 360.0;
    else if (overrideRevenueCurrency === "USD") revOffset = rawRev * 280.0;
    else if (overrideRevenueCurrency === "EUR") revOffset = rawRev * 305.0;

    const updated = {
      ...manualAdjustments,
      [overrideBrandId]: { spend: spendOffset, revenue: revOffset }
    };

    setManualAdjustments(updated);
    localStorage.setItem("dashboard_manual_adjustments", JSON.stringify(updated));
    setOverrideBrandId(null);
    setOverrideSpend("");
    setOverrideRevenue("");
    setOverrideRevenueCurrency("PKR");
  };

  // Clear specific override
  const handleClearOverride = (brandId: string) => {
    const updated = { ...manualAdjustments };
    delete updated[brandId];
    setManualAdjustments(updated);
    localStorage.setItem("dashboard_manual_adjustments", JSON.stringify(updated));
  };

  // Grouped and Merged Data with Manual Overrides applied
  const processedData = useMemo(() => {
    if (!payload) return null;

    let adjustedSpend = 0;
    let adjustedRevenue = 0;

    const brands = payload.brands.map(b => {
      const adj = manualAdjustments[b.id] || { spend: 0, revenue: 0 };
      const finalSpend = Math.max(0, b.spend + adj.spend);
      const finalRevenue = Math.max(0, b.revenue + adj.revenue);
      const finalProfit = finalRevenue - finalSpend;
      const finalRoi = finalSpend > 0 ? Number((finalProfit / finalSpend * 100).toFixed(2)) : 0;

      adjustedSpend += finalSpend;
      adjustedRevenue += finalRevenue;

      let rec = b.recommendation;
      if (finalSpend > 0) {
        if (finalRoi < 0) {
          rec = "Pause immediately 🛑 - Campaign runs in loss.";
        } else if (finalRoi > 80) {
          rec = "Scale campaign 🚀 - High ROI, increase bids.";
        } else {
          rec = "Keep Running 🟢 - Stable performance.";
        }
      }

      return {
        ...b,
        spend: finalSpend,
        revenue: finalRevenue,
        roi: finalRoi,
        recommendation: rec,
        hasAdjustment: adj.spend !== 0 || adj.revenue !== 0
      };
    });

    const netProfit = adjustedRevenue - adjustedSpend;
    const avgRoi = adjustedSpend > 0 ? (netProfit / adjustedSpend * 100) : 0;

    return {
      ...payload,
      summary: {
        totalSpend: Number(adjustedSpend.toFixed(2)),
        totalRevenue: Number(adjustedRevenue.toFixed(2)),
        netProfit: Number(netProfit.toFixed(2)),
        avgRoi: Number(avgRoi.toFixed(2))
      },
      brands
    };
  }, [payload, manualAdjustments]);

  // CSV Exporter
  const handleExportCSV = () => {
    if (!processedData || processedData.brands.length === 0) return;
    try {
      const headers = ["Brand Name", "Status", "Clicks", "Conversions", "Spend (PKR)", "Revenue (PKR)", "Net Profit (PKR)", "ROI %", "AI Recommendation"];
      const rows = processedData.brands.map(b => [
        b.name,
        b.status,
        b.clicks,
        b.conversions,
        b.spend,
        b.revenue,
        (b.revenue - b.spend).toFixed(2),
        b.roi + "%",
        b.recommendation.replace(/,/g, ";")
      ]);

      const csvContent = "data:text/csv;charset=utf-8," 
        + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `CouponFlock_ROI_Report_${processedData.startDate}_to_${processedData.endDate}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert("Failed to export report CSV: " + err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.loginContainer}>
          <form onSubmit={handleLogin} className={styles.loginCard}>
            <div className={styles.loginLogoWrapper}>
              <span>🤖</span>
              <span>Promo<span style={{ color: "var(--primary-blue)" }}>Registry</span> AI</span>
            </div>
            
            <div>
              <h3 style={{ margin: "4px 0", fontSize: "1.1rem" }}>Arbitrage Dashboard</h3>
              <p className={styles.loginSubtitle}>
                Enter the secret portal access key to view Google Ads & CSL (ConvertSocial) reports.
              </p>
            </div>

            <input
              type="password"
              placeholder="Enter Portal Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.loginInput}
              autoFocus
            />

            <button type="submit" className={styles.loginButton}>
              Authenticate Access
            </button>

            {loginError && (
              <div className={styles.loginError}>
                ⚠️ {loginError}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardContent}>
        
        {/* Header section with status */}
        <header className={styles.dashboardHeader}>
          <div className={styles.titleSection}>
            <div className={styles.titleRow}>
              <h1 className={styles.pageTitle}>AI Arbitrage ROI Dashboard</h1>
              <span className={styles.liveBadge} style={{ 
                backgroundColor: error ? "rgba(239, 68, 68, 0.1)" : "rgba(16, 185, 129, 0.1)",
                borderColor: error ? "rgba(239, 68, 68, 0.2)" : "rgba(16, 185, 129, 0.2)",
                color: error ? "#f87171" : "#34d399"
              }}>
                <span className={styles.liveDot} style={{ backgroundColor: error ? "#ef4444" : "#10b981" }}></span>
                <span>{error ? "API Connection Offline" : "Live API Connection Active"}</span>
              </span>
            </div>
            <p className={styles.pageSubtitle}>
              Real-time Google Ads campaign costs matched with ConvertSocial affiliate commissions.
            </p>
          </div>

          {/* Date Picker & Sync Toolbar */}
          <div className={styles.toolbarSection}>
            <div className={styles.datePickerWrapper}>
              <span>From:</span>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={styles.dateInput}
              />
              <span>To:</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={styles.dateInput}
              />
            </div>

            <button 
              onClick={handleRefresh} 
              disabled={isLoading || isRefreshing}
              className={styles.refreshButton}
            >
              <span>🔄</span>
              <span>{isRefreshing ? "Syncing..." : "Sync Data"}</span>
            </button>
          </div>
        </header>

        {/* Predefined Quick Date Filters Row */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "flex-start", backgroundColor: "rgba(17, 24, 39, 0.3)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "var(--radius-md)", padding: "10px 16px" }}>
          <span style={{ color: "#94a3b8", fontSize: "0.82rem", alignSelf: "center", marginRight: "6px", fontWeight: 600 }}>Quick Ranges:</span>
          <button type="button" onClick={() => setQuickRange("today")} className={styles.actionBtn} style={{ padding: "5px 12px", fontSize: "0.78rem" }}>Today</button>
          <button type="button" onClick={() => setQuickRange("yesterday")} className={styles.actionBtn} style={{ padding: "5px 12px", fontSize: "0.78rem" }}>Yesterday</button>
          <button type="button" onClick={() => setQuickRange("last7")} className={styles.actionBtn} style={{ padding: "5px 12px", fontSize: "0.78rem" }}>Last 7 Days</button>
          <button type="button" onClick={() => setQuickRange("last30")} className={styles.actionBtn} style={{ padding: "5px 12px", fontSize: "0.78rem" }}>Last 30 Days</button>
          <button type="button" onClick={() => setQuickRange("thisMonth")} className={styles.actionBtn} style={{ padding: "5px 12px", fontSize: "0.78rem" }}>This Month</button>
          <button type="button" onClick={() => setQuickRange("lastMonth")} className={styles.actionBtn} style={{ padding: "5px 12px", fontSize: "0.78rem" }}>Last Month</button>
        </div>

        {error && (
          <div className={styles.loginError} style={{ margin: 0, textAlign: "left" }}>
            ⚠️ <strong>API Error:</strong> {error}. Please check your credentials configured in Vercel. 
            You can still use the <strong>Manual Overrides</strong> below to input adjustments and run calculations.
          </div>
        )}

        {/* Dynamic Summary Cards */}
        {isLoading || !processedData ? (
          <div className={styles.summaryGrid}>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
          </div>
        ) : (
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <span className={styles.cardIcon}>💸</span>
              <span className={styles.cardLabel}>Ad Spend</span>
              <span className={styles.cardValue} style={{ color: "#f87171" }}>
                {processedData.summary.totalSpend.toLocaleString()} <span style={{ fontSize: "1rem" }}>PKR</span>
              </span>
              <span className={styles.cardSubtext}>Google Ads Costs</span>
            </div>

            <div className={styles.summaryCard}>
              <span className={styles.cardIcon}>💰</span>
              <span className={styles.cardLabel}>CSL Revenue</span>
              <span className={styles.cardValue} style={{ color: "#34d399" }}>
                {processedData.summary.totalRevenue.toLocaleString()} <span style={{ fontSize: "1rem" }}>PKR</span>
              </span>
              <span className={styles.cardSubtext}>Affiliate Commissions</span>
            </div>

            <div className={styles.summaryCard}>
              <span className={styles.cardIcon}>📈</span>
              <span className={styles.cardLabel}>Net Profit</span>
              <span className={styles.cardValue} style={{ color: processedData.summary.netProfit >= 0 ? "#10b981" : "#ef4444" }}>
                {processedData.summary.netProfit.toLocaleString()} <span style={{ fontSize: "1rem" }}>PKR</span>
              </span>
              <span className={styles.cardSubtext}>
                {processedData.summary.netProfit >= 0 ? "🟢 Profitable Campaign Run" : "🔴 Loss Incurred"}
              </span>
            </div>

            <div className={styles.summaryCard}>
              <span className={styles.cardIcon}>🚀</span>
              <span className={styles.cardLabel}>Average ROI</span>
              <span className={styles.cardValue} style={{ color: processedData.summary.avgRoi >= 50 ? "#34d399" : processedData.summary.avgRoi >= 0 ? "#fbbf24" : "#ef4444" }}>
                {processedData.summary.avgRoi.toFixed(2)}%
              </span>
              <span className={styles.cardSubtext}>Return on Ad Spend (ROAS)</span>
            </div>
          </div>
        )}

        {/* Dynamic Table Section */}
        {isLoading || !processedData ? (
          <div className={styles.skeletonTable}></div>
        ) : (
          <section className={styles.reportSection}>
            <div className={styles.reportHeader}>
              <div>
                <h3 className={styles.sectionTitle}>Campaign Metrics By Brand</h3>
                <p style={{ color: "#64748b", fontSize: "0.82rem", margin: "4px 0" }}>
                  Data source: {processedData.dataSource} | Period: {processedData.startDate} to {processedData.endDate}
                </p>
              </div>

              <div className={styles.tableActions}>
                <button onClick={handleExportCSV} className={styles.actionBtn}>
                  <span>📥</span>
                  <span>Export CSV Report</span>
                </button>
              </div>
            </div>

            {processedData.brands.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
                <span style={{ fontSize: "3rem" }}>📭</span>
                <h4>No campaigns or ad spend found for this date range.</h4>
                <p>Google Ads API returned 0 campaign records between {startDate} and {endDate}.</p>
                <button 
                  onClick={() => {
                    // Set to June 1 - June 8 (historical test date range)
                    setStartDate("2026-06-01");
                    setEndDate("2026-06-08");
                  }}
                  className={styles.refreshButton}
                  style={{ margin: "20px auto 0" }}
                >
                  Load June 1 - June 8 Test Period
                </button>
              </div>
            ) : (
              <div className={styles.tableContainer}>
                <table className={styles.performanceTable}>
                  <thead>
                    <tr>
                      <th>Brand / Campaign</th>
                      <th>Status</th>
                      <th>Clicks</th>
                      <th>Conversions</th>
                      <th>Cost (Spend)</th>
                      <th>CSL Revenue</th>
                      <th>ROI</th>
                      <th>AI Recommendation & Action</th>
                      <th>Manual Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processedData.brands.map((b) => (
                      <tr key={b.id}>
                        <td>
                          <div className={styles.brandInfo}>
                            <span className={styles.brandName}>{b.name}</span>
                            <span className={styles.brandId}>Ref: {b.id}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`${styles.badge} ${b.status === "ACTIVE" ? styles.badgeActive : styles.badgePaused}`}>
                            {b.status}
                          </span>
                        </td>
                        <td style={{ fontWeight: 600 }}>{b.clicks}</td>
                        <td style={{ fontWeight: 600 }}>{b.conversions}</td>
                        <td style={{ color: "#f87171", fontWeight: 700 }}>
                          {b.spend > 0 ? b.spend.toLocaleString() : "0"} PKR
                        </td>
                        <td style={{ color: "#34d399", fontWeight: 700 }}>
                          {b.revenue > 0 ? b.revenue.toLocaleString() : "0"} PKR
                        </td>
                        <td style={{ 
                          fontWeight: 800, 
                          color: b.roi > 50 ? "#34d399" : b.roi > 0 ? "#fbbf24" : b.spend > 0 ? "#f87171" : "#64748b" 
                        }}>
                          {b.spend > 0 ? `${b.roi}%` : "—"}
                        </td>
                        <td>
                          <div className={styles.recommendationCol}>
                            {b.recommendation}
                            {b.hasAdjustment && (
                              <div style={{ fontSize: "0.72rem", color: "#38bdf8", marginTop: "2px" }}>
                                [Manual Adjustments Applied]
                              </div>
                            )}
                          </div>
                        </td>
                        <td>
                          <div style={{ display: "flex", gap: "6px" }}>
                            {b.campaignsDetail && b.campaignsDetail.length > 0 && (
                              <button 
                                onClick={() => setActiveBrandModal(b)} 
                                className={styles.actionBtn}
                                style={{ padding: "4px 8px", fontSize: "0.75rem" }}
                              >
                                Detail 🔍
                              </button>
                            )}
                            <button 
                              onClick={() => {
                                setOverrideBrandId(b.id);
                                const adj = manualAdjustments[b.id] || { spend: 0, revenue: 0 };
                                setOverrideSpend(String(adj.spend));
                                setOverrideRevenue(String(adj.revenue));
                              }} 
                              className={styles.actionBtn}
                              style={{ padding: "4px 8px", fontSize: "0.75rem", borderColor: "rgba(56, 189, 248, 0.3)" }}
                            >
                              Adjust ✏️
                            </button>
                            {b.hasAdjustment && (
                              <button 
                                onClick={() => handleClearOverride(b.id)} 
                                className={styles.actionBtn}
                                style={{ padding: "4px 8px", fontSize: "0.75rem", borderColor: "rgba(239, 68, 68, 0.3)", color: "#f87171" }}
                              >
                                Clear ❌
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* API Credentials Information & Config Panel */}
        <section className={styles.reportSection} style={{ background: "rgba(17, 24, 39, 0.25)" }}>
          <h3 className={styles.sectionTitle} style={{ fontSize: "1.1rem" }}>🛠️ Google Ads API & Integration Status</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", fontSize: "0.85rem", color: "#cbd5e1" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p><strong>Connected Manager Account (MCC):</strong> 664-785-0378</p>
              <p><strong>Developer Token Access:</strong> Approved (Basic Access - 15,000 Operations/Day)</p>
              <p><strong>API Client:</strong> REST gRPC-over-JSON Gateway (V24)</p>
            </div>
            <div>
              <p><strong>How to Link a New Google Ads Account:</strong></p>
              <ol style={{ paddingLeft: "20px", margin: "4px 0" }}>
                <li>Login to Manager Account MCC (664-785-0378).</li>
                <li>Go to <em>Sub-account settings</em>, click the blue plus "+" button, and select <em>Link existing account</em>.</li>
                <li>Enter the 10-digit ID of the running account and send the link request. Accept it in the client account.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 1. Modal overlay for Campaign Level Detail breakdown */}
        {activeBrandModal && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
          }}>
            <div style={{
              background: "#0f172a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              width: "100%",
              maxWidth: "760px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: "12px" }}>
                <h3 style={{ margin: 0, fontSize: "1.3rem" }}>Campaign Breakdown: {activeBrandModal.name}</h3>
                <button 
                  onClick={() => setActiveBrandModal(null)} 
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#94a3b8",
                    fontSize: "1.5rem",
                    cursor: "pointer"
                  }}
                >
                  &times;
                </button>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table className={styles.performanceTable}>
                  <thead>
                    <tr>
                      <th>Google Ads Campaign Name</th>
                      <th>Campaign ID</th>
                      <th>Status</th>
                      <th>Spend (PKR)</th>
                      <th>Clicks</th>
                      <th>Impressions</th>
                      <th>Avg CPC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeBrandModal.campaignsDetail.map((c) => (
                      <tr key={c.id}>
                        <td style={{ fontWeight: 700 }}>{c.name}</td>
                        <td style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#64748b" }}>{c.id}</td>
                        <td>
                          <span className={`${styles.badge} ${c.status === "ENABLED" ? styles.badgeActive : styles.badgePaused}`}>
                            {c.status === "ENABLED" ? "ACTIVE" : "PAUSED"}
                          </span>
                        </td>
                        <td style={{ color: "#f87171", fontWeight: 700 }}>{c.spend.toLocaleString()} PKR</td>
                        <td>{c.clicks}</td>
                        <td>{c.impressions}</td>
                        <td style={{ fontWeight: 600 }}>
                          {c.clicks > 0 ? (c.spend / c.clicks).toFixed(2) : "0.00"} PKR
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button 
                  onClick={() => setActiveBrandModal(null)} 
                  className={styles.loginButton} 
                  style={{ width: "auto", padding: "10px 24px" }}
                >
                  Close Breakdown
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Modal overlay for Manual Cost/Revenue Overrides Adjuster */}
        {overrideBrandId && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
          }}>
            <form onSubmit={handleSaveOverride} style={{
              background: "#0f172a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              width: "100%",
              maxWidth: "400px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Manual Adjustments</h3>
                <p style={{ color: "#64748b", fontSize: "0.8rem", margin: "4px 0" }}>
                  Adjust stats for brand: <strong>{overrideBrandId}</strong>. Values will be added/subtracted locally.
                </p>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "#94a3b8", marginBottom: "6px" }}>
                  Spend Offset (PKR) - Use negative for discount
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. +5000 or -2000"
                  value={overrideSpend}
                  onChange={(e) => setOverrideSpend(e.target.value)}
                  className={styles.loginInput}
                  style={{ textAlign: "left" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "#94a3b8", marginBottom: "6px" }}>
                  CSL Revenue Offset
                </label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 15000"
                    value={overrideRevenue}
                    onChange={(e) => setOverrideRevenue(e.target.value)}
                    className={styles.loginInput}
                    style={{ textAlign: "left", flex: 2 }}
                  />
                  <select
                    value={overrideRevenueCurrency}
                    onChange={(e) => setOverrideRevenueCurrency(e.target.value)}
                    className={styles.loginInput}
                    style={{ flex: 1, cursor: "pointer", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "var(--radius-md)", color: "#ffffff", padding: "12px 6px" }}
                  >
                    <option value="PKR" style={{ background: "#0f172a" }}>PKR</option>
                    <option value="USD" style={{ background: "#0f172a" }}>USD ($)</option>
                    <option value="GBP" style={{ background: "#0f172a" }}>GBP (£)</option>
                    <option value="EUR" style={{ background: "#0f172a" }}>EUR (€)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button 
                  type="button" 
                  onClick={() => setOverrideBrandId(null)} 
                  className={styles.actionBtn}
                  style={{ flex: 1, padding: "12px", justifyContent: "center" }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className={styles.loginButton} 
                  style={{ flex: 1, padding: "12px" }}
                >
                  Save Adjustments
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
