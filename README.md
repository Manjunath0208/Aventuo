# Aventuo — Bangalore Groceries, Home Essentials &amp; Services (Demo)

A static front-end e-commerce homepage for a hyperlocal Bangalore platform — groceries, home essentials, kitchen &amp; storage, food delivery and home services — built with plain HTML, CSS, and JavaScript. No frameworks, no build step. Layout and UX patterns are inspired by Amazon's homepage; branding and category focus are original.

## Files
- `index.html` — page structure
- `style.css` — all styling (colors, layout, responsive breakpoints)
- `script.js` — product data, cart counter, side menu, hero carousel
- `README.md` — this file

## Features
- Five real category cards on the homepage: Home Essentials, Kitchen & Storage, Groceries, Food Delivery, Home Services
- "Become a Seller" call-to-action section, plus links in the subnav and footer
- Bangalore delivery coverage grid (12 areas) with an ETA badge
- UPI payment section (Google Pay, PhonePe, Paytm, BHIM, Cash on Delivery)
- Floating WhatsApp order button (fixed bottom-right)
- Working cart counter, slide-in category menu, and auto-rotating hero carousel — all in `script.js`

## Run locally
Just open `index.html` in a browser. No server or install required.

## Deploy on GitHub Pages
1. Create a new GitHub repository and push these 4 files to it.
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After a minute, your site is live at `https://<your-username>.github.io/<repo-name>/`.

## Customize
- Edit the `dealsData`, `productsData`, and `products2Data` arrays at the top of `script.js` to change products, prices, ratings, and images.
- Edit the `heroSlides` array in `script.js` to change the hero carousel images.
- Edit the coverage areas in the `#bangalore-coverage` section of `index.html` to match your real delivery zones.
- **Before going live:** replace the placeholder WhatsApp number (`91XXXXXXXXXX`) in the floating button's `href` in `index.html` with your real WhatsApp Business number.
- Edit the CSS variables at the top of `style.css` (`:root { ... }`) to change the color scheme.
- Product photos are pulled live from Lorem Picsum (`picsum.photos`) placeholders and are randomly assigned, not actually category-matched — swap any `src` for real product photography before launch.

## Note on branding
This uses original branding ("Aventuo") and placeholder imagery rather than any real company's logo or product photos, since those are trademarked/copyrighted. The layout, color palette, and UX patterns are intentionally close to familiar e-commerce apps for learning/portfolio purposes. Not affiliated with Amazon or any real retailer, delivery, or payment platform. The UPI app names shown are for illustration only — no real payment integration is wired up.
