import { html, nothing } from 'lit-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
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

// Shared inline SVG icon helper: one place for the common svg attributes,
// callers supply only the inner shapes. Pass slot="prefix"/"suffix" via opts.
const iconSvg = (inner, opts = {}) =>
	html`<svg
		slot=${opts.slot || nothing}
		class=${opts.cls || nothing}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		${unsafeSVG(inner)}
	</svg>`;

// Icon paths (Feather-style, stroke-based)
/* eslint-disable max-len */
const icons = {
	plus: '<path d="M12 5v14M5 12h14" />',
	download:
		'<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />',
	search: '<circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />',
	trash:
		'<path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />',
	close: '<path d="M6 6l12 12M18 6L6 18" />',
	image:
		'<rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M4 18l5-5 4 4 3-3 4 4" />',
	edit: '<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />',
	home: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />',
	dashboard:
		'<rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />',
	external:
		'<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />',
	settings:
		'<circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />',
};
/* eslint-enable max-len */

// Toggle aria-pressed on a click; CSS restyles :host([aria-pressed='true'])
// instantly, no re-render needed.
const togglePressed = (e) => {
	const btn = e.currentTarget;
	btn.setAttribute(
		'aria-pressed',
		btn.getAttribute('aria-pressed') === 'true' ? 'false' : 'true',
	);
};

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
				story:
					'The five visual style variants. Hover to see state changes, Tab to see focus rings.',
			},
		},
	},
};

// All Sizes
export const Sizes = {
	render: () => html`
		<div class="story-stack">
			<div class="story-row">
				<cosmoz-button size="sm">Small</cosmoz-button>
				<cosmoz-button size="md">Medium</cosmoz-button>
				<cosmoz-button size="lg">Large</cosmoz-button>
				<cosmoz-button size="xl">Extra Large</cosmoz-button>
			</div>
			<div>
				<p class="story-label">Icon-only ladder (28 / 32 / 36 / 40 px)</p>
			</div>
			<div class="story-row">
				<cosmoz-button icon-only variant="tertiary" size="sm" aria-label="Sm">
					${iconSvg(icons.plus)}
				</cosmoz-button>
				<cosmoz-button icon-only variant="tertiary" size="md" aria-label="Md">
					${iconSvg(icons.plus)}
				</cosmoz-button>
				<cosmoz-button icon-only variant="tertiary" size="lg" aria-label="Lg">
					${iconSvg(icons.plus)}
				</cosmoz-button>
				<cosmoz-button icon-only variant="tertiary" size="xl" aria-label="Xl">
					${iconSvg(icons.plus)}
				</cosmoz-button>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'The four size variants, plus the icon-only size ladder (sm 28px, md 32px, lg 36px, xl 40px).',
			},
		},
	},
};

// With Icons
export const WithIcons = {
	render: () => html`
		<div class="story-row">
			<cosmoz-button variant="primary">
				${iconSvg(icons.plus, { slot: 'prefix' })} Add Item
			</cosmoz-button>
			<cosmoz-button variant="secondary">
				Download ${iconSvg(icons.download, { slot: 'suffix' })}
			</cosmoz-button>
			<cosmoz-button variant="tertiary">
				${iconSvg(icons.search, { slot: 'prefix' })} Search
			</cosmoz-button>
			<cosmoz-button variant="destructive">
				${iconSvg(icons.trash, { slot: 'prefix' })} Delete
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
					${iconSvg(icons.plus)}
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Search"
					aria-label="Search"
				>
					${iconSvg(icons.search)}
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Close panel"
					aria-label="Close panel"
				>
					${iconSvg(icons.close)}
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="destructive"
					tooltip="Delete"
					aria-label="Delete"
				>
					${iconSvg(icons.trash)}
				</cosmoz-button>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Icon-only utility buttons in secondary, tertiary, and destructive variants. ' +
					'Sizes are shown in Sizes; toggled and disabled states in Pressed State and Disabled States.',
			},
		},
	},
};

// Pressed / Selected State
export const PressedState = {
	render: () => html`
		<div class="story-stack">
			<div>
				<p class="story-label">
					Click to toggle <code>aria-pressed</code>. The pressed state works on
					every variant — quiet variants shift to the selected brand chip,
					destructive keeps the error intent, link emphasizes text.
				</p>
			</div>
			<div class="story-row">
				<cosmoz-button aria-pressed="false" @click=${togglePressed}
					>Primary</cosmoz-button
				>
				<cosmoz-button
					variant="secondary"
					aria-pressed="false"
					@click=${togglePressed}
					>Secondary</cosmoz-button
				>
				<cosmoz-button
					variant="tertiary"
					aria-pressed="false"
					@click=${togglePressed}
					>Tertiary</cosmoz-button
				>
				<cosmoz-button
					variant="destructive"
					aria-pressed="false"
					@click=${togglePressed}
					>Destructive</cosmoz-button
				>
				<cosmoz-button
					variant="link"
					aria-pressed="false"
					@click=${togglePressed}
					>Link</cosmoz-button
				>
			</div>
			<div class="story-row">
				<cosmoz-button
					icon-only
					variant="tertiary"
					aria-pressed="false"
					@click=${togglePressed}
					tooltip="Invoice image"
					aria-label="Invoice image"
				>
					${iconSvg(icons.image)}
				</cosmoz-button>
				<cosmoz-button variant="primary" tooltip="Normal state for comparison"
					>Normal Primary</cosmoz-button
				>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'The pressed/selected state (aria-pressed) across all variants, on text and icon-only buttons. Click any button to toggle it.',
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
			<cosmoz-button icon-only variant="tertiary" disabled aria-label="Off">
				${iconSvg(icons.close)}
			</cosmoz-button>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'All variants in their disabled state, plus a disabled icon-only button.',
			},
		},
	},
};

// Tooltips
export const Tooltips = {
	render: () => html`
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
					${iconSvg(icons.plus)}
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Right placement"
					tooltip-placement="right"
					aria-label="Right placement"
				>
					${iconSvg(icons.search)}
				</cosmoz-button>
				<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Bottom placement"
					tooltip-placement="bottom"
					aria-label="Bottom placement"
				>
					${iconSvg(icons.close)}
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
					'Tooltip integration via the tooltip and tooltip-placement attributes. ' +
					'Works on icon-only and text buttons; disabled buttons do not show the tooltip.',
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
					<code>aria-pressed</code> (click to toggle below).
				</p>
				<div class="story-row">
					<cosmoz-button
						icon-only
						variant="secondary"
						tooltip="Edit"
						aria-label="Edit"
						aria-pressed="false"
						@click=${togglePressed}
					>
						${iconSvg(icons.edit)}
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
					'Accessible patterns: aria-label on icon-only buttons, aria-pressed for toggles, and aria-describedby for additional context.',
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
			<div>
				<p class="story-label">Anchor links with icons</p>
			</div>
			<div class="story-row">
				<cosmoz-button variant="primary" href="/">
					${iconSvg(icons.home, { slot: 'prefix' })} Home
				</cosmoz-button>
				<cosmoz-button variant="secondary" href="/dashboard">
					${iconSvg(icons.dashboard, { slot: 'prefix' })} Dashboard
				</cosmoz-button>
				<cosmoz-button variant="tertiary" href="/settings">
					${iconSvg(icons.settings, { slot: 'prefix' })} Settings
				</cosmoz-button>
				<cosmoz-button
					variant="secondary"
					href="https://example.com"
					target="_blank"
					rel="noopener"
				>
					Visit Docs ${iconSvg(icons.external, { slot: 'suffix' })}
				</cosmoz-button>
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
					'Buttons rendered as anchor links using the href attribute, with optional target, rel, and download attributes, including prefix and suffix icons.',
			},
		},
	},
};
