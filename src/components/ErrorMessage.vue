<template>
    <div class="w-full flex flex-col justify-center items-center pt-[50px]">
    <h2 class="text-3xl font-bold mb-2.5">Uh-oh!</h2>
    <p class="text-poke-gray-300 text-xl mb-[25px]">You look lost on your journey!</p>
    <PokeButton @click="resetSearchResults">
        Go back home
    </PokeButton>
</div>
</template>
<script>
import { usePokeStore } from '../stores/pokeStore'

export default {
    name: 'ErrorMessage',
    setup() {
        const resetSearchResults = usePokeStore().resetSearchResults
        return { resetSearchResults }
    },
}
</script>