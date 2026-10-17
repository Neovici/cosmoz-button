# cosmoz-button

A customizable button web component built with [Untitled UI](https://www.untitledui.com/) design tokens.

Part of the [Neovici](https://neovici.se) design system.

## Installation

```bash
npm install @neovici/cosmoz-button
```

## Usage

```javascript
import '@neovici/cosmoz-button';
```

```html
<!-- Primary button (default) -->
<cosmoz-button>Save</cosmoz-button>

<!-- Secondary button -->
<cosmoz-button variant="secondary">Cancel</cosmoz-button>

<!-- Destructive button -->
<cosmoz-button variant="destructive">Delete</cosmoz-button>

<!-- Tertiary button -->
<cosmoz-button variant="tertiary">Learn more</cosmoz-button>

<!-- Link button -->
<cosmoz-button variant="link">View details</cosmoz-button>

<!-- Icon-only utility button with tooltip -->
<cosmoz-button icon-only variant="tertiary" tooltip="Close" aria-label="Close">
	<svg width="20" height="20">...</svg>
</cosmoz-button>

<!-- Icon-only button with selected (toggled) state -->
<cosmoz-button icon-only aria-pressed="true">
	<svg width="20" height="20">...</svg>
</cosmoz-button>

<!-- Anchor link (renders as <a> when href is present) -->
<cosmoz-button href="/home" target="_blank" rel="noopener"
	>Open in new tab</cosmoz-button
>
```

## Attributes

| Attribute           | Type    | Default   | Description                                                 |
| ------------------- | ------- | --------- | ----------------------------------------------------------- |
| `variant`           | string  | `primary` | primary, secondary, tertiary, destructive, link             |
| `size`              | string  | `md`      | sm, md, lg, xl                                              |
| `disabled`          | boolean | `false`   | Disables the button                                         |
| `full-width`        | boolean | `false`   | Makes the button take 100% width                            |
| `icon-only`         | boolean | `false`   | Renders a compact square icon-only button (utility button)  |
| `tooltip`           | string  | -         | Wraps the button in a `cosmoz-tooltip` with this heading    |
| `tooltip-placement` | string  | `top`     | Tooltip placement: top, bottom, left, right                 |
| `aria-pressed`      | string  | -         | Set to `true` to show the selected/toggled state            |
| `type`              | string  | `button`  | Button type: button, submit, reset                          |
| `value`             | string  | -         | Value associated with the button                            |
| `href`              | string  | -         | When present, renders as an anchor link instead of a button |
| `target`            | string  | -         | Target attribute for the anchor (only with href)            |
| `rel`               | string  | -         | Rel attribute for the anchor (only with href)               |
| `download`          | string  | -         | Download attribute for the anchor (only with href)          |
| `aria-label`        | string  | -         | Accessible label for icon-only buttons                      |
| `aria-describedby`  | string  | -         | ID of element that describes the button                     |

## Variants

### Style Variants

| Variant       | Description                                         |
| ------------- | --------------------------------------------------- |
| `primary`     | Pale glass in light mode, smoked glass in dark mode |
| `secondary`   | Translucent neutral fill with a hairline border     |
| `tertiary`    | Transparent, translucent wash on hover              |
| `destructive` | Error solid fill with the same sheen as primary     |
| `link`        | No padding, underline on hover                      |

All variants show a 2px focus outline offset outside the button and fade to 45% opacity
when disabled so they keep their look.

Labelled buttons use `--cz-radius-md` (8px). Icon-only buttons stay circular;
link buttons retain their smaller focus corner radius.

While held down, filled buttons use a distinct pressed fill, lose their sheen,
and show an inset shadow. Tertiary controls use a flat pressed fill. Button
geometry and labels stay stationary throughout the interaction.

### Size Variants

| Size | Height | Icon-only Size | Font Size | Icon Size |
| ---- | ------ | -------------- | --------- | --------- |
| `sm` | 28px   | 28px           | 12px      | 14px      |
| `md` | 32px   | 32px           | 13px      | 16px      |
| `lg` | 36px   | 36px           | 14px      | 16px      |
| `xl` | 40px   | 40px           | 14px      | 18px      |

Heights come from the `--cz-control-height-{sm,md,lg,xl}` tokens in `@neovici/cosmoz-tokens`, which inputs use too.

## Icons

The button supports prefix and suffix icon slots:

```html
<!-- Prefix icon -->
<cosmoz-button>
	<svg slot="prefix" width="20" height="20">...</svg>
	Add Item
</cosmoz-button>

<!-- Suffix icon -->
<cosmoz-button variant="secondary">
	Download
	<svg slot="suffix" width="20" height="20">...</svg>
</cosmoz-button>

<!-- Both icons -->
<cosmoz-button>
	<svg slot="prefix">...</svg>
	Action
	<svg slot="suffix">...</svg>
</cosmoz-button>
```

## Icon-Only Buttons

Set the `icon-only` attribute to render a compact square utility button
([Untitled UI utility button](https://www.untitledui.com/react/components/utility-buttons)):

```html
<cosmoz-button icon-only variant="tertiary" aria-label="Close panel">
	<svg width="20" height="20">...</svg>
</cosmoz-button>
```

- Square sizing per `size`: sm 28px, md 32px, lg 36px, xl 40px, icon centered
- Secondary icons use the neutral glass fill. Tertiary icons stay transparent
  at rest with flat hover and pressed fills. Both use primary icon text color.
- Primary icons follow the glass action text color for each theme;
  destructive icons retain white on the error fill
- Slotted SVG sizing follows the size table above
- All existing variants, focus rings, disabled and pressed-down `:active`
  states apply as usual

### Selected / Toggled State

Set `aria-pressed="true"` to show the selected state. It is available on
every variant, with colors matching each variant's intent:

- **secondary / tertiary** get a translucent fill with primary text, like a
  selected segment
- **primary / destructive** keep their fill and sink with an inset shadow
- **link** keeps its underline

```html
<cosmoz-button icon-only aria-pressed="true" aria-label="Invoice image">
	<svg width="20" height="20">...</svg>
</cosmoz-button>

<cosmoz-button variant="destructive" aria-pressed="true">Delete</cosmoz-button>
```

## Tooltips

Set the `tooltip` attribute to wrap the button in a
[`cosmoz-tooltip`](https://github.com/Neovici/cosmoz-tooltip) with the given
heading. Use `tooltip-placement` to position it (`top`, `bottom`, `left`,
`right` — default `top`):

```html
<cosmoz-button icon-only tooltip="Invoice image" tooltip-placement="left">
	<svg width="20" height="20">...</svg>
</cosmoz-button>
```

Notes:

- The tooltip wrapper is **always rendered**; `cosmoz-tooltip` degrades to a
  pass-through `<slot>` when no heading/content is set, so not setting
  `tooltip` costs nothing and no conditional rendering is needed.
- The wrapper fills the host (`display: flex; width: 100%`), so host-driven
  sizing (`flex: 1`, explicit widths, e.g. dialog action buttons) keeps
  working unchanged.
- The tooltip is disabled automatically when the button is disabled.

## Anchor Links

When `href` is present, the button renders as an anchor link with the same
visual styles:

```html
<cosmoz-button href="/home">Home</cosmoz-button>
<cosmoz-button href="/report.pdf" download>Download report</cosmoz-button>
<cosmoz-button href="https://example.com" target="_blank" rel="noopener"
	>External link</cosmoz-button
>
```

## Styling

The button exposes a `button` part for external styling:

```css
cosmoz-button::part(button) {
	/* Custom styles */
}
```

## Design Tokens

This component uses CSS custom properties from `@neovici/cosmoz-tokens`. The tokens are automatically applied but can be customized at the application level.

| Property                          | Default  | Description                                                                             |
| --------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| `--cosmoz-button-justify-content` | `center` | Alignment of the label and icons. Containers set `flex-start` for full-width menu rows. |

## Accessibility

### Button Type

The button defaults to `type="button"` to prevent unintended form submissions. Use `type="submit"` explicitly when needed:

```html
<form>
	<cosmoz-button type="submit">Submit Form</cosmoz-button>
</form>
```

### Icon-Only Buttons

When using buttons with only an icon (no visible text), provide an accessible
label. Prefer the `icon-only` attribute together with `tooltip` — the tooltip
heading doubles as the visual affordance while `aria-label` keeps it
accessible:

```html
<cosmoz-button icon-only tooltip="Delete item" aria-label="Delete item">
	<svg width="20" height="20">...</svg>
</cosmoz-button>
```

For toggles, reflect the state with `aria-pressed`.

### Descriptive Context

Use `aria-describedby` to reference additional help text:

```html
<cosmoz-button aria-describedby="delete-warning">Delete</cosmoz-button>
<p id="delete-warning">This action cannot be undone.</p>
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook:start

# Run tests
npm run test

# Build
npm run build
```

## License

Apache-2.0

### Forms and accessibility

The button defaults to `type="button"`. Use `type="submit"` or `type="reset"` inside a form, or associate it with an external form using `form="form-id"`. Submit buttons honor native validation, `name`, `value`, and the `formaction`, `formenctype`, `formmethod`, `formnovalidate`, and `formtarget` attributes. Disabled fieldsets disable their buttons. Cancel a click with `preventDefault()` to prevent its form action.

Give icon-only buttons an `aria-label` or `title`. Disclosure attributes such as `aria-expanded`, `aria-controls`, and `aria-haspopup` are forwarded to the native control. Use `control-role="menuitem"` for menu actions, and `tabindex="-1"` when a parent manages keyboard focus.
