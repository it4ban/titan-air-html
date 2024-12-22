import $ from 'jquery';

export const getWindowWidth = () => {
	let width = window.innerWidth;

	const handleWindowResize = () => {
		width = window.innerWidth;
	};

	$(window).on('resize', handleWindowResize);

	return { width: () => width };
};
