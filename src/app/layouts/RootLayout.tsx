import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AuroraBackground } from '../components/effects/AuroraBackground';
import { ScrollProgress } from '../components/effects/ScrollProgress';

export function RootLayout() {
  const { pathname } = useLocation();

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-clip">
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
