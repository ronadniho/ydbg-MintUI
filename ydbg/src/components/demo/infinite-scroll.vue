<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-infinite my-container">
      <h1 class="page-title">Infinite Scroll</h1>
      <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
      <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
            infinite-scroll-distance="50">
          <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
        </ul>
        <p v-show="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
          加载中...
        </p>
      </div>
    </div>
  </div>

</template>

<style lang="less" >
  .page-infinite {
    .page-infinite-desc {
      text-align: center;
      color: #666;
      padding-bottom: 5px; /*no*/
      border-bottom: solid 1px #eee; /*no*/
    }

    .page-infinite-listitem {
      height: 50px; /*no*/
      line-height: 50px; /*no*/
      border-bottom: solid 1px #eee; /*no*/
      text-align: center;
      &:first-child {
        border-top: solid 1px #eee; /*no*/
      }
    }

    .page-infinite-wrapper {
      margin-top: -1px; /*no*/
      overflow: scroll;
    }

    .page-infinite-loading {
      text-align: center;
      height: 50px; /*no*/
      line-height: 50px; /*no*/

      div {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px; /*no*/
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
        headerName: 'infinite-scroll',
        list: [],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0
      };
    },

    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  };
</script>
