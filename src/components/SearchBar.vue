<template>
    <div class="flex items-center rounded-[5px] p-4 gap-2.5 bg-white search-bar">
        <PokeIcons :icon="'search'" :color="'fill-poke-light-gray'"/>
        <input class="w-full outline-none" type="text" placeholder="Search">
        <!-- TODO: add search funtionality with a debounce -->
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    setup() {
        
    },
}
</script>