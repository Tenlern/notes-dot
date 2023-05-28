<script lang="ts">
	import type { Section } from '@prisma/client';
	import { page } from "$app/stores";
	import { slugify } from "$lib/slugify.js";
	export let sections: Section[];
	let currentPage: string = $page.url.pathname;

	function url(section: Section) {
		return '/' + slugify(section.name) + '/'
	}
</script>

<div class="menu">
	<p class="menu-label">
		<a class="title is-3" href="/">Notes</a>
	</p>

	<ul class="menu-list">
		{#each sections as section}
			<li>
				<a class:active={currentPage === url(section)} href={url(section)}>
					{section.name}
				</a>
			</li>
		{/each}

		<li class="pure-menu-item"><a href="#contact" class="pure-menu-link">Contact</a></li>
	</ul>
</div>
