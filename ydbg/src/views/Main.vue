<template>
  <!--子路由-->

  <div id="main">
    <Header
      :headerName="headerName"/>

    <div class="router-view">
      <router-view/>
    </div>


    <!--底部tab-->
    <div class="tabbar">
      <mt-tabbar v-model="tabbarActive">
        <!--<mt-tab-item id="demo">-->
        <!--<img slot="icon" :src="aa">-->
        <!--demo-->
        <!--</mt-tab-item>-->


        <mt-tab-item
          :id="item.id"
          v-for="(item,index) in tabbarList"
        >
          <img slot="icon" :src="[item.state?item.lSrc:item.nSrc]">
          {{item.name}}
        </mt-tab-item>


        <!--<mt-tab-item id="demo">
          <img slot="icon" src="../assets/demo-l.png">
          demo
        </mt-tab-item>

        <mt-tab-item id="message">
          <img slot="icon" src="../assets/icon1-n.png">
          消息
        </mt-tab-item>
        <mt-tab-item id="schedule">
          <img slot="icon" src="../assets/icon2-n.png">
          日程
        </mt-tab-item>


        <mt-tab-item id="work">
          <img slot="icon" src="../assets/icon3-n.png">
          工作
        </mt-tab-item>


        <mt-tab-item id="mailList">
          <img slot="icon" src="../assets/icon4-n.png">
          通讯录
        </mt-tab-item>
        <mt-tab-item id="home">
          <img slot="icon" src="../assets/icon5-n.png">
          我的
        </mt-tab-item>-->
      </mt-tabbar>
    </div>

  </div>

</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Main",
    components: {
      Header
    },
    data() {
      return {
        headerName: '',
        tabbarActive: '',
        tabbarList: [
          {
            id: 'demo',
            name: 'demo',
            state:false,
            nSrc: require('../assets/demo-n.png'),
            lSrc: require('../assets/demo-l.png')
          },
          {
            id: 'message',
            name: '消息',
            state:false,
            nSrc: require('../assets/icon1-n.png'),
            lSrc: require('../assets/icon1-l.png')
          },
          {
            id: 'schedule',
            // name: '日程',
            name: '介绍',
            state:false,
            nSrc: require('../assets/icon2-n.png'),
            lSrc: require('../assets/icon2-l.png')
          },
          {
            id: 'work',
            name: '工作',
            state:false,
            nSrc: require('../assets/icon3-n.png'),
            lSrc: require('../assets/icon3-l.png')
          },
          {
            id: 'mailList',
            name: '通讯录',
            state:false,
            nSrc: require('../assets/icon4-n.png'),
            lSrc: require('../assets/icon4-l.png')
          },
          {
            id: 'home',
            name: '我的',
            state:false,
            nSrc: require('../assets/icon5-n.png'),
            lSrc: require('../assets/icon5-l.png')
          },
        ],
      };
    },
    watch:{
      tabbarActive(newVal,oldVal){
        console.log(newVal,oldVal);
        if(newVal!=oldVal){
          this.jump(newVal,oldVal);
        }
      }
    },
    created: function () {
      this.tabbarActive = 'demo'
      this.HEADERNAME();
      this.$router.push({
        path: this.tabbarActive
      })
    },
    methods: {
      HEADERNAME() {
        switch (this.tabbarActive) {
          case 'demo':
            this.headerName = 'demo';
            break;
          case 'message':
            this.headerName = '消息';
            break;
          case 'schedule':
            this.headerName = '日程';
            break;
          case 'mailList':
            this.headerName = '通讯录';
            break;
          case 'home':
            this.headerName = '我的';
            break;
          case 'work':
            this.headerName = '工作';
            break;
        }
      },
      jump(newVal,oldVal) {
        let newState = false;
        let oldState = false;
        for(let i=0;i<this.tabbarList.length;i++){
          if(this.tabbarList[i].id==oldVal){
            this.tabbarList[i].state = false;
            oldState = true;
          }
          if(this.tabbarList[i].id==newVal){
            this.tabbarList[i].state = true;
            newState = true;
          }
          if(oldState&&newState){
            break;
          }
        }
        this.HEADERNAME();


        // console.log(this.tabbarActive)
        if (this.tabbarActive == 'demo') {
          this.$router.push({
            path: '/' + this.tabbarActive
          })
        }
        else {
          this.$router.push({
            path: this.tabbarActive
          })
        }

      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../variable';

  #main {
    .router-view {
      //height: @max;
      padding: 40px 0 55px; /* no */
      box-sizing: border-box;
    }
    .mint-tab-container-item {
      font-size: 20px;

    }

    .tabbar {
      width: @max;
      height: 55px; /*no*/
      position: fixed;
      bottom: 0;
    }
  }

  #main, .mint-tab-container {
    width: @max;
    height: @max;
  }

  .mint-tab-container {
    padding: 40px 0 55px; /* no */
    box-sizing: border-box;
  }

  .mint-tab-container-wrap {
    width: @max;
    height: @max;
  }


</style>
