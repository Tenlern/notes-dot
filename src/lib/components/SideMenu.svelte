<script lang="ts">
	import type { Section } from '@prisma/client';
	import { page } from "$app/stores";
	import { slugify } from "$lib/slugify.js";
	export let sections: Section[];
	let currentSection: string;
	$: currentSection = $page.params.sectionUrl || ''
	console.log($page)
</script>

<div class="menu">
	<p class="menu-label">
		<a class="title is-3" href="/">Notes&.</a>
	</p>

	<ul class="menu-list">
		{#each sections as section}
			<li>
				<a class:is-active={currentSection.includes(section.url)} href="/{section.url}/">
					{section.name}
				</a>
			</li>
		{/each}

		<li class="">
			<a href="/contact/" class="">Contact</a>
		</li>
	</ul>
</div>
