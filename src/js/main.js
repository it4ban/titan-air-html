import { Search } from './classes/Search.js';
import { PageScroll } from './classes/PageScroll.js';

$(() => {
	const pageScroll = new PageScroll('#pagepiling');
	const search = new Search(1120);
	pageScroll.init();
	search.init();
});
