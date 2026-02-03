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
```

## Attributes

| Attribute          | Type    | Default   | Description                                     |
| ------------------ | ------- | --------- | ----------------------------------------------- |
| `variant`          | string  | `primary` | primary, secondary, tertiary, destructive, link |
| `size`             | string  | `md`      | sm, md, lg, xl                                  |
| `disabled`         | boolean | `false`   | Disables the button                             |
| `full-width`       | boolean | `false`   | Makes the button take 100% width                |
| `type`             | string  | `button`  | Button type: button, submit, reset              |
| `aria-label`       | string  | -         | Accessible label for icon-only buttons          |
| `aria-describedby` | string  | -         | ID of element that describes the button         |

## Variants

### Style Variants

| Variant       | Description                        |
| ------------- | ---------------------------------- |
| `primary`     | Brand solid background, white text |
| `secondary`   | White background, gray border      |
| `tertiary`    | Transparent, text only             |
| `destructive` | Error/danger styling               |
| `link`        | No padding, underline on hover     |

### Size Variants

| Size | Height | Font Size |
| ---- | ------ | --------- |
| `sm` | 36px   | 14px      |
| `md` | 40px   | 14px      |
| `lg` | 44px   | 16px      |
| `xl` | 48px   | 16px      |

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

## Styling

The button exposes a `button` part for external styling:

```css
cosmoz-button::part(button) {
	/* Custom styles */
}
```

## Design Tokens

This component uses CSS custom properties from `@neovici/cosmoz-tokens`. The tokens are automatically applied but can be customized at the application level.

## Accessibility

### Button Type

The button defaults to `type="button"` to prevent unintended form submissions. Use `type="submit"` explicitly when needed:

```html
<form>
	<cosmoz-button type="submit">Submit Form</cosmoz-button>
</form>
```

### Icon-Only Buttons

When using buttons with only an icon (no visible text), provide an accessible label:

```html
<cosmoz-button aria-label="Delete item">
	<svg slot="prefix">...</svg>
</cosmoz-button>
```

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
