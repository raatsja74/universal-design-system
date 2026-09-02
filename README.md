# Universal Design System

The canonical, agent-readable implementation contract for shared design foundations across Jaden's projects.

## Scope

This system shares semantics and behavior, not brand identities. A theme may change values and voice, but it must not change what a semantic role or component state means.

## Source-of-truth order

1. This repository: approved tokens, component contracts, release history.
2. Project implementation: a theme's current applied values and usage.
3. Notion: research, visual references, open decisions, and build logs.

When sources conflict, do not silently choose. Open a decision in `docs/governance.md` and keep the existing production behavior until it is resolved.

## What is ready

- Semantic color, spacing, typography, layout, interaction, and motion tokens.
- Theme mappings for Jaden Raats, Award Coatings, LeadBolt, and AI Ledger.
- An accessibility baseline and component definition-of-done.
- A machine-checkable token validator.

## What is deliberately not ready

- A universal font choice. Typography is theme-owned until it proves reusable.
- A universal visual palette.
- The scroll-driven flipbook. It remains an experimental, disabled-by-default accent until its actual source and QA evidence exist.

## Use

```sh
npm run validate
```

When starting a project, choose one theme and consume semantic roles (for example `color.text.primary`) rather than copying raw colors from another project.

