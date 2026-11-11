# Jaden Raats Modern Brand System (theme `jadenraats-modern`)

Approved default visual direction for Jaden-owned public sites, guides, and tools since 2026-11-08. It replaces the editorial-brutalist `jadenraats` theme, which stays in this repository as the named legacy theme (docs/jadenraats-brand-system.md).

Values live in `themes/jadenraats-modern.json` and the generated `dist/themes/jadenraats-modern.css`. This document gives the rules for using them. It never restates a value.

## Visual thesis

Modern, rounded, Apple-style. A neutral canvas in light and dark, white or graphite cards, Jaden orange as the only accent, the asterisk as the mark. Calm surfaces, real content, clear actions. Liquid Glass is a navigation layer, not a content style.

## Load the theme

1. Load `dist/uds.core.css`, then `dist/themes/jadenraats-modern.css`.
2. Set `data-uds-theme="jadenraats-modern"` on `html`.
3. Dark mode: set `data-uds-mode="dark"` (jadenraats.com uses `data-site-theme="dark"`; both work). Set it before first paint to avoid a theme flash. Respect `prefers-color-scheme` on first load and persist the user's choice when the page has a toggle.
4. Consume semantic properties only. Raw hex belongs only in theme files.

## Rules

| Area | Rule |
| --- | --- |
| Type | Platform system face through the theme font roles. Bold, tight headlines with slight negative tracking. Sentence case everywhere except acronyms. Monospace only for code. |
| Shape | Cards `--uds-radius-card`, nested items `--uds-radius-inner`, small marks `--uds-radius-small`, buttons, chips and tags `--uds-radius-pill`. Hairline borders at `--uds-border-width-standard`. Dividers are straight rules. |
| Depth | `--uds-shadow-card` at rest, `--uds-shadow-hover` with a 2px lift on hover. Shadows are off in dark mode (the theme sets them to `none`). |
| Color | Canvas and elevated surfaces from the theme. `--uds-color-action-primary` is the only accent: primary actions, active states, focus, the asterisk, small numbers. Never a large fill, never body text. |
| Mark | The asterisk. The kayak mark and JR monograms are retired. |
| Voice in UI | Short, specific labels ("Read guide", "Get in touch"), never "Learn more". No em dashes. |

## Liquid Glass

- Only on chrome that floats over content: the site header, a floating toolbar or tab bar, a sheet, popover or menu. Cards, articles, tables, forms and images stay on opaque surfaces.
- One glass layer at a time. Never glass on glass, on a card, or as a hero.
- Use the production recipe (`.nav-glass` in jadenraats.com `src/app/globals.css`): the canvas at partial alpha plus a saturate and blur backdrop. New glass values are proposed as tokens here first.
- Write glass as a named component class with `backdrop-filter` in CSS. No glow blurs, color blobs or gradients behind content.
- Required fallbacks: an opaque surface under `@supports not (backdrop-filter: blur(1px))` (check `-webkit-backdrop-filter` too) and under `prefers-reduced-transparency: reduce`; an opaque surface plus a visible border under `prefers-contrast: more`.
- A hairline bottom border on glass bars so the edge reads over same-tone content.
- Contrast on glass is measured against the worst case behind it, in both modes.

## Accessibility and layout

- WCAG 2.2 AA, 44px minimum targets (`--uds-layout-touch-target-min`), a visible focus ring in `--uds-color-focus-ring`, one H1 per page.
- The accent on the light canvas is roughly 3:1: large text and non-text marks only.
- Body text at 16px or larger. Secondary text is for metadata and supporting copy.
- Prose capped at `--uds-layout-reading-measure` and free to shrink on small screens.
- Reduced motion turns off lifts, transitions and glass morphing.
- No horizontal overflow at 320, 375, 390, 430, 768 and 1440px. Absolute-positioned hero media lives inside a `min-width` query.

## Banned on modern surfaces

Tailwind radius and shadow scale classes, the `backdrop-blur` utility, glow blurs, gradients, purple palettes, Inter, Poppins, Anton, IBM Plex Mono and Instrument Serif, uppercase labels with wide tracking, hard offset shadows, 0px radius and 3px structural borders, inline hex outside theme files, and mixing this theme with the legacy one on a surface.

## Legacy values to replace

| Legacy | Modern replacement |
| --- | --- |
| Paper canvas | `--uds-surface-canvas` |
| Ink text | `--uds-color-text-primary` or `--uds-surface-inverse` |
| Warm secondary | `--uds-color-text-secondary` |
| Anton, IBM Plex Mono, Instrument Serif | theme font roles |
| 0px radius, 3px borders | radius roles, hairline border |
| Uppercase labels, wide tracking | sentence case |
| Hard offset shadows | `--uds-shadow-card`, `--uds-shadow-hover` |

## Related

- `raats-design-system` skill (raatsja74/design-skills): applies and audits this theme.
- `jd-guide-writer` skill: guide structure; its template is built on this theme.
- jadenraats.com `DESIGN.md`: site-specific rules, which win on site questions.

Created by Hark | 2026-11-11
