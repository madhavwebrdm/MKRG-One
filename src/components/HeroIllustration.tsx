"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";

type Props = {
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export default function HeroIllustration({ imageUrl, imageAlt }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 100, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 100, damping: 18, mass: 0.5 });

  const imgX = useTransform(sx, [-0.5, 0.5], [-25, 25]);
  const imgY = useTransform(sy, [-0.5, 0.5], [-15, 15]);
  const badgeX = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const badgeY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  const tiltY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const tiltX = useTransform(sy, [-0.5, 0.5], [4, -4]);

  function handleMove(e: React.MouseEvent) {
    const el = root.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  const src = imageUrl || PLACEHOLDER_IMAGES.hero;
  const alt = imageAlt || "Madhav KRG Group recycling plant";

  return (
    <motion.div
      ref={root}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-2xl border border-deep-green/10 bg-deep-green"
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      data-cursor="grow"
    >
      <motion.div
        className="absolute inset-0"
        style={{ x: imgX, y: imgY, scale: 1.12 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </motion.div>

      {/* Brand-color overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/70 via-deep-green/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,transparent_0%,rgba(39,80,10,0.15)_70%)]" />

      {/* Floating accent badge */}
      <motion.div
        style={{ x: badgeX, y: badgeY }}
        className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-accent backdrop-blur"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Recycle2X
      </motion.div>

      {/* Bottom caption */}
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-light-green/80">
            Inside the plant
          </p>
          <p className="mt-1 font-serif text-lg leading-tight">
            Closed-loop recycling, certified.
          </p>
        </div>
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur">
          Move cursor
        </span>
      </div>
    </motion.div>
  );
}
