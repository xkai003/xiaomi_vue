<template>
    <div class="Slideshow">
      <a href="#">
          <div class="box">
            <img :src="topImgSrc" alt="" id="top-img">
            <span>{{ topImgName1 }}</span><br>
            <span style="color: red;">{{ topImgName2 }}</span>
            <div class="imge">
              <img v-for="(thumb, index) in thumbs" :key="index" :src="thumb.url" alt="" class="thumb-img" @mouseover="changeImage(thumb)">
            </div>
        </div>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        topImgSrc: '/Slideshow/Xiaomi_phone/Xiaomi_15_Pro.jpg', // 默认的大图
        topImgName1: "Xiaomi 15 Pro 12GB+256GB", // 默认的标题
        topImgName2: "4999元", // 默认的标题
        thumbs: [
          { url: '/Slideshow/Xiaomi_phone/Xiaomi_15_Pro.jpg', name1: "Xiaomi 15 Pro 12GB+256GB", name2: "4999元" },
          { url: '/Slideshow/Xiaomi_phone/Xiaomi_15_Pro.jpg', name1: "Xiaomi 15 Pro 16GB+512GB", name2: "5499元"  },
          { url: '/Slideshow/Xiaomi_phone/Xiaomi_15_Pro.jpg', name1: "Xiaomi 15 16GB+1TB", name2: "5999元"  },
        ]
      }
    },
    methods: {
      changeImage(thumb) {
        this.topImgSrc = thumb.url;
        this.topImgName1 = thumb.name1;
        this.topImgName2 = thumb.name2;
      },
    },
  };
  </script>
  

<style scoped>
.Slideshow a{
  text-decoration: none;
  color: black;
}
.Slideshow a:hover .box{
  box-shadow:1px 20px 20px -2px rgb(197, 196, 196)/* 边框阴影 */
}
.Slideshow .box{
  width: 300px;
    height: 450px;
    border: 1px solid rgb(243, 243, 243);
    background-color: #fff;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
    text-align: center;
}
.Slideshow .box img{
    width: 100%;
    /* height: 500px; */
    margin-top: 0;
}
.box .imge img{
    width: 30px;
    height: 30px;
    margin: left;
    margin-top: 15px;
    margin-left: 5px;
    border: 1px solid rgb(243, 243, 243);
}
.box .imge img:hover{
    border: 1px solid red;
}
</style>