import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

interface CountUpProps {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

const format = (n: number, decimals: number, suffix: string) =>
  n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

/** Counts from zero to `value` once the number scrolls into view. */
export function CountUp({ value, decimals = 0, suffix = '', duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduceMotion) {
      node.textContent = format(value, decimals, suffix);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = format(v, decimals, suffix);
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, decimals, suffix, duration]);

  return (
    <span ref={ref}>{format(0, decimals, suffix)}</span>
  );
}
