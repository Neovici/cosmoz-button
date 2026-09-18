---
'@neovici/cosmoz-button': major
---

BREAKING fix: require @neovici/cosmoz-tokens ^4.0.0

The dependency range is narrowed from `^3.5.2` to `^4.0.0`: the pressed
state styles now use `light-dark()` directly, which only resolves
correctly with tokens v4's `color-scheme`-driven theming. An npm
override forces the single `cosmoz-tokens` copy for consumers whose
other dependencies (e.g. `cosmoz-tooltip`) still range on v3.

Also restyles the pressed/selected state (aria-pressed):

- primary and destructive stay solid (brand/error solid) with their
  on-brand/on-error text, visually "sinking" via the new tokens v4
  `--cz-shadow-pressed-3d-solid` inset shadow; hover states match the
  non-pressed solid hover pair.
- secondary keeps a visible `brand-300` inset ring on the selected chip.
- link no longer gets a background or inset shadow — underline only.

The 3D inset uses tokens 4.1.0's `--cz-shadow-pressed-3d(-solid)`; until
that release installs, the inset gracefully resolves to nothing.
