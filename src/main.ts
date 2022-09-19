import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import ui from './ui'
createApp(App).use(router).use(createPinia()).use(ui).mount('#app')
