---
"@neovici/cosmoz-button": major
---

BREAKING fix: require @neovici/cosmoz-tokens ^4.2.0

Pressed styles use `light-dark()` directly, which only resolves with
tokens v4's `color-scheme`-driven theming, and consume the
`--cz-shadow-pressed-3d(-solid)` inset tokens added in 4.1.0. Also
requires `@neovici/cosmoz-tooltip` ^1.4.0 (tokens v4 range) so the tree
resolves a single tokens copy without an npm override.
