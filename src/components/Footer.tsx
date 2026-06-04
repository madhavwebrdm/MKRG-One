import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";
import {
  LinkedinIcon as Linkedin,
  TwitterIcon as Twitter,
  YoutubeIcon as Youtube,
  InstagramIcon as Instagram,
  FacebookIcon as Facebook,
} from "./SocialIcons";

type Props = {
  siteTitle?: string;
  tagline?: string;
  legalName?: string | null;
  cin?: string | null;
  addressLines?: string[] | null;
  contact?: {
    salesEmail?: string | null;
    generalEmail?: string | null;
    hrEmail?: string | null;
    phone?: string | null;
  } | null;
  socials?: {
    linkedin?: string | null;
    twitter?: string | null;
    youtube?: string | null;
    instagram?: string | null;
    facebook?: string | null;
  } | null;
};

const NAV_GROUPS = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Certifications", href: "/certifications" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "What We Do",
    items: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "CSR", href: "/csr" },
      { label: "EHS", href: "/ehs" },
      { label: "Processes", href: "/processes" },
      { label: "Materials", href: "/processes#materials" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Press", href: "/media#press" },
      { label: "Videos", href: "/media#videos" },
      { label: "Events", href: "/media#events" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer({
  siteTitle = "Madhav KRG Group",
  tagline = "Waste is a Resource, Not a Problem.",
  legalName,
  cin,
  addressLines,
  contact,
  socials,
}: Props) {
  const socialLinks = [
    { url: socials?.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { url: socials?.twitter, Icon: Twitter, label: "X / Twitter" },
    { url: socials?.youtube, Icon: Youtube, label: "YouTube" },
    { url: socials?.instagram, Icon: Instagram, label: "Instagram" },
    { url: socials?.facebook, Icon: Facebook, label: "Facebook" },
  ].filter((s) => s.url);

  return (
    <footer className="relative isolate overflow-hidden">
      {/* ── Background: lush forest image + brand-green tint ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&fit=crop&crop=center"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden
        />
        {/* Deep green brand overlay */}
        <div className="absolute inset-0 bg-deep-green/85" />
        {/* Bottom vignette so bottom bar reads cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />
      </div>

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Brand + contact */}
          <div className="lg:col-span-3">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/mkrg-logo.png"
                  alt={siteTitle}
                  width={150}
                  height={150}
                  className="h-auto w-[100px] sm:w-[150px]"
                />
              </Link>
              <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-white/65">
                {tagline}
              </p>
            </div>

            {addressLines && addressLines.length > 0 && (
              <address className="mt-5 not-italic text-xs leading-relaxed text-white/45">
                {addressLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </address>
            )}

            {(contact?.phone || contact?.generalEmail || contact?.salesEmail) && (
              <ul className="mt-4 space-y-1.5 text-xs text-white/65">
                {contact?.phone && (
                  <li>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden />
                      {contact.phone}
                    </a>
                  </li>
                )}
                {contact?.generalEmail && (
                  <li>
                    <a
                      href={`mailto:${contact.generalEmail}`}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden />
                      {contact.generalEmail}
                    </a>
                  </li>
                )}
                {contact?.salesEmail && contact.salesEmail !== contact?.generalEmail && (
                  <li>
                    <a
                      href={`mailto:${contact.salesEmail}`}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden />
                      {contact.salesEmail}
                      <span className="text-white/35">· Sales</span>
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Nav groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/45">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Connect + CTA */}
          <div className="lg:col-span-3">
            {socialLinks.length > 0 && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/45">
                  Connect
                </p>
                <ul className="mt-4 flex flex-wrap items-center gap-1.5">
                  {socialLinks.map(({ url, Icon, label }) => (
                    <li key={label}>
                      <a
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white hover:text-white"
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-sm">
              <p className="font-serif text-lg leading-snug text-white">
                Let&apos;s Build a{" "}
                <span className="text-light-green">Greener India.</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                Reach out to explore partnership, sourcing, or sustainability goals.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-deep-green transition-colors hover:bg-light-green"
              >
                Get in touch
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10 bg-black/25 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-white/40 sm:flex-row sm:px-10 lg:px-16">
          <span>
            © {new Date().getFullYear()} {legalName || siteTitle}.
            {cin && (
              <> &nbsp;·&nbsp; CIN: <span className="text-white/60">{cin}</span></>
            )}
          </span>
          <span className="hidden sm:block text-white/15">|</span>
          <span className="text-white/30">
            Together for a greener India.
          </span>
          <nav className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
