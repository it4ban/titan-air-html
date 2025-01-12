export class NewsSlider {
	#container = null;
	#sliderOptions = {
		loop: true,
		margin: 0,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			920: {
				items: 2,
			},
			1120: {
				items: 3,
			},
		},
	};

	constructor(sliderId) {
		this.#container = $(sliderId);
	}

	#checkContainer(container) {
		if (container.length === 0) {
			return false;
		} else {
			return true;
		}
	}

	init() {
		const isCheck = this.#checkContainer(this.#container);

		if (isCheck) {
			const carousel = $(this.#container).owlCarousel(this.#sliderOptions);

			$('#newsLeft').on('click', () => carousel.trigger('prev.owl.carousel'));
			$('#newsRight').on('click', () => carousel.trigger('next.owl.carousel'));
		} else {
			return;
		}
	}
}
