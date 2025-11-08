# Setup Checklist

Use this checklist to ensure your website is properly configured before deploying.

## ✅ Essential Setup

### 1. Personal Information
- [ ] Update `src/data/profile.ts` with your name, email, and bio
- [ ] Update institution and department
- [ ] Add your social media links (GitHub, LinkedIn, Scholar, etc.)
- [ ] Update research interests

### 2. Content Files
- [ ] Edit `src/data/publications.ts` - Remove examples, add your papers
- [ ] Edit `src/data/projects.ts` - Remove examples, add your projects  
- [ ] Edit `src/data/education.ts` - Add your degrees
- [ ] Edit `src/data/experience.ts` - Add your work history
- [ ] Edit `src/data/skills.ts` - Update with your skills

### 3. Assets
- [ ] Add your photo to `public/images/avatar.jpg` (500x500px recommended)
- [ ] Add your CV as `public/cv.pdf`
- [ ] Add paper PDFs to `public/papers/` directory
- [ ] (Optional) Add `public/images/og-image.jpg` for social sharing

### 4. Configuration
- [ ] Update `astro.config.mjs` with your GitHub username:
  ```javascript
  site: 'https://YOURUSERNAME.github.io',
  ```
- [ ] Update `public/robots.txt` with your actual site URL
- [ ] (Optional) Update primary color in `src/styles/global.css`

### 5. GitHub Repository
- [ ] Create GitHub repository named `yourusername.github.io`
- [ ] Initialize git: `git init`
- [ ] Add remote: `git remote add origin <your-repo-url>`
- [ ] Push code: `git push -u origin main`

### 6. GitHub Pages Setup
- [ ] Go to repository Settings > Pages
- [ ] Set Source to "GitHub Actions"
- [ ] Wait for deployment (check Actions tab)
- [ ] Visit your site: `https://yourusername.github.io`

## 🔍 Pre-Deployment Testing

### Local Testing
- [ ] Run `npm install` - Should complete without errors
- [ ] Run `npm run dev` - Should start development server
- [ ] Visit `http://localhost:4321` - Site should load correctly
- [ ] Check all sections display properly
- [ ] Test navigation links work
- [ ] Verify images load (if added)
- [ ] Test theme toggle (light/dark mode)
- [ ] Test responsive design (resize browser)

### Content Verification
- [ ] All placeholder text replaced with your content
- [ ] No example publications or projects remain
- [ ] Contact email is correct
- [ ] All links work (CV, social media, external links)
- [ ] Paper PDFs are accessible
- [ ] Profile photo displays correctly

### Build Testing
- [ ] Run `npm run build` - Should complete without errors
- [ ] Run `npm run preview` - Should serve production build
- [ ] Check production build at `http://localhost:4321`

## 🎨 Optional Customization

- [ ] Change primary color (see `CUSTOMIZATION.md`)
- [ ] Update fonts (see `CUSTOMIZATION.md`)
- [ ] Modify layout widths
- [ ] Add/remove sections
- [ ] Customize component styling

## 📱 Post-Deployment Verification

After deploying to GitHub Pages:

- [ ] Site loads at your GitHub Pages URL
- [ ] All images display correctly
- [ ] CV PDF downloads work
- [ ] External links open in new tabs
- [ ] Social media links work
- [ ] Mobile version works (test on phone)
- [ ] Dark mode toggle works
- [ ] No console errors (open browser DevTools)

## 🔧 Troubleshooting

### Build Fails
- Check all data files for syntax errors
- Ensure all imports are correct
- Verify Node.js version (18+)
- Run `npm install` again

### Images Not Loading
- Verify images are in `public/` directory
- Use absolute paths: `/images/photo.jpg`
- Check file names match references
- Ensure proper file extensions

### 404 Errors
- Verify `site` in `astro.config.mjs` matches your repo
- For project sites, set `base: '/repo-name/'`
- Check GitHub Pages is enabled in settings

### Styling Issues
- Clear browser cache
- Check browser console for CSS errors
- Verify all CSS imports in components

## 📊 Performance Check

Optional but recommended:

- [ ] Run Lighthouse audit (in Chrome DevTools)
- [ ] Check mobile performance score
- [ ] Verify accessibility score
- [ ] Test page load speed
- [ ] Compress large images

## 🔒 Security Check

- [ ] No sensitive information in code
- [ ] No API keys or tokens committed
- [ ] Email spam protection considered
- [ ] All external links use `rel="noopener"`

## 📈 SEO Verification

- [ ] Title tag appears correctly in browser tab
- [ ] Description is meaningful
- [ ] Social media preview works (test with https://metatags.io)
- [ ] Schema.org markup present (check source code)
- [ ] Robots.txt allows indexing

## ✨ Final Steps

- [ ] Add Google Analytics (if desired)
- [ ] Submit to Google Scholar
- [ ] Share on social media
- [ ] Update CV with website URL
- [ ] Add website to email signature

---

## Need Help?

Check these resources:
- **Quick Start**: `QUICKSTART.md`
- **Deployment Issues**: `DEPLOYMENT.md`
- **Customization**: `CUSTOMIZATION.md`
- **Main Docs**: `README.md`

