<script lang=ts>
    export let href: string
    export let text: string
    import { page } from "$app/stores";
</script>

<a href={href} class="px-1 ml-2 text-black text-md hover:text-blue-dark {$page.url.pathname == href ? 'underline' : 'no-underline'}">
    {text}
</a>

<style>

</style>