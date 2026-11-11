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
- Structural tokens for modular layouts: 16px grid gaps and border widths. Radius, shadow and border roles are theme-owned.
- Theme mappings for Jaden Raats (modern and legacy), Award Coatings, LeadBolt, and AI Ledger.
- A default Jaden visual system since November 2026: `jadenraats-modern`, modern rounded and Apple-style, light and dark, orange as the only accent, Liquid Glass only on floating chrome. See docs/jadenraats-modern-brand-system.md. The earlier editorial-brutalist theme `jadenraats` stays as the named legacy theme (docs/jadenraats-brand-system.md).
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
3. Set data-uds-theme to jadenraats-modern, jadenraats (legacy), award-coatings, leadbolt, or ai-ledger on a parent element.
4. Use semantic custom properties only, such as --uds-color-text-primary and --uds-surface-canvas.
5. Follow components/button.md, components/text-link.md, and docs/adoption.md.

To add a fifth project, duplicate an existing file in themes/, fill every approved semantic role and typography slot, then validate. Do not add unapproved color roles.

## Generated CSS contract

- dist/uds.core.css: spacing, layout, motion, font aliases, empty semantic slots
- dist/themes/<id>.css: values for approved semantic roles only

Core never assigns a project palette as the default. Theme files are the only place raw color values appear, and they apply only under the matching data-uds-theme selector. The `jadenraats-modern` theme is the approved default for Jaden-owned public properties; it does not overwrite other project themes.

## Live style guide

**Live:** https://raatsja74.github.io/universal-design-system/ opens the `jadenraats-modern` preview (`index.html`).

`style-guide.html` is the human-readable reference for the legacy `jadenraats` theme: canonical palette, type, shape and border rules, component patterns, both known failure modes, and the legacy values that must not be reintroduced. It loads `dist/uds.core.css` then `dist/themes/jadenraats.css` , the same files a project consumes, so if the style guide renders correctly, the legacy theme is intact. The modern theme's reference is docs/jadenraats-modern-brand-system.md and the live jadenraats.com.

GitHub Pages is enabled from `main` at the branch root. `index.html` previews the default modern theme in light and dark and links to `style-guide.html`, the legacy reference. It is also readable locally by opening the file; no build step is required.

## Agent access

Agents must fetch these values rather than restate them from memory or from an older build. Raw endpoints once Pages/repo access is live:

| Artifact | Raw URL |
| --- | --- |
| Theme values (default) | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/themes/jadenraats-modern.json` |
| Theme stylesheet (default) | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/dist/themes/jadenraats-modern.css` |
| Legacy theme values | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/themes/jadenraats.json` |
| Legacy theme stylesheet | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/dist/themes/jadenraats.css` |
| Core custom properties | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/dist/uds.core.css` |
| Foundation tokens | `https://raw.githubusercontent.com/raatsja74/universal-design-system/main/tokens/core.json` |

The `raats-design-system` agent skill fetches the theme values from this repository and falls back to a dated snapshot only if the fetch fails, and says so out loud when it does. `jd-guide-writer` owns guide content structure and defers to this repository for every visual value.

## Known failure modes

Two defects have shipped at least once in real builds for the Jaden brand. They are encoded as rules in the brand docs, the style guide, and the `raats-design-system` skill:

1. **Mobile hero overlap** (both themes): absolute-positioned hero photos render behind mobile body copy; absolute positioning must live inside a `min-width` media query.
2. **Mobile dark-mode invert** (legacy theme only): without `color-scheme: light only` locked in both a meta tag and CSS, OS dark mode inverts the warm paper palette. The modern theme supports dark mode on purpose; its failure mode is a theme flash, fixed by setting the theme attribute before first paint.

## Modern Jaden theme (default)

Load `dist/uds.core.css` followed by `dist/themes/jadenraats-modern.css`, then set `data-uds-theme="jadenraats-modern"` on html. Set `data-uds-mode="dark"` (or the site's `data-site-theme="dark"`) for dark mode; omit it for light. The existing `jadenraats` theme remains the legacy brutalist theme.

The modern theme supplies semantic canvas, elevated, text, secondary and border colors, `--uds-radius-{card,inner,small,pill}`, `--uds-shadow-{card,hover}` and hairline borders. Dark mode disables shadows. Font roles use system faces; applications may override font slots. The reading measure token is now a valid maximum of `75ch`; constrain prose to available container width on small screens.
