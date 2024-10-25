import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getPokemonByName, getPokemonList } from '../services/pokeService'
import { formatPokemonListData, formatPokemonDetailsData } from '../utils/pokemonFormatter'

export const usePokeStore = defineStore('pokeStore', () => {
    const loading = ref(false)
    const loadError = ref(false)
    const currentMenu = ref('all') // all | bookmarks
    const searchQuery = ref('')

    const pokemonListData = ref([])
    const pokemonListBookmarks = ref([])
    const pokemonDetails = ref(null)

    const showModal = ref(false)

    function setLoading (newValue) {
        loading.value = newValue
    }

    function setLoadError (newValue) {
        loadError.value = newValue
    }

    // Format request response and attach to pokemonListData
    function setPokemonList (data) {
        const formattedData = formatPokemonListData(data)
        pokemonListData.value = formattedData.results
    }

    // Format pokemon details request response and update pokemonDetails
    function setPokemonDetails (data) {
        const formattedData = formatPokemonDetailsData(data)
        pokemonDetails.value = formattedData
    }

    function setShowModal (newValue) {
        showModal.value = newValue
    }

    // Set current menu only if it's a valid menu
    function setMenu (newValue) {
        if (['all', 'bookmarks'].includes(newValue)) {
            setSearchQuery('')
            currentMenu.value = newValue
        }
    }

    const setSearchQuery = (query) => {
        searchQuery.value = query
    }

    // Load pokemons from the API
    const loadFriends = async (search) => {
        setLoading(true)
        try {
            const result = await getPokemonList(pokemonListData.value.length, search)
            setPokemonList(result)
            setLoading(false)
        } catch (error) {
            console.error('Failed to fetch Pokémon data:', error)
            setLoadError(true)
        } finally {
            setLoading(false)
        }
    }

    // Load pokemon details from the API
    const loadFriendByName = async (name) => {
        try {
            const result = await getPokemonByName(name)
            setPokemonDetails(result)
            setLoadError(false)
        } catch (error) {
            console.error('Failed to fetch Pokémon data:', error)
            setLoadError(true)
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
        searchQuery,
        pokemonListData,
        pokemonListBookmarks,
        pokemonDetails,
        currentMenu,
        showModal,
        setLoading,
        setLoadError,
        setMenu,
        setShowModal,
        setSearchQuery,
        loadFriends,
        loadFriendByName,
        toggleBookmark,
    }
})