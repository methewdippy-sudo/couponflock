"use client";

import React, { useEffect, useState, useMemo } from "react";
import { TelemetryEvent, getLocalTelemetryEvents } from "../../../lib/telemetry";

export default function TelemetryDashboardPage() {
  const [events, setEvents] = useState<TelemetryEvent[]>([]);
  const [filterType, setFilterType] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTelemetry = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/telemetry", { cache: "no-store" });
      const data = await res.json();
      const serverEvents: TelemetryEvent[] = Array.isArray(data?.events) ? data.events : [];
      const localEvents = getLocalTelemetryEvents();

      // Merge & deduplicate by id
      const map = new Map<string, TelemetryEvent>();
      [...serverEvents, ...localEvents].forEach((evt) => {
        if (evt && evt.id) map.set(evt.id, evt);
      });

      const merged = Array.from(map.values()).sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      setEvents(merged);
    } catch {
      setEvents(getLocalTelemetryEvents());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 8000);
    return () => clearInterval(interval);
  }, []);

  const stats = useMemo(() => {
    const pageViews = events.filter((e) => e.eventType === "page_view").length;
    const storeViews = events.filter((e) => e.eventType === "store_view").length;
    const couponClicks = events.filter((e) => e.eventType === "coupon_click" || e.eventType === "code_copy").length;
    const searches = events.filter((e) => e.eventType === "search").length;

    const byStore: Record<string, { views: number; clicks: number; lastSeen: string }> = {};
    const byCoupon: Record<string, { store: string; code: string; discount: string; clicks: number }> = {};
    const byKeyword: Record<string, { campaign: string; term: string; clicks: number }> = {};

    events.forEach((e) => {
      const sName = e.storeName || e.storeSlug || (e.path.startsWith("/store/") ? e.path.replace("/store/", "") : "");
      if (sName) {
        if (!byStore[sName]) byStore[sName] = { views: 0, clicks: 0, lastSeen: e.timestamp };
        if (e.eventType === "store_view" || e.eventType === "page_view") byStore[sName].views += 1;
        if (e.eventType === "coupon_click" || e.eventType === "code_copy") byStore[sName].clicks += 1;
      }

      if (e.eventType === "coupon_click" || e.eventType === "code_copy") {
        const cKey = `${sName || "Store"}|${e.couponCode || "DEAL"}`;
        if (!byCoupon[cKey]) {
          byCoupon[cKey] = {
            store: sName || "Direct Store",
            code: e.couponCode || "AUTO-DEAL",
            discount: e.discount || "Verified Offer",
            clicks: 0,
          };
        }
        byCoupon[cKey].clicks += 1;
      }

      if (e.utmTerm || e.utmCampaign || e.gclid) {
        const kKey = `${e.utmCampaign || "Direct Ads"}|${e.utmTerm || e.gclid || "Click"}`;
        if (!byKeyword[kKey]) {
          byKeyword[kKey] = {
            campaign: e.utmCampaign || "Google Ads",
            term: e.utmTerm || (e.gclid ? `GCLID: ${e.gclid.slice(0, 12)}...` : "Organic"),
            clicks: 0,
          };
        }
        byKeyword[kKey].clicks += 1;
      }
    });

    const topStores = Object.entries(byStore)
      .map(([name, val]) => ({ name, ...val }))
      .sort((a, b) => b.clicks - a.clicks || b.views - a.views)
      .slice(0, 10);

    const topCoupons = Object.values(byCoupon)
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10);

    const topKeywords = Object.values(byKeyword)
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10);

    return {
      pageViews,
      storeViews,
      couponClicks,
      searches,
      ctr: storeViews > 0 ? Math.min(100, Math.round((couponClicks / storeViews) * 100)) : 0,
      topStores,
      topCoupons,
      topKeywords,
    };
  }, [events]);

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      if (filterType !== "all" && e.eventType !== filterType) return false;
      if (searchFilter.trim() !== "") {
        const q = searchFilter.toLowerCase();
        const hay = `${e.path} ${e.storeName || ""} ${e.storeSlug || ""} ${e.couponCode || ""} ${e.utmCampaign || ""} ${e.utmTerm || ""} ${e.searchQuery || ""}`.toLowerCase();
        return hay.includes(q);
      }
      return true;
    });
  }, [events, filterType, searchFilter]);

  const exportCsv = () => {
    const headers = ["Timestamp", "Site", "Event", "Path", "Store", "CouponCode", "Discount", "UTM_Campaign", "UTM_Term", "GCLID", "Device"];
    const rows = filteredEvents.map((e) => [
      e.timestamp,
      e.site,
      e.eventType,
      e.path,
      e.storeName || e.storeSlug || "",
      e.couponCode || "",
      e.discount || "",
      e.utmCampaign || "",
      e.utmTerm || "",
      e.gclid || "",
      e.device || "",
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `telemetry-export-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div style={{ maxWidth: "1240px", margin: "36px auto", padding: "0 20px", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Header Banner */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        color: "#ffffff",
        borderRadius: "20px",
        padding: "28px 32px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        boxShadow: "0 16px 36px rgba(15, 23, 42, 0.16)",
        marginBottom: "28px"
      }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(16, 185, 129, 0.2)", color: "#34d399", padding: "5px 12px", borderRadius: "999px", fontSize: "0.76rem", fontWeight: 700, marginBottom: "10px" }}>
            <span>●</span> LIVE USER JOURNEY & AFFILIATE CLICK TELEMETRY
          </div>
          <h1 style={{ fontSize: "1.85rem", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
            Real-Time Visitor & Store Click Intelligence
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "0.92rem", marginTop: "6px", marginBottom: 0 }}>
            Track exactly where every visitor lands, which store pages they open, which coupon codes they copy, and which Google Ads keywords convert.
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            onClick={fetchTelemetry}
            style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", padding: "10px 18px", borderRadius: "10px", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}
          >
            {isLoading ? "Refreshing..." : "↻ Refresh Live Stream"}
          </button>
          <button
            onClick={exportCsv}
            style={{ background: "#10b981", color: "#fff", border: "none", padding: "10px 18px", borderRadius: "10px", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}
          >
            ⬇ Export CSV Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "16px", marginBottom: "28px" }}>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 4px 12px rgba(15,23,42,0.03)" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Total Page Views</span>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: "6px" }}>{stats.pageViews}</div>
          <span style={{ fontSize: "0.78rem", color: "#10b981", fontWeight: 600 }}>Live Session Stream</span>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 4px 12px rgba(15,23,42,0.03)" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Store Page Visits</span>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#1e3a8a", marginTop: "6px" }}>{stats.storeViews}</div>
          <span style={{ fontSize: "0.78rem", color: "#64748b" }}>Dedicated /store/ landings</span>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 4px 12px rgba(15,23,42,0.03)" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Outbound Coupon Clicks</span>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#059669", marginTop: "6px" }}>{stats.couponClicks}</div>
          <span style={{ fontSize: "0.78rem", color: "#059669", fontWeight: 600 }}>Code Copied + Redirected</span>
        </div>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 4px 12px rgba(15,23,42,0.03)" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Store-to-Click CTR</span>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#d97706", marginTop: "6px" }}>{stats.ctr}%</div>
          <span style={{ fontSize: "0.78rem", color: "#64748b" }}>{stats.searches} brand searches tracked</span>
        </div>
      </div>

      {/* 2-Column Top Stores & Top Clicked Coupons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "20px", marginBottom: "28px" }}>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "22px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", marginTop: 0, marginBottom: "14px" }}>
            🏪 Top Visited & Clicked Stores (Where Users Go)
          </h3>
          {stats.topStores.length === 0 ? (
            <p style={{ color: "#94a3b8", fontSize: "0.88rem" }}>No store visits recorded yet in this session.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {stats.topStores.map((st, i) => (
                <div key={st.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, display: " inline-flex", alignItems: "center", justifyContent: "center" }}>
                      {i + 1}
                    </span>
                    <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>{st.name}</span>
                  </div>
                  <div style={{ display: "flex", gap: "12px", fontSize: "0.82rem" }}>
                    <span style={{ color: "#475569", fontWeight: 600 }}>{st.views} Views</span>
                    <span style={{ color: "#059669", fontWeight: 800 }}>{st.clicks} Clicks</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "22px" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", marginTop: 0, marginBottom: "14px" }}>
            🎟️ Most Copied & Clicked Coupon Codes
          </h3>
          {stats.topCoupons.length === 0 ? (
            <p style={{ color: "#94a3b8", fontSize: "0.88rem" }}>Click any coupon button on a store page to see live code tracking here.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {stats.topCoupons.map((cp, i) => (
                <div key={`${cp.store}-${cp.code}-${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>{cp.store} — <span style={{ color: "#1d4ed8" }}>{cp.discount}</span></div>
                    <div style={{ fontSize: "0.76rem", color: "#64748b" }}>Code: <strong>{cp.code}</strong></div>
                  </div>
                  <span style={{ background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0", padding: "4px 10px", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 800 }}>
                    {cp.clicks} Redemptions
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Live Event Stream Table */}
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "22px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "16px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
            📡 Live User Activity Stream ({filteredEvents.length} Events)
          </h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="Filter by store, code, or keyword..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.85rem", minWidth: "220px" }}
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.85rem", fontWeight: 600 }}
            >
              <option value="all">All Events</option>
              <option value="store_view">Store Views</option>
              <option value="coupon_click">Coupon Clicks</option>
              <option value="page_view">Page Views</option>
              <option value="search">Searches</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e2e8f0", textAlign: "left", color: "#475569" }}>
                <th style={{ padding: "10px 12px" }}>Time</th>
                <th style={{ padding: "10px 12px" }}>Event</th>
                <th style={{ padding: "10px 12px" }}>Page / Store</th>
                <th style={{ padding: "10px 12px" }}>Coupon / Action Detail</th>
                <th style={{ padding: "10px 12px" }}>UTM Campaign / Keyword</th>
                <th style={{ padding: "10px 12px" }}>Device</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.slice(0, 100).map((evt) => (
                <tr key={evt.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "10px 12px", color: "#64748b", whiteSpace: "nowrap" }}>
                    {new Date(evt.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{
                      padding: "3px 8px",
                      borderRadius: "6px",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      background: evt.eventType === "coupon_click" ? "#dcfce7" : evt.eventType === "store_view" ? "#dbeafe" : "#f1f5f9",
                      color: evt.eventType === "coupon_click" ? "#15803d" : evt.eventType === "store_view" ? "#1d4ed8" : "#475569"
                    }}>
                      {evt.eventType.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px", fontWeight: 700, color: "#0f172a" }}>
                    {evt.storeName || evt.path}
                  </td>
                  <td style={{ padding: "10px 12px", color: "#334155" }}>
                    {evt.couponCode ? (
                      <span>Code: <strong>{evt.couponCode}</strong> ({evt.discount || "Deal"})</span>
                    ) : evt.searchQuery ? (
                      <span>Searched: &ldquo;{evt.searchQuery}&rdquo;</span>
                    ) : (
                      <span>Visited {evt.path}</span>
                    )}
                  </td>
                  <td style={{ padding: "10px 12px", color: "#64748b" }}>
                    {evt.utmCampaign || evt.utmTerm || evt.gclid ? (
                      <span>{evt.utmCampaign || "Ads"} • <strong>{evt.utmTerm || evt.gclid}</strong></span>
                    ) : (
                      <span>Direct / Organic</span>
                    )}
                  </td>
                  <td style={{ padding: "10px 12px", color: "#64748b" }}>{evt.device || "Desktop"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
