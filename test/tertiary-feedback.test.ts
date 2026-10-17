import { expect, fixture, html } from '@open-wc/testing';
import { resetMouse, sendMouse } from '@web/test-runner-commands';
import '../src/index';

describe('flat toolbar button feedback', () => {
	let tokens: HTMLStyleElement;

	before(async () => {
		tokens = document.createElement('style');
		tokens.textContent = (
			await Promise.all(
				['primitives', 'semantic', 'spacing', 'typography'].map(
					async (name) => {
						const url = new URL(
							`../node_modules/@neovici/cosmoz-tokens/src/${name}.css`,
							import.meta.url,
						);
						return (await (await fetch(url)).text()).replaceAll(
							':root',
							'[data-button-test-tokens]',
						);
					},
				),
			)
		).join('\n');
		document.head.append(tokens);
	});

	after(() => tokens.remove());

	afterEach(() => resetMouse());

	for (const scheme of ['light', 'dark']) {
		for (const surface of ['primary', 'secondary']) {
			it(`shows hover and press on a ${scheme} ${surface} surface`, async () => {
				const host = await fixture<HTMLElement>(html`
					<div
						data-button-test-tokens
						style=${`color-scheme: ${scheme}; background: var(--cz-color-bg-${surface});`}
					>
						<cosmoz-button variant="tertiary" icon-only aria-label="Next item">
							<svg width="16" height="16" viewBox="0 0 6 10">
								<path stroke="currentColor" d="m1 9 4-4-4-4" />
							</svg>
						</cosmoz-button>
					</div>
				`);
				const control = host
					.querySelector('cosmoz-button')!
					.shadowRoot!.querySelector('button')!;
				control.style.transition = 'none';
				const bounds = control.getBoundingClientRect();
				const background = getComputedStyle(host).backgroundColor;
				expect(getComputedStyle(control).backgroundColor).to.equal(
					'rgba(0, 0, 0, 0)',
				);
				await sendMouse({
					type: 'move',
					position: [bounds.x + bounds.width / 2, bounds.y + bounds.height / 2],
				});
				const hover = getComputedStyle(control).backgroundColor;
				expect(hover).not.to.equal(background);
				expect(hover).not.to.equal('rgba(0, 0, 0, 0)');
				await sendMouse({ type: 'down' });
				expect(getComputedStyle(control).backgroundColor).not.to.equal(hover);
				expect(control.getBoundingClientRect().toJSON()).to.deep.equal(
					bounds.toJSON(),
				);
				await sendMouse({ type: 'up' });
				expect(getComputedStyle(control).backgroundColor).to.equal(hover);
			});
		}
	}
});
