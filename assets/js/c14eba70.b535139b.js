"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[3938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||b[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,c={unversionedId:"LinuxBasics/Zabbix/Zabbix \u5b89\u88c5\u4e2d\u6587\u5305",id:"LinuxBasics/Zabbix/Zabbix \u5b89\u88c5\u4e2d\u6587\u5305",title:"Zabbix \u5b89\u88c5\u4e2d\u6587\u5305",description:"",source:"@site/docs/LinuxBasics/Zabbix/Zabbix \u5b89\u88c5\u4e2d\u6587\u5305.md",sourceDirName:"LinuxBasics/Zabbix",slug:"/LinuxBasics/Zabbix/Zabbix \u5b89\u88c5\u4e2d\u6587\u5305",permalink:"/docs/LinuxBasics/Zabbix/Zabbix \u5b89\u88c5\u4e2d\u6587\u5305",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/Zabbix/Zabbix \u5b89\u88c5\u4e2d\u6587\u5305.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Zabbix agent\u6267\u884c\u8fdc\u7a0b\u547d\u4ee4",permalink:"/docs/LinuxBasics/Zabbix/Zabbix agent\u6267\u884c\u8fdc\u7a0b\u547d\u4ee4"},next:{title:"Zabbix \u8be6\u7ec6\u4ecb\u7ecd",permalink:"/docs/LinuxBasics/Zabbix/Zabbix \u8be6\u7ec6\u4ecb\u7ecd"}},s={},u=[],l={toc:u};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apt-get install language-pack-zh-hant language-pack-zh-hans\n\nvi /etc/environment \n# \u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\nLANG="zh_CN.UTF-8"\nLANGUAGE="zh_CN:zh:en_US:en"\n\ndpkg-reconfigure locales\n')))}b.isMDXComponent=!0}}]);