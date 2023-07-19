<script lang="ts">
	import ProjectTile from '$src/lib/components/ProjectTile.svelte';

	export let data;
</script>

<main class="container">
	<h2 class="sr-only">Projects</h2>
	{#each data.projects as project}
		<ProjectTile {project} />
	{/each}
</main>
