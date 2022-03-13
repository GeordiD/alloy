<script lang="ts">
  export let value: string;
  export let name: string;
  export let fullWidth = true;
  export let cls = '';
</script>

<input
  class="rounded-md p-2 {cls}"
  class:w-full="{fullWidth}"
  type="password"
  {name}
  bind:value={value}
/>