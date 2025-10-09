<!-- 第一层导航--------【TopNavigation文件】 -->
<template>
  <!-- 顶部导航 -->
  <div class="TopNavigation" ref="topNav"><!-- 添加ref属性绑定鼠标滑动作 -->
    <div class="TopNavigation-center">
      
      <div class="left">
        <!-- 把a标签改成 <router-link to="/About"></router-link> -->
        <!-- <li><a href="">小米官网</a></li> -->
         
        <!-- 如果文件【TopNavigation.vue】中导航的路径为 "/Official_Website" 那么就跳转到 '../views/Official_Website/index.vue'文件 -->
        <!-- 小米官网 -->
        <li><router-link to="/Official_Website">小米官网</router-link></li>
        <!-- 小米商城 -->
        <li><router-link to="/">小米商城</router-link></li>
        <!-- 小米澎湃OS -->
        <li><router-link to="/Xiaomi_HyperOS">小米澎湃OS</router-link></li>
        <!-- 小米汽车 -->
        <li><router-link to="/Xiaomi_Car">小米汽车</router-link></li>
        <li><router-link to="/Cloud_Services">云服务</router-link></li>
        <li><a href="">loT</a></li>
        <li><a href="">有品</a></li>
        <li><a href="">小爱开放平台</a></li>
        <li><a href="">资质证照</a></li>
        <li>
          <a href="">下载app</a>
          <ul class="sub-nav">
            <div><img src="/src/assets/index/TopNavigation/download.png" alt=""></div>
          </ul>
        </li>
        <li><a href="" style="font-size: x-small; width: 90px;">Select Location</a></li>
      </div>
      <div class="right">
        <!-- 登陆 -->
        <li><router-link to="/login">登录</router-link></li>
        <!-- 注册 -->
        <li><router-link to="/register">注册</router-link></li>
        <li><a href="">信息通知</a></li>
        <li class="button"><router-link to="/Shopping_Cart">购物车</router-link></li>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
  <!-- 顶部导航 end -->
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const topNav = ref(null);

    const handleScroll = () => {
      if (window.scrollY > 35) {
        topNav.value.style.position = "fixed";
        topNav.value.style.top = "0";
        topNav.value.style.width = "100%";
        topNav.value.style.zIndex = "1000"; // 确保导航栏在最上层
        topNav.value.style.background = "black"; // 可能需要背景色，避免透明
      } else {
        topNav.value.style.position = "static";
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { topNav };
  },
};
</script>



<style scoped>
/* 顶部导航 */
.TopNavigation{
    width: 100%;
    height: 35px;
    background-color: black;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out; /* 添加平滑动画 */
}
.TopNavigation .TopNavigation-center{
    width: 80%;
    /* 让TopNavigation-center 的子代平摊空间 */
    display: flex;
    justify-content: space-between;
}
.TopNavigation .TopNavigation-center li{
    list-style: none;
    float: left;/* 各li标签横向排放 */
    margin-top: 8px;
    border-right: 2px solid rgb(54, 54, 54);
    /* background-color: #da8f8f; */
}
.TopNavigation .TopNavigation-center li a{
    display: block;
    width: 80px;
    color: rgb(207, 207, 206);
    text-decoration: none;
    text-align: center;
    font-size:smaller;
}
/* 如果a标签一旦有了router-link-active这个类，就高亮显示 */
.TopNavigation .TopNavigation-center li a.router-link-active{
      color: orange;
}
/* 鼠标经过a标签时字体颜色 */
.TopNavigation .TopNavigation-center li a:hover{
    color: white;
}

/* 二级导航样式 */
/* 确保导航项相对定位，使得二级菜单基于它对齐 */
.TopNavigation li {
    position: relative; /* 让 .sub-nav 以这个元素为基准定位 */
}

/* 二级导航初始隐藏，但保留位置 */
.sub-nav {
    position: absolute;
    left: 0;  /* 让子菜单和父级导航项左侧对齐 */
    top: 100%; /* 让子菜单紧贴主导航的底部 */
    background: white;
    border: 1px solid black;/* 二级导航的边框 */
    padding: 5px;/* 二级导航的内边距 */
    opacity: 0;  /* 初始隐藏 */
    display: none;/* 移除项目 */
}

/* 鼠标悬停时显示二级导航 */
.TopNavigation li:hover .sub-nav {
    opacity: 1;
    display: block;/* 显示项目 */
}

/* 子菜单图片样式 */
.sub-nav div img {
    width: 100px;
    height: 100px;
}
/* 二级导航样式 end */


/* 购物车按钮 */
.TopNavigation .TopNavigation-center .right .button {
    background-color: rgb(161, 161, 161);
    margin-top: 0px;
    width: 80px;
    height: 35px;
    font-size:smaller;
    line-height: 35px;
}

.TopNavigation .TopNavigation-center .right .button:hover{
    color: #fff;
}
/* 购物车按钮 end*/
/*顶部导航end*/
</style>