# Being Digitals — Final Conversion & Performance Pass

This build keeps the approved Apple-inspired visual direction and focuses on conversion, performance, trust and polish.

## Implemented

- Premium homepage hero retained and refined with a clearer multi-discipline focal composition.
- Homepage motion restrained to three major storytelling moments: hero, product story and signature ecosystem interaction.
- New signature Being Digitals scroll interaction connects Web, Software, Brand and Growth into one visual system.
- Google Reviews / trust section upgraded with rating summary, featured-review count, project proof, five review cards, slider controls and stronger CTAs.
- Homepage work section now uses real case-study data and communicates Problem + Outcome, not just screenshots.
- Portfolio and Case Studies pages now lead with problem, solution and outcome.
- Every service has a contextual final CTA and service-specific conversion message.
- Shared primary / secondary CTA styling and subtle arrow/card micro-interactions added.
- Footer upgraded with Services, Company, Insights, contact details and optional real social links.
- Mobile fallbacks preserved for sticky storytelling; mobile scroll distances were reduced and rails remain swipeable.
- Review videos use `preload="none"`; large below-the-fold sections use content visibility where appropriate.
- Hero image loading priorities refined so focal imagery receives priority without marking every decorative image as critical.
- Next image output supports AVIF/WebP with long image cache TTL.
- GA4 support added through `NEXT_PUBLIC_GA_ID` using `next/script` after interaction.
- Google Search Console verification support added through `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- Site-wide Organization, WebSite and ProfessionalService JSON-LD added.
- Manifest added.
- Sitemap expanded with `/services`, `/pricing` and individual case-study URLs.
- Duplicate brand suffixes in page metadata titles cleaned up.

## Optional production environment values

Copy `.env.example` to `.env.local` locally or configure these values in Hostinger / production environment:

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`

## Google review data note

The UI intentionally labels the count as **featured client reviews**. It uses the website's current local review dataset rather than inventing a live Google Business review count. A live Google review source can be wired later if the exact Google Business Profile integration is available.

## QA

- TypeScript semantic check: PASS (`tsc6 --noEmit`)
- Local import references: 0 missing
- Public image/video/resource references: 0 missing
- Static internal route references: 0 broken
- Full Next production build was attempted. The isolated Linux environment cannot download `@next/swc-linux-x64-gnu` because registry network access is blocked. This is an environment binary limitation, not a TypeScript/source error.
