<template>
  <div class="box">
    <div class="centerbox">
        <div class="title">
            <!-- <button @click="this.isshow = false">隐藏</button> -->
            <button @click="expand">V</button>
            <span>电视</span>
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
                {id: 1 , name:"旗舰系列-S Pro Mini LED" , image: new URL('/src/assets/All_products/旗舰系列-S_Mini_LED.jpg', import.meta.url).href,},
                {id: 2 , name:"旗舰系列-S Mini LED" , image: new URL('/src/assets/All_products/旗舰系列-S_Pro_Mini_LED.jpg', import.meta.url).href,},
                {id: 3 , name:"巨幕影院-Redmi MAX" , image: new URL('/src/assets/All_products/巨幕影院-Redmi_MAX.jpg', import.meta.url).href,},
                {id: 4 , name:"游戏高刷-Redmi X 2025" , image: new URL('/src/assets/All_products/游戏高刷-Redmi_X_2025.jpg', import.meta.url).href,},
                {id: 5 , name:"性价比爆款-Redmi A Pro" , image: new URL('/src/assets/All_products/性价比爆款-Redmi_A_Pro.jpg', import.meta.url).href,},
                {id: 6 , name:"性价比爆款-Redmi A 2025.jpg" , image: new URL('/src/assets/All_products/性价比爆款-Redmi_A_2025.jpg', import.meta.url).href,}
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
    width: 250px;
    text-decoration: none;
    text-align: center;
    /* border: 1px solid red; */
    color: rgb(163, 163, 160);
    display: flex;
    flex-direction: column;
}
.box .centerbox .content .centerbox a img{
    width: 100%;
    height: 150px;
    /* border: 1px solid red; */
}
.box .centerbox .content .centerbox a:hover{
    color: red;
}
</style>