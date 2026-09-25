---
'@neovici/cosmoz-button': minor
---

Slimmer, flat buttons

- The default (`md`) button is 32px tall (was 40px) with 12px side padding and
  `text-sm` medium-weight text. The other sizes step down to match: `sm` 28px,
  `lg` 36px, `xl` 40px. Text and icon-only buttons now share the same height
  at each size.
- Solid variants drop the skeuomorphic highlight and inner ring for a plain
  `--cz-shadow-xs`. Secondary gets an explicit 1px `border-primary` ring.
