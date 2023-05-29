<script lang="ts">
	import 'bulma';
	import '../app.css';
	import type { LayoutServerData } from './$types';
	import SideMenu from "$lib/components/SideMenu.svelte";

	export let data: LayoutServerData;
</script>

<div id="layout" class="columns">
	<aside id="sidebar" class="column is-3-tablet">
		<div class="container p-2">
			<SideMenu sections="{data.sections}">
			</SideMenu>
		</div>

	</aside>

	<main id="main" class="column">
		<slot />
	</main>
</div>
