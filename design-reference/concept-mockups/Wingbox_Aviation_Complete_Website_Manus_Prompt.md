# WINGBOX AVIATION INC. — COMPLETE WEBSITE BUILD PROMPT
## Master Website Specification for Manus

> **Purpose:** Use this document as the single source of truth for designing and building the complete public-facing Wingbox Aviation Inc. website.
>
> **Reference material:** The provided screenshot images in this conversation are mandatory visual/content references. Use them together with this specification. Do not copy the old website's dated layout; preserve its real company information, people, partners, clients, mission, vision, and brand DNA while rebuilding the experience as a modern responsive aviation website.

---

# 1. PROJECT OVERVIEW

Build a modern, professional, responsive corporate website for **WINGBOX AVIATION INC.**

Wingbox Aviation is an aviation technical services and consultancy company founded in 2014 in Manila, Philippines. The company is composed primarily of aviation engineers and legal counsel with extensive aviation-related experience.

The website must communicate:

- Aviation technical expertise
- Aircraft lifecycle support
- Continuing airworthiness / CAMO capability
- Technical advisory and consultancy
- Aircraft check management
- Technical training
- Aircraft records management
- Inspections and audits
- Aircraft delivery and re-delivery
- Long-term relationships with airlines, lessors, aviation companies, industry organizations, and academic institutions

The site should feel established, technically credible, precise, and internationally capable.

## Core brand message

**MOVING TOWARD EXCELLENCE**

This phrase should remain a major part of the visual identity.

---

# 2. DESIGN GOAL

The existing website has strong brand DNA but an outdated presentation.

### Preserve

- Wingbox Aviation logo
- Navy + red + white identity
- Aviation/engineering feel
- "Moving Toward Excellence"
- Existing company information
- Existing team information
- Existing client and partner network
- Existing mission and vision
- Red/blue diagonal visual motif

### Replace

- Old static/boxed website layout
- Heavy crumpled-paper texture as the dominant background
- Dated 3D aircraft graphics
- Dense paragraphs without hierarchy
- Tiny navigation
- Fixed/non-responsive presentation
- Old-fashioned card styling

### New direction

**Precision aviation + modern corporate website**

The result should feel closer to a premium aviation consultancy, aircraft technical-management company, or modern aerospace engineering firm.

Do NOT make it look like:
- A generic SaaS startup
- A flashy technology company
- A luxury airline website
- A government portal
- A template-heavy WordPress site

---

# 3. VISUAL SYSTEM

## Brand colors

Use:

```text
Primary Navy: #1B2A66
Primary Red: #D2232A
White:       #FFFFFF
Light Gray:  #F5F7FA
Dark Text:   #172033
Muted Text:  #5E6878
```

The exact logo colors should take priority if the supplied logo asset differs slightly.

## Visual ratio

Approximately:

- 70% white/light surfaces
- 20% navy
- 10% red accents

Red is an accent, not the main background color.

## Signature graphic

Use the existing **diagonal navy/red stripe** as a recurring Wingbox visual signature.

Use it on:
- Hero corners
- Image corners
- Section transitions
- CTA backgrounds
- Footer accents
- Selected cards

Do not overuse it.

---

# 4. TYPOGRAPHY

Headings should have a bold condensed aviation/editorial character.

Suggested heading fonts:

- Oswald
- Bebas Neue
- Archivo Narrow
- Roboto Condensed

Body:

- Inter
- Manrope
- Source Sans 3
- Helvetica/Arial fallback

### Typography hierarchy

Hero:

Very large condensed uppercase.

Section heading:

Large condensed uppercase.

Subheading:

Medium-weight sans-serif.

Body:

Comfortable line-height and readable width.

Buttons:

Uppercase, compact, confident.

---

# 5. GLOBAL NAVIGATION

Desktop header:

```text
[ WINGBOX AVIATION LOGO ]

ABOUT US
SERVICES
OUR TEAM
OUR CLIENTS
CONTACT US

[ GET IN TOUCH → ]
```

Header behavior:

### At top
White or transparent-over-hero depending on hero contrast.

### On scroll
- Solid white
- Subtle shadow
- Slightly smaller height
- Logo remains visible

### Active page
Use a red underline or red text.

### Mobile
Use:

```text
[LOGO]                         [☰]
```

Opening menu:

```text
ABOUT US
SERVICES
OUR TEAM
OUR CLIENTS
CONTACT US

GET IN TOUCH →
```

Mobile navigation should occupy the full screen or a clean right-side panel.

---

# 6. WEBSITE INFORMATION ARCHITECTURE

Build these primary pages:

```text
/
├── HOME
│
├── ABOUT US
│   ├── Company Overview
│   ├── Mission
│   ├── Vision
│   ├── Core Values
│   └── Aviation Network
│
├── SERVICES
│   ├── Services Overview
│   ├── Technical Advisory & Consultancy Program
│   ├── Technical Training Through Canopy
│   ├── Aircraft Check Management
│   ├── Fleet Technical Management / CAMO
│   ├── Aircraft Records Review & Build-up
│   ├── Aircraft Inspections & Audit
│   └── Aircraft Delivery & Re-Delivery
│
├── OUR TEAM
│   ├── Leadership
│   └── Team Profiles
│
├── OUR CLIENTS & PARTNERS
│   ├── Airline Clients
│   ├── Aviation Partners
│   ├── Industry Organizations
│   ├── Academic Partners
│   └── Canopy Partnership
│
└── CONTACT US
    ├── Contact Details
    ├── Inquiry Form
    └── Locations / Map
```

A single-page scroll experience can be used for the homepage, but the navigation items should lead to dedicated pages.

---

# 7. HOME PAGE

The supplied modern landing-page screenshot is the primary visual reference for this page.

## Section 1 — Hero

Full viewport or approximately 75–90vh.

Background:
- Real aircraft photograph
- Airport / runway / hangar
- High-quality professional aviation photography

Overlay:
- Dark navy gradient from left to right

Content:

```text
WINGBOX AVIATION INC.

MOVING TOWARD
EXCELLENCE

Aircraft Check Management, Technical Advisory,
and CAMO Services

[ EXPLORE OUR SERVICES → ]
```

Bottom:
Animated down chevron.

Corner:
Red/navy diagonal stripe.

### Hero behavior

- Subtle image movement/parallax
- Text fade/slide
- No excessive animation
- Hero should immediately communicate aviation + technical expertise

---

# 8. HOME — TRUST / STATISTICS

Immediately after hero.

Four statistics:

```text
10+
YEARS IN OPERATION

250+
AIRCRAFT SERVICED

7+
CERTIFICATIONS HELD

50+
CLIENTS WORLDWIDE
```

If exact numbers are not confirmed, make the content editable rather than inventing replacements.

Animation:
- Count up when entering viewport
- Very subtle

---

# 9. HOME — ABOUT PREVIEW

Two-column layout.

Left:

```text
ABOUT US

YOUR TRUSTED PARTNER
IN AVIATION EXCELLENCE
```

Use concise company description.

Right:
Professional aircraft/hangar image.

CTA:

**LEARN MORE ABOUT US →**

---

# 10. HOME — SERVICES PREVIEW

Heading:

```text
OUR SERVICES

COMPREHENSIVE AVIATION SOLUTIONS
```

Intro:

From technical advisory to aircraft lifecycle support, Wingbox provides expertise and flexibility for aviation operators, owners, and partners.

Display exactly these seven services:

### 01
TECHNICAL ADVISORY & CONSULTANCY PROGRAM

### 02
TECHNICAL TRAINING THROUGH CANOPY

### 03
AIRCRAFT CHECK MANAGEMENT

### 04
FLEET TECHNICAL MANAGEMENT / CAMO

### 05
AIRCRAFT RECORDS REVIEW & BUILD-UP

### 06
AIRCRAFT INSPECTIONS & AUDIT

### 07
AIRCRAFT DELIVERY & RE-DELIVERY

Do NOT include the previously used "Japan Parts Partnership" as one of the seven core services.

It may appear separately as a partnership/news feature if verified.

---

# 11. HOME — TEAM PREVIEW

Heading:

```text
OUR TEAM

MEET THE EXPERTS
```

Show selected leadership/team members.

CTA:

**MEET THE FULL TEAM →**

Use real supplied team photos when available.

Do not fabricate names, positions, credentials, or biographies.

---

# 12. HOME — CLIENTS & PARTNERS PREVIEW

Heading:

```text
OUR CLIENTS & PARTNERS

TRUSTED ACROSS THE AVIATION INDUSTRY
```

Show a curated logo strip.

Separate airline clients from broader aviation partners when possible.

CTA:

**VIEW OUR CLIENTS & PARTNERS →**

---

# 13. HOME — WHY WINGBOX

Heading:

```text
WHY WINGBOX

THE WINGBOX ADVANTAGE
```

Four pillars:

### DEEP TECHNICAL EXPERTISE
Years of hands-on experience in aviation operations, engineering, and maintenance.

### PERSONALIZED SERVICE
Every aircraft, operator, and requirement is different.

### MODERN OPERATIONAL CAPABILITY
Efficient processes and technology-supported solutions.

### LONG-TERM PARTNERSHIPS
Build relationships designed around continued success.

---

# 14. HOME — CTA

Full-width navy band.

Text:

```text
READY TO ELEVATE YOUR FLEET OPERATIONS?

Let's discuss how Wingbox can support your goals with
expertise, integrity, and a commitment to excellence.

[ CONTACT US → ]
```

Background can contain a very subtle aircraft silhouette/photo.

---

# 15. HOME — CONTACT PREVIEW

Include:

- Logo
- Address
- Phone
- Email
- Short inquiry form
- Map

CTA:

**SEND MESSAGE →**

---

# 16. ABOUT US PAGE

Use the supplied About Us screenshot as the content reference.

## Hero

```text
ABOUT US

AVIATION EXPERTISE BUILT
AROUND EXPERIENCE
```

Use a strong aircraft/hangar image.

---

## Company Overview

Adapt the supplied company copy into clean web paragraphs.

Core facts to preserve:

- Wingbox Aviation is based in Manila, Philippines.
- Founded in 2014.
- Team consists mainly of aviation engineers and legal counsel.
- Extensive experience in aviation-related matters.
- Provides consulting, advisory, and technical services.
- Supports operation, maintenance, management, delivery and re-delivery of aircraft.
- Works with partners for aircraft maintenance and ground handling.
- Vision is to become a preferred and renowned aviation-services team locally, regionally, and globally.
- Team experience includes more than 250 aircraft deliveries and returns for airlines and lessors.
- Management focuses on client-specific requirements, cost efficiency, and quality of service.

Do not unnecessarily rewrite the factual meaning.

---

# 17. ABOUT — MISSION

Use the supplied mission statement as the factual source.

Visual:

Large centered icon + heading.

```text
MISSION
```

Mission content:

> To provide exceptional and efficient service through its aviation team composed of highly-skilled professionals, demonstrating integrity, courage to lead, and passion to bring outstanding results to its clients while continuing to build relationships based on transparency, accountability, mutual trust and respect.

Use polished typography and spacing.

---

# 18. ABOUT — VISION

Heading:

```text
VISION
```

Content:

> To be the preferred and trusted leader in aviation services, recognized locally, regionally, and globally for excellence and reliability.

---

# 19. ABOUT — VALUES

Do not use generic stock corporate values.

Use four aviation-oriented values:

```text
INTEGRITY
TECHNICAL EXCELLENCE
ACCOUNTABILITY
PARTNERSHIP
```

Each gets:
- Icon
- Short explanation
- Minimal animation

---

# 20. SERVICES PAGE

This is a dedicated full page.

Hero:

```text
AVIATION TECHNICAL SERVICES

TECHNICAL EXPERTISE
THROUGHOUT THE AIRCRAFT LIFECYCLE
```

Supporting text:

Wingbox provides technical advisory, management, training, records, inspection, audit, and aircraft transition support.

---

# 21. SERVICES — OVERVIEW

Show seven services as large numbered modules.

Each module:

```text
01
SERVICE NAME

Short description

LEARN MORE →
```

Use alternating layouts:

```text
TEXT | IMAGE
IMAGE | TEXT
TEXT | IMAGE
...
```

This is preferable to seven tiny cards on the dedicated services page.

---

# 22. SERVICE 01

## Technical Advisory & Consultancy Program

Purpose:
Provide strategic technical guidance for safer, smarter, and more efficient aviation operations.

Possible content areas:

- Technical advisory
- Engineering support
- Operational assessment
- Maintenance strategy
- Regulatory/compliance guidance
- Technical decision support
- Aviation project consultancy

CTA:

**DISCUSS YOUR REQUIREMENT →**

---

# 23. SERVICE 02

## Technical Training Through Canopy

Explain the Wingbox–Canopy collaboration.

Core concept from supplied material:

The sister companies collaborate with local aviation colleges and universities to expose students to real-world aviation industry preparation and help develop future aviation technical professionals.

Show:

```text
ACADEMIC KNOWLEDGE
        ↓
INDUSTRY EXPOSURE
        ↓
TECHNICAL PREPARATION
        ↓
CAREER READINESS
```

CTA:

**LEARN ABOUT THE PROGRAM →**

---

# 24. SERVICE 03

## Aircraft Check Management

Describe:

- Check planning
- Coordination
- Technical oversight
- Maintenance event monitoring
- Documentation
- Compliance tracking
- Aircraft return-to-service support

Use maintenance/hangar imagery.

---

# 25. SERVICE 04

## Fleet Technical Management / CAMO

Describe:

- Continuing airworthiness support
- Fleet technical oversight
- Maintenance planning
- Compliance
- Reliability
- Aircraft status monitoring
- Technical coordination

Make this one of the most visually prominent services.

---

# 26. SERVICE 05

## Aircraft Records Review & Build-up

Describe:

- Records review
- Records reconciliation
- Document organization
- Maintenance history
- Technical records build-up
- Audit readiness
- Transition documentation

Use imagery of aircraft records/documentation.

---

# 27. SERVICE 06

## Aircraft Inspections & Audit

Describe:

- Independent inspections
- Technical assessment
- Audit support
- Compliance review
- Airworthiness review support
- Findings identification
- Documentation

Use aircraft inspection imagery.

---

# 28. SERVICE 07

## Aircraft Delivery & Re-Delivery

Describe:

- Pre-delivery inspection
- Physical inspection
- Records review
- Documentation
- Acceptance support
- Return/re-delivery coordination
- Aircraft transition support

Emphasize Wingbox's experience with aircraft deliveries and returns.

---

# 29. OUR TEAM PAGE

Use the supplied Team screenshot as the factual reference.

Hero:

```text
OUR TEAM

EXPERIENCE BEHIND
EVERY TECHNICAL DECISION
```

---

## Leadership profiles

The supplied screenshot identifies:

### ENGR. DARMILO L. SOSA
CEO / MANAGING DIRECTOR

The supplied biography describes extensive experience in:
- Aircraft leasing
- Technical consultancy
- Engineering
- Fleet management
- Airline technical services
- Aircraft deliveries and returns
- Aviation consultancy

It also identifies leadership involvement with Canopy Innovative System Inc., Aerobox Material Solutions, and the Asian Business Aviation Association.

### ENGR. ENRICO CONDINO
CHIEF OPERATING OFFICER

### ENGR. SHEALTIEL URSULUM
TECHNICAL DIRECTOR

### ENGR. BILLY JOEL LLOUIDO
HEAD OF TRAININGS & SPECIAL PROJECTS

Only publish biography details that are supplied/verified.

---

# 30. TEAM UI

Desktop:

Four leadership cards in one row.

Clicking a person opens:

- Large portrait
- Name
- Position
- Biography
- Areas of expertise

Possible interaction:
- Modal
- Expandable panel
- Dedicated profile page

Mobile:
Vertical cards.

Avoid circular portrait borders if they make the design look dated. Prefer clean rectangular/cropped professional portraits, while retaining the red/navy brand accents.

---

# 31. OUR CLIENTS & PARTNERS PAGE

This page should be more comprehensive than the homepage.

Hero:

```text
OUR CLIENTS & PARTNERS

CONNECTED ACROSS
THE AVIATION INDUSTRY
```

Supporting message:

Wingbox works with airlines, aircraft owners and leasing organizations, aviation service providers, industry organizations, and academic institutions.

---

# 32. AIRLINE CLIENTS

Use the supplied screenshot as the source for logos.

Known airline/client examples shown:

- Cebu Pacific
- AirAsia
- Philippine Airlines
- Air Niugini

Present them in a premium logo grid.

Do not claim a company is a "client" if the source only establishes it as a partner or organization.

---

# 33. AVIATION PARTNERS

The supplied screenshot contains:

- BBAM / Carlyle Aviation Partners
- Castlelake
- Eirtech Aviation Services
- ASBAA
- Dviation
- NAC
- CALC
- Jet Midwest
- DP Aviation Services
- ECCP
- Aerobox Aviation Material Solutions Inc.
- Canopy Innovative System Inc.
- CGA Aero

Categorize rather than creating one enormous logo wall.

Possible categories:

### AIRCRAFT OWNERS / LESSORS

BBAM / Carlyle Aviation Partners  
Castlelake  
NAC  
CALC

### AVIATION SERVICES / TECHNICAL PARTNERS

Eirtech  
Dviation  
Jet Midwest  
DP Aviation Services  
Aerobox  
CGA Aero

### INDUSTRY ORGANIZATIONS

ASBAA  
ECCP

---

# 34. ACADEMIC PARTNERS

The supplied screenshot shows academic collaborations involving Canopy Innovative System Inc.

Displayed institutions include:

- Holy Angel University
- National Aviation Academy of the Philippines
- University of Perpetual Help System DALTA
- PATTS College of Aeronautics
- Aviation College of Science and Technology

Present these under:

```text
ACADEMIC PARTNERS

BUILDING THE NEXT GENERATION
OF AVIATION PROFESSIONALS
```

---

# 35. CANOPY FEATURE

Create a featured section:

```text
WINGBOX × CANOPY

TECHNICAL TRAINING THROUGH CANOPY
```

Explain the academic/industry collaboration.

This section should visually connect the **Services** page and **Clients & Partners** page.

Use:
- Training photography
- University/aviation imagery
- Academic partner logos
- Three-step process

---

# 36. CLIENT VALUE SECTION

Use the supplied client explanation as the conceptual basis.

Headline:

```text
PROTECTING THE VALUE
OF EVERY AIRCRAFT
```

Core message:

Whether an aircraft is owned or leased, maintaining the asset in optimal condition helps preserve its value, support operational reliability, and reduce avoidable costs or penalties during aircraft sale, lease return, or transition.

Visual flow:

```text
TECHNICAL CONDITION
        ↓
COMPLIANCE
        ↓
RECORDS
        ↓
AIRCRAFT VALUE
        ↓
SUCCESSFUL TRANSITION
```

This should become one of the strongest strategic messages on the Clients page.

---

# 37. TESTIMONIALS

Only show testimonials when actual approved testimonials are supplied.

Design:
- White cards
- Thin border
- Small quotation mark
- Short quote
- Name/title/company where approved

No fake testimonials.

---

# 38. CONTACT PAGE

Use the supplied contact screenshot as the source for the actual location/contact information.

Hero:

```text
CONTACT US

LET'S TALK AVIATION
```

---

# 39. CONTACT INFORMATION

The supplied screenshot shows:

### HEADQUARTERS

Units 5&6, La Elena Bldg.,
Agapita Rd.,
Batong Malake,
Los Baños, Laguna,
Philippines 4030

### MANILA OFFICE

Unit 812 - THE OFFIX 2,
Parañaque Integrated Terminal Exchange,
#1 Kennedy Rd.,
Brgy. Tambo,
Parañaque City,
Philippines 1701

### PHONE

+63 (049) 501-0799

### EMAIL

secretariat@wingboxaviation.com

wingboxaviation@gmail.com

Treat the supplied screenshot as the source of truth and make all contact information editable through a centralized configuration/content file.

---

# 40. CONTACT FORM

Fields:

```text
FULL NAME *
COMPANY *
POSITION
EMAIL *
PHONE
SERVICE OF INTEREST *
AIRCRAFT / FLEET INFORMATION
MESSAGE *
```

Service options:

- Technical Advisory & Consultancy Program
- Technical Training Through Canopy
- Aircraft Check Management
- Fleet Technical Management / CAMO
- Aircraft Records Review & Build-up
- Aircraft Inspections & Audit
- Aircraft Delivery & Re-Delivery
- General Inquiry

Button:

**SEND MESSAGE →**

Requirements:

- Client-side validation
- Clear error messages
- Success state
- Accessible labels
- Spam protection
- Backend-ready form architecture

Do not pretend an email has been sent if no backend/email service is configured.

---

# 41. MAP

Contact page should include an interactive or embedded map.

Show:
- Headquarters
- Manila office if supported

If an API key is unavailable, use a clean map placeholder/link rather than breaking the page.

---

# 42. FOOTER

Footer structure:

```text
WINGBOX AVIATION INC.
MOVING TOWARD EXCELLENCE

QUICK LINKS
About Us
Services
Our Team
Our Clients
Contact Us

SERVICES
Technical Advisory & Consultancy
Technical Training Through Canopy
Aircraft Check Management
Fleet Technical Management / CAMO
Aircraft Records Review & Build-up
Aircraft Inspections & Audit
Aircraft Delivery & Re-Delivery

GET IN TOUCH
Address
Phone
Email

SOCIAL / PROFESSIONAL LINKS
[icons only where actual accounts exist]
```

Bottom:

```text
© 2026 Wingbox Aviation Inc. All Rights Reserved.
```

Do not invent social media URLs.

---

# 43. RESPONSIVE DESIGN

Mobile is a priority.

## Desktop

- Max content width: approximately 1200–1400px
- Large imagery
- Generous whitespace
- Two-column layouts
- 3–4 card grids where appropriate

## Tablet

- 2-column layouts
- Reduced heading sizes
- Collapsible navigation

## Mobile

- Single-column
- Hamburger menu
- Large readable typography
- Full-width CTA buttons
- Horizontal logo carousel where useful
- Service sections become stacked
- Team cards become vertical
- Contact form becomes one column
- Map becomes responsive
- Never allow horizontal page overflow

Hero mobile:

```text
AIRCRAFT IMAGE
      ↓
DARK OVERLAY
      ↓
MOVING TOWARD
EXCELLENCE

Aircraft Check Management,
Technical Advisory,
and CAMO Services

[ EXPLORE SERVICES ]
```

---

# 44. ANIMATION SYSTEM

Use one consistent motion language.

Preferred:

- Fade up
- Fade in
- Small horizontal slide
- Image reveal
- Count-up statistics
- Header transition

Timing:
Approximately 400–700ms.

Easing:
Smooth, professional, non-bouncy.

Avoid:
- Excessive parallax
- Spinning objects
- Huge zoom animations
- Bouncy cards
- Text flying from every direction

Animation should communicate precision.

---

# 45. IMAGE DIRECTION

Use real aviation photography wherever possible.

Priority imagery:

1. Aircraft on runway
2. Aircraft in hangar
3. Engine inspection
4. Technical engineer working
5. Aircraft records
6. Training classroom
7. Aircraft inspection
8. Aircraft delivery/re-delivery
9. Professional aviation team
10. Airport operations

Do NOT use outdated glossy 3D aircraft renders.

Do NOT use generic business stock photography when aviation imagery is available.

---

# 46. ACCESSIBILITY

Implement:

- Semantic HTML
- Proper heading hierarchy
- Alt text
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Accessible buttons
- Accessible mobile menu
- Form labels
- Error announcements
- Reduced-motion support

---

# 47. SEO

Global metadata:

Title:

**Wingbox Aviation Inc. | Aviation Technical Services & Consultancy**

Description:

**Wingbox Aviation Inc. provides aircraft technical management, CAMO support, technical advisory, training, inspections, records review, aircraft check management, and aircraft delivery and re-delivery services.**

Suggested keywords:

- Wingbox Aviation
- aviation technical services
- aircraft technical management
- CAMO Philippines
- aircraft check management
- aircraft records review
- aircraft inspections
- aircraft delivery
- aircraft re-delivery
- aviation consultancy Philippines
- aviation technical training

Create appropriate page-specific metadata.

---

# 48. PERFORMANCE

Prioritize:

- Fast initial load
- Optimized images
- WebP/AVIF where appropriate
- Lazy loading below-the-fold images
- Responsive image sizes
- Minimal JavaScript
- No unnecessary animation libraries
- No massive video backgrounds unless optimized
- Good Core Web Vitals

---

# 49. COMPONENT SYSTEM

Build reusable components:

```text
Header
MobileMenu
Hero
SectionHeading
PrimaryButton
SecondaryButton
StatStrip
ImageTextSection
ServiceCard
ServiceFeature
TeamCard
TeamProfileModal
LogoGrid
LogoCarousel
TestimonialCard
ValueCard
CTASection
ContactForm
ContactInfo
Map
Footer
```

Keep components reusable across pages.

---

# 50. CONTENT ARCHITECTURE

Do not hard-code repeated content into multiple pages.

Create centralized content structures for:

```text
services
team
clients
partners
academicPartners
contactInformation
siteNavigation
statistics
testimonials
```

This allows Wingbox personnel to update content later without redesigning the site.

---

# 51. IMPORTANT CONTENT RULES

### DO

- Preserve factual information from the supplied screenshots.
- Improve grammar and readability when presenting copy.
- Maintain the meaning of company statements.
- Use the real supplied names and positions.
- Keep the seven approved services exactly as specified.
- Separate clients, partners, organizations, and academic partners.
- Make uncertain information editable.
- Use placeholders where verified information is missing.

### DO NOT

- Invent certifications.
- Invent clients.
- Invent testimonials.
- Invent team members.
- Invent aircraft counts beyond supplied information.
- Invent social media accounts.
- Invent partnerships.
- Add the Japan Parts Partnership as a core service.
- Claim an organization is a client if it is only identified as a partner.
- Replace Wingbox branding with a generic aerospace brand.

---

# 52. REFERENCE SCREENSHOT INTERPRETATION

The supplied screenshots should be treated as **content and visual references**, not as pixel-perfect templates.

### Reference A
Modern Wingbox landing page:
- Use as the primary visual direction for the new website.
- Preserve its hero, stats, services, team, clients, advantage, CTA, and contact structure.

### Reference B
Original Our Team page:
- Use for team names, positions, portraits, and biography context.
- Modernize the presentation.

### Reference C
Original About Us page:
- Use for company history, mission, vision, and factual company description.
- Modernize typography and layout.

### Reference D
Original Contact page:
- Use for headquarters, Manila office, phone, email, and map/location context.
- Rebuild as a modern contact experience.

### Reference E / additional partner-client screenshot
Use for:
- Airline logos
- Aviation partners
- Academic partners
- Canopy relationship
- Client/partner messaging

---

# 53. FINAL USER EXPERIENCE

The complete website should tell this story:

```text
WHO IS WINGBOX?
        ↓
WHY SHOULD I TRUST WINGBOX?
        ↓
WHAT CAN WINGBOX DO?
        ↓
WHO DOES WINGBOX WORK WITH?
        ↓
WHO IS BEHIND THE COMPANY?
        ↓
HOW CAN I CONTACT WINGBOX?
```

A visitor should understand the company within the first 10 seconds.

Within 30 seconds they should understand the seven services.

Within 60 seconds they should understand the company's technical credibility, team, clients/partners, and aviation ecosystem.

The final conversion should be:

**GET IN TOUCH →**

---

# 54. FINAL DESIGN PRINCIPLE

The new Wingbox website should feel like:

> **An established aviation technical company that has modernized its digital presence — not a startup pretending to be an aviation company.**

The visual language should communicate:

**PRECISION**  
**EXPERIENCE**  
**TECHNICAL AUTHORITY**  
**RELIABILITY**  
**PARTNERSHIP**  
**MOVEMENT**

The existing brand phrase remains the final visual anchor:

# MOVING TOWARD EXCELLENCE

Build the entire website responsively and cohesively from this specification and the supplied screenshots.
