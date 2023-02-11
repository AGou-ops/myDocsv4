"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5137],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=d(a),u=o,m=k["".concat(s,".").concat(u)]||k[u]||c[u]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},51702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={},i="Redis Codis",l={unversionedId:"LinuxBasics/DataBases/Redis/Redis Codis",id:"LinuxBasics/DataBases/Redis/Redis Codis",title:"Redis Codis",description:"[TOC]",source:"@site/docs/LinuxBasics/DataBases/Redis/Redis Codis.md",sourceDirName:"LinuxBasics/DataBases/Redis",slug:"/LinuxBasics/DataBases/Redis/Redis Codis",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Codis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/DataBases/Redis/Redis Codis.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Redis Cluster",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Cluster"},next:{title:"Redis \u5355\u673a\u90e8\u7f72",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Installation"}},s={},d=[{value:"Codis \u7b80\u4ecb",id:"codis-\u7b80\u4ecb",level:2},{value:"Codis \u7f16\u8bd1\u5b89\u88c5",id:"codis-\u7f16\u8bd1\u5b89\u88c5",level:2},{value:"redis-codis \u96c6\u7fa4\u624b\u52a8\u642d\u5efa",id:"redis-codis-\u96c6\u7fa4\u624b\u52a8\u642d\u5efa",level:2},{value:"\u901a\u8fc7 ansible \u5feb\u901f\u90e8\u7f72\u96c6\u7fa4",id:"\u901a\u8fc7-ansible-\u5feb\u901f\u90e8\u7f72\u96c6\u7fa4",level:2},{value:"Docker \u90e8\u7f72",id:"docker-\u90e8\u7f72",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redis-codis"},"Redis Codis"),(0,o.kt)("p",null,"[TOC]"),(0,o.kt)("h2",{id:"codis-\u7b80\u4ecb"},"Codis \u7b80\u4ecb"),(0,o.kt)("p",null,"Codis \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f Redis \u89e3\u51b3\u65b9\u6848, \u5bf9\u4e8e\u4e0a\u5c42\u7684\u5e94\u7528\u6765\u8bf4, \u8fde\u63a5\u5230 Codis Proxy \u548c\u8fde\u63a5\u539f\u751f\u7684 Redis Server \u6ca1\u6709\u663e\u8457\u533a\u522b (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CodisLabs/codis/blob/release3.2/doc/unsupported_cmds.md"},"\u4e0d\u652f\u6301\u7684\u547d\u4ee4\u5217\u8868"),"), \u4e0a\u5c42\u5e94\u7528\u53ef\u4ee5\u50cf\u4f7f\u7528\u5355\u673a\u7684 Redis \u4e00\u6837\u4f7f\u7528, Codis \u5e95\u5c42\u4f1a\u5904\u7406\u8bf7\u6c42\u7684\u8f6c\u53d1, \u4e0d\u505c\u673a\u7684\u6570\u636e\u8fc1\u79fb\u7b49\u5de5\u4f5c, \u6240\u6709\u540e\u8fb9\u7684\u4e00\u5207\u4e8b\u60c5, \u5bf9\u4e8e\u524d\u9762\u7684\u5ba2\u6237\u7aef\u6765\u8bf4\u662f\u900f\u660e\u7684, \u53ef\u4ee5\u7b80\u5355\u7684\u8ba4\u4e3a\u540e\u8fb9\u8fde\u63a5\u7684\u662f\u4e00\u4e2a\u5185\u5b58\u65e0\u9650\u5927\u7684 Redis \u670d\u52a1\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Codis 3.x \u7ec4\u6210\u90e8\u5206\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Codis Server"),"\uff1a\u57fa\u4e8e redis-3.2.8 \u5206\u652f\u5f00\u53d1\u3002\u589e\u52a0\u4e86\u989d\u5916\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ee5\u652f\u6301 slot \u6709\u5173\u7684\u64cd\u4f5c\u4ee5\u53ca\u6570\u636e\u8fc1\u79fb\u6307\u4ee4\u3002\u5177\u4f53\u7684\u4fee\u6539\u53ef\u4ee5\u53c2\u8003\u6587\u6863 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CodisLabs/codis/blob/release3.2/doc/redis_change_zh.md"},"redis \u7684\u4fee\u6539"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Codis Proxy"),"\uff1a\u5ba2\u6237\u7aef\u8fde\u63a5\u7684 Redis \u4ee3\u7406\u670d\u52a1, \u5b9e\u73b0\u4e86 Redis \u534f\u8bae\u3002 \u9664\u90e8\u5206\u547d\u4ee4\u4e0d\u652f\u6301\u4ee5\u5916(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CodisLabs/codis/blob/release3.2/doc/unsupported_cmds.md"},"\u4e0d\u652f\u6301\u7684\u547d\u4ee4\u5217\u8868"),")\uff0c\u8868\u73b0\u7684\u548c\u539f\u751f\u7684 Redis \u6ca1\u6709\u533a\u522b\uff08\u5c31\u50cf Twemproxy\uff09\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u540c\u4e00\u4e2a\u4e1a\u52a1\u96c6\u7fa4\u800c\u8a00\uff0c\u53ef\u4ee5\u540c\u65f6\u90e8\u7f72\u591a\u4e2a codis-proxy \u5b9e\u4f8b\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u540c codis-proxy \u4e4b\u95f4\u7531 codis-dashboard \u4fdd\u8bc1\u72b6\u6001\u540c\u6b65\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Codis Dashboard"),"\uff1a\u96c6\u7fa4\u7ba1\u7406\u5de5\u5177\uff0c\u652f\u6301 codis-proxy\u3001codis-server \u7684\u6dfb\u52a0\u3001\u5220\u9664\uff0c\u4ee5\u53ca\u636e\u8fc1\u79fb\u7b49\u64cd\u4f5c\u3002\u5728\u96c6\u7fa4\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\uff0ccodis-dashboard \u7ef4\u62a4\u96c6\u7fa4\u4e0b\u6240\u6709 codis-proxy \u7684\u72b6\u6001\u7684\u4e00\u81f4\u6027\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u540c\u4e00\u4e2a\u4e1a\u52a1\u96c6\u7fa4\u800c\u8a00\uff0c\u540c\u4e00\u4e2a\u65f6\u523b codis-dashboard \u53ea\u80fd\u6709 0\u4e2a\u6216\u80051\u4e2a\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bf9\u96c6\u7fa4\u7684\u4fee\u6539\u90fd\u5fc5\u987b\u901a\u8fc7 codis-dashboard \u5b8c\u6210\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Codis Admin"),"\uff1a\u96c6\u7fa4\u7ba1\u7406\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u63a7\u5236 codis-proxy\u3001codis-dashboard \u72b6\u6001\u4ee5\u53ca\u8bbf\u95ee\u5916\u90e8\u5b58\u50a8\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Codis FE"),"\uff1a\u96c6\u7fa4\u7ba1\u7406\u754c\u9762\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u96c6\u7fa4\u5b9e\u4f8b\u5171\u4eab\u53ef\u4ee5\u5171\u4eab\u540c\u4e00\u4e2a\u524d\u7aef\u5c55\u793a\u9875\u9762\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u7ba1\u7406\u540e\u7aef codis-dashboard \u5217\u8868\uff0c\u914d\u7f6e\u6587\u4ef6\u53ef\u81ea\u52a8\u66f4\u65b0\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage"),"\uff1a\u4e3a\u96c6\u7fa4\u72b6\u6001\u63d0\u4f9b\u5916\u90e8\u5b58\u50a8\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b Namespace \u6982\u5ff5\uff0c\u4e0d\u540c\u96c6\u7fa4\u7684\u4f1a\u6309\u7167\u4e0d\u540c product name \u8fdb\u884c\u7ec4\u7ec7\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4ec5\u63d0\u4f9b\u4e86 Zookeeper\u3001Etcd\u3001Fs \u4e09\u79cd\u5b9e\u73b0\uff0c\u4f46\u662f\u63d0\u4f9b\u4e86\u62bd\u8c61\u7684 interface \u53ef\u81ea\u884c\u6269\u5c55\u3002")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://images2018.cnblogs.com/blog/163084/201807/163084-20180703212324845-1586187945.png",alt:null,title:"\u5404\u8282\u70b9\u4e4b\u95f4\u5173\u7cfb"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"codis\u7684\u4f18\u7f3a\u70b9\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u5b9e\u73b0\u9ad8\u5e76\u53d1\u8bfb\u5199\uff0c\u6570\u636e\u4e00\u81f4\u6027\u9ad8\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u6027\u80fd\u6709\u8f83\u5927\u635f\u8017\uff0c\u6545\u969c\u5207\u6362\u65e0\u6cd5\u4fdd\u8bc1\u4e0d\u4e22key\u3002\u65e0\u6cd5\u8fdb\u884c\u8bfb\u5199\u5206\u79bb\u3002")),(0,o.kt)("p",null,"codis \u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u65e0\u7f1d\u8fc1\u79fb\u5230codis\uff0c\u81ea\u5e26\u8fc1\u79fb\u5de5\u5177"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u52a8\u6001\u6269\u5bb9\u548c\u7f29\u5bb9"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u4e1a\u52a1\u5b8c\u5168\u900f\u660e\uff0c\u4e1a\u52a1\u4e0d\u77e5\u9053\u8fd0\u884c\u7684\u662fcodis"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u6838\u5fc3CPU\uff0ctwemproxy\u53ea\u80fd\u5355\u6838"),(0,o.kt)("li",{parentName:"ul"},"codis\u662f\u4e2d\u5fc3\u57fa\u4e8eproxy\u7684\u8bbe\u8ba1\uff0c\u662f\u5ba2\u6237\u7aef\u50cf\u8fde\u63a5\u5355\u673a\u4e00\u6837\u64cd\u4f5cproxy"),(0,o.kt)("li",{parentName:"ul"},"\u6709\u90e8\u5206\u547d\u4ee4\u4e0d\u80fd\u652f\u6301\uff0c\u6bd4\u5982keys *\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301group\u5212\u5206\uff0c\u7ec4\u5185\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u4e3b\u591a\u4e2a\u4ece\uff0c\u901a\u8fc7sentinel \u76d1\u63a7redis\u4e3b\u4ece\uff0c\u5f53\u4e3bdown\u4e86\u81ea\u52a8\u5c06\u4ece\u5207\u6362\u4e3a\u4e3b"),(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u7684\u8fdb\u7a0b\u8981\u6700\u5927\u7b49\u4e8eCPU\u7684\u6838\u5fc3\uff0c\u4e0d\u80fd\u8d85\u8fc7CPU\u7684\u6838\u5fc3\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u5176\u4f9d\u8d56\u4e8ezookeeper\uff0c\u91cc\u9762\u4fdd\u5b58\u7684key\u662fredis\u4e3b\u673a\u4f4d\u7f6e\uff0c\u56e0\u6b64zookeeper\u8981\u505a\u9ad8\u53ef\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u548cdashboard")),(0,o.kt)("h2",{id:"codis-\u7f16\u8bd1\u5b89\u88c5"},"Codis \u7f16\u8bd1\u5b89\u88c5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 go \u8fd0\u884c\u73af\u5883\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c\u6211\u76f4\u63a5\u4f7f\u7528\u4ed3\u5e93\u8fdb\u884c\u5b89\u88c5\napt install -y golang\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u7f16\u8bd1\u73af\u5883\uff1a")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f ",(0,o.kt)("inlineCode",{parentName:"strong"},"$GOPATH")," \u662f\u672c\u673a\u6240\u6709\u7b2c\u4e09\u65b9\u5e93 go \u9879\u76ee\u6240\u5728\u76ee\u5f55\uff0cCodis \u4ec5\u662f\u5176\u4e2d\u4e4b\u4e00\u3002")),(0,o.kt)("p",null,"\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," \u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),"\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"PATH=$PATH:$GOPATH/bin"),"\u3002"),(0,o.kt)("p",null,"\u7f16\u8f91",(0,o.kt)("inlineCode",{parentName:"p"},".profile"),"\u6587\u4ef6\uff0c\u5728\u884c\u5c3e\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export GOPATH=/home/codis/gopath\nexport PATH=$PATH:$GOPATH/bin\n")),(0,o.kt)("p",null,"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"source .profile"),"\u4f7f\u5176\u751f\u6548\u3001"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go env GOPATH\n/home/codis/gopath\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4ece\u5b98\u65b9\u4ed3\u5e93\u4e0b\u8f7d Codis \u7684\u6e90\u7801\u5305\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $GOPATH/src/github.com/CodisLabs\ncd $_ && git clone https://github.com/CodisLabs/codis.git -b release3.2\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b89\u88c5\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $GOPATH/src/github.com/CodisLabs/codis\nmake\n")),(0,o.kt)("p",null,"\u7f16\u8bd1\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u4f1a\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"bin"),"\u76ee\u5f55\u4e0b\u751f\u6210\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$  ls bin/\nassets       codis-dashboard  codis-ha     codis-server     redis-cli       version\ncodis-admin  codis-fe         codis-proxy  redis-benchmark  redis-sentinel\n")),(0,o.kt)("p",null,"\u2139\ufe0f\u6b64\u5916\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece\u5b98\u65b9\u4ed3\u5e93\u4e0b\u8f7d\u5bf9\u5e94\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"release"),"\u5305\u8fdb\u884c\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"redis-codis-\u96c6\u7fa4\u624b\u52a8\u642d\u5efa"},"redis-codis \u96c6\u7fa4\u624b\u52a8\u642d\u5efa"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IP"),(0,o.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"172.16.1.128 & 172.16.1.134 & 172.16.1.138"),(0,o.kt)("td",{parentName:"tr",align:null},"codis-server(\u4e3b\u4ece)\u30103\u53f0\u3011\uff0ccodis-dashboard\u30101\u53f0\u3011\uff0ccodis-proxy\u30103\u53f0\u3011\uff0ccodis-fe\u30101\u53f0\u3011")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"172.16.1.128 & 172.16.1.134 & 172.16.1.138"),(0,o.kt)("td",{parentName:"tr",align:null},"zookeeper")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b89\u88c5 codis \u53c2\u8003\u4e0a\u9762\u7684","[Codis \u7f16\u8bd1\u5b89\u88c5]","(#Codis \u7f16\u8bd1\u5b89\u88c5)"),(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b89\u88c5 zk \u53c2\u8003 ","[zookeeper \u90e8\u7f72\u5b89\u88c5]","(../../Zookeeper/Zookeeper Basic.md)")),(0,o.kt)("p",null,"\u7f16\u8f91",(0,o.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u7684\u914d\u7f6e\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"zoo.conf"),"\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"...\ndataDir=/data/zookeeper\ndataLogDir=/var/log/zookeeper\n...\nserver.1=172.16.1.128:2888:3888\nserver.2=172.16.1.134:2888:3888\nserver.3=172.16.1.138:2888:3888\n")),(0,o.kt)("p",null,"\u521b\u5efa\u6570\u636e\u76ee\u5f55",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir -p /data/zookeeper"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir -p /var/log/zookeeper")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/profile"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export ZOOKEEPER_HOME=/usr/local/zookeeper\nexport PATH=$PATH:$ZOOKEEPER_HOME/bin\n")),(0,o.kt)("p",null,"\u4f7f\u4e4b\u751f\u6548\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"source /etc/profile")),(0,o.kt)("p",null,"\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"myid"),"\u6587\u4ef6\uff0c\u8bbe\u7f6ezookeeper\u7684id\uff0c\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"server.ID"),"\u5bf9\u5e94\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"dataDir"),"\u6307\u5b9a\u7684\u76ee\u5f55\u4e0b (\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"/data/zookeeper"),"\u76ee\u5f55) \u521b\u5efa\u540d\u4e3a myid \u7684\u6587\u4ef6\uff0c \u6587\u4ef6\u5185\u5bb9\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"zoo.cfg "),"\u4e2d\u5f53\u524d\u673a\u5668\u7684 id \u4e00\u81f4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5728\u7b2c1\u53f0zookeeper\uff08172.16.1.128\uff09\u4e0a\u8bbe\u7f6eid=1\necho "1" >/data/zookeeper/myid\n# \u5728\u7b2c2\u53f0zookeeper\uff08172.16.1.134\uff09\u4e0a\u8bbe\u7f6eid=2 \necho "2" >/data/zookeeper/myid\n# \u5728\u7b2c3\u53f0zookeeper\uff08172.16.1.138\uff09\u4e0a\u8bbe\u7f6eid=3\necho "3" >/data/zookeeper/myid\n')),(0,o.kt)("p",null,"\u5206\u522b\u542f\u52a8\u4e09\u53f0",(0,o.kt)("inlineCode",{parentName:"p"},"zk"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@node02 conf]\\# zkServer.sh start\n/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /usr/local/zookeeper/bin/../conf/zoo.cfg\nStarting zookeeper ... STARTED\n...\n")),(0,o.kt)("p",null,"\u67e5\u770b zk \u96c6\u7fa4\u72b6\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@master zookeeper]\\# zkServer.sh status\n/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /usr/local/zookeeper/bin/../conf/zoo.cfg\nClient port found: 2181. Client address: localhost.\nMode: follower\n\n[root@node01 ~]\\# zkServer.sh status\n/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /usr/local/zookeeper/bin/../conf/zoo.cfg\nClient port found: 2181. Client address: localhost.\nMode: leader\n\n[root@node02 ~]\\# zkServer.sh status\n/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /usr/local/zookeeper/bin/../conf/zoo.cfg\nClient port found: 2181. Client address: localhost.\nMode: follower\n")),(0,o.kt)("p",null,"...\u5f85\u7eed\u3002\u3002\u3002"),(0,o.kt)("h2",{id:"\u901a\u8fc7-ansible-\u5feb\u901f\u90e8\u7f72\u96c6\u7fa4"},"\u901a\u8fc7 ansible \u5feb\u901f\u90e8\u7f72\u96c6\u7fa4"),(0,o.kt)("p",null,"\u4f7f\u7528 ansible \u53ef\u5feb\u901f\u5728\u5355\u673a\u3001\u591a\u673a\u90e8\u7f72\u591a\u5957 codis \u96c6\u7fa4\u3002 ansible \u6587\u4ef6\u5939\u5305\u542b\u4e86\u90e8\u7f72 codis \u96c6\u7fa4\u7684 playbook\uff0c\u6839\u636e\u81ea\u5df1\u90e8\u7f72\u73af\u5883\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"groups_var/all")," \u6587\u4ef6\u91cc\u53c2\u6570\uff0c\u4fee\u6539 hosts \u6587\u4ef6\u6dfb\u52a0\u90e8\u7f72\u7684\u73af\u5883 IP \u5373\u53ef\u3002 ansible \u5b89\u88c5\u4e5f\u53ca\u5176\u7b80\u5355\uff0c\u5404\u90e8\u7f72\u673a\u5668\u65e0\u9700\u5b89\u88c5\u4efb\u4f55\u989d\u5916\u7684 agent\uff0c\u5f7c\u6b64\u4e4b\u95f4\u901a\u8fc7 ssh \u901a\u4fe1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/ansible/ansible.git -b stable-2.3\ncd ./ansible\nsource ./hacking/env-setup\ncd $codis_dir/ansible\nansible-playbook -i hosts site.yml\n")),(0,o.kt)("h2",{id:"docker-\u90e8\u7f72"},"Docker \u90e8\u7f72"),(0,o.kt)("p",null,"Codis 3.x \u8d77\uff0c\u5f00\u59cb\u6b63\u5f0f\u652f\u6301 Docker \u90e8\u7f72\u3002\u8fd9\u5c31\u9700\u8981 codis-dashboard \u4ee5\u53ca codis-proxy \u80fd\u591f\u5916\u90e8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"listen")," \u5730\u5740\u66b4\u9732\u51fa\u6765\u5e76\u4fdd\u5b58\u5728\u5916\u90e8\u5b58\u50a8\u4e2d\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"codis-proxy \u589e\u52a0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"li"},"--host-admin")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"li"},"--host-proxy")," \u53c2\u6570\uff1b"),(0,o.kt)("li",{parentName:"ul"},"codis-dashboard \u589e\u52a0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"li"},"--host-admin")," \u53c2\u6570\uff1b")),(0,o.kt)("p",null,"\u4ee5 codis-proxy \u7684 Docker \u4e3a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ docker run --name "Codis-Proxy" -d -p 29000:19000 -p 21080:11080 codis-image \\\n    codis-proxy -c proxy.toml --host-admin 100.0.1.100:29000 --host-proxy 100.0.1.100:21080\n')),(0,o.kt)("p",null,"codis-proxy \u5728\u542f\u52a8\u540e\uff0c\u4f1a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--host-admin")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"--host-proxy")," \u53c2\u6570\u6240\u6307\u5b9a\u7684\u5b9e\u9645\u5730\u5740\u66ff\u6362 Docker \u5185\u76d1\u542c\u7684\u5730\u5740\uff0c\u5411 codis-dashboard \u6ce8\u518c\u3002\u8fd9\u6837\uff0c\u4f8b\u5982\u4f7f\u7528 Jodis \u7684\u8fc7\u7a0b\u4e2d\uff0c\u5ba2\u6237\u7aef\u5c31\u80fd\u591f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"100.0.1.100:29000")," \u6765\u8bbf\u95ee proxy \u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,"codis-dashboard \u4e5f\u662f\u76f8\u540c\u7684\u9053\u7406\uff0c\u4f1a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--host-admin")," \u5730\u5740\u5411\u5916\u90e8\u5b58\u50a8\u6ce8\u518c\uff0c\u8fd9\u6837 codis-fe \u4e5f\u80fd\u901a\u8fc7\u8be5\u5730\u5740\u6b63\u786e\u7684\u5bf9 codis-dashboard \u8fdb\u884c\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u5177\u4f53\u6837\u4f8b\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/docker.sh"),"\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Codis \u4e2d\u6587\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CodisLabs/codis/blob/release3.2/doc/tutorial_zh.md"},"https://github.com/CodisLabs/codis/blob/release3.2/doc/tutorial_zh.md")),(0,o.kt)("li",{parentName:"ul"},"Codis 3.x \u7ec4\u6210\u90e8\u5206\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CodisLabs/codis/blob/release3.2/doc/tutorial_zh.md#codis-3x"},"https://github.com/CodisLabs/codis/blob/release3.2/doc/tutorial_zh.md#codis-3x")),(0,o.kt)("li",{parentName:"ul"},"Golang installation: ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"https://golang.org/doc/install")),(0,o.kt)("li",{parentName:"ul"},"Redis Codis \u90e8\u7f72\u5b89\u88c5\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/ExMan/p/11351621.html"},"https://www.cnblogs.com/ExMan/p/11351621.html")),(0,o.kt)("li",{parentName:"ul"},"Redis\u2014\u2014redis\u96c6\u7fa4\u65b9\u6848\u4e4bcodis\u96c6\u7fa4\u7684\u642d\u5efa\u90e8\u7f72\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/bmengmeng/article/details/99693040"},"https://blog.csdn.net/bmengmeng/article/details/99693040")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wsgzao.github.io/post/codis/"},"https://wsgzao.github.io/post/codis/"))))}c.isMDXComponent=!0}}]);