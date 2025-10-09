<template>
  <div class="box">
    <!-- v-for 遍历数组中的内容并渲染 -->
    <a href="" v-for="item in list" :key="item.id">
        <img :src="item.imge" alt="">
    </a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {id: 1, imge: new URL('/src/assets/Official_Website/徕卡光学.jpg', import.meta.url).href,},
                {id: 2, imge: new URL('/src/assets/Official_Website/小米徕卡影像大赛.jpg', import.meta.url).href,},
                {id: 3, imge: new URL('/src/assets/Official_Website/xiaomi Buds 5 pro.jpg', import.meta.url).href,},
                {id: 4, imge: new URL('/src/assets/Official_Website/REDMI Book Pro.jpg', import.meta.url).href,},
                {id: 5, imge: new URL('/src/assets/Official_Website/Note14.jpg', import.meta.url).href,},
                {id: 6, imge: new URL('/src/assets/Official_Website/Xiaomi HyperOS.jpg', import.meta.url).href,},
                {id: 7, imge: new URL('/src/assets/Official_Website/人车家全生态.jpg', import.meta.url).href,}
            ]
        }
    }
}
</script>

<style scoped>
img{
    margin-top: 10px;
    width: 100%;
    height: 100vh;
}
</style>