/* =========================================================
   ShopVerse — demo product data
   Edit these arrays to change products, prices & images.
   ========================================================= */
const dealsData = [
  { title: "Wireless Bluetooth Earbuds", img: "sv-deal1", price: 1499, mrp: 2999, discount: 50, rating: 4.3, reviews: "12,438" },
  { title: "Stainless Steel Insulated Bottle 1L", img: "sv-deal2", price: 599, mrp: 999, discount: 40, rating: 4.5, reviews: "8,210" },
  { title: "Men's Running Shoes", img: "sv-deal3", price: 1799, mrp: 3499, discount: 49, rating: 4.2, reviews: "5,632" },
  { title: "4K Action Camera", img: "sv-deal4", price: 4999, mrp: 8999, discount: 44, rating: 4.1, reviews: "2,104" },
  { title: "Air Fryer 4L", img: "sv-deal5", price: 3299, mrp: 5999, discount: 45, rating: 4.6, reviews: "9,875" },
  { title: "Cotton Bedsheet Set (Queen)", img: "sv-deal6", price: 899, mrp: 1799, discount: 50, rating: 4.4, reviews: "3,321" },
];

const productsData = [
  { title: "Ceramic Coffee Mug Set of 6", img: "sv-p1", price: 799, rating: 4.5, reviews: "1,204" },
  { title: "Yoga Mat with Carry Strap", img: "sv-p2", price: 649, rating: 4.3, reviews: "2,876" },
  { title: "Kids' Building Blocks Set, 100pc", img: "sv-p3", price: 999, rating: 4.7, reviews: "4,532" },
  { title: "Non-stick Frying Pan 24cm", img: "sv-p4", price: 899, rating: 4.2, reviews: "1,987" },
  { title: "Wireless Optical Mouse", img: "sv-p5", price: 449, rating: 4.4, reviews: "6,732" },
  { title: "LED Desk Lamp with USB Port", img: "sv-p6", price: 799, rating: 4.5, reviews: "3,109" },
  { title: "Laptop Backpack 15.6-inch", img: "sv-p7", price: 1199, rating: 4.6, reviews: "7,432" },
  { title: "Bluetooth Speaker, Waterproof", img: "sv-p8", price: 1599, rating: 4.3, reviews: "5,281" },
];

const products2Data = [
  { title: "Smart Fitness Band", img: "sv-e1", price: 1799, mrp: 2999, discount: 40, rating: 4.2, reviews: "10,432" },
  { title: "Noise Cancelling Headphones", img: "sv-e2", price: 3499, mrp: 5999, discount: 42, rating: 4.5, reviews: "6,213" },
  { title: "27-inch Full HD Monitor", img: "sv-e3", price: 8999, mrp: 12999, discount: 31, rating: 4.6, reviews: "1,876" },
  { title: "Mechanical Gaming Keyboard", img: "sv-e4", price: 2499, mrp: 3999, discount: 38, rating: 4.4, reviews: "3,542" },
  { title: "Portable SSD 1TB", img: "sv-e5", price: 6499, mrp: 9999, discount: 35, rating: 4.7, reviews: "2,109" },
  { title: "Smart LED TV 43-inch", img: "sv-e6", price: 21999, mrp: 34999, discount: 37, rating: 4.3, reviews: "5,987" },
  { title: "Power Bank 20000mAh", img: "sv-e7", price: 1299, mrp: 2199, discount: 41, rating: 4.2, reviews: "8,765" },
  { title: "Wireless Charging Pad", img: "sv-e8", price: 799, mrp: 1499, discount: 47, rating: 4.1, reviews: "2,341" },
];

/* ---------- render helpers ---------- */
function starString(rating) {
  const full = Math.round(rating);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function renderProductCard(p) {
  const priceBlock = p.mrp
    ? `<span class="price">${formatINR(p.price)}</span>
       <span class="mrp">${formatINR(p.mrp)}</span>
       <span class="discount">-${p.discount}%</span>`
    : `<span class="price">${formatINR(p.price)}</span>`;

  return `
    <div class="product-card">
      <div class="product-img-wrap"><img src="https://picsum.photos/seed/${p.img}/300/300" alt="${p.title}" loading="lazy" /></div>
      <p class="product-title">${p.title}</p>
      <div class="product-rating">
        <span class="stars" title="${p.rating} out of 5">${starString(p.rating)}</span>
        <span class="rating-count">${p.reviews}</span>
      </div>
      <div class="product-price">${priceBlock}</div>
      <div class="product-delivery">FREE delivery <strong>tomorrow</strong></div>
      <button class="add-to-cart" type="button">Add to Cart</button>
    </div>`;
}

document.getElementById("dealsRow").innerHTML = dealsData.map(renderProductCard).join("");
document.getElementById("productGrid").innerHTML = productsData.map(renderProductCard).join("");
document.getElementById("productGrid2").innerHTML = products2Data.map(renderProductCard).join("");

/* ---------- cart counter ---------- */
let cartCount = 0;
const cartBtn = document.getElementById("cartBtn");
const cartCountEl = document.getElementById("cartCount");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    cartCount++;
    cartCountEl.textContent = cartCount;
    cartBtn.classList.add("bump");
    setTimeout(() => cartBtn.classList.remove("bump"), 300);
  }
});

/* ---------- slide-in side menu ---------- */
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
}
function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
}
document.getElementById("hamburgerBtn").addEventListener("click", openMenu);
document.getElementById("closeSideMenu").addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

/* ---------- hero carousel ---------- */
const heroSeeds = ["shopverse-hero1", "shopverse-hero2", "shopverse-hero3"];
const heroImg = document.getElementById("heroImg");
const dots = document.querySelectorAll(".dot");
let heroIndex = 0;

function showHero(i) {
  heroIndex = i;
  heroImg.src = `https://picsum.photos/seed/${heroSeeds[i]}/1500/500`;
  dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
}
dots.forEach((d) => d.addEventListener("click", () => showHero(Number(d.dataset.i))));
setInterval(() => showHero((heroIndex + 1) % heroSeeds.length), 5000);

/* ---------- search (demo only, no backend) ---------- */
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = e.target.querySelector(".search-input").value.trim();
  if (q) alert(`Searching for "${q}" — demo only, no backend connected.`);
});

/* ---------- back to top ---------- */
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
