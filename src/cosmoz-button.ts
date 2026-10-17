import { normalize } from '@neovici/cosmoz-tokens/normalize';
import '@neovici/cosmoz-tooltip';
import { component, html, useEffect, useLayoutEffect } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';
import { FormButton } from './form-button';
import { styles } from './styles';

export type ButtonVariant =
	'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface CosmozButtonElement extends HTMLElement {
	syncFormButton(): void;
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	formDisabled?: boolean;
	readonly form: HTMLFormElement | null;
	name?: string;
	formaction?: string;
	formenctype?: string;
	formmethod?: string;
	formnovalidate?: boolean;
	formtarget?: string;
	controlRole?: string;
	ariaControls?: string | null;
	ariaHaspopup?: string | null;
	tabindex?: string | number | null;
	fullWidth?: boolean;
	iconOnly?: boolean;
	tooltip?: string | null;
	tooltipPlacement?: string | null;
	type?: ButtonType;
	value?: string | null;
	href?: string | null;
	target?: string | null;
	rel?: string | null;
	download?: string | null;
}

const observedAttributes = [
	'variant',
	'size',
	'disabled',
	'full-width',
	'icon-only',
	'tooltip',
	'tooltip-placement',
	'type',
	'value',
	'href',
	'target',
	'rel',
	'download',
	'aria-expanded',
	'aria-label',
	'title',
	'aria-pressed',
	'aria-controls',
	'aria-haspopup',
	'aria-description',
	'aria-busy',
	'aria-current',
	'control-role',
	'tabindex',
	'name',
	'form',
	'formaction',
	'formenctype',
	'formmethod',
	'formnovalidate',
	'formtarget',
] as const;

/**
 * A customizable button component using Untitled UI design tokens.
 *
 * @element cosmoz-button
 *
 * @attr {string} variant - Button style variant: primary (default), secondary, tertiary, destructive, link
 * @attr {string} size - Button size: sm, md (default), lg, xl
 * @attr {boolean} disabled - Disables the button
 * @attr {boolean} full-width - Makes the button 100% width
 * @attr {boolean} icon-only - Renders a compact square icon-only button (Untitled UI utility button)
 * @attr {string} tooltip - When set, wraps the button in a cosmoz-tooltip with this heading
 * @attr {string} tooltip-placement - Tooltip placement (top, bottom, left, right; default top)
 * @attr {string} type - Button type: button (default), submit, reset
 * @attr {string} value - Value associated with the button (optional)
 * @attr {string} href - When present, renders as an anchor link instead of a button
 * @attr {string} target - Target attribute for the anchor (only with href)
 * @attr {string} rel - Rel attribute for the anchor (only with href)
 * @attr {string} download - Download attribute for the anchor (only with href)
 * @attr {string} aria-expanded - Toggled/expanded state, forwarded to the native control
 * @attr {string} aria-label - Accessible name forwarded to the native control (icon-only buttons)
 * @attr {string} aria-pressed - Reflects a toggled/selected state (styled for icon-only buttons)
 *
 * @slot - Default slot for button text content
 * @slot prefix - Slot for prefix icon (before text)
 * @slot suffix - Slot for suffix icon (after text)
 *
 * @csspart button - The native button or anchor element
 */
const CosmozButton = (host: CosmozButtonElement) => {
	const {
		disabled = false,
		tooltip,
		tooltipPlacement,
		type = 'button',
		href,
		target,
		rel,
		download,
	} = host;
	const isDisabled = Boolean(disabled || host.formDisabled);
	useEffect(() => {
		host.syncFormButton();
	});

	useEffect(() => {
		const handler = (e: Event) => {
			if (host.disabled || host.formDisabled) {
				e.preventDefault();
				e.stopImmediatePropagation();
			}
		};
		host.addEventListener('click', handler, { capture: true });
		return () => host.removeEventListener('click', handler, { capture: true });
	}, [host.disabled, host.formDisabled]);

	useLayoutEffect(() => {
		const control = host.shadowRoot?.querySelector<HTMLElement>('.button');
		if (control && 'ariaControlsElements' in control) {
			control.ariaControlsElements = host.ariaControlsElements;
		}
	});

	const content = html`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;

	const control = when(
		href != null,
		() => html`
			<a
				role=${ifDefined(host.controlRole)}
				tabindex=${ifDefined(host.getAttribute('tabindex') ?? undefined)}
				aria-controls=${ifDefined(
					host.getAttribute('aria-controls') ?? undefined,
				)}
				aria-haspopup=${ifDefined(
					host.getAttribute('aria-haspopup') ?? undefined,
				)}
				aria-description=${ifDefined(
					host.getAttribute('aria-description') ?? undefined,
				)}
				aria-busy=${ifDefined(host.getAttribute('aria-busy') ?? undefined)}
				aria-current=${ifDefined(
					host.getAttribute('aria-current') ?? undefined,
				)}
				href=${href}
				class="button"
				part="button"
				aria-disabled=${isDisabled ? 'true' : nothing}
				aria-expanded=${ifDefined(
					host.getAttribute('aria-expanded') ?? undefined,
				)}
				aria-label=${ifDefined(
					host.getAttribute('aria-label') ??
						(host.iconOnly && host.title ? host.title : undefined),
				)}
				target=${ifDefined(target)}
				rel=${ifDefined(rel)}
				download=${ifDefined(download)}
				>${content}</a
			>
		`,
		() => html`
			<button
				role=${ifDefined(host.controlRole)}
				tabindex=${ifDefined(host.getAttribute('tabindex') ?? undefined)}
				aria-controls=${ifDefined(
					host.getAttribute('aria-controls') ?? undefined,
				)}
				aria-haspopup=${ifDefined(
					host.getAttribute('aria-haspopup') ?? undefined,
				)}
				aria-description=${ifDefined(
					host.getAttribute('aria-description') ?? undefined,
				)}
				aria-busy=${ifDefined(host.getAttribute('aria-busy') ?? undefined)}
				aria-current=${ifDefined(
					host.getAttribute('aria-current') ?? undefined,
				)}
				type=${type}
				class="button"
				part="button"
				?disabled=${isDisabled}
				aria-expanded=${ifDefined(
					host.getAttribute('aria-expanded') ?? undefined,
				)}
				aria-label=${ifDefined(
					host.getAttribute('aria-label') ??
						(host.iconOnly && host.title ? host.title : undefined),
				)}
				aria-pressed=${ifDefined(
					host.getAttribute('aria-pressed') ?? undefined,
				)}
			>
				${content}
			</button>
		`,
	);

	/* Always rendered; cosmoz-tooltip degrades to a pass-through unless
	   `tooltip` is set. */
	return html`<cosmoz-tooltip
		heading=${ifDefined(tooltip ?? undefined)}
		placement=${ifDefined(tooltipPlacement ?? undefined)}
		?disabled=${isDisabled}
	>
		${control}
	</cosmoz-tooltip>`;
};

customElements.define(
	'cosmoz-button',
	component<CosmozButtonElement>(CosmozButton, {
		baseElement: FormButton,
		observedAttributes,
		styleSheets: [normalize, styles],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);

export { CosmozButton };

declare global {
	interface HTMLElementTagNameMap {
		'cosmoz-button': CosmozButtonElement;
	}
}
