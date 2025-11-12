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
            <div class="right-title">个人信息</div>
            <div class="right-body">
              <div class="right-body-column">
                <div class="nickname">头像</div>
                <div><img src="/src/assets/Account/头像.jpg" alt=""></div>
              </div>
              <div class="right-body-column" v-for="item in grxx" :key="item.id">
                <div class="nickname">{{ item.span1 }}</div>
                <div>{{ item.span2 }}</div>
              </div>
              <button>编辑</button>
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
      grxx: [
        { span1: "昵称", span2:"请设置昵称"},
        { span1: "性别", span2:"男"},
        { span1: "小米ID", span2:"888888888"},
        { span1: "国家/地区", span2:"中国/广东"},
      ]
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
  /* background-color: #e2c5c5; */
  margin: 40px;
}
.body .center .right .right-body .right-body-column{
  display: flex;
  flex-direction: row;
  padding: 20px 20px;
}
.body .center .right .right-body .right-body-column img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.body .center .right .right-body .right-body-column .nickname{
  width: 30%;
}
.body .center .right .right-body button{
  font-size: 18px;
  font-weight: 400;
  width: 40%;
  height: 60px;
  line-height: 60px;
  margin: 30px auto;
  border: none;
  text-align: center;
  color: #fff;
  background-color: #ff6900;
}
.body .center .right .right-body button:hover{
  cursor: pointer;
  background-color: #f79854;
}
</style>