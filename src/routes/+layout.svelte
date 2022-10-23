<div class="container p-2 mx-auto">
    <div class="flex flex-row flex-wrap py-4">
        <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
            <div class="sticky top-0 p-4 bg-white rounded-xl w-full">
                <ul class="nav flex flex-col overflow-hidden">
                    <li class="nav-item">
                        <a class="nav-link text-purple-800 hover:text-purple-600 truncate" href="/#home">
                            <span class="fa fa-home mr-2"></span> Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-purple-800 hover:text-purple-600 truncate" href="/#orders">
                            <span class="fa fa-list-alt mr-2"></span> Orders </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-purple-800 hover:text-purple-600" href="/#products">
                            <span class="fa fa-cart-plus mr-2"></span> Products </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-purple-800 hover:text-purple-600" href="/#customers">
                            <span class="fa fa-user mr-2"></span> Customers </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-purple-800 hover:text-purple-600" href="/#reports">
                            <span class="fa fa-chart-bar mr-2"></span> Reports </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-purple-800 hover:text-purple-600" href="/#int">
                            <span class="fa fa-layer-group mr-2"></span> Integrations </a>
                    </li>
                </ul>
            </div>
        </aside>
        <main class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <slot></slot>
        </main>
    </div>
</div>
<footer class="bg-black mt-auto">
    <div class="container p-4 text-white mx-auto">
        <h1 class="text-2xl" >Footer</h1>
        <div class="flex">
            <div class="flex-grow flex flex-col">
                <a href="/#home">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex-grow flex flex-col">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex-grow flex flex-col">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex-grow flex flex-col">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
        </div>
        <div class="text-right text-xs py-4">
            <a href="https://github.com/Tenlern">Tenlern</a>
        </div>
    </div>
</footer>