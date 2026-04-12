import { RouterProvider } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import { router } from './routes';

/**
 * Portfolio Website Application
 * 
 * A modern, professional portfolio website with:
 * - 5 main pages: Home, About, Projects, Contact, Admin Dashboard
 * - Light/Dark mode theme toggle
 * - Smooth animations with Motion (Framer Motion)
 * - Fully responsive design
 * - React Router for navigation
 * 
 * To customize:
 * 1. Update personal info in /pages/Home.tsx
 * 2. Modify projects data in /pages/Projects.tsx
 * 3. Change colors in /styles/theme.css
 * 4. Add new routes in /routes.tsx
 * 
 * Access the admin dashboard at: /admin
 */
export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}