const preprocess = require('svelte-preprocess');

module.exports = {
	core: {
		builder: 'storybook-builder-vite'
	},
	stories: ['../src/lib/*.stories.svelte'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: preprocess()
	}
};
