"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[1499],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),o=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return r.createElement(c.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=o(n),g=a,u=m["".concat(c,".").concat(g)]||m[g]||k[g]||l;return n?r.createElement(u,i(i({ref:e},d),{},{components:n})):r.createElement(u,i({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[m]="string"==typeof t?t:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8871:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u6570\u636e\u7c7b\u578b"},i="\u6570\u636e\u7c7b\u578b",p={unversionedId:"electronics/c-lang/chapter2",id:"electronics/c-lang/chapter2",title:"\u6570\u636e\u7c7b\u578b",description:"1. \u4ec0\u4e48\u662f\u6570\u636e\u7c7b\u578b",source:"@site/docs/electronics/c-lang/chapter2.md",sourceDirName:"electronics/c-lang",slug:"/electronics/c-lang/chapter2",permalink:"/docs/electronics/c-lang/chapter2",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u7c7b\u578b"},sidebar:"docs",previous:{title:"C\u8bed\u8a00\u57fa\u672c\u8bed\u6cd5",permalink:"/docs/electronics/c-lang/chapter1"},next:{title:"\u53d8\u91cf\u548c\u5e38\u91cf",permalink:"/docs/electronics/c-lang/chapter3"}},c={},o=[{value:"1. \u4ec0\u4e48\u662f\u6570\u636e\u7c7b\u578b",id:"1-\u4ec0\u4e48\u662f\u6570\u636e\u7c7b\u578b",level:2},{value:"2. \u6574\u6570\u7c7b\u578b",id:"2-\u6574\u6570\u7c7b\u578b",level:2},{value:"3. \u6d6e\u70b9\u7c7b\u578b",id:"3-\u6d6e\u70b9\u7c7b\u578b",level:2},{value:"4. \u5176\u4ed6\u7c7b\u578b",id:"4-\u5176\u4ed6\u7c7b\u578b",level:2},{value:"5. typedef",id:"5-typedef",level:2}],d={toc:o},m="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("h2",{id:"1-\u4ec0\u4e48\u662f\u6570\u636e\u7c7b\u578b"},"1. \u4ec0\u4e48\u662f\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,"C \u8bed\u8a00\u7684\u6570\u636e\u7c7b\u578b\u6307\u7684\u662f\u67d0\u4e2a\u6570\u636e\u5143\u7d20\u5728\u7f16\u8bd1\u5668\u4e2d\u6240\u5360\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u6211\u4eec\u8981\u7528\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u6765\u8868\u793a\u4e0d\u540c\u7684\u6570\u636e\uff0c\u6570\u636e\u7c7b\u578b\u5c31\u662f\u5b9a\u4e49\u6570\u636e\u7684\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u7c7b\u578b\u4e3b\u8981\u5206\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u6574\u578b"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6d6e\u70b9\u578b"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5176\u4ed6"),"\u3002"),(0,a.kt)("p",null,"\u5e38\u7528\u7684\u6570\u636e\u7c7b\u578b\u6709\uff1a\nint\uff0cunsigned int\uff0cshort\uff0cunsigned short\uff0clong\uff0cunsigned long\uff0cchar\uff0cunsigned char\uff0cflaot\uff0cdouble\uff0clong double\uff0cvoid\uff0c\u5176\u4ed6\u3002"),(0,a.kt)("h2",{id:"2-\u6574\u6570\u7c7b\u578b"},"2. \u6574\u6570\u7c7b\u578b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u6570"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5927\u5c0f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"char"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-127-128 \u6216 0-255")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"unsigned char"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0-255")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-32768-32767")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0-65535")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"short"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-32768-32767")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"unsigned short"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0-65535")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"long"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-2147483648 ~ 2147483647")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"unsigned long"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0-4294967295")))),(0,a.kt)("h2",{id:"3-\u6d6e\u70b9\u7c7b\u578b"},"3. \u6d6e\u70b9\u7c7b\u578b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u6570"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u7cbe\u5ea6"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"float"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"6 \u4f4d\u6709\u6548")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"double"),(0,a.kt)("td",{parentName:"tr",align:"center"},"8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"15 \u4f4d\u6709\u6548")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"long double"),(0,a.kt)("td",{parentName:"tr",align:"center"},"16"),(0,a.kt)("td",{parentName:"tr",align:"center"},"19 \u4f4d\u6709\u6548")))),(0,a.kt)("h2",{id:"4-\u5176\u4ed6\u7c7b\u578b"},"4. \u5176\u4ed6\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"void \u7c7b\u578b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6307\u9488\u7c7b\u578b(","*",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6570\u7ec4\u7c7b\u578b([])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7ed3\u6784\u7c7b\u578b(struct)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5171\u7528\u4f53\u7c7b(union)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u51fd\u6570\u7c7b\u578b"))),(0,a.kt)("h2",{id:"5-typedef"},"5. typedef"),(0,a.kt)("p",null,"\u4f7f\u7528 typedef \u91cd\u65b0\u5b9a\u4e49\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\u7684\u540d\u79f0\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"typedef int BOOL;\n#define TRUE 1\n#define FALSE 0\nBOOL isDisplay = TRUE;\n")))}k.isMDXComponent=!0}}]);