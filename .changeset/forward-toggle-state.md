---
'@neovici/cosmoz-button': patch
---

Forward `aria-expanded`, `aria-pressed`, and `aria-label` from the host element to the native control rendered in its shadow root, notifying on attribute changes. Assistive tech composes its tree from the native control, so host-level state and names were invisible; the forward makes expanded/pressed state and icon-only accessible names reachable. Requires `@pionjs/pion` 2.16.3 for native-property render notification. Note: forwarding `aria-label` changes accessible-name precedence — the forwarded attribute wins over slotted text on the native control (correct ARIA behavior, author intent first).

Known limitation: attribute values pass through pion's property path, which coerces `""` to `"true"` (deferred to pion next major, pionjs/pion#196).
