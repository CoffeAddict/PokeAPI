<template>
    <button
        class="text-lg py-3 px-5 rounded-full text-blue font-bold text-white flex items-center justify-center gap-2.5 transition-colors duration-200 w-fit"
        :class="{
            'bg-poke-red hover:bg-poke-red-dark': !disabled,
            'bg-poke-gray-200': disabled,
        }">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'PokeButton',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
}
</script>