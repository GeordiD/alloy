<script lang="ts">
  import { Variant } from '$lib/constants/variant';

	export let variant = 'primary';
	export let cls = '';

	let variantClass: string;

	$: {
		const isValid = Object.values(Variant).includes(variant as Variant);
		variantClass = isValid ? variant : Variant.Primary;		
	}
</script>

<button class="button px-3 py-1 rounded-md border-2 {variantClass} {cls}" on:click|preventDefault>
	<slot>Default Button</slot>
</button>

<style scoped>
.primary {
	@apply text-primary-text bg-primary border-primary-border;
}

.secondary {
	@apply text-secondary-text bg-secondary border-secondary-border;
}
/* 
.success {
	@apply text-success-text bg-success border-success;
}

.danger {
	@apply text-danger-text bg-danger border-danger;
}

.warning {
	@apply text-warning-text bg-warning border-warning;
}

.info {
	@apply text-info-text bg-info border-info;
} */
</style>