'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function BudgetTrackerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Does this template require a monthly subscription?",
      a: "No! This is a one-time purchase. Once you buy it, you get lifetime access and all future updates completely free. No hidden fees or recurring subscriptions."
    },
    {
      q: "Is it easy to use for beginners who don't know Excel?",
      a: "Absolutely. We designed this with zero formulas required from the user. All cells are automated. You just enter your starting balance, log your monthly income and expenses, and the spreadsheet does all the mathematical work, updates the graphs, and tracks your savings automatically."
    },
    {
      q: "Does this sync automatically with my bank account?",
      a: "To ensure 100% data privacy and keep it subscription-free, this sheet does not directly sync with your bank. Instead, you can import your bank's CSV transactions statement in one click, or log them manually (takes less than 2 minutes a day)."
    },
    {
      q: "What is your refund policy?",
      a: "We offer a 30-day money-back guarantee. If you are not satisfied with the sheet or find it too difficult to use, just email our support team and we will issue a full refund, no questions asked."
    }
  ];

  const features = [
    {
      icon: "📊",
      title: "Interactive Savings Dashboard",
      desc: "Get a birds-eye view of your entire financial health in real-time. View net worth charts, savings rate progress bars, and custom monthly goals."
    },
    {
      icon: "💸",
      title: "Log Expenses with Ease",
      desc: "Categorize every dollar you spend. Keep track of fixed bills vs variable lifestyle spending so you know exactly where your money goes."
    },
    {
      icon: "🎯",
      title: "Smart Savings Goals",
      desc: "Whether you are saving for a new home, a car, or an emergency fund, our visual progress rings will keep you motivated to hit your target faster."
    },
    {
      icon: "🔒",
      title: "100% Secure & Private",
      desc: "Unlike apps that sell your data to advertisers, your financial sheets live entirely inside your personal Google Drive or local device. No one else can see it."
    }
  ];

  const gumroadUrl = "https://razar2.gumroad.com/l/ultimate-budget-sheets-1900";

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <span className={styles.badge}>Special launch offer — 60% Off</span>
        <h1 className={styles.title}>
          Take Control of Your Money Without the Subscription Fees
        </h1>
        <p className={styles.subtitle}>
          Say goodbye to complex budgeting apps that charge you \$99/year. Manage your income, track expenses, and grow your net worth with a simple, premium Google Sheets planner.
        </p>

        <div className={styles.ctaGroup}>
          <button 
            onClick={() => window.open(gumroadUrl, '_blank')}
            className={styles.primaryCta}
          >
            Get Lifetime Access ($29)
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('compare');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={styles.secondaryCta}
          >
            Compare Alternatives
          </button>
        </div>

        {/* Dynamic Mockup Wrapper */}
        <div className={styles.previewContainer}>
          <img 
            src="/images/budget-tracker-cover.jpg" 
            alt="Google Sheets Budget Dashboard Mockup" 
            className={styles.mockupImage}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statVal}>10,000+</div>
          <div className={styles.statLabel}>Happy Budgeters Globally</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statVal}>$1,180</div>
          <div className={styles.statLabel}>Average Saved in the First 3 Months</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statVal}>$0</div>
          <div className={styles.statLabel}>Recurring Monthly Fees</div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className={styles.comparisonSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose CouponFlock Sheets?</h2>
          <p className={styles.sectionDesc}>See how we compare against traditional subscription-based budgeting platforms.</p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.compTable}>
            <thead>
              <tr>
                <th>Feature / Term</th>
                <th className={styles.usCol}>Our Google Sheet</th>
                <th className={styles.themCol}>YNAB / Subscription Apps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.featureCol}>Pricing Structure</td>
                <td className={styles.usCol}>$29 (One-Time Payment)</td>
                <td className={styles.themCol}>$99 / year (Recurring)</td>
              </tr>
              <tr>
                <td className={styles.featureCol}>Data Privacy</td>
                <td className={styles.usCol}>100% Private (Stored in Google Drive)</td>
                <td className={styles.themCol}>Stored on Company Servers</td>
              </tr>
              <tr>
                <td className={styles.featureCol}>Learning Curve</td>
                <td className={styles.usCol}>Simple & Intuitive (Pre-configured)</td>
                <td className={styles.themCol}>Complex Setup & Strict Rules</td>
              </tr>
              <tr>
                <td className={styles.featureCol}>Lifetime Updates</td>
                <td className={styles.usCol}>Yes, Free Forever</td>
                <td className={styles.themCol}>Requires active subscription</td>
              </tr>
              <tr>
                <td className={styles.featureCol}>Offline Access</td>
                <td className={styles.usCol}>Yes</td>
                <td className={styles.themCol}>No, requires cloud sync</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className={styles.featuresGrid}>
        {features.map((feat, idx) => (
          <div key={idx} className={styles.featureItem}>
            <div className={styles.featureIcon}>{feat.icon}</div>
            <h3 className={styles.featureTitle}>{feat.title}</h3>
            <p className={styles.featureDesc}>{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing CTA Section */}
      <section className={styles.pricingCard}>
        <h3 className={styles.priceTitle}>Start Budgeting Smart Today</h3>
        <div className={styles.priceBox}>
          <span className={styles.strikePrice}>$79.00</span>
          <span className={styles.realPrice}>$29</span>
          <span className={styles.priceDuration}>/ lifetime access</span>
        </div>
        <ul className={styles.priceFeatures}>
          <li className={styles.priceFeature}>
            <span className={styles.checkIcon}>✓</span> Lifetime access to Google Sheets & Excel versions
          </li>
          <li className={styles.priceFeature}>
            <span className={styles.checkIcon}>✓</span> Monthly budget, expense logger, and net worth dashboards
          </li>
          <li className={styles.priceFeature}>
            <span className={styles.checkIcon}>✓</span> Free video setup guide & walkthrough instructions
          </li>
          <li className={styles.priceFeature}>
            <span className={styles.checkIcon}>✓</span> 30-day money-back satisfaction guarantee
          </li>
        </ul>
        <button 
          onClick={() => window.open(gumroadUrl, '_blank')}
          className={styles.buyBtn}
        >
          Instant Download
        </button>
        <p className={styles.guaranteeText}>
          🔒 Secure payments handled via Gumroad. Instant delivery after purchase.
        </p>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </div>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(idx)}
              >
                <span>{faq.q}</span>
                <span>{openFaq === idx ? "−" : "+"}</span>
              </div>
              {openFaq === idx && (
                <div className={styles.faqAnswer}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
