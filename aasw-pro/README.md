# AASW Foundation Website
## Premium Bilingual Website (Hindi + English)

---

### 📁 File Structure

```
aasw-foundation/
├── index.html          ← Main homepage
├── css/
│   └── style.css       ← All styles + animations
├── js/
│   └── main.js         ← All JavaScript + language logic
└── README.md           ← This file
```

---

### ✨ Features

- **🌐 Hindi / English Toggle** — One click switches entire website
- **🎨 Particle Animation** — Floating connected particles in hero
- **🖱️ Custom Cursor** — Gold dot + green ring follower
- **⏳ Page Loader** — Animated loading screen
- **🎠 Auto Slider** — 3-slide hero carousel with touch support
- **🔢 Counter Animation** — Numbers count up when scrolled into view
- **👁️ Scroll Reveal** — Fade-up, slide-left, slide-right, scale animations
- **🃏 3D Card Tilt** — Program cards tilt on mouse movement
- **🎈 Floating Elements** — Animated badge, side card on welcome section
- **📱 Fully Responsive** — Mobile, tablet, desktop
- **☝️ Back to Top Button** — Smooth scroll
- **⚡ Sticky Navbar** — Transparent → white on scroll with blur

---

### 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Green | `#1a6e3c` |
| Dark Green | `#0f4c2a` |
| Accent Gold | `#f5a623` |
| Background | `#faf8f4` |
| Heading Font | Playfair Display |
| Body Font | DM Sans |
| Hindi Font | Hind |

---

### 🚀 How to Use

1. **Simply open `index.html`** in any browser — no build tools needed
2. Click **EN / हि** button in navbar to switch language
3. Replace `[placeholder]` image blocks with real photos

---

### 🖼️ Adding Real Images

Replace these placeholder blocks with `<img>` tags:
- `[Hero Community Image]` → Hero section right panel
- `[Community Engagement Photo]` → Welcome section
- `[Community Photo]` → Empowering section
- `[Foundation Overview Photo]` → Overview dark section

---

### 📞 Contact Details to Update

In `index.html`, update:
- Email: `info@aaswfoundation.org`
- Phone: `+91 98765 43210`
- Address: `42, Jal Path, Civil Lines, Jaipur`

---

### 🌐 Language System

All translatable text uses `data-t="key"` attributes.
Translations are in `js/main.js` in the `translations` object.
To add new translatable text:
1. Add `data-t="your-key"` to the HTML element
2. Add `'your-key': { en: 'English text', hi: 'हिंदी टेक्स्ट' }` to translations

---

*Built with ❤️ for AASW Foundation*
