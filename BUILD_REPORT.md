# Wingbox website build report

Implemented all 13 required routes: Home, About, Services overview, seven service detail pages, Our Team, Our Clients & Partners, and Contact. An unknown-route fallback is included.

Shared components cover the responsive sticky header and mobile menu, hero, section headings, primary and secondary buttons, animated statistics, image/text sections, service cards and features, leadership cards and native profile dialogs, categorized logo grids, value cards, CTA, inquiry form, office details, location links, and footer. Reusable testimonial and logo-carousel components are available, but no testimonial section is rendered because the approved array is empty.

The site preserves the existing stack, original logo assets, brand tokens, and centralized company/service/team/contact content. New presentation copy and asset mappings live in `src/content/site.ts`. The three unconfirmed statistics have visible pending-confirmation labels and `data-confirmed=false`; only the approved 250+ aircraft statistic is confirmed. Leadership uses initials rather than fabricated portraits. Japan Parts Partnership is omitted because it is unverified. No fabricated clients, testimonials, certifications, biographies, social accounts, or internal operations systems are published.

Client/partner logos are extracted from the supplied real raw-image artwork. Academic institutions appear as name tiles because separate confirmed logo files were unavailable. Photographs are stored locally: the supplied archived consultation image and two aviation photographs from Unsplash (`photo-1436491865332-7a61a109cc05` and `photo-1569154941061-e231b4725ef1`). They are illustrative aviation imagery, not claims about Wingbox aircraft or personnel.

## Validation

- `pnpm install`: passed.
- `pnpm dev`: Vite ready at http://localhost:4000/.
- `pnpm check`: passed (`tsc --noEmit`).
- `pnpm build`: passed.
- Headless Chromium: all 13 routes checked at widths 390, 768, and 1440 pixels; each rendered an H1, with no horizontal overflow or broken images.
- No browser console errors or uncaught page errors.
- Profile dialog opens and dismisses with Escape.
- Mobile navigation opens and dismisses with Escape; focus trapping and restoration are implemented.
- Form displays required-field errors, validates email, and prepares an honest email draft after valid input.
- Desktop/mobile screenshots and client-logo layout visually inspected.

## Remaining launch integrations

The contact form does not send automatically. It validates details and opens a prefilled email draft for the visitor to review and send; an optional async `onSubmit` callback is ready for a real backend. Location blocks link to Google Maps without requiring an API key. Client confirmation is still needed for the three flagged statistics, and real staff portraits/academic logo files can be supplied later. Configure SPA fallback to `index.html` on the production host so direct nested-route visits work.
