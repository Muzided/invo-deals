import './style.css';

// ── Product catalogue — organised by brand ──────────────────────────────
const catalog = [
  {
    brand: 'Apple',
    blurb: 'iPhone 17 lineup, MacBook M5 power and the latest wearables.',
    products: [
      { name: 'Apple iPhone 17 Pro Max', now: 'CA$1,749', icon: '📱' },
      { name: 'Apple iPhone 17 Pro', now: 'CA$1,449', icon: '📱' },
      { name: 'Apple iPhone 17', now: 'CA$1,129', icon: '📱' },
      { name: 'Apple iPhone 17e', now: 'CA$799', icon: '📱' },
      { name: 'MacBook Pro 14-inch M5', now: 'CA$2,199', icon: '💻' },
      { name: 'MacBook Pro 16-inch M5', now: 'CA$3,299', icon: '💻' },
      { name: 'MacBook Air 13-inch M4', now: 'CA$1,399', icon: '💻' },
      { name: 'iPad Air 11-inch M4', now: 'CA$799', icon: '📟' },
      { name: 'Apple Watch Series 11', now: 'CA$549', icon: '⌚' },
      { name: 'AirPods Pro 2 USB-C', now: 'CA$329', icon: '🎧' },
    ],
  },
  {
    brand: 'Samsung',
    blurb: 'Galaxy S25 flagships, foldables, tablets, wearables and OLED TVs.',
    products: [
      { name: 'Samsung Galaxy S25 Ultra', now: 'CA$1,918', icon: '📱' },
      { name: 'Samsung Galaxy S25+', now: 'CA$1,438', icon: '📱' },
      { name: 'Samsung Galaxy S25', now: 'CA$1,198', icon: '📱' },
      { name: 'Samsung Galaxy Z Fold7', now: 'CA$2,499', icon: '📱' },
      { name: 'Samsung Galaxy Z Flip7', now: 'CA$1,349', icon: '📱' },
      { name: 'Samsung Galaxy Tab S10 Ultra', now: 'CA$1,699', icon: '📟' },
      { name: 'Samsung Galaxy Watch Ultra', now: 'CA$879', icon: '⌚' },
      { name: 'Samsung Galaxy Watch 8', now: 'CA$479', icon: '⌚' },
      { name: 'Samsung Galaxy Buds3 Pro', now: 'CA$329', icon: '🎧' },
      { name: 'Samsung OLED S90F 65-inch TV', now: 'CA$2,799', icon: '📺' },
    ],
  },
  {
    brand: 'Motorola',
    blurb: 'The Razr foldables, Edge flagships and the value-packed Moto G family.',
    products: [
      { name: 'Motorola Razr Ultra 2025', now: 'CA$1,699', icon: '📱' },
      { name: 'Motorola Razr+ 2025', now: 'CA$1,349', icon: '📱' },
      { name: 'Motorola Razr 2025', now: 'CA$849', icon: '📱' },
      { name: 'Motorola Edge 60 Pro', now: 'CA$999', icon: '📱' },
      { name: 'Motorola Edge 60', now: 'CA$699', icon: '📱' },
      { name: 'Moto G Power 2025', now: 'CA$399', icon: '📱' },
      { name: 'Moto G Stylus 2025', now: 'CA$499', icon: '📱' },
      { name: 'Moto G 2025', now: 'CA$299', icon: '📱' },
      { name: 'Moto Buds+', now: 'CA$199', icon: '🎧' },
      { name: 'Moto Tag', now: 'CA$49', icon: '📍' },
    ],
  },
  {
    brand: 'Lenovo',
    blurb: 'ThinkPad, Yoga and Legion — business, creator and gaming laptops.',
    products: [
      { name: 'Lenovo ThinkPad X1 Carbon Gen 13', now: 'CA$2,399', icon: '💻' },
      { name: 'Lenovo ThinkPad X1 2-in-1 Gen 10', now: 'CA$2,699', icon: '💻' },
      { name: 'Lenovo ThinkPad T14 Gen 6', now: 'CA$1,999', icon: '💻' },
      { name: 'Lenovo Yoga Pro 9i Gen 10', now: 'CA$2,499', icon: '💻' },
      { name: 'Lenovo Yoga 9i 2-in-1', now: 'CA$2,099', icon: '💻' },
      { name: 'Lenovo Legion Pro 7i Gen 10', now: 'CA$3,499', icon: '💻' },
      { name: 'Lenovo Legion 5i Gen 10', now: 'CA$1,999', icon: '💻' },
      { name: 'Lenovo IdeaPad Slim 5', now: 'CA$1,099', icon: '💻' },
      { name: 'Lenovo Idea Tab Pro', now: 'CA$499', icon: '📟' },
      { name: 'Lenovo Legion Go S', now: 'CA$799', icon: '🎮' },
    ],
  },
  {
    brand: 'Microsoft',
    blurb: 'Surface Copilot+ PCs and the latest Xbox Series consoles.',
    products: [
      { name: 'Surface Pro 12 Copilot+ PC', now: 'CA$1,649', icon: '💻' },
      { name: 'Surface Laptop 13-inch', now: 'CA$1,499', icon: '💻' },
      { name: 'Surface Laptop 15-inch', now: 'CA$1,899', icon: '💻' },
      { name: 'Surface Pro 11', now: 'CA$1,799', icon: '💻' },
      { name: 'Surface Laptop Studio 2', now: 'CA$2,699', icon: '💻' },
      { name: 'Xbox Series X 2TB Galaxy Black', now: 'CA$799', icon: '🎮' },
      { name: 'Xbox Series X', now: 'CA$649', icon: '🎮' },
      { name: 'Xbox Series S 1TB', now: 'CA$449', icon: '🎮' },
      { name: 'Surface Thunderbolt 4 Dock', now: 'CA$399', icon: '🔌' },
      { name: 'Xbox Elite Wireless Controller Series 2', now: 'CA$199', icon: '🎮' },
    ],
  },
  {
    brand: 'HP',
    blurb: 'OmniBook & EliteBook AI PCs, Omen gaming rigs and LaserJet printers.',
    products: [
      { name: 'HP OmniBook Ultra Flip', now: 'CA$2,099', icon: '💻' },
      { name: 'HP OmniBook X AI PC', now: 'CA$1,699', icon: '💻' },
      { name: 'HP OmniBook 7 Flip', now: 'CA$1,699', icon: '💻' },
      { name: 'HP EliteBook Ultra G1q', now: 'CA$2,299', icon: '💻' },
      { name: 'HP EliteBook 840 G11', now: 'CA$1,899', icon: '💻' },
      { name: 'HP Omen Transcend 14', now: 'CA$2,299', icon: '💻' },
      { name: 'HP Omen 16', now: 'CA$1,799', icon: '💻' },
      { name: 'HP Victus 16', now: 'CA$1,299', icon: '💻' },
      { name: 'HP Envy x360 14', now: 'CA$1,399', icon: '💻' },
      { name: 'HP LaserJet Pro 4301fdw', now: 'CA$699', icon: '🖨️' },
    ],
  },
  {
    brand: 'Google',
    blurb: 'Pixel 10 phones, the foldable, tablet, watch, buds and Nest devices.',
    products: [
      { name: 'Google Pixel 10 Pro XL', now: 'CA$1,749', icon: '📱' },
      { name: 'Google Pixel 10 Pro', now: 'CA$1,349', icon: '📱' },
      { name: 'Google Pixel 10', now: 'CA$999', icon: '📱' },
      { name: 'Google Pixel 9a', now: 'CA$679', icon: '📱' },
      { name: 'Google Pixel Fold 2', now: 'CA$2,399', icon: '📱' },
      { name: 'Google Pixel Tablet', now: 'CA$699', icon: '📟' },
      { name: 'Google Pixel Watch 3', now: 'CA$479', icon: '⌚' },
      { name: 'Google Pixel Buds Pro 2', now: 'CA$299', icon: '🎧' },
      { name: 'Google Nest Cam Battery', now: 'CA$239', icon: '📷' },
      { name: 'Google Nest Doorbell Battery', now: 'CA$239', icon: '🔔' },
    ],
  },
  {
    brand: 'Roku',
    blurb: 'Streaming sticks, the Roku Ultra, soundbars and smart home cameras.',
    products: [
      { name: 'Roku Streaming Stick Plus 4K', now: 'CA$49', icon: '📺' },
      { name: 'Roku Streaming Stick 4K', now: 'CA$69', icon: '📺' },
      { name: 'Roku Streaming Stick HD', now: 'CA$40', icon: '📺' },
      { name: 'Roku Ultra', now: 'CA$129', icon: '📺' },
      { name: 'Roku Express 4K+', now: 'CA$59', icon: '📺' },
      { name: 'Roku Streambar', now: 'CA$179', icon: '🔊' },
      { name: 'Roku Streambar Pro', now: 'CA$249', icon: '🔊' },
      { name: 'Roku Indoor Camera', now: 'CA$59', icon: '📷' },
      { name: 'Roku Outdoor Camera', now: 'CA$99', icon: '📷' },
      { name: 'Roku Video Doorbell', now: 'CA$99', icon: '🔔' },
    ],
  },
  {
    brand: 'Milwaukee',
    blurb: 'M18 & M12 FUEL cordless tools, Packout storage and jobsite gear.',
    products: [
      { name: 'Milwaukee M18 FUEL Hammer Drill Kit', now: 'CA$499', icon: '🔧' },
      { name: 'Milwaukee M18 FUEL Impact Driver Kit', now: 'CA$449', icon: '🔧' },
      { name: 'Milwaukee M18 FUEL Sawzall Reciprocating Saw', now: 'CA$329', icon: '🪚' },
      { name: 'Milwaukee M18 FUEL Circular Saw', now: 'CA$399', icon: '🪚' },
      { name: 'Milwaukee M18 Packout Vacuum', now: 'CA$299', icon: '🧹' },
      { name: 'Milwaukee M18 Transfer Pump', now: 'CA$478', icon: '🔧' },
      { name: 'Milwaukee M18 Rocket Tower Light', now: 'CA$699', icon: '💡' },
      { name: 'Milwaukee Packout Rolling Toolbox', now: 'CA$229', icon: '🧰' },
      { name: 'Milwaukee M12 FUEL Installation Driver', now: 'CA$299', icon: '🔧' },
      { name: 'Milwaukee M18 FUEL Blower', now: 'CA$349', icon: '🍃' },
    ],
  },
  {
    brand: 'Beats',
    blurb: 'Studio Pro, Solo, Powerbeats, Fit Pro earbuds and the Beats Pill.',
    products: [
      { name: 'Beats Studio Pro', now: 'CA$469', icon: '🎧' },
      { name: 'Beats Solo 4', now: 'CA$269', icon: '🎧' },
      { name: 'Beats Solo Buds', now: 'CA$99', icon: '🎧' },
      { name: 'Beats Fit Pro', now: 'CA$269', icon: '🎧' },
      { name: 'Beats Powerbeats Pro 2', now: 'CA$349', icon: '🎧' },
      { name: 'Beats Pill', now: 'CA$199', icon: '🔊' },
      { name: 'Beats Powerbeats Pro', now: 'CA$329', icon: '🎧' },
      { name: 'Beats Studio Buds+', now: 'CA$229', icon: '🎧' },
      { name: 'Beats Studio Buds', now: 'CA$199', icon: '🎧' },
      { name: 'Beats Flex', now: 'CA$99', icon: '🎧' },
    ],
  },
];

// url-safe id for routing to each product's detail page ("+" → "plus" so
// e.g. "Galaxy S25+" and "Galaxy S25" don't collapse to the same id)
const slug = s => s.toLowerCase().replace(/\+/g, ' plus ').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// every product is brand-new at MSRP; tag it with its brand + a stable id
catalog.forEach(b => b.products.forEach(p => {
  p.badge = 'new';
  p.brand = b.brand;
  p.id = slug(p.name);
}));

const brands = catalog.map(b => b.brand);
const categories = [
  {icon:'📱',label:'Phones'},{icon:'💻',label:'Laptops'},{icon:'📟',label:'Tablets'},
  {icon:'🎧',label:'Headphones'},{icon:'⌚',label:'Smartwatches'},{icon:'🔊',label:'Speakers'},
  {icon:'🎮',label:'Gaming'},{icon:'📺',label:'Televisions'},{icon:'📷',label:'Cameras'},{icon:'🔧',label:'Power Tools'},
];

function badgeCls(b){return{sale:'badge-sale',new:'badge-new',bs:'badge-bs',ob:'badge-ob',cpo:'badge-cpo'}[b]||'badge-new'}
function badgeLbl(b){return{sale:'Sale',new:'New',bs:'Bestseller',ob:'Open Box',cpo:'CPO'}[b]||'New'}

function productCard(p) {
  const price = p.range
    ? `<div class="price-range-text">${p.range}</div>`
    : `${p.was?`<div class="price-was">${p.was}</div>`:''}<div class="price-now">${p.now}</div>`;
  const img = productImg(p);
  const media = img
    ? `<img src="${img}" alt="${p.name}" class="product-photo" loading="lazy"/>`
    : `<div class="img-placeholder"><span style="font-size:42px">${p.icon}</span></div>`;
  return `<a class="product-card" href="#/product/${p.id}">
    <div class="product-img">
      ${media}
      <span class="product-badge ${badgeCls(p.badge)}">${badgeLbl(p.badge)}</span>
    </div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${price}</div>
    </div>
  </a>`;
}

function scrollRow(items) {
  return `<div class="product-scroll-outer"><div class="product-scroll-inner">${items.map(productCard).join('')}</div></div>`;
}

// A titled product section with a small eyebrow label above the heading.
function dealSection({ eyebrow, title, link, href = '#', items, alt }) {
  const bg = alt
    ? 'background:var(--gray-50);border-top:1px solid var(--gray-200)'
    : 'background:#fff;border-top:1px solid var(--gray-200)';
  return `<div style="${bg}">
    <div class="section">
      <div class="section-header">
        <div>
          <div class="section-eyebrow">${eyebrow}</div>
          <h2>${title}</h2>
        </div>
        ${link ? `<a href="${href}" class="see-all">${link} →</a>` : ''}
      </div>
      ${scrollRow(items)}
    </div>
  </div>`;
}

// ── Curated home-page product lists (all drawn from the catalogue) ──────
const allProducts = catalog.flatMap(b => b.products);
const find = name => allProducts.find(p => p.name === name);
const parsePrice = s => Number(String(s).replace(/[^0-9.]/g, ''));
const fmtPrice = n => 'CA$' + n.toLocaleString('en-US');

// Laptop deals: now = original MSRP, was = original + $200 (a $200 saving).
const laptopDeals = allProducts
  .filter(p => p.icon === '💻')
  .map(p => ({ ...p, was: fmtPrice(parsePrice(p.now) + 200), now: p.now, badge: 'sale' }));

// Apple deals — the full iPhone / iPad / MacBook lineup.
const appleDeals = catalog.find(b => b.brand === 'Apple').products;

const withBadge = (names, badge) => names.map(n => ({ ...find(n), badge })).filter(p => p.name);

const bestSellers = withBadge([
  'Apple iPhone 17 Pro Max',
  'Samsung Galaxy S25 Ultra',
  'Google Pixel 10 Pro',
  'AirPods Pro 2 USB-C',
  'Samsung Galaxy Z Fold7',
  'Xbox Series X',
  'Beats Studio Pro',
  'Motorola Razr Ultra 2025',
  'Samsung Galaxy Buds3 Pro',
  'MacBook Air 13-inch M4',
], 'bs');

const newArrivals = withBadge([
  'Apple iPhone 17',
  'Samsung Galaxy S25',
  'Google Pixel 10',
  'Motorola Razr 2025',
  'Surface Laptop 13-inch',
  'HP OmniBook X AI PC',
  'Roku Ultra',
  'Milwaukee M18 FUEL Hammer Drill Kit',
  'Beats Solo 4',
  'Samsung Galaxy Watch 8',
], 'new');

// Trusted names shown in the scrolling trust strip — only the navbar brands.
const trustBrands = brands;

// Logo files in /public/brandslogo (brands without one fall back to text).
const brandLogos = {
  Apple: 'apple-11-2.svg',
  Samsung: 'samsung-8-2.svg',
  Motorola: 'motorola-new-logo.svg',
  Lenovo: 'lenovo-1.svg',
  Microsoft: 'microsoft-6.svg',
  HP: 'hp-hewlett-packard.svg',
  Google: 'google-6-2.svg',
  Roku: 'roku.svg',
  Milwaukee: 'milwaukee-logo-1.svg',
  Beats: 'beats-electronics.svg',
};

// Product photos in /public/brandproducts/<Brand>/<file>.png — keyed by the
// exact catalogue name. Brands without a folder fall back to the emoji icon.
const productImages = {
  'Apple iPhone 17 Pro Max': 'Apple/iPhone 17 Pro Max.png',
  'Apple iPhone 17 Pro': 'Apple/iPhone 17 Pro.png',
  'Apple iPhone 17': 'Apple/iPhone 17.png',
  'Apple iPhone 17e': 'Apple/iPhone 17e.png',
  'MacBook Pro 14-inch M5': 'Apple/MacBook Pro 14-inch M5.png',
  'MacBook Pro 16-inch M5': 'Apple/MacBook Pro 16-inch M5.png',
  'MacBook Air 13-inch M4': 'Apple/MacBook Air 13-inch M4.png',
  'iPad Air 11-inch M4': 'Apple/iPad Air 11-inch M4.png',
  'Apple Watch Series 11': 'Apple/Apple Watch Series 11.png',
  'AirPods Pro 2 USB-C': 'Apple/AirPods Pro 2 USB-C.png',

  'Samsung Galaxy S25 Ultra': 'Samsung/Galaxy S25 Ultra.png',
  'Samsung Galaxy S25+': 'Samsung/Galaxy S25+.png',
  'Samsung Galaxy S25': 'Samsung/Galaxy S25.png',
  'Samsung Galaxy Z Fold7': 'Samsung/Galaxy Z Fold7.png',
  'Samsung Galaxy Z Flip7': 'Samsung/Galaxy Z Flip7.png',
  'Samsung Galaxy Tab S10 Ultra': 'Samsung/Galaxy Tab S10 Ultra.png',
  'Samsung Galaxy Watch Ultra': 'Samsung/Galaxy Watch Ultra.png',
  'Samsung Galaxy Watch 8': 'Samsung/Galaxy Watch 8.png',
  'Samsung Galaxy Buds3 Pro': 'Samsung/Galaxy Buds3 Pro.png',
  'Samsung OLED S90F 65-inch TV': 'Samsung/OLED S90F 65-inch TV.png',

  'Motorola Razr Ultra 2025': 'Motorola/Razr Ultra 2025.png',
  'Motorola Razr+ 2025': 'Motorola/Razr+ 2025.png',
  'Motorola Razr 2025': 'Motorola/Razr 2025.png',
  'Motorola Edge 60 Pro': 'Motorola/Edge 60 Pro.png',
  'Motorola Edge 60': 'Motorola/Edge 60.png',
  'Moto G Power 2025': 'Motorola/Moto G Power 2025.png',
  'Moto G Stylus 2025': 'Motorola/Moto G Stylus 2025.png',
  'Moto G 2025': 'Motorola/Moto G 2025.png',
  'Moto Buds+': 'Motorola/Moto Buds+.png',
  'Moto Tag': 'Motorola/Moto Tag.png',

  'Lenovo ThinkPad X1 Carbon Gen 13': 'Lenovo/ThinkPad X1 Carbon Gen 13.png',
  'Lenovo ThinkPad X1 2-in-1 Gen 10': 'Lenovo/ThinkPad X1 2-in-1 Gen 10.png',
  'Lenovo ThinkPad T14 Gen 6': 'Lenovo/ThinkPad T14 Gen 6.png',
  'Lenovo Yoga Pro 9i Gen 10': 'Lenovo/Yoga Pro 9i Gen 10.png',
  'Lenovo Yoga 9i 2-in-1': 'Lenovo/Yoga 9i 2-in-1.png',
  'Lenovo Legion Pro 7i Gen 10': 'Lenovo/Legion Pro 7i Gen 10.png',
  'Lenovo Legion 5i Gen 10': 'Lenovo/Legion 5i Gen 10.png',
  'Lenovo IdeaPad Slim 5': 'Lenovo/IdeaPad Slim 5.png',
  'Lenovo Idea Tab Pro': 'Lenovo/Idea Tab Pro.png',
  'Lenovo Legion Go S': 'Lenovo/Legion Go S.png',

  'Surface Pro 12 Copilot+ PC': 'Microsoft/Surface Pro 12 Copilot+ PC.png',
  'Surface Laptop 13-inch': 'Microsoft/Surface Laptop 13-inch.png',
  'Surface Laptop 15-inch': 'Microsoft/Surface Laptop 15-inch.png',
  'Surface Pro 11': 'Microsoft/Surface Pro 11.png',
  'Surface Laptop Studio 2': 'Microsoft/Surface Laptop Studio 2.png',
  'Xbox Series X 2TB Galaxy Black': 'Microsoft/Xbox Series X 2TB Galaxy Black.png',
  'Xbox Series X': 'Microsoft/Xbox Series X.png',
  'Xbox Series S 1TB': 'Microsoft/Xbox Series S 1TB.png',
  'Surface Thunderbolt 4 Dock': 'Microsoft/Surface Thunderbolt 4 Dock.png',
  'Xbox Elite Wireless Controller Series 2': 'Microsoft/Xbox Elite Wireless Controller Series 2.png',
};
// encodeURI so spaces / "+" in filenames resolve correctly as a URL
const productImg = p => productImages[p.name]
  ? encodeURI('/brandproducts/' + productImages[p.name])
  : null;
const trustItem = b => brandLogos[b]
  ? `<span class="trust-name"><img src="/brandslogo/${brandLogos[b]}" alt="${b}" class="trust-logo"/></span>`
  : `<span class="trust-name">${b}</span>`;

// ── Page chrome (shared header + footer) ────────────────────────────────
const headerHtml = `
<!-- ANNOUNCEMENT BAR -->
<div class="announcement-bar">
  📞 +1 646-243-2447 &nbsp;·&nbsp; Free shipping over $150 &nbsp;·&nbsp; 90-day warranty &nbsp;·&nbsp; Mississauga pickup available
</div>

<!-- DESKTOP HEADER -->
<header>
  <div class="header-inner">
    <a href="#/" class="logo-link"><img src="/logo.jpeg" alt="innovodeals" class="logo-img"/></a>
    <div class="search-bar">
      <input type="text" placeholder="Search phones, laptops, tablets..."/>
      <span class="search-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></span>
    </div>
    <div class="header-actions">
      <a href="tel:+16462432447" class="header-phone-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92v-.01z"/></svg>
        +1 646-243-2447
      </a>
    </div>
  </div>
</header>

<!-- DESKTOP NAV -->
<nav class="main-nav">
  <div class="nav-inner">
    ${brands.map(b=>`
      <div class="nav-item">
        <a href="#/brand/${slug(b)}" class="nav-link">${b}</a>
      </div>`).join('')}
  </div>
</nav>

<!-- MOBILE HEADER -->
<div class="mobile-header">
  <div class="mobile-top">
    <a href="#" class="logo-link"><img src="/logo.jpeg" alt="innovodeals" class="logo-img mobile-logo-img"/></a>
    <div class="mobile-actions">
      <button class="mob-btn" id="mob-menu-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
    </div>
  </div>
  <div class="mobile-search-row"><input type="text" placeholder="Search phones, laptops, tablets..."/></div>
</div>

<!-- MOBILE MENU OVERLAY -->
<div class="mobile-menu-overlay" id="mobile-menu">
  <div class="mobile-menu-panel">
    <div class="mobile-menu-head">
      <img src="/logo.jpeg" alt="innovodeals" class="logo-img mobile-logo-img"/>
      <button class="mobile-close" id="mob-close-btn">✕</button>
    </div>
    <div class="mob-nav-section">
      <div class="mob-nav-title">Brands</div>
      ${brands.map(b=>`<a href="#/brand/${slug(b)}" class="mob-nav-link">${b}</a>`).join('')}
    </div>
    <div class="mob-nav-section">
      <div class="mob-nav-title">Contact</div>
      <a href="tel:+16462432447" class="mob-nav-link">📞 +1 646-243-2447</a>
      <a href="#" class="mob-nav-link">📍 6660 Kennedy Rd #23, Mississauga</a>
    </div>
  </div>
</div>

<!-- TRUST BAR -->
<div class="trust-bar">
  <div class="trust-bar-inner">
    <div class="trust-item"><span class="trust-icon">🚚</span><span><strong>Free shipping</strong> over $150</span></div>
    <div class="trust-item"><span class="trust-icon">🛡️</span><span><strong>90 Days</strong> warranty</span></div>
    <div class="trust-item"><span class="trust-icon">💰</span><span><strong>Lowest</strong> price</span></div>
    <div class="trust-item"><span class="trust-icon">📍</span><span><strong>Toronto</strong> pickup</span></div>
  </div>
</div>`;

// ── Home page main content ──────────────────────────────────────────────
function homeMain() { return `
<!-- HERO -->
<div class="hero">
  <div class="hero-slides">
    <div class="hero-slide slide-samsung active">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-eyebrow"><span class="live-dot"></span>NEW ARRIVAL &nbsp;·&nbsp; In Stock Today</div>
          <h1 class="hero-title">iPhone 17 Pro Max<br><span class="accent">is here.</span></h1>
          <p class="hero-subtitle">A19 Pro chip · Titanium · Pro camera system</p>
          <div class="hero-price-line"><span class="from">Starting at</span>CA$1,749</div>
          <p class="hero-meta">Free shipping over $150 · 90-day warranty · Toronto store</p>
          <div class="hero-btns">
            <a href="#" class="btn-white-solid">Shop iPhone 17 →</a>
            <a href="#" class="btn-ghost">Shop Apple →</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-stage">
            <img src="/brandproducts/Apple/iPhone%2017%20Pro%20Max.png" alt="Apple iPhone 17 Pro Max"/>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-slide slide-lenovo">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-eyebrow"><span class="live-dot"></span>GALAXY S25 SERIES &nbsp;·&nbsp; In Stock</div>
          <h1 class="hero-title">Galaxy S25 Ultra<br><span class="accent">leads the lineup.</span></h1>
          <p class="hero-subtitle">200MP camera · Snapdragon 8 Elite · Galaxy AI</p>
          <div class="hero-price-line"><span class="from">Starting at</span>CA$1,198</div>
          <p class="hero-meta">S25 · S25+ · S25 Ultra · Z Fold7 · Z Flip7</p>
          <div class="hero-btns">
            <a href="#" class="btn-white-solid">Shop Galaxy S25 →</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-stage">
            <img src="/brandproducts/Samsung/Galaxy%20S25%20Ultra.png" alt="Samsung Galaxy S25 Ultra"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-dots">
    <button class="hero-dot active" data-idx="0"></button>
    <button class="hero-dot" data-idx="1"></button>
  </div>
</div>

<!-- SAMSUNG GALAXY FEATURE -->
<div class="samsung-feature">
  <div class="sf-inner">
    <div class="sf-text">
      <div class="sf-eyebrow">Featured Series · Samsung Galaxy</div>
      <h2>The Galaxy you've<br>been waiting for.</h2>
      <p>From the S25 Ultra flagship to the Z Fold7 and Z Flip7 foldables, the Tab S10 Ultra and Galaxy Watch Ultra — Canadian models backed by 30+ years of trusted service.</p>
      <div class="sf-meta">
        <div class="sf-price"><span>From</span>CA$1,198</div>
        <span class="sf-stock"><span class="dot"></span>Canadian models · In stock</span>
      </div>
      <a href="#/brand/samsung" class="btn-blue">Browse all Samsung →</a>
    </div>
    <div class="sf-visual">
      <div class="sf-stage"><img src="/brandproducts/Samsung/Galaxy%20S25%20Ultra.png" alt="Samsung Galaxy S25 Ultra"/></div>
    </div>
  </div>
</div>

<!-- MOTO PROMO BANNER -->
<div class="moto-promo">
  <div class="moto-inner">
    <div class="moto-visual"><img src="/brandproducts/Motorola/Razr%20Ultra%202025.png" alt="Motorola Razr Ultra 2025"/></div>
    <div class="moto-text">
      <span class="promo-label">New for 2025</span>
      <h2>Razr Ultra 2025</h2>
      <p class="sub">The flagship flip — 4-inch external display, Snapdragon 8 Elite and a premium titanium-and-glass build.</p>
      <div class="moto-specs">
        <span class="moto-spec-tag">7-inch Foldable</span>
        <span class="moto-spec-tag">165Hz</span>
        <span class="moto-spec-tag">50MP Camera</span>
        <span class="moto-spec-tag">Moto AI</span>
      </div>
      <div class="moto-buy">
        <div class="moto-price"><sup>CA</sup>$1,699</div>
        <a href="#/product/motorola-razr-ultra-2025" class="btn-yellow">Buy now →</a>
      </div>
    </div>
  </div>
</div>

<!-- CATEGORY PILLS -->
<div style="background:var(--gray-50);border-top:1px solid var(--gray-200)">
  <div class="section">
    <div class="section-header">
      <h2>Shop by Category</h2>
    </div>
    <div class="cat-pills">
      ${categories.map(c=>`<button class="cat-pill">${c.icon} ${c.label}</button>`).join('')}
    </div>
  </div>
</div>

<!-- LAPTOP DEALS -->
${dealSection({ eyebrow: 'Work and school', title: 'Laptop deals', link: 'View All Laptops', items: laptopDeals, alt: false })}

<!-- APPLE DEALS -->
${dealSection({ eyebrow: 'iPhone, iPad, MacBook', title: 'Apple deals', link: 'View All Apple', href: '#/brand/apple', items: appleDeals, alt: true })}

<!-- BEST SELLERS -->
${dealSection({ eyebrow: 'Popular now', title: 'Best sellers', link: 'View All', items: bestSellers, alt: false })}

<!-- NEW ARRIVALS -->
${dealSection({ eyebrow: 'Recently added', title: 'New arrivals', link: 'View All New', items: newArrivals, alt: true })}

<!-- TRADE-IN -->
<div class="trade-in">
  <div class="trade-in-inner">
    <div class="trade-in-header">
      <div class="eyebrow">Trade-In Program</div>
      <h2>Turn your old device into your next upgrade</h2>
      <p style="font-size:15px;color:rgba(255,255,255,0.5);margin-top:12px">Get store credit or a direct bank transfer — your choice. Phones, tablets, laptops and smartwatches accepted.</p>
    </div>
    <div class="trade-tabs">
      <button class="trade-tab active">Phones</button>
      <button class="trade-tab">Tablets</button>
      <button class="trade-tab">Laptops</button>
      <button class="trade-tab">Smartwatches</button>
    </div>
    <div class="trade-steps">
      <div class="trade-step"><div class="step-num">1</div><h4>Get your quote</h4><p>Tell us about your device for an instant estimate.</p></div>
      <div class="trade-step"><div class="step-num">2</div><h4>Ship it free</h4><p>Prepaid label, drop off at any Canada Post location.</p></div>
      <div class="trade-step"><div class="step-num">3</div><h4>Get paid</h4><p>Store credit or bank transfer — your choice.</p></div>
    </div>
    <div class="trade-payout">
      <div class="payout-opt selected"><strong>Store credit</strong><span>Use toward any purchase</span></div>
      <div class="payout-opt"><strong>Bank transfer</strong><span>Direct deposit</span></div>
    </div>
    <div class="trade-cta">
      <a href="#" class="btn-white-solid" style="font-size:15px;padding:15px 44px">Get Your Quote →</a>
      <p style="margin-top:14px;font-size:12px;color:rgba(255,255,255,0.3)">How It Works</p>
    </div>
  </div>
</div>

<!-- MARKETPLACE -->
<div class="marketplace">
  <div class="marketplace-inner">
    <div class="market-card">
      <div class="market-logo amz">amazon</div>
      <div class="market-info">
        <h3>Shop with Confidence from a Trusted Amazon Seller</h3>
        <p>Discover a world of quality products at innovodeals, your reliable Amazon seller across Canada. We pride ourselves on offering top-rated items with exceptional service and fast shipping. Your satisfaction is our priority.</p>
        <a href="#" class="btn-outline">Visit Amazon Storefront →</a>
        <a href="#" class="btn-outline">Visit Amazon Renewed →</a>
      </div>
    </div>
    <div class="market-card">
      <div class="market-logo wmt">walmart</div>
      <div class="market-info">
        <h3>Shop the Best at innovodeals on Walmart</h3>
        <p>innovodeals is proud to be a top Walmart seller, offering an unbeatable selection of high-quality products. Our commitment to excellence ensures you receive the best value and service with every purchase.</p>
        <a href="#" class="btn-outline">Shop on Walmart →</a>
      </div>
    </div>
  </div>
</div>

<!-- TRUST / BRANDS -->
<div class="trust-brands">
  <div class="trust-brands-head">
    <div class="section-eyebrow" style="text-align:center">Brands</div>
    <h2>Shop trusted names</h2>
  </div>
  <div class="trust-marquee">
    <div class="trust-track">
      ${[...trustBrands, ...trustBrands].map(trustItem).join('')}
    </div>
  </div>
</div>`; }

const footerHtml = `
<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="/logo.jpeg" alt="innovodeals" class="footer-logo-img"/>
      <p>Mississauga's trusted electronics store. Shop brand new smartphones, laptops, tablets, wearables and more at unbeatable prices. Free shipping available.</p>
      <div class="footer-contact">
        <div class="footer-contact-row">
          <span class="footer-contact-icon">📞</span>
          <div><a href="tel:+16462432447">+1 646-243-2447</a></div>
        </div>
        <div class="footer-contact-row">
          <span class="footer-contact-icon">✉️</span>
          <div><a href="#">info@innovodeals.com</a></div>
        </div>
        <div class="footer-contact-row">
          <span class="footer-contact-icon">📍</span>
          <div>
            6660 Kennedy Rd #23, Mississauga, ON L5T 2M9, Canada
            <div class="footer-hours-text">Mon–Fri: 08:00am – 08:00pm<br>Sat: 09:00am – 08:00pm<br>Sun: 10:00am – 07:00pm</div>
          </div>
        </div>
      </div>
      <div class="social-row">
        <a href="#" class="social-icon" title="Facebook">f</a>
        <a href="#" class="social-icon" title="Twitter">𝕏</a>
        <a href="#" class="social-icon" title="Instagram">◈</a>
        <a href="#" class="social-icon" title="WhatsApp">💬</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Policies</h4>
      <ul>
        <li><a href="#">Returns, Exchanges or Cancellations</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Anti-Fraud &amp; Delivery Policy</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Information</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Orders &amp; Shipping</a></li>
        <li><a href="#">Wholesale Inquiries</a></li>
        <li><a href="#">Product Conditions</a></li>
        <li><a href="#">Track Your Order</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Shop &amp; Explore</h4>
      <ul>
        <li><a href="#">All Products</a></li>
        <li><a href="#">Cellphones</a></li>
        <li><a href="#">Laptops</a></li>
        <li><a href="#">Tablets</a></li>
        <li><a href="#">Headphones</a></li>
        <li><a href="#">Smart Watches</a></li>
        <li><a href="#">Power Tools</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Brands</h4>
      <ul>
        ${brands.map(b=>`<li><a href="#">${b}</a></li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="footer-bottom-bar">
    <div class="footer-bottom-inner">
      <p>© 2026 innovodeals. All rights reserved. 6660 Kennedy Rd #23, Mississauga, ON L5T 2M9, Canada.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Sales and Refunds</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</footer>
`;

// ── Product detail page ─────────────────────────────────────────────────
function productMain(p) {
  const group = catalog.find(b => b.brand === p.brand);
  const related = group.products.filter(x => x.id !== p.id).slice(0, 8);
  return `
<div class="pdp">
  <div class="pdp-inner">
    <nav class="breadcrumb">
      <a href="#/">Home</a><span>/</span><a href="#/brand/${slug(p.brand)}">${p.brand}</a><span>/</span><span class="crumb-current">${p.name}</span>
    </nav>
    <div class="pdp-grid">
      <div class="pdp-image">
        ${productImg(p)
          ? `<img src="${productImg(p)}" alt="${p.name}" class="pdp-photo"/>`
          : `<span class="pdp-emoji">${p.icon}</span>`}
        <span class="product-badge ${badgeCls(p.badge)}">${badgeLbl(p.badge)}</span>
      </div>
      <div class="pdp-info">
        <div class="pdp-brand">${p.brand}</div>
        <h1 class="pdp-title">${p.name}</h1>
        <div class="pdp-price"><span class="pdp-now">${p.now}</span></div>
        <p class="pdp-stock">✓ In stock · Brand new, sealed · Ships today</p>
        <p class="pdp-desc">${group.blurb}</p>
        <div class="pdp-actions">
          <a href="tel:+16462432447" class="btn-blue pdp-buy">Buy now →</a>
          <a href="tel:+16462432447" class="btn-outline">Call to order</a>
        </div>
        <ul class="pdp-perks">
          <li>🚚 Free shipping over $150</li>
          <li>🛡️ 90-day warranty</li>
          <li>📍 Mississauga pickup available</li>
          <li>💰 Lowest price guarantee</li>
        </ul>
      </div>
    </div>
    <div class="pdp-specs">
      <h2>Overview</h2>
      <table class="spec-table">
        <tr><td>Brand</td><td>${p.brand}</td></tr>
        <tr><td>Model</td><td>${p.name}</td></tr>
        <tr><td>Condition</td><td>Brand New</td></tr>
        <tr><td>Price (MSRP)</td><td>${p.now}</td></tr>
        <tr><td>Warranty</td><td>90 days</td></tr>
      </table>
    </div>
  </div>
  ${related.length ? `<div style="background:var(--gray-50);border-top:1px solid var(--gray-200)">
    <div class="section">
      <div class="section-header">
        <div><div class="section-eyebrow">More from ${p.brand}</div><h2>You may also like</h2></div>
      </div>
      ${scrollRow(related)}
    </div>
  </div>` : ''}
</div>`;
}

// ── Brand listing page ──────────────────────────────────────────────────
function brandMain(group) {
  return `
<div class="pdp">
  <div class="section">
    <nav class="breadcrumb">
      <a href="#/">Home</a><span>/</span><span class="crumb-current">${group.brand}</span>
    </nav>
    <div class="section-header" style="display:block">
      <div class="brand-head">
        ${brandLogos[group.brand] ? `<img src="/brandslogo/${brandLogos[group.brand]}" alt="${group.brand}" class="brand-head-logo"/>` : ''}
        <h2>${group.brand}</h2>
      </div>
      <p style="font-size:15px;color:var(--gray-500);margin-top:10px;max-width:660px">${group.blurb}</p>
      <p style="font-size:13px;color:var(--gray-400);margin-top:6px">${group.products.length} products</p>
    </div>
    <div class="product-grid">
      ${group.products.map(productCard).join('')}
    </div>
  </div>
</div>`;
}

// ── Router ──────────────────────────────────────────────────────────────
let heroTimer;
function attachHandlers() {
  clearInterval(heroTimer);

  // Hero slideshow
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length) {
    let cur = 0;
    const goTo = n => {
      slides[cur].classList.remove('active');
      dots[cur].classList.remove('active');
      cur = n;
      slides[cur].classList.add('active');
      dots[cur].classList.add('active');
    };
    dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.idx)));
    heroTimer = setInterval(() => goTo((cur + 1) % slides.length), 5000);
  }

  // Trade-in tabs
  document.querySelectorAll('.trade-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.trade-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Payout options
  document.querySelectorAll('.payout-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payout-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Mobile menu
  const overlay = document.getElementById('mobile-menu');
  document.getElementById('mob-menu-btn')?.addEventListener('click', () => overlay.classList.add('open'));
  document.getElementById('mob-close-btn')?.addEventListener('click', () => overlay.classList.remove('open'));
  overlay?.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
}

function render() {
  const hash = location.hash;
  const pm = hash.match(/^#\/product\/(.+)$/);
  const bm = hash.match(/^#\/brand\/(.+)$/);
  let main;
  if (pm) {
    const product = allProducts.find(p => p.id === decodeURIComponent(pm[1]));
    main = product ? productMain(product) : homeMain();
  } else if (bm) {
    const group = catalog.find(b => slug(b.brand) === decodeURIComponent(bm[1]));
    main = group ? brandMain(group) : homeMain();
  } else {
    main = homeMain();
  }
  document.getElementById('app').innerHTML = headerHtml + main + footerHtml;
  attachHandlers();
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', render);
render();
