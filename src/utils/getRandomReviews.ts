import reviews from "@/data/reviews.json";

/**
 * Picks `count` unique random reviews from the reviews.json pool.
 * Uses Fisher-Yates partial shuffle for efficiency.
 */
export function getRandomReviews(count: number = 3): string[] {
  // Clone so we don't mutate the original import
  const pool = [...reviews];
  const result: string[] = [];

  for (let i = 0; i < count && pool.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    result.push(pool[randomIndex]);
    // Remove picked item to avoid duplicates
    pool.splice(randomIndex, 1);
  }

  return result;
}
