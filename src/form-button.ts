const syncSubmitter = (submitter: HTMLButtonElement, host: FormButton) => {
	submitter.type = 'submit';
	submitter.hidden = true;
	submitter.disabled = Boolean(host.disabled || host.formDisabled);
	submitter.name = host.name ?? '';
	submitter.value = host.value ?? '';
	for (const name of [
		'form',
		'formaction',
		'formenctype',
		'formmethod',
		'formnovalidate',
		'formtarget',
	]) {
		if (host.hasAttribute(name))
			{submitter.setAttribute(name, host.getAttribute(name)!);}
		else submitter.removeAttribute(name);
	}
};
/** Native form ownership for a button whose control lives in shadow DOM. */
export class FormButton extends HTMLElement {
	static formAssociated = true;
	#internals = this.attachInternals();
	#submitter?: HTMLButtonElement;
	declare disabled?: boolean;
	declare formDisabled?: boolean;
	declare href?: string | null;
	declare type?: string;
	declare name?: string;
	declare value?: string | null;
	get form() {
		return this.#internals.form;
	}
	syncFormButton() {
		if (!this.isConnected || this.type !== 'submit' || this.href != null) {
			this.#submitter?.remove();
			this.#submitter = undefined;
			return;
		}
		if (!this.#submitter) {
			this.#submitter = document.createElement('button');
			syncSubmitter(this.#submitter, this);
			// Keep native implicit submission and default-submitter order.
			this.append(this.#submitter);
		} else syncSubmitter(this.#submitter, this);
	}
	formAssociatedCallback() {
		this.syncFormButton();
	}
	formDisabledCallback(disabled: boolean) {
		this.formDisabled = disabled;
		this.syncFormButton();
	}
	connectedCallback() {
		this.addEventListener('click', this.#onClick);
		this.syncFormButton();
	}
	disconnectedCallback() {
		this.removeEventListener('click', this.#onClick);
		this.#submitter?.remove();
		this.#submitter = undefined;
	}
	#onClick = (event: Event) => {
		if (this.#submitter && event.composedPath().includes(this.#submitter))
			{return;}
		// A task runs after all listeners in a trusted click dispatch have finished.
		setTimeout(() => {
			if (
				event.defaultPrevented ||
				!this.isConnected ||
				this.disabled ||
				this.formDisabled ||
				this.href != null
			)
				{return;}
			const form = this.form;
			if (!form) return;
			if (this.type === 'reset') form.reset();
			else if (this.type === 'submit') {
				this.syncFormButton();
				if (this.#submitter) form.requestSubmit(this.#submitter);
			}
		}, 0);
	};
}
