<script lang="ts">
	import { SettingsIcon } from 'svelte-feather-icons';
	import NavGroup from './NavGroup.svelte';
	import QuickSettings from './QuickSettings.svelte';
	import type { NavigationEntry } from '$lib/types/content';

	let settingsVisible = false;
	export let navigationEntries: NavigationEntry[];
</script>

<header class="container-fluid">
	<div>
		<NavGroup entries={navigationEntries} />
	</div>
	<div>
		<button class="icon secondary" on:click={() => (settingsVisible = true)}>
			<SettingsIcon />
		</button>
	</div>
	<QuickSettings bind:visible={settingsVisible} />
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
