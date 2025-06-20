import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
import './assets/styles.css'

// Criar aplicação Vue
const app = createApp(App)

// Usar router
app.use(router)

// Montar aplicação
app.mount('#app')

