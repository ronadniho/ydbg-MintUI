<template>
  <div>
    <!--<mt-header fixed :title="normalizedSize">-->
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    <!--</mt-header>-->

    <mt-header fixed :title="normalizedSize">
      <a @click="jump" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>

  </div>

</template>

<script>
  export default {
    name: "Header",
    props: ['headerName'],
    data() {
      return {
      }
    },
    computed: {
      normalizedSize: function () {
        return this.headerName
      }
    },
    created:function(){
    },
    methods:{
      jump(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
