import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue';
import routes from './routes.js';
import './public-path';

let instance = null;
function render(props = {}) {
  if (instance) return;
  const { container } = props;
  const router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/micro-vue/' : '/child/micro-vue/'),
    routes,
  })
  instance = createApp(App);

  instance.use(router);
  instance.use(ElementPlus);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('vue子应用 bootstrap');
}
export async function mount(props) {
  console.log('vue子应用 mount');
  render(props);
}
export async function unmount() {
  console.log('vue子应用 unmount');
  instance.$destroy?.();
  instance = null;
}
