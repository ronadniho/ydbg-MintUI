webpackJsonp([29],{Cf9S:function(e,i){},cc1c:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={components:{Header:t("teIl").a},data:function(){return{headerName:"infinite-scroll",list:[],loading:!1,allLoaded:!1,wrapperHeight:0}},methods:{loadMore:function(){var e=this;this.loading=!0,setTimeout(function(){for(var i=e.list[e.list.length-1],t=1;t<=10;t++)e.list.push(i+t);e.loading=!1},2500)}},mounted:function(){this.wrapperHeight=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top;for(var e=1;e<=20;e++)this.list.push(e)}},a={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("Header",{attrs:{headerName:e.headerName}}),e._v(" "),t("div",{staticClass:"page-infinite my-container"},[t("h1",{staticClass:"page-title"},[e._v("Infinite Scroll")]),e._v(" "),t("p",{staticClass:"page-infinite-desc"},[e._v("当即将滚动至列表底部时, 自动加载更多数据")]),e._v(" "),t("div",{ref:"wrapper",staticClass:"page-infinite-wrapper",style:{height:e.wrapperHeight+"px"}},[t("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"page-infinite-list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"50"}},e._l(e.list,function(i){return t("li",{staticClass:"page-infinite-listitem"},[e._v(e._s(i))])})),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"page-infinite-loading"},[t("mt-spinner",{attrs:{type:"fading-circle"}}),e._v("\n        加载中...\n      ")],1)])])],1)},staticRenderFns:[]};var s=t("VU/8")(n,a,!1,function(e){t("Cf9S")},null,null);i.default=s.exports}});
//# sourceMappingURL=29.c27e5985fee674cf4eb4.js.map