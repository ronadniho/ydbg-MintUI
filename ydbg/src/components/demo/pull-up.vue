<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-loadmore my-container">
      <h1 class="page-title">Pull up</h1>
      <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
      <p class="page-loadmore-desc">此例请使用手机查看</p>
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul class="page-loadmore-list">
            <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
          </ul>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
          </div>
        </mt-loadmore>
      </div>
    </div>
  </div>

</template>

<style lang="less">

    .page-loadmore {
      .page-loadmore-desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;/*no*/
        &:last-of-type {
          border-bottom: solid 1px #eee;/*no*/
        }
      }

      .page-loadmore-listitem {
        height: 50px;/*no*/
        line-height: 50px;/*no*/
        border-bottom: solid 1px #eee;/*no*/
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;/*no*/
        }
      }

      .page-loadmore-wrapper {
        overflow: scroll;
      }

      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }

  .mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
    }
    span.is-rotate {
      transform: rotate(180deg);
    }
  }
</style>

<script type="text/babel">
  import Header from '@/components/Header'
  export default {
    components:{Header},
    data() {
      return {
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
      };
    },

    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      }
    },

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>
