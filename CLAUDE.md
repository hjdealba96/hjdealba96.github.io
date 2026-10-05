# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal professional profile / resume website for Henry De Alba, deployed via GitHub Pages at `hjdealba96.github.io`. Based on the Start Bootstrap "Resume" template (v7.0.5, MIT licensed) with a custom color system and dark/light mode toggle.

## Architecture

This is a static site with no build step — edit files directly and push to `master` to deploy.

- `index.html` — Single-page resume with sections: About, Experience, Education, Skills, Interests. Uses Bootstrap 5.1.3 scrollspy for section-based navigation via a fixed sidebar.
- `css/styles.css` — Custom theme styles only (Bootstrap CSS is loaded from CDN). Includes a CSS variable-based color system with light and dark mode palettes, sidebar/nav styling, social icons, theme toggle, typography, and accessibility rules.
- `js/scripts.js` — Dark mode toggle logic (persists to `localStorage`, defaults to dark), Bootstrap scrollspy initialization, and responsive navbar collapse handling.
- `assets/img/` — Profile photo and favicon.

## Development

No build tools, package manager, or dev server required. Open `index.html` in a browser to preview. Any static file server works (e.g., `python3 -m http.server`).

## Key Details

- **Deployment**: Push to `master` branch triggers GitHub Pages deployment automatically.
- **Color system**: Defined via CSS custom variables (`--bg`, `--surface`, `--accent`, `--text`, etc.) in `:root` (light mode) and `.dark-mode` (dark mode). The accent color is teal (`#378a84` light / `#5cb8b2` dark).
- **Dark mode**: Controlled by the `.dark-mode` class on `<body>`, toggled via a moon/sun icon button in the sidebar (top-right on desktop, inline navbar on mobile). User preference is persisted in `localStorage`. The sidebar stays dark in both themes.
- **External CDN dependencies**: Bootstrap CSS + JS (5.1.3), Font Awesome (6.1.0), Google Fonts (Saira Extra Condensed, Muli), Devicon (2.14.0).
- **Content is in Spanish and English** — the site owner is a native Spanish speaker with professional English proficiency.
