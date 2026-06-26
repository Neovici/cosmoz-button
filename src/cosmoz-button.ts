import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, useEffect } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { styles } from './styles';

export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'destructive'
	| 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface CosmozButtonElement extends HTMLElement {
	variant: ButtonVariant;
	size: ButtonSize;
	disabled: boolean;
	'full-width': boolean;
	type: ButtonType;
	value: string | null;
	href: string | null;
	target: string | null;
	rel: string | null;
	download: string | null;
}

const observedAttributes = [
	'variant',
	'size',
	'disabled',
	'full-width',
	'type',
	'value',
	'href',
	'target',
	'rel',
	'download',
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
 * @attr {string} type - Button type: button (default), submit, reset
 * @attr {string} value - Value associated with the button (optional)
 * @attr {string} href - When present, renders as an anchor link instead of a button
 * @attr {string} target - Target attribute for the anchor (only with href)
 * @attr {string} rel - Rel attribute for the anchor (only with href)
 * @attr {string} download - Download attribute for the anchor (only with href)
 *
 * @slot - Default slot for button text content
 * @slot prefix - Slot for prefix icon (before text)
 * @slot suffix - Slot for suffix icon (after text)
 *
 * @csspart button - The native button or anchor element
 */
const CosmozButton = (host: CosmozButtonElement) => {
	const disabled = host.hasAttribute('disabled');
	const type = host.getAttribute('type') || 'button';
	const href = host.getAttribute('href');

	useEffect(() => {
		const handler = (e: Event) => {
			if (host.hasAttribute('disabled')) e.stopImmediatePropagation();
		};
		host.addEventListener('click', handler, { capture: true });
		return () => host.removeEventListener('click', handler, { capture: true });
	}, []);

	const content = html`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;

	if (href != null) {
		const target = host.getAttribute('target');
		const rel = host.getAttribute('rel');
		const download = host.getAttribute('download');
		return html`
			<a
				href=${href}
				class="button"
				part="button"
				aria-disabled=${disabled ? 'true' : nothing}
				target=${ifDefined(target)}
				rel=${ifDefined(rel)}
				download=${ifDefined(download)}
				>${content}</a
			>
		`;
	}

	return html`
		<button type=${type} class="button" ?disabled=${disabled} part="button">
			${content}
		</button>
	`;
};

customElements.define(
	'cosmoz-button',
	component<CosmozButtonElement>(CosmozButton, {
		observedAttributes,
		styleSheets: [normalize, styles],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);

export { CosmozButton };
