import { Link, useLocation } from 'react-router';
import { FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState, type MouseEvent } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { profile } from '../data/portfolio';

const navLinks = [
  { key: 'home', to: '/', label: 'Home' },
  { key: 'about', to: '/about', label: 'About' },
  { key: 'experience', to: '/#experience', label: 'Experience' },
  { key: 'projects', to: '/projects', label: 'Projects' },
  { key: 'contact', to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inExperience, setInExperience] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  // Scroll-spy: highlight "Experience" while that section crosses the middle of the viewport.
  useEffect(() => {
    setInExperience(false);
    if (pathname !== '/') return;
    const section = document.getElementById('experience');
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setInExperience(entry.isIntersecting), {
      rootMargin: '-45% 0px -50% 0px',
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  const activeKey =
    pathname === '/' ? (inExperience ? 'experience' : 'home') : navLinks.find((l) => l.to === pathname)?.key;

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, to: string) => {
    setMenuOpen(false);
    if (pathname !== '/') return; // let the router navigate; ScrollRestoration handles the hash
    if (to === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (to.startsWith('/#')) {
      e.preventDefault();
      document.getElementById(to.slice(2))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled || menuOpen ? 'glass-strong' : 'border border-transparent'
        }`}
      >
        <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="group flex items-center gap-3" aria-label="Nasir Uddin, home">
          <span className="btn-primary flex h-9 w-9 items-center justify-center rounded-xl font-display text-sm font-bold tracking-tight">
            {profile.initials}
          </span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight sm:block">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full p-1 md:flex">
          {navLinks.map((link) => {
            const active = activeKey === link.key;
            return (
              <li key={link.key}>
                <Link
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative isolate block rounded-full px-4 py-2 text-sm transition-colors ${
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full border border-[var(--glass-edge)] bg-brand-soft"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-glass relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ y: 18, rotate: -90, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                exit={{ y: -18, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium sm:inline-flex"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="btn-glass flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden"
          >
            <ul>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    to={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    aria-current={activeKey === link.key ? 'page' : undefined}
                    className={`block rounded-xl px-4 py-3 text-[15px] transition-colors ${
                      activeKey === link.key ? 'bg-brand-soft text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium sm:hidden"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
