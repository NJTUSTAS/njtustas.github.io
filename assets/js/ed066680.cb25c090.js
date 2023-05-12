"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[1351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||c;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const c={title:"\u5b57\u7b26\u4e32"},l="\u5b57\u7b26\u4e32",o={unversionedId:"electronics/c-lang/chapter12",id:"electronics/c-lang/chapter12",title:"\u5b57\u7b26\u4e32",description:"1. \u5b57\u7b26\u4e32",source:"@site/docs/electronics/c-lang/chapter12.md",sourceDirName:"electronics/c-lang",slug:"/electronics/c-lang/chapter12",permalink:"/docs/electronics/c-lang/chapter12",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5b57\u7b26\u4e32"},sidebar:"docs",previous:{title:"\u591a\u7ef4\u6570\u7ec4",permalink:"/docs/electronics/c-lang/chapter11"},next:{title:"\u6307\u9488",permalink:"/docs/electronics/c-lang/chapter13"}},i={},p=[{value:"1. \u5b57\u7b26\u4e32",id:"1-\u5b57\u7b26\u4e32",level:2},{value:"2. \u5c0f\u6d4b\u8bd5",id:"2-\u5c0f\u6d4b\u8bd5",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...c}=e;return(0,a.kt)(u,(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,a.kt)("h2",{id:"1-\u5b57\u7b26\u4e32"},"1. \u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u5728 C \u8bed\u8a00\u4e2d\uff0c\u5b57\u7b26\u4e32\u5b9e\u9645\u4e0a\u662f\u4f7f\u7528\u7a7a\u5b57\u7b26 \\0 \u7ed3\u5c3e\u7684\u4e00\u7ef4\u5b57\u7b26\u6570\u7ec4\u3002\u56e0\u6b64\uff0c\\0 \u662f\u7528\u4e8e\u6807\u8bb0\u5b57\u7b26\u4e32\u7684\u7ed3\u675f\u3002"),(0,a.kt)("p",null,"\u7a7a\u5b57\u7b26\uff08Null character\uff09\u53c8\u79f0\u7ed3\u675f\u7b26\uff0c\u7f29\u5199 NUL\uff0c\u662f\u4e00\u4e2a\u6570\u503c\u4e3a 0 \u7684\u63a7\u5236\u5b57\u7b26\uff0c\\0 \u662f\u8f6c\u4e49\u5b57\u7b26\uff0c\u610f\u601d\u662f\u544a\u8bc9\u7f16\u8bd1\u5668\uff0c\u8fd9\u4e0d\u662f\u5b57\u7b26 0\uff0c\u800c\u662f\u7a7a\u5b57\u7b26\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u58f0\u660e\u548c\u521d\u59cb\u5316\u521b\u5efa\u4e86\u4e00\u4e2a RUNOOB \u5b57\u7b26\u4e32\u3002\u7531\u4e8e\u5728\u6570\u7ec4\u7684\u672b\u5c3e\u5b58\u50a8\u4e86\u7a7a\u5b57\u7b26 \\0\uff0c\u6240\u4ee5\u5b57\u7b26\u6570\u7ec4\u7684\u5927\u5c0f\u6bd4\u5355\u8bcd RUNOOB \u7684\u5b57\u7b26\u6570\u591a\u4e00\u4e2a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"char site[7] = {'R', 'U', 'N', 'O', 'O', 'B', '\\0'};\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u521d\u59cb\u5316\u4e5f\u53ef\u4ee5\u5199\u6210\u5982\u4e0b\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char site[] = "RUNOOB";\n')),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f C/C++ \u4e2d\u5b9a\u4e49\u7684\u5b57\u7b26\u4e32\u7684\u5185\u5b58\u8868\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9563).Z,width:"1000",height:"403"})),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528\u5b57\u7b26\u4e32\u8f93\u51fa\u4ece\u7ec8\u7aef\u8f93\u5165\u7684\u5185\u5bb9\u7684\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nint main() {\n    char string[50];\n    puts("Input a string without space:");\n    scanf("%s", string);\n    puts(string);\n    return 0;\n}\n')),(0,a.kt)("h2",{id:"2-\u5c0f\u6d4b\u8bd5"},"2. \u5c0f\u6d4b\u8bd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8f93\u51fa\u4e00\u6bb5\u5b57\u7b26\u4e32\uff0c\u5c06\u5176\u4e2d\u5b57\u6bcd\u5168\u90e8\u5927\u5199\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8f93\u5165\u4e00\u6bb5\u4efb\u610f\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\uff0c\u901a\u8fc7\u6392\u5e8f\u5c06\u5176\u6309\u7167 A-Z\uff0ca-z \u91cd\u65b0\u6392\u5e8f\u3002"))))}f.isMDXComponent=!0},9563:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/12-1-c1f7d0aac6ef1eb718427e1f40aed994.png"}}]);