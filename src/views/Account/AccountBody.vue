<template>
  <!-- Body -->
      <div class="body">
        <div class="center">
          <div class="left">
            <div class="avatar">
                <img src="../../assets/login/banner.jpg" alt="Avatar">
                <input type="file" placeholder="更改头像">
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
</template>

<script>
export default {

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

.body .center .left .avatar {
  height: 200px; 
  border-bottom: 1px solid #eee; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.body .center .left .avatar input{
    margin: 10px 0px 10px 130px;
    /* background-color: #f8d8d8; */
}
.body .center .left .avatar img {
    width: 80%;
    height: 80%;
    border-radius: 50%;
}

.body .center .left .nav {
  flex: 1; /* Take remaining space */
  overflow: auto; 
}
.body .center .left .nav ul{
    margin: 0;
    padding: 0;
}
.body .center .left .nav ul li{
  line-height: 40px; 
  padding-left: 30px; 
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 50px;
  font-size: 16px;
  color:#555;

}

.body .center .left .nav ul li a {
  display: block;
  color: #333;
  text-decoration: none;
}

.body .center .left .nav ul li:hover {
  background-color: #f5f5f5;
}

.body .center .right {
    flex: 1;
    background-color: #fff;
 padding: 20px;
}
</style>