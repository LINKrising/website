webpackJsonp([0],{"+M7l":function(t,a,e){"use strict";$(function(){var t,a,e=$(".carousel");e.on("touchstart",function(a){t=a.originalEvent.touches[0].clientX}),e.on("touchmove",function(t){a=t.originalEvent.touches[0].clientX}),e.on("touchend",function(e){Math.abs(t-a)>50&&$(this).carousel(t>a?"next":"prev")})})},"2lX+":function(t,a){},DZO0:function(t,a){},DZzs:function(t,a,e){t.exports=e.p+"static/img/github.10a912b.jpg"},G0gn:function(t,a,e){t.exports=e.p+"static/img/wx.ad38f16.jpg"},IYLo:function(t,a){},MrOi:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={name:"NavBar",data:function(){return{qq:"438519233",wx:"13550190560",navbar:{navbar1:"LINK",navbar2:"首页",navbar3:"技术栈",navbar4:"联系",navbar5:"分享",navbar6:"笔记",navbar7:"ADMIN"},isContainer:!0}},mounted:function(){var t=document.documentElement.clientWidth;document.querySelector("#navbar");t<768&&(this.isContainer=!1)}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{container:t.isContainer},attrs:{id:"navbar"}},[e("nav",{staticClass:"navbar navbar-inverse",attrs:{role:"navigation"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.navbar.navbar1))])],1)]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"example-navbar-collapse"}},[e("ul",{staticClass:"nav navbar-nav"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.navbar.navbar2))])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/about"}},[t._v(t._s(t.navbar.navbar3))])],1),t._v(" "),e("li",{staticClass:"dropdown"},[e("router-link",{staticClass:"dropdown-toggle",attrs:{to:"/connect","data-toggle":"dropdown"}},[t._v(t._s(t.navbar.navbar4))]),t._v(" "),e("b",{staticClass:"caret"}),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("QQ:"+t._s(t.qq))])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("WX:"+t._s(t.wx))])])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/share"}},[t._v(t._s(t.navbar.navbar5))])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/Admin"}},[t._v(t._s(t.navbar.navbar6))])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/Admin"}},[t._v(t._s(t.navbar.navbar7))])],1)])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#example-navbar-collapse"}},[a("span",{staticClass:"sr-only"},[this._v("切换导航")]),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"})])}]};var r=e("VU/8")(i,n,!1,function(t){e("MrOi")},"data-v-9f764c2e",null).exports,l=e("/ocq"),o={name:"Home",data:function(){return{imgSrc:["../assets/carousel.jpg","../assets/carousel.jpg","../assets/carousel.jpg"]}},mounted:function(){document.documentElement.clientWidth;var t=document.documentElement.clientHeight;document.querySelector("#myCarousel").style.height=t-50+"px",$(".carousel").carousel()}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"carousel slide",attrs:{id:"myCarousel"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#myCarousel","data-slide-to":"0"}}),t._v(" "),s("li",{attrs:{"data-target":"#myCarousel","data-slide-to":"1"}}),t._v(" "),s("li",{attrs:{"data-target":"#myCarousel","data-slide-to":"2"}})]),t._v(" "),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"item active"},[s("img",{attrs:{src:e("kcCz"),alt:"First slide"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{attrs:{src:e("kcCz"),alt:"Second slide"}})]),t._v(" "),s("div",{staticClass:"item"},[s("img",{attrs:{src:e("kcCz"),alt:"Third slide"}})])]),t._v(" "),s("a",{staticClass:"left carousel-control",attrs:{href:"#myCarousel",role:"button","data-slide":"prev"}},[s("span",{staticClass:"glyphicon glyphicon-chevron-left",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),t._v(" "),s("a",{staticClass:"right carousel-control",attrs:{href:"#myCarousel",role:"button","data-slide":"next"}},[s("span",{staticClass:"glyphicon glyphicon-chevron-right",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Next")])])])])}]};var u=e("VU/8")(o,c,!1,function(t){e("DZO0")},"data-v-47f6caf8",null).exports,d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{attrs:{id:"intr"}}),t._v(" "),t._l(t.lists,function(a){return e("div",{key:a.item},[e("div",{staticClass:"list-group"},[e("a",{staticClass:"list-group-item active",attrs:{href:"#"}},[e("h4",{staticClass:"list-group-item-heading"},[t._v("\n                    "+t._s(a.title)+"\n                ")])]),t._v(" "),e("a",{staticClass:"list-group-item",attrs:{href:"#"}},[e("p",{staticClass:"list-group-item-heading"},[t._v("\n                    "+t._s(a.item)+"\n                ")])])])])})],2)},staticRenderFns:[]};var v=e("VU/8")({name:"About",data:function(){return{lists:[{title:"框架",item:"vue react jquery bootstrap element-ui ant-moblie"},{title:"技术栈",item:"vueJs+vuex+vueRouter+axios+python+django+mysql"},{title:"技术栈",item:"reactJs+reactRedux+reactRouter+nodeJs+express+mongodb"},{title:"技术栈",item:"html5+css3+javascript(es6)+php+mysql"}]}}},d,!1,function(t){e("VeqU")},"data-v-7dd117dd",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row-sm-12"},[s("div",{staticClass:"col-sm-12 col-md-4"},[s("a",{staticClass:"thumbnail",attrs:{href:"#"}},[s("img",{staticClass:"img-circle",attrs:{src:e("tBk4"),alt:"QQ",width:"120"}})]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"#",role:"button"}},[t._v("\n                    438519233\n                ")])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("a",{staticClass:"thumbnail",attrs:{href:"#"}},[s("img",{attrs:{src:e("G0gn"),alt:"wx",width:"120"}})]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"tel:13550190560",role:"button"}},[t._v("\n                    13550190560\n                ")])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("a",{staticClass:"thumbnail",attrs:{href:"#"}},[s("img",{attrs:{src:e("DZzs"),alt:"github",width:"120"}})]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"http://www.github.com/linkrising",role:"button",target:"_blank"}},[t._v("\n                    goto\n                ")])])])])}]};var p=e("VU/8")({name:"Connect",data:function(){return{}}},m,!1,function(t){e("ewGM")},"data-v-0083a058",null).exports,h={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("h1",{staticClass:"found"},[this._v(this._s(this.msg))])])},staticRenderFns:[]};var _=e("VU/8")({data:function(){return{msg:"404,页面失联了"}}},h,!1,function(t){e("RI6Y")},"data-v-5785f7f8",null).exports,f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{color:"white"},attrs:{id:"share"}},[e("div",{staticClass:"panel-group",attrs:{id:"accordion-1"}},[e("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),e("div",{staticClass:"panel-collapse collapse in",attrs:{id:"collapseOne-1"}},[e("div",{staticClass:"panel-body"},t._l(t.websites,function(a){return e("a",{key:a.siteName,attrs:{href:a.site}},[t._v(t._s(a.siteName)+"     ")])}))])])]),t._v(" "),e("div",{staticClass:"panel-group",attrs:{id:"accordion-2"}},[e("div",{staticClass:"panel panel-default"},[t._m(1),t._v(" "),e("div",{staticClass:"panel-collapse collapse in",attrs:{id:"collapseOne-2"}},[e("div",{staticClass:"panel-body"},t._l(t.otherSite,function(a){return e("a",{key:a.siteName,attrs:{href:a.site}},[t._v(t._s(a.siteName)+"     ")])}))])])]),t._v(" "),e("div",{staticClass:"panel-group",attrs:{id:"accordion-3"}},[e("div",{staticClass:"panel panel-default"},[t._m(2),t._v(" "),e("div",{staticClass:"panel-collapse collapse in",attrs:{id:"collapseOne-3"}},[e("div",{staticClass:"panel-body"},t._l(t.blog,function(a){return e("a",{key:a.siteName,attrs:{href:a.site}},[t._v(t._s(a.siteName)+"      ")])}))])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h4",{staticClass:"panel-title"},[a("a",{attrs:{"data-toggle":"collapse","data-parent":"#accordion-1",href:"#collapseOne-1"}},[this._v("\n                        日常测试或API查询\n                    ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h4",{staticClass:"panel-title"},[a("a",{attrs:{"data-toggle":"collapse","data-parent":"#accordion-2",href:"#collapseOne-2"}},[this._v("\n                        有趣的网站推荐\n                    ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h4",{staticClass:"panel-title"},[a("a",{attrs:{"data-toggle":"collapse","data-parent":"#accordion-3",href:"#collapseOne-3"}},[this._v("\n                        博客\n                    ")])])])}]};var g=e("VU/8")({name:"Share",data:function(){return{websites:[{site:"https://caniuse.com/",siteName:"CANIUSE(浏览器兼容)"},{site:"https://developer.mozilla.org/zh-CN/",siteName:"MDN"},{site:"https://cn.vuejs.org/",siteName:"Vue"},{site:"https://reactjs.org/",siteName:"React"},{site:"https://nodejs.org/",siteName:"Node"},{site:"http://es6.ruanyifeng.com/",siteName:"ES6()"},{site:"https://tool.lu/json/",siteName:"Json格式化"},{site:"https://tool.lu/httpcode/",siteName:"http状态码"},{site:"https://tool.lu/regex/",siteName:"正则测试"}],otherSite:[{site:"https://aotu.io/",siteName:"凹凸实验室"},{site:"https://guide.aotu.io/",siteName:"前端代码规范推荐"},{site:"http://fex.baidu.com/",siteName:"百度前端FEX"},{site:"http://taobaofed.org/",siteName:"淘宝FED"},{site:"http://ued.ctrip.com/",siteName:"携程UED"},{site:"https://github.com/",siteName:"github"},{site:"https://npm.taobao.org/",siteName:"淘宝镜像"},{site:"https://mirrors.tuna.tsinghua.edu.cn/",siteName:"清华镜像"}],blog:[{site:"http://www.ruanyifeng.com/home.html",siteName:"阮一峰"},{site:"https://www.liaoxuefeng.com/",siteName:"廖雪峰"},{site:"http://www.ycku.com/",siteName:"李炎恢"}]}}},f,!1,function(t){e("2lX+")},"data-v-74bf1f63",null).exports;e("IYLo");s.a.use(l.a);var b=new l.a({routes:[{path:"/",name:"Home",component:u},{path:"/NavBar",name:"NavBar",component:r},{path:"/About",name:"About",component:v},{path:"/Connect",name:"Connect",component:p},{path:"/Admin",name:"Admin",component:_},{path:"/share",name:"share",component:g}]}),C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"alert alert-info alert-dismissable container"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-hidden":"true"}},[this._v("\n            ×\n        ")]),this._v(" "),a("h4",[this._v("服务器到期,没钱购买,有些板块没有!!!!!")])])])}]};var N={name:"App",components:{NavBar:r,Alert:e("VU/8")({name:"Alert"},C,!1,function(t){e("qhVJ")},"data-v-6d820b77",null).exports},data:function(){return{isContainer:!0}},mounted:function(){var t=document.documentElement.clientWidth;document.querySelector("#view");t<768&&(this.isContainer=!1)}},y={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("NavBar"),this._v(" "),a("div",[a("div",[a("Alert")],1),this._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("router-view",{class:{container:this.isContainer},attrs:{id:"view",tag:"div"}})],1)],1)],1)},staticRenderFns:[]};var w=e("VU/8")(N,y,!1,function(t){e("i5He")},null,null).exports;e("+M7l");s.a.config.productionTip=!1,new s.a({el:"#app",router:b,components:{App:w},template:"<App/>"})},RI6Y:function(t,a){},VeqU:function(t,a){},ewGM:function(t,a){},i5He:function(t,a){},kcCz:function(t,a,e){t.exports=e.p+"static/img/carousel.7d714b8.jpg"},qhVJ:function(t,a){},tBk4:function(t,a,e){t.exports=e.p+"static/img/QQ.8659776.jpg"}},["NHnr"]);
//# sourceMappingURL=app.0f9c5bc7464fd78ea7a1.js.map