"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Factory,
  LifeBuoy,
  Mail,
  MapPin,
  Phone,
  Upload,
} from "lucide-react";

import { PLACEHOLDER_IMAGES } from "@/lib/placeholderImages";
import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./SocialIcons";

const PRODUCT_OPTIONS = ["TMT", "PIPE", "COIL", "ZINC", "LEAD"] as const;
type ProductOption = (typeof PRODUCT_OPTIONS)[number];

const OFFICES = [
  {
    label: "Registered office",
    icon: Building2,
    lines: [
      "Madhav KRG Group",
      "1002-3 Agarwal Millennium Tower",
      "Netaji Subhash Place",
      "New Delhi 110034",
      "India",
    ],
  },
  {
    label: "Corporate office",
    icon: Briefcase,
    lines: [
      "Level 1, Celebration Bazaar",
      "GT Road, Khanna",
      "Punjab 141401",
      "India",
    ],
  },
  {
    label: "Work office",
    icon: Factory,
    lines: [
      "Vill. Akalgarh, Amloh-Bhadson Road",
      "Near Toll Plaza, Dist Patiala",
      "Punjab 147203",
      "India",
    ],
  },
];

const CONTACT_LINES = [
  {
    label: "Corporate & registered office",
    icon: Phone,
    value: "+91-1765-500075",
    href: "tel:+911765500075",
  },
  {
    label: "Work office",
    icon: Phone,
    value: "+91-1765-282334",
    href: "tel:+911765282334",
  },
  {
    label: "Helpline",
    icon: LifeBuoy,
    value: "+91 97799-15000",
    href: "tel:+919779915000",
  },
  {
    label: "General email",
    icon: Mail,
    value: "info@madhavkrggroup.com",
    href: "mailto:info@madhavkrggroup.com",
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/madhavkrggroup/",
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/JYOTI_offcial",
  },
  {
    label: "YouTube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com/channel/UCbI08WxJFsWYc9hQ2oSrpfQ",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/jyotiofficialindia/",
  },
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/JyotiOfficialIndia",
  },
];

const MAP_EMBED =
  "https://www.google.com/maps?q=Akalgarh+Amloh-Bhadson+Road+Patiala+147203&output=embed";

function EnquiryForm() {
  const [product, setProduct] = useState<ProductOption | "">("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setProduct("");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-deep-green/15 bg-white p-8 sm:p-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-2xl leading-snug text-ink">
          Thanks we&apos;ve got your enquiry.
        </h3>
        <p className="text-sm leading-relaxed text-body">
          A member of the Madhav KRG team will reply within one business day. For
          urgent calls, the sales line is open between 9 AM and 7 PM IST.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-deep-green underline-offset-4 hover:underline"
        >
          Send another enquiry
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-deep-green/15 bg-white p-7 sm:p-9"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required />
        <Field id="company" label="Company" />
        <Field id="phone" label="Phone" type="tel" required />
        <Field id="email" label="Email" type="email" required />
      </div>

      <div className="mt-6">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-deep-green/20 bg-beige/40 px-4 py-3 text-sm text-ink shadow-inner focus:border-deep-green focus:outline-none focus:ring-2 focus:ring-deep-green/30"
        />
      </div>

      <div className="mt-6">
        <Label>Product interest</Label>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {PRODUCT_OPTIONS.map((opt) => {
            const active = product === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setProduct(active ? "" : opt)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "border-deep-green bg-deep-green text-white"
                    : "border-deep-green/20 bg-white text-ink hover:border-deep-green/40"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="product" value={product} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep-green px-6 py-3 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function CareersForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setFileName(null);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-deep-green/15 bg-white p-8 sm:p-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-2xl leading-snug text-ink">
          CV received thank you.
        </h3>
        <p className="text-sm leading-relaxed text-body">
          Our HR team will review and reach out if there&apos;s a match. For role
          enquiries you can also write to{" "}
          <Link
            href="mailto:info@madhavkrggroup.com"
            className="text-deep-green underline-offset-4 hover:underline"
          >
            info@madhavkrggroup.com
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-deep-green/15 bg-white p-7 sm:p-9"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="careersName" name="name" label="Full name" required />
        <Field id="careersEmail" name="email" label="Email" type="email" required />
        <Field id="careersPhone" name="phone" label="Phone" type="tel" />
        <Field id="careersRole" name="role" label="Role you're applying for" />
      </div>

      <div className="mt-6">
        <Label htmlFor="careersMessage">Cover note (optional)</Label>
        <textarea
          id="careersMessage"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-deep-green/20 bg-beige/40 px-4 py-3 text-sm text-ink shadow-inner focus:border-deep-green focus:outline-none focus:ring-2 focus:ring-deep-green/30"
        />
      </div>

      <div className="mt-6">
        <Label>CV (PDF, up to 5 MB)</Label>
        <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-deep-green/30 bg-beige/40 px-4 py-3 text-sm text-body transition-colors hover:border-deep-green">
          <Upload className="h-4 w-4 text-accent" />
          <span className="truncate">
            {fileName ? fileName : "Choose a PDF to upload"}
          </span>
          <input
            type="file"
            name="cv"
            accept="application/pdf"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            className="hidden"
            required
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep-green px-6 py-3 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Submit application"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-medium uppercase tracking-wider text-accent"
    >
      {children}
    </label>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
}: {
  id: string;
  name?: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </Label>
      <input
        id={id}
        name={name ?? id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-deep-green/20 bg-beige/40 px-4 py-3 text-sm text-ink shadow-inner focus:border-deep-green focus:outline-none focus:ring-2 focus:ring-deep-green/30"
      />
    </div>
  );
}

export default function ContactPageContent() {
  return (
    <main className="bg-beige">
      <PageHero
        eyebrow="Contact"
        heading="Talk to the team behind the loop."
        intro="Sales, technical queries, partnerships, audit requests or careers every enquiry reaches a person. Most replies land within one business day."
        imageUrl={PLACEHOLDER_IMAGES.contactHero}
        imageAlt="MKRG office"
      />

      {/* Enquiry form + contact details */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Enquiry
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                Send us a message.
              </AnimatedHeading>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-body">
                Pick a product interest, drop a line and we&apos;ll route your enquiry
                to the right person.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Reach us
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                Offices &amp; lines.
              </AnimatedHeading>

              <ul className="mt-8 space-y-5">
                {OFFICES.map((o) => {
                  const Icon = o.icon;
                  return (
                    <li
                      key={o.label}
                      className="flex gap-4 rounded-2xl border border-deep-green/15 bg-beige/40 p-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-accent">
                          {o.label}
                        </p>
                        <address className="mt-1 not-italic text-sm leading-relaxed text-body">
                          {o.lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </address>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <ul className="mt-6 divide-y divide-deep-green/10 rounded-2xl border border-deep-green/15 bg-beige/40">
                {CONTACT_LINES.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.label} className="flex items-center gap-4 p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-accent">
                          {c.label}
                        </p>
                        <Link
                          href={c.href}
                          className="block truncate text-sm font-medium text-ink hover:text-deep-green"
                        >
                          {c.value}
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  Follow MKRG
                </p>
                <ul className="mt-3 flex flex-wrap gap-2.5">
                  {SOCIALS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.label}>
                        <Link
                          href={s.href}
                          aria-label={s.label}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 text-accent transition-colors hover:bg-accent hover:text-white"
                        >
                          <Icon className="h-4 w-4" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Find us
            </span>
            <AnimatedHeading className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
              Offices &amp; plant locations.
            </AnimatedHeading>
            <p className="max-w-2xl text-base leading-relaxed text-body sm:text-lg">
              Visits are by appointment please write ahead so we can arrange a plant
              walk-through or office meeting.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-deep-green/10 lg:col-span-8 lg:aspect-auto">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madhav KRG location map"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-4 lg:col-span-4">
              <div className="flex gap-4 rounded-2xl border border-deep-green/15 bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    Coordinates
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    New Delhi, Khanna and Patiala, the registered office,
                    corporate HQ and the Akalgarh plant.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={PLACEHOLDER_IMAGES.contactPlant}
                  alt="Plant exterior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/55 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-gradient-to-b from-[#F0FCF5] via-[#D5F7E4] to-[#A8F0C6] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-black">
                Careers
              </span>
              <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
                Work where the loop closes.
              </AnimatedHeading>
              <p className="mt-5 text-base leading-relaxed text-black/80 sm:text-lg">
                MKRG is hiring across plant operations, engineering, sales, finance and
                EHS. Send your CV and a short note we read every application.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="mailto:info@madhavkrggroup.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  info@madhavkrggroup.com
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

