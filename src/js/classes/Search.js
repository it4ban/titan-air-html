export class Search {
	media = null;

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
		$('.search-form__icon').on('click', () => {
			if (this.media.matches) {
				$('.search-popup').addClass('search-popup--open');
				$('.close-popup__button').on('click', () => $('.search-popup').removeClass('search-popup--open'));

				$('.search-form__icon').removeClass('search-form__icon--active');
				$('.search-form__input').removeClass('search-form__input--active');
			} else {
				$('.search-form__icon').toggleClass('search-form__icon--active');
				$('.search-form__input').toggleClass('search-form__input--active');
			}
		});
	}
}
