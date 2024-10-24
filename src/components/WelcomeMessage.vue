<template>
    <div class="py-[70px]">
        <WelcomeImage class="mx-auto w-fit mb-[60px]"/>
        <div class="p-[30px] flex flex-col">
            <h1 class="text-center text-[26px] font-bold mb-[30px]">Welcome to Pokédex</h1>
            <p class="text-center text-poke-dark-gray text-lg leading-[27px] mb-[50px] max-w-[570px] mx-auto">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
            <PokeButton class="mx-auto" @click="initApp">
                Get Started
            </PokeButton>
        </div>
    </div>
</template>

<script>
import WelcomeImage from './WelcomeImage.vue'

export default {
    name: 'WelcomeMessage',
    components: {
        WelcomeImage,
    },
    setup(props, { emit }) {
        const initApp = () => {
            emit('initApp')
        }

        return { initApp }
    }
}
</script>
