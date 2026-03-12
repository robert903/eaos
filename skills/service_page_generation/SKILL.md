---
name: Service Page & Elementor Manifest Generation
description: A rigid, multi-step framework for generating B2B service pages, including Niche Research, SEO Briefs, and JSON-ready Elementor manifests.
---

# Service Page Generation Pipeline

This skill dictates the exact sequence of events the agent MUST follow when requested to "Generate a service page for [Topic/Niche]". It ensures all deliverables are structured for direct import into WordPress/Elementor and adhere to B2B best practices.

## Core Directives

When building a service page, you MUST execute the following 4 stages sequentially. Do not combine them into a single massive output; output them as distinct deliverables or artifacts.

### 1. Niche Research & Architecture
Before writing any copy, analyze the specified industry (e.g., "Industrial & Technical Manufacturing (B2B)").
- Identify primary decision-makers (e.g., Plant Managers, Procurement Directors).
- Identify 3-4 core pain points (e.g., supply chain opacity, legacy system integration).
- Define the primary "Call to Action" (e.g., "Request a Technical Audit").

### 2. SEO Brief Formulation
Create an SEO skeleton for the page ensuring ranking potential.
- **Primary Keyword:** 1 target.
- **Secondary Keywords:** 3-5 variants.
- **Title Tag:** Max 60 characters.
- **Meta Description:** Max 155 characters.
- **H-tag Hierarchy:** Map out H1, H2s, and H3s.

### 3. Elementor Named Field Manifest
This is the critical execution layer. You must structure the actual page copy into a JSON-ready "manifest" that maps directly to Elementor's dynamic fields or template structures. 

**Format Requirements:**
- **Hero Section:** Headline (H1), Subheadline, Button Text.
- **Problem/Agitation Section:** 3 distinct columns/boxes with an Icon suggestion, heading, and 2-sentence description.
- **Solution/Features Section:** Detailed breakdown of the service offerings.
- **Social Proof/Testimonial:** **CRITICAL:** If no specific social proof or testimonial is provided in the prompt, DO NOT halt or ask the user for it. Insert a realistic placeholder (e.g., `"[Placeholder] 'This service reduced our downtime by 20%...' - John Doe, Operations Director, [Company]"`) so the layout is complete.
- **Final CTA:** Headline and Button Text.

### 4. Review Checklist
Provide a brief QA checklist for the user confirming:
- [ ] Tone is strictly B2B professional.
- [ ] All Elementor manifest fields are populated.
- [ ] SEO Meta data adheres to character limits.
- [ ] Missing assets (like actual testimonials or specific client metrics) are clearly marked with placeholders.

## Operating Principles
- **No Extemporizing:** Stick strictly to the structure.
- **Placeholders Over Halting:** If you lack a minor detail (like a specific client name), use a placeholder bracket `[Client Name]` rather than stopping the workflow to ask the user. The goal is deterministic, copy-paste ready generation.
