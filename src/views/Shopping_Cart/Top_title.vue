<template>
    <div class="box">
        <div class="center">
            <!-- loge -->
            <div class="loge">
                <div>
                    <img src="/src/assets/index/TopNavigation/logo.jpg" alt="">
                </div>
            </div>
            <!-- title -->
            <div class="title">
                <span class="p">我的购物车</span>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 大盒子 */
.box{
    width: 100%;
    height: 100px;
    background-color: #fff;
    /* flex设置中盒子居中 */
    display: flex;
    justify-content: center;
    border-bottom: 2px solid red;/* 盒子下划线 */
}
/* 居中盒子 */
.box .center{
    width: 50%;
    /* background-color: #e22626; */
    /* flex设置中盒子内的盒子横向排列 */
    display: flex;
    flex-direction: row;
}
/* loge */
.box .center .loge{
    width: 100px;
    height: 100%;
    /* background-color: #cbdb6f; */
    /* 设置loge盒子内的图片居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}
/* loge图片 */
.box .center .loge img{
    border-radius:15%;/* 边框圆角 */
}
/* title */
.title{
    /* background-color: #eb6868; */
    line-height: 90px;
}
.title .p{
    font-size: 30px;
}
.title span{
    font-size: 15px;
    margin-left: 20px;
}
</style>