<template>
    <div v-if="pokeStore.isLoading === false">
        Loaded
    </div>
</template>

<script>
import { usePokeStore } from '../stores/pokeStore'

export default {
    name: 'PokemonList',
    setup() {
        const pokeStore = usePokeStore()

        onMounted(() => {
            // pokeStore.loadFriends()
        })

        return { pokeStore }
    },
}
</script>