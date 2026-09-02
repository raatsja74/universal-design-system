# V0 audit — captured Notion system vs repository vs Jaden site

Date: 2026-09-02. Notion exports in CaptureVault are iframe shells; readable evidence is the public System Overview plus the live Jaden site globals.css (read-only).

## Confirmed alignments

- Shared semantic roles match the System Overview: color.text.primary, color.action.primary, color.border.subtle, surface.canvas, surface.elevated, plus the V0 action/text/focus slots already in tokens/core.json.
- 4px spacing baseline and 45-75ch reading measure remain core, not theme-owned.
- WCAG 2.2 AA, 44px targets, visible focus, no color-only state, reduced-motion path.
- Reuse structure, not brands. Themes keep distinct palettes and type.

## Differences preserved as theme-owned (do not flatten)

Jaden site globals.css (implemented) vs themes/jadenraats.json:

- --bg 244 239 230 maps to surface.canvas rgb(244 239 230)
- --surface 236 229 216 maps to surface.elevated rgb(236 229 216)
- --ink 30 27 21 maps to color.text.primary rgb(30 27 21)
- --soft 108 100 87 maps to color.text.secondary rgb(108 100 87)
- --accent 191 87 49 maps to color.action.primary and color.focus.ring rgb(191 87 49)
- --ease-soft matches core motion.easing.standard
- Type: Instrument Sans (body/heading) and IBM Plex Mono stay in the Jaden theme. Core typography only aliases theme.typography.

Not promoted into core (site-local / unverified):

- --faint 160 151 136 (labels/meta on the Jaden site; no approved semantic role yet)
- Instrument Serif font slot used on the Jaden site, absent from theme typography slots
- Grain, wash, marquee, asterisk rotation: campaign/motion art, not foundation

Reference-import themes (already in JSON, left theme-owned):

- Award Coatings: action #E65100, border #005A8D, surfaces #F3F4F6 / #FFFFFF, Outfit/DM Sans
- LeadBolt: action #FF5C00, secondary/border #2662D9, white surfaces, Outfit/DM Sans
- AI Ledger: #00F2FE on #0B0F19, Outfit/DM Sans

Outfit/DM Sans appear in three reference themes and in the Notion overview as an observed source pattern, not an approved universal font. They remain theme-owned.

## Provisional values

- Award Coatings color.text.primary and color.text.secondary are both #1F2937 in themes/award-coatings.json.
- AI Ledger maps color.text.secondary, color.action.primary, color.border.subtle, and color.focus.ring all to #00F2FE.
- LeadBolt surface.canvas and surface.elevated are both #FFFFFF.
- Jaden color.border.subtle is rgb(30 27 21 / 0.2); the live site often uses ink at 10 or 15 percent. Kept as the theme mapping rather than retuned.
- Motion durations 120/240/480ms are the V0 contract. Easing already matches the Jaden site.

## Left for Jaden

- Recover the Universal Brand Guide (captured export is an iframe/unreadable alias).
- Whether faint/muted text and a serif slot become semantic roles.
- Whether Outfit/DM Sans should ever move to core (evidence does not support promotion).
- Contrast QA of imported neon/orange pairings (AI Ledger cyan on navy; Award/LeadBolt oranges).
