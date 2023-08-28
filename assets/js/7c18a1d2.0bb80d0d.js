"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=l(n),m=a,f=y["".concat(i,".").concat(m)]||y[m]||p[m]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},63472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},o="MySQL\u5c0f\u6280\u5de7\u6c47\u603b",c={unversionedId:"LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7",id:"LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7",title:"MySQL\u5c0f\u6280\u5de7\u6c47\u603b",description:"- JSON\u4e2d\u67e5\u8be2\u7279\u5b9a\u952e\u5bf9\u5e94\u7684\u503c",source:"@site/docs/LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7.md",sourceDirName:"LinuxBasics/DataBases/MySQL",slug:"/LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/DataBases/MySQL/MySQL \u5c0f\u6280\u5de7.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"MySQL \u4e8b\u52a1",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL Transaction"},next:{title:"MySQL\u5feb\u901f\u624b\u518c",permalink:"/docs/LinuxBasics/DataBases/MySQL/MySQL \u5feb\u901f\u624b\u518c"}},i={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql\u5c0f\u6280\u5de7\u6c47\u603b"},"MySQL\u5c0f\u6280\u5de7\u6c47\u603b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JSON\u4e2d\u67e5\u8be2\u7279\u5b9a\u952e\u5bf9\u5e94\u7684\u503c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT data -> '$.text_1' FROM ...              -- `->`\u5199\u6cd5\u7b49\u4ef7\u4e8eJSON_EXTRACT()\n-- `->>`\u662fJSON_EXTRACT() \u548c JSON_UNQUOTE() \u7684\u7b49\u4ef7\u5199\u6cd5\n")),(0,a.kt)("p",null,"\ud83d\udd17\u66f4\u591aJSON\u64cd\u4f5c\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/muscleape/p/10064031.html"},"https://www.cnblogs.com/muscleape/p/10064031.html")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6570\u5b57")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST('123' AS SIGNED);\nSELECT CONVERT('123',SIGNED);\n-- \u4e09\u79cd\u65b9\u6cd5\uff0c\u6700\u540e\u8fd9\u79cd\u975e\u5e38\u7b80\u5355\nSELECT '123'+0;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"})))}p.isMDXComponent=!0}}]);