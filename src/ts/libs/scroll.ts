let inMove = false;
let inMoveDelay = 400;
let activeSection = 0;
let offsets: number[] = [];

const moveDown = () => {
	inMove = true;
	activeSection--;

	if (activeSection < 0) activeSection = offsets.length - 1;

	scrollToSection(activeSection, true);
};

const moveUp = () => {
	inMove = true;
	activeSection++;

	if (activeSection > offsets.length - 1) activeSection = 0;

	scrollToSection(activeSection, true);
};

const scrollToSection = (id: number, force: boolean = false) => {
	if (inMove && !force) return false;

	activeSection = id;
	inMove = true;

	const section = document.querySelectorAll('section')[id];
	section?.scrollIntoView({ behavior: 'smooth' });

	setTimeout(() => {
		inMove = false;
	}, inMoveDelay);
};

export const screenScroll = () => {
	const handleCalculateSectionOffset = () => {
		const sections = document.querySelectorAll('section');

		sections.forEach((section) => {
			const sectionOffset = section.offsetTop;
			offsets.push(sectionOffset);
		});
	};

	const handleMouseWheel = (e: WheelEvent) => {
		if (e.deltaY > 0 && !inMove) {
			moveUp();
		} else if (e.deltaY < 0 && !inMove) {
			moveDown();
		}

		return false;
	};

	return {
		getActiveSection: () => activeSection,
		handleCalculateSectionOffset,
		handleMouseWheel,
	};
};
