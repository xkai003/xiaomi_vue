<!-- 第二层导航--------【TwoNavigation文件】 -->
<template>
    <div class="TopNavigation">
      <div class="TopNavigation-one">
        <!-- loge -->
         <div class="loge">
            <img src="/src/assets/index/TopNavigation/logo.jpg" alt="">
         </div>
        
        <!-- 导航 -->
         <div>
            <ul>
                <li v-for="item in list" :key="item.id">
                    <a href="">{{ item.name }}</a>
                </li>
            </ul>
         </div>
        
        <!-- 预约试驾 -->
        <div class="yysj">
            <div>
                <a href="">预约试驾</a>
                <a href="">
                    <svg t="1728746556776" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2483">
                    <path d="M637.953132 548.278251c71.730695-40.298821 120.348995-116.815519 120.348995-204.542536 0-129.46256-105.705484-234.781234-235.641835-234.781234-129.936351 0-235.628532 105.318674-235.628532 234.781234 0 84.393085 45.041846 158.307516 112.302739 199.683878-152.041812 47.787376-262.605953 189.523471-262.605953 356.600721 0 5.058203 0.560772 9.956769 0.762363 14.97404l52.356438 0c-0.230244-4.986571-0.76134-9.914814-0.76134-14.97404 0-177.279612 144.855132-321.502341 322.909387-321.502341 178.054255 0 322.910411 144.222729 322.910411 321.502341 0 5.058203-0.532119 9.987468-0.775666 14.97404l52.371788 0c0.200568-5.016247 0.760317-9.914814 0.760317-14.97404C887.263268 737.931682 783.009855 600.017636 637.953132 548.278251zM339.389222 343.735715c0-100.588953 82.208327-182.423773 183.27107-182.423773 101.06479 0 183.272094 81.83482 183.272094 182.423773 0 100.589976-82.207303 182.423773-183.272094 182.423773C421.597549 526.159488 339.389222 444.325691 339.389222 343.735715z" p-id="2484">
                    </path>
                    </svg>
                </a>
            </div>
        </div>
        
      </div>
    </div>
  </template>
  
<script>
export default {
data() {
    return {
    list: [
        { id: 1, name: "首页" },
        { id: 2, name: "小米SU7" },
        { id: 3, name: "核心技术" },
        { id: 4, name: "小米汽车工厂" },
        { id: 5, name: "门店查询" },
        { id: 6, name: "服务介绍" }
    ]
    };
}
};
</script>

<style scoped>
.TopNavigation{
    width: 100%;
    height: 80px;
    background-color: rgb(245, 195, 131);
}
.TopNavigation .TopNavigation-one{
    width: 100%;
    /* 让TopNavigation-one 的子代平摊空间 */
    display: flex;
    justify-content: space-between;
    background-color: rgb(73, 72, 72);
}
/* loge */
.TopNavigation .TopNavigation-one .loge{
    width: 150px;
    height: 80px;
    display: flex;
    justify-content: center;/* 水平居中 */
    align-items: center;/* 垂直居中 */ 
    /* background-color: #c7e991; */
}
.TopNavigation .TopNavigation-one .loge img{
    width: 35px;
    height: 35px;
    border-radius:15%;/* 边框圆角 */
}
/* loge end*/

/* 导航 */
.TopNavigation .TopNavigation-one li{
    list-style: none;
    float: left;/* 各li标签横向排放 */
    margin-top: 8px;
    margin-left: 90px;/* 各li标签距离 */
}
/* a标签 */
.TopNavigation .TopNavigation-one li a{
    height: 40px;
    display: block;
    color: rgb(243, 243, 243);
    text-decoration: none;
    font-size:19px;
    /* background-color: #e07373; */
}
/* 鼠标经过a标签时a标签下划线 */
.TopNavigation .TopNavigation-one li a:hover{
    border-bottom: 3px solid #fff;
}
/* 导航 end*/

/* 预约试驾 */
.TopNavigation .TopNavigation-one .yysj{
    width: 200px;
    /* background-color: #dd4b4b; */
    display: flex;
    align-items: center;
}
.TopNavigation .TopNavigation-one .yysj div{
    width: 100%;
    /* background-color: #b2f06b; */
    display: flex;
    flex-direction: row;
}
.TopNavigation .TopNavigation-one .yysj div a{
    width: 120px;
    margin-left: 20px;
    color: rgb(243, 243, 243);
    text-decoration: none;
    font-size:19px;
    /* background-color: #419fec; */
}
.TopNavigation .TopNavigation-one .yysj div a:hover{
    color: #e07373;
}
.TopNavigation .TopNavigation-one .yysj div a .icon1{
    width: 30px;
} 
/* 预约试驾 end */
</style>