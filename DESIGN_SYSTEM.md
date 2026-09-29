# Portfolio Design System

Frosted-glass surfaces floating over a slowly drifting aurora background. Dark theme by default,
with a matching light theme. All values live in `src/styles/theme.css` (tokens) and
`src/styles/effects.css` (effect classes), so both themes stay in sync.

---

## Color

### Brand gradient

Used for the primary button, gradient text, the scroll progress bar and the timeline rail.

| Token | Light | Dark |
| --- | --- | --- |
| `--brand-1` | `#7c3aed` violet | `#a78bfa` |
| `--brand-2` | `#4f46e5` indigo | `#818cf8` |
| `--brand-3` | `#0891b2` cyan | `#22d3ee` |
| `--brand-text` (`text-brand`) | `#6d28d9` | `#c4b5fd` |
| `--brand-soft` (`bg-brand-soft`) | violet at 10% | violet at 12% |

### Surfaces and text

| Token | Light | Dark |
| --- | --- | --- |
| `--background` | `#f5f5fa` | `#07070d` |
| `--foreground` | `#0c0c18` | `#ececf4` |
| `--muted-foreground` | `#585872` | `#9a9ab4` |
| `--border` | ink at 9% | white at 8% |

### Glass

| Token | Purpose |
| --- | --- |
| `--glass-bg` / `--glass-bg-strong` | Card fill / navbar fill |
| `--glass-border`, `--glass-edge` | 1px outline |
| `--glass-highlight` | Inner top highlight (`inset 0 1px 0`) |
| `--glass-shadow` | Soft drop shadow |
| `--aurora-1…4` | Background color fields |
| `--spot-inner`, `--spot-border` | Cursor spotlight glow |

Experience badges use fixed hues: Industry (violet), Freelance (cyan), Leadership (amber), Teaching (emerald).

---

## Typography

| Role | Font | Notes |
| --- | --- | --- |
| Headings (`font-display`) | Sora 600–800 | Tight tracking (−0.015 to −0.03em), balanced wrapping |
| Body (`font-sans`) | Inter 400–600 | 16px base |
| Labels, eyebrows, tags, dates | Inter 500–600 | Eyebrows: 12px, uppercase, 0.16em tracking; dates use tabular numbers |
| Terminal mock-ups in project covers (`font-mono`) | System monospace | Decorative only |

Scale: hero 48 → 72px, page titles 36 → 60px, section titles 30 → 48px, card titles 18–24px.

---

## Effect classes (`effects.css`)

| Class | Use |
| --- | --- |
| `.glass` | Standard frosted card (blur 18px, saturate 160%) |
| `.glass-strong` | More opaque; navbar, mobile menu, mock windows |
| `.glass-solid` | Mostly opaque; small labels that sit on photos |
| `.spotlight` | Cursor-following glow on surface and border (use via `<SpotlightCard>`) |
| `.text-gradient` (+ `.text-gradient-animated`) | Brand gradient text |
| `.btn-primary` / `.btn-glass` | Gradient CTA with shine sweep / glass secondary button |
| `.eyebrow` | Section label above headings |
| `.conic-frame` + `.conic-spin` | Rotating gradient border (hero portrait) |
| `.bg-grid`, `.bg-noise` | Background grid and film grain |

---

## Motion

| Pattern | Where | Details |
| --- | --- | --- |
| Reveal on scroll | Most sections (`<Reveal>`) | Fade + 24px rise, 0.7s, ease `[0.22, 1, 0.36, 1]`, once |
| Staggered entrance | Hero, page headers | 0.09–0.1s between items |
| Page transition | Route change | Fade + 16px rise, 0.5s |
| Rotating role | Hero (`<RotatingText>`) | Slide up every 2.6s; slot sized to the widest word |
| Count-up | Stats (`<CountUp>`) | 1.8s when scrolled into view |
| Timeline fill | Experience | Gradient rail scales with scroll progress |
| Tilt | Hero portrait | ±7° following the mouse (mouse only) |
| Ambient loops | Aurora, chips, marquee | CSS keyframes, transform-only |

All motion respects `prefers-reduced-motion`: Motion via `<MotionConfig reducedMotion="user">`,
CSS loops via a media query in `effects.css`.

---

## Layout

- Container: `max-w-7xl` with `px-4 sm:px-6 lg:px-8` gutters.
- Section rhythm: `py-16` on phones, `py-24` from `sm` up.
- Radii: cards `rounded-3xl` (24px), feature panels `rounded-[2rem]`, buttons `rounded-xl`, pills `rounded-full`.
- Fixed floating navbar; page content starts at `pt-32`/`pt-36`.

---

## Accessibility

- Visible `:focus-visible` ring (2px, `--ring`) on all interactive elements.
- Icon-only buttons and links carry `aria-label`; the nav marks the current item with `aria-current`.
- Project filters are toggle buttons (`aria-pressed`); the mobile menu uses `aria-expanded` / `aria-controls`.
- The rotating role exposes all roles to screen readers as static text.
