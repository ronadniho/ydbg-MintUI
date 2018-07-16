<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-actionsheet my-container">
      <h1 class="page-title">Action Sheet</h1>
      <div class="page-actionsheet-wrapper">
        <mt-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>
        <mt-button @click.native="sheetVisible2 = true" size="large">不带取消按钮的 action sheet</mt-button>
      </div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>
    </div>
  </div>

</template>

<style lang="less">
  .page-actionsheet {
    .page-actionsheet-wrapper {
      padding: 0 20px; /*no*/
      position: absolute;
      width: 100%;
      height: 100%;
      /*transform: translateY(-50%);*/
      box-sizing: border-box;
      button:first-child {
        margin-bottom: 20px; /*no*/
      }
    }
  }
</style>

<script type="text/babel">
  import Header from '@/components/Header'

  export default {
    components: {Header},
    data() {
      return {
        headerName: 'action-sheet',
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        history.go(-1);
      }
    },

    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    }
  };
</script>
