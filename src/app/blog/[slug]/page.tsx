import React from "react";
import { Metadata } from "next";
import BlogClient from "./BlogClient";
import { BLOGS_DATABASE } from "../../../lib/blogs";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOGS_DATABASE[slug];

  if (!post) {
    return {
      title: "Article Not Found | CouponFlock",
      description: "We could not find the blog article you are looking for.",
    };
  }

  const cleanTitle = post.title.length > 60 ? post.title.slice(0, 57) + "..." : post.title;

  return {
    title: `${cleanTitle} | CouponFlock`,
    description: post.description,
    openGraph: {
      title: `${post.title} | CouponFlock`,
      description: post.description,
      url: `https://www.couponflock.com/blog/${slug}`,
      siteName: 'CouponFlock',
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: post.bannerImage.startsWith("http") ? post.bannerImage : `https://www.couponflock.com${post.bannerImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | CouponFlock`,
      description: post.description,
      images: [post.bannerImage.startsWith("http") ? post.bannerImage : `https://www.couponflock.com${post.bannerImage}`],
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(BLOGS_DATABASE).map((slug) => ({
    slug,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOGS_DATABASE[slug];

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "100px 24px", maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "16px" }}>Article Not Found</h1>
        <p style={{ color: "#64748b", marginBottom: "24px" }}>
          We could not find the blog article you are looking for. It may have been moved or renamed.
        </p>
        <a 
          href="/" 
          style={{
            backgroundColor: "#0284c7",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none"
          }}
        >
          Go Back Home
        </a>
      </div>
    );
  }

  return <BlogClient post={post} />;
}
