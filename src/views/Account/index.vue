<template>
  <div class="box">
    <div class="two">
      <!-- Navigation -->
      <div class="TwoNavigation">
        <div class="loge">
          <img src="/src/assets/index/TopNavigation/logo.jpg" alt="Xiaomi Logo">
          <span>小米账号</span>
        </div>
        <div class="right">
          <ul>
            <li><a href="#">用户协议</a></li>
            <li><a href="#">隐私政策</a></li>
            <li><a href="#">帮助中心</a></li>
            <li>|</li>
            <li>
              <a href="#">中文(简体)</a>
              <!-- Sub Navigation -->
              <!-- <ul class="sub-nav">
                <li><a href="#">中文(繁体)</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">བོད་སྐད</a></li>
                <li><a href="#">ئۇيغۇرچە</a></li>
              </ul> -->
              <!-- Sub Navigation end-->
            </li>
            <li><a href="#" style="color: orange;">退出</a></li>
          </ul>
        </div>
      </div>
      <!-- Navigation end-->

      <!-- Body -->
      <div class="body">
        <div class="center">
          <div class="left">
            <div class="avatar">
              <img src="../../assets/login/banner.jpg" alt="Avatar">
            </div>
            <div class="nav">
              <ul>
                <li><router-link to="">账号与安全</router-link></li>
                <li><router-link to="">个人信息</router-link></li>
                <li><router-link to="">隐私中心</router-link></li>
                <li><router-link to="">绑定授权</router-link></li>
                <li><router-link to="">帮助中心</router-link></li>
                <li><router-link to="">帮助中心</router-link></li>
                <li><router-link to="">帮助中心</router-link></li>
                <li><router-link to="">帮助中心</router-link></li>
                <li><router-link to="">帮助中心</router-link></li>
                <li><router-link to="">帮助中心</router-link></li>
              </ul>
            </div>
          </div>
          <div class="right">right</div>
        </div>
      </div>
      <!-- Body end-->

      <!-- Copyright -->
      <div class="copyright">
        <span>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</span>
      </div>
      <!-- Copyright end-->
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* General styling (try to refactor common elements into a separate file for code re-use) */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a{
  text-decoration: none;
}
.box {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 252);
}

.box .img img {
  height: 100%;
  width: 100%;
}

.box .two {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Navigation */
.TwoNavigation {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically center items in the navigation */
  padding: 0 20px; /* Add some padding on the sides */
  position: relative;
  background-color: #fff; /* Add a background color for better visibility */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

/* Logo */
.loge {
  display: flex;
  align-items: center;
}

.loge img {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* full round image */
  margin-right: 15px;
}

/* Right Navigation */
.TwoNavigation .right ul {
  display: flex; /* Make the <li> items display in a row */
  align-items: center;
  margin: 0; /* Remove default ul margin */
}

.TwoNavigation .right ul li {
  margin-left: 20px;
  color: rgb(182, 182, 179);
}

.TwoNavigation .right ul li a {
  color: rgb(182, 182, 179);
  text-decoration: none;
}

.TwoNavigation .right ul li a:hover {
  color: black;
}

/* Language Dropdown */
.TwoNavigation .right ul li:last-child {
  margin-right: 0; /* Remove right margin */
}

/* Sub navigation styling */
.sub-nav {
  position: absolute;
  top: 100%;
  left: 0; /* Aligns submenu to the left of its parent */
  background-color: #fff;
  border: 1px solid rgb(182, 182, 179);
  box-shadow: 1px 5px 20px -2px rgb(197, 196, 196);
  display: none;
  z-index: 1; /* Ensures the sub-nav appears on top of other content */
  min-width: 100%; /* Ensure the dropdown is at least as wide as the parent menu item */
}

.TwoNavigation .right li:hover .sub-nav {
  display: block;
  font-size: smaller;
}

.sub-nav li {
  width: 100%; /* The li stretches to fill the sub-nav, making the whole box clickable */
  text-align: left; /* Align text back to the left */
}

.sub-nav li a {
  display: block; /* Makes the entire li element clickable/hoverable */
  padding: 8px 16px;
  text-align: center;
}

ul li .sub-nav li:hover {
  background-color: #f1c1c1;
}
/* Body */
.body {
  width: 100%;
  flex: 1; /* Take up the remaining vertical space */
  display: flex;
  justify-content: center;
  background-color: #fff;  /* Changed for better appearance */
  padding: 20px;/*added padding*/
}

.body .center {
  width: 80%;
  max-width: 1200px; /* Limit the width for large screens */
  display: flex;
  background-color: #f9f9f9; /* Better contrast */
  padding: 20px; /* consistent padding */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.body .center .left {
  width: 200px; /* Fixed width for the left side */
  background-color: #fff;
  margin-right: 20px;
}

.body .center .left .avatar {
  height: 200px; /* Fixed height for avatar */
  border-bottom: 1px solid #eee; /* Separator between the avatar and the menu */
}

.body .center .left .avatar img {
    width: 100%;
    height: 100%;
  object-fit: cover;
}

.body .center .left .nav {
  flex: 1; /* Take remaining space */
  overflow: auto; /* Enable scrolling if the content is too long */
}

.body .center .left .nav ul li {
  line-height: 40px; /* Adjust item line height */
  padding-left: 30px; /* Adjust indent for the link */
  padding-right:30px;
  font-size: 16px;
  color:#555;

}

.body .center .left .nav ul li a {
  display: block;
  color: #333;
    text-align: left;
}

.body .center .left .nav ul li a:hover {
  color: #007bff; /* Interactive color for links */
  background-color: #f5f5f5;
}

.body .center .right {
    flex: 1;
    background-color: #fff;
 padding: 20px;
}

/* Copyright */
.copyright {
    text-align: center;
    font-size: 14px;
    color: #555;
    padding: 20px;
}

/* Responsive Design (example) */
@media (max-width: 768px) {
  .body .center {
    flex-direction: column; /* Stack the left and right sections vertically on smaller screens */
  }

  .body .center .left {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .body .center .right {
    width: 100%;
  }

  /*Navigation responsiveness*/
  .TwoNavigation {
    flex-direction: column; /*stack logo and nav*/
    height: auto;
    padding:10px;
  }
  .TwoNavigation .right ul{
    flex-direction:column;
  }
  .TwoNavigation .right ul li {
    margin-left:20px;
    padding:10px;
    text-align:center;
  }

}
</style>
