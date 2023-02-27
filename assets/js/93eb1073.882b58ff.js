"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[1313],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>c});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),o=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||h[c]||i;return a?t.createElement(k,l(l({ref:n},m),{},{components:a})):t.createElement(k,l({ref:n},m))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83667:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var t=a(87462),r=(a(67294),a(3905));const i={},l="varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e",p={unversionedId:"LinuxBasics/Cache/Varnish/varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e",id:"LinuxBasics/Cache/Varnish/varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e",title:"varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e",description:"[TOC]",source:"@site/docs/LinuxBasics/Cache/Varnish/varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e.md",sourceDirName:"LinuxBasics/Cache/Varnish",slug:"/LinuxBasics/Cache/Varnish/varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e",permalink:"/docs/LinuxBasics/Cache/Varnish/varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Cache/Varnish/varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"varnish \u53c2\u8003\u793a\u4f8b",permalink:"/docs/LinuxBasics/Cache/Varnish/varnish \u53c2\u8003\u793a\u4f8b"},next:{title:"DHCP-PXE-Cobbler",permalink:"/docs/category/dhcp-pxe-cobbler"}},s={},o=[{value:"\u7f13\u5b58HTTP\u5934\u90e8\u76f8\u5173\u4ecb\u7ecd",id:"\u7f13\u5b58http\u5934\u90e8\u76f8\u5173\u4ecb\u7ecd",level:2},{value:"varnish\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e",id:"varnish\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e",level:2},{value:"varnish\u5b98\u65b9\u67b6\u6784\u56fe",id:"varnish\u5b98\u65b9\u67b6\u6784\u56fe",level:3},{value:"varnish\u5de5\u4f5c\u6d41\u7a0b",id:"varnish\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"varnish\u5185\u5efa\u53d8\u91cf",id:"varnish\u5185\u5efa\u53d8\u91cf",level:2},{value:"varnish\u65e5\u5fd7(Shared memory log)",id:"varnish\u65e5\u5fd7shared-memory-log",level:2},{value:"varnishadm\u4ea4\u4e92\u5f0f\u914d\u7f6e",id:"varnishadm\u4ea4\u4e92\u5f0f\u914d\u7f6e",level:2},{value:"\u7b80\u5355\u914d\u7f6e \u53caOPTS\u4f18\u5316\u9009\u9879",id:"\u7b80\u5355\u914d\u7f6e-\u53caopts\u4f18\u5316\u9009\u9879",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],m={toc:o};function h(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"varnish-\u67b6\u6784\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e"},"varnish \u67b6\u6784\u3001\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e"),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("h2",{id:"\u7f13\u5b58http\u5934\u90e8\u76f8\u5173\u4ecb\u7ecd"},"\u7f13\u5b58HTTP\u5934\u90e8\u76f8\u5173\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u7f13\u5b58\u7c7b\u578b\uff1a\u4ee3\u7406\u5f0f\u7f13\u5b58\uff08\u9012\u5f52\u65b9\u5f0f\uff09\uff1b\u65c1\u6302\u5f0f\u7f13\u5b58\uff08\u8fed\u4ee3\uff09"),(0,r.kt)("p",null,"\u7f13\u5b58\u673a\u5236\uff1a\u8fc7\u671f\u673a\u5236\uff08Expires\uff09\u3001\u6761\u4ef6\u5f0f\u7f13\u5b58\uff08\u901a\u8fc7\u6700\u8fd1\u6587\u4ef6\u4fee\u6539\u65f6\u95f4\u6233\u6216Etag\u7684\u6269\u5c55\u6807\u7b7e\u6765\u8fa8\u522b\uff09\u3002"),(0,r.kt)("p",null,"\u8fc7\u671f\u65f6\u95f4\uff1aExpires\nHTTP/1.0\nExpires\uff1a\u8fc7\u671f\nHTTP/1.1\nCache-Control: max-age=  \uff08\u79c1\u6709\u7f13\u5b58\uff0c\u5355\u4f4d\u79d2\uff09\nCache-Control: s-maxage=  \uff08\u5171\u6709\u7f13\u5b58\uff09"),(0,r.kt)("p",null,"\u7f13\u5b58\u5c42\u7ea7\uff1a\n\u79c1\u6709\u7f13\u5b58\uff1a\u7528\u6237\u4ee3\u7406\u9644\u5e26\u7684\u672c\u5730\u7f13\u5b58\u673a\u5236\uff1b\n\u516c\u5171\u7f13\u5b58\uff1a\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u7684\u7f13\u5b58\u529f\u80fd\uff1b\n\u6761\u4ef6\u5f0f\u8bf7\u6c42\uff1a\nLast-Modified/If-Modified-Since\uff1a\u57fa\u4e8e\u6587\u4ef6\u7684\u4fee\u6539\u65f6\u95f4\u6233\u6765\n\u5224\u522b\uff1aEtag/If-None-Match\uff1a\u57fa\u4e8e\u6587\u4ef6\u7684\u6821\u9a8c\u7801\u6765\u5224\u522b\uff1b\nUser-Agent <--\x3e private cache <--\x3e public cache <--\x3e public cache 2 <--\x3e Original Server"),(0,r.kt)("h2",{id:"varnish\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e"},"varnish\u5de5\u4f5c\u539f\u7406\u53ca\u7b80\u5355\u914d\u7f6e"),(0,r.kt)("p",null,"Varnish\u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u7684\u5f00\u6e90HTTP\u52a0\u901f\u5668\uff0c\u5177\u6709",(0,r.kt)("strong",{parentName:"p"},"\u53cd\u5411\u4ee3\u7406"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7f13\u5b58"),"\u7684\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"varnish\u5b98\u65b9\u67b6\u6784\u56fe"},"varnish\u5b98\u65b9\u67b6\u6784\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/varnish/architecture.svg",alt:"varnish-arch"})),(0,r.kt)("p",null,"Varnish\u4e3b\u8981\u8fd0\u884c2\u4e2a\u8fdb\u7a0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Management"),"\u8fdb\u7a0b\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Child"),"\u8fdb\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Management\u8fdb\u7a0b"),"\uff1a\u4e3b\u8981\u5b9e\u73b0\u5e94\u7528\u65b0\u7684\u914d\u7f6e\u3001\u7f16\u8bd1VCL\u3001\u76d1\u63a7varnish\u3001\u521d\u59cb\u5316varnish\u4ee5\u53ca\u63d0\u4f9b\u4e00\u4e2a\u547d\u4ee4\u884c\u63a5\u53e3\u7b49\u3002Management\u8fdb\u7a0b\u4f1a\u6bcf\u9694\u51e0\u79d2\u949f\u63a2\u6d4b\u4e00\u4e0bChild\u8fdb\u7a0b\u4ee5\u5224\u65ad\u5176\u662f\u5426\u6b63\u5e38\u8fd0\u884c\uff0c\u5982\u679c\u5728\u6307\u5b9a\u7684\u65f6\u957f\u5185\u672a\u5f97\u5230Child\u8fdb\u7a0b\u7684\u56de\u5e94\uff0cManagement\u5c06\u4f1a\u91cd\u542f\u6b64Child\u8fdb\u7a0b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Child\u8fdb\u7a0b"),"\uff1a\u4e3b\u8981\u662f\u76d1\u542c\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u7ba1\u7406worker\u7ebf\u7a0b\uff0c\u5efa\u7acb\u7f13\u5b58\uff0c\u66f4\u65b0\u7edf\u8ba1\u8ba1\u6570\u5668\u548c\u8bb0\u5f55\u6d41\u91cf")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VCL"),"\uff08Varnish Configuration Language\uff09\u662fvarnish\u914d\u7f6e\u7f13\u5b58\u7b56\u7565\u7684\u5de5\u5177\uff0c\u62e5\u6709\u5b83\u81ea\u5df1\u72ec\u7acb\u7684\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\u3002\u5728\u7b56\u7565\u542f\u52a8\u524d\uff0c\u4f1a\u7531Management\u8fdb\u7a0b\u8f6c\u6362\u4e3ac\u4ee3\u7801\uff08\u5229\u7528VCC\uff0c\u5c06VCL\u8f6c\u6362\u6210C\u7684\u7f16\u8bd1\u5668\uff09\uff0c\u7136\u540e\u901a\u8fc7gcc\u7f16\u8bd1\u5668\u7f16\u8bd1\u62102\u8fdb\u5236\u7a0b\u5e8f\u3002\u7f16\u8bd1\u5b8c\u6210\u540eManagement\u8d1f\u8d23\u5c06\u5176\u8fde\u63a5\u5230child\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u5728varnish\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u52a8\u6001\u5207\u6362\u7f13\u5b58\u7b56\u7565\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shared memory log"),"\uff08\u5171\u4eab\u5185\u5b58\u65e5\u5fd7\uff09\u4e3a\u4e86\u4e0e\u7cfb\u7edf\u7684\u5176\u5b83\u90e8\u5206\u8fdb\u884c\u4ea4\u4e92\uff0cChild\u8fdb\u7a0b\u4f7f\u7528\u4e86\u53ef\u4ee5\u901a\u8fc7\u6587\u4ef6\u7cfb\u7edf\u63a5\u53e3\u8fdb\u884c\u8bbf\u95ee\u7684\u5171\u4eab\u5185\u5b58\u65e5\u5fd7\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u67d0\u7ebf\u7a0b\u9700\u8981\u8bb0\u5f55\u4fe1\u606f\uff0c\u5176\u4ec5\u9700\u8981\u6301\u6709\u4e00\u4e2a\u9501\uff0c\u800c\u540e\u5411\u5171\u4eab\u5185\u5b58\u4e2d\u7684\u67d0\u5185\u5b58\u533a\u57df\u5199\u5165\u6570\u636e\uff0c\u518d\u91ca\u653e\u6301\u6709\u7684\u9501\u5373\u53ef\u3002\u800c\u4e3a\u4e86\u51cf\u5c11\u7ade\u4e89\uff0c\u6bcf\u4e2aworker\u7ebf\u7a0b\u90fd\u4f7f\u7528\u4e86\u65e5\u5fd7\u6570\u636e\u7f13\u5b58\u3002\n\u5171\u4eab\u5185\u5b58\u65e5\u5fd7\u5927\u5c0f\u4e00\u822c\u4e3a90M\uff0c\u5176\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u524d\u4e00\u90e8\u5206\u4e3a\u8ba1\u6570\u5668\uff0c\u540e\u534a\u90e8\u5206\u4e3a\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u6570\u636e\u3002varnish\u63d0\u4f9b\u4e86\u591a\u4e2a\u4e0d\u540c\u7684\u5de5\u5177\u5982varnishlog\u3001varnishncsa\u6216varnishstat\u7b49\u6765\u5206\u6790\u5171\u4eab\u5185\u5b58\u65e5\u5fd7\u4e2d\u7684\u4fe1\u606f\u5e76\u80fd\u591f\u4ee5\u6307\u5b9a\u7684\u65b9\u5f0f\u8fdb\u884c\u663e\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"varnishadm"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"vagent2"),"\u662f\u7ba1\u7406Management\u7684\u4e00\u4e2a\u7ba1\u7406\u63a5\u53e3"),(0,r.kt)("h3",{id:"varnish\u5de5\u4f5c\u6d41\u7a0b"},"varnish\u5de5\u4f5c\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/varnish/varnish-02.png",alt:"varnish02"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_recv\u51fd\u6570"),"\uff1a\u5728Varnish\u5b8c\u6210\u5bf9\u8bf7\u6c42\u62a5\u6587\u7684\u89e3\u7801\u4e3a\u57fa\u672c\u6570\u636e\u7ed3\u6784\u540e\u7b2c\u4e00\u4e2a\u8981\u6267\u884c\u7684\u5b50\u4f8b\u7a0b\uff0c\u5b83\u901a\u5e38\u6709\u56db\u4e2a\u4e3b\u8981\u7528\u9014\uff1a1.\u4fee\u6539\u5ba2\u6237\u7aef\u6570\u636e\u4ee5\u51cf\u5c11\u7f13\u5b58\u5bf9\u8c61\u5dee\u5f02\u6027\uff1b\u6bd4\u5982\u5220\u9664URL\u4e2d\u7684www.\u7b49\u5b57\u7b26\uff1b2.\u57fa\u4e8e\u5ba2\u6237\u7aef\u6570\u636e\u9009\u7528\u7f13\u5b58\u7b56\u7565\uff1b\u6bd4\u5982\u4ec5\u7f13\u5b58\u7279\u5b9a\u7684URL\u8bf7\u6c42\u3001\u4e0d\u7f13\u5b58POST\u8bf7\u6c42\u7b49\uff1b3.\u4e3a\u67d0web\u5e94\u7528\u7a0b\u5e8f\u6267\u884cURL\u91cd\u5199\u89c4\u5219\uff1b 4.\u6311\u9009\u5408\u9002\u7684\u540e\u7aefWeb\u670d\u52a1\u5668\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_hash\u51fd\u6570"),"\uff1a\u9ed8\u8ba4VCL\u5c06\u4e3b\u673a\u540d\u6216IP\u5730\u5740\u4ee5\u53ca\u8bf7\u6c42\u7684URL\u8fdb\u884chash"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_hit\u51fd\u6570"),"\uff1a\u5728\u7f13\u5b58\u4e2d\u627e\u5230\u8bf7\u6c42\u7684\u5185\u5bb9\u540e\u5c06\u81ea\u52a8\u8c03\u7528\u8be5\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_pass\u51fd\u6570"),"\uff1a\u6b64\u51fd\u6570\u5728\u8fdb\u5165pass\u6a21\u5f0f\u65f6\u88ab\u8c03\u7528\uff0c\u7528\u6237\u5c06\u8bf7\u6c42\u76f4\u63a5\u4f20\u9012\u81f3\u540e\u7aef\u4e3b\u673a\u3002\u540e\u7aef\u4e3b\u673a\u5728\u5e94\u7b54\u6570\u636e\u540e\u5c06\u5e94\u7b54\u6570\u636e\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\uff0c\u4f46\u4e0d\u8fdb\u884c\u4efb\u4f55\u7f13\u5b58\uff0c\u5728\u5f53\u524d\u94fe\u63a5\u4e0b\u6bcf\u6b21\u90fd\u8fd4\u56de\u6700\u65b0\u7684\u5185\u5bb9\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_miss\u51fd\u6570"),"\uff1a\u5728\u7f13\u5b58\u4e2d\u6ca1\u6709\u627e\u5230\u8bf7\u6c42\u7684\u5185\u5bb9\u65f6\u81ea\u52a8\u8c03\u7528\u8be5\u65b9\u6cd5\u3002\u6b64\u51fd\u6570\u53ef\u7528\u4e8e\u5224\u65ad\u662f\u5426\u9700\u8981\u4ece\u540e\u7aef\u670d\u52a1\u5668\u83b7\u53d6\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_purge\u51fd\u6570"),"\uff1a\u79fb\u9664\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_pipe\u51fd\u6570"),"\uff1a\u8fdb\u5165pipe\u6a21\u5f0f\u65f6\uff0c\u7528\u6237\u5c06",(0,r.kt)("strong",{parentName:"li"},"\u8bf7\u6c42\u76f4\u63a5\u4f20\u9012\u81f3\u540e\u7aef\u4e3b\u673a"),"\uff0c\u5728\u8bf7\u6c42\u548c\u8fd4\u56de\u7684\u5185\u5bb9\u6ca1\u6709\u6539\u53d8\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u4e0d\u53d8\u7684\u5185\u5bb9\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff0c\u76f4\u5230\u8fd9\u4e2a\u94fe\u63a5\u88ab\u5173\u95ed\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_backend_fetch\u51fd\u6570"),"\uff1a\u53ef\u80fd\u662f\u88abvcl_miss\u6216\u8005vcl_pass\u8c03\u7528\u3002\u5982\u679c\u662f\u88abvcl_miss\u51fd\u6570\uff1a\u8c03\u7528\u5219\u6240\u83b7\u53d6\u7684\u5bf9\u8c61\u4f1a\u88ab\u7f13\u5b58\uff0c\u5982\u679c\u662f\u88abvcl_pass\u8c03\u7528\u5219\u83b7\u53d6\u7684\u5bf9\u8c61\u4e0d\u4f1a\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_deliver\u51fd\u6570"),"\uff1a\u5c06\u5728\u7f13\u5b58\u4e2d\u627e\u5230\u8bf7\u6c42\u7684\u5185\u5bb9\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u524d\u8c03\u7528\u6b64\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vcl_synth\u51fd\u6570"),"\uff1a\u521b\u5efa\u5408\u6210\u54cd\u5e94\uff0c\u4f8b\u5982\u4e2a\u6027\u5316\u5b9a\u5236\u9519\u8bef\u6d88\u606f\uff0c\u8981\u8c03\u7528\u6b64\u51fd\u6570")),(0,r.kt)("p",null,"actions\u6709\u4ee5\u4e0b\u51e0\u79cd:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pass"),"\uff1a\u5f53\u4e00\u4e2a\u8bf7\u6c42\u88ab pass \u540e,\u8fd9\u4e2a\u8bf7\u6c42\u5c06\u901a\u8fc7 varnish \u8f6c\u53d1\u5230\u540e\u7aef\u670d\u52a1\u5668,\n\u4f46\u662f\u5b83\u4e0d\u4f1a\u88ab\u7f13\u5b58\u3002pass \u53ef\u4ee5\u653e\u5728 vcl_recv \u548c vcl_fetch \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lookup"),"\uff1a\u5f53\u4e00\u4e2a\u8bf7\u6c42\u5728 vcl_recv \u4e2d\u88ab lookup \u540e,varnish \u5c06\u4ece\u7f13\u5b58\u4e2d\u63d0\u53d6\u6570\n\u636e,\u5982\u679c\u7f13\u5b58\u4e2d\u6ca1\u6709\u6570\u636e,\u5c06\u88ab\u8bbe\u7f6e\u4e3a pass,\u4e0d\u80fd\u5728 vcl_fetch \u4e2d\u8bbe\u7f6e lookup\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pipe"),"\uff1apipe \u548c pass \u76f8\u4f3c,\u90fd\u8981\u8bbf\u95ee\u540e\u7aef\u670d\u52a1\u5668,\u4e0d\u8fc7\u5f53\u8fdb\u5165 pipe \u6a21\u5f0f\u540e,\u5728\n\u6b64\u8fde\u63a5\u672a\u5173\u95ed\u524d,\u540e\u7eed\u7684\u6240\u6709\u8bf7\u6c42\u90fd\u53d1\u5230\u540e\u7aef\u670d\u52a1\u5668"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deliver"),"\uff1a\u8bf7\u6c42\u7684\u76ee\u6807\u88ab\u7f13\u5b58,\u7136\u540e\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef")),(0,r.kt)("p",null,"3\u4e2a\u91cd\u8981\u7684\u6570\u636e\u7ed3\u6784\uff1aRequests\u3001Responses \u3001 objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"req"),"\uff1a\u8bf7\u6c42\u76ee\u6807,\u5f53 varnish \u63a5\u6536\u5230\u4e00\u4e2a\u8bf7\u6c42,\u8fd9\u65f6 req object \u5c31\u88ab\u521b\u5efa\u4e86,\n\u4f60\u5728 vcl_recv \u4e2d\u7684\u5927\u90e8\u5206\u5de5\u4f5c,\u90fd\u662f\u5728 req object \u4e0a\u5c55\u5f00\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beresp"),"\uff1a\u540e\u7aef\u670d\u52a1\u5668\u8fd4\u56de\u7684\u76ee\u6807,\u5b83\u5305\u542b\u8fd4\u56de\u7684\u5934\u4fe1\u606f,\u4f60\u5728 vcl_fetch \u4e2d\u7684\u5927\u90e8\u5206\u5de5\u4f5c\u90fd\u662f\u5728 beresp object \u4e0a\u5f00\u5c55\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"obj"),"\uff1a\u88ab cache \u7684\u76ee\u6807,\u53ea\u8bfb\u7684\u76ee\u6807\u88ab\u4fdd\u5b58\u4e8e\u5185\u5b58\u4e2d,obj.ttl \u7684\u503c\u53ef\u4fee\u6539,\u5176\u4ed6\u7684\u53ea\u80fd\u8bfb\u3002")),(0,r.kt)("h2",{id:"varnish\u5185\u5efa\u53d8\u91cf"},"varnish\u5185\u5efa\u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xb7req.*\uff1arequest\uff0c\u8868\u793a\u7531\u5ba2\u6237\u7aef\u53d1\u6765\u7684\u8bf7\u6c42\u62a5\u6587\u76f8\u5173\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\xb7bereq."),"\uff1a\u7531varnish\u53d1\u5f80BE\u4e3b\u673a\u7684httpd\u8bf7\u6c42\u76f8\u5173\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\xb7beresp.*\uff1a\u7531BE\u4e3b\u673a\u54cd\u5e94\u7ed9varnish\u7684\u54cd\u5e94\u62a5\u6587\u76f8\u5173\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\xb7resp."),"\uff1a\u7531varnish\u54cd\u5e94\u7ed9client\u76f8\u5173\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\xb7obj.*\uff1a\u5b58\u50a8\u5728\u7f13\u5b58\u7a7a\u95f4\u4e2d\u7684\u7f13\u5b58\u5bf9\u8c61\u7684\u5c5e\u6027\uff1b\u53ea\u8bfb\uff1b")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e38\u7528\u53d8\u91cf\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xb7bereq.",(0,r.kt)("em",{parentName:"li"},", req."),"\uff1a\nbereq.http.HEADERS\nbereq.request\uff1a\u8bf7\u6c42\u65b9\u6cd5\uff1b\nbereq.url\uff1a\u8bf7\u6c42\u7684url\uff1b\nbereq.proto\uff1a\u8bf7\u6c42\u7684\u534f\u8bae\u7248\u672c\uff1b\nbereq.backend\uff1a\u6307\u660e\u8981\u8c03\u7528\u7684\u540e\u7aef\u4e3b\u673a\uff1b\nreq.http.Cookie\uff1a\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u62a5\u6587\u4e2dCookie\u9996\u90e8\u7684\u503c\uff1b\nreq.http.User-Agent ~ \u201cchrome\u201d"),(0,r.kt)("li",{parentName:"ul"},"\xb7beresp.",(0,r.kt)("em",{parentName:"li"},", resp."),"\uff1a\nberesp.http.HEADERS\nberesp.status\uff1a\u54cd\u5e94\u7684\u72b6\u6001\u7801\uff1b\nreresp.proto\uff1a\u534f\u8bae\u7248\u672c\uff1b\nberesp.backend.name\uff1aBE\u4e3b\u673a\u7684\u4e3b\u673a\u540d\uff1b\nberesp.ttl\uff1aBE\u4e3b\u673a\u54cd\u5e94\u7684\u5185\u5bb9\u7684\u4f59\u4e0b\u7684\u53ef\u7f13\u5b58\u65f6\u957f\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\xb7obj.*\nobj.hits\uff1a\u6b64\u5bf9\u8c61\u4ece\u7f13\u5b58\u4e2d\u547d\u4e2d\u7684\u6b21\u6570\uff1b\nobj.ttl\uff1a\u5bf9\u8c61\u7684ttl\u503c"),(0,r.kt)("li",{parentName:"ul"},"\xb7server.*\nserver.ip\nserver.hostname"),(0,r.kt)("li",{parentName:"ul"},"\xb7client.*\nclient.ip")),(0,r.kt)("h2",{id:"varnish\u65e5\u5fd7shared-memory-log"},"varnish\u65e5\u5fd7(Shared memory log)"),(0,r.kt)("p",null,"\u663e\u793a\u8be6\u7ec6\u65e5\u5fd7\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"varnishlog"),":\u7528\u4e8e\u8bbf\u95ee\u7279\u5b9a\u7684\u6570\u636e\uff0c\u5b83\u63d0\u4f9b\u4e86\u7279\u5b9a\u5ba2\u6237\u7684\u4fe1\u606f\u548c\u8981\u6c42\u3002\t \t",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"varnishlog"),"\u53ef\u4ee5\u8fd0\u884c\u4e3a\u5b88\u62a4\u8fdb\u7a0b,\u5c06\u65e5\u5fd7\u4fdd\u5b58\u5230\u6587\u4ef6\u5f53\u4e2d\u53bb"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"varnishncsa"),":\u4ee5NCSA\u901a\u7528\u65e5\u5fd7\u683c\u5f0f\u663e\u793avarnish\u8bbf\u95ee\u65e5\u5fd7\u3002\t \t"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"varnishtest"),":\u5141\u8bb8\u663e\u793a\u6d4b\u8bd5\u4e2d\u7684\u65e5\u5fd7\u8bb0\u5f55\u548c\u8ba1\u6570\u5668\u3002\t ")),(0,r.kt)("p",null,"\u7edf\u8ba1\u5de5\u5177\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"varnishstat"),":\u7528\u4e8e\u8bbf\u95ee\u5168\u5c40\u8ba1\u6570\u5668\uff0c\u4e0d\u8bfb\u53d6varnish\u65e5\u5fd7\u4e2d\u7684\u6761\u76ee\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-1"),":\u4e00\u6b21\u6027\u8f93\u51fa,\u975e\u6301\u7eed\u6027\u8f93\u51fa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),":\u6307\u5b9a\u8f93\u51fa\u7684\u5b57\u6bb5\u540d\u79f0\u5217\u8868,\u5982\u82e5\u67e5\u770b\u591a\u4e2a\u5b57\u6bb5,\u9700\u8981\u6dfb\u52a0\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"-f"),"\u53c2\u6570"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"varnishtop"),":\u8bfb\u53d6Varnish\u65e5\u5fd7\u5e76\u5448\u73b0\u6700\u5e38\u51fa\u73b0\u7684\u65e5\u5fd7\u6761\u76ee\u7684\u4e0d\u65ad\u66f4\u65b0\u7684\u5217\u8868\u3002\t \t",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-1"),":\u4e00\u6b21\u6027\u8f93\u51fa,\u975e\u6301\u7eed\u6027\u8f93\u51fa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i <taglist>"),":\u67e5\u770b\u6307\u5b9a\u5b57\u6bb5,\u5982\u82e5\u67e5\u770b\u591a\u4e2a\u5b57\u6bb5,\u9700\u8981\u6dfb\u52a0\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"-i"),"\u53c2\u6570,\u53e6,",(0,r.kt)("inlineCode",{parentName:"li"},"-I <[taglist:]regex>"),"\u53ef\u4ee5\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u8fdb\u884c\u5339\u914d\u7b5b\u9009"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-x <taglist>"),",\u7528\u6cd5\u540c",(0,r.kt)("inlineCode",{parentName:"li"},"-i"),"\u9009\u9879,\u5c06\u67d0\u4e2a\u5b57\u6bb5\u6392\u9664\u5728\u5916,",(0,r.kt)("inlineCode",{parentName:"li"},"-X"),"\u8868\u793a\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"varnishhist"),":\u8bfb\u53d6Varnish\u65e5\u5fd7\uff0c\u5e76\u663e\u793a\u4e00\u4e2a\u8fde\u7eed\u66f4\u65b0\u7684\u76f4\u65b9\u56fe\uff0c\u663e\u793a\u6700\u540eN\u4e2a\u8bf7\u6c42\u7684\u5904\u7406\u5206\u5e03\u60c5\u51b5\u3002\t")),(0,r.kt)("h2",{id:"varnishadm\u4ea4\u4e92\u5f0f\u914d\u7f6e"},"varnishadm\u4ea4\u4e92\u5f0f\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u767b\u5f55\uff1a\n    -S /etc/varnish/secret -T 127.0.0.1:80\n\u914d\u7f6e\u6587\u4ef6\u76f8\u5173\uff1a\n    vcl.list \uff1a\u72b6\u6001\u5f15\u64ce\u5217\u8868\uff1b\n    vcl.load\uff1a\u88c5\u8f7d\uff0c\u52a0\u8f7d\u5e76\u7f16\u8bd1\uff1b\n    vcl.use\uff1a\u6fc0\u6d3b\uff1b\n    vcl.discard\uff1a\u5220\u9664\uff1b\n    vcl.show [-v] <configname>\uff1a\u67e5\u770b\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u770b\u9ed8\u8ba4\u914d\u7f6e\uff1b\n\u8fd0\u884c\u65f6\u53c2\u6570\uff1a\n    param.show -l\uff1a\u663e\u793a\u5217\u8868\uff1b\n    param.show <PARAM>\n    param.set <PARAM> <VALUE>\n\u7f13\u5b58\u5b58\u50a8\uff1a\n    storage.list\n\u540e\u7aef\u670d\u52a1\u5668\uff1a\n    backend.list\n")),(0,r.kt)("p",null,"\u9664\u4e86\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"varnishadm"),"\u6765\u7f16\u8bd1\u6fc0\u6d3bvcl\u5916,\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"varnish_reload_vcl"),"\u6765\u4e00\u6b21\u6027\u5b8c\u6210."),(0,r.kt)("h2",{id:"\u7b80\u5355\u914d\u7f6e-\u53caopts\u4f18\u5316\u9009\u9879"},"\u7b80\u5355\u914d\u7f6e \u53caOPTS\u4f18\u5316\u9009\u9879"),(0,r.kt)("p",null,"varnish \u5b89\u88c5\u5b8c\u6bd5\u4e4b\u540e\u4f1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/varnish"),"\u751f\u6210\u4e24\u4e2a\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/varnish\n\u251c\u2500\u2500 default.vcl         # \u914d\u7f6e\u5404Child/Cache\u7ebf\u7a0b\u7684\u7f13\u5b58\u7b56\u7565\uff1b\n\u251c\u2500\u2500 secret          # varnish\u8fde\u63a5\u65f6\u7684\u5b89\u5168\u79d8\u94a5\u6587\u4ef6\n\u2514\u2500\u2500 varnish.params      # \u914d\u7f6evarnish\u670d\u52a1\u8fdb\u7a0b\u7684\u5de5\u4f5c\u7279\u6027\uff0c\u4f8b\u5982\u76d1\u542c\u7684\u5730\u5740\u548c\u7aef\u53e3\uff0c\u7f13\u5b58\u673a\u5236\uff1b\n\n0 directories, 3 files\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"varnish.params"),"\u4e3b\u8981\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'VARNISH_VCL_CONF=/etc/varnish/default.vcl       # VCL \u914d\u7f6e\u6587\u4ef6\u8def\u5f84\n\nVARNISH_LISTEN_PORT=80          # \u76d1\u542c\u7aef\u53e3\n\nVARNISH_ADMIN_LISTEN_ADDRESS=127.0.0.1      # varnish-admin\u76d1\u542c\u5730\u5740\u53ca\u7aef\u53e3\nVARNISH_ADMIN_LISTEN_PORT=6082\n\n# Shared secret file for admin interface\nVARNISH_SECRET_FILE=/etc/varnish/secret     # \u7ba1\u7406\u5458\u79d8\u94a5\n\n# VARNISH_STORAGE="malloc,256M"\nVARNISH_STORAGE="file,/data/varnish/cache,1g"       # varnish\u5b58\u50a8\u6a21\u5f0f\n\n# User and group for the varnishd worker processes\nVARNISH_USER=varnish\nVARNISH_GROUP=varnish\n\n# Other options, see the man page varnishd(1)\n#DAEMON_OPTS="-p thread_pool_min=5 -p thread_pool_max=500 -p thread_pool_timeout=300"\nDAEMON_OPTS=\u201d-p thread_pools=6 -p thread_pool_min=5 -p thread_pool_max=500 -p thread_pool_timeout=300\u2033\n')),(0,r.kt)("p",null,"varnish\u7684\u7f13\u5b58\u5b58\u50a8\u673a\u5236( Storage Types)\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"malloc[,size]  "),"    \u5185\u5b58\u5b58\u50a8\uff0c","[,size]","\u7528\u4e8e\u5b9a\u4e49\u7a7a\u95f4\u5927\u5c0f\uff1b\u91cd\u542f\u540e\u6240\u6709\u7f13\u5b58\u9879\u5931\u6548\uff1b\u4e00\u822c4G\u8f83\u5408\u9002\uff0c\u5185\u5b58\u7a7a\u95f4\u6709\u9650\uff0c\u4e14\u5185\u5b58\u788e\u7247\u4f1a\u5927\u5927\u5f71\u54cd\u6027\u80fd\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file[,path[,size[,granularity]]]\u3000"),"\u78c1\u76d8\u6587\u4ef6\u5b58\u50a8\uff0c\u9ed1\u76d2\uff1b\u91cd\u542f\u540e\u6240\u6709\u7f13\u5b58\u9879\u5931\u6548\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"persistent,path,size\u3000"),"\u6587\u4ef6\u5b58\u50a8\uff0c\u9ed1\u76d2\uff1b\u91cd\u542f\u540e\u6240\u6709\u7f13\u5b58\u9879\u6709\u6548\uff1b\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"5.2.0"),"\u7248\u672c\u4e3a\u5b9e\u9a8c\u72b6\u6001,",(0,r.kt)("inlineCode",{parentName:"li"},"6.4.0"),"\u7248\u672c\u5b98\u65b9\u4e0d\u63a8\u8350\u8be5\u6a21\u5f0f\uff1b")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DAEMON_OPTS\u9644\u52a0\u9009\u9879:")),(0,r.kt)("p",null,"\u5728\u7ebf\u7a0b\u6c60\u5185\u90e8\uff0c\u5176\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u7531\u4e00\u4e2a\u7ebf\u7a0b\u6765\u5904\u7406\uff1b \u5176worker\u7ebf\u7a0b\u7684\u6700\u5927\u6570\u51b3\u5b9a\u4e86varnish\u7684\u5e76\u53d1\u54cd\u5e94\u80fd\u529b\uff1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_pools"),"\uff1aNumber of worker thread pools. \u6700\u597d\u5c0f\u4e8e\u6216\u7b49\u4e8eCPU\u6838\u5fc3\u6570\u91cf\uff1b "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_pool_max"),"\uff1a \u6bcf\u7ebf\u7a0b\u6c60\u7684\u6700\u5927\u7ebf\u7a0b\u6570\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_pool_min"),"\uff1aThe minimum number of worker threads in each pool. \u989d\u5916\u610f\u4e49\u4e3a\u201c\u6700\u5927\u7a7a\u95f2\u7ebf\u7a0b\u6570\u201d\uff1b\n\u6700\u5927\u5e76\u53d1\u8fde\u63a5\u6570 = ",(0,r.kt)("strong",{parentName:"li"},"thread_pools * thread_pool_max")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_pool_timeout"),"\uff1aThread idle threshold. Threads inexcess of thread_pool_min, which have been idle for at least this long,\u7ebf\u7a0b\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"thread_pool_add_delay\uff1a\u65b0\u521b\u5efa\u7ebf\u7a0b\u7684\u5ef6\u8fdf\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"thread_pool_destroy_delay\uff1a\u6740\u6b7b\u7a7a\u95f2\u7ebf\u7a0b\u5ef6\u8fdf\u65f6\u95f4,\u4e5f\u5c31\u662f\u6467\u6bc1\u4e4b\u524d\u9700\u8981\u72b9\u8c6b\u4e00\u4e0b\uff0c\u8fd9\u4e2a\u72b9\u8c6b\u7684\u65f6\u95f4")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Timer\u76f8\u5173\u7684\u53c2\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"send_timeout\uff1a\u8bbe\u7f6e\u5ba2\u6237\u7aef\u94fe\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\ntimeout_idle\uff1a\u8bbe\u7f6e\u4fdd\u6301\u94fe\u63a5\u7684\u7a7a\u95f2\u65f6\u957f\uff0c\u7ecf\u5e38\u9700\u8981\uff01\uff01\ntimeout_req\uff1a\u63a5\u6536\u5ba2\u6237\u7aef\u8bf7\u6c42\u62a5\u6587\u9996\u90e8\u7684\u6700\u957f\u65f6\u95f4\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"varnish\u5b98\u65b9\u6587\u6863:",(0,r.kt)("a",{parentName:"li",href:"https://www.varnish-cache.org/"},"https://www.varnish-cache.org/"))))}h.isMDXComponent=!0}}]);