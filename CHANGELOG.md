## Unreleased

- Make `jadenraats-modern` the documented default for Jaden-owned work; mark the brutalist `jadenraats` theme and its brand doc as legacy (README, governance, adoption).
- Add docs/jadenraats-modern-brand-system.md: shape, depth, color, type, Liquid Glass placement and fallbacks, accessibility and audit rules for the modern theme.

- Add opt-in `jadenraats-modern` light/dark theme, radius and shadow roles without replacing the legacy theme.
- Export theme shape, depth, border and dark-mode overrides from JSON.
- Correct invalid reading measure `45-75ch` to a usable `75ch` maximum.

# Changelog

## 0.4.0 — 2026-09-13

- Added a live style guide at `style-guide.html` (GitHub Pages root): canonical palette, type, shape/border rules, component patterns, both known failure modes, and the legacy values that must not be reintroduced.
- Documented the two known failure modes (mobile hero overlap, mobile dark-mode invert) as encoded rules on the Jaden theme reference page.
- Documented legacy/drift values and their canonical replacements, and confirmed there is no separate rounded "marketing" mode.
- Recorded the inline Serif emphasis face as an open item: used in production, not yet an approved typography token.

## 0.3.0 — 2026-09-11

- Adopted the approved Jaden Raats brand direction as the default Jaden theme: ink black, warm paper, signal orange, Anton display type, and IBM Plex Mono utility copy.
- Added reusable structural tokens for a 16px modular grid, 1px/3px borders, and square controls; regenerated CSS exports.
- Added `surface.inverse` and accessible `color.action.text` roles across all themes; documented the editorial-operational brutalist layout, type, image, and density rules.

## 0.2.0 — 2026-09-02

- Audited V0 tokens against the captured Notion overview and the live Jaden site globals.css; kept verified palette and type differences in themes.
- Added a CSS export layer generated from JSON: dist/uds.core.css plus one stylesheet per theme.
- Canonicalized Button and text-link component contracts (anatomy, states, keyboard/focus, reduced motion, 44px targets, tests).
- Added a project adoption checklist and documented remaining provisional theme mappings.

## 0.1.0 — 2026-09-02

- Established the standalone canonical repository.
- Added semantic foundations and four initial theme mappings.
- Added accessibility, governance, and component-contract baselines.
- Explicitly deferred unverified visual rules, raw brand-guide recovery, and experimental flipbook motion.
