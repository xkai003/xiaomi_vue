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
            <div class="right-title">登录方式</div>
            <div class="right-body">
              <a href="" v-for="item in dlfs" :key="item.id">
                <div class="dlfs">
                  <span>{{ item.span1 }}</span>
                  <span>{{ item.span2 }}</span>
                </div>
              </a>
            </div>
            <div class="right-title">账号安全</div>
            <div class="right-body">
              <a href="" v-for="item in zhaq" :key="item.id">
                <div class="dlfs">
                  <span>{{ item.span1 }}</span>
                  <span>{{ item.span2 }}</span>
                </div>
              </a>
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
      dlfs: [
        { span1: "安全手机", span2:"+86 191****0840 >"},
        { span1: "安全邮箱", span2:"未设置 >"},
        { span1: "修改密码", span2:">"},
        { span1: "第三方账号", span2:">"},
      ],
      zhaq: [
        { span1: "密保问题", span2:">"},
        { span1: "登陆设备管理", span2:">"},
        { span1: "双重认证", span2:">"},
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
.body .center .right{
  flex: 1;
  background-color: #fff;
  padding: 0px 40px 40px 0px;
}
.body .center .right .right-title{
  margin-top: 30px;
  margin-left: 10px;
  padding-left: 5px;
  border-left: 5px solid blue;
  color: black;
  font-size: 19px;
  font-weight: bold;
}
.body .center .right .right-body{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.body .center .right .right-body a{
  color: black;
  font-size: 17px;
  text-decoration: none;
}
.body .center .right .right-body .dlfs{
  width: 100%;
  padding: 14px 20px;
  /* background-color: #fddede; */
  display: flex;
  justify-content: space-between;
}
.body .center .right .right-body .dlfs span{
  margin-left: 30px;
  margin-right: 30px;
}
.body .center .right .right-body .dlfs:hover{
  background-color: #ebebeb;
}
</style>