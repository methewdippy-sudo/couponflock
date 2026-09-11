'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function NotionSecondBrainPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "What is a Notion Second Brain?",
      a: "A Second Brain is a personal digital system designed to capture and organize your ideas, tasks, projects, and resources in one unified place. It is based on Tiago Forte's P.A.R.A. method (Projects, Areas, Resources, Archives)."
    },
    {
      q: "Do I need a Notion subscription to use this?",
      a: "No! You only need a free Notion account to duplicate and use this template forever. No subscription required."
    },
    {
      q: "Is it easy to set up?",
      a: "Yes! The template is pre-configured and ready to use out of the box. We also include a 5-minute video walkthrough guide and instructions to help you get started immediately."
    },
    {
      q: "Can I customize the databases?",
      a: "Absolutely. Notion is fully modular. You can add, edit, or delete databases, properties, and layouts to fit your personal workflow."
    }
  ];

  const features = [
    {
      icon: "🧠",
      title: "P.A.R.A. Organization",
      desc: "Instantly organize your notes and files into Projects, Areas of responsibility, Resource libraries, and Archives."
    },
    {
      icon: "⚡",
      title: "Quick Capture Hub",
      desc: "Got a fast idea or task? Capture it on the go with custom mobile-optimized quick entry widgets."
    },
    {
      icon: "📅",
      title: "Daily Focus Dashboard",
      desc: "Wake up to a clean dashboard showing only your high-priority daily tasks, schedule, and habits."
    },
    {
      icon: "📈",
      title: "Goal Tracker & Milestones",
      desc: "Connect your daily habits and projects to your long-term life objectives to track your progress automatically."
    }
  ];

  const gumroadUrl = "https://razar2.gumroad.com/l/ultimate-notion-second-brain-6592";

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <span className={styles.badge}>Productivity System — 60% Off Launch Deal</span>
        <h1 className={styles.title}>
          Organize Your Digital Life in One Central Workspace
        </h1>
        <p className={styles.subtitle}>
          Stop wasting hours searching through scattered notes, bookmarks, and lists. Streamline your tasks, projects, notes, and habits with the ultimate Notion Second Brain.
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
            How It Works
          </button>
        </div>

        {/* Mockup Container */}
        <div className={styles.previewContainer}>
          <img 
            src="/images/notion-second-brain-cover.jpg" 
            alt="Notion Second Brain Template Dashboard Mockup" 
            className={styles.mockupImage}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statVal}>5,000+</div>
          <div className={styles.statLabel}>Active Organizers</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statVal}>10 Hours</div>
          <div className={styles.statLabel}>Saved per Week on Setup</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statVal}>$0</div>
          <div className={styles.statLabel}>No App Subscription Fees</div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className={styles.comparisonSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Say Goodbye to Scattered Apps</h2>
          <p className={styles.sectionDesc}>Replace Evernote, Todoist, and Trello with one aesthetic, unified workspace.</p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.compTable}>
            <thead>
              <tr>
                <th>Workflow Module</th>
                <th className={styles.usCol}>Notion Second Brain</th>
                <th className={styles.themCol}>Traditional Scattered Apps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.featureCol}>Unified Dashboard</td>
                <td className={styles.usCol}>Everything connected in one viewport</td>
                <td className={styles.themCol}>4 separate tabs & logins required</td>
              </tr>
              <tr>
                <td className={styles.featureCol}>Methodology</td>
                <td className={styles.usCol}>P.A.R.A. Framework built-in</td>
                <td className={styles.themCol}>Ad-hoc, messy folder structures</td>
              </tr>
              <tr>
                <td className={styles.featureCol}>Goal Alignment</td>
                <td className={styles.usCol}>Tasks automatically link to yearly goals</td>
                <td className={styles.themCol}>Goals written on sticky notes</td>
              </tr>
              <tr>
                <td className={styles.featureCol}>Cost</td>
                <td className={styles.usCol}>$29 (One-time, lifetime free use)</td>
                <td className={styles.themCol}>$240+ / year in app subscriptions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Grid Features */}
      <section className={styles.featuresGrid}>
        {features.map((feat, idx) => (
          <div key={idx} className={styles.featureItem}>
            <div className={styles.featureIcon}>{feat.icon}</div>
            <h3 className={styles.featureTitle}>{feat.title}</h3>
            <p className={styles.featureDesc}>{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* Checkout Card */}
      <section className={styles.pricingCard}>
        <h3 className={styles.priceTitle}>Unlock Your Ultimate Mind Extension</h3>
        <div className={styles.priceBox}>
          <span className={styles.strikePrice}>$79.00</span>
          <span className={styles.realPrice}>$29</span>
          <span className={styles.priceDuration}>/ lifetime duplication</span>
        </div>
        <ul className={styles.priceFeatures}>
          <li className={styles.priceFeature}>
            <span className={styles.checkIcon}>✓</span> Full Second Brain Notion Template package
          </li>
          <li className={styles.priceFeature}>
            <span className={styles.checkIcon}>✓</span> Pre-configured PARA database links & capture views
          </li>
          <li className={styles.priceFeature}>
            <span className={styles.checkIcon}>✓</span> Lifetime duplication access with free model updates
          </li>
          <li className={styles.priceFeature}>
            <span className={styles.checkIcon}>✓</span> Onboarding documentation & setup video guide
          </li>
        </ul>
        <button 
          onClick={() => window.open(gumroadUrl, '_blank')}
          className={styles.buyBtn}
        >
          Instant Duplicate
        </button>
        <p className={styles.guaranteeText}>
          🔒 Secure Checkout handled via Gumroad. Instant delivery inside your inbox.
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
