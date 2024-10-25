import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getPokemonByName, getPokemonList } from '../services/pokeService'
import { formatPokemonSearchData, formatPokemonListData } from '../utils/pokemonFormatter'

export const usePokeStore = defineStore('pokeStore', () => {
    const loading = ref(false)
    const loadError = ref(false)
    const nextPageAvailable = ref(false)
    const currentMenu = ref('all') // all | bookmarks

    const pokemonListData = ref([])
    const pokemonListBookmarks = ref([])

    function setLoading (newValue) {
        loading.value = newValue
    }

    function setLoadError (newValue) {
        loadError.value = newValue
    }

    // Format request response and attach to pokemonListData
    function setPokemonList (data) {
        const formattedData = formatPokemonListData(data)
        pokemonListData.value = [ ...pokemonListData.value, ...formattedData.results ]
        nextPageAvailable.value = formattedData.next
    }

    function clearPokemonList () {
        pokemonListData.value = []
    }

    // Format search request response and attach to pokemonListData
    function setPokemonListSearchResult (data) {
        const formattedData = formatPokemonSearchData(data)
        pokemonListData.value = formattedData.results
        nextPageAvailable.value = formattedData.next
    }

    function resetSearchResults () {
        pokemonListData.value = []
        loadError.value = false
        loading.value = false
        loadFriends()
    }

    // Set current menu only if it's a valid menu
    function setMenu (newValue) {
        if (['all', 'bookmarks'].includes(newValue)) currentMenu.value = newValue
    }

    // Load pokemons from the API
    const loadFriends = async () => {
        setLoading(true)
        try {
            const result = await getPokemonList(pokemonListData.value.length)
            setPokemonList(result)
            setLoading(false)
        } catch (error) {
            console.error('Failed to fetch Pokémon data:', error)
            setLoadError(true)
        } finally {
            setLoading(false)
        }
    }

    // Search pokemon by name from the API
    const searchFriend = async (query) => {
        setLoading(true)

        try {
            const result = await getPokemonByName(query)
            setPokemonListSearchResult(result)
            setLoadError(false)
            setLoading(false)
        } catch (error) {
            console.error('Failed to fetch Pokémon data:', error)
            setLoadError(true)
        } finally {
            setLoading(false)
        }
    }

    // Toggle bookmarks items
    const toggleBookmark = (pokemonName) => {
        let bookmarks = pokemonListBookmarks.value
        const index = bookmarks.findIndex(bookmark => bookmark.name === pokemonName)

        if (index === -1) {
            bookmarks.push({ name: pokemonName })
        } else {
            bookmarks = bookmarks.filter(bookmark => bookmark.name !== pokemonName)
        }

        pokemonListBookmarks.value = bookmarks
    }

    return {
        loading,
        loadError,
        pokemonListData,
        pokemonListBookmarks,
        nextPageAvailable,
        currentMenu,
        setLoading,
        setLoadError,
        setMenu,
        loadFriends,
        searchFriend,
        resetSearchResults,
        clearPokemonList,
        toggleBookmark,
    }
})