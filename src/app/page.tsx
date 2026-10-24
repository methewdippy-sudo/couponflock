import React from "react";
import HomeClient from "./HomeClient";
import { SAFE_GLOBAL_STORES, SAFE_GLOBAL_COUPONS } from "../lib/safeGlobalStores";

export const dynamic = "force-static"; // Pure static SSG, 0% Vercel ISR Serverless quota usage

export default async function HomePage() {
  return (
    <main>
      <HomeClient initialCoupons={SAFE_GLOBAL_COUPONS} initialStores={SAFE_GLOBAL_STORES} />
    </main>
  );
}
