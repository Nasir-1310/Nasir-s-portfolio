/**
 * Fixed, full-viewport backdrop: slowly drifting color fields, a faint grid and film grain.
 * The glass surfaces on top blur this layer, which is what gives them depth.
 */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="aurora-blob animate-drift-1 -left-[15vw] -top-[25vh] h-[80vh] w-[80vh]"
        style={{ background: 'radial-gradient(circle, var(--aurora-1), transparent 65%)' }}
      />
      <div
        className="aurora-blob animate-drift-2 -right-[20vw] top-[5vh] h-[90vh] w-[90vh]"
        style={{ background: 'radial-gradient(circle, var(--aurora-2), transparent 65%)' }}
      />
      <div
        className="aurora-blob animate-drift-3 left-[25vw] top-[50vh] h-[70vh] w-[70vh]"
        style={{ background: 'radial-gradient(circle, var(--aurora-3), transparent 65%)' }}
      />
      <div
        className="aurora-blob animate-drift-2 -bottom-[35vh] -left-[10vw] h-[80vh] w-[80vh]"
        style={{ background: 'radial-gradient(circle, var(--aurora-4), transparent 65%)' }}
      />
      <div className="bg-grid absolute inset-0" />
      <div className="bg-noise absolute inset-0" />
    </div>
  );
}
