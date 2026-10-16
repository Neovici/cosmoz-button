import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit-html';
import '../src/cosmoz-button';

const withTokens = (tokens: string) =>
	fixture(
		html`<div style=${tokens}>
			<cosmoz-button>Primary</cosmoz-button>
			<cosmoz-button variant="link">Link</cosmoz-button>
		</div>`,
	);

const inner = (host: Element, sel: string) =>
	getComputedStyle(
		host.querySelector(sel)!.shadowRoot!.querySelector('.button')!,
	);

describe('cosmoz-button colors', () => {
	it('fills the primary button with the action tokens', async () => {
		const el = await withTokens(
			'--cz-color-bg-action-solid: rgb(1, 2, 3); --cz-color-text-on-action: rgb(4, 5, 6); --cz-color-bg-brand-solid: rgb(9, 9, 9)',
		);
		const style = inner(el, 'cosmoz-button:not([variant])');
		expect(style.backgroundColor).to.equal('rgb(1, 2, 3)');
		expect(style.color).to.equal('rgb(4, 5, 6)');
	});

	it('raises the primary button with the action shadow', async () => {
		const el = await withTokens(
			'--cz-shadow-action: rgb(1, 2, 3) 0px 1px 2px 0px',
		);
		expect(inner(el, 'cosmoz-button:not([variant])').boxShadow).to.equal(
			'rgb(1, 2, 3) 0px 1px 2px 0px',
		);
	});

	it('colors the link variant with the link token', async () => {
		const el = await withTokens(
			'--cz-color-text-link: rgb(7, 8, 9); --cz-color-text-brand: rgb(9, 9, 9)',
		);
		expect(inner(el, 'cosmoz-button[variant="link"]').color).to.equal(
			'rgb(7, 8, 9)',
		);
	});

	it('keeps tertiary icons as quiet as tertiary text controls', async () => {
		const el = await fixture(html`
			<div
				style="--cz-glass-sheen: linear-gradient(red, blue); --cz-shadow-glass: 0 1px 2px red; --cz-backdrop-filter-glass: blur(16px)"
			>
				<cosmoz-button variant="tertiary">Text</cosmoz-button>
				<cosmoz-button variant="tertiary" icon-only aria-label="Zoom in"
					>+</cosmoz-button
				>
			</div>
		`);
		const text = inner(el, 'cosmoz-button:not([icon-only])');
		const icon = inner(el, 'cosmoz-button[icon-only]');
		for (const property of [
			'backgroundImage',
			'backgroundColor',
			'boxShadow',
			'backdropFilter',
			'borderColor',
		] as const) {
			expect(icon[property]).to.equal(text[property]);
		}
	});
});
