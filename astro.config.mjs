import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

// import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({

	// Astro v4 fails to generate full URL of sitemap and canonical URLs in final build
	site: SITE.origin,          // Just the domain
	base: SITE.basePathname,   // The repo name
   
    outDir: 'dist',           // dist folder for GitHub Pages
    trailingSlash: 'always', // Vital for GitHub Pages folders
	output: 'static',
	islands: true,
	images: {
		service: '@astrojs/sharp', // Force Sharp service, but it keeps using webp format
		formats: ['avif', 'webp'],
	},

	// Enable islands for Astro 4.0+
	// islands: true,

	// integrations: [sitemap()],
	// ------------------------------
	// ⚠   Fail to build sitemap   ⚠
	// ------------------------------
	// integrations: [
	// 	sitemap({
	// 		// Force the sitemap to ignore any "broken" or "undefined" routes
	// 		filter: (page) => page !== undefined,
	// 	})
	// ],

	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
		plugins: [],
	},
});
