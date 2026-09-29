import { RouterProvider } from 'react-router';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { router } from './routes';

/**
 * Portfolio Website Application
 *
 * - Pages: Home, About, Projects, Contact (plus Admin Dashboard at /admin)
 * - Glassmorphism UI over an animated aurora background, light/dark themes
 * - Animations with Motion; respects the visitor's reduced-motion setting
 *
 * To customize:
 * 1. Edit all text, experience, projects and skills in /data/portfolio.ts
 * 2. Change colors and glass tokens in /styles/theme.css
 * 3. Tweak effects (glass, spotlight, aurora) in /styles/effects.css
 * 4. Add new routes in /routes.tsx
 */
export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <RouterProvider router={router} />
      </MotionConfig>
    </ThemeProvider>
  );
}
