## [1.1.0](https://github.com/Neovici/cosmoz-button/compare/v1.0.2...v1.1.0) (2026-06-10)

## 2.5.0

### Minor Changes

- 3ff20b8: Add `success` and `warning` variants: solid fills from the success and warning tokens, for confirmed and flagged states such as a checklist tick.
- 57e038b: Use shared icon size tokens and expose --cosmoz-button-icon-size independently of button geometry.

### Patch Changes

- 29e208c: Icon-only buttons now size every slotted icon with the button's own icon size rules (sm 14px, md 16px, lg 16px, xl 18px). Until now a slotted SVG carrying width/height attributes overrode the sizing in icon-only buttons only, rendering bigger than the button intends — a 24px trash icon inside a sm icon-only control. Labelled buttons already ignore supplied dimensions; icon-only buttons now do the same.

## 2.4.1

### Patch Changes

- f7ea4c8: Use button-specific secondary glass recipes when available and neutral action sheen and shadow recipes. Destructive buttons retain their existing sheen. Older token versions retain their existing appearance through fallbacks.

## 2.4.0

### Minor Changes

- 5540d62: Give primary and secondary buttons subtle neutral glass fills in light and dark themes, with fine borders and inset pressed feedback. Labelled buttons use `--cz-radius-md`; icon-only buttons remain circular and preserve explicit SVG icon dimensions. Pressing a button keeps its bounds and label stationary. Tertiary utility controls stay flat, with visible hover, focus and pressed states.

  Add native form ownership, submit and reset actions, implicit Enter submission, disabled fieldset handling and cancellable form activation. Preserve disclosure relationships across shadow roots and forward accessible names, roles and tab order to the native control. Respect reduced motion, reduced transparency and forced colors. Keep button system colors independent of the reusable glass surface material.

  Keep flat toolbar button hover visible on secondary surfaces and use a distinct pressed background.

## 2.3.0

### Minor Changes

- f6acf80: Fill primary buttons with the `action` tokens and raise them with `--cz-shadow-action`

  Primary buttons read `--cz-color-bg-action-solid`,
  `--cz-color-bg-action-solid-hover` and `--cz-color-text-on-action`, so they
  stay gray while the brand hue marks selection. Their depth comes from
  `--cz-shadow-action` and `--cz-action-sheen`, so every primary button in the
  app is raised the same way. The link variant reads `--cz-color-text-link`.
  Requires `@neovici/cosmoz-tokens` 4.9.0.

- a28703f: Refresh the button look

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

  The `link` variant uses `--cz-color-text-link` (falling back to
  `--cz-color-text-brand` on older tokens), so links stay distinct from body
  text now that the brand ramp is gray.

## 2.2.3

### Patch Changes

- ed7d3f7: Forward `aria-expanded`, `aria-pressed`, and `aria-label` from the host element to the native control rendered in its shadow root, notifying on attribute changes. Assistive tech composes its tree from the native control, so host-level state and names were invisible; the forward makes expanded/pressed state and icon-only accessible names reachable. Requires `@pionjs/pion` 2.16.3 for native-property render notification. Note: forwarding `aria-label` changes accessible-name precedence — the forwarded attribute wins over slotted text on the native control (correct ARIA behavior, author intent first).

  Known limitation: attribute values pass through pion's property path, which coerces `""` to `"true"` (deferred to pion next major, pionjs/pion#196).

## 2.2.2

### Patch Changes

- a2e7687: Forward aria-label and aria-pressed to the native control, including attribute updates and removals.

## 2.2.1

### Patch Changes

- 08c8c89: Take button heights from the `--cz-control-height-*` tokens

  No visual change: the tokens have the same 28/32/36/40px values. Buttons and
  inputs now share one source for their heights.

## 2.2.0

### Minor Changes

- b091008: Add `--cosmoz-button-justify-content`

  Lets a container align a button's content, for example `flex-start` for
  full-width rows in an overflow menu. Defaults to `center`, so nothing changes
  unless it's set.

## 2.1.0

### Minor Changes

- 88d3fd4: Slimmer, flat buttons

  - The default (`md`) button is 32px tall (was 40px) with 12px side padding and
    `text-sm` medium-weight text. The other sizes step down to match: `sm` 28px,
    `lg` 36px, `xl` 40px. Text and icon-only buttons now share the same height
    at each size.
  - Solid variants drop the skeuomorphic highlight and inner ring for a plain
    `--cz-shadow-xs`. Secondary gets an explicit 1px `border-primary` ring.

## 2.0.0

### Major Changes

- 781aeb4: BREAKING fix: require @neovici/cosmoz-tokens ^4.2.0

  Pressed styles use `light-dark()` directly, which only resolves with
  tokens v4's `color-scheme`-driven theming, and consume the
  `--cz-shadow-pressed-3d(-solid)` inset tokens added in 4.1.0. Also
  requires `@neovici/cosmoz-tooltip` ^1.4.0, which supports tokens v4, so
  the dependency tree can resolve a single tokens copy.

### Minor Changes

- 781aeb4: Add icon-only mode (Untitled UI utility button)

  The `icon-only` attribute renders a compact square button (28–40px
  across sizes) with a muted icon color for the quiet variants
  (secondary/tertiary).

- 781aeb4: Redesign the pressed/selected state (`aria-pressed`)

  - secondary and tertiary shift to a selected brand chip (dark:
    `brand-900` with `brand-300` text); secondary keeps a visible inset
    ring
  - primary and destructive stay solid with a 3D inset sink; hover
    matches the non-pressed solid pair
  - link: underline only, no surface change
  - icon-only pressed icons take the chip color (lighter on dark hover)

- 781aeb4: Add tooltip support

  `tooltip` wraps the button in `cosmoz-tooltip` with the heading;
  `tooltip-placement` positions it (top, bottom, left, right). The wrapper
  is always rendered and degrades to a pass-through when `tooltip` is
  unset, so host-driven sizing keeps working.

### Patch Changes

- 9ea5162: add push-down click effect on :active

## 1.1.1

### Patch Changes

- fd1f0b7: Migrate from semantic-release to changesets

### Features

- add value attribute support ([#16](https://github.com/Neovici/cosmoz-button/issues/16)) ([b629df2](https://github.com/Neovici/cosmoz-button/commit/b629df22f360cb5e13c9cbc8bf3e4729c3649621))

## [1.0.2](https://github.com/Neovici/cosmoz-button/compare/v1.0.1...v1.0.2) (2026-04-10)

### Bug Fixes

- stop click propagation on host when disabled ([#15](https://github.com/Neovici/cosmoz-button/issues/15)) ([9d8a401](https://github.com/Neovici/cosmoz-button/commit/9d8a4017874295c47172f09dd8f4b8967ab5c8e5))

## [1.0.1](https://github.com/Neovici/cosmoz-button/compare/v1.0.0...v1.0.1) (2026-02-22)

### Bug Fixes

- button text no wrapping ([#14](https://github.com/Neovici/cosmoz-button/issues/14)) ([111d49e](https://github.com/Neovici/cosmoz-button/commit/111d49e84ca38a1b89c8fa820db5e15af0a7929c))

## 1.0.0 (2026-02-03)

### Features

- implement cosmoz-button component ([#1](https://github.com/Neovici/cosmoz-button/issues/1)) ([c98a68a](https://github.com/Neovici/cosmoz-button/commit/c98a68a07436e070fc621c12f9ad17d91eabe0aa)), closes [Neovici/cosmoz-tokens#8](https://github.com/Neovici/cosmoz-tokens/issues/8) [#2](https://github.com/Neovici/cosmoz-button/issues/2)

# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/) and uses [Conventional Commits](https://conventionalcommits.org).
