# Component contracts

No component is canonical until it has demonstrated reuse in at least two real contexts.

## Required contract

Every canonical component documents:

- Purpose, anatomy, variants, and theme hooks.
- Default, hover, focus-visible, active, disabled, loading, error, and empty states as relevant.
- Keyboard interaction and screen-reader behavior.
- Responsive behavior and minimum 44 × 44px primary targets where applicable.
- Reduced-motion behavior.
- Test evidence and a change note.

## Canonical in this version

1. [Button](button.md)
2. [Text link](text-link.md)

## Later candidates

3. Form field and validation message
4. Alert/status
5. Card
6. Navigation
7. Dialog/menu primitive

`StickyFlipbookAccent` is explicitly excluded from V0. It is an experimental, decorative pattern with no approved source implementation.
