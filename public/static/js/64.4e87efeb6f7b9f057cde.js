(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"/TFo":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i,n=e("oF3Q"),s=(i=n)&&i.__esModule?i:{default:i};a.default={data:function(){return{financialList:[{title:"用户总充值",num:"0",icon:"iconchongzhi",key:"totalIncome"},{title:"用户总提现",num:"0",icon:"icontixian",key:"totalWithdrawal"},{title:"用户钱包总金额",num:"0",icon:"iconqianbaozongjine",key:"totalWallet"},{title:"用户订单总数",num:"0",icon:"icondingdanzongshu",key:"orderCount"},{title:"平台总盈利",num:"0",icon:"iconcaiwutongji",key:"totalProfit"},{title:"提现手续费收入",num:"0",icon:"iconshouxufeishouru",key:"withdrawalProfit"},{title:"打赏提成收入",num:"0",icon:"icondashangtichengshouru",key:"orderRoyalty"},{title:"注册加入收入",num:"0",icon:"iconzhucejiarushouru",key:"totalRegisterProfit"}],financialEcharts:null,financiaOrderEchart:null,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",[e,a])}},{text:"最近一个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-2592e6),t.$emit("pick",[e,a])}},{text:"最近三个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-7776e6),t.$emit("pick",[e,a])}}]},financialTime:["",""],orderTime:["",""],valueMouth:["",""],valueOrder:["",""],noData:!1,noDataOrder:!1,istrue:0,istrueOder:0,mouthTab:!1,dayTab:!0,mouthOrderTab:!1,dayOderTab:!0,indexOrderTab:!1,indexStatistics:!1,items:[{name:"按日统计",index:1},{name:"按周统计",index:2},{name:"按月统计",index:3}]}},created:function(){this.statistic()},mounted:function(){this.earningsStatistics(),this.orderStatistics()},methods:{tab:function(t){this.istrue=t,0!=t&&1!=t||(this.dayTab=!0,this.mouthTab=!1,this.indexStatistics=!1),2==t&&(this.mouthTab=!0,this.dayTab=!1,this.indexStatistics=!0),this.earningsStatistics()},tabOrder:function(t){this.istrueOder=t,0!=t&&1!=t||(this.dayOderTab=!0,this.mouthOrderTab=!1,this.indexOrderTab=!1),2==t&&(this.mouthOrderTab=!0,this.dayOderTab=!1,this.indexOrderTab=!0),this.orderStatistics()},statistic:function(){var t=this;this.appFetch({url:"statistic",method:"get",data:{}}).then((function(a){for(var e=(0,s.default)(a.readdata._data),i=0;i<t.financialList.length;i++)for(var n=0;n<e.length;n++)t.financialList[i].key==e[n][0]&&(t.financialList[i].num=e[n][1])}))},change:function(){this.earningsStatistics()},changeOrder:function(){this.orderStatistics()},changeMouth:function(){null==this.valueMouth?this.valueMouth=["",""]:""!==this.valueMouth[0]&&""!==this.valueMouth[1]&&(this.valueMouth[0]=this.valueMouth[0]+"-00-00-00",this.valueMouth[1]=this.valueMouth[1]+"-24-00-00"),this.earningsStatistics()},changeOrderMouth:function(){this.orderStatistics()},earningsStatistics:function(){var t,a=this,e={"filter[type]":this.istrue+1,"filter[createdAtBegin]":this.financialTime[0],"filter[createdAtEnd]":this.financialTime[1]},i={"filter[type]":this.istrue+1,"filter[createdAtBegin]":this.valueMouth[0],"filter[createdAtEnd]":this.valueMouth[1]};t=0==this.indexStatistics?e:i,this.appFetch({url:"statisticChart",method:"get",data:t}).then((function(t){""==t.readdata?a.noData=!0:a.noData=!1;var e=[],i=[],n=[],s=[],r=[];t.readdata.map((function(t){e.push(t._data.date),i.push(t._data.total_profit),n.push(t._data.withdrawal_profit),s.push(t._data.master_portion),r.push(t._data.register_profit)})),a.earningsEcharts(e,i,n,s,r)}))},orderStatistics:function(){var t,a=this,e={"filter[type]":this.istrueOder+1,"filter[createdAtBegin]":this.orderTime[0],"filter[createdAtEnd]":this.orderTime[1]},i={"filter[type]":this.istrueOder+1,"filter[createdAtBegin]":this.valueOrder[0],"filter[createdAtEnd]":this.valueOrder[1]};0==this.indexOrderTab&&(t=e),1==this.indexOrderTab&&(t=i),this.appFetch({url:"statisticChart",method:"get",data:t}).then((function(t){""==t.readdata?a.noDataOrder=!0:a.noDataOrder=!1;var e=[],i=[],n=[];t.readdata.map((function(t){e.push(t._data.date),i.push(t._data.order_count),n.push(t._data.order_amount)})),a.orderEcharts(e,i,n)}))},earningsEcharts:function(t,a,e,i,n){this.financialEcharts||(this.financialEcharts=this.$echarts.init(this.$refs.financialProfitEcharts));var s={title:{},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["平台总盈利","提现手续费收入","打赏提成收入","注册加入收入"]},grid:{left:"1%",right:"6%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:t,axisLabel:{interval:0,rotate:-40}}],yAxis:[{type:"value"}],series:[{name:"平台总盈利",type:"line",stack:"总量",areaStyle:{},data:a},{name:"提现手续费收入",type:"line",stack:"总量",areaStyle:{},data:e},{name:"打赏提成收入",type:"line",stack:"总量",areaStyle:{},data:i},{name:"注册加入收入",type:"line",stack:"总量",areaStyle:{},data:n}]};this.financialEcharts.setOption(s)},orderEcharts:function(t,a,e){this.financiaOrderEchart||(this.financiaOrderEchart=this.$echarts.init(this.$refs.financialOrderEcharts));var i={title:{},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["订单数量","订单金额"]},grid:{left:"1%",right:"6%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:t,axisLabel:{interval:0,rotate:-40}}],yAxis:[{type:"value"}],series:[{name:"订单数量",type:"line",stack:"总量",areaStyle:{},data:a},{name:"订单金额",type:"line",stack:"总量",areaStyle:{},data:e}]};this.financiaOrderEchart.setOption(i)}}}},BdDw:function(t,a,e){"use strict";e.r(a);var i=e("q0i5"),n=e("fQMi");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);var r=e("KHd+"),c=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);a.default=c.exports},E8gZ:function(t,a,e){var i=e("jmDH"),n=e("w6GO"),s=e("NsO/"),r=e("NV0k").f;t.exports=function(t){return function(a){for(var e,c=s(a),o=n(c),l=o.length,d=0,u=[];l>d;)e=o[d++],i&&!r.call(c,e)||u.push(t?[e,c[e]]:c[e]);return u}}},Uurk:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s(e("QbLZ"));e("z99J");var n=s(e("/TFo"));function s(t){return t&&t.__esModule?t:{default:t}}a.default=(0,i.default)({name:"financial-statistics-view"},n.default)},fQMi:function(t,a,e){"use strict";e.r(a);var i=e("Uurk"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a.default=n.a},nGDx:function(t,a,e){var i=e("Y7ZC"),n=e("E8gZ")(!0);i(i.S,"Object",{entries:function(t){return n(t)}})},oF3Q:function(t,a,e){t.exports={default:e("tgZa"),__esModule:!0}},q0i5:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"financial-box"},[e("div",{staticClass:"financial-statistics"},t._l(t.financialList,(function(a,i){return e("div",{key:i,staticClass:"financial"},[e("div",{staticClass:"financial-head"},[e("div",{staticClass:"financial-title"},[t._v(t._s(a.title))]),t._v(" "),e("span",{staticClass:"iconfont",class:a.icon}),t._v(" "),e("span",{staticClass:"financial-con"},[t._v("\n          ¥\n          "),e("span",{staticClass:"financial-num"},[t._v(t._s(a.num))])])])])})),0),t._v(" "),e("div",{staticClass:"financial-profit"},[e("div",{staticClass:"financial-profit-title"},[t._m(0),t._v(" "),e("div",{staticClass:"financial-profit-title-right"},[e("ul",t._l(t.items,(function(a,i){return e("li",{key:i,class:{active:t.istrue==i},on:{click:function(a){return t.tab(i)}}},[t._v(t._s(a.name))])})),0),t._v(" "),e("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:t.mouthTab,expression:"mouthTab"}],staticClass:"input-class",attrs:{size:"small","value-format":"yyyy-MM-dd HH:mm:ss",type:"monthrange","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},on:{change:t.changeMouth},model:{value:t.valueMouth,callback:function(a){t.valueMouth=a},expression:"valueMouth"}}),t._v(" "),e("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:t.dayTab,expression:"dayTab"}],staticClass:"input-class",attrs:{size:"small",clearable:"",type:"daterange","value-format":"yyyy-MM-dd","default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.change},model:{value:t.financialTime,callback:function(a){t.financialTime=a},expression:"financialTime"}})],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}],staticClass:"noData"},[t._v("暂无数据")]),t._v(" "),e("div",{ref:"financialProfitEcharts",staticClass:"financial-profit-chart"})]),t._v(" "),e("div",{staticClass:"financial-order"},[e("div",{staticClass:"financial-profit-title"},[t._m(1),t._v(" "),e("div",{staticClass:"financial-profit-title-right"},[e("ul",t._l(t.items,(function(a,i){return e("li",{key:i,class:{active:t.istrueOder==i},on:{click:function(a){return t.tabOrder(i)}}},[t._v(t._s(a.name))])})),0),t._v(" "),e("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:t.mouthOrderTab,expression:"mouthOrderTab"}],staticClass:"input-class",attrs:{size:"small","value-format":"yyyy-MM-dd HH:mm:ss",type:"monthrange","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},on:{change:t.changeOrderMouth},model:{value:t.valueOrder,callback:function(a){t.valueOrder=a},expression:"valueOrder"}}),t._v(" "),e("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:t.dayOderTab,expression:"dayOderTab"}],staticClass:"input-class",attrs:{size:"small",clearable:"",type:"daterange","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.changeOrder},model:{value:t.orderTime,callback:function(a){t.orderTime=a},expression:"orderTime"}})],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noDataOrder,expression:"noDataOrder"}],staticClass:"noData"},[t._v("暂无数据")]),t._v(" "),e("div",{ref:"financialOrderEcharts",staticClass:"financial-profit-chart"})])])},n=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"financial-profit-title-left"},[a("span",{staticClass:"iconfont iconcaiwutongji"}),this._v(" "),a("span",{staticClass:"financial-profit-titles"},[this._v("盈利统计")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"financial-profit-title-left"},[a("span",{staticClass:"iconfont icondingdanzongshu"}),this._v(" "),a("span",{staticClass:"financial-profit-titles"},[this._v("订单统计")])])}]},tgZa:function(t,a,e){e("nGDx"),t.exports=e("WEpk").Object.entries}}]);