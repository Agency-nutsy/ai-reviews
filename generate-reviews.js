// Script to generate 2000 unique Bagheera Cafe reviews
const fs = require("fs");

const intros = [
  "Absolutely loved", "Really enjoyed", "Had an amazing time at", "Can't stop raving about",
  "So impressed with", "Blown away by", "Totally recommend", "Had a wonderful experience at",
  "Such a great visit to", "Five stars for", "Hands down the best experience at",
  "Keep coming back to", "Never disappointed by", "Always a pleasure visiting",
  "One of the best spots —", "Highly recommend", "Fantastic experience at",
  "Just visited", "Went to", "Tried", "Stopped by", "Checked out",
  "Finally visited", "First time at", "Been a regular at", "Love going to",
  "Nothing beats", "Can't get enough of", "Obsessed with", "Pleasantly surprised by",
  "What a gem —", "Hidden gem alert:", "Top-notch experience at", "Excellent visit to",
  "Amazing time at", "Great evening at", "Perfect afternoon at", "Lovely visit to",
  "Memorable experience at", "Outstanding service at",
];

const places = [
  "Bagheera Cafe", "Bagheera Lounge", "Bagheera Cafe & Lounge", "Bagheera",
  "Bagheera on Hudson Lane", "Bagheera near GTB Nagar", "Bagheera Cafe on Hudson Lane",
];

const foodItems = [
  "butter chicken pizza", "loaded nachos", "classic momos", "paneer tikka",
  "cold coffee", "brownie sundae", "pasta arrabiata", "chicken tikka sandwich",
  "cheese burst pizza", "garlic bread", "french fries", "loaded fries",
  "chocolate shake", "mango smoothie", "oreo shake", "iced tea",
  "masala chai", "cappuccino", "cafe latte", "espresso",
  "veg burger", "chicken burger", "club sandwich", "grilled sandwich",
  "maggi", "cheese maggi", "peri peri fries", "honey chilli potato",
  "spring rolls", "crispy corn", "paneer wrap", "chicken wrap",
  "mushroom pasta", "white sauce pasta", "alfredo pasta", "mac and cheese",
  "brownie with ice cream", "chocolate lava cake", "cheesecake", "tiramisu",
  "mojito", "blue lagoon mocktail", "virgin piña colada", "fruit punch",
  "hazelnut coffee", "caramel latte", "matcha latte", "hot chocolate",
  "tandoori momos", "afghani momos", "kurkure momos", "steamed momos",
  "butter garlic naan roll", "chicken shawarma", "paneer shawarma",
  "nutella shake", "kitkat shake", "bubblegum shake", "strawberry smoothie",
  "dal makhani", "rajma chawal", "biryani", "fried rice",
  "veg platter", "non-veg platter", "combo meal", "snack platter",
  "nachos with salsa", "bruschetta", "garlic mushroom", "stuffed mushroom",
  "caesar salad", "greek salad", "corn salad", "pasta salad",
  "waffles", "pancakes", "french toast", "eggs benedict",
];

const aspects = [
  "the ambiance is so cozy", "the vibe is unmatched", "the music was perfect",
  "the lighting sets the mood", "the decor is Instagram-worthy", "the seating is super comfortable",
  "the third floor setup is amazing", "fairy lights everywhere make it magical",
  "the rooftop feel is incredible", "the interiors are beautifully done",
  "the staff is incredibly friendly", "the service was lightning fast",
  "the waiters were attentive and polite", "the manager personally checked on us",
  "the menu has so much variety", "the portions are generous",
  "the prices are very reasonable", "great value for money",
  "the hygiene standards are top-notch", "the place was spotlessly clean",
  "the playlist was on point", "the DJ played great tracks",
  "the outdoor seating area is lovely", "the AC section is well maintained",
  "the hookah flavors are amazing", "the sheesha quality is premium",
  "the presentation of food was beautiful", "every dish looked like art",
  "the aroma when you walk in is heavenly", "the open kitchen concept is cool",
  "the WiFi is fast and free", "perfect place to work from",
  "the charging points at every table are a nice touch",
  "the board games they have are fun", "live screening of matches is great",
];

const occasions = [
  "Celebrated my birthday here", "Had a date night here", "Went with my college friends",
  "Family dinner was perfect", "Post-exam celebration spot", "Weekend brunch was lovely",
  "Evening hangout with the gang", "Went for a coffee catch-up",
  "Had a farewell party here", "Celebrated our anniversary", "Freshers party was amazing",
  "Went after a long day at college", "Quick lunch between classes",
  "Late night cravings brought us here", "Sunday brunch with family",
  "Team outing was a blast", "Reunion with school friends",
  "Surprise party for my best friend", "Casual meetup turned into hours of fun",
  "Study session with coffee", "Work meeting over lunch", "First date went perfectly",
  "Treat for exam results", "Farewell lunch for a colleague",
  "Went for my friend's promotion celebration", "Random weekday visit",
];

const endings = [
  "Will definitely come back!", "Highly recommend to everyone!",
  "This is now our go-to spot.", "Can't wait to visit again!",
  "Already planning my next visit.", "Told all my friends about this place.",
  "Best decision we made this week.", "You won't regret coming here.",
  "A must-visit on Hudson Lane!", "Don't miss this gem near GTB Nagar.",
  "Worth every rupee spent.", "Makes every visit feel special.",
  "Perfect 10 out of 10 experience.", "This place deserves all the love.",
  "Bookmarked for life!", "Our new favorite in North Delhi.",
  "Trust me, just go!", "You'll thank me later for this recommendation.",
  "Nothing else on Hudson Lane comes close.", "The best cafe experience in GTB Nagar area.",
  "Exceeded all my expectations.", "Made my day so much better.",
  "Left with a big smile.", "The kind of place you keep coming back to.",
  "One of Delhi's best kept secrets.", "Pure happiness in cafe form.",
  "10/10 would visit again.", "Absolutely no complaints, just love.",
  "This place has my heart.", "The gold standard for cafes in North Delhi.",
];

const connectors = [
  "The", "Their", "Also, the", "Plus, the", "And the", "On top of that, the",
  "Not to mention, the", "What really stood out was the", "The cherry on top was the",
  "I especially loved the", "My favorite part was the",
];

const foodCompliments = [
  "was absolutely delicious", "was cooked to perfection", "was heavenly",
  "was the best I've had in a while", "was packed with flavor", "was outstanding",
  "was fresh and tasty", "was mouth-watering", "was perfectly seasoned",
  "was a flavor bomb", "was incredible", "was chef's kiss",
  "was legit the best in the area", "was so good I ordered seconds",
  "was exactly what I needed", "hit different", "was on another level",
  "was worth the hype", "did not disappoint at all", "was everything I hoped for",
];

const locations = [
  "on Hudson Lane", "near GTB Nagar", "in North Delhi", "near DU",
  "near Delhi University", "on Hudson Lane, GTB Nagar",
  "on the third floor", "at Hudson Lane",
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateReview() {
  const type = Math.floor(Math.random() * 8);
  let review;

  switch (type) {
    case 0:
      review = `${pick(intros)} ${pick(places)}! ${pick(connectors)} ${pick(foodItems)} ${pick(foodCompliments)} and ${pick(aspects)}. ${pick(endings)}`;
      break;
    case 1:
      review = `${pick(occasions)} at ${pick(places)} and it was perfect. ${pick(connectors)} ${pick(foodItems)} ${pick(foodCompliments)}. ${pick(aspects)}. ${pick(endings)}`;
      break;
    case 2:
      review = `${pick(places)} ${pick(locations)} is hands down one of the best cafes I've been to. ${pick(connectors)} ${pick(foodItems)} ${pick(foodCompliments)} and ${pick(aspects)}. ${pick(endings)}`;
      break;
    case 3:
      review = `${pick(intros)} ${pick(places)}. We ordered the ${pick(foodItems)} and the ${pick(foodItems)} — both ${pick(foodCompliments).replace('was ', 'were ')}. ${pick(aspects)} and ${pick(endings).toLowerCase()}`;
      break;
    case 4:
      review = `${pick(occasions)} at ${pick(places)} ${pick(locations)}. ${pick(aspects)} and the ${pick(foodItems)} ${pick(foodCompliments)}. ${pick(endings)}`;
      break;
    case 5:
      review = `If you haven't tried ${pick(places)} yet, you're missing out. The ${pick(foodItems)} ${pick(foodCompliments)} and ${pick(aspects)}. ${pick(endings)}`;
      break;
    case 6:
      review = `${pick(places)} never fails to impress. ${pick(occasions).replace(/here|this/, 'last time')} and the ${pick(foodItems)} ${pick(foodCompliments)}. ${pick(aspects)}. ${pick(endings)}`;
      break;
    case 7:
      review = `The ${pick(foodItems)} at ${pick(places)} ${pick(foodCompliments)}. Paired with their ${pick(foodItems)}, it's the perfect combo. ${pick(aspects)} and ${pick(endings).toLowerCase()}`;
      break;
  }

  // Clean up any double spaces
  return review.replace(/\s+/g, " ").trim();
}

// Generate 2000 unique reviews
const reviews = new Set();
let attempts = 0;
const MAX_ATTEMPTS = 50000;

while (reviews.size < 2000 && attempts < MAX_ATTEMPTS) {
  const review = generateReview();
  if (review.length >= 60 && review.length <= 300) {
    reviews.add(review);
  }
  attempts++;
}

const reviewArray = Array.from(reviews);
console.log(`Generated ${reviewArray.length} unique reviews in ${attempts} attempts`);

// Shuffle the array for good distribution
for (let i = reviewArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [reviewArray[i], reviewArray[j]] = [reviewArray[j], reviewArray[i]];
}

fs.writeFileSync(
  "./src/data/reviews.json",
  JSON.stringify(reviewArray, null, 2),
  "utf8"
);

console.log(`Saved to src/data/reviews.json (${(JSON.stringify(reviewArray).length / 1024).toFixed(1)} KB)`);
