---
'@neovici/cosmoz-button': minor
---

Add tooltip support

`tooltip` wraps the button in `cosmoz-tooltip` with the heading;
`tooltip-placement` positions it (top, bottom, left, right). The wrapper
is always rendered and degrades to a pass-through when `tooltip` is
unset, so host-driven sizing keeps working.
