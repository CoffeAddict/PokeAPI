<template>
  <div class="bg-poke-white-100 h-full">
    <WelcomeMessage v-if="currentScreen === 'welcome'" @initApp="handleInitApp"/>
    <LoadingSpinner v-show="pokeStore.loading === true" />
    <PokemonList v-if="currentScreen === 'pokemon'" />
  </div>
</template>

<script>
import { ref } from 'vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import WelcomeMessage from './components/WelcomeMessage.vue'
import PokemonList from './components/PokemonList.vue'
import { usePokeStore } from './stores/pokeStore'

export default {
  components: {
    LoadingSpinner,
    WelcomeMessage,
    PokemonList,
  },
  setup() {
    const pokeStore = usePokeStore()
    const currentScreen = ref('welcome')

    const handleInitApp = () => {
      pokeStore.setLoading(true)
      currentScreen.value = 'pokemon'
    }

    return { pokeStore, handleInitApp, currentScreen }
  }
}
</script>
