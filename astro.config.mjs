import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import compress from 'astro-compress';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
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
    mdx(),
  ],
});
