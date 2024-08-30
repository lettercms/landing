import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		  	sans: ['Quicksand', 'sans-serif'],
		  	rubik: ['Rubik', 'sans-serif']
		},
		extend: {
			colors: {
				main: {
					100: '#a99efb',
					300: '#837bbf',
					500: '#5f4dee',
					700: '#362e6f',
					900: '#110c36'
				}
			}
		}
	},
	plugins: [starlightPlugin()]
}

