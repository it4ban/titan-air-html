export class MainSlider {
	#container = null;
	#currentIndex = 0;
	#sliderOptions = {
		center: true,
		Dots: false,
		Navigation: false,
		on: {
			change: (instance) => {
				this.#currentIndex = instance.page;
			},
		},
	};

	constructor(sliderId) {
		this.#container = document.getElementById(sliderId);
	}

	init() {
		const carousel = new Carousel(this.#container, this.#sliderOptions);

		if (carousel) {
			Fancybox.bind('[data-fancybox="gallery"]', {});

			$('#navNext').on('click', () => carousel.slideNext());
			$('#navPrev').on('click', () => carousel.slidePrev());

			$('.fullscreen-button').on('click', () => {
				Fancybox.show(
					Array.from(document.querySelectorAll('a[data-fancybox="gallery"]')).map((link) => {
						return {
							src: link.href,
						};
					}),
					{
						startIndex: this.#currentIndex,
					},
				);
			});
		} else {
			return;
		}
	}
}
