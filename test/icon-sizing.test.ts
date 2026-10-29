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

	it('honours inherited icon tokens without changing the control hit area', async () => {
		const el = await fixture(html`
			<div style="--cz-icon-size-sm: 1.125rem; --cz-control-height-md: 2rem">
				<cosmoz-button><svg viewBox="0 0 24 24"></svg>Search</cosmoz-button>
			</div>
		`);
		const icon = el.querySelector('svg')!;
		const button = el.querySelector('cosmoz-button')!;
		const before = button.getBoundingClientRect().height;
		expect(icon.getBoundingClientRect().width).to.equal(18);
		(el as HTMLElement).style.setProperty('--cz-icon-size-sm', '1.25rem');
		expect(icon.getBoundingClientRect().width).to.equal(20);
		expect(button.getBoundingClientRect().height).to.equal(before);
	});

	it('overrides icon-only icons independently of button size and SVG attributes', async () => {
		const el = await fixture(html`
			<cosmoz-button
				icon-only
				aria-label="Search"
				style="--cosmoz-button-icon-size: 1.125rem; --cz-control-height-md: 2rem"
			>
				<svg width="24" height="24" viewBox="0 0 24 24"></svg>
			</cosmoz-button>
		`);
		const icon = el.querySelector('svg')!;
		const before = el.getBoundingClientRect();
		expect(icon.getBoundingClientRect().width).to.equal(18);
		(el as HTMLElement).style.setProperty(
			'--cosmoz-button-icon-size',
			'1.25rem',
		);
		expect(icon.getBoundingClientRect().width).to.equal(20);
		expect(el.getBoundingClientRect().width).to.equal(before.width);
		expect(el.getBoundingClientRect().height).to.equal(before.height);
	});
});
