<template>
    <div
        @click="handleBookmark"
        class="bg-neutral-100 rounded-[50%] pb-[2px] flex items-center justify-center hover:opacity-50 transition-all duration-200 poke-card w-[44px] h-[44px]">
        <PokeIcons :icon="'star'" :color="currentColor"/>
    </div>
</template>

<script>
import { computed } from 'vue'
import { usePokeStore } from '../stores/pokeStore'
export default {
    name: 'PokeBookmark',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const pokeStore = usePokeStore()

        const currentColor = computed(() => {
            return isBookmarked.value ? 'fill-poke-gray-100' : 'fill-poke-yellow'
        })

        const isBookmarked = computed(() => {
            return pokeStore.pokemonListBookmarks.findIndex(bookmark => bookmark.name === props.name) === -1
        })

        const handleBookmark = () => pokeStore.toggleBookmark(props.name)

        return { isBookmarked, currentColor, handleBookmark }
    },
}
</script>

<style>
.poke-card svg {
    width: 26px;
    height: 26px;
}
</style>