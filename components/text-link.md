# Text link

Canonical contract for navigation or a URL-bearing action presented as text.

A link changes location (or in-page target). A button performs an action on the current view. Do not swap the two for styling convenience.

## Anatomy

- **Root:** native `<a href="...">`. A link without `href` is not a link.
- **Label:** visible text that describes the destination. Avoid "click here".
- **Optional affordance:** underline, trailing arrow. The underline (or equivalent non-color mark) is required so the control is not color-only.
- **External indicator:** if the destination leaves the site, include a text or visually hidden cue; a color shift is not enough.

## Variants

| Variant | Use | Semantic mapping |
| --- | --- | --- |
| `inline` | Inside a sentence or paragraph | `color.action.text` text, persistent underline using `currentColor` or `color.border.subtle` |
| `standalone` | CTA-style text link, not in running copy | `color.action.text` text; underline may appear on hover **in addition to** another persistent cue (weight, icon, or always-on underline) |

Visited color is theme-owned and optional. If used, it must still meet contrast and must not be the only difference from unvisited.

## States

| State | Visual | Non-color cue | Semantics |
| --- | --- | --- | --- |
| default | action color + underline or equivalent | underline, weight, or icon | navigable |
| hover | stronger underline or affordance motion | underline thickness/position; optional 4px arrow shift | same destination |
| focus-visible | `color.focus.ring` outline, 2px, offset at least `spacing.1` | outline | keyboard focus |
| active | pressed weight | position/weight | activating |
| disabled / unavailable | muted **and** not a link | omit `href` or use a non-link element; do not leave a dead `<a>` that only looks disabled | not in tab order |

Loading, empty, and error states are not used on Text link.

## Keyboard and focus

- Tab / Shift+Tab move focus.
- Enter activates. Space does not activate a link (native behavior); do not capture Space to fake a button.
- `:focus-visible` ring uses `color.focus.ring`. Match Button offset (`spacing.1`).
- In-page targets must have a destination that can receive focus if skip or fragment navigation is used.

## Screen reader

- Accessible name comes from visible text. Icon-only links require `aria-label`.
- `target="_blank"` requires a name that states a new window/tab, or `rel="noopener noreferrer"` plus visible/hidden text.
- Do not use `role="button"` on a navigation link.

## Responsive and touch

- Standalone links that act as primary CTAs use `layout.touchTargetMin` (44 × 44px) via padding on the 4px scale.
- Inline links in body copy follow text line-height. Increase tap area with padding where the link is the primary mobile action; do not enlarge running body text solely to hit 44px.
- Reading measure for surrounding copy: `layout.readingMeasure` (45–75ch).

## Reduced motion

- Underline scale/slide and arrow translation honor `prefers-reduced-motion`.
- With reduced motion, show the hover/focus underline in its final state without animation.
- Core CSS zeros `--uds-motion-duration-*` when reduced motion is requested.

## Semantic-token usage

```css
.uds-link {
  color: var(--uds-color-action-text);
  text-underline-offset: var(--uds-space-1);
  transition: color var(--uds-motion-duration-fast) var(--uds-motion-easing-standard);
}
.uds-link--inline {
  text-decoration: underline;
}
.uds-link--standalone {
  display: inline-flex;
  align-items: center;
  min-height: var(--uds-layout-touch-target-min);
  font-family: var(--uds-font-body);
}
.uds-link:focus-visible {
  outline: 2px solid var(--uds-color-focus-ring);
  outline-offset: var(--uds-space-1);
}
```

Do not paint links with a theme's raw hex. If a theme maps `color.action.primary` and `color.text.secondary` to the same value (see Award Coatings), the underline remains the identifier.

## Test requirements

- Keyboard-only: Tab shows the ring; Enter follows `href`.
- Contrast: link text vs `surface.canvas` meets 4.5:1. Underline or other mark remains when color is removed.
- Touch: standalone CTA links are ≥ 44 × 44px.
- Reduced motion: underline/arrow does not animate.
- Distinguish from Button: activating a link changes location; it does not submit a form.

## Out of scope

- Navigation landmark/menus (later Navigation contract).
- `StickyFlipbookAccent`.
