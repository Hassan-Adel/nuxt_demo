<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold"> Nuxt Demo </NuxtLink>
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/"> Home </NuxtLink> </li>
                    <li> <NuxtLink to="/about"> About </NuxtLink> </li>
                    <li> <NuxtLink to="/products" class="btn"> Products </NuxtLink> </li>
                </ul>
            </nav>
        </header>
    </div>
    
    <div class="container mx-auto p-4">
        <slot />
    </div>

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

