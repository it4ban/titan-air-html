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
		navigation: false,
		normalScrollElements: null,
		normalScrollElementTouchThreshold: 5,
		touchSensitivity: 5,
		keyboardScrolling: true,
		sectionSelector: '.section',
		animateAnchor: false,
	});
});
