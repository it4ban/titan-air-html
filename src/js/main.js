$(() => {
	$('#pagepiling').pagepiling({
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
		animateAnchor: false,
	});
});
