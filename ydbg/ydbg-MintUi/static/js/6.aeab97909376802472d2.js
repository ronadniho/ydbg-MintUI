webpackJsonp([6],{"+/yd":function(e,a){},"28Lk":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={components:{Header:t("teIl").a},name:"page-search",data:function(){return{headerName:"search",value:"",defaultResult:["Apple","Banana","Orange","Durian","Lemon","Peach","Cherry","Berry","Core","Fig","Haw","Melon","Plum","Pear","Peanut","Other"]}},computed:{filterResult:function(){var e=this;return this.defaultResult.filter(function(a){return new RegExp(e.value,"i").test(a)})}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("Header",{attrs:{headerName:e.headerName}}),e._v(" "),t("div",{staticClass:"page-search my-container"},[t("mt-search",{attrs:{autofocus:"",result:e.filterResult},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)],1)},staticRenderFns:[]};var u=t("VU/8")(r,n,!1,function(e){t("+/yd")},null,null);a.default=u.exports}});
//# sourceMappingURL=6.aeab97909376802472d2.js.map