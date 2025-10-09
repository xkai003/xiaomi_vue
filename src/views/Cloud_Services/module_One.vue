<template>
  <div class="box">
    <div class="center">
        <div class="textbox">
            <div class="textbocenter">
                <span class="title">小米云服务</span>
                <span>随时随地，管理你的所有设备和数据</span>
                <router-link to="/login">使用小米账号登陆</router-link>
            </div>
        </div>
        <img src="/src/assets/Cloud_Services/two.jpg" alt="">
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
    height: 85vh;
    /* background-color: #f7c0c0; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.center{
    width: 60%;
    height: 50%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
}
/* textbox */
.center .textbox{
    width: 40%;
    /* background-color: rebeccapurple; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.center .textbox .textbocenter{
    width: 60%;
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}
.center .textbox .textbocenter .title{
    font-size: 48px;
    font-weight: bold;
}
.center .textbox .textbocenter span{
    line-height: 60px;
    /* border-bottom: 1px solid red; */
}
.center .textbox .textbocenter a{
    height: 50px;
    color: #fff;
    text-decoration: none;
    line-height: 50px;
    background-color: rgb(106, 196, 248);
    border: none;
}
.center .textbox .textbocenter a:hover{
    background-color: rgb(116, 116, 248);
    cursor: pointer;
}
/* img */
.center img{
    width: 60%;
    height: 100%;
    /* border: 1px solid red; */
}
</style>