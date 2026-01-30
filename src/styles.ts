import { skeumorphicHighlight } from '@neovici/cosmoz-tokens/skeumorphic';
import { css } from '@pionjs/pion';

/**
 * Button styles using cosmoz-tokens design system
 * Based on Untitled UI button component specifications
 */
export const styles = css`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	/* Small (sm) */
	:host([size='sm']) .button,
	.button--sm {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* Medium (md) - default */
	.button,
	:host([size='md']) .button,
	.button--md {
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* Large (lg) */
	:host([size='lg']) .button,
	.button--lg {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* Extra Large (xl) */
	:host([size='xl']) .button,
	.button--xl {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	/* Skeuomorphic inner highlight for solid variants */
	.button,
	:host([variant='primary']) .button,
	:host([variant='secondary']) .button,
	:host([variant='destructive']) .button {
		${skeumorphicHighlight}
	}

	/* Primary - default */
	.button,
	:host([variant='primary']) .button {
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	.button:hover,
	:host([variant='primary']) .button:hover {
		background-color: var(--cz-color-bg-brand-solid-hover);
	}

	.button:active,
	:host([variant='primary']) .button:active {
		background-color: var(--cz-color-brand-800);
	}

	.button:focus-visible,
	:host([variant='primary']) .button:focus-visible {
		outline: none;
		box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
	}

	/* Secondary */
	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	:host([variant='secondary']) .button:hover {
		background-color: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-secondary-hover);
	}

	:host([variant='secondary']) .button:active {
		background-color: var(--cz-color-bg-secondary);
	}

	:host([variant='secondary']) .button:focus-visible {
		outline: none;
		box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
	}

	/* Tertiary */
	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;
	}

	:host([variant='tertiary']) .button:hover {
		background-color: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-secondary-hover);
	}

	:host([variant='tertiary']) .button:active {
		background-color: var(--cz-color-bg-secondary);
	}

	:host([variant='tertiary']) .button:focus-visible {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}

	/* Destructive */
	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	:host([variant='destructive']) .button:hover {
		background-color: var(--cz-color-bg-error-solid-hover);
	}

	:host([variant='destructive']) .button:active {
		background-color: var(--cz-color-error-800);
	}

	:host([variant='destructive']) .button:focus-visible {
		outline: none;
		box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
	}

	/* Link */
	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;
	}

	:host([variant='link']) .button:hover {
		text-decoration: underline;
		color: var(--cz-color-text-brand-hover);
	}

	:host([variant='link']) .button:active {
		color: var(--cz-color-brand-800);
	}

	:host([variant='link']) .button:focus-visible {
		outline: none;
		text-decoration: underline;
		box-shadow: var(--cz-focus-ring);
		border-radius: var(--cz-radius-xs);
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button,
	.button:disabled {
		cursor: not-allowed;
		pointer-events: none;
	}

	/* Hide skeuomorphic highlight for disabled buttons */
	:host([disabled]) .button::before,
	.button:disabled::before {
		display: none;
	}

	/* Primary disabled */
	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	/* Secondary disabled */
	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	/* Tertiary disabled */
	:host([disabled][variant='tertiary']) .button {
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	/* Destructive disabled */
	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	/* Link disabled */
	:host([disabled][variant='link']) .button {
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg),
	::slotted([slot='prefix']),
	::slotted([slot='suffix']) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}

	/* Smaller icons for sm size */
	:host([size='sm']) ::slotted(svg),
	:host([size='sm']) ::slotted([slot='prefix']),
	:host([size='sm']) ::slotted([slot='suffix']) {
		width: 16px;
		height: 16px;
	}
`;
