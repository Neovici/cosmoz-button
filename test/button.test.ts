import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit-html';
import { spy } from 'sinon';
import '../src/cosmoz-button';

describe('cosmoz-button', () => {
	describe('rendering', () => {
		it('renders a button in shadow DOM', async () => {
			const el = await fixture(html`<cosmoz-button>Click me</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('button');
			expect(button).to.not.be.null;
		});

		it('renders slotted content', async () => {
			const el = await fixture(html`<cosmoz-button>Test Label</cosmoz-button>`);
			expect(el.textContent ?? '').to.include('Test Label');
		});

		it('exposes button part for external styling', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('[part="button"]');
			expect(button).to.not.be.null;
		});

		it('renders prefix and suffix slots', async () => {
			const el = await fixture(html`
				<cosmoz-button>
					<span slot="prefix">Pre</span>
					Text
					<span slot="suffix">Suf</span>
				</cosmoz-button>
			`);
			const prefixSlot = el.shadowRoot?.querySelector(
				'slot[name="prefix"]',
			) as HTMLSlotElement;
			const suffixSlot = el.shadowRoot?.querySelector(
				'slot[name="suffix"]',
			) as HTMLSlotElement;
			expect(prefixSlot?.assignedNodes().length).to.be.above(0);
			expect(suffixSlot?.assignedNodes().length).to.be.above(0);
		});
	});

	describe('disabled state', () => {
		it('forwards disabled to inner button', async () => {
			const el = await fixture(
				html`<cosmoz-button disabled>Button</cosmoz-button>`,
			);
			const button = el.shadowRoot?.querySelector('button');
			expect(button?.disabled).to.be.true;
		});

		it('prevents click when disabled', async () => {
			const clickSpy = spy();
			const el = await fixture(
				html`<cosmoz-button disabled @click=${clickSpy}>Button</cosmoz-button>`,
			);
			const button = el.shadowRoot?.querySelector('button');
			button?.click();
			expect(clickSpy.called).to.be.false;
		});
	});

	describe('accessibility', () => {
		it('has type="button" by default', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('button');
			expect(button?.getAttribute('type')).to.equal('button');
		});

		it('delegates focus to inner button', async () => {
			const el = await fixture<HTMLElement>(
				html`<cosmoz-button>Button</cosmoz-button>`,
			);
			el.focus();
			const button = el.shadowRoot?.querySelector('button');
			expect(el.shadowRoot?.activeElement).to.equal(button);
		});
	});
});
