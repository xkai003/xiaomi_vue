<template>
  <div class="box">
    <div class="centerbox">
        <div class="title">
            <!-- <button @click="this.isshow = false">隐藏</button> -->
            <button @click="expand">V</button>
            <span>笔记本&nbsp;平板&nbsp;显示器</span>
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
                {id: 1 , name:"Xiaomi Pad 7 Pro" , image: new URL('/src/assets/All_products/Xiaomi_Pad_7_Pro.jpg', import.meta.url).href,},
                {id: 2 , name:"Xiaomi Pad 7" , image: new URL('/src/assets/All_products/Xiaomi_Pad_7.jpg', import.meta.url).href,},
                {id: 3 , name:"REDMI Book Pro 16" , image: new URL('/src/assets/All_products/REDMI_Book_Pro_16.jpg', import.meta.url).href,},
                {id: 4 , name:"REDMI Book Pro 14" , image: new URL('/src/assets/All_products/REDMI_Book_Pro_14.jpg', import.meta.url).href,},
                {id: 5 , name:"Redmi 平板" , image: new URL('/src/assets/All_products/Redmi_平板.jpg', import.meta.url).href,},
                {id: 6 , name:"Xiaomi 平板" , image: new URL('/src/assets/All_products/Xiaomi_平板.jpg', import.meta.url).href,},
                {id: 7 , name:"REDMI Book 14 2025" , image: new URL('/src/assets/All_products/REDMI_Book_14_2025.jpg', import.meta.url).href,},
                {id: 8 , name:"REDMI Book 16 2025" , image: new URL('/src/assets/All_products/REDMI_Book_14_2025.jpg', import.meta.url).href,},
                {id: 9 , name:"办公娱乐显示器" , image: new URL('/src/assets/All_products/办公娱乐显示器.jpg', import.meta.url).href,},
                {id: 10 , name:"游戏电竞显示器" , image: new URL('/src/assets/All_products/游戏电竞显示器.jpg', import.meta.url).href,},
                {id: 11 , name:"Redmi 显示器 G34WQ" , image: new URL('/src/assets/All_products/Redmi_显示器_G34WQ.jpg', import.meta.url).href,},
                {id: 12 , name:"Redmi G Pro27" , image: new URL('/src/assets/All_products/Redmi_G_Pro27.jpg', import.meta.url).href,}
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