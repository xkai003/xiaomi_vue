<template>
  <div class="bigbox">
    <div class="centerbox">
        <div class="box1">
            <!-- left -->
            <div>
                <a href=""><img src="/src/assets/index/OneXiaomi/保障服务.png" alt=""></a>
                <span>保障服务</span>
            </div>
            <div>
                <a href=""><img src="/src/assets/index/OneXiaomi/企业团购.png" alt=""></a>
                <span>企业团购</span>
            </div>
            <div>
                <a href=""><img src="/src/assets/index/OneXiaomi/F码通道.png" alt=""></a>
                <span>F码通道</span>
            </div>
            <div>
                <a href=""><img src="/src/assets/index/OneXiaomi/米粉卡.png" alt=""></a>
                <span>米粉卡</span>
            </div>
            <div>
                <a href=""><img src="/src/assets/index/OneXiaomi/以旧换新.png" alt=""></a>
                <span>以旧换新</span>
            </div>
            <div>
                <a href=""><img src="/src/assets/index/OneXiaomi/话费充值.png" alt=""></a>
                <span>话费充值</span>
            </div>
        </div>
        <div class="box2">
            <!-- <a href=""><img src="/src/assets/index/OneXiaomi/Xiaomi15系列.png" alt=""></a> -->
            <router-link to="/Xiaomi15_series"><img src="/src/assets/index/OneXiaomi/Xiaomi15系列.png" alt=""></router-link>
            <router-link to="/Xiaomi15_series"><img src="/src/assets/index/OneXiaomi/Redmi电视.png" alt=""></router-link>
            <router-link to="/Xiaomi15_series"><img src="/src/assets/index/OneXiaomi/Xiaomi Watch.png" alt=""></router-link>
        </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.bigbox{
    width: 100%;
    height: 100%;
    margin-top: 20px;
    /* background-color: #c59393; */
    display: flex;
    justify-content: center;
    padding: 20px 0px 20px 0px;/* 内边距 */
}
.bigbox .centerbox{
    width: 1440px;
    height: 200px;
    /* background-color: #a6e6c6; */
    display: flex;
    flex-direction: row;
}
.bigbox .centerbox .box1{
    width: 230px;/* 设置导航栏的长度 */
    height: 100%;
    background-color: #5a5757;
}
.bigbox .centerbox .box1 div{
    display: block;
    text-decoration: none;
    width: 74px;
    height: 49%;
    border: 1px solid rgb(87, 86, 86);
    float: left;/* 各盒子横向排放 */
    /* 文字布局 */
    display: flex;
    flex-direction: column;/* 纵向排放 */
    justify-content: center;/* 横向居中 */
    align-items: center;/* 纵向居中 */
}
.bigbox .centerbox .box1 a img{
    width: 30px;
    height: 30px;
}
.bigbox .centerbox .box1 div:hover{
    color: #ece8e8;
    cursor: pointer;
}
.bigbox .centerbox .box1 div span{
    font-size: small;
}
.bigbox .centerbox .box2{
    float: left;
}
.bigbox .centerbox .box2 a{
    text-decoration: none;
    margin-left: 20px;
}
.bigbox .centerbox .box2 img{
    width: 383px;
    height: 100%;
}
.bigbox .centerbox .box2 a:hover img{
    box-shadow:1px 20px 20px -2px rgb(197, 196, 196)/* 边框阴影 */
}
</style>