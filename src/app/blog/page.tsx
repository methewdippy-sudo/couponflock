import React from "react";
import { BLOGS_DATABASE } from "../../lib/blogs";
import BlogIndexClient from "./BlogIndexClient";

export const metadata = {
  title: "Trending Guides, Reviews & Coupon Savings | CouponFlock",
  description: "Read our expert reviews, smart shopping guides, and discover verified promo codes and coupon savings for top online stores.",
};

export default async function BlogIndexPage() {
  const posts = Object.values(BLOGS_DATABASE).reverse();

  return <BlogIndexClient posts={posts} />;
}
