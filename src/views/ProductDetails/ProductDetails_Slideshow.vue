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
        topImgSrc: this.$route.query.image, // 默认的大图是获取路由中的图片数据
        thumbs: [
          this.$route.query.image, //获取路由中的图片数据
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
      // 1. 从 localStorage 中获取 cartItems 数据
      const cartItemsString = localStorage.getItem("cartItems");
      if (cartItemsString) {
        // 2. 解析 JSON 字符串为 JavaScript 对象/数组
        let cartItems = JSON.parse(cartItemsString);
        // 3. 确认 cartItems 是一个数组或者对象
        if(Array.isArray(cartItems)) {
             // 如果是数组，遍历数组，更新每个元素的 image
            cartItems = cartItems.map(item => {
                item.imge = this.topImgSrc;  //用新的图片URL 更新 每个item的 image
                return item;
            });
        } else if (typeof cartItems === 'object' && cartItems !== null) {
             // 如果是对象，直接更新 image 属性
            cartItems.imge = this.topImgSrc;
        } else {
           console.error('cartItems is not an array or object:', cartItems);
           return; // 停止执行
        }
        // 4. 将更新后的 cartItems 转换为 JSON 字符串
        const updatedCartItemsString = JSON.stringify(cartItems);
        // 5. 将 JSON 字符串保存回 localStorage
        localStorage.setItem("cartItems", updatedCartItemsString);
        console.log("图片已更新到购物车:", this.topImgSrc);
      } else {
        console.warn("localStorage 中没有 cartItems 数据");
      }
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