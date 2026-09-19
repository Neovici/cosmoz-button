---
'@neovici/cosmoz-button': major
---

BREAKING fix: require @neovici/cosmoz-tokens ^4.0.0

Pressed styles use `light-dark()` directly, which only resolves with
tokens v4's `color-scheme`-driven theming. An npm override forces the
single tokens copy for consumers whose other deps still range on v3.

Pressed/selected state (`aria-pressed`) restyle:

- primary and destructive stay solid with an inset 3D sink; hover
  matches the non-pressed solid pair
- secondary keeps a `brand-300` inset ring on the selected chip
- link: underline only, no surface change

The 3D inset uses tokens 4.1.0's `--cz-shadow-pressed-3d(-solid)` and
resolves to nothing until that release installs.
