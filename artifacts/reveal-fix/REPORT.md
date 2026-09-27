# Shared reveal correction

Changed `src/components/Layout.tsx` and the logo image loading attribute in `src/components/Content.tsx`.

The shared Reveal previously initialized every section at opacity 0 / translateY(20px), then depended on `whileInView` reaching an 8% intersection threshold. A full-page screenshot does not scroll through every section or guarantee observer delivery, so below-the-fold sections stayed completely invisible. The checked source already configured duration 0.55 seconds and a cubic Bezier easing; the reported 2.5-second active animation could not be reproduced locally (the original Home About preview completed at the 610ms sample). There is no evidence here of a slow spring, so the fix does not claim that as the root cause.

Reveal now explicitly uses `type: 'tween'`, duration 550ms, the existing smooth non-bouncy easing, and a first-intersection trigger (`amount: 0`). Content renders visible at rest (`initial={false}`); on entrance a shallow 85%-to-100% opacity fade and 20px-to-zero translation play once. Thus slow observer delivery and unvisited sections cannot create invisible content, while reduced motion remains fully opaque and untransformed. Small client logos load eagerly because the fast screenshots also exposed blank lazy-loaded logo tiles.

Validation on the production preview at localhost:4173 in headless Chrome, 1440×900 viewport:

- `pnpm check`: passed.
- `pnpm build`: passed.
- Home About preview: reached opacity 1 / transform none 573ms after scrolling into view.
- About mission/vision section: reached opacity 1 / transform none at 566ms.
- Reduced motion: opacity 1 / transform none.
- No uncaught page errors on either route.
- Fresh full-page captures invoked immediately after the load event, without pre-scrolling or artificial animation waits. Capture calls took 790ms for Home and 456ms for About. Both PNGs were visually inspected: all sections and logos present, no large blank reveal gaps.

Artifacts: `home-fast-full.png`, `about-fast-full.png`, and `measurements.json` in this directory. The Home statistics are captured partway through their separate count-up animation; this task only changed section entrances. No remaining work for the requested reveal correction.
