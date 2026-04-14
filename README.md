# Fresh Green Gardening — Premium Next.js Application

A high-performance, visually stunning, and conversion-optimized web application for **Fresh Green Gardening**, a premier landscaping business based in Perth, Australia.

## ✨ Project Overview

This application was engineered to replace a basic static site with a dynamic, SEO-friendly, and highly interactive online presence. It leverages a modern frontend stack to deliver incredibly fast load times, beautiful scroll animations, and specialized landing pages designed explicitly for high-converting Google Ads campaigns.

### Key Features
- **Route Group Architecture:** Separated `(main)` site pages from dedicated, minimized PPC landing pages (`/perth/[slug]`) to optimize advertising ROI.
- **Dynamic Animations:** Integration with Framer Motion for scroll reveals, a custom auto-playing Hero Image Slider, and a premium sliding Portfolio Carousel.
- **Form Handling & DB:** Secure integration with **Supabase** for collecting quote requests directly into a Postgres database.
- **Trust Elements:** Custom-built "Google-style" review components and 3-step modern Process flows to build user trust intuitively.
- **Mobile First & Responsive:** Strict implementation of responsive tailwind grid layouts and optimized mobile navigation menus.

---

## 🛠️ Technology Stack

| Technology | Description |
| :--- | :--- |
| **Next.js 14+** | App Router, Server Components, and Turbopack for lightning-fast compilation. |
| **React 18** | UI foundational library. |
| **TypeScript** | Strict type-safety across components and data files. |
| **Tailwind CSS v4** | Utility-first CSS framework mapped with a custom `brand-dark`, `brand-accent`, and `brand-primary` organic color scheme. |
| **Framer Motion** | Engine for highly polished micro-interactions and smooth scroll animations. |
| **Supabase** | Backend-as-a-Service providing PostgreSQL and API layers. |
| **Lucide React** | Clean, highly-customizable SVG icon library. |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── (main)/              # Standard Website Public Routes
│   │   ├── about/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── gallery/
│   │   ├── privacy/
│   │   ├── services/
│   │   ├── terms/
│   │   └── page.tsx         # Main Interactive Homepage
│   ├── perth/               # Dedicated Google Ads Landing Pages
│   │   └── [slug]/          # Stripped-down high-conversion layouts
│   ├── globals.css          # Tailwind Directives & Custom Fonts
│   └── layout.tsx           # Global Document Wrapper
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # HeroSlider, ProcessSection, GoogleReviews, PortfolioCarousel
│   └── ui/                  # Button, AnimatedSection
└── lib/
    ├── services-data.ts     # Centralized database of available landscaping services
    ├── supabase.ts          # Supabase client instantiation
    └── utils.ts             # Tailwind class merging utilities (clsx, tailwind-merge)
```

---

## 🚀 Getting Started

### 1. Requirements
- Node.js (v18+)
- npm or yarn
- A Supabase Project (for tracking form submissions)

### 2. Environment Variables
Create a `.env.local` file at the root of the project with your valid Supabase project details so the Contact Forms function securely:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Installation
Install all required dependencies:
```bash
npm install
```

### 4. Running the Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 🎨 Design System
- **Brand Dark (`#0e1c15`):** Used for premium backgrounds, luxury headers, and strong contrast.
- **Brand Primary (`#1b3a2a`):** Used for cards, interactive zones, and feature blocks.
- **Brand Accent (`#8dc63f`):** Vivid lime green used exclusively for primary Calls to Action (CTAs), highlights, and buttons to draw the user's eye and maximize conversions.

---

## 🌐 Deployment
This front-end uses standard Next.js conventions and is heavily optimized for zero-config deployment on **Vercel**. 
Simply link your GitHub repository to your Vercel account, set the environment variables via the Vercel dashboard, and the project will compile and deploy automatically.

> **Note:** The attribution linking `Lumasofts` is statically embedded in the Footer component as requested.
