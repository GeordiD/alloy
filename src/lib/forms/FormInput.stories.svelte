<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import FormInput from './FormInput.svelte';
</script>

<Meta
	title="Form Input"
	component={FormInput}
/>

<Template let:args>
	<FormInput />
</Template>

<Story
	name="Form Input"
/>