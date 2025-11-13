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
            <div class="right-title">隐私中心</div>
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
        { span1: "管理您的数据", span2:"从小米提供的服务或App中下载或删除与您的小米账号相关的数据", img:"data:image/png;base64,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", span3:">"},
        { span1: "注销账号", span2:"永久删除小米账号及其下所有数据并永远无法恢复", img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAABUFBMVEVI03ll5JIAAABa2YhD0XVa3oZW3YVo5ZRi4pBm5ZJD0nSO6a9t4JWY77dN13595aKB6KVs45ZP1oBf2opz4ZmG6qp65Z+G6KiU7rRu4JVP14BJ1Hp45p9v5Jis8sWn8cGV7LOA5aSB6KVn4pN746Cv88ZS1oFd2Yia7reC6KZl3pCx88hd2Iiw8sed7bqF66mn8cGr88Wb77lP1X6S7LKM665r4JSq8cOd8Lp14Jto3pJw35dO1H6N7a+n8cGf7rtv3pdb24hx3JdP032L56yh77yT7bOj8cCO665N031b24hf3opt3JVP0n6Q7rGM7K6A4aJq2pFR1ICK6KtM03uT7rOM662u88ab77h75qJg3o136KBQ1n9Y2oZj349q5ZZd3Yp66qKF5qdy6ZyX67R14p2h8b195aKa77mI7qyC7KeR77Kn8MF54Z5x5Jpn2pAxZ7QZAAAAXHRSTlMxMQAKKRQaKCwiIP7+njebT0I//v3l4p2Ab1lJRzv99eaAVzjr6tCqkl9P/vn19fLWzcfDwsC/vaKYi3xxZOrp6OXd3dDKtaiKf31lWPLw6eDPsaqgeG7e1828u7fbXHQAAARySURBVEjHldf3W9pAHAbw0EsCBMJQkCEoCBbEUXfdq9bZ1lpHlwRFVq3j//+t712A4xL6IK8K6uMn731zYSi96RqiqG6n0+VwOFxOp1tVSPc/66IJKLPAlJteIaSnZtbtdNjjdMP30kTFervH6VSJVVvXzHt79Nu16ugV9X8aA7t6ahfqBc1xD8m5TRNM/Lp0nDypX4x2cFETBfj1XCGCxsz9xK10aEIsZ7v3qSOEa9WOM8lgJjk2FsgkE8kuXOVacdgTDGwmAvphPhG4Dti45HApLU1sQyc29ffvD6NXc9/nNqP4Lj8RbEMJX4hGmLZvVjIQPfw+PT2n58cnx6/08enxWf06kTExo7iTVWJqYCGB/Nzk5OT03IoOHV3ZGhkZmX5/lQBxmFKicVJt3+pNfXYUYPTjir71uBXVt0drj49bH4/GQFrVbHICjd0Sl63PjjzWarXRj7q+XduO6qlKo4Ef548SmaZkcWlUW6rHVmZhG43GzLweSVVS6UjK46lUGjhaNADcqpYkWYEW9zoRnR2tNf4iX6DPPOF0JFwul3GAxvb8dZJ34059IxFVHHrlEfgP8mUx4g+Xw2l/uF6vw1cqM3k6Oi9XiWS5wvM/KH54eGA6W8+m/UPV5+dqnfLFdAuyQ2iKJGx2JngwQ/Hd3d3Du6XIavZpaB26VPKGnsBTuo+XS5JbldydOjgxb2Lk3ZJ/NVul2lsyDMNbxfAHQfD2FSNrgpYCRz8Yvr839U5oZ311yAsMjvb9WLCjXHZL/OkbvxzTUyYGf7fvX9vx7sVWs9C3t4aBxe+nC+1uaFlyMd28iCYOzv4AmzocWT/fW475q17gIuX1r/5PzHHdee1PLJ49AJdKpfu7smcpHYvF/D+pLhaLg1g71zx8komlMHQJeYZOLV7oF/vZqmEAg7+ELBrdJnSY3QdhVo1U6/T6mPF46iFUsxjePZsGZ2Fn7QIalJaz66PiKT+xhd/c3BQHvXtrBXFuZ7scn4Wjobaugns8ZVQbwEy/nMeConZDt8uDsZ93kCwh8HK5zs4ZKOUvywVfp3ZLmtzRnQn+ZtUGPmh9tRryGoOsGn5qKucTtCap7nY14vMPgYEjuLq9XqOFkanzNU6pVvEYa1Wz2/VlUIrB2G0RuKVzp4LGY4yofL+RwpoXnNpbGljgpt89GRC0SvDcInT7Tpd3KGaU2XY+5OKWhUMrMp8bGThdFjD9YPn8Le4TMHteIxqniG/g5NcUXzXSwhvAnVojVKNcSOHk1+5g07aLP3zbGJZErVD9hogai4/ndoXThZkvh9EsatJ8HRM5Fh8/yb3d5XThciNuw6qp2eTW+tO13MLCW5qFhcvjuLhVHa+hCCa3xzcc3zg+Pt6ID/Dazqk73jt05QPDNN2xSrgmGngfwW5xjbX3qRXL+zVZ7gcT63vFHtw+NNOc94O57mvxMls215xrcm+sAVs0X/3rV23XtL5HsU1b6mW5O5V5sV3b++29r/1fUJMRkyGaqnJr1/YDMN+0nFryD9TcEXI7d/LeAAAAAElFTkSuQmCC", span3:">"},
        { span1: "撤回同意的隐私政策", span2:"撤回对隐私政策的同意，将永久删除小米账号及其下所有数据并永远无法恢复", img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABFFBMVEUAAAD/wnX/qDD/tVP/oxz/r0f/ul7/ngH/yYT/rD7/vGv/vGb/u0n/xXj/eCD/oR7/uV7/oSr/qjz/mwj/ngD/vWX/z4//fwD/kSj/zor/zIb/xn3/by3/li//yIL/pCP/ihj/ihf/dir/agX/nD3/qkn/tFn/tFn/oQv/ZAD/bgD/kRX/kR3/bAD/jAD/iyj/kyP/ghL/fg7/mC//dzH/miv/ozb/lzX/nQ//ih7/jgH/dCH/YgD/VBH/igD/YhT/bSv/YwD/mBf/cwD/iQD/dwD/mDr/ciT/gwD/agD/ZwD/bwD/YQD/XQD/ZAH/fQD/dAD/YAH/igH/WQD/eAD/hQD/VgD/Vw3/VBn/gQD/eBn/bBbEYOINAAAASXRSTlMAMzMyMzMzMzMzMzIGEpkqGRMaGi4qGbNMLysemVkmIPLmpZlmTEAlJeXf07+zsqyZmZmLgIBAQBH+8vHx5eXMv7+zpoyMf3Nmtvdt8gAAAsdJREFUSMeNlOd22kAQhTcWkrEKAmxiDAbcu2Mnrum9gBCiuiTv/x6ZWWaZXSSf5B4dfn135s5ohEgrqDdra/l8vtasB774l54380rPUBX2ZOJrjM9U9/8L1xxuMRP3a/kneNetZDQJZuUJZh7kBak4iKbze0g7ruc4xXmeYaan1R3PcZ05R8C4HgYMDsjzPPi1Am1ezp8KLy3IWxZPXuPNaNVBTKOhYg5g8iAMAg9ZUEUKlBF/bwdQhpWEVD0d/mLj9Q+uT7Rt2WVuoK9y72z4mJzjdlR6xG18aKXmMnePJ0kUveRpqTwKW9SMaT13Z+NxHLXbyoBiwz4m0ooDfzFM+sC3XzmWVl9pCRIZt7B3MuU7HTCQmAaVRF1/Vbubk6TfRr5TcL4cX5GF+YWyaCoedPVmAvGR73UK1ovh8GQXYcYXFlqiwm/2fJiMo0jy3R4YkmSy2VA84vCEAnE6sg8yvuS73YK12u/3k42GXh88YtpAHvA35mM0RKDx5jXhYEAJOmN59I0jyfe6g3hQsFfRHo3PbIWjcsLDPA4dTvUI6wMfx9gB7e3fOxSHDBWsPrt756usH49i6AA8KNrS8Fwo9h1X1bdQ398hPxqt2/b1r9PDXrfzVtGoA1F0UB6fTfUQDHf363LW6umg+6fBfK4sgtRXUv08uiMDaDvuXQKNPKokBIW3tNPZvrt/WFevanuwpRos5nK+EPsGb0v9fP9wOdvlx0+qPM4sRHFG81naNze8yuqWCrS4WBIg8yOh6MwDSDjIF9gi6+4JnuNbQorL82GSNJoaUAtm1XIYZ35ZkCpGmKVUdTKs8J8xTWsDTXyOHchK3hczlZSByxMO1ZVuhaayHDWdHi08gOEwdgMPw8wbumWDXl3lL4mU/HBulRof8rxGLA6DMK9HxUk3aXGWdPpsSyk0lxky/rSndRBikJWD5YxR/wIR2Weulnd96AAAAABJRU5ErkJggg==", span3:">"},
        { span1: "下载小米账号个人资料", span2:"下载您在小米账号中的个人信息和相关设置", img:"https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/miaccount_download.1cbd9bf6.svg", span3:">"},
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