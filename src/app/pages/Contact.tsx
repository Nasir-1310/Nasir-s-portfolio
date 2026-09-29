import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PageHeader } from '../components/SectionHeading';
import { socialLinks } from '../components/socialLinks';
import { Reveal } from '../components/effects/Reveal';
import { SpotlightCard } from '../components/effects/SpotlightCard';
import { profile } from '../data/portfolio';

const inputClass =
  'w-full rounded-xl border border-[var(--glass-edge)] bg-[var(--glass-bg)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus-visible:outline-none focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/15';

const contactMethods = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.socials.linkedin, external: true },
  { icon: MapPin, label: 'Location', value: profile.location },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // No backend: compose the message in the visitor's email app, addressed to me.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = form.subject.trim() || `Portfolio inquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="px-4 pb-12 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Contact"
          title={
            <>
              Let's <span className="text-gradient">work together</span>
            </>
          }
          description="Have an opportunity, a project, or just want to connect? My inbox is always open, and I typically reply within 24 hours."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <SpotlightCard className="glass rounded-[2rem] p-7 sm:p-10">
              <h2 className="text-2xl">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                This opens your email app with the message ready to send.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm">
                    Subject <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job opportunity, collaboration…"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      role="status"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-center text-sm text-emerald-700 dark:text-emerald-300"
                    >
                      Your email app should now be open with the message ready. If it didn't open, write to{' '}
                      <a href={`mailto:${profile.email}`} className="font-semibold underline underline-offset-2">
                        {profile.email}
                      </a>
                      .
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </SpotlightCard>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="glass rounded-[2rem] p-3">
                {contactMethods.map(({ icon: Icon, label, value, href, external }) => {
                  const inner = (
                    <>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{label}</span>
                        <span className="block truncate font-medium">{value}</span>
                      </span>
                    </>
                  );
                  const cls = 'group flex flex-1 items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-brand-soft';
                  return (
                    <div key={label} className="flex items-center gap-2">
                      {href ? (
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className={cls}
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className={cls}>{inner}</div>
                      )}
                      {label === 'Email' && (
                        <button
                          type="button"
                          onClick={copyEmail}
                          aria-label={copied ? 'Email copied' : 'Copy email address'}
                          className="btn-glass mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground"
                        >
                          {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <SpotlightCard className="glass relative overflow-hidden rounded-[2rem] p-8">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.22), transparent 65%)' }}
                />
                <div className="relative">
                  <p className="flex items-center gap-2.5 text-sm font-semibold">
                    <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-500" />
                    {profile.availability}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Full-stack, AI/ML and quality engineering roles, as well as freelance projects and collaborations.
                  </p>
                  <div className="mt-6 flex gap-2">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="btn-glass flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
