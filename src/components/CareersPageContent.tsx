"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";

import AnimatedHeading from "./AnimatedHeading";
import PageHero from "./PageHero";

type Str = string | null | undefined;

const str = (v: Str, fallback: string): string => (v && v.trim() ? v : fallback);

export type CareersPageData = {
  hero?: {
    eyebrow?: Str;
    heading?: Str;
    intro?: Str;
    imageUrl?: Str;
    imageAlt?: Str;
    videoUrl?: Str;
  } | null;
  applySection?: {
    eyebrow?: Str;
    heading?: Str;
    nameLabel?: Str;
    emailLabel?: Str;
    phoneLabel?: Str;
    roleLabel?: Str;
    coverNoteLabel?: Str;
    cvLabel?: Str;
    cvPlaceholder?: Str;
    submitLabel?: Str;
    sendingLabel?: Str;
    successHeading?: Str;
    successMessage?: Str;
    applyEmail?: Str;
  } | null;
} | null;

type FormCopy = {
  name: string;
  email: string;
  phone: string;
  role: string;
  coverNote: string;
  cv: string;
  cvPlaceholder: string;
  submit: string;
  sending: string;
  successHeading: string;
  successMessage: string;
  applyEmail: string;
};

function CareersForm({ copy }: { copy: FormCopy }) {
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
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-forest/15 bg-white p-8 sm:p-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-2xl leading-snug text-ink">
          {copy.successHeading}
        </h3>
        <p className="text-sm leading-relaxed text-body">
          {copy.successMessage}{" "}
          <Link
            href={`mailto:${copy.applyEmail}`}
            className="text-forest underline-offset-4 hover:underline"
          >
            {copy.applyEmail}
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-forest/15 bg-white p-7 sm:p-9"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="careersName" name="name" label={copy.name} required />
        <Field id="careersEmail" name="email" label={copy.email} type="email" required />
        <Field id="careersPhone" name="phone" label={copy.phone} type="tel" />
        <Field id="careersRole" name="role" label={copy.role} />
      </div>

      <div className="mt-6">
        <Label htmlFor="careersMessage">{copy.coverNote}</Label>
        <textarea
          id="careersMessage"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-forest/20 bg-mint/40 px-4 py-3 text-sm text-ink shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30"
        />
      </div>

      <div className="mt-6">
        <Label>{copy.cv}</Label>
        <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-forest/30 bg-mint/40 px-4 py-3 text-sm text-body transition-colors hover:border-forest">
          <Upload className="h-4 w-4 text-accent" />
          <span className="truncate">
            {fileName ? fileName : copy.cvPlaceholder}
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
        {status === "sending" ? copy.sending : copy.submit}
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
        className="mt-2 w-full rounded-xl border border-forest/20 bg-mint/40 px-4 py-3 text-sm text-ink shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/30"
      />
    </div>
  );
}

export default function CareersPageContent({ data }: { data?: CareersPageData }) {
  const hero = data?.hero;
  const apply = data?.applySection;

  const copy: FormCopy = {
    name: str(apply?.nameLabel, "Full name"),
    email: str(apply?.emailLabel, "Email"),
    phone: str(apply?.phoneLabel, "Phone"),
    role: str(apply?.roleLabel, "Role you're applying for"),
    coverNote: str(apply?.coverNoteLabel, "Cover note (optional)"),
    cv: str(apply?.cvLabel, "CV (PDF, up to 5 MB)"),
    cvPlaceholder: str(apply?.cvPlaceholder, "Choose a PDF to upload"),
    submit: str(apply?.submitLabel, "Submit application"),
    sending: str(apply?.sendingLabel, "Submitting…"),
    successHeading: str(apply?.successHeading, "CV received thank you."),
    successMessage: str(
      apply?.successMessage,
      "Our HR team will review and reach out if there's a match. For role enquiries you can also write to",
    ),
    applyEmail: str(apply?.applyEmail, "info@madhavkrggroup.com"),
  };

  return (
    <main className="bg-mint">
      <PageHero
        eyebrow={str(hero?.eyebrow, "Careers")}
        heading={str(hero?.heading, "Work where the loop closes.")}
        intro={str(
          hero?.intro,
          "MKESL is hiring across plant operations, engineering, sales, finance and EHS. Send your CV and a short note we read every application.",
        )}
        imageUrl={hero?.imageUrl || "/images/career.jpg"}
        imageAlt={str(hero?.imageAlt, "Save plants greener planet")}
        videoUrl={hero?.videoUrl || undefined}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {str(apply?.eyebrow, "Apply")}
            </span>
            <AnimatedHeading className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
              {str(apply?.heading, "Send us your CV.")}
            </AnimatedHeading>
          </div>
          <div className="mt-10">
            <CareersForm copy={copy} />
          </div>
        </div>
      </section>
    </main>
  );
}
