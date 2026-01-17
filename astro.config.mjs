import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';


import sitemap from '@astrojs/sitemap';
// import astroIcon from 'astro-icon';

import partytown from '@astrojs/partytown';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	site: SITE.origin,
	base: SITE.basePathname,

	output: 'static',
	islands: true,
	images: {
		service: '@astrojs/sharp',  // Force Sharp service, but seems to force webp
		formats: ['avif', 'webp']
	},
	
		// Enable islands for Astro 4.0+
		// islands: true,

	integrations: [

		sitemap(),

		// Removed astroIcon, replaced with component LocalIcon
		// astroIcon({
		// Keep it under assets or point this to a new location in public:
		//iconDir: "public/icons", 
		
		// Since they are in 'public', you can usually remove 
		// complex svgoOptions, but it seems to fail as they are forcely optimized
		// by Astro during the standard build assets pass.
		// svgoOptions: false, 
		//}),

		/* Disable this integration if you don't use Google Analytics (or other external script). 
		partytown({
			config: { forward: ['dataLayer.push'] },
		}),
		*/
	],

	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
	},
});
