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
            <div class="right-title">修改密码</div>
            <div class="right-body">
              <div class="box"><span><span style="color: red;">*</span>账号：</span><input type="text"></div>
              <div class="box"><span><span style="color: red;">*</span>密码：</span><input type="password"></div>
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
  margin-top: 20px;
}
.body .center .right .right-body .box{
  width: 100%;
  height: 45px;
  /* border: 1px solid red; */
  margin-top: 30px;
  padding-left: 30px;
}
.body .center .right .right-body .box span{
  font-size: 20px;
}
.body .center .right .right-body .box input{
  height: 100%;
  width: 50%;
  margin-left: 30px;
}
.body .center .right .right-body button{
  font-size: 18px;
  font-weight: 400;
  width: 40%;
  height: 45px;
  margin: 35px;
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