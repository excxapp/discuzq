(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{Hj4u:function(t,a,e){"use strict";e.r(a);var i=e("SP8B"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a.default=n.a},SJyd:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modify-data-box"},[e("ModifyHeader",{attrs:{title:"我的资料"}}),t._v(" "),e("main",{staticClass:"modify-data-main content"},[e("div",{staticClass:"modify-data-avatar"},[e("input",{staticClass:"hiddenInput",attrs:{type:"file",accept:"image/*"},on:{change:t.handleFile}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"modify-data-avatar-img"},[t.headPortrait?e("img",{attrs:{src:t.headPortrait,alt:"我的头像"}}):e("img",{staticClass:"resUserHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"}})]),t._v(" "),t._m(1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.myModifyPhone,expression:"myModifyPhone"}],staticClass:"myModifyPhone"},[t.modifyPhone?e("van-cell",{attrs:{title:"手机号","is-link":"",value:t.modifyPhone},on:{click:function(a){return t.myModify("modify-phone")}}}):e("van-cell",{attrs:{title:"手机号","is-link":"",value:"去绑定"},on:{click:function(a){return t.$router.push({path:"/bind-new-phone"})}}})],1),t._v(" "),e("van-cell",{attrs:{title:"登录密码","is-link":"",value:"********"},on:{click:function(a){return t.myModify("change-pwd")}}}),t._v(" "),e("van-cell",{attrs:{title:"钱包密码","is-link":"",value:t.canWalletPay?"********":"设置密码"},on:{click:function(a){return t.myModify("change-pay-pwd")}}}),t._v(" "),t.wechatNickname?e("van-cell",{attrs:{title:"微信","is-link":"",value:t.wechatNickname},on:{click:t.myModifyWechat}}):e("van-cell",{attrs:{title:"微信","is-link":"",value:"去绑定"},on:{click:t.wechatBind}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.realNameShow,expression:"realNameShow"}]},[t.realName?e("van-cell",{attrs:{title:"实名认证",value:t.realName}}):e("van-cell",{attrs:{title:"实名认证","is-link":"",value:"认证"},on:{click:function(a){return t.$router.push({path:"/real-name"})}}})],1)],1)],1)},n=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modify-data-avatar-title m-site-cell-access-bd"},[a("p",{staticClass:"modify-data-avatar-title-img"},[this._v("头像")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("i",{staticClass:"modify-data-avatar-right"},[a("span",{staticClass:"icon iconfont icon-right m-site-cell-access-ft-icon",staticStyle:{color:"#e5e5e5"}})])}]},SP8B:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=r(e("QbLZ"));e("iUmJ"),e("llYx");var n=r(e("Xbky"));function r(t){return t&&t.__esModule?t:{default:t}}a.default=(0,i.default)({name:"modify-data-view"},n.default)},Xbky:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=o(e("JZuw")),n=o(e("VVfg")),r=o(e("6NK7"));function o(t){return t&&t.__esModule?t:{default:t}}a.default={data:function(){return{headPortrait:"",modifyPhone:"",changePwd:"",bindType:"",wechatId:"",wechatNickname:"",tipWx:"",isWeixin:"",isPhone:"",realName:"",identity:"",canWalletPay:"",realNameShow:"true",openid:"",myModifyPhone:""}},components:{ModifyHeader:i.default},created:function(){this.modifyData(),this.wechat(),this.isWeixin=r.default.isWeixin().isWeixin,this.isPhone=r.default.isWeixin().isPhone,this.isWeixin?this.tipWx="确认解绑微信及退出登录":this.tipWx="确认解绑微信",0==n.default.getLItem("siteInfo")._data.qcloud.qcloud_faceid&&(this.realNameShow=!1);var t=n.default.getLItem("siteInfo")._data.qcloud.qcloud_sms;this.myModifyPhone=0!=t},methods:{myModify:function(t){switch(t){case"modify-phone":this.$router.push("/modify-phone");break;case"change-pwd":this.$router.push("/change-pwd");break;case"bind-new-phone":this.$router.push("/bind-new-phone");break;case"bind-new-phone":this.$router.push("/real-name");break;case"change-pay-pwd":this.canWalletPay?this.$router.replace({path:"verify-pay-pwd"}):this.$router.replace({path:"setup-pay-pwd"});break;default:this.$router.push("/")}},modifyData:function(){var t=this,a=n.default.getLItem("tokenId");this.appFetch({url:"users",method:"get",splice:"/"+a,data:{include:"wechat"}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(t.modifyPhone=a.readdata._data.mobile,t.headPortrait=a.readdata._data.avatarUrl,t.wechatId=a.readdata._data.id,t.canWalletPay=a.readdata._data.canWalletPay,a.readdata.wechat?t.wechatNickname=a.readdata.wechat._data.nickname:t.wechatNickname=!1,""!==a.readdata._data.realname?t.realName=a.readdata._data.realname+"  "+a.readdata._data.identity:t.realName=!1)}))},handleFile:function(t){var a=this,e=t.target.files[0],i=new FormData;i.append("avatar",e);var r=n.default.getLItem("tokenId");this.appFetch({url:"upload",method:"post",splice:r+"/avatar",data:i}).then((function(t){t.errors?t.errors[0].detail?a.$toast.fail(t.errors[0].code+"\n"+t.errors[0].detail[0]):a.$toast.fail(t.errors[0].code):(a.headPortrait=t.data.attributes.avatarUrl,a.modifyData())}))},myModifyWechat:function(){var t=this;this.$dialog.confirm({title:this.tipWx}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):t.wechat(t.wechatId)}))},wechat:function(t){var a=this;""!=t&&null!=t&&this.appFetch({url:"wechatDelete",method:"delete",splice:this.wechatId+"/wechat",data:{}}).then((function(t){t.errors?a.$toast.fail(t.errors[0].code):a.appCommonH.isWeixin().isWeixin?(localStorage.clear(),a.$router.push({path:"/wx-sign-up-bd"})):a.modifyData()}))},wechatBind:function(){var t=this;this.isWeixin?this.appFetch({url:"wechatBind",method:"get",data:{}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):window.location.href=a.readdata._data.location})):this.isPhone?this.$toast.fail("请在微信客户端中进行绑定操作"):this.appFetch({url:"wxLogin",method:"get",data:{}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):window.location.href=a.readdata._data.location}))}}}},hpG4:function(t,a,e){"use strict";e.r(a);var i=e("SJyd"),n=e("Hj4u");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);var o=e("KHd+"),s=Object(o.a)(n.default,i.a,i.b,!1,null,"017ae760",null);a.default=s.exports},llYx:function(t,a,e){}}]);