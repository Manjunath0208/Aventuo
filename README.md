# ShopVerse — Amazon-Style E-Commerce Homepage (Demo)

A static front-end clone inspired by Amazon's homepage layout — dark navbar, orange accents, category strip, hero banner, and product grids — built with plain HTML, CSS, and JavaScript. No frameworks, no build step.

## Files
- `index.html` — page structure
- `style.css` — all styling (colors, layout, responsive breakpoints)
- `script.js` — product data, cart counter, side menu, hero carousel
- `README.md` — this file

## Run locally
Just open `index.html` in a browser. No server or install required.

## Deploy on GitHub Pages
1. Create a new GitHub repository and push these 4 files to it.
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After a minute, your site is live at `https://<your-username>.github.io/<repo-name>/`.

## Customize
- Edit the `dealsData`, `productsData`, and `products2Data` arrays at the top of `script.js` to change products, prices, ratings, and images.
- Edit the CSS variables at the top of `style.css` (`:root { ... }`) to change the color scheme.
- Product photos are pulled live from Lorem Picsum (`picsum.photos`) placeholders — swap any `src` for your own image URL.

## Note on branding
This uses original branding ("ShopVerse") and placeholder imagery rather than Amazon's actual logo or product photos, since those are trademarked/copyrighted. The layout, color palette, and UX patterns are intentionally close to Amazon's for learning/portfolio purposes. Not affiliated with Amazon.
