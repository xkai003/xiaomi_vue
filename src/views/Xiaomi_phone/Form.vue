<template>
    <div class="box">
      <div class="centerbox">
        <table>
            <div v-for="item in list" :key="item.id">
                <td>{{ item.td1 }}:</td>
                <td><a href="">{{ item.td2 }}</a></td>
                <td><a href="">{{ item.td3 }}</a></td>
                <td><a href="">{{ item.td4 }}</a></td>
                <td><a href="">{{ item.td5 }}</a></td>
                <td><a href="">{{ item.td6 }}</a></td>
                <td><a href="">{{ item.td7 }}</a></td>
                <td><a href="">{{ item.td8 }}</a></td>
                <td><a href="">{{ item.td9 }}</a></td>
            </div>
        </table>
      </div>
    </div>
  </template>

<script>
export default {
    data(){
        return {
            list:[
                {id: 1 , td1:"分类" , td2:"全部" , td3:"小米手机"},
                {id: 2 , td1:"拍摄像素" , td2:"四摄像头" , td3:"三摄像头"},
                {id: 3 , td1:"屏幕大小" , td2:"6.36英寸", td3:"6.73英寸"},
                {id: 4 , td1:"运行内存" , td2:"最高16GB"},
                {id: 5 , td1:"电池续航" , td2:"4610mAh" , td3:"4880mAh" , td4:"5000mAh" , td5:"5300mAh" , td6:"5400mAh" , td7:"6000mAh" , td8:"6100mAh"},
                {id: 5 , td1:"高级选项" , td2:"CUP型号" , td3:"CUP主频" , td4:"前置摄像头" , td5:"屏幕" , td6:"屏幕分辨率" , td7:"存储容量" , td8:"NFC" , td9:"更多"}
            ]
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    /* background-color: #e06767; */
    /* flex布局 */
    display:flex;
    justify-content: center;
}
.box .centerbox{
    /* background-color: #df8383; */
    width: 80%;
}
.box .centerbox table div{
    border-bottom: 1px solid rgb(204, 204, 204);/* 下划线 */
}
.box .centerbox table div td{
    color: rgb(185, 184, 184);
    font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    font-size: 14px;
    line-height: 35px;
    height: 35px;
    width: 150px;
}
.box .centerbox table div td a{
    color: black;
    text-decoration: none;
}
.box .centerbox table div td a:hover{
    color: red;
}
</style>