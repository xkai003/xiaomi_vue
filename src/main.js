import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 🚨 确保路由文件正确
// 引入Element Plus库
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router); // 🚨 确保路由已加载
app.use(ElementPlus);
app.mount('#app');
