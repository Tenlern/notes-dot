<script lang="ts">
import Post from "$lib/components/post.svelte"

let posts = [
    {
        date: "January 12, 2021",
        title: "Introducing Multi-part Posts with Nested Routing",
        synopsis: "The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!",
        href: '/',
        tags: [
            "multi-author",
            "next-js",
            "feature"
        ]
    },
    {
        date: "December 21, 2020",
        title: "Deriving the OLS Estimator",
        synopsis: "How to derive the OLS Estimator with matrix notation and a tour of math typesetting using markdown with the help of KaTeX.",
        href: '/',
        tags: [
            "multi-author",
            "next-js",
            "feature"
        ]
    },{
        date: "January 12, 2021",
        title: "Introducing Multi-part Posts with Nested Routing",
        synopsis: "The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!",
        href: '/',
        tags: [
            "multi-author",
            "next-js",
            "feature"
        ]
    },]
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A blog created with Next.js and Tailwind.css
        </p>
    </div>
    
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
        {#each posts as post}
            <li class="py-12">
                <Post {...post} />
            </li>
        {/each}
    </ul>
</div>
<div class="flex justify-end text-base font-medium leading-6">
    <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="all posts" href="/">
        All Posts →
    </a>
</div>