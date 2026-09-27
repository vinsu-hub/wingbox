# Finalized Project Scope & Touchpoint Map
## Wingbox Aviation Inc. — Philippine & Clark Operations
*Full system: WingBox OS (operational system of record) · AI Pipeline Harness · Layered Agentic Operating System (Hermes)*

This document consolidates the three architecture layers designed for Wingbox into one finalized scope: the operational system of record (Section 1), the AI pipeline harness that automates high-volume work within it (Section 2), and the layered agentic operating system that gives every employee a personal AI agent feeding a company-wide second brain (Section 3). Section 4 maps every touchpoint across all three layers in one table. Section 5 sets governance defaults.

| Layer | What it is | Status |
|---|---|---|
| 1. WingBox OS (Operational System of Record) | Inspections, aircraft records/CAMO, technical library/RAG, 3D damage documentation, Japan import & Clark assembly ops, client procurement portal | Architecture finalized (Fig. 1) |
| 2. AI Pipeline Harness | Task-specific AI agents at each operational handoff — scheduling, field-data structuring, compliance monitoring, report/presentation drafting, import & customs coordination | Architecture finalized (Fig. 2) |
| 3. Agentic Operating System (Hermes) | Personal agent + vault per employee, opt-in Slack capture, department roll-up, company second brain (Obsidian) | Architecture finalized (Fig. 3) |

---

## 1. Operational System of Record — WingBox OS

Six operational modules feed a shared core data layer, which drives compliance, reporting, and client-facing outputs.

```
 Client Portal      Field Inspector      AI Intake/          Slack /
 (parts requests,   App (checklist,      Scheduling Agent    Email Channel
 certificate        photo/3D capture,                        (client &
 lookup)            offline mode)                             partner comms)
      |                   |                    |                   |
      v                   v                    v                   v
 +-----------+   +---------------+   +-------------------+  +------------------+  +---------------------+
 | Fleet /   |   | Inspections / |   | Technical Library / |  | Damage / 3D      |  | Import, Assembly &  |
 | Aircraft  |   | Findings      |   | Knowledge Base /RAG |  | Documentation    |  | Supply Ops (Japan → |
 | Records   |   |               |   |                     |  |                  |  | Clark)              |
 +-----------+   +---------------+   +-------------------+  +------------------+  +---------------------+
      |                   |                    |                   |                     |
      +-------------------+--------------------+-------------------+---------------------+
                                        |
                                        v
                          +---------------------------------+
                          |     Core Data Layer (WingBox OS) |
                          |  Supabase/Postgres + Drizzle ·   |
                          |  pgvector · Astra DB · Storage   |
                          +---------------------------------+
                                        |
        +-------------------+----------+----------+---------------------+
        v                   v                     v                     v
 +--------------+   +----------------+   +-----------------+   +------------------+
 | Compliance   |   | Client Reports |   | HQ / Leadership  |   | Certificate &    |
 | (AD/SB audit |   | & Presentations|   | Consolidation    |   | Fulfillment      |
 | trail)       |   |                |   | (Serdar/exec)    |   | Issuance         |
 +--------------+   +----------------+   +-----------------+   +------------------+
                                        |
                                        v
                       +--------------------------------------+
                       |      AI-Powered Pipeline Harness      |
                       | inspection scheduling · field data    |
                       | structuring · compliance monitoring · |
                       | report/3D drafting · import/customs   |
                       +--------------------------------------+
                                        |
                                        v
                       +--------------------------------------+
                       |         Human Review & Sign-off       |
                       | Engineers · QA Inspectors ·           |
                       | Compliance Officers · Ops Manager     |
                       +--------------------------------------+
```
*Fig. 1 — WingBox OS operational architecture with module touchpoints.*

---

## 2. AI Pipeline Harness — Stage by Stage

Each AI agent sits at one bounded handoff in the real operating pipeline; every output routes to a human checkpoint.

```
1. Inspection      2. Field          3. Findings &      4. Reporting &      5. Import,
   Intake             Capture           Technical           Presentation        Customs &
   Client/planner     Engineer          Analysis            Draft & present     Assembly
   requests a check   captures data     Review findings     to client           Japan → Clark →
                                        against manuals                         client supply
        |                  |                  |                    |                  |
        v                  v                  v                    v                  v
 +--------------+  +----------------+  +------------------+  +----------------+  +------------------+
 | Inspection   |  | Field Data     |  | Technical         |  | Report &       |  | Import & Assembly|
 | Scheduling   |  | Structuring    |  | Assistant /       |  | Presentation   |  | Coordination     |
 | Agent        |  | Agent          |  | Compliance         |  | Drafting Agent |  | Agent            |
 | (GPT)        |  | (GPT)          |  | Monitoring Agent   |  | (GPT + Astra + |  | (GPT)            |
 |              |  |                |  | (Claude — cited)   |  | Blender/3D)    |  |                  |
 | Confirms     |  | Converts       |  | Flags applicable   |  | Auto-drafts    |  | Tracks shipment  |
 | availability,|  | checklist/     |  | AD/SB, cites AMM   |  | report + 3D    |  | status, Clark    |
 | routes job   |  | photos/3D scan |  | reference          |  | model, flags   |  | assembly stage,  |
 |              |  | into structured|  |                    |  | mismatches     |  | customs doc gaps |
 |              |  | finding record |  |                    |  |                |  |                  |
 +--------------+  +----------------+  +------------------+  +----------------+  +------------------+
        |                  |                  |                    |                  |
        +------------------+------------------+--------------------+------------------+
                                        |
                                        v
                       +--------------------------------------+
                       |      Human Review & Sign-off Layer    |
                       | Engineer · QA Inspector ·              |
                       | Compliance Officer · Ops/Branch Manager|
                       +--------------------------------------+
                                        |
                                        v
                       +--------------------------------------+
                       |   Shared Data Layer (Core WingBox OS) |
                       |   Every agent reads/writes here —     |
                       |   no agent holds private state        |
                       +--------------------------------------+
                                        |
        +-------------------+----------+----------+
        v                   v                     v
 +--------------+   +----------------+   +-----------------+
 | Faster       |   | Fewer rejected |   | Audit-ready      |
 | turnaround   |   | filings/customs|   | always           |
 | (hours to    |   | docs           |   | (continuous      |
 | minutes per  |   |                |   | compliance check)|
 | report)      |   |                |   |                  |
 +--------------+   +----------------+   +-----------------+
```
*Amber = AI agent (Claude for cited technical Q&A; GPT for drafting/orchestration) · Teal = system/data of record · Gray = human checkpoint.*

*Fig. 2 — AI pipeline harness mapped to the five-stage WingBox operating pipeline.*

---

## 3. Layered Agentic Operating System — Hermes

Personal agents (Layer 1) capture live context via opt-in Slack channels only (Layer 2), compile into department context (Layer 3), then a company second brain (Layer 4 — Obsidian vault, GPT-powered via Copilot, MCP-connected to WingBox OS), which feeds the AI pipeline harness and core system (Layer 5).

```
LAYER 1 · Personal agent + vault
 +------------------+   +------------------+   +------------------+   +------------------+
 | Engineers /      |   | QA Inspectors     |   | Import/Assembly   |   | Admin / Exec      |
 | Field Staff       |   |                   |   | Coordinators      |   | (incl. Serdar)    |
 | Agent + vault     |   | Agent + vault     |   | (Clark) Agent +   |   | Agent + vault     |
 | (Hermes)          |   | (Hermes)          |   | vault (Hermes)    |   | (Hermes)          |
 +------------------+   +------------------+   +------------------+   +------------------+
          |                     |                      |                      |
          +---------------------+----------------------+----------------------+
                                        |
LAYER 2 · Live capture (opt-in channels only)
                       +--------------------------------------+
                       |            Slack Monitor              |
                       | Reads only channels explicitly added —|
                       | no DMs, no blanket access              |
                       +--------------------------------------+
                                        |
          +-----------------------------+-----------------------------+
          v                             v                             v
LAYER 3 · Department context
 +------------------+          +------------------+          +------------------+
 | Inspections &     |          | QA/QC &          |          | Import & Clark    |
 | Field Ops         |          | Procurement       |          | Assembly Ops      |
 | Dept context       |          | Dept context      |          | Dept context      |
 +------------------+          +------------------+          +------------------+
          |                             |                             |
          +-----------------------------+-----------------------------+
                                        |
LAYER 4 · Company second brain
                       +--------------------------------------+
                       |        WingBox Company Second Brain   |
                       | Obsidian vault (Templater for report  |
                       | templates, Copilot on GPT, MCP-linked |
                       | to Astra/Supabase), synced across      |
                       | every device                            |
                       +--------------------------------------+
                                        |
LAYER 5 · AI pipeline harness + WingBox OS
                       +--------------------------------------+
                       |         AI Pipeline Harness           |
                       | (see Fig. 2 — scheduling, field data, |
                       | compliance monitoring, report/3D,     |
                       | import/customs coordination)          |
                       +--------------------------------------+
                                        |
                       +--------------------------------------+
                       |   Core WingBox OS (system of record)  |
                       | Aircraft records, findings, compliance,|
                       | import/assembly status, client data   |
                       +--------------------------------------+
                                        |
                       +--------------------------------------+
                       |     Human Review & Sign-off Layer     |
                       | Named checkpoint before anything      |
                       | becomes final                          |
                       +--------------------------------------+
```
*Governance defaults: opt-in Slack channels only · self-hosted Hermes agent per employee · named human checkpoint at every AI output.*

*Fig. 3 — Finalized layered agentic operating system for Wingbox.*

---

## 4. Full Touchpoint Map

| Layer | Component | Function | Touchpoints |
|---|---|---|---|
| WingBox OS | Client Portal | Parts requests, certificate lookup, presentation viewing | Airline/OEM clients; Parts Requests module; Client Reports |
| WingBox OS | Field Inspector App | Offline checklist, photo/3D capture, e-signature | Engineers; Inspections module; Damage/3D module |
| WingBox OS | Fleet / Aircraft Records | Compliance status, life tracking, one record per aircraft | Engineers; Planners; QA; Compliance module |
| WingBox OS | Inspections / Findings | Job scheduling, checklist execution, findings triage | Engineers; QA Inspectors; Planners |
| WingBox OS | Technical Library / Knowledge Base / AI Assistant | Cited RAG search over AMMs/ADs/SBs | Engineers; QA; Compliance officers |
| WingBox OS | Damage / 3D Documentation | Photogrammetry/LiDAR capture, Blender processing, 3D presentation | Engineers; Reports/Presentations module; clients (via Present-to-Client) |
| WingBox OS | Import, Assembly & Supply Ops (Japan → Clark) | Shipment tracking, Clark assembly work orders, customs docs, QA/QC on incoming parts | Japan suppliers; Clark assembly technicians; customs brokers; client airlines |
| WingBox OS | Core Data Layer | Finance/records, master data, document control | All modules; Compliance; HQ/exec consolidation |
| AI Harness | Inspection Scheduling Agent | Conversational scheduling/routing | Client portal; Planner; Inspections module |
| AI Harness | Field Data Structuring Agent | Converts checklist/photos/3D scans into structured records | Field Inspector App; Damage/3D module |
| AI Harness | Technical Assistant / Compliance Monitoring Agent | Cited AD/SB/AMM answers; flags compliance gaps | Findings; Compliance module; AI Assistant |
| AI Harness | Report & Presentation Drafting Agent | Auto-drafts reports; orchestrates 3D model generation | Reports; Presentations module; Blender pipeline |
| AI Harness | Import & Assembly Coordination Agent | Tracks shipments, Clark assembly stages, customs doc gaps | Import/Assembly Ops module; customs brokers; branch manager |
| Agentic OS (Hermes) | Personal agent + vault | Repetitive checkups, templated drafting, status tracking | Individual employee; department compiler |
| Agentic OS (Hermes) | Slack monitor (opt-in) | Captures project context from channels | Opted-in channels only; personal vaults |
| Agentic OS (Hermes) | Department compiler | Rolls up personal vaults into team context | Inspections/Field Ops, QA/Procurement, Import/Assembly Ops departments |
| Agentic OS (Hermes) | Company second brain (Obsidian) | Company-wide compiled context, template library, MCP-linked to WingBox OS | All departments; AI pipeline harness; executive briefing |

---

## 5. Governance Defaults Across All Layers

| Area | Default |
|---|---|
| Slack/Teams monitoring | Opt-in channels only — never DMs, never blanket workspace access |
| Data residency | Self-hosted Hermes per employee; client-supplied CAD/OEM data walled off per engagement, never reused across clients or folded into demo assets |
| AI output | Always routes to a named human checkpoint before becoming final — no AI agent certifies an airworthiness decision, signs a compliance record, or issues a customs filing |
| Vault structure | Personal subfolders per employee; shared/company files (report templates, SOPs) written only by the compiler layer, to avoid sync conflicts |
| Model assignment | Claude for citation-strict technical Q&A (safety-relevant); GPT for report drafting, 3D-pipeline orchestration, and the Hermes agent layer |
| Import/customs data | Treated with the same conservatism as compliance data — self-hosted, audit-logged, never exposed to the illustrative/demo 3D asset library |

---

*Finalized architecture for discussion and implementation planning. Integration points to be confirmed against Wingbox's actual Japan supplier agreement and Clark facility operations prior to build.*
