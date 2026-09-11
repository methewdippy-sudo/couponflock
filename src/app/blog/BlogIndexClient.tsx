"use client";

import React, { useState, useMemo } from "react";
import styles from "./BlogIndex.module.css";
import { BlogPost } from "../../lib/blogs";

interface BlogIndexClientProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 12;

export default function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize from URL params
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const p = params.get("page");
      if (p) {
        const num = parseInt(p, 10);
        if (!isNaN(num) && num > 0) setCurrentPage(num);
      }
    }
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return posts.slice(start, start + POSTS_PER_PAGE);
  }, [posts, currentPage]);

  const handlePageClick = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentPage(page);

    // Update URL
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      params.set("page", String(page));
      window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Windowed pagination with ellipsis
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages: (number | string)[] = [];
    const delta = 1;

    pages.push(1);

    let left = currentPage - delta;
    let right = currentPage + delta;

    if (left < 2) {
      left = 2;
      right = Math.min(2 + delta * 2, totalPages - 1);
    }
    if (right > totalPages - 1) {
      right = totalPages - 1;
      left = Math.max(totalPages - 1 - delta * 2, 2);
    }

    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return (
      <div className={styles.paginationContainer}>
        <button
          type="button"
          onClick={(e) => handlePageClick(e, currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.paginationBtn} ${currentPage === 1 ? styles.paginationBtnDisabled : ""}`}
        >
          ← Prev
        </button>
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`ell-${idx}`} className={styles.paginationEllipsis}>
                ...
              </span>
            );
          }
          const pageNum = p as number;
          return (
            <button
              type="button"
              key={pageNum}
              onClick={(e) => handlePageClick(e, pageNum)}
              className={`${styles.paginationBtn} ${currentPage === pageNum ? styles.paginationBtnActive : ""}`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          type="button"
          onClick={(e) => handlePageClick(e, currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.paginationBtn} ${currentPage === totalPages ? styles.paginationBtnDisabled : ""}`}
        >
          Next →
        </button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Guides & Deals</h1>
      <p className={styles.subtitle}>
        Uncover the latest promo codes, verified savings, and shopping recommendations based on trending Pinterest finds.
      </p>

      {/* Results count */}
      <p className={styles.resultsCount}>
        Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–{Math.min(currentPage * POSTS_PER_PAGE, posts.length)} of {posts.length} articles
      </p>

      <div className={styles.grid}>
        {paginatedPosts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={post.bannerImage}
                alt={post.title}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <span className={styles.tag}>{post.category}</span>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.desc}>{post.description}</p>
              <div className={styles.footer}>
                <span>{post.publishDate}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {renderPagination()}
    </div>
  );
}
