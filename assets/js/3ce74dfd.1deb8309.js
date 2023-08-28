"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=n.createContext({}),s=function(e){var t=n.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(b,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="RabbitMQ on Docker",c={unversionedId:"LinuxBasics/RabbitMQ/RabbitMQ on Docker",id:"LinuxBasics/RabbitMQ/RabbitMQ on Docker",title:"RabbitMQ on Docker",description:"Try the community Docker image:",source:"@site/docs/LinuxBasics/RabbitMQ/RabbitMQ on Docker.md",sourceDirName:"LinuxBasics/RabbitMQ",slug:"/LinuxBasics/RabbitMQ/RabbitMQ on Docker",permalink:"/docs/LinuxBasics/RabbitMQ/RabbitMQ on Docker",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/RabbitMQ/RabbitMQ on Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"RabbitMQ Mirror Queue",permalink:"/docs/LinuxBasics/RabbitMQ/RabbitMQ Mirror Queue"},next:{title:"Shell",permalink:"/docs/category/shell"}},b={},s=[{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rabbitmq-on-docker"},"RabbitMQ on Docker"),(0,a.kt)("p",null,"Try the ",(0,a.kt)("a",{parentName:"p",href:"https://registry.hub.docker.com/_/rabbitmq/"},"community Docker image"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# for RabbitMQ 3.9, the latest series\ndocker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management\n# for RabbitMQ 3.8,\n# 3.8.x support timeline: https://www.rabbitmq.com/versions.html\ndocker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.8-management\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RabbitMQ Quickly start: ",(0,a.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/download.html"},"https://www.rabbitmq.com/download.html"))))}u.isMDXComponent=!0}}]);