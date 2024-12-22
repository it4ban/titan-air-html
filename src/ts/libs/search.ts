import $ from 'jquery';

export const toggleSearchBar = (width?: MediaQueryList) => {
	const searchInput = document.querySelector<HTMLInputElement>('.search-form__input');
	const popupInput = document.querySelector<HTMLInputElement>('.popup-input__field');

	$('.search-popup').removeClass('search-popup--open');
	$('.search-form__input').toggleClass('search-form__input--active');

	if (width?.matches) {
		$('.search-form__input').removeClass('search-form__input--active');
		$('.search-popup').addClass('search-popup--open');
		popupInput!.value = searchInput?.value || '';
	}

	$('.close-popup').on('click', () => {
		$('.search-popup').removeClass('search-popup--open');
		searchInput!.value = popupInput?.value || '';
	});
};
