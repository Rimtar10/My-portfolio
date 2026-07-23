import { lazy, Suspense } from "react";
import { useCanRender3D } from "../../hooks/useCanRender3D";

// Code-split: the Three.js/R3F bundle only loads when it's actually going
// to render, so it never blocks first paint of the rest of the page.
const NodeClusterScene = lazy(() => import("./NodeCluster"));

function StaticFallback() {
  return (
    <div
      aria-hidden
      className="h-full w-full rounded-full"
      style={{
        background:
          "radial-gradient(circle at 40% 35%, rgba(217,164,65,0.5), transparent 55%), radial-gradient(circle at 60% 65%, rgba(193,91,61,0.4), transparent 55%)",
        filter: "blur(2px)",
      }}
    />
  );
}

/**
 * Hero's signature 3D object. Falls back to a static gradient poster for
 * prefers-reduced-motion, no-WebGL, or low-end devices — never blocks
 * reading the hero copy either way.
 */
export function HeroScene() {
  const canRender3D = useCanRender3D();

  if (!canRender3D) {
    return <StaticFallback />;
  }

  return (
    <Suspense fallback={<StaticFallback />}>
      <NodeClusterScene />
    </Suspense>
  );
}
