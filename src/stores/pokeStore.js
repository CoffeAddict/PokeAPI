import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getPokemonByName, getPokemonList } from '../services/pokeService'
import { formatPokemonData, formatPokemonListData } from '../utils/pokemonFormatter'

export const usePokeStore = defineStore('pokeStore', () => {
    const isLoading = ref(false)
    const loadError = ref(false)

    const pokemonList = ref([])
    const pokemonBookmarks = ref([])
    // TODO: create bookmark functionality

    function setLoading (newValue) {
        isLoading.value = newValue
    }

    function setLoadError (newValue) {
        loadError.value = newValue
    }

    function setPokemonList (data) {
        const formattedData = formatPokemonListData(data)
        pokemonList.value = formattedData
    }

    const loadFriends = async (endpoint) => {
        setLoading(true)
        try {
            const result = await getPokemonList(endpoint)
            setPokemonList(result)
            setLoading(false)
        } catch (error) {
            console.error('Failed to fetch Pokémon data:', error)
            setLoadError(true)
        } finally {
            setLoading(false)
        }
    }

    return { isLoading, loadError, setLoading, loadFriends, setLoadError, pokemonList, pokemonBookmarks }
})