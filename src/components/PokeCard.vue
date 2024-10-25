<template>
    <div class="py-2 pr-2.5 pl-5 mb-2.5 bg-white rounded-[5px] flex justify-between items-center fill-poke-gray-100 hover:cursor-pointer hover:bg-neutral-200 transition-all duration-200">
        <h3 class="text-[22px] text-poke-gray-400 capitalize">{{ name }}</h3>
        <div
            @click="handleBookmark"
            class="bg-neutral-100 rounded-[50%] p-[9px] hover:opacity-50 transition-all duration-200">
            <PokeIcons :icon="'star'" :color="currentColor"/>
        </div>
    </div>
</template>

<script>
import { usePokeStore } from '../stores/pokeStore'
import { computed } from 'vue'

export default {
    name: 'PokeCard',
    props: {
        name: {
            type: String,
            required: true,
        },
        isBookmarked: {
            type: Boolean,
            default: false,
        }
    },
    setup (props) {
        const pokeStore = usePokeStore()

        const handleBookmark = () => pokeStore.toggleBookmark(props.name)

        const isBookmarked = computed(() => {
            return pokeStore.pokemonListBookmarks.findIndex(bookmark => bookmark.name === props.name) === -1
        })

        const currentColor = computed(() => {
            return isBookmarked.value ? 'fill-poke-gray-100' : 'fill-poke-yellow'
        })

        return { handleBookmark, isBookmarked, currentColor }
    }
}
</script>