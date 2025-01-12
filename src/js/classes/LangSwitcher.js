export class LangSwitcher {
	#langSelects = ['.lang-switcher'];

	init() {
		$(this.#langSelects).each((_, switcher) => {
			$(switcher).customSelect();
		});
	}
}
