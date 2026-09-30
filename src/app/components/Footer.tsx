import { Link } from 'react-router';
import { ArrowUp, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';
import { socialLinks } from './socialLinks';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 px-4 pb-6 sm:px-6 lg:px-8">
      <div className="glass mx-auto max-w-7xl rounded-3xl px-6 py-10 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="btn-primary flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold">
                {profile.initials}
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">{profile.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Research Associate and Software Engineer working on LLMs for code generation and full-stack systems.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-brand" />
              {profile.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="btn-glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--glass-edge)] pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
