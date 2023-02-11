"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[8963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},s="SSH Tunnel",o={unversionedId:"LinuxBasics/SSH Tunnel",id:"LinuxBasics/SSH Tunnel",title:"SSH Tunnel",description:"SSH Tunnel",source:"@site/docs/LinuxBasics/SSH Tunnel.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/SSH Tunnel",permalink:"/docs/LinuxBasics/SSH Tunnel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/SSH Tunnel.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"SQL \u590d\u4e60",permalink:"/docs/LinuxBasics/SQL review"},next:{title:"Split & Logrotate",permalink:"/docs/LinuxBasics/Split - Logrotate"}},i={},p=[{value:"SSH Tunnel",id:"ssh-tunnel-1",level:2},{value:"SSH -L",id:"ssh--l",level:3},{value:"SSH -R",id:"ssh--r",level:3},{value:"SSH -D",id:"ssh--d",level:3},{value:"SSH \u9009\u9879",id:"ssh-\u9009\u9879",level:2},{value:"SSH \u4ee3\u7406\u8f6c\u53d1",id:"ssh-\u4ee3\u7406\u8f6c\u53d1",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-tunnel"},"SSH Tunnel"),(0,a.kt)("h2",{id:"ssh-tunnel-1"},"SSH Tunnel"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,a.kt)("th",{parentName:"tr",align:null},"IP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HostA"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.130")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HostB"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.129")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HostC"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.128")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HostD"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.127")))),(0,a.kt)("h3",{id:"ssh--l"},"SSH -L"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u6b63\u5411\u4ee3\u7406\uff08\u672c\u5730\u8f6c\u53d1\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ssh%20tunnel/ssh-tunnel-2.png",alt:"ssh-tunnel-1"})),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"HostB"),"\u4e3b\u673a\u4e0a\uff0c\u5728\u5176\u672c\u5730\u8d77\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"8888"),"\u7aef\u53e3\uff0c\u4f7f\u4e4b\u6620\u5c04\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"HostC"),"\u4e3b\u673a\u7684SSH\u9ed8\u8ba4",(0,a.kt)("inlineCode",{parentName:"p"},"22"),"\u7aef\u53e3\uff0c\u5982\u6b64\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"HostA"),"\u4e0a\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostB:8888")," \u5c31\u50cf\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostC:22")," \u4e00\u6837\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5728HostA\u4e3b\u673a\u4e0a\u6267\u884c\nssh -L 0.0.0.0:8888:172.16.1.128:22 root@172.16.1.129       # \u9ed8\u8ba4\u4e0d\u6307\u660eHostB\u5730\u5740\u4e3a\u672c\u5730localhost\n")),(0,a.kt)("p",null,"\u5f53\u94fe\u63a5\u65ad\u5f00\u65f6\uff0c\u96a7\u9053\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u4e34\u65f6\u6027\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u573a\u666f\uff1a\u901a\u8fc7\u516c\u7f51\u8fdc\u7a0b\u5982\u679c\u76f4\u63a5\u4f7f\u7528mysql\u5ba2\u6237\u7aef\u8fde\u63a5\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u56e0\u4e3a\u5176\u4f20\u8f93\u62a5\u6587\u662f\u660e\u6587\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u642d\u5efa\u4e00\u6761ssh \u96a7\u9053\u6765\u589e\u5f3a\u5b89\u5168\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -L 9906:10.1.0.2:3306 root@10.1.0.2\n\n* \u4e0a\u8ff0\u547d\u4ee4\u8868\u793a\u4ece\u672c\u673a(ServerA)\u5efa\u7acb\u4e00\u4e2a\u5230ServerB(10.1.0.2)\u7684ssh\u96a7\u9053\uff0c\u4f7f\u7528\u672c\u5730\u7aef\u53e3\u8f6c\u53d1\u6a21\u5f0f\uff0c\u76d1\u542cServerA\u672c\u5730\u76849906\u7aef\u53e3\uff0c\u8bbf\u95ee\u672c\u673a\u76849906\u7aef\u53e3\u65f6\uff0c\u901a\u8baf\u6570\u636e\u5c06\u4f1a\u88ab\u8f6c\u53d1\u5230ServerB(10.1.0.2)\u76843306\u7aef\u53e3\u3002\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u5c31\u53ef\u4ee5\u5728serverA\u4e3b\u673a\u4e0a\u901a\u8fc7\u672c\u5730\u76849906\u7aef\u53e3\u8f83\u4e3a\u5b89\u5168\u7684\u8bbf\u95eeserverB\u4e3b\u673a\u4e0a\u7684mysql\u670d\u52a1"),(0,a.kt)("h3",{id:"ssh--r"},"SSH -R"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u53cd\u5411\u4ee3\u7406\uff08\u8fdc\u7a0b\u8f6c\u53d1\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ssh%20tunnel/ssh-tunnel-3.png",alt:null})),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostC")," \u4e0a\uff0c\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostB "),"\u8d77",(0,a.kt)("inlineCode",{parentName:"p"},"8888 "),"\u7aef\u53e3\uff0c\u4f7f\u4e4b\u6620\u5c04\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"22 "),"\u7aef\u53e3\u3002\u5982\u6b64\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"HostA"),"\u4e0a\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostB:8888")," \u5c31\u50cf\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostC:22 "),"\u4e00\u6837\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5728HostC\u4e0a\u6267\u884c\nssh -R 8888:localhost:22 root@172.16.1.129\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ssh%20tunnel/ssh-tunnel-4.png",alt:null})),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostC \u4e0a"),"\uff0c\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostB "),"\u8d77 ",(0,a.kt)("inlineCode",{parentName:"p"},"8888 "),"\u7aef\u53e3\uff0c\u4f7f\u4e4b\u6620\u5c04\u5230",(0,a.kt)("inlineCode",{parentName:"p"}," HostD")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"22 "),"\u7aef\u53e3\u3002\u5982\u6b64\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostA "),"\u4e0a\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostB:8888 "),"\u5c31\u50cf\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"HostD:22")," \u4e00\u6837\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5728HostC\u4e0a\u6267\u884c\nssh -R 8888:172.16.1.127:22 root@172.16.1.129\n")),(0,a.kt)("p",null,"\u5e94\u7528\u573a\u666f\uff1a\u5185\u7f51\u7a7f\u900f\uff0c\u5916\u7f51\u8bbf\u95ee\u5185\u7f51\u670d\u52a1\u3002\u5047\u5982\u516c\u53f8\u5185\u7f51\u73af\u5883\u4e2d\u6709\u4e00\u53f0mysql\u670d\u52a1\u5668\uff08\u516c\u53f8\u6240\u6709\u4e3b\u673a\u901a\u8fc7\u5178\u578b\u7684NAT\u6a21\u5f0f\u8fdb\u884c\u4e0a\u7f51\uff09\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u662f\uff0c\u901a\u8fc7\u8def\u7531\u5668\u6216\u8005\u9632\u706b\u5899\uff0c\u5c06\u516c\u53f8\u7684\u56fa\u5b9a\u5916\u7f51IP\u4e0a\u7684\u67d0\u4e2a\u7aef\u53e3\u6620\u5c04\u5230ServerB\u5185\u7f51IP\u76843306\u7aef\u53e3\u4e0a\uff0c\u8fd9\u6837\uff0c\u6211\u4eec\u53ea\u8981\u8bbf\u95ee\u516c\u53f8\u5916\u7f51IP\u7684\u5bf9\u5e94\u7aef\u53e3\uff0c\u5373\u53ef\u8bbf\u95ee\u5230\u5185\u7f51ServerB\u4e2d\u7684mysql\u670d\u52a1\u4e86\uff0c\u4f46\u662f\u4f60\u6ca1\u6709\u6743\u9650\u63a7\u5236\u516c\u53f8\u7684\u9632\u706b\u5899\u6216\u8005\u8def\u7531\u5668\u3002\u4f46\u662f\uff0c\u516c\u53f8\u5728\u516c\u7f51\u4e0a\u6709\u53e6\u5916\u4e00\u53f0\u670d\u52a1\u5668ServerA\uff0cServerA\u6709\u81ea\u5df1\u7684\u516c\u7f51IP\uff0c\u4f60\u6709\u6743\u63a7\u5236ServerA\uff0c\u8fd9\u65f6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5229\u7528ServerA\u8fbe\u5230\u6211\u4eec\u7684\u76ee\u7684\u3002"),(0,a.kt)("p",null,"\u663e\u7136\uff0c\u4f7f\u7528ssh\u672c\u5730\u6b63\u5411\u4ee3\u7406\u7684\u65b9\u5f0f\u65e0\u6cd5\u5b9e\u73b0\uff0c\u56e0\u4e3a\u5916\u7f51\u4e3b\u673a\u4ecd\u65e0\u6cd5\u8fde\u63a5\u5230\u5185\u7f51mysql\u670d\u52a1\u5668\u4e0a\uff0c\u4f46\u662f\u5185\u7f51mysql\u670d\u52a1\u5668\u901a\u8fc7NAT\u53ef\u4ee5ssh\u8fde\u63a5\u5230\u90a3\u53f0\u5177\u6709\u516c\u7f51ip\u7684\u4e3b\u673a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,a.kt)("p",null,"\u6761\u4ef61\uff1a\u4eceServerB(10.1.0.2)\u4e2d\u4e3b\u52a8\u8fde\u63a5\u5230ServerA(10.1.0.1)\uff0c\u5373\u5728ServerB\u4e2d\u6267\u884c\u521b\u5efa\u96a7\u9053\u7684\u547d\u4ee4\uff0c\u8fde\u63a5\u5230ServerA\u3002"),(0,a.kt)("p",null,"\u6761\u4ef62\uff1a\u96a7\u9053\u521b\u5efa\u540e\uff0c\u8f6c\u53d1\u7aef\u53e3\u9700\u8981\u76d1\u542c\u5728ServerA\u4e2d\uff0c\u4ee5\u4fbf\u5229\u7528ServerA\u8bbf\u95ee\u5230\u5185\u7f51\u7684ServerB\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5728severB\u4e0a\u6267\u884c\nssh -N -f -R 9906:10.1.0.2:3306 root@10.1.0.1\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u5728ServerB\u4e2d\u6267\u884c\uff0c\u6267\u884c\u540e\uff0c\u5373\u53ef\u5728ServerA\u4e0eServerB\u4e4b\u95f4\u5efa\u7acbssh\u96a7\u9053\uff0c\u6b64\u65f6\uff0cServerB\u662fssh\u5ba2\u6237\u7aef\uff0cServerA\u662fssh\u670d\u52a1\u7aef\uff0c\u96a7\u9053\u5efa\u7acb\u540e\uff0cServerA\u4e2d\u76849906\u7aef\u53e3\u4f1a\u88ab\u76d1\u542c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\u4e0d\u8fc7\u4f60\u80af\u5b9a\u6ce8\u610f\u5230\u4e86\uff0c\u5f53\u4f7f\u7528\u8fdc\u7a0b\u8f6c\u53d1\u7684\u547d\u4ee4\u65f6\uff0c\u6211\u5e76\u6ca1\u6709\u6307\u5b9a\u76d1\u542cServerA\u7684\u5916\u7f51IP\uff0c\u4e5f\u6ca1\u6709\u4f7f\u7528"-g\u9009\u9879"\u5f00\u542f\u7f51\u5173\u529f\u80fd\uff0c\u8fd9\u662f\u56e0\u4e3a\uff0c\u5373\u4f7f\u4f60\u5728\u547d\u4ee4\u4e2d\u6307\u5b9a\u4e86IP\u5730\u5740\uff0c\u6700\u7ec8\u5728ServerA\u4e2d\u8fd8\u662f\u4f1a\u53ea\u76d1\u542c127.0.0.1\u76849906\u7aef\u53e3\uff0c\u4f60\u53ef\u4ee5\u5728ServerB\u4e2d\u5c1d\u8bd5\u4e00\u4e0b\u5982\u4e0b\u547d\u4ee4'),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"ssh -f -N -R 10.1.0.1:9906:10.1.0.2:3306 root@10.1.0.1")),(0,a.kt)("p",{parentName:"blockquote"},"\u5373\u4f7f\u5728ServerB\u4e2d\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u65f6\u6307\u5b9a\u4e86IP\u6216\u8005\u5f00\u542f\u4e86\u7f51\u5173\u529f\u80fd\uff0cServerA\u76849906\u7aef\u53e3\u4ecd\u7136\u53ea\u76d1\u542c\u5728127.0.0.1\u4e0a\uff0c\u5f53\u7136\uff0c\u5982\u679c\u4f60\u4e00\u5fc3\u60f3\u8981\u901a\u8fc7\u522b\u7684\u4e3b\u673a\u8bbf\u95eeServerA\u76849906\u7aef\u53e3\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u7a0b\u5e8f\u53bb\u53cd\u4ee3ServerA\u76849906\u7aef\u53e3\uff0c\u8fd8\u6709\uff0c\u6211\u5728\u5b9e\u9645\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u4f7f\u7528\u8fdc\u7a0b\u8f6c\u53d1\u7a7f\u900f\u5230\u5185\u7f51\uff0cssh\u96a7\u9053\u5c06\u4f1a\u975e\u5e38\u4e0d\u7a33\u5b9a\uff0c\u96a7\u9053\u4f1a\u83ab\u540d\u5176\u5999\u7684\u6d88\u5931\u6216\u8005\u5931\u6548\uff0c\u7279\u522b\u662f\u5728\u6ca1\u6709\u56fa\u5b9aIP\u7684\u7f51\u7edc\u5185\uff0c\u7f51\u4e0a\u6709\u4e9b\u670b\u53cb\u63d0\u4f9b\u4e86autossh\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4e0d\u8fc7\u6211\u5e76\u6ca1\u6709\u5c1d\u8bd5\u8fc7\uff0c\u5982\u679c\u4f60\u6709\u5174\u8da3\uff0c\u53ef\u4ee5\u8bd5\u4e00\u8bd5\u3002")),(0,a.kt)("h3",{id:"ssh--d"},"SSH -D"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2asocks5\u4ee3\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -g -D 8080 root@172.16.1.130\n")),(0,a.kt)("h2",{id:"ssh-\u9009\u9879"},"SSH \u9009\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-N"),"\uff1a\u5f53\u914d\u5408\u6b64\u9009\u9879\u521b\u5efassh\u96a7\u9053\u65f6\uff0c\u5e76\u4e0d\u4f1a\u6253\u5f00\u8fdc\u7a0bshell\u8fde\u63a5\u5230\u76ee\u6807\u4e3b\u673a\uff0c\u4ec5\u4f7f\u7528\u8be5\u9009\u9879\u65f6\uff0c\u53ef\u4ee5\u53d1\u73b0\u7ec8\u7aef\u4f1a\u505c\u7559\u5728\u8f93\u5165\u5bc6\u7801\u4e4b\u540e\u7684\u4f4d\u7f6e\uff0c\u663e\u793a\u7a7a\u767d\uff0c\u4f46\u6b64\u65f6\u8fde\u63a5\u5df2\u7ecf\u5efa\u7acb"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-f"),'\uff1a\u8868\u793a\u540e\u53f0\u8fd0\u884cssh\u96a7\u9053\uff0c\u5373\u4f7f\u6211\u4eec\u5173\u95ed\u4e86\u521b\u5efa\u96a7\u9053\u65f6\u6240\u4f7f\u7528\u7684ssh\u4f1a\u8bdd\uff0c\u5bf9\u5e94\u7684ssh\u96a7\u9053\u4e5f\u4e0d\u4f1a\u6d88\u5931\uff0c"-f"\u9009\u9879\u9700\u8981\u8ddf"-N"\u9009\u9879\u914d\u5408\u4f7f\u7528\uff0c\u4f8b\u5982\uff1a',(0,a.kt)("inlineCode",{parentName:"li"},"ssh -N -f -L 172.16.1.129:2222:172.16.1.128:22 root@172.16.1.128")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-g"),'\uff1a\u8868\u793assh\u96a7\u9053\u5bf9\u5e94\u7684\u8f6c\u53d1\u7aef\u53e3\u5c06\u76d1\u542c\u5728\u4e3b\u673a\u7684\u6240\u6709IP\u4e2d\uff0c\u4e0d\u4f7f\u7528"-g\u9009\u9879"\u65f6\uff0c\u8f6c\u53d1\u7aef\u53e3\u9ed8\u8ba4\u53ea\u76d1\u542c\u5728\u4e3b\u673a\u7684\u672c\u5730\u56de\u73af\u5730\u5740\u4e2d\uff0c"-g"\u8868\u793a\u5f00\u542f\u7f51\u5173\u6a21\u5f0f\uff0c\u8fdc\u7a0b\u7aef\u53e3\u8f6c\u53d1\u4e2d\uff0c\u65e0\u6cd5\u5f00\u542f\u7f51\u5173\u529f\u80fd\uff0c\u4f8b\u5982\uff1a',(0,a.kt)("inlineCode",{parentName:"li"}," ssh -g -N -f -L 0.0.0.0:2222:172.16.1.128:22 root@172.16.1.128"))),(0,a.kt)("h2",{id:"ssh-\u4ee3\u7406\u8f6c\u53d1"},"SSH \u4ee3\u7406\u8f6c\u53d1"),(0,a.kt)("p",null,"\u539f\u7406\u7b80\u5355\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,"\u5728A\u4e3b\u673a\u4e0a\uff0c\u628aB\u4e3b\u673a\u4e0a\u7684\u67d0\u4e2a\u6587\u4ef6\u590d\u5236\u5230C\u4e3b\u673a\u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scp root@hostB:/root/test root@hostC:/root\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6731\u53cc\u5370\u535a\u5ba2\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://www.zsythink.net/archives/2450"},"https://www.zsythink.net/archives/2450")),(0,a.kt)("li",{parentName:"ul"},"CSDN @\u871c\u6c41\u5c0f\u5f3a \uff1a ",(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/wxqee/article/details/49234595"},"https://blog.csdn.net/wxqee/article/details/49234595"))))}c.isMDXComponent=!0}}]);