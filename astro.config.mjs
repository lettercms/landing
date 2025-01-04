import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

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
      customCss: ['./src/tailwind.css'],
      sidebar: [
        'docs',
        'docs/getting-started',
        'docs/architecture',
        'docs/usage',
        {
          label: 'Contributing',
          items: ['docs/contributing/intro', 'docs/contributing/guidelines']
        },
        'docs/roadmap'
      ]
    }),
    tailwind({})
  ],
  output: "server",
  adapter: vercel()
});