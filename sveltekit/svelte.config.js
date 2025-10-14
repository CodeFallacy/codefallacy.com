import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { 
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn'
		},
		csp: {
			mode: 'auto',
			directives: {
				'default-src': [ "'self'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				'frame-src': [ "'self'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				'connect-src': [ "'self'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				'script-src': [ "'self'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				'script-src-elem': [ "'self'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				'style-src': [ "'self'", "'unsafe-inline'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				'img-src': [ "'self'", "data:", "https://codefallacy.com", "https://www.codefallacy.com", "*.codefallacy.com" ],
				'font-src': [ "'self'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				"base-uri": [ "'self'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				"form-action": [ "'self'", "https://codefallacy.com", "https://www.codefallacy.com" ],
				"object-src": ["'self'", "https://codefallacy.com", "https://www.codefallacy.com" ]
			}
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
