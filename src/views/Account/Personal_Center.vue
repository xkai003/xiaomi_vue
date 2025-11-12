<template>
  <div>
    <TwoNavigation></TwoNavigation>
    <Footprints></Footprints>
    <div class="body">
        <div class="center">
          <div class="left">
            <!-- 引入导航 -->
            <Navigation></Navigation>
          </div>
          <div class="right">
            <div class="right-head">
              <div class="right-hard-left">
                <img src="/src/assets/Account/头像.jpg" alt="">
                <div class="content">
                  <p class="title">你好，{{ user }}</p>
                  <router-link to="/Personal_nformation?word=个人信息">修改个人信息 > </router-link>
                  <router-link to="/ShippingAddress">我的收货地址（{{ userAddressesDatalength }}） ></router-link>
                </div>
              </div>
              <div class="right-hard-right">
                <p>账号安全：<span>普通</span></p>
                <p>绑定手机：<span>191****0840</span></p>
                <p>绑定邮箱：<span>未绑定</span></p>
              </div>
            </div>
            <div class="right-body">
              <div class="right-body-box" v-for="item in RightBodyBox" :key="item.id">
                <img :src="item.img" alt="">
                <div class="content">
                  <span class="title">{{ item.title }}<span>{{ item.titlevalue }}</span></span>
                  <a href="">{{ item.a }} > </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Boottom_Navigation></Boottom_Navigation>
  </div>
</template>

<script>
import TwoNavigation from '/src/components/TwoNavigation.vue';
import Footprints from './Footprints.vue'
import Navigation from './Navigation.vue';
import Boottom_Navigation from './Boottom_Navigation.vue';
export default {
  data() {
    return {
      user: "null",
      userAddressesDatalength: "",
      RightBodyBox: [
        { img:"https://s01.mifile.cn/i/user/portal-icon-1.png", title:"待支付的订单：", titlevalue:"0", a:"查看待支付的订单"},
        { img:"https://s01.mifile.cn/i/user/portal-icon-2.png", title:"待收货的订单：", titlevalue:"0", a:"查看待收货的订单"},
        { img:"https://s01.mifile.cn/i/user/portal-icon-2.png", title:"待评价商品数：", titlevalue:"0", a:"查看待评价商品数"},
        { img:"https://s01.mifile.cn/i/user/portal-icon-4.png", title:"喜欢的商品：", titlevalue:"0", a:"查看喜欢的商品"},
      ]
    }
  },
  mounted() {
    // 在组件挂载后执行
    try {
      // 获取localStorage的数据
      const userData = JSON.parse(localStorage.getItem("userinfo"));//用户信息
      console.log("用户信息", userData?.username);
      this.user = userData?.username || "null";
      const userAddressesData = JSON.parse(localStorage.getItem("userAddresses"));//用户收货地址
      console.log("收货地址数量", userAddressesData.length);
      this.userAddressesDatalength = userAddressesData.length || "0";
    } catch (error) {
      console.error("解析用户信息失败:", error);
      this.user = "null";
    }
  },
  components: { 
    TwoNavigation,
    Footprints,
    Navigation,
    Boottom_Navigation
  },
}
</script>

<style scoped>
/* Body */
.body {
  width: 100%;
  height: 85vh;
  flex: 1; /* Take up the remaining vertical space */
  display: flex;
  justify-content: center;
  background-color: #f9f9f9; 
}

.body .center {
  width: 80%;
  max-width: 1200px; 
  display: flex;
  /* background-color: #f9f9f9; */
  padding: 20px; 
}

.body .center .left {
  width: 200px;
  background-color: #fff;
  margin-right: 20px;
}
.body .center .right {
  flex: 1;
  background-color: #fff;
  padding: 40px;
}
/* right-head */
.body .center .right .right-head{
  height: 30%;
  /* background-color: #e7c9c9; */
  border-bottom: 2px solid rgb(245, 243, 243);
  display: flex;
  flex-direction: row;
  color: #757575;
  font-size: 14px;
}
.body .center .right .right-head div{
  width: 50%;
}
.body .center .right .right-head .right-hard-left,
.body .center .right .right-body .right-body-box{
  display: flex;
  flex-direction: row;
}
.body .center .right .right-head .right-hard-left img,
.body .center .right .right-body .right-body-box img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.body .center .right .right-head .right-hard-left .content,
.body .center .right .right-body .right-body-box .content{
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  /* background-color: #e9bebe; */
}
.body .center .right .right-head .right-hard-left .content .title{
  font-size: 20px;
  color: black;
}
.body .center .right .right-head .right-hard-left .content a,
.body .center .right .right-body .right-body-box .content a{
  text-decoration: none;
  color: orange;
}
.body .center .right .right-body{
  padding-top: 30px;
}
.body .center .right .right-body div{
  float: left;
  width: 50%;
  height: 200px;
  /* background-color: #fae5e5; */
}
.body .center .right .right-body .right-body-box .content{ 
  height: 100%;
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
}
.body .center .right .right-body .right-body-box .content span{
  margin-top: 30px;
}
.body .center .right .right-body .right-body-box img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* right-body end */
</style>