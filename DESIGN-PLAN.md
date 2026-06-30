# Sialkot Sportswear Template Catalog — Master Design Plan

## 1. Project Overview

**Subject:** Sportswear manufacturing and export businesses based in Sialkot, Pakistan
**Audience:** International B2B buyers — brands, distributors, clubs, academies, retailers, and procurement directors
**Page job:** Convince a visiting buyer that this manufacturer can deliver quality sportswear at scale, on time, with certifications, and initiate an inquiry

**Tech stack:**
- Pure HTML5 + Tailwind CSS (CDN) + vanilla JavaScript
- Single `index.html` per template, no build tools
- Shared `data/content.json` fetched via JavaScript
- **Zero external images** — all visuals are pure CSS/SVG infographics

---

## 2. CSS/SVG Infographic System

### Product Category Infographics (gradient + inline SVG)

| Product | Gradient | SVG Icon |
|---------|----------|----------|
| Football Kits | `#1B4332 → #2D6A4F` | Soccer ball |
| Cricket Apparel | `#0A1F44 → #1E3A5F` | Cricket bat |
| Boxing Equipment | `#8B0000 → #B71C1C` | Boxing glove |
| MMA & Fightwear | `#2C2C2C → #4A4A4A` | Fist |
| Running Apparel | `#1A535C → #2D8B7A` | Runner |
| Gym & Fitness | `#0D0D0D → #1A3A1A` | Dumbbell |
| Basketball | `#0066FF → #3388FF` | Basketball |
| Martial Arts | `#334155 → #475569` | Belt |
| Accessories | `#2C3539 → #3D5A6E` | Bag |
| Compression | `#1C1C1C → #3A1A1A` | Waves |

### Other Infographic Types
- **Stats**: Animated counters with progress bars
- **Process**: 6-step CSS flow diagram
- **Certifications**: CSS badges with emoji
- **Export**: Region grid with country flags
- **Hero**: Unique CSS pattern per template

---

## 3. Standard Section Structure (12 sections)

| # | Section |
|---|---------|
| 1 | Header (logo, nav, CTA, mobile menu) |
| 2 | Hero (tagline, description, CSS infographic BG, CTAs) |
| 3 | Stats Bar (6 animated counters) |
| 4 | About (story, metrics) |
| 5 | Capabilities (10 services, machinery, capacity) |
| 6 | Products (10 cards with CSS infographics) |
| 7 | Process (6-step manufacturing flow) |
| 8 | Certifications (8 badges) |
| 9 | Export (region grid, countries, trade terms) |
| 10 | Testimonials (3 quotes) |
| 11 | Contact (info + form) |
| 12 | Footer |

---

## 4. All 50 Templates

| # | Name | Palette | Fonts | Signature |
|---|------|---------|-------|-----------|
| 01 | Champion's Heritage | Navy/Gold/Cream | Playfair+Inter+JetBrains | Gold rules |
| 02 | Dynasty Sport | Forest Green/Gold/Ivory | Cormorant+Source Sans | Crest badge |
| 03 | Varsity Legacy | Red/Navy/Cream/Gold | Bebas+Roboto | Varsity type |
| 04 | Old Guard | Charcoal/Burgundy/Copper | Libre Baskerville+Nunito | Copper dividers |
| 05 | Heritage Craft | Teal/Gold/Off-White | DM Serif+DM Sans | Seal badge |
| 06 | Tech Forge | Black/Neon Lime | Space Grotesk+DM Sans | Circuit traces |
| 07 | Aero Sport | Electric Blue/White | Outfit+Inter | Gradient transitions |
| 08 | Carbon | Matte Black/Red/Steel | Rajdhani+Inter | Carbon fiber |
| 09 | Kinetic | Silver/Orange/Dark | Rajdhani+Work Sans | Diagonal dividers |
| 10 | Velocity | Purple/Cyan/White | Syne+Inter | Motion blur |
| 11 | Steel Works | Gunmetal/Yellow | Oswald+Source Sans | Hazard stripes |
| 12 | Ironclad | Black/Rust/Steel Blue | Barlow Condensed+Inter | Metal texture |
| 13 | Factory Floor | Slate/Red/Off-White | Barlow+Inter | Grid pattern |
| 14 | Powerhouse | Charcoal/Blue/White | Montserrat+Open Sans | Power meter |
| 15 | Heavy Duty | Olive/Black/Tan | Teko+Roboto | Military type |
| 16 | Pure Form | White/Navy/Blue | Plus Jakarta+Sans+Inter | Navy line |
| 17 | Clarity Sport | Off-White/Teal | Geist+Inter | Teal accent |
| 18 | Essential Kit | Light Gray/Charcoal | Inter only | Type hierarchy |
| 19 | Precision | White/Steel Blue | IBM Plex Sans+Mono | Blueprint grid |
| 20 | Calm Authority | Cream/Forest Green | Lora+Work Sans | Organic blobs |
| 21 | Sprint | Black/Yellow | Bebas+Inter | Speed lines |
| 22 | Power Play | Navy/Red/White | Anton+Inter | Player cards |
| 23 | Endurance | Teal/Orange/Off-White | Sora+Inter | Progress bars |
| 24 | Peak Form | Charcoal/Lime | Outfit+Inter | Mountain peak |
| 25 | Apex Predator | Midnight/Gold | Playfair+Inter | Gold underlines |
| 26 | Global Reach | Ocean Blue/White | Poppins+Inter | Region grid |
| 27 | Export Elite | Navy/Gold/White | Plus Jakarta+Sans+Inter | Cert badges hero |
| 28 | World Sport | Teal/Orange/White | Nunito Sans+Inter | Container stripes |
| 29 | Cross Continental | Slate Blue/Crimson | Space Grotesk+Inter | Time zones |
| 30 | Trade Titan | Gray/Blue/White | Montserrat+Inter | Calculator |
| 31 | Disrupt Sport | Black/Neon Green | Syne+Inter | Glow hover |
| 32 | Fresh Kit | White/Coral/Pink | Nunito+Inter | Rounded corners |
| 33 | Direct Sport | Charcoal/Amber | Inter only | MOQ/pricing |
| 34 | Next Gen | Purple/Violet/White | Geist+Inter | Gradient mesh |
| 35 | Sport Lab | White/Electric Blue | Plus Jakarta+Sans+Inter | Lab dots |
| 36 | Sportswear Post | Cream/Red/Black | Lora+Inter | Newspaper masthead |
| 37 | Athletic Standard | White/Black/Red | DM Serif+Inter | Magazine spread |
| 38 | Pitch Report | Off-White/Navy | Merriweather+Open Sans | Score card |
| 39 | Sideline Stories | Beige/Green/Brown | Libre Baskerville+Nunito | Documentary |
| 40 | Match Day | Gray/Orange/Dark | Oswald+Roboto | Ticker bar |
| 41 | Night Game | Black/Neon Blue | Rajdhani+Inter | Floodlight |
| 42 | Shadow Play | Dark Gray/Red | Bebas+Inter | Spotlight |
| 43 | Midnight Kit | Black/Gold/Cream | Cormorant+Inter | Gold borders |
| 44 | Arena | Charcoal/Neon Green | Outfit+Inter | Field lines |
| 45 | Blackout | All Black/White | Inter Tight+Inter | Zero color |
| 46 | Handcrafted Sport | Brown/Cream | Crimson Pro+Work Sans | Wavy underlines |
| 47 | Stitch & Thread | Off-White/Rust | DM Serif+DM Sans | Stitch borders |
| 48 | Material World | Light Gray/Navy | Instrument Sans+Inter | Swatch cards |
| 49 | Quality Cut | White/Burgundy | Fraunces+Inter | Clip-path cuts |
| 50 | Made Right | Cream/Forest Green | Bitter+Inter | Ethical badge |
