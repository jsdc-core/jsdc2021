(function(t){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1076ba1c"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4e5f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("footer-side")],1)},a=[],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._v(" © 2021 "),n("a",{attrs:{href:"http://jsdc.tw",target:"_blank"}},[t._v("JSDC.tw")]),t._v(" | 宅斯迪西股份有限公司 (JSDC Corp.) ")])}],c=(n("e35b"),n("2877")),s={},l=Object(c["a"])(s,u,i,!1,null,null,null),f=l.exports,p={components:{FooterSide:f}},d=p,b=(n("034f"),Object(c["a"])(d,o,a,!1,null,null,null)),v=b.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main-content")],1)},_=[],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("div",{staticClass:"landing_intro"},[r("img",{staticClass:"logo_banner",attrs:{src:n("bd34"),alt:"JSDC_2021"}}),r("div",{staticClass:"intro_content"},[t._v("JSDC 2021 開發者年會 10/23 將於線上舉行")]),r("div",{staticClass:"sub_content"},[t._v("敬請期待")])])])}],w=(n("acba"),{}),j=Object(c["a"])(w,g,y,!1,null,null,null),C=j.exports,O={name:"Landing",components:{MainContent:C}},x=O,S=Object(c["a"])(x,h,_,!1,null,null,null),E=S.exports;r["a"].use(m["a"]);var P=[{path:"/",name:"JSDC 2021",component:E},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],J=new m["a"]({mode:"history",base:"/dist/",routes:P}),$=J;n("f5df1");r["a"].config.productionTip=!1,new r["a"]({router:$,render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){},acba:function(t,e,n){"use strict";n("f8a6")},bd34:function(t,e,n){t.exports=n.p+"img/mainLogo.92f32d6a.png"},e35b:function(t,e,n){"use strict";n("4e5f")},f8a6:function(t,e,n){}});
//# sourceMappingURL=app.3e24ecc4.js.map