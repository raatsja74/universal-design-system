# Button

Canonical contract for a pressable control that performs an immediate action.

Reuse evidence: marketing CTAs and product controls share the same states, keyboard model, and semantic roles. Visual values stay in the selected theme.

## Anatomy

- **Root:** native `<button type="button|submit|reset">`. Do not restyle a `<div>` as a button.
- **Label:** visible text. Required unless the control has an equivalent accessible name from `aria-label`.
- **Optional icon:** decorative by default (`aria-hidden="true"`). If the icon is the only content, the accessible name must still be present.
- **Optional trailing affordance:** for example an arrow. Motion of this affordance must not be the only state cue.

## Variants

| Variant | Use | Semantic mapping |
| --- | --- | --- |
| `primary` | One high-emphasis action per view | `color.action.primary` fill, `color.action.primaryText` label |
| `secondary` | Alternate action | transparent or `surface.elevated` fill, `color.text.primary` label, `color.border.subtle` border |
| `ghost` | Low-emphasis inline action | no fill, `color.action.primary` label |

Do not invent additional brand-colored variants. Theme expression happens through the semantic roles above.

## States

| State | Visual | Non-color cue | Semantics |
| --- | --- | --- | --- |
| default | variant mapping | shape + label | enabled |
| hover | slight emphasis (darken/lighten or border weight) | cursor `pointer`; optional underline or icon shift | same action |
| focus-visible | `color.focus.ring` outline, 2px, offset at least `spacing.1` (4px) | outline, not fill-only | keyboard focus |
| active | pressed inset or 1px translate | position/weight change | pressed |
| disabled | reduced contrast **and** `cursor: not-allowed` | `disabled` attribute; do not rely on faded color alone | not in tab order |
| loading | hide or keep label, show text such as "Loading" or `aria-busy="true"` | text or `aria-busy`; spinner is optional and decorative | not activatable until complete |

Empty and error states are not used on Button.

## Keyboard and focus

- Tab / Shift+Tab move focus.
- Enter and Space activate a `<button>`.
- Focus is `:focus-visible` only. Mouse click must not leave a persistent ring.
- Focus ring token: `color.focus.ring`. Never remove `outline` without an equivalent.
- Disabled buttons are not focusable.

## Screen reader

- Accessible name is the visible label, or `aria-label` when the label is visually hidden.
- Loading: announce with `aria-busy="true"` and keep a textual status.
- Do not use `aria-disabled` instead of the native `disabled` attribute on `<button>` unless the control must remain focusable; if it remains focusable, explain why in the consuming project.

## Responsive and touch

- Hit area is at least `layout.touchTargetMin` (44 × 44px) on primary and secondary actions.
- Padding uses the 4px spacing scale (`spacing.2` / `spacing.3` / `spacing.4`). Grow padding rather than shrinking type to hit 44px.
- Ghost buttons used as primary mobile actions must still meet 44px. Inline ghost actions in dense toolbars require a documented exception.
- Label wrapping: keep one line where possible; do not truncate essential action text.

## Reduced motion

- Honor `prefers-reduced-motion`.
- Disable transform and opacity transitions. Core CSS already zeros `--uds-motion-duration-*` in that media query.
- Loading indication must remain understandable with motion off (text or `aria-busy`).

## Semantic-token usage

Use custom properties from the CSS export. Do not hard-code theme hex or RGB.

```css
.uds-button {
  min-height: var(--uds-layout-touch-target-min);
  min-width: var(--uds-layout-touch-target-min);
  padding: var(--uds-space-3) var(--uds-space-4);
  font-family: var(--uds-font-body);
  transition:
    background-color var(--uds-motion-duration-fast) var(--uds-motion-easing-standard),
    color var(--uds-motion-duration-fast) var(--uds-motion-easing-standard),
    border-color var(--uds-motion-duration-fast) var(--uds-motion-easing-standard);
}
.uds-button--primary {
  background: var(--uds-color-action-primary);
  color: var(--uds-color-action-primaryText);
}
.uds-button:focus-visible {
  outline: 2px solid var(--uds-color-focus-ring);
  outline-offset: var(--uds-space-1);
}
```

## Test requirements

- Keyboard-only: Tab to the control, see the focus ring, activate with Enter and Space.
- Contrast: label vs fill meets 4.5:1 (3:1 if the label is large text). Focus ring vs adjacent background meets 3:1.
- Touch: computed box is ≥ 44 × 44px for primary/secondary.
- State: disabled and loading remain understandable with color removed (gray screenshot or forced-colors).
- Reduced motion: no transform/opacity animation when `prefers-reduced-motion: reduce`.
- Theme switch: swapping `data-uds-theme` changes paint, not structure or state meaning.

## Out of scope

- `StickyFlipbookAccent` and other decorative motion.
- Project-specific shapes, gradients, or campaign art.
