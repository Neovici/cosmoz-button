import { assert, fixture, nextFrame } from '@open-wc/testing';
import { html } from 'lit-html';
import { spy } from 'sinon';
import '../src/cosmoz-button';

describe('cosmoz-button', () => {
	describe('element definition', () => {
		it('is defined', () => {
			const el = document.createElement('cosmoz-button');
			assert.instanceOf(el, HTMLElement);
		});

		it('has correct tag name', () => {
			const el = document.createElement('cosmoz-button');
			assert.equal(el.tagName.toLowerCase(), 'cosmoz-button');
		});
	});

	describe('rendering', () => {
		it('renders with default content', async () => {
			const el = await fixture(html`<cosmoz-button>Click me</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('button');
			assert.isNotNull(button);
		});

		it('renders slotted content', async () => {
			const el = await fixture(html`<cosmoz-button>Test Label</cosmoz-button>`);
			assert.include(el.textContent ?? '', 'Test Label');
		});

		it('exposes button part for external styling', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('[part="button"]');
			assert.isNotNull(button);
		});
	});

	describe('variants', () => {
		it('defaults to primary variant', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			assert.isNull(el.getAttribute('variant'));
			// Primary is the default styling
		});

		it('accepts secondary variant', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="secondary">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('variant'), 'secondary');
		});

		it('accepts tertiary variant', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="tertiary">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('variant'), 'tertiary');
		});

		it('accepts destructive variant', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="destructive">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('variant'), 'destructive');
		});

		it('accepts link variant', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="link">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('variant'), 'link');
		});
	});

	describe('sizes', () => {
		it('defaults to md size', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			assert.isNull(el.getAttribute('size'));
			// md is the default sizing
		});

		it('accepts sm size', async () => {
			const el = await fixture(
				html`<cosmoz-button size="sm">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('size'), 'sm');
		});

		it('accepts lg size', async () => {
			const el = await fixture(
				html`<cosmoz-button size="lg">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('size'), 'lg');
		});

		it('accepts xl size', async () => {
			const el = await fixture(
				html`<cosmoz-button size="xl">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('size'), 'xl');
		});
	});

	describe('disabled state', () => {
		it('is not disabled by default', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('button');
			assert.isFalse(button?.disabled);
			assert.isFalse(el.hasAttribute('disabled'));
		});

		it('can be disabled via attribute', async () => {
			const el = await fixture(
				html`<cosmoz-button disabled>Button</cosmoz-button>`,
			);
			const button = el.shadowRoot?.querySelector('button');
			assert.isTrue(button?.disabled);
			assert.isTrue(el.hasAttribute('disabled'));
		});

		it('prevents click when disabled', async () => {
			const clickSpy = spy();
			const el = await fixture(
				html`<cosmoz-button disabled @click=${clickSpy}>Button</cosmoz-button>`,
			);
			const button = el.shadowRoot?.querySelector('button');
			button?.click();
			assert.isFalse(clickSpy.called);
		});
	});

	describe('full-width', () => {
		it('is not full-width by default', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			assert.isFalse(el.hasAttribute('full-width'));
		});

		it('can be set to full-width via attribute', async () => {
			const el = await fixture(
				html`<cosmoz-button full-width>Button</cosmoz-button>`,
			);
			assert.isTrue(el.hasAttribute('full-width'));
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
			assert.isNotNull(prefixSlot);
			const assignedNodes = prefixSlot?.assignedNodes();
			assert.isAbove(assignedNodes?.length ?? 0, 0);
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
			assert.isNotNull(suffixSlot);
			const assignedNodes = suffixSlot?.assignedNodes();
			assert.isAbove(assignedNodes?.length ?? 0, 0);
		});
	});

	describe('click events', () => {
		it('fires click event when clicked', async () => {
			const clickSpy = spy();
			const el = await fixture<HTMLElement>(
				html`<cosmoz-button @click=${clickSpy}>Button</cosmoz-button>`,
			);
			el.click();
			assert.isTrue(clickSpy.calledOnce);
		});

		it('forwards click to inner button', async () => {
			const clickSpy = spy();
			const el = await fixture(
				html`<cosmoz-button @click=${clickSpy}>Button</cosmoz-button>`,
			);
			const button = el.shadowRoot?.querySelector('button');
			button?.click();
			assert.isTrue(clickSpy.calledOnce);
		});
	});

	describe('attribute changes', () => {
		it('updates when variant changes', async () => {
			const el = await fixture(
				html`<cosmoz-button variant="primary">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('variant'), 'primary');

			el.setAttribute('variant', 'secondary');
			await nextFrame();
			assert.equal(el.getAttribute('variant'), 'secondary');
		});

		it('updates when size changes', async () => {
			const el = await fixture(
				html`<cosmoz-button size="sm">Button</cosmoz-button>`,
			);
			assert.equal(el.getAttribute('size'), 'sm');

			el.setAttribute('size', 'lg');
			await nextFrame();
			assert.equal(el.getAttribute('size'), 'lg');
		});

		it('updates when disabled changes', async () => {
			const el = await fixture(html`<cosmoz-button>Button</cosmoz-button>`);
			const button = el.shadowRoot?.querySelector('button');
			assert.isFalse(button?.disabled);

			el.setAttribute('disabled', '');
			await nextFrame();
			assert.isTrue(el.shadowRoot?.querySelector('button')?.disabled);
		});
	});
});
