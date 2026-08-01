# Luna and the Lantern Bugs — Flipbook Storybook Template

An animated storybook that flips like a real book — swipe right-to-left to turn the
page forward, left-to-right to turn it back. The last page shows an ending
animation (hearts and stars falling) to give kids a satisfying "The End."

Built with **[page-flip](https://www.npmjs.com/package/page-flip)** (MIT license,
free for commercial use — including reselling projects built with it).

---

## 1. Try it locally in VS Code

1. Open this folder in VS Code.
2. Install the **Live Server** extension (if you don't have it).
3. Right-click `index.html` → **Open with Live Server**.
4. On your phone, connect to the same Wi-Fi and open the "Network" address
   Live Server shows in the terminal, to test the swipe gesture on a real touchscreen.

No `npm install` needed — the flip library loads from a CDN link in `index.html`,
so this works straight out of the folder.

---

## 2. Customize it for a new story

Everything you need to change lives in **`index.html`**:

- **Cover title & subtitle** — inside `.cover--front`
- **Story text** — each `<div class="page">...<p>...</p></div>` block
- **Number of pages** — copy/paste a `<div class="page">` block to add more,
  or delete one to remove a page
- **Colors & fonts** — all in `css/style.css` under `:root` at the top —
  change the hex values there and the whole book updates
- **Illustrations** — the colored blob shapes (`.illustration`) are placeholder
  art made with pure CSS. To use real artwork, replace
  `<div class="illustration illustration--1"></div>` with
  `<img src="images/page1.jpg" alt="">` and drop your image files into `images/`.

---

## 3. Put it online (free)

**Option A — GitHub Pages**
1. Create a new GitHub repo and push this folder to it.
2. Go to repo **Settings → Pages**, set the source branch to `main`, folder `/root`.
3. You'll get a free live link like `https://yourname.github.io/repo-name/`.

**Option B — Netlify**
1. Go to [netlify.com](https://netlify.com), drag this whole folder onto the
   "Deploy manually" box.
2. You'll get a free live link instantly, with an option to set a custom subdomain.

Use this live link as your "preview" so buyers can see the flip animation
working before they purchase.

---

## 4. Selling this on Raket.ph

Raket.ph is a digital-download marketplace — buyers pay and receive a file,
they don't get a live hosted app. So package it like this:

1. **Zip the whole project folder** (right-click → "Compress" / "Send to → Zip").
2. Upload that `.zip` as your product file on Raket.ph.
3. In your product description, link to your live GitHub Pages/Netlify demo
   so buyers can see it flip before buying.
4. Add a short line in your listing like: *"Editable storybook template — swap
   in your own text, images, and cover in minutes. No coding experience needed
   beyond opening a text file."*
5. Consider offering a **done-for-you** tier too: buyer sends you their story
   text/photos, you customize and deliver either the finished zip or a live link
   with their story on it — this tends to sell for more than a plain template.

---

## 5. Credits

- Flip animation: [page-flip](https://github.com/Nodlik/PageFlip) — MIT license
- Fonts: Baloo 2 & Quicksand via Google Fonts (free, open license)
