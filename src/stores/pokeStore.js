import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeStore = defineStore('pokeStore', () => {
    // ref()s become state properties
    // computed()s become getters
    // function()s become actions

    const count = ref(0)

    function increment () {
        count.value++
    }

    return { increment }
})