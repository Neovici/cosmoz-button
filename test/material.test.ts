import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import '../src/cosmoz-button';

describe('optional button material', () => {
	it('adds a sheen without replacing the semantic fill', async () => {
		const el = await fixture<HTMLElement>(
			html`<cosmoz-button>Run</cosmoz-button>`,
		);
		const button = el.shadowRoot!.querySelector('button')!;
		const fill = getComputedStyle(button).backgroundColor;
		expect(getComputedStyle(button).backgroundImage).to.equal('none');
		el.style.setProperty(
			'--cz-control-sheen',
			'linear-gradient(white, transparent)',
		);
		expect(getComputedStyle(button).backgroundImage).to.contain(
			'linear-gradient',
		);
		expect(getComputedStyle(button).backgroundColor).to.equal(fill);
		el.style.removeProperty('--cz-control-sheen');
		expect(getComputedStyle(button).backgroundImage).to.equal('none');
	});

	it('keeps text-only and disabled variants free of sheen', async () => {
		const wrapper = await fixture(html`
			<div style="--cz-control-sheen: linear-gradient(white, transparent)">
				<cosmoz-button variant="link">Link</cosmoz-button>
				<cosmoz-button variant="tertiary">More</cosmoz-button>
				<cosmoz-button disabled>Disabled</cosmoz-button>
			</div>
		`);
		for (const el of wrapper.querySelectorAll('cosmoz-button')) {
			expect(
				getComputedStyle(el.shadowRoot!.querySelector('button')!)
					.backgroundImage,
			).to.equal('none');
		}
	});

	it('applies and removes an optional icon material', async () => {
		const el = await fixture<HTMLElement>(
			html`<cosmoz-button><svg slot="prefix"></svg>Run</cosmoz-button>`,
		);
		const icon = el.querySelector('svg')!;
		expect(getComputedStyle(icon).filter).to.equal('none');
		el.style.setProperty('--cz-icon-filter', 'drop-shadow(0 1px 0 white)');
		expect(getComputedStyle(icon).filter).to.contain('drop-shadow');
		el.style.removeProperty('--cz-icon-filter');
		expect(getComputedStyle(icon).filter).to.equal('none');
	});

	it('applies elevation and restores the default when material is removed', async () => {
		const el = await fixture<HTMLElement>(
			html`<cosmoz-button variant="secondary">Review</cosmoz-button>`,
		);
		const button = el.shadowRoot!.querySelector('button')!;
		const original = getComputedStyle(button).boxShadow;
		el.style.setProperty(
			'--cz-button-shadow',
			'inset 0 1px 0 white, 0 2px 4px navy',
		);
		await waitUntil(() =>
			getComputedStyle(button).boxShadow.includes('rgb(0, 0, 128)'),
		);
		el.style.removeProperty('--cz-button-shadow');
		await waitUntil(() => getComputedStyle(button).boxShadow === original);
	});
});
