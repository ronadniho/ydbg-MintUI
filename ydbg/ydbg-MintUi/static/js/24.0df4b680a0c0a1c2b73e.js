webpackJsonp([24],{KvOV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={components:{Header:a("teIl").a},name:"page-checklist",data:function(){return{headerName:"Checklist",value1:[],value2:["选中禁用的值"],value3:["选项A"],value4:[]}},created:function(){this.options1=["选项A","选项B","选项C"],this.options3=["选项A","选项B","选项C","选项D"],this.options4=["选项A","选项B","选项C","选项D"],this.options2=[{label:"被禁用",value:"值F",disabled:!0},{label:"选中禁用",value:"选中禁用的值",disabled:!0},{label:"选项A",value:"值A"},{label:"选项B",value:"值B"}]}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{headerName:e.headerName}}),e._v(" "),a("div",{staticClass:"page-checklist my-container"},[a("div",{staticClass:"page-title"},[e._v("Checklist")]),e._v(" "),a("mt-checklist",{staticClass:"page-part",attrs:{title:"复选框列表",options:e.options1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v(" "),a("div",[a("mt-cell",{attrs:{title:"选中的项"}},[e._v(e._s(e.value1))])],1),e._v(" "),a("mt-checklist",{staticClass:"page-part",attrs:{title:"第二个复选框列表",options:e.options2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),e._v(" "),a("div",[a("mt-cell",{attrs:{title:"选中的项"}},[e._v(e._s(e.value2))])],1),e._v(" "),a("mt-checklist",{staticClass:"page-part",attrs:{title:"最多选两个",max:2,options:e.options3},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),e._v(" "),a("div",[a("mt-cell",{attrs:{title:"选中的项"}},[e._v(e._s(e.value3))])],1),e._v(" "),a("mt-checklist",{staticClass:"page-part",attrs:{align:"right",title:"右对齐",options:e.options4},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)],1)},staticRenderFns:[]};var i=a("VU/8")(l,s,!1,function(e){a("XIdI")},null,null);t.default=i.exports},XIdI:function(e,t){}});
//# sourceMappingURL=24.0df4b680a0c0a1c2b73e.js.map