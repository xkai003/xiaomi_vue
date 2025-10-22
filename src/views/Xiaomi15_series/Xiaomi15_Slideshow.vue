<template>
    <div class="Slideshow">
      <div class="box">
        <img :src="topImgSrc" alt="" id="top-img">
        <div class="imge">
          <img v-for="(thumb, index) in thumbs" :key="index" :src="thumb" alt="" class="thumb-img" @mouseover="changeImage(thumb)">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        topImgSrc: '/Slideshow/Xiaomi15_series/Xiaomi_15_Ultra.jpg', // 默认的大图
        thumbs: [
          '/Slideshow/Xiaomi15_series/Xiaomi_15_Ultra.jpg',
          '/Slideshow/Xiaomi15_series/Xiaomi_15_Pro.jpg',
          '/Slideshow/Xiaomi15_series/Xiaomi_15.jpg',
          '/Slideshow/Xiaomi15_series/Xiaomi_15_定制版.jpg',
        ],
      }
    },
    methods: {
      changeImage(thumb) {
        this.topImgSrc = thumb;
        try {
          // 获取本地localStorage的数据
          const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));
          
          // 更新图片信息到购物车数据中
          cartItemsFromStorage.imge = this.topImgSrc;
          
          // 保存回 localStorage
          localStorage.setItem("cartItems", JSON.stringify(cartItemsFromStorage));
          
          console.log("图片已更新到购物车:", this.topImgSrc);
        } catch (error) {
          console.error("保存图片到购物车失败:", error);
        }
      },
    },
  };
  </script>
  

<style scoped>
.Slideshow{
  width: 100%;
  height: 800px;
  /* background-color: #e1ee6d; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.Slideshow .box{
  width: 500px;
    height: 600px;
    border: 1px solid rgb(204, 204, 204);
    float: left;
}
.Slideshow .box img{
    width: 100%;
    height: 500px;
    margin-top: 0;
}
.box .imge img{
    width: 50px;
    height: 50px;
    margin: left;
    margin-top: 15px;
    margin-left: 5px;
    border: 2px solid rgb(189, 187, 187);
}
.box .imge img:hover{
    border: 2px solid red;
}
</style>