import type { UserConfig } from 'vite';
import { resolve } from 'path';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import legacy from '@vitejs/plugin-legacy';

export default {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				about: resolve(__dirname, 'pages/about/index.html'),
			},
		},
	},
	plugins: [
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
		ViteImageOptimizer({
			svg: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								cleanupNumericValues: false,
								removeViewBox: false,
							},
						},
					},
					'sortAttrs',
					{
						name: 'addAttributesToSVGElement',
						params: {
							attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
						},
					},
				],
			},
			png: {
				quality: 100,
			},
			jpeg: {
				quality: 100,
			},
			jpg: {
				quality: 100,
			},
			tiff: {
				quality: 100,
			},
			webp: {
				lossless: true,
			},
		}),
	],
} satisfies UserConfig;
