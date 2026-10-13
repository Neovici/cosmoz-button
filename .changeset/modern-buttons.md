---
'@neovici/cosmoz-button': minor
---

Refresh the button look

- Primary and destructive get a soft top sheen, a crisp edge and a small
  lift; secondary is a raised surface with a hairline border; tertiary
  hovers with a translucent wash that works on any background.
- Labels are 13px at md with slightly tighter tracking, icons 16px (14px at
  sm, 18px at xl), and icons sit closer to the label.
- Pressing scales the button down slightly instead of only darkening it
  (off with reduced motion).
- Focus shows a 2px outline outside the button. Containers that clip
  overflow need at least 4px of room around the button.
- Disabled buttons fade instead of turning gray, so they keep their variant.
- Toggled secondary and tertiary buttons use a neutral translucent fill
  instead of the brand chip.

Primary uses `--cz-color-bg-brand-solid`; it looks its best with the graphite
fill from `@neovici/cosmoz-tokens` (Neovici/cosmoz-tokens#62).
