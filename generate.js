const fs = require('fs');
const path = require('path');

const TEMPLATES = [
  { id:'01', dir:'champion-heritage', name:"Champion's Heritage", colors:{navy:'#0A1628',gold:'#C5993A','gold-light':'#D4AC5A',warm:'#FAF7F2',slate:'#3D4F5F',cream:'#F0EBE3'}, fonts:['"Playfair Display"','"Inter"','"JetBrains Mono"'], heroPattern:'diagonal-lines', accentRule:true },
  { id:'02', dir:'dynasty-sport', name:'Dynasty Sport', colors:{forest:'#1B4332',gold:'#B8860B','gold-light':'#D4A017',ivory:'#FFFFF0',charcoal:'#2C2C2C',sage:'#8FBC8F'}, fonts:['"Cormorant Garamond"','"Source Sans 3"'], heroPattern:'diamonds', accentRule:false },
  { id:'03', dir:'varsity-legacy', name:'Varsity Legacy', colors:{red:'#8B0000',navy:'#1A1A2E',cream:'#F5F0E8',gold:'#DAA520','light-gray':'#E8E8E8'}, fonts:['"Bebas Neue"','"Roboto"','"Roboto Condensed"'], heroPattern:'stripes', accentRule:false },
  { id:'04', dir:'old-guard', name:'Old Guard', colors:{charcoal:'#2D2D2D',burgundy:'#6B1D1D',parchment:'#F4EDE4',copper:'#B87333','dark-brown':'#3E2723'}, fonts:['"Libre Baskerville"','"Nunito Sans"'], heroPattern:'crosshatch', accentRule:true },
  { id:'05', dir:'heritage-craft', name:'Heritage Craft', colors:{teal:'#1A535C',gold:'#D4A843','off-white':'#FAF9F6',charcoal:'#2B2B2B',sand:'#C2B280'}, fonts:['"DM Serif Display"','"DM Sans"'], heroPattern:'waves', accentRule:false },
  { id:'06', dir:'tech-forge', name:'Tech Forge', colors:{black:'#0D0D0D',lime:'#AAFF00','dark-gray':'#1A1A1A','light-gray':'#E5E5E5',white:'#FFFFFF'}, fonts:['"Space Grotesk"','"DM Sans"','"Space Mono"'], heroPattern:'circuit', accentRule:false },
  { id:'07', dir:'aero-sport', name:'Aero Sport', colors:{blue:'#0066FF',white:'#FFFFFF','cool-gray':'#F0F2F5',charcoal:'#1C1C1E','sky-blue':'#E8F4FD'}, fonts:['"Outfit"','"Inter"'], heroPattern:'airflow', accentRule:false },
  { id:'08', dir:'carbon', name:'Carbon', colors:{black:'#1C1C1C','carbon-gray':'#333333',red:'#E63946',white:'#FFFFFF',steel:'#8D99AE'}, fonts:['"Rajdhani"','"Inter"','"Roboto Mono"'], heroPattern:'carbon', accentRule:false },
  { id:'09', dir:'kinetic', name:'Kinetic', colors:{silver:'#C0C0C0',orange:'#FF6B35',dark:'#1A1A1A',white:'#FFFFFF','warm-gray':'#9E9E9E'}, fonts:['"Rajdhani"','"Work Sans"'], heroPattern:'diagonal', accentRule:false },
  { id:'10', dir:'velocity', name:'Velocity', colors:{purple:'#190033',cyan:'#00E5FF',white:'#FFFFFF','dark-purple':'#2D1B4E','light-gray':'#F5F5F5'}, fonts:['"Syne"','"Inter"'], heroPattern:'speedlines', accentRule:false },
  { id:'11', dir:'steel-works', name:'Steel Works', colors:{gunmetal:'#2C3539',yellow:'#FFD700',dark:'#1A1A1A','light-gray':'#E0E0E0',white:'#FFFFFF'}, fonts:['"Oswald"','"Source Sans 3"'], heroPattern:'hazard', accentRule:false },
  { id:'12', dir:'ironclad', name:'Ironclad', colors:{black:'#1B1B1B',rust:'#B7410E',cream:'#F5F0E8','steel-blue':'#4682B4',gray:'#6B6B6B'}, fonts:['"Barlow Condensed"','"Inter"'], heroPattern:'rivets', accentRule:false },
  { id:'13', dir:'factory-floor', name:'Factory Floor', colors:{slate:'#334155',red:'#DC2626','off-white':'#F8FAFC',dark:'#0F172A','warm-gray':'#78716C'}, fonts:['"Barlow"','"Inter"'], heroPattern:'grid', accentRule:false },
  { id:'14', dir:'powerhouse', name:'Powerhouse', colors:{charcoal:'#212529',blue:'#0D6EFD',white:'#FFFFFF',light:'#F8F9FA','medium-gray':'#6C757D'}, fonts:['"Montserrat"','"Open Sans"'], heroPattern:'power', accentRule:false },
  { id:'15', dir:'heavy-duty', name:'Heavy Duty', colors:{olive:'#3D4A2A',black:'#000000',tan:'#D4C5A9','dark-green':'#2C3E1F',white:'#FFFFFF'}, fonts:['"Teko"','"Roboto"'], heroPattern:'camo', accentRule:false },
  { id:'16', dir:'pure-form', name:'Pure Form', colors:{white:'#FFFFFF',navy:'#1E3A5F','light-gray':'#F7F8FA','medium-gray':'#6B7280',blue:'#3B82F6'}, fonts:['"Plus Jakarta Sans"','"Inter"'], heroPattern:'dots', accentRule:false },
  { id:'17', dir:'clarity-sport', name:'Clarity Sport', colors:{white:'#FAFAF9',teal:'#0D9488',charcoal:'#1C1917','light-teal':'#CCFBF1',gray:'#78716C'}, fonts:['"Geist"','"Inter"'], heroPattern:'teal-accent', accentRule:false },
  { id:'18', dir:'essential-kit', name:'Essential Kit', colors:{white:'#F3F4F6',charcoal:'#111827','pure-white':'#FFFFFF','medium-gray':'#9CA3AF',dark:'#1F2937'}, fonts:['"Inter"','"Inter"'], heroPattern:'minimal', accentRule:false },
  { id:'19', dir:'precision', name:'Precision', colors:{white:'#FFFFFF','steel-blue':'#475569',light:'#F1F5F9',dark:'#0F172A',blue:'#2563EB'}, fonts:['"IBM Plex Sans"','"IBM Plex Mono"'], heroPattern:'blueprint', accentRule:false },
  { id:'20', dir:'calm-authority', name:'Calm Authority', colors:{cream:'#FEFCE8',green:'#166534',charcoal:'#1C1917','light-green':'#DCFCE7','warm-gray':'#57534E'}, fonts:['"Lora"','"Work Sans"'], heroPattern:'blobs', accentRule:false },
  { id:'21', dir:'sprint', name:'Sprint', colors:{black:'#000000',yellow:'#FFE500','dark-gray':'#1A1A1A',white:'#FFFFFF','medium-gray':'#404040'}, fonts:['"Bebas Neue"','"Inter"'], heroPattern:'speed', accentRule:false },
  { id:'22', dir:'power-play', name:'Power Play', colors:{navy:'#0A1F44',red:'#C41E3A',white:'#FFFFFF','light-blue':'#E8EEF6',medium:'#64748B'}, fonts:['"Anton"','"Inter"'], heroPattern:'team', accentRule:false },
  { id:'23', dir:'endurance', name:'Endurance', colors:{teal:'#134E4A',orange:'#EA580C','off-white':'#FFFBEB',dark:'#1C1917','warm-gray':'#78716C'}, fonts:['"Sora"','"Inter"'], heroPattern:'progress', accentRule:false },
  { id:'24', dir:'peak-form', name:'Peak Form', colors:{charcoal:'#18181B',lime:'#84CC16',white:'#FFFFFF','dark-gray':'#27272A',light:'#F4F4F5'}, fonts:['"Outfit"','"Inter"'], heroPattern:'mountain', accentRule:false },
  { id:'25', dir:'apex-predator', name:'Apex Predator', colors:{midnight:'#0C0A09',gold:'#EAB308',brown:'#1C1917',cream:'#FEF9C3',black:'#000000'}, fonts:['"Playfair Display"','"Inter"'], heroPattern:'goldline', accentRule:false },
  { id:'26', dir:'global-reach', name:'Global Reach', colors:{blue:'#0047AB',white:'#FFFFFF','light-blue':'#E6F0FF',charcoal:'#2C3E50',silver:'#BDC3C7'}, fonts:['"Poppins"','"Inter"'], heroPattern:'globe', accentRule:false },
  { id:'27', dir:'export-elite', name:'Export Elite', colors:{navy:'#0F172A',gold:'#F59E0B',white:'#FFFFFF',light:'#F8FAFC',dark:'#1E293B'}, fonts:['"Plus Jakarta Sans"','"Inter"'], heroPattern:'certs', accentRule:false },
  { id:'28', dir:'world-sport', name:'World Sport', colors:{teal:'#0891B2',orange:'#F97316',white:'#FFFFFF',dark:'#164E63',light:'#ECFEFF'}, fonts:['"Nunito Sans"','"Inter"'], heroPattern:'container', accentRule:false },
  { id:'29', dir:'cross-continental', name:'Cross Continental', colors:{slate:'#334155',crimson:'#DC2626','off-white':'#F1F5F9',dark:'#0F172A','light-gray':'#E2E8F0'}, fonts:['"Space Grotesk"','"Inter"'], heroPattern:'timezone', accentRule:false },
  { id:'30', dir:'trade-titan', name:'Trade Titan', colors:{gray:'#374151',blue:'#2563EB',white:'#FFFFFF',light:'#F9FAFB',dark:'#111827'}, fonts:['"Montserrat"','"Inter"'], heroPattern:'calculator', accentRule:false },
  { id:'31', dir:'disrupt-sport', name:'Disrupt Sport', colors:{black:'#000000',green:'#39FF14',dark:'#0A0A0A',white:'#FFFFFF',gray:'#525252'}, fonts:['"Syne"','"Inter"'], heroPattern:'glow', accentRule:false },
  { id:'32', dir:'fresh-kit', name:'Fresh Kit', colors:{white:'#FFFFFF',coral:'#FF6B6B','light-pink':'#FFF5F5',charcoal:'#2D3436','warm-gray':'#636E72'}, fonts:['"Nunito"','"Inter"'], heroPattern:'blobs-pink', accentRule:false },
  { id:'33', dir:'direct-sport', name:'Direct Sport', colors:{charcoal:'#212529',amber:'#F59E0B',white:'#FFFFFF',light:'#F8F9FA',dark:'#111827'}, fonts:['"Inter"','"Inter"'], heroPattern:'amber-bars', accentRule:false },
  { id:'34', dir:'next-gen', name:'Next Gen', colors:{purple:'#1E1B4B',violet:'#7C3AED',white:'#FFFFFF','light-purple':'#F5F3FF',dark:'#0F0A1F'}, fonts:['"Geist"','"Inter"'], heroPattern:'mesh', accentRule:false },
  { id:'35', dir:'sport-lab', name:'Sport Lab', colors:{white:'#FFFFFF',blue:'#2563EB',light:'#EFF6FF',charcoal:'#1E293B',medium:'#64748B'}, fonts:['"Plus Jakarta Sans"','"Inter"'], heroPattern:'lab-dots', accentRule:false },
  { id:'36', dir:'sportswear-post', name:'Sportswear Post', colors:{cream:'#FFF8E7',red:'#8B0000',black:'#1A1A1A','off-white':'#FAF0D7','warm-gray':'#6B6255'}, fonts:['"Lora"','"Inter"'], heroPattern:'newspaper', accentRule:false },
  { id:'37', dir:'athletic-standard', name:'Athletic Standard', colors:{white:'#FFFFFF',black:'#000000','light-gray':'#F5F5F5','medium-gray':'#9E9E9E',red:'#E53935'}, fonts:['"DM Serif Display"','"Inter"'], heroPattern:'magazine', accentRule:false },
  { id:'38', dir:'pitch-report', name:'Pitch Report', colors:{white:'#F5F5F0',navy:'#1A237E','light-blue':'#E8EAF6',dark:'#212121',gray:'#757575'}, fonts:['"Merriweather"','"Open Sans"'], heroPattern:'scorecard', accentRule:false },
  { id:'39', dir:'sideline-stories', name:'Sideline Stories', colors:{beige:'#F5F0E1',green:'#2E7D32',brown:'#5D4037','off-white':'#FAFAF5',dark:'#3E2723'}, fonts:['"Libre Baskerville"','"Nunito Sans"'], heroPattern:'filmstrip', accentRule:false },
  { id:'40', dir:'match-day', name:'Match Day', colors:{white:'#F5F5F5',orange:'#FF6D00',dark:'#212121','pure-white':'#FFFFFF',medium:'#9E9E9E'}, fonts:['"Oswald"','"Roboto"'], heroPattern:'ticker', accentRule:false },
  { id:'41', dir:'night-game', name:'Night Game', colors:{black:'#000000',blue:'#00BFFF',white:'#FFFFFF',dark:'#0A0A0A',gray:'#404040'}, fonts:['"Rajdhani"','"Inter"'], heroPattern:'floodlight', accentRule:false },
  { id:'42', dir:'shadow-play', name:'Shadow Play', colors:{gray:'#1A1A1A',red:'#B71C1C',white:'#FFFFFF','medium-gray':'#424242',light:'#E0E0E0'}, fonts:['"Bebas Neue"','"Inter"'], heroPattern:'spotlight', accentRule:false },
  { id:'43', dir:'midnight-kit', name:'Midnight Kit', colors:{black:'#121212',gold:'#FFD700',dark:'#1E1E1E',cream:'#FFF8E1',gray:'#616161'}, fonts:['"Cormorant Garamond"','"Inter"'], heroPattern:'gold-border', accentRule:false },
  { id:'44', dir:'arena', name:'Arena', colors:{charcoal:'#1A1A2E',green:'#00FF88',white:'#FFFFFF','dark-blue':'#16213E',light:'#F0F0F0'}, fonts:['"Outfit"','"Inter"'], heroPattern:'field', accentRule:false },
  { id:'45', dir:'blackout', name:'Blackout', colors:{black:'#000000',white:'#FFFFFF','light-gray':'#E5E5E5','medium-gray':'#737373','off-white':'#F5F5F5'}, fonts:['"Inter Tight"','"Inter"'], heroPattern:'geometry', accentRule:false },
  { id:'46', dir:'handcrafted-sport', name:'Handcrafted Sport', colors:{brown:'#8D6E63',cream:'#FFF8E1',dark:'#3E2723','light-brown':'#D7CCC8',white:'#FFFFFF'}, fonts:['"Crimson Pro"','"Work Sans"'], heroPattern:'waves-brown', accentRule:false },
  { id:'47', dir:'stitch-thread', name:'Stitch & Thread', colors:{white:'#FAF9F6',rust:'#C2452D',dark:'#292524',light:'#F5F0EB',gray:'#78716C'}, fonts:['"DM Serif Display"','"DM Sans"'], heroPattern:'stitch', accentRule:false },
  { id:'48', dir:'material-world', name:'Material World', colors:{white:'#F3F4F6',navy:'#1E3A5F','pure-white':'#FFFFFF',dark:'#111827',blue:'#3B82F6'}, fonts:['"Instrument Sans"','"Inter"'], heroPattern:'weave', accentRule:false },
  { id:'49', dir:'quality-cut', name:'Quality Cut', colors:{white:'#FFFFFF',burgundy:'#7F1D1D',light:'#FEF2F2',dark:'#1C1917',gray:'#78716C'}, fonts:['"Fraunces"','"Inter"'], heroPattern:'diagonal-cut', accentRule:false },
  { id:'50', dir:'made-right', name:'Made Right', colors:{cream:'#FEFCE8',green:'#166534',dark:'#1C1917','light-green':'#DCFCE7',gray:'#57534E'}, fonts:['"Bitter"','"Inter"'], heroPattern:'leaves', accentRule:false }
];

const PRODUCT_ICONS = {
  'football-kits': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M32 4l8 16h16l-12 10 4 16-16-8-16 8 4-16L8 20h16z"/></svg>`,
  'cricket-wear': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="28" y="8" width="8" height="40" rx="2"/><ellipse cx="32" cy="54" rx="10" ry="6"/></svg>`,
  'boxing-gear': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 20c0-8 8-16 16-16s16 8 16 16v8c0 4-4 8-8 8H24c-4 0-8-4-8-8v-8z"/><path d="M20 36v12c0 4 4 8 8 8h8c4 0 8-4 8-8V36"/></svg>`,
  'mma-fightwear': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="20" r="12"/><path d="M20 32l-8 20h8l4-12 4 12h8l-8-20"/></svg>`,
  'running-apparel': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="36" cy="12" r="6"/><path d="M24 24l8 4 8-8 8 12-16 8-8-4-8 12"/></svg>`,
  'gym-fitness': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="24" width="8" height="16" rx="2"/><rect x="48" y="24" width="8" height="16" rx="2"/><rect x="16" y="28" width="32" height="8" rx="1"/><rect x="4" y="28" width="4" height="8" rx="1"/><rect x="56" y="28" width="4" height="8" rx="1"/></svg>`,
  'basketball-uniforms': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="32" r="28"/><path d="M4 32h56M32 4c-8 8-8 20 0 28s8 20 0 28"/><path d="M8 16c10 8 10 24 0 32M56 16c-10 8-10 24 0 32"/></svg>`,
  'martial-arts': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12h24v8l-4 8 4 8v8H20v-8l4-8-4-8z"/><path d="M16 28h-8M56 28h-8"/></svg>`,
  'sports-accessories': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="16" width="40" height="32" rx="4"/><path d="M12 24h40M24 16v-4M40 16v-4"/></svg>`,
  'compression-wear': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8h16v48H24z"/><path d="M20 16h24M20 24h24M20 32h24M20 40h24"/></svg>`
};

function generateHeroPattern(type, colors) {
  const c = Object.values(colors);
  const patterns = {
    'diagonal-lines': `background:repeating-linear-gradient(45deg,${c[0]},${c[0]} 10px,${c[1]}15 10px,${c[1]}15 20px)`,
    'diamonds': `background:${c[0]};background-image:radial-gradient(${c[1]}22 1px,transparent 1px);background-size:20px 20px`,
    'stripes': `background:repeating-linear-gradient(0deg,${c[0]},${c[0]} 40px,${c[2]} 40px,${c[2]} 42px)`,
    'crosshatch': `background:${c[0]};background-image:repeating-linear-gradient(45deg,transparent,transparent 10px,${c[3]}11 10px,${c[3]}11 11px),repeating-linear-gradient(-45deg,transparent,transparent 10px,${c[3]}11 10px,${c[3]}11 11px)`,
    'waves': `background:${c[0]};background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q15 20 30 30 T60 30' fill='none' stroke='${encodeURIComponent(c[1])}' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
    'circuit': `background:${c[0]};background-image:linear-gradient(${c[1]}08 1px,transparent 1px),linear-gradient(90deg,${c[1]}08 1px,transparent 1px);background-size:30px 30px`,
    'airflow': `background:linear-gradient(135deg,${c[0]} 0%,${c[4]} 100%)`,
    'carbon': `background:${c[0]};background-image:url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='6' height='6' fill='${encodeURIComponent(c[1])}' fill-opacity='0.05'/%3E%3Crect x='1' y='1' width='4' height='4' fill='${encodeURIComponent(c[0])}'/%3E%3C/svg%3E")`,
    'diagonal': `background:${c[2]};background-image:repeating-linear-gradient(-45deg,${c[0]},${c[0]} 2px,transparent 2px,transparent 20px)`,
    'speedlines': `background:${c[0]};background-image:repeating-linear-gradient(0deg,${c[1]}08,${c[1]}08 2px,transparent 2px,transparent 8px)`,
    'hazard': `background:${c[2]};background-image:repeating-linear-gradient(-45deg,${c[1]},${c[1]} 10px,${c[0]} 10px,${c[0]} 20px)`,
    'rivets': `background:${c[0]};background-image:radial-gradient(${c[3]}33 2px,transparent 2px);background-size:24px 24px`,
    'grid': `background:${c[0]};background-image:linear-gradient(${c[4]}15 1px,transparent 1px),linear-gradient(90deg,${c[4]}15 1px,transparent 1px);background-size:40px 40px`,
    'power': `background:${c[0]};background-image:linear-gradient(0deg,${c[1]}15,${c[1]}15 2px,transparent 2px);background-size:100% 20px`,
    'camo': `background:${c[0]};background-image:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='10' cy='10' rx='8' ry='4' fill='${encodeURIComponent(c[3])}' fill-opacity='0.15' transform='rotate(30 10 10)'/%3E%3Cellipse cx='30' cy='30' rx='8' ry='4' fill='${encodeURIComponent(c[3])}' fill-opacity='0.1' transform='rotate(-20 30 30)'/%3E%3C/svg%3E")`,
    'dots': `background:${c[0]};background-image:radial-gradient(${c[1]}15 1px,transparent 1px);background-size:20px 20px`,
    'teal-accent': `background:${c[0]};background-image:linear-gradient(135deg,${c[1]}08 0%,transparent 50%)`,
    'minimal': `background:${c[0]}`,
    'blueprint': `background:${c[0]};background-image:linear-gradient(${c[1]}10 1px,transparent 1px),linear-gradient(90deg,${c[1]}10 1px,transparent 1px),linear-gradient(${c[1]}05 1px,transparent 1px),linear-gradient(90deg,${c[1]}05 1px,transparent 1px);background-size:100px 100px,100px 100px,20px 20px,20px 20px`,
    'blobs': `background:${c[0]};background-image:radial-gradient(ellipse at 20% 50%,${c[3]}33 0%,transparent 50%),radial-gradient(ellipse at 80% 20%,${c[1]}22 0%,transparent 40%)`,
    'speed': `background:${c[0]};background-image:repeating-linear-gradient(-45deg,${c[1]},${c[1]} 1px,transparent 1px,transparent 15px)`,
    'team': `background:${c[0]};background-image:repeating-linear-gradient(90deg,${c[1]}15,${c[1]}15 4px,transparent 4px,transparent 40px)`,
    'progress': `background:${c[0]};background-image:linear-gradient(90deg,${c[1]}44 0%,${c[1]}44 66%,${c[3]}22 66%)`,
    'mountain': `background:${c[0]};background-image:url("data:image/svg+xml,%3Csvg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 200 L100 60 L150 120 L200 40 L250 100 L300 20 L400 200Z' fill='${encodeURIComponent(c[1])}' fill-opacity='0.15'/%3E%3C/svg%3E")`,
    'goldline': `background:${c[0]};background-image:linear-gradient(0deg,${c[1]}22,${c[1]}22 1px,transparent 1px);background-size:100% 60px`,
    'globe': `background:${c[0]};background-image:radial-gradient(circle at 50% 50%,${c[2]}33 0%,transparent 60%)`,
    'certs': `background:${c[0]};background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='${encodeURIComponent(c[1])}' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
    'container': `background:${c[0]};background-image:repeating-linear-gradient(90deg,${c[1]}22,${c[1]}22 8px,${c[0]} 8px,${c[0]} 16px)`,
    'timezone': `background:${c[0]};background-image:linear-gradient(90deg,${c[3]}15 1px,transparent 1px);background-size:25% 100%`,
    'calculator': `background:${c[0]};background-image:linear-gradient(135deg,${c[1]}11 25%,transparent 25%),linear-gradient(-135deg,${c[1]}11 25%,transparent 25%);background-size:40px 40px`,
    'glow': `background:${c[0]};box-shadow:inset 0 0 200px ${c[1]}15`,
    'blobs-pink': `background:${c[0]};background-image:radial-gradient(ellipse at 30% 70%,${c[1]}22 0%,transparent 50%),radial-gradient(ellipse at 70% 30%,${c[2]}44 0%,transparent 40%)`,
    'amber-bars': `background:${c[0]};background-image:repeating-linear-gradient(90deg,${c[1]}11,${c[1]}11 3px,transparent 3px,transparent 30px)`,
    'mesh': `background:linear-gradient(135deg,${c[0]} 0%,${c[1]}33 50%,${c[0]} 100%)`,
    'lab-dots': `background:${c[0]};background-image:radial-gradient(${c[1]}12 1px,transparent 1px);background-size:24px 24px`,
    'newspaper': `background:${c[0]};background-image:repeating-linear-gradient(0deg,${c[3]},${c[3]} 1px,transparent 1px,transparent 28px)`,
    'magazine': `background:${c[0]};background-image:linear-gradient(90deg,${c[4]}15 1px,transparent 1px);background-size:33.33% 100%`,
    'scorecard': `background:${c[0]};background-image:linear-gradient(0deg,${c[2]}11 1px,transparent 1px);background-size:100% 40px`,
    'filmstrip': `background:${c[0]};background-image:repeating-linear-gradient(90deg,${c[3]},${c[3]} 3px,transparent 3px,transparent 30px)`,
    'ticker': `background:${c[0]};background-image:repeating-linear-gradient(0deg,${c[4]}15,${c[4]}15 1px,transparent 1px,transparent 3px)`,
    'floodlight': `background:${c[0]};background-image:radial-gradient(ellipse at 50% 0%,${c[1]}33 0%,transparent 60%)`,
    'spotlight': `background:${c[0]};background-image:radial-gradient(ellipse at 50% 30%,${c[1]}22 0%,transparent 50%)`,
    'gold-border': `background:${c[0]};background-image:linear-gradient(${c[1]}22,${c[1]}22);background-size:100% 2px;background-position:0 0;background-repeat:no-repeat`,
    'field': `background:${c[0]};background-image:linear-gradient(0deg,${c[1]}11 1px,transparent 1px),linear-gradient(90deg,${c[1]}11 1px,transparent 1px);background-size:60px 60px`,
    'geometry': `background:${c[0]};background-image:linear-gradient(45deg,${c[1]}08 25%,transparent 25%),linear-gradient(-45deg,${c[1]}08 25%,transparent 25%);background-size:40px 40px`,
    'waves-brown': `background:${c[0]};background-image:url("data:image/svg+xml,%3Csvg width='80' height='20' viewBox='0 0 80 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q20 0 40 10 T80 10' fill='none' stroke='${encodeURIComponent(c[1])}' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
    'stitch': `background:${c[0]};background-image:url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='6' x2='4' y2='6' stroke='${encodeURIComponent(c[1])}' stroke-width='1' opacity='0.15'/%3E%3Cline x1='6' y1='0' x2='6' y2='4' stroke='${encodeURIComponent(c[1])}' stroke-width='1' opacity='0.15'/%3E%3C/svg%3E")`,
    'weave': `background:${c[0]};background-image:repeating-linear-gradient(45deg,${c[1]}08,${c[1]}08 2px,transparent 2px,transparent 8px),repeating-linear-gradient(-45deg,${c[1]}08,${c[1]}08 2px,transparent 2px,transparent 8px)`,
    'diagonal-cut': `background:${c[0]};background-image:linear-gradient(135deg,${c[1]}11 50%,transparent 50%)`,
    'leaves': `background:${c[0]};background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 Q40 20 30 30 Q20 20 30 10Z' fill='${encodeURIComponent(c[1])}' fill-opacity='0.08'/%3E%3C/svg%3E")`
  };
  return patterns[type] || patterns['dots'];
}

function generateHTML(t) {
  const c = t.colors;
  const fontLink = t.fonts.map((f,i) => `${f.replace(/"/g,'').replace(/ /g,'+')}:wght@400;500;600;700`).join('&family=');
  const primary = Object.values(c)[0];
  const accent = Object.values(c)[1];
  const bgLight = Object.values(c).find(v => v.toLowerCase() === '#ffffff' || v.toLowerCase() === '#f8fafc' || v.toLowerCase() === '#f5f5f5' || v.toLowerCase() === '#fafafa' || v.toLowerCase() === '#fff' || v === c[Object.keys(c)[0]] ? null : v) || Object.values(c)[2];
  const heroStyle = generateHeroPattern(t.heroPattern, c);
  const isLightBg = ['#FFFFFF','#FAF7F2','#F5F0E8','#FFFFF0','#F4EDE4','#FAF9F6','#F0F2F5','#F7F8FA','#F3F4F6','#F8FAFC','#FAFAF9','#F1F5F9','#FEFCE8','#F5F5F5','#F8F9FA','#F5F5F0','#FAFAF5','#F5F0E1','#ECFEFF','#F5F3FF','#EFF6FF','#FFF5F5','#FFF8E1','#FFF8E7','#FAF0D7','#E8EAF6','#E8EEF6','#E6F0FF','#F4F4F5','#F0F0F0','#FEF9C3','#FFF8E1','#FEF2F2','#DCFCE7','#F5F0EB','#FAF9F6'].includes(Object.values(c)[0]);
  const darkBg = isLightBg ? Object.values(c).find(v => parseInt(v.slice(1),16) < 0x808080) || primary : primary;
  const lightText = isLightBg ? primary : '#FFFFFF';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Apex Sportswear — ${t.name}</title>
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config={theme:{extend:{colors:{p:'${primary}','p-light':'${accent}','p-dark':'${darkBg}','bg-light':'${Object.values(c)[2]||"#FFFFFF"}'},fontFamily:{display:['${t.fonts[0]}','serif'],body:['${t.fonts[1]||t.fonts[0]}','sans-serif'],mono:['"JetBrains Mono"','monospace']}}}}
</script>
<link href="https://fonts.googleapis.com/css2?family=${fontLink}&display=swap" rel="stylesheet">
<style>
.hero-bg{${heroStyle}}
.glass{background:${primary}dd;backdrop-filter:blur(8px)}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.anim{animation:fadeUp .5s ease-out forwards}
.anim-d1{animation-delay:.1s;opacity:0}
.anim-d2{animation-delay:.2s;opacity:0}
@media(prefers-reduced-motion:reduce){.anim,.anim-d1,.anim-d2{animation:none;opacity:1;transform:none}}
${t.accentRule ? `.accent-rule{height:2px;background:linear-gradient(90deg,transparent,${accent} 20%,${accent} 80%,transparent)}` : ''}
${Object.keys(PRODUCT_ICONS).map(id => `.prod-icon-${id}{color:${accent}}`).join('\n')}
</style>
</head>
<body class="font-body" style="background:${Object.values(c)[2]||'#FFFFFF'};color:${primary}">

<header class="fixed top-0 w-full z-50 glass">
<div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a href="#" id="h-logo" class="font-display text-xl font-bold" style="color:${lightText}">APEX SPORT</a>
<nav class="hidden md:flex items-center gap-8">
<a href="#about" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${lightText}">About</a>
<a href="#products" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${lightText}">Products</a>
<a href="#process" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${lightText}">Process</a>
<a href="#export" class="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity" style="color:${lightText}">Export</a>
<a href="#contact" class="px-5 py-2 text-sm font-semibold rounded" style="background:${accent};color:${darkBg}">Get Quote</a>
</nav>
<button id="mob-btn" class="md:hidden" style="color:${lightText}"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
</div>
<div id="mob-menu" class="hidden md:hidden px-6 py-4" style="background:${primary}">
<a href="#about" class="block py-2 text-sm opacity-70" style="color:${lightText}">About</a>
<a href="#products" class="block py-2 text-sm opacity-70" style="color:${lightText}">Products</a>
<a href="#process" class="block py-2 text-sm opacity-70" style="color:${lightText}">Process</a>
<a href="#export" class="block py-2 text-sm opacity-70" style="color:${lightText}">Export</a>
<a href="#contact" class="block mt-2 px-5 py-2 text-sm font-semibold text-center rounded" style="background:${accent};color:${darkBg}">Get Quote</a>
</div>
</header>

<section class="hero-bg pt-28 pb-20 md:pt-36 md:pb-28">
<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div class="anim">
<p class="font-mono text-xs tracking-widest uppercase mb-4 opacity-60" style="color:${lightText}">Est. <span id="h-yr"></span> — Sialkot, Pakistan</p>
<h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color:${lightText}" id="h-tag"></h1>
<p class="text-lg leading-relaxed mb-8 max-w-lg opacity-70" style="color:${lightText}" id="h-desc"></p>
<div class="flex flex-wrap gap-4">
<a href="#contact" class="px-8 py-3 font-semibold text-sm tracking-wide rounded" style="background:${accent};color:${darkBg}">Request a Quote</a>
<a href="#products" class="px-8 py-3 font-semibold text-sm tracking-wide rounded border" style="border-color:${accent}88;color:${accent}">View Products</a>
</div>
</div>
<div class="anim anim-d2 relative">
<div class="rounded-lg p-8 flex items-center justify-center" style="background:${primary}22;border:1px solid ${accent}33;min-height:280px">
<div class="text-center">
<div class="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style="background:${accent}22"><svg class="w-12 h-12" style="color:${accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
<p class="font-display text-3xl font-bold" style="color:${lightText}">APEX</p>
<p class="font-mono text-xs tracking-widest uppercase opacity-60" style="color:${lightText}">Sportswear Industries</p>
</div>
</div>
<div class="absolute -bottom-4 -left-4 px-6 py-3 rounded font-mono text-sm font-bold" style="background:${accent};color:${darkBg}">
<span id="h-stat"></span><span class="block text-xs font-normal uppercase tracking-wide opacity-70" id="h-stat-l"></span>
</div>
</div>
</div>
</section>

${t.accentRule ? '<div class="accent-rule"></div>' : ''}

<section class="py-12" style="background:${darkBg}">
<div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" id="stats"></div>
</section>

<section id="about" class="py-20">
<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<p class="font-mono text-xs tracking-widest uppercase mb-3 opacity-60" style="color:${accent}">Our Story</p>
<h2 class="font-display text-3xl md:text-4xl font-bold mb-6">Manufacturing Excellence Since <span id="a-yr"></span></h2>
<p class="leading-relaxed mb-6 opacity-70" id="a-desc"></p>
<div class="grid grid-cols-2 gap-4" id="a-cards"></div>
</div>
<div class="rounded-lg p-8 flex items-center justify-center" style="background:${accent}11;border:1px solid ${accent}22;min-height:240px">
<div class="text-center"><div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style="background:${accent}22"><svg class="w-8 h-8" style="color:${accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div><p class="font-display text-lg font-bold">45,000 sq ft</p><p class="text-xs opacity-60 uppercase tracking-wide">Factory Floor</p></div>
</div>
</div>
</section>

<section class="py-20" style="background:${darkBg}11">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">What We Do</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-4">Manufacturing Capabilities</h2>
<p class="text-center max-w-2xl mx-auto mb-12 opacity-70" id="cap-desc"></p>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4" id="svc-grid"></div>
<div class="mt-12 grid md:grid-cols-3 gap-6 p-8 rounded-lg" style="background:${darkBg}" id="cap-high"></div>
</div>
</section>

<section id="products" class="py-20">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Product Range</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12">Engineered Sportswear</h2>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="p-grid"></div>
</div>
</section>

<section id="process" class="py-20" style="background:${darkBg}11">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">How We Work</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12">Manufacturing Process</h2>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="process-grid"></div>
</div>
</section>

<section id="certs" class="py-20" style="background:${darkBg}">
<div class="max-w-7xl mx-auto px-6 text-center">
<p class="font-mono text-xs tracking-widest uppercase mb-3 opacity-60" style="color:${accent}">Quality Assurance</p>
<h2 class="font-display text-3xl md:text-4xl font-bold mb-12" style="color:${lightText}">Internationally Certified</h2>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4" id="certs-grid"></div>
</div>
</section>

<section id="export" class="py-20">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Global Reach</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12">Export Markets</h2>
<div class="grid md:grid-cols-2 gap-8" id="export-grid"></div>
</div>
</section>

<section class="py-20" style="background:${darkBg}11">
<div class="max-w-7xl mx-auto px-6 text-center">
<p class="font-mono text-xs tracking-widest uppercase mb-3 opacity-60" style="color:${accent}">Who We Serve</p>
<h2 class="font-display text-3xl md:text-4xl font-bold mb-12">Industries</h2>
<div class="flex flex-wrap justify-center gap-3" id="industries"></div>
</div>
</section>

<section class="py-20" style="background:${darkBg}">
<div class="max-w-7xl mx-auto px-6">
<p class="font-mono text-xs tracking-widest uppercase mb-3 text-center opacity-60" style="color:${accent}">Client Trust</p>
<h2 class="font-display text-3xl md:text-4xl font-bold text-center mb-12" style="color:${lightText}">What Our Partners Say</h2>
<div class="grid md:grid-cols-3 gap-6" id="testis"></div>
</div>
</section>

<section id="contact" class="py-20">
<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<div>
<p class="font-mono text-xs tracking-widest uppercase mb-3 opacity-60" style="color:${accent}">Get In Touch</p>
<h2 class="font-display text-3xl md:text-4xl font-bold mb-6">Start Your Order</h2>
<p class="opacity-70 mb-8">Ready to manufacture custom sportswear? Contact us for a quote, sample, or factory tour.</p>
<div class="space-y-3" id="c-info"></div>
</div>
<div class="p-8 rounded-lg" style="background:${darkBg}">
<h3 class="font-display text-xl font-bold mb-6" style="color:${lightText}">Request a Quote</h3>
<form class="space-y-4">
<input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${lightText}" required>
<input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${lightText}" required>
<input type="text" placeholder="Company Name" class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${lightText}">
<select class="w-full px-4 py-3 rounded text-sm border focus:outline-none" style="background:${primary}55;border-color:${accent}44;color:${lightText}88">
<option value="">Select Product Category</option>
<option>Football Kits</option><option>Cricket Apparel</option><option>Boxing Equipment</option>
<option>MMA & Fightwear</option><option>Running Apparel</option><option>Gym & Fitness Wear</option>
<option>Basketball Uniforms</option><option>Martial Arts Uniforms</option><option>Sports Accessories</option>
<option>Compression Wear</option>
</select>
<textarea placeholder="Tell us about your requirements..." rows="4" class="w-full px-4 py-3 rounded text-sm border focus:outline-none resize-none" style="background:${primary}55;border-color:${accent}44;color:${lightText}"></textarea>
<button type="submit" class="w-full py-3 font-semibold text-sm tracking-wide rounded" style="background:${accent};color:${darkBg}">Send Inquiry</button>
</form>
</div>
</div>
</section>

<footer class="py-12" style="background:${darkBg}">
<div class="max-w-7xl mx-auto px-6">
<div class="grid md:grid-cols-4 gap-8 mb-8">
<div><p class="font-display text-xl font-bold mb-3" style="color:${lightText}">APEX SPORT</p><p class="text-sm opacity-50 leading-relaxed" style="color:${lightText}">Premium sportswear manufacturer from Sialkot, Pakistan. Serving global brands since <span id="f-yr"></span>.</p></div>
<div><h4 class="font-semibold text-sm uppercase tracking-wide mb-4" style="color:${accent}">Products</h4><ul class="space-y-2 text-sm opacity-50" style="color:${lightText}" id="f-prods"></ul></div>
<div><h4 class="font-semibold text-sm uppercase tracking-wide mb-4" style="color:${accent}">Company</h4><ul class="space-y-2 text-sm opacity-50" style="color:${lightText}"><li><a href="#about" class="hover:opacity-100 transition-opacity">About Us</a></li><li><a href="#certs" class="hover:opacity-100 transition-opacity">Certifications</a></li><li><a href="#export" class="hover:opacity-100 transition-opacity">Export Markets</a></li><li><a href="#contact" class="hover:opacity-100 transition-opacity">Contact</a></li></ul></div>
<div><h4 class="font-semibold text-sm uppercase tracking-wide mb-4" style="color:${accent}">Contact</h4><ul class="space-y-2 text-sm opacity-50" style="color:${lightText}" id="f-contact"></ul></div>
</div>
<div class="pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style="border-top:1px solid ${accent}22">
<p class="text-xs opacity-40" style="color:${lightText}">&copy; <span id="f-copy"></span> Apex Sportswear Industries. All rights reserved.</p>
<div class="flex gap-4" id="f-social"></div>
</div>
</div>
</footer>

<script>
const PROCESS_STEPS = [
  {icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',name:'Fabric Sourcing'},
  {icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L4.939 4.939m7.061 7.061l-2.879-2.879M12 12l2.879-2.879"/></svg>',name:'Pattern & Cutting'},
  {icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>',name:'Sewing & Assembly'},
  {icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',name:'Print & Embroidery'},
  {icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',name:'Quality Control'},
  {icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',name:'Packaging & Export'}
];

fetch('../../data/content.json').then(r=>r.json()).then(d=>{
  const c=d.company,cap=d.capabilities,exp=d.exportInfo;
  document.querySelector('#h-yr').textContent=c.founded;
  document.querySelector('#h-tag').textContent=c.tagline;
  document.querySelector('#h-desc').textContent=c.description;
  document.querySelector('#h-stat').textContent=d.stats[0].value;
  document.querySelector('#h-stat-l').textContent=d.stats[0].label;
  document.querySelector('#stats').innerHTML=d.stats.map(s=>'<div class="text-center"><div class="font-mono text-2xl md:text-3xl font-bold" style="color:${lightText}">'+s.value+'</div><div class="text-xs uppercase tracking-wide mt-1 opacity-50" style="color:${lightText}">'+s.label+'</div></div>').join('');
  document.querySelector('#a-yr').textContent=c.founded;
  document.querySelector('#a-desc').textContent=c.description;
  document.querySelector('#a-cards').innerHTML=[{v:c.employees,l:'Workers'},{v:c.factorySize,l:'Factory'},{v:c.annualOutput,l:'Output'},{v:'2-4',l:'Weeks Lead'}].map(x=>'<div class="p-4 rounded" style="background:${accent}11"><span class="font-mono text-lg font-bold" style="color:${accent}">'+x.v+'</span><span class="block text-xs uppercase tracking-wide mt-1 opacity-60">'+x.l+'</span></div>').join('');
  document.querySelector('#cap-desc').textContent=cap.description;
  document.querySelector('#svc-grid').innerHTML=cap.services.map(s=>'<div class="p-4 rounded flex items-center gap-3" style="background:${Object.values(c)[2]||'#fff'}"><div class="w-2 h-2 rounded-full flex-shrink-0" style="background:${accent}"></div><span class="font-medium text-sm">'+s+'</span></div>').join('');
  document.querySelector('#cap-high').innerHTML='<div class="text-center"><span class="font-mono text-2xl font-bold block" style="color:${accent}">'+cap.capacity.split(' ')[0]+'</span><span class="text-xs uppercase tracking-wide opacity-50" style="color:${lightText}">'+cap.capacity.split(' ').slice(1).join(' ')+'</span></div><div class="text-center"><span class="font-mono text-2xl font-bold block" style="color:${accent}">'+cap.leadTime.split(' ')[0]+'</span><span class="text-xs uppercase tracking-wide opacity-50" style="color:${lightText}">'+cap.leadTime.split(' ').slice(1).join(' ')+'</span></div><div class="text-center"><span class="font-mono text-2xl font-bold block" style="color:${accent}">'+cap.moq.split(' ')[0]+'</span><span class="text-xs uppercase tracking-wide opacity-50" style="color:${lightText}">'+cap.moq.split(' ').slice(1).join(' ')+'</span></div>';
  document.querySelector('#p-grid').innerHTML=d.products.map(p=>{
    const icon=PRODUCT_ICONS[p.id]||'';
    return '<div class="rounded-lg overflow-hidden hover:shadow-lg transition-shadow group" style="background:${Object.values(c)[2]||'#fff'}"><div class="p-6 flex items-center justify-center" style="background:linear-gradient(135deg,'+({'football-kits':'#1B4332,#2D6A4F','cricket-wear':'#0A1F44,#1E3A5F','boxing-gear':'#8B0000,#B71C1C','mma-fightwear':'#2C2C2C,#4A4A4A','running-apparel':'#1A535C,#2D8B7A','gym-fitness':'#0D0D0D,#1A3A1A','basketball-uniforms':'#0066FF,#3388FF','martial-arts':'#334155,#475569','sports-accessories':'#2C3539,#3D5A6E','compression-wear':'#1C1C1C,#3A1A1A'}[p.id]||'#333,#555').split(',')[0]+','+({'football-kits':'#1B4332,#2D6A4F','cricket-wear':'#0A1F44,#1E3A5F','boxing-gear':'#8B0000,#B71C1C','mma-fightwear':'#2C2C2C,#4A4A4A','running-apparel':'#1A535C,#2D8B7A','gym-fitness':'#0D0D0D,#1A3A1A','basketball-uniforms':'#0066FF,#3388FF','martial-arts':'#334155,#475569','sports-accessories':'#2C3539,#3D5A6E','compression-wear':'#1C1C1C,#3A1A1A'}[p.id]||'#333,#555').split(',')[1]+');min-height:140px;color:#fff">'+icon+'</div><div class="p-5"><p class="text-xs font-mono uppercase tracking-wide mb-1" style="color:${accent}">'+p.category+'</p><h3 class="font-display text-lg font-bold mb-2">'+p.name+'</h3><p class="text-sm leading-relaxed mb-3 opacity-70">'+p.description+'</p><div class="flex flex-wrap gap-1 mb-3">'+p.features.slice(0,3).map(f=>'<span class="text-xs px-2 py-1 rounded" style="background:${accent}15">'+f+'</span>').join('')+'</div><p class="text-xs opacity-50 mb-3">MOQ: '+p.specs.moq+' · '+p.specs.material.split(',')[0]+'</p><a href="#contact" class="text-sm font-semibold hover:opacity-80 transition-opacity" style="color:${accent}">Request Sample →</a></div></div>';
  }).join('');
  document.querySelector('#process-grid').innerHTML=PROCESS_STEPS.map((s,i)=>'<div class="p-4 rounded text-center" style="background:${Object.values(c)[2]||'#fff'}"><div class="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center" style="background:${accent}22;color:${accent}">'+s.icon+'</div><p class="font-mono text-xs mb-1" style="color:${accent}">'+(i+1).toString().padStart(2,'0')+'</p><p class="text-sm font-medium">'+s.name+'</p></div>').join('');
  document.querySelector('#certs-grid').innerHTML=d.certifications.map(x=>'<div class="p-5 rounded text-center" style="background:${primary}22;border:1px solid ${accent}22"><span class="text-2xl block mb-2">'+x.icon+'</span><h4 class="font-semibold text-sm mb-1">'+x.name+'</h4><p class="text-xs opacity-50">'+x.description+'</p></div>').join('');
  document.querySelector('#export-grid').innerHTML='<div><h3 class="font-display text-xl font-bold mb-4">Countries We Serve</h3><div class="flex flex-wrap gap-2 mb-8">'+exp.countries.map(c=>'<span class="text-sm px-3 py-1.5 rounded" style="background:${accent}11">'+c+'</span>').join('')+'</div><h3 class="font-display text-xl font-bold mb-4">Industries</h3><div class="flex flex-wrap gap-2">'+d.industriesServed.map(i=>'<span class="text-sm px-3 py-1.5 rounded" style="background:${darkBg};color:${lightText}">'+i+'</span>').join('')+'</div></div><div><h3 class="font-display text-xl font-bold mb-4">Trade Terms</h3><div class="space-y-3"><div class="p-4 rounded" style="background:${Object.values(c)[2]||'#fff'}"><span class="font-mono text-xs uppercase tracking-wide block mb-1" style="color:${accent}">Shipping</span><span class="text-sm">'+exp.shippingTerms.join(' · ')+'</span></div><div class="p-4 rounded" style="background:${Object.values(c)[2]||'#fff'}"><span class="font-mono text-xs uppercase tracking-wide block mb-1" style="color:${accent}">Payment</span><span class="text-sm">'+exp.paymentTerms.join(' · ')+'</span></div><div class="p-4 rounded" style="background:${Object.values(c)[2]||'#fff'}"><span class="font-mono text-xs uppercase tracking-wide block mb-1" style="color:${accent}">Special Conditions</span><span class="text-sm">'+exp.specialConditions.join(' · ')+'</span></div></div></div>';
  document.querySelector('#testis').innerHTML=d.testimonials.map(t=>'<div class="p-6 rounded" style="background:${primary}22;border:1px solid ${accent}22"><p class="text-sm leading-relaxed mb-4 italic opacity-80">"'+t.quote+'"</p><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs" style="background:${accent}22;color:${accent}">'+t.author.split(' ').map(n=>n[0]).join('')+'</div><div><span class="text-sm font-semibold block">'+t.author+'</span><span class="text-xs" style="color:${accent}">'+t.company+' — '+t.country+'</span></div></div></div>').join('');
  document.querySelector('#c-info').innerHTML='<div class="flex items-start gap-3"><span style="color:${accent}">📍</span><span class="text-sm">'+d.contact.address+'</span></div><div class="flex items-start gap-3"><span style="color:${accent}">📞</span><span class="text-sm">'+d.contact.phone+'</span></div><div class="flex items-start gap-3"><span style="color:${accent}">💬</span><span class="text-sm">'+d.contact.whatsapp+'</span></div><div class="flex items-start gap-3"><span style="color:${accent}">✉️</span><span class="text-sm">'+d.contact.email+'</span></div>';
  document.querySelector('#f-yr').textContent=c.founded;
  document.querySelector('#f-prods').innerHTML=d.products.slice(0,6).map(p=>'<li><a href="#products" class="hover:opacity-100 transition-opacity">'+p.name+'</a></li>').join('');
  document.querySelector('#f-contact').innerHTML='<li>'+d.contact.address+'</li><li>'+d.contact.phone+'</li><li>'+d.contact.email+'</li>';
  document.querySelector('#f-copy').textContent=new Date().getFullYear();
  document.querySelector('#f-social').innerHTML=Object.entries(d.contact.social).map(([k,v])=>'<a href="https://'+v+'" target="_blank" class="text-xs uppercase tracking-wide opacity-40 hover:opacity-100 transition-opacity" style="color:${lightText}">'+k+'</a>').join('');
});
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
