import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import './assets/tailwind.css'
import store from './store'

let app = createApp(App)

app.use(router).use(store).mount('#app');
