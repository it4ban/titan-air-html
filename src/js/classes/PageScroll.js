export class PageScroll {
	#container = null;

	constructor(pagesContainer) {
		this.#container = pagesContainer;
	}

	init() {
		$(this.#container).pagepiling({
			menu: null,
			direction: 'vertical',
			verticalCentered: true,
			anchors: [],
			scrollingSpeed: 700,
			easing: 'swing',
			loopBottom: false,
			loopTop: false,
			css3: true,
			navigation: {
				textColor: '#000',
				bulletsColor: '#ffcc01',
				position: 'right',
				tooltips: ['Best partners', 'About us', 'Travel agency', 'Charter flights', 'Out partners', 'Contact us'],
			},
			normalScrollElements: null,
			normalScrollElementTouchThreshold: 5,
			touchSensitivity: 5,
			keyboardScrolling: true,
			sectionSelector: '.section',
			animateAnchor: false,
			onLeave: (_, index) => {
				if (index > 1) {
					$('.contacts-link').addClass('contacts-link--light');
					$('.search-form__icon').addClass('search-form__icon--light');
				} else {
					$('.contacts-link').removeClass('contacts-link--light');
					$('.search-form__icon').removeClass('search-form__icon--light');
				}
			},
		});
	}
}
