<template>
    <div>
      <button ref="backToTopButton" @click="scrollToTop" class="backToTop">↑</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    setup() {
      const backToTopButton = ref(null);
      // 当页面上滑到规定位置时显示按钮，否则隐藏按钮
      const handleScroll = () => {
        if (window.scrollY > 300) {
          backToTopButton.value.style.display = "block";
        } else {
          backToTopButton.value.style.display = "none";
        }
      };

      // 点击按钮后页面回到顶部
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  
      // 组件挂载时，添加滚动监听
      onMounted(() => {
        window.addEventListener("scroll", handleScroll);
      });
  
      // 组件销毁时，移除滚动监听，防止内存泄漏
      onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
      });
  
      return { backToTopButton, scrollToTop };
    }
  };
  </script>
  
  <style scoped>
  /* 回到顶部按钮样式 */
  .backToTop {
    position: fixed;
    bottom: 50px;
    right: 30px;
    display: none;  /* 初始隐藏 */
    background-color: #babcbe;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
  .backToTop:hover {
    background-color: #0056b3;
  }
  </style>
  