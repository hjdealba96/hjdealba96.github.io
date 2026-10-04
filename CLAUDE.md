# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal professional profile / resume website for Henry De Alba, deployed via GitHub Pages at `hjdealba96.github.io`. Based on the Start Bootstrap "Resume" template (v7.0.5, MIT licensed) with customized colors and a dark mode toggle.

## Architecture

This is a static site with no build step — edit files directly and push to `master` to deploy.

- `index.html` — Single-page resume with sections: About, Experience, Education, Skills, Interests. Uses Bootstrap 5.1.3 scrollspy for section-based navigation via a fixed sidebar.
- `css/styles.css` — Bundled file containing Bootstrap 5.1.3 CSS + custom resume theme styles + dark mode overrides. The primary color has been changed from the template default to `#4f4f4f`.
- `js/scripts.js` — Dark mode toggle logic (respects `prefers-color-scheme`, defaults to dark), Bootstrap scrollspy initialization, and responsive navbar collapse handling.
- `assets/img/` — Profile photo and favicon.

## Development

No build tools, package manager, or dev server required. Open `index.html` in a browser to preview. Any static file server works (e.g., `python3 -m http.server`).

## Key Details

- **Deployment**: Push to `master` branch triggers GitHub Pages deployment automatically.
- **Dark mode**: Controlled by the `.dark-mode` class on `<body>`, toggled via the checkbox switch in the top-right corner. Defaults to dark on page load (`toggleDarkMode(true)` in scripts.js:49).
- **External CDN dependencies**: Bootstrap JS (5.1.3), Font Awesome (6.1.0), Google Fonts (Saira Extra Condensed, Muli), Devicon (2.14.0).
- **Content is in Spanish and English** — the site owner is a native Spanish speaker with professional English proficiency.
