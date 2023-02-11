"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6909],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),i=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=i(t.components);return r.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=i(n),m=a,L=u["".concat(s,".").concat(m)]||u[m]||k[m]||l;return n?r.createElement(L,o(o({ref:e},c),{},{components:n})):r.createElement(L,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83019:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},o="LVS \u8c03\u5ea6\u7b97\u6cd5",p={unversionedId:"LinuxBasics/LoadBalancer/LVS/LVS \u8c03\u5ea6\u7b97\u6cd5",id:"LinuxBasics/LoadBalancer/LVS/LVS \u8c03\u5ea6\u7b97\u6cd5",title:"LVS \u8c03\u5ea6\u7b97\u6cd5",description:"\u9759\u6001\u8c03\u5ea6\u7b97\u6cd5(\u4ec5\u6839\u636e\u7b97\u6cd5\u672c\u8eab\u8fdb\u884c\u8c03\u5ea6)\uff1a",source:"@site/docs/LinuxBasics/LoadBalancer/LVS/LVS \u8c03\u5ea6\u7b97\u6cd5.md",sourceDirName:"LinuxBasics/LoadBalancer/LVS",slug:"/LinuxBasics/LoadBalancer/LVS/LVS \u8c03\u5ea6\u7b97\u6cd5",permalink:"/docs/LinuxBasics/LoadBalancer/LVS/LVS \u8c03\u5ea6\u7b97\u6cd5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/LoadBalancer/LVS/LVS \u8c03\u5ea6\u7b97\u6cd5.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"LVS \u7b80\u5355\u5e94\u7528",permalink:"/docs/LinuxBasics/LoadBalancer/LVS/LVS \u7b80\u5355\u5e94\u7528"},next:{title:"LVS \u8fdb\u9636\u914d\u7f6e",permalink:"/docs/LinuxBasics/LoadBalancer/LVS/LVS \u8fdb\u9636\u914d\u7f6e"}},s={},i=[{value:"\u9759\u6001\u8c03\u5ea6\u7b97\u6cd5(\u4ec5\u6839\u636e\u7b97\u6cd5\u672c\u8eab\u8fdb\u884c\u8c03\u5ea6)\uff1a**",id:"\u9759\u6001\u8c03\u5ea6\u7b97\u6cd5\u4ec5\u6839\u636e\u7b97\u6cd5\u672c\u8eab\u8fdb\u884c\u8c03\u5ea6",level:3},{value:"<strong>\u52a8\u6001\u8c03\u5ea6\u7b97\u6cd5(\u6839\u636e\u6bcfRS\u5f53\u524d\u7684\u8d1f\u8f7d\u72b6\u6001\u53ca\u8c03\u5ea6\u7b97\u6cd5\u8fdb\u884c\u8c03\u5ea6)\uff1a</strong>",id:"\u52a8\u6001\u8c03\u5ea6\u7b97\u6cd5\u6839\u636e\u6bcfrs\u5f53\u524d\u7684\u8d1f\u8f7d\u72b6\u6001\u53ca\u8c03\u5ea6\u7b97\u6cd5\u8fdb\u884c\u8c03\u5ea6",level:3}],c={toc:i};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lvs-\u8c03\u5ea6\u7b97\u6cd5"},"LVS \u8c03\u5ea6\u7b97\u6cd5"),(0,a.kt)("h3",{id:"\u9759\u6001\u8c03\u5ea6\u7b97\u6cd5\u4ec5\u6839\u636e\u7b97\u6cd5\u672c\u8eab\u8fdb\u884c\u8c03\u5ea6"},"\u9759\u6001\u8c03\u5ea6\u7b97\u6cd5(\u4ec5\u6839\u636e\u7b97\u6cd5\u672c\u8eab\u8fdb\u884c\u8c03\u5ea6)\uff1a**"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"RR\uff1a")," \u8f6e\u8be2\u8c03\u5ea6\uff08Round Robin\uff09")),(0,a.kt)("p",null,"\u8c03\u5ea6\u5668\u901a\u8fc7\u201c\u8f6e\u8be2\u201d\u8c03\u5ea6\u7b97\u6cd5\u5c06\u5916\u90e8\u8bf7\u6c42\u6309\u987a\u5e8f\u8f6e\u6d41\u5206\u914d\u5230\u96c6\u7fa4\u4e2d\u7684\u771f\u5b9e\u670d\u52a1\u5668\u4e0a\uff0c\u5b83\u5747\u7b49\u5730\u5bf9\u5f85\u6bcf\u4e00\u53f0\u670d\u52a1\u5668\uff0c\u800c\u4e0d\u7ba1\u670d\u52a1\u5668\u4e0a\u5b9e\u9645\u7684\u8fde\u63a5\u6570\u548c\u7cfb\u7edf\u8d1f\u8f7d\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5c5e\u4e8e\u5927\u9505\u996d\u8c03\u5ea6\u3002")),(0,a.kt)("p",null,"\u6b64\u79cd\u5747\u8861\u7b97\u6cd5\u9002\u5408\u4e8e\u670d\u52a1\u5668\u7ec4\u4e2d\u7684\u6240\u6709\u670d\u52a1\u5668\u90fd\u6709\u76f8\u540c\u7684\u8f6f\u786c\u4ef6\u914d\u7f6e\u5e76\u4e14\u5e73\u5747\u670d\u52a1\u8bf7\u6c42\u76f8\u5bf9\u5747\u8861\u7684\u60c5\u51b5\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"WRR:")," \u52a0\u6743\u8f6e\u8be2\uff08Weighted Round Robin\uff09")),(0,a.kt)("p",null,"\u6839\u636e\u771f\u5b9e\u670d\u52a1\u5668\u7684\u4e0d\u540c\u5904\u7406\u80fd\u529b\u6765\u8c03\u5ea6\u8bbf\u95ee\u8bf7\u6c42\u3002\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1\u5904\u7406\u80fd\u529b\u5f3a\u7684\u670d\u52a1\u5668\u80fd\u5904\u7406\u66f4\u591a\u7684\u8bbf\u95ee\u6d41\u91cf\u3002\u8c03\u5ea6\u5668\u53ef\u4ee5\u81ea\u52a8\u95ee\u8be2\u771f\u5b9e\u670d\u52a1\u5668\u7684\u8d1f\u8f7d\u60c5\u51b5\uff0c\u5e76\u52a8\u6001\u5730\u8c03\u6574\u5176\u6743\u503c\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5e26\u6743\u91cd\u7684\u5927\u9505\u996d\u8c03\u5ea6\u3002")),(0,a.kt)("p",null,"\u6b64\u79cd\u5747\u8861\u7b97\u6cd5\u80fd\u786e\u4fdd\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u5668\u5f97\u5230\u66f4\u591a\u7684\u4f7f\u7528\u7387\uff0c\u907f\u514d\u4f4e\u6027\u80fd\u7684\u670d\u52a1\u5668\u8d1f\u8f7d\u8fc7\u91cd\u3002"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SH:")," \u6e90\u5730\u5740\u54c8\u5e0c\uff08Source Hashing\uff09")),(0,a.kt)("p",null,"\u6839\u636e\u8bf7\u6c42\u7684\u6e90IP\u5730\u5740\uff0c\u4f5c\u4e3a\u6563\u5217\u952e\uff08Hash Key\uff09\u4ece\u9759\u6001\u5206\u914d\u7684\u6563\u5217\u8868\u627e\u51fa\u5bf9\u5e94\u7684\u670d\u52a1\u5668\uff0c\u82e5\u8be5\u670d\u52a1\u5668\u662f\u53ef\u7528\u7684\u4e14\u672a\u8d85\u8f7d\uff0c\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u8be5\u670d\u52a1\u5668\u3002\u57fa\u4e8eclient\u5730\u5740\u7684\u6765\u6e90\u533a\u5206\u3002\u5b9e\u73b0session sticky\u3002"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DH:")," \u76ee\u6807\u5730\u5740\u54c8\u5e0c\uff08Destination Hashing\uff09")),(0,a.kt)("p",null,"\u6839\u636e\u8bf7\u6c42\u7684\u76ee\u6807IP\u5730\u5740\uff0c\u4f5c\u4e3a\u6563\u5217\u952e\uff08Hash Key\uff09\u4ece\u9759\u6001\u5206\u914d\u7684\u6563\u5217\u8868\u627e\u51fa\u5bf9\u5e94\u7684\u670d\u52a1\u5668\uff0c\u82e5\u8be5\u670d\u52a1\u5668\u662f\u53ef\u7528\u7684\u4e14\u672a\u8d85\u8f7d\uff0c\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u8be5\u670d\u52a1\u5668\uff0c\u5426\u5219\u8fd4\u56de\u7a7a\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u52a8\u6001\u8c03\u5ea6\u7b97\u6cd5\u6839\u636e\u6bcfrs\u5f53\u524d\u7684\u8d1f\u8f7d\u72b6\u6001\u53ca\u8c03\u5ea6\u7b97\u6cd5\u8fdb\u884c\u8c03\u5ea6"},(0,a.kt)("strong",{parentName:"h3"},"\u52a8\u6001\u8c03\u5ea6\u7b97\u6cd5(\u6839\u636e\u6bcfRS\u5f53\u524d\u7684\u8d1f\u8f7d\u72b6\u6001\u53ca\u8c03\u5ea6\u7b97\u6cd5\u8fdb\u884c\u8c03\u5ea6)\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"LC:")," \u6700\u5c11\u94fe\u63a5\uff08Least Connections\uff09")),(0,a.kt)("p",null,"\u52a8\u6001\u5730\u5c06\u7f51\u7edc\u8bf7\u6c42\u8c03\u5ea6\u5230\u5df2\u5efa\u7acb\u7684\u94fe\u63a5\u6570\u6700\u5c11\u7684\u670d\u52a1\u5668\u4e0a\u3002\u5982\u679c\u96c6\u7fa4\u7cfb\u7edf\u7684\u771f\u5b9e\u670d\u52a1\u5668\u5177\u6709\u76f8\u8fd1\u7684\u7cfb\u7edf\u6027\u80fd\uff0c\u91c7\u7528\u201c\u6700\u5c0f\u8fde\u63a5\u201d\u8c03\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u8f83\u597d\u5730\u5747\u8861\u8d1f\u8f7d\u3002",(0,a.kt)("strong",{parentName:"p"},"\u8c01\u4e0d\u5e72\u6d3b\u5c31\u7ed9\u8c01\u5206\u914d")),(0,a.kt)("p",null,"\u6b64\u79cd\u5747\u8861\u7b97\u6cd5\u9002\u5408\u957f\u8fde\u63a5\u5904\u7406\u7684\u8bf7\u6c42\u670d\u52a1\uff0c\u5982FTP\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"WLC\uff1a")," \u52a0\u6743\u6700\u5c11\u94fe\u63a5\uff08Weighted Least Connections\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u8c03\u5ea6\u65b9\u6cd5\u3002"),"\u5728\u96c6\u7fa4\u7cfb\u7edf\u4e2d\u7684\u670d\u52a1\u5668\u6027\u80fd\u5dee\u5f02\u8f83\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u8c03\u5ea6\u5668\u91c7\u7528\u6b64\u8c03\u5ea6\u7b97\u6cd5\u4f18\u5316\u8d1f\u8f7d\u5747\u8861\u6027\u80fd\uff0c\u5177\u6709\u8f83\u9ad8\u6743\u503c\u7684\u670d\u52a1\u5668\u5c06\u627f\u53d7\u8f83\u5927\u6bd4\u4f8b\u7684\u6d3b\u52a8\u8fde\u63a5\u8d1f\u8f7d\u3002\u8c03\u5ea6\u5668\u53ef\u4ee5\u81ea\u52a8\u95ee\u8be2\u771f\u5b9e\u670d\u52a1\u5668\u7684\u8d1f\u8f7d\u60c5\u51b5\uff0c\u5e76\u52a8\u6001\u5730\u8c03\u6574\u5176\u6743\u503c\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5e26\u6743\u91cd\u7684\u8c01\u4e0d\u5e72\u6d3b\u5c31\u7ed9\u8c01\u5206\u914d\uff0c"),"\u673a\u5668\u914d\u7f6e\u597d\u7684\u6743\u91cd\u9ad8"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SED:")," \u521d\u59cb\u8fde\u63a5\u9ad8\u6743\u91cd\u4f18\u5148\uff08Shortest Expected Delay Scheduling SED\uff09")),(0,a.kt)("p",null,"\u57fa\u4e8ewlc\u7b97\u6cd5\u3002\u4e00\u4e2a\u65b0\u7684\u521d\u59cb\u94fe\u63a5\u7684\u65f6\u5019\uff0c\u4f18\u5148\u5206\u914d\u6743\u91cd\u9ad8\u7684\u670d\u52a1\u5668\u3002\u7f3a\u9677\uff1a\u5f53\u6743\u91cd\u8fc7\u5927\u7684\u65f6\u5019\uff0c\u4f1a\u5bfc\u81f4\u7a7a\u95f2\u670d\u52a1\u5668\u4e00\u76f4\u5904\u4e8e\u65e0\u8fde\u63a5\u72b6\u6001"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"NQ:")," \u6700\u5c11\u961f\u5217\u8c03\u5ea6\uff08Never Queue Scheduling NQ\uff09")),(0,a.kt)("p",null,"\u7b2c\u4e00\u8f6e\u5747\u5300\u5206\u914d\uff0c\u540e\u7eedSED\u3002\u65e0\u9700\u961f\u5217\u3002\u5982\u679c\u6709\u53f0 RealServer\u7684\u8fde\u63a5\u6570\uff1d0 \u5c31\u76f4\u63a5\u5206\u914d\u8fc7\u53bb\uff0c\u4e0d\u9700\u8981\u518d\u8fdb\u884csed\u8fd0\u7b97\uff0c\u4fdd\u8bc1\u4e0d\u4f1a\u6709\u4e00\u4e2a\u4e3b\u673a\u5f88\u7a7a\u95f2\u3002\u4e0d\u8003\u8651\u975e\u6d3b\u52a8\u8fde\u63a5\uff0c\u624d\u7528NQ\uff0cSED\u8981\u8003\u8651\u6d3b\u52a8\u72b6\u6001\u8fde\u63a5\uff0c\u5bf9\u4e8eDNS\u7684UDP\u4e0d\u9700\u8981\u8003\u8651\u975e\u6d3b\u52a8\u8fde\u63a5\uff0c\u800chttpd\u7684\u5904\u4e8e\u4fdd\u6301\u72b6\u6001\u7684\u670d\u52a1\u5c31\u9700\u8981\u8003\u8651\u975e\u6d3b\u52a8\u8fde\u63a5\u7ed9\u670d\u52a1\u5668\u7684\u538b\u529b\u3002"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"LBLC:")," \u57fa\u4e8e\u5c40\u90e8\u6027\u7684\u6700\u5c11\u94fe\u63a5\uff08Locality-Based Least Connections\uff09")),(0,a.kt)("p",null,"\u52a8\u6001\u7684DH\u7b97\u6cd5\uff0c\u4f7f\u7528\u573a\u666f\uff1a\u6839\u636e\u8d1f\u8f7d\u72b6\u6001\u5b9e\u73b0\u6b63\u5411\u4ee3\u7406"),(0,a.kt)("p",null,"\u9488\u5bf9\u76ee\u6807IP\u5730\u5740\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u76ee\u524d\u4e3b\u8981\u7528\u4e8eCache\u96c6\u7fa4\u7cfb\u7edf\u3002\u8be5\u7b97\u6cd5\u6839\u636e\u8bf7\u6c42\u7684\u76ee\u6807IP\u5730\u5740\u627e\u51fa\u8be5\u76ee\u6807IP\u5730\u5740\u6700\u8fd1\u4f7f\u7528\u7684\u670d\u52a1\u5668\uff0c\u82e5\u8be5\u670d\u52a1\u5668\u662f\u53ef\u7528\u7684\u4e14\u6ca1\u6709\u8d85\u8f7d\uff0c\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u8be5\u670d\u52a1\u5668\uff1b\u82e5\u670d\u52a1\u5668\u4e0d\u5b58\u5728\uff0c\u6216\u8005\u8be5\u670d\u52a1\u5668\u8d85\u8f7d\u4e14\u6709\u670d\u52a1\u5668\u5904\u4e8e\u4e00\u534a\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5219\u7528\u201c\u6700\u5c11\u94fe\u63a5\u201d \u7684\u539f\u5219\u9009\u51fa\u4e00\u4e2a\u53ef\u7528\u7684\u670d\u52a1\u5668\uff0c\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u8be5\u670d\u52a1\u5668\u3002\u57fa\u4e8e\u672c\u5730\u7684\u6700\u5c0f\u8fde\u63a5\u3002\u628a\u8bf7\u6c42\u4f20\u9012\u5230\u8d1f\u8f7d\u5c0f\u7684\u670d\u52a1\u5668\u4e0a"),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"LBLCR:")," \u5e26\u590d\u5236\u7684\u57fa\u4e8e\u5c40\u90e8\u6027\u6700\u5c11\u94fe\u63a5\uff08Locality-Based Least Connections with Replication\uff09")),(0,a.kt)("p",null,"\u5e26\u590d\u5236\u529f\u80fd\u7684LBLC,",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3LBLC\u8d1f\u8f7d\u4e0d\u5747\u8861\u95ee\u9898"),"\uff0c\u4ece\u8d1f\u8f7d\u91cd\u7684\u590d\u5236\u5230\u8d1f\u8f7d\u8f7b\u7684RS\u3002"),(0,a.kt)("p",null,"\u9488\u5bf9\u76ee\u6807IP\u5730\u5740\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u76ee\u524d\u4e3b\u8981\u7528\u4e8eCache\u96c6\u7fa4\u7cfb\u7edf\u3002\u5b83\u4e0eLBLC\u7b97\u6cd5\u7684\u4e0d\u540c\u4e4b\u5904\u662f\u5b83\u8981\u7ef4\u62a4\u4ece\u4e00\u4e2a\u76ee\u6807 IP\u5730\u5740\u5230\u4e00\u7ec4\u670d\u52a1\u5668\u7684\u6620\u5c04\uff0c\u800cLBLC\u7b97\u6cd5\u7ef4\u62a4\u4ece\u4e00\u4e2a\u76ee\u6807IP\u5730\u5740\u5230\u4e00\u53f0\u670d\u52a1\u5668\u7684\u6620\u5c04\u3002\u8be5\u7b97\u6cd5\u6839\u636e\u8bf7\u6c42\u7684\u76ee\u6807IP\u5730\u5740\u627e\u51fa\u8be5\u76ee\u6807IP\u5730\u5740\u5bf9\u5e94\u7684\u670d\u52a1\u5668\u7ec4\uff0c\u6309\u201c\u6700\u5c0f\u8fde\u63a5\u201d\u539f\u5219\u4ece\u670d\u52a1\u5668\u7ec4\u4e2d\u9009\u51fa\u4e00\u53f0\u670d\u52a1\u5668\uff0c\u82e5\u670d\u52a1\u5668\u6ca1\u6709\u8d85\u8f7d\uff0c\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u8be5\u670d\u52a1\u5668\uff1b\u82e5\u670d\u52a1\u5668\u8d85\u8f7d\uff0c\u5219\u6309\u201c\u6700\u5c11\u94fe\u63a5\u201d\u539f\u5219\u4ece\u8fd9\u4e2a\u96c6\u7fa4\u4e2d\u9009\u51fa\u4e00\u53f0\u670d\u52a1\u5668\uff0c\u5c06\u8be5\u670d\u52a1\u5668\u52a0\u5165\u5230\u670d\u52a1\u5668\u7ec4\u4e2d\uff0c\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u8be5\u670d\u52a1\u5668\u3002\u540c\u65f6\uff0c\u5f53\u8be5\u670d\u52a1\u5668\u7ec4\u6709\u4e00\u6bb5\u65f6\u95f4\u6ca1\u6709\u88ab\u4fee\u6539\uff0c\u5c06\u6700\u5fd9\u7684\u670d\u52a1\u5668\u4ece\u670d\u52a1\u5668\u7ec4\u4e2d\u5220\u9664\uff0c\u4ee5\u964d\u4f4e\u590d\u5236\u7684\u7a0b\u5ea6\u3002"),(0,a.kt)("p",null,"\u67d0\u9875\u9762\u7f13\u5b58\u5728\u670d\u52a1\u5668A\u4e0a\uff0c\u88ab\u8bbf\u95ee\u6b21\u6570\u6781\u9ad8\uff0c\u800c\u5176\u4ed6\u7f13\u5b58\u670d\u52a1\u5668\u8d1f\u8f7d\u8f83\u4f4e\uff0c\u76d1\u89c6\u662f\u5426\u8bbf\u95ee\u540c\u4e00\u9875\u9762\uff0c\u5982\u679c\u662f\u8bbf\u95ee\u540c\u4e00\u9875\u9762\u5219\u628a\u8bf7\u6c42\u5206\u5230\u5176\u4ed6\u670d\u52a1\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u9762\u5217\u4e3e\u4e00\u4e9b\u9488\u5bf9\u4e0d\u540c\u73af\u5883\u4e2a\u4eba\u91c7\u7528\u7684\u6a21\u5f0f\u548c\u8c03\u5ea6\u7b97\u6cd5\uff1a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u7684",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u76f8\u540c"),"\uff0c\u800c\u4e14",(0,a.kt)("strong",{parentName:"p"},"\u53f0\u6570\u4e0d\u591a"),"\u7684\u8bdd"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528LVS\u4e09\u79cd\u6a21\u5f0f\u4e2d\u7684\u4efb\u610f\u4e00\u79cd\uff0c\u8c03\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u662fRR"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u7684",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u76f8\u540c"),"\uff0c\u4f46\u662f",(0,a.kt)("strong",{parentName:"p"},"\u53f0\u6570\u5f88\u591a"),"\u7684\u8bdd"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528LVS-DR\u6216\u8005LVS-TUN\u6a21\u5f0f\uff0c\u8c03\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u662fRR"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u7684",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u76f8\u540c"),"\uff0c\u4f46\u662f",(0,a.kt)("strong",{parentName:"p"},"\u53f0\u6570\u5f88\u591a")),(0,a.kt)("p",null,"\u800c\u4e14\u670d\u52a1\u5668\u5206\u5e03",(0,a.kt)("strong",{parentName:"p"},"\u5728\u4e0d\u540c\u7684\u5c40\u57df\u7f51"),"\u4e2d\uff0c\u90a3\u4e48\u4f7f\u7528LVS-TUN\u6a21\u5f0f\uff0c\u8c03\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u662fRR"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u7684",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e0d\u540c"),"\uff0c\u800c\u4e14",(0,a.kt)("strong",{parentName:"p"},"\u53f0\u6570\u4e0d\u591a"),"\u7684\u8bdd"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528LVS\u4e09\u79cd\u6a21\u5f0f\u4e2d\u7684\u4efb\u610f\u4e00\u79cd\uff0c\u8c03\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u662fWRR"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u7684",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e0d\u540c"),"\uff0c\u4f46\u662f",(0,a.kt)("strong",{parentName:"p"},"\u53f0\u6570\u5f88\u591a"),"\u7684\u8bdd"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528LVS-DR\u6216\u8005LVS-TUN\u6a21\u5f0f\uff0c\u8c03\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u662fWRR"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u7684",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e0d\u540c"),"\uff0c\u4f46\u662f",(0,a.kt)("strong",{parentName:"p"},"\u53f0\u6570\u5f88\u591a")),(0,a.kt)("p",null,"\u800c\u4e14\u670d\u52a1\u5668\u5206\u5e03",(0,a.kt)("strong",{parentName:"p"},"\u5728\u4e0d\u540c\u7684\u5c40\u57df\u7f51"),"\u4e2d\uff0c\u90a3\u4e48\u4f7f\u7528LVS-TUN\u6a21\u5f0f\uff0c\u8c03\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u662fWRR"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"7.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u4f7f\u7528\u4e86",(0,a.kt)("strong",{parentName:"p"},"cache\u7cfb\u7edf")),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528LVS-DR\u6216\u8005LVS-TUN\u6a21\u5f0f\uff0c\u8c03\u5ea6\u7b97\u6cd5\u53ef\u4ee5\u662fLBLC\u6216\u8005LBLCR"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"8.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u4f7f\u7528\u4e86",(0,a.kt)("strong",{parentName:"p"},"cache\u7cfb\u7edf"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e14\u67b6\u6784\u4f53\u7cfb\u5e9e\u5927"),"\uff0c\u4f7f\u7528LVS-TUN\u6a21\u5f0f\uff0c\u8c03\u5ea6\u7b97\u6cd5\u662fLBLCR"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u4e3a\u96c6\u7fa4\u4e14",(0,a.kt)("strong",{parentName:"p"},"\u6027\u80fd\u5dee\u5f02\u5927"),"\uff0c\u4f7f\u7528LVS-DR\u6216\u8005LVS-TUN\u6a21\u5f0f\uff0c\u8c03\u5ea6\u7b97\u6cd5\u91c7\u7528WLC"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"10.")," \u5982\u679c\u540e\u7aef\u670d\u52a1\u5668\u4e3a\u96c6\u7fa4\u4e14",(0,a.kt)("strong",{parentName:"p"},"\u6027\u80fd\u5dee\u5f02\u4e0d\u5927"),"\uff0c\u4f7f\u7528lvs/dr\u6216\u8005LVS-TUN\u6a21\u5f0f\uff0c\u8c03\u5ea6\u7b97\u6cd5\u91c7\u7528LC"))}k.isMDXComponent=!0}}]);