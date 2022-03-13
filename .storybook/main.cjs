const preprocess = require('svelte-preprocess');
const path = require('path');

module.exports = {
	core: {
		builder: 'storybook-builder-vite'
	},
	// Manually aliasing $lib (per storybook #14952)
	async viteFinal(config) {
		config.resolve.alias = {
			$lib: path.resolve('./src/lib')
		};

		return config;
	},
	stories: ['../src/lib/**/*.stories.svelte'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: preprocess()
	}
};
