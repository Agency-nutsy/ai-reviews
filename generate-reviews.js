// Generate 2000 reviews for Bagheera Cafe & Lounge
// Based on REAL Google reviews + actual menu items
const fs = require("fs");

// ── POPULAR DISHES (mentioned more frequently) ─────────────────────
const popularDishes = [
  "chilli potato", "honey chilli potato", "tandoori momos", "crispy momos",
  "butter chicken", "paneer tikka", "red sauce pasta", "alfredo pasta",
  "chicken tikka", "dal makhani", "loaded nachos", "french fries",
  "cold coffee", "oreo shake", "mojito", "drums of heaven",
  "chilli paneer", "butter chicken pizza", "cheese burger",
  "garlic bread with cheese", "chocolate shake", "crispy corn",
];

// ── FULL MENU ITEMS (mentioned less frequently) ────────────────────
const allDishes = [
  ...popularDishes,
  "cheese corn balls", "nachos with cheese", "peri-peri french fries",
  "hummus pita bread", "chicken nuggets", "dim sim momos", "fried momos",
  "arrabiata pasta", "mix sauce pasta", "spaghetti pasta",
  "tandoori platter", "chinese platter", "oriental salad", "greek salad",
  "hakka noodles", "chilli garlic noodles", "singapore noodles",
  "schezwan noodles", "biryani", "fried rice", "jeera rice",
  "cottage cheese sizzler", "peri peri sizzler", "BBQ sizzler",
  "veg grilled sandwich", "grilled paneer sandwich", "grilled chicken sandwich",
  "paneer makhni pizza", "classic margherita pizza", "chicken tikka pizza",
  "chilli chicken pizza", "peri-peri chicken pizza", "BBQ pizza",
  "veg spring roll", "veg dragon roll", "cigar roll",
  "veg manchurian dry", "chilli paneer dry", "chilli chaap",
  "chilli mushroom", "paneer 65", "chicken lollipop", "chilli chicken",
  "crispy chicken salt and pepper", "malai chaap", "masala chaap",
  "paneer pahadi tikka", "afghani paneer tikka", "hara bhara kabab",
  "mushroom mastana", "tandoori chicken", "chicken malai tikka",
  "chicken seekh kabab", "fish tikka", "shahi paneer", "kadhai paneer",
  "paneer lababdar", "kadhai chicken", "butter chicken lababdar",
  "kali mirch chicken", "rara chicken",
  "vanilla shake", "kitkat shake", "mango shake", "strawberry shake",
  "madagascar special shake", "pineapple smoothie", "mango smoothie",
  "strawberry smoothie", "banana smoothie", "black currant smoothie",
  "fresh lime soda", "blue mojito", "blue heaven",
  "virgin sangria", "fruit punch", "virgin mojito", "college mojito",
  "pina colada", "cosmopolitan", "margarita", "LIIT",
  "gulab jamun", "ice cream",
];

// Weight popular dishes 4x more
function pickDish() {
  if (Math.random() < 0.55) {
    return popularDishes[Math.floor(Math.random() * popularDishes.length)];
  }
  return allDishes[Math.floor(Math.random() * allDishes.length)];
}

// ── REVIEW TEMPLATES ───────────────────────────────────────────────
// Based on real Google review patterns for Bagheera

// Type 1: Bland/basic reviews (short, generic)
const blandReviews = [
  "Good food and nice ambience.",
  "Loved the food here. Must visit!",
  "Great place to hang out with friends.",
  "Nice cafe on Hudson Lane. Will come again.",
  "Food was tasty and service was good.",
  "Really liked the vibe of this place.",
  "Had a great time. Recommended!",
  "Amazing experience. Loved everything.",
  "Best cafe near GTB Nagar metro.",
  "Pocket-friendly prices and good food.",
  "Decent place with nice rooftop seating.",
  "Good for a quick bite on Hudson Lane.",
  "Staff was polite and food was fresh.",
  "Clean place with good music.",
  "Worth visiting. Food quality is good.",
  "Nice ambience and friendly staff.",
  "Great rooftop. Perfect for evening hangout.",
  "One of the better cafes on Hudson Lane.",
  "Food was okay but ambience is great.",
  "Had a fun time here with my group.",
  "Value for money place on Hudson Lane.",
  "Pretty good food and quick service.",
  "Loved the rooftop area. Vibes are unmatched.",
  "Good place for college students.",
  "Affordable and tasty food. No complaints.",
  "Nice vibe, good food, will come again.",
  "Decent ambience and reasonable pricing.",
  "Perfect spot near GTB Nagar for hangout.",
  "Good food. Good music. Good vibes.",
  "Chill place. Would recommend to friends.",
  "Must visit cafe on Hudson Lane.",
  "Superb food and great staff.",
  "Highly recommended for groups.",
  "Nice place for birthday celebrations.",
  "Rooftop is the best part of this cafe.",
  "Everything was nice. Will visit again.",
  "Awesome place. Loved the food.",
  "Bagheera never disappoints.",
  "Great cafe with a lot of variety in menu.",
  "Had dinner here. Food was really good.",
];

// Type 2: Dish-focused review templates
function dishReview() {
  const dish = pickDish();
  const dish2 = pickDish();
  const templates = [
    `The ${dish} here is absolutely amazing. Tried it for the first time and I'm hooked. Will definitely order it again next time.`,
    `Ordered the ${dish} and it was delicious. The taste was authentic and portions were generous. Must try!`,
    `Came here for the ${dish} and was not disappointed at all. One of the best I've had on Hudson Lane.`,
    `The ${dish} at Bagheera is hands down the best in the area. Perfectly cooked and full of flavor.`,
    `Had the ${dish} and ${dish2} — both were excellent. The food quality here is consistently good.`,
    `We ordered ${dish} and it was superb. Loved every bite. The presentation was also really nice.`,
    `My friend recommended the ${dish} here and wow, it did not disappoint. So good!`,
    `The ${dish} was tempting and delicious. Paired it with ${dish2} and it was the perfect combo.`,
    `Tried the ${dish} for the first time. It was mindblowing. Already craving for more.`,
    `Every time I come here I order the ${dish}. It never misses. Consistent quality every single time.`,
    `The ${dish} is a must-try at Bagheera. Trust me, you won't regret it.`,
    `Had the ${dish} today and it was as good as always. This place knows how to cook.`,
    `${dish} was amazing as usual. Also tried the ${dish2} which was equally good.`,
    `If you visit Bagheera, don't miss the ${dish}. It's their best dish in my opinion.`,
    `The ${dish} here is worth every penny. Tasty, well-presented, and served hot.`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

// Type 3: Vibe/ambience reviews (rooftop, DJ, hookah, dance floor)
const vibeReviews = [
  "The rooftop area is absolutely stunning, especially during the evening. Perfect for a chill hangout with friends after college.",
  "Loved the DJ here! DJ Ankit plays the best tracks and the dance floor was lit. Had such a great time.",
  "The ambience at Bagheera is mindblowing. The lighting, the music, the vibe — everything is just perfect.",
  "Rooftop seating during golden hours is a whole different experience. The view and the breeze make it so relaxing.",
  "The shisha here has some really good flavors and the smoke quality is premium. Spent hours just chilling on the rooftop.",
  "Bagheera's rooftop is the best in Hudson Lane area. We go there almost every weekend for the vibe.",
  "The DJ plays amazing Bollywood and EDM mix. The dance floor gets really lively in the evenings. Must visit!",
  "Positive vibes only at Bagheera. The ambience is pretty and the music is always on point.",
  "Great place for a birthday party. The rooftop setup with music and lighting was perfect for our celebration.",
  "The hookah flavors are really nice and the rooftop makes it even better. My go-to chill spot on Hudson Lane.",
  "Evening vibes at Bagheera are unmatched. The rooftop area with fairy lights is Instagram-worthy.",
  "If you love good music and a chill atmosphere, Bagheera is the place to be. The DJ is awesome.",
  "We danced the whole night. The music selection was perfect and the energy on the dance floor was amazing.",
  "The rooftop has such a calming vibe during weekdays. Perfect for a coffee date or study session.",
  "Bagheera's ambience is what keeps me coming back. It's one of the most well-decorated cafes on Hudson Lane.",
  "Love the fairy lights and the open-air rooftop feel. Makes every visit feel like a mini vacation.",
  "The hookah and the music combo at Bagheera is just chef's kiss. My friends and I are regulars now.",
  "Best rooftop cafe in North Delhi. The view from the third floor is really nice, especially at night.",
  "The vibe here is totally different from other cafes on Hudson Lane. It feels more premium and well-maintained.",
  "Great for couples too. The dim lighting and soft music in the indoor section is perfect for a date night.",
];

// Type 4: Service/staff reviews (based on real reviews mentioning staff)
const serviceReviews = [
  "The staff here is very polite and helpful. Ajeet Kumar took great care of us and made sure everything was perfect.",
  "Mithun at the counter was super friendly. He recommended some great dishes and everything was delicious.",
  "Service was very fast. We didn't have to wait long for our food. The staff is well-trained and courteous.",
  "Shoutout to Chandan for the excellent service. He was attentive and made our dining experience really smooth.",
  "Ved was our server and he was amazing. Very polite, quick with orders, and even helped us choose from the menu.",
  "The management here is really good. They keep the place clean and the staff is always smiling and ready to help.",
  "I've been to many cafes on Hudson Lane but Bagheera's service stands out. They treat every customer like a VIP.",
  "Timely service and the staff remembers regular customers. That personal touch makes Bagheera special.",
  "The servers are well-mannered and the food comes out fast. No complaints about the service at all.",
  "Staff was very cooperative when we asked for customizations in our order. Really appreciated their flexibility.",
  "Best service on Hudson Lane. The team here knows what they're doing. Very professional and friendly.",
  "The waiters were helpful in explaining the menu. They suggested the best dishes and everything was spot on.",
];

// Type 5: Occasion-based reviews
function occasionReview() {
  const dish = pickDish();
  const occasions = [
    `Celebrated my birthday at Bagheera and the team made it so special. The ${dish} was amazing and the rooftop setup was perfect.`,
    `Went for a date night and the ambience was just right. We had ${dish} and it was delicious. Highly recommend for couples.`,
    `Friends get-together at Bagheera was a blast. We ordered so many things — the ${dish} was the highlight of the night.`,
    `Post-exam celebration at Bagheera! We came with 10 people and the staff handled everything smoothly. The ${dish} was loved by all.`,
    `Family dinner at Bagheera was a great idea. Even my parents loved the ${dish}. Clean place and polite staff.`,
    `Farewell party for a colleague. The rooftop was perfect for the occasion and the ${dish} was a hit among everyone.`,
    `Weekend brunch at Bagheera is always a vibe. Had the ${dish} with cold coffee and it was the perfect combination.`,
    `Came here after a long day at college. The ${dish} and the chill rooftop helped me unwind completely.`,
    `Our first time at Bagheera and it won't be the last. Had the ${dish} — it was excellent. The place has a great vibe.`,
    `Surprise birthday party for my best friend here. The management helped with decorations and the ${dish} was the star of the menu.`,
  ];
  return occasions[Math.floor(Math.random() * occasions.length)];
}

// Type 6: Comparison/recommendation reviews
function recoReview() {
  const dish = pickDish();
  const templates = [
    `Been to many cafes on Hudson Lane but Bagheera is on another level. The ${dish} alone makes it worth the visit.`,
    `Out of all the cafes near GTB Nagar, Bagheera has the best food and ambience. Try the ${dish} — you'll love it.`,
    `I've tried ${dish} at multiple places but Bagheera's version is the best by far. Highly recommended!`,
    `If you're looking for the best cafe experience on Hudson Lane, Bagheera is it. The ${dish} is a must-try.`,
    `Compared to other cafes in the area, Bagheera offers much better value for money. And their ${dish} is unbeatable.`,
    `My go-to cafe on Hudson Lane. No other place comes close to Bagheera's ${dish} and overall vibe.`,
    `Tried Bagheera after reading reviews and honestly it exceeded expectations. The ${dish} was phenomenal.`,
    `Everyone talks about Hudson Lane cafes but Bagheera is genuinely the best one. Start with the ${dish}.`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

// Type 7: Quick/casual reviews (real Google review style — short)
const quickReviews = [
  "Tasty food, good music, nice place 👍",
  "Loved the rooftop. Food was great too.",
  "Good cafe. Pocket-friendly. Nice vibe.",
  "Must visit on Hudson Lane!",
  "Food quality is very good. Clean place.",
  "Amazing rooftop with great food.",
  "Pricing is genuine and food is delicious.",
  "Best place for friends hangout near GTB Nagar.",
  "Really nice cafe. Good for all occasions.",
  "The food and service both are excellent.",
  "Had a wonderful experience. Will come again for sure.",
  "Good food, good hookah, great music. What else do you need?",
  "Top-notch cafe on Hudson Lane. Five stars!",
  "Visited with family. Everyone loved it.",
  "Great place. Great food. Great vibes.",
  "Bagheera is love. Best cafe in the area.",
  "Perfect 10/10 experience.",
  "Food was yummy and staff was super nice.",
  "Loved everything about this place.",
  "Recommended by a friend and I totally agree. Amazing!",
  "Good ambience for couples and groups both.",
  "The place is well maintained and the food is fresh.",
  "Can't complain about anything. Perfect experience.",
  "Super impressed with the food quality and presentation.",
  "Hudson Lane has many cafes but Bagheera tops the list.",
];

// ── GENERATE ───────────────────────────────────────────────────────
function generateOne() {
  const r = Math.random();
  if (r < 0.18) return blandReviews[Math.floor(Math.random() * blandReviews.length)];
  if (r < 0.48) return dishReview();
  if (r < 0.62) return vibeReviews[Math.floor(Math.random() * vibeReviews.length)];
  if (r < 0.70) return serviceReviews[Math.floor(Math.random() * serviceReviews.length)];
  if (r < 0.82) return occasionReview();
  if (r < 0.92) return recoReview();
  return quickReviews[Math.floor(Math.random() * quickReviews.length)];
}

const reviews = new Set();
let attempts = 0;
while (reviews.size < 2000 && attempts < 100000) {
  reviews.add(generateOne());
  attempts++;
}

const arr = Array.from(reviews);
// Shuffle
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(`Generated ${arr.length} unique reviews in ${attempts} attempts`);
fs.writeFileSync("./src/data/reviews.json", JSON.stringify(arr, null, 2), "utf8");
console.log(`Saved (${(JSON.stringify(arr).length / 1024).toFixed(1)} KB)`);
