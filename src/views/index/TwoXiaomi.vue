<template>
  <div class="box">
    <div class="box-center">
        <div class="box1">
            <a href="">
                <img src="/src/assets/index/TwoXiaomi/box1.jpg" alt="">
            </a>
        </div>
        <TwoXiaomi_phone></TwoXiaomi_phone>
        <TwoXiaomi_watch></TwoXiaomi_watch>
        <TwoXiaomi_computer></TwoXiaomi_computer>
        <Bottom_pen></Bottom_pen>
    </div>
  </div>
</template>

<script setup>
import TwoXiaomi_phone from './TwoXiaomi_phone.vue'
import TwoXiaomi_watch from './TwoXiaomi_watch.vue'
import TwoXiaomi_computer from './TwoXiaomi_computer.vue'
import Bottom_pen from './Bottom_pen.vue'
</script>

<style scoped>
.box{
    width: 100%;
    height: 100%;
    background-color: #f8f6f6;
    /* flex布局，子代居中 */
    display: flex;
    justify-content: center;
    text-decoration: none;
}
.box .box-center{
    width: 1440px;
    margin-top: 30px;
}
.box .box-center .box1 img{
    width: 100%;
}
</style>