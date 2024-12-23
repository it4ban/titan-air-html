import $ from 'jquery';

export class Menu {
	private isOpened: boolean = false;

	constructor() {
		window.addEventListener('keydown', (e) => this.handleKeyDown(e));
		document.addEventListener('click', (e) => this.handleOutsideClick(e));
	}

	private handleKeyDown(e: KeyboardEvent) {
		console.log(this.isOpened);
		if (e.key === 'Escape' && this.isOpened) {
			this.close();
		}
	}

	private handleOutsideClick(e: MouseEvent) {
		const menu = document.querySelector('.mobile-menu');

		if (menu && !menu.contains(e.target as Node)) {
			this.close();
		}
	}

	public open(e?: JQuery.ClickEvent) {
		e?.stopPropagation();

		$('.mobile-menu').addClass('mobile-menu--open');
		this.isOpened = true;
	}

	public close(e?: JQuery.ClickEvent) {
		e?.stopPropagation();

		$('.mobile-menu').removeClass('mobile-menu--open');
		this.isOpened = false;
	}
}
