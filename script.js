/* =========================================================
   Avento — product data + site interactivity
   ========================================================= */

// ---- Product data (edit these to change what shows on the homepage) ----
const dealsData = [
  { id: "d1", title: "Stackable Storage Baskets (Set of 3)", img: "https://picsum.photos/seed/avento-p1/300/300", rating: 4.3, reviews: 1284, price: 499, mrp: 899, discount: 45, delivery: "Tomorrow" },
  { id: "d2", title: "Non-Stick Cookware Set (5 Pcs)", img: "https://picsum.photos/seed/avento-p2/300/300", rating: 4.4, reviews: 2103, price: 1299, mrp: 2199, discount: 41, delivery: "Tomorrow" },
  { id: "d3", title: "Basmati Rice, 5 kg", img: "https://picsum.photos/seed/avento-p3/300/300", rating: 4.5, reviews: 5602, price: 549, mrp: 699, discount: 21, delivery: "Today, 6 PM" },
  { id: "d4", title: "Microfiber Cleaning Cloths (Pack of 6)", img: "https://picsum.photos/seed/avento-p4/300/300", rating: 4.2, reviews: 876, price: 199, mrp: 399, discount: 50, delivery: "Tomorrow" },
  { id: "d5", title: "Airtight Food Containers (Set of 10)", img: "https://picsum.photos/seed/avento-p5/300/300", rating: 4.3, reviews: 1567, price: 449, mrp: 799, discount: 44, delivery: "Tomorrow" },
  { id: "d6", title: "Cold-Pressed Groundnut Oil, 1 L", img: "https://picsum.photos/seed/avento-p6/300/300", rating: 4.6, reviews: 3241, price: 289, mrp: 349, discount: 17, delivery: "Today, 6 PM" },
  { id: "d7", title: "Bathroom Storage Organizer", img: "https://picsum.photos/seed/avento-p7/300/300", rating: 4.1, reviews: 542, price: 349, mrp: 599, discount: 42, delivery: "Tomorrow" },
  { id: "d8", title: "Stainless Steel Insulated Lunch Box", img: "https://picsum.photos/seed/avento-p8/300/300", rating: 4.4, reviews: 1988, price: 599, mrp: 999, discount: 40, delivery: "Tomorrow" },
];

const productsData = [
  { id: "p1", title: "Cotton Bedsheet with 2 Pillow Covers", img: "https://picsum.photos/seed/avento-p9/300/300", rating: 4.2, reviews: 934, price: 799, mrp: 1499, discount: 47, delivery: "Tomorrow" },
  { id: "p2", title: "Non-Woven Wardrobe Organizer (Pack of 6)", img: "https://picsum.photos/seed/avento-p10/300/300", rating: 4.0, reviews: 611, price: 649, mrp: 1199, discount: 46, delivery: "Tomorrow" },
  { id: "p3", title: "Ceramic Dinner Set, 18 Pieces", img: "https://picsum.photos/seed/avento-p11/300/300", rating: 4.5, reviews: 1420, price: 1499, mrp: 2499, discount: 40, delivery: "2 days" },
  { id: "p4", title: "Stainless Steel Kitchen Trolley", img: "https://picsum.photos/seed/avento-p12/300/300", rating: 4.3, reviews: 388, price: 2799, mrp: 4499, discount: 38, delivery: "3 days" },
  { id: "p5", title: "Toor Dal (Arhar), 1 kg", img: "https://picsum.photos/seed/avento-p13/300/300", rating: 4.4, reviews: 2765, price: 149, mrp: 179, discount: 17, delivery: "Today, 6 PM" },
  { id: "p6", title: "Sona Masoori Rice, 10 kg", img: "https://picsum.photos/seed/avento-p14/300/300", rating: 4.6, reviews: 4103, price: 649, mrp: 799, discount: 19, delivery: "Today, 6 PM" },
  { id: "p7", title: "Instant Coffee-Chicory Blend, 200 g", img: "https://picsum.photos/seed/avento-p15/300/300", rating: 4.3, reviews: 1876, price: 219, mrp: 259, discount: 15, delivery: "Today, 6 PM" },
  { id: "p8", title: "Multipurpose Vegetable Chopper", img: "https://picsum.photos/seed/avento-p16/300/300", rating: 4.1, reviews: 967, price: 349, mrp: 699, discount: 50, delivery: "Tomorrow" },
  { id: "p9", title: "Door &amp; Window Curtains (Set of 2)", img: "https://picsum.photos/seed/avento-p17/300/300", rating: 4.0, reviews: 502, price: 899, mrp: 1599, discount: 44, delivery: "2 days" },
  { id: "p10", title: "Reusable Grocery Bags (Set of 5)", img: "https://picsum.photos/seed/avento-p18/300/300", rating: 4.5, reviews: 1233, price: 249, mrp: 499, discount: 50, delivery: "Tomorrow" },
];

const products2Data = [
  { id: "g1", title: "Sona Masoori Rice, 10 kg", img: "https://picsum.photos/seed/avento-p19/300/300", rating: 4.6, reviews: 4103, price: 649, mrp: 799, discount: 19, delivery: "Today, 6 PM" },
  { id: "g2", title: "Pure Cow Ghee, 1 L", img: "https://picsum.photos/seed/avento-p20/300/300", rating: 4.7, reviews: 2890, price: 699, mrp: 899, discount: 22, delivery: "Today, 6 PM" },
  { id: "g3", title: "Filter Coffee Powder, 500 g", img: "https://picsum.photos/seed/avento-p21/300/300", rating: 4.5, reviews: 1654, price: 289, mrp: 349, discount: 17, delivery: "Today, 6 PM" },
  { id: "g4", title: "Mixed Millets Combo (5 x 500 g)", img: "https://picsum.photos/seed/avento-p22/300/300", rating: 4.3, reviews: 720, price: 449, mrp: 599, discount: 25, delivery: "Today, 6 PM" },
  { id: "g5", title: "Cold-Pressed Coconut Oil, 1 L", img: "https://picsum.photos/seed/avento-p23/300/300", rating: 4.6, reviews: 1998, price: 329, mrp: 399, discount: 18, delivery: "Today, 6 PM" },
  { id: "g6", title: "Organic Forest Honey, 500 g", img: "https://picsum.photos/seed/avento-p24/300/300", rating: 4.4, reviews: 1102, price: 249, mrp: 329, discount: 24, delivery: "Today, 6 PM" },
  { id: "g7", title: "Masala Dabba Spice Box Set", img: "https://picsum.photos/seed/avento-p25/300/300", rating: 4.2, reviews: 645, price: 399, mrp: 699, discount: 43, delivery: "Tomorrow" },
  { id: "g8", title: "Assorted Dry Fruits Combo, 1 kg", img: "https://picsum.photos/seed/avento-p26/300/300", rating: 4.5, reviews: 1789, price: 899, mrp: 1299, discount: 31, delivery: "Today, 6 PM" },
];

// Hero carousel slides
const heroSlides = [
  "https://picsum.photos/seed/avento-hero1/1500/500",
  "https://picsum.photos/seed/avento-hero2/1500/500",
  "https://picsum.photos/seed/avento-hero3/1500/500",
];

// ---- Helpers ----
function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function renderStars(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function createProductCard(p) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-img-wrap"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
    <div class="product-title">${p.title}</div>
    <div class="product-rating">
      <span class="stars">${renderStars(p.rating)}</span>
      <span class="rating-count">${p.reviews.toLocaleString("en-IN")}</span>
    </div>
    <div class="product-price">
      <span class="price">${formatINR(p.price)}</span>
      <span class="mrp">${formatINR(p.mrp)}</span>
      <span class="discount">${p.discount}% off</span>
    </div>
    <div class="product-delivery">Get it by <strong>${p.delivery}</strong></div>
    <button class="add-to-cart" type="button" data-id="${p.id}">Add to Cart</button>
  `;
  return card;
}

function renderGrid(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const frag = document.createDocumentFragment();
  data.forEach((p) => frag.appendChild(createProductCard(p)));
  container.appendChild(frag);
}

// ---- Cart ----
let cartCount = 0;
function initCart() {
  const cartCountEl = document.getElementById("cartCount");
  const cartBtn = document.getElementById("cartBtn");
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    cartCount += 1;
    if (cartCountEl) cartCountEl.textContent = cartCount;
    if (cartBtn) {
      cartBtn.classList.remove("bump");
      // restart animation
      void cartBtn.offsetWidth;
      cartBtn.classList.add("bump");
    }
  });
}

// ---- Side menu ----
function initSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("hamburgerBtn");
  const closeBtn = document.getElementById("closeSideMenu");

  function open() {
    sideMenu?.classList.add("open");
    overlay?.classList.add("show");
  }
  function close() {
    sideMenu?.classList.remove("open");
    overlay?.classList.remove("show");
  }

  openBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  overlay?.addEventListener("click", close);
}

// ---- Hero carousel ----
function initHeroCarousel() {
  const heroImg = document.getElementById("heroImg");
  const dotsWrap = document.getElementById("heroDots");
  if (!heroImg || !dotsWrap) return;
  const dots = Array.from(dotsWrap.querySelectorAll(".dot"));
  let current = 0;

  function goTo(i) {
    current = i;
    heroImg.src = heroSlides[i] || heroSlides[0];
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => goTo(Number(dot.dataset.i)));
  });

  setInterval(() => {
    goTo((current + 1) % heroSlides.length);
  }, 5000);
}

// ---- Back to top ----
function initBackToTop() {
  document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---- Search form ----
function initSearch() {
  document.getElementById("searchForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    // Demo only — no backend search wired up.
  });
}

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  renderGrid("dealsRow", dealsData);
  renderGrid("productGrid", productsData);
  renderGrid("productGrid2", products2Data);
  initCart();
  initSideMenu();
  initHeroCarousel();
  initBackToTop();
  initSearch();
});
