(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4d7F":function(t,e,i){t.exports={default:i("aW7e"),__esModule:!0}},"8gHz":function(t,e,i){var a=i("5K7Z"),r=i("eaoh"),s=i("UWiX")("species");t.exports=function(t,e){var i,n=a(t).constructor;return void 0===n||null==(i=a(n)[s])?e:r(i)}},EXMj:function(t,e){t.exports=function(t,e,i,a){if(!(t instanceof e)||void 0!==a&&a in t)throw TypeError(i+": incorrect invocation!");return t}},"JMW+":function(t,e,i){"use strict";var a,r,s,n,o=i("uOPS"),c=i("5T2Y"),u=i("2GTP"),l=i("QMMT"),d=i("Y7ZC"),h=i("93I4"),f=i("eaoh"),v=i("EXMj"),p=i("oioR"),m=i("8gHz"),g=i("QXhf").set,_=i("q6LJ")(),w=i("ZW5q"),b=i("RDmV"),x=i("vBP9"),C=i("zXhZ"),y=c.TypeError,S=c.process,M=S&&S.versions,P=M&&M.v8||"",k=c.Promise,R="process"==l(S),I=function(){},E=r=w.f,F=!!function(){try{var t=k.resolve(1),e=(t.constructor={})[i("UWiX")("species")]=function(t){t(I,I)};return(R||"function"==typeof PromiseRejectionEvent)&&t.then(I)instanceof e&&0!==P.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),z=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},W=function(t,e){if(!t._n){t._n=!0;var i=t._c;_((function(){for(var a=t._v,r=1==t._s,s=0,n=function(e){var i,s,n,o=r?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{o?(r||(2==t._h&&U(t),t._h=1),!0===o?i=a:(l&&l.enter(),i=o(a),l&&(l.exit(),n=!0)),i===e.promise?u(y("Promise-chain cycle")):(s=z(i))?s.call(i,c,u):c(i)):u(a)}catch(t){l&&!n&&l.exit(),u(t)}};i.length>s;)n(i[s++]);t._c=[],t._n=!1,e&&!t._h&&j(t)}))}},j=function(t){g.call(c,(function(){var e,i,a,r=t._v,s=T(t);if(s&&(e=b((function(){R?S.emit("unhandledRejection",r,t):(i=c.onunhandledrejection)?i({promise:t,reason:r}):(a=c.console)&&a.error&&a.error("Unhandled promise rejection",r)})),t._h=R||T(t)?2:1),t._a=void 0,s&&e.e)throw e.v}))},T=function(t){return 1!==t._h&&0===(t._a||t._c).length},U=function(t){g.call(c,(function(){var e;R?S.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},N=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),W(e,!0))},A=function(t){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===t)throw y("Promise can't be resolved itself");(e=z(t))?_((function(){var a={_w:i,_d:!1};try{e.call(t,u(A,a,1),u(N,a,1))}catch(t){N.call(a,t)}})):(i._v=t,i._s=1,W(i,!1))}catch(t){N.call({_w:i,_d:!1},t)}}};F||(k=function(t){v(this,k,"Promise","_h"),f(t),a.call(this);try{t(u(A,this,1),u(N,this,1))}catch(t){N.call(this,t)}},(a=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=i("XJU/")(k.prototype,{then:function(t,e){var i=E(m(this,k));return i.ok="function"!=typeof t||t,i.fail="function"==typeof e&&e,i.domain=R?S.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&W(this,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),s=function(){var t=new a;this.promise=t,this.resolve=u(A,t,1),this.reject=u(N,t,1)},w.f=E=function(t){return t===k||t===n?new s(t):r(t)}),d(d.G+d.W+d.F*!F,{Promise:k}),i("RfKB")(k,"Promise"),i("TJWN")("Promise"),n=i("WEpk").Promise,d(d.S+d.F*!F,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),d(d.S+d.F*(o||!F),"Promise",{resolve:function(t){return C(o&&this===n?k:this,t)}}),d(d.S+d.F*!(F&&i("TuGD")((function(t){k.all(t).catch(I)}))),"Promise",{all:function(t){var e=this,i=E(e),a=i.resolve,r=i.reject,s=b((function(){var i=[],s=0,n=1;p(t,!1,(function(t){var o=s++,c=!1;i.push(void 0),n++,e.resolve(t).then((function(t){c||(c=!0,i[o]=t,--n||a(i))}),r)})),--n||a(i)}));return s.e&&r(s.v),i.promise},race:function(t){var e=this,i=E(e),a=i.reject,r=b((function(){p(t,!1,(function(t){e.resolve(t).then(i.resolve,a)}))}));return r.e&&a(r.v),i.promise}})},Lomd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(i("QbLZ"));i("lpfh");var r=s(i("vx/2"));function s(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({name:"site-set-view"},r.default)},MCSJ:function(t,e){t.exports=function(t,e,i){var a=void 0===i;switch(e.length){case 0:return a?t():t.call(i);case 1:return a?t(e[0]):t.call(i,e[0]);case 2:return a?t(e[0],e[1]):t.call(i,e[0],e[1]);case 3:return a?t(e[0],e[1],e[2]):t.call(i,e[0],e[1],e[2]);case 4:return a?t(e[0],e[1],e[2],e[3]):t.call(i,e[0],e[1],e[2],e[3])}return t.apply(i,e)}},MtVS:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"site-set-box"},[i("Card",{attrs:{header:"站点名称："}},[i("CardRow",{attrs:{description:"你的Discuz!Q 站点的名称"}},[i("el-input",{attrs:{placeholder:"站点名称"},model:{value:t.siteName,callback:function(e){t.siteName=e},expression:"siteName"}})],1)],1),t._v(" "),i("Card",{attrs:{header:"站点介绍："}},[i("CardRow",{attrs:{description:"你的Discuz!Q 站点的介绍"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},placeholder:"站点介绍"},model:{value:t.siteIntroduction,callback:function(e){t.siteIntroduction=e},expression:"siteIntroduction"}})],1)],1),t._v(" "),i("Card",{attrs:{header:"站点LOGO："}},[i("CardRow",{attrs:{description:"你的Discuz!Q 站点的LOGO"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","http-request":t.uploaderLogo,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload},on:{change:t.handleFile}},[t.imageUrl?i("div",{staticClass:"avatar"},[i("img",{staticClass:"avatar-LogoImage",style:{width:t.imgWidht+"px",height:t.imgHeight+"px"},attrs:{src:t.imageUrl}})]):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),i("el-button",{attrs:{type:"text"},on:{click:t.deleteImage}},[t._v("删除")])],1)],1),t._v(" "),i("Card",{attrs:{header:"站长："}},[i("CardRow",{attrs:{description:"填写站长的用户id"}},[i("el-input",{attrs:{placeholder:"站长",type:"number"},model:{value:t.siteMasterId,callback:function(e){t.siteMasterId=e},expression:"siteMasterId"}})],1)],1),t._v(" "),i("Card",{attrs:{header:"站点模式："}},[i("CardRow",{attrs:{description:"你的Discuz!Q 站点的运行模式"}},[i("el-radio",{attrs:{label:"1"},on:{change:function(e){return t.radioChange("public")}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("公开模式")]),t._v(" "),i("el-radio",{attrs:{label:"2"},on:{change:function(e){return t.radioChange("pay")}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("付费模式")])],1)],1),t._v(" "),i("el-collapse-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:"2"===t.radio,expression:"radio === '2'"}]},[i("Card",{attrs:{header:"加入价格（元）："}},[i("CardRow",{attrs:{description:"付费模式下，付费成为站点默认角色，需支付的金额"}},[i("el-input",{attrs:{placeholder:"加入价格",type:"number"},model:{value:t.sitePrice,callback:function(e){t.sitePrice=e},expression:"sitePrice"}})],1)],1),t._v(" "),i("Card",{attrs:{header:"到期时间："}},[i("CardRow",{attrs:{description:"付费模式下，付费成为站点默认角色，可维持的时间，不填或为0时不限制"}},[t._v("\n            加入起\n            "),i("el-input",{staticStyle:{height:"36PX",width:"80PX"},attrs:{clearable:"",placeholder:"天数",type:"number"},model:{value:t.siteExpire,callback:function(e){t.siteExpire=e},expression:"siteExpire"}}),t._v("\n天后\n          ")],1)],1)],1)]),t._v(" "),i("Card",{attrs:{header:"主题打赏金额分成比例："}},[i("CardRow",{attrs:{description:"主题打赏的分成比例设置，两者加起来必须为10，不填时默认为作者10、平台0"}},[i("div",{staticClass:"proportion-box"},[i("span",[t._v("作者")]),t._v(" "),i("el-input",{attrs:{size:"small",type:"number"},nativeOn:{"!blur":function(e){return t.onblurFun(e)}},model:{value:t.siteAuthorScale,callback:function(e){t.siteAuthorScale=e},expression:"siteAuthorScale"}})],1),t._v(" "),i("div",{staticClass:"proportion-box"},[i("span",[t._v("平台(站长)")]),t._v(" "),i("el-input",{attrs:{size:"small",type:"number"},nativeOn:{"!blur":function(e){return t.onblurFun(e)}},model:{value:t.siteMasterScale,callback:function(e){t.siteMasterScale=e},expression:"siteMasterScale"}})],1)])],1),t._v(" "),i("Card",{attrs:{header:"网站备案信息："}},[i("CardRow",{attrs:{description:"你的Discuz!Q 站点的 ICP 备案编号"}},[i("el-input",{model:{value:t.siteRecord,callback:function(e){t.siteRecord=e},expression:"siteRecord"}})],1)],1),t._v(" "),i("Card",{attrs:{header:"第三方统计："}},[i("CardRow",{attrs:{description:"你的Discuz!Q 网站的第三方统计代码"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:4}},model:{value:t.siteStat,callback:function(e){t.siteStat=e},expression:"siteStat"}})],1)],1),t._v(" "),i("Card",{attrs:{header:"关闭站点："}},[i("CardRow",{attrs:{description:"暂时将网站关闭，其他人无法访问，但不影响管理员访问"}},[i("el-radio",{attrs:{label:"1"},on:{change:function(e){return t.radioChangeClose("1")}},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[t._v("是")]),t._v(" "),i("el-radio",{attrs:{label:"2"},on:{change:function(e){return t.radioChangeClose("2")}},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[t._v("否")])],1)],1),t._v(" "),i("el-collapse-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:"1"===t.radio2,expression:"radio2 === '1'"}]},[i("Card",{attrs:{header:""}},[i("CardRow",{attrs:{description:"站点关闭时出现的提示信息"}},[i("el-input",{model:{value:t.siteCloseMsg,callback:function(e){t.siteCloseMsg=e},expression:"siteCloseMsg"}})],1)],1)],1)]),t._v(" "),i("Card",{staticClass:"footer-btn"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.siteSetPost}},[t._v("提交")])],1)],1)},r=[]},PBE1:function(t,e,i){"use strict";var a=i("Y7ZC"),r=i("WEpk"),s=i("5T2Y"),n=i("8gHz"),o=i("zXhZ");a(a.P+a.R,"Promise",{finally:function(t){var e=n(this,r.Promise||s.Promise),i="function"==typeof t;return this.then(i?function(i){return o(e,t()).then((function(){return i}))}:t,i?function(i){return o(e,t()).then((function(){throw i}))}:t)}})},PUmH:function(t,e,i){"use strict";i.r(e);var a=i("MtVS"),r=i("xoSE");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("z1HU");var n=i("KHd+"),o=Object(n.a)(r.default,a.a,a.b,!1,null,null,null);e.default=o.exports},"Q/yX":function(t,e,i){"use strict";var a=i("Y7ZC"),r=i("ZW5q"),s=i("RDmV");a(a.S,"Promise",{try:function(t){var e=r.f(this),i=s(t);return(i.e?e.reject:e.resolve)(i.v),e.promise}})},QXhf:function(t,e,i){var a,r,s,n=i("2GTP"),o=i("MCSJ"),c=i("MvwC"),u=i("Hsns"),l=i("5T2Y"),d=l.process,h=l.setImmediate,f=l.clearImmediate,v=l.MessageChannel,p=l.Dispatch,m=0,g={},_=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},w=function(t){_.call(t.data)};h&&f||(h=function(t){for(var e=[],i=1;arguments.length>i;)e.push(arguments[i++]);return g[++m]=function(){o("function"==typeof t?t:Function(t),e)},a(m),m},f=function(t){delete g[t]},"process"==i("a0xu")(d)?a=function(t){d.nextTick(n(_,t,1))}:p&&p.now?a=function(t){p.now(n(_,t,1))}:v?(s=(r=new v).port2,r.port1.onmessage=w,a=n(s.postMessage,s,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(a=function(t){l.postMessage(t+"","*")},l.addEventListener("message",w,!1)):a="onreadystatechange"in u("script")?function(t){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),_.call(t)}}:function(t){setTimeout(n(_,t,1),0)}),t.exports={set:h,clear:f}},RDmV:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},TJWN:function(t,e,i){"use strict";var a=i("5T2Y"),r=i("WEpk"),s=i("2faE"),n=i("jmDH"),o=i("UWiX")("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:a[t];n&&e&&!e[o]&&s.f(e,o,{configurable:!0,get:function(){return this}})}},"XJU/":function(t,e,i){var a=i("NegM");t.exports=function(t,e,i){for(var r in e)i&&t[r]?t[r]=e[r]:a(t,r,e[r]);return t}},ZW5q:function(t,e,i){"use strict";var a=i("eaoh");function r(t){var e,i;this.promise=new t((function(t,a){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=a})),this.resolve=a(e),this.reject=a(i)}t.exports.f=function(t){return new r(t)}},aW7e:function(t,e,i){i("wgeU"),i("FlQf"),i("bBy9"),i("JMW+"),i("PBE1"),i("Q/yX"),t.exports=i("WEpk").Promise},oioR:function(t,e,i){var a=i("2GTP"),r=i("sNwI"),s=i("NwJ3"),n=i("5K7Z"),o=i("tEej"),c=i("fNZA"),u={},l={};(e=t.exports=function(t,e,i,d,h){var f,v,p,m,g=h?function(){return t}:c(t),_=a(i,d,e?2:1),w=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(s(g)){for(f=o(t.length);f>w;w++)if((m=e?_(n(v=t[w])[0],v[1]):_(t[w]))===u||m===l)return m}else for(p=g.call(t);!(v=p.next()).done;)if((m=r(p,_,v.value,e))===u||m===l)return m}).BREAK=u,e.RETURN=l},q6LJ:function(t,e,i){var a=i("5T2Y"),r=i("QXhf").set,s=a.MutationObserver||a.WebKitMutationObserver,n=a.process,o=a.Promise,c="process"==i("a0xu")(n);t.exports=function(){var t,e,i,u=function(){var a,r;for(c&&(a=n.domain)&&a.exit();t;){r=t.fn,t=t.next;try{r()}catch(a){throw t?i():e=void 0,a}}e=void 0,a&&a.enter()};if(c)i=function(){n.nextTick(u)};else if(!s||a.navigator&&a.navigator.standalone)if(o&&o.resolve){var l=o.resolve(void 0);i=function(){l.then(u)}}else i=function(){r.call(a,u)};else{var d=!0,h=document.createTextNode("");new s(u).observe(h,{characterData:!0}),i=function(){h.data=d=!d}}return function(a){var r={fn:a,next:void 0};e&&(e.next=r),t||(t=r,i()),e=r}}},vBP9:function(t,e,i){var a=i("5T2Y").navigator;t.exports=a&&a.userAgent||""},"vx/2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(i("4d7F")),r=n(i("4gYi")),s=n(i("pNQN"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{radio:"1",radio2:"2",imageUrl:"",imgWidht:0,imgHeight:0,loading:!0,fullscreenLoading:!1,siteName:"",siteIntroduction:"",siteMode:"1",sitePrice:"",siteExpire:"",siteAuthorScale:"",siteMasterScale:"",siteClose:"1",siteLogoFile:[],siteMasterId:"",siteRecord:"",siteStat:"",siteCloseMsg:"",dialogImageUrl:"",dialogVisible:!1,fileList:[]}},created:function(){this.loadStatus()},computed:{},methods:{loadStatus:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.siteName=e.readdata._data.set_site.site_name,t.siteIntroduction=e.readdata._data.set_site.site_introduction,t.siteMode=e.readdata._data.set_site.site_mode,t.imageUrl=e.readdata._data.set_site.site_logo,t.getScaleImgSize(t.imageUrl,{width:120,height:120}).then((function(e){t.imgWidht=e.width,t.imgHeight=e.height})),"pay"==t.siteMode?t.radio="2":t.radio="1",t.sitePrice=e.readdata._data.set_site.site_price,t.siteExpire=e.readdata._data.set_site.site_expire,t.siteAuthorScale=e.readdata._data.set_site.site_author_scale,t.siteMasterScale=e.readdata._data.set_site.site_master_scale,t.siteRecord=e.readdata._data.set_site.site_icp,t.siteStat=e.readdata._data.set_site.site_stat,t.siteClose=e.readdata._data.set_site.site_close,t.siteMasterId=e.readdata._data.set_site.site_author.id,1==t.siteClose?t.radio2="1":t.radio2="2",t.siteCloseMsg=e.readdata._data.set_site.site_close_msg)})).catch((function(t){}))},deleteImage:function(t,e){var i=this,a=new FormData;a.append("logo",t.raw),this.appFetch({url:"logo",method:"delete",data:a}).then((function(t){t.errors?i.$message.error(t.errors[0].code):i.$message("删除成功")})).catch((function(t){}))},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},radioChange:function(t){this.siteMode=t},radioChangeClose:function(t){this.siteClose="1"==t},handleAvatarSuccess:function(t,e){},handleFile:function(){},getScaleImgSize:function(t,e){var i=this;return new a.default((function(a,r){i.getImageSize(t).then((function(t){var i=t.height/t.width;i>e.height/e.width?a({width:e.height/i,height:e.height}):a({width:e.width,height:e.width*i})})).catch((function(t){r(t)}))}))},getImageSize:function(t){var e=document.createElement("img");return new a.default((function(i,a){e.onload=function(t){i({width:e.naturalWidth,height:e.naturalHeight})},e.src=t,e.onerror=a}))},beforeAvatarUpload:function(t){var e="image/jpeg"==t.type||"image/png"==t.type||"image/gif"==t.type,i=t.size/1024/1024<2;return e?i?(this.multfileImg=t,e&&i):(this.$message.warning("上传头像图片大小不能超过 2MB!"),i):(this.$message.warning("上传头像图片只能是 JPG/PNG/GIF 格式!"),e)},uploaderLogo:function(t){var e=this,i=new FormData;i.append("logo",t.file),this.appFetch({url:"logo",method:"post",data:i}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.imageUrl=t.readdata._data.default.logo,e.getScaleImgSize(e.imageUrl,{width:120,height:120}).then((function(t){e.imgWidht=t.width,e.imgHeight=t.height})),e.$message({message:"上传成功",type:"success"}))})).catch((function(t){}))},errorFile:function(){},siteSetPost:function(){var t=this;this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"site_name",value:this.siteName?this.siteName:"",tag:"default"}},{attributes:{key:"site_introduction",value:this.siteIntroduction?this.siteIntroduction:"",tag:"default"}},{attributes:{key:"site_author",value:this.siteMasterId,tag:"default"}},{attributes:{key:"site_mode",value:this.siteMode,tag:"default"}},{attributes:{key:"site_price",value:this.sitePrice,tag:"default"}},{attributes:{key:"site_expire",value:this.siteExpire,tag:"default"}},{attributes:{key:"site_author_scale",value:this.siteAuthorScale,tag:"default"}},{attributes:{key:"site_master_scale",value:this.siteMasterScale,tag:"default"}},{attributes:{key:"site_record",value:this.siteRecord,tag:"default"}},{attributes:{key:"site_stat",value:this.siteStat,tag:"default"}},{attributes:{key:"site_close",value:this.siteClose,tag:"default"}},{attributes:{key:"site_close_msg",value:this.siteCloseMsg,tag:"default"}}]}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):t.$message({message:"提交成功",type:"success"})})).catch((function(t){}))},onblurFun:function(){null!=this.siteAuthorScale&&""!=this.siteAuthorScale||(this.siteAuthorScale=0),null!=this.siteMasterScale&&""!=this.siteMasterScale||(this.siteMasterScale=0),10!=parseFloat(this.siteAuthorScale)+parseFloat(this.siteMasterScale)&&this.$message({message:"分成比例相加必须为10",type:"error"})}},components:{Card:r.default,CardRow:s.default}}},x47F:function(t,e,i){},xoSE:function(t,e,i){"use strict";i.r(e);var a=i("Lomd"),r=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e.default=r.a},z1HU:function(t,e,i){"use strict";var a=i("x47F");i.n(a).a},zXhZ:function(t,e,i){var a=i("5K7Z"),r=i("93I4"),s=i("ZW5q");t.exports=function(t,e){if(a(t),r(e)&&e.constructor===t)return e;var i=s.f(t);return(0,i.resolve)(e),i.promise}}}]);