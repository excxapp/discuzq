(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"0IfR":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a("4gYi")),n=l(a("pNQN"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{tableData:[{name:"张三",method:"处理",address:"上海市普陀区金沙江路 1518 弄",value:"不处理"},{name:"李四",method:"不处理",address:"上海市普陀区金沙江路 1518 弄",value:"处理"},{name:"王五",method:"处理",address:"上海市普陀区金沙江路 1518 弄",value:"不处理"},{name:"赵六",method:"不处理",address:"上海市普陀区金沙江路 1518 弄",value:"处理"},{name:"田七",method:"处理",address:"上海市普陀区金沙江路 1518 弄",value:"不处理"}],multipleSelection:[],options:[{value:"选项1",label:"不处理"},{value:"选项2",label:"处理"}],checked:!1,radio:!1,deleteStatus:!0,textarea:""}},methods:{toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e,this.multipleSelection.length>=1?this.deleteStatus=!1:this.deleteStatus=!0},loginStatus:function(){var e=this;if(""!==this.textarea.trim()){var t=this.textarea.split("\n");this.appFetch({url:"batchSubmit",method:"post",standard:!1,data:{data:{type:"stop-words",words:t,overwrite:!!this.radio}}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):e.$message({message:"提交成功",type:"success"})}))}}},components:{Card:r.default,CardRow:n.default}}},"47tr":function(e,t,a){"use strict";a.r(t);var r=a("E2RH"),n=a("CeS1");for(var l in n)"default"!==l&&function(e){a.d(t,e,(function(){return n[e]}))}(l);var i=a("KHd+"),o=Object(i.a)(n.default,r.a,r.b,!1,null,null,null);t.default=o.exports},CeS1:function(e,t,a){"use strict";a.r(t);var r=a("NP2U"),n=a.n(r);for(var l in r)"default"!==l&&function(e){a.d(t,e,(function(){return r[e]}))}(l);t.default=n.a},E2RH:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-sensitive-words-box"},[a("Card",{attrs:{header:"批量添加本地敏感词："}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5},placeholder:"敏感词"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}}),e._v(" "),a("el-radio-group",{attrs:{"text-color":"#67C23A",fill:"#67C23A"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("div",[a("el-radio",{attrs:{label:!1}},[e._v("不导入已经存在的词语")])],1),e._v(" "),a("div",[a("el-radio",{attrs:{label:!0}},[e._v("使用新的设置覆盖已经存在的词语")])],1)])],1),e._v(" "),a("Card",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.loginStatus}},[e._v("提交")])],1),e._v(" "),a("Card",[a("h2",[e._v("提示：")]),e._v(" "),a("p",[e._v("批量添加内容格式：")]),e._v(" "),a("p",[e._v("目前标识")]),e._v(" "),a("p",[e._v("敏感词内容=主题和回复处理方式标识|用户名处理方式标识。")]),e._v(" "),a("p",[e._v("主题的处理方式标识为：不处理，审核，禁止，替换词；")]),e._v(" "),a("p",[e._v("用户名的处理方式标识为 不处理，禁止。")]),e._v(" "),a("p",[e._v("如不处理直接留空即可；如需当用户发布包含某个词语的文字时，自动标记为需要人工审核，而不直接显示或替换过滤，请将其对应的替换内容设置为{MOD}即可；如需禁止发布包含某个词语的文字，而不是替换过滤，请将其对应的替换内容设置为{BANNED}即可；如需替换则直接填写替换词即可；如不填写处理方式则自动替换为**。")]),e._v(" "),a("p",[e._v("举例：")]),e._v(" "),a("p",[e._v("敏感词一号={MOD}|{BANNED}")]),e._v(" "),a("p",[e._v("敏感词二号={BANNED}")]),e._v(" "),a("p",[e._v("敏感词三号=替换词")]),e._v(" "),a("p",[e._v("敏感词四号")]),e._v(" "),a("p",[e._v("说明：")]),e._v(" "),a("p",[e._v("主题和回复处理方式为审核，用户名处理方式为禁止")]),e._v(" "),a("p",[e._v("主题和回复处理方式为禁止，用户名不处理")]),e._v(" "),a("p",[e._v("主题和回复处理方式为替换，用户名不处理")]),e._v(" "),a("p",[e._v("主题和回复处理方式为替换成**，用户名不处理")])])],1)},n=[]},NP2U:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a("QbLZ"));a("lpfh");var n=l(a("0IfR"));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)({name:"add-sensitive-words-view"},n.default)}}]);