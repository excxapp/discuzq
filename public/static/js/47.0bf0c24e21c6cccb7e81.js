(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"0Ndr":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(a("QbLZ")),s=o(a("RKEP"));function o(t){return t&&t.__esModule?t:{default:t}}a("iUmJ"),e.default=(0,i.default)({name:"paymentMethodView"},s.default)},"0VOr":function(t,e,a){"use strict";a.r(e);var i=a("0Ndr"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e.default=s.a},"3XTc":function(t,e,a){"use strict";a.r(e);var i=a("bNLU"),s=a("0VOr");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);var n=a("KHd+"),r=Object(n.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports},NdMT:function(t,e,a){},Q3yS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(a("JZuw")),s=n(a("3XTc")),o=n(a("VVfg"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{sitePrice:"",siteExpire:"",orderSn:"",wxPayHref:"",qrcodeShow:!1,codeUrl:"",amountNum:"",payStatus:!1,payStatusNum:0,authorityList:"",tokenId:"",dialogShow:!1,groupId:"",limitList:[],payList:[{name:"钱包",icon:"icon-wallet"}],show:!1,errorInfo:"",value:"",walletBalance:"",walletStatus:"",payLoading:!1}},components:{PayHeader:i.default,PayMethod:s.default},methods:{payImmediatelyClick:function(t){var e=this,a=this.appCommonH.isWeixin().isWeixin,i=this.appCommonH.isWeixin().isPhone;"微信支付"===t.name&&(this.show=!1,a?this.getOrderSn().then((function(){e.orderPay(12).then((function(t){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e.onBridgeReady(t),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e.onBridgeReady(t)),document.attachEvent("onWeixinJSBridgeReady",e.onBridgeReady(t))):e.onBridgeReady(t)}))})):i?this.getOrderSn().then((function(){e.orderPay(11).then((function(t){e.wxPayHref=t.readdata._data.wechat_h5_link,window.location.href=e.wxPayHref;var a=setInterval((function(){e.payStatus&&e.payStatusNum>10&&clearInterval(a),e.getUsersInfo()}),3e3)}))})):this.getOrderSn().then((function(){e.orderPay(10).then((function(t){e.codeUrl=t.readdata._data.wechat_qrcode,e.qrcodeShow=!0;var a=setInterval((function(){e.payStatus&&e.payStatusNum>10&&clearInterval(a),e.getUsersInfo()}),3e3)}))})))},onInput:function(t){var e=this;this.value=this.value+t,6===this.value.length&&(this.errorInfo="",this.getOrderSn().then((function(){e.orderPay(20,e.value).then((function(t){var a=setInterval((function(){e.payStatus&&e.payStatusNum>10&&clearInterval(a),e.getUsersInfo()}),3e3)}))})))},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)},onClose:function(){this.value="",this.errorInfo="",this.payLoading=!1},leapFrogClick:function(){this.$router.push({path:"pay-circle-login"})},onBridgeReady:function(t){var e=this,a=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.data.attributes.wechat_js.appId,timeStamp:t.data.attributes.wechat_js.timeStamp,nonceStr:t.data.attributes.wechat_js.nonceStr,package:t.data.attributes.wechat_js.package,signType:"MD5",paySign:t.data.attributes.wechat_js.paySign},(function(t){("get_brand_wcpay_request:cancel"==t.err_msg||"get_brand_wcpay_request:fail"==t.err_msg)&&(a.payLoading=!1,resolve)})),setTimeout((function(){var t=a.$toast.loading({duration:0,forbidClick:!0,message:"支付状态查询中..."}),i=5,s=setInterval((function(){i--,e.getUsers(a.tokenId).then((function(a){if(a.errors)clearInterval(s),t.message="支付失败，请重新支付！",setTimeout((function(){t.clear()}),2e3);else if(i>0||!a.readdata._data.paid)t.message="正在查询订单...";else if(a.readdata._data.paid){clearInterval(s),o.default.setLItem("foregroundUser",a.data.attributes.username),e.show=!1,e.payLoading=!1,t.message="支付成功，正在跳转首页...",t.clear();var n=o.default.getSItem("beforeVisiting");n?e.$router.push({path:n}):e.$router.push({path:"/"})}else clearInterval(s),t.message="支付失败，请重新支付！",t.clear()}))}),1e3)}),3e3)},payClick:function(){this.show=!0},getForum:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){if(e.errors)t.$toast.fail(e.errors[0].code);else{t.sitePrice=e.readdata._data.set_site.site_price;var a=e.readdata._data.set_site.site_expire;switch(a){case"":case"0":t.siteExpire="永久有效";break;default:t.siteExpire="有效期自加入起"+a+"天"}"1"===e.readdata._data.paycenter.wxpay_close&&t.payList.unshift({name:"微信支付",icon:"icon-wxpay"})}})).catch((function(t){}))},getOrderSn:function(){var t=this;return this.appFetch({url:"orderList",method:"post",data:{type:1}}).then((function(e){e.errors?t.$toast.fail(e.errors[0].code):t.orderSn=e.readdata._data.order_sn})).catch((function(t){}))},orderPay:function(t,e){var a=this;return this.appFetch({url:"orderPay",method:"post",splice:"/"+this.orderSn,data:{payment_type:t,pay_password:e}}).then((function(t){if(!t.errors)return a.payLoading=!0,t;a.$toast.fail(t.errors[0].code),a.value=""})).catch((function(t){}))},getUsersInfo:function(){var t=this;this.appFetch({url:"users",method:"get",splice:"/"+o.default.getLItem("tokenId"),data:{include:["groups"]}}).then((function(e){e.errors?(t.$toast.fail(e.errors[0].code),t.value=""):(t.payStatus=e.readdata._data.paid,t.payStatusNum=1,t.payStatus&&(t.qrcodeShow=!1,t.show=!1,t.payLoading=!1,t.$router.push("/"),t.payStatusNum=11))})).catch((function(t){}))},getUsers:function(t){var e=this;return this.appFetch({url:"users",method:"get",splice:"/"+t,headers:{Authorization:"Bearer "+o.default.getLItem("Authorization")},data:{include:["groups"]}}).then((function(t){if(!t.errors)return t;e.$toast.fail(t.errors[0].code)})).catch((function(t){}))},getAuthority:function(t){var e=this;return this.appFetch({url:"authority",method:"get",splice:"/"+t,data:{include:["permission"]}}).then((function(t){if(!t.errors)return t;e.$toast.fail(t.errors[0].code)})).catch((function(t){}))},getGroups:function(){var t=this;this.appFetch({url:"groups",method:"get",data:{include:["permission"],"filter[isDefault]":1}}).then((function(e){e.errors?t.$toast.fail(e.errors[0].code):(t.groupId=e.readdata[0]._data.id,t.getGroupsList())}))},getGroupsList:function(){var t=this;this.appFetch({url:"groups",method:"get",splice:"/"+this.groupId,data:{include:["permission"]}}).then((function(e){e.errors?t.$toast.fail(e.errors[0].code):t.limitList=e.readdata}))}},created:function(){var t=this;this.getForum(),this.getGroups(),this.getUsers(o.default.getLItem("tokenId")).then((function(e){t.getAuthority(e.readdata.groups[0]._data.id),t.walletBalance=e.readdata._data.walletBalance,t.walletStatus=e.readdata._data.canWalletPay})),this.tokenId=o.default.getLItem("tokenId"),this.amountNum=o.default.getLItem("siteInfo")._data.set_site.site_price}}},RKEP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=a("VVfg"),o=(i=s)&&i.__esModule?i:{default:i};e.default={data:function(){return{paySelectShow:!1,payImmediatelyShow:!1,radio:0,descriptionShow:!1,showKeyboard:!1}},props:{value:{type:Boolean,default:!1},money:{type:String,default:"0.00"},balance:{type:String,default:"0.00"},data:{type:Array,default:[{name:"钱包",icon:""}]},error:{type:String},walletStatus:{type:Boolean,default:!1},payUrl:{type:String},pwdValue:{type:String,default:""}},methods:{onInput:function(t){this.$emit("oninput",t)},onDelete:function(){this.$emit("delete")},onClose:function(){this.$emit("close")},payImmediatelyClick:function(){this.showKeyboard=!0,"钱包"===this.data[this.radio].name&&(this.paySelectShow=!this.paySelectShow,this.payImmediatelyShow=!this.payImmediatelyShow),this.$emit("payImmediatelyClick",this.data[this.radio])},payStatusClick:function(){this.payUrl&&(this.$router.push({path:"/"+this.payUrl}),o.default.setLItem("payUrl",this.$route.fullPath))},clickOverlay:function(){this.$emit("input",!1),this.$emit("clickOverlay"),this.radio=0,this.paySelectBox=!1,this.payImmediatelyShow=!1}},watch:{value:function(t){this.paySelectShow=t,this.descriptionShow=parseFloat(this.money)>parseFloat(this.balance),t||(this.paySelectBox=!1,this.payImmediatelyShow=!1,this.showKeyboard=!1)},payImmediatelyShow:function(t){}}}},YXY0:function(t,e,a){"use strict";a.r(e);var i=a("eHCm"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e.default=s.a},bNLU:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-method-box"},[a("van-popup",{staticClass:"way-to-choose-box",attrs:{round:"","safe-area-inset-bottom":"","get-container":"body"},on:{close:t.onClose,"click-overlay":t.clickOverlay},model:{value:t.paySelectShow,callback:function(e){t.paySelectShow=e},expression:"paySelectShow"}},[a("div",{staticClass:"way-to-choose-main"},[a("van-icon",{staticClass:"icon-close",attrs:{name:"cross",size:"20"},on:{click:t.clickOverlay}}),t._v(" "),a("div",{staticClass:"manner-title"},[a("h1",[t._v("立即支付")]),t._v(" "),a("p",[a("span",[t._v("￥")]),t._v(t._s(t.money))]),t._v(" "),a("i",{staticClass:"manner-title_grid"})]),t._v(" "),a("div",{staticClass:"way-to-choose_cont"},[a("p",{staticClass:"way-to-choose_cont-title"},[t._v("支付方式")]),t._v(" "),a("div",{staticClass:"way-to-choose_cont-select"},[a("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.data,(function(e,i){return a("div",{staticClass:"way-to-choose_cont-select_cell",on:{click:function(e){!t.descriptionShow&&t.walletStatus&&(t.radio=i)}}},[a("div",{staticClass:"way-to-choose_cont-select_cell-left"},[a("span",{staticClass:"icon iconfont",class:e.icon}),t._v(" "),a("div",{staticClass:"way-to-choose_cont-select_cell-left-title"},[a("span",[t._v(t._s(e.name))]),t._v(" "),t.walletStatus||"钱包"!==e.name?t.descriptionShow&&"钱包"===e.name?a("p",{staticClass:"way-to-choose_cont-select_cell-left-title_description"},[t._v("钱包余额不足，剩余"+t._s(t.balance)+"元")]):t._e():a("p",{staticClass:"way-to-choose_cont-select_cell-left-title_description",on:{click:t.payStatusClick}},[t._v("请设置钱包支付密码")])])]),t._v(" "),a("van-radio",{attrs:{slot:"right-icon",disabled:(t.descriptionShow||!t.walletStatus)&&"钱包"===e.name,name:i},slot:"right-icon"})],1)})),0)],1)]),t._v(" "),a("div",{staticClass:"way-to-choose_footer"},[a("van-button",{attrs:{type:"primary"},on:{click:t.payImmediatelyClick}},[t._v("立即支付")])],1)],1)]),t._v(" "),a("van-popup",{staticClass:"pay-immediately-box",class:t.error?"pay-immediately-box-err":"",attrs:{round:"","safe-area-inset-bottom":"","close-icon-position":"top-right","get-container":"body"},on:{close:t.onClose,"click-overlay":t.clickOverlay},model:{value:t.payImmediatelyShow,callback:function(e){t.payImmediatelyShow=e},expression:"payImmediatelyShow"}},[a("div",{staticClass:"pay-immediately-main"},[a("van-icon",{staticClass:"icon-close",attrs:{name:"cross",size:"20"},on:{click:t.clickOverlay}}),t._v(" "),a("div",{staticClass:"manner-title"},[a("h1",[t._v("立即支付")]),t._v(" "),a("p",[a("span",[t._v("￥")]),t._v(t._s(t.money))]),t._v(" "),a("i",{staticClass:"manner-title_grid"})]),t._v(" "),a("div",{staticClass:"pay-immediately-main_cont"},[a("van-cell",{attrs:{title:"支付方式","is-link":""},on:{click:function(e){t.paySelectShow=!t.paySelectShow,t.payImmediatelyShow=!t.payImmediatelyShow}}},[a("template",{slot:"default"},[a("span",{staticClass:"icon iconfont",class:t.data[t.radio].icon}),t._v(" "),a("span",{staticClass:"custom-title"},[t._v(t._s(t.data[t.radio].name))])])],2)],1),t._v(" "),a("van-password-input",{staticClass:"passwordInp",attrs:{value:t.pwdValue,focused:t.showKeyboard,"error-info":t.error},on:{focus:function(e){t.showKeyboard=!0}}})],1)]),t._v(" "),a("van-number-keyboard",{attrs:{"safe-area-inset-bottom":"","z-index":2100,show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}})],1)},s=[]},eHCm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(a("QbLZ"));a("NdMT"),a("N960");var s=o(a("Q3yS"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,i.default)({name:"pay-the-fee-view"},s.default)},iVwf:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pay-the-fee-box"},[a("PayHeader"),t._v(" "),a("main",{staticClass:"pay-the-fee-main"},[t._m(0),t._v(" "),a("van-button",{attrs:{type:"primary"},on:{click:t.payClick}},[t._v("立即付费,获得权限")]),t._v(" "),a("p",{staticClass:"pay-the-fee-title-footer"},[t._v("￥"+t._s(t.sitePrice)+" / "+t._s(t.siteExpire))])],1),t._v(" "),a("div",{staticClass:"pay-the-fee-permission"},[t._m(1),t._v(" "),a("div",{staticClass:"pay-the-fee-per-list"},[a("div",{staticClass:"pay-the-fee-per-name"},[t._v("权限列表")]),t._v(" "),t._l(t.limitList.permission,(function(e,i){return a("div",{},[e._data.permission&&"viewThreads"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看主题列表"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.viewPosts"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看主题"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"createThread"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("发表主题"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.reply"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("回复主题"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"attachment.create.0"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("上传附件"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"attachment.create.1"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("上传图片"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"attachment.view.0"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看附件"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"attachment.view.1"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看图片"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"viewUserList"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("站点会员列表"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"attachment.delete"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("删除附件"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"cash.create"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("申请提现"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"order.create"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("创建订单"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.hide"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("删除主题"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.hidePosts"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("删除回复"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.favorite"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("帖子收藏"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.likePosts"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("帖子点赞"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"user.view"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看用户信息"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"viewSiteInfo"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("站点信息"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"user.edit"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("编辑用户状态"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"group.edit"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("编辑用户组"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"createInvite"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("管理-邀请加入"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.batchEdit"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("批量管理主题"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.editPosts"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("编辑"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.essence"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("加精"),a("i",{staticClass:"iconfont icon-selected"})]):t._e(),t._v(" "),e._data.permission&&"thread.sticky"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("置顶"),a("i",{staticClass:"iconfont icon-selected"})]):t._e()])}))],2),t._v(" "),a("div",{staticClass:"pay-the-fee-per-list-footer"},[a("p",{on:{click:t.leapFrogClick}},[t._v("跳过，进入首页")])])]),t._v(" "),a("van-popup",{staticClass:"qrCodeBox",attrs:{round:"","close-icon-position":"top-right",closeable:"","get-container":"body"},model:{value:t.qrcodeShow,callback:function(e){t.qrcodeShow=e},expression:"qrcodeShow"}},[a("span",{staticClass:"popupTit"},[t._v("立即支付")]),t._v(" "),a("div",{staticClass:"payNum"},[t._v("￥"),a("span",[t._v(t._s(t.amountNum))])]),t._v(" "),a("div",{staticClass:"payType"},[a("span",{staticClass:"typeLeft"},[t._v("支付方式")]),t._v(" "),a("span",{staticClass:"typeRight"},[a("i",{staticClass:"icon iconfont icon-wepay"}),t._v("微信支付")])]),t._v(" "),a("img",{staticClass:"qrCode",attrs:{src:t.codeUrl,alt:"微信支付二维码"}}),t._v(" "),a("p",{staticClass:"payTip"},[t._v("微信识别二维码支付")])]),t._v(" "),a("PayMethod",{attrs:{data:t.payList,"pwd-value":t.value,money:t.sitePrice,balance:t.walletBalance,error:t.errorInfo,"wallet-status":t.walletStatus},on:{oninput:t.onInput,delete:t.onDelete,close:t.onClose,payImmediatelyClick:t.payImmediatelyClick},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),t.payLoading?a("div",{staticClass:"loadFix"},[a("div",{staticClass:"loadMask"}),t._v(" "),a("van-loading",{staticClass:"loadIcon",attrs:{color:"#f7f7f7",type:"spinner"}})],1):t._e()],1)},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pay-the-fee-titel"},[e("h2",[this._v("支付费用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pay-the-fee-per-title"},[e("h3",[this._v("作为成员，您将获得以下权限")])])}]},iX2B:function(t,e,a){"use strict";a.r(e);var i=a("iVwf"),s=a("YXY0");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);var n=a("KHd+"),r=Object(n.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports}}]);