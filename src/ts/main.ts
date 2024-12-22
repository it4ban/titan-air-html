import $ from 'jquery';

import { screenScroll } from './libs/scroll';
import { getWindowWidth } from './libs/breakpoints';

$(() => {
	const { handleCalculateSectionOffset, handleMouseWheel, getActiveSection } = screenScroll();

	handleCalculateSectionOffset();

	window.addEventListener('wheel', (e: WheelEvent) => {
		handleMouseWheel(e);

		console.log(getActiveSection());

		if (getActiveSection() > 0) {
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
	});
});
