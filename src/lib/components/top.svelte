<script lang="ts">
    // export let dark:boolean;

    function toggleDarkMode() {
        // dark = !dark
        window.document.body.classList.toggle('dark')
    }
</script>

<header class="flex items-center justify-between py-10">
    <div>
        <a aria-label="TailwindBlog" href="/">
        <div class="flex items-center justify-between">
            <div class="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="344.564 330.278 111.737 91.218" width="53.87" height="43.61">
                    <defs>
                        <linearGradient id="logo_svg__b" gradientUnits="userSpaceOnUse" x1="420.97" y1="331.28" x2="420.97" y2="418.5">
                            <stop style="stop-color:#06b6d4;stop-opacity:1" offset="0%"></stop>
                            <stop style="stop-color:#67e8f9;stop-opacity:1" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient id="logo_svg__d" gradientUnits="userSpaceOnUse" x1="377.89" y1="331.28" x2="377.89" y2="418.5">
                            <stop style="stop-color:#06b6d4;stop-opacity:1" offset="0%"></stop>
                            <stop style="stop-color:#67e8f9;stop-opacity:1" offset="100%"></stop>
                        </linearGradient>
                        <path d="M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z" id="logo_svg__a"></path>
                        <path d="M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z" id="logo_svg__c"></path>
                    </defs>
                        <use xlink:href="#logo_svg__a" fill="url(#logo_svg__b)"></use>
                        s
                        <use xlink:href="#logo_svg__c" fill="url(#logo_svg__d)"></use>
                    </svg>
                </div>
                <div class="hidden h-6 text-2xl font-semibold sm:block">TailwindBlog</div>
            </div>
        </a>
    </div>
    
    <div class="flex items-center text-base leading-5">
        <div class="hidden sm:block">
            <a class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href="/">
                Blog
            </a>
            <a class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href="/">
                Tags
            </a>
            <a class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href="/">
                Projects
            </a>
            <a class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href="/">
                About
            </a>
        </div>
        <button aria-label="Toggle Dark Mode" type="button" class="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4" on:click="{toggleDarkMode}">
            <svg class="text-gray-900 dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
        </button>
        
        <div class="sm:hidden">
                <button type="button" class="w-8 h-8 py-1 ml-1 mr-1 rounded" aria-label="Toggle Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div class="fixed top-0 left-0 z-10 w-full h-full duration-300 ease-in-out transform translate-x-full bg-gray-200 opacity-95 dark:bg-gray-800">
                    <div class="flex justify-end">
                        <button type="button" class="w-8 h-8 mr-5 rounded mt-11" aria-label="Toggle Menu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav class="fixed h-full mt-8">
                        <div class="px-12 py-4">
                            <a class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                               href="/">
                                Blog
                            </a>
                        </div>
                        <div class="px-12 py-4">
                            <a class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" href="/">
                                Tags
                            </a>
                        </div>
                        <div class="px-12 py-4">
                            <a class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                               href="/">Projects</a>
                        </div>
                        <div class="px-12 py-4">
                            <a class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                               href="/">
                                About
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
</header>