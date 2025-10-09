<template>
  <div class="box">
    <div class="centerbox">
      <!-- 使用 query 来访问查询字符串参数 -->
      <span>首页 &nbsp; > &nbsp; Xiaomi手机 &nbsp; > &nbsp;{{ $route.query.word }}</span>
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
    height: 40px;
    background-color: #f3f1f1;
    /* flex布局 */
    display:flex;
    justify-content: center;
}
.box .centerbox{
    width: 80%;
}
.box .centerbox span{
  -webkit-text-size-adjust: 100%;/* 禁用自动字体缩放 */
    font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    /* height: 40px; */
    font-size: 12px;
    line-height: 40px;
    background: #f5f5f5;
    color: #757575;
}
</style>