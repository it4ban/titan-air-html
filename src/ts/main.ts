import $ from 'jquery';

import { screenScroll } from './libs/scroll';
import { toggleSearchBar } from './libs/search';

function handleChangeColor(index: number = 0) {
	if (index > 0) {
		$('.variant-dark')
			.removeClass('variant-dark')
			.addClass('variant-light')
			.find('*')
			.removeClass('variant-dark')
			.addClass('variant-light');

		$('.lang__current').removeClass('lang__current--darken');
	} else {
		$('.variant-light')
			.removeClass('variant-light')
			.addClass('variant-dark')
			.find('*')
			.removeClass('variant-light')
			.addClass('variant-dark');

		$('.lang__current').addClass('lang__current--darken');
	}
}

$(() => {
	const { handleCalculateSectionOffset, handleMouseWheel, getActiveSection } = screenScroll();

	handleCalculateSectionOffset();
	handleChangeColor();

	window.addEventListener('wheel', (e: WheelEvent) => {
		handleMouseWheel(e);

		handleChangeColor(getActiveSection());
	});

	let width = window.matchMedia('(max-width: 1120px)');

	$('.search-form__icon').on('click', () => toggleSearchBar(width));
});
