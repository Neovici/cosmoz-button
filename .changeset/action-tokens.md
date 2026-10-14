---
'@neovici/cosmoz-button': minor
---

Fill primary buttons with the `action` tokens and color the link variant with `text-link`

Primary buttons (rest, hover, active and pressed) now read
`--cz-color-bg-action-solid`, `--cz-color-bg-action-solid-hover` and
`--cz-color-text-on-action`, so they stay gray while the brand hue marks
selection. The link variant reads `--cz-color-text-link`. Both fall back to
the previous brand tokens, so older cosmoz-tokens versions render as before.
