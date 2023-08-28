"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const c={},s=void 0,o={unversionedId:"LinuxBasics/DataBases/Etcd/etcd Basic",id:"LinuxBasics/DataBases/Etcd/etcd Basic",title:"etcd Basic",description:"\u7b80\u4ecb",source:"@site/docs/LinuxBasics/DataBases/Etcd/etcd Basic.md",sourceDirName:"LinuxBasics/DataBases/Etcd",slug:"/LinuxBasics/DataBases/Etcd/etcd Basic",permalink:"/docs/LinuxBasics/DataBases/Etcd/etcd Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/DataBases/Etcd/etcd Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"\u7f13\u5b58\u7a7f\u900f\u3001\u7f13\u5b58\u51fb\u7a7f\u3001\u7f13\u5b58\u96ea\u5d29",permalink:"/docs/LinuxBasics/DataBases/Redis/\u7f13\u5b58\u7a7f\u900f\u3001\u7f13\u5b58\u51fb\u7a7f\u3001\u7f13\u5b58\u96ea\u5d29"},next:{title:"etcd \u5907\u4efd\u4e0e\u6062\u590d",permalink:"/docs/LinuxBasics/DataBases/Etcd/etcd \u5907\u4efd\u4e0e\u6062\u590d"}},i={},l=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5\u4e0e\u90e8\u7f72",id:"\u5b89\u88c5\u4e0e\u90e8\u7f72",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Etcd \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u952e\u503c\u5b58\u50a8\u7cfb\u7edf\uff0c\u53ef\u4ee5\u7528\u4e8e\u6301\u4e45\u5316\u548c\u9ad8\u53ef\u7528\u7684\u5b58\u50a8\u914d\u7f6e\u6570\u636e\u3002\u5b83\u57fa\u4e8eRaft\u4e00\u81f4\u6027\u7b97\u6cd5\uff0c\u4e3a\u5206\u5e03\u5f0f\u7cfb\u7edf\u63d0\u4f9b\u5f3a\u4e00\u81f4\u6027\u7684\u670d\u52a1\u3002\n",(0,a.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u7279\u6027"),"\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7b80\u5355\u7684API"),"\uff1aEtcd \u4f7f\u7528\u7b80\u5355\u7684 HTTP/GRPC API\uff0c\u4f7f\u5f97\u5404\u79cd\u8bed\u8a00\u548c\u5e94\u7528\u90fd\u53ef\u4ee5\u8f7b\u677e\u5730\u4e0e\u5176\u4ea4\u4e92\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5f3a\u4e00\u81f4\u6027"),"\uff1a\u501f\u52a9Raft\u534f\u8bae\uff0cEtcd \u53ef\u4ee5\u5728\u96c6\u7fa4\u4e2d\u7684\u591a\u4e2a\u8282\u70b9\u4e4b\u95f4\u63d0\u4f9b\u5f3a\u4e00\u81f4\u6027\u7684\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u591a\u7248\u672c\u5e76\u53d1\u63a7\u5236"),"\uff1a\u6bcf\u4e2a\u952e\u90fd\u5b58\u50a8\u5728\u591a\u4e2a\u7248\u672c\u4e2d\uff0c\u652f\u6301\u5e76\u53d1\u7684\u8bfb\u5199\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5b89\u5168"),"\uff1a\u5185\u7f6e\u7684\u6743\u9650\u7ba1\u7406\u548c SSL/TLS \u652f\u6301\u3002"))),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4e0e\u90e8\u7f72"},"\u5b89\u88c5\u4e0e\u90e8\u7f72"),(0,a.kt)("p",null,"\u5b89\u88c5\u5f88\u7b80\u5355\uff0c\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.5/install/"},"\u5b98\u65b9\u6587\u6863")))}p.isMDXComponent=!0}}]);