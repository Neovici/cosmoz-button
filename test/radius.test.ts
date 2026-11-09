import { expect, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-button';

describe('button radius roles', () => {
	it('inherits the control role and retains the component override and circular actions', async () => {
		const scope = await fixture<HTMLElement>(html`
			<div style="--cz-radius-control: 18px; --cz-radius-full: 9999px">
				<cosmoz-button>Save</cosmoz-button>
				<cosmoz-button icon-only aria-label="Add">+</cosmoz-button>
			</div>
		`);
		const [button, icon] = scope.querySelectorAll('cosmoz-button');
		const radius = (el: Element) =>
			getComputedStyle(el.shadowRoot!.querySelector('.button')!).borderRadius;
		expect(radius(button)).to.equal('18px');
		scope.style.setProperty('--cz-radius-control', '14px');
		expect(radius(button)).to.equal('14px');
		(button as HTMLElement).style.setProperty(
			'--cosmoz-button-border-radius',
			'9px',
		);
		expect(radius(button)).to.equal('9px');
		expect(radius(icon)).to.equal('9999px');
	});
});
