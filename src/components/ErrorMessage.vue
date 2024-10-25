<template>
    <div class="w-full flex flex-col justify-center items-center pt-[50px]">
    <h2 class="text-3xl font-bold mb-2.5">Uh-oh!</h2>
    <p class="text-poke-gray-300 text-xl mb-[25px]">You look lost on your journey!</p>
    <PokeButton @click="resetApp">
        Go back home
    </PokeButton>
</div>
</template>
<script>
export default {
    name: 'ErrorMessage',
    setup(props, {emit}) {
        const resetApp = () => emit('resetApp')
        return { resetApp }
    },
}
</script>