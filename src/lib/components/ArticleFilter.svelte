<script lang="ts">
  import type { Tag } from "@prisma/client";

  export let tags: Tag[];
  export let search = '';
  export let selectedTags = [];
</script>

<form method="POST">
  <div class="control has-icons-right">
    <input class="input" name="search" type="text" placeholder="Search" bind:value={search}>
    <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
  </div>

  {#if (tags.length)}
    <div class="control">
      <div class="tags">
        {#each tags as tag}
          <div class="">
            <input class="" name="tags" value="{tag.id}" type="checkbox" bind:group={selectedTags}>
            <span class="tag">{tag.name}</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <button type="submit" class="button is-info is-small">Submit</button>
</form>