---
'@neovici/cosmoz-button': major
---

BREAKING fix: require @neovici/cosmoz-tokens ^4.2.0

Pressed styles use `light-dark()` directly, which only resolves with
tokens v4's `color-scheme`-driven theming, and consume the
`--cz-shadow-pressed-3d(-solid)` inset tokens added in 4.1.0. An npm
override forces the single tokens copy for consumers whose other deps
still range lower.

Pressed/selected state (`aria-pressed`) restyle:

- secondary and tertiary shift to a selected brand chip (dark:
  `brand-900` with `brand-300` text); secondary keeps a visible inset
  ring
- primary and destructive stay solid with a 3D inset sink; hover
  matches the non-pressed solid pair
- link: underline only, no surface change
- icon-only pressed icons take the chip color (lighter on dark hover)
