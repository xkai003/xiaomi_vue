<template>
  <div class="box">
    <div class="center">
        <span>全生态设备美学换新</span>
        <video src="/src/assets/Xiaomi_HyperOS/Module_Six.mp4" controls autoplay loop></video>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* 设置一个大盒子，长度和高度100%铺满网页，里面的盒子居中 */
.box{
    width: 100%;
    height: 100vh;
    background-color: black;
    /* flex布局 */
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 居中盒子 */
.box .center{
    width: 60%;
    height: 80%;
    /* background-color: #df8181; */
    text-align: center;/* 文字居中 */
    display: flex;
    flex-direction: column;
}
.box .center span{
      font-size: 50px;/* 第一行文字大小 */
      font-weight: bold;/* 第一行文字加粗 */
      color:  #fff;/* 第一行文字颜色 */
  }
  .box .center video {
    margin-top: 30px;
  width: 100%;
  height: 85%;
  object-fit: cover; /* 让视频铺满整个 video，不留黑边 */
  border: 1px solid rgb(134, 132, 132);
  border-radius: 30px;
}
</style>