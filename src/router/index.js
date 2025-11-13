import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';
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
  
  // 个人中心（个人信息）
  { path: '/Personal_Center', component: () => import('../views/Account/Personal_Center.vue')},// 个人中心
  { path: '/Personal_nformation', component: () => import('../views/Account/Personal_nformation.vue')},// 个人信息
  { path: '/Privacy_Center', component: () => import('../views/Account/Privacy_Center.vue')},// 隐私中心
  { path: '/Binding_Authorization', component: () => import('../views/Account/Binding_Authorization.vue')},// 绑定授权
  { path: '/Help_Center', component: () => import('../views/Account/Help_Center.vue')},// 帮助中心
  { path: '/Login_Security', component: () => import('../views/Account/Login_Security.vue')}, // 登录与安全
  { path: '/Change_Password', component: () => import('../views/Account/Change_Password.vue')},// 修改密码
  { path: '/Cancellation_Service', component: () => import('../views/Account/Cancellation_Service.vue')},// 注销服务
  { path: '/ShippingAddress', component: () => import('../views/Account/ShippingAddress.vue')},// 收货地址

  //Xiaomi15_series
  { path: '/Xiaomi15_series', component: () => import('../views/Xiaomi15_series/index.vue')},
  // 商品详情
  { path: '/ProductDetails', component: () => import('../views/ProductDetails/index.vue')},
  // 收货地址页
  // { path: '/ShippingAddress', component: () => import('../views/ShippingAddress/index.vue')},
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
