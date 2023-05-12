"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[9579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u901a\u4fe1\u4e13\u9898",slug:"/electronics/communication"},i="\u901a\u4fe1\u4e13\u9898",c={unversionedId:"electronics/communication/intro",id:"electronics/communication/intro",title:"\u901a\u4fe1\u4e13\u9898",description:"\u901a\u4fe1\uff0c\u5728\u5355\u7247\u673a\u4e2d\u5c24\u5176\u91cd\u8981\uff0c\u6ca1\u6709\u4e86\u901a\u4fe1\uff0c\u90a3\u4e48\u5355\u7247\u673a\u5c31\u53ea\u80fd\u662f\u4e00\u4e2a\u5b64\u5c9b\uff0c\u5c31\u4e0d\u80fd\u5ef6\u4f38\u5b83\u7684\u80fd\u529b\u3002",source:"@site/docs/electronics/communication/intro.md",sourceDirName:"electronics/communication",slug:"/electronics/communication",permalink:"/docs/electronics/communication",draft:!1,tags:[],version:"current",frontMatter:{title:"\u901a\u4fe1\u4e13\u9898",slug:"/electronics/communication"},sidebar:"docs",previous:{title:"\u5171\u7528\u4f53(union)",permalink:"/docs/electronics/c-lang/chapter18"},next:{title:"One-Wire\u7b80\u4ecb",permalink:"/docs/electronics/communication/serial/one-wire"}},l={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u901a\u4fe1\u4e13\u9898"},"\u901a\u4fe1\u4e13\u9898"),(0,a.kt)("p",null,"\u901a\u4fe1\uff0c\u5728\u5355\u7247\u673a\u4e2d\u5c24\u5176\u91cd\u8981\uff0c\u6ca1\u6709\u4e86\u901a\u4fe1\uff0c\u90a3\u4e48\u5355\u7247\u673a\u5c31\u53ea\u80fd\u662f\u4e00\u4e2a\u5b64\u5c9b\uff0c\u5c31\u4e0d\u80fd\u5ef6\u4f38\u5b83\u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u53ea\u5bf9\u5355\u7247\u673a\u4e2d\u5f88\u5e38\u7528\u7684\u901a\u4fe1\u65b9\u5f0f\u505a\u7b80\u5355\u4ecb\u7ecd\uff0c\u81f3\u4e8e\u84dd\u7259\uff0cWIFI \u7b49\u65e0\u7ebf\u53ca\u5176\u4ed6\u901a\u4fe1\u65b9\u5f0f\uff0c\u8fd9\u91cc\u4e0d\u4f1a\u6d89\u53ca\u3002\u540c\u65f6\uff0c\u8fd9\u91cc\u6240\u6709\u4ee3\u7801\u90fd\u662f\u57fa\u4e8e Arudino \u6846\u67b6\u8fdb\u884c\u7f16\u5199\u7684\uff0c\u4e3b\u8981\u662f\u73af\u5883\u642d\u5efa\u65b9\u4fbf\uff0c\u4f46\u662f\u5185\u5bb9\u662f\u57fa\u4e8e\u901a\u4fe1\u539f\u7406\uff0c\u6240\u4ee5\u5b8c\u5168\u53ef\u4ee5\u79fb\u690d\u5230\u5176\u4ed6\u4efb\u4f55\u4e00\u79cd\u5355\u7247\u673a\uff0c\u91cd\u8981\u7684\u5b66\u4e60\u6bcf\u4e00\u79cd\u901a\u4fe1\u5176\u4e2d\u7684\u539f\u7406\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u4ee5\u4e0b\u4e94\u79cd\uff0c\u5355\u7247\u673a\u5e38\u7528\u7684\u901a\u4fe1\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/electronics/communication/serial/one-wire"},"One-Wire")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/electronics/communication/serial/uart"},"UART")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/electronics/communication/serial/i2c"},"I2C")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/electronics/communication/serial/spi"},"SPI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/electronics/communication/parallel"},"\u5e76\u884c\u901a\u4fe1"))),(0,a.kt)("p",null,"\u540c\u65f6\u672c\u7ae0\u9700\u8981\u9605\u8bfb\u4e00\u4e9b\u6570\u636e\u624b\u518c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u65b9\u94fe\u63a5\u9605\u8bfb\u4e0b\u8f7d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"/assets/datasheet/DHT11.pdf",target:"_blank"},"DHT11\u6570\u636e\u624b\u518c")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"/assets/datasheet/HC-05.pdf",target:"_blank"},"HC-05\u6570\u636e\u624b\u518c")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"/assets/datasheet/DS3231.pdf",target:"_blank"},"DS3231\u6570\u636e\u624b\u518c")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"/assets/datasheet/MPU9250.pdf",target:"_blank"},"MPU9250\u6570\u636e\u624b\u518c")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"/assets/datasheet/MPU9250-Register-Map.pdf",target:"_blank"},"MPU9250 Register Map\u6570\u636e\u624b\u518c")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"/assets/datasheet/LCD1602.pdf",target:"_blank"},"LCD1602\u6570\u636e\u624b\u518c"))))}m.isMDXComponent=!0}}]);