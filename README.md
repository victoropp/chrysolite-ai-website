# Chrysolite AI — Marketing Website

> State-of-the-art marketing website for Chrysolite AI ERP built with Next.js 15, React 19, and Tailwind CSS 4.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38bdf8)](https://tailwindcss.com/)

## 🎨 Design Highlights

- **Premium Dark Theme** — Chrysolite gemstone-inspired color palette (golden-green)
- **State-of-the-Art Animations** — Framer Motion, CSS keyframes, blob animations
- **Glassmorphism** — Backdrop blur effects, semi-transparent cards
- **Fully Responsive** — Mobile-first design, optimized for all screen sizes
- **Zero TypeScript Errors** — Strictly typed, production-ready code
- **19 Pages** — Complete marketing site with all features documented

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **React:** 19.2.4
- **TypeScript:** 5.9.3
- **Styling:** Tailwind CSS 4.1.18
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Theme:** next-themes (dark mode)

## 📂 Project Structure

```
chrysolite-ai-website/
├── app/
│   ├── features/          # 10 ERP module pages
│   ├── pricing/           # Custom pricing page
│   ├── about/             # Company info
│   ├── contact/           # Contact form
│   ├── legal/             # Privacy, Terms, Data Protection
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles + animations
├── components/
│   ├── sections/          # Homepage sections (9 components)
│   ├── Navigation.tsx     # Header with mobile menu
│   ├── Footer.tsx         # Site footer
│   └── ThemeProvider.tsx  # Dark mode provider
├── lib/
│   └── utils.ts           # Utility functions (cn)
└── public/
    ├── logo.svg           # Faceted gemstone logo
    └── logo-mark.svg      # Favicon version
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Clone repository (if separate repo)
git clone https://github.com/yourusername/chrysolite-ai-website.git
cd chrysolite-ai-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### TypeScript Validation

```bash
# Check for TypeScript errors
npx tsc --noEmit
```

## 🎯 Pages Overview

### Homepage (`/`)
- Hero with animated gradient background
- 8 feature cards
- How It Works (3 steps)
- Module showcase (tabs)
- AI-powered section
- Pricing preview
- Testimonials
- CTA section
- Footer

### Feature Pages (`/features/*`)
10 dedicated pages for ERP modules:
- Accounting
- Inventory
- Procurement
- Sales
- Payroll
- Fixed Assets
- CRM
- Banking
- AI Features
- Reporting

### Additional Pages
- `/pricing` — Customized pricing approach (no fixed tiers)
- `/about` — Company story, values, team
- `/contact` — Contact form with validation
- `/legal/privacy-policy` — Privacy policy
- `/legal/terms-of-service` — Terms of service
- `/legal/data-protection` — GDPR compliance

## 🎨 Brand Colors

### Chrysolite (Primary)
```css
--chrysolite-500: #84a63c;  /* Primary brand color */
--chrysolite-vivid: #a4cc3c; /* Highlight color */
--chrysolite-600: #6b8a2a;  /* Dark variant */
```

### Gold (Accent)
```css
--gold-400: #d4a847;  /* Premium accents */
```

### Surface (Neutrals)
```css
--surface-950: #0a0f0a;  /* Page background */
--surface-900: #111a11;  /* Card background */
--surface-800: #1a2a1a;  /* Elevated surfaces */
```

## 🎬 Animations

All animations use CSS keyframes for performance:

- `fade-in-up` — Elements enter with upward motion
- `fade-in` — Simple opacity fade
- `scale-in` — Scale from 95% to 100%
- `blob` — Background blobs morph organically (20s)
- `float` — Gentle up/down movement (6s)
- `glow` — Pulsing shadow effect (3s)
- `shimmer` — Sliding gradient overlay (2s)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px - 1280px
- **Large:** > 1280px

## 🔗 Links to ERP App

The website links to the ERP application at:
- **Production:** `https://app.chrysoliteai.com`
- **Local Dev:** `http://localhost:3000` (ERP runs on different port)

## 📝 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# No env vars required for static site
# Add analytics keys if needed:
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Domain Setup

For deployment at `chrysoliteai.com`:
1. Configure DNS to point to Vercel
2. Add custom domain in Vercel dashboard
3. SSL automatically provisioned

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure project settings:
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
4. Add custom domain: `chrysoliteai.com`
5. Deploy

### Other Platforms

The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Docker

## 📊 Build Stats

```
✓ Compiled successfully in 2.0s
✓ TypeScript validation passed
✓ 19 pages generated statically
✓ Zero errors, zero warnings
✓ Production-ready
```

## 🎯 SEO

All pages include:
- Proper `<title>` and `<meta description>`
- OpenGraph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data (homepage)
- Semantic HTML
- Accessible navigation

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all inputs
- Screen reader friendly
- WCAG 2.1 AA compliant color contrast

## 📄 License

Copyright © 2026 Chrysolite AI. All rights reserved.

## 🤝 Contributing

This is a private marketing website for Chrysolite AI. For issues or suggestions, contact the development team.

---

Built with ❤️ using Next.js 15, React 19, and Tailwind CSS 4
Designed with 🎨 by Claude Code (Anthropic)
