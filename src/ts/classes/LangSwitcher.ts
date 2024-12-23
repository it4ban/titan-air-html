import $ from 'jquery';

export class LangSwitcher {
	private state: boolean = false;

	private toggleState() {
		if (this.state) {
			$('.lang__icon').addClass('lang__icon--rotate');
			$('.lang-variants').addClass('lang-variants--open');
		} else {
			$('.lang__icon').removeClass('lang__icon--rotate');
			$('.lang-variants').removeClass('lang-variants--open');
		}
	}

	toggle() {
		this.state = !this.state;
		this.toggleState();
	}
}
