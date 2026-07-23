import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Decides whether it's worth mounting the React Three Fiber hero at all.
 * Skips it for prefers-reduced-motion and devices with no/broken WebGL,
 * per the brief's accessibility & performance notes.
 *
 * Deliberately does NOT gate on navigator.hardwareConcurrency: several
 * mainstream browsers cap or spoof that value for fingerprinting
 * resistance (Firefox's resistFingerprinting reports 2 regardless of the
 * real CPU, Safari caps it too), so treating "reports <= 2 cores" as
 * "low-end" would silently kill the signature hero for a meaningful slice
 * of real desktop visitors. The node-cluster scene itself is tiny (12
 * vertices, ~30 edges) — WebGL support is the only thing that actually
 * matters for whether it'll run smoothly.
 */
export function useCanRender3D(): boolean {
  const reducedMotion = useReducedMotion();
  const [capable, setCapable] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

      setCapable(Boolean(gl));
    } catch {
      setCapable(false);
    }
  }, []);

  return capable && !reducedMotion;
}
