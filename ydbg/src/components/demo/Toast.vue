<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-toast my-container">
      <h1 class="page-title">Toast</h1>
      <div class="page-toast-wrapper">
        <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>
        <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
        <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
      </div>
    </div>
  </div>

</template>


<script type="text/babel">
  import Header from '@/components/Header'
  import { Toast } from 'mint-ui';
  export default {
    components:{Header},
    data(){
      return {
        headerName:'Toast',
      }
    },
    methods: {
      openToast() {
        Toast('提示信息');
      },

      openToastWithIcon() {
        Toast({
          message: '操作成功',
          iconClass: 'mintui mintui-success'
        });
      },

      openBottomToast() {
        Toast({
          message: '提示信息',
          position: 'bottom'
        });
      }
    }
  };
</script>

<style>
</style>
