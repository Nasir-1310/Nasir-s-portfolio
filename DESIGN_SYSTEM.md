# Portfolio Design System

The portfolio uses a restrained editorial design for a software engineer and AI researcher. Warm neutral surfaces, deep green accents, and Inter typography keep research, experience, and projects easy to evaluate.

## Typography

Inter is the single font family, loaded once in index.html with system fallbacks and font-display: swap. Body copy uses 14–16px, section headings 30–44px, and the responsive introduction 50–80px. Monospace is reserved for project terminal illustrations.

## Color and surfaces

Tokens live in src/styles/theme.css. Light mode uses #f8f9f6 backgrounds, #182c26 text, and #226249 accents. Dark mode uses #101b17 backgrounds and pale green accents. Saved theme preferences persist across visits; new visitors begin in light mode.

The existing glass class names remain compatible with existing components, but render as quiet opaque surfaces with fine borders. The global aurora background and expensive full-page effects have been removed. Colored badges distinguish research, industry, leadership, and teaching. Project cover palettes remain driven by existing portfolio data.

## Layout

The introduction pairs the owner's identity and research background with a portrait and education note. Statistics lead into a two-column selected-project collection, followed by focus areas, technologies, experience, recognition, and contact. Existing standalone pages and admin routes are retained.

Shared refinements and responsive rules live in src/styles/refinement.css. The main content width is approximately 1216px, with 24px gutters on phones. The hero becomes one column below 768px. Project cards collapse to one column on small screens.

## Interaction and accessibility

Primary actions use solid green, secondary actions use bordered surfaces. Every control retains a visible keyboard focus outline. A skip link targets the main content, mobile navigation exposes its expanded state and closes with Escape, forms retain associated labels and native validation, and external links retain their accessible names. CSS and Motion respect reduced-motion preferences.

## Data and behavior

src/app/data/portfolio.ts remains the source of public content. Existing project filtering, social links, CV download, mailto contact flow, theme persistence, routes, and admin behavior are preserved. The admin implementation is an existing separate interface; this visual refresh adds no new persistence or backend services.
