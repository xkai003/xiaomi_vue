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
            <div class="right-title">注销服务</div>
            <div class="right-body">
              <h1>您即将注销小米商城为您提供的服务</h1>
              <p>您提交注销申请后，我们将对以下内容进行验证，以保证您的账号及财产安全</p>
              <p>1.安全验证</p>
              <p>确保由您本人发起，防止设备丢失或账号被盗的情况。</p>
              <p>2.订单状态</p>
              <p>确保您的订单状态已全部为已完成状态</p>
              <p>3.提前保留重要信息</p>
              <p>注销后我们将删除您的个人信息且不可被恢复，请您在操作之前自行备份帐户内所有信息和数据。</p>
              <p>注销小米商城服务，将不会影响到您对其他产品或服务的使用，如果您希望注销小米账号，请</p>
              <button>确定</button>
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
    return {}
  },
  mounted() {
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
  margin-left: 80px;
}
.body .center .right .right-body h1{
  text-align: center;
}
.body .center .right .right-body p{
  margin-top: 5px;
}
.body .center .right .right-body button{
  font-size: 18px;
  font-weight: 400;
  width: 40%;
  height: 45px;
  margin: 35px;
  border: none;
  text-align: center;
  margin-left: 20%;
  color: #fff;
  background-color: #ff6900;
}
.body .center .right .right-body button:hover{
  cursor: pointer;
  background-color: #f79854;
}
</style>