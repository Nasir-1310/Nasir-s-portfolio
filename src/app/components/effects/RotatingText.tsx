import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface RotatingTextProps {
  words: readonly string[];
  interval?: number;
  className?: string;
}

/** Cycles through `words`, sliding each one up into place. */
export function RotatingText({ words, interval = 2600, className = '' }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden className="relative inline-grid overflow-hidden pb-1 align-bottom">
        {/* Invisible copies size the slot to the widest word, so surrounding text never reflows */}
        {words.map((word) => (
          <span key={word} className="invisible col-start-1 row-start-1 whitespace-nowrap">
            {word}
          </span>
        ))}
        <AnimatePresence initial={false}>
          <motion.span
            key={words[index]}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-110%', opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`col-start-1 row-start-1 whitespace-nowrap ${className}`}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
