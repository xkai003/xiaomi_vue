<template>
    <div class="box2">
            <!-- title -->
            <div class="title">
                <div class="one">
                    <span>笔记本&nbsp;|&nbsp;平板</span>
                </div>
                <div class="two">
                    <a href="">查看更多</a>
                    <svg t="1741322201572" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2454"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM398.4 784l-45.6-45.6L580 512 353.6 285.6l45.6-45.6 272 272-272.8 272z" p-id="2455"></path></svg>
                </div>
            </div>
            <!-- phone -->
            <div class="phone">
                <div class="one">
                    <a href="">
                        <img src="/src/assets/index/TwoXiaomi/Redmi.jpg" alt="">
                    </a>
                </div>
                <div class="two">
                    <!-- v-for 遍历数组中的内容并渲染 -->
                    <a href="" v-for="item in list" :key="item.id">
                        <div>
                            <!-- 拿到数组的img并渲染 -->
                            <img :src="item.logo" alt="Logo">
                            <span>{{ item.name }}</span>
                            <span style="font-size: 12px; color:rgb(121, 121, 119); margin-top: 5px;">{{ item.introduce }}</span>
                            <span style="font-size: 15px; color:rgb(241, 128, 36); margin-top: 5px;">{{ item.price }}</span>
                        </div>
                    </a>
                    <!-- v-for -->
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
      return {
        list: [
          { id: 1, name: "Xiaomi Pad 7 Pro", introduce:"11.2英寸3.2K高清高剧屏", price:"2399元起", logo: new URL('/src/assets/index/TwoXiaomi/Xiaomi Pad 7 Pro.jpg', import.meta.url).href,},
          { id: 2, name: "Xiaomi Pad 7", introduce:"11.2英寸3.2K高清高剧屏", price:"1999元起", logo: new URL('/src/assets/index/TwoXiaomi/Xiaomi Pad 7 Pro.jpg', import.meta.url).href,},
          { id: 3, name: "Redmi Pad Pro系列", introduce:"12.1英寸2.5K旗舰机大屏|10000mAh.", price:"1499元起", logo: new URL('/src/assets/index/TwoXiaomi/Redmi Pad Pro系列.jpg', import.meta.url).href,},
          { id: 4, name: "Xiaomi Pad 6S Pro 12.4", introduce:"第二代骁龙8 旗舰处理器|小米澎湃0S", price:"2999元起", logo: new URL('/src/assets/index/TwoXiaomi/Xiaomi Pad 6S Pro 12.4.jpg', import.meta.url).href,},
          { id: 5, name: "REDMI Book 16 2025", introduce:"47W 满血性能|小米澎湃智联", price:"3999元起", logo: new URL('/src/assets/index/TwoXiaomi/REDMI Book 16 2025.jpg', import.meta.url).href,},
          { id: 6, name: "REDMI Book 14 2025", introduce:"47W 满血性能|小米澎湃智联", price:"3899元起", logo: new URL('/src/assets/index/TwoXiaomi/REDMI Book 16 2025.jpg', import.meta.url).href,},
          { id: 7, name: "Redmi Book Pro 14 2024", introduce:"65W 满血性能|全新酷睿 Ultra 处理器", price:"4999元起", logo: new URL('/src/assets/index/TwoXiaomi/Redmi Book Pro 14 2024.jpg', import.meta.url).href,},
          { id: 8, name: "Xiaomi 15 定制版", introduce:"徕卡光学 Summilux 高速镜头", price:"4999元起", logo: new URL('/src/assets/index/TwoXiaomi/Redmi Book Pro 14 2024.jpg', import.meta.url).href,},
        ]
      };
    }
  };
</script>

<style scoped>
    /* title */
    .box .box-center .box2 .title{
        margin-top: 30px;
        margin-bottom: 20px;
        color: rgb(121, 121, 119);
        display: flex;
        justify-content: space-between;
    }
    .box .box-center .box2 .title .one span{
        font-size: 30px;
    }

    .box .box-center .box2 .title .two a{
        text-decoration: none;
        color: rgb(121, 121, 119);
    }
    .box .box-center .box2 .title .two a:hover{
        color: red;
    }
    .box .box-center .box2 .title .two .icon{
        width: 25px;
        height: 25px;
        float: right;
        color: rgb(121, 121, 119);
        /* background-color: #a05151; */
    }
    /* phone */
    .box .box-center .box2 .phone{
        display: flex;
        flex-direction: row;
    }
    .box .box-center .box2 .phone .one img{
        width: 250px;
        height: 98%;
    }
    /* div盒子 */
    .box .box-center .box2 .phone .two div{
        width:280px;
        height: 400px;
        float: left;/* 让各div盒子横向排放 */
        color: rgb(121, 121, 119);
        background-color: #fff;
        margin-left: 15px;/* 让各div盒子与左边的距离 */
        margin-bottom: 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .box .box-center .box2 .phone .two div:hover{
        box-shadow:1px 20px 20px -2px rgb(197, 196, 196);/* 边框阴影 */
    }
</style>