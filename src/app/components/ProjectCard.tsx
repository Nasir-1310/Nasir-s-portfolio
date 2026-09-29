import { ArrowUpRight, CircleCheck, Github } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { SpotlightCard } from './effects/SpotlightCard';
import { ProjectCover } from './ProjectCover';

interface ProjectCardProps {
  project: Project;
  /** Compact cards drop the highlight list and trim the tech stack (used on the home page). */
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const techLimit = compact ? 4 : project.technologies.length;
  const hiddenTech = project.technologies.length - techLimit;

  return (
    <SpotlightCard
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
    >
      <div className={`relative overflow-hidden border-b border-[var(--glass-edge)] ${compact ? 'h-52' : 'h-56 sm:h-60'}`}>
        <ProjectCover project={project} />
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] tracking-wide">
          {project.category}
        </span>
        {project.liveUrl && (
          <span className="glass absolute right-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="mb-2 font-mono text-xs text-brand">{project.tagline}</p>
        <h3 className="text-xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {!compact && (
          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.slice(0, techLimit).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--glass-edge)] bg-[var(--glass-bg)] px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </li>
          ))}
          {hiddenTech > 0 && (
            <li className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">+{hiddenTech}</li>
          )}
        </ul>

        <div className="mt-auto flex gap-3 pt-7">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub`}
            className="btn-glass inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live site`}
              className="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium"
            >
              Live site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
