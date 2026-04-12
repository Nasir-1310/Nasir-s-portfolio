# Portfolio Design System

## 🎨 Visual Design Philosophy

This portfolio follows a **modern minimalist** design approach with:
- Clean typography
- Generous whitespace
- Soft shadows and subtle borders
- Smooth animations and transitions
- Professional color palette

---

## 🎨 Color System

### Light Mode
| Token | Color | Usage |
|-------|-------|-------|
| `--background` | `#ffffff` | Main background |
| `--foreground` | `oklch(0.145 0 0)` | Primary text |
| `--accent` | `#e9ebef` | Subtle backgrounds, hover states |
| `--muted-foreground` | `#717182` | Secondary text |
| `--border` | `rgba(0, 0, 0, 0.1)` | Borders, dividers |

### Dark Mode
| Token | Color | Usage |
|-------|-------|-------|
| `--background` | `oklch(0.145 0 0)` | Main background |
| `--foreground` | `oklch(0.985 0 0)` | Primary text |
| `--accent` | `oklch(0.269 0 0)` | Subtle backgrounds, hover states |
| `--muted-foreground` | `oklch(0.708 0 0)` | Secondary text |
| `--border` | `oklch(0.269 0 0)` | Borders, dividers |

---

## 📐 Spacing Scale

Based on 4px base unit:

```
0    = 0px
1    = 4px
2    = 8px
3    = 12px
4    = 16px
6    = 24px
8    = 32px
12   = 48px
16   = 64px
20   = 80px
```

---

## 🔤 Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Font Sizes
- **Hero**: 3.75rem (60px) - 4.5rem (72px)
- **H1**: 2.25rem (36px) - 3rem (48px)
- **H2**: 1.875rem (30px) - 2.25rem (36px)
- **H3**: 1.5rem (24px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)

### Font Weights
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extrabold**: 800

---

## 🎭 Border Radius

```css
rounded-lg   = 10px    /* Cards, buttons */
rounded-xl   = 16px    /* Larger cards */
rounded-2xl  = 24px    /* Feature cards */
rounded-3xl  = 32px    /* Hero sections */
rounded-full = 9999px  /* Pills, avatars */
```

---

## 🌊 Shadows

### Subtle (Cards at rest)
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
```

### Medium (Hover states)
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

### Large (Modals, popovers)
```css
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
```

---

## 🎬 Animation Guidelines

### Durations
- **Instant**: 150ms - Small interactions (hover, focus)
- **Quick**: 300ms - UI feedback, toggles
- **Normal**: 500ms - Page transitions, reveals
- **Slow**: 1000ms - Hero animations

### Easing
```css
ease-in-out   /* Default for most animations */
ease-out      /* Enter animations */
ease-in       /* Exit animations */
```

### Common Animations
1. **Fade In**: `opacity: 0 → 1`
2. **Slide Up**: `y: 50 → 0`
3. **Scale**: `scale: 0.95 → 1`
4. **Lift**: `translateY: 0 → -8px`

---

## 🖱️ Interactive States

### Buttons
```css
Default   → scale(1)
Hover     → scale(1.05), opacity: 0.9
Active    → scale(0.98)
Disabled  → opacity: 0.5, cursor: not-allowed
```

### Cards
```css
Default   → translateY(0), shadow: sm
Hover     → translateY(-8px), shadow: xl
```

### Links
```css
Default   → text-muted-foreground
Hover     → text-foreground
Active    → underline
```

---

## 📱 Responsive Breakpoints

```typescript
Mobile:       < 640px   (sm)
Tablet:       640-1024px (md-lg)
Desktop:      > 1024px  (xl)
Large Screen: > 1280px  (2xl)
```

### Grid Patterns
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns
- **Large**: 4 columns (where appropriate)

---

## ♿ Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Interactive elements meet AAA standards (7:1)

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-ring
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- `<nav>`, `<main>`, `<footer>` landmarks
- ARIA labels on icon-only buttons

---

## 🎯 Component Patterns

### Card Pattern
```tsx
<div className="p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all">
  {/* Content */}
</div>
```

### Button Pattern (Primary)
```tsx
<button className="px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-all hover:scale-105">
  {/* Content */}
</button>
```

### Button Pattern (Secondary)
```tsx
<button className="px-6 py-3 border-2 border-border rounded-xl hover:bg-accent transition-colors">
  {/* Content */}
</button>
```

### Input Pattern
```tsx
<input className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
```

---

## 🎨 Icon System

Using **Lucide React** for consistent icon design:
- Size: `w-5 h-5` (20px) for buttons
- Size: `w-6 h-6` (24px) for features
- Stroke width: 2 (default)

---

## 📐 Layout Grid

### Container
```css
max-width: 1280px (7xl)
padding: 1rem (mobile) → 2rem (desktop)
```

### Section Spacing
```css
padding-top: 5rem (20)
padding-bottom: 5rem (20)
```

---

## 🌈 Design Tokens Reference

All tokens are defined in `/src/styles/theme.css` and can be used with Tailwind classes:

```css
bg-background
text-foreground
bg-card
text-card-foreground
bg-accent
text-accent-foreground
border-border
```

---

**Last Updated**: April 2026
