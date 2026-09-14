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

## Known failure modes

Both of these have already shipped broken at least once in a real build for this brand. They are encoded rules, not advice.

**1 — Mobile hero overlap.** A hero photo positioned `absolute` renders behind or through body copy on mobile. Any absolute photo positioning belongs inside a `min-width` media query. Under roughly 700px the photo must be `position: static`, in normal document flow, stacked *after* the text.

**2 — Mobile dark-mode invert.** Without `<meta name="color-scheme" content="light only">` plus `color-scheme: light only` in CSS, phones in OS dark mode auto-invert the warm paper palette. Lock it on every page — meta tag and CSS, with `!important` on background and text colours.

## Legacy values — do not reintroduce

Earlier builds each re-derived the brand from scratch or from screenshots, producing parallel palettes. These values are documented drift:

| Legacy | Canonical replacement |
| --- | --- |
| `#141210`, `#1c1a17` | `#0A0A09` (ink) |
| `#e8552a`, `#cf5a35` | `#F4511E` (signal orange) |
| `#f1ece1`, `#faf6ee`, `#ece5d4`, `#e5e0d3` | `#F2EFE6` (warm paper) |
| `#8a8578`, `#a8a396`, `#2c2a26` | `#5D5A53` (secondary text) |
| Archivo Black (display) | Anton |
| Fraunces (accent) | Instrument Serif italic |
| Inter, JetBrains Mono (body) | IBM Plex Mono |
| 999px pill radius, 16px card radius | `0px` — no exceptions |

There is no separate "rounded / pill" mode for marketing surfaces. The approved direction is one system: 0px radius, hard borders, orange as the only strong accent.

## Open items

- **Inline emphasis face.** The live site loads Instrument Serif italic through `next/font` as `--font-serif` for single-phrase emphasis. It is used in production but is not yet an approved typography token in `themes/jadenraats.json`, so it is not exported in `dist/themes/jadenraats.css`. Either promote it to a token or stop using it — right now it is the one value an agent cannot fetch.
