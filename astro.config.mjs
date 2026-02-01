import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	// site: 'https://yourusername.github.io/repository-name',
	// base: '/repository-name',  // Add your GitHub repository name

	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	site: SITE.origin,
	base: SITE.basePathname,

	output: 'static',
	islands: true,
	images: {
		service: '@astrojs/sharp', // Force Sharp service, but seems to force webp
		formats: ['avif', 'webp'],
	},

	// Enable islands for Astro 4.0+
	// islands: true,

	// integrations: [sitemap()],

	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
		plugins: [],
	},
});
