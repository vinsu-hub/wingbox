# Wingbox website build report

## September 2026 mockup fidelity pass

Reworked the six primary pages around the supplied concept layouts: compact header, photographic navy-overlay heroes, condensed uppercase headings, tighter spacing, recurring red/navy diagonal corners, rectangular service/leadership cards, categorized light logo tiles, and a four-column navy footer. Services now has a two-column introduction with four expertise pillars and seven alternating numbered modules. About groups mission, vision, and approved values into one purpose section and includes the existing statistics strip. Team follows the leadership heading/card/footer sequence. Contact separates office/location information from the inquiry form and phone consultation card; the homepage has a compact three-column contact section. Hero anchor links scroll to the corresponding service or inquiry section.

All four supplied leadership portraits render on the homepage and team page with lazy loading, reserved aspect ratios, top positioning, and full name/title alt text. Profile dialogs show the real portrait, nickname, complete supplied biography, and expertise, with native keyboard dismissal and focus restoration. Corrected Billy Joel's surname to LIQUIDO throughout application content. Biographies preserve the supplied education, employment history, years of experience, affiliations, and December 2024 Executive MBA completion.

Re-sliced all 18 partner marks from `public/images/source/partners-sheet.png`, including separate BBAM/Carlyle artwork, the PAL wordmark, and the full CG Aero wordmark. CG Aero's compass mark is confirmed by the supplied sheet and existing asset. Exported all five academic logos from `universities-sheet.png`, corrected the FDSA institution name, and replaced every academic name-only tile with artwork. Logo tiles use white backgrounds to preserve the black portions of PAL, Aerobox, and CG Aero. `scripts/slice-logos.py` reproduces the WebP exports with Pillow.

## Validation and evidence

- `pnpm check`: passed.
- `pnpm build`: passed, including TypeScript build and Vite production output.
- Headless Chromium checked all 13 routes at 390, 768, and 1440 pixels (39 route/viewport combinations): H1 present, no horizontal overflow, no broken images, no console errors or uncaught exceptions.
- All four team profile dialogs: portrait/biography present; Escape dismissal passed.
- Mobile navigation open/Escape dismissal passed.
- Full contact form required fields and honest validated-email-draft state passed.
- Compact homepage inquiry form and both hero anchor links passed.
- Reduced-motion rendering is used for repeatable captures; existing reduced-motion behavior and visible focus styles are retained.
- `artifacts/fidelity/` contains all 39 full-page responsive screenshots, six desktop before captures, six implementation-versus-concept comparison PNGs, and `validation.json` with route-level results.
- Reproduce browser verification with `PLAYWRIGHT_MODULE=/path/to/playwright node scripts/fidelity-check.cjs`; set `FIDELITY_URL` if needed (default local dev port 4001). Create comparisons with `python3 scripts/compare-fidelity.py`.

## Remaining differences and launch integrations

The layout/style pass is substantially closer to the concepts, but these are not pixel-identical reproductions. Existing real illustrative aviation photography remains in use: the mockups' hangar engineers, sunset aircraft views, and specialized training/records/inspection scenes were not supplied as independent usable photographs. The actual team photos have different backgrounds and crops from the mockups; cards now use the concept’s 4:3 landscape crop with top positioning. The supplied logo sheets determine logo resolution and artwork; no marks were redrawn.

Content requirements intentionally take precedence over mockup filler: four real airline clients, seven approved services, four approved values, correct supplied offices/emails/phone, no fabricated testimonials or social accounts, no Japan Parts service, and visible flags for all three unconfirmed statistics. The clients page retains the required lessor/technical/industry/academic grouping and compact centered Canopy collaborator row and aircraft-value section, so it is longer than the abbreviated concept. The contact page retains all eight requested form fields, so its inquiry section is taller. Phone consultation links directly to the confirmed number without invented scheduling hours. Location cards link to Google Maps; no map API key is configured.

The form prepares an email draft and does not claim automatic delivery; the optional async `onSubmit` interface remains available for a real backend. Confirm the three flagged statistics before launch and configure SPA fallback to `index.html` for nested routes. No commits were created and `design-reference/` was not modified.


## Follow-up polish pass

Trimmed the sliced logos using an alpha threshold of 8 to exclude faint transparent sheet noise; exports now replace files atomically. Enlarged logo image boxes to use the available tile area (roughly 75–80% of tile height). Air Niugini, AsBAA, and DP Aviation Services now fill their tiles; academic artwork uses taller 170px desktop / 150px mobile tiles so seals remain legible. Home retains four wide airline tiles. Clients retains honest separate airline, lessor, technical partner, and industry organization labels, using four wide airline columns and six-column partner grids at desktop. Aerobox, Canopy, and CGA Aero form a centered collaborator row, with Canopy’s training link retained; no additional partnership claims were introduced.

Added decorative Tabler line icons above all statistics while retaining the three visible pending-confirmation flags. The supplied transparent Wingbox footer logo appears directly on navy using a white CSS filter, without a box or redrawing. Both home and team leadership cards use reserved 4:3 landscape image areas with top-positioned crops; profile dialog portraits remain unchanged.

Validation: `pnpm check` and `pnpm build` passed. Refreshed all 39 route/viewport screenshots and six comparisons in `artifacts/fidelity/`, with 390/768/1440 overflow, image loading, console, modal, navigation, and contact-form verification recorded in `validation.json`. Remaining differences are supplied photography/content and the extra approved academic/value sections; no commits were created.


## Generated service photography

The seven service images in `public/images/services/` are AI-generated illustrations in a photorealistic editorial style, not documentary photographs of Wingbox staff, facilities, aircraft, or certifications. Each service has a distinct scene with space for hero copy; exports are 1600 × 900 WebP at quality 80 (65–121 KB each), with meaningful alt text shared by home cards, services features, and detail heroes. Original stock images remain available for other sections.

Validation: `pnpm check` and `pnpm build` passed. Browser checks covered home, `/services`, and all seven detail routes at 1440 and 390 pixels for image loading, unique service assets, alt text, horizontal overflow, and browser errors. Evidence is saved as `artifacts/fidelity/services-grid-generated-1440.png`, `services-grid-generated-390.png`, `service-detail-hero-generated-1440.png`, two full services-page captures, and `services-generated-validation.json`.
