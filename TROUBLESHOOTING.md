# Troubleshooting Guide

Common issues and their solutions.

## Installation Issues

### "npm: command not found"

**Problem**: Node.js is not installed.

**Solution**:
1. Download Node.js from [nodejs.org](https://nodejs.org)
2. Install version 18 or higher
3. Restart your terminal
4. Verify: `node --version` and `npm --version`

### "npm install" fails with errors

**Problem**: Dependency installation errors.

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### "Module not found" errors

**Problem**: TypeScript path aliases not working.

**Solution**:
1. Ensure `tsconfig.json` is in the root directory
2. Restart your IDE/editor
3. Run `npm run dev` again

## Development Server Issues

### Port 4321 already in use

**Problem**: Another process is using the port.

**Solution**:
```bash
# Kill the process on port 4321 (Windows)
netstat -ano | findstr :4321
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

### Changes not reflecting in browser

**Problem**: Browser cache or build cache.

**Solution**:
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server
4. Delete `.astro` folder and restart

### "Cannot find module" after adding files

**Problem**: Dev server not detecting new files.

**Solution**:
1. Stop the dev server (`Ctrl+C`)
2. Restart: `npm run dev`

## Build Issues

### Build fails with TypeScript errors

**Problem**: Type errors in data files.

**Solution**:
```bash
# Run type check
npm run astro check

# Common fixes:
# 1. Check all required fields in interfaces
# 2. Ensure string quotes are consistent
# 3. Remove trailing commas in objects
# 4. Check date format (YYYY-MM-DD or 'Present')
```

### "Failed to load module" errors

**Problem**: Import paths are incorrect.

**Solution**:
1. Use the path aliases from `tsconfig.json`:
   - `@components/*` not `../components/*`
   - `@data/*` not `../data/*`
2. Check file extensions (.astro, .ts, etc.)
3. Verify file names match imports exactly (case-sensitive)

### Build succeeds but site is blank

**Problem**: JavaScript errors or routing issues.

**Solution**:
1. Check browser console for errors (F12)
2. Verify `astro.config.mjs` has correct `base` setting
3. Check that all imports in `index.astro` are correct
4. Run `npm run preview` to test production build locally

## Deployment Issues

### GitHub Actions workflow fails

**Problem**: Build fails in CI/CD.

**Solution**:
1. Check the Actions tab for specific error messages
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version matches local version
4. Check that all files are committed and pushed

### 404 - Page Not Found after deployment

**Problem**: Base path configuration.

**Solution**:

For user/org site (`username.github.io`):
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://username.github.io',
  base: '/',
});
```

For project site (`username.github.io/project`):
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://username.github.io',
  base: '/project/',
});
```

### Images not loading on deployed site

**Problem**: Incorrect image paths.

**Solution**:
1. Place images in `public/` directory
2. Use absolute paths: `/images/photo.jpg` (not `images/photo.jpg`)
3. Don't include `public` in the path
4. Check file names match exactly (case-sensitive)
5. Verify images were committed to git

### CSS not applying after deployment

**Problem**: Build or caching issues.

**Solution**:
1. Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
2. Clear browser cache completely
3. Check browser console for 404 errors
4. Verify `src/styles/global.css` is imported in `BaseLayout.astro`
5. Rebuild and redeploy: `npm run build && git push`

### Custom domain shows 404

**Problem**: DNS or GitHub Pages configuration.

**Solution**:
1. Verify DNS records are correct:
   - A records pointing to GitHub's IPs
   - CNAME record for www subdomain
2. Add `CNAME` file to `public/` with your domain
3. Wait for DNS propagation (up to 48 hours)
4. Check GitHub Pages settings for domain status

## Content Issues

### Profile photo not showing

**Problem**: Missing or incorrect image path.

**Solution**:
1. Add image to `public/images/avatar.jpg`
2. Check `src/data/profile.ts`:
   ```typescript
   avatar: '/images/avatar.jpg', // Must start with /
   ```
3. Verify file extension matches (jpg vs jpeg vs png)
4. Check image file size (< 5MB recommended)

### CV download not working

**Problem**: Missing CV file.

**Solution**:
1. Add CV to `public/cv.pdf`
2. Verify filename is exactly `cv.pdf`
3. Check `src/data/profile.ts`:
   ```typescript
   cv: '/cv.pdf',
   ```
4. Test locally first

### Social media links not working

**Problem**: Incorrect URLs in profile data.

**Solution**:
```typescript
// src/data/profile.ts
socialLinks: {
  github: 'https://github.com/username', // Full URL
  scholar: 'https://scholar.google.com/citations?user=ID',
  // Not: 'github.com/username' or '/username'
}
```

### Publications not displaying

**Problem**: Syntax errors in publications data.

**Solution**:
1. Check for missing commas between objects
2. Ensure all required fields are present:
   ```typescript
   {
     title: "Paper Title", // Required
     authors: ["Name"], // Required
     venue: "Conference", // Required
     year: 2024, // Required, number not string
     type: "conference", // Required
   }
   ```
3. Verify quotes are consistent (single or double)
4. Check for trailing commas in arrays

## Styling Issues

### Dark mode not working

**Problem**: Theme toggle not functioning.

**Solution**:
1. Check browser console for JavaScript errors
2. Clear browser localStorage:
   ```javascript
   // In browser console
   localStorage.clear()
   ```
3. Hard refresh the page
4. Verify `ThemeToggle.astro` is imported in Header

### Colors look different than expected

**Problem**: CSS custom properties not loading.

**Solution**:
1. Ensure `src/styles/global.css` is imported in `BaseLayout.astro`
2. Check browser DevTools for CSS errors
3. Verify CSS syntax is correct (no typos in variable names)
4. Clear browser cache

### Layout broken on mobile

**Problem**: Responsive styles not applying.

**Solution**:
1. Check viewport meta tag is present in `BaseLayout.astro`
2. Test in browser DevTools mobile view
3. Look for CSS media query syntax errors
4. Verify no fixed widths preventing responsive behavior

## Performance Issues

### Site loads slowly

**Solution**:
1. Compress images before uploading
2. Use WebP format for images
3. Limit number of projects/publications shown initially
4. Check image sizes (each should be < 500KB)
5. Use `loading="lazy"` on images below fold

### Large bundle size

**Solution**:
1. Remove unused npm packages
2. Minimize custom fonts
3. Check for duplicate dependencies
4. Astro already optimizes automatically

## Data/Content Issues

### TypeScript errors in data files

**Problem**: Type mismatches.

**Solution**:
```typescript
// Check these common issues:

// ❌ Wrong - string year
year: "2024",

// ✅ Correct - number year
year: 2024,

// ❌ Wrong - invalid type
type: "paper",

// ✅ Correct - valid type
type: "conference", // or "journal", "workshop", "preprint"

// ❌ Wrong - missing required field
{
  title: "Paper",
  authors: ["Name"],
  // Missing venue, year, type
}

// ✅ Correct - all required fields
{
  title: "Paper",
  authors: ["Name"],
  venue: "Conference",
  year: 2024,
  type: "conference",
}
```

## Still Having Issues?

1. **Check the browser console** (F12) for error messages
2. **Review recent changes** - what did you modify last?
3. **Test locally first** - always run `npm run dev` before deploying
4. **Check documentation** - Review relevant guide (DEPLOYMENT.md, CUSTOMIZATION.md, etc.)
5. **Search error messages** - Google/Stack Overflow the specific error
6. **Start fresh** - Delete `node_modules` and `.astro` folders, reinstall

## Debug Mode

Run Astro in debug mode to see detailed logs:

```bash
# Windows
set DEBUG=* && npm run dev

# Mac/Linux
DEBUG=* npm run dev
```

## Getting Help

When asking for help, include:
1. What you were trying to do
2. What you expected to happen
3. What actually happened
4. Error messages (full text)
5. Your environment (OS, Node version, browser)
6. Steps to reproduce the issue

## Common Error Messages

### "Cannot read property of undefined"
- Check that data files have all required fields
- Verify object properties exist before accessing them
- Look for typos in property names

### "Unexpected token"
- Syntax error in JavaScript/TypeScript
- Missing or extra comma, bracket, or parenthesis
- Check quotes are properly closed

### "Module not found"
- Import path is wrong
- File doesn't exist
- Typo in filename or path
- File extension missing or wrong

### "Port already in use"
- Another process is using port 4321
- Stop other development servers
- Or use different port: `npm run dev -- --port 3000`

