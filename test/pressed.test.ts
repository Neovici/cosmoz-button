import { expect, fixture, html } from '@open-wc/testing';
import { resetMouse, sendMouse } from '@web/test-runner-commands';
import '../src/index';

describe('pressed button feedback', () => {
	afterEach(() => resetMouse());

	for (const variant of ['primary', 'secondary', 'destructive', 'tertiary']) {
		it(`keeps ${variant} press feedback distinct from hover`, async () => {
			const host = await fixture<HTMLElement>(html`
				<cosmoz-button variant=${variant}>Action</cosmoz-button>
			`);
			const control = host.shadowRoot!.querySelector('button')!;
			// Remove timing so this checks the cascade at the held state.
			control.style.transition = 'none';
			host.style.cssText = `
				--cz-color-bg-glass-action-hover: rgb(220, 220, 220);
				--cz-color-bg-glass-hover: rgb(220, 220, 220);
				--cz-color-bg-glass-destructive-hover: rgb(220, 220, 220);
				--cz-color-bg-tertiary: rgb(220, 220, 220);
				--cz-color-bg-glass-action-pressed: rgb(180, 180, 180);
				--cz-color-bg-glass-pressed: rgb(180, 180, 180);
				--cz-color-bg-glass-destructive-pressed: rgb(180, 180, 180);
				--cz-color-bg-quaternary: rgb(180, 180, 180);
				--cz-shadow-glass-pressed: inset 0 1px 2px black;
			`;
			const bounds = control.getBoundingClientRect();
			await sendMouse({
				type: 'move',
				position: [
					Math.round(bounds.x + bounds.width / 2),
					Math.round(bounds.y + bounds.height / 2),
				],
			});
			expect(getComputedStyle(control).backgroundColor).to.equal(
				'rgb(220, 220, 220)',
			);
			await sendMouse({ type: 'down' });
			expect(control.matches(':active')).to.be.true;
			const pressed = getComputedStyle(control);
			expect(pressed.transform).to.equal('none');
			expect(control.getBoundingClientRect().toJSON()).to.deep.equal(
				bounds.toJSON(),
			);
			expect(pressed.backgroundColor).to.equal('rgb(180, 180, 180)');
			expect(pressed.backgroundImage).to.equal('none');
			if (variant === 'tertiary') {
				expect(pressed.boxShadow).to.equal('none');
			} else {
				expect(pressed.boxShadow).to.contain('inset');
			}
			await sendMouse({ type: 'up' });
			expect(control.matches(':active')).to.be.false;
			expect(getComputedStyle(control).backgroundColor).to.equal(
				'rgb(220, 220, 220)',
			);
		});
	}
});
