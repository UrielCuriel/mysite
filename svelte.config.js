import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import commonjsExternals from 'vite-plugin-commonjs-externals'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		defaults: {
			style: 'postcss',
			script: 'typescript'
		},
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			// plugins: [
			// 	commonjsExternals.default({
			// 		externals: ['chrome-aws-lambda', 'puppeteer-core']
			// 	})
			// ],
			server: {
				watch: {
					usePolling: true
				}
			}
		}
	}
}

export default config
