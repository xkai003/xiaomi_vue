<template>
    <!-- <div>
      （4）轮播图------【XtxNewGoods文件】
    </div> -->
  
    <!-- three -->
    <div class="three">
        <!-- 导航 -->
        <div class="navigation">
            <ul>
                <li><a href="#">手机</a><span>›</span></li>
                <li><a href="">电视</a><span>›</span></li>
                <li><a href="">家电</a><span>›</span></li>
                <li><a href="">笔记本 &nbsp; 平板 &nbsp; 显示器</a><span>›</span></li>
                <li><a href="">出行 &nbsp; 穿戴</a><span>›</span></li>
                <li><a href="">耳机 &nbsp; 音箱</a><span>›</span></li>
                <li><a href="">健康 &nbsp; 儿童</a><span>›</span></li>
                <li><a href="">生活 &nbsp; 箱包</a><span>›</span></li>
                <li><a href="">智能 &nbsp; 路由器</a><span>›</span></li>
                <li><a href="">电源 &nbsp; 配件</a><span>›</span></li>
            </ul>
        </div>
        <!-- 导航 -->
        <!-- 轮播图 -->
        <div class="carousel">
            <!-- 图片 -->
            <div class="carousel-track">
                <div class="carousel-slide"><img :src="imgArr[num]"></div>
            </div>
            <!-- 箭头 -->
            <div class="carousel-buttons">
                <button class="prev" @click="prev" >&#10094;</button>
                <button class="next" @click="next" >&#10095;</button>
            </div>
            <div class="carousel-indicators">
                <div class="carousel-indicator" @click="oneimg"></div>
                <div class="carousel-indicator" @click="twoimg"></div>
                <div class="carousel-indicator" @click="threeimg"></div>
                <div class="carousel-indicator" @click="fourimg"></div>
            </div>
        </div>
        <!-- 轮播图 -->
    </div>
    <!-- three  -->
</template>
  
<script setup>
import { ref, reactive } from 'vue'

// 图片数组
const imgArr = reactive([
    '/Slideshow/index/Carousel/1.jpg',
    '/Slideshow/index/Carousel/2.jpg',
    '/Slideshow/index/Carousel/3.jpg',
    '/Slideshow/index/Carousel/4.jpg',
])

const num = ref(0)

// 上一张图片
const prev = () => { 
    // 确保 num.value 始终在 0 ~ imgArr.length-1 之间。
    num.value = (num.value - 1 + imgArr.length) % imgArr.length
}

// 下一张图片
const next = () => { 
    num.value = (num.value + 1) % imgArr.length
}
//圆点
const oneimg = () =>{
    num.value = 0
}
const twoimg = () =>{
    num.value = 1
}
const threeimg = () =>{
    num.value = 2
}
const fourimg = () =>{
    num.value = 3
}
// 自动循环播放
setInterval(() => {
    num.value = (num.value + 1) % imgArr.length  // 轮播循环
}, 5000)
</script>


<style scoped>
/*------------------------- three -------------------------*/
.three{
    width: 100%;
    height: 500px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
/* 导航 */
.navigation ul{
    width: 230px;/* 设置导航栏的长度 */
    height: 100%;
    display: flex;
    flex-direction: column;
    /* 去掉li标签并设置左对齐 */
    list-style: none;
    padding-left: 0;
    margin-left: 0;
    margin-top: 0;
}
.navigation ul li{
    width: 100%;
    height: 50px;
    width: 100%;
    margin-left: 0px;
    display: block;
    line-height: 40px;/*数组每个li盒子的高度*/
    background-color: rgba(133, 128, 128, 0.5);
    /* 让li标签里的元素平摊空间 */
    display: flex;
    justify-content: space-between;
}
.navigation ul li a{
    text-decoration: none;
    color: #fff;
}
.navigation ul li span{
    height: 100%;
    color: #fff;
    font-size: 30px;
    line-height: 30px;/*控制箭头文字垂直居中*/
    margin-right: 20px;/*控制箭头与右边的距离*/
}
.navigation ul li:hover{
    background-color: #eea039;
}
/* 导航 end*/

/* 轮播图 */
.carousel {
    position: relative;
    /* max-width: 60%; */
    /* 轮播图宽度 */
    overflow: hidden;
    border: 2px solid #ddd;
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-slide {
    /* min-width: 100%; */
    height: 100%;
    box-sizing: border-box;
}

.carousel-slide img {
    width: 1200px;
    height: 600px;
    display: block;
}

.carousel-buttons{
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;
}
.carousel-buttons .prev{
    float: left;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
}
.carousel-buttons .next{
    float: right;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
}
.carousel-buttons .prev:hover,
.carousel-buttons .next:hover{
    background-color: rgba(0, 0, 0, 0.8);
}

.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.carousel-indicator {
    width: 10px;
    height: 10px;
    background-color: rgb(158, 154, 154);
    border-radius: 50%;
    cursor: pointer;
}

.carousel-indicator:hover {
    background-color: rgb(56, 54, 54);
}
/* 轮播图 */
/*------------------------- three end-------------------------*/
</style>