"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[2668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const c={title:"\u5e76\u884c\u901a\u4fe1\u539f\u7406"},l="\u5e76\u884c\u901a\u4fe1\u539f\u7406",i={unversionedId:"electronics/communication/parallel/chapter1",id:"electronics/communication/parallel/chapter1",title:"\u5e76\u884c\u901a\u4fe1\u539f\u7406",description:"1. \u5e76\u884c\u901a\u4fe1\u673a\u5236",source:"@site/docs/electronics/communication/parallel/chapter1.md",sourceDirName:"electronics/communication/parallel",slug:"/electronics/communication/parallel/chapter1",permalink:"/docs/electronics/communication/parallel/chapter1",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5e76\u884c\u901a\u4fe1\u539f\u7406"},sidebar:"docs",previous:{title:"\u5e76\u884c\u901a\u4fe1\u7b80\u4ecb",permalink:"/docs/electronics/communication/parallel"},next:{title:"LCD1602\u6570\u636e\u624b\u518c\u901f\u89c8",permalink:"/docs/electronics/communication/parallel/chapter2"}},o={},p=[{value:"1. \u5e76\u884c\u901a\u4fe1\u673a\u5236",id:"1-\u5e76\u884c\u901a\u4fe1\u673a\u5236",level:2},{value:"2. \u9002\u7528\u4e8e\u54ea\u4e9b\u8bbe\u5907",id:"2-\u9002\u7528\u4e8e\u54ea\u4e9b\u8bbe\u5907",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...c}=e;return(0,a.kt)(m,(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e76\u884c\u901a\u4fe1\u539f\u7406"},"\u5e76\u884c\u901a\u4fe1\u539f\u7406"),(0,a.kt)("h2",{id:"1-\u5e76\u884c\u901a\u4fe1\u673a\u5236"},"1. \u5e76\u884c\u901a\u4fe1\u673a\u5236"),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u5e76\u884c\u901a\u4fe1\u7684\u673a\u5236\u548c\u4e32\u884c\u901a\u4fe1\u975e\u5e38\u76f8\u4f3c\uff0c\u5c24\u5176\u662f\u548c SPI \u901a\u4fe1\u76f8\u4f3c\u3002\u6709\u4e9b SPI \u901a\u4fe1\u7684\u8bbe\u5907\u4e5f\u652f\u6301\u5e76\u884c\u901a\u4fe1\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u63d0\u9ad8\u6570\u636e\u4f20\u8f93\u7684\u901f\u5ea6\u3002\u6bd4\u5982\uff0cTFT \u663e\u793a\u5c4f\uff0c\u652f\u6301 SPI \u4e5f\u652f\u6301\u5e76\u884c\u901a\u4fe1\uff0cOLED \u652f\u6301 I2C\uff0cSPI \u548c\u5e76\u884c\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f ST7735 \u7684",(0,a.kt)("strong",{parentName:"p"},"SPI \u901a\u4fe1"),"\u65f6\u57df\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ST7735\u7684SPI\u901a\u4fe1\u65f6\u57df\u56fe",src:r(474).Z,width:"1000",height:"434"})),(0,a.kt)("p",null,"\u4e0b\u9762\u662f ST7735 \u7684",(0,a.kt)("strong",{parentName:"p"},"\u5e76\u884c\u901a\u4fe1"),"\u65f6\u57df\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ST7735\u7684\u5e76\u884c\u901a\u4fe1\u65f6\u57df\u56fe",src:r(6215).Z,width:"1000",height:"813"})),(0,a.kt)("p",null,"\u7531\u4e8e\u5e76\u884c\u901a\u4fe1\u6ca1\u6709\u7edf\u4e00\u7684\u6807\u51c6\uff0c\u5173\u952e\u8fd8\u662f\u9700\u8981\u9605\u8bfb\u6570\u636e\u624b\u518c\u3002\u6211\u4eec\u540e\u9762\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\u3002"),(0,a.kt)("h2",{id:"2-\u9002\u7528\u4e8e\u54ea\u4e9b\u8bbe\u5907"},"2. \u9002\u7528\u4e8e\u54ea\u4e9b\u8bbe\u5907"),(0,a.kt)("p",null,"\u5e38\u89c1\u7684\u4f7f\u7528\u5e76\u884c\u901a\u4fe1\u7684\u8bbe\u5907\u6709\u4ee5\u4e0b\u51e0\u4e2a\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"LCD1602"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TFT Display"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u7535\u8111\u663e\u793a\u5c4f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"LCD1602",src:r(4180).Z,width:"1000",height:"473"})),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"TFT Display",src:r(9513).Z,width:"1000",height:"652"})),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"\u7535\u8111\u663e\u793a\u5c4f",src:r(9917).Z,width:"1000",height:"665"}))))),(0,a.kt)("p",null,"\u540e\u9762\u6211\u4eec\u5c06\u5177\u4f53\u5b66\u4e60\u5982\u4f55\u901a\u8fc7\u5e76\u884c\u901a\u4fe1\u9a71\u52a8 LCD1602 \u663e\u793a\u5c4f\u3002"))}u.isMDXComponent=!0},474:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-1-b62eeb6b09788b542d6ed0725c5a974d.png"},6215:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-2-7a84ec3499887fe64236e9400b2bf82f.png"},4180:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-3-68de3a52523323b45fb6c219fe65f8c6.png"},9513:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-4-fc948303e997ccc088d8a4191edb9e09.png"},9917:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-5-74524b846ab637216af722eabdce66b4.png"}}]);