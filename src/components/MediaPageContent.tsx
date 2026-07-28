"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import TiltCard from "./TiltCard";

const str = (v: string | null | undefined, fallback: string): string =>
  v && v.trim() ? v : fallback;

type Article = {
  topic: string;
  title: string;
  source: string;
  date: string;
  href: string;
  imageUrl?: string;
};

const ARTICLES: Article[] = [
  {
    topic: "Recycling innovation",
    title: "How India's recyclers are rebuilding steel without rebuilding the planet",
    source: "Economic Times",
    date: "2026-03-18",
    href: "#",
  },
  {
    topic: "Sustainability policy",
    title: "Inside the new EPR framework and what it means for hazardous-waste handlers",
    source: "Mint",
    date: "2026-02-04",
    href: "#",
  },
  {
    topic: "Circular economy",
    title: "From scrap to spec: the case for closed-loop steel in Indian infrastructure",
    source: "Business Standard",
    date: "2026-01-22",
    href: "#",
  },
];


type VideoItem = {
  title: string;
  duration: string;
  kind: string;
  href: string;
  thumbnail: string;
};

const VIDEOS: VideoItem[] = [
  {
    title: "Inside MKESPL: the full recycling process, start to finish",
    duration: "3:59",
    kind: "Process",
    href: "/videos/mkespl-process-video.mp4",
    thumbnail: "/images/media/mkespl-process-thumb.jpg",
  },
];

type ItemsSection<T> = {
  eyebrow?: string | null;
  heading?: string | null;
  items?: T[] | null;
} | null;

export type MediaPageData = {
  hero?:
    | { eyebrow?: string | null; heading?: string | null; intro?: string | null; imageUrl?: string | null; imageAlt?: string | null }
    | null;
  articlesSection?: ItemsSection<{
    topic?: string | null;
    title?: string | null;
    source?: string | null;
    date?: string | null;
    href?: string | null;
    imageUrl?: string | null;
  }>;
  videosSection?: ItemsSection<{
    title?: string | null;
    duration?: string | null;
    kind?: string | null;
    href?: string | null;
    thumbnailUrl?: string | null;
  }>;
} | null;

function formatDate(input: string) {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function MediaPageContent({ data }: { data?: MediaPageData }) {
  const hero = data?.hero;
  const articlesSection = data?.articlesSection;
  const videosSection = data?.videosSection;

  const articles: Article[] = articlesSection?.items?.length
    ? articlesSection.items.map((a) => ({
        topic: a.topic ?? "",
        title: a.title ?? "",
        source: a.source ?? "",
        date: a.date ?? "",
        href: a.href || "#",
        imageUrl: a.imageUrl ?? undefined,
      }))
    : ARTICLES;

  const videos: VideoItem[] = videosSection?.items?.length
    ? videosSection.items.map((v, i) => {
        const fallback = VIDEOS[i];
        return {
          title: v.title || fallback?.title || "",
          duration: v.duration || fallback?.duration || "",
          kind: v.kind || fallback?.kind || "Process",
          href: v.href || fallback?.href || "#",
          thumbnail:
            v.thumbnailUrl ||
            fallback?.thumbnail ||
            PLACEHOLDER_IMAGES.mediaVideos[i % PLACEHOLDER_IMAGES.mediaVideos.length],
        };
      })
    : VIDEOS;

  return (
    <main className="bg-beige">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Media")}
        heading={str(
          hero?.heading,
          "Press, plant tours and the conversations shaping circular industry.",
        )}
        intro={str(
          hero?.intro,
          "Where Madhav KRG Group shows up on the page, on camera and on the ground at the forums where recycling policy and practice are being rewritten.",
        )}
        imageUrl={hero?.imageUrl || "/images/media-hero.jpeg"}
        imageAlt={str(hero?.imageAlt, "MKRG in the media")}
      />

      {/* Industry articles */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                {str(articlesSection?.eyebrow, "Industry articles")}
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                {str(articlesSection?.heading, "Recycling, sustainability policy and long-term resource use.")}
              </AnimatedHeading>
            </div>
            <p className="max-w-md text-base leading-relaxed text-body sm:text-lg">
              Independent coverage and analysis that frames the work MKRG and the wider
              industry are doing.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="h-full">
                  <Link
                    href={a.href}
                    target={a.href.startsWith("http") ? "_blank" : undefined}
                    rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-beige ring-1 ring-deep-green/10 transition-colors hover:ring-deep-green/30"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      <Image
                        src={
                          a.imageUrl ||
                          PLACEHOLDER_IMAGES.mediaArticles[
                            i % PLACEHOLDER_IMAGES.mediaArticles.length
                          ]
                        }
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                        {a.topic}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <p className="text-xs text-muted">{formatDate(a.date)}</p>
                      <h3 className="font-serif text-xl leading-snug text-ink group-hover:text-deep-green">
                        {a.title}
                      </h3>
                      <p className="mt-auto text-sm font-medium text-body">{a.source}</p>
                    </div>
                  </Link>
                </TiltCard>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-deep-green">
                {str(videosSection?.eyebrow, "Videos")}
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                {str(videosSection?.heading, "Plant tours, process walkthroughs and interviews.")}
              </AnimatedHeading>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
                Recycle2X explained in minutes, not pitches. Watch a plant tour, follow a
                process line or sit in on a leadership interview.
              </p>
            </div>
            <Link
              href="/media/videos"
              className="inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
            >
              All videos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6">
            {videos.map((v, i) => {
              const isExternal = v.href.startsWith("http");
              return (
                <motion.li
                  key={v.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={v.href}
                    target={isExternal || v.href.endsWith(".mp4") ? "_blank" : undefined}
                    rel={isExternal || v.href.endsWith(".mp4") ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-deep-green ring-1 ring-deep-green/20 transition-colors hover:ring-deep-green/40"
                  >
                    <div className="relative aspect-[21/9] w-full overflow-hidden">
                      <Image
                        src={v.thumbnail}
                        alt=""
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-deep-green/15 to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                        {v.kind}
                      </div>
                      {v.duration && (
                        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                          {v.duration}
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-accent transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 fill-current" />
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl leading-snug text-white">
                        {v.title}
                      </h3>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

    </main>
  );
}
