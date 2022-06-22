<script lang="ts">
import Bottom from "../components/bottom.svelte";
import "../app.css";
import Top from "../components/top.svelte";
</script>

<!-- <header>
    <Navbar />
</header> -->

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="flex h-screen flex-col justify-between">
        <Top />
        
        <main class="mb-auto">
            <slot />
        </main>
        
        <Bottom />
            
    </div>
</div>