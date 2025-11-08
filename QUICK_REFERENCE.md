# Quick Reference Card

Essential commands and file locations for daily use.

## 📁 Key File Locations

### Update Your Content
```
src/data/
  ├── profile.ts      ⭐ Your name, bio, email, social links
  ├── publications.ts ⭐ Your papers and research
  ├── projects.ts     ⭐ Your projects and code
  ├── experience.ts   ⭐ Work history
  ├── education.ts    ⭐ Degrees and education
  └── skills.ts       ⭐ Technical skills
```

### Add Assets
```
public/
  ├── cv.pdf               ⭐ Your CV
  ├── images/
  │   └── avatar.jpg       ⭐ Your photo
  └── papers/
      └── paper.pdf        ⭐ Your paper PDFs
```

### Customize Design
```
src/styles/
  └── global.css           🎨 Colors, fonts, spacing
```

## ⚡ Essential Commands

### Development
```bash
npm install              # Install dependencies (first time)
npm run dev              # Start development server
```
Visit: `http://localhost:4321`

### Testing
```bash
npm run build            # Build for production
npm run preview          # Preview production build
```

### Deployment
```bash
git add .                # Stage changes
git commit -m "message"  # Commit changes
git push                 # Deploy (auto-builds on GitHub)
```

## 🎨 Quick Customization

### Change Primary Color
Edit `src/styles/global.css`:
```css
:root {
  --color-primary: rgb(59, 130, 246); /* Change this */
}
```

### Update Site Title
Edit `src/data/profile.ts`:
```typescript
name: 'Your Name',
title: 'Your Title',
```

### Add New Publication
Edit `src/data/publications.ts`:
```typescript
{
  title: "Paper Title",
  authors: ["Your Name", "Others"],
  venue: "Conference Name",
  year: 2024,
  type: "conference",
  paper: "/papers/yourpaper.pdf",
}
```

## 🚀 Deployment Checklist

- [ ] Update all data files in `src/data/`
- [ ] Add photo: `public/images/avatar.jpg`
- [ ] Add CV: `public/cv.pdf`
- [ ] Update `astro.config.mjs` site URL
- [ ] Create GitHub repo: `username.github.io`
- [ ] Push code: `git push`
- [ ] Enable GitHub Pages (Settings > Pages > GitHub Actions)

## 🔧 Configuration Files

### Main Config
- `astro.config.mjs` - Site URL and base path
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript settings

### GitHub Actions
- `.github/workflows/deploy.yml` - Auto-deployment

## 📚 Documentation Quick Links

| Need to... | See... |
|-----------|--------|
| Get started fast | [QUICKSTART.md](QUICKSTART.md) |
| Verify setup | [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md) |
| Deploy to web | [DEPLOYMENT.md](DEPLOYMENT.md) |
| Change colors/design | [CUSTOMIZATION.md](CUSTOMIZATION.md) |
| Fix an issue | [TROUBLESHOOTING.md](TROUBLESHOOTING.md) |
| Understand architecture | [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) |
| See what changed | [CHANGELOG.md](CHANGELOG.md) |

## 🆘 Common Issues

### Site won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Changes not showing
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or restart dev server

### Build fails
- Check for syntax errors in `src/data/*.ts` files
- Ensure all required fields are present
- Run `npm run build` to see specific errors

### Images not loading
- Place in `public/images/`
- Use path: `/images/photo.jpg` (start with /)
- Check filename matches exactly (case-sensitive)

## 📝 Content Update Workflow

1. **Edit** data file(s) in `src/data/`
2. **Test** locally with `npm run dev`
3. **Commit** changes: `git commit -m "Update content"`
4. **Push** to GitHub: `git push`
5. **Wait** 2-3 minutes for auto-deployment
6. **Verify** at your GitHub Pages URL

## 🎯 File Size Limits

- **Profile Photo**: < 500KB, 500×500px recommended
- **Project Images**: < 200KB each
- **Paper PDFs**: < 10MB each
- **CV**: < 2MB

## 🔍 Quick Checks

### Before Deployment
```bash
# 1. Install works
npm install

# 2. Dev server starts
npm run dev

# 3. Build succeeds
npm run build

# 4. Preview works
npm run preview
```

### After Deployment
- [ ] Site loads at GitHub Pages URL
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] Links work (CV, papers, social)
- [ ] Mobile view works
- [ ] Theme toggle works

## 💡 Pro Tips

1. **Test locally first** - Always run `npm run dev` before pushing
2. **Commit often** - Small commits are easier to debug
3. **Use descriptive messages** - `git commit -m "Add new paper"`
4. **Check mobile view** - Use browser DevTools (F12)
5. **Compress images** - Use tools like TinyPNG before uploading
6. **Update regularly** - Keep publications and projects current

## 🎨 Popular Customizations

### Dark Blue Theme
```css
--color-primary: rgb(37, 99, 235);
```

### Green Theme
```css
--color-primary: rgb(16, 185, 129);
```

### Purple Theme
```css
--color-primary: rgb(139, 92, 246);
```

### Wider Layout
```css
--max-width: 1400px; /* Default: 1200px */
```

### Larger Text
```css
--font-size-base: 1.125rem; /* Default: 1rem */
```

## 📱 Testing Checklist

- [ ] Desktop view (1920×1080)
- [ ] Laptop view (1366×768)
- [ ] Tablet view (768×1024)
- [ ] Mobile view (375×667)
- [ ] Light mode
- [ ] Dark mode
- [ ] All links work
- [ ] Forms work (if added)

## 🔗 Important URLs

### After Deployment
- Your site: `https://yourusername.github.io`
- GitHub repo: `https://github.com/yourusername/yourusername.github.io`
- Actions log: `https://github.com/yourusername/yourusername.github.io/actions`

### Tools
- Test SEO: [metatags.io](https://metatags.io)
- Compress images: [tinypng.com](https://tinypng.com)
- Check speed: Chrome DevTools → Lighthouse

---

**Keep this file bookmarked for quick reference!**

*For detailed information, see the full documentation files.*

