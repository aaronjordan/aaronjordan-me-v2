<script lang="ts">
	import {
		GithubIcon,
		HeartIcon,
		InstagramIcon,
		LinkedinIcon
	} from 'svelte-feather-icons';
</script>

<footer>
	<p>
		Made with <HeartIcon size="20" /> and
		<a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferer"
			>SvelteKit.</a
		>
	</p>
	<div>
		<a
			href="https://github.com/aaronjordan"
			target="_blank"
			rel="noopener noreferer"
		>
			<GithubIcon />
		</a>
		<a
			href="https://www.linkedin.com/in/heyitsaaronjordan/"
			target="_blank"
			rel="noopener noreferer"
		>
			<LinkedinIcon />
		</a>
		<a
			href="https://www.instagram.com/heyitsaaronjordan/"
			target="_blank"
			rel="noopener noreferer"
		>
			<InstagramIcon />
		</a>
	</div>
</footer>

<style lang="scss">
	footer {
		text-align: center;
		background-color: var(--code-background-color);
		padding: calc(2 * var(--spacing));
		padding-bottom: calc(4 * var(--spacing));
	}

	p {
		color: var(--secondary);
	}

	div a {
		color: var(--secondary);

		&:hover,
		&:focus {
			color: var(--h1-color);
			background: none;
		}

		&:not(:last-child) {
			margin-right: var(--spacing);
		}
	}
</style>
