<template>
    <div class="min-h-[60px] py-2 pr-2.5 pl-5 mb-2.5 bg-white rounded-[5px] flex justify-between items-center fill-poke-gray-100 hover:cursor-pointer hover:bg-neutral-200 transition-all duration-200">
        <h3
            @click="loadPokemonDetails"
            class="w-full h-full text-[22px] leading-[44px] text-poke-gray-400 capitalize">
            {{ name }}
        </h3>
        <PokeBookmark :key="name" :name="name"/>
    </div>
</template>

<script>
import { usePokeStore } from '../stores/pokeStore'
import PokeBookmark from './PokeBookmark.vue'
export default {
    name: 'PokeCard',
    components: {
        PokeBookmark,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup (props) {
        const pokeStore = usePokeStore()

        const loadPokemonDetails = async () => {
            await pokeStore.loadFriendByName(props.name)
            pokeStore.setShowModal(true)
        }

        return { loadPokemonDetails }
    }
}
</script>