<template>
    <div class="box2">
            <!-- title -->
            <div class="title">
                <div class="one">
                    <span>智能穿戴</span>
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
                        <img src="/src/assets/index/TwoXiaomi/watch.jpg" alt="">
                    </a>
                </div>
                <div class="two">
                    <!-- v-for 遍历数组中的内容并渲染 -->
                    <!-- 使用 :to="getProductUrl(item)" 调用 getProductUrl 方法 动态传递 商品名称给路由 -->
                    <router-link :to="getProductUrl(item)"  v-for="item in list" :key="item.id">
                        <div>
                            <!-- 拿到数组的img并渲染 -->
                            <img :src="item.image" alt="image">
                            <span>{{ item.name }}</span>
                            <span style="font-size: 12px; color:rgb(121, 121, 119); margin-top: 5px;">{{ item.introduce }}</span>
                            <span style="font-size: 15px; color:rgb(241, 128, 36); margin-top: 5px;">{{ item.price }}</span>
                        </div>
                    </router-link>
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
          { id: 1, name: "REDMI Watch 5", introduce:"2.07英寸高刷高亮大屏|24天超长续航", price:"599元起", image: new URL('/src/assets/index/TwoXiaomi/REDMI Watch 5.jpg', import.meta.url).href,},
          { id: 2, name: "Xiaomi Watch S4", introduce:"徕卡光学 Summilux 高速镜头", price:"199元起", image: new URL('/src/assets/index/TwoXiaomi/Xiaomi Watch S4.jpg', import.meta.url).href,},
          { id: 3, name: "REDMI Buds 6 Pro", introduce:"小米首发圈瓷同轴三单元|55dB深度降噪", price:"399元起", image: new URL('/src/assets/index/TwoXiaomi/REDMI Buds 6 Pro.jpg', import.meta.url).href,},
          { id: 4, name: "Redmi Buds 6 青春版", introduce:"42dB深度主动降噪|双麦A通话", price:"139元起", image: new URL('/src/assets/index/TwoXiaomi/Redmi Buds 6 青春版.jpg', import.meta.url).href,},
          { id: 5, name: "Redmi Buds 6", introduce:"旗舰双单元架构|49dB深度降噪", price:"199元起", image: new URL('/src/assets/index/TwoXiaomi/Redmi Buds 6.jpg', import.meta.url).href,},
          { id: 6, name: "Xiaomi Buds 5", introduce:"舒适无感佩戴|高通全链路无损音频", price:"679元起", image: new URL('/src/assets/index/TwoXiaomi/Xiaomi Buds 5.jpg', import.meta.url).href,},
          { id: 7, name: "Redmi Buds 6S", introduce:"14.2mm超大动圈单元|半入耳主动降", price:"199元起", image: new URL('/src/assets/index/TwoXiaomi/Redmi Buds 6S.jpg', import.meta.url).href,},
          { id: 8, name: "Redmi Buds 6 活力版", introduce:"14.2mm超大动圈|内置五种调音模式", price:"99元起", image: new URL('/src/assets/index/TwoXiaomi/Redmi Buds 6 活力版.jpg', import.meta.url).href,},
        ]
      };
    },
    methods: {
        getProductUrl(product) {
            // 通过/ProductDetails?参数名 的路由传参的方式把商品数据传递给/ProductDetails页面。
            return '/ProductDetails?id=' + product.id + //商品id
            '&word=' + encodeURIComponent(product.name) +  //商品名称
            '&introduce=' + encodeURIComponent(product.introduce) + //商品说明
            '&price=' + encodeURIComponent(product.price) + //商品价格
            '&image=' + encodeURIComponent(product.image) //商品图片
        }
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
        box-shadow:1px 20px 20px -2px rgb(197, 196, 196)/* 边框阴影 */
    }
</style>