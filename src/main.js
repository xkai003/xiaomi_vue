import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 🚨 确保路由文件正确

const app = createApp(App);
app.use(router); // 🚨 确保路由已加载
app.mount('#app');
