# Jaden Raats Brand System

Approved default visual direction for Jaden-owned public sites, guides, dashboards, databases, and tools. It is derived from the supplied brand guide and the Jaden site / Skill Architecture Board references reviewed on 2026-09-11.

## Visual thesis

Build an editorial-operational brutalist interface: an independent print magazine, technical field manual, old software interface, DIY zine, and modern operator dashboard in one coherent system.

The work should feel useful before it feels polished. Favor real tools, real notes, real images, and visible systems over generic marketing decoration.

## Theme implementation

| Role | Jaden theme value | Job |
| --- | --- | --- |
| Ink black | `#0A0A09` | type, borders, dark sections |
| Warm paper | `#F2EFE6` | primary canvas and panels |
| Signal orange | `#F4511E` | strong actions, active states, numbers, section stamps |
| Action text | `#0A0A09` | accessible text links and text-only actions on warm paper |
| Display | Anton | large, tight, uppercase hierarchy |
| Utility/body | IBM Plex Mono | descriptions, metadata, instructions, system UI |

Use `data-uds-theme="jadenraats"`, load `dist/uds.core.css` first, then `dist/themes/jadenraats.css`. Use semantic variables; do not hard-code the palette in components.

## Layout and hierarchy

- Use a hard modular grid. The standard gap is `--uds-layout-grid-gap` (16px).
- Prefer sections that touch, strong dividers, and asymmetric but intentional composition.
- Use `--uds-border-strong` for structural frames, card edges, and primary CTAs; use the standard border for dense interior cells.
- Use `--uds-radius-none`; no rounded cards, pills, glass treatment, gradients, or soft drop shadows.
- Let one large display headline establish each view. Follow it with compact mono utility copy and a clear action.
- Keep information dense when it is useful: labels, counts, filters, categories, metadata, and clear grouping are part of the visual language.

## Components

- **Primary button:** signal-orange fill, ink border, uppercase display label, direct verb, optional arrow.
- **Secondary button:** warm-paper fill, ink border, uppercase display label.
- **Guide cards:** number/category, real or operational image, bold title, short practical description, explicit read action.
- **Data boards:** ink top bar or orange category header, visible filters/search, narrow modular cells, and meaningful counts.
- **Star/asterisk:** use sparingly as a recognizable stamp or section marker, never as generic decoration.

## Image direction

Use documentary, operational, or behind-the-scenes photography; high-contrast black-and-white, photocopy, halftone, grain, handwritten notes, and orange blocks are preferred treatments. Portraits can remain natural and detailed. Avoid glossy stock imagery, generic AI gradient art, and default startup illustration styles.

## Voice

Write like a helpful operator: direct, practical, plain English, low hype. Make CTAs specific: "Read guide", "Browse skills", "Get in touch", or "Build the system".

## Responsive rule

On small screens, preserve hierarchy and borders while stacking the grid. Do not turn the experience into generic rounded mobile cards. It should read like a narrow printed poster: one strong headline, useful details, and clear actions.

## Boundaries

This document defines the Jaden theme. It does not authorize importing Jaden palette, fonts, copy voice, or art direction into Award Coatings, LeadBolt, AI Ledger, or other independently branded themes.
