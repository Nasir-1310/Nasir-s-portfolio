import type { Project } from '../data/portfolio';

/**
 * Generated cover art for a project card: a tinted backdrop with a stylized
 * browser, terminal or simulation window, colored from the project's palette.
 */
export function ProjectCover({ project }: { project: Project }) {
  const [c1, c2] = project.palette;
  const { cover } = project;

  const title =
    cover.kind === 'browser' ? cover.url : cover.kind === 'terminal' ? `zsh — ${project.slug}` : 'learnphysics.exe';

  return (
    <div
      aria-hidden
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `radial-gradient(90% 130% at 0% 0%, ${c1}66, transparent 60%), radial-gradient(90% 130% at 100% 100%, ${c2}59, transparent 60%)`,
      }}
    >
      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-x-6 bottom-0 top-14 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 sm:inset-x-8">
        <div className="glass-strong flex h-full flex-col overflow-hidden rounded-t-xl border-b-0">
          <div className="flex items-center gap-1.5 border-b border-[var(--glass-edge)] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-3 truncate rounded-md bg-[var(--glass-bg)] px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
              {title}
            </span>
          </div>
          <div className="min-h-0 flex-1">
            {cover.kind === 'browser' && <BrowserBody c1={c1} c2={c2} />}
            {cover.kind === 'terminal' && <TerminalBody lines={cover.lines} accent={c1} />}
            {cover.kind === 'simulation' && <SimulationBody id={project.slug} c1={c1} c2={c2} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserBody({ c1, c2 }: { c1: string; c2: string }) {
  const brand = `linear-gradient(90deg, ${c1}, ${c2})`;
  return (
    <div className="space-y-3 p-4">
      <div className="flex items-center justify-between">
        <span className="h-2.5 w-14 rounded-full" style={{ background: brand }} />
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-8 rounded-full bg-foreground/15" />
          ))}
        </div>
      </div>
      <div className="space-y-2 pt-1">
        <span className="block h-3 w-3/4 rounded-full bg-foreground/25" />
        <span className="block h-3 w-1/2 rounded-full bg-foreground/15" />
        <span className="mt-3 block h-5 w-20 rounded-md" style={{ background: brand }} />
      </div>
      <div className="grid grid-cols-3 gap-2 pt-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-[var(--glass-edge)] bg-[var(--glass-bg)] p-2">
            <span className="block h-1.5 w-3/4 rounded-full bg-foreground/15" />
            <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-foreground/10" />
            <span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-foreground/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TerminalBody({ lines, accent }: { lines: string[]; accent: string }) {
  return (
    <div className="space-y-1 p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
      {lines.map((line, i) => {
        if (line.startsWith('$')) {
          return (
            <p key={i} className="text-foreground">
              <span style={{ color: accent }}>$</span>
              {line.slice(1)}
            </p>
          );
        }
        const tone = line.startsWith('✓') ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground';
        return (
          <p key={i} className={tone}>
            {line}
          </p>
        );
      })}
      <span className="inline-block h-3.5 w-2 animate-pulse bg-foreground/60 align-middle" />
    </div>
  );
}

// Points on the quadratic Bézier M30,130 Q160,-40 290,130 at t = 0.2, 0.4, 0.6, 0.8
const trajectory = [
  [82, 75.6],
  [134, 48.4],
  [186, 48.4],
  [238, 75.6],
];

function SimulationBody({ id, c1, c2 }: { id: string; c1: string; c2: string }) {
  const gradientId = `sim-${id}`;
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full p-3 text-foreground">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <marker id={`${gradientId}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={c1} />
        </marker>
      </defs>
      <line x1="16" y1="130" x2="304" y2="130" stroke="currentColor" strokeOpacity="0.2" />
      <path d="M30,130 Q160,-40 290,130" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" strokeDasharray="5 6" />
      <line x1="30" y1="130" x2="57" y2="94" stroke={c1} strokeWidth="2" markerEnd={`url(#${gradientId}-arrow)`} />
      <path d="M52,130 A22,22 0 0 0 43.4,112.6" fill="none" stroke="currentColor" strokeOpacity="0.4" />
      <text x="58" y="124" fontSize="10" fill="currentColor" fillOpacity="0.6" fontFamily="JetBrains Mono, monospace">
        θ
      </text>
      <text x="62" y="92" fontSize="10" fill="currentColor" fillOpacity="0.6" fontFamily="JetBrains Mono, monospace">
        v₀
      </text>
      {trajectory.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === trajectory.length - 1 ? 7 : 4} fill={`url(#${gradientId})`} opacity={0.35 + i * 0.2} />
      ))}
      <text x="296" y="146" textAnchor="end" fontSize="9" fill="currentColor" fillOpacity="0.45" fontFamily="JetBrains Mono, monospace">
        y = x·tanθ − gx² / 2v₀²cos²θ
      </text>
    </svg>
  );
}
