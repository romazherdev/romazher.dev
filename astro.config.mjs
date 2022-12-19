import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

export default defineConfig({
  site: 'https://romazher.dev/',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
    compress({
      img: false,
      css: false,
      html: true,
      js: true,
      svg: true,
    }),
    mdx({
      remarkPlugins: [remarkReadingTime],
      extendDefaultPlugins: true,
    }),
  ],
});
