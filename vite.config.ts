import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import '$lib/sass/variables';
          @import '$lib/sass/mixins';
        `
			}
		}
	},
	plugins: [sveltekit()]
});
