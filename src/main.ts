import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import '@/styles/index.scss'
import router from './router/index'
import vuex from './store/index'

const app = createApp(App)

app.use(router)
app.use(vuex)
app.mount('#app')
