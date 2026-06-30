# Sialkot Sportswear Template Catalog — Master Design Plan

## 1. Project Overview

**Subject:** Sportswear manufacturing and export businesses based in Sialkot, Pakistan
**Audience:** International B2B buyers — brands, distributors, clubs, academies, retailers, and procurement directors in Europe, North America, Middle East, and Asia-Pacific
**Page job:** Convince a visiting buyer that this manufacturer can deliver quality sportswear at scale, on time, with certifications, and initiate an inquiry

**Tech stack:**
- Pure HTML5 + Tailwind CSS (CDN via `cdn.tailwindcss.com`) + vanilla JavaScript
- No build tools, no node modules — every template is a single `index.html` file
- Shared `data/content.json` fetched via JavaScript
- Placeholder images from `images.unsplash.com` and `placehold.co`

---

## 2. Folder Structure

```
templates_sportswear_ind_v1/
├── data/
│   └── content.json                    ← Shared JSON content model
├── shared/
│   └── utils.js                        ← Optional: shared JS helpers
├── templates/
│   ├── 01-champion-heritage/
│   │   └── index.html
│   ├── 02-forge-performance/
│   │   └── index.html
│   ├── ... (50 total)
│   └── 50-stitchcraft/
│       └── index.html
├── .gitignore
├── README.md
└── DESIGN-PLAN.md
```

---

## 3. The 50 Templates — Complete Design Specifications

### Category A: Heritage & Legacy (01–05)

**01 — Champion's Heritage**
- Palette: Deep Navy `#0A1628`, Burnished Gold `#C5993A`, Warm White `#FAF7F2`, Slate `#3D4F5F`, Cream `#F0EBE3`
- Type: Playfair Display + Inter + JetBrains Mono
- Signature: Gold-foil-textured horizontal rules between sections

**02 — Dynasty Sport**
- Palette: Forest Green `#1B4332`, Antique Gold `#B8860B`, Ivory `#FFFFF0`, Charcoal `#2C2C2C`, Sage `#8FBC8F`
- Type: Cormorant Garamond + Source Sans 3
- Signature: Crest/badge watermark on hero images

**03 — Varsity Legacy**
- Palette: Cardinal Red `#8B0000`, Navy `#1A1A2E`, Cream `#F5F0E8`, Gold `#DAA520`, Light Gray `#E8E8E8`
- Type: Bebas Neue + Roboto + Roboto Condensed
- Signature: Varsity letter-inspired typography for headings

**04 — Old Guard**
- Palette: Charcoal `#2D2D2D`, Burgundy `#6B1D1D`, Parchment `#F4EDE4`, Copper `#B87333`, Dark Brown `#3E2723`
- Type: Libre Baskerville + Nunito Sans
- Signature: Copper-toned borders and dividers

**05 — Heritage Craft**
- Palette: Deep Teal `#1A535C`, Warm Gold `#D4A843`, Off-White `#FAF9F6`, Charcoal `#2B2B2B`, Sand `#C2B280`
- Type: DM Serif Display + DM Sans
- Signature: Hand-drawn "seal of quality" badge

### Category B: Performance & Technology (06–10)

**06 — Tech Forge**
- Palette: Near-Black `#0D0D0D`, Neon Lime `#AAFF00`, Dark Gray `#1A1A1A`, Light Gray `#E5E5E5`, White `#FFFFFF`
- Type: Space Grotesk + DM Sans + Space Mono
- Signature: Neon lime circuit-trace accent lines

**07 — Aero Sport**
- Palette: Electric Blue `#0066FF`, White `#FFFFFF`, Cool Gray `#F0F2F5`, Charcoal `#1C1C1E`, Sky Blue `#E8F4FD`
- Type: Outfit + Inter
- Signature: White-to-sky-blue gradient section transitions

**08 — Carbon**
- Palette: Matte Black `#1C1C1C`, Carbon Gray `#333333`, Red `#E63946`, White `#FFFFFF`, Steel `#8D99AE`
- Type: Rajdhani + Inter + Roboto Mono
- Signature: Carbon fiber texture pattern on dark backgrounds

**09 — Kinetic**
- Palette: Silver `#C0C0C0`, Electric Orange `#FF6B35`, Dark `#1A1A1A`, White `#FFFFFF`, Warm Gray `#9E9E9E`
- Type: Rajdhani + Work Sans
- Signature: Angled/diagonal section dividers (CSS clip-path)

**10 — Velocity**
- Palette: Midnight Purple `#190033`, Cyan `#00E5FF`, White `#FFFFFF`, Dark Purple `#2D1B4E`, Light Gray `#F5F5F5`
- Type: Syne + Inter
- Signature: Velocity motion blur effect on hero product

### Category C: Bold & Industrial (11–15)

**11 — Steel Works**
- Palette: Gunmetal `#2C3539`, Safety Yellow `#FFD700`, Dark `#1A1A1A`, Light Gray `#E0E0E0`, White `#FFFFFF`
- Type: Oswald + Source Sans 3
- Signature: Hazard-stripe diagonal pattern dividers

**12 — Ironclad**
- Palette: Iron Black `#1B1B1B`, Rust `#B7410E`, Cream `#F5F0E8`, Steel Blue `#4682B4`, Gray `#6B6B6B`
- Type: Barlow Condensed + Inter
- Signature: Riveted metal plate texture backgrounds

**13 — Factory Floor**
- Palette: Slate `#334155`, Signal Red `#DC2626`, Off-White `#F8FAFC`, Dark `#0F172A`, Warm Gray `#78716C`
- Type: Barlow + Inter
- Signature: Visible grid-line pattern underlying layout

**14 — Powerhouse**
- Palette: Charcoal `#212529`, Electric Blue `#0D6EFD`, White `#FFFFFF`, Light `#F8F9FA`, Medium Gray `#6C757D`
- Type: Montserrat + Open Sans
- Signature: "Power meter" horizontal bar stats visualization

**15 — Heavy Duty**
- Palette: Olive `#3D4A2A`, Black `#000000`, Tan `#D4C5A9`, Dark Green `#2C3E1F`, White `#FFFFFF`
- Type: Teko + Roboto
- Signature: Military-spec typography for product specifications

### Category D: Clean & Minimal (16–20)

**16 — Pure Form**
- Palette: White `#FFFFFF`, Navy `#1E3A5F`, Light Gray `#F7F8FA`, Medium Gray `#6B7280`, Accent Blue `#3B82F6`
- Type: Plus Jakarta Sans + Inter
- Signature: Single thin navy dividing line

**17 — Clarity Sport**
- Palette: Off-White `#FAFAF9`, Teal `#0D9488`, Charcoal `#1C1917`, Light Teal `#CCFBF1`, Gray `#78716C`
- Type: Geist + Inter
- Signature: Teal accent only on interactive elements

**18 — Essential Kit**
- Palette: Light Gray `#F3F4F6`, Charcoal `#111827`, White `#FFFFFF`, Medium Gray `#9CA3AF`, Dark Accent `#1F2937`
- Type: Inter (single typeface, weight-driven hierarchy)
- Signature: Typography-only design, no color accents

**19 — Precision**
- Palette: White `#FFFFFF`, Steel Blue `#475569`, Light `#F1F5F9`, Dark `#0F172A`, Blue Accent `#2563EB`
- Type: IBM Plex Sans + IBM Plex Mono
- Signature: Blueprint-style dotted grid hero background

**20 — Calm Authority**
- Palette: Cream `#FEFCE8`, Forest Green `#166534`, Charcoal `#1C1917`, Light Green `#DCFCE7`, Warm Gray `#57534E`
- Type: Lora + Work Sans
- Signature: Organic green blob background shapes

### Category E: Athletic & Dynamic (21–25)

**21 — Sprint**
- Palette: Black `#000000`, Electric Yellow `#FFE500`, Dark Gray `#1A1A1A`, White `#FFFFFF`, Medium Gray `#404040`
- Type: Bebas Neue + Inter
- Signature: Speed-line graphic motion elements

**22 — Power Play**
- Palette: Navy `#0A1F44`, Team Red `#C41E3A`, White `#FFFFFF`, Light Blue `#E8EEF6`, Medium `#64748B`
- Type: Anton + Inter
- Signature: Player-card style product layout

**23 — Endurance**
- Palette: Dark Teal `#134E4A`, Burnt Orange `#EA580C`, Off-White `#FFFBEB`, Dark `#1C1917`, Warm Gray `#78716C`
- Type: Sora + Inter
- Signature: Progress bar "distance traveled" stats

**24 — Peak Form**
- Palette: Charcoal `#18181B`, Lime `#84CC16`, White `#FFFFFF`, Dark Gray `#27272A`, Light `#F4F4F5`
- Type: Outfit + Inter
- Signature: Mountain peak silhouette hero background

**25 — Apex Predator**
- Palette: Midnight `#0C0A09`, Gold `#EAB308`, Dark Brown `#1C1917`, Cream `#FEF9C3`, Black `#000000`
- Type: Playfair Display + Inter
- Signature: Gold underline on every heading

### Category F: Global Trade & Export (26–30)

**26 — Global Reach**
- Palette: Ocean Blue `#0047AB`, White `#FFFFFF`, Light Blue `#E6F0FF`, Charcoal `#2C3E50`, Silver `#BDC3C7`
- Type: Poppins + Inter
- Signature: World map graphic with export country dots

**27 — Export Elite**
- Palette: Navy `#0F172A`, Gold `#F59E0B`, White `#FFFFFF`, Light `#F8FAFC`, Dark Accent `#1E293B`
- Type: Plus Jakarta Sans + Inter
- Signature: Certification badges in hero section

**28 — World Sport**
- Palette: Teal `#0891B2`, Orange `#F97316`, White `#FFFFFF`, Dark `#164E63`, Light `#ECFEFF`
- Type: Nunito Sans + Inter
- Signature: Shipping-container color stripe accents

**29 — Cross Continental**
- Palette: Slate Blue `#334155`, Crimson `#DC2626`, Off-White `#F1F5F9`, Dark `#0F172A`, Light Gray `#E2E8F0`
- Type: Space Grotesk + Inter
- Signature: Time zone display in contact section

**30 — Trade Titan**
- Palette: Gray `#374151`, Blue `#2563EB`, White `#FFFFFF`, Light `#F9FAFB`, Dark Accent `#111827`
- Type: Montserrat + Inter
- Signature: Quote calculator in contact section

### Category G: Modern & Startup (31–35)

**31 — Disrupt Sport**
- Palette: Black `#000000`, Neon Green `#39FF14`, Dark `#0A0A0A`, White `#FFFFFF`, Gray `#525252`
- Type: Syne + Inter
- Signature: Neon green glow hover effects

**32 — Fresh Kit**
- Palette: White `#FFFFFF`, Coral `#FF6B6B`, Light Pink `#FFF5F5`, Charcoal `#2D3436`, Warm Gray `#636E72`
- Type: Nunito + Inter
- Signature: Rounded corners everywhere

**33 — Direct Sport**
- Palette: Charcoal `#212529`, Amber `#F59E0B`, White `#FFFFFF`, Light `#F8F9FA`, Dark `#111827`
- Type: Inter (single typeface)
- Signature: MOQ/pricing displayed upfront

**34 — Next Gen**
- Palette: Dark Purple `#1E1B4B`, Violet `#7C3AED`, White `#FFFFFF`, Light Purple `#F5F3FF`, Dark `#0F0A1F`
- Type: Geist + Inter
- Signature: Gradient mesh hero background

**35 — Sport Lab**
- Palette: White `#FFFFFF`, Electric Blue `#2563EB`, Light `#EFF6FF`, Charcoal `#1E293B`, Medium `#64748B`
- Type: Plus Jakarta Sans + Inter
- Signature: Lab notebook dotted background aesthetic

### Category H: Editorial & Magazine (36–40)

**36 — Sportswear Post**
- Palette: Cream `#FFF8E7`, Dark Red `#8B0000`, Black `#1A1A1A`, Off-White `#FAF0D7`, Warm Gray `#6B6255`
- Type: Lora + Inter
- Signature: Newspaper masthead-style header

**37 — The Athletic Standard**
- Palette: White `#FFFFFF`, Black `#000000`, Light Gray `#F5F5F5`, Medium Gray `#9E9E9E`, Accent `#E53935`
- Type: DM Serif Display + Inter
- Signature: Magazine spread interlocking text/image layouts

**38 — Pitch Report**
- Palette: Off-White `#F5F5F0`, Navy `#1A237E`, Light Blue `#E8EAF6`, Dark `#212121`, Gray `#757575`
- Type: Merriweather + Open Sans
- Signature: Score card style stats layout

**39 — Sideline Stories**
- Palette: Beige `#F5F0E1`, Forest Green `#2E7D32`, Brown `#5D4037`, Off-White `#FAFAF5`, Dark `#3E2723`
- Type: Libre Baskerville + Nunito Sans
- Signature: Documentary-style image captions

**40 — Match Day**
- Palette: Light Gray `#F5F5F5`, Orange `#FF6D00`, Dark `#212121`, White `#FFFFFF`, Medium `#9E9E9E`
- Type: Oswald + Roboto
- Signature: Scrolling ticker stats bar

### Category I: Dark & Statement (41–45)

**41 — Night Game**
- Palette: Pure Black `#000000`, Neon Blue `#00BFFF`, White `#FFFFFF`, Dark `#0A0A0A`, Gray `#404040`
- Type: Rajdhani + Inter
- Signature: Stadium floodlight radial gradient hero

**42 — Shadow Play**
- Palette: Dark Gray `#1A1A1A`, Deep Red `#B71C1C`, White `#FFFFFF`, Medium Gray `#424242`, Light `#E0E0E0`
- Type: Bebas Neue + Inter
- Signature: CSS box-shadow spotlight effects

**43 — Midnight Kit**
- Palette: Near-Black `#121212`, Gold `#FFD700`, Dark `#1E1E1E`, Cream `#FFF8E1`, Gray `#616161`
- Type: Cormorant Garamond + Inter
- Signature: Gold-bordered product cards on dark background

**44 — Arena**
- Palette: Charcoal `#1A1A2E`, Neon Green `#00FF88`, White `#FFFFFF`, Dark Blue `#16213E`, Light `#F0F0F0`
- Type: Outfit + Inter
- Signature: Sports field lines CSS pattern hero

**45 — Blackout**
- Palette: All Black `#000000`, White `#FFFFFF`, Light Gray `#E5E5E5`, Medium Gray `#737373`, Off-White `#F5F5F5`
- Type: Inter Tight + Inter
- Signature: Pure black-and-white zero-color design

### Category J: Craft & Quality (46–50)

**46 — Handcrafted Sport**
- Palette: Warm Brown `#8D6E63`, Cream `#FFF8E1`, Dark `#3E2723`, Light Brown `#D7CCC8`, White `#FFFFFF`
- Type: Crimson Pro + Work Sans
- Signature: Hand-drawn wavy underline headings

**47 — Stitch & Thread**
- Palette: Off-White `#FAF9F6`, Rust `#C2452D`, Dark `#292524`, Light `#F5F0EB`, Gray `#78716C`
- Type: DM Serif Display + DM Sans
- Signature: CSS dashed stitch-pattern borders

**48 — Material World**
- Palette: Light Gray `#F3F4F6`, Navy `#1E3A5F`, White `#FFFFFF`, Dark `#111827`, Blue Accent `#3B82F6`
- Type: Instrument Sans + Inter
- Signature: Material swatch-style product cards

**49 — Quality Cut**
- Palette: White `#FFFFFF`, Burgundy `#7F1D1D`, Light `#FEF2F2`, Dark `#1C1917`, Gray `#78716C`
- Type: Fraunces + Inter
- Signature: Clean-cut diagonal clip-path transitions

**50 — Made Right**
- Palette: Cream `#FEFCE8`, Forest Green `#166534`, Dark `#1C1917`, Light Green `#DCFCE7`, Gray `#57534E`
- Type: Bitter + Inter
- Signature: "Made Right" ethical manufacturing badge
