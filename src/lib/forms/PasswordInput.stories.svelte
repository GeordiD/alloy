<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import PasswordInput from './PasswordInput.svelte';
</script>

<Meta
	title="Password Input"
	component={PasswordInput}
/>

<Template let:args>
	<PasswordInput />
</Template>

<Story
	name="Password Input"
/>