import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import mitt from 'mitt'
import * as API from './api/http';

const app = createApp(App);

// 全局注册axios
app.provide('$API',API)
app.config.globalProperties.$mitt = new mitt();


app.use(router)
app.mount('#app')
