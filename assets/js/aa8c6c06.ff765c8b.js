"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[5201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"UART\u7b80\u4ecb",slug:"/electronics/communication/serial/uart"},a="UART \u7b80\u4ecb",c={unversionedId:"electronics/communication/serial/uart/intro",id:"electronics/communication/serial/uart/intro",title:"UART\u7b80\u4ecb",description:"1. \u4ec0\u4e48\u662f UART \u901a\u4fe1",source:"@site/docs/electronics/communication/serial/uart/intro.md",sourceDirName:"electronics/communication/serial/uart",slug:"/electronics/communication/serial/uart",permalink:"/docs/electronics/communication/serial/uart",draft:!1,tags:[],version:"current",frontMatter:{title:"UART\u7b80\u4ecb",slug:"/electronics/communication/serial/uart"},sidebar:"docs",previous:{title:"\u603b\u7ed3\u548c\u62d3\u5c55",permalink:"/docs/electronics/communication/serial/one-wire/chapter5"},next:{title:"UART\u901a\u4fe1\u539f\u7406",permalink:"/docs/electronics/communication/serial/uart/chapter1"}},l={},s=[{value:"1. \u4ec0\u4e48\u662f UART \u901a\u4fe1",id:"1-\u4ec0\u4e48\u662f-uart-\u901a\u4fe1",level:2},{value:"2. \u4e32\u53e3\u901a\u4fe1\u7684\u5916\u8bbe",id:"2-\u4e32\u53e3\u901a\u4fe1\u7684\u5916\u8bbe",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uart-\u7b80\u4ecb"},"UART \u7b80\u4ecb"),(0,o.kt)("h2",{id:"1-\u4ec0\u4e48\u662f-uart-\u901a\u4fe1"},"1. \u4ec0\u4e48\u662f UART \u901a\u4fe1"),(0,o.kt)("p",null,"UART(Universal Asynchronous Receiver/Transmitter)\u6307\u7684\u662f",(0,o.kt)("strong",{parentName:"p"},"\u901a\u7528\u5f02\u6b65\u6536\u53d1\u5668"),"\u3002"),(0,o.kt)("p",null,"\u4e32\u53e3\u901a\u4fe1\u662f\u5355\u7247\u673a\u6700\u4e3a\u5e38\u7528\u7684\u4e00\u79cd\u901a\u4fe1\u65b9\u5f0f\uff0c\u901a\u5e38\u7528\u4e8e\u5355\u7247\u673a\u548c\u5355\u7247\u673a\uff0c\u5355\u7247\u673a\u548c\u7535\u8111\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u5728\u4e32\u53e3\u901a\u4fe1\u4e2d\uff0c\u6570\u636e\u662f\u4f7f\u7528\u5355\u7ebf\u9010\u4f4d\u4f20\u8f93\u7684\u3002\u5728\u53cc\u5411\u901a\u4fe1\u4e2d\uff0c\u53ea\u9700\u8981\u4e24\u6761\u7ebf\u5c31\u53ef\u4ee5\u4f20\u8f93\u6570\u636e\u3002\u6839\u636e\u5e94\u7528\u548c\u7cfb\u7edf\u8981\u6c42\uff0c\u4e32\u53e3\u901a\u4fe1\u9700\u8981\u7684\u7535\u8def\u548c\u63a5\u7ebf\u66f4\u5c11\uff0c\u4ece\u800c\u6210\u4e3a\u6210\u672c\u4f4e\u5ec9\uff0c\u5e94\u7528\u5e7f\u6cdb\u7684\u4e00\u79cd\u901a\u4fe1\u65b9\u5f0f\u3002"),(0,o.kt)("h2",{id:"2-\u4e32\u53e3\u901a\u4fe1\u7684\u5916\u8bbe"},"2. \u4e32\u53e3\u901a\u4fe1\u7684\u5916\u8bbe"),(0,o.kt)("p",null,"\u5728\u5355\u7247\u673a\u548c\u5355\u7247\u673a\u4e4b\u95f4\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fde\u63a5 RT-TX\uff0cTX-RX \u7684\u65b9\u5f0f\u76f4\u63a5\u8fdb\u884c\u901a\u4fe1\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u5178\u578b\u7684\u63a5\u7ebf\u793a\u610f\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UART\u63a5\u7ebf\u793a\u610f\u56fe",src:r(7399).Z,width:"1000",height:"698"})),(0,o.kt)("p",null,"\u800c\u7535\u8111\u548c\u5355\u7247\u673a\u4e4b\u95f4\u7684\u901a\u4fe1\u5c31\u9700\u8981\u53e6\u5916\u7684\u5916\u8bbe\u3002\u56e0\u4e3a\u73b0\u5728\u5927\u90e8\u5206\u7684\u7535\u8111\u4ee5\u4e0d\u518d\u4f7f\u7528\u7b28\u91cd\u7684 9 \u9488\u4e32\u884c\u63a5\u53e3\uff0c\u66f4\u591a\u7684\u662f\u4f7f\u7528 USB \u865a\u62df\u4e32\u53e3\uff0c\u56e0\u6b64\u5355\u7247\u673a\u548c\u7535\u8111\u901a\u4fe1\u90fd\u9700\u8981\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"USB \u8f6c\u4e32\u53e3\u82af\u7247"),"\uff0c\u901a\u5e38\u5728\u5355\u7247\u673a\u5f00\u53d1\u677f\u4e0a\u90fd\u662f\u505a\u597d\u8fd9\u6837\u7684\u5916\u8bbe\u7684\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5178\u578b\u7684 CH340C \u539f\u7406\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CH340C",src:r(3025).Z,width:"1000",height:"510"})))}m.isMDXComponent=!0},7399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/0-1-9379d4ef4e424978313ff4a232d5f4d2.png"},3025:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/0-2-345e85d56bf2dad828d9313ddec9dafd.png"}}]);