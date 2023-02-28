"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[132],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(l),d=n,m=s["".concat(o,".").concat(d)]||s[d]||k[d]||r;return l?a.createElement(m,i(i({ref:t},c),{},{components:l})):a.createElement(m,i({ref:t},c))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<r;u++)i[u]=l[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}s.displayName="MDXCreateElement"},86487:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=l(87462),n=(l(67294),l(3905));const r={},i=void 0,p={unversionedId:"Interview/\u5de5\u4f5c\u9762\u8bd5\u9898/SRE\u57fa\u7840\u5fc5\u4f1a\u6838\u5fc3\u5b9e\u6218\u9762\u8bd5\u9898",id:"Interview/\u5de5\u4f5c\u9762\u8bd5\u9898/SRE\u57fa\u7840\u5fc5\u4f1a\u6838\u5fc3\u5b9e\u6218\u9762\u8bd5\u9898",title:"SRE\u57fa\u7840\u5fc5\u4f1a\u6838\u5fc3\u5b9e\u6218\u9762\u8bd5\u9898",description:"linux \u7cfb\u7edf\u76f8\u5173",source:"@site/docs/Interview/\u5de5\u4f5c\u9762\u8bd5\u9898/SRE\u57fa\u7840\u5fc5\u4f1a\u6838\u5fc3\u5b9e\u6218\u9762\u8bd5\u9898.md",sourceDirName:"Interview/\u5de5\u4f5c\u9762\u8bd5\u9898",slug:"/Interview/\u5de5\u4f5c\u9762\u8bd5\u9898/SRE\u57fa\u7840\u5fc5\u4f1a\u6838\u5fc3\u5b9e\u6218\u9762\u8bd5\u9898",permalink:"/docs/Interview/\u5de5\u4f5c\u9762\u8bd5\u9898/SRE\u57fa\u7840\u5fc5\u4f1a\u6838\u5fc3\u5b9e\u6218\u9762\u8bd5\u9898",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Interview/\u5de5\u4f5c\u9762\u8bd5\u9898/SRE\u57fa\u7840\u5fc5\u4f1a\u6838\u5fc3\u5b9e\u6218\u9762\u8bd5\u9898.md",tags:[],version:"current",frontMatter:{},sidebar:"interview",previous:{title:"Redis\u9762\u8bd5\u98982",permalink:"/docs/Interview/\u5de5\u4f5c\u9762\u8bd5\u9898/Redis\u9762\u8bd5\u98982"},next:{title:"SRE\u9ad8\u7ea7\u8fd0\u7ef4\u9762\u8bd5\u9898",permalink:"/docs/Interview/\u5de5\u4f5c\u9762\u8bd5\u9898/SRE\u9ad8\u7ea7\u8fd0\u7ef4\u9762\u8bd5\u9898"}},o={},u=[{value:"linux \u7cfb\u7edf\u76f8\u5173",id:"linux-\u7cfb\u7edf\u76f8\u5173",level:2},{value:"uptime\u547d\u4ee4\u4e2dload average\u5b57\u6bb5\u540e\u76843\u4e2a\u6570\u5b57\u4ee3\u8868\u4ec0\u4e48\uff1f",id:"uptime\u547d\u4ee4\u4e2dload-average\u5b57\u6bb5\u540e\u76843\u4e2a\u6570\u5b57\u4ee3\u8868\u4ec0\u4e48",level:3},{value:"\u5982\u4f55\u5224\u65ad\u7cfb\u7edf\u6574\u4f53\u8d1f\u8f7d\u7684\u9ad8\u4f4e\uff1f",id:"\u5982\u4f55\u5224\u65ad\u7cfb\u7edf\u6574\u4f53\u8d1f\u8f7d\u7684\u9ad8\u4f4e",level:3},{value:"\u5982\u4f55\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u7684CPU\u3001\u5185\u5b58\u548c\u8d1f\u8f7d\u60c5\u51b5\uff1f",id:"\u5982\u4f55\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u7684cpu\u5185\u5b58\u548c\u8d1f\u8f7d\u60c5\u51b5",level:3},{value:"\u5982\u4f55\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u7684CPU\u3001\u5185\u5b58\u548c\u8d1f\u8f7d\u60c5\u51b5\uff1f",id:"\u5982\u4f55\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u7684cpu\u5185\u5b58\u548c\u8d1f\u8f7d\u60c5\u51b5-1",level:3},{value:"free\u547d\u4ee4\u4e2dshared buff/cache available \u8fd93\u4e2a\u5b57\u6bb5\u662f\u4ec0\u4e48\u610f\u601d\uff1f",id:"free\u547d\u4ee4\u4e2dshared-buffcache-available-\u8fd93\u4e2a\u5b57\u6bb5\u662f\u4ec0\u4e48\u610f\u601d",level:3},{value:"\u63cf\u8ff0\u4e0b\u5728linux\u4e2d\u7ed9\u4e00\u4e2a\u6587\u4ef6\u6388\u4e88 644\u6743\u9650\u662f\u4ec0\u4e48\u610f\u601d\uff1f",id:"\u63cf\u8ff0\u4e0b\u5728linux\u4e2d\u7ed9\u4e00\u4e2a\u6587\u4ef6\u6388\u4e88-644\u6743\u9650\u662f\u4ec0\u4e48\u610f\u601d",level:3},{value:"linux\u4e2d\u5982\u4f55\u7981\u6b62\u4e00\u4e2a\u7528\u6237\u901a\u8fc7shell\u767b\u5f55\uff1f",id:"linux\u4e2d\u5982\u4f55\u7981\u6b62\u4e00\u4e2a\u7528\u6237\u901a\u8fc7shell\u767b\u5f55",level:3},{value:"\u5982\u4f55\u8ffd\u8e2ashell\u811a\u672c\u7684\u6267\u884c\u8fc7\u7a0b\uff1f",id:"\u5982\u4f55\u8ffd\u8e2ashell\u811a\u672c\u7684\u6267\u884c\u8fc7\u7a0b",level:3},{value:"\u5982\u4f55\u89c2\u5bdf\u5f53\u524d\u7cfb\u7edf\u7684\u7f51\u7edc\u4f7f\u7528\u60c5\u51b5\uff1f",id:"\u5982\u4f55\u89c2\u5bdf\u5f53\u524d\u7cfb\u7edf\u7684\u7f51\u7edc\u4f7f\u7528\u60c5\u51b5",level:3},{value:"\u5982\u4f55\u8ffd\u8e2aA\u4e3b\u673a\u5230B\u4e3b\u673a\u8fc7\u7a0b\u4e2d\u7684\u4e22\u5305\u60c5\u51b5\uff1f",id:"\u5982\u4f55\u8ffd\u8e2aa\u4e3b\u673a\u5230b\u4e3b\u673a\u8fc7\u7a0b\u4e2d\u7684\u4e22\u5305\u60c5\u51b5",level:3},{value:"linux \u7cfb\u7edf\u4e2dID\u4e3a0\u662f\u4ec0\u4e48\u7528\u6237\uff1f",id:"linux-\u7cfb\u7edf\u4e2did\u4e3a0\u662f\u4ec0\u4e48\u7528\u6237",level:3},{value:"\u600e\u4e48\u7edf\u8ba1\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u6d3b\u8dc3\u8fde\u63a5\u6570\uff1f",id:"\u600e\u4e48\u7edf\u8ba1\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u6d3b\u8dc3\u8fde\u63a5\u6570",level:3},{value:"time_wait \u72b6\u6001\u5904\u4e8eTCP\u8fde\u63a5\u4e2d\u7684\u90a3\u4e2a\u4f4d\u7f6e\uff1f",id:"time_wait-\u72b6\u6001\u5904\u4e8etcp\u8fde\u63a5\u4e2d\u7684\u90a3\u4e2a\u4f4d\u7f6e",level:3},{value:"\u5982\u4f55\u67e5\u770b\u4e00\u4e2a\u6587\u4ef6\u7684\u6743\u9650\u3001\u5927\u5c0f\u548c\u6700\u65b0\u4fee\u6539\u65f6\u95f4\uff1f",id:"\u5982\u4f55\u67e5\u770b\u4e00\u4e2a\u6587\u4ef6\u7684\u6743\u9650\u5927\u5c0f\u548c\u6700\u65b0\u4fee\u6539\u65f6\u95f4",level:3},{value:"slinux\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b",id:"slinux\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"shell\u811a\u672c \u6848\u4f8b\u7b49\u7b49 \u6bd4\u5982 \u53c2\u6570\u53d8\u91cf $$ $! $* $@ \u4f5c\u7528 \u5faa\u73affor while case \u51fd\u6570\u7b49",id:"shell\u811a\u672c-\u6848\u4f8b\u7b49\u7b49-\u6bd4\u5982-\u53c2\u6570\u53d8\u91cf-----\u4f5c\u7528-\u5faa\u73affor-while-case-\u51fd\u6570\u7b49",level:2},{value:"\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u52a0\u8f7d\u4f18\u5148\u7ea7(\u8fd9\u91cc\u4f1a\u5b58\u5728\u5f88\u591a\u5751 \u6bd4\u5982\u67d0\u4e2a\u4eba\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u52a0\u8f7d\u5f02\u5e38\u6307\u4ee4\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u7591\u95ee\u95ee\u9898)",id:"\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u52a0\u8f7d\u4f18\u5148\u7ea7\u8fd9\u91cc\u4f1a\u5b58\u5728\u5f88\u591a\u5751-\u6bd4\u5982\u67d0\u4e2a\u4eba\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u52a0\u8f7d\u5f02\u5e38\u6307\u4ee4\u53ef\u80fd\u4f1a\u9020\u6210\u7591\u95ee\u95ee\u9898",level:2}],c={toc:u};function k(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"linux-\u7cfb\u7edf\u76f8\u5173"},"linux \u7cfb\u7edf\u76f8\u5173"),(0,n.kt)("h3",{id:"uptime\u547d\u4ee4\u4e2dload-average\u5b57\u6bb5\u540e\u76843\u4e2a\u6570\u5b57\u4ee3\u8868\u4ec0\u4e48"},"uptime\u547d\u4ee4\u4e2dload average\u5b57\u6bb5\u540e\u76843\u4e2a\u6570\u5b57\u4ee3\u8868\u4ec0\u4e48\uff1f"),(0,n.kt)("p",null,"\u4e00\u5206\u949f\u5185,\u4e94\u5206\u949f\u5185,\u5341\u4e94\u5206\u949f\u5185\u7684\u7cfb\u7edf\u5e73\u5747\u8d1f\u8f7d;"),(0,n.kt)("h3",{id:"\u5982\u4f55\u5224\u65ad\u7cfb\u7edf\u6574\u4f53\u8d1f\u8f7d\u7684\u9ad8\u4f4e"},"\u5982\u4f55\u5224\u65ad\u7cfb\u7edf\u6574\u4f53\u8d1f\u8f7d\u7684\u9ad8\u4f4e\uff1f"),(0,n.kt)("p",null,"  load \u662f\u4e00\u5b9a\u65f6\u95f4\u5185\u8ba1\u7b97\u673a\u6709\u591a\u5c11\u4e2a\u6d3b\u8dc3\u4efb\u52a1,\u4e5f\u5c31\u662f\u8bf4\u662f\u8ba1\u7b97\u673a\u7684\u4efb\u52a1\u6267\u884c\u961f\u5217\u7684\u957f\u5ea6,cpu\u8ba1\u7b97\u7684\u961f\u5217,\u6240\u4ee5\u4e00\u822c\u8ba4\u4e3aCPU\u6838\u6570\u7684\u5c31\u662fload\u503c\u7684\u4e0a\u7ebf\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u7684cpu\u5185\u5b58\u548c\u8d1f\u8f7d\u60c5\u51b5"},"\u5982\u4f55\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u7684CPU\u3001\u5185\u5b58\u548c\u8d1f\u8f7d\u60c5\u51b5\uff1f"),(0,n.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u4f7f\u7528top\u547d\u4ee4\u53bb\u4ea4\u4e92\u67e5\u770b\u7cfb\u7edf\u8d1f\u8f7d\u4fe1\u606f\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u7684cpu\u5185\u5b58\u548c\u8d1f\u8f7d\u60c5\u51b5-1"},"\u5982\u4f55\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u7684CPU\u3001\u5185\u5b58\u548c\u8d1f\u8f7d\u60c5\u51b5\uff1f"),(0,n.kt)("p",null,"top \u547d\u4ee4"),(0,n.kt)("h3",{id:"free\u547d\u4ee4\u4e2dshared-buffcache-available-\u8fd93\u4e2a\u5b57\u6bb5\u662f\u4ec0\u4e48\u610f\u601d"},"free\u547d\u4ee4\u4e2dshared buff/cache available \u8fd93\u4e2a\u5b57\u6bb5\u662f\u4ec0\u4e48\u610f\u601d\uff1f"),(0,n.kt)("p",null,"shared \u591a\u8fdb\u7a0b\u4f7f\u7528\u7684\u5171\u4eab\u5185\u5b58;"),(0,n.kt)("p",null," buff/cache \u8bfb\u5199\u7f13\u5b58\u5185\u5b58,\u8fd9\u90e8\u5206\u5185\u5b58\u662f\u5f53\u7a7a\u95f2\u6765\u7528\u7684,\u5f53free\u5185\u5b58\u4e0d\u8db3\u65f6,linux\u5185\u6838\u4f1a\u5c06\u6b64\u5185\u5b58\u91ca\u653e;"),(0,n.kt)("p",null," available \u662f\u53ef\u4ee5\u88ab\u7a0b\u5e8f\u68ad\u4f7f\u7528\u7684\u7269\u7406\u5185\u5b58;"),(0,n.kt)("h3",{id:"\u63cf\u8ff0\u4e0b\u5728linux\u4e2d\u7ed9\u4e00\u4e2a\u6587\u4ef6\u6388\u4e88-644\u6743\u9650\u662f\u4ec0\u4e48\u610f\u601d"},"\u63cf\u8ff0\u4e0b\u5728linux\u4e2d\u7ed9\u4e00\u4e2a\u6587\u4ef6\u6388\u4e88 644\u6743\u9650\u662f\u4ec0\u4e48\u610f\u601d\uff1f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u6743\u9650\u6570\u5b57\u662f\u516b\u8fdb\u5236:\n\u8bfb: r 4 \n\u5199: w 2\n\u53ef\u6267\u884c:x 1\n")),(0,n.kt)("h3",{id:"linux\u4e2d\u5982\u4f55\u7981\u6b62\u4e00\u4e2a\u7528\u6237\u901a\u8fc7shell\u767b\u5f55"},"linux\u4e2d\u5982\u4f55\u7981\u6b62\u4e00\u4e2a\u7528\u6237\u901a\u8fc7shell\u767b\u5f55\uff1f"),(0,n.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u6216\u8005\u901a\u8fc7\u4fee\u6539/etc/passwd\u6587\u4ef6\u7684\u7528\u6237shell\u90e8\u5206\u4e3a/sbin/nologin \u5373\u53ef\u5b9e\u73b0\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u8ffd\u8e2ashell\u811a\u672c\u7684\u6267\u884c\u8fc7\u7a0b"},"\u5982\u4f55\u8ffd\u8e2ashell\u811a\u672c\u7684\u6267\u884c\u8fc7\u7a0b\uff1f"),(0,n.kt)("p",null,"sh -x \u6216\u8005 bash -x"),(0,n.kt)("h3",{id:"\u5982\u4f55\u89c2\u5bdf\u5f53\u524d\u7cfb\u7edf\u7684\u7f51\u7edc\u4f7f\u7528\u60c5\u51b5"},"\u5982\u4f55\u89c2\u5bdf\u5f53\u524d\u7cfb\u7edf\u7684\u7f51\u7edc\u4f7f\u7528\u60c5\u51b5\uff1f"),(0,n.kt)("p",null,"\u4f7f\u7528iftop\u7b49\u5de5\u5177"),(0,n.kt)("h3",{id:"\u5982\u4f55\u8ffd\u8e2aa\u4e3b\u673a\u5230b\u4e3b\u673a\u8fc7\u7a0b\u4e2d\u7684\u4e22\u5305\u60c5\u51b5"},"\u5982\u4f55\u8ffd\u8e2aA\u4e3b\u673a\u5230B\u4e3b\u673a\u8fc7\u7a0b\u4e2d\u7684\u4e22\u5305\u60c5\u51b5\uff1f"),(0,n.kt)("p",null,"traceroute\u3001mtr, \u6216\u8005\u5176\u4ed6\u53cc\u7aef\u5e26\u5bbd\u6d4b\u8bd5\u5de5\u5177\u3002"),(0,n.kt)("h3",{id:"linux-\u7cfb\u7edf\u4e2did\u4e3a0\u662f\u4ec0\u4e48\u7528\u6237"},"linux \u7cfb\u7edf\u4e2dID\u4e3a0\u662f\u4ec0\u4e48\u7528\u6237\uff1f"),(0,n.kt)("p",null,"root"),(0,n.kt)("h3",{id:"\u600e\u4e48\u7edf\u8ba1\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u6d3b\u8dc3\u8fde\u63a5\u6570"},"\u600e\u4e48\u7edf\u8ba1\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u6d3b\u8dc3\u8fde\u63a5\u6570\uff1f"),(0,n.kt)("p",null,"netstat -na|grep ESTABLISHED|wc -l"),(0,n.kt)("h3",{id:"time_wait-\u72b6\u6001\u5904\u4e8etcp\u8fde\u63a5\u4e2d\u7684\u90a3\u4e2a\u4f4d\u7f6e"},"time_wait \u72b6\u6001\u5904\u4e8eTCP\u8fde\u63a5\u4e2d\u7684\u90a3\u4e2a\u4f4d\u7f6e\uff1f"),(0,n.kt)("p",null,"\u5ba2\u6237\u7aef\u53d1\u51faFIN\u8bf7\u6c42\u670d\u52a1\u7aef\u65ad\u8fde, \u670d\u52a1\u5668\u672a\u53d1\u9001ack+fin\u786e\u8ba4\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u67e5\u770b\u4e00\u4e2a\u6587\u4ef6\u7684\u6743\u9650\u5927\u5c0f\u548c\u6700\u65b0\u4fee\u6539\u65f6\u95f4"},"\u5982\u4f55\u67e5\u770b\u4e00\u4e2a\u6587\u4ef6\u7684\u6743\u9650\u3001\u5927\u5c0f\u548c\u6700\u65b0\u4fee\u6539\u65f6\u95f4\uff1f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ls -l #\u6216\u8005 ll\n")),(0,n.kt)("h3",{id:"slinux\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b"},"slinux\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b"),(0,n.kt)("p",null,"\u5185\u6838\u5f15\u5bfc--\x3e\u8fd0\u884cinit--\x3e\u7cfb\u7edf\u521d\u59cb\u5316--\x3e\u5efa\u7acb\u7ec8\u7aef--\x3e\u7528\u6237\u767b\u9646\u7cfb\u7edf"),(0,n.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,n.kt)("p",null,"\u76d1\u63a7\u7c7b\uff1atop\uff0cps -ef"),(0,n.kt)("p",null,"\u6587\u4ef6\u7c7b\uff1alsof"),(0,n.kt)("p",null,"\u7f51\u7edc\u5206\u6790\uff1atcpdump\uff0cnetstat ss iftop"),(0,n.kt)("p",null,"\u78c1\u76d8\uff1aiotop"),(0,n.kt)("p",null,"\u5185\u5b58\uff1a free"),(0,n.kt)("p",null,"cpu:  vmstat \u4e0a\u5199\u6587\u5207\u6362"),(0,n.kt)("h2",{id:"shell\u811a\u672c-\u6848\u4f8b\u7b49\u7b49-\u6bd4\u5982-\u53c2\u6570\u53d8\u91cf-----\u4f5c\u7528-\u5faa\u73affor-while-case-\u51fd\u6570\u7b49"},"shell\u811a\u672c \u6848\u4f8b\u7b49\u7b49 \u6bd4\u5982 \u53c2\u6570\u53d8\u91cf $$ $! $* $@ \u4f5c\u7528 \u5faa\u73affor while case \u51fd\u6570\u7b49"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    $$ shell\u672c\u8eab\u7684pid\u53f7\n    $!  \u6700\u540e\u4e00\u4e2apid\u53f7\n    $? \u6267\u884c\u4e0a\u4e00\u6761\u547d\u4ee4\u540e\u8fd4\u56de\u7684\u503c\n    $* \u6240\u6709\u53c2\u6570\u5217\u8868\n    $@ \u6240\u6709\u53c2\u6570\u5217\u8868\uff08\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\uff09\n    $0 shell\u6587\u4ef6\u540d\n    $# \u4f20\u53c2\u7684\u4e2a\u6570\n\n")),(0,n.kt)("h2",{id:"\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u52a0\u8f7d\u4f18\u5148\u7ea7\u8fd9\u91cc\u4f1a\u5b58\u5728\u5f88\u591a\u5751-\u6bd4\u5982\u67d0\u4e2a\u4eba\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u52a0\u8f7d\u5f02\u5e38\u6307\u4ee4\u53ef\u80fd\u4f1a\u9020\u6210\u7591\u95ee\u95ee\u9898"},"\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u52a0\u8f7d\u4f18\u5148\u7ea7(\u8fd9\u91cc\u4f1a\u5b58\u5728\u5f88\u591a\u5751 \u6bd4\u5982\u67d0\u4e2a\u4eba\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u52a0\u8f7d\u5f02\u5e38\u6307\u4ee4\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u7591\u95ee\u95ee\u9898)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/profile -> /.bash_profile -> /.bashrc -> /etc/bashrc -> ~/.bash_logout\n")),(0,n.kt)("h1",{id:"\u6838\u5fc3\u573a\u666f\u95ee\u9898"},"\u6838\u5fc3\u573a\u666f\u95ee\u9898"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u573a\u666f 1. \u7ed9\u4f60\u4e00\u53f0\u670d\u52a1\u5668\u9700\u8981\u627e\u5230nginx\u65e5\u5fd7\u6587\u4ef6\u5728\u54ea \u901a\u8fc7\u4ec0\u4e48\u65b9\u5f0f "),(0,n.kt)("li",{parentName:"ol"},"\u573a\u666f2: \u5982\u4f55\u67e5\u770b\u8fdb\u7a0b \u5982\u4f55\u67e5\u770b\u8fd9\u4e2a\u8fdb\u7a0b\u7684\u7aef\u53e3 \u901a\u8fc7\u7aef\u53e3\u5982\u4f55\u627e\u5230\u8fd9\u4e2a\u8fdb\u7a0b"),(0,n.kt)("li",{parentName:"ol"},"\u573a\u666f3: \u5982\u4f55\u67e5\u770b\u7cfb\u7edf\u8d1f\u8f7d load \u503c \uff0c\u4f60\u4eec\u7cfb\u7edf\u7684load\u503c\u662f\u4ec0\u4e48 "),(0,n.kt)("li",{parentName:"ol"},"\u573a\u666f4: \u5982\u4f55\u67e5\u770b\u670d\u52a1\u5668\u7f51\u7edc\u6d41\u91cf "),(0,n.kt)("li",{parentName:"ol"},"\u7edf\u8ba1\u4e00\u4e2a\u8fdb\u7a0b\u6253\u5f00\u7684\u6587\u4ef6\u6570\u636e\uff1f  Lsof \u7edf\u8ba1\u8fdb\u7a0b\u8fd9\u4e9b\u6570\u636e\u7684\u6838\u5fc3\u8003 lsof \u547d\u4ee4  /proc \u8fd9\u4e2a\u5185\u5b58\u6620\u5c04\u7684\u6587\u4ef6\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ol"},"\u7edf\u8ba1\u7cfb\u7edf\u4e2d\u6253\u5f00\u8fdb\u7a0b\u524d10 \u7684\u6587\u4ef6\u6570\uff1f Lsof"),(0,n.kt)("li",{parentName:"ol"},"\u7edf\u8ba1\u8fdb\u7a0b\u5360\u7528\u7684\u7269\u7406\u5185\u5b58?  ps top pidstat dstat /proc \u7b49\u7b49"),(0,n.kt)("li",{parentName:"ol"},"\u7cfb\u7edfload \u7edf\u8ba1\u7684\u4ec0\u4e48\uff1f \u5e73\u5747\u8d1f\u8f7d "),(0,n.kt)("li",{parentName:"ol"},"\u7cfb\u7edf/proc \u6587\u4ef6\u7cfb\u7edf\u662f\u4ec0\u4e48\uff1f \u865a\u62df\u6587\u4ef6\u7cfb\u7edf "),(0,n.kt)("li",{parentName:"ol"},"tcp \u534a\u8fde\u63a5  \u5168\u8fde\u63a5 accpt\u961f\u5217 \u7f13\u51b2\u961f\u5217")),(0,n.kt)("h1",{id:"\u6027\u80fd\u95ee\u9898"},"\u6027\u80fd\u95ee\u9898"),(0,n.kt)("p",null,"cpu: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5982\u4f55\u7406\u89e3\u7cfb\u7edf\u5e73\u5747\u8d1f\u8f7d "),(0,n.kt)("li",{parentName:"ol"},"cpu\u4f7f\u7528\u7387"),(0,n.kt)("li",{parentName:"ol"},"cpu\u4e0a\u4e0b\u6587\u662f\u4ec0\u4e48"),(0,n.kt)("li",{parentName:"ol"},"\u8fdb\u7a0b\u72b6\u6001 \u50f5\u5c38\u7ecf\u5e38Z   T  R S S++\u7b49\u7b49"),(0,n.kt)("li",{parentName:"ol"},"\u77ed\u65f6\u8fdb\u7a0b"),(0,n.kt)("li",{parentName:"ol"},"\u4e2d\u65ad\u7406\u89e3"),(0,n.kt)("li",{parentName:"ol"},"\u7cfb\u7edf\u8c03\u7528")),(0,n.kt)("p",null,"\u5185\u5b58\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"cache \u548cbuffer \u533a\u522b"),(0,n.kt)("li",{parentName:"ol"},"cache page \u7406\u89e3"),(0,n.kt)("li",{parentName:"ol"},"\u5185\u5b58\u6cc4\u9732"),(0,n.kt)("li",{parentName:"ol"},"swap ")),(0,n.kt)("p",null,"\u78c1\u76d8\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"io\u8bfb\u5199"),(0,n.kt)("li",{parentName:"ol"},"inode block \u7406\u89e3"),(0,n.kt)("li",{parentName:"ol"},"\u5e38\u7528\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b ")),(0,n.kt)("p",null,"\u7f51\u7edc\u76f8\u5173"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"tcp\u4e09\u6b21\u63e1\u624b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"tcp \u56db\u6b21")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"tcp\u4e3a\u4ec0\u4e48\u662f\u53ef\u9760\u8fde\u63a5 "),(0,n.kt)("p",{parentName:"li"},"TCP\u901a\u4fe1\u6700\u91cd\u8981\u7684\u7279\u5f81\u662f\uff1a\u6709\u5e8f(ordering)\u548c\u53ef\u9760(reliable)\u3002\u6709\u5e8f\u662f\u901a\u8fc7\u5c06\u6587\u672c\u6d41\u5206\u6bb5\u5e76\u7f16\u53f7\u5b9e\u73b0\u7684\u3002\u53ef\u9760\u662f\u901a\u8fc7ACK\u56de\u590d\u548c\u91cd\u590d\u53d1\u9001(retransmission)\u5b9e\u73b0\u7684"),(0,n.kt)("p",{parentName:"li"},"TCP\u8fde\u63a5\u4ece\u65e0\u5230\u6709\u9700\u8981\u4e00\u4e2a\u5efa\u7acb\u8fde\u63a5\u7684\u8fc7\u7a0b\u3002\u5efa\u7acb\u8fde\u63a5\u7684\u6700\u91cd\u8981\u76ee\u662f\u8ba9\u8fde\u63a5\u7684\u53cc\u65b9\u4ea4\u6362\u521d\u59cb\u5e8f\u53f7(ISN, Initial Sequence Number)\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"tcp \u72b6\u6001")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"udp\u5e94\u7528\u573a\u666f\u662f\u4ec0\u4e48")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6293\u5305\u5de5\u5177tcpdump \u6293\u5305\u5206\u6790\u5de5\u5177wireshark")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"wiresharek \u7528\u8fc7\u4ec0\u4e48\u64cd")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f18\u5316\u76f8\u5173 time_wait close_wait")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"nat\u662f\u4ec0\u4e48")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f13\u51b2\u533a\u961f\u5217 \u53ef\u4ee5\u4e86\u89e3 ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u534f\u8bae http dns socket tcp/udp grpc arp  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u4e00\u4e2a\u7f51\u7ad9\u8fc7\u7a0b dns tcp\u4e09\u6b21\u63e1\u624b http \u6216 tls  tcp\u56db\u6b21\u6325\u624b \u4e2d\u95f4\u8bbe\u8ba1\u5230cache"))))}k.isMDXComponent=!0}}]);