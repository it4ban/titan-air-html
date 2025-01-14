import { Search } from './classes/Search.js';
import { PageScroll } from './classes/PageScroll.js';
import { Menu } from './classes/Menu.js';
import { MainSlider } from './classes/MainSlider.js';
import { NewsSlider } from './classes/NewsSlider.js';
import { ModalForm } from './classes/ModalForm.js';
import { CheckBox } from './classes/Checkbox.js';
import { ContactsBar } from './classes/ContactsBar.js';
import { LangSwitcher } from './classes/LangSwitcher.js';

$(() => {
	const pageScroll = new PageScroll('#pagepiling');
	const search = new Search(1120);
	const menu = new Menu();
	const mainSlider = new MainSlider('#mainSlider');
	const newsSlider = new NewsSlider('#newsSlider');
	const modalForms = new ModalForm();
	const checkBoxes = new CheckBox();
	const contactsBar = new ContactsBar();
	const langSwitchers = new LangSwitcher();

	pageScroll.init();
	search.init();
	mainSlider.init();
	newsSlider.init();
	modalForms.init();
	checkBoxes.init();
	contactsBar.init();
	langSwitchers.init();

	$('.header-toggle').on('click', () => {
		$('.header').toggleClass('header--hidden');
	});
	$('.menu-gamburger').on('click', (e) => menu.open(e));
	$('.mobile-menu__left-side').on('click', (e) => menu.close(e));
});
