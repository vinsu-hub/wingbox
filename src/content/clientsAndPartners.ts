/**
 * Source: Wingbox_Aviation_Complete_Website_Manus_Prompt.md, sections 32-34.
 *
 * IMPORTANT — the concept mockup at
 * design-reference/concept-mockups/homepage.png shows a client logo strip
 * with Japan Airlines, Singapore Airlines, and Qatar Airways. Those are NOT
 * in the verified client list below and must NOT be used; that mockup's logo
 * strip is layout/style reference only, not a factual source. Use the real
 * airline logos listed here. Do not present a partner as a "client" or vice
 * versa (spec section 51).
 */

export const airlineClients = [
  "Cebu Pacific",
  "AirAsia",
  "Philippine Airlines",
  "Air Niugini",
];

export const aircraftOwnersLessors = [
  "BBAM",
  "Carlyle Aviation Partners",
  "Castlelake",
  "NAC",
  "CALC",
];

export const aviationServicesTechnicalPartners = [
  "Eirtech Aviation Services",
  "Dviation",
  "Jet Midwest",
  "DP Aviation Services",
  "Aerobox Aviation Material Solutions Inc.",
  "CGA Aero",
];

export const industryOrganizations = [
  "ASBAA",
  "ECCP",
];

/** Canopy Innovative System Inc. gets its own featured section per spec section 35. */
export const canopyPartner = "Canopy Innovative System Inc.";

export const academicPartners = [
  "Holy Angel University",
  "National Aviation Academy of the Philippines",
  "University of Perpetual Help System DALTA",
  "PATTS College of Aeronautics",
  "FDSA Aviation College of Science and Technology Inc.",
];

/** No approved testimonials supplied yet — do not fabricate any (spec section 37). */
export const testimonials: { quote: string; name: string; title: string; company: string }[] = [];

/** Existing technical collaborators, grouped visually with the training partner. */
export const groupCollaborators = [aviationServicesTechnicalPartners[4], canopyPartner, aviationServicesTechnicalPartners[5]];
