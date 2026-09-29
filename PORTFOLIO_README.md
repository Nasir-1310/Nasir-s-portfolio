# Nasir Uddin — Portfolio

Personal portfolio of Md. Nasir Uddin, Software Engineer (Full-Stack · AI/ML · Quality Engineering).
Built with React, TypeScript, React Router, Tailwind CSS v4 and Motion.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Update the content

All text lives in one file: **`src/app/data/portfolio.ts`**.

| What | Export |
| --- | --- |
| Name, headline, rotating roles, summary, availability, contact details, social links | `profile` |
| Hero numbers (CGPA, problems solved, …) | `stats` |
| "What I do" cards | `focusAreas` |
| Work, leadership and teaching roles | `experiences` (`kind: 'Industry' \| 'Freelance'` appear on the timeline; the rest in the grid below it) |
| Projects, including category filter, links and cover-art colors | `projects` |
| Skills, strengths, marquee technologies | `skillGroups`, `professionalSkills`, `marqueeTech` |
| Awards | `achievements` |
| Education | `education` |

Other assets:

- **Resume:** replace `public/Nasir_Uddin_Resume.pdf` (keep the file name, or update `profile.resume`).
- **Photo:** replace `public/images/nasir-home.jpg`.
- **Favicon:** `public/favicon.svg`.
- **Page title and search/social description:** `index.html`.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, stats, tech marquee, focus areas, experience timeline, featured projects, achievements, contact CTA |
| `/about` | Story, quick facts, education, technical skills |
| `/projects` | All projects with category filters |
| `/contact` | Message form (opens the visitor's email app, pre-filled) and contact details |
| `/admin` | Standalone UI mock-up (not linked from the site) |

## Design

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). In short: frosted-glass surfaces over a slowly drifting
aurora background, a violet → indigo → cyan brand gradient, Sora / Inter / JetBrains Mono type,
dark theme by default with a light theme toggle.

- Colors and glass tokens: `src/styles/theme.css`
- Effects (glass, spotlight, aurora, buttons, marquee): `src/styles/effects.css`
- Reusable effect components: `src/app/components/effects/`

Animations respect the visitor's "reduce motion" setting.

## Deploying

The site is a single-page app. Hosts must serve `index.html` for unknown paths so that
direct links like `/projects` work:

- **Vercel:** add a rewrite of `/(.*)` to `/index.html`.
- **Netlify:** add a `public/_redirects` file containing `/* /index.html 200`.
