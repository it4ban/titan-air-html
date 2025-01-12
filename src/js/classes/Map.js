export class Map {
	#map = null;

	constructor(mapId) {
		this.#map = document.getElementById(mapId);
	}

	async init() {
		await ymaps3.ready;

		const markerContainerElement = document.createElement('div');

		const markerImg = document.createElement('img');
		markerImg.classList.add('map-marker');
		markerImg.alt = 'Map Marker';
		markerImg.src = '../../images/map-marker.avif';

		markerContainerElement.append(markerImg);

		const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapLayer, YMapMarker } = ymaps3;

		const map = new YMap(
			this.#map,
			{
				location: {
					center: [55.75222, 37.61556],
					zoom: 9,
				},
			},
			[new YMapDefaultSchemeLayer(), new YMapDefaultFeaturesLayer(), new YMapLayer()],
		);

		const marker = new YMapMarker(
			{
				coordinates: [55.75222, 37.61556],
			},
			markerContainerElement,
		);

		map.addChild(marker);
	}
}
