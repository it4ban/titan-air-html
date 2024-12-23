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
			output: {
				assetFileNames: (assetInfo) => {
					const ext =
						typeof assetInfo.name === 'string'
							? assetInfo.name.split('.').pop()
							: typeof assetInfo.source === 'string'
							? assetInfo.source.split('.').pop()
							: '';

					if (!ext) return 'assets/';

					if (ext === 'css') return 'css/[name].min[extname]';

					if (['png', 'jpg', 'jpeg', 'svg', 'webp', 'gif', 'tiff'].includes(ext)) return 'img/[name]-[hash][extname]';
					if (['woff', 'woff2', 'ttf', 'eot', 'otf'].includes(ext)) return 'fonts/[name][extname]';

					return 'assets/[name]-[hash][extname]';
				},
				chunkFileNames: 'js/[name].min.js',
				entryFileNames: 'js/[name].min.js',
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
