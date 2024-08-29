// main.js

import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from './plugins/FontAwesome'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
