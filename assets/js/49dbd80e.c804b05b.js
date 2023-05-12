"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[5474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,m=u["".concat(c,".").concat(g)]||u[g]||f[g]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={title:"Git\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e"},a="Git \u7684\u5b89\u88c5\u4e0e\u914d\u7f6e",l={unversionedId:"electronics/tutorial/git/chapter2",id:"electronics/tutorial/git/chapter2",title:"Git\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e",description:"1. Git \u7684\u5b89\u88c5",source:"@site/docs/electronics/tutorial/git/chapter2.md",sourceDirName:"electronics/tutorial/git",slug:"/electronics/tutorial/git/chapter2",permalink:"/docs/electronics/tutorial/git/chapter2",draft:!1,tags:[],version:"current",frontMatter:{title:"Git\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e"},sidebar:"docs",previous:{title:"\u96c6\u4e2d\u5f0fVS\u5206\u5e03\u5f0f",permalink:"/docs/electronics/tutorial/git/chapter1"},next:{title:"Git\u7684\u5e38\u7528\u547d\u4ee4",permalink:"/docs/electronics/tutorial/git/chapter3"}},c={},p=[{value:"1. Git \u7684\u5b89\u88c5",id:"1-git-\u7684\u5b89\u88c5",level:2},{value:"2. Git \u7684\u914d\u7f6e",id:"2-git-\u7684\u914d\u7f6e",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e"},"Git \u7684\u5b89\u88c5\u4e0e\u914d\u7f6e"),(0,i.kt)("h2",{id:"1-git-\u7684\u5b89\u88c5"},"1. Git \u7684\u5b89\u88c5"),(0,i.kt)("p",null,"\u6253\u5f00 git \u5b98\u7f51\u4e0b\u8f7d git \u5bf9\u5e94\u64cd\u4f5c\u7cfb\u7edf\u7684\u7248\u672c\u3002\u5982\u679c\u5b98\u7f51\u4e0b\u8f7d\u592a\u6162\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf\u4e0b\u8f7d\uff1a",(0,i.kt)("a",{parentName:"p",href:"http://npm.taobao.org/mirrors/git-for-windows/"},"\u94fe\u63a5"),"\u627e\u5230\u6700\u65b0\u7248\u672c\u7684 Git \u70b9\u51fb\u4e0b\u8f7d\u3002"),(0,i.kt)("h2",{id:"2-git-\u7684\u914d\u7f6e"},"2. Git \u7684\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u7528\u6237\u540d\u4e0e\u90ae\u7bb1"),"\uff08\u7528\u6237\u6807\u8bc6\uff0c\u5fc5\u8981\uff09"),(0,i.kt)("p",null,"\u5f53\u4f60\u5b89\u88c5 Git \u540e\u9996\u5148\u8981\u505a\u7684\u4e8b\u60c5\u662f\u8bbe\u7f6e\u4f60\u7684\u7528\u6237\u540d\u79f0\u548c e-mail \u5730\u5740\u3002\u8fd9\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u6bcf\u6b21 Git \u63d0\u4ea4\u90fd\u4f1a\u4f7f\u7528\u8be5\u4fe1\u606f\u3002\u5b83\u88ab\u6c38\u8fdc\u7684\u5d4c\u5165\u5230\u4e86\u4f60\u7684\u63d0\u4ea4\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.name "*****"           #\u540d\u79f0\ngit config --global user.email ******@***.com   #\u90ae\u7bb1\n')),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u67e5\u770b\u662f\u5426\u8bbe\u7f6e\u5b8c\u6210"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global --list\n")))}f.isMDXComponent=!0}}]);