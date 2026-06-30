const fs = require('fs');
const path = require('path');

const contentJSON = fs.readFileSync(path.join(__dirname, 'data', 'content.json'), 'utf8');

function heroSection(layout, heroText, accent, primary, lightBg) {
  const statBadge = `<div class="absolute -bottom-4 -left-4 px-6 py-3 rounded font-mono text-sm font-bold" style="background:${accent};color:${primary}"><span id="h-stat"></span><span class="block text-xs font-normal uppercase tracking-wide opacity-70" id="h-stat-l"></span></div>`;
  const trustBadges = `<div class="flex flex-wrap gap-6 opacity-60" style="color:${heroText}" id="hero-trust"></div>`;
  const ctaButtons = `<div class="flex flex-wrap gap-4 mb-8"><a href="#contact" class="px-8 py-3 font-semibold text-sm tracking-wide rounded" style="background:${accent};color:${primary}">Request a Quote</a><a href="#products" class="px-8 py-3 font-semibold text-sm tracking-wide rounded border" style="border-color:${accent}88;color:${accent}">View Products</a></div>`;
  const logoBox = `<div class="anim anim-d2 relative"><div class="rounded-lg p-8 flex items-center justify-center" style="background:${primary}22;border:1px solid ${accent}33;min-height:280px"><div class="text-center"><div class="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style="background:${accent}22"><svg class="w-12 h-12" style="color:${accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><p class="font-display text-3xl font-bold" style="color:${heroText}">APEX</p><p class="font-mono text-xs tracking-widest uppercase opacity-60" style="color:${heroText}">Sportswear Industries</p></div></div>${statBadge}</div>`;
  const textBlock = `<div class="anim"><p class="font-mono text-xs tracking-widest uppercase mb-4 opacity-60" style="color:${heroText}">Est. <span id="h-yr"></span> — Sialkot, Pakistan</p><h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color:${heroText}" id="h-tag"></h1><p class="text-lg leading-relaxed mb-8 max-w-lg opacity-70" style="color:${heroText}" id="h-desc"></p>${ctaButtons}${trustBadges}</div>`;

  if (layout === 'centered') {
    return `<section class="hero-bg pt-28 pb-20 md:pt-36 md:pb-28"><div class="max-w-4xl mx-auto px-6 text-center"><p class="font-mono text-xs tracking-widest uppercase mb-4 opacity-60" style="color:${heroText}">Est. <span id="h-yr"></span> — Sialkot, Pakistan</p><h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color:${heroText}" id="h-tag"></h1><p class="text-lg leading-relaxed mb-8 max-w-2xl mx-auto opacity-70" style="color:${heroText}" id="h-desc"></p><div class="flex flex-wrap gap-4 justify-center mb-8"><a href="#contact" class="px-8 py-3 font-semibold text-sm tracking-wide rounded" style="background:${accent};color:${primary}">Request a Quote</a><a href="#products" class="px-8 py-3 font-semibold text-sm tracking-wide rounded border" style="border-color:${accent}88;color:${accent}">View Products</a></div><div class="flex flex-wrap gap-6 justify-center opacity-60" style="color:${heroText}" id="hero-trust"></div></div></section>`;
  }
  if (layout === 'split') {
    return `<section class="hero-bg pt-28 pb-20 md:pt-36 md:pb-28"><div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"><div class="anim"><p class="font-mono text-xs tracking-widest uppercase mb-4 opacity-60" style="color:${heroText}">Est. <span id="h-yr"></span> — Sialkot, Pakistan</p><h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color:${heroText}" id="h-tag"></h1><p class="text-lg leading-relaxed mb-8 max-w-lg opacity-70" style="color:${heroText}" id="h-desc"></p>${ctaButtons}${trustBadges}</div><div class="anim anim-d2 relative"><div class="rounded-lg p-8 flex items-center justify-center" style="background:${primary}22;border:1px solid ${accent}33;min-height:280px"><div class="text-center"><div class="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style="background:${accent}22"><svg class="w-12 h-12" style="color:${accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><p class="font-display text-3xl font-bold" style="color:${heroText}">APEX</p><p class="font-mono text-xs tracking-widest uppercase opacity-60" style="color:${heroText}">Sportswear Industries</p></div></div>${statBadge}</div></div></section>`;
  }
  if (layout === 'cards-first') {
    return `<section class="hero-bg pt-28 pb-20 md:pt-36 md:pb-28"><div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"><div class="anim anim-d2 order-2 md:order-1 relative"><div class="rounded-lg p-8 flex items-center justify-center" style="background:${primary}22;border:1px solid ${accent}33;min-height:280px"><div class="text-center"><div class="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style="background:${accent}22"><svg class="w-12 h-12" style="color:${accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><p class="font-display text-3xl font-bold" style="color:${heroText}">APEX</p><p class="font-mono text-xs tracking-widest uppercase opacity-60" style="color:${heroText}">Sportswear Industries</p></div></div>${statBadge}</div><div class="anim order-1 md:order-2"><p class="font-mono text-xs tracking-widest uppercase mb-4 opacity-60" style="color:${heroText}">Est. <span id="h-yr"></span> — Sialkot, Pakistan</p><h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color:${heroText}" id="h-tag"></h1><p class="text-lg leading-relaxed mb-8 max-w-lg opacity-70" style="color:${heroText}" id="h-desc"></p>${ctaButtons}${trustBadges}</div></div></section>`;
  }
  if (layout === 'sidebar') {
    return `<section class="hero-bg pt-28 pb-20 md:pt-36 md:pb-28"><div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center"><div class="md:col-span-2 anim"><p class="font-mono text-xs tracking-widest uppercase mb-4 opacity-60" style="color:${heroText}">Est. <span id="h-yr"></span> — Sialkot, Pakistan</p><h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color:${heroText}" id="h-tag"></h1><p class="text-lg leading-relaxed mb-8 max-w-lg opacity-70" style="color:${heroText}" id="h-desc"></p>${ctaButtons}${trustBadges}</div><div class="anim anim-d2 relative"><div class="rounded-lg p-8 flex items-center justify-center" style="background:${primary}22;border:1px solid ${accent}33;min-height:280px"><div class="text-center"><div class="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style="background:${accent}22"><svg class="w-12 h-12" style="color:${accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><p class="font-display text-3xl font-bold" style="color:${heroText}">APEX</p><p class="font-mono text-xs tracking-widest uppercase opacity-60" style="color:${heroText}">Sportswear Industries</p></div></div>${statBadge}</div></div></section>`;
  }
  return `<section class="hero-bg pt-28 pb-20 md:pt-36 md:pb-28"><div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">${textBlock}${logoBox}</div></section>`;
}

const LAYOUTS = ['standard','centered','split','cards-first','sidebar'];

const TEMPLATES = [
  { id:'01', dir:'champion-heritage', name:"Champion's Heritage", colors:{primary:'#0A1628',accent:'#C5993A','accent-light':'#D4AC5A',bg:'#FAF7F2','bg-alt':'#F0EBE3',text:'#3D4F5F'}, fonts:['"Playfair Display"','"Inter"','"JetBrains Mono"'], layout:'standard' },
  { id:'02', dir:'dynasty-sport', name:'Dynasty Sport', colors:{primary:'#1B4332',accent:'#B8860B','accent-light':'#D4A017',bg:'#FFFFF0','bg-alt':'#8FBC8F22',text:'#2C2C2C'}, fonts:['"Cormorant Garamond"','"Source Sans 3"','"Inter"'], layout:'centered' },
  { id:'03', dir:'varsity-legacy', name:'Varsity Legacy', colors:{primary:'#1A1A2E',accent:'#8B0000','accent-light':'#DAA520',bg:'#F5F0E8','bg-alt':'#E8E8E8',text:'#2C2C2C'}, fonts:['"Bebas Neue"','"Roboto"','"Roboto Condensed"'], layout:'split' },
  { id:'04', dir:'old-guard', name:'Old Guard', colors:{primary:'#2D2D2D',accent:'#B87333','accent-light':'#6B1D1D',bg:'#F4EDE4','bg-alt':'#3E2723',text:'#3E2723'}, fonts:['"Libre Baskerville"','"Nunito Sans"','"Inter"'], layout:'cards-first' },
  { id:'05', dir:'heritage-craft', name:'Heritage Craft', colors:{primary:'#1A535C',accent:'#D4A843','accent-light':'#C2B280',bg:'#FAF9F6','bg-alt':'#2B2B2B',text:'#2B2B2B'}, fonts:['"DM Serif Display"','"DM Sans"','"Inter"'], layout:'sidebar' },
  { id:'06', dir:'tech-forge', name:'Tech Forge', colors:{primary:'#0D0D0D',accent:'#AAFF00','accent-light':'#1A1A1A',bg:'#E5E5E5','bg-alt':'#1A1A1A',text:'#1A1A1A'}, fonts:['"Space Grotesk"','"DM Sans"','"Space Mono"'], layout:'standard' },
  { id:'07', dir:'aero-sport', name:'Aero Sport', colors:{primary:'#1C1C1E',accent:'#0066FF','accent-light':'#E8F4FD',bg:'#F0F2F5','bg-alt':'#FFFFFF',text:'#1C1C1E'}, fonts:['"Outfit"','"Inter"','"JetBrains Mono"'], layout:'centered' },
  { id:'08', dir:'carbon', name:'Carbon', colors:{primary:'#1C1C1C',accent:'#E63946','accent-light':'#8D99AE',bg:'#FFFFFF','bg-alt':'#333333',text:'#333333'}, fonts:['"Rajdhani"','"Inter"','"Roboto Mono"'], layout:'split' },
  { id:'09', dir:'kinetic', name:'Kinetic', colors:{primary:'#1A1A1A',accent:'#FF6B35','accent-light':'#C0C0C0',bg:'#FFFFFF','bg-alt':'#9E9E9E',text:'#1A1A1A'}, fonts:['"Rajdhani"','"Work Sans"','"Inter"'], layout:'cards-first' },
  { id:'10', dir:'velocity', name:'Velocity', colors:{primary:'#190033',accent:'#00E5FF','accent-light':'#2D1B4E',bg:'#F5F5F5','bg-alt':'#2D1B4E',text:'#FFFFFF'}, fonts:['"Syne"','"Inter"','"JetBrains Mono"'], layout:'sidebar' },
  { id:'11', dir:'steel-works', name:'Steel Works', colors:{primary:'#2C3539',accent:'#FFD700','accent-light':'#1A1A1A',bg:'#E0E0E0','bg-alt':'#1A1A1A',text:'#1A1A1A'}, fonts:['"Oswald"','"Source Sans 3"','"Inter"'], layout:'standard' },
  { id:'12', dir:'ironclad', name:'Ironclad', colors:{primary:'#1B1B1B',accent:'#B7410E','accent-light':'#4682B4',bg:'#F5F0E8','bg-alt':'#6B6B6B',text:'#1B1B1B'}, fonts:['"Barlow Condensed"','"Inter"','"Roboto Mono"'], layout:'centered' },
  { id:'13', dir:'factory-floor', name:'Factory Floor', colors:{primary:'#0F172A',accent:'#DC2626','accent-light':'#78716C',bg:'#F8FAFC','bg-alt':'#334155',text:'#334155'}, fonts:['"Barlow"','"Inter"','"JetBrains Mono"'], layout:'split' },
  { id:'14', dir:'powerhouse', name:'Powerhouse', colors:{primary:'#212529',accent:'#0D6EFD','accent-light':'#6C757D',bg:'#F8F9FA','bg-alt':'#FFFFFF',text:'#212529'}, fonts:['"Montserrat"','"Open Sans"','"Inter"'], layout:'cards-first' },
  { id:'15', dir:'heavy-duty', name:'Heavy Duty', colors:{primary:'#000000',accent:'#3D4A2A','accent-light':'#D4C5A9',bg:'#FFFFFF','bg-alt':'#2C3E1F',text:'#000000'}, fonts:['"Teko"','"Roboto"','"Inter"'], layout:'sidebar' },
  { id:'16', dir:'pure-form', name:'Pure Form', colors:{primary:'#1E3A5F',accent:'#3B82F6','accent-light':'#6B7280',bg:'#F7F8FA','bg-alt':'#FFFFFF',text:'#1E3A5F'}, fonts:['"Plus Jakarta Sans"','"Inter"','"JetBrains Mono"'], layout:'standard' },
  { id:'17', dir:'clarity-sport', name:'Clarity Sport', colors:{primary:'#1C1917',accent:'#0D9488','accent-light':'#78716C',bg:'#FAFAF9','bg-alt':'#CCFBF1',text:'#1C1917'}, fonts:['"Geist"','"Inter"','"JetBrains Mono"'], layout:'centered' },
  { id:'18', dir:'essential-kit', name:'Essential Kit', colors:{primary:'#111827',accent:'#6366F1','accent-light':'#9CA3AF',bg:'#F3F4F6','bg-alt':'#FFFFFF',text:'#111827'}, fonts:['"Inter"','"Inter"','"JetBrains Mono"'], layout:'split' },
  { id:'19', dir:'precision', name:'Precision', colors:{primary:'#0F172A',accent:'#2563EB','accent-light':'#475569',bg:'#F1F5F9','bg-alt':'#FFFFFF',text:'#0F172A'}, fonts:['"IBM Plex Sans"','"IBM Plex Mono"','"Inter"'], layout:'cards-first' },
  { id:'20', dir:'calm-authority', name:'Calm Authority', colors:{primary:'#1C1917',accent:'#166534','accent-light':'#57534E',bg:'#FEFCE8','bg-alt':'#DCFCE7',text:'#1C1917'}, fonts:['"Lora"','"Work Sans"','"Inter"'], layout:'sidebar' },
  { id:'21', dir:'sprint', name:'Sprint', colors:{primary:'#000000',accent:'#FFE500','accent-light':'#404040',bg:'#FFFFFF','bg-alt':'#1A1A1A',text:'#1A1A1A'}, fonts:['"Bebas Neue"','"Inter"','"JetBrains Mono"'], layout:'standard' },
  { id:'22', dir:'power-play', name:'Power Play', colors:{primary:'#0A1F44',accent:'#C41E3A','accent-light':'#64748B',bg:'#FFFFFF','bg-alt':'#E8EEF6',text:'#0A1F44'}, fonts:['"Anton"','"Inter"','"Roboto Mono"'], layout:'centered' },
  { id:'23', dir:'endurance', name:'Endurance', colors:{primary:'#1C1917',accent:'#EA580C','accent-light':'#78716C',bg:'#FFFBEB','bg-alt':'#134E4A',text:'#1C1917'}, fonts:['"Sora"','"Inter"','"JetBrains Mono"'], layout:'split' },
  { id:'24', dir:'peak-form', name:'Peak Form', colors:{primary:'#18181B',accent:'#84CC16','accent-light':'#27272A',bg:'#F4F4F5','bg-alt':'#27272A',text:'#18181B'}, fonts:['"Outfit"','"Inter"','"JetBrains Mono"'], layout:'cards-first' },
  { id:'25', dir:'apex-predator', name:'Apex Predator', colors:{primary:'#0C0A09',accent:'#EAB308','accent-light':'#1C1917',bg:'#FEF9C3','bg-alt':'#0C0A09',text:'#1C1917'}, fonts:['"Playfair Display"','"Inter"','"JetBrains Mono"'], layout:'sidebar' },
  { id:'26', dir:'global-reach', name:'Global Reach', colors:{primary:'#2C3E50',accent:'#0047AB','accent-light':'#BDC3C7',bg:'#E6F0FF','bg-alt':'#FFFFFF',text:'#2C3E50'}, fonts:['"Poppins"','"Inter"','"JetBrains Mono"'], layout:'standard' },
  { id:'27', dir:'export-elite', name:'Export Elite', colors:{primary:'#0F172A',accent:'#F59E0B','accent-light':'#1E293B',bg:'#F8FAFC','bg-alt':'#FFFFFF',text:'#0F172A'}, fonts:['"Plus Jakarta Sans"','"Inter"','"JetBrains Mono"'], layout:'centered' },
  { id:'28', dir:'world-sport', name:'World Sport', colors:{primary:'#164E63',accent:'#0891B2','accent-light':'#F97316',bg:'#ECFEFF','bg-alt':'#FFFFFF',text:'#164E63'}, fonts:['"Nunito Sans"','"Inter"','"JetBrains Mono"'], layout:'split' },
  { id:'29', dir:'cross-continental', name:'Cross Continental', colors:{primary:'#0F172A',accent:'#DC2626','accent-light':'#334155',bg:'#F1F5F9','bg-alt':'#E2E8F0',text:'#0F172A'}, fonts:['"Space Grotesk"','"Inter"','"JetBrains Mono"'], layout:'cards-first' },
  { id:'30', dir:'trade-titan', name:'Trade Titan', colors:{primary:'#111827',accent:'#2563EB','accent-light':'#374151',bg:'#F9FAFB','bg-alt':'#FFFFFF',text:'#111827'}, fonts:['"Montserrat"','"Inter"','"JetBrains Mono"'], layout:'sidebar' },
  { id:'31', dir:'disrupt-sport', name:'Disrupt Sport', colors:{primary:'#0A0A0A',accent:'#39FF14','accent-light':'#525252',bg:'#FFFFFF','bg-alt':'#0A0A0A',text:'#0A0A0A'}, fonts:['"Syne"','"Inter"','"Space Mono"'], layout:'standard' },
  { id:'32', dir:'fresh-kit', name:'Fresh Kit', colors:{primary:'#2D3436',accent:'#FF6B6B','accent-light':'#636E72',bg:'#FFFFFF','bg-alt':'#FFF5F5',text:'#2D3436'}, fonts:['"Nunito"','"Inter"','"JetBrains Mono"'], layout:'centered' },
  { id:'33', dir:'direct-sport', name:'Direct Sport', colors:{primary:'#111827',accent:'#F59E0B','accent-light':'#212529',bg:'#F8F9FA','bg-alt':'#FFFFFF',text:'#111827'}, fonts:['"Inter"','"Inter"','"JetBrains Mono"'], layout:'split' },
  { id:'34', dir:'next-gen', name:'Next Gen', colors:{primary:'#0F0A1F',accent:'#7C3AED','accent-light':'#1E1B4B',bg:'#F5F3FF','bg-alt':'#FFFFFF',text:'#0F0A1F'}, fonts:['"Geist"','"Inter"','"JetBrains Mono"'], layout:'cards-first' },
  { id:'35', dir:'sport-lab', name:'Sport Lab', colors:{primary:'#1E293B',accent:'#2563EB','accent-light':'#64748B',bg:'#EFF6FF','bg-alt':'#FFFFFF',text:'#1E293B'}, fonts:['"Plus Jakarta Sans"','"Inter"','"JetBrains Mono"'], layout:'sidebar' },
  { id:'36', dir:'sportswear-post', name:'Sportswear Post', colors:{primary:'#1A1A1A',accent:'#8B0000','accent-light':'#6B6255',bg:'#FFF8E7','bg-alt':'#FAF0D7',text:'#1A1A1A'}, fonts:['"Lora"','"Inter"','"Roboto Mono"'], layout:'standard' },
  { id:'37', dir:'athletic-standard', name:'Athletic Standard', colors:{primary:'#000000',accent:'#E53935','accent-light':'#9E9E9E',bg:'#FFFFFF','bg-alt':'#F5F5F5',text:'#000000'}, fonts:['"DM Serif Display"','"Inter"','"JetBrains Mono"'], layout:'centered' },
  { id:'38', dir:'pitch-report', name:'Pitch Report', colors:{primary:'#212121',accent:'#1A237E','accent-light':'#757575',bg:'#F5F5F0','bg-alt':'#E8EAF6',text:'#212121'}, fonts:['"Merriweather"','"Open Sans"','"Roboto Mono"'], layout:'split' },
  { id:'39', dir:'sideline-stories', name:'Sideline Stories', colors:{primary:'#3E2723',accent:'#2E7D32','accent-light':'#5D4037',bg:'#FAFAF5','bg-alt':'#F5F0E1',text:'#3E2723'}, fonts:['"Libre Baskerville"','"Nunito Sans"','"Inter"'], layout:'cards-first' },
  { id:'40', dir:'match-day', name:'Match Day', colors:{primary:'#212121',accent:'#FF6D00','accent-light':'#9E9E9E',bg:'#F5F5F5','bg-alt':'#FFFFFF',text:'#212121'}, fonts:['"Oswald"','"Roboto"','"Inter"'], layout:'sidebar' },
  { id:'41', dir:'night-game', name:'Night Game', colors:{primary:'#0A0A0A',accent:'#00BFFF','accent-light':'#404040',bg:'#FFFFFF','bg-alt':'#000000',text:'#FFFFFF'}, fonts:['"Rajdhani"','"Inter"','"JetBrains Mono"'], layout:'standard' },
  { id:'42', dir:'shadow-play', name:'Shadow Play', colors:{primary:'#1A1A1A',accent:'#B71C1C','accent-light':'#424242',bg:'#E0E0E0','bg-alt':'#FFFFFF',text:'#1A1A1A'}, fonts:['"Bebas Neue"','"Inter"','"Roboto Mono"'], layout:'centered' },
  { id:'43', dir:'midnight-kit', name:'Midnight Kit', colors:{primary:'#121212',accent:'#FFD700','accent-light':'#616161',bg:'#FFF8E1','bg-alt':'#1E1E1E',text:'#1E1E1E'}, fonts:['"Cormorant Garamond"','"Inter"','"JetBrains Mono"'], layout:'split' },
  { id:'44', dir:'arena', name:'Arena', colors:{primary:'#16213E',accent:'#00FF88','accent-light':'#1A1A2E',bg:'#F0F0F0','bg-alt':'#16213E',text:'#16213E'}, fonts:['"Outfit"','"Inter"','"JetBrains Mono"'], layout:'cards-first' },
  { id:'45', dir:'blackout', name:'Blackout', colors:{primary:'#000000',accent:'#737373','accent-light':'#E5E5E5',bg:'#F5F5F5','bg-alt':'#FFFFFF',text:'#000000'}, fonts:['"Inter Tight"','"Inter"','"JetBrains Mono"'], layout:'sidebar' },
  { id:'46', dir:'handcrafted-sport', name:'Handcrafted Sport', colors:{primary:'#3E2723',accent:'#8D6E63','accent-light':'#D7CCC8',bg:'#FFF8E1','bg-alt':'#FFFFFF',text:'#3E2723'}, fonts:['"Crimson Pro"','"Work Sans"','"Inter"'], layout:'standard' },
  { id:'47', dir:'stitch-thread', name:'Stitch & Thread', colors:{primary:'#292524',accent:'#C2452D','accent-light':'#78716C',bg:'#FAF9F6','bg-alt':'#F5F0EB',text:'#292524'}, fonts:['"DM Serif Display"','"DM Sans"','"Inter"'], layout:'centered' },
  { id:'48', dir:'material-world', name:'Material World', colors:{primary:'#111827',accent:'#3B82F6','accent-light':'#1E3A5F',bg:'#F3F4F6','bg-alt':'#FFFFFF',text:'#111827'}, fonts:['"Instrument Sans"','"Inter"','"JetBrains Mono"'], layout:'split' },
  { id:'49', dir:'quality-cut', name:'Quality Cut', colors:{primary:'#1C1917',accent:'#7F1D1D','accent-light':'#78716C',bg:'#FEF2F2','bg-alt':'#FFFFFF',text:'#1C1917'}, fonts:['"Fraunces"','"Inter"','"JetBrains Mono"'], layout:'cards-first' },
  { id:'50', dir:'made-right', name:'Made Right', colors:{primary:'#1C1917',accent:'#166534','accent-light':'#57534E',bg:'#FEFCE8','bg-alt':'#DCFCE7',text:'#1C1917'}, fonts:['"Bitter"','"Inter"','"JetBrains Mono"'], layout:'sidebar' }
];

function generateHeroPattern(type, colors) {
  const p = colors.primary, a = colors.accent, bg = colors.bg;
  const isDark = parseInt(p.slice(1),16) < 0x808080;
  return `background:${isDark ? p : bg}`;
}

const PRODUCT_ICONS = {
  'football-kits': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M32 4l8 16h16l-12 10 4 16-16-8-16 8 4-16L8 20h16z"/></svg>',
  'cricket-wear': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="28" y="8" width="8" height="40" rx="2"/><ellipse cx="32" cy="54" rx="10" ry="6"/></svg>',
  'boxing-gear': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 20c0-8 8-16 16-16s16 8 16 16v8c0 4-4 8-8 8H24c-4 0-8-4-8-8v-8z"/><path d="M20 36v12c0 4 4 8 8 8h8c4 0 8-4 8-8V36"/></svg>',
  'mma-fightwear': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="20" r="12"/><path d="M20 32l-8 20h8l4-12 4 12h8l-8-20"/></svg>',
  'running-apparel': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="36" cy="12" r="6"/><path d="M24 24l8 4 8-8 8 12-16 8-8-4-8 12"/></svg>',
  'gym-fitness': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="24" width="8" height="16" rx="2"/><rect x="48" y="24" width="8" height="16" rx="2"/><rect x="16" y="28" width="32" height="8" rx="1"/><rect x="4" y="28" width="4" height="8" rx="1"/><rect x="56" y="28" width="4" height="8" rx="1"/></svg>',
  'basketball-uniforms': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M4 32h56M32 4c-8 8-8 20 0 28s8 20 0 28"/><path d="M8 16c10 8 10 24 0 32M56 16c-10 8-10 24 0 32"/></svg>',
  'martial-arts': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12h24v8l-4 8 4 8v8H20v-8l4-8-4-8z"/><path d="M16 28h-8M56 28h-8"/></svg>',
  'sports-accessories': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="16" width="40" height="32" rx="4"/><path d="M12 24h40M24 16v-4M40 16v-4"/></svg>',
  'compression-wear': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8h16v48H24z"/><path d="M20 16h24M20 24h24M20 32h24M20 40h24"/></svg>'
};
const PRODUCT_ICONS_JSON = JSON.stringify(PRODUCT_ICONS);

function generateHTML(t) {
  const c = t.colors;
  const fontLink = t.fonts.map(f => `${f.replace(/"/g,'').replace(/ /g,'+')}:wght@400;500;600;700`).join('&family=');
  const heroStyle = generateHeroPattern(t.heroPattern, c);
  const lightBg = c.bg;
  const accent = c.accent;
  const primary = c.primary;
  const isDarkHero = parseInt(primary.slice(1),16) < 0x808080;
  const heroText = isDarkHero ? '#FFFFFF' : primary;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Apex Sportswear — ${t.name}</title>
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config={theme:{extend:{colors:{p:'${primary}','p-light':'${accent}','bg':'${lightBg}'},fontFamily:{display:['${t.fonts[0]}','serif'],body:['${t.fonts[1]}','sans-serif'],mono:['${t.fonts[2]||t.fonts[1]}','monospace']}}}}
</script>
<link href="https://fonts.googleapis.com/css2?family=${fontLink}&display=swap" rel="stylesheet">
<style>
.hero-bg{${heroStyle}}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.anim{animation:fadeUp .5s ease-out forwards}.anim-d1{animation-delay:.1s;opacity:0}.anim-d2{animation-delay:.2s;opacity:0}
@media(prefers-reduced-motion:reduce){.anim,.anim-d1,.anim-d2{animation:none;opacity:1;transform:none}}
</style>
</head>
<body class="font-body" style="background:${lightBg};color:${primary}">

<header class="fixed top-0 w-full z-50" style="background:${primary}ee;backdrop-filter:blur(8px)">
<div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a href="#" class="font-display text-xl font-bold" style="color:${heroText}">APEX SPORT</a>
<nav class="hidden md:flex items-center gap-8">
<a href="#about" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${heroText}">About</a>
<a href="#products" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${heroText}">Products</a>
<a href="#materials" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${heroText}">Materials</a>
<a href="#process" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${heroText}">Process</a>
<a href="#export" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${heroText}">Export</a>
<a href="#faq" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${heroText}">FAQ</a>
<a href="#contact" class="px-5 py-2 text-sm font-semibold rounded" style="background:${accent};color:${primary}">Get Quote</a>
</nav>
<button id="mob-btn" class="md:hidden" style="color:${heroText}"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
</div>
<div id="mob-menu" class="hidden md:hidden px-6 py-4" style="background:${primary}">
<a href="#about" class="block py-2 text-sm opacity-70" style="color:${heroText}">About</a>
<a href="#products" class="block py-2 text-sm opacity-70" style="color:${heroText}">Products</a>
<a href="#materials" class="block py-2 text-sm opacity-70" style="color:${heroText}">Materials</a>
<a href="#process" class="block py-2 text-sm opacity-70" style="color:${heroText}">Process</a>
<a href="#export" class="block py-2 text-sm opacity-70" style="color:${heroText}">Export</a>
<a href="#faq" class="block py-2 text-sm opacity-70" style="color:${heroText}">FAQ</a>
<a href="#contact" class="block mt-2 px-5 py-2 text-sm font-semibold text-center rounded" style="background:${accent};color:${primary}">Get Quote</a>
</div>
</header>

${heroSection(t.layout, heroText, accent, primary, lightBg)}

${t.layout==='centered'?`<section class="py-12" style="background:${primary}"><div class="max-w-5xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6 gap-6" id="stats"></div></section>`:t.layout==='sidebar'?`<section class="py-8" style="background:${primary}"><div class="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8" id="stats"></div></section>`:`<section class="py-12" style="background:${primary}"><div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" id="stats"></div></section>`}

<section id="about" class="py-20">
<div class="max-w-7xl mx-auto px-6">
<div class="grid md:grid-cols-2 gap-16 items-start mb-16">
<div>
<p class="font-mono text-xs tracking-widest uppercase mb-3 opacity-60" style="color:${accent}">Our Story</p>
<h2 class="font-display text-3xl md:text-4xl font-bold mb-6">Manufacturing Excellence Since <span id="a-yr"></span></h2>
<p class="leading-relaxed mb-6 opacity-70" id="a-desc"></p>
<div id="a-mission" class="mb-6"></div>
<div class="grid grid-cols-2 gap-4" id="a-cards"></div>
</div>
<div>
<div class="rounded-lg p-6 mb-6" style="background:${accent}11;border:1px solid ${accent}22" id="a-values"></div>
<div class="rounded-lg p-6" style="background:${primary};color:${heroText}" id="a-vision"></div>
</div>
</div>
<div id="a-timeline"></div>
</div>
</section>

<section class="py-20" style="background:${primary}11">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">What We Do</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-4">Manufacturing Capabilities</h2>
<p class="text-center max-w-2xl mx-auto mb-12 opacity-70" id="cap-desc"></p>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12" id="svc-grid"></div>
<div class="p-8 rounded-lg mb-8" style="background:${primary}" id="cap-machinery"></div>
<div class="grid md:grid-cols-3 gap-6" id="cap-high"></div>
</div>
</section>

<section id="products" class="py-20">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Product Range</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-4">Engineered Sportswear</h2>
<p class="text-center max-w-2xl mx-auto mb-12 opacity-70">Ten product categories, each customizable to your exact specifications. From fabric to finish, every detail is in your control.</p>
<div id="p-grid" class="space-y-12"></div>
</div>
</section>

<section id="materials" class="py-20" style="background:${primary}11">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Fabric Guide</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12">Premium Materials</h2>
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="materials-grid"></div>
</div>
</section>

<section id="process" class="py-20">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">How We Work</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12">Manufacturing Process</h2>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="process-grid"></div>
</div>
</section>

<section class="py-20" style="background:${primary}">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Why Apex</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12" style="color:${heroText}">Why Choose Us</h2>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="why-grid"></div>
</div>
</section>

<section id="certs" class="py-20" style="background:${lightBg}">
<div class="max-w-7xl mx-auto px-6 text-center">
<p class="font-mono text-xs tracking-widest uppercase mb-3 opacity-60" style="color:${accent}">Quality Assurance</p>
<h2 class="font-display text-3xl md:text-4xl font-bold mb-12">Internationally Certified</h2>
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4" id="certs-grid"></div>
</div>
</section>

<section id="export" class="py-20">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Global Reach</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12">Export Markets</h2>
<div class="grid md:grid-cols-2 gap-8" id="export-grid"></div>
</div>
</section>

<section class="py-20" style="background:${primary}11">
<div class="max-w-7xl mx-auto px-6 text-center">
<p class="font-mono text-xs tracking-widest uppercase mb-3 opacity-60" style="color:${accent}">Who We Serve</p>
<h2 class="font-display text-3xl md:text-4xl font-bold mb-12">Industries</h2>
<div class="flex flex-wrap justify-center gap-3" id="industries"></div>
</div>
</section>

<section class="py-20" style="background:${primary}">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Client Trust</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12" style="color:${heroText}">What Our Partners Say</h2>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="testis"></div>
</div>
</section>

<section id="faq" class="py-20" style="background:${lightBg}">
<div class="max-w-3xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Common Questions</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
<div class="space-y-4" id="faq-grid"></div>
</div>
</section>

<section id="contact" class="py-20">
<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<div>
<p class="font-mono text-xs tracking-widest uppercase mb-3 opacity-60" style="color:${accent}">Get In Touch</p>
<h2 class="font-display text-3xl md:text-4xl font-bold mb-6">Start Your Order</h2>
<p class="opacity-70 mb-8">Ready to manufacture custom sportswear? Contact us for a quote, sample, or factory tour.</p>
<div class="space-y-3 mb-8" id="c-info"></div>
<div class="p-6 rounded-lg" style="background:${accent}11;border:1px solid ${accent}22" id="c-response"></div>
</div>
<div class="p-8 rounded-lg" style="background:${primary}">
<h3 class="font-display text-xl font-bold mb-6" style="color:${heroText}">Request a Quote</h3>
<form class="space-y-4">
<input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${heroText}" required>
<input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${heroText}" required>
<input type="text" placeholder="Company Name" class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${heroText}">
<input type="text" placeholder="Country" class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${heroText}">
<select class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${heroText}">
<option value="">Select Product Category</option>
<option>Football Kits</option><option>Cricket Apparel</option><option>Boxing Equipment</option>
<option>MMA & Fightwear</option><option>Running Apparel</option><option>Gym & Fitness Wear</option>
<option>Basketball Uniforms</option><option>Martial Arts Uniforms</option><option>Sports Accessories</option>
<option>Compression Wear</option><option>Multiple Categories</option>
</select>
<input type="number" placeholder="Estimated Quantity (pieces)" class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${heroText}">
<textarea placeholder="Tell us about your requirements: design preferences, fabric choice, colors, timeline..." rows="5" class="w-full px-4 py-3 rounded text-sm border focus:outline-none resize-none" style="background:${primary}55;border-color:${accent}44;color:${heroText}"></textarea>
<button type="submit" class="w-full py-3 font-semibold text-sm tracking-wide rounded" style="background:${accent};color:${primary}">Send Inquiry</button>
</form>
</div>
</div>
</section>

<footer class="py-12" style="background:${primary}">
<div class="max-w-7xl mx-auto px-6">
<div class="grid md:grid-cols-5 gap-8 mb-8">
<div class="md:col-span-2"><p class="font-display text-xl font-bold mb-3" style="color:${heroText}">APEX SPORT</p><p class="text-sm opacity-70 leading-relaxed mb-4" style="color:${heroText}">Premium sportswear manufacturer from Sialkot, Pakistan. Serving global brands since <span id="f-yr"></span>. OEM/ODM with low MOQ and fast turnaround.</p><div class="flex gap-3" id="f-social"></div></div>
<div><h4 class="font-semibold text-sm uppercase tracking-wide mb-4" style="color:${accent}">Products</h4><ul class="space-y-2 text-sm opacity-50" style="color:${heroText}" id="f-prods"></ul></div>
<div><h4 class="font-semibold text-sm uppercase tracking-wide mb-4" style="color:${accent}">Company</h4><ul class="space-y-2 text-sm opacity-50" style="color:${heroText}"><li><a href="#about" class="hover:opacity-100 transition-opacity">About Us</a></li><li><a href="#materials" class="hover:opacity-100 transition-opacity">Materials</a></li><li><a href="#process" class="hover:opacity-100 transition-opacity">Process</a></li><li><a href="#certs" class="hover:opacity-100 transition-opacity">Certifications</a></li><li><a href="#export" class="hover:opacity-100 transition-opacity">Export Markets</a></li></ul></div>
<div><h4 class="font-semibold text-sm uppercase tracking-wide mb-4" style="color:${accent}">Contact</h4><ul class="space-y-2 text-sm opacity-50" style="color:${heroText}" id="f-contact"></ul></div>
</div>
<div class="pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style="border-top:1px solid ${accent}22">
<p class="text-xs opacity-60" style="color:${heroText}">&copy; <span id="f-copy"></span> Apex Sportswear Industries. All rights reserved.</p>
<p class="text-xs opacity-50" style="color:${heroText}">OEM Sportswear Manufacturer · Sialkot, Pakistan · Export Worldwide</p>
</div>
</div>
</footer>

<script>
const PRODUCT_ICONS = ${PRODUCT_ICONS_JSON};
const PROCESS_STEPS = [
  {name:'Fabric Sourcing',desc:'Premium fabrics sourced from certified mills worldwide',icon:'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'},
  {name:'Pattern & Cutting',desc:'Precision CAD patterns with automated Gerber cutting',icon:'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L4.939 4.939m7.061 7.061l-2.879-2.879M12 12l2.879-2.879'},
  {name:'Sewing & Assembly',desc:'Skilled craftsmen with Juki industrial machines',icon:'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'},
  {name:'Print & Embroidery',desc:'Sublimation, screen print, and multi-needle embroidery',icon:'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'},
  {name:'Quality Control',desc:'Four-stage AQL 2.5 inspection at every step',icon:'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'},
  {name:'Packaging & Export',desc:'Custom packaging with full export documentation',icon:'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'}
];

const d = ${contentJSON};
const c=d.company,cap=d.capabilities,exp=d.exportInfo;
  const heroColor='${heroText}';
  const accent='${accent}';
  const primary='${primary}';
  const lightBg='${lightBg}';

  document.querySelector('#h-yr').textContent=c.founded;
  document.querySelector('#h-tag').textContent=c.tagline;
  document.querySelector('#h-desc').textContent=c.description;
  document.querySelector('#h-stat').textContent=d.stats[0].value;
  document.querySelector('#h-stat-l').textContent=d.stats[0].label;
  document.querySelector('#hero-trust').innerHTML='<span class="flex items-center gap-1 text-xs"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>ISO 9001 Certified</span><span class="flex items-center gap-1 text-xs"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>Oeko-Tex Certified</span><span class="flex items-center gap-1 text-xs"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>35+ Countries</span>';

  document.querySelector('#stats').innerHTML=d.stats.map(s=>'<div class="text-center"><div class="font-mono text-2xl md:text-3xl font-bold" style="color:'+heroColor+'">'+s.value+'</div><div class="text-xs uppercase tracking-wide mt-1 opacity-50" style="color:'+heroColor+'">'+s.label+'</div></div>').join('');

  document.querySelector('#a-yr').textContent=c.founded;
  document.querySelector('#a-desc').textContent=c.description;
  document.querySelector('#a-mission').innerHTML='<p class="text-sm opacity-70 italic" style="border-left:3px solid '+accent+';padding-left:12px"><strong>Mission:</strong> '+c.mission+'</p>';
  document.querySelector('#a-cards').innerHTML=[{v:c.employees,l:'Workers'},{v:c.factorySize,l:'Factory'},{v:c.annualOutput,l:'Output'},{v:'2-4',l:'Weeks Lead'}].map(x=>'<div class="p-4 rounded" style="background:'+accent+'11"><span class="font-mono text-lg font-bold" style="color:'+accent+'">'+x.v+'</span><span class="block text-xs uppercase tracking-wide mt-1 opacity-60">'+x.l+'</span></div>').join('');
  document.querySelector('#a-values').innerHTML='<h3 class="font-display text-lg font-bold mb-3">Our Values</h3><div class="flex flex-wrap gap-2">'+c.values.map(v=>'<span class="text-xs px-3 py-1 rounded" style="background:'+accent+'22;color:'+accent+'">'+v+'</span>').join('')+'</div>';
  document.querySelector('#a-vision').innerHTML='<p class="text-sm leading-relaxed opacity-80"><strong style="color:'+accent+'">Vision:</strong> '+c.vision+'</p>';
  document.querySelector('#a-timeline').innerHTML='<h3 class="font-display text-xl font-bold text-center mb-6">Our Journey</h3><div class="relative"><div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style="background:'+accent+'33"></div>'+c.history.map((h,i)=>'<div class="relative flex items-start mb-4 '+(i%2===0?'md:flex-row':'md:flex-row-reverse')+'"><div class="w-full md:w-1/2 '+(i%2===0?'md:pr-8 md:text-right':'md:pl-8')+' pl-10 md:pl-0"><span class="font-mono text-sm font-bold" style="color:'+accent+'">'+h.year+'</span><p class="text-sm opacity-70 mt-1">'+h.event+'</p></div><div class="absolute left-2 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2" style="background:'+accent+'"></div></div>').join('')+'</div>';

  document.querySelector('#cap-desc').textContent=cap.description;
  document.querySelector('#svc-grid').innerHTML=cap.services.map(s=>'<div class="p-4 rounded flex items-center gap-3" style="background:'+lightBg+'"><div class="w-2 h-2 rounded-full flex-shrink-0" style="background:'+accent+'"></div><span class="font-medium text-sm">'+s+'</span></div>').join('');
  document.querySelector('#cap-machinery').innerHTML='<h3 class="font-display text-lg font-bold mb-4" style="color:'+heroColor+'">Our Machinery</h3><div class="flex flex-wrap gap-2">'+cap.machinery.map(m=>'<span class="text-xs px-3 py-1.5 rounded" style="background:'+accent+'22;color:'+accent+'">'+m+'</span>').join('')+'</div><p class="text-sm opacity-60 mt-4" style="color:'+heroColor+'">'+cap.qualityControl+'</p>';
  document.querySelector('#cap-high').innerHTML='<div class="text-center p-4 rounded" style="background:'+lightBg+'"><span class="font-mono text-2xl font-bold block" style="color:'+accent+'">'+cap.capacity.split(' ')[0]+'</span><span class="text-xs uppercase tracking-wide opacity-60">'+cap.capacity.split(' ').slice(1).join(' ')+'</span></div><div class="text-center p-4 rounded" style="background:'+lightBg+'"><span class="font-mono text-2xl font-bold block" style="color:'+accent+'">'+cap.leadTime.split(' ')[0]+'</span><span class="text-xs uppercase tracking-wide opacity-60">'+cap.leadTime.split(' ').slice(1).join(' ')+'</span></div><div class="text-center p-4 rounded" style="background:'+lightBg+'"><span class="font-mono text-2xl font-bold block" style="color:'+accent+'">'+cap.moq.split(' ')[0]+'</span><span class="text-xs uppercase tracking-wide opacity-60">'+cap.moq.split(' ').slice(1).join(' ')+'</span></div>';

  const layout='${t.layout}';
  const gradients={'football-kits':'#1B4332,#2D6A4F','cricket-wear':'#0A1F44,#1E3A5F','boxing-gear':'#8B0000,#B71C1C','mma-fightwear':'#2C2C2C,#4A4A4A','running-apparel':'#1A535C,#2D8B7A','gym-fitness':'#0D0D0D,#1A3A1A','basketball-uniforms':'#0066FF,#3388FF','martial-arts':'#334155,#475569','sports-accessories':'#2C3539,#3D5A6E','compression-wear':'#1C1C1C,#3A1A1A'};
  
  if (layout==='sidebar') {
    document.querySelector('#p-grid').innerHTML='<div class="grid md:grid-cols-2 gap-6">'+d.products.map(p=>{const icon=PRODUCT_ICONS[p.id]||'';const g=(gradients[p.id]||'#333,#555').split(',');return '<div class="rounded-lg overflow-hidden" style="background:'+lightBg+'"><div class="p-4 flex items-center justify-center" style="background:linear-gradient(135deg,'+g[0]+','+g[1]+');min-height:120px;color:#fff">'+icon+'</div><div class="p-4"><p class="text-xs font-mono uppercase tracking-wide mb-1" style="color:'+accent+'">'+p.category+'</p><h3 class="font-display text-lg font-bold mb-2">'+p.name+'</h3><p class="text-sm opacity-70 mb-3">'+p.description+'</p><div class="flex flex-wrap gap-1 mb-3">'+p.features.slice(0,4).map(f=>'<span class="text-xs px-2 py-1 rounded" style="background:'+accent+'15">'+f+'</span>').join('')+'</div><a href="#contact" class="text-sm font-semibold" style="color:'+accent+'">Request Sample →</a></div></div>'}).join('')+'</div>';
  } else if (layout==='centered') {
    document.querySelector('#p-grid').innerHTML='<div class="grid md:grid-cols-3 gap-6">'+d.products.map(p=>{const icon=PRODUCT_ICONS[p.id]||'';const g=(gradients[p.id]||'#333,#555').split(',');return '<div class="rounded-lg text-center p-6" style="background:'+lightBg+'"><div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,'+g[0]+','+g[1]+');color:#fff">'+icon+'</div><p class="text-xs font-mono uppercase tracking-wide mb-1" style="color:'+accent+'">'+p.category+'</p><h3 class="font-display text-lg font-bold mb-2">'+p.name+'</h3><p class="text-sm opacity-70 mb-3">'+p.description+'</p><a href="#contact" class="text-sm font-semibold" style="color:'+accent+'">Request Sample →</a></div>'}).join('')+'</div>';
  } else if (layout==='cards-first') {
    document.querySelector('#p-grid').innerHTML='<div class="grid md:grid-cols-2 gap-6">'+d.products.map(p=>{const icon=PRODUCT_ICONS[p.id]||'';const g=(gradients[p.id]||'#333,#555').split(',');return '<div class="rounded-lg overflow-hidden" style="background:'+lightBg+'"><div class="p-6"><p class="text-xs font-mono uppercase tracking-wide mb-1" style="color:'+accent+'">'+p.category+'</p><h3 class="font-display text-xl font-bold mb-2">'+p.name+'</h3><p class="text-sm opacity-70 mb-3">'+p.description+'</p><div class="flex flex-wrap gap-1 mb-4">'+p.features.slice(0,5).map(f=>'<span class="text-xs px-2 py-1 rounded" style="background:'+accent+'15">'+f+'</span>').join('')+'</div><a href="#contact" class="text-sm font-semibold" style="color:'+accent+'">Request Sample →</a></div><div class="p-4 flex items-center justify-center" style="background:linear-gradient(135deg,'+g[0]+','+g[1]+');min-height:100px;color:#fff">'+icon+'</div></div>'}).join('')+'</div>';
  } else {
    document.querySelector('#p-grid').innerHTML=d.products.map(p=>{const icon=PRODUCT_ICONS[p.id]||'';const g=(gradients[p.id]||'#333,#555').split(',');return '<div class="rounded-lg overflow-hidden" style="background:'+lightBg+'"><div class="grid md:grid-cols-3 gap-0"><div class="p-6 flex items-center justify-center" style="background:linear-gradient(135deg,'+g[0]+','+g[1]+');min-height:180px;color:#fff">'+icon+'</div><div class="md:col-span-2 p-6"><p class="text-xs font-mono uppercase tracking-wide mb-1" style="color:'+accent+'">'+p.category+'</p><h3 class="font-display text-xl font-bold mb-2">'+p.name+'</h3><p class="text-sm leading-relaxed mb-3 opacity-70">'+p.description+'</p><p class="text-sm leading-relaxed mb-4 opacity-60">'+p.longDescription+'</p><div class="flex flex-wrap gap-1 mb-4">'+p.features.map(f=>'<span class="text-xs px-2 py-1 rounded" style="background:'+accent+'15">'+f+'</span>').join('')+'</div><div class="grid grid-cols-2 gap-2 mb-4 p-3 rounded" style="background:'+primary+'11"><div class="text-xs"><span class="font-mono opacity-50">Material:</span> '+p.specs.material+'</div><div class="text-xs"><span class="font-mono opacity-50">Sizes:</span> '+p.specs.sizes+'</div><div class="text-xs"><span class="font-mono opacity-50">Colors:</span> '+p.specs.colors+'</div><div class="text-xs"><span class="font-mono opacity-50">MOQ:</span> '+p.specs.moq+'</div></div><a href="#contact" class="text-sm font-semibold hover:opacity-80 transition-opacity" style="color:'+accent+'">Request Sample →</a></div></div></div>'}).join('');
  }

  if (layout==='sidebar'||layout==='centered') {
    document.querySelector('#materials-grid').innerHTML='<div class="grid md:grid-cols-2 gap-6">'+d.materials.map(m=>'<div class="p-6 rounded" style="background:'+lightBg+';border-left:4px solid '+accent+'"><h3 class="font-display text-xl font-bold mb-2">'+m.name+'</h3><p class="text-sm opacity-70 mb-3">'+m.description+'</p><div class="flex flex-wrap gap-1 mb-3">'+m.properties.map(p=>'<span class="text-xs px-2 py-1 rounded" style="background:'+accent+'15">'+p+'</span>').join('')+'</div><p class="text-xs opacity-50"><strong>Uses:</strong> '+m.uses.join(', ')+'</p></div>').join('')+'</div>';
  } else {
    document.querySelector('#materials-grid').innerHTML=d.materials.map(m=>'<div class="p-5 rounded" style="background:'+lightBg+'"><h3 class="font-display text-lg font-bold mb-2">'+m.name+'</h3><p class="text-sm opacity-70 mb-3">'+m.description+'</p><div class="flex flex-wrap gap-1 mb-3">'+m.properties.map(p=>'<span class="text-xs px-2 py-1 rounded" style="background:'+accent+'15">'+p+'</span>').join('')+'</div><p class="text-xs opacity-50"><strong>Uses:</strong> '+m.uses.join(', ')+'</p></div>').join('');
  }

  if (layout==='centered') {
    document.querySelector('#process-grid').innerHTML='<div class="flex flex-col md:flex-row gap-4">'+PROCESS_STEPS.map((s,i)=>'<div class="flex-1 p-4 rounded text-center" style="background:'+lightBg+'"><div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style="background:'+accent+';color:'+primary+'"><span class="font-mono text-sm font-bold">'+(i+1)+'</span></div><h3 class="font-display text-base font-bold mb-2">'+s.name+'</h3><p class="text-xs opacity-70">'+s.desc+'</p></div>').join('')+'</div>';
  } else if (layout==='sidebar') {
    document.querySelector('#process-grid').innerHTML='<div class="space-y-4">'+PROCESS_STEPS.map((s,i)=>'<div class="flex items-start gap-4 p-4 rounded" style="background:'+lightBg+'"><div class="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center" style="background:'+accent+'22;color:'+accent+'"><span class="font-mono text-sm font-bold">'+(i+1).toString().padStart(2,'0')+'</span></div><div><h3 class="font-display text-base font-bold mb-1">'+s.name+'</h3><p class="text-sm opacity-70">'+s.desc+'</p></div></div>').join('')+'</div>';
  } else {
    document.querySelector('#process-grid').innerHTML=PROCESS_STEPS.map((s,i)=>'<div class="p-6 rounded" style="background:'+lightBg+'"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:'+accent+'22;color:'+accent+'"><span class="font-mono text-sm font-bold">'+(i+1).toString().padStart(2,'0')+'</span></div><h3 class="font-display text-lg font-bold">'+s.name+'</h3></div><p class="text-sm opacity-70">'+s.desc+'</p></div>').join('');
  }

  document.querySelector('#why-grid').innerHTML=d.whyChooseUs.map(w=>'<div class="p-5 rounded" style="background:'+lightBg+'"><h3 class="font-display text-lg font-bold mb-2" style="color:'+accent+'">'+w.title+'</h3><p class="text-sm opacity-70">'+w.description+'</p></div>').join('');

  document.querySelector('#certs-grid').innerHTML=d.certifications.map(x=>'<div class="p-5 rounded text-center" style="background:'+lightBg+';border:1px solid '+accent+'15"><span class="text-3xl block mb-2">'+x.icon+'</span><h4 class="font-semibold text-sm mb-1">'+x.name+'</h4><p class="text-xs opacity-50 mb-2">'+x.description+'</p><p class="text-xs italic" style="color:'+accent+'">'+x.benefit+'</p></div>').join('');

  document.querySelector('#export-grid').innerHTML='<div><h3 class="font-display text-xl font-bold mb-4">Countries We Serve</h3><div class="flex flex-wrap gap-2 mb-8">'+exp.countries.map(c=>'<span class="text-sm px-3 py-1.5 rounded" style="background:'+accent+'11">'+c+'</span>').join('')+'</div><h3 class="font-display text-xl font-bold mb-4">Industries</h3><div class="flex flex-wrap gap-2">'+d.industriesServed.map(i=>'<span class="text-sm px-3 py-1.5 rounded" style="background:'+primary+';color:'+heroColor+'">'+i+'</span>').join('')+'</div></div><div><h3 class="font-display text-xl font-bold mb-4">Trade Terms</h3><div class="space-y-3"><div class="p-4 rounded" style="background:'+lightBg+'"><span class="font-mono text-xs uppercase tracking-wide block mb-1" style="color:'+accent+'">Shipping</span><span class="text-sm">'+exp.shippingTerms.join(' · ')+'</span></div><div class="p-4 rounded" style="background:'+lightBg+'"><span class="font-mono text-xs uppercase tracking-wide block mb-1" style="color:'+accent+'">Payment</span><span class="text-sm">'+exp.paymentTerms.join(' · ')+'</span></div><div class="p-4 rounded" style="background:'+lightBg+'"><span class="font-mono text-xs uppercase tracking-wide block mb-1" style="color:'+accent+'">Special Conditions</span><span class="text-sm">'+exp.specialConditions.join(' · ')+'</span></div></div></div>';

  document.querySelector('#industries').innerHTML=d.industriesServed.map(i=>'<span class="text-sm px-4 py-2 rounded font-medium" style="background:'+primary+';color:'+heroColor+'">'+i+'</span>').join('');

  document.querySelector('#testis').innerHTML=d.testimonials.map(t=>'<div class="p-6 rounded" style="background:'+lightBg+'"><p class="text-sm leading-relaxed mb-4 italic opacity-80">"'+t.quote+'"</p><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs" style="background:'+accent+'22;color:'+accent+'">'+t.author.split(' ').map(n=>n[0]).join('')+'</div><div><span class="text-sm font-semibold block">'+t.author+'</span><span class="text-xs" style="color:'+accent+'">'+t.company+' — '+t.country+'</span></div></div></div>').join('');

  document.querySelector('#faq-grid').innerHTML=d.faq.map(f=>'<div class="p-5 rounded" style="background:'+lightBg+';border:1px solid '+accent+'15"><h3 class="font-display text-base font-bold mb-2">'+f.question+'</h3><p class="text-sm opacity-70">'+f.answer+'</p></div>').join('');

  document.querySelector('#c-info').innerHTML='<div class="flex items-start gap-3"><span style="color:'+accent+'">📍</span><span class="text-sm">'+d.contact.address+'</span></div><div class="flex items-start gap-3"><span style="color:'+accent+'">📞</span><span class="text-sm">'+d.contact.phone+'</span></div><div class="flex items-start gap-3"><span style="color:'+accent+'">💬</span><span class="text-sm">'+d.contact.whatsapp+'</span></div><div class="flex items-start gap-3"><span style="color:'+accent+'">✉️</span><span class="text-sm">'+d.contact.email+'</span></div><div class="flex items-start gap-3"><span style="color:'+accent+'">🌐</span><span class="text-sm">'+d.contact.website+'</span></div>';
  document.querySelector('#c-response').innerHTML='<p class="text-sm"><strong style="color:'+accent+'">⏰ Working Hours:</strong> '+d.contact.workingHours+'</p><p class="text-sm mt-2"><strong style="color:'+accent+'">⚡ Response Time:</strong> '+d.contact.responseTime+'</p>';

  document.querySelector('#f-yr').textContent=c.founded;
  document.querySelector('#f-prods').innerHTML=d.products.slice(0,6).map(p=>'<li><a href="#products" class="hover:opacity-100 transition-opacity">'+p.name+'</a></li>').join('');
  document.querySelector('#f-contact').innerHTML='<li>'+d.contact.address+'</li><li>'+d.contact.phone+'</li><li>'+d.contact.email+'</li><li>'+d.contact.website+'</li>';
  document.querySelector('#f-copy').textContent=new Date().getFullYear();
  document.querySelector('#f-social').innerHTML=Object.entries(d.contact.social).map(([k,v])=>'<a href="https://'+v+'" target="_blank" class="text-xs uppercase tracking-wide opacity-60 hover:opacity-100 transition-opacity" style="color:'+heroColor+'">'+k+'</a>').join('')+'<span class="text-xs opacity-50" style="color:'+heroColor+'">Sialkot, Pakistan</span>';

document.querySelector('#mob-btn').addEventListener('click',()=>document.querySelector('#mob-menu').classList.toggle('hidden'));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t){t.scrollIntoView({behavior:'smooth'});document.querySelector('#mob-menu').classList.add('hidden');}}));
</script>
</body>
</html>`;
}

const outDir = path.join(__dirname, 'templates');
TEMPLATES.forEach(t => {
  const dir = path.join(outDir, `${t.id}-${t.dir}`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateHTML(t));
  console.log(`Generated: ${t.id}-${t.dir}`);
});
console.log(`\nDone! Generated ${TEMPLATES.length} templates.`);
