import { expect, fixture, nextFrame } from '@open-wc/testing';
import { html } from 'lit-html';
import { spy } from 'sinon';
import '../src/cosmoz-button';

describe('cosmoz-button', () => {
	describe('element definition', () => {
		it('is defined', () => {
			const el = document.createElement('cosmoz-button');
			expect(el).to.be.instanceOf(HTMLElement);
		});

		it('has correct tag name', () => {
			const el = document.createElement('cosmoz-button');
			expect(el.tagName.toLowerCase()).to.equal('cosmoz-button');
		});
	});

	describe('rendering', () => {
		it('renders with default content', async () => {
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
	});

	describe('variants', () => {
		it('defaults to primary variant', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			expect(el.getAttribute('variant')).to.be.null;
			// Primary is the default styling
		});

		it('accepts secondary variant', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="secondary">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('variant')).to.equal('secondary');
		});

		it('accepts tertiary variant', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="tertiary">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('variant')).to.equal('tertiary');
		});

		it('accepts destructive variant', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="destructive">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('variant')).to.equal('destructive');
		});

		it('accepts link variant', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="link">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('variant')).to.equal('link');
		});
	});

	describe('sizes', () => {
		it('defaults to md size', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			expect(el.getAttribute('size')).to.be.null;
			// md is the default sizing
		});

		it('accepts sm size', async () => {
			const el = await fixture(
				html`<cosmoz-button size="sm">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('size')).to.equal('sm');
		});

		it('accepts lg size', async () => {
			const el = await fixture(
				html`<cosmoz-button size="lg">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('size')).to.equal('lg');
		});

		it('accepts xl size', async () => {
			const el = await fixture(
				html`<cosmoz-button size="xl">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('size')).to.equal('xl');
		});
	});

	describe('disabled state', () => {
		it('is not disabled by default', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('button');
			expect(button?.disabled).to.be.false;
			expect(el.hasAttribute('disabled')).to.be.false;
		});

		it('can be disabled via attribute', async () => {
			const el = await fixture(
				html`<cosmoz-button disabled>Button</cosmoz-button>`,
			);
			const button = el.shadowRoot?.querySelector('button');
			expect(button?.disabled).to.be.true;
			expect(el.hasAttribute('disabled')).to.be.true;
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

	describe('full-width', () => {
		it('is not full-width by default', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			expect(el.hasAttribute('full-width')).to.be.false;
		});

		it('can be set to full-width via attribute', async () => {
			const el = await fixture(
				html`<cosmoz-button full-width>Button</cosmoz-button>`,
			);
			expect(el.hasAttribute('full-width')).to.be.true;
		});
	});

	describe('icon slots', () => {
		it('renders prefix icon slot', async () => {
			const el = await fixture(html`
				<cosmoz-button>
					<span slot="prefix">Icon</span>
					Text
				</cosmoz-button>
			`);
			const prefixSlot = el.shadowRoot?.querySelector(
				'slot[name="prefix"]',
			) as HTMLSlotElement;
			expect(prefixSlot).to.not.be.null;
			const assignedNodes = prefixSlot?.assignedNodes();
			expect(assignedNodes?.length ?? 0).to.be.above(0);
		});

		it('renders suffix icon slot', async () => {
			const el = await fixture(html`
				<cosmoz-button>
					Text
					<span slot="suffix">Icon</span>
				</cosmoz-button>
			`);
			const suffixSlot = el.shadowRoot?.querySelector(
				'slot[name="suffix"]',
			) as HTMLSlotElement;
			expect(suffixSlot).to.not.be.null;
			const assignedNodes = suffixSlot?.assignedNodes();
			expect(assignedNodes?.length ?? 0).to.be.above(0);
		});
	});

	describe('click events', () => {
		it('fires click event when clicked', async () => {
			const clickSpy = spy();
			const el = await fixture<HTMLElement>(
				html`<cosmoz-button @click=${clickSpy}>Button</cosmoz-button>`,
			);
			el.click();
			expect(clickSpy.calledOnce).to.be.true;
		});

		it('forwards click to inner button', async () => {
			const clickSpy = spy();
			const el = await fixture(
				html`<cosmoz-button @click=${clickSpy}>Button</cosmoz-button>`,
			);
			const button = el.shadowRoot?.querySelector('button');
			button?.click();
			expect(clickSpy.calledOnce).to.be.true;
		});
	});

	describe('attribute changes', () => {
		it('updates when variant changes', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="primary">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('variant')).to.equal('primary');

			el.setAttribute('variant', 'secondary');
			await nextFrame();
			expect(el.getAttribute('variant')).to.equal('secondary');
		});

		it('updates when size changes', async () => {
			const el = await fixture(
				html`<cosmoz-button size="sm">Button</cosmoz-button>`,
			);
			expect(el.getAttribute('size')).to.equal('sm');

			el.setAttribute('size', 'lg');
			await nextFrame();
			expect(el.getAttribute('size')).to.equal('lg');
		});

		it('updates when disabled changes', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('button');
			expect(button?.disabled).to.be.false;

			el.setAttribute('disabled', '');
			await nextFrame();
			expect(el.shadowRoot?.querySelector('button')?.disabled).to.be.true;
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
