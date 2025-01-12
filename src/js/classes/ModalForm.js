export class ModalForm {
	#backdrop = $('.dialog-backdrop');
	#modal = $('.dialog-modal');
	#buttons = ['#groundModal', '#airModal'];

	constructor() {
		$(document).on('keydown', (e) => this.#keyDown(e));
		this.#backdrop.on('click', () => this.#close());
		$('.dialog-close').on('click', () => this.#close());
	}

	init() {
		$(this.#buttons).each((_, elem) => {
			$(elem).on('click', () => this.#show(elem));
		});
	}

	#keyDown(e) {
		if (e.key === 'Escape') {
			this.#close();
		}
	}

	#show(formElement) {
		const formName = formElement.slice(1);

		const targetForm = $(`.dialog-modal[data-modal="${formName}"]`);
		if (targetForm.length) {
			targetForm.get(0).scrollIntoView({ behavior: 'smooth' });
			targetForm.addClass('dialog-modal--open');
			this.#backdrop.addClass('dialog-backdrop--active');
		}
	}

	#close() {
		this.#modal.removeClass('dialog-modal--open');
		this.#backdrop.removeClass('dialog-backdrop--active');
	}
}
