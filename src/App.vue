<template>
  <div>
    <WelcomeMessage v-if="currentScreen === 'welcome'" @initApp="handleInitApp"/>
    <LoadingSpinner v-if="pokeStore.isLoading === true" />
    <PokemonList v-if="currentScreen === 'pokemon'" />
  </div>
</template>

<script>
import { ref } from 'vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import WelcomeMessage from './components/WelcomeMessage.vue'
import PokemonList from './components/PokemonList.vue'
import { usePokeStore } from './stores/pokeStore'
// import { getPokemonByName, getPokemonList } from './services/pokeService'

export default {
  components: {
    LoadingSpinner,
    WelcomeMessage,
    PokemonList,
  },
  setup() {
    const pokeStore = usePokeStore()

    const currentScreen = ref('welcome')

    const { increment } = pokeStore

    // getPokemonByName().then(data => {
    //   console.log(data)
    // })

    // getPokemonList().then(data => {
    //   console.log(data)
    // })

    const handleInitApp = () => {
      currentScreen.value = 'pokemon'
      pokeStore.startLoading()
    }

    return { increment, pokeStore, handleInitApp, currentScreen }
  }
}
</script>
