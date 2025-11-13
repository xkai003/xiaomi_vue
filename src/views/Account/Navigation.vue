<template>
  <div class="nav">
    <ul>
      <li><span>个人中心</span></li>
      <li><router-link to="/Personal_Center?word=我的个人中心">我的个人中心</router-link></li>
      <li><router-link to="/#">消息通知</router-link></li>
      <li><router-link to="/#">购买资格</router-link></li>
      <li><router-link to="/#">现金账户</router-link></li>
      <li><router-link to="/#">小米礼品卡</router-link></li>
      <li><router-link to="/#">现金券</router-link></li>
      <li><router-link to="/#">喜欢的商品</router-link></li>
      <li><router-link to="/#">优惠券</router-link></li>
      <li><router-link to="/ShippingAddress?word=收货地址">收货地址</router-link></li>
      <li><router-link to="/#">红包</router-link></li>
    </ul>
    <ul>
      <li><span>账号管理</span></li>
      <li><router-link to="/Login_Security?word=登录与安全">登录与安全</router-link></li>
      <li><router-link to="/Personal_nformation?word=个人信息">个人信息</router-link></li>
      <li><router-link to="/Privacy_Center?word=隐私中心">隐私中心</router-link></li>
      <li><router-link to="/Binding_Authorization?word=绑定授权">绑定授权</router-link></li>
      <li><router-link to="/Help_Center?word=帮助中心">帮助中心</router-link></li>
      <li><router-link to="/Change_Password?word=修改密码">修改密码</router-link></li>
      <li><router-link to="/Cancellation_Service?word=注销服务">注销服务</router-link></li>
    </ul>
    <ul>
      <li><span>订单中心</span></li>
      <li><router-link to="/#">我的订单</router-link></li>
      <li><router-link to="/#">评价晒单</router-link></li>
      <li><router-link to="/#">话费充值订单</router-link></li>
      <li><router-link to="/#">以旧换新订单</router-link></li>
    </ul>
    <ul>
      <li><span>售后服务</span></li>
      <li><router-link to="/#">服务记录</router-link></li>
      <li><router-link to="/#">申请服务</router-link></li>
      <li><router-link to="/#">领取快递报销</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body .center .left .nav{
  flex: 1; /* Take remaining space */
  overflow: auto;
  /* padding: 36px 0; */
  max-height: 100%;/* 最大高度 */
  overflow-y: auto;/* 垂直滚动条 */
}
/* 隐藏滚动条 */
.body .center .left .nav::-webkit-scrollbar{
  display: none;
}
.body .center .left .nav ul{
  /* margin: 0; */
  margin-top: 20px;
  padding: 0;
}
.body .center .left .nav ul li{
  line-height: 40px; 
  padding-left: 30px; 
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 50px;
  color:#555;
  margin: 0;
  padding: 0;
}
.body .center .left .nav ul li span{
  text-align: center;
  font-weight: bold;
  padding-left: 40px;
  font-size: 16px;
}
.body .center .left .nav ul li a{
  display: block;
  padding-left: 40px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
}

.body .center .left .nav ul li a:hover {
  background-color: #f5f5f5;
}
.body .center .left .nav ul a.router-link-active{
  color: orange;
}
.body .center .right {
  flex: 1;
  background-color: #fff;
  padding: 20px;
}
</style>