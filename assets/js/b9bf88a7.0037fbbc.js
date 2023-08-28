"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[4450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=o(n),m=a,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||l;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var o=2;o<l;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},10267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={},p="Ceph RGW",s={unversionedId:"LinuxBasics/FileSystem/Ceph/Ceph RGW",id:"LinuxBasics/FileSystem/Ceph/Ceph RGW",title:"Ceph RGW",description:"Ceph RGW \u67b6\u6784\u7b80\u4ecb",source:"@site/docs/LinuxBasics/FileSystem/Ceph/Ceph RGW.md",sourceDirName:"LinuxBasics/FileSystem/Ceph",slug:"/LinuxBasics/FileSystem/Ceph/Ceph RGW",permalink:"/docs/LinuxBasics/FileSystem/Ceph/Ceph RGW",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/FileSystem/Ceph/Ceph RGW.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Ceph Manager Dashboar",permalink:"/docs/LinuxBasics/FileSystem/Ceph/Ceph Manager Dashboard"},next:{title:"Ceph- eploy \u96c6\u7fa4\u5feb\u901f\u90e8\u7f72",permalink:"/docs/LinuxBasics/FileSystem/Ceph/Ceph-deploy \u96c6\u7fa4\u5feb\u901f\u90e8\u7f72"}},i={},o=[{value:"Ceph RGW \u67b6\u6784\u7b80\u4ecb",id:"ceph-rgw-\u67b6\u6784\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5Ceph\u5bf9\u8c61\u5b58\u50a8\u7f51\u5173",id:"\u5b89\u88c5ceph\u5bf9\u8c61\u5b58\u50a8\u7f51\u5173",level:2},{value:"\u521b\u5efaRGW\u5b9e\u4f8b",id:"\u521b\u5efargw\u5b9e\u4f8b",level:2},{value:"\u9a8c\u8bc1\u5bf9\u8c61\u5b58\u50a8",id:"\u9a8c\u8bc1\u5bf9\u8c61\u5b58\u50a8",level:2},{value:"\u521b\u5efa\u7528\u6237\u4ee5\u4f7f\u7528\u5bf9\u8c61\u5b58\u50a8",id:"\u521b\u5efa\u7528\u6237\u4ee5\u4f7f\u7528\u5bf9\u8c61\u5b58\u50a8",level:2},{value:"\u521b\u5efa\u5b50\u7528\u6237",id:"\u521b\u5efa\u5b50\u7528\u6237",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ceph-rgw"},"Ceph RGW"),(0,a.kt)("h2",{id:"ceph-rgw-\u67b6\u6784\u7b80\u4ecb"},"Ceph RGW \u67b6\u6784\u7b80\u4ecb"),(0,a.kt)("p",null,"  RGW\u5c31\u662f\u63d0\u4f9b\u5bf9\u8c61\u5b58\u50a8\u7684\u7f51\u5173\uff0c\u4e5f\u5373\u5bf9\u8c61\u5b58\u50a8\u7f51\u5173\u3002\u6240\u8c13\u5bf9\u8c61\u5b58\u50a8\u7f51\u5173\uff0c\u4e5f\u5c31\u662f\u5bf9\u8c61\u5b58\u50a8\u7684\u5165\u53e3\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u672c\u8d28\u4e0a\u662f\u4e00\u4e2aHTTP\u670d\u52a1\u5668"),"\uff0c\u4e0eNginx\u548cApache\u65e0\u5f02\u3002\u901a\u8fc7\u8fd9\u4e2a\u5165\u53e3\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7HTTP\u534f\u8bae\uff0c\u4ee5RESTful\u7684\u65b9\u5f0f\u8bbf\u95eeCeph\u7684\u5bf9\u8c61\u5b58\u50a8\u3002 \u5bf9\u8c61\u5b58\u50a8\u7f51\u5173\u5b9e\u9645\u4e0a\u662f",(0,a.kt)("em",{parentName:"p"},"\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"em"},"librados"),"\u7684API"),"\u6765\u5b9e\u73b0\u6570\u636e\u7684\u5b58\u50a8\u548c\u8bfb\u53d6\uff0c\u800c\u8be5\u7f51\u5173\u540c\u65f6\u63d0\u4f9b\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u517c\u5bb9AWS S3\u548cOpenStack Swift\u7684\u5bf9\u8c61\u5b58\u50a8\u8bbf\u95ee\u63a5\u53e3\uff08API\uff09"),"\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5ceph\u5bf9\u8c61\u5b58\u50a8\u7f51\u5173"},"\u5b89\u88c5Ceph\u5bf9\u8c61\u5b58\u50a8\u7f51\u5173"),(0,a.kt)("p",null,"\u7b80\u5355\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ceph-deploy"),"\u90e8\u7f72\u547d\u4ee4\u5b89\u88c5\u5bf9\u8c61\u5b58\u50a8\u7f51\u5173\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8fdb\u5165ceph\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\ncd ceph-cluster\n#  ceph-deploy install --rgw <gateway-node1> [<gateway-node2> ...]\nceph-deploy install --rgw stor1\n")),(0,a.kt)("h2",{id:"\u521b\u5efargw\u5b9e\u4f8b"},"\u521b\u5efaRGW\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u4e0a\u9762\u6b65\u9aa4\u53ea\u662f\u5b89\u88c5\u4e86\u5fc5\u8981\u7684\u8f6f\u4ef6\uff0c\u4f46\u5e76\u6ca1\u6709\u521b\u5efa\u9700\u8981\u7684\u5b58\u50a8\u8d44\u6e90\uff08\u5b58\u50a8\u6c60\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u5b58\u50a8\u6c60\nceph-deploy rgw create stor1\n")),(0,a.kt)("p",null,"\u2139\ufe0f \u67e5\u770b\u96c6\u7fa4\u8d44\u6e90\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@stor1 ceph-cluster]\\# rados lspools\n.rgw.root\ndefault.rgw.control\ndefault.rgw.meta\ndefault.rgw.log\n")),(0,a.kt)("h2",{id:"\u9a8c\u8bc1\u5bf9\u8c61\u5b58\u50a8"},"\u9a8c\u8bc1\u5bf9\u8c61\u5b58\u50a8"),(0,a.kt)("p",null,"\u4e0a\u9762\u63d0\u5230\u8fc7 Ceph \u7684\u5bf9\u8c61\u5b58\u50a8\u7f51\u5173\u662f\u57fa\u4e8e HTTP \u7684\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 HTTP \u534f\u8bae\u8bbf\u95ee\u7279\u5b9a\u5730\u5740\u6765\u8fdb\u9879\u9a8c\u8bc1\uff1a"),(0,a.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8f93\u5165 ",(0,a.kt)("a",{parentName:"p",href:"http://172.16.1.128:7480/"},"http://172.16.1.128:7480/")),(0,a.kt)("p",null,"\u5927\u81f4\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n<Owner>\n    <ID>anonymous</ID>\n    <DisplayName/>\n</Owner>\n    <Buckets/>\n</ListAllMyBucketsResult>\n')),(0,a.kt)("h2",{id:"\u521b\u5efa\u7528\u6237\u4ee5\u4f7f\u7528\u5bf9\u8c61\u5b58\u50a8"},"\u521b\u5efa\u7528\u6237\u4ee5\u4f7f\u7528\u5bf9\u8c61\u5b58\u50a8"),(0,a.kt)("p",null,"\u5bf9\u8c61\u5b58\u50a8\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6570\u636e\u5fc5\u987b\u5b58\u50a8\u5728\u67d0\u4e2a\u7528\u6237\u4e0b\u9762\u3002\u56e0\u6b64\uff0c\u60f3\u6b63\u5e38\u7684\u8bbf\u95eeRGW\uff0c\u9700\u8981\u521b\u5efa\u76f8\u5e94\u7684RGW\u7528\u6237\uff0c\u5e76\u8d4b\u4e88\u76f8\u5e94\u7684\u6743\u9650\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"radosgw-admin"),"\u547d\u4ee4\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u529f\u80fd\u3002 \u6267\u884c\u4e0b\u9762\u547d\u4ee4\uff0c\u6765\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"testuser"),"\u7684\u7528\u6237\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'radosgw-admin user create --uid="testuser" --display-name="First User"\n')),(0,a.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c\u4f1a\u8f93\u51fa\u4e00\u5806\u76f8\u5173\u6570\u636e\uff0c\u5176\u4e2d\uff0c\u9700\u8981\u7279\u522b\u4fdd\u5b58\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"keys->access_key"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"keys->secret_key")),(0,a.kt)("h3",{id:"\u521b\u5efa\u5b50\u7528\u6237"},"\u521b\u5efa\u5b50\u7528\u6237"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"radosgw-admin subuser create --uid=testuser --subuser=testuser:swift --access=full\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/66671590"},"https://zhuanlan.zhihu.com/p/66671590")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/f6e336bd9999"},"https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/f6e336bd9999")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://link.zhihu.com/?target=https%3A//blog.csdn.net/u011446736/article/details/81083078"},"https://link.zhihu.com/?target=https%3A//blog.csdn.net/u011446736/article/details/81083078")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://link.zhihu.com/?target=https%3A//blog.csdn.net/Poo_Chai/article/details/80856662%3Futm_source%3Dblogxgwz1"},"https://link.zhihu.com/?target=https%3A//blog.csdn.net/Poo_Chai/article/details/80856662%3Futm_source%3Dblogxgwz1"))))}u.isMDXComponent=!0}}]);