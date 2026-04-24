# AGEON Landing Page

A franchise landing page for **AGEON — India's Smart-Ageing & Longevity Platform**, powered by EBG Group.

🔗 **Live Site:** [https://ageon-landing-page.vercel.app](https://ageon-landing-page.vercel.app/)

## Approach

This landing page uses an **image-overlay technique** — the entire design is a single full-width background image (`Ageon Landing Page.jpg`) with invisible interactive elements (buttons, form fields) positioned on top using CSS absolute positioning with percentage-based coordinates.

This approach ensures **100% design fidelity** since the visual is pixel-perfect from the original PSD design.

## Project Structure

| File | Purpose |
|------|---------|
| `index.html` | Main HTML with overlay elements positioned over the background image |
| `style.css` | All styling — CSS variables, overlay positioning (percentage-based) |
| `script.js` | Smooth scroll-to-form functionality for CTA buttons |
| `Ageon Landing Page.jpg` | Full-page background image (the entire visual design) |
| `.gitignore` | Ignores PSD, PDF, logos, and OS/editor files |

### Files NOT in repo (ignored)

| File | Reason |
|------|--------|
| `Ageon Landing Page.psd` | Original Photoshop source (~50 MB), too large for GitHub |
| `Ageon Landing Page.pdf` | Franchise deck PDF, hosted on Google Drive instead |
| `Header Logo.png` / `Footer Logo.png` | Already embedded in the background JPG |

## Interactive Elements

### Buttons

| Button | Location | Action |
|--------|----------|--------|
| **Explore Franchise** | Hero section (top-left) | Scrolls to the lead capture form & focuses name input |
| **Download Deck** | Hero section (next to Explore) | Opens Google Drive PDF in a new tab — [Direct Download Link](https://drive.google.com/uc?export=download&id=1SBYNVXOGFMia0ffHr0QPi7tqzaguw_sw) |
| **Enquire Now** ×3 | After Revenue Potential, Revenue Stack, and National Network sections | Scrolls to the lead capture form & focuses name input |
| **Apply for Franchise** | Footer | Scrolls to the lead capture form & focuses name input |
| **Schedule a Call** | Footer | Scrolls to the lead capture form & focuses name input |

### Lead Capture Form (Hero Section — Top Right)

| Field | Type |
|-------|------|
| Full Name | Text input |
| Phone No | Tel input |
| Email ID | Email input |
| Enquire Now | Submit button |

The form inputs are positioned to the **right of the label text** in the image, so typed text does not overlap with the labels.

## How the Overlay Positioning Works

All interactive elements use `position: absolute` with **percentage-based** `top`, `left`, `width`, and `height` values. This ensures they scale proportionally with the background image across different screen sizes.

```css
/* Example — an Enquire Now button */
.enquire-btn-2 { top: 61.20%; left: 43.97%; width: 12.03%; height: 1.52%; }
```

The percentages are relative to the `.landing-container` which wraps the background image.

## Google Drive PDF Link

- **View URL:** https://drive.google.com/file/d/1SBYNVXOGFMia0ffHr0QPi7tqzaguw_sw/view
- **Direct Download URL:** https://drive.google.com/uc?export=download&id=1SBYNVXOGFMia0ffHr0QPi7tqzaguw_sw

The direct download URL is used in the "Download Deck" button so it triggers an immediate download instead of opening the Google Drive viewer.

## Local Development

Simply open `index.html` in a browser, or serve it locally:

```bash
# Python
python -m http.server 8000

# Then visit http://localhost:8000
```

## Deployment

This is a fully static site (HTML + CSS + JS + one image). It can be deployed on:

- **GitHub Pages** — free, directly from this repo
- **Netlify / Vercel** — free tier, drag-and-drop deploy
- **Any static hosting**

No build step required.
