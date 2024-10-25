<template>
    <div class="flex items-center rounded-[5px] p-4 gap-2.5 bg-white search-bar">
        <PokeIcons :icon="'search'" :color="'fill-poke-gray-200'"/>
        <input
            @input="handleInput(searchQuery)"
            v-model="searchQuery"
            class="w-full outline-none"
            type="text"
            placeholder="Search">
    </div>
</template>

<script>
import { ref } from 'vue'
import { debounce } from 'lodash'
import { usePokeStore } from '../stores/pokeStore'

export default {
    name: 'SearchBar',
    setup() {
        const pokeStore = usePokeStore()
        const searchQuery = ref('')

        // Wait for 300ms before sending the request
        const handleInput = debounce((value) => {
            value = value.trim()
            searchQuery.value = value
            if (value) pokeStore.searchFriend(value)
        }, 1000)

    return { handleInput, pokeStore, searchQuery }
    },
}
</script>