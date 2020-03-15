(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"5+4i":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-record-box"},[r("div",{staticClass:"order-record__search-box"},[r("div",{staticClass:"order-record__search-condition"},[r("span",{staticClass:"order-record__search-condition__title"},[e._v("订单号：")]),e._v(" "),r("el-input",{attrs:{clearable:"",placeholder:"搜索订单号"},model:{value:e.orderNumber,callback:function(t){e.orderNumber=t},expression:"orderNumber"}})],1),e._v(" "),r("div",{staticClass:"order-record__search-condition"},[r("span",{staticClass:"order-record__search-condition__title"},[e._v("订单时间：")]),e._v(" "),r("el-date-picker",{attrs:{clearable:"",type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.orderTime,callback:function(t){e.orderTime=t},expression:"orderTime"}})],1),e._v(" "),r("div",{staticClass:"order-record__search-condition"},[r("span",{staticClass:"order-record__search-condition__title"},[e._v("发起方：")]),e._v(" "),r("el-input",{attrs:{clearable:"",placeholder:"搜索发起方"},model:{value:e.operationUser,callback:function(t){e.operationUser=t},expression:"operationUser"}})],1),e._v(" "),r("div",{staticClass:"order-record__search-condition"},[r("span",{staticClass:"order-record__search-condition__title"},[e._v("商品：")]),e._v(" "),r("el-input",{attrs:{clearable:"",placeholder:"搜索商品"},model:{value:e.commodity,callback:function(t){e.commodity=t},expression:"commodity"}})],1),e._v(" "),r("div",{staticClass:"order-record__search-condition"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.searchClick}},[e._v("搜索")])],1)]),e._v(" "),r("div",{staticClass:"order-record-table"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[r("el-table-column",{attrs:{prop:"_data.order_sn",label:"订单号","min-width":"110"}}),e._v(" "),r("el-table-column",{attrs:{prop:"user._data.username",label:"发起方"}}),e._v(" "),r("el-table-column",{attrs:{prop:"payee._data.username",label:"收入方"}}),e._v(" "),r("el-table-column",{attrs:{prop:"thread.firstPost._data.content","show-overflow-tooltip":"",label:"商品名称","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{class:t.row.thread?"cursor-pointer":"",on:{click:function(r){return e.viewClick(t.row.thread?t.row.thread._data.id:"")}}},[e._v(e._s(t.row.thread?t.row.thread.firstPost._data.content:"注册付费"))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"_data.amount",label:"金额",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"_data.created_at",label:"订单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.formatDate(t.row._data.created_at)))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.cashStatus(t.row._data.status)))]}}])})],1),e._v(" "),e.pageCount>1?r("Page",{attrs:{"current-page":e.currentPaga,"page-size":10,total:e.total},on:{"current-change":e.handleCurrentChange}}):e._e()],1)])},o=[]},D40Z:function(e,t,r){"use strict";r.r(t);var a=r("5+4i"),o=r("PsjA");for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);var i=r("KHd+"),s=Object(i.a)(o.default,a.a,a.b,!1,null,null,null);t.default=s.exports},PsjA:function(e,t,r){"use strict";r.r(t);var a=r("u8dQ"),o=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t.default=o.a},RCrl:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(r("4gYi")),o=s(r("rWG0")),n=s(r("VVfg")),i=s(r("wd/R"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{tableData:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-7776e6),e.$emit("pick",[r,t])}}]},orderNumber:"",operationUser:"",commodity:"",orderTime:["",""],pageCount:0,currentPaga:1,total:0}},methods:{viewClick:function(e){if(e){var t=this.$router.resolve({path:"/details/"+e});window.open(t.href,"_blank")}},cashStatus:function(e){switch(e){case 0:return"待付款";case 1:return"已付款";default:return"未知状态"}},searchClick:function(){null==this.orderTime?this.orderTime=["",""]:""!==this.orderTime[0]&&""!==this.orderTime[1]&&(this.orderTime[0]=this.orderTime[0]+"-00-00-00",this.orderTime[1]=this.orderTime[1]+"-24-00-00"),this.currentPaga=1,this.getOrderList()},handleCurrentChange:function(e){this.currentPaga=e,this.getOrderList()},formatDate:function(e){return(0,i.default)(e).format("YYYY-MM-DD HH:mm")},getOrderList:function(){var e=this;this.appFetch({url:"orderList",method:"get",data:{include:["user","thread","thread.firstPost","payee"],"page[number]":this.currentPaga,"page[size]":10,"filter[order_sn]":this.orderNumber,"filter[product]":this.commodity,"filter[username]":this.operationUser,"filter[start_time]":this.orderTime[0],"filter[end_time]":this.orderTime[1]}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.tableData=[],e.tableData=t.readdata,e.pageCount=t.meta.pageCount,e.total=t.meta.total)})).catch((function(e){}))},getCreated:function(e){this.currentPaga=e?1:Number(n.default.getLItem("currentPag"))||1,this.getOrderList()}},created:function(){},beforeRouteEnter:function(e,t,r){r((function(r){e.name!==t.name&&null!==t.name?r.getCreated(!0):r.getCreated(!1)}))},components:{Card:a.default,Page:o.default}}},u8dQ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("QbLZ"));r("z99J");var o=n(r("RCrl"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"order-details"},o.default)}}]);