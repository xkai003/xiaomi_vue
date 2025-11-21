<template>
    <!-- <div>
      （4）轮播图------【XtxNewGoods文件】
    </div> -->
  
    <!-- three -->
    <div class="three">
        <!-- 导航 -->
        <div class="navigation">
            <ul>
                <li
                    v-for="(item, index) in navigationItems"
                    :key="item.id"
                    @mouseenter="showNavWindow(index)"
                    @mouseleave="hideNavWindow"
                    :class="{ active: activeNavIndex === index }"
                >
                    <a href="#" @click.prevent="showNavWindow(index)">{{ item.name }}</a>
                    <span>›</span>
                </li>
            </ul>
        </div>
        <!-- 导航 -->
        <!-- 轮播图 -->
        <div class="carousel">
            <div class="navigation-window"
                @mouseenter="() => { activeNavIndex !== -1 && (isshow = true) }"
                @mouseleave="hideNavWindow"
                v-show="isshow && activeNavIndex !== -1"
            >
                <div v-if="navigationItems[activeNavIndex]" class="nav-content">
                    <div
                        v-for="(category, catIndex) in navigationItems[activeNavIndex].content"
                        :key="catIndex"
                        class="nav-category"
                    >
                        <h4>{{ category.category }}</h4>
                        <div class="product-list">
                            <a
                                v-for="(product, productIndex) in category.products"
                                :key="productIndex"
                                href="#"
                                class="product-item"
                                @click.prevent
                            >
                                {{ product }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
import { ref, reactive, isShallow } from 'vue'
// 图片数组
const imgArr = reactive([
    '/Slideshow/index/Carousel/1.jpg',
    '/Slideshow/index/Carousel/2.jpg',
    '/Slideshow/index/Carousel/3.jpg',
    '/Slideshow/index/Carousel/4.jpg',
])

const num = ref(0)

// 导航数据和状态管理
const activeNavIndex = ref(-1) // 当前激活的导航项索引，-1表示没有激活
const isshow = ref(false)

// 导航数据
const navigationItems = reactive([
  {
    id: 1,
    name: '手机',
    content: [
      { category: 'Xiaomi 15 系列', products: ['Xiaomi 15', 'Xiaomi 15 Pro', 'Xiaomi 15 Ultra'] },
      { category: 'Xiaomi 14 系列', products: ['Xiaomi 14', 'Xiaomi 14 Pro', 'Xiaomi 14 Ultra'] },
      { category: 'Redmi 手机', products: ['Redmi K70', 'Redmi Note 13', 'Redmi Turbo 3'] }
    ]
  },
  {
    id: 2,
    name: '电视',
    content: [
      { category: 'Mini LED 电视', products: ['小米电视 S Mini LED', '小米电视 Master Mini LED'] },
      { category: 'OLED 电视', products: ['小米电视 S OLED', '小米电视 Master OLED'] },
      { category: '智能电视', products: ['小米电视 EA', '小米电视 5', '小米电视 6'] }
    ]
  },
  {
    id: 3,
    name: '家电',
    content: [
      { category: '空调', products: ['米家空调', '小米空调', '空调伴侣'] },
      { category: '冰箱', products: ['米家冰箱', '小米冰箱'] },
      { category: '洗衣机', products: ['米家洗衣机', '小米洗衣机'] }
    ]
  },
  {
    id: 4,
    name: '笔记本 平板 显示器',
    content: [
      { category: '笔记本', products: ['Xiaomi Book Pro', 'RedmiBook Pro', 'Xiaomi Book Air'] },
      { category: '平板', products: ['Xiaomi Pad 6', 'Xiaomi Pad 5', 'Redmi Pad'] },
      { category: '显示器', products: ['小米显示器 27', '小米显示器 34', 'Redmi 显示器'] }
    ]
  },
  {
    id: 5,
    name: '出行 穿戴',
    content: [
      { category: '电动出行', products: ['小米电动滑板车', '小米电助力车', '小米平衡车'] },
      { category: '穿戴设备', products: ['小米手环 8', 'Xiaomi Watch S3', 'Redmi Watch'] }
    ]
  },
  {
    id: 6,
    name: '耳机 音箱',
    content: [
      { category: '耳机', products: ['Xiaomi Buds 4', 'Redmi Buds 5', 'Xiaomi 真无线降噪耳机 3'] },
      { category: '音箱', products: ['小米音箱', '小爱音箱', '小米Sound'] }
    ]
  },
  {
    id: 7,
    name: '健康 儿童',
    content: [
      { category: '健康设备', products: ['小米体脂秤', '小米血压计', '小米血糖仪'] },
      { category: '儿童产品', products: ['米家学习台灯', '儿童手表', '早教机'] }
    ]
  },
  {
    id: 8,
    name: '生活 箱包',
    content: [
      { category: '生活用品', products: ['小米电动牙刷', '米家空气净化器', '米家加湿器'] },
      { category: '箱包', products: ['小米双肩包', '小米拉杆箱', '小米钱包'] }
    ]
  },
  {
    id: 9,
    name: '智能 路由器',
    content: [
      { category: '智能设备', products: ['小爱同学', '米家智能门锁', '米家摄像头'] },
      { category: '路由器', products: ['小米路由器 AX6000', 'Redmi 路由器 AX6000', '小米WiFi 6'] }
    ]
  },
  {
    id: 10,
    name: '电源 配件',
    content: [
      { category: '电源配件', products: ['小米充电宝', '小米充电器', '小米无线充电器'] },
      { category: '数据线材', products: ['Type-C 数据线', 'Micro USB 数据线', 'Lightning 数据线'] }
    ]
  }
])

// 导航相关函数
const showNavWindow = (index) => {
  activeNavIndex.value = index
  isshow.value = true
}

const hideNavWindow = () => {
  activeNavIndex.value = 1
  isshow.value = false
}
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
.carousel{
    position: relative;
    /* max-width: 60%; */
    /* 轮播图宽度 */
    overflow: hidden;
    border: 2px solid #ddd;
}
.carousel .navigation-window{
    height: 100%;
    /* border: 1px solid rgb(75, 236, 26); */
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