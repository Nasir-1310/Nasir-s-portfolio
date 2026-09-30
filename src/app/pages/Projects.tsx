import { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { Github } from 'lucide-react';
import { PageHeader } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/effects/Reveal';
import { profile, projects, type ProjectCategory } from '../data/portfolio';

type Filter = 'All' | ProjectCategory;

const filters: Filter[] = ['All', 'AI & Research', 'Full-Stack', 'Desktop'];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="px-4 pb-12 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Portfolio"
          title={
            <>
              Selected <span className="text-gradient">work</span>
            </>
          }
          description="LLM research, production web platforms and interactive learning tools, each built end to end."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <LayoutGroup>
            <div role="group" aria-label="Filter projects by category" className="glass inline-flex flex-wrap justify-center gap-1 rounded-2xl p-1.5">
              {filters.map((f) => {
                const count = f === 'All' ? projects.length : projects.filter((p) => p.category === f).length;
                const active = f === filter;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={`relative isolate rounded-xl px-4 py-2 text-sm transition-colors ${
                      active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="project-filter"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-xl border border-[var(--glass-edge)] bg-brand-soft"
                      />
                    )}
                    {f}
                    <span className="ml-2 text-xs tabular-nums text-muted-foreground">{count}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </motion.div>

        <div className="relative mt-12 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Reveal className="mt-24">
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full"
              style={{ background: 'radial-gradient(circle, var(--aurora-1), transparent 65%)' }}
            />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl">There's more on GitHub</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Browse the source for these projects and everything else I'm building.
              </p>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
              >
                <Github className="h-4 w-4" />
                Visit my GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
