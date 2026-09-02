# Project adoption checklist

Use this when a project starts consuming the Universal Design System. Do not copy another project raw colors.

## Choose and load a theme

- Pick one theme: jadenraats, award-coatings, leadbolt, or ai-ledger.
- Load dist/uds.core.css first (semantic slots, spacing, motion).
- Load one matching file from dist/themes.
- Set data-uds-theme on html.
- Consume semantic custom properties, never another theme hex or RGB.
- Load the theme font files separately. This repository names families; it does not host font files.

Load order: core stylesheet, then one theme stylesheet from dist/themes. Select the theme with data-uds-theme set to the theme id.
- Duplicate an existing themes JSON for a fifth project and fill only approved semantic roles.

## Implement components

- Follow components/button.md and components/text-link.md.
- Keep native button and anchor-with-href elements.
- Primary actions meet layout.touchTargetMin of 44px using the 4px spacing scale.
- Visible focus ring uses color.focus.ring.
- State is not color-only.
- Honor prefers-reduced-motion.

## Quality gate

- Validate tokens after any token or theme edit.
- Keyboard-only pass on every interactive control.
- Contrast: 4.5:1 normal text, 3:1 large text and UI boundaries (WCAG 2.2 AA).
- Keep the project voice, photography, and campaign art.
- Do not enable StickyFlipbookAccent.
- Record the consumed theme id and commit hash.

## Do not

- Promote one theme palette or fonts into tokens/core.json without a governance decision.
- Flatten Award Coatings, LeadBolt, AI Ledger, and Jaden Raats into a single look.
- Touch the live Jaden marketing-site repository unless that project is explicitly in scope.
