# Shamar Knibbs | Frontend Engineer Portfolio

A modern, interactive portfolio website built with React and Motion, featuring smooth animations, responsive design, and accessibility-first approach.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-11.15.0-FF6B6B?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

- **Smooth Animations** — Scroll-triggered animations powered by Motion (Framer Motion)
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Accessibility First** — WCAG compliant with skip links, ARIA labels, and keyboard navigation
- **Dark Theme** — Modern dark aesthetic with cyan accent colors
- **Component-Based** — Modular React architecture for easy customization
- **Performance Optimized** — Intersection Observer for efficient scroll animations

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sham-k/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── index.js              # Entry point
├── index.css             # Global styles & CSS variables
├── App.jsx               # Main app component
├── App.css               # App-level styles
└── components/
    ├── Navbar.jsx        # Navigation with mobile menu
    ├── Hero.jsx          # Hero section with animated title
    ├── About.jsx         # About me with stats
    ├── Experience.jsx    # Work experience timeline
    ├── Projects.jsx      # Featured projects grid
    ├── Skills.jsx        # Technical skills by category
    ├── Contact.jsx       # Contact links
    ├── Footer.jsx        # Footer
    └── hooks/
        └── useInView.js  # Custom hook for scroll animations
```

---

## 🎨 Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-bg: #0a0a0b;
  --color-accent: #22d3ee;
  --color-accent-secondary: #a78bfa;
  /* ... */
}
```

### Fonts

The portfolio uses:
- **Clash Display** — Headlines and titles
- **Plus Jakarta Sans** — Body text

Update fonts in `public/index.html` and `src/index.css`

### Content

Update your information in each component:

| File | Content |
|------|---------|
| `Hero.jsx` | Name, tagline, CTAs |
| `About.jsx` | Bio, stats |
| `Experience.jsx` | Work history |
| `Projects.jsx` | Featured projects |
| `Skills.jsx` | Technical skills |
| `Contact.jsx` | Contact links |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Motion | Animations |
| CSS3 | Styling |
| Intersection Observer | Scroll detection |

---

## 📱 Sections

1. **Hero** — Animated introduction with availability badge
2. **About** — Personal bio with key stats
3. **Experience** — Interactive timeline of work history
4. **Projects** — Card grid showcasing featured work
5. **Skills** — Categorized technical skills
6. **Contact** — Links to email, LinkedIn, GitHub, phone

---

## ⚡ Performance

- Lazy-loaded animations with Intersection Observer
- CSS animations for reduced JavaScript overhead
- Optimized asset loading
- Reduced motion support for accessibility

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the `build` folder
```

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Then run:
```bash
npm run deploy
```

---

## 📄 License

MIT License — feel free to use this for your own portfolio!

---

## 🤝 Connect

- **Email**: shamarknibbs@gmail.com
- **LinkedIn**: [linkedin.com/in/shamar-knibbs](https://linkedin.com/in/shamar-knibbs)
- **GitHub**: [github.com/sham-k](https://github.com/sham-k)

---

Built with ☕ and React by Shamar Knibbs
