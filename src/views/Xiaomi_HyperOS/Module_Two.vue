<template>
    <div class="box">
      <video src="/src/assets/Official_Website/小米官网.mp4" controls autoplay loop></video>
    </div>
  </template>
  
  <style scoped>
  .box {
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box video {
  width: 50%;
  height: 50%;
  object-fit: cover; /* 让视频铺满整个 video，不留黑边 */
}
  </style>
  