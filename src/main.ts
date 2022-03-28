import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import router from './router/index'
import vuex from './store/index'
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App)

app.use( CKEditor );

app.use(router)
app.use(vuex)
app.mount('#app')
