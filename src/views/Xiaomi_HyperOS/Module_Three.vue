<template>
  <div class="box">
    <div class="center">
        <!-- title部分 -->
        <div class="title">
            <span class="h1">Xiaomi HyperCore</span>
            <span>小米自研底层内核技术平台</span>
        </div>
        <!-- title部分 end -->
        <!-- icon部分 -->
        <div class="icon">
            <!-- v-for 遍历数组中的内容并渲染 -->
            <a href="" v-for="item in list" :key="item.id">
                <img :src="item.imge" alt="">
                <p>{{ item.p }}</p>
                <span>{{ item.span1 }}</span>
                <span>{{ item.span2 }}</span>
                <span>{{ item.span3 }}</span>
            </a>
        </div>
        <!-- icon部分 end -->
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {id:1, imge:new URL('/src/assets/Xiaomi_HyperOS/icon1.jpg', import.meta.url).href, p:"性能", span1:"重构调度器、内存、l/O资源管理", span2:"重构调度器、内存、l/O资源管理", span3:"打造单端最强性能"},
                {id:2, imge:new URL('/src/assets/Xiaomi_HyperOS/icon2.jpg', import.meta.url).href, p:"图形", span1:"重塑渲染管线，结合异构计算", span2:"实现业内领先的动视效果"},
                {id:3, imge:new URL('/src/assets/Xiaomi_HyperOS/icon3.jpg', import.meta.url).href, p:"网络", span1:"蓝牙、Wi-Fi、5G领域", span2:"持续技术突破，提供全场景", span3:"无死角网络连接保障"},
                {id:4, imge:new URL('/src/assets/Xiaomi_HyperOS/icon4.jpg', import.meta.url).href, p:"安全", span1:"硬件芯片级安全系统", span2:"建设最高等级安全体系"}
            ]
        }
    }
}
</script>

<style scoped>
/* 设置一个大盒子，长度和高度100%铺满网页，里面的盒子居中 */
.box{
    width: 100%;
    height: 100vh;
    background-color: black;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 居中盒子 */
.box .center{
    width: 60%;
    height: 70%;
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
    font-size: 70px;/* 第一行文字大小 */
    font-weight: bold;/* 第一行文字加粗 */
    color:  rgb(245, 145, 245);/* 第一行文字颜色 */
}
.box .center .title span{
    margin-top: 10px;/* 第二行文字与顶部距离 */
    font-size: 30px;/* 第二行文字大小 */
    color:  rgb(245, 145, 245);/* 第二行文字颜色 */
}
/* title部分 end */
/* icon部分 */
.box .center .icon{
    margin-top: 90px;/* icon部分与顶部的距离 */
    /* flex布局 */
    display: flex;
    flex-direction: row;/* 横向排列 */
    justify-content: space-between;/* 让盒子中各元素平分空间 */
    /* border: 1px solid yellow; */
}
/* a标签部分 */
.box .center .icon a{
    text-decoration: none;/* 去掉a标签下划线 */
    display: flex;
    flex-direction: column;/* 纵向排列 */
    /* border: 1px solid red; */
}
.box .center .icon a p{
    font-size: 20px;
    font-weight: bold;/* 字体加粗 */
    color: #fff;
}
.box .center .icon a span{
    font-size: 13px;
    color: rgb(110, 109, 109);
}
/* icon部分 end */
</style>