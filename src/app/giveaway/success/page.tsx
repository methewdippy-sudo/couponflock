"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

// CONFIGURATION: Replace these placeholder URLs with your actual Google Drive / Notion / File download links.
const FILE_LINKS = {
  delta: "https://drive.google.com/uc?export=download&id=YOUR_DELTA_DRIVE_ID",
  budget: "https://docs.google.com/spreadsheets/d/YOUR_BUDGET_SHEET_ID/copy",
  notion: "https://notion.so/YOUR_NOTION_TEMPLATE_ID",
};

interface RewardDetails {
  title: string;
  subtitle: string;
  logo: string;
  color: string;
  glow: string;
  isDownload: boolean;
  value?: string;
  code?: string;
  actionText: string;
  actionUrl?: string;
  instructions: string[];
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "walmart";
  const [copied, setCopied] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const getRewardDetails = (t: string): RewardDetails => {
    switch (t) {
      case "paypal":
        return {
          title: "PayPal Funds Transfer",
          subtitle: "Your reward payout has been validated and queued for dispatch.",
          logo: "💳",
          color: "#003087",
          glow: "rgba(0, 48, 135, 0.15)",
          isDownload: false,
          value: "$100.00 USD",
          code: "TXN-PP-9827X-LQR",
          actionText: "Check Transfer Status",
          instructions: [
            "Your transaction reference key is copied below.",
            "Transfer will be processed and credited within 12-24 hours.",
            "A confirmation email has been sent to your registered address."
          ],
        };
      case "gas":
        return {
          title: "Shell Gas Card Voucher",
          subtitle: "Your promo gas voucher is ready for use at any Shell location.",
          logo: "⛽",
          color: "#ffc80c",
          glow: "rgba(255, 200, 12, 0.15)",
          isDownload: false,
          value: "$100.00 Gift Card",
          code: "SHL-2026-FUE-8712",
          actionText: "Print Voucher Code",
          instructions: [
            "Copy the voucher code below.",
            "Present this code to the cashier at any Shell station.",
            "This promotional card is valid for 12 months from activation."
          ],
        };
      case "delta":
        return {
          title: "Delta Executor PC Download",
          subtitle: "Anti-bot verification complete. Your safe download package is ready.",
          logo: "🎮",
          color: "#10b981",
          glow: "rgba(16, 185, 129, 0.15)",
          isDownload: true,
          actionText: "Download Executor Setup",
          actionUrl: FILE_LINKS.delta,
          instructions: [
            "Click the Download button below to start the file download.",
            "Run the setup installer on your Windows PC.",
            "If your browser flags the cheat injector, allow it in Windows Defender settings."
          ],
        };
      case "budget":
        return {
          title: "Budget Sheets Planner",
          subtitle: "Thank you for validating! Access your Google Sheets Template below.",
          logo: "📊",
          color: "#0f9d58",
          glow: "rgba(15, 157, 88, 0.15)",
          isDownload: true,
          actionText: "Make a Copy (Google Sheets)",
          actionUrl: FILE_LINKS.budget,
          instructions: [
            "Click the Make a Copy button below to open Google Sheets.",
            "Login to your Google account and hit 'Make a Copy' to clone it to your Drive.",
            "Start tracking your monthly expenses easily!"
          ],
        };
      case "notion":
        return {
          title: "Notion Second Brain Planner",
          subtitle: "Your Ultimate Notion template duplication link is unlocked.",
          logo: "🧠",
          color: "#1f2937",
          glow: "rgba(31, 41, 55, 0.15)",
          isDownload: true,
          actionText: "Duplicate Template in Notion",
          actionUrl: FILE_LINKS.notion,
          instructions: [
            "Click the Duplicate button below to open the template in Notion.",
            "Click 'Duplicate' in the top right corner of the Notion page.",
            "Make sure you are logged into your Notion workspace."
          ],
        };
      case "robux":
        return {
          title: "Roblox Robux Digital Card",
          subtitle: "Robux voucher has been generated and validated.",
          logo: "🎮",
          color: "#1f2937",
          glow: "rgba(31, 41, 55, 0.15)",
          isDownload: false,
          value: "10,000 Robux Card",
          code: "RBX-7821-ROB-4592",
          actionText: "Redeem on Roblox.com",
          instructions: [
            "Copy your digital Pin code below.",
            "Go to roblox.com/redeem in your browser.",
            "Enter the pin and click 'Redeem' to credit Robux balance directly to your account."
          ],
        };
      case "steam":
        return {
          title: "Steam Wallet Digital Card",
          subtitle: "Congratulations! Your digital Steam Wallet code is ready.",
          logo: "🎮",
          color: "#171a21",
          glow: "rgba(23, 26, 33, 0.15)",
          isDownload: false,
          value: "$50.00 Steam Wallet",
          code: "STM-9821-WLT-0412",
          actionText: "Redeem on Steam",
          instructions: [
            "Copy the Steam Wallet code below.",
            "Open Steam Client -> Add Funds -> Redeem a Steam Wallet Code.",
            "Paste the code and click Redeem to add $50 to your Steam Wallet."
          ],
        };
      case "amazon":
        return {
          title: "Amazon Digital Gift Card",
          subtitle: "Your Amazon Shopping promo code is ready for checkout.",
          logo: "🛍️",
          color: "#ff9900",
          glow: "rgba(255, 153, 0, 0.15)",
          isDownload: false,
          value: "$100.00 Gift Card",
          code: "AMZ-9021-GFT-2819",
          actionText: "Redeem on Amazon.com",
          instructions: [
            "Copy the gift card claim code below.",
            "Go to amazon.com/redeem or checkout payment settings.",
            "Enter your claim code and click 'Apply to Your Balance'."
          ],
        };
      case "playstation":
        return {
          title: "PlayStation Network Card",
          subtitle: "Your PSN Store wallet credit code is unlocked.",
          logo: "🎮",
          color: "#003087",
          glow: "rgba(0, 48, 135, 0.15)",
          isDownload: false,
          value: "$50.00 PSN Wallet",
          code: "PSN-8921-WLT-9281",
          actionText: "Redeem on PSN Store",
          instructions: [
            "Copy the 12-digit PSN voucher code below.",
            "Open PlayStation Store -> click on your Profile Avatar -> Redeem Code.",
            "Paste the code to credit $50 to your PSN wallet balance."
          ],
        };
      case "googleplay":
        return {
          title: "Google Play Gift Voucher",
          subtitle: "Your Play Store credit voucher is generated successfully.",
          logo: "🛍️",
          color: "#34a853",
          glow: "rgba(52, 168, 83, 0.15)",
          isDownload: false,
          value: "$50.00 Play Store Credit",
          code: "GPL-8721-PLAY-0182",
          actionText: "Redeem in Play Store",
          instructions: [
            "Copy the Google Play redeem code below.",
            "Open Google Play Store app -> click Profile -> Payments & subscriptions -> Redeem code.",
            "Paste the code to apply $50 credit to your balance."
          ],
        };
      case "walmart":
      default:
        return {
          title: "Walmart Digital Gift Card",
          subtitle: "Congratulations! Your promotional digital shopping code is ready.",
          logo: "🛍️",
          color: "#0071dc",
          glow: "rgba(0, 113, 220, 0.15)",
          isDownload: false,
          value: "$100.00 Promo Code",
          code: "WMT-9821X-PROMO-2026",
          actionText: "Redeem on Walmart.com",
          instructions: [
            "Copy the voucher code below.",
            "Go to walmart.com/redeem or checkout page.",
            "Select 'Gift Card' as payment option and enter the code to apply balance."
          ],
        };
    }
  };

  const reward = getRewardDetails(type);

  const handleCopy = () => {
    if (reward.code) {
      navigator.clipboard.writeText(reward.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const startDownload = () => {
    if (reward.actionUrl) {
      setDownloading(true);
      setDownloadProgress(10);
      const interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setDownloading(false);
              window.open(reward.actionUrl, "_blank");
            }, 500);
            return 100;
          }
          return prev + 15;
        });
      }, 300);
    }
  };

  return (
    <div className={styles.successWrapper}>
      <div className={styles.successCard} style={{ "--glow-color": reward.glow } as React.CSSProperties}>
        <div className={styles.successIcon} style={{ color: reward.color }}>
          ✓
        </div>
        <h1 className={styles.successTitle}>{reward.title}</h1>
        <p className={styles.successSubtitle}>{reward.subtitle}</p>

        {/* Voucher layout (non-download rewards) */}
        {!reward.isDownload && reward.code && (
          <div className={styles.voucherContainer}>
            <div className={styles.voucherHeader}>
              <span className={styles.voucherIcon}>{reward.logo}</span>
              <div>
                <span className={styles.voucherLabel}>Voucher Value</span>
                <span className={styles.voucherValue}>{reward.value}</span>
              </div>
            </div>
            <div className={styles.codeBox}>
              <span className={styles.codeText}>{reward.code}</span>
              <button onClick={handleCopy} className={styles.copyBtn} style={{ backgroundColor: reward.color }}>
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        )}

        {/* File Download layout (download rewards) */}
        {reward.isDownload && (
          <div className={styles.downloadContainer}>
            <span className={styles.downloadLogo}>{reward.logo}</span>
            {downloading ? (
              <div className={styles.progressWrapper}>
                <span className={styles.progressLabel}>Preparing secure file mirror... {downloadProgress}%</span>
                <div className={styles.progressBarBg}>
                  <div 
                    className={styles.progressBarFill} 
                    style={{ width: `${downloadProgress}%`, backgroundColor: reward.color }}
                  ></div>
                </div>
              </div>
            ) : (
              <button 
                onClick={startDownload} 
                className={styles.downloadBtn} 
                style={{ backgroundColor: reward.color }}
              >
                {reward.actionText}
              </button>
            )}
          </div>
        )}

        {/* Instructions Block */}
        <div className={styles.instructionsBlock}>
          <h4>Redemption Instructions:</h4>
          <ol>
            {reward.instructions.map((inst, idx) => (
              <li key={idx}>{inst}</li>
            ))}
          </ol>
        </div>

        {/* Support Link */}
        <p className={styles.supportText}>
          Having trouble? Contact our rewards support desk at <a href="/contact">support@couponflock.com</a>
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "100px 0" }}>Loading Success Gateway...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
