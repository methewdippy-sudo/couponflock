import { NextRequest, NextResponse } from "next/server";

function extractBrandName(campaignName: string): string {
  const name = campaignName.toLowerCase().trim();
  if (name.includes("desktronic")) return "Desktronic";
  if (name.includes("patpat")) return "PatPat";
  if (name.includes("dreame")) return "Dreame Tech";
  if (name.includes("asterix") || name.includes("parc")) return "Parc Astérix";
  if (name.includes("lola") || name.includes("lykke")) return "Lola & Lykke";
  if (name.includes("kossma")) return "Kossma";
  if (name.includes("ryze")) return "Ryze";
  if (name.includes("lume")) return "Lume";
  
  // Fallback to first capitalized word
  const parts = campaignName.split(/[\s-_]+/);
  if (parts.length > 0 && parts[0]) {
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  }
  return campaignName;
}

async function getGoogleAdsAccessToken(clientId: string, clientSecret: string, refreshToken: string) {
  const url = "https://oauth2.googleapis.com/token";
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token"
  });

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString()
  });

  if (!response.ok) {
    throw new Error(`Google Ads Authentication Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function getAdmitadAccessToken(clientId: string, base64Header: string) {
  const url = "https://api.admitad.com/token/";
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    scope: "statistics"
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${base64Header}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body.toString()
  });

  if (!response.ok) {
    throw new Error(`Admitad Authentication Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const startDateStr = searchParams.get("start_date");
  const endDateStr = searchParams.get("end_date");

  // Default to past 30 days
  const today = new Date();
  const past30Days = new Date();
  past30Days.setDate(today.getDate() - 30);

  const start_date = startDateStr || past30Days.toISOString().split("T")[0];
  const end_date = endDateStr || today.toISOString().split("T")[0];

  // Retrieve credentials from environment variables
  const googleClientId = process.env.GOOGLE_ADS_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_ADS_CLIENT_SECRET;
  const googleRefreshToken = process.env.GOOGLE_ADS_REFRESH_TOKEN;
  const googleDevToken = "7770ch-_wE_K_XbVBebumw";

  const admitadClientId = process.env.ADMITAD_CLIENT_ID;
  const admitadBase64 = process.env.ADMITAD_BASE64_HEADER;

  // Check if credentials are set
  if (!googleClientId || !googleClientSecret || !googleRefreshToken) {
    return NextResponse.json({
      error: "Google Ads API Credentials are not configured in Vercel environment variables.",
      startDate: start_date,
      endDate: end_date,
      summary: { totalSpend: 0, totalRevenue: 0, netProfit: 0, avgRoi: 0 },
      brands: [],
      dataSource: "NONE"
    }, { status: 400 });
  }

  try {
    // 1. Refresh Google Ads Token
    const googleToken = await getGoogleAdsAccessToken(googleClientId, googleClientSecret, googleRefreshToken);
    
    // 2. Query campaigns for the user's active, enabled account: 5414771401
    const customerId = "5414771401";
    const query = `
      SELECT
        campaign.id,
        campaign.name,
        campaign.status,
        metrics.cost_micros,
        metrics.clicks,
        metrics.impressions
      FROM campaign
      WHERE segments.date BETWEEN '${start_date}' AND '${end_date}'
    `;

    const googleAdsResponse = await fetch(`https://googleads.googleapis.com/v24/customers/${customerId}/googleAds:search`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${googleToken}`,
        "developer-token": googleDevToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });

    const campaignsCost: { [key: string]: { id: string, name: string, status: string, spend: number, clicks: number, impressions: number } } = {};

    if (googleAdsResponse.ok) {
      const result = await googleAdsResponse.json();
      const rows = result.results || [];
      for (const row of rows) {
        const campaign = row.campaign;
        const metrics = row.metrics;
        if (campaign && metrics) {
          const rawName = campaign.name;
          const key = rawName.toLowerCase().trim();
          const spend = (Number(metrics.costMicros || metrics.cost_micros || 0)) / 1000000.0;
          const clicks = Number(metrics.clicks || 0);
          const impressions = Number(metrics.impressions || 0);

          campaignsCost[key] = {
            id: campaign.id,
            name: rawName,
            status: campaign.status,
            spend,
            clicks,
            impressions
          };
        }
      }
    } else {
      const errText = await googleAdsResponse.text();
      throw new Error(`Google Ads Query Error: ${errText}`);
    }

    // 3. Fetch Admitad stats if configured
    const admitadStats: { [key: string]: { revenue: number, actions: number } } = {};
    if (admitadClientId && admitadBase64) {
      try {
        const admitadToken = await getAdmitadAccessToken(admitadClientId, admitadBase64);
        const formatAdmitadDate = (dStr: string) => {
          const parts = dStr.split("-");
          return `${parts[2]}.${parts[1]}.${parts[0]}`;
        };

        const statsResponse = await fetch(
          `https://api.admitad.com/statistics/campaigns/?date_start=${formatAdmitadDate(start_date)}&date_end=${formatAdmitadDate(end_date)}`,
          {
            headers: { "Authorization": `Bearer ${admitadToken}` }
          }
        );

        if (statsResponse.ok) {
          const statsData = await statsResponse.json();
          const results = statsData.results || [];
          for (const row of results) {
            const nameKey = (row.campaign?.name || "").toLowerCase().trim();
            // Assuming 1 USD = 280 PKR for conversion
            const revenue = Number(row.payment_sum || 0) * 280.0;
            const actions = Number(row.actions || 0);
            if (nameKey) {
              admitadStats[nameKey] = { revenue, actions };
            }
          }
        }
      } catch (err) {
        console.warn("Failed to fetch Admitad/CSL statistics:", err);
      }
    }

    // 4. Dynamic Grouping by Brand
    const brandsMap: { [key: string]: { name: string, clicks: number, spend: number, conversions: number, revenue: number, campaigns: any[] } } = {};

    // Group Google Ads Campaigns by Dynamic Brand Name
    for (const [key, details] of Object.entries(campaignsCost)) {
      const brandName = extractBrandName(details.name);
      const brandKey = brandName.toLowerCase();

      if (!brandsMap[brandKey]) {
        brandsMap[brandKey] = {
          name: brandName,
          clicks: 0,
          spend: 0,
          conversions: 0,
          revenue: 0,
          campaigns: []
        };
      }

      brandsMap[brandKey].spend += details.spend;
      brandsMap[brandKey].clicks += details.clicks;
      brandsMap[brandKey].campaigns.push(details);
    }

    // Match and Add Admitad stats
    for (const [cName, metrics] of Object.entries(admitadStats)) {
      // Find matching brand key
      let matched = false;
      for (const brandKey of Object.keys(brandsMap)) {
        if (cName.includes(brandKey) || brandKey.includes(cName)) {
          brandsMap[brandKey].revenue += metrics.revenue;
          brandsMap[brandKey].conversions += metrics.actions;
          matched = true;
          break;
        }
      }
      
      // If there's an Admitad campaign with revenue that didn't match any Google Ads campaign,
      // create it dynamically as well so we don't lose sales data!
      if (!matched) {
        const brandName = cName.charAt(0).toUpperCase() + cName.slice(1);
        brandsMap[cName] = {
          name: brandName,
          clicks: 0,
          spend: 0,
          conversions: metrics.actions,
          revenue: metrics.revenue,
          campaigns: []
        };
      }
    }

    // Convert map to array and compute metrics
    const brandsList = Object.entries(brandsMap).map(([id, b]) => {
      const profit = b.revenue - b.spend;
      const roi = b.spend > 0 ? Number((profit / b.spend * 100).toFixed(2)) : 0;
      
      // Check if any campaign is active
      const anyActive = b.campaigns.some(c => c.status === "ENABLED");
      const status = anyActive ? "ACTIVE" : "PAUSED";
      
      let recommendation = "Inactive ⚪ - No active campaigns running.";
      if (b.spend > 0) {
        if (roi < 0) {
          recommendation = "Pause immediately 🛑 - Campaign runs in loss.";
        } else if (roi > 80) {
          recommendation = "Scale campaign 🚀 - High ROI, increase bids.";
        } else {
          recommendation = "Keep Running 🟢 - Stable performance.";
        }
      }

      return {
        id,
        name: b.name,
        clicks: b.clicks,
        spend: Number(b.spend.toFixed(2)),
        conversions: b.conversions,
        revenue: Number(b.revenue.toFixed(2)),
        roi,
        status,
        recommendation,
        campaignsDetail: b.campaigns
      };
    });

    // Compute Grand Totals
    let totalSpend = 0;
    let totalRevenue = 0;
    brandsList.forEach(b => {
      totalSpend += b.spend;
      totalRevenue += b.revenue;
    });

    const netProfit = totalRevenue - totalSpend;
    const avgRoi = totalSpend > 0 ? (netProfit / totalSpend * 100) : 0;

    return NextResponse.json({
      startDate: start_date,
      endDate: end_date,
      summary: {
        totalSpend: Number(totalSpend.toFixed(2)),
        totalRevenue: Number(totalRevenue.toFixed(2)),
        netProfit: Number(netProfit.toFixed(2)),
        avgRoi: Number(avgRoi.toFixed(2))
      },
      brands: brandsList,
      dataSource: "LIVE_GOOGLE_ADS_AND_CSL_APIS"
    });

  } catch (error: any) {
    console.error("Dashboard execution error:", error);
    return NextResponse.json({
      error: "Failed to connect to Google Ads API.",
      details: error.message || error,
      summary: { totalSpend: 0, totalRevenue: 0, netProfit: 0, avgRoi: 0 },
      brands: [],
      dataSource: "ERROR"
    }, { status: 500 });
  }
}
