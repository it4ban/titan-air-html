import $ from 'jquery';

$(() => {
	let width = window.matchMedia('(max-width: 1120px)');

	$('.search-form__icon').on('click', () => toggleSearchBar(width));

	$(width).on('change', () => {
		if (width.matches) {
			$('.search-form__input').removeClass('search-form__input--active');
		} else {
			$('.search-popup').removeClass('search-popup--open');
		}
	});
});

const toggleSearchBar = (width?: MediaQueryList) => {
	const searchInput = document.querySelector<HTMLInputElement>('.search-form__input');
	const popupInput = document.querySelector<HTMLInputElement>('.popup-input__field');

	if (width?.matches) {
		$('.search-popup').addClass('search-popup--open');
		popupInput!.value = searchInput?.value || '';
	} else {
		$('.search-form__input').toggleClass('search-form__input--active');
	}

	$('.close-popup').on('click', () => {
		$('.search-popup').removeClass('search-popup--open');
		searchInput!.value = popupInput?.value || '';
	});
};
