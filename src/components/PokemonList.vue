<template>
    <div class="py-[35px] px-[30px] max-w-[630px] mx-auto w-full" v-if="pokeStore.loading === false">
        <SearchBar/>
        <ErrorMessage
            @resetApp="handleResetApp"
            v-if="pokeStore.loadError === true"/>
        <div
            v-if="pokeStore.loadError === false"
            class="flex flex-col mt-[40px] pokelist-container overflow-y-auto"
            ref="scrollElement">
            <PokeCard
                v-for="pokemon in pokemonList"
                :key="pokemon.id"
                :name="pokemon.name"/>
         </div>
         <PokeModal v-if="pokeStore.showModal === true"/>
        <NavBar v-if="pokeStore.loadError === false"/>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { usePokeStore } from '../stores/pokeStore'
import PokeCard from './PokeCard.vue'
import PokeIcons from './PokeIcons.vue'
import SearchBar from './SearchBar.vue'
import NavBar from './NavBar.vue'
import ErrorMessage from './ErrorMessage.vue'
import PokeModal from './PokeModal.vue'

export default {
    name: 'PokemonList',
    components: {
        PokeCard,
        PokeIcons,
        ErrorMessage,
        SearchBar,
        NavBar,
        PokeModal
    },
    setup(props, {emit}) {
        const pokeStore = usePokeStore()

        onMounted(async () => await pokeStore.loadFriends())

        // Display pokemon list depeneding on current menu
        const pokemonList = computed(() => {
            const list = pokeStore.currentMenu === 'bookmarks'
                ? pokeStore.pokemonListBookmarks
                : pokeStore.pokemonListData

            return !!pokeStore.searchQuery.length ? list.filter(pokemon => pokemon.name.toLowerCase().includes(pokeStore.searchQuery)) : list
        })

        const handleResetApp = () => emit('resetApp')

        return { pokeStore, pokemonList, handleResetApp }
    },
}
</script>

<style scoped>
.search-bar {
    box-shadow: 0px 2px 10px 0px #0000000A;
}

.pokelist-container {
    /* screen height - search bar height - container padding - margin-top - navbar height */
    max-height: calc(100vh - 56px - (35px * 2) - 40px - 80px);
}
</style>