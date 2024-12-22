import $ from 'jquery';

export const getWindowWidth = (callback: (width: number) => void) => {
	callback(window.innerWidth);

	const handleWindowResize = () => {
		callback(window.innerWidth);
	};

	$(window).on('resize', handleWindowResize);

	return () => {
		$(window).off('resize', handleWindowResize);
	};
};
