"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ReviewCard from "@/components/ReviewCard";
import { getRandomReviews } from "@/utils/getRandomReviews";

const GOOGLE_REVIEW_URL = "https://g.page/r/CQdkjl8A43uzEAE/review";

export default function Home() {
  const [reviews, setReviews] = useState<string[]>([]);

  useEffect(() => {
    setReviews(getRandomReviews(3));
  }, []);

  return (
    <main className="min-h-dvh flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md flex flex-col items-center gap-5">
        {/* ── Logo ──────────────────────────── */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Bagheera Cafe & Lounge"
            width={80}
            height={80}
            className="rounded-2xl"
            priority
          />
          <h1
            className="text-2xl tracking-[0.25em] font-medium"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-gold)",
            }}
          >
            BAGHEERA
          </h1>
        </div>

        {/* ── Thank you + subtitle ────────── */}
        <div className="text-center space-y-1">
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Thank you for dining with us! 🙏
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            Tap a review below to leave your feedback on Google
          </p>
        </div>

        {/* ── How it works ────────────────── */}
        <div
          className="w-full rounded-xl px-4 py-2.5 text-center"
          style={{
            background: "var(--color-gold-dim)",
            border: "1px solid rgba(201, 168, 76, 0.25)",
          }}
        >
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--color-gold-light)" }}
          >
            <span className="font-semibold">How it works:</span> Tap a review →
            It&apos;s copied → Choose your rating → Paste → Post!
          </p>
        </div>

        {/* ── Review Cards ────────────────── */}
        <section className="w-full space-y-3" aria-label="Review options">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              googleReviewUrl={GOOGLE_REVIEW_URL}
            />
          ))}
        </section>

        {/* ── Footer ──────────────────────── */}
        <p
          className="text-[10px] text-center pb-2"
          style={{ color: "var(--color-text-muted)" }}
        >
          Bagheera Cafe & Lounge — Hudson Lane, GTB Nagar
        </p>
      </div>
    </main>
  );
}
