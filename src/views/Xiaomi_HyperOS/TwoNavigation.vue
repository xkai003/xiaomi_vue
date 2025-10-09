<!-- 第二层导航--------【TwoNavigation文件】 -->
<template>
    <div class="TopNavigation">
      <div class="TopNavigation-one">
        <!-- loge -->
         <div class="loge">
            <img src="/src/assets/Xiaomi_HyperOS/logo.svg" alt="">
         </div>
        
        <!-- 导航 -->
         <div>
            <ul>
                <li v-for="item in list" :key="item.id">
                    <a href="">{{ item.name }}</a>
                </li>
            </ul>
         </div>
        
        <!-- 预约试驾 -->
        <div class="yysj">
            <a href="">
                <svg t="1741939679842" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8416"><path d="M66.488889 211.781818h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485 0-27.397172-22.768485-49.648485-50.980202-49.648485H66.488889C38.341818 112.484848 15.508687 134.723232 15.508687 162.133333s22.833131 49.648485 50.980202 49.648485z m891.009293 248.242424H66.488889C38.277172 460.024242 15.508687 482.262626 15.508687 509.672727s22.768485 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.410101-22.923636-49.648485-50.993131-49.648485z m0 351.63798H66.488889c-28.134141 0-50.980202 22.238384-50.980202 49.648485s22.833131 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.397172-22.781414-49.648485-50.993131-49.648485z m0 0" p-id="8417"></path></svg>
            </a>
        </div>
        
      </div>
    </div>
  </template>
  
<script>
export default {
data() {
    return {
    list: [
        { id: 1, name: "首页" },
        { id: 2, name: "跨端智联" },
        { id: 3, name: "隐私" },
        { id: 4, name: "无障碍" },
        { id: 5, name: "小米社区" },
        { id: 6, name: "云服务" },
        { id: 7, name: "小米商城" }
    ]
    };
}
};
</script>

<style scoped>
.TopNavigation{
    width: 100%;
    height: 60px;
    background-color:rgb(82, 64, 64)
}
.TopNavigation .TopNavigation-one{
    width: 100%;
    /* 让TopNavigation-one 的子代平摊空间 */
    display: flex;
    justify-content: space-between;
    /* background-color: rgb(73, 72, 72); */
}
/* loge */
.TopNavigation .TopNavigation-one .loge{
    width: 200px;
    height: 60px;
    margin-left: 60px;/* loge与左边的距离 */
    display: flex;
    align-items: center;/* 垂直居中 */ 
    /* background-color: #c7e991; */
}
.TopNavigation .TopNavigation-one .loge img{
    width: 100%;
    height: 35px;
    /* background-color: #d36b6b; */
}
/* loge end*/

/* 导航 */
.TopNavigation .TopNavigation-one li{
    list-style: none;
    float: left;/* 各li标签横向排放 */
    margin-left: 90px;/* 各li标签距离 */
    /* background-color: #fff; */
}
/* a标签 */
.TopNavigation .TopNavigation-one li a{
    display: block;
    color: rgb(243, 243, 243);
    text-decoration: none;
    font-size:19px;
    /* background-color: #e07373; */
}
/* 鼠标经过a标签时a标签下划线 */
.TopNavigation .TopNavigation-one li a:hover{
    color: rgb(109, 109, 243);
}
/* 导航 end*/

/* 预约试驾 */
.TopNavigation .TopNavigation-one .yysj{
    width: 200px;
    /* background-color: #dd4b4b; */
    display: flex;
    align-items: center;
}
.TopNavigation .TopNavigation-one .yysj a{
    margin-left: 20px;
    color: rgb(243, 243, 243);
    text-decoration: none;
    font-size:19px;
    /* background-color: #419fec; */
}
.TopNavigation .TopNavigation-one .yysj a .icon{
    width: 30px;
} 
/* 预约试驾 end */
</style>