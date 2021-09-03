import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.axios = axios;
axios.defaults.withCredentials = true;

import store from './store';

app.use(router).use(store).mount('#app')
