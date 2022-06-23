<script lang="ts">
    export let date: string;
    export let title: string;
    export let tags: string[];
    export let synopsis: string;
    export let href: string;
</script>

<article>
    <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <dl>
            <dt class="sr-only">
                Published on
            </dt>
            <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime="2021-08-07T15:32:14.000Z">{ date }</time>
            </dd>
        </dl>
        
        <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
                <div>
                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                        <a class="text-gray-900 dark:text-gray-100" href="{href}">
                            { title }
                        </a>
                    </h2>
                    <div class="flex flex-wrap">
                        {#each tags as tag}
                        <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="{href}">
                            { tag }
                        </a>
                        {/each}
                    </div>
                </div>
                <div class="prose text-gray-500 max-w-none dark:text-gray-400">
                    {synopsis}
                </div>
            </div>
            
            <div class="text-base font-medium leading-6">
                <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Read &quot;New features in v1&quot;" href="{href}">
                    Read more →
                </a>
            </div>
        </div>
    </div>
</article>