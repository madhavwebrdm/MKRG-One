# MKRG-One

Steel recycling / sustainability website. Next.js 15 + Sanity + Vercel, animated with GSAP and Framer Motion.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** with sustainability palette (forest / cream / amber)
- **GSAP** + `@gsap/react` - hero word-reveal, stat counters, scroll-triggered reveals
- **Framer Motion** - micro-interactions, viewport-triggered grids
- **Lenis** - smooth scroll (synced to GSAP ticker)
- **Sanity v3** + **next-sanity v13** - embedded Studio at `/studio`, Live Content API
- Project ID: `72k8551o`

## Local dev

```bash
npm run dev      # starts on :3000 (or next free port)
npm run build    # production build
npm run lint
```

Open:
- App: http://localhost:3000
- Studio: http://localhost:3000/studio

## Required setup before the Studio works fully

1. **Confirm the dataset name** at https://sanity.io/manage/project/72k8551o - update `NEXT_PUBLIC_SANITY_DATASET` in `.env.local` if it isn't `production`.
2. **Create a Viewer API token** at https://sanity.io/manage/project/72k8551o/api#tokens → paste into `SANITY_API_READ_TOKEN`.
3. **Add CORS origin** at https://sanity.io/manage/project/72k8551o/api → add `http://localhost:3000` (and your Vercel URL later) with credentials allowed.
4. **Set a webhook secret** (any string) in `SANITY_REVALIDATE_SECRET` and on the Sanity webhook (see below).

## Content model

- `siteSettings` - singleton (title, description, logo, nav)
- `page` - generic page with hero + section page-builder (`impactSection`, `contentSection`)
- `post` - blog post / case study
- `impactSection` - heading + intro + stat counter array (used on home)
- `contentSection` - heading + Portable Text body

Create a `page` document with slug `home` to drive the hero + impact stats on `/`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new.
3. Set the same env vars from `.env.local` in Vercel's project settings.
4. After first deploy, add the production domain to **CORS Origins** in Sanity Manage.
5. Add a **Sanity webhook** → `https://YOUR-DOMAIN/api/revalidate/tag` with secret = `SANITY_REVALIDATE_SECRET`; payload should include `{ tags: ["page:home"] }` etc.

## Where the animation lives

- `src/components/Hero.tsx` - GSAP word-reveal timeline + Framer Motion CTAs
- `src/components/ImpactStats.tsx` - GSAP ScrollTrigger counters
- `src/components/ProcessSteps.tsx` - Framer Motion staggered viewport reveal
- `src/components/SmoothScroll.tsx` - Lenis provider synced to GSAP ticker

## TODO (when content / brand assets land)

- Run TypeGen (`npx sanity typegen generate`) once schemas stabilise - replaces the manual `HomeData` type in `src/app/page.tsx`.
- Swap default copy in components with real Sanity-driven values.
- Replace placeholder colors in `globals.css` with real brand palette.
- Add real logo to `/public` and surface from `siteSettings.logo`.

