<script lang="ts">
  import type { Tag } from "@prisma/client";

  export let tags: Tag[];
  let loading = false;
  export let search = '';
  export let selectedTags = [];

  async function submitFilter() {
    if (loading) {
      return;
    }
    let params = new URLSearchParams()
    if (search.length) {
      params.set('search', search)
    }
    if (selectedTags.length) {
      params.set('search', search)
    }

    loading = true
    let res = await fetch('/api/aricles?'+params.toString)
    console.log(res.json());
    loading = false
  }
</script>

<form action="" on:input={submitFilter()}>
  <div class="control has-icons-right">
    <input class="input" type="text" placeholder="Search" bind:value={search}>
    <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
  </div>

  {#if (tags.length)}
    <div class="control">
      <div class="tags">
        {#each tags as tag}
          <div class="">
            <input class="" name="tags[]" value="{tag.name}" type="checkbox">
            <span class="tag">{tag.name}</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</form>