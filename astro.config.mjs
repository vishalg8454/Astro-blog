import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://vishalg8454.github.io/Astro-blog/',
	integrations: [mdx(), sitemap()],
	base: '/Astro-blog/'
});
