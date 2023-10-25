import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from '@astrojs/vue';
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), vue(), tailwind()],
	// adapter: nodejs({
	// 	mode: 'standalone' // or 'standalone'
	// }),
	// output: 'hybrid',
});
