<template>
    <div class="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center z-20 px-[30px]">
        <div
            class="relative bg-no-repeat bg-cover bg-center w-full py-20 h-fit flex justify-center items-center max-w-[570px] rounded-t-[5px]"
            :style="{ backgroundImage: `url(${background})` }">
            <img v-if="pokemonDetails" width="180" height="180" :src="pokemonDetails.image" alt="pokemon-image">
            <button @click="handleClose" class="absolute right-[15px] top-[15px]">
                <PokeIcons :icon="'close'"/>
            </button>
        </div>
        <div class="bg-white rounded-b-[5px] px-[25px] py-[20px] w-full max-w-[570px]">
            <ul class="text-poke-gray-300">
                <li class="capitalize pb-[10px] mb-[10px] border-b-[1px] border-poke-white-200">
                    <strong>Name:</strong> {{ pokemonDetails.name }}
                </li>
                <li class="capitalize pb-[10px] mb-[10px] border-b-[1px] border-poke-white-200">
                    <strong>Weight:</strong> {{ pokemonDetails.weight }}
                </li>
                <li class="capitalize pb-[10px] mb-[10px] border-b-[1px] border-poke-white-200">
                    <strong>Height:</strong> {{ pokemonDetails.height }}
                </li>
                <li class="capitalize pb-[10px] mb-[20px] border-b-[1px] border-poke-white-200">
                    <strong>Types:</strong> {{ pokemonTypes }}
                </li>
            </ul>
            <div class="flex justify-between items-center">
                <PokeButton @click="copyDetails">
                    Share with my friends
                </PokeButton>
                <PokeBookmark :key="pokemonDetails.name" :name="pokemonDetails.name"/>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { usePokeStore } from '../stores/pokeStore'
import PokeBookmark from './PokeBookmark.vue'
import pokemonBackground from '../assets/images/pokemon-background.png'
export default {
    name: 'PokeModal',
    components: {
        PokeBookmark,
    },
    setup() {
        const pokeStore = usePokeStore()

        const handleClose = () => pokeStore.setShowModal(false)

        const background = ref(pokemonBackground)

        const copyDetails = () => navigator.clipboard.writeText(`${pokeStore.pokemonDetails.name} - ${pokemonTypes.value}`)

        const pokemonDetails = computed(() => pokeStore.pokemonDetails)

        const pokemonTypes = computed(() => {
            return pokeStore.pokemonDetails ?
            pokeStore.pokemonDetails.types.join(', ')
            : null
        })

        return { handleClose, background, pokemonDetails, pokemonTypes, copyDetails }
    },
}
</script>