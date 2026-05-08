# Website Templates

A modern, reusable website template system for small businesses — built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**.

## 🎯 Overview

This system provides a scalable, developer-friendly template architecture that allows quick customization and deployment of websites for different customers (bakeries, restaurants, cafés, salons, gyms, and local shops).

The core philosophy: **change one config file, get a fully customized website**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔄 Switching Templates

To switch between business templates, edit `src/config/index.ts`:

```ts
export const ACTIVE_TEMPLATE: TemplateName = "bakery"; // Change this!
```

Available templates: `"bakery"` | `"restaurant"` | `"cafe"` | `"salon"`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with dynamic theming
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Global styles + CSS custom properties
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, MenuServices, Gallery, Testimonials, Contact
│   └── ui/                 # Button, Card, SectionHeading
├── config/
│   ├── types.ts            # All TypeScript interfaces
│   └── index.ts            # Active template selector
└── templates/
    ├── bakery.ts           # Golden Crumb Bakery config
    ├── restaurant.ts       # Bella Cucina Italian Restaurant config
    ├── cafe.ts             # The Cozy Cup Café config
    └── salon.ts            # Luxe Beauty Studio config
```

## ✏️ Customization

Each template config in `src/templates/` controls **everything**:

| Config Key | Controls |
|---|---|
| `businessName` | Brand name throughout the site |
| `theme` | Colors, fonts via CSS custom properties |
| `nav` | Navigation links |
| `hero` | Headline, subheadline, CTAs, background image |
| `about` | Story, image, highlights |
| `menuServices` | Menu items or service listings with categories |
| `gallery` | Image grid with lightbox |
| `testimonials` | Customer reviews with star ratings |
| `contact` | Address, phone, email, opening hours, contact form |
| `socialLinks` | Instagram, Facebook, TikTok, etc. |
| `seo` | Page title, description, keywords, OG image |

## 🎨 Adding a New Template

1. Create `src/templates/my-business.ts` with your `SiteConfig` object
2. Register it in `src/config/index.ts`
3. Set `ACTIVE_TEMPLATE = "my-business"`

## 🏗️ Built With

- **[Next.js 15](https://nextjs.org/)** — React framework with App Router
- **[React 19](https://react.dev/)** — UI library
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |