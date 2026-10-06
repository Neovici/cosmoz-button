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

		it('reflects attribute changes to the disabled property', async () => {
			const el: any = await fixture(
				html`<cosmoz-button>Button</cosmoz-button>`,
			);
			expect(el.disabled).to.equal(undefined);
			el.setAttribute('disabled', '');
			expect(el.disabled).to.equal(true);
			el.removeAttribute('disabled');
			expect(el.disabled).to.equal(null);
		});

		it('supports property-based consumption', async () => {
			const clickSpy = spy();
			const el: any = await fixture(
				html`<cosmoz-button @click=${clickSpy}>Button</cosmoz-button>`,
			);
			el.disabled = true;
			await new Promise((r) => setTimeout(r, 50));
			expect(el.shadowRoot?.querySelector('button')?.disabled).to.be.true;
			(el as HTMLElement).click();
			expect(clickSpy.called).to.be.false;

			el.tooltip = 'Set via property';
			await new Promise((r) => setTimeout(r, 50));
			expect(
				el.shadowRoot?.querySelector('cosmoz-tooltip')?.getAttribute('heading'),
			).to.equal('Set via property');
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

	describe('icon-only', () => {
		it('renders a square compact button', async () => {
			const el = await fixture(
				html`<cosmoz-button icon-only variant="tertiary">X</cosmoz-button>`,
			);
			const button = el.shadowRoot?.querySelector('button');
			expect(button).to.not.be.null;
		});

		it('keeps the button clickable through the tooltip wrapper', async () => {
			const clickSpy = spy();
			const el = await fixture(
				html`<cosmoz-button
					icon-only
					variant="tertiary"
					tooltip="Close"
					@click=${clickSpy}
					>X</cosmoz-button
				>`,
			);
			(el as HTMLElement).click();
			expect(clickSpy.called).to.be.true;
		});

		it('prevents click when disabled and tooltip is set', async () => {
			const clickSpy = spy();
			const el = await fixture(
				html`<cosmoz-button
					icon-only
					tooltip="Close"
					disabled
					@click=${clickSpy}
					>X</cosmoz-button
				>`,
			);
			(el as HTMLElement).click();
			expect(clickSpy.called).to.be.false;
		});

		it('reflects aria-pressed for toggle styling', async () => {
			const el = await fixture(
				html`<cosmoz-button icon-only aria-pressed="true">X</cosmoz-button>`,
			);
			expect(el.getAttribute('aria-pressed')).to.equal('true');
		});

		it('always renders the tooltip wrapper', async () => {
			const withTooltip = await fixture(
				html`<cosmoz-button tooltip="Close">X</cosmoz-button>`,
			);
			const withoutTooltip = await fixture(
				html`<cosmoz-button>X</cosmoz-button>`,
			);
			expect(withTooltip.shadowRoot?.querySelector('cosmoz-tooltip')).to.not.be
				.null;
			expect(withoutTooltip.shadowRoot?.querySelector('cosmoz-tooltip')).to.not
				.be.null;
		});

		it('passes tooltip heading and placement to the wrapper', async () => {
			const el = await fixture(
				html`<cosmoz-button tooltip="Close panel" tooltip-placement="left"
					>X</cosmoz-button
				>`,
			);
			const tooltip = el.shadowRoot?.querySelector('cosmoz-tooltip');
			expect(tooltip?.getAttribute('heading')).to.equal('Close panel');
			expect(tooltip?.getAttribute('placement')).to.equal('left');
		});
	});

	describe('aria state forwarding', () => {
		const getButton = (el: Element) =>
			el.shadowRoot?.querySelector('button') as HTMLButtonElement;

		it('forwards aria-expanded to the native button on initial render', async () => {
			const el = await fixture(
				html`<cosmoz-button aria-expanded="false">Menu</cosmoz-button>`,
			);
			expect(getButton(el).getAttribute('aria-expanded')).to.equal('false');
		});

		it('forwards aria-expanded changes while rendering', async () => {
			const el = await fixture(
				html`<cosmoz-button aria-expanded="false">Menu</cosmoz-button>`,
			);
			el.setAttribute('aria-expanded', 'true');
			await new Promise((r) => setTimeout(r, 50));
			expect(getButton(el).getAttribute('aria-expanded')).to.equal('true');
			// "" is coerced to "true" by pion's property path (deferred, next
			// major: pionjs/pion#196 documents it); only removal is asserted
			el.removeAttribute('aria-expanded');
			await new Promise((r) => setTimeout(r, 50));
			expect(getButton(el).hasAttribute('aria-expanded')).to.be.false;
		});

		it('forwards aria-label to the native button across changes', async () => {
			const el = await fixture(
				html`<cosmoz-button icon-only aria-label="Close panel"
					><svg viewBox="0 0 10 10"></svg
				></cosmoz-button>`,
			);
			expect(getButton(el).getAttribute('aria-label')).to.equal('Close panel');
			el.setAttribute('aria-label', 'Dismiss');
			await new Promise((r) => setTimeout(r, 50));
			expect(getButton(el).getAttribute('aria-label')).to.equal('Dismiss');
			el.removeAttribute('aria-label');
			await new Promise((r) => setTimeout(r, 50));
			expect(getButton(el).hasAttribute('aria-label')).to.be.false;
		});

		it('names the icon-only button from aria-label alone', async () => {
			// icon-only renders no text; the slotted svg is a graphic
			const el = await fixture(
				html`<cosmoz-button icon-only aria-label="Invoice image"
					><svg viewBox="0 0 10 10"></svg
				></cosmoz-button>`,
			);
			expect(getButton(el).getAttribute('aria-label')).to.equal(
				'Invoice image',
			);
		});

		it('forwards aria-label to the native anchor', async () => {
			const el = await fixture(
				html`<cosmoz-button href="/home" aria-label="External link"
					>↗</cosmoz-button
				>`,
			);
			const anchor = el.shadowRoot?.querySelector('a') as HTMLAnchorElement;
			expect(anchor.getAttribute('aria-label')).to.equal('External link');
		});

		it('forwards aria-pressed to the native button', async () => {
			const el = await fixture(
				html`<cosmoz-button icon-only aria-label="Select" aria-pressed="false"
					>X</cosmoz-button
				>`,
			);
			expect(getButton(el).getAttribute('aria-pressed')).to.equal('false');
			el.setAttribute('aria-pressed', 'true');
			await new Promise((r) => setTimeout(r, 50));
			expect(getButton(el).getAttribute('aria-pressed')).to.equal('true');
			el.removeAttribute('aria-pressed');
			await new Promise((r) => setTimeout(r, 50));
			expect(getButton(el).hasAttribute('aria-pressed')).to.be.false;
		});

		it('forwards aria-expanded to the native anchor', async () => {
			const el = await fixture(
				html`<cosmoz-button href="/home" aria-expanded="false"
					>Home</cosmoz-button
				>`,
			);
			const anchor = el.shadowRoot?.querySelector('a') as HTMLAnchorElement;
			expect(anchor.getAttribute('aria-expanded')).to.equal('false');
			el.setAttribute('aria-expanded', 'true');
			await new Promise((r) => setTimeout(r, 50));
			expect(anchor.getAttribute('aria-expanded')).to.equal('true');
		});

		// "" is coerced to "true" from pion on every attribute->render path
		// (initial render and changes alike), deferred to pion next major;
		// documented in pionjs/pion#196
	});
});
