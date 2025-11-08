# Academic Personal Website

A modern, performance-optimized personal website for academic professionals built with Astro.

[![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> **Production Ready** - This template has been tested and is ready for deployment. All known issues have been fixed.

## 📚 Documentation

- **[Quick Reference Card](QUICK_REFERENCE.md)** - ⚡ Essential commands and locations
- **[Quick Start Guide](QUICKSTART.md)** - Get started in 15 minutes
- **[Setup Checklist](SETUP_CHECKLIST.md)** - Verify everything before deploying
- **[Deployment Guide](DEPLOYMENT.md)** - Step-by-step deployment instructions
- **[Customization Guide](CUSTOMIZATION.md)** - Customize colors, fonts, and layout
- **[Troubleshooting Guide](TROUBLESHOOTING.md)** - Fix common issues
- **[Project Overview](PROJECT_OVERVIEW.md)** - Architecture and technical details
- **[Changelog](CHANGELOG.md)** - Recent updates and fixes

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Building for Production

```bash
npm run build
```

The static site will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Management

### Updating Your Information

1. **Personal Info**: Edit `src/data/profile.ts`
2. **Publications**: Edit `src/data/publications.ts`
3. **Projects**: Edit `src/data/projects.ts`
4. **Experience**: Edit `src/data/experience.ts`
5. **Education**: Edit `src/data/education.ts`

### Adding a New Publication

Open `src/data/publications.ts` and add a new entry:

```typescript
{
  title: "Your Paper Title",
  authors: ["Author 1", "You", "Author 3"],
  venue: "Conference/Journal Name",
  year: 2024,
  type: "conference",
  paper: "/papers/yourpaper.pdf",
  code: "https://github.com/username/repo",
  website: "https://project-website.com",
}
```

### Adding a New Project

Open `src/data/projects.ts` and add:

```typescript
{
  title: "Project Name",
  description: "Brief description",
  tags: ["Machine Learning", "Python"],
  image: "/images/project.jpg",
  github: "https://github.com/username/project",
  demo: "https://demo-link.com",
  featured: true
}
```

## 🎨 Customization

### Colors & Styling
- Main styles: `src/styles/global.css`
- Color scheme variables are defined in `:root` in global.css

### Layout
- Base layout: `src/layouts/BaseLayout.astro`
- Modify components in `src/components/`

## 📦 Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml` (already included)
2. Push to GitHub
3. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

### Option 2: Manual Deployment

```bash
npm run build
# Push the dist/ folder to gh-pages branch
```

### Configuration

Update `astro.config.mjs`:
```javascript
site: 'https://yourusername.github.io',
base: '/repository-name/', // if not using user page
```

## 📁 Project Structure

```
/
├── public/              # Static assets (PDFs, images, CV)
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/           # Content data files
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page routes
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── astro.config.mjs    # Astro configuration
├── package.json
└── tsconfig.json
```

## 🔧 Technology Stack

- **Framework**: Astro 4.x
- **Language**: TypeScript
- **Styling**: Modern CSS with custom properties
- **Deployment**: GitHub Pages
- **Performance**: Optimized for Core Web Vitals

## 📄 License

MIT - Feel free to use this template for your own academic website.

