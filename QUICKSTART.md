# Quick Start Guide

Get your academic website up and running in 15 minutes!

> 💡 **Tip**: After setup, use the [Setup Checklist](SETUP_CHECKLIST.md) to verify everything is configured correctly.

## Step 1: Install Dependencies (2 minutes)

```bash
npm install
```

## Step 2: Update Your Information (5 minutes)

### Essential Updates

1. **Profile** (`src/data/profile.ts`):
   - Replace "Your Name" with your actual name
   - Update email address
   - Update institution and department
   - Write your bio
   - Add your social media links

2. **Publications** (`src/data/publications.ts`):
   - Remove example entries
   - Add your publications with authors, venue, year

3. **Projects** (`src/data/projects.ts`):
   - Remove example projects
   - Add your actual projects

4. **Education** (`src/data/education.ts`):
   - Update with your degrees

5. **Experience** (`src/data/experience.ts`):
   - Add your work experience

## Step 3: Add Your Photo (1 minute)

1. Add your photo to `public/images/avatar.jpg`
2. Recommended size: 500x500px minimum

## Step 4: Add Your CV (1 minute)

1. Add your CV as `public/cv.pdf`

## Step 5: Test Locally (2 minutes)

```bash
npm run dev
```

Visit `http://localhost:4321` to preview your site.

## Step 6: Deploy to GitHub Pages (4 minutes)

1. **Create GitHub repository** named `yourusername.github.io`

2. **Update configuration** in `astro.config.mjs`:
   ```javascript
   site: 'https://yourusername.github.io',
   ```

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: GitHub Actions
   - Wait 2-3 minutes for deployment

Your site will be live at `https://yourusername.github.io`!

## Common Issues

### "npm: command not found"
Install Node.js from [nodejs.org](https://nodejs.org)

### Build errors
Check that all your data files are valid TypeScript/JavaScript

### 404 on GitHub Pages
Verify the `site` URL in `astro.config.mjs` matches your repository

## Next Steps

- ✅ Customize colors: See `CUSTOMIZATION.md`
- ✅ Add more content: Update data files
- ✅ Custom domain: See `DEPLOYMENT.md`

## File Locations Reference

| What | Where |
|------|-------|
| Personal info | `src/data/profile.ts` |
| Publications | `src/data/publications.ts` |
| Projects | `src/data/projects.ts` |
| Experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Skills | `src/data/skills.ts` |
| Colors | `src/styles/global.css` |
| Photos | `public/images/` |
| CV | `public/cv.pdf` |
| Papers | `public/papers/` |

## Support

Check these detailed guides:
- **Deployment**: See `DEPLOYMENT.md`
- **Customization**: See `CUSTOMIZATION.md`
- **Main README**: See `README.md`

