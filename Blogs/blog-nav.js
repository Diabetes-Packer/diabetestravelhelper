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
  },
  {
    slug: "diabetes-carry-on-packing-list.html",
    title: "Diabetes Travel Emergency Kit: What to Pack in Your Carry-On (2026)",
    desc: "A real carry-on packing list for Type 1 diabetics traveling with an insulin pump and CGM — built from international travel experience.",
    emoji: "🧳"
  },
  {
    slug: "flying-with-type-1-diabetes-airport-security.html",
    title: "Flying with Type 1 Diabetes: What to Expect at Airport Security (2026)",
    desc: "What airport security is actually like with an Omnipod and Dexcom — what happens at the scanner, what to say, and how to get through without stress.",
    emoji: "🛂"
  },
  {
    slug: "what-i-actually-pack-for-every-trip-with-diabetes.html",
    title: "What I Actually Pack for Every Trip with Diabetes (After a Year Traveling Europe)",
    desc: "A real packing list from a year of constant travel through Europe with an Omnipod and Dexcom G6 — and the 20% rule that makes the math simple every time.",
    emoji: "🎒"
  },
  {
    slug: "best-low-blood-sugar-snacks-for-travel.html",
    title: "Best Low Blood Sugar Snacks for Travel: Ranked (2026)",
    desc: "Six low treatments ranked from best to worst for travel — what works on planes, abroad, and on the trail, from someone who's been there.",
    emoji: "🍬"
  }
];

const BASE = "https://diabetes-packer.github.io/diabetestravelhelper/Blogs/";
const HOME = "https://diabetes-packer.github.io/diabetestravelhelper/";

// ── Nav: inject fully responsive site-wide navigation ──
function injectNav() {
  const existing = document.querySelector('.site-nav');
  if (existing) return;

  const style = document.createElement('style');
  style.textContent = `
    .dth-nav {
      border-bottom: 1px solid rgba(28,26,22,0.08);
      padding: 14px 0;
      background: #fff;
    }
    .dth-nav-inner {
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .dth-nav-logo {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 17px;
      font-weight: 400;
      color: #1C1A16;
      text-decoration: none;
      letter-spacing: -0.01em;
      flex-shrink: 0;
    }
    .dth-nav-logo em {
      font-style: italic;
      color: #1C6459;
    }
    .dth-nav-links {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .dth-nav-links a {
      font-size: 14px;
      font-weight: 600;
      color: #6B6860;
      text-decoration: none;
      white-space: nowrap;
    }
    .dth-nav-links a:hover { color: #1C1A16; }
    .dth-nav-btn {
      color: #fff !important;
      background: #1C6459 !important;
      padding: 8px 14px;
      border-radius: 8px;
      transition: background 150ms ease;
    }
    .dth-nav-btn:hover { background: #0E3830 !important; }
    @media (max-width: 480px) {
      .dth-nav-btn { display: none !important; }
      .dth-nav-links { gap: 14px; }
      .dth-nav-links a { font-size: 13px; }
      .dth-nav-logo { font-size: 15px; }
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'site-nav dth-nav';
  nav.innerHTML = `
    <div class="dth-nav-inner">
      <a href="${HOME}index.html" class="dth-nav-logo">
        Diabetes <em>Travel Helper</em>
      </a>
      <div class="dth-nav-links">
        <a href="${HOME}index.html">Home</a>
        <a href="${HOME}guides.html">Guides</a>
        <a href="${HOME}index.html" class="dth-nav-btn">Packing Calculator</a>
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
        <a href="${HOME}guides.html" style="font-size:13px; font-weight:600; color:#1C6459; text-decoration:none; white-space:nowrap;">View All Guides →</a>
      </div>
      ${cards}
    </section>
  `;
}

// ── Travel guides on index.html: 3 featured posts + "View all" link ──
function injectTravelGuides() {
  const container = document.getElementById("travel-guides");
  if (!container) return;

  const featured = [
    "flying-with-diabetes-tsa-rules.html",
    "diabetes-packing-list.html",
    "how-much-insulin-to-pack-for-travel.html"
  ];

  const featuredArticles = featured
    .map(slug => ARTICLES.find(a => a.slug === slug))
    .filter(Boolean);

  const cards = featuredArticles.map(a => `
    <a href="${BASE}${a.slug}" style="display:block; padding:16px; background:rgba(15,23,42,0.02); border:1px solid rgba(15,23,42,0.08); border-radius:12px; text-decoration:none; transition:background 120ms ease; margin-bottom:12px;">
      <div style="display:flex; align-items:flex-start; gap:12px;">
        <span style="font-size:20px; flex-shrink:0; line-height:1.4;">${a.emoji}</span>
        <div style="flex:1; min-width:0;">
          <h3 style="margin:0 0 5px 0; font-size:15px; font-weight:700; color:var(--text); letter-spacing:-0.01em; line-height:1.35;">${a.title}</h3>
          <p style="margin:0; font-size:13px; color:var(--muted); line-height:1.5;">${a.desc}</p>
        </div>
      </div>
    </a>
  `).join("");

  const viewAll = `
    <a href="${HOME}guides.html" style="display:flex; align-items:center; justify-content:center; gap:6px; padding:13px 16px; border:1px solid rgba(28,100,89,0.25); border-radius:10px; text-decoration:none; font-size:14px; font-weight:600; color:#1C6459; background:#E8F5F2; margin-top:4px; transition:background 120ms ease;">
      View All Guides →
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