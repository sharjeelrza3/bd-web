# Being Digitals — Refined Apple-Concept Experience

A Next.js/TypeScript Being Digitals website focused on visual-first storytelling, premium interaction design, responsive motion and fast delivery.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Latest UX refinement

- Primary navigation rebuilt and centered with: Home, Services, Work / Portfolio, About, Insights, Case studies, Process
- Larger, sharper Being Digitals logo and balanced left/center/right header layout
- Services flyout and responsive mobile navigation retained
- Service local-navigation separator removed for a cleaner transition into each hero
- Arrow controls added to every active horizontal rail on desktop and mobile, while swipe/trackpad scrolling still works
- Service second sections rebuilt as visual-first signature stages instead of oversized text-only layouts
- Website, Software, SEO, Social, Google Ads, Meta Ads, Branding, AI and Maintenance now use distinct visual compositions
- Service highlight/detail visuals now follow the visual language of the individual service instead of sharing one generic browser-card treatment
- Slider controls include disabled states, smooth movement, touch behavior and responsive placement
- Header/sticky offsets updated for the larger navigation bar

## Validation performed

- 340 TypeScript/TSX files parsed for syntax: 0 syntax errors
- Local import scan: 0 unresolved local imports
- Referenced public assets scan: 0 missing assets
- Static internal route scan: 0 broken routes
- Archive integrity check: passed

A full dependency-based Next.js production build was not run in the isolated validation container because npm dependency installation timed out. Run a fresh `npm install` on your normal development machine before `npm run build`.

## Final performance / measurement setup

Optional production environment variables are documented in `.env.example`.

- `NEXT_PUBLIC_GA_ID` enables GA4 using `next/script` after the page is interactive.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` adds Search Console verification metadata.
- `NEXT_PUBLIC_INSTAGRAM_URL` and `NEXT_PUBLIC_LINKEDIN_URL` add real social links to the footer only when configured.

The site uses AVIF/WebP negotiation through `next/image`, long image cache TTLs, metadata-only video preload, content-visibility for heavy below-the-fold sections, reduced-motion fallbacks, and limited scroll-linked motion concentrated in the main storytelling moments.
