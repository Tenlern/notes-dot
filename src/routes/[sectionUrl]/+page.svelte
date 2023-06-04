<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  async function getArticles() {
    let res = await fetch('/api/aricles')
  }
</script>

<h1 class="title is-1">
  {data.section.name}
</h1>

<nav class="section">
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
