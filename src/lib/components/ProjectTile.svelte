<script lang="ts">
	import type { ProjectEntry } from '../types/content';
	import {
		BookOpenIcon,
		ExternalLinkIcon,
		GithubIcon
	} from 'svelte-feather-icons';

	export let project: ProjectEntry;

	const getIconFromLinkType = (iconName: string) => {
		switch (iconName) {
			case 'extlink':
				return ExternalLinkIcon;
			case 'github':
				return GithubIcon;
			case 'read':
				return BookOpenIcon;
			default:
				throw new Error('A requested icon was not found.');
		}
	};
</script>

<article>
	<img src={project.imageUrl} alt={project.caption} />
	<div class="text">
		<div class="row">
			<div>
				<h3>{project.title}</h3>
				<span>{project.company}</span>
			</div>
			<div class="icons">
				{#each Object.entries(project.links) as link}
					<a href={link[1]} rel="noopener noreferer" target="_blank">
						<svelte:component this={getIconFromLinkType(link[0])} />
					</a>
				{/each}
			</div>
		</div>
		<p>{project.body}</p>
	</div>
</article>

<style lang="scss">
	article {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: calc(2 * var(--spacing));
	}

	article:nth-child(odd) {
		flex-direction: row-reverse;
	}

	img {
		flex-shrink: 0;
		width: 375px;
		max-width: 100%;
		box-sizing: border-box;
		box-shadow: var(--card-box-shadow);
	}

	@media screen and (max-width: 991px) {
		img {
			flex-grow: 1;
			max-width: 80%;
			margin: auto;
		}
	}

	div.text {
		align-self: flex-start;
		min-width: 300px;
		flex-basis: 0;
		flex-grow: 1;
		padding: 0 var(--spacing);
	}

	div.row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	div.row > .icons {
		display: flex;
		gap: calc(0.5 * var(--spacing));
		padding-top: calc(0.125 * var(--spacing));
	}

	h3 {
		margin-bottom: 0;
	}

	h3 + span {
		color: var(--h4-color);
		font-size: var(--h4-size);
		font-weight: 700;
	}

	p {
		margin-top: var(--spacing);
	}
</style>
