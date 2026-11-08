"use client";

export interface TelemetryEvent {
  id: string;
  site: string;
  eventType: "page_view" | "store_view" | "coupon_click" | "code_copy" | "search" | "feedback_vote";
  path: string;
  storeSlug?: string;
  storeName?: string;
  couponId?: string;
  couponCode?: string;
  discount?: string;
  searchQuery?: string;
  targetUrl?: string;
  utmSource?: string;
  utmCampaign?: string;
  utmTerm?: string;
  gclid?: string;
  referrer?: string;
  device?: "Mobile" | "Desktop";
  timestamp: string;
}

const STORAGE_KEY = "cf_telemetry_events_v1";

export function captureUrlTrackingParams(): {
  utmSource: string;
  utmCampaign: string;
  utmTerm: string;
  gclid: string;
} {
  if (typeof window === "undefined") {
    return { utmSource: "", utmCampaign: "", utmTerm: "", gclid: "" };
  }
  try {
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_campaign", "utm_term", "gclid"];
    keys.forEach((k) => {
      const val = params.get(k);
      if (val) sessionStorage.setItem(k, val);
    });
    return {
      utmSource: sessionStorage.getItem("utm_source") || params.get("utm_source") || "",
      utmCampaign: sessionStorage.getItem("utm_campaign") || params.get("utm_campaign") || "",
      utmTerm: sessionStorage.getItem("utm_term") || params.get("utm_term") || "",
      gclid: sessionStorage.getItem("gclid") || params.get("gclid") || "",
    };
  } catch {
    return { utmSource: "", utmCampaign: "", utmTerm: "", gclid: "" };
  }
}

export function trackEvent(
  event: Omit<TelemetryEvent, "id" | "site" | "path" | "timestamp" | "device" | "utmSource" | "utmCampaign" | "utmTerm" | "gclid" | "referrer"> & {
    site?: string;
    path?: string;
  }
) {
  if (typeof window === "undefined") return;

  try {
    const tracking = captureUrlTrackingParams();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const fullEvent: TelemetryEvent = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      site: event.site || "CouponFlock",
      eventType: event.eventType,
      path: event.path || window.location.pathname,
      storeSlug: event.storeSlug,
      storeName: event.storeName,
      couponId: event.couponId,
      couponCode: event.couponCode,
      discount: event.discount,
      searchQuery: event.searchQuery,
      targetUrl: event.targetUrl,
      utmSource: tracking.utmSource,
      utmCampaign: tracking.utmCampaign,
      utmTerm: tracking.utmTerm,
      gclid: tracking.gclid,
      referrer: document.referrer || "direct",
      device: isMobile ? "Mobile" : "Desktop",
      timestamp: new Date().toISOString(),
    };

    try {
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      const existing: TelemetryEvent[] = existingRaw ? JSON.parse(existingRaw) : [];
      existing.unshift(fullEvent);
      if (existing.length > 250) existing.length = 250;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // Ignore storage quota errors
    }

    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", fullEvent.eventType, {
        event_category: fullEvent.site,
        event_label: fullEvent.storeName || fullEvent.path,
        store_slug: fullEvent.storeSlug || "",
        coupon_code: fullEvent.couponCode || "",
        discount: fullEvent.discount || "",
        utm_campaign: fullEvent.utmCampaign || "",
        utm_term: fullEvent.utmTerm || "",
        gclid: fullEvent.gclid || "",
      });
    }

    const payload = JSON.stringify(fullEvent);
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/telemetry", blob);
    } else {
      fetch("/api/telemetry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Never interrupt user flow
  }
}

export function getLocalTelemetryEvents(): TelemetryEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
