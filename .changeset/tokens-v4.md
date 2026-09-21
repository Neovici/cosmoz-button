---
'@neovici/cosmoz-button': major
---

BREAKING fix: require @neovici/cosmoz-tokens ^4.2.0

Pressed styles use `light-dark()` directly, which only resolves with
tokens v4's `color-scheme`-driven theming, and consume the
`--cz-shadow-pressed-3d(-solid)` inset tokens added in 4.1.0. An npm
override forces the single tokens copy for consumers whose other deps
still range lower.
