import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

interface StoredTelemetryEvent {
  id: string;
  site: string;
  eventType: string;
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
  device?: string;
  timestamp: string;
}

const MEMORY_BUFFER: StoredTelemetryEvent[] = [];
const MAX_EVENTS = 500;
const TMP_FILE = path.join(os.tmpdir(), "cf_telemetry_events.json");

function loadEvents(): StoredTelemetryEvent[] {
  if (MEMORY_BUFFER.length > 0) return MEMORY_BUFFER;
  try {
    if (fs.existsSync(TMP_FILE)) {
      const data = JSON.parse(fs.readFileSync(TMP_FILE, "utf8"));
      if (Array.isArray(data)) {
        MEMORY_BUFFER.push(...data.slice(0, MAX_EVENTS));
      }
    }
  } catch {
    // Ignore file read errors
  }
  return MEMORY_BUFFER;
}

function saveEvent(evt: StoredTelemetryEvent) {
  loadEvents();
  MEMORY_BUFFER.unshift(evt);
  if (MEMORY_BUFFER.length > MAX_EVENTS) {
    MEMORY_BUFFER.length = MAX_EVENTS;
  }
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(MEMORY_BUFFER), "utf8");
  } catch {
    // Ignore file write errors
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || !body.eventType) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    saveEvent({
      id: body.id || `${Date.now()}`,
      site: body.site || "CouponFlock",
      eventType: body.eventType,
      path: body.path || "/",
      storeSlug: body.storeSlug || "",
      storeName: body.storeName || "",
      couponId: body.couponId || "",
      couponCode: body.couponCode || "",
      discount: body.discount || "",
      searchQuery: body.searchQuery || "",
      targetUrl: body.targetUrl || "",
      utmSource: body.utmSource || "",
      utmCampaign: body.utmCampaign || "",
      utmTerm: body.utmTerm || "",
      gclid: body.gclid || "",
      referrer: body.referrer || "direct",
      device: body.device || "Desktop",
      timestamp: body.timestamp || new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}

export async function GET() {
  const events = loadEvents();
  return NextResponse.json({
    ok: true,
    totalEvents: events.length,
    events,
  });
}
