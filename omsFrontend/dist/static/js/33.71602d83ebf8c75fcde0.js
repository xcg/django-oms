webpackJsonp([33],{VPNs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Zk8K"),l=a("vMJZ"),o=a("nSkA"),n={props:["rowdata"],data:function(){return{create_user:localStorage.getItem("username"),rules:{type:[{required:!0,message:"请输入正确的内容",trigger:"change"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],level:[{required:!0,type:"number",message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},platforms:[],merchants:[],paychannelnames:[],props:{label:"name",value:"name",children:"merchants"},users:[]}},created:function(){this.getPlatforms(),this.getPayChannelNames(),this.getTicketUsers(),this.getMerchants()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return console.log("error submit!!"),!1;Object(r.t)(t.rowdata.id,t.rowdata).then(function(a){var r={action_user:t.rowdata.action_user,title:"【支付通道修改】",message:"修改人: "+t.create_user+"\n处理人: "+t.rowdata.action_user+"\n平台: "+t.rowdata.platform+"     商户: "+t.rowdata.merchant+"     通道: "+t.rowdata.type};Object(o.f)(r),t.$emit("formdata",a.data),t.$refs[e].resetFields()})})},getPlatforms:function(){var e=this;Object(r.i)().then(function(t){e.platforms=t.data})},getMerchants:function(){var e=this,t={platform__name:this.rowdata.platform};Object(r.f)(t).then(function(t){e.merchants=t.data})},getPayChannelNames:function(){var e=this;Object(r.h)().then(function(t){e.paychannelnames=t.data})},getTicketUsers:function(){var e=this;Object(l.f)().then(function(t){e.users=t.data})}}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",attrs:{model:e.rowdata,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"平台",prop:"platform"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择平台"},on:{change:e.getMerchants},model:{value:e.rowdata.platform,callback:function(t){e.$set(e.rowdata,"platform",t)},expression:"rowdata.platform"}},e._l(e.platforms,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"商户",prop:"merchant"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择商户"},model:{value:e.rowdata.merchant,callback:function(t){e.$set(e.rowdata,"merchant",t)},expression:"rowdata.merchant"}},e._l(e.merchants,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择类型"},model:{value:e.rowdata.type,callback:function(t){e.$set(e.rowdata,"type",t)},expression:"rowdata.type"}},e._l(e.paychannelnames,function(e){return a("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"key信息",prop:"keyinfo"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.rowdata.keyinfo,callback:function(t){e.$set(e.rowdata,"keyinfo",t)},expression:"rowdata.keyinfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"紧急度",prop:"m_backurl"}},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.rowdata.level,callback:function(t){e.$set(e.rowdata,"level",t)},expression:"rowdata.level"}}),e._v(" "),a("a",{staticClass:"tips"},[e._v("Tip：星数代表问题紧急程度，星数越多，代表越紧急")])],1),e._v(" "),a("el-form-item",{attrs:{label:"转发域名",prop:"m_forwardurl"}},[a("el-input",{model:{value:e.rowdata.m_forwardurl,callback:function(t){e.$set(e.rowdata,"m_forwardurl",t)},expression:"rowdata.m_forwardurl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"提交域名",prop:"m_submiturl"}},[a("el-input",{model:{value:e.rowdata.m_submiturl,callback:function(t){e.$set(e.rowdata,"m_submiturl",t)},expression:"rowdata.m_submiturl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择通知人"},model:{value:e.rowdata.action_user,callback:function(t){e.$set(e.rowdata,"action_user",t)},expression:"rowdata.action_user"}},e._l(e.users,function(e){return a("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("更新")])],1)],1)},i=[],u={render:s,staticRenderFns:i},c=u,m=a("VU/8"),d=m(n,c,!1,null,null,null);t.default=d.exports}});