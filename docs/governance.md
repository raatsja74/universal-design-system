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
- Notion is the research and decision-log surface. This repository is the implementation contract.

## Current open decisions

- Whether any typography belongs to the universal core.
- Responsive container/grid primitives and density rules.
- Motion timing/easing values beyond the minimal V0 contract.
- Ownership, release cadence, and breaking-change policy.
