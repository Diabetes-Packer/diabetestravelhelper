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
  },
  {
    slug: "tsa-rules-continuous-glucose-monitor-cgm.html",
    title: "TSA Rules for Continuous Glucose Monitors (CGMs) in 2026",
    desc: "Can you wear a CGM through airport security? Dexcom, Libre, and Guardian rules explained for 2026.",
    emoji: "📡"
  },
  {
    slug: "how-much-insulin-to-pack-for-travel.html",
    title: "How Much Insulin to Pack for Travel (2026 Guide)",
    desc: "The 2x rule explained with exact calculations for vials, pens, and pumps. Never run short on insulin during a trip again.",
    emoji: "💉"
  },
  {
    slug: "flying-with-omnipod-5-airport-security-travel-guide.html",
    title: "Flying with Omnipod 5: Airport Security & Travel Guide (2026)",
    desc: "TSA rules, scanner safety, flight mode settings, cabin pressure effects, and exactly how many pods to pack.",
    emoji: "🩺"
  },
  {
    slug: "traveling-with-dexcom-g7-airport-security-travel-guide.html",
    title: "Traveling with Dexcom G7: Airport Security & Flight Tips (2026)",
    desc: "G7 security rules, how many sensors to pack, adhesion tips, and the international app warning every G7 user needs to know.",
    emoji: "📡"
  }
];

const BASE = "https://diabetes-packer.github.io/diabetestravelhelper/Blogs/";
const HOME = "https://diabetes-packer.github.io/diabetestravelhelper/";

// ── Nav: inject site-wide navigation into every blog page ──
function injectNav() {
  const existing = document.querySelector('.site-nav');
  if (existing) return; // already has a nav (guides.html has its own)

  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.style.cssText = 'border-bottom:1px solid rgba(28,26,22,0.08); padding:14px 0; margin-bottom:0;';
  nav.innerHTML = `
    <div style="width:min(1120px,calc(100% - 32px)); margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px;">
      <a href="${HOME}index.html" style="font-family:'Instrument Serif',Georgia,serif; font-size:17px; font-weight:400; color:#1C1A16; text-decoration:none; letter-spacing:-0.01em;">
        Diabetes <em style="font-style:italic; color:#1C6459;">Travel Helper</em>
      </a>
      <div style="display:flex; align-items:center; gap:20px;">
        <a href="${HOME}index.html" style="font-size:14px; font-weight:600; color:#6B6860; text-decoration:none;">Home</a>
        <a href="${HOME}guides.html" style="font-size:14px; font-weight:600; color:#6B6860; text-decoration:none;">Guides</a>
        <a href="${HOME}index.html" style="font-size:13px; font-weight:600; color:#fff; background:#1C6459; padding:8px 14px; border-radius:8px; text-decoration:none;">Packing Calculator</a>
      </div>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
}

// ── Related articles: shown at bottom of each blog post ──
function injectRelatedArticles() {
  const container = document.getElementById("related-articles");
  if (!container) return;

  const currentSlug = window.location.pathname.split("/").pop() || "";
  const others = ARTICLES.filter(a => a.slug !== currentSlug).slice(0, 3);
  if (others.length === 0) return;

  const cards = others.map(a => `
    <a class="related-card" href="${BASE}${a.slug}">
      <div class="rc-title">${a.emoji} ${a.title}</div>
      <div class="rc-desc">${a.desc}</div>
    </a>
  `).join("");

  container.innerHTML = `
    <section class="related">
      <div style="display:flex; align-items:baseline; justify-content:space-between; gap:12px; margin-bottom:16px; flex-wrap:wrap;">
        <h2 style="margin:0; font-family:'Instrument Serif',Georgia,serif; font-weight:400; font-size:22px; letter-spacing:-0.01em; color:#1C1A16;">More Travel Guides</h2>
        <a href="${HOME}guides.html" style="font-size:13px; font-weight:600; color:#1C6459; text-decoration:none; white-space:nowrap;">View all guides →</a>
      </div>
      ${cards}
    </section>
  `;
}

// ── Travel guides on index.html: shows 3 featured posts + "View all" link ──
function injectTravelGuides() {
  const container = document.getElementById("travel-guides");
  if (!container) return;

  // Show only the top 3 most relevant posts on the homepage
  const featured = [
    "flying-with-diabetes-tsa-rules.html",
    "diabetes-packing-list.html",
    "how-much-insulin-to-pack-for-travel.html"
  ];

  const featuredArticles = featured
    .map(slug => ARTICLES.find(a => a.slug === slug))
    .filter(Boolean);

  const cards = featuredArticles.map(a => `
    <a href="${BASE}${a.slug}" style="display:block; padding:16px; background:rgba(15,23,42,0.02); border:1px solid rgba(15,23,42,0.08); border-radius:12px; text-decoration:none; transition:all 120ms ease; margin-bottom:12px;">
      <div style="display:flex; align-items:start; gap:12px;">
        <span style="font-size:22px; flex-shrink:0;">${a.emoji}</span>
        <div style="flex:1;">
          <h3 style="margin:0 0 5px 0; font-size:16px; font-weight:700; color:var(--text); letter-spacing:-0.01em;">${a.title}</h3>
          <p style="margin:0; font-size:14px; color:var(--muted); line-height:1.5;">${a.desc}</p>
        </div>
      </div>
    </a>
  `).join("");

  const viewAll = `
    <a href="${HOME}guides.html" style="display:flex; align-items:center; justify-content:center; gap:6px; padding:12px; border:1px solid rgba(28,100,89,0.25); border-radius:10px; text-decoration:none; font-size:14px; font-weight:600; color:#1C6459; background:#E8F5F2; margin-top:4px; transition:background 120ms ease;">
      View all 9 guides →
    </a>
  `;

  container.innerHTML = `
    <div style="border-top:1px solid rgba(15,23,42,0.08); padding-top:16px;">
      ${cards}
      ${viewAll}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  injectNav();
  injectRelatedArticles();
  injectTravelGuides();
});