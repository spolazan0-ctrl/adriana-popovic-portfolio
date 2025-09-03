# Adriana Popovic — Sculptor (Static Portfolio Site)

A minimalist, gallery-forward portfolio for sculptor **Adriana Popovic**. Ready for **Netlify**.

## Quick Start
1. Unzip this folder.
2. Double-click `index.html` to preview locally.

## Publish on Netlify (free)
1. Create an account at netlify.com.
2. Click **Add new site → Deploy manually**.
3. Drag the **unzipped folder** into Netlify.
4. Your site goes live on a free subdomain (SSL auto-enabled).
5. Add your custom domain in **Site settings → Domain management** and follow the DNS prompts.

## Customize Content
- Update text in `index.html` (hero tagline, bio, exhibitions).
- Replace placeholder images in `assets/`:
  - `hero.jpg` (background image at top)
  - `portrait.jpg` (About section portrait)
  - `work-1.jpg` … `work-6.jpg` (gallery)
  - `social-preview.jpg` (Open Graph)
  - `favicon.png`
- Use **descriptive alt text** for accessibility.
- Update JSON-LD in `<head>` (website URL, social links).

## Contact Form
Uses **Formspree**. Create a form at formspree.io, then replace the `action` URL in the Contact section:
```html
<form class="form" action="https://formspree.io/f/your-id" method="POST">
```

## Adding More Works
Duplicate a `<figure class="item" ...>` block, set `data-category` to one of:
- `Sculpture`, `Installations`, `Public Art` (or define your own and add a filter button).

## Performance Tips
- Export images at ~1600px width for detail; compress with Squoosh/TinyPNG.
- Keep file names simple and lowercase.
- Fill in `<meta>` description and social meta for better previews.

## Optional (CV)
Replace `assets/Adriana-Popovic-CV.pdf` with your own file to enable the **Download CV** button.
