import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, useEffect } from '@pionjs/pion';
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
}

const observedAttributes = [
	'variant',
	'size',
	'disabled',
	'full-width',
	'type',
	'value',
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
 *
 * @slot - Default slot for button text content
 * @slot prefix - Slot for prefix icon (before text)
 * @slot suffix - Slot for suffix icon (after text)
 *
 * @csspart button - The native button element
 */
const CosmozButton = (host: CosmozButtonElement) => {
	const disabled = host.hasAttribute('disabled');
	const type = host.getAttribute('type') || 'button';

	useEffect(() => {
		const handler = (e: Event) => {
			if (host.hasAttribute('disabled')) e.stopImmediatePropagation();
		};
		host.addEventListener('click', handler, { capture: true });
		return () => host.removeEventListener('click', handler, { capture: true });
	}, []);

	return html`
		<button type=${type} class="button" ?disabled=${disabled} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
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
