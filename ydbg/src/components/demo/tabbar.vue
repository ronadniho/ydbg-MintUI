<template>
  <div>
    <Header
      :headerName="headerName"/>

    <div class="page-tabbar my-container">
      <div class="page-wrap">
        <div class="page-title">Tabbar</div>
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected"/>
        </div>

        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="外卖">
            <mt-cell v-for="(n,index) in 10" :key="index" :title="'餐厅 ' + n"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="订单">
            <mt-cell v-for="(n,index) in 5" :key="index" :title="'订单 ' + n"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="发现">
            <mt-cell v-for="(n,index) in 7" :key="index" :title="'发现 ' + n"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="我的">
            <div class="page-part">
              <mt-cell v-for="(n,index) in 12" :key="index" :title="'我的 ' + n"/>
            </div>
            <router-link to="/">
              <mt-button type="danger" size="large">退出</mt-button>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="外卖">
          <img slot="icon" src="../../assets/icon1.png">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="../../assets/icon1.png">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="../../assets/icon1.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../../assets/icon1.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>

</template>

<script>
  import Header from '@/components/Header'
  export default {
    components:{Header},
    name: 'page-tabbar',
    data() {
      return {
        selected: '外卖',
        headerName: 'tabbar',
      };
    }
  };
</script>

<style lang="less">
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
