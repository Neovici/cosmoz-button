import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import { resetMouse, sendKeys, sendMouse } from '@web/test-runner-commands';
import type { CosmozButtonElement } from '../src/cosmoz-button';
import '../src/index';

describe('native form interactions', () => {
	afterEach(() => resetMouse());

	for (const type of ['submit', 'reset']) {
		for (const input of ['pointer', 'keyboard']) {
			it(`allows consumers to cancel a real ${input} ${type}`, async () => {
				const form = await fixture<HTMLFormElement>(html`
					<form>
						<input name="message" value="valid" />
						<cosmoz-button type=${type}>Action</cosmoz-button>
					</form>
				`);
				const events: string[] = [];
				form.addEventListener(type, (event) => {
					event.preventDefault();
					events.push(type);
				});
				const host = form.querySelector<CosmozButtonElement>('cosmoz-button')!;
				host.addEventListener('click', (event) => {
					events.push('cancel');
					event.preventDefault();
				});
				if (input === 'pointer') {
					const bounds = host.getBoundingClientRect();
					await sendMouse({
						type: 'click',
						position: [
							Math.round(bounds.x + bounds.width / 2),
							Math.round(bounds.y + bounds.height / 2),
						],
					});
				} else {
					host.focus();
					await sendKeys({ press: 'Enter' });
				}
				await nextFrame();
				expect(events).to.deep.equal(['cancel']);
			});
		}
	}

	for (const inputCount of [1, 2]) {
		it(`submits once on Enter with ${inputCount} text inputs`, async () => {
			const form = await fixture<HTMLFormElement>(html`
				<form>
					<input name="first" value="valid" />
					${inputCount === 2 ? html`<input name="second" />` : ''}
					<cosmoz-button type="submit" name="action" value="save"
						>Save</cosmoz-button
					>
				</form>
			`);
			const submissions: FormData[] = [];
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				submissions.push(new FormData(form, event.submitter));
			});
			form.querySelector('input')!.focus();
			await sendKeys({ press: 'Enter' });
			await nextFrame();
			expect(submissions).to.have.length(1);
			expect(submissions[0].get('action')).to.equal('save');
		});
	}

	it('keeps a disabled default submitter from falling through to the next button', async () => {
		const form = await fixture<HTMLFormElement>(html`
			<form>
				<input />
				<cosmoz-button type="submit" disabled>First</cosmoz-button>
				<button type="submit">Second</button>
			</form>
		`);
		let submissions = 0;
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			submissions++;
		});
		form.querySelector('input')!.focus();
		await sendKeys({ press: 'Enter' });
		await nextFrame();
		expect(submissions).to.equal(0);
	});

	for (const first of ['native', 'custom']) {
		it(`keeps the ${first} submitter first in mixed form document order`, async () => {
			const native = html`<button type="submit" name="action" value="native">
				Native
			</button>`;
			const custom = html`<cosmoz-button
				type="submit"
				name="action"
				value="custom"
				>Custom</cosmoz-button
			>`;
			const form = await fixture<HTMLFormElement>(html`
				<form>
					<input /><input />${first === 'native' ? native : custom}${first === 'native' ? custom : native}
				</form>
			`);
			const submissions: FormData[] = [];
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				submissions.push(new FormData(form, event.submitter));
			});
			form.querySelector('input')!.focus();
			await sendKeys({ press: 'Enter' });
			await nextFrame();
			expect(submissions).to.have.length(1);
			expect(submissions[0].get('action')).to.equal(first);
		});
	}
});
