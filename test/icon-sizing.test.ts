import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit-html';
import '../src/cosmoz-button';

describe('button icon sizing', () => {
	for (const size of ['sm', 'md', 'lg', 'xl']) {
		it(`preserves supplied SVG dimensions in ${size} icon-only buttons`, async () => {
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
			expect(icon.getBoundingClientRect().width).to.equal(20);
			expect(icon.getBoundingClientRect().height).to.equal(18);
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
