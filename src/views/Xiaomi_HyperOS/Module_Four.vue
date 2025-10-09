<template>
  <div class="box">
    <div class="center">
      <div class="title">
        <span class="h1">基于AI计算的“电影感”锁屏</span>
        <span>全面拥抱动态影像时代</span>
      </div>
      <div class="phone">
        <img src="/src/assets/Xiaomi_HyperOS/phone1.jpg" alt="">
        <img src="/src/assets/Xiaomi_HyperOS/phone2.jpg" alt="">
        <img src="/src/assets/Xiaomi_HyperOS/phone3.jpg" alt="">
        <img src="/src/assets/Xiaomi_HyperOS/phone4.jpg" alt="">
        <img src="/src/assets/Xiaomi_HyperOS/phone5.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* 设置一个大盒子，长度和高度100%铺满网页，里面的盒子居中 */
.box{
    width: 100%;
    height: 100vh;
    /* background-color: black; */
    margin-top: 10px;
    /* flex布局 */
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 居中盒子 */
.box .center{
    width: 90%;
    height: 90%;
    /* background-color: #fff; */
    text-align: center;/* 文字居中 */
}
/* title部分 */
.box .center .title{
    /* 标题部分flex垂直排列 */
    display: flex;
    flex-direction: column;
}
.box .center .title .h1{
    font-size: 50px;/* 第一行文字大小 */
    font-weight: bold;/* 第一行文字加粗 */
    color:  black;/* 第一行文字颜色 */
}
.box .center .title span{
    margin-top: 20px;/* 第二行文字与顶部距离 */
    font-size: 20px;/* 第二行文字大小 */
    color:  rgb(51, 45, 51);/* 第二行文字颜色 */
}
/* title部分 end */
/* phone部分 */
.box .center .phone{
  height: 70%;
  /* 外边距：（上、右、下、左） */
  margin: 80px 30px 30px  30px;
  /* flex布局，让盒子中各元素平分空间 */
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
}
.box .center .phone img{
  border-radius: 30px;/* 边框圆角 */
  border: 8px solid black;/* 边框厚度及颜色 */
  box-shadow:30px 30px 20px -2px rgb(197, 196, 196)/* 边框阴影 */
}
/* phone部分 end */
</style>