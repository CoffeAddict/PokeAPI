<template>
    <div class="py-[35px] px-[30px] max-w-[630px] mx-auto w-full" v-if="pokeStore.isLoading === false">
        <!-- Search bar -->
        <SearchBar/>
        <ErrorMessage v-if="pokeStore.loadError === true"/>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { usePokeStore } from '../stores/pokeStore'
import PokeIcons from './PokeIcons.vue'
import SearchBar from './SearchBar.vue'
import ErrorMessage from './ErrorMessage.vue'

export default {
    name: 'PokemonList',
    components: {
        PokeIcons,
        ErrorMessage,
        SearchBar,
    },
    setup() {
        const pokeStore = usePokeStore()

        onMounted(() => { pokeStore.loadFriends() })

        return { pokeStore }
    },
}
</script>

<style scoped>
.search-bar {
    box-shadow: 0px 2px 10px 0px #0000000A;
}
</style>