import '@neovici/cosmoz-tokens';
import { html } from 'lit-html';
import '../src/cosmoz-button';

export default {
	title: 'Cosmoz Button',
	component: 'cosmoz-button',
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary', 'destructive', 'link'],
			description: 'The visual style variant of the button',
			table: {
				defaultValue: { summary: 'primary' },
			},
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg', 'xl'],
			description: 'The size of the button',
			table: {
				defaultValue: { summary: 'md' },
			},
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the button is disabled',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		fullWidth: {
			control: 'boolean',
			description: 'Whether the button should take full width',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		label: {
			control: 'text',
			description: 'Button label text',
		},
	},
};

// Helper to render button with args
const renderButton = (args) => html`
	<cosmoz-button
		variant=${args.variant || 'primary'}
		size=${args.size || 'md'}
		?disabled=${args.disabled}
		?full-width=${args.fullWidth}
	>
		${args.label || 'Button'}
	</cosmoz-button>
`;

// Default story with controls
export const Default = {
	args: {
		variant: 'primary',
		size: 'md',
		disabled: false,
		fullWidth: false,
		label: 'Button',
	},
	render: renderButton,
};

// All Variants
export const Variants = {
	render: () => html`
		<div
			style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
		>
			<cosmoz-button variant="primary">Primary</cosmoz-button>
			<cosmoz-button variant="secondary">Secondary</cosmoz-button>
			<cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
			<cosmoz-button variant="destructive">Destructive</cosmoz-button>
			<cosmoz-button variant="link">Link</cosmoz-button>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'The five visual style variants available for the button.',
			},
		},
	},
};

// All Sizes
export const Sizes = {
	render: () => html`
		<div style="display: flex; gap: 16px; align-items: center;">
			<cosmoz-button size="sm">Small</cosmoz-button>
			<cosmoz-button size="md">Medium</cosmoz-button>
			<cosmoz-button size="lg">Large</cosmoz-button>
			<cosmoz-button size="xl">Extra Large</cosmoz-button>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'The four size variants available for the button.',
			},
		},
	},
};

// Disabled States
export const DisabledStates = {
	render: () => html`
		<div
			style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
		>
			<cosmoz-button variant="primary" disabled>Primary</cosmoz-button>
			<cosmoz-button variant="secondary" disabled>Secondary</cosmoz-button>
			<cosmoz-button variant="tertiary" disabled>Tertiary</cosmoz-button>
			<cosmoz-button variant="destructive" disabled>Destructive</cosmoz-button>
			<cosmoz-button variant="link" disabled>Link</cosmoz-button>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'All variants in their disabled state.',
			},
		},
	},
};

// With Icons
export const WithIcons = {
	render: () => html`
		<style>
			.icon {
				width: 20px;
				height: 20px;
			}
		</style>
		<div
			style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
		>
			<cosmoz-button variant="primary">
				<svg
					slot="leading"
					class="icon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M12 5v14M5 12h14" />
				</svg>
				Add Item
			</cosmoz-button>
			<cosmoz-button variant="secondary">
				Download
				<svg
					slot="trailing"
					class="icon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
					/>
				</svg>
			</cosmoz-button>
			<cosmoz-button variant="tertiary">
				<svg
					slot="leading"
					class="icon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="M21 21l-4.35-4.35" />
				</svg>
				Search
			</cosmoz-button>
			<cosmoz-button variant="destructive">
				<svg
					slot="leading"
					class="icon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
					/>
				</svg>
				Delete
			</cosmoz-button>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'Buttons with leading and trailing icon slots.',
			},
		},
	},
};

// Full Width
export const FullWidth = {
	render: () => html`
		<div
			style="width: 300px; display: flex; flex-direction: column; gap: 12px;"
		>
			<cosmoz-button variant="primary" full-width
				>Full Width Primary</cosmoz-button
			>
			<cosmoz-button variant="secondary" full-width
				>Full Width Secondary</cosmoz-button
			>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'Buttons that take up 100% of their container width.',
			},
		},
	},
};

// Size by Variant Matrix
export const SizeVariantMatrix = {
	render: () => html`
		<style>
			.matrix {
				display: grid;
				grid-template-columns: auto repeat(5, 1fr);
				gap: 12px;
				align-items: center;
			}
			.header {
				font-weight: 600;
				font-size: 12px;
				color: #666;
				text-transform: uppercase;
			}
			.row-label {
				font-size: 12px;
				color: #666;
			}
		</style>
		<div class="matrix">
			<div></div>
			<div class="header">Primary</div>
			<div class="header">Secondary</div>
			<div class="header">Tertiary</div>
			<div class="header">Destructive</div>
			<div class="header">Link</div>

			<div class="row-label">SM</div>
			<cosmoz-button variant="primary" size="sm">Button</cosmoz-button>
			<cosmoz-button variant="secondary" size="sm">Button</cosmoz-button>
			<cosmoz-button variant="tertiary" size="sm">Button</cosmoz-button>
			<cosmoz-button variant="destructive" size="sm">Button</cosmoz-button>
			<cosmoz-button variant="link" size="sm">Button</cosmoz-button>

			<div class="row-label">MD</div>
			<cosmoz-button variant="primary" size="md">Button</cosmoz-button>
			<cosmoz-button variant="secondary" size="md">Button</cosmoz-button>
			<cosmoz-button variant="tertiary" size="md">Button</cosmoz-button>
			<cosmoz-button variant="destructive" size="md">Button</cosmoz-button>
			<cosmoz-button variant="link" size="md">Button</cosmoz-button>

			<div class="row-label">LG</div>
			<cosmoz-button variant="primary" size="lg">Button</cosmoz-button>
			<cosmoz-button variant="secondary" size="lg">Button</cosmoz-button>
			<cosmoz-button variant="tertiary" size="lg">Button</cosmoz-button>
			<cosmoz-button variant="destructive" size="lg">Button</cosmoz-button>
			<cosmoz-button variant="link" size="lg">Button</cosmoz-button>

			<div class="row-label">XL</div>
			<cosmoz-button variant="primary" size="xl">Button</cosmoz-button>
			<cosmoz-button variant="secondary" size="xl">Button</cosmoz-button>
			<cosmoz-button variant="tertiary" size="xl">Button</cosmoz-button>
			<cosmoz-button variant="destructive" size="xl">Button</cosmoz-button>
			<cosmoz-button variant="link" size="xl">Button</cosmoz-button>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'Complete matrix showing all size and variant combinations.',
			},
		},
	},
};

// Interactive States Demo
export const InteractiveStates = {
	render: () => html`
		<div style="display: flex; flex-direction: column; gap: 24px;">
			<div>
				<h4 style="margin: 0 0 12px 0; font-size: 14px; color: #666;">
					Hover over buttons to see state changes. Tab to see focus rings.
				</h4>
			</div>
			<div
				style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
			>
				<cosmoz-button variant="primary">Primary</cosmoz-button>
				<cosmoz-button variant="secondary">Secondary</cosmoz-button>
				<cosmoz-button variant="tertiary">Tertiary</cosmoz-button>
				<cosmoz-button variant="destructive">Destructive</cosmoz-button>
				<cosmoz-button variant="link">Link</cosmoz-button>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates hover, active, and focus states for all variants.',
			},
		},
	},
};
