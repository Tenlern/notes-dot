<script lang="ts">
    import "$lib/styles/notes.css";
    import Bottom from "$lib/components/bottom.svelte";
    import Top from "$lib/components/top.svelte";

// let dark:boolean = false;
</script>

<div class="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div class="flex h-screen flex-col justify-between">
            <Top />
            
            <main class="mb-auto">
                <slot />
            </main>
            
            <Bottom />
                
        </div>
    </div>
</div>