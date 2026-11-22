import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://vincenzocivale.github.io',
  output: 'static',
  // Self-hosted at build time; the variables replace the old --font-sans / --font-mono in main.css.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: ['100 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
});
