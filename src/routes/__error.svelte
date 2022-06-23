<script context="module" lang="ts">
  export function load({ error, status }: {error: Error, status: number})
  {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script lang="ts">
  export let title: string;
</script>

<h1>{title}</h1>