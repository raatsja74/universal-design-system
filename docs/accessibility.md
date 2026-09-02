# Accessibility baseline

- Target WCAG 2.2 AA for marketing and product surfaces.
- Normal text: minimum 4.5:1 contrast. Large text and meaningful UI boundaries: minimum 3:1.
- All interactive controls are keyboard-operable and show a visible focus indicator sourced from `color.focus.ring`.
- Do not communicate state with color alone.
- Honor `prefers-reduced-motion`; motion may clarify change but never carry essential information.
- Primary mobile controls are at least 44 × 44px.
- Decorative imagery has no semantic meaning and must not enter the tab order or screen-reader output.
- Generated core CSS sets motion durations to 0ms when prefers-reduced-motion is reduce.
- Canonical controls: components/button.md and components/text-link.md.
