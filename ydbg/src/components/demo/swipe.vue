<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-swipe my-container">
      <h1 class="page-title">Swipe</h1>
      <p class="page-swipe-desc">基础用法</p>
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>

      <p class="page-swipe-desc">隐藏 indicators</p>
      <mt-swipe :show-indicators="false">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>

      <p class="page-swipe-desc">取消自动播放</p>
      <mt-swipe :auto="0">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>

      <p class="page-swipe-desc">设置默认显示页</p>
      <mt-swipe :auto="0" :defaultIndex="1">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>

      <p class="page-swipe-desc">单个幻灯片</p>
      <mt-swipe :show-indicators="false">
        <mt-swipe-item class="slide1">SINGLE SLIDE</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>

</template>
<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: 'page-swipe',
    data(){
      return {
        headerName:'swipe',
      }
    }
  };
</script>
<style lang="less">
    .page-swipe {
      .page-swipe-desc {
        text-align: center;
        color: #666;
        margin-bottom: 5px;/*no*/
      }
      .mint-swipe {
        height: 200px;/*no*/
        color: #fff;
        font-size: 30px;/*no*/
        text-align: center;
        margin-bottom: 20px;/*no*/
      }

      .mint-swipe-item {
        line-height: 200px;/*no*/
      }

      .slide1 {
        background-color: #0089dc;
        color: #fff;
      }

      .slide2 {
        background-color: #ffd705;
        color: #000;
      }

      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
      }
    }
</style>
