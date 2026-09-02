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
- Theme mappings for Jaden Raats, Award Coatings, LeadBolt, and AI Ledger.
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

Core never assigns a project palette as the default. Theme files are the only place raw color values appear, and they apply only under the matching data-uds-theme selector.
