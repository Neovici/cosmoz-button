const createSubmitter = (host: FormButton) => {
	// requestSubmit requires a native submitter for validation and name/value.
	const submitter = document.createElement('button');
	submitter.type = 'submit';
	submitter.hidden = true;
	if (host.name) submitter.name = host.name;
	if (host.value != null) submitter.value = host.value;
	for (const name of [
		'formaction',
		'formenctype',
		'formmethod',
		'formnovalidate',
		'formtarget',
	]) {
		if (host.hasAttribute(name)) {
			submitter.setAttribute(name, host.getAttribute(name)!);
		}
	}
	return submitter;
};

/** Native form ownership for a button whose control lives in shadow DOM. */
export class FormButton extends HTMLElement {
	static formAssociated = true;
	#internals = this.attachInternals();
	declare disabled?: boolean;
	declare formDisabled?: boolean;
	declare href?: string | null;
	declare type?: string;
	declare name?: string;
	declare value?: string | null;

	get form() {
		return this.#internals.form;
	}

	formDisabledCallback(disabled: boolean) {
		this.formDisabled = disabled;
	}

	connectedCallback() {
		this.addEventListener('click', this.#onClick);
	}

	disconnectedCallback() {
		this.removeEventListener('click', this.#onClick);
	}

	#onClick = (event: Event) => {
		// Wait for consuming click handlers to cancel the default action.
		queueMicrotask(() => {
			if (
				event.defaultPrevented ||
				this.disabled ||
				this.formDisabled ||
				this.href != null
			) {
				return;
			}
			const form = this.form;
			if (!form) return;
			if (this.type === 'reset') {
				form.reset();
			} else if (this.type === 'submit') {
				const submitter = createSubmitter(this);
				form.append(submitter);
				try {
					form.requestSubmit(submitter);
				} finally {
					submitter.remove();
				}
			}
		});
	};
}
