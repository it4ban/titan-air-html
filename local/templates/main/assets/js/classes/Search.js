export class Search {
	media = null;
	#searchIcons = ['.footer .search-form__icon', '.header .search-form__icon', '.header-home .search-form__icon'];

	constructor(mediaValue) {
		this.media = window.matchMedia(`(max-width: ${mediaValue}px)`);
		this.media.addEventListener('change', () => this.#change());

		$(document).on('keydown', (e) => this.#onKeyDown(e));
	}

	#change() {
		if (this.media.matches) {
			$('.search-form__icon').removeClass('search-form__icon--active');
			$('.search-form__input').removeClass('search-form__input--active');
		}
	}

	#onKeyDown(e) {
		if ($('.search-popup').hasClass('search-popup--open') && e.key === 'Escape') {
			$('.search-popup').removeClass('search-popup--open');
		} else if ($('.search-form__icon').hasClass('search-form__icon--active') && e.key === 'Escape') {
			$('.search-form__icon').removeClass('search-form__icon--active');
			$('.search-form__input').removeClass('search-form__input--active');
		}
	}

	init() {
		$(this.#searchIcons).each((_, elem) => {
			$(elem).on('click', (e) => {
				e.preventDefault();

				if (this.media.matches) {
					$('.search-popup').addClass('search-popup--open');
					$('.close-popup__button').on('click', () => $('.search-popup').removeClass('search-popup--open'));

					$(elem).removeClass('search-form__icon--active');
					$(elem).siblings().removeClass('search-form__input--active');
				} else {
					$(elem).toggleClass('search-form__icon--active');
					$(elem).siblings().toggleClass('search-form__input--active');
				}
			});
		});
	}
}
