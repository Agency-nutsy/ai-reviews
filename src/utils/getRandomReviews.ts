import reviews from "@/data/reviews.json";

const STORAGE_KEY = "bagheera_recent_reviews";
const MAX_RECENT = 50; // A review won't repeat until 50 others have been shown

/**
 * Reads the recently-used review indices from localStorage.
 * Returns an empty array on SSR or if nothing is stored.
 */
function getRecentIndices(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

/**
 * Saves the recently-used review indices to localStorage,
 * trimming to keep only the last MAX_RECENT entries.
 */
function saveRecentIndices(indices: number[]): void {
  if (typeof window === "undefined") return;
  try {
    const trimmed = indices.slice(-MAX_RECENT);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage might be full or disabled — silently fail
  }
}

/**
 * Picks a random index from within [start, end) range,
 * excluding any index present in the `exclude` set.
 * Falls back to any available index in range if all are excluded.
 */
function pickFromSegment(start: number, end: number, exclude: Set<number>): number {
  const available: number[] = [];
  for (let i = start; i < end; i++) {
    if (!exclude.has(i)) available.push(i);
  }

  // If every index in the segment is "recent", just pick randomly
  // (extremely unlikely with 2000 reviews and 50 recent)
  if (available.length === 0) {
    return start + Math.floor(Math.random() * (end - start));
  }

  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Picks 3 unique reviews — one from each third of the pool:
 *   Segment 1: first third   (indices 0 to n/3)
 *   Segment 2: middle third  (indices n/3 to 2n/3)
 *   Segment 3: last third    (indices 2n/3 to n)
 *
 * Tracks recently shown reviews in localStorage to prevent
 * any review from repeating within the last 50 shown.
 */
export function getRandomReviews(count: number = 3): string[] {
  const total = reviews.length;
  if (total === 0) return [];

  const recentIndices = getRecentIndices();
  const exclude = new Set(recentIndices);

  const seg1End = Math.floor(total / 3);
  const seg2End = Math.floor((2 * total) / 3);

  const picked: number[] = [];

  if (count >= 1) picked.push(pickFromSegment(0, seg1End, exclude));
  if (count >= 2) picked.push(pickFromSegment(seg1End, seg2End, exclude));
  if (count >= 3) picked.push(pickFromSegment(seg2End, total, exclude));

  // Save picked indices to recent history
  saveRecentIndices([...recentIndices, ...picked]);

  return picked.map((i) => reviews[i]);
}
