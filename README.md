# 🧵 Jinal Collection — Premium Fabric Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![Custom Domain](https://img.shields.io/badge/Domain-jinalcollection.in-gold?style=flat)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-Optimised-brightgreen?style=flat)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat)

> ⭐ **Freelance Client Project** — Real business, real domain, real deployment.

A fully responsive business website built for **Jinal Collection**, a premium suiting and shirting fabric supplier based at Mangaldas Market, Mumbai. Built with pure HTML, CSS and JavaScript — deployed on Netlify with a custom domain, production-grade security headers, SEO optimisation, sitemap, and WhatsApp contact integration.

---

## 🌐 Live Website

**[https://www.jinalcollection.in](https://www.jinalcollection.in)**

---

## 📸 Preview

![Jinal Collection Banner](og-image.jpg)

---

## ✨ Features

- Sticky navbar — transparent to solid gold on scroll
- Mobile hamburger menu with body scroll lock
- Product category tabs — Suiting, Shirting, and more
- Scroll reveal animations via `IntersectionObserver`
- Animated stat counters (eased cubic animation using `requestAnimationFrame`)
- Contact form with real-time validation — Indian phone number regex
- **WhatsApp integration** — form submits directly to WhatsApp chat
- Custom 404 page with WhatsApp fallback button
- SEO optimised — meta tags, Open Graph, `sitemap.xml`, `robots.txt`
- Favicon set — ico, 32×32, 192×192, Apple touch icon
- Deployed on **Netlify** with custom domain `jinalcollection.in`
- WWW → non-WWW redirect (301)
- HTTP → HTTPS redirect (301)
- Production security headers — HSTS, X-Frame-Options, XSS Protection
- Aggressive asset caching — CSS/JS/images cached for 1 year

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure, SEO meta tags, Open Graph |
| CSS3 | Variables, Grid, Flexbox, animations, scroll reveal |
| JavaScript (ES6+) | Navbar, tabs, counters, form validation, WhatsApp |
| Google Fonts | Cormorant Garamond + DM Sans |
| Netlify | Hosting, custom domain, redirects, security headers |
| `netlify.toml` | Redirect rules, cache headers, security config |

---

## 🧠 JavaScript Features

- `IntersectionObserver` — scroll reveal animations & counter triggers
- `requestAnimationFrame` — smooth eased counter animation (cubic ease-out)
- `encodeURIComponent` — WhatsApp message URL encoding
- Real-time form validation — `blur` + `input` events
- Indian mobile number regex: `/^[6-9]\d{9}$/`
- `performance.now()` — precise animation timing
- `window.scrollY` — scroll-triggered navbar state
- Smooth scroll with navbar height offset using CSS variable `--nav-h`
- `DOMContentLoaded` — modular function initialisation

---

## 🔍 SEO & Performance

- `sitemap.xml` — submitted to Google Search Console
- `robots.txt` — allows all crawlers, blocks private paths
- Open Graph meta tags — rich preview on WhatsApp & social shares
- `og-image.jpg` — custom OG image for link previews
- Favicon set — all sizes including Apple touch icon
- HTML `Cache-Control: no-cache` — always fresh content
- CSS/JS/Images `Cache-Control: max-age=31536000, immutable` — 1 year cache
- HSTS — `Strict-Transport-Security: max-age=31536000`

---

## 🔒 Security Headers (via Netlify)

```
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## 📁 Project Structure

```
jinal-collection/
├── index.html          # Main page
├── 404.html            # Custom not-found page
├── style.css           # All styles
├── script.js           # All JavaScript
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search crawler rules
├── netlify.toml        # Netlify config — redirects, headers, cache
├── favicon.ico         # Browser tab icon
├── favicon-32x32.png   # 32px favicon
├── favicon-192x192.png # Android icon
├── apple-touch-icon.png# iOS home screen icon
├── og-image.jpg        # Open Graph social preview image
└── README.md
```

---

## 🚀 Deployment

Deployed on **Netlify** with a custom domain.

```
Live URL:  https://www.jinalcollection.in
Platform:  Netlify
Domain:    jinalcollection.in (custom, paid)
Redirects: WWW → non-WWW (301), HTTP → HTTPS (301)
```

---

## 📞 Business Details

**Jinal Collection**
Premium Suiting & Shirting Fabrics
📍 Mangaldas Market, Mumbai
💬 WhatsApp: +91 83694 76952
🌐 [jinalcollection.in](https://www.jinalcollection.in)

---

## 👩‍💻 Built By

**Jinal Jain** — Freelance Frontend Developer & SEO Executive
- GitHub: [@jinaljain733-cmd](https://github.com/jinaljain733-cmd)
- LinkedIn: [linkedin.com/in/jinal-jain-08b70328b](https://linkedin.com/in/jinal-jain-08b70328b)

---

## 📄 License

© 2026 Jinal Collection. All rights reserved.

> This is a **client project**. Code and design are proprietary and may not be reused, copied or redistributed without written permission.