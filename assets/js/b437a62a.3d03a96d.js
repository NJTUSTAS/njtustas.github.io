"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[4280],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={title:"\u6574\u5408\u6253\u5305\u4ee3\u7801"},a="\u6574\u5408\u6253\u5305\u4ee3\u7801",c={unversionedId:"electronics/communication/serial/one-wire/chapter4",id:"electronics/communication/serial/one-wire/chapter4",title:"\u6574\u5408\u6253\u5305\u4ee3\u7801",description:"\u901a\u8fc7\u524d\u9762\u7684\u5206\u6790\uff0c\u6211\u4eec\u53ef\u4ee5\u6574\u5408\u51fa\u5982\u4e0b DHT11 \u5b8c\u6574\u7684 One\u2014Wire \u901a\u4fe1\u4ee3\u7801\uff1a",source:"@site/docs/electronics/communication/serial/one-wire/chapter4.md",sourceDirName:"electronics/communication/serial/one-wire",slug:"/electronics/communication/serial/one-wire/chapter4",permalink:"/docs/electronics/communication/serial/one-wire/chapter4",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6574\u5408\u6253\u5305\u4ee3\u7801"},sidebar:"docs",previous:{title:"\u4ee3\u7801\u903b\u8f91\u5206\u6790",permalink:"/docs/electronics/communication/serial/one-wire/chapter3"},next:{title:"\u603b\u7ed3\u548c\u62d3\u5c55",permalink:"/docs/electronics/communication/serial/one-wire/chapter5"}},l={},s=[],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6574\u5408\u6253\u5305\u4ee3\u7801"},"\u6574\u5408\u6253\u5305\u4ee3\u7801"),(0,i.kt)("p",null,"\u901a\u8fc7\u524d\u9762\u7684\u5206\u6790\uff0c\u6211\u4eec\u53ef\u4ee5\u6574\u5408\u51fa\u5982\u4e0b DHT11 \u5b8c\u6574\u7684 One\u2014Wire \u901a\u4fe1\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#define TIMEOUT 1e5\n#define DHT11_OKAY 0x00\n#define DHT11_ERROR 0x01\n\nuint8_t humidity;\nfloat temperature;\nuint8_t sensorPin = 2;\n\nvoid getLowTime();\nvoid getHighTime();\nvoid updateData();\n\nvoid setup() {\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  switch (updataData()) {\n    case DHT11_ERROR:\n      Serial.println("DHT11 ERROR!");\n      break;\n    case DHT11_OKAY:\n      Serial.print("DHT11 Okay,humidity is ");\n      Serial.print(humidity);\n      Serial.print(", temperature is ");\n      Serial.println(temperature);\n      break;\n  }\n  delay(3000);\n}\n\nuint32_t getLowTime() {\n  uint32_t lastTime = micros();\n  while (!digitalRead(sensorPin)) {\n    if (micros() - lastTime > TIMEOUT) {\n      break;\n    }\n  }\n  return (micros() - lastTime);\n}\n\nuint32_t getHighTime() {\n  uint32_t lastTime = micros();\n  while (digitalRead(sensorPin)) {\n    if (micros() - lastTime > TIMEOUT) {\n      break;\n    }\n  }\n  return (micros() - lastTime);\n}\n\nbool updataData() {\n  /*MCU\u53d1\u9001\u5f00\u59cb\u4fe1\u53f7, \u5e76\u7b49\u5f85\u5e94\u7b54*/\n  pinMode(sensorPin, OUTPUT);\n  //\u62c9\u4f4e18ms\n  digitalWrite(sensorPin, LOW);\n  delay(18);\n  //\u62c9\u9ad840us\n  digitalWrite(sensorPin, HIGH);\n  delayMicroseconds(40);\n\n  /*\u63a5\u53d7DHT11\u505a\u51fa\u7684\u5e94\u7b54*/\n  pinMode(sensorPin, INPUT_PULLUP);\n  getLowTime();\n  getHighTime();\n\n  /*\u5f00\u59cb\u63a5\u53d740bit\u6570\u636e*/\n  uint8_t buffer[5] = {0};\n  for (uint8_t i = 0; i < 5; i++) {\n    for (uint8_t j = 0; j < 8; j++) {\n      getLowTime();\n      if (getHighTime() > 50)\n        buffer[i] |= (0x80 >> j);\n    }\n  }\n\n  /*\u7ed3\u675f\u901a\u4fe1*/\n  getLowTime();\n\n  /*\u68c0\u67e5\u6821\u9a8c\u548c*/\n  if (buffer[0] + buffer[1] + buffer[2] + buffer[3] != buffer[4])\n    return DHT11_ERROR;\n\n  /*\u66f4\u65b0\u6570\u636e*/\n  humidity = buffer[0];\n  temperature = buffer[2] + buffer[3] * 0.1;\n  return DHT11_OKAY;\n}\n')))}m.isMDXComponent=!0}}]);