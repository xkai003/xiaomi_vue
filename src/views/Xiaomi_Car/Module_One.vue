<template>
  <div class="bgimg">
    <!-- 标题 -->
    <div class="img-title">
      <img src="/src/assets/Official_Website/小米官网img1-1.png" alt="">
      <p>自信驾驭强大</p>
      <p><span class="jg">52.99</span>万</p>
    </div>
    <!-- 按钮 -->
    <div class="img-button">
      <a href="">预约试驾</a>
      <a href="" class="ksxp">开始选配</a>
    </div>
    <!-- 底部链接 -->
    <div class="button-wz">
      <li><a href="">金融试算 &nbsp; ></a></li>
      <li><a href="">参数对比 &nbsp; ></a></li>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.bgimg{
  margin: 0;
  padding: 0;
  height: 90vh;
  background-image: url('/src/assets/Official_Website/小米官网img1.jpg'); /* 替换为你的图片路径 */
  background-size: cover; /* 让图片覆盖整个盒子 */
  background-repeat: no-repeat; /* 防止图片重复 */
  background-position: center; /* 图片居中 */
}
/* 标题 */
.bgimg .img-title{
  /* 绝对定位 */
  position: absolute;
  top: 200px;/* 与顶部的距离 */
  left: 35%;/* 与左边的距离 */
  /* border: 1px solid rgb(71, 22, 207); */
  text-align: center;/* 文字居中 */
  
}
.bgimg .img-title img{
  /* border: 1px solid red; */
  width: 700px;
  height: 60px;
}
.bgimg .img-title p{
  /* border: 1px solid red; */
  font-weight: bold;/* 字体加粗 */
  margin-top: 1px;/* 与顶部的距离 */
  font-size: 35px;
  color: #fff;
}
.bgimg .img-title .jg{
  font-size: 40px;
  color: rgb(243, 164, 17);
}
/* 标题 end */
/* 按钮 */
.bgimg .img-button{
  /* 绝对定位 */
  position: absolute;
  bottom: 100px;/* 与底部的距离 */
  left: 35%;/* 与左边的距离 */
}
.bgimg .img-button a{
  text-decoration: none;/* 去掉a标签的下划线 */
  text-align: center;/* 文字水平居中 */
  line-height: 40px;/* 行高 */
  display: block;/* 设置成盒子 */
  width: 300px;
  height: 45px;
  border: 1px solid rgb(243, 190, 17);
  color: rgb(243, 190, 17);
  border-radius: 15px;/* 边框圆角 */
  float: left;/* 各盒子横向排放 */
  margin-left: 30px;/* 各盒子与左边的距离 */
  
}
.bgimg .img-button a:hover{
  color: #000;
  background-color: rgb(243, 190, 17);
}
.bgimg .img-button .ksxp{
  color: #000;
  background-color: rgb(243, 190, 17);
}
/* 按钮 end */
/* 底部链接 */
.bgimg .button-wz{
  /* border: 1px solid red; */
  list-style: none;/* 去掉li标签的圆点 */
  /* 绝对定位 */
  position: absolute;
  bottom: 50px;/* 与底部的距离 */
  left: 46%;/* 与左边的距离 */
}
.bgimg .button-wz li{
  float: left;/* 各li标签横向排放 */
}
.bgimg .button-wz li a{
  text-decoration: none;/* 去掉a标签的下划线 */
  margin-left: 20px;/* 各a标签与左边的距离 */
  color: rgb(179, 179, 173);
}
.bgimg .button-wz li a:hover{
  color: #fff;
}
/* 底部链接 end */
</style>