# Diabetes Travel Helper — Claude Code Mission File

## What this site is
A free diabetes travel packing calculator with SEO-targeted blog content. The calculator at index.html is the core product. Every page, post, and change should funnel users toward completing it.

## Primary goals
1. Drive users to complete the calculator at index.html
2. Rank on Google for: "diabetes travel packing list", "diabetes packing calculator", "what to pack for travel with diabetes", "diabetes travel packing checklist", "diabetes carry on packing list"
3. Generate affiliate revenue via Amazon Associates (tag: diabetestrave-20)

## Affiliate rules
- Always use full URLs: https://www.amazon.com/dp/[ASIN]?tag=diabetestrave-20
- Never use amzn.to short links — they don't reliably pass the tag
- Never leave placeholder notes like "update this link" or "📎" in any file
- Remove any pc-note divs that are orphaned reminders — check before publishing

## Site structure
- index.html — homepage + calculator (highest priority)
- results.html — calculator output page
- guides.html — blog index
- /Blogs/ — all blog posts (filenames: lowercase, hyphenated, descriptive)
- blog-nav.js — powers nav, related posts, featured posts sitewide. Never modify unless explicitly instructed.
- blog.css — shared blog styles
- sitemap.xml — update every time a new blog post is added

## Every new blog post requires
- blog.css linked
- Breadcrumb nav
- Article + FAQPage + BreadcrumbList schema markup
- Keywords meta tag
- Full favicon set
- GA tag: G-VZWEQF1WNK
- At least one mid-content calculator CTA (see format below)
- At least 2 internal links to other relevant blog posts
- sitemap.xml updated with the new URL

## Calculator CTA — use this block mid-content at peak reader intent
<div class="cta-box">
  <p>Not sure how much to pack? Our free calculator builds a personalized diabetes packing list based on your pump, CGM, and trip length — with safety buffers built in.</p>
  <a href="https://diabetes-packer.github.io/diabetestravelhelper/" class="cta-btn">Build my packing list →</a>
</div>

## When touching any existing blog post
- Check for orphaned pc-note placeholder divs and remove them
- Check that the affiliate tag diabetestrave-20 is present on all Amazon links
- Add a mid-content calculator CTA if one is missing
- Add internal links to at least 2 other blog posts if missing

## Writing rules
- No em-dashes — use commas or periods instead
- First person voice, conversational tone
- Specific device names always: Dexcom G7, Omnipod 5, Tandem t:slim X2, Tandem Mobi, twiist, Eversense 365, FreeStyle Libre 2/3, Medtronic Guardian 4, iLet
- No generic AI-sounding openers or filler phrases
- No "Update this link" or any visible placeholder text ever

## What to always protect — never touch unless explicitly asked
- GA tag G-VZWEQF1WNK
- All JS logic and form calculations in index.html
- Copy/share functions in results.html
- blog-nav.js
- All existing Amazon links that already contain diabetestrave-20

## Do not add to the calculator
- mylife YpsoPump — not US-available. Save for a dedicated European-audience blog post.

## Before every change
1. Read the current file state first
2. Show exactly what you plan to change and where
3. Stop and ask if a find-string doesn't match — never guess
