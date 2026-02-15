/**
 * SVG illustrations for lesson slides.
 * Each function returns a JSX-compatible inline SVG themed to the lesson topic,
 * using the CodeQuest Academy color palette.
 */

const COLORS = {
  violet: '#7C3AED',
  violetLight: '#8B5CF6',
  violetDark: '#6D28D9',
  cyan: '#06D6A0',
  cyanDark: '#05B588',
  gold: '#FFD166',
  coral: '#EF476F',
  space: '#0F0E2E',
  spaceLight: '#1A1940',
  spaceLighter: '#252452',
  white: '#F8F9FC',
  dim: '#A0A3B1',
};

// Helper: wrap SVG content in a standard viewBox container
function svgWrap(inner, vb = '0 0 400 260') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="none">${inner}</svg>`;
}

// ─── WORLD 1: Foundation Forge (HTML) ───

function webEverywhere() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="80" y="30" width="240" height="160" rx="12" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2"/>
    <rect x="80" y="30" width="240" height="24" rx="12" fill="${COLORS.violet}"/>
    <circle cx="96" cy="42" r="4" fill="${COLORS.coral}"/>
    <circle cx="108" cy="42" r="4" fill="${COLORS.gold}"/>
    <circle cx="120" cy="42" r="4" fill="${COLORS.cyan}"/>
    <rect x="140" y="37" width="120" height="10" rx="5" fill="${COLORS.violetDark}"/>
    <text x="200" y="44" text-anchor="middle" fill="${COLORS.white}" font-size="7" font-family="monospace">www.codequest.dev</text>
    <rect x="100" y="70" width="200" height="12" rx="3" fill="${COLORS.violet}" opacity="0.3"/>
    <rect x="100" y="90" width="160" height="8" rx="3" fill="${COLORS.cyan}" opacity="0.25"/>
    <rect x="100" y="104" width="180" height="8" rx="3" fill="${COLORS.cyan}" opacity="0.2"/>
    <rect x="100" y="118" width="140" height="8" rx="3" fill="${COLORS.cyan}" opacity="0.15"/>
    <rect x="100" y="140" width="90" height="30" rx="6" fill="${COLORS.violet}"/>
    <text x="145" y="159" text-anchor="middle" fill="${COLORS.white}" font-size="10" font-weight="bold">Explore</text>
    <circle cx="60" cy="220" r="16" fill="${COLORS.violet}" opacity="0.3"/>
    <circle cx="340" cy="220" r="16" fill="${COLORS.cyan}" opacity="0.3"/>
    <circle cx="200" cy="230" r="12" fill="${COLORS.gold}" opacity="0.3"/>
    <text x="200" y="250" text-anchor="middle" fill="${COLORS.dim}" font-size="10">The web is built with code!</text>
  `);
}

function howWebsitesWork() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="30" y="60" width="80" height="100" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <text x="70" y="100" text-anchor="middle" fill="${COLORS.cyan}" font-size="10">Your</text>
    <text x="70" y="115" text-anchor="middle" fill="${COLORS.cyan}" font-size="10">Browser</text>
    <text x="70" y="145" text-anchor="middle" font-size="24">🖥️</text>
    <line x1="115" y1="110" x2="155" y2="110" stroke="${COLORS.gold}" stroke-width="2" stroke-dasharray="6 3"/>
    <polygon points="155,105 165,110 155,115" fill="${COLORS.gold}"/>
    <rect x="165" y="80" width="70" height="60" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="2"/>
    <text x="200" y="105" text-anchor="middle" fill="${COLORS.gold}" font-size="9">Request</text>
    <text x="200" y="120" text-anchor="middle" font-size="16">📡</text>
    <line x1="240" y1="110" x2="280" y2="110" stroke="${COLORS.violet}" stroke-width="2" stroke-dasharray="6 3"/>
    <polygon points="280,105 290,110 280,115" fill="${COLORS.violet}"/>
    <rect x="290" y="60" width="80" height="100" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2"/>
    <text x="330" y="100" text-anchor="middle" fill="${COLORS.violet}" font-size="10">Web</text>
    <text x="330" y="115" text-anchor="middle" fill="${COLORS.violet}" font-size="10">Server</text>
    <text x="330" y="145" text-anchor="middle" font-size="24">🗄️</text>
    <rect x="100" y="190" width="60" height="40" rx="6" fill="${COLORS.coral}" opacity="0.8"/>
    <text x="130" y="214" text-anchor="middle" fill="${COLORS.white}" font-size="9" font-weight="bold">HTML</text>
    <rect x="170" y="190" width="60" height="40" rx="6" fill="${COLORS.cyan}" opacity="0.8"/>
    <text x="200" y="214" text-anchor="middle" fill="${COLORS.white}" font-size="9" font-weight="bold">CSS</text>
    <rect x="240" y="190" width="60" height="40" rx="6" fill="${COLORS.gold}" opacity="0.8"/>
    <text x="270" y="214" text-anchor="middle" fill="${COLORS.space}" font-size="9" font-weight="bold">JS</text>
    <text x="200" y="250" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Server sends back HTML, CSS & JS files</text>
  `);
}

function htmlSkeleton() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="100" y="20" width="200" height="220" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2"/>
    <text x="200" y="50" text-anchor="middle" fill="${COLORS.violet}" font-size="12" font-weight="bold">HTML = Skeleton</text>
    <line x1="200" y1="70" x2="200" y2="80" stroke="${COLORS.cyan}" stroke-width="2"/>
    <rect x="140" y="80" width="120" height="24" rx="6" fill="${COLORS.violet}" opacity="0.3"/>
    <text x="200" y="96" text-anchor="middle" fill="${COLORS.violetLight}" font-size="10" font-family="monospace">&lt;head&gt;</text>
    <line x1="200" y1="104" x2="200" y2="114" stroke="${COLORS.cyan}" stroke-width="2"/>
    <rect x="120" y="114" width="160" height="100" rx="6" fill="${COLORS.cyan}" opacity="0.15"/>
    <text x="200" y="134" text-anchor="middle" fill="${COLORS.cyan}" font-size="10" font-family="monospace">&lt;body&gt;</text>
    <rect x="140" y="142" width="120" height="14" rx="3" fill="${COLORS.gold}" opacity="0.3"/>
    <text x="200" y="153" text-anchor="middle" fill="${COLORS.gold}" font-size="8" font-family="monospace">&lt;h1&gt;Title&lt;/h1&gt;</text>
    <rect x="140" y="162" width="120" height="10" rx="3" fill="${COLORS.dim}" opacity="0.2"/>
    <rect x="140" y="178" width="100" height="10" rx="3" fill="${COLORS.dim}" opacity="0.15"/>
    <rect x="140" y="194" width="80" height="10" rx="3" fill="${COLORS.dim}" opacity="0.1"/>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">HTML tells the browser WHAT to show</text>
  `);
}

function codeEditorIntro() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="20" y="20" width="170" height="200" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2"/>
    <rect x="20" y="20" width="170" height="22" rx="10" fill="${COLORS.violet}"/>
    <text x="105" y="35" text-anchor="middle" fill="${COLORS.white}" font-size="9" font-weight="bold">Code Editor</text>
    <text x="35" y="60" fill="${COLORS.dim}" font-size="8" font-family="monospace">1</text>
    <text x="50" y="60" fill="${COLORS.violet}" font-size="8" font-family="monospace">&lt;h1&gt;</text>
    <text x="85" y="60" fill="${COLORS.white}" font-size="8" font-family="monospace">Hello!</text>
    <text x="120" y="60" fill="${COLORS.violet}" font-size="8" font-family="monospace">&lt;/h1&gt;</text>
    <text x="35" y="76" fill="${COLORS.dim}" font-size="8" font-family="monospace">2</text>
    <text x="50" y="76" fill="${COLORS.cyan}" font-size="8" font-family="monospace">&lt;p&gt;</text>
    <text x="70" y="76" fill="${COLORS.white}" font-size="8" font-family="monospace">I am coding</text>
    <text x="135" y="76" fill="${COLORS.cyan}" font-size="8" font-family="monospace">&lt;/p&gt;</text>
    <rect x="50" y="84" width="60" height="2" rx="1" fill="${COLORS.violet}" opacity="0.5"/>
    <text x="35" y="100" fill="${COLORS.dim}" font-size="8" font-family="monospace">3</text>
    <rect x="50" y="94" width="80" height="8" rx="2" fill="${COLORS.dim}" opacity="0.15"/>
    <text x="105" y="200" text-anchor="middle" font-size="28">⌨️</text>
    <text x="200" y="130" text-anchor="middle" fill="${COLORS.gold}" font-size="24">→</text>
    <rect x="210" y="20" width="170" height="200" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <rect x="210" y="20" width="170" height="22" rx="10" fill="${COLORS.cyan}"/>
    <text x="295" y="35" text-anchor="middle" fill="${COLORS.space}" font-size="9" font-weight="bold">Live Preview</text>
    <text x="295" y="80" text-anchor="middle" fill="${COLORS.white}" font-size="18" font-weight="bold">Hello!</text>
    <text x="295" y="105" text-anchor="middle" fill="${COLORS.dim}" font-size="11">I am coding</text>
    <text x="295" y="200" text-anchor="middle" font-size="28">✨</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Type code → See it live!</text>
  `);
}

function tryItYourself() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="100" y="30" width="200" height="160" rx="14" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="2"/>
    <text x="200" y="70" text-anchor="middle" fill="${COLORS.gold}" font-size="40">🚀</text>
    <text x="200" y="105" text-anchor="middle" fill="${COLORS.white}" font-size="14" font-weight="bold">Try It!</text>
    <text x="200" y="125" text-anchor="middle" fill="${COLORS.dim}" font-size="10">Type anything in the editor</text>
    <text x="200" y="140" text-anchor="middle" fill="${COLORS.dim}" font-size="10">and click Run to see it!</text>
    <rect x="150" y="155" width="100" height="28" rx="8" fill="${COLORS.violet}"/>
    <text x="200" y="173" text-anchor="middle" fill="${COLORS.white}" font-size="10" font-weight="bold">▶ Run Code</text>
    <circle cx="60" cy="200" r="20" fill="${COLORS.cyan}" opacity="0.15"/>
    <circle cx="340" cy="200" r="20" fill="${COLORS.violet}" opacity="0.15"/>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">No wrong answers — just experiment!</text>
  `);
}

function doctypeSpell() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="60" y="40" width="280" height="50" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="2"/>
    <text x="200" y="72" text-anchor="middle" fill="${COLORS.gold}" font-size="14" font-family="monospace" font-weight="bold">&lt;!DOCTYPE html&gt;</text>
    <text x="40" y="72" text-anchor="middle" font-size="22">✨</text>
    <text x="360" y="72" text-anchor="middle" font-size="22">✨</text>
    <line x1="200" y1="95" x2="200" y2="115" stroke="${COLORS.violet}" stroke-width="2" stroke-dasharray="4 3"/>
    <rect x="80" y="115" width="240" height="100" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2"/>
    <text x="200" y="145" text-anchor="middle" fill="${COLORS.violet}" font-size="12" font-family="monospace">&lt;html&gt;</text>
    <rect x="110" y="155" width="180" height="40" rx="6" fill="${COLORS.violet}" opacity="0.15"/>
    <text x="200" y="180" text-anchor="middle" fill="${COLORS.dim}" font-size="10">Your entire webpage lives here</text>
    <text x="200" y="205" text-anchor="middle" fill="${COLORS.violet}" font-size="12" font-family="monospace">&lt;/html&gt;</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Every HTML file starts with DOCTYPE!</text>
  `);
}

function htmlTag() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="50" y="30" width="300" height="190" rx="12" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <text x="200" y="55" text-anchor="middle" fill="${COLORS.cyan}" font-size="11" font-family="monospace">&lt;html&gt;</text>
    <rect x="80" y="65" width="240" height="60" rx="8" fill="${COLORS.violet}" opacity="0.15" stroke="${COLORS.violet}" stroke-width="1" stroke-dasharray="4 2"/>
    <text x="200" y="90" text-anchor="middle" fill="${COLORS.violet}" font-size="10" font-family="monospace">&lt;head&gt; ... &lt;/head&gt;</text>
    <text x="200" y="108" text-anchor="middle" fill="${COLORS.dim}" font-size="8">Invisible info (title, metadata)</text>
    <rect x="80" y="135" width="240" height="60" rx="8" fill="${COLORS.cyan}" opacity="0.15" stroke="${COLORS.cyan}" stroke-width="1" stroke-dasharray="4 2"/>
    <text x="200" y="160" text-anchor="middle" fill="${COLORS.cyan}" font-size="10" font-family="monospace">&lt;body&gt; ... &lt;/body&gt;</text>
    <text x="200" y="178" text-anchor="middle" fill="${COLORS.dim}" font-size="8">Everything you see on the page</text>
    <text x="200" y="212" text-anchor="middle" fill="${COLORS.cyan}" font-size="11" font-family="monospace">&lt;/html&gt;</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">The &lt;html&gt; tag wraps everything</text>
  `);
}

function twoSections() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="30" y="30" width="160" height="180" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2"/>
    <rect x="30" y="30" width="160" height="28" rx="10" fill="${COLORS.violet}"/>
    <text x="110" y="49" text-anchor="middle" fill="${COLORS.white}" font-size="11" font-weight="bold">&lt;head&gt;</text>
    <text x="110" y="80" text-anchor="middle" font-size="28">🧠</text>
    <text x="110" y="105" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Invisible info</text>
    <text x="110" y="120" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Page title</text>
    <text x="110" y="135" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Metadata</text>
    <rect x="50" y="150" width="120" height="20" rx="4" fill="${COLORS.violet}" opacity="0.2"/>
    <text x="110" y="164" text-anchor="middle" fill="${COLORS.violetLight}" font-size="8" font-family="monospace">&lt;title&gt;My Page&lt;/title&gt;</text>
    <rect x="210" y="30" width="160" height="180" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <rect x="210" y="30" width="160" height="28" rx="10" fill="${COLORS.cyan}"/>
    <text x="290" y="49" text-anchor="middle" fill="${COLORS.space}" font-size="11" font-weight="bold">&lt;body&gt;</text>
    <text x="290" y="80" text-anchor="middle" font-size="28">👁️</text>
    <text x="290" y="105" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Visible content</text>
    <text x="290" y="120" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Text, images</text>
    <text x="290" y="135" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Links, buttons</text>
    <rect x="230" y="150" width="120" height="20" rx="4" fill="${COLORS.cyan}" opacity="0.2"/>
    <text x="290" y="164" text-anchor="middle" fill="${COLORS.cyan}" font-size="8" font-family="monospace">&lt;h1&gt;Hello!&lt;/h1&gt;</text>
    <text x="200" y="240" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Head = brain 🧠  |  Body = what you see 👁️</text>
  `);
}

function headSection() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="60" y="30" width="280" height="60" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2"/>
    <text x="200" y="55" text-anchor="middle" fill="${COLORS.violet}" font-size="11" font-family="monospace">&lt;head&gt;</text>
    <text x="200" y="75" text-anchor="middle" fill="${COLORS.gold}" font-size="10" font-family="monospace">&lt;title&gt;My Awesome Page&lt;/title&gt;</text>
    <rect x="100" y="110" width="200" height="40" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="1.5"/>
    <circle cx="116" cy="122" r="4" fill="${COLORS.coral}"/>
    <circle cx="128" cy="122" r="4" fill="${COLORS.gold}"/>
    <circle cx="140" cy="122" r="4" fill="${COLORS.cyan}"/>
    <text x="200" y="140" text-anchor="middle" fill="${COLORS.gold}" font-size="9">My Awesome Page</text>
    <line x1="200" y1="90" x2="200" y2="110" stroke="${COLORS.gold}" stroke-width="1.5" stroke-dasharray="4 2"/>
    <text x="200" y="175" text-anchor="middle" fill="${COLORS.white}" font-size="10">The title shows in the browser tab! ↑</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">The &lt;head&gt; holds invisible page info</text>
  `);
}

function bodySection() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="60" y="20" width="280" height="200" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <text x="200" y="45" text-anchor="middle" fill="${COLORS.cyan}" font-size="11" font-family="monospace">&lt;body&gt;</text>
    <rect x="90" y="55" width="220" height="20" rx="4" fill="${COLORS.gold}" opacity="0.2"/>
    <text x="200" y="69" text-anchor="middle" fill="${COLORS.gold}" font-size="12" font-weight="bold">Welcome to My Page!</text>
    <rect x="90" y="85" width="220" height="10" rx="3" fill="${COLORS.dim}" opacity="0.2"/>
    <rect x="90" y="100" width="180" height="10" rx="3" fill="${COLORS.dim}" opacity="0.15"/>
    <rect x="90" y="120" width="100" height="50" rx="6" fill="${COLORS.violet}" opacity="0.2"/>
    <text x="140" y="150" text-anchor="middle" font-size="20">🖼️</text>
    <rect x="200" y="120" width="110" height="50" rx="6" fill="${COLORS.cyan}" opacity="0.15"/>
    <rect x="210" y="130" width="90" height="8" rx="2" fill="${COLORS.dim}" opacity="0.2"/>
    <rect x="210" y="142" width="70" height="8" rx="2" fill="${COLORS.dim}" opacity="0.15"/>
    <rect x="210" y="154" width="50" height="8" rx="2" fill="${COLORS.dim}" opacity="0.1"/>
    <text x="200" y="200" text-anchor="middle" fill="${COLORS.cyan}" font-size="11" font-family="monospace">&lt;/body&gt;</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Everything visible goes in the &lt;body&gt;</text>
  `);
}

function firstProject() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="100" y="20" width="200" height="190" rx="12" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="2.5"/>
    <rect x="100" y="20" width="200" height="28" rx="12" fill="url(#goldGrad)"/>
    <defs><linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${COLORS.gold}"/><stop offset="100%" stop-color="${COLORS.coral}"/></linearGradient></defs>
    <text x="200" y="39" text-anchor="middle" fill="${COLORS.space}" font-size="10" font-weight="bold">⭐ My Name Card ⭐</text>
    <text x="200" y="80" text-anchor="middle" fill="${COLORS.white}" font-size="16" font-weight="bold">Alex Coder</text>
    <line x1="140" y1="90" x2="260" y2="90" stroke="${COLORS.violet}" stroke-width="1" opacity="0.5"/>
    <text x="200" y="115" text-anchor="middle" fill="${COLORS.dim}" font-size="10">I love building websites!</text>
    <text x="200" y="135" text-anchor="middle" fill="${COLORS.dim}" font-size="10">I'm learning HTML at</text>
    <text x="200" y="150" text-anchor="middle" fill="${COLORS.cyan}" font-size="10">CodeQuest Academy</text>
    <rect x="150" y="165" width="100" height="24" rx="6" fill="${COLORS.violet}"/>
    <text x="200" y="181" text-anchor="middle" fill="${COLORS.white}" font-size="9" font-weight="bold">Say Hello!</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Your first complete webpage!</text>
  `);
}

function headingHierarchy() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="40" y="25" width="320" height="30" rx="6" fill="${COLORS.violet}" opacity="0.2"/>
    <text x="55" y="45" fill="${COLORS.violet}" font-size="18" font-weight="bold">h1 — Main Title</text>
    <rect x="60" y="62" width="280" height="26" rx="5" fill="${COLORS.cyan}" opacity="0.15"/>
    <text x="75" y="80" fill="${COLORS.cyan}" font-size="15" font-weight="bold">h2 — Section</text>
    <rect x="80" y="95" width="260" height="22" rx="5" fill="${COLORS.gold}" opacity="0.12"/>
    <text x="95" y="111" fill="${COLORS.gold}" font-size="13" font-weight="bold">h3 — Sub-section</text>
    <rect x="100" y="124" width="240" height="20" rx="4" fill="${COLORS.coral}" opacity="0.1"/>
    <text x="115" y="138" fill="${COLORS.coral}" font-size="11" font-weight="bold">h4 — Detail</text>
    <rect x="120" y="150" width="220" height="18" rx="4" fill="${COLORS.dim}" opacity="0.1"/>
    <text x="135" y="163" fill="${COLORS.dim}" font-size="10">h5 — Small Detail</text>
    <rect x="140" y="174" width="200" height="16" rx="4" fill="${COLORS.dim}" opacity="0.07"/>
    <text x="155" y="186" fill="${COLORS.dim}" font-size="9">h6 — Tiny Detail</text>
    <text x="200" y="220" text-anchor="middle" fill="${COLORS.white}" font-size="10">Like a book outline — biggest to smallest!</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Use h1 once, h2 for sections, h3+ for details</text>
  `);
}

function headingUsage() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="50" y="20" width="300" height="200" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="1.5"/>
    <text x="200" y="48" text-anchor="middle" fill="${COLORS.violet}" font-size="14" font-weight="bold">📖 My Book</text>
    <text x="80" y="75" fill="${COLORS.cyan}" font-size="11" font-weight="bold">Chapter 1: Adventure</text>
    <text x="100" y="95" fill="${COLORS.gold}" font-size="10">1.1 The Beginning</text>
    <rect x="100" y="100" width="180" height="6" rx="2" fill="${COLORS.dim}" opacity="0.15"/>
    <rect x="100" y="110" width="150" height="6" rx="2" fill="${COLORS.dim}" opacity="0.1"/>
    <text x="100" y="132" fill="${COLORS.gold}" font-size="10">1.2 The Journey</text>
    <rect x="100" y="137" width="160" height="6" rx="2" fill="${COLORS.dim}" opacity="0.15"/>
    <text x="80" y="162" fill="${COLORS.cyan}" font-size="11" font-weight="bold">Chapter 2: Discovery</text>
    <text x="100" y="182" fill="${COLORS.gold}" font-size="10">2.1 New Lands</text>
    <rect x="100" y="187" width="140" height="6" rx="2" fill="${COLORS.dim}" opacity="0.15"/>
    <text x="320" y="75" fill="${COLORS.violet}" font-size="8">← h1</text>
    <text x="320" y="95" fill="${COLORS.cyan}" font-size="8">← h2</text>
    <text x="320" y="132" fill="${COLORS.gold}" font-size="8">← h3</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Headings organize content like a book outline</text>
  `);
}

function paragraphs() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="50" y="30" width="300" height="70" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="1.5"/>
    <text x="65" y="50" fill="${COLORS.cyan}" font-size="9" font-family="monospace">&lt;p&gt;</text>
    <rect x="65" y="55" width="260" height="8" rx="2" fill="${COLORS.dim}" opacity="0.3"/>
    <rect x="65" y="67" width="220" height="8" rx="2" fill="${COLORS.dim}" opacity="0.25"/>
    <rect x="65" y="79" width="180" height="8" rx="2" fill="${COLORS.dim}" opacity="0.2"/>
    <text x="330" y="90" fill="${COLORS.cyan}" font-size="9" font-family="monospace">&lt;/p&gt;</text>
    <rect x="50" y="115" width="14" height="14" rx="3" fill="${COLORS.gold}" opacity="0.3"/>
    <text x="57" y="126" text-anchor="middle" fill="${COLORS.gold}" font-size="10">↕</text>
    <text x="80" y="126" fill="${COLORS.dim}" font-size="9">Automatic space between paragraphs</text>
    <rect x="50" y="140" width="300" height="70" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="1.5"/>
    <text x="65" y="160" fill="${COLORS.cyan}" font-size="9" font-family="monospace">&lt;p&gt;</text>
    <rect x="65" y="165" width="240" height="8" rx="2" fill="${COLORS.dim}" opacity="0.3"/>
    <rect x="65" y="177" width="200" height="8" rx="2" fill="${COLORS.dim}" opacity="0.25"/>
    <rect x="65" y="189" width="160" height="8" rx="2" fill="${COLORS.dim}" opacity="0.2"/>
    <text x="330" y="200" fill="${COLORS.cyan}" font-size="9" font-family="monospace">&lt;/p&gt;</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Each &lt;p&gt; creates a new paragraph with spacing</text>
  `);
}

function lineBreaks() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="50" y="30" width="300" height="90" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="1.5"/>
    <text x="200" y="55" text-anchor="middle" fill="${COLORS.white}" font-size="10">Line one of text</text>
    <text x="200" y="72" text-anchor="middle" fill="${COLORS.gold}" font-size="9" font-family="monospace">&lt;br&gt;</text>
    <text x="200" y="90" text-anchor="middle" fill="${COLORS.white}" font-size="10">Line two — same paragraph!</text>
    <text x="200" y="108" text-anchor="middle" fill="${COLORS.gold}" font-size="9" font-family="monospace">&lt;br&gt;</text>
    <text x="200" y="145" text-anchor="middle" fill="${COLORS.white}" font-size="11" font-weight="bold">New line, no new paragraph</text>
    <text x="200" y="170" text-anchor="middle" fill="${COLORS.dim}" font-size="10">&lt;br&gt; = line break (self-closing!)</text>
    <text x="200" y="195" text-anchor="middle" fill="${COLORS.coral}" font-size="9">No &lt;/br&gt; needed!</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Use &lt;br&gt; for a new line within a paragraph</text>
  `);
}

function boldItalic() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="40" y="30" width="320" height="55" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="1.5"/>
    <text x="200" y="52" text-anchor="middle" fill="${COLORS.violet}" font-size="10" font-family="monospace">&lt;strong&gt;</text>
    <text x="200" y="72" text-anchor="middle" fill="${COLORS.white}" font-size="14" font-weight="bold">This text is BOLD</text>
    <rect x="40" y="100" width="320" height="55" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="1.5"/>
    <text x="200" y="122" text-anchor="middle" fill="${COLORS.cyan}" font-size="10" font-family="monospace">&lt;em&gt;</text>
    <text x="200" y="142" text-anchor="middle" fill="${COLORS.white}" font-size="14" font-style="italic">This text is italic</text>
    <rect x="40" y="170" width="320" height="55" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="1.5"/>
    <text x="200" y="192" text-anchor="middle" fill="${COLORS.gold}" font-size="10" font-family="monospace">&lt;strong&gt;&lt;em&gt;</text>
    <text x="200" y="212" text-anchor="middle" fill="${COLORS.white}" font-size="14" font-weight="bold" font-style="italic">Bold AND italic!</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">strong = important (bold) | em = emphasis (italic)</text>
  `);
}

function lists() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="20" y="20" width="170" height="190" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="1.5"/>
    <text x="105" y="45" text-anchor="middle" fill="${COLORS.cyan}" font-size="11" font-weight="bold">&lt;ul&gt; Unordered</text>
    <circle cx="50" cy="72" r="4" fill="${COLORS.cyan}"/>
    <text x="62" y="76" fill="${COLORS.white}" font-size="10">Pizza</text>
    <circle cx="50" cy="96" r="4" fill="${COLORS.cyan}"/>
    <text x="62" y="100" fill="${COLORS.white}" font-size="10">Coding</text>
    <circle cx="50" cy="120" r="4" fill="${COLORS.cyan}"/>
    <text x="62" y="124" fill="${COLORS.white}" font-size="10">Games</text>
    <text x="105" y="160" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Bullet points</text>
    <text x="105" y="175" text-anchor="middle" fill="${COLORS.dim}" font-size="9">No specific order</text>
    <rect x="210" y="20" width="170" height="190" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="1.5"/>
    <text x="295" y="45" text-anchor="middle" fill="${COLORS.gold}" font-size="11" font-weight="bold">&lt;ol&gt; Ordered</text>
    <text x="240" y="76" fill="${COLORS.gold}" font-size="10" font-weight="bold">1.</text>
    <text x="258" y="76" fill="${COLORS.white}" font-size="10">Get bread</text>
    <text x="240" y="100" fill="${COLORS.gold}" font-size="10" font-weight="bold">2.</text>
    <text x="258" y="100" fill="${COLORS.white}" font-size="10">Add filling</text>
    <text x="240" y="124" fill="${COLORS.gold}" font-size="10" font-weight="bold">3.</text>
    <text x="258" y="124" fill="${COLORS.white}" font-size="10">Enjoy!</text>
    <text x="295" y="160" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Numbered list</text>
    <text x="295" y="175" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Steps in order</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Each item goes in an &lt;li&gt; tag</text>
  `);
}

function anchorTag() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="50" y="30" width="300" height="50" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="1.5"/>
    <text x="200" y="55" text-anchor="middle" fill="${COLORS.violet}" font-size="9" font-family="monospace">&lt;a href="https://example.com"&gt;</text>
    <text x="200" y="72" text-anchor="middle" fill="${COLORS.cyan}" font-size="11" text-decoration="underline">Click me!</text>
    <line x1="200" y1="85" x2="200" y2="105" stroke="${COLORS.gold}" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="200" y="100" text-anchor="middle" fill="${COLORS.gold}" font-size="16">↓</text>
    <rect x="80" y="110" width="240" height="100" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <rect x="80" y="110" width="240" height="22" rx="10" fill="${COLORS.cyan}"/>
    <text x="200" y="125" text-anchor="middle" fill="${COLORS.space}" font-size="8">https://example.com</text>
    <rect x="100" y="145" width="200" height="12" rx="3" fill="${COLORS.dim}" opacity="0.2"/>
    <rect x="100" y="163" width="160" height="10" rx="3" fill="${COLORS.dim}" opacity="0.15"/>
    <rect x="100" y="179" width="180" height="10" rx="3" fill="${COLORS.dim}" opacity="0.1"/>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Links connect pages together!</text>
  `);
}

function imageTag() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="80" y="20" width="240" height="160" rx="12" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <rect x="100" y="40" width="200" height="110" rx="8" fill="${COLORS.violet}" opacity="0.2"/>
    <text x="200" y="85" text-anchor="middle" font-size="36">🏔️</text>
    <text x="200" y="115" text-anchor="middle" fill="${COLORS.dim}" font-size="10">Beautiful Mountain</text>
    <text x="200" y="140" text-anchor="middle" fill="${COLORS.cyan}" font-size="8" font-family="monospace">alt="Beautiful Mountain"</text>
    <text x="200" y="200" text-anchor="middle" fill="${COLORS.violet}" font-size="9" font-family="monospace">&lt;img src="mountain.jpg" alt="..."&gt;</text>
    <text x="200" y="220" text-anchor="middle" fill="${COLORS.gold}" font-size="9">Self-closing tag — no &lt;/img&gt; needed!</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">src = where the image is | alt = description</text>
  `);
}

function tableStructure() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="60" y="20" width="280" height="190" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="1.5"/>
    <rect x="60" y="20" width="280" height="35" rx="10" fill="${COLORS.gold}" opacity="0.2"/>
    <text x="130" y="43" text-anchor="middle" fill="${COLORS.gold}" font-size="10" font-weight="bold">Day</text>
    <text x="230" y="43" text-anchor="middle" fill="${COLORS.gold}" font-size="10" font-weight="bold">Activity</text>
    <text x="330" y="43" text-anchor="middle" fill="${COLORS.gold}" font-size="10" font-weight="bold">Time</text>
    <line x1="60" y1="55" x2="340" y2="55" stroke="${COLORS.gold}" stroke-width="1" opacity="0.3"/>
    <text x="130" y="78" text-anchor="middle" fill="${COLORS.white}" font-size="10">Monday</text>
    <text x="230" y="78" text-anchor="middle" fill="${COLORS.white}" font-size="10">Coding</text>
    <text x="330" y="78" text-anchor="middle" fill="${COLORS.white}" font-size="10">3pm</text>
    <line x1="80" y1="88" x2="320" y2="88" stroke="${COLORS.dim}" stroke-width="0.5" opacity="0.3"/>
    <text x="130" y="108" text-anchor="middle" fill="${COLORS.white}" font-size="10">Tuesday</text>
    <text x="230" y="108" text-anchor="middle" fill="${COLORS.white}" font-size="10">Art</text>
    <text x="330" y="108" text-anchor="middle" fill="${COLORS.white}" font-size="10">4pm</text>
    <line x1="80" y1="118" x2="320" y2="118" stroke="${COLORS.dim}" stroke-width="0.5" opacity="0.3"/>
    <text x="130" y="138" text-anchor="middle" fill="${COLORS.white}" font-size="10">Wednesday</text>
    <text x="230" y="138" text-anchor="middle" fill="${COLORS.white}" font-size="10">Music</text>
    <text x="330" y="138" text-anchor="middle" fill="${COLORS.white}" font-size="10">2pm</text>
    <line x1="180" y1="25" x2="180" y2="205" stroke="${COLORS.dim}" stroke-width="0.5" opacity="0.2"/>
    <line x1="280" y1="25" x2="280" y2="205" stroke="${COLORS.dim}" stroke-width="0.5" opacity="0.2"/>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">&lt;table&gt; + &lt;tr&gt; rows + &lt;th&gt;/&lt;td&gt; cells</text>
  `);
}

function formElements() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="70" y="15" width="260" height="210" rx="12" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2"/>
    <text x="200" y="42" text-anchor="middle" fill="${COLORS.white}" font-size="13" font-weight="bold">Sign Up Form</text>
    <text x="95" y="68" fill="${COLORS.dim}" font-size="9">Name</text>
    <rect x="95" y="73" width="210" height="26" rx="6" fill="${COLORS.space}" stroke="${COLORS.dim}" stroke-width="1"/>
    <text x="110" y="90" fill="${COLORS.dim}" font-size="9" opacity="0.5">Enter your name...</text>
    <text x="95" y="118" fill="${COLORS.dim}" font-size="9">Email</text>
    <rect x="95" y="123" width="210" height="26" rx="6" fill="${COLORS.space}" stroke="${COLORS.dim}" stroke-width="1"/>
    <text x="110" y="140" fill="${COLORS.dim}" font-size="9" opacity="0.5">you@example.com</text>
    <rect x="95" y="163" width="210" height="32" rx="8" fill="${COLORS.violet}"/>
    <text x="200" y="184" text-anchor="middle" fill="${COLORS.white}" font-size="11" font-weight="bold">Sign Up!</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">&lt;form&gt; + &lt;input&gt; + &lt;button&gt;</text>
  `);
}

// ─── WORLD 2: Style Sanctum (CSS) ───

function cssIsStyle() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="20" y="30" width="170" height="170" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.dim}" stroke-width="1.5"/>
    <text x="105" y="55" text-anchor="middle" fill="${COLORS.dim}" font-size="10" font-weight="bold">Without CSS</text>
    <text x="40" y="80" fill="${COLORS.white}" font-size="12">Hello World</text>
    <text x="40" y="100" fill="${COLORS.white}" font-size="10">Some text here</text>
    <rect x="40" y="110" width="60" height="16" rx="2" fill="${COLORS.dim}" opacity="0.3"/>
    <text x="50" y="122" fill="${COLORS.white}" font-size="8">Button</text>
    <text x="105" y="185" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Plain & boring 😴</text>
    <text x="200" y="120" text-anchor="middle" fill="${COLORS.gold}" font-size="20">→</text>
    <text x="200" y="140" text-anchor="middle" fill="${COLORS.gold}" font-size="8">+ CSS</text>
    <rect x="210" y="30" width="170" height="170" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <text x="295" y="55" text-anchor="middle" fill="${COLORS.cyan}" font-size="10" font-weight="bold">With CSS ✨</text>
    <text x="295" y="82" text-anchor="middle" fill="${COLORS.violet}" font-size="16" font-weight="bold">Hello World</text>
    <text x="295" y="105" text-anchor="middle" fill="${COLORS.white}" font-size="10">Some styled text</text>
    <rect x="255" y="115" width="80" height="24" rx="8" fill="${COLORS.violet}"/>
    <text x="295" y="131" text-anchor="middle" fill="${COLORS.white}" font-size="9" font-weight="bold">Click Me!</text>
    <text x="295" y="185" text-anchor="middle" fill="${COLORS.cyan}" font-size="9">Beautiful! 🎨</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">CSS transforms plain HTML into beautiful designs</text>
  `);
}

function threeWaysCSS() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="15" y="25" width="115" height="130" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.coral}" stroke-width="1.5"/>
    <text x="72" y="48" text-anchor="middle" fill="${COLORS.coral}" font-size="9" font-weight="bold">Inline</text>
    <text x="30" y="70" fill="${COLORS.dim}" font-size="7" font-family="monospace">style="color:</text>
    <text x="30" y="82" fill="${COLORS.dim}" font-size="7" font-family="monospace">  red;"</text>
    <text x="72" y="110" text-anchor="middle" fill="${COLORS.dim}" font-size="8">On the element</text>
    <text x="72" y="140" text-anchor="middle" fill="${COLORS.coral}" font-size="8">⚠️ Avoid</text>
    <rect x="142" y="25" width="115" height="130" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="1.5"/>
    <text x="200" y="48" text-anchor="middle" fill="${COLORS.gold}" font-size="9" font-weight="bold">Internal</text>
    <text x="157" y="70" fill="${COLORS.dim}" font-size="7" font-family="monospace">&lt;style&gt;</text>
    <text x="157" y="82" fill="${COLORS.dim}" font-size="7" font-family="monospace">  h1 {color:red}</text>
    <text x="157" y="94" fill="${COLORS.dim}" font-size="7" font-family="monospace">&lt;/style&gt;</text>
    <text x="200" y="120" text-anchor="middle" fill="${COLORS.dim}" font-size="8">In the &lt;head&gt;</text>
    <text x="200" y="140" text-anchor="middle" fill="${COLORS.gold}" font-size="8">👍 OK</text>
    <rect x="270" y="25" width="115" height="130" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <text x="327" y="48" text-anchor="middle" fill="${COLORS.cyan}" font-size="9" font-weight="bold">External</text>
    <text x="285" y="70" fill="${COLORS.dim}" font-size="7" font-family="monospace">&lt;link</text>
    <text x="285" y="82" fill="${COLORS.dim}" font-size="7" font-family="monospace">  href="style.css"</text>
    <text x="285" y="94" fill="${COLORS.dim}" font-size="7" font-family="monospace">/&gt;</text>
    <text x="327" y="120" text-anchor="middle" fill="${COLORS.dim}" font-size="8">Separate file</text>
    <text x="327" y="140" text-anchor="middle" fill="${COLORS.cyan}" font-size="8">⭐ Best!</text>
    <text x="200" y="190" text-anchor="middle" fill="${COLORS.white}" font-size="10">External CSS = cleanest approach</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Three ways to add CSS to your HTML</text>
  `);
}

function cssSelectors() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="30" y="25" width="340" height="55" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="1.5"/>
    <text x="55" y="48" fill="${COLORS.violet}" font-size="10" font-weight="bold">Element</text>
    <text x="55" y="65" fill="${COLORS.dim}" font-size="9" font-family="monospace">h1 { color: purple; }</text>
    <text x="320" y="55" text-anchor="middle" fill="${COLORS.dim}" font-size="8">Targets ALL h1s</text>
    <rect x="30" y="90" width="340" height="55" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="1.5"/>
    <text x="55" y="113" fill="${COLORS.cyan}" font-size="10" font-weight="bold">Class (.)</text>
    <text x="55" y="130" fill="${COLORS.dim}" font-size="9" font-family="monospace">.highlight { color: cyan; }</text>
    <text x="320" y="120" text-anchor="middle" fill="${COLORS.dim}" font-size="8">Reusable!</text>
    <rect x="30" y="155" width="340" height="55" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="1.5"/>
    <text x="55" y="178" fill="${COLORS.gold}" font-size="10" font-weight="bold">ID (#)</text>
    <text x="55" y="195" fill="${COLORS.dim}" font-size="9" font-family="monospace">#special { color: gold; }</text>
    <text x="320" y="185" text-anchor="middle" fill="${COLORS.dim}" font-size="8">Unique!</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Selectors target which elements to style</text>
  `);
}

function colorFormats() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="30" y="25" width="100" height="100" rx="12" fill="#FF6347"/>
    <text x="80" y="80" text-anchor="middle" fill="${COLORS.white}" font-size="10" font-weight="bold">Named</text>
    <text x="80" y="140" text-anchor="middle" fill="${COLORS.dim}" font-size="8">tomato</text>
    <rect x="150" y="25" width="100" height="100" rx="12" fill="#7C3AED"/>
    <text x="200" y="80" text-anchor="middle" fill="${COLORS.white}" font-size="10" font-weight="bold">Hex</text>
    <text x="200" y="140" text-anchor="middle" fill="${COLORS.dim}" font-size="8">#7C3AED</text>
    <rect x="270" y="25" width="100" height="100" rx="12" fill="rgb(6,214,160)"/>
    <text x="320" y="80" text-anchor="middle" fill="${COLORS.space}" font-size="10" font-weight="bold">RGB</text>
    <text x="320" y="140" text-anchor="middle" fill="${COLORS.dim}" font-size="8">rgb(6,214,160)</text>
    <rect x="100" y="160" width="200" height="50" rx="10" fill="url(#rainbowGrad)"/>
    <defs><linearGradient id="rainbowGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#EF476F"/><stop offset="25%" stop-color="#FFD166"/><stop offset="50%" stop-color="#06D6A0"/><stop offset="75%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EF476F"/></linearGradient></defs>
    <text x="200" y="190" text-anchor="middle" fill="${COLORS.white}" font-size="11" font-weight="bold">A Rainbow of Options!</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">CSS supports many color formats</text>
  `);
}

function boxModel() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="50" y="20" width="300" height="200" rx="10" fill="${COLORS.coral}" opacity="0.15" stroke="${COLORS.coral}" stroke-width="2"/>
    <text x="200" y="16" text-anchor="middle" fill="${COLORS.coral}" font-size="9" font-weight="bold">Margin</text>
    <rect x="80" y="45" width="240" height="150" rx="8" fill="${COLORS.gold}" opacity="0.15" stroke="${COLORS.gold}" stroke-width="2"/>
    <text x="200" y="42" text-anchor="middle" fill="${COLORS.gold}" font-size="9" font-weight="bold">Border</text>
    <rect x="110" y="70" width="180" height="100" rx="6" fill="${COLORS.cyan}" opacity="0.15" stroke="${COLORS.cyan}" stroke-width="2" stroke-dasharray="4 2"/>
    <text x="200" y="67" text-anchor="middle" fill="${COLORS.cyan}" font-size="9" font-weight="bold">Padding</text>
    <rect x="140" y="90" width="120" height="60" rx="4" fill="${COLORS.violet}" opacity="0.3" stroke="${COLORS.violet}" stroke-width="2"/>
    <text x="200" y="125" text-anchor="middle" fill="${COLORS.white}" font-size="11" font-weight="bold">Content</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Content → Padding → Border → Margin</text>
  `);
}

// ─── WORLD 3: Layout Labyrinth ───

function flexboxIntro() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <text x="200" y="30" text-anchor="middle" fill="${COLORS.violet}" font-size="11" font-weight="bold">display: flex</text>
    <rect x="30" y="45" width="340" height="80" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="2" stroke-dasharray="6 3"/>
    <rect x="45" y="55" width="90" height="60" rx="8" fill="${COLORS.violet}" opacity="0.6"/>
    <text x="90" y="90" text-anchor="middle" fill="${COLORS.white}" font-size="10" font-weight="bold">Item 1</text>
    <rect x="150" y="55" width="90" height="60" rx="8" fill="${COLORS.cyan}" opacity="0.6"/>
    <text x="195" y="90" text-anchor="middle" fill="${COLORS.white}" font-size="10" font-weight="bold">Item 2</text>
    <rect x="255" y="55" width="90" height="60" rx="8" fill="${COLORS.gold}" opacity="0.6"/>
    <text x="300" y="90" text-anchor="middle" fill="${COLORS.space}" font-size="10" font-weight="bold">Item 3</text>
    <text x="200" y="150" text-anchor="middle" fill="${COLORS.white}" font-size="10">→ → → Main Axis → → →</text>
    <text x="15" y="90" text-anchor="middle" fill="${COLORS.dim}" font-size="8" transform="rotate(-90 15 90)">Cross</text>
    <text x="200" y="180" text-anchor="middle" fill="${COLORS.dim}" font-size="10">Items line up in a row automatically!</text>
    <rect x="80" y="195" width="240" height="30" rx="6" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="1"/>
    <text x="200" y="215" text-anchor="middle" fill="${COLORS.cyan}" font-size="9" font-family="monospace">.container { display: flex; }</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Flexbox = flexible box layout</text>
  `);
}

function gridIntro() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <text x="200" y="25" text-anchor="middle" fill="${COLORS.cyan}" font-size="11" font-weight="bold">display: grid</text>
    <rect x="40" y="35" width="320" height="170" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2" stroke-dasharray="6 3"/>
    <rect x="55" y="48" width="90" height="65" rx="6" fill="${COLORS.cyan}" opacity="0.4"/>
    <text x="100" y="85" text-anchor="middle" fill="${COLORS.white}" font-size="10">1</text>
    <rect x="155" y="48" width="90" height="65" rx="6" fill="${COLORS.violet}" opacity="0.4"/>
    <text x="200" y="85" text-anchor="middle" fill="${COLORS.white}" font-size="10">2</text>
    <rect x="255" y="48" width="90" height="65" rx="6" fill="${COLORS.gold}" opacity="0.4"/>
    <text x="300" y="85" text-anchor="middle" fill="${COLORS.space}" font-size="10">3</text>
    <rect x="55" y="123" width="90" height="65" rx="6" fill="${COLORS.coral}" opacity="0.4"/>
    <text x="100" y="160" text-anchor="middle" fill="${COLORS.white}" font-size="10">4</text>
    <rect x="155" y="123" width="90" height="65" rx="6" fill="${COLORS.gold}" opacity="0.3"/>
    <text x="200" y="160" text-anchor="middle" fill="${COLORS.space}" font-size="10">5</text>
    <rect x="255" y="123" width="90" height="65" rx="6" fill="${COLORS.cyan}" opacity="0.3"/>
    <text x="300" y="160" text-anchor="middle" fill="${COLORS.white}" font-size="10">6</text>
    <text x="200" y="225" text-anchor="middle" fill="${COLORS.cyan}" font-size="9" font-family="monospace">grid-template-columns: 1fr 1fr 1fr;</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Grid = rows and columns layout</text>
  `);
}

// ─── WORLD 4: Responsive Realm ───

function mediaQueries() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="20" y="30" width="70" height="120" rx="8" fill="${COLORS.spaceLighter}" stroke="${COLORS.coral}" stroke-width="2"/>
    <rect x="20" y="30" width="70" height="16" rx="8" fill="${COLORS.coral}"/>
    <text x="55" y="42" text-anchor="middle" fill="${COLORS.white}" font-size="6">Mobile</text>
    <rect x="30" y="55" width="50" height="6" rx="2" fill="${COLORS.dim}" opacity="0.3"/>
    <rect x="30" y="65" width="50" height="40" rx="4" fill="${COLORS.violet}" opacity="0.2"/>
    <rect x="30" y="110" width="50" height="6" rx="2" fill="${COLORS.dim}" opacity="0.2"/>
    <rect x="120" y="20" width="130" height="150" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.gold}" stroke-width="2"/>
    <rect x="120" y="20" width="130" height="18" rx="10" fill="${COLORS.gold}"/>
    <text x="185" y="33" text-anchor="middle" fill="${COLORS.space}" font-size="7">Tablet</text>
    <rect x="130" y="48" width="55" height="50" rx="4" fill="${COLORS.violet}" opacity="0.2"/>
    <rect x="195" y="48" width="45" height="50" rx="4" fill="${COLORS.cyan}" opacity="0.2"/>
    <rect x="130" y="108" width="110" height="6" rx="2" fill="${COLORS.dim}" opacity="0.3"/>
    <rect x="130" y="120" width="90" height="6" rx="2" fill="${COLORS.dim}" opacity="0.2"/>
    <rect x="275" y="15" width="110" height="170" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.cyan}" stroke-width="2"/>
    <rect x="275" y="15" width="110" height="18" rx="10" fill="${COLORS.cyan}"/>
    <text x="330" y="28" text-anchor="middle" fill="${COLORS.space}" font-size="7">Desktop</text>
    <rect x="285" y="42" width="30" height="80" rx="4" fill="${COLORS.violet}" opacity="0.2"/>
    <rect x="320" y="42" width="55" height="38" rx="4" fill="${COLORS.gold}" opacity="0.2"/>
    <rect x="320" y="85" width="55" height="38" rx="4" fill="${COLORS.coral}" opacity="0.2"/>
    <rect x="285" y="130" width="90" height="6" rx="2" fill="${COLORS.dim}" opacity="0.3"/>
    <text x="200" y="210" text-anchor="middle" fill="${COLORS.white}" font-size="10">Same content, different layouts!</text>
    <text x="200" y="230" text-anchor="middle" fill="${COLORS.violet}" font-size="9" font-family="monospace">@media (min-width: 600px) { ... }</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Media queries adapt to screen size</text>
  `);
}

function cssTransitions() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="40" y="40" width="80" height="80" rx="8" fill="${COLORS.violet}"/>
    <text x="80" y="85" text-anchor="middle" fill="${COLORS.white}" font-size="9">Normal</text>
    <text x="155" y="85" text-anchor="middle" fill="${COLORS.gold}" font-size="20">→</text>
    <text x="155" y="105" text-anchor="middle" fill="${COLORS.gold}" font-size="8">:hover</text>
    <rect x="190" y="25" width="110" height="110" rx="55" fill="${COLORS.cyan}"/>
    <text x="245" y="80" text-anchor="middle" fill="${COLORS.space}" font-size="10" font-weight="bold">Hovered!</text>
    <text x="245" y="95" text-anchor="middle" fill="${COLORS.space}" font-size="8">scale(1.2)</text>
    <rect x="80" y="155" width="240" height="30" rx="6" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="1"/>
    <text x="200" y="174" text-anchor="middle" fill="${COLORS.violet}" font-size="9" font-family="monospace">transition: all 0.3s ease;</text>
    <text x="200" y="210" text-anchor="middle" fill="${COLORS.white}" font-size="10">Smooth animation between states</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Transitions make changes feel magical ✨</text>
  `);
}

// ─── WORLD 5: Wizard's Tower ───

function cssVariables() {
  return svgWrap(`
    <rect width="400" height="260" rx="16" fill="${COLORS.spaceLight}"/>
    <rect x="40" y="20" width="320" height="80" rx="10" fill="${COLORS.spaceLighter}" stroke="${COLORS.violet}" stroke-width="1.5"/>
    <text x="200" y="42" text-anchor="middle" fill="${COLORS.violet}" font-size="10" font-weight="bold">:root (Define once)</text>
    <text x="60" y="62" fill="${COLORS.gold}" font-size="9" font-family="monospace">--primary: #7C3AED;</text>
    <text x="60" y="78" fill="${COLORS.cyan}" font-size="9" font-family="monospace">--accent: #06D6A0;</text>
    <text x="230" y="62" fill="${COLORS.coral}" font-size="9" font-family="monospace">--danger: #EF476F;</text>
    <text x="230" y="78" fill="${COLORS.gold}" font-size="9" font-family="monospace">--radius: 12px;</text>
    <line x1="200" y1="105" x2="200" y2="120" stroke="${COLORS.gold}" stroke-width="2" stroke-dasharray="4 2"/>
    <text x="200" y="118" text-anchor="middle" fill="${COLORS.gold}" font-size="14">↓</text>
    <text x="200" y="140" text-anchor="middle" fill="${COLORS.white}" font-size="10">Use everywhere with var()</text>
    <rect x="40" y="150" width="100" height="60" rx="8" fill="${COLORS.violet}" opacity="0.3" stroke="${COLORS.violet}" stroke-width="1"/>
    <text x="90" y="175" text-anchor="middle" fill="${COLORS.violetLight}" font-size="8" font-family="monospace">var(--primary)</text>
    <text x="90" y="195" text-anchor="middle" fill="${COLORS.white}" font-size="8">Button</text>
    <rect x="150" y="150" width="100" height="60" rx="8" fill="${COLORS.cyan}" opacity="0.3" stroke="${COLORS.cyan}" stroke-width="1"/>
    <text x="200" y="175" text-anchor="middle" fill="${COLORS.cyan}" font-size="8" font-family="monospace">var(--accent)</text>
    <text x="200" y="195" text-anchor="middle" fill="${COLORS.white}" font-size="8">Badge</text>
    <rect x="260" y="150" width="100" height="60" rx="8" fill="${COLORS.coral}" opacity="0.3" stroke="${COLORS.coral}" stroke-width="1"/>
    <text x="310" y="175" text-anchor="middle" fill="${COLORS.coral}" font-size="8" font-family="monospace">var(--danger)</text>
    <text x="310" y="195" text-anchor="middle" fill="${COLORS.white}" font-size="8">Alert</text>
    <text x="200" y="248" text-anchor="middle" fill="${COLORS.dim}" font-size="9">Change once, update everywhere!</text>
  `);
}

// ─── SLIDE IMAGE MAP ───
// Maps (lessonId, slideIndex) → SVG string

const slideImageMap = {
  // World 1, Module 1.1: Welcome to the Web
  'lesson-1': [webEverywhere, howWebsitesWork, htmlSkeleton],
  'lesson-2': [codeEditorIntro, tryItYourself],
  'lesson-3': [doctypeSpell, htmlTag],
  'lesson-4': [twoSections, headSection, bodySection],
  'lesson-5-cap': [firstProject],

  // World 1, Module 1.2: Text & Structure
  'lesson-5': [headingHierarchy, headingUsage],
  'lesson-6': [paragraphs, lineBreaks],
  'lesson-7': [boldItalic],
  'lesson-8': [lists],

  // World 1, Module 1.3: Links & Images
  'lesson-9': [anchorTag],
  'lesson-10': [imageTag],

  // World 1, Module 1.4: Tables & Forms
  'lesson-13': [tableStructure],
  'lesson-14': [formElements],

  // World 2, Module 2.1: CSS Basics
  'lesson-16': [cssIsStyle, threeWaysCSS],
  'lesson-17': [cssSelectors],
  'lesson-18': [colorFormats],

  // World 2, Module 2.2: Box Model
  'lesson-20': [boxModel],

  // World 3, Module 3.1: Flexbox
  'lesson-29': [flexboxIntro],

  // World 3, Module 3.2: CSS Grid
  'lesson-34': [gridIntro],

  // World 4, Module 4.1: Responsive
  'lesson-42': [mediaQueries],

  // World 4, Module 4.2: Animations
  'lesson-46': [cssTransitions],

  // World 5, Module 5.1: CSS Variables
  'lesson-53': [cssVariables],
};

/**
 * Get the SVG image string for a given lesson slide.
 * @param {string} lessonId - The lesson identifier
 * @param {number} slideIndex - The 0-based slide index
 * @returns {string|null} SVG markup string or null if no image exists
 */
export function getSlideImage(lessonId, slideIndex) {
  const generators = slideImageMap[lessonId];
  if (!generators || slideIndex >= generators.length) return null;
  return generators[slideIndex]();
}

export default getSlideImage;
