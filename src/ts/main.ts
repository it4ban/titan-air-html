import $ from 'jquery';

import { Menu } from './classes/menu';
import { LangSwitcher } from './classes/LangSwitcher';

import { screenScroll } from './libs/scroll';

function handleChangeColor(index: number = 0) {
	if (index > 0) {
		$('.header-home .variant-dark')
			.removeClass('variant-dark')
			.addClass('variant-light')
			.find('*')
			.removeClass('variant-dark')
			.addClass('variant-light');

		$('.header-home .lang__current').removeClass('lang__current--darken');
	} else {
		$('.header-home .variant-light')
			.removeClass('variant-light')
			.addClass('variant-dark')
			.find('*')
			.removeClass('variant-light')
			.addClass('variant-dark');

		$('.header-home .lang__current').addClass('lang__current--darken');
	}
}

$(() => {
	const menu = new Menu();
	const langSwitcher = new LangSwitcher();

	const { handleCalculateSectionOffset, handleMouseWheel, getActiveSection } = screenScroll();

	handleCalculateSectionOffset();
	handleChangeColor();

	window.addEventListener('wheel', (e: WheelEvent) => {
		handleMouseWheel(e);

		handleChangeColor(getActiveSection());
	});

	$('.header-toggle').on('click', () => {
		$('.header').toggleClass('header--hidden');
	});

	$('.menu-gamburger').on('click', (e) => menu.open(e));
	$('.close-mobile').on('click', (e) => menu.close(e));

	$('.lang').on('click', () => langSwitcher.toggle());
});
