import { Link } from 'react-router';
import { ArrowDown, ArrowRight, ArrowUpRight, Download, GraduationCap, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { socialLinks } from '../components/socialLinks';
import { icons } from '../components/icons';
import { CountUp } from '../components/effects/CountUp';
import { Reveal } from '../components/effects/Reveal';
import { SpotlightCard } from '../components/effects/SpotlightCard';
import { TechMarquee } from '../components/effects/TechMarquee';
import { achievements, focusAreas, marqueeTech, profile, projects, stats } from '../data/portfolio';

export function Home() {
 return <div className="home-page">
   <Hero /><Stats /><FeaturedProjects /><FocusAreas /><TechStrip /><Experience /><Achievements /><CallToAction />
 </div>;
}

function Hero() {
 return <section className="hero-section">
   <div className="hero-layout">
     <div className="hero-copy">
       <p className="hero-intro"><span /> SOFTWARE ENGINEER & RESEARCHER</p>
       <h1>Hi, I'm<br /><span>{profile.name}.</span></h1>
       <p className="hero-statement">Research-driven thinking.<br />Real-world engineering.</p>
       <p className="hero-summary">{profile.summary}</p>
       <div className="hero-actions">
         <Link to="/projects" className="btn-primary hero-button">Explore my work <ArrowUpRight size={18} /></Link>
         <a href={profile.resume} download={profile.resumeFileName} className="btn-glass hero-button"><Download size={17} /> Download CV</a>
       </div>
       <div className="hero-connect">
         <span className="hero-location"><MapPin size={15} />{profile.location}</span>
         <div className="hero-socials">{socialLinks.map(({ icon: Icon, href, label }) => <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label}><Icon size={18} /></a>)}</div>
       </div>
     </div>
     <div className="hero-visual">
       <div className="portrait-label"><span /> {profile.availability}</div>
       <div className="portrait-frame">
         <span className="portrait-index" aria-hidden="true">01 / INTRODUCTION</span>
         <ImageWithFallback src={profile.photo} alt={'Portrait of ' + profile.name} width={520} height={620} className="hero-photo" />
         <div className="portrait-caption"><span>{profile.fullName}<small>{profile.headline}</small></span><ArrowUpRight size={26} aria-hidden="true" /></div>
       </div>
       <div className="education-note"><span className="education-icon"><GraduationCap size={22} /></span><div><strong>University of Dhaka</strong><span>B.Sc. in Software Engineering · CGPA 3.69</span></div></div>
       <span className="portrait-side-note" aria-hidden="true">CURIOSITY. PRECISION. IMPACT.</span>
     </div>
   </div>
   <div className="hero-bottom"><a href="#selected-work"><ArrowDown size={16} /> DISCOVER MY WORK</a><span>AI RESEARCH <i /> FULL-STACK DEVELOPMENT <i /> QUALITY ENGINEERING</span></div>
 </section>;
}

function Stats() {
  return (
    <section id="stats" className="px-4 py-10 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4">
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
    <section id="selected-work" className="selected-work scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured work"
            title={
              <>
                Ideas turned into <span className="text-gradient">impact.</span>
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

        <div className="mt-14 grid gap-7 md:grid-cols-2">
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
