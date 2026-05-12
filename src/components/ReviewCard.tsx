"use client";

import { useState } from "react";

interface ReviewCardProps {
  review: string;
  googleReviewUrl: string;
}

export default function ReviewCard({ review, googleReviewUrl }: ReviewCardProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    // Copy to clipboard first, then redirect immediately
    try {
      await navigator.clipboard.writeText(review);
    } catch {
      // Fallback for older browsers / Safari / insecure contexts
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
        // Silently fail — redirect still happens
      }
      document.body.removeChild(textarea);
    }

    setCopied(true);
    // Redirect instantly
    window.location.href = googleReviewUrl;
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="group relative w-full text-left rounded-2xl bg-white p-5
                   shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                   border border-gray-100
                   transition-all duration-200 ease-out
                   hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:border-amber-200
                   active:scale-[0.97] active:shadow-sm
                   cursor-pointer select-none
                   -webkit-tap-highlight-color-transparent"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {/* Star rating */}
        <div className="flex gap-0.5 mb-3 text-amber-400 text-lg select-none" aria-hidden="true">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        {/* Review text */}
        <p className="text-gray-700 text-[15px] leading-relaxed">
          &ldquo;{review}&rdquo;
        </p>

        {/* Tap hint */}
        <div className="mt-4 flex items-center gap-2 text-xs text-amber-600 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Tap to copy &amp; post on Google
        </div>
      </button>

      {/* Toast notification */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                        bg-gray-900 text-white text-sm px-5 py-3 rounded-xl shadow-2xl
                        animate-fade-in-up flex items-center gap-2 max-w-[90vw]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Review copied! Choose your rating → Paste → Post 🚀</span>
        </div>
      )}
    </>
  );
}
