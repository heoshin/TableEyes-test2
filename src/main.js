import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from "axios";
// import VueAxios from 'vue-axios';

const app = createApp(App);

app.config.globalProperties.axios = axios;
// app.config.globalProperties.VueAxios = VueAxios;

axios.defaults.withCredentials = true;

app.use(router).mount('#app')
