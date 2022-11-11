import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import '@/styles/index.scss'
import router from './router/index'
import vuex from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import components from '@/components/index'

const app = createApp(App)

app.use(router)
app.use(vuex)
app.use(components)
app.use(Antd)
app.mount('#app')
