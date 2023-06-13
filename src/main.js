import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router/router.js';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.mount('#app');

