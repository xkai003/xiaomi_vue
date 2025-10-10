<template>
  <div class="box">
    <div class="img">
        <img src="/src/assets/login/banner.jpg" alt="">
    </div>
    <div class="two">
      <!-- 导航 -->
      <div class="TwoNavigation">
        <div class="loge">
          <img src="/src/assets/index/TopNavigation/logo.jpg" alt="">
        </div>
        <div class="right">
          <ul>
            <li><a href="">用户协议</a></li>
            <li><a href="">隐私政策</a></li>
            <li><a href="">帮助中心</a></li>
            <li>|</li>
            <li><a href="">中文(简体)</a>
              <!-- 二级导航 -->
              <ul class="sub-nav">
                <li><a href="">中文(繁体)</a></li>
                <li><a href="">English</a></li>
                <li><a href="">བོད་སྐད</a></li>
                <li><a href="">ئۇيغۇرچە</a></li>
              </ul>
              <!-- 二级导航 end-->
            </li>
          </ul>
        </div>
      </div>
      <!-- 导航 end-->
      <!-- 登录 -->
      <div class="form">
        <div class="form-center">
          <!-- 标题 -->
          <a href="http://localhost:5173/login" class="title">登录</a>
          &nbsp;
          <a href="http://localhost:5173/register" class="title" style="color: red;">注册</a>
          <!-- 输入框 -->
          <input type="text" class="input" placeholder="请输入用户名" v-model="username">
          <input type="password" class="input" placeholder="请输入密码" v-model="password">
          <!-- 条款 -->
          <div class="tk">
            <input type="radio" class="radio">
            <span>已阅读并同意小米账号用户协议和隐私政策</span>
          </div>
          <!-- 确认 -->
          <input type="button" value="注册" class="button" @click="registerUser">
        </div>
      </div>
      <!-- 登录 end-->
      <!-- 版权 -->
      <div class="copyright">
        <span>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</span>
      </div>
       <!-- 版权 end-->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const username = ref('');
const password = ref('');

const registerUser = () => {
  if (!username.value || !password.value) {
    alert('用户名或密码不能为空！');
    return;
  }
  alert("注册成功，即将跳转到登陆页面")
  // 存储用户信息
  const userData = { username: username.value, password: password.value };
  localStorage.setItem(username.value, JSON.stringify(userData));
  // 跳转到登陆页面
  router.push('/login')
  // 清空输入框
  username.value = '';
  password.value = '';
};
</script>
<style scoped>
/* 大盒子 */
.box{
  /* 让元素 覆盖整个屏幕 */
  position: fixed;
  width: 100%;
  height: 100vh;
  /* flex布局，横向排放 */
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 252);
}
/* 左边图片 */
.box .img img{
  height: 100%;
  width: 350px;
  /* border: 1px solid red; */
}
/* 左边图片 end */
/* 右边部分 */
.box .two{
  width: 100%;
  /* flex布局，纵向排列 */
  display: flex;
  flex-direction: column;
}
/* 导航 */
.box .TwoNavigation{
  width: 100%;
  height: 80px;
  /* background-color: #e69393; */
  /* flex布局 */
  display: flex;
  justify-content: space-between;/* 让盒子中各元素平分空间 */
  position: relative; /* 让 .sub-nav 以这个元素为基准定位 */
}
/* loge */
.box .loge{
  width: 100px;
  height: 100%;
  /* background-color: #b6f781; */
  /* flex布局， */
  display: flex;
  justify-content: center;
  align-items: center;
}
.box .loge img{
  width: 50px;
  height: 50px;
  border-radius: 20px;/* 图标边框圆角 */
}
/* loge end*/
/* right */
.box .TwoNavigation .right ul{
  list-style: none;/* 去掉li标签的圆点 */
  background-color: #fff;
  margin-right: 20px;/* ul整体与右边的外边距 */
}
.box .TwoNavigation .right ul li{
  height: 50px;/* 每个li的高度 */
  float: left;/* 各个li标签横向排放 */
  margin-left: 20px;/* 每个li标签与左边的距离 */
  color: rgb(182, 182, 179);
  /* background-color: #fff; */
  position: relative; /* 让 .sub-nav 以这个元素为基准定位 */
}
.box .TwoNavigation .right ul li a{
  display: block;/* 设置每个a标签为块级元素 */
  color: rgb(182, 182, 179);
  background-color: #fff;
  text-decoration: none;/* 去掉a标签的下划线 */
}
/* 鼠标经过a标签时 */
.box .TwoNavigation .right ul li a:hover{
  color: black;
}
/* right end*/
/* 二级导航样式 */
.sub-nav {
  position: absolute;/* 绝对定位 */
  left: -20px;  /* 让子菜单和父级导航项左侧对齐 */
  top: 100%; /* 让子菜单紧贴主导航的底部 */
  background-color: #fff;
  border: 1px solid rgb(182, 182, 179);/* 二级导航的边框 */
  padding: 1px;/* 二级导航的内边距 */
  box-shadow:1px 5px 20px -2px rgb(197, 196, 196);/* 边框阴影 */
  display: none;/* 隐藏项目 */
}
/* 鼠标悬停时显示二级导航 */
.box .TwoNavigation .right li:hover .sub-nav {
  margin-left: 1px;/* 控制二级导航的外边距，保证与主导航并列 */
  display: block;/* 显示项目 */
  font-size: smaller;
}
/* 二级导航的li标签属性 */
.box .TwoNavigation .right li:hover .sub-nav li{
  /* li标签的内外边距为零 */
  padding: 0;
  margin: 0;
  /* li标签的长高、文字居中、行高 */
  width: 110px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
/* 鼠标经过二级导航的li标签时背景颜色 */
ul li .sub-nav li:hover{
background-color: #f1c1c1;
}
/* 二级导航样式 end */
/* 导航 end */

/* 登录 */
.box .form{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid rgb(182, 182, 179); */
}
.box .form .form-center{
  width: 350px;
  background-color: #fff;
  box-shadow:1px 20px 20px -2px rgb(175, 174, 174);/* 边框阴影 */
  padding: 50px;/* 内边距 */
}
.box .form .form-center .title{
  color: black;
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;
}
.box .form .form-center .title:hover{
  color: red;
}
.box .form .form-center .input{
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background-color: rgba(247, 250, 241, 0.842);
  border: none;
}
.box .form .form-center .tk{
  margin-top: 20px;
}
.box .form .form-center .button{
  width: 100%;
  height: 50px;
  color: #fff;
  margin-top: 20px;
  font-size: 20px;
  border: none;
  background-color: #f5b641;
}
.box .form .form-center .button:hover{
  background-color: #f89a1f;
  cursor: pointer; 
}
/* 登录 end */
/* 版权 */
.copyright{
  text-align: center;
  font-size: 15px;
  margin-bottom: 50px;
}
/* 版权 end */
/* 右边部分 end */
</style>