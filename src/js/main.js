import { Search } from './classes/Search.js';
import { PageScroll } from './classes/PageScroll.js';
import { Menu } from './classes/Menu.js';

$(() => {
	const pageScroll = new PageScroll('#pagepiling');
	const search = new Search(1120);
	const menu = new Menu();

	pageScroll.init();
	search.init();

	$('.header-toggle').on('click', () => {
		$('.header').toggleClass('header--hidden');
	});

	$('.menu-gamburger').on('click', (e) => menu.open(e));
	$('.close-mobile').on('click', (e) => menu.close(e));
});
