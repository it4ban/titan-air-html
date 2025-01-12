export class ContactsBar {
	init() {
		$('.contacts-switcher').on('click', () => this.#show());
		$('.contacts-mobile__close').on('click', () => this.#close());
	}

	#show() {
		$('.contacts-mobile').addClass('contacts-mobile--open');
	}

	#close() {
		$('.contacts-mobile').removeClass('contacts-mobile--open');
	}
}
