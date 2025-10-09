import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  //如果文件【TopNavigation.vue】中导航的路径为 "Official_Website" 那么就跳转到 '../views/Official_Website/index.vue'文件
  //小米官网
  { path: '/Official_Website', component: () => import('../views/Official_Website/index.vue') },
  //小米商城
  { path: '/', component: () => import('../views/index/index.vue') },
  //小米澎湃OS
  { path: '/Xiaomi_HyperOS', component: () => import('../views/Xiaomi_HyperOS/index.vue')},
  //小米汽车
  { path: '/Xiaomi_Car', component: () => import('../views/Xiaomi_Car/index.vue')},
  //云服务
  { path: '/Cloud_Services', component: () => import('../views/Cloud_Services/index.vue')},
  //登录
  { path: '/login', component: () => import('../views/login_register/index.vue')},
  //注册
  { path: '/register', component: () => import('../views/login_register/register.vue')},
  //Xiaomi15_series
  { path: '/Xiaomi15_series', component: () => import('../views/Xiaomi15_series/index.vue')},
  // 购物车
  { path: '/Shopping_Cart', component: () => import('../views/Shopping_Cart/index.vue')},
  // 全部商品分类
  { path: '/All_products', component: () => import('../views/All_products/index.vue')},
  // 小米手机
  { path: '/Xiaomi_phone', component: () => import('../views/Xiaomi_phone/index.vue')},
  // 小米手机-导航
  { path: '/comprehensive', component: () => import('../views/Xiaomi_phone/comprehensive.vue')},
  // 小米手机-新品
  { path: '/New_arrivals', component: () => import('../views/Xiaomi_phone/New_arrivals.vue')},
  // 小米手机-销量
  { path: '/sales_volume', component: () => import('../views/Xiaomi_phone/sales_volume.vue')},
  // 小米手机-价格
  { path: '/Price', component: () => import('../views/Xiaomi_phone/Price.vue')},
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
