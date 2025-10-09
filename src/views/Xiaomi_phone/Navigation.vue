<template>
  <div class="box">
    <div class="centerbox">
      <div class="left">
        <ul>
          <!-- <li><router-link to="/toindex">小米官网</router-link></li> -->
          <li><router-link to="/comprehensive?word=综合">综合</router-link></li>
          <li><router-link to="/New_arrivals?word=新品">新品</router-link></li>
          <li><router-link to="/sales_volume?word=销量">销量</router-link></li>
          <li><router-link to="/Price?word=价格↑">价格↑</router-link></li>
        </ul>
      </div>
      <div class="right">
        <div><input type="checkbox" id=""><span>促销</span></div>
        <div><input type="checkbox" id=""><span>分期</span></div>
        <div><input type="checkbox" id=""><span>仅看有货</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
    width: 100%;
    margin-top: 30px;
    background-color: #f3f1f1;
    /* flex布局 */
    display:flex;
    justify-content: center;
}
.box .centerbox{
  color: black;
  width: 80%;
}
.box .centerbox ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
.box .centerbox ul li{
  float: left;
  height: 50px;
}
.box .centerbox .left{
  float: left;
}
.box .centerbox .left ul li a{
  display: block;
  width: 100px;
  margin-top: 10px;
  color: rgb(77, 75, 75);
  text-align: center;
  text-decoration: none;
  border-right: 1px solid rgb(185, 184, 184);
}
.box .centerbox .left ul li a.router-link-active{
  color: red;
}
.box .centerbox .right{
  float: right;
}
.box .centerbox .right div{
  float: left;
  width: 100px;
  text-align: center;
  margin-top: 10px;
  /* background-color: #fff; */
}
</style>