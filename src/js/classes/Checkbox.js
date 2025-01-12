export class CheckBox {
	#checkBoxes = [
		".check-item[data-type='groundCheckboxes']",
		".check-item[data-type='serviceType']",
		".check-item[data-type='airServices']",
	];

	init() {
		this.#checkBoxes.forEach((checkbox) => {
			$(checkbox).each((_, item) => {
				$(item).on('click', () => {
					this.#checked(item);
				});
			});
		});
	}

	#resetCheckboxes(type) {
		const checkboxes = $(`.check-item[data-type='${type}']`);

		checkboxes.each((_, item) => {
			$(item).find('.check-item__icon').removeClass('check-item__icon--checked');
			$(item).find('.check-item__input').prop('checked', false);
		});
	}

	#checked(checkbox) {
		const currentInput = $(checkbox).children('.check-item__input');
		const currentCheckbox = $(checkbox).children('.check-item__checkbox').children('.check-item__icon');

		this.#resetCheckboxes($(checkbox).data('type'));

		currentCheckbox.toggleClass('check-item__icon--checked');
		if (currentCheckbox.hasClass('check-item__icon--checked')) {
			currentInput.prop('checked', true);
		} else {
			currentInput.prop('checked', false);
		}
	}
}
