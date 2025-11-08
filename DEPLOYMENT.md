# Deployment Guide

This guide will help you deploy your academic website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js 18+ installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Repository naming options:
   - **User/Organization site**: Name it `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - **Project site**: Name it anything you like (e.g., `academic-website`)
4. Set the repository to **Public**
5. Click "Create repository"

### 2. Configure Your Site

1. Open `astro.config.mjs`
2. Update the configuration:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io', // Update with your username
  base: '/', // Use '/' for user site, or '/repo-name/' for project site
  // ... rest of config
});
```

3. Update `public/robots.txt` with your actual site URL

### 3. Update Your Content

Before deploying, update all placeholder content:

1. **Profile Information**: Edit `src/data/profile.ts`
   - Replace "Your Name" with your actual name
   - Update email, institution, bio, etc.
   - Add links to your social profiles

2. **Publications**: Edit `src/data/publications.ts`
   - Add your actual publications
   - Remove example entries

3. **Projects**: Edit `src/data/projects.ts`
   - Add your real projects
   - Remove placeholder projects

4. **Experience**: Edit `src/data/experience.ts`
   - Add your work experience
   - Remove example entries

5. **Education**: Edit `src/data/education.ts`
   - Add your educational background
   - Remove placeholder entries

6. **Avatar**: Replace `public/images/avatar.jpg` with your photo

7. **CV**: Add your CV as `public/cv.pdf`

### 4. Initialize Git and Push

Open a terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace URL with yours)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (gear icon)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The workflow will automatically run and deploy your site

### 6. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at:
   - User site: `https://yourusername.github.io`
   - Project site: `https://yourusername.github.io/repository-name`

## Updating Your Site

After initial deployment, updating is easy:

```bash
# Make your changes to data files or components

# Add changes
git add .

# Commit
git commit -m "Update publications"

# Push
git push
```

The GitHub Action will automatically rebuild and redeploy your site.

## Testing Locally

Before deploying, you can preview your site locally:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open http://localhost:4321 in your browser
```

To build and preview the production version:

```bash
# Build the site
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Build Fails

1. Check the Actions tab for error messages
2. Ensure all dependencies are listed in `package.json`
3. Make sure Node.js version in workflow matches your local version

### 404 Page Not Found

1. Verify the `base` setting in `astro.config.mjs` matches your repository setup
2. For project sites, ensure `base` is set to `/repository-name/`
3. For user sites, ensure `base` is set to `/`

### Images Not Loading

1. Place images in the `public` folder
2. Reference them with absolute paths like `/images/photo.jpg`
3. Don't use the `public` prefix in your image paths

### CSS Not Working

1. Clear your browser cache
2. Check browser console for errors
3. Verify all CSS imports are correct

## Custom Domain (Optional)

To use a custom domain like `www.yourname.com`:

1. Buy a domain from a registrar
2. In your repository settings, go to Pages
3. Add your custom domain
4. Follow GitHub's instructions to configure DNS
5. Create a `CNAME` file in the `public` folder with your domain

## Support

If you encounter issues:

1. Check [Astro documentation](https://docs.astro.build)
2. Review [GitHub Pages documentation](https://docs.github.com/pages)
3. Check the GitHub Actions logs for specific errors

## Security Notes

- Never commit sensitive information (API keys, passwords)
- Use environment variables for sensitive data
- Keep your dependencies updated regularly

