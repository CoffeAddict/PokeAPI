<template>
  <div>
    <h1 class="mb-5">PokeAPI</h1>
    <p>Count: {{ pokeStore.count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { usePokeStore } from './stores/pokeStore'

export default {
  setup() {
    const pokeStore = usePokeStore()

    const { increment } = pokeStore

    return { increment, pokeStore }
  }
}
</script>
