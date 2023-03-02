import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@gleissonneves/liz-design-token'
import '@/assets/style/tokens.css'
import '@/assets/style/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
