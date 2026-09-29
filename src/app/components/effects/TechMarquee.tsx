interface TechMarqueeProps {
  items: readonly string[];
}

/** Infinitely scrolling row of technology pills. Hover pauses it. */
export function TechMarquee({ items }: TechMarqueeProps) {
  // The list is rendered twice so translating by -50% loops seamlessly.
  const row = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden py-2">
      <ul className="marquee-track flex w-max">
        {row.map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            aria-hidden={i >= items.length}
            className="mr-3 flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--glass-edge)] bg-[var(--glass-bg)] px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
