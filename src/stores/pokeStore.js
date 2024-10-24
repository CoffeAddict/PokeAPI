import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getPokemonByName, getPokemonList } from '../services/pokeService'

export const usePokeStore = defineStore('pokeStore', () => {
    const isLoading = ref(false)
    const loadError = ref(false)

    const pokemonList = ref([])
    const pokemonBookmarks = ref([])

    function setLoading (newValue) {
        isLoading.value = newValue
    }

    function setLoadError (newValue) {
        loadError.value = newValue
    }

    function setData (data) {
        // pokemonList.value = data
        // TODO: parse data before saving it
        console.log(data);
    }

    const loadFriends = async (endpoint) => {
        setLoading(true)
        try {
            const result = await getPokemonList(endpoint)
            setLoading(false)
            setLoadError(true)
            // setData(result)
        } catch (error) {
            console.error('Failed to fetch Pokémon data:', error)
            setLoadError(true)
        } finally {
            setLoading(false)
        }
    }

    return { isLoading, loadError, setLoading, loadFriends, setLoadError, pokemonList, pokemonBookmarks }
})