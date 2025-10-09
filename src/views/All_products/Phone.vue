<template>
  <div class="box">
    <div class="centerbox">
        <div class="title">
            <!-- <button @click="this.isshow = false">隐藏</button> -->
            <button @click="expand">V</button>
            <span>手机</span>
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
                {id: 1 , name:"Xiaomi 数字旗舰" , image: new URL('/src/assets/All_products/Xiaomi_数字旗舰.jpg', import.meta.url).href,},
                {id: 2 , name:"Xiaomi MIX系列" , image: new URL('/src/assets/All_products/Xiaomi_MIX系列.jpg', import.meta.url).href,},
                {id: 3 , name:"Xiaomi Civi系列" , image: new URL('/src/assets/All_products/Xiaomi_Civi系列.jpg', import.meta.url).href,},
                {id: 4 , name:"Redmi K系列" , image: new URL('/src/assets/All_products/Redmi_K系列.jpg', import.meta.url).href,},
                {id: 5 , name:"Redmi Turbo系列" , image: new URL('/src/assets/All_products/Redmin_Turbo系列.jpg', import.meta.url).href,},
                {id: 6 , name:"Redmi Note系列" , image: new URL('/src/assets/All_products/Redmi_Note系列.jpg', import.meta.url).href,},
                {id: 7 , name:"Redmi数字系列" , image: new URL('/src/assets/All_products/Redmi数字系列.jpg', import.meta.url).href,}
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