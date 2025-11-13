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
            <div class="right-title">帮助中心</div>
            <div class="right-body">
              <a href="" v-for="item in dlfs" :key="item.id">
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
        { span1: "忘记账号了，如何找回？", span2:">"},
        { span1: "忘记密码了，如何重置密码？", span2:">"},
        { span1: "手机号停用了，如何登录或换绑手机号？", span2:">"},
        { span1: "申诉不通过怎么办？", span2:">"},
        { span1: "账号被盗了怎么办？", span2:">"},
        { span1: "如何登录小米账号？", span2:">"},
        { span1: "如何退出小米账号？", span2:">"},
        { span1: "如何使用第三方账号登录小米账号？", span2:">"},
        { span1: "忘记账号了，如何找回？", span2:">"},
        { span1: "没有绑定手机号，怎么登录账号？", span2:">"},
        { span1: "账号登录异常的原因？", span2:">"},
        { span1: "如何查看账号下登录的小米设备？", span2:">"},
        { span1: "账号长期不登录，会不会自动注销？", span2:">"},
        { span1: "如何更换安全手机？", span2:">"},
        { span1: "如何跟换安全邮箱？", span2:">"},
        { span1: "如何解绑手机号和邮箱？", span2:">"},
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
  max-height: 100%;/* 最大高度 */
  overflow-y: auto;/* 垂直滚动条 */
}
/* 隐藏滚动条 */
.body .center .right::-webkit-scrollbar{
  display: none;
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