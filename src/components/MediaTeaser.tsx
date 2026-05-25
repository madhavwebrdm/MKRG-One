"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper, Play, Calendar } from "lucide-react";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import TiltCard from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

type Item = {
  kind?: string | null;
  title?: string | null;
  source?: string | null;
  date?: string | null;
  href?: string | null;
};

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  items?: Item[];
  ctaLabel?: string;
  ctaHref?: string;
};

const DEFAULTS: Item[] = [
  { kind: "Press", title: "MKRG expands recycled steel capacity in Western India", source: "Business Standard", date: "2025-09-12", href: "#" },
  { kind: "Video", title: "Inside the Recycle2X plant — a 4-minute walkthrough", source: "Plant tour", date: "2025-07-22", href: "#" },
  { kind: "Event", title: "MKRG at India Sustainability Summit 2025", source: "Mumbai · Sept 2025", date: "2025-09-04", href: "#" },
];

const ICONS: Record<string, typeof Newspaper> = {
  Press: Newspaper,
  Video: Play,
  Event: Calendar,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function formatDate(input?: string | null) {
  if (!input) return "";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function MediaTeaser({
  eyebrow = "Media",
  heading = "Latest press, plant tours and events.",
  body = "Where MKRG shows up — on the page, on camera, and on the ground at the conversations shaping circular industry.",
  items = DEFAULTS,
  ctaLabel = "Browse the gallery",
  ctaHref = "/media",
}: Props) {
  return (
    <section className="bg-deep-green py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-white">
              {eyebrow}
            </span>
            <AnimatedHeading className="mt-3 text-balance font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {heading}
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              {body}
            </p>
          </div>
          <motion.div whileHover={{ x: 4 }} className="inline-flex">
            <Link
              href={ctaHref}
              data-cursor="grow"
              className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {items.map((it, i) => {
            const Icon = ICONS[it.kind || "Press"] || Newspaper;
            const img = PLACEHOLDER_IMAGES.mediaItems[i % PLACEHOLDER_IMAGES.mediaItems.length];
            return (
              <motion.li key={`${it.title}-${i}`} variants={item}>
                <TiltCard className="h-full">
                  <a
                    href={it.href || "#"}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-deep-green/40 ring-1 ring-white/10 transition-colors hover:ring-white/30"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-deep-green/15 to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                        {it.kind}
                      </div>
                      {it.kind === "Video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-deep-green transition-transform group-hover:scale-110">
                            <Play className="h-5 w-5 fill-current" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <div className="flex items-center justify-between text-xs text-white/70">
                        {it.date && <span>{formatDate(it.date)}</span>}
                      </div>
                      <h3 className="font-serif text-xl leading-snug text-white group-hover:text-white/80">
                        {it.title}
                      </h3>
                      {it.source && (
                        <p className="mt-auto text-sm text-white/80">{it.source}</p>
                      )}
                    </div>
                  </a>
                </TiltCard>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
