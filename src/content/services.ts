/**
 * The seven approved services, in this exact order.
 * Source: Wingbox_Aviation_Complete_Website_Manus_Prompt.md, sections 10, 20-28.
 * Do NOT add an eighth service (e.g. Japan Parts Partnership belongs only as a
 * separate partnership feature, never in this list — spec section 10 & 51).
 */
export interface Service {
  number: string;
  slug: string;
  name: string;
  purpose: string;
  contentAreas: string[];
  cta: string;
}

export const services: Service[] = [
  {
    number: "01",
    slug: "technical-advisory-consultancy",
    name: "TECHNICAL ADVISORY & CONSULTANCY PROGRAM",
    purpose: "Provide strategic technical guidance for safer, smarter, and more efficient aviation operations.",
    contentAreas: [
      "Technical advisory",
      "Engineering support",
      "Operational assessment",
      "Maintenance strategy",
      "Regulatory/compliance guidance",
      "Technical decision support",
      "Aviation project consultancy",
    ],
    cta: "DISCUSS YOUR REQUIREMENT →",
  },
  {
    number: "02",
    slug: "technical-training-canopy",
    name: "TECHNICAL TRAINING THROUGH CANOPY",
    purpose:
      "The sister companies collaborate with local aviation colleges and universities to expose students to real-world aviation industry preparation and help develop future aviation technical professionals.",
    contentAreas: ["ACADEMIC KNOWLEDGE", "INDUSTRY EXPOSURE", "TECHNICAL PREPARATION", "CAREER READINESS"],
    cta: "LEARN ABOUT THE PROGRAM →",
  },
  {
    number: "03",
    slug: "aircraft-check-management",
    name: "AIRCRAFT CHECK MANAGEMENT",
    purpose: "Coordinated technical oversight of scheduled aircraft maintenance checks, start to finish.",
    contentAreas: [
      "Check planning",
      "Coordination",
      "Technical oversight",
      "Maintenance event monitoring",
      "Documentation",
      "Compliance tracking",
      "Aircraft return-to-service support",
    ],
    cta: "LEARN MORE →",
  },
  {
    number: "04",
    slug: "fleet-technical-management-camo",
    name: "FLEET TECHNICAL MANAGEMENT / CAMO",
    purpose: "Continuing airworthiness management for fleets, keeping aircraft compliant, maintainable, and mission-ready.",
    contentAreas: [
      "Continuing airworthiness support",
      "Fleet technical oversight",
      "Maintenance planning",
      "Compliance",
      "Reliability",
      "Aircraft status monitoring",
      "Technical coordination",
    ],
    cta: "LEARN MORE →",
  },
  {
    number: "05",
    slug: "aircraft-records-review-buildup",
    name: "AIRCRAFT RECORDS REVIEW & BUILD-UP",
    purpose: "Accurate, organized, and audit-ready technical records across the aircraft lifecycle.",
    contentAreas: [
      "Records review",
      "Records reconciliation",
      "Document organization",
      "Maintenance history",
      "Technical records build-up",
      "Audit readiness",
      "Transition documentation",
    ],
    cta: "LEARN MORE →",
  },
  {
    number: "06",
    slug: "aircraft-inspections-audit",
    name: "AIRCRAFT INSPECTIONS & AUDIT",
    purpose: "Independent, detailed, and objective technical assessments.",
    contentAreas: [
      "Independent inspections",
      "Technical assessment",
      "Audit support",
      "Compliance review",
      "Airworthiness review support",
      "Findings identification",
      "Documentation",
    ],
    cta: "LEARN MORE →",
  },
  {
    number: "07",
    slug: "aircraft-delivery-redelivery",
    name: "AIRCRAFT DELIVERY & RE-DELIVERY",
    purpose: "Smooth aircraft transitions backed by thorough technical support and documentation.",
    contentAreas: [
      "Pre-delivery inspection",
      "Physical inspection",
      "Records review",
      "Documentation",
      "Acceptance support",
      "Return/re-delivery coordination",
      "Aircraft transition support",
    ],
    cta: "LEARN MORE →",
  },
];

/**
 * Japan Parts Partnership — a partnership/news feature ONLY, never one of the
 * seven core services (spec sections 10, 51). Include this card on Home/
 * Services only if/when the client verifies it; left here as an explicit,
 * clearly-separate opt-in rather than baked into `services`.
 */
export const japanPartsPartnership = {
  verified: false,
  label: "NEW PARTNERSHIP",
  name: "Japan Parts Partnership",
  note: "Reliable access to quality aircraft parts through a Japan-based partnership — confirm details with the client before publishing.",
};

export const whyWingbox = [
  {
    title: "DEEP TECHNICAL EXPERTISE",
    body: "Years of hands-on experience in aviation operations, engineering, and maintenance.",
  },
  {
    title: "PERSONALIZED SERVICE",
    body: "Every aircraft, operator, and requirement is different.",
  },
  {
    title: "MODERN OPERATIONAL CAPABILITY",
    body: "Efficient processes and technology-supported solutions.",
  },
  {
    title: "LONG-TERM PARTNERSHIPS",
    body: "Build relationships designed around continued success.",
  },
];
