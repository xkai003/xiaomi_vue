<template>
<!-- 大盒子 -->
  <div class="box">
    <!-- 居中盒子 -->
    <div class="center">
        <!-- 轮播图 -->
        <div class="Xiaomi15_Slideshow">
            <ProductDetails_Slideshow></ProductDetails_Slideshow>
        </div>
        <!-- 菜单 -->
        <div class="menu">
            <ProductDetails_Menu></ProductDetails_Menu>
        </div>
        </div>
  </div>
</template>

<script setup>
// 引入轮播图
import ProductDetails_Slideshow from './ProductDetails_Slideshow.vue';
// 引入菜单
import ProductDetails_Menu from './ProductDetails_Menu.vue'
// 创建数组存放按钮数据

</script>

<style scoped>
/* 大盒子 */
.box{
    width: 100%;
    height: 100%;
    /* background-color: #bbe6e3; */
    /* flex居中 */
    display: flex;
    justify-content: center;
}
/* 居中盒子 */
.box .center{
    width: 80%;
    height: 100%;
    /* background-color: #f0fcba; */
    /* flex横向排放 */
    display: flex;
    flex-direction: row;
}
/* 轮播图 */
.box .center .Xiaomi15_Slideshow{
    width: 50%;
    /* background-color: #d8a3a3; */
}
</style>