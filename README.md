# SSN Constructions — Modern Static Website

A fast, lightweight, and responsive static website for **SSN Constructions**, a leading supplier of Karimnagar red bricks and construction materials based in Hyderabad, Telangana.

## Features

- **Pure Web Stack**: Built with 100% HTML5, CSS3, and Vanilla JavaScript. Zero external frameworks, zero bundlers, and zero backend required.
- **Modern Industrial Aesthetic**: Tailored color palette featuring Deep Navy (`#142D4E`), Terracotta Red (`#C65D3B`), and Warm Ivory (`#FAF8F5`).
- **Typography**: Manrope for bold, architectural headings and Inter for crisp, readable body text.
- **10 Core Sections**:
  1. Sticky Navigation Bar & Top Contact Details
  2. Full-Width Hero with Photography & Dark Navy Overlay
  3. About Us with Years of Experience Callout
  4. Company Statistics (100+ Projects, 100,000+ Clients, 25+ Years, 35+ Team)
  5. Product Catalog with 4:3 Product Cards & Direct WhatsApp Enquiry Links
  6. Services Section (Bricks Supply, Transport Services, Construction Sand Supply)
  7. Why Choose Us (4 Core Value Pillars with Custom SVG Icons)
  8. Verified Customer Testimonials
  9. Contact Section with Phone, Email, Office Address & WhatsApp Quote Generator
  10. Comprehensive Footer with Quick Links & Legal Info
- **Floating Contact Actions**: Persistent, non-intrusive Call and WhatsApp quick-dial floating action buttons.
- **SEO & Performance Ready**: LocalBusiness Schema.org JSON-LD structured data, Open Graph meta tags, lazy loaded images, and accessible semantics.

---

## Project Structure

```text
ssn-constructions/
├── index.html                  # Main semantic HTML document
├── css/
│   └── style.css               # Vanilla CSS with design tokens & responsive queries
├── js/
│   └── script.js               # Vanilla JS interactions (nav, scroll, WhatsApp generator)
├── assets/
│   ├── logo.svg                # Scalable brand vector logo
│   ├── logo-light.svg          # Footer version vector logo
│   ├── logo.png                # Brand raster logo
│   ├── favicon.png             # Site favicon
│   ├── hero.jpg                # Hero construction site photography
│   ├── about.jpg               # Stacked brick kiln photography
│   ├── products/
│   │   ├── rrr-bricks.jpg
│   │   ├── svb-bricks.jpg
│   │   ├── pvc-bricks.jpg
│   │   ├── psb-bricks.jpg
│   │   ├── industrial-bricks.jpg
│   │   └── construction-sand.jpg
│   └── services/
│       ├── bricks-supply.jpg
│       ├── transport-services.jpg
│       └── sand-supply.jpg
└── README.md                   # Project documentation
```

---

## How to Run & Deploy

### Run Locally
Simply double-click `index.html` to open it directly in any modern browser, or launch a local web server:

```bash
# Using VS Code Live Server extension:
# Right click index.html -> "Open with Live Server"

# Or using Python:
python -m http.server 8000

# Or using Node:
npx serve .
```

### Static Hosting
This website can be deployed immediately with zero build step to any static hosting provider:
- **GitHub Pages**: Push this repository to GitHub and enable Pages in repository settings.
- **Vercel / Netlify / Cloudflare Pages**: Drag and drop the folder or connect your Git repository.
- **cPanel / Apache / Nginx**: Upload files directly to `public_html`.

---

## Contact & Business Information

- **Company**: SSN Constructions
- **Phone**: [+91 9912349200](tel:+919912349200)
- **WhatsApp**: [Chat with us](https://wa.me/919912349200)
- **Email**: [contact@ssnconstructions.in](mailto:contact@ssnconstructions.in)
- **Office & Yard**: H.No. 1-98/85/2/1, Sai Nagar, Madhapur, Hyderabad, Telangana 500081
- **Working Hours**: Monday – Saturday: 9:00 AM – 6:00 PM
