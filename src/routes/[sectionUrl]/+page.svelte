<script lang="ts">
    import type {PageServerData} from './$types';
    export let data: PageServerData;
    console.log(data)
</script>

<h1 class="title is-1">
    {data.section.name}
</h1>