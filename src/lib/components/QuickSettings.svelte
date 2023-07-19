<script lang="ts">
	import { fly, type FlyParams } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { XIcon } from 'svelte-feather-icons';
	import { onMount } from 'svelte';

	const transition: FlyParams = {
		duration: 500,
		easing: cubicInOut,
		y: 50
	};

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
		const stored = window.localStorage.getItem('savedColorTheme');
		setDarkMode(stored !== 'light' && !mediaQuery.matches);
	});

	let darkMode = true;
	export let visible = false;

	const getRootElement = () => document.getElementsByTagName('html')[0];
	let root: HTMLHtmlElement | null;
	const setDarkMode = (value: boolean) => {
		darkMode = value;
		root ??= getRootElement();
		root.dataset.theme = darkMode ? 'dark' : 'light';
	};

	const saveColorTheme = () => {
		window.localStorage.setItem('savedColorTheme', darkMode ? 'dark' : 'light');
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if visible}
	<aside transition:fly={transition}>
		<div>
			<h2>Settings</h2>
			<button class="icon" on:click={() => (visible = false)}><XIcon /></button>
		</div>
		<label for="theme-toggle">
			<span>Dark Mode</span>
			<input
				type="checkbox"
				id="theme-toggle"
				name="switch"
				role="switch"
				on:change={() => (setDarkMode(!darkMode), saveColorTheme())}
				bind:checked={darkMode}
			/>
		</label>
	</aside>

	<!-- The functionality here is mainly exposed on the close button -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="transparent-scrim" on:click={() => (visible = false)} />
{/if}

<style lang="scss">
	@use '$lib/scss/button';
	@include button.icon-button;

	aside {
		z-index: 1;
		position: absolute;
		display: block;
		text-align: right;
		right: var(--spacing);
		top: var(--spacing);
		border-radius: var(--border-radius);
		padding: var(--spacing);
		background: var(--background-color);
		box-shadow: var(--card-box-shadow);

		button.icon {
			margin: 0;
		}

		> div,
		> label {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: calc(0.5 * var(--spacing));

			&:first-child {
				margin-bottom: var(--spacing);
			}
		}
	}

	h2 {
		margin: 0;
		margin-right: calc(6 * var(--spacing));
		font-size: calc(1.25 * var(--spacing));
	}

	.transparent-scrim {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
