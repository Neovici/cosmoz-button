import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit-html';
import '../src/cosmoz-button';

const ICON_SIZES = { sm: 14, md: 16, lg: 16, xl: 18 };

describe('button icon sizing', () => {
	for (const size of ['sm', 'md', 'lg', 'xl'] as const) {
		it(`sizes slotted icons in ${size} icon-only buttons, ignoring supplied width and height attributes`, async () => {
			const expected = ICON_SIZES[size];
			const el = await fixture(html`
				<cosmoz-button icon-only size=${size} aria-label="Search">
					<svg
						width="20"
						height="18"
						viewBox="0 0 24 24"
						aria-hidden="true"
					></svg>
				</cosmoz-button>
			`);
			const icon = el.querySelector('svg')!;
			expect(icon.getBoundingClientRect().width).to.equal(expected);
			expect(icon.getBoundingClientRect().height).to.equal(expected);
		});
	}

	it('keeps default sizing for SVGs without dimensions', async () => {
		const el = await fixture(html`
			<cosmoz-button icon-only aria-label="Search">
				<svg viewBox="0 0 24 24" aria-hidden="true"></svg>
			</cosmoz-button>
		`);
		const icon = el.querySelector('svg')!;
		expect(icon.getBoundingClientRect().width).to.equal(16);
		expect(icon.getBoundingClientRect().height).to.equal(16);
	});

	it('keeps labelled-button icon sizing', async () => {
		const el = await fixture(html`
			<cosmoz-button>
				<svg
					width="20"
					height="18"
					viewBox="0 0 24 24"
					aria-hidden="true"
				></svg>
				Search
			</cosmoz-button>
		`);
		const icon = el.querySelector('svg')!;
		expect(icon.getBoundingClientRect().width).to.equal(16);
		expect(icon.getBoundingClientRect().height).to.equal(16);
	});
});
