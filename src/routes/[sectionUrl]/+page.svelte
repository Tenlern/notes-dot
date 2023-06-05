<script lang="ts">
    import type {PageServerData} from "./$types";
    import {writable} from "svelte/store";

    export let data: PageServerData;
    const articles = writable([]);
    console.log(data.articles)
    $: articles.set(data.articles);

</script>

<h1 class="title is-1">
    {data.section.name}
</h1>

<nav class="">
    <form action="">
        <div class="control has-icons-right">
            <input class="input" type="text" placeholder="Search" value="bulma">
            <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
        </div>

        {#if (data.section.tags.length)}
            <div class="control">
                {#each data.section.tags as tag}
                    <input name="tags[]" value="{tag.name}" type="checkbox" class="">
                    <span class="tag">{tag.name}</span>

                {/each}
            </div>
        {/if}
    </form>


</nav>

<section class="section">
    {#if $articles.length}
        {#each $articles as article}
            <div class="card block">
                <header class="card-header">
                    <p class="card-header-title">
                        {article.name}
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    <div class="tags">
                        {#each article.tags as tag}
                            <div class="tag">
                                {tag.name}
                            </div>
                        {/each}
                    </div>
                    <div class="content">
                        {article.description}
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">Save</a>
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                </footer>
            </div>
        {/each}
    {:else}
        Nothing to show
    {/if}
</section>
