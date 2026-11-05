import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import '../src/index';

describe('aria-keyshortcuts', () => {
	for (const href of [undefined, '#']) {
		it(`is forwarded to the ${href ? 'link' : 'button'}`, async () => {
			const host = await fixture<HTMLElement>(
				html`<cosmoz-button aria-keyshortcuts="Meta+K" .href=${href}
					>Search</cosmoz-button
				>`,
			);
			const control = host.shadowRoot!.querySelector('.button')!;
			expect(control.getAttribute('aria-keyshortcuts')).to.equal('Meta+K');

			host.removeAttribute('aria-keyshortcuts');
			await nextFrame();
			expect(control.hasAttribute('aria-keyshortcuts')).to.be.false;
		});
	}
});
