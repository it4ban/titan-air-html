export class Menu {
	#isOpened = false;

	constructor() {
		const media = window.matchMedia(`(max-width: 1344px)`);
		if (media.matches) {
			$('.mobile-menu__left-side').removeClass('mobile-menu__left-side--center');
		}

		media.addEventListener('change', () => {
			if (media.matches) {
				$('.home .mobile-menu__left-side').removeClass('mobile-menu__left-side--center');
			} else {
				$('.home .mobile-menu__left-side').addClass('mobile-menu__left-side--center');
			}
		});

		window.addEventListener('keydown', (e) => this.#handleKeyDown(e));
		document.addEventListener('click', (e) => this.#handleOutsideClick(e));
	}

	#handleKeyDown(e) {
		if (e.key === 'Escape' && this.#isOpened) {
			this.close();
		}
	}

	#handleOutsideClick(e) {
		const menu = document.querySelector('.mobile-menu');

		if (menu && !menu.contains(e.target)) {
			this.close();
		}
	}

	open(e) {
		e.stopPropagation();

		$('.mobile-menu').addClass('mobile-menu--open');
		this.#isOpened = true;
	}

	close(e) {
		e?.stopPropagation();

		$('.mobile-menu').removeClass('mobile-menu--open');
		this.#isOpened = false;
	}
}
