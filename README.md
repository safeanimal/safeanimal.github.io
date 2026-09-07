# Guorui Sang's research website

Personal academic website at https://safeanimal.github.io, built with Astro and TypeScript.

## Local development

```sh
npm ci
npm run dev
```

## Verification and deployment

```sh
npm run build
npm run preview
```

The build runs Astro's type checks before generating the static site. Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages.

## Updating content

- `src/data/profile.ts`: introduction, internship availability, links, and research interests.
- `src/data/publications.ts`: published papers, author contributions, venues, and public links. The homepage displays entries with `featured: true`.
- `src/data/projects.ts`: research problems, personal contributions, and manuscript status.
- `src/data/experience.ts` and `education.ts`: roles, dates, and degrees.
- `src/data/skills.ts`: languages, frameworks, and research tools.
- `public/cv.pdf`: public CV. Replace it when updating the source CV; check the exported PDF and contact details before publishing.

Keep workshop labels and equal-contribution notes explicit. Ongoing manuscripts belong in Research and should retain their actual status. Use public paper links, not private Overleaf projects or anonymous submission links.

The September 2026 update uses the verified research CV and appointment dates. Expected graduation is listed as 2030 because the month has not been confirmed. The public CV includes email and city but omits the phone number.
