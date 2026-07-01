# Project Summary

## Goal

Create a catalog of 50 unique static website templates for sportswear manufacturing/export businesses based in Sialkot, Pakistan. The project is a sellable product — each template sells for Rs. 1,500 PKR (sale price, down from Rs. 4,500). There's also a Rs. 8,000 package with hosting/domain included. A main catalogue page (`index.html`) serves as the storefront with live iframe previews, pricing info, and purchase instructions via JazzCash.

## Instructions

- **Tech:** Pure vanilla HTML/CSS/JS with Tailwind CSS CDN (`cdn.tailwindcss.com`), no build tools
- **Content:** Each template inlines its own copy of `data/content.json` (no `fetch()` — must work via `file://` protocol and GitHub Pages)
- **Images:** Zero external images. Product visuals use CSS gradient backgrounds with inline SVG icons
- **Sections per template:** 12+ (Header, Hero, Stats, About, Capabilities, Products, Materials, Process, Why Choose Us, Certifications, Export, Industries, Testimonials, FAQ, Contact, Footer)
- **Contact section:** Static contact cards only — NO forms (these are static sites)
- **Hero backgrounds:** Solid colors only — no stripes/patterns (removed for text readability)
- **Pricing model:**
  - Template only: Rs. 1,500 (~~Rs. 4,500~~)
  - Template + Hosting: Rs. 8,000 (~~Rs. 14,500~~)
  - Customization: extra, pricing varies
  - Payment via JazzCash to 0324-6183840, share screenshot via WhatsApp to same number
  - Free: company name, social handles, contact details, logo upload (if available)
  - Hosting/domain not included in base price; charged Rs. 6,500 extra
- **Catalogue page** (`index.html`): dark theme, live iframe previews scaled to fit cards, infinite scroll (scroll event-based, not IntersectionObserver — for `file://` compat), search bar, pricing hero banner, "How to Buy" modal, divider with email `digitalhelp.de@gmail.com`
- **Category dropdown removed** from navbar per user request
- **Each template card** shows Rs. 1,500 price tag

## Discoveries

- `fetch()` fails with `file://` protocol — must inline content directly into each template
- `IntersectionObserver` unreliable with `file://` — switched to `scroll` event listener for infinite scroll
- Template 18 (Essential Kit) had accent color `#1F2937` nearly identical to primary `#111827` — fixed to `#6366F1` (indigo)
- Footer text at 30-40% opacity was too faint on dark backgrounds — increased to 50-60%
- `PRODUCT_ICONS` object wasn't being included in generated template scripts — had to serialize via `JSON.stringify()`
- `heroText` variable was undefined in templates — renamed to `heroColor` throughout
- Address text in contact cards defaulted to black — added explicit `heroColor` styling
- iframe preview sizing: use `Math.max(containerWidth/iframeWidth, containerHeight/iframeHeight)` to fill without black gaps

## Accomplished

- ✅ 50 complete sportswear website templates generated from `generate.js`
- ✅ Shared JSON content model (`data/content.json`) with all company data
- ✅ Content inlined into each template (no fetch)
- ✅ Contrast fixes, solid hero backgrounds, no more hidden text
- ✅ Contact forms replaced with static contact cards (Phone, WhatsApp, Email, Website, Address)
- ✅ Catalogue page with live iframe previews, infinite scroll, search, pricing, purchase instructions
- ✅ All pushed to GitHub (`main` branch) — GitHub Pages can be enabled from Settings → Pages → main branch
- 🔲 User may want to verify the live GitHub Pages deployment
- 🔲 Possible future: logo creation (excluded from free tier), actual customization workflow

## Relevant files / directories

```
D:\personal_projects\templates_sportswear_ind_v1\
├── index.html                    # Main catalogue/storefront page (live previews, pricing, purchase flow)
├── generate.js                   # Template generator — run with `node generate.js` to rebuild all 50
├── data/
│   └── content.json              # Shared content (company info, 10 products, certifications, materials, etc.)
├── templates/                    # 50 generated templates, each a standalone index.html (~53KB)
│   ├── 01-champion-heritage/
│   ├── 02-dynasty-sport/
│   ├── ...
│   └── 50-made-right/
├── .gitignore
├── README.md
├── DESIGN-PLAN.md
└── .agents/                      # Agent skills (not modified)
```

**Key config in `generate.js`:**
- `TEMPLATES` array (line ~6): defines all 50 templates with `id`, `dir`, `name`, `colors` (primary, accent, bg), `fonts`, and unused fields (`heroPattern`, `accentRule`)
- `generateHeroPattern()` (line ~70): returns solid background only (pattern logic stripped)
- `heroSection()` (line ~130): generates different hero layouts (standard, centered, split, cards-first, sidebar) — but this was reverted per user preference, so currently all templates use the same standard layout
- `PRODUCT_ICONS` (line ~116): SVG icons for 10 product categories
- `PROCESS_STEPS` (line ~340): 6-step manufacturing process
- Template generation loop (line ~390): writes to `templates/{id}-{dir}/index.html`
