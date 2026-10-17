import { expect, fixture, html, nextFrame, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import type { CosmozButtonElement } from '../src/cosmoz-button';
import '../src/index';

const formFixture = async () => {
	const form = await fixture<HTMLFormElement>(html`
		<form>
			<input name="message" value="initial" required />
			<cosmoz-button type="submit" name="action" value="save"
				>Save</cosmoz-button
			>
			<cosmoz-button type="reset">Reset</cosmoz-button>
		</form>
	`);
	const submit = form.querySelector<CosmozButtonElement>('[type="submit"]')!;
	const reset = form.querySelector<CosmozButtonElement>('[type="reset"]')!;
	const input = form.querySelector('input')!;
	const submissions: FormData[] = [];
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		submissions.push(new FormData(form, event.submitter));
	});
	return { form, submit, reset, input, submissions };
};

describe('native button integration', () => {
	it('uses native form validation and submits its name and value once', async () => {
		const { form, input, submit, submissions } = await formFixture();
		expect(submit.form).to.equal(form);
		input.value = '';
		// A frame can arrive before deferred validation; wait before editing.
		const invalid = oneEvent(input, 'invalid');
		submit.click();
		await invalid;
		expect(submissions).to.have.length(0);
		input.value = 'valid';
		const submitted = oneEvent(form, 'submit');
		submit.click();
		await submitted;
		await nextFrame();
		expect(submissions).to.have.length(1);
		expect(submissions[0].get('message')).to.equal('valid');
		expect(submissions[0].getAll('action')).to.deep.equal(['save']);
	});

	it('respects a consuming click handler that cancels submission', async () => {
		const { submit, submissions } = await formFixture();
		submit.addEventListener('click', (event) => event.preventDefault());
		submit.click();
		await nextFrame();
		expect(submissions).to.have.length(0);
	});

	it('submits once when activated with the keyboard', async () => {
		const { submit, submissions } = await formFixture();
		submit.focus();
		await sendKeys({ press: 'Enter' });
		await nextFrame();
		expect(submissions).to.have.length(1);
	});

	it('resets native form values', async () => {
		const { input, reset } = await formFixture();
		input.value = 'changed';
		reset.click();
		await nextFrame();
		expect(input.value).to.equal('initial');
	});

	it('disables and re-enables with its fieldset without adding a disabled attribute', async () => {
		const fieldset = await fixture<HTMLFieldSetElement>(html`
			<fieldset disabled><cosmoz-button>Action</cosmoz-button></fieldset>
		`);
		const button =
			fieldset.querySelector<CosmozButtonElement>('cosmoz-button')!;
		let clicks = 0;
		button.addEventListener('click', () => clicks++);
		expect(button.shadowRoot!.querySelector('button')!.disabled).to.be.true;
		button.click();
		expect(clicks).to.equal(0);
		fieldset.disabled = false;
		await nextFrame();
		expect(button.hasAttribute('disabled')).to.be.false;
		expect(button.shadowRoot!.querySelector('button')!.disabled).to.be.false;
		button.click();
		expect(clicks).to.equal(1);
	});

	it('associates with an explicit form owner', async () => {
		const root = await fixture<HTMLElement>(html`
			<div>
				<form id="owner"></form>
				<cosmoz-button form="owner">Action</cosmoz-button>
			</div>
		`);
		expect(
			root.querySelector<CosmozButtonElement>('cosmoz-button')!.form,
		).to.equal(root.querySelector('form'));
	});

	it('keeps default action buttons from submitting their form', async () => {
		const { form, submissions } = await formFixture();
		const button = document.createElement('cosmoz-button');
		form.append(button);
		await nextFrame();
		button.click();
		await nextFrame();
		expect(submissions).to.have.length(0);
	});

	it('keeps an icon button named when its title changes', async () => {
		const button = await fixture<CosmozButtonElement>(
			html`<cosmoz-button icon-only title="Edit"></cosmoz-button>`,
		);
		const control = button.shadowRoot!.querySelector('button')!;
		expect(control.getAttribute('aria-label')).to.equal('Edit');
		button.title = 'Remove';
		await nextFrame();
		expect(control.getAttribute('aria-label')).to.equal('Remove');
	});

	it('passes menu roles, disclosure metadata and tab order to its native control', async () => {
		const button = await fixture<CosmozButtonElement>(html`
			<cosmoz-button
				control-role="menuitem"
				tabindex="-1"
				aria-label="Choose"
				aria-haspopup="menu"
				aria-expanded="false"
				aria-controls="choices"
				>Choose</cosmoz-button
			>
		`);
		const control = button.shadowRoot!.querySelector('button')!;
		expect(control.getAttribute('role')).to.equal('menuitem');
		expect(control.tabIndex).to.equal(-1);
		expect(control.getAttribute('aria-label')).to.equal('Choose');
		expect(control.getAttribute('aria-haspopup')).to.equal('menu');
		button.setAttribute('aria-expanded', 'true');
		await nextFrame();
		expect(control.getAttribute('aria-expanded')).to.equal('true');
	});
});
