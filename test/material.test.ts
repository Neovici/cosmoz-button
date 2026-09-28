import { expect, fixture, html } from '@open-wc/testing';
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
});
