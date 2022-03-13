<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	// import '../index.css';
</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		variant: {
			control: {
				type: 'select',
				options: [
					'primary', 
					'secondary',
					// 'success',
					// 'danger',
					// 'warning',
					// 'info',
				]
			}
		}
	}}
	args={{
		text: 'Hello World'
	}}
/>

<Template let:args>
	<Button {...args}>{args.text}</Button>
</Template>

<Story
	name="Primary"
	args={{
		variant: 'primary'
	}}
/>

<Story
	name="Secondary"
	args={{
		variant: 'secondary'
	}}
/>