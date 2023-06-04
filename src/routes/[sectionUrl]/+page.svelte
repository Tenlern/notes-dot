<script lang="ts">
    import type {PageServerData} from './$types';
    export let data: PageServerData;
</script>

<h1 class="title is-1">
    {data.section.name}
</h1>

<nav class="section">
    {#if (data.section.tags.length)}
        <ul class="level">
            {#each data.section.tags as tag}
                <li class="level-item">
                    <div class="tag">
                        <a href="/" class="is-active">
                            {tag.name}
                        </a>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</nav>

<section class="section">
    {#if (data.articles.length)}
        <article>
            {#each data.articles as article}
                <h2>{article.name}</h2>
            {/each}
        </article>
    {:else}
        Nothing to show
    {/if}
</section>
