**Status: Active 2025.01.20**

**Draft Completed:** 2025.01.09

## **Market Category**

### **Primary Market Frame**

**Replacement for building and operating a modern data stack**

*Definite replaces the need to assemble, maintain, and evolve a fragmented analytics stack (ETL, warehouse, BI, semantic, AI layers) in order to deliver fast, trustworthy answers and enable AI-driven action.*

### **Implied Market Frame**

The optimal foundation for AI-driven analytics and data agents

Definite provides a single analytics foundation with an embedded semantic layer, enabling AI and humans to quickly generate insights, build accurate dashboards, and evolve analytics in one system—while serving as the trusted system of record for external agents and automation.

### **Canonical positioning statement**

Definite replaces the need to build and operate a data stack by giving leadership fast, trustworthy answers—and the ability to act on them—without the overhead, complexity, or fragility of traditional analytics infrastructure.

## **Competitive Alternative Approaches**

*(What customers would do if Definite didn’t exist)*

These are ordered in order of importance but in reality, its more likely that the three approaches would happen in sequence from, stick with legacy stack (#3), attempt an AI upgrade (#2), then complete overhaul build (#1).

### **Approach #1: Build and operate a modern data stack**

*(The default “serious” choice —* ***and the primary enemy****)*

**Examples**

* Snowflake / BigQuery / Redshift
* ETL tools (Fivetran, Airbyte, Stitch)
* BI tools (Looker, Tableau, Power BI)
* Internal data engineers + analysts

**Why customers choose it**

* Perceived as best practice
* Maximum flexibility in theory
* Analyst and investor familiarity

**Why it fails**

* Long time to value
* High people and coordination cost
* Fragile pipelines and semantic drift
* Constant rebuilds
* Anti-pattern for agentic analytics (agents can observe, but not act)

### **Approach #2: AI or BI layered on top of an existing stack**

*(“Let’s add AI without solving the foundation”)*

**What this is**

An attempt to get AI-driven insights by placing BI tools or AI agents on top of an existing warehouse or data stack—without re-architecting the system underneath.

**Examples**

* BI tools with AI assistants
* AI agents querying an existing DB/DW
* “Chat with your data” products

**Why customers choose it**

* Promises AI speed without disruption
* Feels modern and lightweight
* Avoids rethinking the data stack

**Why it fails**

* Assumes the data stack is already solved
* AI can read data but cannot reliably act
* Semantic inconsistencies flow directly into AI outputs
* Insights remain trapped in chat or dashboards
* Automation breaks without end-to-end control
* Ultimately exposes (rather than fixes) stack fragility

**Internal takeaway**

This approach fails due to illusion—AI amplifies the weaknesses of the existing stack instead of overcoming them.

### **Approach #3: Legacy or inherited data stack (Status quo)**

*(“This is what we already have”)*

**What this is**

A data stack that grew incrementally over time and is now relied on because it’s familiar and already deployed—not because it’s effective.

**Examples**

* MSSQL + Power BI
* Older warehouse with dashboards
* Incremental tooling layered on over years

**Why customers stick with it**

* It’s already running
* Switching feels risky or disruptive
* “Good enough” for basic reporting

**Why it fails**

* Slow to answer new questions
* Metrics drift and inconsistency
* Low trust across teams
* Increasingly brittle and expensive to maintain
* Very difficult to evolve for AI or automation

**Internal takeaway**

This approach fails due to inertia and decay—teams know it’s limiting, but changing it feels costly.

### **Alternate Status Quo: Manual reporting**

This is less true of our bullseye target market.

**Examples**

* CSV exports
* Google Sheets
* Slide decks
* Analyst heroics

**Why it fails**

* Slow
* Error-prone
* Impossible to scale with decision velocity or AI

## **Distinct Capabilities**

*(Not all are unique vs every alternative; all are relevant)*

| **Priority** | **Distinct Capability** | **What It Is** | **Replaces / Displaces** |
| --- | --- | --- | --- |
| 🟢 | **Fully integrated, all-in-one system** | Single product spanning ingestion, transformation, modeling, analytics, dashboards, and AI. | Multi-tool data stacks (ETL + DW + BI + AI glue) |
| 🟢 | **Mandatory, centralized semantic layer** | Required shared metric definitions governing all analytics and AI outputs. | Metric drift, duplicated semantic layers, spreadsheet logic |
| 🟢 | **AI agent with system-level read + write access** | AI can modify integrations, models, dashboards, and documentation — not just query data. | Observation-only analytics tools, manual analyst workflows |
| 🟢 | **Rapid time-to-value / fast initial setup** | Analytics can be live in days, not months, without standing up infrastructure. | Long data-stack implementation projects |
| 🟡 | **Pay-per-integration pricing model** | Customers pay based on connected sources rather than per-seat or per-tool pricing. | Seat-based BI pricing, bundled vendor contracts |
| 🟡 | **Embedded Python execution with governed read/write** | Python runs inside the platform, reads governed data, writes results back, and pushes outputs to external systems. | External notebooks, ad-hoc scripts, reverse ETL tools |
| 🟡 | **Streaming ingestion with built-in transformations** | Native ingestion and transformation without maintaining separate ETL + dbt pipelines. | Batch ETL jobs, standalone transformation frameworks |
| 🟡 | **Metrics API and agent-ready data models** | Governed metrics exposed programmatically for automation and AI agents. | Bespoke metric services, hard-coded business logic |
| 🟡 | **Scales without re-platforming** | Architecture supports early-stage through enterprise workloads in the same system. | Rebuilds, warehouse migrations, tool swaps |
| 🟡 | **Optional embedded data team as a service** | Humans operate directly inside the platform when customers don’t want to staff a data team. | Hiring and managing in-house data engineers/analysts |
| 🔵 | **Enterprise governance built in (RBAC, SOC II)** | Security, access control, and compliance are native to the system. | Late-stage governance retrofits |

## **Differentiated Value**

*(Need to narrow down to 1–4 primary themes based on experience in sales conversations. The rest will stay as backups.)*

### **Value Theme #1: Rapid deployment & durable analytics**

*(Why stacks stall)*

**Failure of the alternative**

* Months of setup
* Fragile pipelines
* Nothing usable at the end

**What matters**

* Streaming ingestion
* Built-in transformations
* Fully integrated system
* AI agent that can modify the system

**Value statement**

Analytics moves from setup to answers in days—and doesn’t break when the team changes.

### **Value Theme #2: AI automation that actually executes**

*(Why “AI analytics” disappoints)*

**Failure of the alternative**

* AI can observe but not act
* Humans remain the bottleneck
* Insights die in chat windows

**What matters**

* AI agent with write access
* Data to power agents and automation
* Metrics API powers external agents
* Python execution (internal + external activation)

**Value statement**

Insights don’t stop at recommendations—they turn into working analytics and workflows.

### **Value Theme #3: Analytics made easy for business users**

*(Why stacks never spread)*

**Failure of the alternative**

* Analysts become gatekeepers
* Business users don’t trust dashboards
* Data teams become bottlenecks

**What matters**

* Fi (AI Assistant)
* Ask and answer in Slack
* Drag-and-drop visualizations
* Governed semantic layer

**Value statement**

Anyone can get answers without breaking the system or asking for help.

### **Value Theme #4: Answers everywhere you work**

*(Why analytics gets ignored)*

**Failure of the alternative**

* Dashboards live in isolation
* Decisions happen elsewhere
* Data is consulted too late

**What matters**

* Slack alerts
* Email alerts
* Sync to Sheets / CRM
* Embedded visualizations

**Value statement**

Data shows up where decisions are actually made.

### **Value Theme #5: Easy, low-risk to get started**

*(Why stacks fail early)*

**Failure of the alternative**

* High upfront commitment
* Long setup before value
* Irreversible tooling decisions

**What matters**

* Rapid deployment
* Pay per integration
* Single system to learn
* Optional data team to execute

**Value statement**

Teams can start answering real questions without committing to a long-term data architecture.

### **Value Theme #6: Scales to enterprise without re-platforming**

*(Why stacks are rebuilt)*

**Failure of the alternative**

* Start simple, then rebuild
* New tools at every stage
* Governance bolted on late

**What matters**

* DuckDB + DuckLake architecture
* Semantic layer
* RBAC
* SOC II

**Value statement**

Teams don’t outgrow the system just as it starts to work.

### **Value Theme #7: Power without chaos (technical teams)**

*(Why stacks fragment)*

**Failure of the alternative**

* Custom logic forks the system
* Exceptions break trust
* Power users create debt

**What matters**

* SQL
* Python
* MCP
* Low-level control inside governance

**Value statement**

Advanced teams can extend the system without breaking it.

## **Best-Fit Customers (Account characteristics)**

### **Company profile**

Definite is built for **operationally complex, product-led companies** that generate meaningful volumes of transactional and behavioral data, but don’t have the appetite—or patience—to build and maintain a traditional data stack.

This typically includes:

* Series A/B startups **and** advanced, product-led SMBs
* Fintech, lending, and financial services platforms
* B2B SaaS and vertical SaaS companies
* Marketplaces, commerce operators, and multi-brand businesses

What they have in common is **complexity, not size**:

* Multiple revenue models, customer segments, or operating entities
* Data spread across product databases, payments, CRM, marketing, support, and ops systems
* Real business decisions that can’t wait for multi-month data projects

### **Organizational reality**

These teams operate under **real performance pressure**:

* Leadership credibility depends on fast, accurate answers
* Existing tools are fragmented, slow, or untrusted
* The “modern data stack” is already in place—or actively being considered—but feels heavy, brittle, or overbuilt
* AI initiatives are underway or imminent, exposing gaps in governance, semantics, and system control

They need speed **without sacrificing trust**, and cannot afford rebuilds every time the business evolves.

### **Buyer / Champion**

Definite’s primary buyers are **executives accountable for outcomes**, not tool owners.

Common champions include:

* CEO / Founder
* COO
* CRO or Head of Revenue
* CFO or Finance leader (especially in fintech and lending)

These buyers are often paired with an operational owner such as:

* Head of Data / Analytics
* RevOps or Growth Ops
* Finance Ops or Business Operations

The deal moves forward when an accountable executive sees Definite as a way to **reduce risk and increase decision velocity**, not as another analytics tool.

### **Why they care more than others**

Best-fit customers care because:

* When data is slow, broken, or inconsistent, **their credibility is at risk**
* Fragmented stacks collapse under AI and automation pressure
* They need answers that are **fast, trustworthy, and executable**, not buried in dashboards or tickets

They are not optimizing for “better reporting.”

They are trying to **run the business with confidence**.

### **What they are trying to achieve**

**They are:** leaders responsible for revenue, operations, and predictability across the business.

**They want:** a single, governed analytics foundation that delivers fast answers today and supports AI-driven execution tomorrow—without the overhead, fragility, or coordination tax of a traditional data stack.

| **Company** | **Dominant Alternative They’re In** | **Evidence from Call** | **Primary Failure Pattern** | **Value Themes Triggered (one per line)** | **Qualifying Reasons** | **Disqualifying Reasons** | **Fit vs Positioning** | **Notes / Sales Implication** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **PayLaterr** | Approach #1: Build & operate modern stack | Snowflake signed, many tools, 6+ weeks, still can’t query | Stack complexity, coordination tax, semantic failure | #1 Rapid deployment & durable analytics#2 AI automation that executes#5 Easy, low-risk to get started | Already paid the “serious stack” tax; explicit frustration; open to ripping things out | If they decide to “just hire more engineers” | 🔥 Ideal fit | Replacement narrative lands cleanly. Don’t pitch features—pitch exit from failure. |
| **GoPerfect** | Approach #1: Build & operate modern data stack (active evaluator) | Running RudderStack + Fivetran + BigQuery + Power BI; positive reaction to replacement | Tool sprawl, ops overhead, cost stack-up | #1 Rapid deployment & durable analytics#5 Easy, low-risk to get started#6 Scales without re-platforming#7 Power without chaos | Already understands the stack problem; recognizes “this is exactly what we do” | If they mentally bucket you as “just a cheaper open-source stack” | 🔥 Ideal fit | Mirror their stack diagram → collapse it → drive the tax wedge. Avoid BI language. |
| **Society Brands** | Approach #1 (actively evaluating) | Snowflake/Databricks, bronze/silver/gold, MCP, n8n | Stack overbuild, orchestration hell | #2 AI automation that executes#6 Scales to enterprise without re-platforming | Explicit agentic goals; system-of-record thinking; exec mandate | If they insist on warehouse-first orthodoxy | 🔥 Ideal fit | This is your implied market frame verbatim. Lead with “agents fail without writable systems.” |
| **OpinionRoute** | Approach #2: Failed AI BI | Metabase + AI promise collapsed | hit non-agentic analytics ceiling | #2 AI automation that executes#7 Power without chaos | Burned by AI-on-top tools; wants AI-native foundation | If they reframe you as “Metabase++” | 🔥 Ideal fit | Strong pull, but fragile framing. Shut down BI comparisons fast. |
| **Kurk** | Approach #2 → #1 hybrid | Polar, Omnicommerce, many tools, no AI linkage | Tool sprawl, no agent backbone | #1 Rapid deployment & durable analytics |  |  |  |  |
| #2 AI automation that executes |  |  |  |  |  |  |  |  |
| #7 Power without chaos | Feels fragmentation pain; AI-curious but pragmatic | If they chase another point solution | 🟢 Strong fit | Lead with consolidation → then AI. Not the other way around. |  |  |  |  |
| **Squareyards** | Approach #2: AI-first BI tools | Tried [Wren.ai](http://wren.ai), hit table limits, wants NLQ | AI-on-BI ceiling | #3 Analytics made easy for business users#1 Rapid deployment & durable analytics | Clear NLQ + exec reporting need; scale matters | If they only want a chat UI on top of DB | 🟢 Strong fit | Anchor on semantic layer + scale, not “chat with data.” |
| **DSTLRY** | Approach #3 → #1 transition | Postgres sprawl, publisher dashboards, rev-share complexity | Fragmentation, business logic explosion | #1 Rapid deployment & durable analytics#3 Analytics made easy for business users#4 Answers everywhere you work | Real business complexity; multi-stakeholder reporting | If they over-index on recommender systems prematurely | 🟢 Strong fit | Keep focus on operational clarity first, AI second. |
| **Lendscape** | Approach #3: Legacy stack | Jira + CRM split; new CEO wants 360 view | Inherited system decay | #1 Rapid deployment & durable analytics |  |  |  |  |
| #3 Analytics made easy for business users#4 Answers everywhere you work | Exec-driven urgency; credibility at stake | If CEO urgency fades | 🟢 Strong fit | Sell “credibility + speed,” not architecture. |  |  |  |  |
| **Arcesium** | Approach #3: Traditional BI sprawl | HubSpot + Salesforce reporting gaps | Exec visibility failure | #4 Answers everywhere you work#1 Rapid deployment & durable analytics | Clear leadership reporting pain; consolidation mandate | If buyer is stuck at middle-management level | 🟢 Strong fit | Straightforward visibility story. Don’t over-AI it. |
| **Sunlight Financial** | Approach #3: Status quo + paused AI | AI task force committed to AI transformation | Inherited system decay / Lack of AI | #1 Rapid deployment & durable analytics |  |  |  |  |
| #2 AI automation that executes |  |  |  |  |  |  |  |  |
| #7 Power without chaos | Governance buy-in emerging; future intent | Urgency due to demand for AI transformation | 🟢 Strong fit | Replacement narrative lands cleanly. Don’t pitch features—pitch exit from failure. |  |  |  |  |
| **Roverpass** | Approach #2: AI layered on top | Chatbot on Looker + BigQuery + agents | AI illusion; read-only foundation | #2 AI automation that executes#4 Answers everywhere you work | Strong AI ambition; many use cases | Foundation skepticism; tool-first thinking | 🟡 Medium fit | You must reframe hard: agents fail without system control. |
| **Avibra** | Approach #3: Legacy BI | Wants faster segmentation, trust issues | Usability + semantic friction | #3 Analytics made easy for business users | Clear trust pain; segmentation need | May stall at “better dashboards” | 🟡 Medium fit | Expand frame beyond BI quickly or deal shrinks. |
| **Lynk** | Approach #3 → #1 aspiration | Disconnected tools; wants single source | Fragmentation | #1 Rapid deployment & durable analytics#3 Analytics made easy for business users | Early consolidation need; investment tailwind | Too early for AI or deep replacement | 🟡 Medium fit | Sell consolidation first. Agents later. |
| **IEFL** | Approach #3 / Manual reporting | ActiveCampaign only; no real stack | Tool ceiling | #5 Easy, low-risk to get started#1 Rapid deployment & durable analytics | Greenfield; no sunk-cost bias | Long education cycle; low urgency | 🟡 Medium fit | Avoid warehouse talk. Sell “answers without hiring.” |

## **🔪 The modern data stack is the enemy.**

Not because data warehouses are obsolete—but because fragmentation, **systems where agents can observe, but not act**, and human-dependent pipelines make AI-driven analytics and automation fundamentally unworkable.

Definite exists because **AI changes the economics of analytics**, and the only viable response is an integrated, governed, writable system.

# **Appendix: What Definite Is NOT**

*(Positioning Guardrails)*

This appendix exists to **protect the positioning**.

If any of the statements below start sounding “kind of true,” the positioning is drifting.

## **1. Definite is NOT a BI tool**

**Why this matters**

*BI tools visualize data that already exists in a functioning system or in an addition to an inadequate system.*

**What BI tools assume**

* Clean, modeled data
* Stable pipelines
* Someone else owns ingestion, transformation, and governance

**Why Definite is different**

* Definite replaces the *system BI tools depend on*
* Visualization is an output, not the product
* AI and analytics are first-class, not layered on

**Red flag language**

* “It’s like Looker, but…”
* “A better dashboarding tool”
* “Self-serve BI with AI”

## **2. Definite is NOT an AI analytics add-on**

**Why this matters**

*AI-on-top products fail because they assume the data foundation is solved.*

**What AI add-ons do**

* Query existing warehouses
* Summarize inconsistent metrics
* Stop at recommendations

**Why Definite is different**

* AI has **write access** across the system
* AI operates on **governed, shared definitions**
* AI can **execute**, not just observe

**Red flag language**

* “Chat with your data”
* “Copilot for your warehouse”
* “LLM-powered reporting”

## **3. Definite is NOT a data warehouse**

**Why this matters**

*Warehouses store data. They do not make it usable, trustworthy, or actionable on their own.*

**What warehouses provide**

* Storage and compute
* Flexibility for engineers
* Infrastructure primitives

**Why Definite is different**

* The warehouse is not the center of the system
* Semantics, governance, AI, and analytics are mandatory—not optional layers
* Customers don’t need to assemble the rest of the stack

**Red flag language**

* “Alternative to Snowflake / BigQuery”
* “A simpler data warehouse”

## **4. Definite is *NOT* for everyone with data**

**Why this matters**

*Broad targeting destroys urgency and credibility.*

**Who Definite is NOT for**

* Companies experimenting casually with analytics
* Teams optimizing dashboards for analysts
* Organizations ok with slow, manual reporting
* Buyers looking for the cheapest tool

**Who Definite *is* for**

* Leaders accountable for performance
* Teams under pressure to move fast
* Companies pushing toward AI-driven decisions
* Organizations that cannot afford fragile data systems

## **5. Definite is NOT a “nice-to-have” tool**

**Why this matters**

Definite competes against **inaction and inertia**, not feature checklists.

**What nice-to-have tools do**

* Improve workflows incrementally
* Sit alongside existing systems
* Are easy to postpone

**Why Definite is different**

* It replaces a core operating system for decision-making
* It directly impacts leadership credibility
* Delay has real business cost