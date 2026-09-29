import { useRef, type PointerEvent } from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

/**
 * A card whose surface and border light up around the cursor.
 * Pointer position is written to CSS variables directly, so moving the mouse never re-renders React.
 */
export function SpotlightCard({ className = '', onPointerMove, children, ...rest }: HTMLMotionProps<'div'>) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    }
    onPointerMove?.(e);
  };

  return (
    <motion.div ref={ref} onPointerMove={handlePointerMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </motion.div>
  );
}
