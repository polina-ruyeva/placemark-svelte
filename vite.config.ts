import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: [
				'weather-icons-master/css/weather-icons.css',
			],
		},
	},
});
