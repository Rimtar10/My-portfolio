import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Small custom cursor dot that scales up over interactive elements.
 * Desktop only (brief: "skip on mobile"), and respects reduced motion.
 */
export function CustomCursor() {
  const isDesktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const reducedMotion = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const active = isDesktop && !reducedMotion;

  useEffect(() => {
    if (!active) return;

    document.body.classList.add("custom-cursor-active");
    const dot = dotRef.current;
    if (!dot) return;

    // Stay hidden until the first real pointer movement, so no stray dot
    // sits at a default position before the user's mouse has moved.
    dot.style.opacity = "0";

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.opacity = "1";
    };

    const render = () => {
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(var(--cursor-scale, 1))`;
      raf = requestAnimationFrame(render);
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        dot.style.setProperty("--cursor-scale", "2.2");
      }
    };
    const onOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        dot.style.setProperty("--cursor-scale", "1");
      }
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerout", onOut);
    raf = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] h-3 w-3 rounded-full bg-terracotta/80 transition-[transform,opacity] duration-150 ease-out"
    />
  );
}
