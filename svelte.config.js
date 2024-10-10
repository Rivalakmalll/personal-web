import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Preprocess configuration
  preprocess: [vitePreprocess()],

  kit: {
    // Configure the adapter for deployment
    adapter: adapter(),
    // Other options can go here if needed
  }
};

export default config;
