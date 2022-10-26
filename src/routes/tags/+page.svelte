<script lang=ts>
	import type { PageData } from "./$types";

     export let data: PageData;
</script>

<svelte:head>
    <title>List of Tags</title>
</svelte:head>

<h1 class="text-2xl" id="home">
    List of Gifts
</h1>

<input type="text">

<section>
    {JSON.stringify(data)}
</section>

<style>

</style>