---
'@neovici/cosmoz-button': patch
---

Icon-only buttons now size every slotted icon with the button's own icon size rules (sm 14px, md 16px, lg 16px, xl 18px). Until now a slotted SVG carrying width/height attributes overrode the sizing in icon-only buttons only, rendering bigger than the button intends — a 24px trash icon inside a sm icon-only control. Labelled buttons already ignore supplied dimensions; icon-only buttons now do the same.
