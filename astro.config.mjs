import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			logo: {
				light: './src/assets/lettercms-logo.svg',
				dark: './src/assets/lettercms-logo-white.svg'
			},
			defaultLocale: 'root',
			locales: {
				es: {
					label: 'Español',
					lang: 'es'
				},
				root: {
					label: 'English',
					lang: 'en'
				}
			},
			title: 'LetterCMS',
			social: {
				github: 'https://github.com/lettercms/core'
			},
			customCss: [
				'./src/tailwind.css',
			],
			sidebar: [
				{slug: 'docs'},
				{slug: 'docs/getting-started'},
				{slug: 'docs/architecture'},
				{slug: 'docs/usage'},
				{
					label: 'Contributing',
					items: [
					  'docs/contributing/intro',
					  'docs/contributing/guidelines',
					],
				},
				{slug: 'docs/roadmap'},
			]
		}),
		tailwind({})
	]
});