"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import AnimatedHeading from "./AnimatedHeading";

const FADE_MS = 1500;

type VideoClip = { src: string; duration: number };

type Props = {
  eyebrow: string;
  heading: string;
  intro?: string;
  imageUrl: string | StaticImageData;
  imageAlt?: string;
  videoUrl?: string;
  videos?: VideoClip[];
  videoPoster?: string;
  align?: "left" | "center";
};

function VideoPlaylist({ clips, poster }: { clips: VideoClip[]; poster?: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const video = videoRefs.current[activeIdx];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [activeIdx]);

  useEffect(() => {
    const { duration } = clips[activeIdx];
    const timer = setTimeout(() => {
      setActiveIdx((i) => (i + 1) % clips.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [activeIdx, clips]);

  return (
    <>
      {clips.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => { videoRefs.current[i] = el; }}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          poster={i === 0 ? poster : undefined}
          {...(i === 0 ? { autoPlay: true } : {})}
          style={{
            opacity: i === activeIdx ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        >
          <source src={clip.src} type="video/mp4" />
        </video>
      ))}
    </>
  );
}

export default function PageHero({
  eyebrow,
  heading,
  intro,
  imageUrl,
  imageAlt = "",
  videoUrl,
  videos,
  videoPoster,
  align = "left",
}: Props) {
  const isCenter = align === "center";
  const headingMaxWidth = heading.includes("\n") ? "max-w-6xl" : "max-w-4xl";

  const playlist = videos ?? (videoUrl ? [{ src: videoUrl, duration: Infinity }] : null);

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-deep-green sm:min-h-[78vh]">
      {playlist ? (
        playlist.length === 1 ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
          >
            <source src={playlist[0].src} type="video/mp4" />
          </video>
        ) : (
          <VideoPlaylist clips={playlist} poster={videoPoster} />
        )
      ) : (
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-deep-green/35 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,0,0,0.35),transparent)]" />

      <div
        className={`relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:min-h-[78vh] sm:px-10 sm:pb-20 sm:pt-36 lg:px-16 lg:pb-24 lg:pt-40 ${
          isCenter ? "items-center text-center" : ""
        }`}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] text-white/90 backdrop-blur sm:text-xs"
        >
          {eyebrow}
        </motion.span>

        <AnimatedHeading
          as="h1"
          className={`mt-5 font-serif text-[2.25rem] leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[clamp(3rem,5vw,4.75rem)] ${headingMaxWidth} text-balance`}
        >
          {heading}
        </AnimatedHeading>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-5 text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg ${
              isCenter ? "max-w-2xl" : "max-w-2xl"
            }`}
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
