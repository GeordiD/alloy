module.exports = {
	stories: ['../src/**/*.stories.js'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: import('../svelte.config.js').preprocess
	}
};
