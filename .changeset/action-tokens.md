---
'@neovici/cosmoz-button': minor
---

Fill primary buttons with the `action` tokens and raise them with `--cz-shadow-action`

Primary buttons read `--cz-color-bg-action-solid`,
`--cz-color-bg-action-solid-hover` and `--cz-color-text-on-action`, so they
stay gray while the brand hue marks selection. Their depth comes from
`--cz-shadow-action` and `--cz-action-sheen`, so every primary button in the
app is raised the same way. The link variant reads `--cz-color-text-link`.
Requires `@neovici/cosmoz-tokens` 4.9.0.
