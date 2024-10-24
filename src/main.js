import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import PokeButton from './components/PokeButton.vue'
import PokeIcons from './components/PokeIcons.vue'

import './tailwind.css'
import './style.scss'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .component('PokeButton', PokeButton)
    .component('PokeIcons', PokeIcons)
    .mount('#app')
