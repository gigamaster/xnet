import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#3b82f6',
				secondary: '#ef4444',
			},
			fontFamily: {
				sans: ['InterVariable', 'ui-sans-serif', 'system-ui'],
				heading: ['InterVariable', 'ui-sans-serif', 'system-ui'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
