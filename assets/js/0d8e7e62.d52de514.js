"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[4311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),k=o,m=p["".concat(i,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},c="Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee",l={unversionedId:"CloudNative/Docker/Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee",id:"CloudNative/Docker/Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee",title:"Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee",description:"\u7531\u4e8e\u5bb9\u5668\u7684IP\u5730\u5740\u5728\u5bb9\u5668\u91cd\u542f\u4e4b\u540e\u4f1a\u5931\u6548\uff0c\u6240\u4ee5\u4e0d\u80fd\u5199\u6b7bIP\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u4e3b\u673a\u540d\u8fdb\u884c\u4e92\u76f8\u8bbf\u95ee\u3002",source:"@site/docs/CloudNative/Docker/Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee.md",sourceDirName:"CloudNative/Docker",slug:"/CloudNative/Docker/Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee",permalink:"/docs/CloudNative/Docker/Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/Docker/Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Docker \u56fa\u5b9aIP\u53ca\u8de8\u4e3b\u673a\u4e92\u901a",permalink:"/docs/CloudNative/Docker/Docker \u56fa\u5b9aIP\u53ca\u8de8\u4e3b\u673a\u4e92\u901a"},next:{title:"Docker \u6e05\u7406",permalink:"/docs/CloudNative/Docker/Docker \u6e05\u7406"}},i={},s=[{value:"1. \u4f7f\u7528<code>--link</code>\u53c2\u6570",id:"1-\u4f7f\u7528--link\u53c2\u6570",level:2},{value:"2. \u4f7f\u7528\u81ea\u5b9a\u4e49\u7f51\u6bb5",id:"2-\u4f7f\u7528\u81ea\u5b9a\u4e49\u7f51\u6bb5",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-\u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee"},"Docker \u5bb9\u5668\u95f4\u901a\u8fc7\u4e3b\u673a\u540d\u4e92\u76f8\u8bbf\u95ee"),(0,o.kt)("p",null,"\u7531\u4e8e\u5bb9\u5668\u7684IP\u5730\u5740\u5728\u5bb9\u5668\u91cd\u542f\u4e4b\u540e\u4f1a\u5931\u6548\uff0c\u6240\u4ee5\u4e0d\u80fd\u5199\u6b7bIP\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u4e3b\u673a\u540d\u8fdb\u884c\u4e92\u76f8\u8bbf\u95ee\u3002"),(0,o.kt)("h2",{id:"1-\u4f7f\u7528--link\u53c2\u6570"},"1. \u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"h2"},"--link"),"\u53c2\u6570"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"docker run --link\u53ef\u4ee5\u7528\u6765\u94fe\u63a52\u4e2a\u5bb9\u5668\uff0c\u4f7f\u5f97\u6e90\u5bb9\u5668\uff08\u88ab\u94fe\u63a5\u7684\u5bb9\u5668\uff09\u548c\u63a5\u6536\u5bb9\u5668\uff08\u4e3b\u52a8\u53bb\u94fe\u63a5\u7684\u5bb9\u5668\uff09\u4e4b\u95f4\u53ef\u4ee5\u4e92\u76f8\u901a\u4fe1\uff0c\u5e76\u4e14\u63a5\u6536\u5bb9\u5668\u53ef\u4ee5\u83b7\u53d6\u6e90\u5bb9\u5668\u7684\u4e00\u4e9b\u6570\u636e\uff0c\u5982\u6e90\u5bb9\u5668\u7684\u73af\u5883\u53d8\u91cf\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u5e76\u542f\u52a8\u540d\u4e3anginx_test\u7684\u5bb9\u5668\u3002\ndocker run -d --name nginx_test nginx\n# \u521b\u5efa\u5e76\u542f\u52a8\u540d\u4e3anode\u7684\u5bb9\u5668\uff0c\u5e76\u628a\u8be5\u5bb9\u5668\u548c\u540d\u4e3anginx\u7684\u5bb9\u5668\u94fe\u63a5\u8d77\u6765\u3002\ndocker run -itd --name node --link nginx_test:nginx centos:7 bash\n")),(0,o.kt)("h2",{id:"2-\u4f7f\u7528\u81ea\u5b9a\u4e49\u7f51\u6bb5"},"2. \u4f7f\u7528\u81ea\u5b9a\u4e49\u7f51\u6bb5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u7edc\ndocker network create my-net\n# \u67e5\u770b\u81ea\u5b9a\u4e49\u7f51\u7edc\u7684\u4e00\u4e9b\u5c5e\u6027\n# docker network inspect my-net\n# \u6700\u540e\u6307\u5b9a\u81ea\u5b9a\u4e49\u7684network\u5373\u53ef\u3002\ndocker run -it --name test1 --network my-net centos:7 bash\ndocker run -it --name test2 --network my-net centos:7 bash \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u7f51\u7edc\u548c\u81ea\u5b9a\u4e49\u7f51\u7edc\u533a\u522b")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"User-defined bridges provide automatic DNS resolution between containers"),".\nContainers on the default bridge network can only access each other by IP addresses, unless you use the --link option, which is considered legacy. On a user-defined bridge network, containers can resolve each other by name or alias.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," \u7ffb\u8bd1\u8fc7\u6765\u5927\u610f\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u5c31\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u7f51\u5361\u53ef\u4ee5\u5728\u5bb9\u5668\u4e4b\u95f4\u63d0\u4f9b\u81ea\u52a8\u7684 DNS \u89e3\u6790"),"\uff0c\u7f3a\u7701\u7684\u6865\u63a5\u7f51\u7edc\u4e0a\u7684\u5bb9\u5668\u53ea\u80fd\u901a\u8fc7 IP \u5730\u5740\u4e92\u76f8\u8bbf\u95ee\uff0c\u9664\u975e\u4f7f\u7528 --link \u53c2\u6570\u3002\u5728\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u7f51\u5361\u4e0a\uff0c\u5bb9\u5668\u76f4\u63a5\u53ef\u4ee5\u901a\u8fc7\u540d\u79f0\u6216\u8005\u522b\u540d\u76f8\u4e92\u89e3\u6790\u3002")),(0,o.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/moyu11111/article/details/120841853"},"https://blog.csdn.net/moyu11111/article/details/120841853"))))}d.isMDXComponent=!0}}]);