<template>
  <div class="box">
    <div class="center">
        <ul>
            <li><a href="">手机申诉解锁</a></li>
            <li><a href="">服务状态</a></li>
            <li><a href="">隐私政策</a></li>
            <li><a href="">用户协议</a></li>
            <li>版权所有©2025 Xiaomi . All rights reserved</li>
            <li><a href="">京ICP备10046444号</a></li>
            <li><a href="">京公网安备11010802020134</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
    width: 100%;
    /* background-color: greenyellow; */
    display: flex;
    justify-content: center;
}
.box .center{
    width: 65%;
    font-size: 15px;
    color: rgb(134, 134, 134);
    background-color: #fff;
}
.box .center ul li{
    margin-left: 30px;
    list-style: none;
    float: left;
}
.box .center ul li a{
    text-decoration: none;
    color: rgb(134, 134, 134);
}
.box .center ul li a:hover{
    color: black;
}
</style>