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

| Attribute    | Type    | Default   | Description                                     |
| ------------ | ------- | --------- | ----------------------------------------------- |
| `variant`    | string  | `primary` | primary, secondary, tertiary, destructive, link |
| `size`       | string  | `md`      | sm, md, lg, xl                                  |
| `disabled`   | boolean | `false`   | Disables the button                             |
| `full-width` | boolean | `false`   | Makes the button take 100% width                |

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

The button supports leading and trailing icon slots:

```html
<!-- Leading icon -->
<cosmoz-button>
	<svg slot="leading" width="20" height="20">...</svg>
	Add Item
</cosmoz-button>

<!-- Trailing icon -->
<cosmoz-button variant="secondary">
	Download
	<svg slot="trailing" width="20" height="20">...</svg>
</cosmoz-button>

<!-- Both icons -->
<cosmoz-button>
	<svg slot="leading">...</svg>
	Action
	<svg slot="trailing">...</svg>
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
