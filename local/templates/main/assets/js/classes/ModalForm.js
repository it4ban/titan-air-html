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
			const addFileButton = $(targetForm).find('.add-file .btn');
			addFileButton.on('click', (e) => this.#addFile(e, targetForm));

			targetForm.get(0).scrollIntoView({ behavior: 'smooth' });

			targetForm.addClass('dialog-modal--open');
			this.#backdrop.addClass('dialog-backdrop--active');
		}
	}

	#addFile(e, currentForm) {
		e.preventDefault();

		const fileInput = $(currentForm).find('.add-file__input');
		const fileName = $(currentForm).find('.file-name');

		fileInput.trigger('click');

		fileInput.on('change', (e) => {
			const fileInput = e.target;

			const file = fileInput.files ? fileInput.files[0] : null;
			if (file) {
				fileName.text(file.name);
			}
		});
	}

	#close() {
		this.#modal.removeClass('dialog-modal--open');
		this.#backdrop.removeClass('dialog-backdrop--active');
	}
}
