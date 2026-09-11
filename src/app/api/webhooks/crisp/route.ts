import { NextRequest, NextResponse } from "next/server";

const CRISP_AUTH_HEADER = "Basic NWM0Y2E1N2YtNWMzNC00OGUyLTk5NDctMzJkYTlhZTdlNTE5OjFiOGJhMmU1MWNhMmE2ODBkMWJjNjkyOWI4Zjc2ZjBjMzU1ZjFlMTQxOTUzYWMxMTQ5YzA5MzBmM2RkN2IyZjA=";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    console.log("Received Crisp webhook payload:", JSON.stringify(payload));

    // Verify this is a text message sent by a user, not an operator to prevent infinite loops
    if (
      payload.event === "message:send" &&
      payload.data &&
      payload.data.from === "user" &&
      payload.data.type === "text"
    ) {
      const websiteId = payload.data.website_id;
      const sessionId = payload.data.session_id;
      const userMessage = (payload.data.content || "").toLowerCase().trim();
      console.log(`Matched message:send from user. content: "${userMessage}", websiteId: "${websiteId}", sessionId: "${sessionId}"`);

      let replyContent = "";

      // 1. Keyword check rules
      if (
        userMessage === "hi" || 
        userMessage === "hello" || 
        userMessage === "hey" ||
        userMessage === "start"
      ) {
        replyContent = "Hello! I am Alina, your CouponFlock assistant. 🌸 Which brand's coupon or discount code are you looking for today?";
      } 
      else if (userMessage.includes("bouquet")) {
        replyContent = "Here is the verified 60% off discount code for Bouquets by Post: **MuhammadHaziqueAli**\n\nClick here to shop and apply: https://bouquetsbypost.com/muhammadhaziqueali";
      } 
      else if (userMessage.includes("hostinger")) {
        replyContent = "Here is the verified discount code for Hostinger: **HOSTING80**\n\nClick here to shop and apply: https://www.hostinger.com";
      } 
      else if (userMessage.includes("prepagent") || userMessage.includes("real estate")) {
        replyContent = "Here is the verified PrepAgent exam prep discount code: **PREP40**\n\nClick here to shop and apply: https://www.prepagent.com";
      }
      else if (userMessage.includes("nuphy") || userMessage.includes("keyboard")) {
        replyContent = "Here is the verified NuPhy keyboards promo code: **NUPHY10**\n\nClick here to shop and apply: https://nuphy.com";
      }
      else if (userMessage.includes("lola") || userMessage.includes("lykke") || userMessage.includes("pump")) {
        replyContent = "Here is the verified Lola & Lykke maternal coupon code: **LOLA15**\n\nClick here to shop and apply: https://lolalykke.goaffpro.com";
      }
      else if (userMessage.includes("dreame")) {
        replyContent = "Here is the verified Dreame home appliances coupon code: **DREAME20**\n\nClick here to shop and apply: https://www.dreametech.com";
      }
      else if (userMessage.includes("help") || userMessage.includes("support")) {
        replyContent = "Sure! I can help you find discount codes. Just tell me the brand name (e.g. Hostinger, Bouquets by Post) and I will retrieve the active codes for you.";
      }

      // If we matched a keyword, send the automated response back to Crisp conversation
      if (replyContent) {
        const crispApiUrl = `https://api.crisp.chat/v1/website/${websiteId}/conversation/${sessionId}/message`;
        
        console.log(`Sending auto-reply to Crisp: "${replyContent}"`);
        let response = await fetch(crispApiUrl, {
          method: "POST",
          headers: {
            "Authorization": CRISP_AUTH_HEADER,
            "Content-Type": "application/json",
            "X-Crisp-Tier": "plugin"
          },
          body: JSON.stringify({
            type: "text",
            from: "operator",
            origin: "chat",
            content: replyContent,
          }),
        });

        if (response.status === 401) {
          console.log("Failed with 'plugin' tier, retrying with 'user' tier...");
          response = await fetch(crispApiUrl, {
            method: "POST",
            headers: {
              "Authorization": CRISP_AUTH_HEADER,
              "Content-Type": "application/json",
              "X-Crisp-Tier": "user"
            },
            body: JSON.stringify({
              type: "text",
              from: "operator",
              origin: "chat",
              content: replyContent,
            }),
          });
        }

        const resText = await response.text();
        console.log(`Crisp API responded with status ${response.status}: ${resText}`);
      }
    }

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("Crisp webhook error:", err);
    return NextResponse.json({ status: "error", error: "Internal Server Error" }, { status: 500 });
  }
}
