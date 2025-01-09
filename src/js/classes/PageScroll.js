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
			onLeave: (currentIndex, nextIndex) => {
				if (nextIndex > 1) {
					$('.header-home .contacts-link').addClass('contacts-link--light');
					$('.header-home .search-form__icon').addClass('search-form__icon--light');
				} else {
					$('.header-home .contacts-link').removeClass('contacts-link--light');
					$('.header-home .search-form__icon').removeClass('search-form__icon--light');
				}

				this.#addAnimation(nextIndex);
			},
		});
	}

	#addAnimation(screenIndex) {
		$('.one-screen__block').removeClass('animate__rubberBand');
		$('.two-screen__block-right').removeClass('animate__bounceIn');
		$('.three-screen__block-left').removeClass('animate__rubberBand');
		$('.four-screen__top').removeClass('animate__bounceIn');
		$('.four-screen__text').removeClass('animate__flipInX');
		$('.category-block').removeClass('animate__fadeInLeft');
		$('.screen-title').removeClass('animate__flipInY');
		$('.five-screen__text').removeClass('animate__bounceIn');
		$('.partners__wrapper').removeClass('animate__fadeInBottomRight');
		$('.screen-title').removeClass('animate__lightSpeedInLeft');
		$('.contact-info').removeClass('animate__lightSpeedInLeft');
		$('.contact-media').removeClass('animate__lightSpeedInRight');

		switch (screenIndex) {
			case 1:
				$('.one-screen__block').addClass('animate__rubberBand');
				break;
			case 2:
				$('.two-screen__block-right').addClass('animate__bounceIn');
				break;
			case 3:
				$('.three-screen__block-left').addClass('animate__rubberBand');
				break;
			case 4:
				$('.four-screen__top').addClass('animate__bounceIn');
				$('.four-screen__text').addClass('animate__flipInX');
				$('.category-block').addClass('animate__fadeInLeft');
				break;
			case 5:
				$('.screen-title').addClass('animate__flipInY');
				$('.five-screen__text').addClass('animate__bounceIn');
				$('.partners__wrapper').addClass('animate__fadeInBottomRight');
				break;
			case 6:
				$('.screen-title').addClass('animate__lightSpeedInLeft');
				$('.contact-info').addClass('animate__lightSpeedInLeft');
				$('.contact-media').addClass('animate__lightSpeedInRight');
				break;
		}
	}
}
