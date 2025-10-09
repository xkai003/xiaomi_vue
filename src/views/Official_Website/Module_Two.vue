<template>
  <div class="video-container">
    <video autoplay loop muted playsinline>
        <source src="/src/assets/Official_Website/小米官网.mp4" type="video/mp4">
        您的浏览器不支持视频播放。
    </video>
    <!-- 文本区 -->
    <div class="content">
        <div class="img-text">
            <img src="/src/assets/Official_Website/小米官网img1-1.png" alt="">
            <h1>巅峰之作</h1>
            <p>源自对极限性能的无限追求</p>
            <p>源自对奢华体验的优雅诠释</p>
            <p>源自对先锋科技的无畏探索</p>
            <p>Xiaomi SU7 Ultra</p>
            <p>自信驾驭强大</p>
        </div>

        <div class="img-button">
      <a href="#">观看视频</a>
    </div>
    </div>
</div>
</template>

<script></script>

<style scoped>
/* 背景视频 */
/* 外层容器 */
.video-container {
    margin-top: 10px;
    position: relative;
    width: 100%;
    height: 100vh; /* 让视频铺满整个视口 */
    overflow: hidden;
}

/* 视频样式 */
.video-container video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* 确保视频完全填充 */
    transform: translate(-50%, -50%);
}

/* 标题文本 */
.video-container .content{
    position: relative;
    z-index: 1; /* 让文字显示在视频上 */
    text-align: center;
    color: white;
    font-size: 24px;
    margin-top: 200px;
}
.video-container .content img{
  /* border: 1px solid red; */
  width: 700px;
  height: 60px;
}
/* 标题文本 end*/
/* 背景视频 end */

/* 按钮 */
.video-container .content .img-button{
  /* 绝对定位 */
  position: absolute;
  margin-top: 30px;/* 与顶部的距离 */
  left: 43%;/* 与左边的距离 */
}
.video-container .content .img-button a{
  text-decoration: none;/* 去掉a标签的下划线 */
  text-align: center;/* 文字水平居中 */
  line-height: 40px;/* 行高 */
  display: block;/* 设置成盒子 */
  width: 300px;
  height: 45px;
  border: 1px solid rgb(243, 190, 17);
  color: rgb(243, 190, 17);
  border-radius: 15px;/* 边框圆角 */
}
.video-container .content .img-button a:hover{
  color: #000;
  background-color: rgb(243, 190, 17);
}
/* 按钮 end */
</style>