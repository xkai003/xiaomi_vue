<!-- 第二层导航--------【TwoNavigation文件】 -->
<template>
    <div class="TopNavigation">
      <div class="TopNavigation-center">
        <!-- loge -->
         <div class="loge">
            <img src="/src/assets/index/TopNavigation/logo.jpg" alt="">
         </div>
        
        <!-- 导航 -->
         <div>
            <ul>
                <li v-for="item in list" :key="item.id">
                    <a href="">{{ item.name }}</a>
                </li>
            </ul>
         </div>
        
        <!-- 搜索框 -->
        <div class="input">
            <div class="input-box">
                <input type="text">
                <button>搜索</button>
            </div>
        </div>
        <!--  -->
      </div>
    </div>
  </template>
  
<script>
export default {
data() {
    return {
    list: [
        { id: 1, name: "全部商品分类" },
        { id: 2, name: "Xiaomi手机" },
        { id: 3, name: "REDMI手机" },
        { id: 4, name: "电视" },
        { id: 5, name: "笔记本" },
        { id: 6, name: "平板" },
        { id: 7, name: "家电" },
        { id: 8, name: "路由器" },
        { id: 9, name: "服务中心" },
        { id: 10, name: "社区" }
    ]
    };
}
};
</script>

<style scoped>
.TopNavigation{
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    justify-content: center;
}
/* loge */
.TopNavigation .TopNavigation-center .loge{
    width: 150px;
    display: flex;
    justify-content: center;/* 水平居中 */
    align-items: center;/* 垂直居中 */ 
    /* background-color: #c7e991; */
}
.TopNavigation .TopNavigation-center .loge img{
    width: 60px;
    height: 60px;
    border-radius:15%;/* 边框圆角 */
}
/* loge end*/

.TopNavigation .TopNavigation-center{
    width: 80%;
    /* 让TopNavigation-center 的子代平摊空间 */
    display: flex;
    justify-content: space-between;
    /* background-color: #da8f8f; */

}
.TopNavigation .TopNavigation-center li{
    list-style: none;
    float: left;/* 各li标签横向排放 */
    margin-top: 8px;
    margin-left: 20px;
}
/* a标签 */
.TopNavigation .TopNavigation-center li a{
    height: 100%;
    display: block;
    color: rgb(109, 107, 107);
    text-decoration: none;
    font-size:19px;
}
/* 鼠标经过a标签时 */
.TopNavigation .TopNavigation-center li a:hover{
    color: red;
}

/* input */
.TopNavigation .TopNavigation-center .input{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    /* background-color: #7ae659; */
}
.TopNavigation .TopNavigation-center .input .input-box{
    display: block;
    width: 300px;
    height: 45px;
    /* border: 1px solid rgb(228, 227, 227); */
}
.TopNavigation .TopNavigation-center .input .input-box input{
    width: 70%;/* 搜索框长度 */
    height: 39px;/* 搜索框高度 */
    border: 1px solid rgb(228, 227, 227);
}
.TopNavigation .TopNavigation-center .input .input-box button{
    width: 27%;/* 按钮长度 */
    height: 44px;/* 按钮高度 */
    border: 0px;/* 按钮无边框 */
    background-color: rgb(228, 227, 227);
}
.TopNavigation .TopNavigation-center .input .input-box button:hover{
    background-color: #c2bebe;
}
/* input end */
</style>