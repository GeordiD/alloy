module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(59, 130, 246)',
				'primary-text': '#fff',
				secondary: 'rgba(0, 0, 0, 0)',
				'secondary-text': 'rgb(59, 130, 246)',
				success: 'rgb(34, 197, 94)',
				'success-text': '#fff',
				danger: 'rgb(239, 68, 68)',
				'danger-text': '#fff',
				warning: 'rgb(253, 224, 71)',
				'warning-text': '#000',
				info: 'rgb(20, 184, 166)',
				'info-text': '#fff'
			}
		}
	},
	plugins: [],
	purge: ['./src/**/*.svelte']
};
