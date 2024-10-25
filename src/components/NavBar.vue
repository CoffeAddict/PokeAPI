<template>
    <nav class="py-[18px] px-[30px] flex justify-between items-center bg-white absolute bottom-0 left-0 right-0 z-10">
        <ul class="flex w-full gap-[15px] mx-auto max-w-[570px]">
            <li class="flex-1">
                <PokeButton
                    class="w-full"
                    :disabled="pokeStore.currentMenu !== 'all'"
                    @click="setMenu('all')">
                    <PokeIcons
                        :icon="'list'"
                        :color="'fill-white'"/>
                    All
                </PokeButton>
            </li>
            <li class="flex-1">
                <PokeButton
                    class="w-full"
                    :disabled="pokeStore.currentMenu !== 'bookmarks'"
                    @click="setMenu('bookmarks')">
                    <PokeIcons
                        :icon="'star'"
                        :color="'fill-white'"/>
                    Favorites
                </PokeButton>
            </li>
        </ul>
    </nav>
</template>

<script>
import { usePokeStore } from '../stores/pokeStore'
export default {
    setup() {
        const pokeStore = usePokeStore()

        const setMenu = (newValue) => {
            pokeStore.setMenu(newValue)
        }

        return { pokeStore, setMenu }
    },
}
</script>