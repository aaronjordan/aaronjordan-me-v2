<script lang="ts">
	import { SettingsIcon } from 'svelte-feather-icons';
	import NavGroup from './NavGroup.svelte';
</script>

<header class="container-fluid">
	<div>
		<NavGroup />
	</div>
	<div>
		<button class="icon secondary">
			<SettingsIcon />
		</button>
	</div>
</header>

<style lang="scss">
	@use '$lib/scss/button';
	@include button.icon-button;

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: calc(0.5 * var(--spacing));
		background: var(--code-background-color);
		margin-bottom: calc(2 * var(--spacing));
	}

	header > * {
		display: flex;
		align-items: center;

		*:not(:first-child) {
			margin: 0;
			margin-left: var(--spacing);
		}
	}
</style>
