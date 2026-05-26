"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CalendarDays,
  FileText,
  MapPin,
  Mic,
  Newspaper,
  Play,
  Video,
} from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import mediaHero from "@/Images/media hero.jpeg";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import TiltCard from "./TiltCard";

type Article = {
  topic: string;
  title: string;
  source: string;
  date: string;
  href: string;
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

type NewsItem = {
  kind: "Certification" | "Expansion" | "CSR" | "Milestone";
  title: string;
  body: string;
  date: string;
  href: string;
};

const COMPANY_NEWS: NewsItem[] = [
  {
    kind: "Certification",
    title: "MKRG renews ISO 14001 across all operating plants",
    body: "Re-certification confirms continued conformance to international environmental management standards.",
    date: "2026-04-10",
    href: "#",
  },
  {
    kind: "Expansion",
    title: "Mehsana Recycle2X plant adds 120K tpa zinc capacity",
    body: "New leaching and electrolyzation line commissioned, lifting zinc throughput by ~35%.",
    date: "2026-03-02",
    href: "#",
  },
  {
    kind: "CSR",
    title: "Mehsana school infrastructure program reaches 12,000 students",
    body: "Year four of MKRG's school CSR initiative completes upgrades across 24 schools in the plant catchment.",
    date: "2026-02-15",
    href: "#",
  },
  {
    kind: "Milestone",
    title: "1 million tonnes of steel recycled this financial year",
    body: "An eight-figure milestone for the group — and an eight-figure amount of virgin ore left in the ground.",
    date: "2026-01-05",
    href: "#",
  },
];

type PressRelease = {
  title: string;
  summary: string;
  date: string;
  href: string;
};

const PRESS_RELEASES: PressRelease[] = [
  {
    title: "Madhav KRG Group expands recycled steel capacity at Mehsana plant",
    summary:
      "Formal announcement of the new EAC line, projected to add 250K tpa of structural-grade recycled steel.",
    date: "2026-04-22",
    href: "#",
  },
  {
    title: "MKRG signs MOU with municipal authorities for hazardous-waste pickup",
    summary:
      "Public-private partnership formalises hazardous-waste collection across three districts in Gujarat.",
    date: "2026-03-11",
    href: "#",
  },
  {
    title: "Recycle2X process whitepaper released for industry partners",
    summary:
      "Technical whitepaper detailing input streams, conversion ratios and APCD performance is now available.",
    date: "2026-02-08",
    href: "#",
  },
  {
    title: "MKRG announces 75% renewable energy target by 2030",
    summary:
      "Group-wide commitment to lift renewable-energy share from the current 42% to 75% within five years.",
    date: "2026-01-18",
    href: "#",
  },
];

type VideoItem = {
  title: string;
  duration: string;
  kind: "Plant tour" | "Process" | "Interview";
  href: string;
  imageIndex: number;
};

const VIDEOS: VideoItem[] = [
  {
    title: "Inside the Mehsana Recycle2X plant — a 4-minute walkthrough",
    duration: "4:12",
    kind: "Plant tour",
    href: "#",
    imageIndex: 0,
  },
  {
    title: "Scrap to Steel: every step of the EAC line, on camera",
    duration: "7:45",
    kind: "Process",
    href: "#",
    imageIndex: 1,
  },
  {
    title: "Founder Q&A: building India's green infrastructure",
    duration: "11:08",
    kind: "Interview",
    href: "#",
    imageIndex: 2,
  },
];

type EventItem = {
  title: string;
  location: string;
  date: string;
  kind: "Exhibition" | "Conference" | "Community";
  href: string;
  imageIndex: number;
};

const EVENTS: EventItem[] = [
  {
    title: "India Sustainability Summit 2026",
    location: "Mumbai · Bombay Exhibition Centre",
    date: "2026-09-14",
    kind: "Conference",
    href: "#",
    imageIndex: 0,
  },
  {
    title: "International Recycling Expo",
    location: "Bengaluru · BIEC",
    date: "2026-07-22",
    kind: "Exhibition",
    href: "#",
    imageIndex: 1,
  },
  {
    title: "Mehsana Community Green Day",
    location: "Mehsana · MKRG plant grounds",
    date: "2026-06-05",
    kind: "Community",
    href: "#",
    imageIndex: 2,
  },
];

const SUBPAGES = [
  {
    title: "Press Releases",
    body: "The full archive of formal announcements — for journalists, analysts and partners.",
    href: "/media/press-releases",
    icon: FileText,
  },
  {
    title: "Videos",
    body: "Plant walkthroughs, process explainers and leadership interviews on demand.",
    href: "/media/videos",
    icon: Video,
  },
  {
    title: "Events",
    body: "Industry conferences, exhibitions and community programs where MKRG shows up.",
    href: "/media/events",
    icon: CalendarDays,
  },
];

function formatDate(input: string) {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const NEWS_ICON: Record<NewsItem["kind"], typeof Newspaper> = {
  Certification: FileText,
  Expansion: ArrowUpRight,
  CSR: Mic,
  Milestone: ArrowUpRight,
};

const EVENT_ICON: Record<EventItem["kind"], typeof Calendar> = {
  Exhibition: CalendarDays,
  Conference: Mic,
  Community: Calendar,
};

const VIDEO_ICON: Record<VideoItem["kind"], typeof Play> = {
  "Plant tour": Video,
  Process: Play,
  Interview: Mic,
};

export default function MediaPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Media"
        heading="Press, plant tours and the conversations shaping circular industry."
        intro="Where Madhav KRG Group shows up — on the page, on camera and on the ground at the forums where recycling policy and practice are being rewritten."
        imageUrl={mediaHero}
        imageAlt="MKRG in the media"
      />

      {/* Industry articles */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Industry articles
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                Recycling, sustainability policy and the circular economy.
              </AnimatedHeading>
            </div>
            <p className="max-w-md text-base leading-relaxed text-body sm:text-lg">
              Independent coverage and analysis that frames the work MKRG and the wider
              industry are doing.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ARTICLES.map((a, i) => (
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
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-beige ring-1 ring-deep-green/10 transition-colors hover:ring-deep-green/30"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      <Image
                        src={
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
                        <Newspaper className="h-3.5 w-3.5" />
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

      {/* Company news */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Company news
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                Certifications, expansions, CSR and milestones.
              </AnimatedHeading>
            </div>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {COMPANY_NEWS.map((n, i) => {
              const Icon = NEWS_ICON[n.kind];
              return (
                <motion.li
                  key={n.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group overflow-hidden rounded-2xl bg-white ring-1 ring-deep-green/10"
                >
                  <Link href={n.href} className="grid grid-cols-1 sm:grid-cols-12">
                    <div className="relative aspect-[5/3] w-full overflow-hidden sm:col-span-5 sm:aspect-auto">
                      <Image
                        src={
                          PLACEHOLDER_IMAGES.mediaCompanyNews[
                            i % PLACEHOLDER_IMAGES.mediaCompanyNews.length
                          ]
                        }
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-7 sm:col-span-7">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-medium uppercase tracking-wider text-accent">
                          <Icon className="h-3.5 w-3.5" />
                          {n.kind}
                        </span>
                        <span className="text-muted">{formatDate(n.date)}</span>
                      </div>
                      <h3 className="font-serif text-xl leading-snug text-ink group-hover:text-deep-green">
                        {n.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-body">{n.body}</p>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Press releases */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Press releases
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                Formal announcements for the media.
              </AnimatedHeading>
              <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
                Journalists, analysts and partners — every release is here, in
                chronological order, with full PDFs available on request.
              </p>
            </div>
            <Link
              href="/media/press-releases"
              className="inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
            >
              View full archive
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-12 divide-y divide-deep-green/10 rounded-2xl border border-deep-green/15 bg-beige/40">
            {PRESS_RELEASES.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={p.href}
                  className="group flex flex-col gap-2 p-6 transition-colors hover:bg-white sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-8"
                >
                  <div className="flex flex-1 items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <FileText className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">
                        {formatDate(p.date)}
                      </p>
                      <h3 className="mt-2 font-serif text-xl leading-snug text-ink group-hover:text-deep-green">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="hidden h-5 w-5 shrink-0 self-center text-accent transition-transform group-hover:translate-x-1 sm:block" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-deep-green py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-white/80">
                Videos
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Plant tours, process walkthroughs and interviews.
              </AnimatedHeading>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Recycle2X explained in minutes, not pitches. Watch a plant tour, follow a
                process line or sit in on a leadership interview.
              </p>
            </div>
            <Link
              href="/media/videos"
              className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              All videos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {VIDEOS.map((v, i) => {
              const KindIcon = VIDEO_ICON[v.kind];
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
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-deep-green/40 ring-1 ring-white/10 transition-colors hover:ring-white/30"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={
                          PLACEHOLDER_IMAGES.mediaVideos[
                            v.imageIndex % PLACEHOLDER_IMAGES.mediaVideos.length
                          ]
                        }
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-deep-green/15 to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                        <KindIcon className="h-3.5 w-3.5" />
                        {v.kind}
                      </div>
                      <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                        {v.duration}
                      </div>
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

      {/* Events */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Events
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                Exhibitions, conferences and community days.
              </AnimatedHeading>
            </div>
            <Link
              href="/media/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
            >
              Full calendar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {EVENTS.map((e, i) => {
              const KindIcon = EVENT_ICON[e.kind];
              return (
                <motion.li
                  key={e.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={e.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-deep-green/10 transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      <Image
                        src={
                          PLACEHOLDER_IMAGES.mediaEvents[
                            e.imageIndex % PLACEHOLDER_IMAGES.mediaEvents.length
                          ]
                        }
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent backdrop-blur">
                        <KindIcon className="h-3.5 w-3.5" />
                        {e.kind}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">
                        {formatDate(e.date)}
                      </p>
                      <h3 className="font-serif text-xl leading-snug text-ink">
                        {e.title}
                      </h3>
                      <p className="mt-auto inline-flex items-center gap-2 text-sm text-body">
                        <MapPin className="h-4 w-4 text-accent" />
                        {e.location}
                      </p>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Sub-pages nav */}
      <section className="bg-gradient-to-b from-[#F0FCF5] via-[#D5F7E4] to-[#A8F0C6] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-black">
              Go deeper
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
              Media, in three archives.
            </AnimatedHeading>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SUBPAGES.map((s, i) => {
              const Icon = s.icon;
              const img =
                PLACEHOLDER_IMAGES.mediaSubpages[
                  i % PLACEHOLDER_IMAGES.mediaSubpages.length
                ];
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={s.href}
                    data-cursor="grow"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-accent backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-serif text-xl leading-snug text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-body">
                        {s.body}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 group-hover:underline">
                        Open archive
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
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
