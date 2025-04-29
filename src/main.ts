// Vue
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
// UI library
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// style
import '@acab/reset.css';
import './assets/scss/main.scss';
// import './style.css';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');
