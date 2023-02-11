"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[7],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=a(n),d=l,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,c[1]=i;for(var a=2;a<o;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=n(87462),l=(n(67294),n(3905));const o={},c="Shell\u5e76\u53d1",i={unversionedId:"Scripts/shell/Shell \u5e76\u53d1",id:"Scripts/shell/Shell \u5e76\u53d1",title:"Shell\u5e76\u53d1",description:"shell\u5e76\u53d1\u811a\u672c\u793a\u4f8b\uff1a",source:"@site/docs/Scripts/shell/Shell \u5e76\u53d1.md",sourceDirName:"Scripts/shell",slug:"/Scripts/shell/Shell \u5e76\u53d1",permalink:"/docs/Scripts/shell/Shell \u5e76\u53d1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Scripts/shell/Shell \u5e76\u53d1.md",tags:[],version:"current",frontMatter:{},sidebar:"scripts",previous:{title:"rsysnc",permalink:"/docs/Scripts/shell/Rsync"},next:{title:"\u65e5\u5e38\u5de1\u68c0shell\u811a\u672c",permalink:"/docs/Scripts/shell/\u65e5\u5e38\u5de1\u68c0Shell"}},s={},a=[],p={toc:a};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shell\u5e76\u53d1"},"Shell\u5e76\u53d1"),(0,l.kt)("p",null,"shell\u5e76\u53d1\u811a\u672c\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n# \u5e76\u53d1\u6570\npnum=6\n#\u60f3\u8981\u6267\u884c\u7684\u51fd\u6570\ntask () {\n  echo "$u start"\n  sleep 5\n  echo "$u done"\n}\n\nFifoFile="$$.fifo"\nmkfifo $FifoFile\nexec 6<>$FifoFile\nrm $FifoFile\n\nfor ((i=0;i<=$pnum;i++));do echo;done >&6\n#\u6267\u884c20\u6b21\nfor u in `seq 1 20`\ndo\n  read -u6\n  {\n  #\u8c03\u7528\u51fd\u6570\n  task\n  #\u5e76\u53d1\u6267\u884c\u51fd\u6570\u6253\u5370\u7ed3\u679c\u65e5\u5fd7\n  [ $? -eq 0 ] && echo "${u} \u6b21\u6210\u529f" || echo "${u} \u6b21\u5931\u8d25"\n  echo >&6\n  } &\ndone\nwait\nexec 6>&-\n')))}u.isMDXComponent=!0}}]);