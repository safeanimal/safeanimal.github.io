# Customization Guide

This guide explains how to customize your academic website to match your preferences.

## Table of Contents

1. [Colors and Theme](#colors-and-theme)
2. [Typography](#typography)
3. [Layout](#layout)
4. [Components](#components)
5. [Adding New Sections](#adding-new-sections)

## Colors and Theme

All colors are defined in `src/styles/global.css` using CSS variables.

### Changing Primary Color

Edit the `:root` section in `src/styles/global.css`:

```css
:root {
  --color-primary: rgb(59, 130, 246); /* Change this */
  --color-primary-dark: rgb(37, 99, 235); /* Darker shade */
  --color-primary-light: rgba(59, 130, 246, 0.1); /* Light tint */
}
```

Popular color options:
- **Blue** (default): `rgb(59, 130, 246)`
- **Green**: `rgb(16, 185, 129)`
- **Purple**: `rgb(139, 92, 246)`
- **Red**: `rgb(239, 68, 68)`
- **Orange**: `rgb(245, 158, 11)`

### Dark Theme Colors

Update dark theme colors in the `[data-theme='dark']` section:

```css
[data-theme='dark'] {
  --color-primary: rgb(96, 165, 250); /* Lighter for dark backgrounds */
  /* ... other colors */
}
```

## Typography

### Changing Fonts

1. **Using Google Fonts**: Add to `src/layouts/BaseLayout.astro` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update the CSS variable in `src/styles/global.css`:

```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Adjusting Font Sizes

Modify the size scale in `src/styles/global.css`:

```css
:root {
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem; /* Increase for larger text */
  --font-size-lg: 1.125rem;
  /* ... other sizes */
}
```

## Layout

### Changing Maximum Width

Edit in `src/styles/global.css`:

```css
:root {
  --max-width: 1200px; /* Change to 1400px for wider layout */
}
```

### Adjusting Spacing

All spacing uses a consistent scale. To make the site more spacious:

```css
:root {
  --spacing-4: 1.25rem; /* Increase from 1rem */
  --spacing-8: 2.5rem; /* Increase from 2rem */
  /* ... adjust others proportionally */
}
```

## Components

### Customizing the Hero Section

Edit `src/components/Profile/Hero.astro`:

**Remove the avatar:**
```astro
<!-- Comment out or delete this section -->
{/* {profile.avatar && (
  <div class="hero-image">
    <img src={profile.avatar} alt={profile.name} />
  </div>
)} */}
```

**Change button styles:**
```astro
<Button href={`mailto:${profile.email}`} variant="primary" size="lg">
  Contact Me
</Button>
```

### Modifying Publication Display

In `src/components/Research/PublicationCard.astro`, you can:

**Hide abstracts:**
```astro
{/* {publication.abstract && (
  <p class="publication-abstract">{publication.abstract}</p>
)} */}
```

**Change badge colors** in the `<style>` section:
```css
.type-badge--conference {
  background: rgba(255, 0, 0, 0.1); /* Red tint */
  color: rgb(255, 0, 0);
}
```

### Adjusting Project Cards

Edit `src/components/Research/ProjectCard.astro`:

**Remove images:**
```astro
{/* {project.image && (
  <div class="project-image">
    <img src={project.image} alt={project.title} />
  </div>
)} */}
```

**Change grid layout** in `src/components/Research/ProjectsList.astro`:
```css
.projects-grid {
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Wider cards */
}
```

## Adding New Sections

### 1. Create Component

Create `src/components/Profile/Awards.astro`:

```astro
---
const awards = [
  { title: 'Best Paper Award', organization: 'Conference Name', year: 2024 },
  // ... more awards
];
---

<div class="awards-list">
  {awards.map((award) => (
    <div class="award-item">
      <h3>{award.title}</h3>
      <p>{award.organization}, {award.year}</p>
    </div>
  ))}
</div>

<style>
  .awards-list {
    display: grid;
    gap: var(--spacing-4);
  }
  /* ... add styles */
</style>
```

### 2. Add to Main Page

Edit `src/pages/index.astro`:

```astro
---
import Awards from '@components/Profile/Awards.astro';
// ... other imports
---

<BaseLayout metadata={metadata}>
  <!-- ... existing sections -->
  
  <Section id="awards" title="Awards & Honors">
    <Awards />
  </Section>
</BaseLayout>
```

### 3. Add to Navigation

Edit `src/components/Layout/Navigation.astro`:

```astro
const navItems = [
  // ... existing items
  { label: 'Awards', href: '#awards' },
];
```

## Advanced Customization

### Adding Analytics

Add to `src/layouts/BaseLayout.astro` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Custom Page Transitions

Add to `src/layouts/BaseLayout.astro`:

```astro
---
// ... imports
import { ViewTransitions } from 'astro:transitions';
---

<head>
  <!-- ... other head content -->
  <ViewTransitions />
</head>
```

### Filtering Publications by Type

Create a new component or modify `src/components/Research/PublicationsList.astro`:

```astro
---
const conferenceOnly = publications.filter(pub => pub.type === 'conference');
---
```

## Tips

1. **Always test locally** before deploying
2. **Use browser DevTools** to experiment with CSS changes
3. **Keep backups** before major changes
4. **Commit frequently** to Git for easy rollback
5. **Check mobile responsiveness** at different screen sizes

## Need Help?

- Review component files to understand structure
- Use browser DevTools to inspect styles
- Check Astro documentation for advanced features
- Astro Discord community is very helpful

