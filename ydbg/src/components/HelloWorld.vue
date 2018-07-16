<template>
<div id="main">

  <mt-header :fixed="true" title="标题过长会隐藏后面的内容啊哈哈哈哈">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>

  <mt-tab-container v-model="active">
    <mt-tab-container-item id="tab1">
      1
    </mt-tab-container-item>

    <mt-tab-container-item id="tab2">
      2
    </mt-tab-container-item>

    <mt-tab-container-item id="tab3">

     <mt-index-list :height="572">
      <mt-index-section index="A">
        <!-- <mt-cell title="Aaron"> -->
          <a href="sms:13641836690">短信</a>

        <!-- </mt-cell> -->
        <!-- <mt-cell title="Alden"> -->
           <a href="tel:13641836690">拨号</a>
        <!-- </mt-cell> -->
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>










    </mt-tab-container-item>

    <mt-tab-container-item id="tab4">
      <mt-cell
        title="标题文字"
        to="//baidu.com"
        is-link
        >
      </mt-cell>
      <mt-cell
        title="标题文字"
        to="//baidu.com"
        is-link
        >
      </mt-cell>
      <mt-cell
        title="标题文字"
        to="//baidu.com"
        is-link
        >
      </mt-cell>
      <mt-cell
        title="标题文字"
        to="//baidu.com"
        is-link
        >
      </mt-cell>
    </mt-tab-container-item>

    <mt-tab-container-item id="tab5">
      <mt-swipe :auto="4000" :prevent="true" :stopPropagation="true">

        <mt-swipe-item>
           <img src="../assets/1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
       <img src="../assets/2.jpg" alt="">

        </mt-swipe-item>
      </mt-swipe>
    </mt-tab-container-item>
  </mt-tab-container>


  <mt-tabbar v-model="active">
    <mt-tab-item id="tab1">
      <img slot="icon" src="../assets/icon1.png">
      外卖
    </mt-tab-item>
    <mt-tab-item id="tab2">
       <img slot="icon" src="../assets/icon2.png">
      订单
    </mt-tab-item>


    <mt-tab-item id="tab5">
       <img slot="icon" src="../assets/icon2.png">
      工作台
    </mt-tab-item>


    <mt-tab-item id="tab3">
      <img slot="icon" src="../assets/icon3.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="tab4">
     <img slot="icon" src="../assets/icon4.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</div>

</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      active: "tab1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../variable';
#main{
  .mint-tab-container-item{
    font-size: 20px;

  }
}
#main,.mint-tab-container{
  width:@max;
  height: @max;
}
.mint-tab-container{
  padding: 40px 0 55px;/* no */
  box-sizing: border-box;
}
.mint-tab-container-wrap{
   width:@max;
  height: @max;
}

.mint-swipe{
 width: @max;
  height: 300px;
}
.mint-swipe-item{
  width: @max;
  height: 300px;
  img{
    width: @max;
    height: @max;
  }
}



.mint-indexlist-content{
  box-sizing: border-box;
  padding-bottom:55px;/* no */
}
</style>
