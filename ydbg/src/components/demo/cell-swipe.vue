<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-cell my-container">
      <div class="page-title">Cell Swipe</div>
      <mt-cell-swipe
        v-for="n in 15"
        :right="rightButtons"
        title="swipe me">
      </mt-cell-swipe>
    </div>
  </div>

</template>

<script>
  import Header from '@/components/Header'
  export default {
    components:{Header},
    data(){
      return {
        headerName:'cell-swipe',
      }
    },
    created() {
      this.rightButtons = [
        {
          content: 'Mark as Unread',
          style: { background: 'lightgray', color: '#fff' }
        },
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ];
    },

    methods: {
      leftButtonHandler(evt) {
        console.log(123);
      }
    }
  };
</script>
