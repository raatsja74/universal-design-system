# Governance

## Change flow

1. **Intake:** record problem, evidence, affected themes, and proposed scope.
2. **Review:** assess accessibility, reuse, semantic impact, and whether the solution should remain local.
3. **Ship:** update tokens/contracts, implementation, version, and migration notes together.
4. **Announce:** add a changelog entry with rationale and affected themes.

## Decision rules

- Foundation changes require review from every affected theme.
- Theme-only changes may not silently change a universal semantic role.
- A production project keeps its existing behavior when canonical guidance is unresolved.
- This repository holds current implementation decisions. Archived Notion is historical research, not a current Jaden design authority (JD decision, 2026-10-24).

## Consistency correction (2026-11-12)

Problem: adoption and agent instructions still allowed mixed revisions and named archived Notion as current; the modern preview still said unreleased after PR #3 merged. Scope: documentation, preview status and regression checks only. Modern is the Jaden default, legacy is opt-in, and all theme values are preserved. Check generated CSS against its source and run existing contrast validation. Browser and accessibility coverage must be reported separately.

## Current open decisions

- Whether any typography belongs to the universal core.
- Motion timing/easing values beyond the minimal V0 contract.
- Ownership, release cadence, and breaking-change policy.

## Approved Jaden brand direction (2026-11-08, supersedes 2026-09-11)

- `jadenraats-modern` is the approved default for Jaden-owned public sites, guides, and tools: modern rounded, Apple-style, light and dark, orange as the only accent, Liquid Glass only on floating chrome. Rules: docs/jadenraats-modern-brand-system.md.
- The editorial-brutalist `jadenraats` theme is legacy. It stays valid for artifacts that are legacy by choice and is used only when Jaden asks for it by name. Never mix the two on one surface.

## Earlier Jaden brand direction (2026-09-11, legacy)

- At the time, the brutalist Jaden theme was the default for Jaden-owned public sites, guides, operational tools, and data-heavy interfaces. Since 2026-11-08 it is legacy and is used only by name.
- Its visual direction is editorial-operational brutalism: hard modular grids, square controls, visible borders, dense useful information, and restrained handmade texture.
- Project-specific campaign art, photographs, illustration, and handwritten annotations remain outside core. They belong in a consuming project's theme assets and content layer.
- The semantic foundation supports that direction through theme-owned palette/type plus neutral structural tokens. Other project themes retain their own values.

## Audit notes (2026-09-02)

- Typography remains theme-owned: Outfit/DM Sans in reference-import themes; Instrument Sans / IBM Plex Mono in the Jaden theme.
- A muted/faint text role and a serif family slot are present on the Jaden site and are not in core.
- The 60/30/10 composition ratio stays unverified marketing art direction.
- Contrast acceptance of imported Award Coatings, LeadBolt, and AI Ledger pairings is still open.
- See docs/audit.md for evidence.
