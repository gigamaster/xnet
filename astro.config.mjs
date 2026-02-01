import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({

	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	// site: SITE.origin,
	// base: SITE.basePathname,
    // trailingSlash: 'always',
	// outDir: 'dist',
	// output: 'static',

	site: 'https://gigamaster.github.io', // Just the domain
    base: '/xnet',                        // The repo name
    outDir: 'dist',                       // Capital D
    trailingSlash: 'always',              // Vital for GitHub Pages folders
	output: 'static',
	islands: true,
	images: {
		service: '@astrojs/sharp', // Force Sharp service, but seems to force webp
		formats: ['avif', 'webp'],
	},

	// Enable islands for Astro 4.0+
	// islands: true,

	// integrations: [sitemap()],
	// try to bring back sitemap
	integrations: [
		sitemap({
			// Force the sitemap to ignore any "broken" or "undefined" routes
			filter: (page) => page !== undefined,
		})
	],

	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
		plugins: [],
	},
});
