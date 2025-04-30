// Vue
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
// UI library
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// style
import '@acab/reset.css';
import './assets/scss/main.scss';

const app = createApp(App);

// iconの登録
// https://element-plus.org/en-US/component/icon#installation
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(ElementPlus);
app.mount('#app');
