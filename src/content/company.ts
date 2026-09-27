/**
 * Verified factual source for company overview, mission, vision.
 * Source: user-supplied company brief + Wingbox_Aviation_Complete_Website_Manus_Prompt.md.
 * Do not alter facts here; copy/tone may be polished in the UI layer only.
 */

export const brandTagline = "MOVING TOWARD EXCELLENCE";

export const companyOverview = {
  founded: 2014,
  headquartersCity: "Manila, Philippines",
  paragraphs: [
    "WINGBOX AVIATION, a company based in Manila, Philippines was founded in 2014. The group is composed mainly of aviation engineers and legal counsel with extensive experience in aviation related matters.",
    "The company's primary purpose is to provide consulting, advisory, and technical services to persons, associations, corporations, partnerships, or other entities on aviation related issues, including, but not limited to, data gathering, analysis, rendering technical advice, providing contract review and/or administrative assistance and similar services in the operation, maintenance, management, and delivery or redelivery of aircraft and proper documentation thereof, and other matters in connection with aviation regulatory measures.",
    "Through our partners we also offer aircraft maintenance and ground handling work.",
    "The team brings extensive collective experience, having successfully managed over 250 aircraft deliveries and returns for both airlines and lessors. Our management is committed to understanding each client's unique requirements, ensuring the highest value through both cost efficiency and quality of service.",
  ],
};

export const mission =
  "To provide exceptional and efficient service through its aviation team composed of highly-skilled professionals, demonstrating integrity, courage to lead, and passion to bring outstanding results to its clients while continuing to build relationships based on transparency, accountability, and mutual trust and respect.";

export const vision =
  "To be the preferred and trusted leader in aviation services, recognized locally, regionally, and globally for excellence and reliability.";

/** Older vision phrasing on file, kept for reference only — `vision` above is the one to publish. */
export const visionAlt =
  "To become the preferred and renowned team of choice in providing aviation services locally, regionally, and globally.";

// Four aviation-oriented values, per spec section 19. Icons/short explanations
// are a copy task for the build, not fabrication of the values themselves.
export const coreValues = ["INTEGRITY", "TECHNICAL EXCELLENCE", "ACCOUNTABILITY", "PARTNERSHIP"] as const;

/**
 * Statistics for the homepage trust strip. Per spec section 8: "If exact
 * numbers are not confirmed, make the content editable rather than inventing
 * replacements." Only the aircraft figure below is directly sourced
 * (250+ aircraft deliveries/returns, and the "250+AIRCRAFT" graphic asset at
 * src/assets/stats/250-aircraft.png). The rest are UNCONFIRMED placeholders —
 * flag them visibly for client sign-off before launch, do not present as fact.
 */
export const statistics = [
  { value: "250+", label: "AIRCRAFT DELIVERIES & RETURNS MANAGED", confirmed: true },
  { value: "10+", label: "YEARS IN OPERATION", confirmed: false },
  { value: "7+", label: "CERTIFICATIONS HELD", confirmed: false },
  { value: "50+", label: "CLIENTS WORLDWIDE", confirmed: false },
];
