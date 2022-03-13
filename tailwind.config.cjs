const colors = require('tailwindcss/colors');

const alloy = {
	colors: {
		primary: colors.blue[500],
		secondary: colors.transparent,
		success: colors.green[600],
		danger: colors.red[500],
		warning: colors.yellow[300],
		info: colors.teal[500],
		light: colors.white,
		dark: colors.black
	}
};

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: alloy.colors.primary,
				'primary-text': alloy.colors.light,
				'primary-border': alloy.colors.primary,
				secondary: alloy.colors.secondary,
				'secondary-text': alloy.colors.primary,
				'secondary-border': alloy.colors.primary
			}
		}
	},
	plugins: [],
	purge: ['./src/**/*.svelte']
};
