"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[3775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const c={title:"DHT11\u6570\u636e\u624b\u518c\u901f\u89c8"},i="DHT11 \u6570\u636e\u624b\u518c\u901f\u89c8",l={unversionedId:"electronics/communication/serial/one-wire/chapter2",id:"electronics/communication/serial/one-wire/chapter2",title:"DHT11\u6570\u636e\u624b\u518c\u901f\u89c8",description:"1. DHT11 \u7684\u57fa\u672c\u53c2\u6570",source:"@site/docs/electronics/communication/serial/one-wire/chapter2.md",sourceDirName:"electronics/communication/serial/one-wire",slug:"/electronics/communication/serial/one-wire/chapter2",permalink:"/docs/electronics/communication/serial/one-wire/chapter2",draft:!1,tags:[],version:"current",frontMatter:{title:"DHT11\u6570\u636e\u624b\u518c\u901f\u89c8"},sidebar:"docs",previous:{title:"One-Wire\u901a\u4fe1\u539f\u7406",permalink:"/docs/electronics/communication/serial/one-wire/chapter1"},next:{title:"\u4ee3\u7801\u903b\u8f91\u5206\u6790",permalink:"/docs/electronics/communication/serial/one-wire/chapter3"}},o={},p=[{value:"1. DHT11 \u7684\u57fa\u672c\u53c2\u6570",id:"1-dht11-\u7684\u57fa\u672c\u53c2\u6570",level:2},{value:"2. DHT11 \u5f15\u811a\u63a5\u7ebf\u56fe",id:"2-dht11-\u5f15\u811a\u63a5\u7ebf\u56fe",level:2},{value:"3. DHT11 \u901a\u4fe1\u4e2d\u7684\u20180\u2019\u548c\u20181\u2019",id:"3-dht11-\u901a\u4fe1\u4e2d\u76840\u548c1",level:2},{value:"4. DHT11 \u8fd4\u56de\u7684\u6570\u636e\u5305",id:"4-dht11-\u8fd4\u56de\u7684\u6570\u636e\u5305",level:2},{value:"5. DHT11 \u548c MCU \u7684\u901a\u4fe1\u8fc7\u7a0b",id:"5-dht11-\u548c-mcu-\u7684\u901a\u4fe1\u8fc7\u7a0b",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...c}=e;return(0,a.kt)(u,(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dht11-\u6570\u636e\u624b\u518c\u901f\u89c8"},"DHT11 \u6570\u636e\u624b\u518c\u901f\u89c8"),(0,a.kt)("h2",{id:"1-dht11-\u7684\u57fa\u672c\u53c2\u6570"},"1. DHT11 \u7684\u57fa\u672c\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u4f9b\u7535\u7535\u538b"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3.3V-5.5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u901a\u4fe1\u65b9\u5f0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5355\u603b\u7ebf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6e7f\u5ea6\u8303\u56f4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20-90%\xb15%RH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6e29\u5ea6\u8303\u56f4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0-50\xb12\xb0C")))),(0,a.kt)("h2",{id:"2-dht11-\u5f15\u811a\u63a5\u7ebf\u56fe"},"2. DHT11 \u5f15\u811a\u63a5\u7ebf\u56fe"),(0,a.kt)("p",null,"DHT11 \u6709\u56db\u4e2a\u5f15\u811a\uff0c\u5176\u4e2d\u4e00\u53f7\u5f15\u811a\u662f\u7535\u6e90\u63a5\u53e3\uff083.3-5.5V\uff09\uff1b\u4e8c\u53f7\u5f15\u811a\u662f\u6570\u636e\u8f93\u5165\u8f93\u51fa\u63a5\u53e3\uff0c\u6570\u636e\u624b\u518c\u4e2d\u5efa\u8bae\u52a0\u4e00\u4e2a\u4e0a\u62c9\u7535\u963b\uff1b\u4e09\u53f7\u5f15\u811a\u60ac\u7a7a\u4e0d\u63a5\uff1b\u56db\u53f7\u5f15\u811a\u63a5\u5730\u3002\n",(0,a.kt)("img",{alt:"\u63a5\u7ebf\u56fe",src:r(209).Z,width:"1000",height:"770"})),(0,a.kt)("h2",{id:"3-dht11-\u901a\u4fe1\u4e2d\u76840\u548c1"},"3. DHT11 \u901a\u4fe1\u4e2d\u7684\u20180\u2019\u548c\u20181\u2019"),(0,a.kt)("p",null,"\u6839\u636e\u6570\u636e\u624b\u518c\u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u53ef\u4ee5\u603b\u7ed3\u51fa DHT11 \u53d1\u9001\u20180\u2019\u548c\u20181\u2019\u7684\u89c4\u5f8b\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"50us \u4f4e\u7535\u5e73 + 26-28us \u7684\u9ad8\u7535\u5e73 = \u20180\u2019")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"50us \u7684\u4f4e\u7535\u5e73 + 70us \u7684\u9ad8\u7535\u5e73 = \u20181\u2019")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6570\u636e\u20180\u2019\u548c\u20191\u2018",src:r(1981).Z,width:"1000",height:"728"})),(0,a.kt)("h2",{id:"4-dht11-\u8fd4\u56de\u7684\u6570\u636e\u5305"},"4. DHT11 \u8fd4\u56de\u7684\u6570\u636e\u5305"),(0,a.kt)("p",null,"DHT11 \u8fd4\u56de\u7684\u6570\u636e\u5305\u5171\u6709 5 \u4e2a\u5b57\u8282\uff0c\u5373 40 \u4f4d\u7684\u6570\u636e\uff0c\u5176\u4e2d\u5305\u62ec 16 \u4f4d\u7684\u6e7f\u5ea6\u4fe1\u606f\uff0c16 \u4f4d\u7684\u6e29\u5ea6\u4fe1\u606f\u4ee5\u53ca 8 \u4f4d\u7684\u6821\u9a8c\u548c\u4fe1\u606f\u3002\u5176\u4e2d\u6e7f\u5ea6\u548c\u6e29\u5ea6\u7684\u7b2c\u4e00\u4e2a\u5b57\u8282\u662f\u6574\u6570\u4f4d\uff0c\u7b2c\u4e8c\u4e2a\u5b57\u8282\u662f\u5c0f\u6570\u4f4d\uff0c\u6bcf\u4e2a\u5b57\u8282\u90fd\u662f\u9ad8\u4f4d\u5728\u524d\uff0c\u4f4e\u4f4d\u5728\u540e\u3002\u6700\u540e\u4e00\u4e2a\u5b57\u8282\u662f\u6821\u9a8c\u548c\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6821\u9a8c\u548c=\u6e7f\u5ea6\u6574\u6570\u4f4d+\u6e7f\u5ea6\u5c0f\u6570\u4f4d+\u6e29\u5ea6\u6574\u6570\u4f4d+\u6e29\u5ea6\u5c0f\u6570\u4f4d"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f DHT11 \u8fd4\u56de\u7684\u6570\u636e\u5305\u793a\u610f\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DHT11\u6570\u636e\u683c\u5f0f",src:r(3551).Z,width:"1000",height:"294"})),(0,a.kt)("p",null,"\u867d\u7136\u6570\u636e\u624b\u518c\u4e0a\u8868\u793a\u6e7f\u5ea6\u548c\u6e29\u5ea6\u7684\u5c0f\u6570\u4f4d\u90fd\u662f 0\uff0c\u4f46\u662f\u6211\u5728\u5b9e\u9645\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u6e7f\u5ea6\u7684\u5c0f\u6570\u4f4d\u786e\u5b9e\u662f 0\uff0c\u800c\u6e29\u5ea6\u7684\u5c0f\u6570\u4f4d\u4e0d\u662f\u603b\u662f 0\uff0c\u6e29\u5ea6\u6709\u5c0f\u6570\u4f4d\uff0c\u7cbe\u5ea6\u4e3a 0.1\u3002\u6b63\u56e0\u5982\u6b64\uff0c\u5bfc\u81f4\u6211\u5728\u9a8c\u8bc1\u6821\u9a8c\u548c\u7684\u65f6\u5019\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u6e7f\u5ea6\u6574\u6570\u4f4d+\u6e29\u5ea6\u6574\u6570\u4f4d!=\u6821\u9a8c\u548c"),"\u603b\u662f\u8fd4\u56de",(0,a.kt)("strong",{parentName:"p"},"DHT11_ERROR"),"\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u8bf4\u6743\u5a01\u4e5f\u6709\u9519\u8bef\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u6709\u4e00\u9897\u4f1a\u6000\u7591\u7684\u5fc3\uff0c\u60f3\u529e\u6cd5\u8bc1\u660e\u81ea\u5df1\u3002"),(0,a.kt)("h2",{id:"5-dht11-\u548c-mcu-\u7684\u901a\u4fe1\u8fc7\u7a0b"},"5. DHT11 \u548c MCU \u7684\u901a\u4fe1\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u4fe1\u53f7\u7ebf\u6b63\u5e38\u60c5\u51b5\u4e0b\u5904\u4e8e\u88ab\u62c9\u9ad8\u72b6\u6001\uff0cMCU \u9700\u8981\u62c9\u4f4e\u4fe1\u53f7\u7ebf\u81f3\u5c11 18ms\uff0c\u518d\u62c9\u9ad8\u81f3\u5c11 20-40us\uff0c\u53d1\u9001\u5f00\u59cb\u4fe1\u53f7\uff0c\u7136\u540e\u7b49\u5f85 DHT11 \u5e94\u7b54\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0cDHT11 \u63a5\u6536\u5230\u5f00\u59cb\u4fe1\u53f7\u540e\u4f1a\u5148\u62c9\u4f4e\u4fe1\u53f7\u7ebf 80us\uff0c\u518d\u62c9\u9ad8 80us\uff0c\u8868\u660e DHT11 \u51c6\u5907\u597d\u4e86\uff0cMCU \u53ef\u4ee5\u5f00\u59cb\u51c6\u5907\u63a5\u53d7\u6570\u636e\u4e86\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e09\u6b65\uff0c\u63a5\u7740 DHT11 \u5c06\u53d1\u9001 40 \u4f4d\u7684\u6570\u636e\u5305\uff0c\u53d1\u9001\u5b8c\u4e4b\u540e\u5c31\u518d\u6b21\u628a\u4fe1\u53f7\u7ebf\u62c9\u9ad8\uff0c\u901a\u4fe1\u7ed3\u675f\u3002"),(0,a.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6570\u636e\u624b\u518c\u4e0a\u8bf4\u660e\u4e86 DHT11 \u91c7\u96c6\u66f4\u65b0\u6570\u636e\u9700\u8981 2 \u79d2\u949f\uff0c\u56e0\u6b64\u6211\u5efa\u8bae\u6bcf\u6b21\u548c DHT11 \u7ed3\u675f\u901a\u4fe1\u540e\u81f3\u5c11",(0,a.kt)("strong",{parentName:"p"},"\u5ef6\u65f6 3 \u79d2\u949f"),"\uff0c\u4fdd\u8bc1\u6570\u636e\u7684\u51c6\u786e\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DHT11\u548cMCU\u7684\u901a\u4fe1\u8fc7\u7a0b",src:r(5625).Z,width:"1000",height:"387"})))}d.isMDXComponent=!0},209:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2-1-58c6ada23e7cf47dc12d6c64f56a6253.png"},1981:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2-2-cdc79c8654036e3aed7826d086f7a7e7.png"},3551:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2-3-b8a5f2552f2ed1eeec6a4f13a2a7e72c.png"},5625:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2-4-90274776d56ca192baeb317ec9a38fc3.png"}}]);