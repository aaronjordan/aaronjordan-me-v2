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

	let routeId = '';
	$: routeId = (closeNavModal(), $page.route.id ?? '');

	let navModalOpen = false;
	const openNavModal = () => (navModalOpen = true);
	const closeNavModal = () => (navModalOpen = false);
	const closeOnEscape = (event: KeyboardEvent) =>
		event.key === 'Escape' && closeNavModal();
</script>

<button class="icon mobile-only" on:click={openNavModal}>
	<MenuIcon />
</button>
<nav class:modal-open={navModalOpen}>
	<button id="close-nav" class="icon mobile-only" on:click={closeNavModal}>
		<XIcon />
	</button>
	<ul>
		<li>
			<a href="/" class:active={'/' === routeId}>
				<HomeIcon />
				<span>Home</span>
			</a>
		</li>
		<li>
			<a href="/about" class:active={'/about' === routeId}>
				<CoffeeIcon />
				<span>About Me</span>
			</a>
		</li>
		<li>
			<a href="/projects" class:active={'/projects' === routeId}>
				<TerminalIcon />
				<span>Projects</span>
			</a>
		</li>
		<li>
			<a href="/blog" class:active={'/blog' === routeId}>
				<BookOpenIcon />
				<span>Posts</span>
			</a>
		</li>
		<li>
			<a href="/now" class:active={'/now' === routeId}>
				<CompassIcon />
				<span>Now</span>
			</a>
		</li>
	</ul>
</nav>
<svelte:window on:keyup={closeOnEscape} />

<style lang="scss">
	@use '$lib/scss/button';
	@include button.icon-button;

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

	.active {
		background: var(--primary-focus);
		box-shadow: inset 1.5rem 2.125rem 3rem -3.5rem var(--hero-gradient-stop-4),
			inset 1.75rem -1.25rem 2.75rem -3.25rem var(--hero-gradient-stop-3),
			inset 0.0675rem 0.125rem 0.5rem -0.375rem var(--primary-focus),
			0 0 0.375rem -0.25rem var(--contrast);
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
			position: absolute;
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
			left: 100%;
			font-size: 1rem;
			padding: 1rem;
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
					top: 120%;
				}
			}
		}

		span {
			pointer-events: none;
			top: 110%;
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
