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
			(el as HTMLElement).click();
			expect(clickSpy.called).to.be.false;
		});
	});

	describe('value attribute', () => {
		it('reflects value attribute to property', async () => {
			const el = await fixture(
				html`<cosmoz-button value="cancel">Button</cosmoz-button>`,
			);
			expect((el as any).value).to.equal('cancel');
		});

		it('updates value property when attribute changes', async () => {
			const el = await fixture<HTMLElement>(
				html`<cosmoz-button value="cancel">Button</cosmoz-button>`,
			);
			el.setAttribute('value', 'confirm');
			expect((el as any).value).to.equal('confirm');
		});

		it('sets value to null when attribute is removed', async () => {
			const el = await fixture<HTMLElement>(
				html`<cosmoz-button value="cancel">Button</cosmoz-button>`,
			);
			el.removeAttribute('value');
			expect((el as any).value).to.be.null;
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

	describe('anchor link mode', () => {
		it('renders an anchor when href is present', async () => {
			const el = await fixture(
				html`<cosmoz-button href="/home">Home</cosmoz-button>`,
			);
			const anchor = el.shadowRoot?.querySelector('a');
			const button = el.shadowRoot?.querySelector('button');
			expect(anchor).to.not.be.null;
			expect(button).to.be.null;
			expect(anchor?.getAttribute('href')).to.equal('/home');
		});

		it('renders a button when href is absent', async () => {
			const el = await fixture(html`<cosmoz-button>Click me</cosmoz-button>`);
			const anchor = el.shadowRoot?.querySelector('a');
			const button = el.shadowRoot?.querySelector('button');
			expect(anchor).to.be.null;
			expect(button).to.not.be.null;
		});

		it('passes target, rel, and download to anchor', async () => {
			const el = await fixture(
				html`<cosmoz-button
					href="/doc.pdf"
					target="_blank"
					rel="noopener"
					download="report.pdf"
					>Download</cosmoz-button
				>`,
			);
			const anchor = el.shadowRoot?.querySelector('a');
			expect(anchor?.getAttribute('target')).to.equal('_blank');
			expect(anchor?.getAttribute('rel')).to.equal('noopener');
			expect(anchor?.getAttribute('download')).to.equal('report.pdf');
		});

		it('does not render target/rel/download on button', async () => {
			const el = await fixture(html`<cosmoz-button>Click me</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('button');
			expect(button?.hasAttribute('target')).to.be.false;
			expect(button?.hasAttribute('rel')).to.be.false;
			expect(button?.hasAttribute('download')).to.be.false;
		});

		it('applies button class to anchor element', async () => {
			const el = await fixture(
				html`<cosmoz-button href="/home" variant="primary"
					>Home</cosmoz-button
				>`,
			);
			const anchor = el.shadowRoot?.querySelector('a');
			expect(anchor?.classList.contains('button')).to.be.true;
		});

		it('exposes anchor part for external styling', async () => {
			const el = await fixture(
				html`<cosmoz-button href="/home">Home</cosmoz-button>`,
			);
			const anchor = el.shadowRoot?.querySelector('[part="button"]');
			expect(anchor).to.not.be.null;
			expect(anchor?.tagName.toLowerCase()).to.equal('a');
		});

		it('applies aria-disabled when href and disabled are both set', async () => {
			const el = await fixture(
				html`<cosmoz-button href="/home" disabled>Home</cosmoz-button>`,
			);
			const anchor = el.shadowRoot?.querySelector('a');
			expect(anchor?.getAttribute('aria-disabled')).to.equal('true');
		});

		it('prevents click on disabled anchor', async () => {
			const clickSpy = spy();
			const el = await fixture(
				html`<cosmoz-button href="/home" disabled @click=${clickSpy}
					>Home</cosmoz-button
				>`,
			);
			(el as HTMLElement).click();
			expect(clickSpy.called).to.be.false;
		});

		it('renders slots inside anchor', async () => {
			const el = await fixture(html`
				<cosmoz-button href="/home">
					<span slot="prefix">Pre</span>
					Home
					<span slot="suffix">Suf</span>
				</cosmoz-button>
			`);
			const anchor = el.shadowRoot?.querySelector('a');
			const prefixSlot = anchor?.querySelector(
				'slot[name="prefix"]',
			) as HTMLSlotElement;
			const suffixSlot = anchor?.querySelector(
				'slot[name="suffix"]',
			) as HTMLSlotElement;
			expect(prefixSlot?.assignedNodes().length).to.be.above(0);
			expect(suffixSlot?.assignedNodes().length).to.be.above(0);
		});
	});
});
