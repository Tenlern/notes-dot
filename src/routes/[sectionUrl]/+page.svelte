<script lang="ts">
    import type {PageServerData} from './$types';
    export let data: PageServerData;
</script>

<h1 class="title is-1">
    {data.section.name}
</h1>

{#if (data.section.tags.length)}
    <ul>
        {#each data.section.tags as tag}
            <li>{tag.name}</li>
        {/each}
    </ul>
{/if}
