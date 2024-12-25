import $ from 'jquery';

enum Langs {
	ru = 'ru',
	en = 'en',
}

export class LangSwitcher {
	private state: boolean = false;
	private countLangs: number = $('.lang-variants__value').length;
	private langs = Object.keys(Langs);

	constructor() {
		$('.lang-variants__value').on('click', (e: JQuery.ClickEvent) => {
			const prevLang = $('.lang__current').last().text();

			this.langs.forEach((lang) => {
				if ($(e.currentTarget).data('langKey') === lang) {
					$(e.currentTarget).attr('data-lang-key', prevLang.toLowerCase());
					$('.lang__current').text($(e.currentTarget).text());
					$(e.currentTarget).text(prevLang);
				} else {
					throw new Error('Unable to determine data attribute');
				}
			});
		});
	}

	private toggleState() {
		if (this.state) {
			$('.lang__icon').addClass('lang__icon--rotate');
			$('.lang-variants')
				.addClass('lang-variants--open')
				.css('height', () => 100 * this.countLangs + '%');
		} else {
			$('.lang__icon').removeClass('lang__icon--rotate');
			$('.lang-variants').removeClass('lang-variants--open').css('height', '50px');
		}
	}

	public toggle() {
		this.state = !this.state;
		this.toggleState();
	}

	private translate() {}
}
