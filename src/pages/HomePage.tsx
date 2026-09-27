import wingboxLogo from "../assets/logo/wingbox-logo.png";

/**
 * Scaffold placeholder — replace with the full homepage build per BRIEF.md
 * (hero, stats, about preview, services preview, team preview, clients
 * preview, why-wingbox, CTA, contact preview, footer).
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-wb-light-gray p-8 text-center">
      <img src={wingboxLogo} alt="Wingbox Aviation Inc." className="h-16" />
      <h1 className="text-3xl font-semibold text-wb-navy">Scaffold ready — build pending</h1>
      <p className="max-w-xl text-wb-muted-text">
        This is the project scaffold only. See BRIEF.md at the project root for the full
        build specification.
      </p>
    </main>
  );
}
