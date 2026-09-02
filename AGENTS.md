# Universal Design System — Agent Instructions

## Purpose

This repository is the canonical implementation contract for reusable foundations. It is not a visual-brand replacement and it is not a dumping ground for one-off page styling.

## Rules

- Use semantic token names in components; do not consume theme values directly unless authoring a theme.
- Add a component only after a second real project/use case demonstrates reuse.
- Every component change must define states, keyboard behavior, reduced-motion behavior, responsive behavior, and theme hooks.
- Keep project-specific fonts, palettes, copy voice, and campaign art direction in the relevant theme.
- Do not promote experimental motion (including `StickyFlipbookAccent`) without real source, browser QA, and an approved decision.

## Validation

Run `npm run validate` after changing token JSON. It enforces required semantic roles, 4px spacing increments, and valid theme references.


## Generated CSS

Do not hand-edit dist/. Map only approved semantic roles in themes JSON. Core CSS must not ship a project palette as the default. The validate script regenerates dist/ from JSON.
