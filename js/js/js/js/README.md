# Faisal Rajeh Alsubie — Portfolio

This repository contains a production-ready portfolio website built for a gameplay programmer: Faisal Rajeh Alsubie.

Features:
- HTML5, modern CSS (glassmorphism), vanilla JS
- Mobile-first, accessible, and SEO-friendly
- Featured case study pages and dedicated Gameplay Systems and Community pages
- Smooth animations, subtle particles/mouse glow, and interactive cards

Folder structure
- index.html
- projects/
  - heritage-keeper.html
  - let-me-work-in-peace.html
  - sheherazade.html
  - spider-ball.html
  - ai-seeds.html
  - 0-days.html
- gameplay-systems.html
- community.html
- css/
- js/
- assets/

Placeholder assets
- Add portrait at `assets/images/hero-portrait.jpg`
- Add project screenshots under `assets/images/`
- Add icons under `assets/icons/` (github.svg, linkedin.svg, mail.svg, logo-icon.svg)

Deployment (GitHub Pages)
1. Create a new repository (or use `FesalsPortfolio`).
2. Push this folder structure to the repository root (index.html at root).
3. In repository Settings → Pages, select the `main` branch and `/ (root)` as the publishing source (or `gh-pages` branch if you prefer).
4. After a minute, the site will be available at `https://<username>.github.io/<repo>/` (for your repo: `https://fesalalsubie.github.io/FesalsPortfolio`).

Performance & Accessibility notes
- Images: replace placeholders with optimized WebP/JPEG and provide width/height attributes if you add directly in HTML.
- Lighthouse target: aim to serve optimized images, compress assets, and enable gzip/Brotli on your hosting for 95+.
- Accessibility: all interactive controls are keyboard accessible and aria attributes added for menus and skips.

Customization & Next steps
- Replace placeholder images in `assets/images/`.
- Add real project downloadable build links or GitHub repos (link icons in project cards).
- Add structured data (JSON-LD) for improved SEO (if desired).
- Optional: set up a small CI to optimize images automatically on push.

License
- Content is provided as sample code. Replace personal content and assets before public deployment.