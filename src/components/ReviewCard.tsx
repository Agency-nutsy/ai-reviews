"use client";

import { useState } from "react";

interface ReviewCardProps {
  review: string;
  googleReviewUrl: string;
}

export default function ReviewCard({ review, googleReviewUrl }: ReviewCardProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(review);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = review;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
      } catch {
        // silently fail
      }
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.location.href = googleReviewUrl;
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="group relative w-full text-left rounded-xl p-4
                   transition-all duration-200 ease-out
                   active:scale-[0.97]
                   cursor-pointer select-none"
        style={{
          background: "var(--color-bg-card)",
          border: "1px solid rgba(201, 168, 76, 0.12)",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {/* Star rating */}
        <div className="flex gap-0.5 mb-2 text-base select-none" aria-hidden="true"
             style={{ color: "var(--color-gold)" }}>
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        {/* Review text */}
        <p className="text-[13px] leading-relaxed"
           style={{ color: "var(--color-text-primary)" }}>
          &ldquo;{review}&rdquo;
        </p>

        {/* Tap hint */}
        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium opacity-50 group-hover:opacity-80 transition-opacity"
             style={{ color: "var(--color-gold)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Tap to copy & post on Google
        </div>
      </button>

      {/* Toast */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                        text-sm px-5 py-3 rounded-xl shadow-2xl
                        animate-fade-in-up flex items-center gap-2 max-w-[90vw]"
             style={{
               background: "var(--color-burgundy)",
               border: "1px solid var(--color-gold)",
               color: "var(--color-gold-light)",
             }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
               style={{ color: "var(--color-gold)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Review copied! Choose your rating → Paste → Post 🚀</span>
        </div>
      )}
    </>
  );
}
