import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Award, Building2 } from 'lucide-react';
import { experiences, type Experience, type ExperienceKind } from '../data/portfolio';
import { SpotlightCard } from './effects/SpotlightCard';
import { Reveal, easeOut } from './effects/Reveal';

const kindStyles: Record<ExperienceKind, string> = {
  Industry: 'bg-violet-500/12 text-violet-700 dark:text-violet-300 border-violet-500/25',
  Freelance: 'bg-cyan-500/12 text-cyan-700 dark:text-cyan-300 border-cyan-500/25',
  Leadership: 'bg-amber-500/12 text-amber-700 dark:text-amber-300 border-amber-500/25',
  Teaching: 'bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 border-emerald-500/25',
};

const isProfessional = (exp: Experience) => exp.kind === 'Industry' || exp.kind === 'Freelance';

function KindBadge({ kind }: { kind: ExperienceKind }) {
  return <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${kindStyles[kind]}`}>{kind}</span>;
}

function Points({ points }: { points: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {points.map((point) => (
        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Professional roles on a scroll-filled timeline, followed by a compact grid
 * of leadership and teaching roles.
 */
export function ExperienceTimeline() {
  const professional = experiences.filter(isProfessional);
  const community = experiences.filter((exp) => !isProfessional(exp));

  return (
    <>
      <ProfessionalTimeline items={professional} />

      <Reveal className="mx-auto mt-16 max-w-5xl sm:mt-24">
        <div className="mb-8 flex items-center gap-4">
          <h3 className="shrink-0 text-xl sm:text-2xl">Leadership & teaching</h3>
          <span className="h-px flex-1 bg-[var(--glass-edge)]" />
        </div>
      </Reveal>
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {community.map((exp, i) => (
          <Reveal key={`${exp.org}-${exp.role}`} delay={(i % 2) * 0.08}>
            <SpotlightCard className="glass h-full rounded-3xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <KindBadge kind={exp.kind} />
                <span className="text-xs font-medium tabular-nums text-muted-foreground">{exp.period}</span>
              </div>
              <h4 className="mt-4 font-display text-lg font-semibold tracking-tight">{exp.role}</h4>
              <p className="mt-1 text-sm font-medium text-brand">{exp.org}</p>
              <Points points={exp.points} />
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function ProfessionalTimeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Rail sits in the gap between the 10rem date column and the cards (10rem + 3rem / 2).
  const railPosition = 'left-[7px] md:left-[11.5rem]';

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl">
      <div className={`absolute bottom-2 top-2 w-px bg-[var(--glass-edge)] ${railPosition}`} />
      <motion.div
        style={{ scaleY: fill }}
        className={`absolute bottom-2 top-2 w-px origin-top bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-400 ${railPosition}`}
      />

      <ol className="space-y-10">
        {items.map((exp) => (
          <li key={`${exp.org}-${exp.role}`} className="relative grid gap-4 pl-8 md:grid-cols-[10rem_1fr] md:gap-12 md:pl-0">
            <span
              aria-hidden
              className={`absolute top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background ${railPosition} ${
                exp.featured
                  ? 'bg-gradient-to-br from-violet-500 to-cyan-400 shadow-[0_0_0_6px_rgba(139,92,246,0.2)]'
                  : 'bg-gradient-to-br from-violet-500 to-indigo-500'
              }`}
            />

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="flex items-center gap-3 md:flex-col md:items-end md:gap-2 md:pt-7 md:text-right"
            >
              <p className="text-sm font-medium tabular-nums text-muted-foreground">{exp.period}</p>
              <KindBadge kind={exp.kind} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
            >
              <SpotlightCard
                className={`glass rounded-3xl p-6 sm:p-8 ${
                  exp.featured ? 'ring-1 ring-violet-500/30 shadow-[0_24px_70px_-30px_rgba(124,58,237,0.6)]' : ''
                }`}
              >
                <h3 className="text-xl sm:text-2xl">{exp.role}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-brand">
                  <Building2 className="h-4 w-4 shrink-0" />
                  {exp.org}
                </p>
                <Points points={exp.points} />

                {exp.highlight && (
                  <div className="mt-6 flex gap-3 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4 text-sm leading-relaxed">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
                    <p className="text-foreground/90">{exp.highlight}</p>
                  </div>
                )}
              </SpotlightCard>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}
