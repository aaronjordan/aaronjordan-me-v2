<script lang="ts">
	import { page } from '$app/stores';
	import {
		BookOpenIcon,
		CoffeeIcon,
		CompassIcon,
		HomeIcon,
		MenuIcon,
		TerminalIcon,
		XIcon
	} from 'svelte-feather-icons';
	import Swoosh from '$lib/assets/Swoosh.svg.svelte';
	import type { NavigationEntry } from '$lib/types/content';

	export let entries: NavigationEntry[] = [];

	let routeId = '';
	$: routeId = (closeNavModal(), $page.route.id ?? '');

	let closeModalButton: HTMLButtonElement | null;
	let navModalOpen = false;

	const openNavModal = () => {
		navModalOpen = true;

		setTimeout(() => {
			// Initially focus this button after it is visible.
			closeModalButton?.focus();
		});
	};
	const closeNavModal = () => (navModalOpen = false);
	const closeOnEscape = (event: KeyboardEvent) =>
		event.key === 'Escape' && closeNavModal();

	const getIconFromString = (iconName: string) => {
		switch (iconName) {
			case 'home':
				return HomeIcon;
			case 'coffee':
				return CoffeeIcon;
			case 'terminal':
				return TerminalIcon;
			case 'bookOpen':
				return BookOpenIcon;
			case 'compass':
				return CompassIcon;
			default:
				throw new Error('A requested icon was not found.');
		}
	};
</script>

<button class="icon mobile-only" on:click={openNavModal}>
	<MenuIcon />
</button>
<a href="/" class="logo" data-theme="light">
	<Swoosh />
</a>
<!-- A11y flags are obviated with Esc hotkey and focusable close button -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<nav class:modal-open={navModalOpen} on:click={closeNavModal}>
	<button
		id="close-nav"
		class="icon mobile-only"
		bind:this={closeModalButton}
		on:click={closeNavModal}
	>
		<XIcon />
	</button>
	<ul>
		{#each entries as option}
			{#if !option.hidden}
				<li>
					<a href={option.route} class:active={option.route === routeId}>
						<svelte:component this={getIconFromString(option.icon)} />
						<span>{option.title}</span>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
<svelte:window on:keyup={closeOnEscape} />

<style lang="scss">
	@use '$lib/scss/button';
	@include button.icon-button;

	:root {
		--emphasis-shadow: inset 1.5rem 2.125rem 3rem -3.5rem var(--hero-gradient-stop-4),
			inset 1.75rem -1.25rem 2.75rem -3.25rem var(--hero-gradient-stop-3),
			inset 0.0675rem 0.125rem 0.5rem -0.375rem var(--primary-focus),
			0 0 0.375rem -0.25rem var(--contrast);
	}

	a {
		position: relative;
		box-sizing: border-box;
		width: 3rem;
		height: 3rem;
		border-radius: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
		padding: 0;
		font-size: 0.75rem;
		color: var(--h5-color);
	}

	.logo {
		padding: 0.3rem;
		color: var(--h3-color);
		background: var(--muted-border-color);
		box-shadow: var(--emphasis-shadow);
		margin-left: calc(0.75 * var(--spacing));

		&:focus {
			// A handful of calculations to stop the logo from moving at all
			// when the focus ring is applied.
			--focus-ring-size: 4px;
			--focus-ring-offset: calc(2 * var(--focus-ring-size));
			--focused-width-height: calc(3rem + var(--focus-ring-offset));

			width: var(--focused-width-height);
			height: var(--focused-width-height);
			border: var(--focus-ring-size) solid var(--primary-hover);
			border-radius: var(--focused-width-height);
			margin: calc(-1 * var(--focus-ring-size));
			margin-left: calc(calc(0.75 * var(--spacing)) - var(--focus-ring-size));
		}
	}

	.active {
		background: var(--primary-focus);
		box-shadow: var(--emphasis-shadow);
	}

	span {
		position: absolute;
	}

	button#close-nav {
		position: fixed;
		top: calc(0.5 * var(--spacing));
		left: calc(0.5 * var(--spacing));
	}

	@media (max-width: 991px) {
		nav {
			// TODO: Use a media query listener to animate the display on/off
			// transition for mobile
			display: none;
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			min-height: 100%;
			padding-left: 10%;
			background: var(--modal-overlay-background-color);
			backdrop-filter: var(--modal-overlay-backdrop-filter);

			&.modal-open {
				display: flex;
			}
		}

		ul {
			flex-direction: column;
		}

		span {
			display: block;
			left: 100%;
			font-size: 1rem;
			padding: 1.5rem 1rem;
			width: 60vw;
		}
	}

	@media (min-width: 992px) {
		.mobile-only {
			display: none;
		}

		nav > ul {
			margin-left: var(--spacing);
		}

		li {
			margin-right: calc(0.5 * var(--spacing));
			padding: 0;
		}

		a {
			&:focus,
			&:hover {
				span {
					// TODO: disable motion if preferred by user
					opacity: 1;
					top: 115%;
				}
			}
		}

		span {
			pointer-events: none;
			top: 100%;
			min-width: 100%;
			width: max-content;
			max-width: 200%;
			border-radius: 10rem; // quick pill shape
			padding: calc(0.25 * var(--font-size)) calc(0.75 * var(--font-size));
			text-align: center;
			color: var(--tooltip-color);
			background: var(--tooltip-background-color);
			box-shadow: 0 0 0.375rem -0.325rem var(--contrast);
			transition: all 0.5s ease;
			opacity: 0;
		}
	}
</style>
