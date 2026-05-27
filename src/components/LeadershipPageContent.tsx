"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

const MKRG = "https://www.madhavkrggroup.com/images";

type Principal = {
  name: string;
  title: string;
  portrait: string;
  pullQuote: string;
  body: string[];
};

type Member = {
  name: string;
  role: string;
  photo: string;
};

const MD: Principal = {
  name: "Sudhir Goyal",
  title: "Managing Director",
  portrait: `${MKRG}/sudhir-goyal.jpg`,
  pullQuote:
    "Efficient utilization of Energy and Nature's Resources is the mantra of Madhav KRG Group in achieving our set goals.",
  body: [
    "Positive outcomes are the result of following accurate techniques, procedures and systems. At Madhav KRG Group we maintain dedicated systems to ensure compliance with the standards we set for ourselves and the ones our partners hold us to.",
    "The word that guides everything we do is GIVING giving quality to our customers, fair remuneration to our people, dependable services to our partners, robust systems to our operations, and meaningful contribution to society.",
    "This wholehearted commitment has helped us build strong, long-standing relationships with the customers and stakeholders who choose to grow with us.",
  ],
};

const DIRECTOR: Principal = {
  name: "Sanjeev Goyal",
  title: "Director",
  portrait: `${MKRG}/sanjeev-goyal.jpg`,
  pullQuote:
    "Quality assurance, for us, is not a step in the manufacturing line it is part of the culture of our organisation.",
  body: [
    "Madhav KRG Group believes in long-term relationships and in creating an environment in which those relationships can grow. We welcome existing and new vendors with the same impartiality, because equitable economic development is what makes a supply chain durable.",
    "We treat the regulatory policies of the government as business guidelines, not constraints and the work we do is meant to contribute to the socio-economic development of the country.",
    "Quality assurance, for us, is not a step in the manufacturing line. It is part of the culture of our organisation.",
  ],
};

const TEAM: Member[] = [
  { name: "Randhir Singh Rathaur", role: "President Sales & Marketing", photo: `${MKRG}/team/team8.jpg` },
  { name: "Razeev Tondon", role: "General Manager Pipe & Tube", photo: `${MKRG}/team/team1.jpg` },
  { name: "Rishu Garg", role: "General Manager Supply Chain Management", photo: `${MKRG}/team/team3.jpg` },
  { name: "Gulshan Kumar", role: "General Manager QMS", photo: `${MKRG}/team/team4.jpg` },
  { name: "Smrutiranjan Dwibedi", role: "Plant Head TMT", photo: `${MKRG}/team/team5.jpg` },
  { name: "Sanjeev Kumar", role: "Group HR Head", photo: `${MKRG}/team/team9.jpg` },
  { name: "Shaikh Sabiruddin", role: "Head HRC Plant", photo: `${MKRG}/team/team7.jpg` },
];

export default function LeadershipPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Leadership"
        heading="The people behind every tonne we recycle."
        intro="Madhav KRG Group is led by operators, not bystanders. The people on this page have been on the shop floor, in the audit room and in the field often all in the same week."
        imageUrl={`${MKRG}/team.jpg`}
        imageAlt="Madhav KRG Group leadership team"
      />

      {/* MD MESSAGE */}
      <PrincipalSection principal={MD} side="left" />

      {/* PULL QUOTE mission */}
      <section
        className="relative isolate overflow-hidden bg-deep-green py-24 text-white sm:py-32"
        style={{
          backgroundImage: `url(${PLACEHOLDER_IMAGES.sustPillars[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep-green/85 via-deep-green/80 to-deep-green/90" />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <AnimatedHeading className="font-serif text-3xl leading-snug text-white sm:text-4xl lg:text-[2.75rem]">
            {MD.pullQuote}
          </AnimatedHeading>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/80">
            {MD.name}, {MD.title}
          </p>
        </div>
      </section>

      {/* DIRECTOR MESSAGE */}
      <PrincipalSection principal={DIRECTOR} side="right" background="white" />

      {/* OUR MANAGEMENT team grid */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Our Management
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              The team running Madhav KRG, plant to partner.
            </AnimatedHeading>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              From sales and supply chain to plant operations and human resources the
              people who keep every shift, every audit and every dispatch on the same
              standard.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <motion.li
                key={m.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-deep-green/15 bg-white transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-beige">
                  <Image
                    src={m.photo}
                    alt={`${m.name} ${m.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent backdrop-blur">
                    Madhav KRG Group
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-xl leading-snug text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent">
                    {m.role}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div whileHover={{ x: 4 }} className="mt-14 inline-flex">
            <Link
              href="/contact"
              data-cursor="grow"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Get in touch with the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function PrincipalSection({
  principal,
  side,
  background = "white",
}: {
  principal: Principal;
  side: "left" | "right";
  background?: "white" | "beige";
}) {
  const imageFirst = side === "left";

  const ImageCol = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:col-span-5"
      data-cursor="grow"
    >
      <Image
        src={principal.portrait}
        alt={`${principal.name}, ${principal.title}`}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/55 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3.5 backdrop-blur">
        <div>
          <p className="text-sm font-medium text-ink">{principal.name}</p>
          <p className="text-xs text-muted">{principal.title}</p>
        </div>
      </div>
    </motion.div>
  );

  const TextCol = (
    <div className="lg:col-span-7">
      <span className="text-xs uppercase tracking-[0.2em] text-accent">
        {principal.title}&apos;s message
      </span>
      <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
        {`A note from ${principal.name}.`}
      </AnimatedHeading>
      <div className="mt-6 space-y-5">
        {principal.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-3">
        <Link
          href={`mailto:contact@mkrg.in`}
          aria-label={`Email ${principal.name}'s office`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 text-accent transition-colors hover:bg-accent hover:text-white"
        >
          <Mail className="h-4 w-4" />
        </Link>
        <p className="font-serif text-base text-ink">
          {principal.name}
          <span className="ml-2 text-sm uppercase tracking-wider text-accent">
            · {principal.title}
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <section
      className={`${background === "white" ? "bg-white" : "bg-beige"} py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {imageFirst ? (
            <>
              {ImageCol}
              {TextCol}
            </>
          ) : (
            <>
              {TextCol}
              {ImageCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

