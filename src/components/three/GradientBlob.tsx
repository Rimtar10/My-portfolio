/**
 * Ambient background blobs — slow (75 to 92s), independent animated
 * gradients cycling between cream/ochre/terracotta/rose tones, per the
 * brief: should read as ambient, not distracting. Pure CSS, so it renders
 * even when the R3F hero is skipped for reduced-motion/low-end devices.
 */
export function GradientBlob() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -right-1/4 top-1/2 h-[75vw] w-[75vw] max-w-[780px] -translate-y-1/2 rounded-full opacity-70 blur-3xl animate-blob"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(217,164,65,0.6), transparent 60%), radial-gradient(circle at 65% 65%, rgba(193,91,61,0.5), transparent 55%)",
        }}
      />
      <div
        className="absolute -left-1/3 bottom-0 h-[45vw] w-[45vw] max-w-[480px] rounded-full opacity-50 blur-3xl animate-blob"
        style={{
          animationDuration: "92s",
          animationDirection: "reverse",
          background:
            "radial-gradient(circle at 50% 50%, rgba(184,107,119,0.4), transparent 65%)",
        }}
      />
    </div>
  );
}
