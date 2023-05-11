<script lang="ts">
    import 'purecss'
    import '../app.css'
</script>

<div id="layout" class="pure-g">
    <!-- Menu toggle -->
    <a href="#menu" id="menuLink" class="menu-link">
        <!-- Hamburger icon -->
        <span></span>
    </a>

    <aside id="menu" class="pure-u-1-4">
        <div class="pure-menu">
            <a class="pure-menu-heading" href="#company">Company</a>

            <ul class="pure-menu-list">
                <li class="pure-menu-item"><a href="/" class="pure-menu-link">Home</a></li>
                <li class="pure-menu-item"><a href="/about" class="pure-menu-link">About</a></li>

                <li class="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#" class="pure-menu-link">Services</a>
                </li>

                <li class="pure-menu-item"><a href="#contact" class="pure-menu-link">Contact</a></li>
            </ul>
        </div>
    </aside>

    <main id="main" class="pure-u-3-4">
        <slot></slot>
    </main>
</div>
