<template>
  <div>
    <mt-swipe :auto="4000" :prevent="true" :stopPropagation="true">

      <mt-swipe-item>
        <img src="../assets/1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/2.jpg" alt="">

      </mt-swipe-item>
    </mt-swipe>

  </div>
</template>

<script>
  export default {
    name: "Work"
  }
</script>

<style scoped lang="less">
  @import '../variable';

  .mint-swipe {
    width: @max;
    height: 300px;
  }

  .mint-swipe-item {
    width: @max;
    height: 300px;
    img {
      width: @max;
      height: @max;
    }
  }

  .mint-indexlist-content {
    box-sizing: border-box;
    padding-bottom: 55px; /* no */
  }
</style>
