"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 35, mass: 0.4 });

  const [variant, setVariant] = useState<"default" | "grow" | "text">(
    "default",
  );
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on fine-pointer devices (mouse), not touch.
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "[data-cursor='grow'], a, button, [role='button']",
      ) as HTMLElement | null;
      if (interactive) {
        setVariant(interactive.dataset.cursor === "text" ? "text" : "grow");
      } else {
        setVariant("default");
      }
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = variant === "grow" ? 44 : 14;
  const ringSize = variant === "grow" ? 60 : 32;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden rounded-full border border-deep-green/40 mix-blend-difference lg:block"
        style={{
          x: sx,
          y: sy,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ width: ringSize, height: ringSize }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden rounded-full bg-deep-green mix-blend-difference lg:block"
        style={{
          x,
          y,
          width: size,
          height: size,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
      />
    </>
  );
}
