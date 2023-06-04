<script lang="ts">
	import type { Section } from '@prisma/client';
	import { page } from "$app/stores";
	export let sections: Section[];
	let currentSection: string;
	$: currentSection = $page.params.sectionUrl || ''
	$: isCurrent = (url: string) => {
		return currentSection.includes(url)
	}
</script>

<div class="menu p-1">
	<p class="menu-label">
		<a class="title is-3" href="/">Notes&.</a>
	</p>

	<ul class="menu-list">
		{#each sections as section}
			<li>
				<a class:is-active={isCurrent(section.url)} href="/{section.url}/">
					{section.name}
				</a>
				{#if section.tags.length && isCurrent(section.url)}
					<ul>
						{#each section.tags as tag}
							<a href="/{section.url}/{tag.name}/">
								{tag.name}
							</a>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
	<p class="menu-label">
		About
	</p>
	<ul class="menu-list">
		<li class="">
			<a href="/contact/" class="">Contact</a>
		</li>
	</ul>
</div>
