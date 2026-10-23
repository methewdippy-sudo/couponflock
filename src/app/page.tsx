import React from "react";
import HomeClient from "./HomeClient";
import { SAFE_GLOBAL_STORES, SAFE_GLOBAL_COUPONS } from "../lib/safeGlobalStores";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  return (
    <main>
      <HomeClient initialCoupons={SAFE_GLOBAL_COUPONS} initialStores={SAFE_GLOBAL_STORES} />
    </main>
  );
}
