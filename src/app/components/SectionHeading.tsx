import type { ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';
import { Reveal, easeOut } from './effects/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
}

/** Eyebrow + title + description block used at the top of each home-page section. */
export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </Reveal>
  );
}

const headerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

/** Larger heading for the top of standalone pages (About, Projects, Contact). */
export function PageHeader({ eyebrow, title, description }: Omit<SectionHeadingProps, 'align'>) {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
      className="mx-auto max-w-3xl text-center"
    >
      <motion.p variants={headerItem} className="eyebrow mb-5">
        {eyebrow}
      </motion.p>
      <motion.h1 variants={headerItem} className="text-4xl sm:text-5xl lg:text-6xl">
        {title}
      </motion.h1>
      {description && (
        <motion.p variants={headerItem} className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
