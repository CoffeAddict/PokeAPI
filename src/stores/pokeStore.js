import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeStore = defineStore('pokeStore', () => {
    const isLoading = ref(false)

    const count = ref(0)

    function increment () {
        count.value++
    }

    function startLoading () {
        isLoading.value = true
    }

    function stopLoading () {
        isLoading.value = false
    }

    return { isLoading, count, increment, startLoading, stopLoading }
})