import { useRef, type PointerEvent } from 'react';
import { Link } from 'react-router';
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'motion/react';
import { ArrowRight, Briefcase, Download, GraduationCap, MapPin, Sparkles, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { socialLinks } from '../components/socialLinks';
import { icons } from '../components/icons';
import { CountUp } from '../components/effects/CountUp';
import { Reveal, easeOut } from '../components/effects/Reveal';
import { RotatingText } from '../components/effects/RotatingText';
import { SpotlightCard } from '../components/effects/SpotlightCard';
import { TechMarquee } from '../components/effects/TechMarquee';
import { achievements, focusAreas, marqueeTech, profile, projects, stats } from '../data/portfolio';

const heroItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TechStrip />
      <FocusAreas />
      <Experience />
      <FeaturedProjects />
      <Achievements />
      <CallToAction />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
        >
          <motion.div variants={heroItem}>
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-500" />
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1 variants={heroItem} className="mt-7 text-5xl sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient text-gradient-animated">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-5 flex flex-wrap items-baseline gap-x-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.65rem]"
          >
            <span className="text-muted-foreground">{profile.headline} ·</span>
            <RotatingText words={profile.roles} />
          </motion.p>

          <motion.p variants={heroItem} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.summary}
          </motion.p>

          <motion.div variants={heroItem} className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              View my work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="btn-glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={heroItem} className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex gap-2">
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
            <span className="hidden h-6 w-px bg-[var(--glass-edge)] sm:block" />
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-brand" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <HeroPortrait />
      </div>

      <motion.a
        href="#stats"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground lg:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border border-[var(--glass-edge)] pt-2">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-foreground/70"
          />
        </span>
        Scroll
      </motion.a>
    </section>
  );
}

const tilt = { stiffness: 150, damping: 18, mass: 0.4 };

function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), tilt);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), tilt);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  const chips = [
    { icon: Briefcase, title: 'BIRDI', sub: 'Research Associate', pos: 'left-0 top-10 sm:-left-10', delay: '0s' },
    { icon: GraduationCap, title: 'CGPA 3.69', sub: 'IIT, University of Dhaka', pos: 'right-0 top-[42%] sm:-right-10', delay: '-2s' },
    { icon: Target, title: '300+ problems', sub: 'Codeforces · LeetCode', pos: 'bottom-28 left-0 sm:-left-12', delay: '-4s' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: easeOut }}
      className="relative mx-auto w-full max-w-[420px] [perspective:1200px]"
    >
      <div
        aria-hidden
        className="absolute -inset-12 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, var(--aurora-1), transparent 70%)' }}
      />

      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        <div className="conic-frame rounded-[2rem] bg-[var(--glass-edge)] shadow-[0_40px_80px_-30px_rgba(76,29,149,0.55)]">
          <span className="conic-spin" aria-hidden />
          <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-white">
            <ImageWithFallback
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full origin-top scale-[1.3] object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="glass-solid absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{profile.fullName}</p>
                <p className="text-xs text-muted-foreground">Software Engineer · Dhaka</p>
              </div>
              <span className="btn-primary flex h-9 w-9 items-center justify-center rounded-xl">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>

        {chips.map(({ icon: Icon, title, sub, pos, delay }) => (
          <div key={title} className={`absolute ${pos}`} style={{ transform: 'translateZ(60px)' }}>
            <div className="glass-solid animate-float flex items-center gap-3 rounded-2xl px-3.5 py-2.5" style={{ animationDelay: delay }}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="pr-1">
                <span className="block text-sm font-semibold leading-tight">{title}</span>
                <span className="block text-[11px] leading-tight text-muted-foreground">{sub}</span>
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Stats() {
  return (
    <section id="stats" className="px-4 py-10 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="glass grid grid-cols-2 gap-2 rounded-3xl p-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl px-5 py-7 text-center transition-colors duration-300 hover:bg-brand-soft sm:px-6"
            >
              <p className="text-gradient font-display text-4xl font-bold tracking-tight sm:text-5xl">
                <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function TechStrip() {
  return (
    <section aria-label="Technologies" className="py-12">
      <Reveal>
        <p className="eyebrow mb-6 text-center">Technologies I work with</p>
        <TechMarquee items={marqueeTech} />
      </Reveal>
    </section>
  );
}

function FocusAreas() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              From LLM research to <span className="text-gradient">production software</span>
            </>
          }
          description="Training and evaluating code-generation models, building full-stack platforms, and testing software to industry standards."
        />

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = icons[area.icon];
            return (
              <Reveal key={area.title} delay={i * 0.1}>
                <SpotlightCard className="glass h-full rounded-3xl p-8">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand ring-1 ring-[var(--glass-edge)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[var(--glass-edge)] px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I've <span className="text-gradient">made an impact</span>
            </>
          }
          description="LLM research at BIRDI, software quality work at Samsung R&D, and years of leadership and teaching across Bangladesh's tech and olympiad communities."
        />
        <div className="mt-16">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured work"
            title={
              <>
                Projects I'm <span className="text-gradient">proud of</span>
              </>
            }
            description="LLM research and production web platforms, built end to end."
          />
          <Reveal>
            <Link
              to="/projects"
              className="btn-glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              All projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1} className="h-full">
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Recognition"
          title={
            <>
              Achievements & <span className="text-gradient">awards</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => {
            const Icon = icons[item.icon];
            const featured = 'featured' in item && item.featured;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className={featured ? 'md:col-span-2 lg:row-span-2' : ''}
              >
                <SpotlightCard
                  className={`glass relative flex h-full flex-col overflow-hidden rounded-3xl ${featured ? 'p-8 sm:p-10' : 'p-7'}`}
                >
                  {featured && (
                    <div
                      aria-hidden
                      className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
                      style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.25), transparent 65%)' }}
                    />
                  )}
                  <span
                    className={`flex items-center justify-center rounded-2xl ${
                      featured
                        ? 'h-16 w-16 bg-amber-500/15 text-amber-600 ring-1 ring-amber-500/30 dark:text-amber-400'
                        : 'h-12 w-12 bg-brand-soft text-brand'
                    }`}
                  >
                    <Icon className={featured ? 'h-8 w-8' : 'h-5 w-5'} />
                  </span>
                  <div className={featured ? 'relative mt-auto pt-12' : ''}>
                    {featured && <p className="eyebrow text-amber-600 dark:text-amber-400">Industry recognition</p>}
                    <h3 className={featured ? 'mt-3 text-2xl sm:text-3xl' : 'mt-5 text-lg'}>{item.title}</h3>
                    <p className={`mt-3 leading-relaxed text-muted-foreground ${featured ? 'text-base sm:text-lg' : 'text-sm'}`}>
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="animate-float-slow absolute -left-20 -top-24 h-72 w-72 rounded-full"
            style={{ background: 'radial-gradient(circle, var(--aurora-1), transparent 65%)' }}
          />
          <div
            aria-hidden
            className="animate-float absolute -bottom-28 -right-16 h-80 w-80 rounded-full"
            style={{ background: 'radial-gradient(circle, var(--aurora-2), transparent 65%)' }}
          />
          <div className="relative">
            <p className="eyebrow mb-5">Let's connect</p>
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Have a role or project in mind? <span className="text-gradient">Let's talk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              I'm always happy to discuss new opportunities, collaborations and interesting problems.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="btn-glass inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
