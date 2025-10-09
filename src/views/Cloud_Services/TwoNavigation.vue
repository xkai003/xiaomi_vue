<template>
  <div class="box">
    <div class="left">
        <img src="/src/assets/Cloud_Services/logo.jpg" alt="">
        <span>小米云服务</span>
    </div>
    <div class="right">
        <ul>
            <li><a href="">客户端</a></li>
            <li><a href="">简体中文</a></li>
            <li><a href="">了解云服务</a></li>
        </ul>
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
    height: 50px;
    /* background-color: #e47676; */
    display: flex;
    justify-content: space-between;
}
/* left */
.box .left {
    margin-left: 50px;
    background-color: #fff;
}
.box .left span{
    margin-left: 10px;
    margin-top: 10px;
    float: right;
    font-size: 20px;
}
.box .left img{
    width: 30px;
    height: 30px;
    margin-top: 10px;
}
/* right */
.box .right ul{
    list-style: none;
}
.box .right ul li{
    float: left;
}
.box .right ul li a{
    display: block;
    width: 120px;
    height: 20px;
    text-align: center;
    line-height: 15px;
    text-decoration: none;
    border-right: 1px solid rgb(179, 177, 177);
    color: rgb(134, 134, 134);
}
.box .right ul li a:hover{
    color: black;
}
</style>