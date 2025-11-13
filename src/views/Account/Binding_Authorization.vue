<template>
  <div>
    <TwoNavigation></TwoNavigation>
    <Footprints></Footprints>
    <div class="body">
        <div class="center">
          <div class="left">
            <!-- 引入导航 -->
            <Navigation></Navigation>
          </div>
          <div class="right">
            <div class="right-title">绑定授权</div>
            <div class="right-body">
              <a href="" v-for="item in dlfs" :key="item.id">
                <div class="dlfs">
                  <div class="box">
                    <div>
                      <img :src="item.img" alt="">
                    </div>
                    <div class="span">
                      <span>{{ item.span1 }}</span>
                      <span class="box-Introduction">{{ item.span2 }}</span>
                    </div>
                  </div>
                  <span>{{ item.span3 }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
    </div>
    <Boottom_Navigation></Boottom_Navigation>
  </div>
</template>

<script>
import TwoNavigation from '/src/components/TwoNavigation.vue';
import Footprints from './Footprints.vue'
import Navigation from './Navigation.vue';
import Boottom_Navigation from './Boottom_Navigation.vue';
export default {
  data() {
    return {
      user: "null",
      userAddressesDatalength: "",
      dlfs: [
        { span1: "小爱同学", span2:"您已授权小爱同学", img:"https://file.ai.xiaomi.com/anonymous/file/4b8888ea0000400fa657993d", span3:">"},
        { span1: "小爱训练计划", span2:"您已授权小爱训练", img:"https://file.static.xiaomi.net/download/AppStore/026b15dfde32acdf96ee760ad22e7c94cd140e8ff", span3:">"},
        { span1: "小米汽车", span2:"您已授权小米汽车", img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBwUGCAT/xABCEAABAwMBBAUGBxEAAAAAAAABAAIDBAURBgcSITETQVFhgRRxobGy0RciI0JykcEWJzIzNVJiZHN1goOTlMLS4f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAARARIC/9oADAMBAAIRAxEAPwDSEIQtMhCEhQBTSUOKjJVASmOKHOTCUASo3FDnJhKAJTC7ikc5NyoM0hCQoBbHpnRN51I0TUsTYKPOPKZyQ130Rzd6u9GgNPN1JqGOnnB8jhb01Rj5zQeDfEkeGV0A1rIY2xRMaxjAGta0YDQOQATdVWdLsfo2sHl15qZH9fQRNYPTvL0fBNYWg5rbkf5kf+isFzlC5yCu5dklmP4u43Jh7zGR7KwF42TV0DHSWq4w1WOIimZ0Tj5nZIJ8+FbznKJxyqlcxV1LU0FVJS1sEkFRGcPjkGCP+d68rnK9NpmnI71Y5auGMeX0TDJE4Di9g4uYe3hkjv8AOVRGetAEppcmuKblQbAmlyHFRkqi3dh9O1tvu1Zj4752Q57mt3v81tutr/JpywS3KGBlQ9kjGdG9xaPjOxzC1nYscaYrD21zvYYvVtednRNT+3h9sKK1GXbNUsOJLXRNPYakj7Exm2aoe7DbVRyfotqjn1FZHZ7cnWjZxdbjHE2V9NPLI1jjgOIYzgSvZpfUw13S3eiultpmRQws/BJdnf3x18iN3gQqjMaO1hSaqgm6KF9NVQbplgc7eAB5FruGRwI5A93JYC17Q6mv1kLC63QsiNXPT9MJSXfJ7/HGMcdz0rUti87zqiRueElue5w7w+P3leXTR++y396VnqmQXkSORGQeY7VzBcIG0dfV0jODaeeSEcepri37F04SubdUDd1Ndx+vTe2VdTGMJTC5I4puVlWwkqNxQ4phKouLYrIDp6vZ1trifrjZ7l7drzwNEVOSAOnh5/TC1PYvdGwXO4WyR+PKY2yxA/nMzvDzkOB/hVrTNZMwslY17exwyEKqnS7x8EWoDkY3pvYYodi7w6e/4IPyEHrlVr9DCyN0bIo2xnmwMAB8ExkUMOehijj3ue40DP1KxKpPYo4HVXAjhbZPbiUOmnA7Wg3IyLnWcPCVXbHBBC7eigijdjGWMAPoTOggbJ0jYIhJnO+GDOfOkKlJXNGopel1BdXjk6tnI/qOXRF3uMVqtdVcJziOnidIe/A4DxOB4rmZ73vJfI7ekcd5x7SeZT0eSEppKQlIsqz5KjcUOKYSqJ6OsnoKyGspJDFUQvD43jqPu7ldOltoNqvcLIqyWOhuGAHRSu3WPPaxx4HzHj61RbnZTHdhQdRE5AI4g8j2phXMdPXVdG3co6yppmj5sEzox6CF6PuhvYH5auX93J71akdIkrwXS60FqgM1yrIaaMdcrwM+Ycz4LneW+3iQYku9xcOw1cmPWsdI4veZHkukdzc45J8U6OW6bQdcHURbQ29r4rbG/eJfwdO4ciR1NHMDxOMcNHJQSkUUIQhQZglRuKVyYUCEpjihxTCgCVG4pXFMKBCUwlB5pEAhCEAhCEH/2Q==", span3:">"},
      ]
    }
  },
  mounted() {
    // 在组件挂载后执行
    try {
      // 获取localStorage的数据
      const userData = JSON.parse(localStorage.getItem("userinfo"));//用户信息
      console.log("用户信息", userData?.username);
      this.user = userData?.username || "null";
      const userAddressesData = JSON.parse(localStorage.getItem("userAddresses"));//用户收货地址
      console.log("收货地址数量", userAddressesData.length);
      this.userAddressesDatalength = userAddressesData.length || "0";
    } catch (error) {
      console.error("解析用户信息失败:", error);
      this.user = "null";
    }
  },
  components: { 
    TwoNavigation,
    Footprints,
    Navigation,
    Boottom_Navigation
  },
}
</script>

<style scoped>
/* Body */
.body {
  width: 100%;
  height: 85vh;
  flex: 1; /* Take up the remaining vertical space */
  display: flex;
  justify-content: center;
  background-color: #f9f9f9; 
}

.body .center {
  width: 80%;
  max-width: 1200px; 
  display: flex;
  /* background-color: #f9f9f9; */
  padding: 20px; 
}

.body .center .left {
  width: 200px;
  background-color: #fff;
  margin-right: 20px;
}
.body .center .right{
  flex: 1;
  background-color: #fff;
  padding: 0px 40px 40px 0px;
  max-height: 100%;/* 最大高度 */
  overflow-y: auto;/* 垂直滚动条 */
}
.body .center .right .right-title{
  margin-top: 30px;
  margin-left: 10px;
  padding-left: 5px;
  border-left: 5px solid blue;
  color: black;
  font-size: 19px;
  font-weight: bold;
}
.body .center .right .right-body{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.body .center .right .right-body a{
  color: black;
  font-size: 17px;
  text-decoration: none;
}
.body .center .right .right-body .dlfs{
  width: 100%;
  padding: 14px 20px;
  /* background-color: #fddede; */
  display: flex;
  justify-content: space-between;
}
.body .center .right .right-body .dlfs .box{
  display: flex;
  flex-direction: row;
}
.body .center .right .right-body .dlfs .box img{
  width: 40px;
  height: 40px;
  /* border: 1px solid red; */
}
.body .center .right .right-body .dlfs .box .span{
  display: flex;
  flex-direction: column;
  margin-left: -20px;
}
.body .center .right .right-body .dlfs .box .box-Introduction{
  color: rgba(0, 0, 0, .6);
  font-size: 13px;
}
.body .center .right .right-body .dlfs span{
  margin-left: 30px;
  margin-right: 30px;
}
.body .center .right .right-body .dlfs:hover{
  background-color: #ebebeb;
}
</style>