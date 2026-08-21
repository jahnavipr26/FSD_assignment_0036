# Pulseform

An original at-home fitness/training website — React + Vite, plain CSS, no UI framework.

> Note: this is an original design (own name, copy, palette, and layout
> variations) built in the general spirit of at-home-workout sites. It is not
> a pixel clone of any existing company's branded site, since reproducing
> another company's exact text, logo, and photography isn't something I can
> do — but the page anatomy (sticky nav, hero, promo tiles, "where to start"
> section, footer) will feel very familiar.

## Run it locally

Open a terminal in this folder (`pulseform/`) and run:

```bash
npm install
npm run dev
```

Then open the URL it prints — usually **http://localhost:5173** — in your
browser. Vite will also try to auto-open it for you.

## Other commands

```bash
npm run build     # production build, output in dist/
npm run preview   # serve the production build locally
```

## Project structure

```
pulseform/
├── index.html          # HTML shell + Google Fonts
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx         # React entry point
    ├── App.jsx           # All page sections/content
    ├── App.css           # All component styling
    └── index.css         # Reset + design tokens (CSS variables)
```

## Customizing

- **Colors / fonts**: edit the CSS variables at the top of `src/index.css`.
- **Copy / links / nav items**: edit the arrays at the top of `src/App.jsx`
  (`NAV_LINKS`, `FEATURE_TILES`, `START_CARDS`, `STATS`, `FOOTER_COLUMNS`).
- **Hero image**: `.hero__art` in `App.css` is currently a gradient block —
  swap it for a real `<img>` in `App.jsx` when you have photography to use.
