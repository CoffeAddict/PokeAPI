<template>
    <div class="py-[35px] px-[30px] max-w-[630px] mx-auto w-full" v-if="pokeStore.loading === false">
        <SearchBar/>
        <ErrorMessage v-if="pokeStore.loadError === true"/>
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
        <NavBar
            @newMenu="handleNewMenu"
            v-if="pokeStore.loadError === false"/>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref, computed, watch } from 'vue'
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
    setup() {
        const pokeStore = usePokeStore()
        const scrollElement = ref(null)
        const scrollPosition = ref(0)
        const offset = 100

        // Add scroll listener on mount
        onMounted(async () => {
            await pokeStore.loadFriends()
            addScrollListener()
        })

        // Remove scroll listener on unmount
        onUnmounted(() => scrollElement.value?.removeEventListener('scroll', handleScroll))

        // Add scroll listener after loading new friends
        const addScrollListener = () => scrollElement.value?.addEventListener('scroll', handleScroll)

        // Handle scroll event
        const handleScroll = async () => {
            // Don't handle scroll event when displaying bookmarks
            if (pokeStore.currentMenu === 'bookmarks') return

            const el = scrollElement.value

            // Reached bottom
            if (el.scrollTop + el.clientHeight >= el.scrollHeight - offset) {
                // Save scroll position before loading new data
                scrollPosition.value = saveScrollPosition()

                await pokeStore.loadFriends()

                // Restoring scroll position after new data was added
                restoreScrollPosition(scrollPosition.value)

                // Add event listeners to new scroll element instance
                addScrollListener()
            }
        }

        // Add scroll listener after going to all pokemons menu
        const handleNewMenu = async (newValue) => {
            // Clear search results
            pokeStore.clearPokemonList()

            if (newValue === 'all') {
                // Load pokemons
                await pokeStore.loadFriends()

                // Add scroll listener
                addScrollListener()
            }
        }

        const saveScrollPosition = () => scrollElement.value.scrollTop

        const restoreScrollPosition = (position) => scrollElement.value.scrollTop = position

        // Display pokemon list depeneding on current menu
        const pokemonList = computed(() => {
            switch (pokeStore.currentMenu) {
                case 'all':
                    return pokeStore.pokemonListData
                case 'bookmarks':
                    return pokeStore.pokemonListBookmarks
                default:
                    return []
            }
        })

        return { pokeStore, scrollElement, pokemonList, handleNewMenu }
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