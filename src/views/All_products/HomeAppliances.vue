<template>
  <div class="box">
    <div class="centerbox">
        <div class="title">
            <!-- <button @click="this.isshow = false">隐藏</button> -->
            <button @click="expand">V</button>
            <span>家电</span>
        </div>
        <div class="content" v-show="isshow" >
            <div class="centerbox" v-for="item in list" :key="item.id">
                <a href="">
                    <img :src="item.image" alt="Logo">
                    <span>{{ item.name }}</span>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isshow:true,
            list: [
                {id: 1 , name:"壁挂空调" , image: new URL('/src/assets/All_products/壁挂空调.jpg', import.meta.url).href,},
                {id: 2 , name:"立式空调" , image: new URL('/src/assets/All_products/立式空调.jpg', import.meta.url).href,},
                {id: 3 , name:"中央空调" , image: new URL('/src/assets/All_products/中央空调.jpg', import.meta.url).href,},
                {id: 4 , name:"冰箱" , image: new URL('/src/assets/All_products/冰箱.jpg', import.meta.url).href,},
                {id: 5 , name:"滚筒洗衣机" , image: new URL('/src/assets/All_products/滚筒洗衣机.jpg', import.meta.url).href,},
                {id: 6 , name:"波轮洗衣机" , image: new URL('/src/assets/All_products/波轮洗衣机.jpg', import.meta.url).href,},
                {id: 7 , name:"除湿机" , image: new URL('/src/assets/All_products/除湿机.jpg', import.meta.url).href,},
                {id: 8 , name:"洗地机" , image: new URL('/src/assets/All_products/洗地机.jpg', import.meta.url).href,},
                {id: 9 , name:"电暖器" , image: new URL('/src/assets/All_products/电暖器.jpg', import.meta.url).href,},
                {id: 10 , name:"净水器" , image: new URL('/src/assets/All_products/净水器.jpg', import.meta.url).href,},
                {id: 11 , name:"微蒸烤" , image: new URL('/src/assets/All_products/微蒸烤.jpg', import.meta.url).href,},
                {id: 12 , name:"烟灶" , image: new URL('/src/assets/All_products/烟灶.jpg', import.meta.url).href,},
                {id: 13 , name:"洗碗机" , image: new URL('/src/assets/All_products/洗碗机.jpg', import.meta.url).href,},
                {id: 14 , name:"扫地机器人" , image: new URL('/src/assets/All_products/扫地机器人.jpg', import.meta.url).href,},
                {id: 15 , name:"吸尘器" , image: new URL('/src/assets/All_products/吸尘器.jpg', import.meta.url).href,},
                {id: 16 , name:"加湿器" , image: new URL('/src/assets/All_products/加湿器.jpg', import.meta.url).href,},
                {id: 17 , name:"空气净化器" , image: new URL('/src/assets/All_products/空气净化器.jpg', import.meta.url).href,},
                {id: 18 , name:"电饭煲" , image: new URL('/src/assets/All_products/电饭煲.jpg', import.meta.url).href,},
                {id: 19 , name:"电磁炉" , image: new URL('/src/assets/All_products/电磁炉.jpg', import.meta.url).href,},
                {id: 20 , name:"水壶" , image: new URL('/src/assets/All_products/水壶.jpg', import.meta.url).href,},
                {id: 21 , name:"落地风扇" , image: new URL('/src/assets/All_products/落地风扇.jpg', import.meta.url).href,},
                {id: 22 , name:"投影仪" , image: new URL('/src/assets/All_products/投影仪.jpg', import.meta.url).href,},
                {id: 23 , name:"灯具" , image: new URL('/src/assets/All_products/灯具.jpg', import.meta.url).href,},
                {id: 24 , name:"除螨仪" , image: new URL('/src/assets/All_products/除螨仪.jpg', import.meta.url).href,},
            ]
        }
    },
    methods: {
        // 展开隐藏动作
        expand() {
            this.isshow = !this.isshow
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 100%;
    margin-top: 30px;
    /* background-color: #e0a0a0; */
    /* flex布局 */
    display:flex;
    justify-content: center;
}
.box .centerbox{
    width: 80%;
    display: flex;
    flex-direction: column;
}
.box .centerbox .title{
    display: block;
    height: 50px;
    line-height: 80px;
    /* background-color: #f2f7af; */
}
.box .centerbox .title button{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    border: 1px solid rgb(163, 163, 160);
}
.box .centerbox .title button:hover{
    cursor: pointer;
}
.box .centerbox .title span{
    font-size: 20px;
    margin-left: 10px;
    color: orange;
}
.box .centerbox .content{
    /* border: 1px solid rgb(163, 163, 160); */
    margin-top: 30px;
}
.box .centerbox .content .centerbox{
    float: left;
    width: 300px;
    height: 200px;
    border: 1px solid rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    align-items: center;
}
.box .centerbox .content .centerbox a{
    text-decoration: none;
    text-align: center;
    /* border: 1px solid red; */
    color: rgb(163, 163, 160);
    display: flex;
    flex-direction: column;
}
.box .centerbox .content .centerbox a img{
    width: 100px;
    height: 100px;
    margin: 10px;/* 图片的外边距 */
}
.box .centerbox .content .centerbox a:hover{
    color: red;
}
</style>