import { html, nothing } from 'lit-html';
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
		type: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
			description: 'The button type attribute',
			table: {
				defaultValue: { summary: 'button' },
			},
		},
		href: {
			control: 'text',
			description: 'When set, renders as an anchor link instead of a button',
		},
		target: {
			control: 'text',
			description: 'Target attribute for the anchor (only with href)',
		},
		rel: {
			control: 'text',
			description: 'Rel attribute for the anchor (only with href)',
		},
		download: {
			control: 'text',
			description: 'Download attribute for the anchor (only with href)',
		},
		ariaLabel: {
			control: 'text',
			description: 'Accessible label for icon-only buttons',
		},
		iconOnly: {
			control: 'boolean',
			description: 'Renders a compact square icon-only button (utility button)',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		tooltip: {
			control: 'text',
			description: 'Wraps the button in a tooltip with this heading',
		},
		tooltipPlacement: {
			control: 'select',
			options: ['top', 'bottom', 'left', 'right'],
			description: 'Tooltip placement (only with tooltip)',
			table: {
				defaultValue: { summary: 'top' },
			},
		},
		ariaPressed: {
			control: 'boolean',
			description: 'Reflects a toggled/selected state',
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
		type=${args.type || 'button'}
		?disabled=${args.disabled}
		?full-width=${args.fullWidth}
		?icon-only=${args.iconOnly}
		tooltip=${args.tooltip || nothing}
		tooltip-placement=${args.tooltipPlacement || nothing}
		aria-pressed=${args.ariaPressed ? 'true' : nothing}
		href=${args.href || nothing}
		target=${args.target || nothing}
		rel=${args.rel || nothing}
		download=${args.download || nothing}
		aria-label=${args.ariaLabel || nothing}
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
		<div class="story-row">
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
		<div class="story-row">
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
		<div class="story-row">
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
		<div class="story-row">
			<cosmoz-button variant="primary">
				<svg
					slot="prefix"
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
					slot="suffix"
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
					slot="prefix"
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
					slot="prefix"
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
				story: 'Buttons with prefix and suffix icon slots.',
			},
		},
	},
};

// Icon-Only (utility buttons)
export const IconOnly = {
	render: () => html`
		<style>
			.utility-icon {
				width: 20px;
				height: 20px;
			}
			.utility-icon-sm {
				width: 16px;
				height: 16px;
			}
		</style>
		<div class="story-stack">
			<div>
				<p class="story-label">
					Compact square utility buttons. Always pair with an
					<code>aria-label</code> and preferably a <code>tooltip</code>.
				</p>
			</div>
			<div class="story-row">
				<cosmoz-button
					icon-only
					variant="secondary"
					tooltip="Add item"
					aria-label="Add item"
				>
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 5v14M5 12h14" />
					</svg>
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Search"
					aria-label="Search"
				>
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="M21 21l-4.35-4.35" />
					</svg>
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Close panel"
					aria-label="Close panel"
				>
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M6 6l12 12M18 6L6 18" />
					</svg>
				</cosmoz-button>
			</div>
			<div>
				<p class="story-label">Sizes</p>
			</div>
			<div class="story-row">
				<cosmoz-button icon-only variant="tertiary" size="sm" aria-label="Sm">
					<svg
						class="utility-icon-sm"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 5v14M5 12h14" />
					</svg>
				</cosmoz-button>
				<cosmoz-button icon-only variant="tertiary" size="md" aria-label="Md">
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 5v14M5 12h14" />
					</svg>
				</cosmoz-button>
				<cosmoz-button icon-only variant="tertiary" size="lg" aria-label="Lg">
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 5v14M5 12h14" />
					</svg>
				</cosmoz-button>
				<cosmoz-button icon-only variant="tertiary" size="xl" aria-label="Xl">
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 5v14M5 12h14" />
					</svg>
				</cosmoz-button>
			</div>
			<div>
				<p class="story-label">
					Toggled (<code>aria-pressed="true"</code>) and disabled
				</p>
			</div>
			<div class="story-row">
				<cosmoz-button
					icon-only
					variant="tertiary"
					aria-pressed="true"
					tooltip="Invoice image"
					aria-label="Invoice image"
				>
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="3" y="4" width="18" height="16" rx="2" />
						<circle cx="9" cy="10" r="1.6" />
						<path d="M4 18l5-5 4 4 3-3 4 4" />
					</svg>
				</cosmoz-button>
				<cosmoz-button icon-only variant="tertiary" disabled aria-label="Off">
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M6 6l12 12M18 6L6 18" />
					</svg>
				</cosmoz-button>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Icon-only utility buttons in secondary and tertiary variants, all sizes, plus toggled (aria-pressed) and disabled states.',
			},
		},
	},
};

// Tooltips
export const Tooltips = {
	render: () => html`
		<style>
			.utility-icon {
				width: 20px;
				height: 20px;
			}
		</style>
		<div class="story-stack">
			<div>
				<p class="story-label">
					Hover (or focus) the buttons to see the tooltip. The wrapper is always
					rendered and degrades to a pass-through when
					<code>tooltip</code> is unset.
				</p>
			</div>
			<div class="story-row">
				<cosmoz-button icon-only variant="tertiary" tooltip="Top placement">
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 5v14M5 12h14" />
					</svg>
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Left placement"
					tooltip-placement="left"
					aria-label="Left placement"
				>
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="M21 21l-4.35-4.35" />
					</svg>
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Bottom placement"
					tooltip-placement="bottom"
					aria-label="Bottom placement"
				>
					<svg
						class="utility-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M6 6l12 12M18 6L6 18" />
					</svg>
				</cosmoz-button>
			</div>
			<div class="story-row">
				<cosmoz-button variant="secondary" tooltip="Tooltip on a text button"
					>Text button with tooltip</cosmoz-button
				>
				<cosmoz-button
					variant="primary"
					tooltip="Disabled button tooltip"
					disabled
					>Disabled with tooltip</cosmoz-button
				>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Tooltip integration via the tooltip and tooltip-placement attributes. Works on icon-only and text buttons; disabled buttons do not show the tooltip.',
			},
		},
	},
};

// Full Width
export const FullWidth = {
	render: () => html`
		<div style="width: 300px;" class="story-stack">
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
				font-weight: var(--cz-font-weight-semibold);
				font-size: var(--cz-text-xs);
				color: var(--cz-color-text-tertiary);
				text-transform: uppercase;
			}
			.row-label {
				font-size: var(--cz-text-xs);
				color: var(--cz-color-text-tertiary);
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
		<div class="story-stack">
			<div>
				<p class="story-label">
					Hover over buttons to see state changes. Tab to see focus rings.
				</p>
			</div>
			<div class="story-row">
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

// Accessibility
export const Accessibility = {
	render: () => html`
		<style>
			.a11y-section {
				margin-bottom: calc(var(--cz-spacing) * 6);
			}
			.a11y-section h4 {
				margin: 0 0 calc(var(--cz-spacing) * 2) 0;
				font-size: var(--cz-text-sm);
				font-weight: var(--cz-font-weight-semibold);
				color: var(--cz-color-text-primary);
			}
			.a11y-section p {
				margin: 0 0 calc(var(--cz-spacing) * 3) 0;
				font-size: var(--cz-text-sm);
				color: var(--cz-color-text-tertiary);
			}
			.icon {
				width: 20px;
				height: 20px;
			}
			#delete-warning {
				margin-top: calc(var(--cz-spacing) * 2);
				font-size: var(--cz-text-sm);
				color: var(--cz-color-text-error);
			}
		</style>
		<div class="story-stack">
			<div class="a11y-section">
				<h4>Icon-only buttons with aria-label</h4>
				<p>
					Buttons without visible text should have an aria-label for screen
					readers. Prefer the <code>icon-only</code> attribute with a
					<code>tooltip</code> for utility buttons — the tooltip heading doubles
					as a visual affordance while <code>aria-label</code> keeps them
					accessible. For toggles, reflect the state with
					<code>aria-pressed</code>.
				</p>
				<div class="story-row">
					<cosmoz-button icon-only tooltip="Add item" aria-label="Add item">
						<svg
							slot="prefix"
							class="icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M12 5v14M5 12h14" />
						</svg>
					</cosmoz-button>
					<cosmoz-button
						icon-only
						variant="secondary"
						tooltip="Edit"
						aria-label="Edit"
						aria-pressed="true"
					>
						<svg
							slot="prefix"
							class="icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
							<path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
						</svg>
					</cosmoz-button>
					<cosmoz-button
						icon-only
						variant="destructive"
						tooltip="Delete"
						aria-label="Delete"
					>
						<svg
							slot="prefix"
							class="icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
							/>
						</svg>
					</cosmoz-button>
				</div>
			</div>

			<div class="a11y-section">
				<h4>Button with aria-describedby</h4>
				<p>Reference additional context for screen readers.</p>
				<cosmoz-button variant="destructive" aria-describedby="delete-warning">
					Delete Account
				</cosmoz-button>
				<p id="delete-warning">This action cannot be undone.</p>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates accessible patterns for icon-only buttons and descriptive context.',
			},
		},
	},
};

// Anchor Link Mode
export const AnchorLinks = {
	render: () => html`
		<div class="story-stack">
			<div>
				<p class="story-label">
					When <code>href</code> is set, the button renders as an anchor link
					with the same visual styles.
				</p>
			</div>
			<div class="story-row">
				<cosmoz-button variant="primary" href="/home">Home</cosmoz-button>
				<cosmoz-button variant="secondary" href="/about">About</cosmoz-button>
				<cosmoz-button variant="tertiary" href="/contact"
					>Contact</cosmoz-button
				>
				<cosmoz-button variant="destructive" href="/delete"
					>Delete</cosmoz-button
				>
			</div>
			<div class="story-row">
				<cosmoz-button href="/docs" target="_blank" rel="noopener"
					>Open in New Tab</cosmoz-button
				>
				<cosmoz-button href="/report.pdf" download
					>Download Report</cosmoz-button
				>
			</div>
			<div class="story-row">
				<cosmoz-button variant="primary" href="/home" disabled
					>Disabled Link</cosmoz-button
				>
				<cosmoz-button variant="secondary" href="/about" disabled
					>Disabled Link</cosmoz-button
				>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Buttons rendered as anchor links using the href attribute, with optional target, rel, and download attributes.',
			},
		},
	},
};

// Anchor Links with Icons
export const AnchorLinksWithIcons = {
	render: () => html`
		<style>
			.icon {
				width: 20px;
				height: 20px;
			}
		</style>
		<div class="story-stack">
			<div>
				<p class="story-label">
					Anchor links with prefix and suffix icons for common navigation
					patterns.
				</p>
			</div>
			<div class="story-row">
				<cosmoz-button variant="primary" href="/">
					<svg
						slot="prefix"
						class="icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
						<polyline points="9 22 9 12 15 12 15 22" />
					</svg>
					Home
				</cosmoz-button>
				<cosmoz-button variant="secondary" href="/dashboard">
					<svg
						slot="prefix"
						class="icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<rect x="3" y="3" width="7" height="7" />
						<rect x="14" y="3" width="7" height="7" />
						<rect x="14" y="14" width="7" height="7" />
						<rect x="3" y="14" width="7" height="7" />
					</svg>
					Dashboard
				</cosmoz-button>
				<cosmoz-button variant="tertiary" href="/settings">
					<svg
						slot="prefix"
						class="icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<circle cx="12" cy="12" r="3" />
						<path
							d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
						/>
					</svg>
					Settings
				</cosmoz-button>
			</div>
			<div class="story-row">
				<cosmoz-button
					variant="secondary"
					href="https://example.com"
					target="_blank"
					rel="noopener"
				>
					Visit Docs
					<svg
						slot="suffix"
						class="icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</cosmoz-button>
				<cosmoz-button
					variant="tertiary"
					href="https://github.com"
					target="_blank"
					rel="noopener"
				>
					GitHub
					<svg
						slot="suffix"
						class="icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</cosmoz-button>
			</div>
			<div class="story-row">
				<cosmoz-button variant="primary" href="/report.pdf" download>
					Download Report
					<svg
						slot="suffix"
						class="icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
						<polyline points="7 10 12 15 17 10" />
						<line x1="12" y1="15" x2="12" y2="3" />
					</svg>
				</cosmoz-button>
				<cosmoz-button variant="secondary" href="/data.csv" download>
					<svg
						slot="prefix"
						class="icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
						<polyline points="7 10 12 15 17 10" />
						<line x1="12" y1="15" x2="12" y2="3" />
					</svg>
					Export CSV
				</cosmoz-button>
			</div>
			<div class="story-row">
				<cosmoz-button variant="link" href="/search">
					<svg
						slot="prefix"
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
				<cosmoz-button
					variant="link"
					href="/help"
					target="_blank"
					rel="noopener"
				>
					Help Center
					<svg
						slot="suffix"
						class="icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</cosmoz-button>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Anchor links with prefix and suffix icons for navigation, external links, downloads, and link variants.',
			},
		},
	},
};
