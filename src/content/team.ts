/**
 * Real team members only. Source: Wingbox_Aviation_Complete_Website_Manus_Prompt.md,
 * section 29. Do NOT use the placeholder names/portraits shown in
 * design-reference/concept-mockups/homepage.png (Ramon D. Villanueva, Jessica
 * M. Santos, Daniel R. Cruz, Patricia L. Reyes) — those are AI-generated
 * mockup fill, not real Wingbox staff. Use portraits only when the client
 * supplies real photos; use a placeholder silhouette otherwise, never a stock
 * photo presented as a real person.
 */
export interface TeamMember {
  name: string;
  position: string;
  bio?: string;
  expertise?: string[];
  photoAvailable: boolean;
}

export const leadership: TeamMember[] = [
  {
    name: "ENGR. DARMILO L. SOSA",
    position: "CEO / MANAGING DIRECTOR",
    bio: "Extensive experience in aircraft leasing, technical consultancy, engineering, fleet management, airline technical services, aircraft deliveries and returns, and aviation consultancy. Also involved in leadership roles with Canopy Innovative System Inc., Aerobox Material Solutions, and the Asian Business Aviation Association.",
    expertise: [
      "Aircraft leasing",
      "Technical consultancy",
      "Engineering",
      "Fleet management",
      "Airline technical services",
      "Aircraft deliveries and returns",
      "Aviation consultancy",
    ],
    photoAvailable: false,
  },
  {
    name: "ENGR. ENRICO CONDINO",
    position: "CHIEF OPERATING OFFICER",
    photoAvailable: false,
  },
  {
    name: "ENGR. SHEALTIEL URSULUM",
    position: "TECHNICAL DIRECTOR",
    photoAvailable: false,
  },
  {
    name: "ENGR. BILLY JOEL LLOUIDO",
    position: "HEAD OF TRAININGS & SPECIAL PROJECTS",
    photoAvailable: false,
  },
];
