<template>
    <div>

        <header>
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/products" class="font-bold"> Nuxt Demo Products </NuxtLink>
            </nav>
        </header>
    </div>

    <div class="container mx-auto p-4">
        <slot />
    </div>


        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li> <NuxtLink to="/"> Home </NuxtLink> </li>
                <li> <NuxtLink to="/about"> About </NuxtLink> </li>
                <li> <NuxtLink to="/badLink"> Bad Link </NuxtLink> </li>
                <li> <NuxtLink to="/products"> Products </NuxtLink> </li>
            </ul>
        </footer>
</template>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
    .router-link-exact-active {
        color: rgb(15, 229, 211);
    }
</style>

