"use strict";(self.webpackChunkstas=self.webpackChunkstas||[]).push([[8419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,s=m["".concat(o,".").concat(d)]||m[d]||k[d]||l;return n?r.createElement(s,i(i({ref:t},c),{},{components:n})):r.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u4e32\u53e3\u901a\u4fe1UART"},i="\u4e32\u53e3\u901a\u4fe1 UART",p={unversionedId:"electronics/arduino/chapter8",id:"electronics/arduino/chapter8",title:"\u4e32\u53e3\u901a\u4fe1UART",description:"1. Arduino \u7684 Serial",source:"@site/docs/electronics/arduino/chapter8.md",sourceDirName:"electronics/arduino",slug:"/electronics/arduino/chapter8",permalink:"/docs/electronics/arduino/chapter8",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e32\u53e3\u901a\u4fe1UART"},sidebar:"docs",previous:{title:"\u6a21\u6570\u8f6c\u6362ADC",permalink:"/docs/electronics/arduino/chapter7"},next:{title:"\u5355\u7247\u673a\u7684\u5b58\u50a8\u5668\u548cEEPROM",permalink:"/docs/electronics/arduino/chapter9"}},o={},u=[{value:"1. Arduino \u7684 Serial",id:"1-arduino-\u7684-serial",level:2},{value:"2. begin",id:"2-begin",level:2},{value:"3. print/println",id:"3-printprintln",level:2},{value:"4. available",id:"4-available",level:2},{value:"5. read",id:"5-read",level:2}],c={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e32\u53e3\u901a\u4fe1-uart"},"\u4e32\u53e3\u901a\u4fe1 UART"),(0,a.kt)("h2",{id:"1-arduino-\u7684-serial"},"1. Arduino \u7684 Serial"),(0,a.kt)("p",null,"Arduino AVR \u5f00\u53d1\u677f\u53ea\u6709\u4e00\u4e2a UART\uff0c\u76f4\u63a5\u548c USB \u76f8\u8fde\u3002\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 RX(D0)\u548c TX(D1)\u8fdb\u884c\u4e32\u53e3\u901a\u4fe1\uff0c\u4f46\u662f\uff0c\u540c\u65f6\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a\uff0c\u4efb\u610f\u4e00\u5904\u88ab\u5360\u7528\u90fd\u65e0\u6cd5\u6b63\u5e38\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u5728 mega \u677f\u4e0a\uff0c\u4e00\u5171\u6709 4 \u4e2a\u4e32\u53e3\uff0c\u9ed8\u8ba4\u7684 UART \u548c USB \u76f8\u8fde\uff0c\u56e0\u6b64\u4f60\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"Serial"),"\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"Serial1"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"Serial2"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"Serial3"),"\u3002"),(0,a.kt)("h2",{id:"2-begin"},"2. begin"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Serial.begin(speed);\nSerial.begin(speed, config);\n")),(0,a.kt)("p",null,"speed \u53c2\u6570\uff1a\u8bbe\u7f6e\u6ce2\u7279\u7387\uff0c\u5e38\u7528\u7684\u6ce2\u7279\u7387\u6709 300\uff0c600\uff0c1200\uff0c2400\uff0c4800\uff0c9600\uff0c14400\uff0c19200\uff0c28800\uff0c38400\uff0c57600\uff0c115200 \u7b49\u3002"),(0,a.kt)("p",null,"config \u53c2\u6570\uff1aArduino \u9ed8\u8ba4\u8bbe\u7f6e\u662f\u4e00\u4e2a\u8d77\u59cb\u4f4d\uff0c\u4e00\u4e2a\u7ec8\u6b62\u4f4d\uff0c\u6ca1\u6709\u6821\u9a8c\u4f4d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\u8bbe\u7f6e\u8fdb\u884c\u8bbe\u7f6e\uff0c\u4e0b\u9762\u662f\u53ef\u4f9b\u9009\u62e9\u7684\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SERIAL_5N1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_6N1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_7N1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_8N1 (the default)"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_5N2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_6N2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_7N2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_8N2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_5E1: even parity"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_6E1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_7E1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_8E1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_5E2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_6E2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_7E2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_8E2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_5O1: odd parity"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_6O1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_7O1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_8O1"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_5O2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_6O2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_7O2"),(0,a.kt)("li",{parentName:"ul"},"SERIAL_8O2")),(0,a.kt)("h2",{id:"3-printprintln"},"3. print/println"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Serial.print(val);\nSerial.print(val, format);\n")),(0,a.kt)("p",null,"val \u53c2\u6570\uff1a\u9700\u8981\u8f93\u51fa\u7684\u503c\uff0c\u8be5\u503c\u53ef\u4ee5\u662f int\uff0clong\uff0cflaot\uff0cdouble\uff0cchar\uff0cString \u7b49\u7b49\u3002"),(0,a.kt)("p",null,"format \u53c2\u6570\uff1a\u9700\u8981\u8f93\u51fa\u7684\u683c\u5f0f\uff0c\u53ef\u4ee5\u662f\u4ee5\u4e0b\u56db\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BIN")," \u8f93\u51fa\u4e8c\u8fdb\u5236"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OCT")," \u8f93\u51fa\u516b\u8fdb\u5236"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DEC")," \u8f93\u51fa\u5341\u8fdb\u5236"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"HEX")," \u8f93\u51fa\u5341\u516d\u8fdb\u5236")),(0,a.kt)("p",null,"\u5982\u679c\u8f93\u51fa\u7684\u662f\u6d6e\u70b9\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\u53ef\u4ee5\u7528\u6765\u9650\u5236\u8f93\u51fa\u7684\u5c0f\u6570\u4f4d\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f print \u7684\u4e00\u4e9b\u5b9e\u4f8b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8bed\u53e5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u51fa\u7ed3\u679c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Serial.print(78,BIN)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1001110")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Serial.print(78, OCT)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"116")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Serial.print(78, DEC)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"78")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Serial.print(78, HEX)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4E")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Serial.print(1.23456, 2)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.23")))),(0,a.kt)("p",null,"pintln \u548c print \u7528\u6cd5\u57fa\u672c\u76f8\u540c\uff0c\u53ea\u662f println \u4f1a\u5728\u7ed3\u675f\u8f93\u51fa\u540e\u81ea\u52a8\u6362\u884c\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528\u4e32\u53e3\u8f93\u51fa\u7535\u4f4d\u5668\u6a21\u62df\u503c\u7684\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int potentiometer = A0;\n\nvoid setup() {\n  Serial.begin(9600);\n  pinMode(potentiometer, INPUT);\n}\n\nvoid loop() {\n  int value = analogRead(potentiometer);\n  Serial.println(value);\n  delay(100);\n}\n")),(0,a.kt)("h2",{id:"4-available"},"4. available"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Serial.available();\n")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u8fd4\u56de\u503c\u4e3a 1 \u8868\u793a\u5f53\u524d\u4e32\u53e3\u7f13\u5b58\u533a\u6709\u6570\u636e\u53ef\u4ee5\u8bfb\u53d6\uff0c\u8fd4\u56de\u503c\u4e3a 0 \u8868\u793a\u7f13\u5b58\u533a\u6ca1\u6709\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"5-read"},"5. read"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Serial.read();\n")),(0,a.kt)("p",null,"\u8bfb\u53d6\u4e32\u53e3\u7f13\u5b58\u533a\u7684\u4e00\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u8bfb\u53d6\u4e32\u53e3\u8f93\u5165\u7684\u5185\u5bb9\uff0c\u518d\u4ee5\u4e0d\u540c\u683c\u5f0f\u8f93\u51fa\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    uint8_t value = Serial.read();\n    Serial.println(value, BIN);\n    Serial.println(value, OCT);\n    Serial.println(value, DEC);\n    Serial.println(value, HEX);\n  }\n}\n")),(0,a.kt)("p",null,"\u6709\u5173 Arduino \u4e32\u53e3\u901a\u4fe1\u7684\u5176\u4ed6\u51fd\u6570\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/communication/serial/"},"Arduino Serial Function Lists")),(0,a.kt)("p",null,"\u8fd9\u91cc\u53ea\u5bf9 Arduino \u7684\u4e32\u53e3\u901a\u4fe1\u8fdb\u884c\u7b80\u5355\u4ecb\u7ecd\uff0c\u6709\u5173 UART \u7684\u901a\u4fe1\u673a\u5236\u53ca\u66f4\u591a\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003\u540e\u9762\u7684\u7ae0\u8282(",(0,a.kt)("a",{parentName:"p",href:"/docs/electronics/communication/serial/uart"},"\u901a\u8baf\u4e13\u9898/UART"),")"))}k.isMDXComponent=!0}}]);