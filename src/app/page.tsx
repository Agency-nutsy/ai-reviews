"use client";

import { useEffect, useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import { getRandomReviews } from "@/utils/getRandomReviews";

// ── Configuration ──────────────────────────────────────────
const BUSINESS_NAME = "Bagheera Cafe & Lounge";
const BUSINESS_ADDRESS = "3rd Floor, 2529, Hudson Lane, GTB Nagar, New Delhi";
const GOOGLE_REVIEW_URL = "https://g.page/r/CQdkjl8A43uzEAE/review";

export default function Home() {
  const [reviews, setReviews] = useState<string[]>([]);

  useEffect(() => {
    setReviews(getRandomReviews(3));
  }, []);

  return (
    <main className="min-h-dvh flex items-start justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-md space-y-8">
        {/* ── Header ──────────────────────────── */}
        <header className="text-center space-y-3">
          {/* Cafe icon */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-200/60">
            <span className="text-3xl">☕</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            {BUSINESS_NAME}
          </h1>

          <p className="text-gray-400 text-xs font-medium tracking-wide uppercase">
            {BUSINESS_ADDRESS}
          </p>

          <p className="text-gray-500 text-sm sm:text-base max-w-xs mx-auto leading-relaxed">
            Thank you for visiting us! 🙏 Tap a review below to copy it, then
            paste it on Google — it takes just 10 seconds.
          </p>
        </header>

        {/* ── Steps hint ──────────────────────── */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-center">
          <p className="text-amber-800 text-xs sm:text-sm font-medium leading-relaxed">
            <span className="font-bold">How it works:</span> Tap a review →
            It&apos;s copied → Choose your rating on Google → Paste in the
            text box → Post!
          </p>
        </div>

        {/* ── Review Cards ────────────────────── */}
        <section className="space-y-4" aria-label="Review options">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              googleReviewUrl={GOOGLE_REVIEW_URL}
            />
          ))}
        </section>

        {/* ── Footer ──────────────────────────── */}
        <footer className="text-center pt-2 space-y-1">
          <p className="text-xs text-gray-400">
            Your feedback means the world to us ❤️
          </p>
          <p className="text-[10px] text-gray-300">
            Bagheera Cafe & Lounge — Hudson Lane, GTB Nagar
          </p>
        </footer>
      </div>
    </main>
  );
}
