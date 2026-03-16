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

const BASE = "https://diabetes-packer.github.io/diabetestravelhelper/Blogs/";

function injectRelatedArticles() {
  const container = document.getElementById("related-articles");
  if (!container) return;

  const currentSlug = window.location.pathname.split("/").pop() || "";
  const others = ARTICLES.filter(a => a.slug !== currentSlug).slice(0, 4);
  if (others.length === 0) return;

  const cards = others.map(a => `
    <a class="related-card" href="${BASE}${a.slug}" target="_blank" rel="noopener">
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

function injectTravelGuides() {
  const container = document.getElementById("travel-guides");
  if (!container) return;

  const cards = ARTICLES.map(a => `
    <a href="${BASE}${a.slug}" target="_blank" rel="noopener" style="display:block; padding:16px; background:rgba(15,23,42,0.02); border:1px solid rgba(15,23,42,0.08); border-radius:12px; text-decoration:none; transition:all 120ms ease; margin-bottom:12px;">
      <div style="display:flex; align-items:start; gap:12px;">
        <span style="font-size:24px;">${a.emoji}</span>
        <div style="flex:1;">
          <h3 style="margin:0 0 6px 0; font-size:18px; font-weight:800; color:var(--text); letter-spacing:-0.01em;">${a.title}</h3>
          <p style="margin:0; font-size:15px; font-weight:600; color:var(--muted); line-height:1.5;">${a.desc}</p>
        </div>
      </div>
    </a>
  `).join("");

  container.innerHTML = `<div style="border-top:1px solid rgba(15,23,42,0.10); padding-top:18px;">${cards}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  injectRelatedArticles();
  injectTravelGuides();
});