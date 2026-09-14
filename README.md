# Universal Design System

The canonical, agent-readable implementation contract for shared design foundations across Jaden projects.

## Scope

This system shares semantics and behavior, not brand identities. A theme may change values and voice, but it must not change what a semantic role or component state means.

## Source-of-truth order

1. This repository: approved tokens, component contracts, release history.
2. Project implementation: a theme current applied values and usage.
3. Notion: research, visual references, open decisions, and build logs.

When sources conflict, do not silently choose. Open a decision in docs/governance.md and keep the existing production behavior until it is resolved.

## What is ready

- Semantic color, spacing, typography slots, layout, interaction, and motion tokens.
- Structural tokens for modular layouts: 16px grid gaps, 1px/3px borders, and an explicit square radius.
- Theme mappings for Jaden Raats, Award Coatings, LeadBolt, and AI Ledger.
- A default Jaden visual system: editorial-operational brutalism with ink black, warm paper, signal orange, condensed display type, and technical mono copy. See docs/jadenraats-brand-system.md.
- Generated CSS: core custom-property template plus one stylesheet per theme.
- Canonical contracts for Button and text link.
- An accessibility baseline, adoption checklist, and token validator.

## What is deliberately not ready

- A universal font choice. Typography is theme-owned until it proves reusable.
- A universal visual palette.
- The scroll-driven flipbook. It remains an experimental, disabled-by-default accent until its actual source and QA evidence exist.

## Use

Run the validate script in package.json. It checks JSON tokens and regenerates dist/. The export:css script only regenerates CSS.

## Adopt a theme in a new project

1. Depend on this repository locally. Do not flatten another project colors into your UI.
2. Include dist/uds.core.css first, then one file from dist/themes/.
3. Set data-uds-theme to jadenraats, award-coatings, leadbolt, or ai-ledger on a parent element.
4. Use semantic custom properties only, such as --uds-color-text-primary and --uds-surface-canvas.
5. Follow components/button.md, components/text-link.md, and docs/adoption.md.

To add a fifth project, duplicate an existing file in themes/, fill every approved semantic role and typography slot, then validate. Do not add unapproved color roles.

## Generated CSS contract

- dist/uds.core.css: spacing, layout, motion, font aliases, empty semantic slots
- dist/themes/<id>.css: values for approved semantic roles only

Core never assigns a project palette as the default. Theme files are the only place raw color values appear, and they apply only under the matching data-uds-theme selector. The Jaden theme is the approved default for Jaden-owned public properties; it does not overwrite other project themes.

## Live style guide

`style-guide.html` is the human-readable reference for the Jaden theme: canonical palette, type, shape and border rules, component patterns, both known failure modes, and the legacy values that must not be reintroduced. It loads `dist/uds.core.css` then `dist/themes/jadenraats.css` — the same files a project consumes — so if the style guide renders correctly, the theme is intact.

Enable GitHub Pages (Settings → Pages → deploy from `main`, root) to publish it. It is also readable locally by opening the file; no build step is required.

## Agent access

Agents must fetch these values rather than restate them from memory or from an older build. Raw endpoints once Pages/repo access is live:

| Artifact | Raw URL |
| --- | --- |
| Theme values | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/themes/jadenraats.json` |
| Theme stylesheet | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/dist/themes/jadenraats.css` |
| Core custom properties | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/dist/uds.core.css` |
| Foundation tokens | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/tokens/core.json` |

The `raats-design-system` agent skill fetches the theme values from this repository and falls back to a dated snapshot only if the fetch fails — and says so out loud when it does. `jd-guide-writer` owns guide content structure and defers to this repository for every visual value.

## Known failure modes

Two defects have shipped at least once in real builds for the Jaden brand. They are encoded as rules in `docs/jadenraats-brand-system.md`, in the style guide, and in the `raats-design-system` skill:

1. **Mobile hero overlap** — absolute-positioned hero photos render behind mobile body copy; absolute positioning must live inside a `min-width` media query.
2. **Mobile dark-mode invert** — without `color-scheme: light only` locked in both a meta tag and CSS, OS dark mode inverts the warm paper palette.
