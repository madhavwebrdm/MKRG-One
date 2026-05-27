import Link from "next/link";
import { Mail, Phone } from "lucide-react";
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
    title: "What we do",
    items: [
      { label: "Sustainability", href: "/sustainability" },
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
    <footer className="relative isolate overflow-hidden border-t border-deep-green/15 bg-beige">
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Link href="/" className="font-serif text-2xl tracking-tight text-ink">
              MKRG<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-sm font-serif text-xl leading-snug text-ink">
              {tagline}
            </p>
            {addressLines && addressLines.length > 0 && (
              <address className="mt-6 not-italic text-sm leading-relaxed text-body">
                {addressLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </address>
            )}

            {(contact?.phone || contact?.generalEmail || contact?.salesEmail) && (
              <ul className="mt-6 space-y-2 text-sm text-body">
                {contact?.phone && (
                  <li>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                      {contact.phone}
                    </a>
                  </li>
                )}
                {contact?.generalEmail && (
                  <li>
                    <a
                      href={`mailto:${contact.generalEmail}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                    >
                      <Mail className="h-4 w-4" aria-hidden />
                      {contact.generalEmail}
                    </a>
                  </li>
                )}
                {contact?.salesEmail && contact.salesEmail !== contact?.generalEmail && (
                  <li>
                    <a
                      href={`mailto:${contact.salesEmail}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                    >
                      <Mail className="h-4 w-4" aria-hidden />
                      {contact.salesEmail}
                      <span className="text-xs text-muted">· Sales</span>
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-7">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-body transition-colors hover:text-accent"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-deep-green/15 bg-beige/85 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
          <div className="text-xs text-muted">
            © {new Date().getFullYear()} {legalName || siteTitle}.
            {cin && (
              <>
                {" · CIN: "}
                <span className="text-body">{cin}</span>
              </>
            )}
          </div>

          {socialLinks.length > 0 && (
            <ul className="flex items-center gap-1">
              {socialLinks.map(({ url, Icon, label }) => (
                <li key={label}>
                  <a
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-body transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
