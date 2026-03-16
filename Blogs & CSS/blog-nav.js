/* ============================================================
   Diabetes Travel Helper - Blog Navigation
   
   TO ADD A NEW ARTICLE: add one object to ARTICLES below.
   The Related Articles section on every page updates automatically.
   ============================================================ */

const ARTICLES = [
  {
    slug: "diabetes-packing-list.html",
    title: "Complete Diabetes Travel Packing List for 2026",
    desc: "Everything you need to pack for safe travel with Type 1 diabetes. TSA rules, insulin storage tips, and climate-specific advice.",
    emoji: "📝"
  },
  {
    slug: "flying-with-diabetes-tsa-rules.html",
    title: "Flying with Diabetes: TSA Rules & Airport Tips (2026)",
    desc: "Get through airport security with insulin, pumps, and CGMs. Every TSA rule you need, plus what to keep in your carry-on.",
    emoji: "✈️"
  },
  {
    slug: "how-to-keep-insulin-cool-while-traveling.html",
    title: "How to Keep Insulin Cool While Traveling (2026)",
    desc: "Best cooling cases, FRIO bags, and storage strategies for every trip type - flights, road trips, hot climates, and off-grid adventures.",
    emoji: "🧊"
  },
  {
    slug: "international-travel-with-diabetes.html",
    title: "International Travel with Diabetes: Complete Guide (2026)",
    desc: "Doctor's letters, customs rules, finding insulin abroad, travel insurance, and handling medical emergencies overseas.",
    emoji: "🌍"
  },
  {
    slug: "managing-blood-sugar-on-vacation.html",
    title: "Managing Blood Sugar on Vacation (2026)",
    desc: "Food, activity, and time zones - how to stay in control when your routine disappears.",
    emoji: "📊"
  }
];

const BASE = "https://diabetes-packer.github.io/diabetestravelhelper/";

function injectRelatedArticles() {
  // Figure out which page we're on
  const currentSlug = window.location.pathname.split("/").pop() || "index.html";

  // Filter out current page, take up to 4 others
  const others = ARTICLES.filter(a => a.slug !== currentSlug).slice(0, 4);

  if (others.length === 0) return;

  // Find the placeholder div injected by each article's HTML
  const container = document.getElementById("related-articles");
  if (!container) return;

  const cards = others.map(a => `
    <a class="related-card" href="${BASE}${a.slug}">
      <div class="rc-title">${a.emoji} ${a.title}</div>
      <div class="rc-desc">${a.desc}</div>
    </a>
  `).join("");

  container.innerHTML = `
    <section class="related">
      <h2>More Travel Guides</h2>
      ${cards}
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", injectRelatedArticles);
