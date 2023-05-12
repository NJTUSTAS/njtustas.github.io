"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[3664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u7ed3\u6784\u4f53(struct)"},i="\u7ed3\u6784\u4f53(struct)",c={unversionedId:"electronics/c-lang/chapter17",id:"electronics/c-lang/chapter17",title:"\u7ed3\u6784\u4f53(struct)",description:"1. \u7ed3\u6784\u4f53",source:"@site/docs/electronics/c-lang/chapter17.md",sourceDirName:"electronics/c-lang",slug:"/electronics/c-lang/chapter17",permalink:"/docs/electronics/c-lang/chapter17",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7ed3\u6784\u4f53(struct)"},sidebar:"docs",previous:{title:"\u679a\u4e3e(enum)",permalink:"/docs/electronics/c-lang/chapter16"},next:{title:"\u5171\u7528\u4f53(union)",permalink:"/docs/electronics/c-lang/chapter18"}},o={},u=[{value:"1. \u7ed3\u6784\u4f53",id:"1-\u7ed3\u6784\u4f53",level:2},{value:"2. \u5b9a\u4e49\u7ed3\u6784\u4f53",id:"2-\u5b9a\u4e49\u7ed3\u6784\u4f53",level:2},{value:"3. \u7ed3\u6784\u4f53\u53d8\u91cf\u7684\u521d\u59cb\u5316",id:"3-\u7ed3\u6784\u4f53\u53d8\u91cf\u7684\u521d\u59cb\u5316",level:2},{value:"4. \u7ed3\u6784\u4f53\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570",id:"4-\u7ed3\u6784\u4f53\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ed3\u6784\u4f53struct"},"\u7ed3\u6784\u4f53(struct)"),(0,a.kt)("h2",{id:"1-\u7ed3\u6784\u4f53"},"1. \u7ed3\u6784\u4f53"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u6784"),"\u662f C \u7f16\u7a0b\u4e2d\u53e6\u4e00\u79cd\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u53ef\u7528\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u5141\u8bb8\u5b58\u50a8\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u9879\u3002"),(0,a.kt)("p",null,"\u5047\u5982\u6211\u4eec\u8981\u5b9a\u4e49\u4e00\u4e2a\u6709\u5173\u65e5\u671f\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u53ef\u80fd\u4f1a\u7528\u5230\u4ee5\u4e0b\u51e0\u4e2a\u6570\u636e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"year")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"month")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"date")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hour")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minute")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"second"))),(0,a.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u8be5\u5982\u4f55\u5b9a\u4e49\u8fd9\u6837\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\u5462\u3002"),(0,a.kt)("h2",{id:"2-\u5b9a\u4e49\u7ed3\u6784\u4f53"},"2. \u5b9a\u4e49\u7ed3\u6784\u4f53"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b9a\u4e49\u7ed3\u6784\uff0c\u60a8\u5fc5\u987b\u4f7f\u7528 struct \u8bed\u53e5\u3002struct \u8bed\u53e5\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u6210\u5458\u7684\u65b0\u7684\u6570\u636e\u7c7b\u578b\uff0cstruct \u8bed\u53e5\u7684\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct tag\n{\n    member-list\n    member-list\n    member-list\n    ...\n} variable-list;\n")),(0,a.kt)("p",null,"tag \u662f\u7ed3\u6784\u4f53\u6807\u7b7e\u3002"),(0,a.kt)("p",null,"member-list \u662f\u6807\u51c6\u7684\u53d8\u91cf\u5b9a\u4e49\uff0c\u6bd4\u5982 int i; \u6216\u8005 float f\uff0c\u6216\u8005\u5176\u4ed6\u6709\u6548\u7684\u53d8\u91cf\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"variable-list \u7ed3\u6784\u53d8\u91cf\uff0c\u5b9a\u4e49\u5728\u7ed3\u6784\u7684\u672b\u5c3e\uff0c\u6700\u540e\u4e00\u4e2a\u5206\u53f7\u4e4b\u524d\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u7ed3\u6784\u53d8\u91cf\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u58f0\u660e Time \u7ed3\u6784\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct Time\n{\n    int year;\n    int month;\n    int date;\n    int hour;\n    int minute;\n    int second;\n} now;\n")),(0,a.kt)("p",null,"\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\uff0ctag\u3001member-list\u3001variable-list \u8fd9 3 \u90e8\u5206\u81f3\u5c11\u8981\u51fa\u73b0 2 \u4e2a\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e09\u4e2a\u5b9a\u4e49\u7ed3\u6784\u7684\u5b9e\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"//\u6b64\u58f0\u660e\u58f0\u660e\u4e86\u62e5\u67093\u4e2a\u6210\u5458\u7684\u7ed3\u6784\u4f53\uff0c\u5206\u522b\u4e3a\u6574\u578b\u7684a\uff0c\u5b57\u7b26\u578b\u7684b\u548c\u53cc\u7cbe\u5ea6\u7684c\n//\u540c\u65f6\u53c8\u58f0\u660e\u4e86\u7ed3\u6784\u4f53\u53d8\u91cfs1\n//\u8fd9\u4e2a\u7ed3\u6784\u4f53\u5e76\u6ca1\u6709\u6807\u660e\u5176\u6807\u7b7e\nstruct\n{\n    int a;\n    char b;\n    double c;\n} s1;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"//\u6b64\u58f0\u660e\u58f0\u660e\u4e86\u62e5\u67093\u4e2a\u6210\u5458\u7684\u7ed3\u6784\u4f53\uff0c\u5206\u522b\u4e3a\u6574\u578b\u7684a\uff0c\u5b57\u7b26\u578b\u7684b\u548c\u53cc\u7cbe\u5ea6\u7684c\n//\u7ed3\u6784\u4f53\u7684\u6807\u7b7e\u88ab\u547d\u540d\u4e3aSIMPLE,\u6ca1\u6709\u58f0\u660e\u53d8\u91cf\nstruct SIMPLE\n{\n    int a;\n    char b;\n    double c;\n};\n//\u7528SIMPLE\u6807\u7b7e\u7684\u7ed3\u6784\u4f53\uff0c\u53e6\u5916\u58f0\u660e\u4e86\u53d8\u91cft1\u3001t2\u3001t3\nstruct SIMPLE t1, t2[20], *t3;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"//\u4e5f\u53ef\u4ee5\u7528typedef\u521b\u5efa\u65b0\u7c7b\u578b\ntypedef struct\n{\n   int a;\n   char b;\n   double c;\n} Simple2;\n//\u73b0\u5728\u53ef\u4ee5\u7528Simple2\u4f5c\u4e3a\u7c7b\u578b\u58f0\u660e\u65b0\u7684\u7ed3\u6784\u4f53\u53d8\u91cf\nSimple2 u1, u2[20], *u3;\n")),(0,a.kt)("h2",{id:"3-\u7ed3\u6784\u4f53\u53d8\u91cf\u7684\u521d\u59cb\u5316"},"3. \u7ed3\u6784\u4f53\u53d8\u91cf\u7684\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u548c\u5176\u5b83\u7c7b\u578b\u53d8\u91cf\u4e00\u6837\uff0c\u5bf9\u7ed3\u6784\u4f53\u53d8\u91cf\u53ef\u4ee5\u5728\u5b9a\u4e49\u65f6\u6307\u5b9a\u521d\u59cb\u503c\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u521d\u59cb\u5316\u7ed3\u6784\u4f53\u7684\u5b9e\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nstruct Time {\n    int year;\n    int month;\n    int date;\n    int hour;\n    int minute;\n    int second;\n} now = {2022, 2, 5, 12, 30, 0};\n\nint main() {\n    printf("%d-%d-%d %d:%d:%d\\n", now.year, now.month, now.date, now.hour,\n           now.minute, now.second);\n    return 0;\n}\n')),(0,a.kt)("h2",{id:"4-\u7ed3\u6784\u4f53\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570"},"4. \u7ed3\u6784\u4f53\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\u7684\u5b9e\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nstruct Time {\n    int year;\n    int month;\n    int date;\n    int hour;\n    int minute;\n    int second;\n} now = {2022, 2, 5, 12, 30, 0};\n\nvoid getTime(struct Time time) {\n    printf("%d-%d-%d %d:%d:%d\\n", time.year, time.month, time.date, time.hour,\n           time.minute, time.second);\n}\n\nint main() {\n    getTime(now);\n    return 0;\n}\n')),(0,a.kt)("p",null,"\u603b\u4e4b\uff0c\u7ed3\u6784\u4f53\u4f5c\u4e3a\u4e00\u79cd\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\u540c\u5176\u4ed6\u6570\u636e\u7c7b\u578b\u4e00\u6837\uff0c\u5177\u6709\u540c\u7b49\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528\u6307\u9488\uff0c\u53ef\u4ee5\u521b\u5efa\u6570\u7ec4\u7b49\u7b49\uff0c\u8fd9\u91cc\u4ec5\u4f5c\u7b80\u5355\u4ecb\u7ecd\uff0c\u66f4\u591a\u5185\u5bb9\u53ef\u81ea\u884c\u5b66\u4e60\u3002"))}m.isMDXComponent=!0}}]);