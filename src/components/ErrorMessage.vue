<template>
    <div class="w-full flex flex-col justify-center items-center pt-[50px]">
    <h2 class="text-3xl font-bold mb-2.5">Uh-oh!</h2>
    <p class="text-poke-dark-gray text-xl mb-[25px]">You look lost on your journey!</p>
    <!-- TODO: reset search results -->
    <PokeButton>
        Go back home
    </PokeButton>
</div>
</template>

<script>
export default {
    name: 'ErrorMessage',
    setup() {
        
    },
}
</script>