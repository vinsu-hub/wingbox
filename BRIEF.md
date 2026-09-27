# Wingbox Aviation — Website Revamp Build Brief

You are doing the full UI/UX build of the new Wingbox Aviation Inc. public
website on top of a minimal, already-working scaffold. This file is your
entry point; it tells you where everything else lives and what rules override
what.

## 1. Read these first, in order

1. `design-reference/concept-mockups/Wingbox_Aviation_Complete_Website_Manus_Prompt.md`
   — the master design/content/IA specification. Treat it as authoritative for
   layout, sections, copy structure, typography, motion, responsive rules,
   accessibility, SEO, and the component list. Build every page and section it
   describes (Home, About Us, Services + 7 service detail sections, Our Team,
   Our Clients & Partners, Contact).
2. `design-reference/concept-mockups/*.png` (homepage, about us, services,
   our team, our client, contact us) — visual/layout reference for the
   direction above. **Layout and style reference only** — see the content
   override rules in section 3 below before trusting any text, name, logo, or
   number shown in these mockups.
3. `design-reference/concept-mockups/wingbox-finalized-project-scope-touchpoint-map.md`
   — background on Wingbox's broader internal systems roadmap (WingBox OS /
   AI pipeline / Hermes). This is NOT part of the public website scope; it's
   here only so you understand the company is a real operating aviation
   consultancy, not a template client. Do not build any of it into this site.
4. `design-reference/old-site-archive/` — the old live website's raw HTML/CSS/
   JS/images (a `saveweb2zip` export). Source of real logos, real content, and
   real Wix asset filenames. Several old assets are named e.g. `Asset 10.png`
   in the HTML but were not all captured in the archive — don't treat a
   missing reference as license to invent a replacement; skip it or use a
   confirmed source instead.
5. `design-reference/raw-images/` — additional supplied images. Note: several
   files in here have a `.png` extension but are actually AVIF-encoded
   (`file` reports "ISO Media, AVIF Image"); handle/convert accordingly if you
   use them, or prefer a real PNG/JPG source when one exists.

## 2. What's already scaffolded — build on it, don't replace the stack

- Vite + React 19 + TypeScript + Tailwind v4 (`@tailwindcss/vite`, no
  `tailwind.config.*` — theme tokens live in `src/index.css` under `@theme`).
- Routing: `wouter` (already a dependency, see `src/App.tsx`).
- `framer-motion` is installed for the animation system in spec section 44.
- Brand color tokens, heading/body font imports, and base styles are already
  in `src/index.css` (`--wb-navy #1B2A66`, `--wb-red #D2232A`,
  `--wb-light-gray #F5F7FA`, `--wb-dark-text #172033`,
  `--wb-muted-text #5E6878`, headings = Oswald, body = Inter). Extend this
  file rather than starting a parallel theme system.
- Real logo files: `src/assets/logo/wingbox-logo.png` (horizontal lockup) and
  `wingbox-logo-small.png`. Use these — do not redraw or regenerate the logo.
- Real "250+ Aircraft" stat graphic: `src/assets/stats/250-aircraft.png` (and
  an alt crop `250-aircraft-alt.png`).
- `src/pages/HomePage.tsx` and `src/App.tsx` are throwaway placeholders —
  replace them as you build out the real page set and routes
  (`/`, `/about`, `/services`, `/services/:slug`, `/our-team`,
  `/our-clients`, `/contact`).
- Centralized content — already extracted and fact-checked, import from these
  instead of hardcoding copy into components (spec sections 49-50 ask for
  exactly this pattern):
  - `src/content/company.ts` — tagline, overview copy, mission, vision, core
    values, homepage statistics (each stat flagged `confirmed: true/false`).
  - `src/content/services.ts` — the seven approved services in order, plus
    `whyWingbox` pillars, plus the Japan Parts Partnership record (flagged
    `verified: false` — see rules below).
  - `src/content/team.ts` — the four real leadership profiles.
  - `src/content/clientsAndPartners.ts` — airline clients, lessors, technical
    partners, industry orgs, Canopy, academic partners, and an empty
    `testimonials` array.
  - `src/content/contact.ts` — offices, phone, emails, contact-form service
    options, primary nav.

  If you need a new content field, add it to these files rather than inlining
  strings in JSX, and keep the shape close to what the spec's "Content
  Architecture" section (49) asks for.

## 3. Content rules — these override the mockups when they conflict

The concept mockup screenshots were AI-generated fill for layout purposes and
contain fabricated content. Per the master spec's "Important Content Rules"
(section 51: DO NOT invent certifications, clients, testimonials, team
members, aircraft counts, social accounts, or partnerships):

- **Team**: use only the four names in `src/content/team.ts`
  (Sosa, Condino, Ursulum, Lloudio). The mockup's "Ramon D. Villanueva /
  Jessica M. Santos / Daniel R. Cruz / Patricia L. Reyes" cards are fabricated
  — do not use those names or reuse their portrait style as if they were real
  people. No headshots are currently supplied (`photoAvailable: false` on
  every record) — use a clean placeholder (initials mark, silhouette, or
  brand-pattern card), never a stock photo presented as a real staff member.
- **Client logos**: use only `airlineClients` in
  `src/content/clientsAndPartners.ts` (Cebu Pacific, AirAsia, Philippine
  Airlines, Air Niugini). The mockup's logo strip includes Japan Airlines,
  Singapore Airlines, and Qatar Airways — those are not verified and must not
  appear. Keep the airline/lessor/technical-partner/industry-org/academic
  categorization from the spec (sections 32-34); don't merge them into one
  wall.
- **Testimonials**: `testimonials` is empty. Per spec section 37, omit the
  testimonials section entirely rather than filling it with placeholder
  quotes.
- **Statistics**: only the 250+ aircraft figure is confirmed. Render the
  other three stat tiles, but visually flag unconfirmed stats (e.g. a small
  "pending confirmation" affordance, or a code comment plus a `data-confirmed`
  attribute) so whoever ships this catches them before launch — don't quietly
  present them as verified fact and don't invent different numbers.
- **Japan Parts Partnership**: never render it as an 8th core service. It may
  appear as a separate "partnership" feature card only if you want to include
  it, and if so keep `verified: false` visibly in mind — treat it the way the
  spec's section 10 describes ("It may appear separately as a
  partnership/news feature if verified").
- **Contact info, mission, vision, company overview**: copy from
  `src/content/*.ts` verbatim in substance; you may improve grammar/flow but
  must preserve factual meaning per spec section 51.
- Do not invent social media URLs — omit social icons entirely unless real
  accounts are supplied.

## 4. Design system constraints (summary — full detail in the Manus spec)

- Palette ratio ~70% white/light, ~20% navy, ~10% red accent; red is an
  accent color, never the dominant background.
- Recurring signature: the diagonal navy/red stripe motif, used sparingly
  (hero corners, image corners, section transitions, CTA backgrounds, footer).
- Headings: condensed uppercase (Oswald is already wired up as `font-heading`
  in Tailwind, matching the spec's suggested heading fonts).
- Motion: fade up / fade in / small horizontal slide / image reveal / count-up
  stats / header transition, ~400-700ms, smooth non-bouncy easing. No heavy
  parallax, spinning objects, or bouncy cards.
- Mobile-first responsiveness is a priority — no horizontal overflow at any
  breakpoint, hamburger nav, stacked sections, single-column forms.
- Accessibility: semantic HTML, heading hierarchy, alt text, visible focus
  states, keyboard nav, accessible mobile menu, form labels + error states,
  reduced-motion support (`prefers-reduced-motion`).
- Build the reusable component set the spec names in section 49 (Header,
  MobileMenu, Hero, SectionHeading, PrimaryButton/SecondaryButton, StatStrip,
  ImageTextSection, ServiceCard/ServiceFeature, TeamCard/TeamProfileModal,
  LogoGrid/LogoCarousel, TestimonialCard, ValueCard, CTASection, ContactForm,
  ContactInfo, Map, Footer) under `src/components/`.
- Contact form: client-side validation, accessible errors, a success state,
  and a backend-ready shape (e.g. an `onSubmit` that's easy to wire to a real
  endpoint later) — do not fake a "message sent" confirmation if no backend
  is wired up; make the success state honest about what actually happened
  (e.g., "ready to submit" stub is fine, just don't claim delivery that
  didn't occur).
- Map: use a clean placeholder/link (e.g., a static styled block linking out
  to Google Maps for the HQ address) if no maps API key is configured —
  don't break the page reaching for a live embed with no key.

## 5. Acceptance checklist

- [ ] All primary pages exist and route correctly: Home, About Us, Services
      (overview + 7 service sections), Our Team, Our Clients & Partners,
      Contact.
- [ ] `pnpm install && pnpm dev` runs clean with no console errors.
- [ ] `pnpm check` (tsc --noEmit) passes.
- [ ] No content violates section 3 above (spot check team names, client
      logos, testimonials, stats, Japan Parts Partnership placement).
- [ ] Responsive at mobile/tablet/desktop with no horizontal scroll.
- [ ] Keyboard-navigable header, mobile menu, and contact form; visible focus
      states throughout.
- [ ] Real logo asset used in header/footer (not redrawn).
- [ ] Page `<title>`/meta description set per spec section 47 (global one is
      already in `index.html` — add page-specific ones as you add routes).

Work directly in this repo. Commit as you go if you want checkpoints, but the
working tree state at hand-back is what gets reviewed.
