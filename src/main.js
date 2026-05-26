import './style.css';

const navItems = [
  { label: 'Electronics & Computers', children: ['Cellphones','Tablets','Laptops','Headphones','Bluetooth Speakers','Smart Watches','Accessories','Computer & Accessories','Gaming','Televisions','Keyboard Case'] },
  { label: 'Personal Care & Beauty Tech', children: ['Beauty & Styling Tools','Cosmetics','Hair Straightener','Health','Oral Care','Perfumes & Cologne'] },
  { label: 'Smart Home & Appliances', children: ['Air Purifier','Appliances','Smart Home','Vacuums','Cleaning Supplies','Tools'] },
  { label: 'Brands', children: ['Apple','Samsung','Google','Oneplus','Motorola','Sony','Dell','Lenovo'] },
  { label: 'Product Conditions', children: ['Brand New','Open Box','Certified Pre-Owned'] },
  { label: "L'haya Perfumes", children: [] }
];

const appleProducts = [
  { name: 'Apple AirTag 4 Pack – Brand New', was: 'CA$159.99', now: 'CA$99.99', badge: 'sale', icon: '📍' },
  { name: 'Apple AirPods 4 In-Ear True Wireless Earbuds with USB-C – Brand New', was: 'CA$179.99', now: 'CA$149.00', badge: 'sale', icon: '🎧' },
  { name: 'Apple iPhone 16 Unlocked – Brand New', range: 'CA$959.99 – CA$1,179.99', badge: 'new', icon: '📱' },
  { name: 'Apple iPhone 16e 128GB (Brand New)', was: 'CA$899.99', now: 'CA$749.99', badge: 'sale', icon: '📱' },
  { name: 'Apple Watch Series 11 [GPS] Smartwatch – 42mm / 46mm', range: 'CA$489.99 – CA$519.99', badge: 'new', icon: '⌚' },
  { name: 'Apple iPhone SE 2 – Unlocked Smart Phone (Brand New)', range: 'CA$139.99 – CA$369.99', badge: 'new', icon: '📱' },
  { name: 'Apple iPhone 14 – Unlocked – Excellent Condition (Certified Pre-Owned)', range: 'CA$379.99 – CA$519.99', badge: 'cpo', icon: '📱' },
  { name: 'Apple iPhone 17 Unlocked, A19 chip, 256GB, 6.3-inch Super Retina XDR – Brand New', was: 'CA$1,299.99', now: 'CA$1,129.99', badge: 'sale', icon: '📱' },
  { name: 'Apple iPhone 16 Unlocked | Excellent Condition (Certified Pre-Owned)', range: 'CA$779.99 – CA$929.99', badge: 'cpo', icon: '📱' },
  { name: 'Apple iPhone 14 – Unlocked | Fair Condition (Certified Pre-Owned)', range: 'CA$369.99 – CA$649.99', badge: 'cpo', icon: '📱' },
];

const bestSellers = [
  { name: 'Motorola Moto e15 64GB Dual Sim, International Model – Brand New', was: 'CA$129.99', now: 'CA$109.99', badge: 'bs', icon: '📱' },
  { name: 'Samsung Galaxy Tab A11 Tablet – 8.7″, International Model – Brand New', range: 'CA$169.99 – CA$269.99', badge: 'bs', icon: '📟' },
  { name: 'Samsung Galaxy A56 5G Dual Sim, International Model (Brand New)', range: 'CA$429.99 – CA$529.99', badge: 'bs', icon: '📱' },
  { name: 'Samsung Galaxy Tab A9 (8.7 inch) 4GB RAM – Brand New', range: 'CA$149.00 – CA$199.99', badge: 'bs', icon: '📟' },
  { name: 'Samsung Galaxy Buds3 Pro Noise Cancelling Earbuds – Brand New', was: 'CA$299.99', now: 'CA$179.99', badge: 'bs', icon: '🎧' },
  { name: 'Samsung Galaxy A06 Dual Sim, International Model – Brand New', range: 'CA$119.99 – CA$129.99', badge: 'bs', icon: '📱' },
  { name: 'KODAK PIXPRO FZ45 16MP Digital Camera – Brand New', was: 'CA$219.99', now: 'CA$149.00', badge: 'bs', icon: '📷' },
  { name: 'Samsung Galaxy S25 Edge 512GB (Canadian Model) – Brand New', was: 'CA$1,299.99', now: 'CA$929.99', badge: 'bs', icon: '📱' },
  { name: 'Samsung Galaxy Watch8 Bluetooth Smartwatch – Brand New', range: 'CA$279.99 – CA$309.99', badge: 'bs', icon: '⌚' },
  { name: 'Samsung Galaxy A07 4G Dual Sim – Unlocked', range: 'CA$134.99 – CA$149.00', badge: 'bs', icon: '📱' },
];

const newArrivals = [
  { name: 'HP 15-dy2795wm i5-11 8GB 256GB Pavilion 15 Laptop – Open Box', was: 'CA$649.99', now: 'CA$479.99', badge: 'ob', icon: '💻' },
  { name: 'HP 15-dy2795 15.6″ i5-11 8GB 256GB Pavilion Laptop – Certified Pre Owned', was: 'CA$639.99', now: 'CA$439.99', badge: 'cpo', icon: '💻' },
  { name: 'HP 14-dq0052dx 14″ Pentium N4120 8GB 64GB Laptop – Certified Pre Owned', was: 'CA$379.99', now: 'CA$249.99', badge: 'cpo', icon: '💻' },
  { name: 'Lenovo ThinkPad T14s 14″ FHD 11th Gen 256GB SSD (Certified Pre-Owned)', range: 'CA$339.99 – CA$419.99', badge: 'cpo', icon: '💻' },
  { name: 'Logitech MX Anywhere 3S Wireless Mouse – Black – Brand New', was: 'CA$150.00', now: 'CA$129.99', badge: 'sale', icon: '🖱️' },
  { name: 'Apple iPhone 15 Plus Unlocked – A16 Bionic Chip – Fair Condition (CPO)', range: 'CA$539.99 – CA$729.99', badge: 'cpo', icon: '📱' },
  { name: 'Apple iPhone 15 Pro Max Unlocked – Fair Condition (Certified Pre-Owned)', range: 'CA$819.99 – CA$999.99', badge: 'cpo', icon: '📱' },
  { name: 'Sony WF-1000XM5 Noise Cancelling Earbuds (Open Box)', was: 'CA$429.99', now: 'CA$249.99', badge: 'ob', icon: '🎧' },
  { name: 'Google Pixel 10 128GB – Unlocked Android with Gemini – Open Box', range: 'CA$699.99 – CA$879.99', badge: 'ob', icon: '📱' },
  { name: 'Samsung Galaxy A37 5G 8GB & 128GB/256GB | International Version – Brand New', range: 'CA$439.99 – CA$519.99', badge: 'new', icon: '📱' },
];

const brands = ['Nintendo','Lenovo','Canon','Razer','OnePlus','Dell','Motorola','LG','Google','Apple','Samsung','Sony','Microsoft','PlayStation','Meta Quest','HP'];
const categories = [
  {icon:'📱',label:'Cellphones'},{icon:'📟',label:'Tablets'},{icon:'💻',label:'Laptops'},
  {icon:'🎧',label:'Headphones'},{icon:'⌚',label:'Smartwatches'},{icon:'🔊',label:'Speakers'},
  {icon:'🎮',label:'Gaming'},{icon:'🧹',label:'Vacuums'},
];

function badgeCls(b){return{sale:'badge-sale',new:'badge-new',bs:'badge-bs',ob:'badge-ob',cpo:'badge-cpo'}[b]||'badge-new'}
function badgeLbl(b){return{sale:'Sale',new:'New',bs:'Bestseller',ob:'Open Box',cpo:'CPO'}[b]||'New'}

function productCard(p) {
  const price = p.range
    ? `<div class="price-range-text">${p.range}</div>`
    : `${p.was?`<div class="price-was">${p.was}</div>`:''}<div class="price-now">${p.now}</div>`;
  return `<div class="product-card">
    <div class="product-img">
      <div class="img-placeholder"><span style="font-size:42px">${p.icon}</span></div>
      <span class="product-badge ${badgeCls(p.badge)}">${badgeLbl(p.badge)}</span>
    </div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${price}</div>
    </div>
  </div>`;
}

function scrollRow(items) {
  return `<div class="product-scroll-outer"><div class="product-scroll-inner">${items.map(productCard).join('')}</div></div>`;
}

document.getElementById('app').innerHTML = `
<!-- ANNOUNCEMENT BAR -->
<div class="announcement-bar">
  📞 +1 646-243-2447 &nbsp;·&nbsp; Free shipping over $150 &nbsp;·&nbsp; 90-day warranty &nbsp;·&nbsp; Mississauga pickup available
</div>

<!-- DESKTOP HEADER -->
<header>
  <div class="header-inner">
    <a href="#" class="logo-text">invo<span> deals</span></a>
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
    ${navItems.map(item=>`
      <div class="nav-item">
        <a href="#" class="nav-link${item.label.includes('Perfume')?' special':''}">${item.label}${item.children.length?'<span class="chevron">▾</span>':''}</a>
        ${item.children.length?`<div class="dropdown">${item.children.map(c=>`<a href="#">${c}</a>`).join('')}</div>`:''}
      </div>`).join('')}
  </div>
</nav>

<!-- MOBILE HEADER -->
<div class="mobile-header">
  <div class="mobile-top">
    <a href="#" class="logo-text">invo<span style="color:#0066cc"> deals</span></a>
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
      <span class="logo-text">invo<span style="color:#0066cc"> deals</span></span>
      <button class="mobile-close" id="mob-close-btn">✕</button>
    </div>
    ${navItems.map(item=>`
      <div class="mob-nav-section">
        <div class="mob-nav-title">${item.label}</div>
        ${item.children.length?item.children.map(c=>`<a href="#" class="mob-nav-link">${c}</a>`).join(''):`<a href="#" class="mob-nav-link">${item.label}</a>`}
      </div>`).join('')}
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
</div>

<!-- HERO -->
<div class="hero">
  <div class="hero-slides">
    <div class="hero-slide slide-samsung active">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-eyebrow"><span class="live-dot"></span>NEW ARRIVAL &nbsp;·&nbsp; In Stock Today</div>
          <h1 class="hero-title">A57 &amp; A37<br><span class="accent">have arrived.</span></h1>
          <p class="hero-subtitle">5G dual-SIM · 128GB · 8GB RAM · International</p>
          <div class="hero-price-line"><span class="from">Starting at</span>CA$439</div>
          <p class="hero-meta">Free shipping over $150 · 30-day returns · Toronto store</p>
          <div class="hero-btns">
            <a href="#" class="btn-white-solid">Shop A57 →</a>
            <a href="#" class="btn-ghost">Shop A37 →</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="device-mockup">
            <div class="device-label">
              <strong class="brand-name">Samsung</strong>
              <span class="model-name">Galaxy A57 5G</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-slide slide-lenovo">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-eyebrow"><span class="live-dot"></span>LENOVO LINEUP &nbsp;·&nbsp; 20+ Models</div>
          <h1 class="hero-title">Lenovo laptops<br><span class="accent">lead the lineup.</span></h1>
          <p class="hero-subtitle">ThinkPad · IdeaPad · Legion · Yoga</p>
          <div class="hero-price-line"><span class="from">Starting at</span>CA$179</div>
          <p class="hero-meta">New · Open Box · Certified Pre-Owned</p>
          <div class="hero-btns">
            <a href="#" class="btn-white-solid">Shop Top Laptops →</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="device-mockup" style="width:280px;height:200px;border-radius:14px">
            <div class="device-label">
              <strong class="brand-name">Lenovo</strong>
              <span class="model-name">ThinkPad · IdeaPad · Legion</span>
            </div>
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
  <div class="eyebrow">The Galaxy You've Been Waiting For</div>
  <h2>The Galaxy you've<br>been waiting for.</h2>
  <p>From the flagship S26+ to the everyday A-series. Canadian models, international variants, certified pre-owned — all backed by 30+ years of trusted service.</p>
  <a href="#" class="btn-blue">Browse All Samsung →</a>
  <div class="s26-card">
    <div class="s26-info">
      <div class="tag-label">Featured · Samsung Galaxy S26+</div>
      <h3>Newly Arrived</h3>
      <span class="new-tag">⭐ Canadian Model — In Stock</span>
    </div>
    <div class="s26-device"><div><strong>Galaxy S26+</strong><span>Canadian Model</span></div></div>
  </div>
</div>

<!-- MOTO PROMO BANNER -->
<div class="moto-promo">
  <span class="promo-label">Limited Time Offer</span>
  <h2>Motorola Moto G06 4G 2025</h2>
  <p class="sub">4GB RAM · 64GB STORAGE — International Version Unlocked Dual SIM (XT2535-3)</p>
  <div class="moto-specs">
    <span class="moto-spec-tag">6.88″ Super HD Display</span>
    <span class="moto-spec-tag">120Hz</span>
    <span class="moto-spec-tag">50MP Camera</span>
    <span class="moto-spec-tag">Android 15</span>
  </div>
  <div class="moto-price"><sup>CA</sup>$109.99</div>
  <a href="#" class="btn-yellow">Buy Now →</a>
</div>

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

<!-- APPLE DEALS -->
<div style="background:#fff">
  <div class="section">
    <div class="section-header">
      <h2>Buy From Latest Apple Deals</h2>
      <a href="#" class="see-all">View All Apple →</a>
    </div>
    ${scrollRow(appleProducts)}
  </div>
</div>

<!-- TRENDING PRODUCTS / FEATURED -->
<div style="background:var(--gray-50);border-top:1px solid var(--gray-200)">
  <div class="section">
    <div class="section-header">
      <h2>All Trending Products</h2>
    </div>
    <div class="cat-pills">
      ${categories.map(c=>`<button class="cat-pill">${c.icon} ${c.label}</button>`).join('')}
    </div>
    <div class="featured-grid">
      <div class="feat-card" style="background:linear-gradient(160deg,#08142a,#0d2040)">
        <div class="feat-overlay"></div>
        <div class="feat-info">
          <div class="feat-label">Featured · Samsung</div>
          <div class="feat-name">Galaxy A11+ &amp; A11 Tablet</div>
          <p style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:14px">WiFi &amp; Cellular options available</p>
          <a href="#" class="btn-white-solid" style="font-size:13px;padding:10px 20px">Buy Now →</a>
        </div>
      </div>
      <div class="feat-card" style="background:linear-gradient(160deg,#e0e0e0,#f0f0f0)">
        <div class="feat-overlay" style="background:linear-gradient(180deg,transparent 20%,rgba(0,0,0,0.55) 100%)"></div>
        <div class="feat-info">
          <div class="feat-label">Featured · Apple</div>
          <div class="feat-name">iPad 6th Gen 9.7″ (Certified Pre-Owned)</div>
          <div class="feat-price">$149</div>
        </div>
      </div>
      <div class="feat-card" style="background:linear-gradient(160deg,#c80012,#9e000e)">
        <div class="feat-overlay"></div>
        <div class="feat-info">
          <div class="feat-label">Featured · Nintendo</div>
          <div class="feat-name">Nintendo Switch Console – Brand New</div>
          <div class="feat-price">$429.99</div>
        </div>
      </div>
    </div>
    <div style="margin-top:14px">
      <div class="feat-card" style="background:linear-gradient(160deg,#0a0a1a,#14142a);max-width:380px">
        <div class="feat-overlay"></div>
        <div class="feat-info">
          <div class="feat-label">Featured · Samsung</div>
          <div class="feat-name">Galaxy Buds3 FE True Wireless ANC Earbuds</div>
          <div class="feat-price">$119.99</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- BEST SELLERS -->
<div style="background:#fff;border-top:1px solid var(--gray-200)">
  <div class="section">
    <div class="section-header">
      <h2>Best Selling Products</h2>
      <a href="#" class="see-all">View All →</a>
    </div>
    ${scrollRow(bestSellers)}
  </div>
</div>

<!-- FEATURED PRODUCTS -->
<div style="background:var(--gray-50);border-top:1px solid var(--gray-200)">
  <div class="section">
    <div class="section-header">
      <h2>Our Featured Products</h2>
    </div>
    <div class="featured-grid">
      <div class="feat-card" style="background:linear-gradient(135deg,#080810,#12121e)">
        <div class="feat-overlay"></div>
        <div class="feat-info">
          <div class="feat-label">Featured · Samsung</div>
          <div class="feat-name">Samsung Galaxy Z Flip7 / Fold7</div>
          <p style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:14px">Premium quality &amp; cutting-edge features</p>
          <a href="#" class="btn-white-solid" style="font-size:13px;padding:10px 20px">Buy Now →</a>
        </div>
      </div>
      <div class="feat-card" style="background:linear-gradient(160deg,#2a1040,#180828)">
        <div class="feat-overlay"></div>
        <div class="feat-info">
          <div class="feat-label">Featured · L'HAYA</div>
          <div class="feat-name">L'HAYA Extrait De Perfume – 100ml (3.4oz)</div>
          <div class="feat-price">$49.99</div>
        </div>
      </div>
      <div class="feat-card" style="background:linear-gradient(160deg,#081830,#041020)">
        <div class="feat-overlay"></div>
        <div class="feat-info">
          <div class="feat-label">Featured · Samsung</div>
          <div class="feat-name">Samsung Galaxy A07 / A17</div>
          <div class="feat-price">from $119.99</div>
        </div>
      </div>
    </div>
    <div style="margin-top:14px">
      <div class="feat-card" style="background:linear-gradient(160deg,#180808,#240c0c);max-width:380px">
        <div class="feat-overlay"></div>
        <div class="feat-info">
          <div class="feat-label">Featured · Motorola</div>
          <div class="feat-name">Motorola Moto g15 / e15</div>
          <div class="feat-price">$99.99</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- NEW IN CATALOGUE -->
<div style="background:#fff;border-top:1px solid var(--gray-200)">
  <div class="section">
    <div class="section-header">
      <h2>New In Our Catalogue</h2>
      <a href="#" class="see-all">View All New →</a>
    </div>
    ${scrollRow(newArrivals)}
  </div>
</div>

<!-- MARKETPLACE -->
<div class="marketplace">
  <div class="marketplace-inner">
    <div class="market-card">
      <div class="market-logo amz">amazon</div>
      <div class="market-info">
        <h3>Shop with Confidence from a Trusted Amazon Seller</h3>
        <p>Discover a world of quality products at invo deals, your reliable Amazon seller across Canada. We pride ourselves on offering top-rated items with exceptional service and fast shipping. Your satisfaction is our priority.</p>
        <a href="#" class="btn-outline">Visit Amazon Storefront →</a>
        <a href="#" class="btn-outline">Visit Amazon Renewed →</a>
      </div>
    </div>
    <div class="market-card">
      <div class="market-logo wmt">walmart</div>
      <div class="market-info">
        <h3>Shop the Best at invo deals on Walmart</h3>
        <p>invo deals is proud to be a top Walmart seller, offering an unbeatable selection of high-quality products. Our commitment to excellence ensures you receive the best value and service with every purchase.</p>
        <a href="#" class="btn-outline">Shop on Walmart →</a>
      </div>
    </div>
  </div>
</div>

<!-- BRANDS -->
<div class="brands-section">
  <div class="brands-inner">
    <h2>Shop from all top tech brands</h2>
    <div class="brands-grid">
      ${brands.map(b=>`<div class="brand-chip">${b}</div>`).join('')}
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <span class="footer-brand-logo">invo<span> deals</span></span>
      <p>Mississauga's trusted electronics store. Shop brand new smartphones, laptops, tablets, wearables and more at unbeatable prices. Free shipping available.</p>
      <div class="footer-contact">
        <div class="footer-contact-row">
          <span class="footer-contact-icon">📞</span>
          <div><a href="tel:+16462432447">+1 646-243-2447</a></div>
        </div>
        <div class="footer-contact-row">
          <span class="footer-contact-icon">✉️</span>
          <div><a href="#">info@invodeals.com</a></div>
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
        <li><a href="#">Accessories</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Brands</h4>
      <ul>
        <li><a href="#">Apple</a></li>
        <li><a href="#">Samsung</a></li>
        <li><a href="#">Google</a></li>
        <li><a href="#">Dell</a></li>
        <li><a href="#">Lenovo</a></li>
        <li><a href="#">Sony</a></li>
        <li><a href="#">Motorola</a></li>
        <li><a href="#">OnePlus</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom-bar">
    <div class="footer-bottom-inner">
      <p>© 2026 invo deals. All rights reserved. 6660 Kennedy Rd #23, Mississauga, ON L5T 2M9, Canada.</p>
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

// Hero slideshow
let cur = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
function goTo(n) {
  slides[cur].classList.remove('active');
  dots[cur].classList.remove('active');
  cur = n;
  slides[cur].classList.add('active');
  dots[cur].classList.add('active');
}
dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.idx)));
setInterval(() => goTo((cur + 1) % slides.length), 5000);

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
