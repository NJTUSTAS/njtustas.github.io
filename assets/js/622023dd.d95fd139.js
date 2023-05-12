"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u6a21\u6570\u8f6c\u6362ADC"},i="\u6a21\u6570\u8f6c\u6362 ADC",l={unversionedId:"electronics/arduino/chapter7",id:"electronics/arduino/chapter7",title:"\u6a21\u6570\u8f6c\u6362ADC",description:"AVR \u82af\u7247\u5185\u90e8\u81ea\u5e26\u6709 10 \u4f4d\u7684\u6a21\u6570\u8f6c\u6362\u5668\uff0c\u80fd\u591f\u8bfb\u53d6\u8f93\u5165\u7684\u6a21\u62df\u7535\u538b\u503c\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a\u6570\u5b57\u503c\u3002",source:"@site/docs/electronics/arduino/chapter7.md",sourceDirName:"electronics/arduino",slug:"/electronics/arduino/chapter7",permalink:"/docs/electronics/arduino/chapter7",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6a21\u6570\u8f6c\u6362ADC"},sidebar:"docs",previous:{title:"\u8109\u51b2\u5bbd\u5ea6\u8c03\u5236PWM",permalink:"/docs/electronics/arduino/chapter6"},next:{title:"\u4e32\u53e3\u901a\u4fe1UART",permalink:"/docs/electronics/arduino/chapter8"}},c={},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u6570\u8f6c\u6362-adc"},"\u6a21\u6570\u8f6c\u6362 ADC"),(0,a.kt)("p",null,"AVR \u82af\u7247\u5185\u90e8\u81ea\u5e26\u6709 10 \u4f4d\u7684\u6a21\u6570\u8f6c\u6362\u5668\uff0c\u80fd\u591f\u8bfb\u53d6\u8f93\u5165\u7684\u6a21\u62df\u7535\u538b\u503c\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a\u6570\u5b57\u503c\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"analogRead()"),"\u51fd\u6570\u8bfb\u53d6\u8f93\u5165\u7535\u538b\u7684\u6570\u5b57\u503c\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"analogRead(pin);\n")),(0,a.kt)("p",null,"pin \u53c2\u6570\uff1a\u5728 Arduno Uno \u5f00\u53d1\u677f\u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"A0-A5"),"\u5f53\u4f5c\u6a21\u62df\u8f93\u5165\u7684\u5f15\u811a\uff0c\u800c\u5728 Arudino Nano \u5f00\u53d1\u677f\u4e0a\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"A0-A7"),"\u8fd9 8 \u4e2a\u5f15\u811a\u3002"),(0,a.kt)("p",null,"\u5728 Arduino \u4e2d\uff0c\u9ed8\u8ba4\u7684\u5206\u8fa8\u7387\u4e3a 10 \u4f4d\uff0c\u4e5f\u5c31\u662f\u53ef\u4ee5\u5c06 0-5V \u5206\u5272 1024 \u4efd\u3002\u800c\u67d0\u4e9b\u5355\u7247\u673a\u82af\u7247\u652f\u6301 12 \u4f4d\u7684\u5206\u8fa8\u7387\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"analogReadResolution()"),"\u8c03\u6574\u8fd9\u4e2a\u5206\u8fa8\u7387\u3002\u66f4\u591a\u76f8\u5173\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/"},"analogReadResolution"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528 ADC \u8c03\u6574\u677f\u8f7d LED \u95ea\u70c1\u9891\u7387\u7684\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int led = 13;\nint potentiometer = A0;\nint delayTime = 100;\n\nvoid setup() {\n  pinMode(led, OUTPUT);\n  pinMode(potentiometer, INPUT);\n}\n\nvoid loop() {\n  int value = analogRead(potentiometer);\n  // \u5c06\u8bfb\u53d6\u7684\u503c\u6620\u5c04\u572810-1000\u4e4b\u95f4\uff0c\u4e5f\u5c31\u662f10ms-1000ms\n  delayTime = map(value, 0, 1023, 10, 1000);\n  digitalWrite(led, HIGH);\n  delay(delayTime);\n  digitalWrite(led, LOW);\n  delay(delayTime);\n}\n")))}d.isMDXComponent=!0}}]);