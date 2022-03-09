<script lang="ts">
  import { Variant } from '$lib/constants/variant';

	export let variant: Variant = Variant.Primary;
</script>

<button class="button px-3 py-1 rounded-md border-2 {variant}" on:click>
	<slot>Default Button</slot>
</button>

<style scoped>
.primary {
	@apply text-primary-text bg-primary border-primary;
}

.secondary {
	@apply text-secondary-text border-primary bg-secondary;
}

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
}
</style>