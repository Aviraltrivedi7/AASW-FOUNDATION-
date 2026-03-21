🌟 AASW Foundation
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>
<p align="center">
  <b>The official web platform for AASW Foundation — a digital step towards social welfare.</b>
</p>

📌 Project Overview
AASW Foundation is a web application built for a social welfare organization, powered by Node.js and Express.js. The platform is designed to digitally represent the foundation's activities, services, and initiatives — making them accessible to a wider audience.

📁 Project Structure
AASW-FOUNDATION/
├── aasw-pro/          # Core application module
├── src/               # Source files (components, pages, assets)
├── server.js          # Main server entry point
├── package.json       # Project metadata & dependencies
├── package-lock.json  # Dependency lock file
└── .gitignore         # Git ignored files

🚀 Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
npm (comes bundled with Node.js)

Installation

Clone the repository:

bashgit clone https://github.com/Aviraltrivedi7/AASW-FOUNDATION-.git

Navigate to the project directory:

bashcd AASW-FOUNDATION-

Install dependencies:

bashnpm install

Start the server:

bashnode server.js

Open your browser and visit:

http://localhost:3000

🛠️ Tech Stack
TechnologyPurposeNode.jsBackend runtime environmentExpress.jsWeb server frameworkJavaScriptApplication logicHTML/CSSFrontend structure & styling

📦 Available Scripts
bash# Start the server
node server.js

# Or using npm (if configured)
npm start

🤝 Contributing
Contributions are welcome! To contribute to this project:

Fork the repository
Create your feature branch — git checkout -b feature/YourFeature
Commit your changes — git commit -m 'Add: YourFeature'
Push to the branch — git push origin feature/YourFeature
Open a Pull Request


📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Aviral Trivedi

GitHub: @Aviraltrivedi7

---
# AASW Foundation Website Frontend
## Premium Bilingual Website (Hindi + English)

---

### 📁 Frontend File Structure

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
