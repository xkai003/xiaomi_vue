<template>
  <div>
    <TwoNavigation></TwoNavigation>
    <div class="body">
        <div class="center">
          <div class="left">
            <!-- 引入导航 -->
            <Navigation></Navigation>
          </div>
          <div class="right">
            <div>修改密码</div>
          </div>
        </div>
    </div>
    <Boottom_Navigation></Boottom_Navigation>
  </div>
</template>

<script>
import TwoNavigation from '/src/components/TwoNavigation.vue';
import Navigation from './Navigation.vue';
import Boottom_Navigation from './Boottom_Navigation.vue';
export default {
  components: { 
    TwoNavigation,
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
  padding: 20px;
}
</style>