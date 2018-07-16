<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-radio my-container">
      <div class="page-title">radio</div>

      <mt-radio
        class="page-part"
        title="单选框列表"
        v-model="value1"
        :options="options1"/>
      <div>
        <mt-cell title="选中的项">{{ value1 }}</mt-cell>
      </div>

      <mt-radio
        class="page-part"
        title="第二个单选框列表"
        v-model="value2"
        :options="options2"/>
      <div>
        <mt-cell title="选中的项">{{ value2 }}</mt-cell>
      </div>

      <mt-radio
        align="right"
        class="page-part"
        title="右对齐"
        v-model="value3"
        :options="options3"/>
    </div>
  </div>

</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: 'page-radio',

    data() {
      return {
        headerName:'Radio',
        value1: '',
        value2: '值A',
        value3: ''
      };
    },

    created() {
      this.options1 = ['选项A', '选项B', '选项C'];
      this.options3 = ['选项A', '选项B', '选项C'];
      this.options2 = [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        }
      ];
    }
  };
</script>

<style lang="less">
  .page-radio .page-part {
    margin-top: 40px; /*no*/
  }
</style>

