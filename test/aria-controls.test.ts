import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import '../src/index';

describe('controlled elements across shadow roots', () => {
	for (const href of [undefined, '#panel']) {
		it(`resolves the ${href ? 'anchor' : 'button'} control's external panel`, async () => {
			const root = await fixture<HTMLElement>(html`
				<div>
					<cosmoz-button aria-controls="panel" .href=${href}>
						Show details
					</cosmoz-button>
					<section id="panel">Details</section>
				</div>
			`);
			const control = root
				.querySelector('cosmoz-button')!
				.shadowRoot!.querySelector<HTMLElement>('.button')!;
			expect(control.ariaControlsElements).to.deep.equal([
				root.querySelector('#panel'),
			]);
		});
	}

	it('resolves a conditionally rendered panel when disclosure state changes', async () => {
		const root = await fixture<HTMLElement>(html`
			<div>
				<cosmoz-button aria-controls="panel" aria-expanded="false">
					Show details
				</cosmoz-button>
			</div>
		`);
		const host = root.querySelector('cosmoz-button')!;
		const control = host.shadowRoot!.querySelector('button')!;
		expect(control.ariaControlsElements ?? []).to.have.length(0);
		const panel = document.createElement('section');
		panel.id = 'panel';
		root.append(panel);
		host.setAttribute('aria-expanded', 'true');
		await nextFrame();
		expect(control.ariaControlsElements).to.deep.equal([panel]);
		host.removeAttribute('aria-controls');
		await nextFrame();
		expect(control.ariaControlsElements ?? []).to.have.length(0);
	});
});
