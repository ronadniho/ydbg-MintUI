<template>
  <div id="mes">
    <div v-for="item in mesSwipeList"
         :key="item.title">
      <mt-cell-swipe
        :title="item.title"
        :right="[item.right]"
      >
      </mt-cell-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        mesSwipeList: [
          {
            title: '便笺',
            right: {
              content: '置顶',
              style: {background: 'red', color: '#fff'},
              handler: () => this.mesSort('便笺')
            },
            icon:'../assets/icon1.png'
          },
          {
            title: '待我审批',
            right: {
              content: '置顶',
              style: {background: 'red', color: '#fff'},
              handler: () => this.mesSort('待我审批')
            },
            icon:'../assets/icon1.png'
          },
          {
            title: '公告',
            right: {
              content: '置顶',
              style: {background: 'red', color: '#fff'},
              handler: () => this.mesSort('公告')
            },
            icon:'../assets/icon1.png'
          },
        ]
      }
    },
    methods: {
      mesSort(content) {
        console.log(content)
        let mesSwipeList = this.mesSwipeList;
        for(var i=0;i<mesSwipeList.length;i++){

          if(mesSwipeList[i].title===content&&i===0){
            break;
          }
          else if(mesSwipeList[i].title===content){
            let deletVar =  mesSwipeList.splice(i,1);
            console.log(mesSwipeList)
            console.log(deletVar)
            mesSwipeList.unshift(deletVar[0])
            this.mesSwipeList = mesSwipeList;
            break;
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
