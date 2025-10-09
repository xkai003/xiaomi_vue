<template>
  <div>
    <!--  -->
    <TopNavigation></TopNavigation>
    <!-- 渲染匹配到的路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// 导入组件：import XtxShortCut from './components/XtxShortCut.vue';（import 组件名 from '组件路径'）
import TopNavigation from './components/TopNavigation.vue';
</script>

<style></style>
