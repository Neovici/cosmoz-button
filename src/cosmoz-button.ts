import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { styles } from './styles';

export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'destructive'
	| 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface CosmozButtonElement extends HTMLElement {
	variant: ButtonVariant;
	size: ButtonSize;
	disabled: boolean;
	'full-width': boolean;
}

const observedAttributes = [
	'variant',
	'size',
	'disabled',
	'full-width',
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
 *
 * @slot - Default slot for button text content
 * @slot leading - Slot for leading icon (before text)
 * @slot trailing - Slot for trailing icon (after text)
 *
 * @csspart button - The native button element
 */
const CosmozButton = (host: CosmozButtonElement) => {
	const disabled = host.hasAttribute('disabled');

	return html`
		<button class="button" ?disabled=${disabled} part="button">
			<slot name="leading"></slot>
			<slot></slot>
			<slot name="trailing"></slot>
		</button>
	`;
};

customElements.define(
	'cosmoz-button',
	component<CosmozButtonElement>(CosmozButton, {
		observedAttributes,
		styleSheets: [normalize, styles],
	}),
);

export { CosmozButton };
