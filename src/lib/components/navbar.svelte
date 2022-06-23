<script lang="ts">
    import NavbarLink from "./navbar-link.svelte";
</script>

<nav class="flex flex-col content-center w-full px-6 py-2 font-sans text-center bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">

    <div class="flex flex-row mb-2 sm:mb-0 ">
      <div class="self-center w-10 h-10 mr-2">
        <img class="self-center w-10 h-10" src="/favicon.png" alt="logo">
      </div>
      <div>
        <a href="/" class="font-sans text-2xl font-bold no-underline text-grey-darkest hover:text-blue-dark">
            LogoText
        </a>
        <br>
        <span class="text-xs text-grey-dark">Beautiful New Tagline</span>
      </div>
    </div>
  
    <div class="self-center sm:mb-0">
        <NavbarLink text='About Us' href='/about' />
    </div>
  </nav>