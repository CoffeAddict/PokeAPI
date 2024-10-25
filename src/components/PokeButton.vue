<template>
    <button
        class="text-lg leading-[21.6px] py-2 min-h-[44px] px-[20px] rounded-full text-blue font-bold text-white flex items-center justify-center gap-2.5 transition-colors duration-200 w-fit"
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