# Software Engineer Portfolio Website

A modern, professional, and visually stunning portfolio website built with React, React Router, Tailwind CSS, and Motion (Framer Motion).

## 🎨 Design System

### Color Palette

#### Light Mode
- **Background**: White (#ffffff)
- **Foreground**: Dark gray (oklch(0.145 0 0))
- **Accent**: Light gray (#e9ebef)
- **Borders**: Subtle gray with 10% opacity

#### Dark Mode
- **Background**: Very dark gray (oklch(0.145 0 0))
- **Foreground**: Off-white (oklch(0.985 0 0))
- **Accent**: Medium dark gray (oklch(0.269 0 0))
- **Borders**: Dark gray (oklch(0.269 0 0))

### Typography
- **Font Family**: Inter (Google Fonts)
- **Base Size**: 16px
- **Font Weights**: 
  - Normal: 400
  - Medium: 500
  - Semibold: 600
  - Bold: 700

### Spacing
- Uses Tailwind's default spacing scale (4px base unit)
- Consistent padding and margins throughout
- Generous whitespace for premium feel

### Border Radius
- **Small**: 0.25rem (4px)
- **Medium**: 0.5rem (8px) 
- **Large**: 0.625rem (10px)
- **XL**: 1rem (16px)
- **2XL**: 1.5rem (24px)
- **3XL**: 2rem (32px)

## 📄 Pages

### 1. Home (Landing Page)
- Hero section with animated introduction
- Profile image with floating animation
- Call-to-action buttons
- Statistics section
- CTA section

### 2. About
- Personal story/bio section
- Skills grid with icons (6 categories)
- Experience timeline (4 positions)
- All with scroll animations

### 3. Projects
- Responsive grid layout (1/2/3 columns)
- Project cards with:
  - High-quality images
  - Title and description
  - Technology badges
  - GitHub and Live Demo buttons
  - Hover effects (lift, shadow)
- 6 example projects included

### 4. Contact
- Professional contact form
  - Name input
  - Email input
  - Message textarea
  - Success/error states
- Contact information cards
- Working hours section
- All fields required and validated

### 5. Admin Dashboard
- Fixed sidebar navigation
- Dashboard overview with stats
- Project management interface
- Add/Edit project modal with:
  - Title input
  - Description textarea
  - Drag & drop image upload
  - Technology tags input
  - URL fields (GitHub, Live Demo)
- Project cards with edit/delete actions

## 🎭 Features

### Theme System
- ✅ Light mode
- ✅ Dark mode
- ✅ Theme toggle in navbar
- ✅ Persistent theme (localStorage)
- ✅ Smooth transitions

### Animations
- ✅ Page transitions
- ✅ Scroll animations
- ✅ Hover effects
- ✅ Button interactions
- ✅ Card lifts
- ✅ Floating elements
- ✅ Modal animations

### Responsive Design
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1280px+)

### Navigation
- ✅ Sticky navbar with blur effect
- ✅ Active route highlighting
- ✅ Mobile hamburger menu
- ✅ Smooth scrolling
- ✅ React Router integration

## 🧩 Components

### Reusable Components
1. **Navbar** - Sticky navigation with theme toggle
2. **Footer** - Social links and copyright
3. **ThemeContext** - Global theme management

### Page Components
- Home
- About
- Projects
- Contact
- AdminDashboard
- NotFound

## 🎨 Design Principles

1. **Minimalism** - Clean, uncluttered layouts
2. **Hierarchy** - Clear visual organization
3. **Consistency** - Uniform spacing and styling
4. **Accessibility** - Proper contrast and semantic HTML
5. **Responsiveness** - Mobile-first approach
6. **Performance** - Optimized animations and images

## 🚀 Getting Started

### Routes
- `/` - Home page
- `/about` - About page
- `/projects` - Projects showcase
- `/contact` - Contact form
- `/admin` - Admin dashboard (separate layout)

### Customization

#### Update Personal Information
Edit the content in:
- `/src/app/pages/Home.tsx` - Name, role, intro
- `/src/app/pages/About.tsx` - Bio, skills, experience
- `/src/app/pages/Projects.tsx` - Project data
- `/src/app/pages/Contact.tsx` - Contact details

#### Modify Colors
Edit `/src/styles/theme.css` to change color scheme

#### Add New Pages
1. Create component in `/src/app/pages/`
2. Add route in `/src/app/routes.tsx`
3. Add navigation link in `/src/app/components/Navbar.tsx`

## 📦 Tech Stack

- **React** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Motion** (Framer Motion) - Animations
- **Lucide React** - Icons
- **TypeScript** - Type safety
- **Vite** - Build tool

## 🎯 Best Practices

- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Responsive design patterns
- ✅ Semantic HTML
- ✅ Accessible forms
- ✅ Optimized images with fallbacks
- ✅ Smooth animations (60fps)
- ✅ Clean code organization

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🎨 Design Tokens

All design tokens are defined in `/src/styles/theme.css`:
- Colors (light/dark mode)
- Typography scales
- Spacing system
- Border radius values
- Shadow definitions

## 📝 Notes

- All project images use Unsplash for high-quality visuals
- Admin dashboard is UI-only (no backend)
- Form submissions are simulated (no actual API calls)
- Resume PDF is linked from `/src/imports/` directory
- Theme preference persists across sessions
- Smooth scroll behavior enabled globally

---

**Built with ❤️ for recruiters and hiring managers**
