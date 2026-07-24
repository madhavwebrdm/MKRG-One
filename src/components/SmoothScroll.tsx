"use client";

import "lenis/dist/lenis.css";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null);
  const pathname = usePathname();
  const isFirstRoute = useRef(true);

  // Single clock: GSAP's ticker drives Lenis (autoRaf is off), and every Lenis
  // scroll frame nudges ScrollTrigger so its triggers track the smoothed position.
  useEffect(() => {
    const onScroll = () => ScrollTrigger.update();

    function raf(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    const lenis = lenisRef.current?.lenis;
    lenis?.on("scroll", onScroll);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis?.off("scroll", onScroll);
      gsap.ticker.remove(raf);
    };
  }, []);

  // The Lenis instance lives in the persistent layout, so a client-side route change
  // swaps the page content underneath it without recreating it. Left alone, Lenis
  // keeps the previous page's scroll offset and cached height and clamps against that
  // stale limit, which reads as "scroll is frozen until you reload". Resync it to the
  // top of the fresh page and re-measure once the new DOM has painted.
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    if (isFirstRoute.current) {
      isFirstRoute.current = false;
    } else {
      lenis.scrollTo(0, { immediate: true, force: true });
    }

    const id = requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ lerp: 0.1, smoothWheel: true, syncTouch: false }}
    >
      {children}
    </ReactLenis>
  );
}
