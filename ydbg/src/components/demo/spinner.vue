<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-spinner my-container">
      <div class="page-title">Spinner</div>

      <mt-cell title="snake">
        <mt-spinner color="#26a2ff" type="snake"></mt-spinner>
      </mt-cell>

      <mt-cell title="double-bounce">
        <mt-spinner color="#26a2ff" type="double-bounce"></mt-spinner>
      </mt-cell>

      <mt-cell title="triple-bounce">
        <mt-spinner color="#26a2ff" type="triple-bounce"></mt-spinner>
      </mt-cell>

      <mt-cell title="fading-circle">
        <mt-spinner color="#26a2ff" type="fading-circle"></mt-spinner>
      </mt-cell>
    </div>
  </div>

</template>

<script>
  import Header from '@/components/Header'

  export default {
    components:{Header},
    name: 'Spinner',
    data() {
      return {
        headerName: 'spinner',
      }
    },
  };
</script>

<style lang="less">
    .page-spinner {
      .mint-cell {
        min-height: 50px;
      }
    }
</style>
