"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=o(r),m=s,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,l=new Array(a);l[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:s,l[1]=d;for(var o=2;o<a;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var n=r(87462),s=(r(67294),r(3905));const a={},l="Redis Cluster",d={unversionedId:"LinuxBasics/DataBases/Redis/Redis Cluster",id:"LinuxBasics/DataBases/Redis/Redis Cluster",title:"Redis Cluster",description:"Redis-Cluster \u96c6\u7fa4\u6982\u5ff5",source:"@site/docs/LinuxBasics/DataBases/Redis/Redis Cluster.md",sourceDirName:"LinuxBasics/DataBases/Redis",slug:"/LinuxBasics/DataBases/Redis/Redis Cluster",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Cluster",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/DataBases/Redis/Redis Cluster.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Redis \u57fa\u7840",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Basic"},next:{title:"Redis Codis",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Codis"}},i={},o=[{value:"Redis-Cluster \u96c6\u7fa4\u6982\u5ff5",id:"redis-cluster-\u96c6\u7fa4\u6982\u5ff5",level:2},{value:"\u96c6\u7fa4\u8282\u70b9\u590d\u5236",id:"\u96c6\u7fa4\u8282\u70b9\u590d\u5236",level:3},{value:"\u6545\u969c\u8f6c\u79fb",id:"\u6545\u969c\u8f6c\u79fb",level:3},{value:"\u96c6\u7fa4\u5206\u7247\u7b56\u7565",id:"\u96c6\u7fa4\u5206\u7247\u7b56\u7565",level:3},{value:"\u96c6\u7fa4\u91cd\u5b9a\u5411",id:"\u96c6\u7fa4\u91cd\u5b9a\u5411",level:3},{value:"\u4e3b\u4ece\u590d\u5236\u539f\u7406",id:"\u4e3b\u4ece\u590d\u5236\u539f\u7406",level:3},{value:"Redis-Cluster \u96c6\u7fa4\u642d\u5efa",id:"redis-cluster-\u96c6\u7fa4\u642d\u5efa",level:2},{value:"\u9644\u5f55\uff1a\u5feb\u901f\u642d\u5efa\u6d4b\u8bd5\u73af\u5883",id:"\u9644\u5f55\u5feb\u901f\u642d\u5efa\u6d4b\u8bd5\u73af\u5883",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:o};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"redis-cluster"},"Redis Cluster"),(0,s.kt)("h2",{id:"redis-cluster-\u96c6\u7fa4\u6982\u5ff5"},"Redis-Cluster \u96c6\u7fa4\u6982\u5ff5"),(0,s.kt)("p",null,"\uff081\uff09\u7531\u591a\u4e2aRedis\u670d\u52a1\u5668\u7ec4\u6210\u7684\u5206\u5e03\u5f0f\u7f51\u7edc\u670d\u52a1\u96c6\u7fa4\uff1b"),(0,s.kt)("p",null,"\uff082\uff09\u96c6\u7fa4\u4e4b\u4e2d\u6709\u591a\u4e2aMaster\u4e3b\u8282\u70b9\uff0c\u6bcf\u4e00\u4e2a\u4e3b\u8282\u70b9\u90fd\u53ef\u8bfb\u53ef\u5199\uff1b"),(0,s.kt)("p",null,"\uff083\uff09\u8282\u70b9\u4e4b\u95f4\u4f1a\u4e92\u76f8\u901a\u4fe1\uff0c\u4e24\u4e24\u76f8\u8fde\uff1b"),(0,s.kt)("p",null,"\uff084\uff09Redis\u96c6\u7fa4\u65e0\u4e2d\u5fc3\u8282\u70b9\u3002"),(0,s.kt)("h3",{id:"\u96c6\u7fa4\u8282\u70b9\u590d\u5236"},"\u96c6\u7fa4\u8282\u70b9\u590d\u5236"),(0,s.kt)("p",null," \u5728Redis-Cluster\u96c6\u7fa4\u4e2d\uff0c\u53ef\u4ee5\u7ed9\u6bcf\u4e00\u4e2a\u4e3b\u8282\u70b9\u6dfb\u52a0\u4ece\u8282\u70b9\uff0c\u4e3b\u8282\u70b9\u548c\u4ece\u8282\u70b9\u76f4\u63a5\u9075\u5faa\u4e3b\u4ece\u6a21\u578b\u7684\u7279\u6027\u3002"),(0,s.kt)("p",null,"\u5f53\u7528\u6237\u9700\u8981\u5904\u7406\u66f4\u591a\u8bfb\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u6dfb\u52a0\u4ece\u8282\u70b9\u53ef\u4ee5\u6269\u5c55\u7cfb\u7edf\u7684\u8bfb\u6027\u80fd\u3002"),(0,s.kt)("h3",{id:"\u6545\u969c\u8f6c\u79fb"},"\u6545\u969c\u8f6c\u79fb"),(0,s.kt)("p",null,"Redis\u96c6\u7fa4\u7684\u4e3b\u8282\u70b9\u5185\u7f6e\u4e86\u7c7b\u4f3cRedis Sentinel\u7684\u8282\u70b9\u6545\u969c\u68c0\u6d4b\u548c\u81ea\u52a8\u6545\u969c\u8f6c\u79fb\u529f\u80fd\uff0c\u5f53\u96c6\u7fa4\u4e2d\u7684\u67d0\u4e2a\u4e3b\u8282\u70b9\u4e0b\u7ebf\u65f6\uff0c\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u5728\u7ebf\u4e3b\u8282\u70b9\u4f1a\u6ce8\u610f\u5230\u8fd9\u4e00\u70b9\uff0c\u5e76\u5bf9\u5df2\u4e0b\u7ebf\u7684\u4e3b\u8282\u70b9\u8fdb\u884c\u6545\u969c\u8f6c\u79fb\u3002"),(0,s.kt)("p",null,"\u96c6\u7fa4\u8fdb\u884c\u6545\u969c\u8f6c\u79fb\u7684\u65b9\u6cd5\u548cRedis Sentinel\u8fdb\u884c\u6545\u969c\u8f6c\u79fb\u7684\u65b9\u6cd5\u57fa\u672c\u4e00\u6837\uff0c\u4e0d\u540c\u7684\u662f\uff0c\u5728\u96c6\u7fa4\u91cc\u9762\uff0c\u6545\u969c\u8f6c\u79fb\u662f\u7531\u96c6\u7fa4\u4e2d\u5176\u4ed6\u5728\u7ebf\u7684\u4e3b\u8282\u70b9\u8d1f\u8d23\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u96c6\u7fa4\u4e0d\u5fc5\u53e6\u5916\u4f7f\u7528Redis Sentinel\u3002 "),(0,s.kt)("h3",{id:"\u96c6\u7fa4\u5206\u7247\u7b56\u7565"},"\u96c6\u7fa4\u5206\u7247\u7b56\u7565"),(0,s.kt)("p",null,"Redis-cluster\u5206\u7247\u7b56\u7565\uff0c\u662f\u7528\u6765\u89e3\u51b3key\u5b58\u50a8\u4f4d\u7f6e\u7684\u3002"),(0,s.kt)("p",null,"\u96c6\u7fa4\u5c06\u6574\u4e2a\u6570\u636e\u5e93\u5206\u4e3a16384\u4e2a\u69fd\u4f4dslot\uff0c\u6240\u6709key-value\u6570\u636e\u90fd\u5b58\u50a8\u5728\u8fd9\u4e9bslot\u4e2d\u7684\u67d0\u4e00\u4e2a\u4e0a\u3002\u4e00\u4e2aslot\u69fd\u4f4d\u53ef\u4ee5\u5b58\u653e\u591a\u4e2a\u6570\u636e\uff0ckey\u7684\u69fd\u4f4d\u8ba1\u7b97\u516c\u5f0f\u4e3a\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"slot_number=crc16(key)%16384"),"\uff0c\u5176\u4e2dcrc16\u4e3a16\u4f4d\u7684\u5faa\u73af\u5197\u4f59\u6821\u9a8c\u548c\u51fd\u6570\u3002"),(0,s.kt)("p",null,"\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u4e3b\u8282\u70b9\u90fd\u53ef\u4ee5\u5904\u74060\u4e2a\u81f316383\u4e2a\u69fd\uff0c\u5f5316384\u4e2a\u69fd\u90fd\u6709\u67d0\u4e2a\u8282\u70b9\u5728\u8d1f\u8d23\u5904\u7406\u65f6\uff0c\u96c6\u7fa4\u8fdb\u5165\u4e0a\u7ebf\u72b6\u6001\uff0c\u5e76\u5f00\u59cb\u5904\u7406\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u6570\u636e\u547d\u4ee4\u8bf7\u6c42\u3002"),(0,s.kt)("p",null,"Redis \u96c6\u7fa4\u4f7f\u7528\u6570\u636e\u5206\u7247\uff08sharding\uff09\u800c\u975e\u4e00\u81f4\u6027\u54c8\u5e0c\uff08consistency hashing\uff09\u6765\u5b9e\u73b0\uff1a \u4e00\u4e2a Redis \u96c6\u7fa4\u5305\u542b 16384 \u4e2a\u54c8\u5e0c\u69fd\uff08hash slot\uff09\uff0c \u6570\u636e\u5e93\u4e2d\u7684\u6bcf\u4e2a\u952e\u90fd\u5c5e\u4e8e\u8fd9 16384 \u4e2a\u54c8\u5e0c\u69fd\u7684\u5176\u4e2d\u4e00\u4e2a\uff0c \u96c6\u7fa4\u4f7f\u7528\u516c\u5f0f CRC16(key) % 16384 \u6765\u8ba1\u7b97\u952e key \u5c5e\u4e8e\u54ea\u4e2a\u69fd\uff0c \u5176\u4e2d CRC16(key) \u8bed\u53e5\u7528\u4e8e\u8ba1\u7b97\u952e key \u7684 CRC16 \u6821\u9a8c\u548c \u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u8282\u70b9 A \u8d1f\u8d23\u5904\u7406 0 \u53f7\u81f3 5500 \u53f7\u54c8\u5e0c\u69fd\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8282\u70b9 B \u8d1f\u8d23\u5904\u7406 5501 \u53f7\u81f3 11000 \u53f7\u54c8\u5e0c\u69fd\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8282\u70b9 C \u8d1f\u8d23\u5904\u7406 11001 \u53f7\u81f3 16384 \u53f7\u54c8\u5e0c\u69fd\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"http://bak.agou-ops.top/uploads/redis/images/m_4d0eddb4cbb10a4882dafd941142339a_r.png",alt:"null"})),(0,s.kt)("h3",{id:"\u96c6\u7fa4\u91cd\u5b9a\u5411"},"\u96c6\u7fa4\u91cd\u5b9a\u5411"),(0,s.kt)("p",null,"\u7531\u4e8eRedis\u96c6\u7fa4\u65e0\u4e2d\u5fc3\u8282\u70b9\uff0c\u8bf7\u6c42\u4f1a\u968f\u673a\u53d1\u7ed9\u4efb\u610f\u4e3b\u8282\u70b9\uff1b"),(0,s.kt)("p",null,"\u4e3b\u8282\u70b9\u53ea\u4f1a\u5904\u7406\u81ea\u5df1\u8d1f\u8d23\u69fd\u4f4d\u7684\u547d\u4ee4\u8bf7\u6c42\uff0c\u5176\u5b83\u69fd\u4f4d\u7684\u547d\u4ee4\u8bf7\u6c42\uff0c\u8be5\u4e3b\u8282\u70b9\u4f1a\u8fd4\u56de\u5ba2\u6237\u7aef\u4e00\u4e2a\u8f6c\u5411\u9519\u8bef\uff1b"),(0,s.kt)("p",null,"\u5ba2\u6237\u7aef",(0,s.kt)("em",{parentName:"p"},"\u6839\u636e\u9519\u8bef\u4e2d\u5305\u542b\u7684\u5730\u5740\u548c\u7aef\u53e3"),"\u91cd\u65b0\u5411\u6b63\u786e\u7684\u8d1f\u8d23\u7684\u4e3b\u8282\u70b9\u53d1\u8d77\u547d\u4ee4\u8bf7\u6c42\u3002"),(0,s.kt)("h3",{id:"\u4e3b\u4ece\u590d\u5236\u539f\u7406"},"\u4e3b\u4ece\u590d\u5236\u539f\u7406"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/image-20211103173116252.png",alt:"image-20211103173116252"})),(0,s.kt)("p",null,"\u56fe\u7247\u6765\u6e90\u4e8e\u7f51\u7edc\u3002"),(0,s.kt)("h2",{id:"redis-cluster-\u96c6\u7fa4\u642d\u5efa"},"Redis-Cluster \u96c6\u7fa4\u642d\u5efa"),(0,s.kt)("p",null,"\u624b\u5934\u8d44\u6e90\u6709\u9650\uff0c\u6545\u91c7\u7528\u5355\u673a\u90e8\u7f72\u96c6\u7fa4\uff083\u4e3b3\u4ece\uff09"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,s.kt)("th",{parentName:"tr",align:null},"IP:PORT"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"master1"),(0,s.kt)("td",{parentName:"tr",align:null},"172.16.1.135:7001")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"slave1"),(0,s.kt)("td",{parentName:"tr",align:null},"172.16.1.135:7002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"master2"),(0,s.kt)("td",{parentName:"tr",align:null},"172.16.1.135:7003")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"slave2"),(0,s.kt)("td",{parentName:"tr",align:null},"172.16.1.135:7004")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"master3"),(0,s.kt)("td",{parentName:"tr",align:null},"172.16.1.135:7005")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"slave3"),(0,s.kt)("td",{parentName:"tr",align:null},"172.16.1.135:7006")))),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/redis"),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"redis-cluster"),"\u7684\u6587\u4ef6\u5939\uff0c\u91cc\u9762\u5b58\u653e\u5404\u8282\u70b9\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /usr/local/redis/redis-cluster -p\ncd /usr/local/redis/redis-cluster && mkdir -pv 700{1..6}\n")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/redis/redis-1.png",alt:null})),(0,s.kt)("p",null,"\u5c06\u7a0b\u5e8f\u53ca\u914d\u7f6e\u6587\u4ef6\u5206\u522b\u590d\u5236\u5230\u5404\u4e2a\u8282\u70b9\u6587\u4ef6\u5939\u4e2d\u53bb\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," echo 700{2..6} | xargs -n 1 cp -ar 7001/*\n")),(0,s.kt)("p",null,"\u4fee\u6539\u90e8\u5206\u914d\u7f6e\u6587\u4ef6\uff08\u4ee57001\u4e3a\u4f8b\uff09\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"port 7001           # \u6539\u6210\u5bf9\u5e94\u7684\nbind 172.16.1.135\ncluster-enabled yes\ndaemonized  yes\nlogfile /var/log/redis/redis-7001.log       # \u6539\u6210\u5bf9\u5e94\u7684\n")),(0,s.kt)("p",null,"\u4fee\u6539\u5b8c\u914d\u7f6e\u6587\u4ef6\u4e4b\u540e\uff0c\u542f\u52a8\u5404 redis \u8282\u70b9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"declare -i i=1; while ((i<7)); do cd /usr/local/redis/redis-cluster/700$i && ./redis-server redis.conf && sleep 1; let i++ ; done\n")),(0,s.kt)("p",null,"\u67e5\u770b\u5404\u8282\u70b9\u542f\u52a8\u60c5\u51b5\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"root@ubuntu:/usr/local/redis/redis-cluster\\# ps aux | grep -v grep | grep redis\nroot       2534  0.3  0.2  64360  4176 ?        Ssl  14:00   0:00 ./redis-server 172.16.1.135:7001 [cluster]\nroot       2484  0.3  0.2  64360  4264 ?        Ssl  13:57   0:00 ./redis-server 172.16.1.135:7002 [cluster]\nroot       2499  0.3  0.2  64360  4156 ?        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7003 [cluster]\nroot       2506  0.3  0.2  61288  4064 ?        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7004 [cluster]\nroot       2513  0.3  0.2  61288  5180 ?        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7005 [cluster]\nroot       2520  0.3  0.2  64360  5284 ?        Ssl  13:59   0:00 ./redis-server 172.16.1.135:7006 [cluster]\n")),(0,s.kt)("p",null,"\u6267\u884c\u521b\u5efa\u96c6\u7fa4\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8be5\u5de5\u5177\u4f4d\u4e8e\u7f16\u8bd1\u5b89\u88c5\u4e4b\u540e\u7684\u6e90\u7801\u5305\u7684 src \u76ee\u5f55\u4e2d\n# cd /root/redis-6.0.1/src\n# \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u57286.0\u7248\u672c\u4e2dredis-trib.rb\u4e0d\u518d\u88ab\u652f\u6301\uff0c\u4e0d\u53ef\u7528\n# ./redis-trib.rb create --replicas 1 172.16.1.135:7001 172.16.1.135:7002 172.16.1.135:7003 172.16.1.135:7004 172.16.1.135:7005  172.16.1.135:7006\n\n# \u6240\u4ee5\u5728\u8fd9\u91cc\u6211\u4f7f\u7528 redis-cli \u6765\u8fdb\u884c\u90e8\u7f72\n./redis-cli --cluster create 172.16.1.135:7001 172.16.1.135:7002 172.16.1.135:7003 172.16.1.135:7004 172.16.1.135:7005 172.16.1.135:7006 --cluster-replicas 1\n")),(0,s.kt)("p",null,"\u671f\u95f4\u4f1a\u8ba9\u4f60\u786e\u8ba4\u914d\u7f6e\u4fe1\u606f\uff0c\u5982\u679c\u68c0\u67e5\u65e0\u8bef\uff0c\u8f93\u5165",(0,s.kt)("inlineCode",{parentName:"p"},"yes"),"\uff0c\u7136\u540e\u56de\u8f66\u5373\u53ef."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/redis/redis-2.png",alt:null})),(0,s.kt)("p",null,"\u5230\u8fd9\u91cc\uff0cRedis-Cluster \u90e8\u7f72\u5c31\u5b8c\u6210\u4e86\u3002"),(0,s.kt)("p",null,"\u67e5\u8be2\u96c6\u7fa4\u4fe1\u606f\uff0c\u767b\u5f55\u4efb\u610f\u8282\u70b9\u5373\u53ef\u67e5\u8be2\u96c6\u7fa4\u4fe1\u606f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"root@ubuntu:/usr/local/redis/redis-cluster/7001\\# ./redis-cli -c -h 172.16.1.135 -p 7001\n\n172.16.1.135:7001> cluster nodes\n57cd4ece5741fd2d26c82862636131e9f6998266 172.16.1.135:7003@17003 master - 0 1589712996000 3 connected 10923-16383\ne87819de3b319f03448f2d24ea4c2a24f543aae8 172.16.1.135:7004@17004 slave 542db4615090a3e0b92b8bae2e6cac1232f18b7f 0 1589712998000 4 connected\n542db4615090a3e0b92b8bae2e6cac1232f18b7f 172.16.1.135:7002@17002 master - 0 1589713000951 2 connected 5461-10922\n7c73a8733bb892ac21ad701157a262e4f8fefc92 172.16.1.135:7005@17005 slave 57cd4ece5741fd2d26c82862636131e9f6998266 0 1589712999000 5 connected\n6ab7f7e59e5394f3f8f5eb5c4c68b64171722887 172.16.1.135:7006@17006 slave 94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 0 1589712999945 6 connected\n94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 172.16.1.135:7001@17001 myself,master - 0 1589712997000 1 connected 0-5460\n\n172.16.1.135:7001> cluster info\ncluster_state:ok\ncluster_slots_assigned:16384\ncluster_slots_ok:16384\ncluster_slots_pfail:0\ncluster_slots_fail:0\ncluster_known_nodes:6\ncluster_size:3\ncluster_current_epoch:6\ncluster_my_epoch:1\ncluster_stats_messages_ping_sent:359\ncluster_stats_messages_pong_sent:362\ncluster_stats_messages_sent:721\ncluster_stats_messages_ping_received:357\ncluster_stats_messages_pong_received:359\ncluster_stats_messages_meet_received:5\ncluster_stats_messages_received:721\n")),(0,s.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u96c6\u7fa4\u5206\u7247\u7684\u60c5\u51b5\uff0c\u53ca\u5176\u4ed6\u8be6\u7ec6\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u6d4b\u8bd5\uff0c\u67d0\u4e00\u4e3b\u8282\u70b9\u6302\u6389\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"root@ubuntu:/usr/local/redis/redis-cluster/7001\\# kill `ps aux | grep redis | grep 7001 | awk '{print $2}'`\n\n# \u767b\u5f55 slave1 \u67e5\u770b\u96c6\u7fa4\u72b6\u6001\n172.16.1.135:7002> CLUSTER NODES\n94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 172.16.1.135:7001@17001 master,fail - 1589713261516 1589713254000 1 disconnected 0-5460\n7c73a8733bb892ac21ad701157a262e4f8fefc92 172.16.1.135:7005@17005 slave 57cd4ece5741fd2d26c82862636131e9f6998266 0 1589713313000 5 connected\n57cd4ece5741fd2d26c82862636131e9f6998266 172.16.1.135:7003@17003 master - 0 1589713313441 3 connected 10923-16383\ne87819de3b319f03448f2d24ea4c2a24f543aae8 172.16.1.135:7004@17004 slave 542db4615090a3e0b92b8bae2e6cac1232f18b7f 0 1589713314452 4 connected\n542db4615090a3e0b92b8bae2e6cac1232f18b7f 172.16.1.135:7002@17002 myself,master - 0 1589713314000 2 connected 5461-10922\n6ab7f7e59e5394f3f8f5eb5c4c68b64171722887 172.16.1.135:7006@17006 slave 94780e8f265ddeaaa59528b8a0f567b2eb22d5e7 0 1589713315463 6 connected \n")),(0,s.kt)("p",null,"slave1 \u5df2\u6210\u529f\u4e0a\u4efb\uff5e"),(0,s.kt)("h2",{id:"\u9644\u5f55\u5feb\u901f\u642d\u5efa\u6d4b\u8bd5\u73af\u5883"},"\u9644\u5f55\uff1a\u5feb\u901f\u642d\u5efa\u6d4b\u8bd5\u73af\u5883"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efa\u591a\u5b9e\u4f8b\u76ee\u5f55\n[root@db01 ~]\\#  mkdir -p /data/700{0..5}\n\n# \u7f16\u8f91\u591a\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\n[root@db01 ~]\\#  vim /data/7000/redis.conf\nport 7000\ndaemonize yes\npidfile /data/7000/redis.pid\nloglevel notice\nlogfile "/data/7000/redis.log"\ndbfilename dump.rdb\ndir /data/7000\nprotected-mode no\ncluster-enabled yes\ncluster-config-file nodes.conf\ncluster-node-timeout 5000\nappendonly yes\n\n\n[root@db01 ~]\\#  vim /data/7001/redis.conf\nport 7001\ndaemonize yes\npidfile /data/7001/redis.pid\nloglevel notice\nlogfile "/data/7001/redis.log"\ndbfilename dump.rdb\ndir /data/7001\nprotected-mode no\ncluster-enabled yes\ncluster-config-file nodes.conf\ncluster-node-timeout 5000\nappendonly yes\n\n\n[root@db01 ~]\\#  vim /data/7002/redis.conf\nport 7002\ndaemonize yes\npidfile /data/7002/redis.pid\nloglevel notice\nlogfile "/data/7002/redis.log"\ndbfilename dump.rdb\ndir /data/7002\nprotected-mode no\ncluster-enabled yes\ncluster-config-file nodes.conf\ncluster-node-timeout 5000\nappendonly yes\n\n\n\n[root@db01 ~]\\#  vim /data/7003/redis.conf\nport 7003\ndaemonize yes\npidfile /data/7003/redis.pid\nloglevel notice\nlogfile "/data/7003/redis.log"\ndbfilename dump.rdb\ndir /data/7003\nprotected-mode no\ncluster-enabled yes\ncluster-config-file nodes.conf\ncluster-node-timeout 5000\nappendonly yes\n\n\n\n[root@db01 ~]\\#  vim /data/7004/redis.conf\nport 7004\ndaemonize yes\npidfile /data/7004/redis.pid\nloglevel notice\nlogfile "/data/7004/redis.log"\ndbfilename dump.rdb\ndir /data/7004\nprotected-mode no\ncluster-enabled yes\ncluster-config-file nodes.conf\ncluster-node-timeout 5000\nappendonly yes\n\n\n[root@db01 ~]\\#  vim /data/7005/redis.conf\nport 7005\ndaemonize yes\npidfile /data/7005/redis.pid\nloglevel notice\nlogfile "/data/7005/redis.log"\ndbfilename dump.rdb\ndir /data/7005\nprotected-mode no\ncluster-enabled yes\ncluster-config-file nodes.conf\ncluster-node-timeout 5000\nappendonly yes\n\n# \u542f\u52a8\u8282\u70b9\n[root@db01 ~]\\#  redis-server /data/7000/redis.conf \n[root@db01 ~]\\#  redis-server /data/7001/redis.conf \n[root@db01 ~]\\#  redis-server /data/7002/redis.conf \n[root@db01 ~]\\#  redis-server /data/7003/redis.conf \n[root@db01 ~]\\#  redis-server /data/7004/redis.conf \n[root@db01 ~]\\#  redis-server /data/7005/redis.conf \n\n# \u68c0\u67e5\u7aef\u53e3\n[root@db01 ~]\\#  netstat -lntup|grep 700*\ntcp        0      0 0.0.0.0:17003               0.0.0.0:*                   LISTEN      7433/redis-server *\ntcp        0      0 0.0.0.0:17004               0.0.0.0:*                   LISTEN      7437/redis-server *\ntcp        0      0 0.0.0.0:17005               0.0.0.0:*                   LISTEN      7443/redis-server *\ntcp        0      0 0.0.0.0:7000                0.0.0.0:*                   LISTEN      7423/redis-server *\ntcp        0      0 0.0.0.0:7001                0.0.0.0:*                   LISTEN      7425/redis-server *\ntcp        0      0 0.0.0.0:7002                0.0.0.0:*                   LISTEN      7429/redis-server *\ntcp        0      0 0.0.0.0:7003                0.0.0.0:*                   LISTEN      7433/redis-server *\ntcp        0      0 0.0.0.0:7004                0.0.0.0:*                   LISTEN      7437/redis-server *\ntcp        0      0 0.0.0.0:7005                0.0.0.0:*                   LISTEN      7443/redis-server *\ntcp        0      0 0.0.0.0:17000               0.0.0.0:*                   LISTEN      7423/redis-server *\ntcp        0      0 0.0.0.0:17001               0.0.0.0:*                   LISTEN      7425/redis-server *\ntcp        0      0 0.0.0.0:17002               0.0.0.0:*                   LISTEN      7429/redis-server *\ntcp        0      0 :::17003                    :::*                        LISTEN      7433/redis-server *\ntcp        0      0 :::17004                    :::*                        LISTEN      7437/redis-server *\ntcp        0      0 :::17005                    :::*                        LISTEN      7443/redis-server *\ntcp        0      0 :::7000                     :::*                        LISTEN      7423/redis-server *\ntcp        0      0 :::7001                     :::*                        LISTEN      7425/redis-server *\ntcp        0      0 :::7002                     :::*                        LISTEN      7429/redis-server *\ntcp        0      0 :::7003                     :::*                        LISTEN      7433/redis-server *\ntcp        0      0 :::7004                     :::*                        LISTEN      7437/redis-server *\ntcp        0      0 :::7005                     :::*                        LISTEN      7443/redis-server *\ntcp        0      0 :::17000                    :::*                        LISTEN      7423/redis-server *\ntcp        0      0 :::17001                    :::*                        LISTEN      7425/redis-server *\ntcp        0      0 :::17002                    :::*                        LISTEN      7429/redis-server *\n\n# \u68c0\u67e5\u8fdb\u7a0b\n[root@db01 ~]\\#  ps -ef|grep redis\nroot       7423      1  0 18:30 ?        00:00:00 redis-server *:7000 [cluster]\nroot       7425      1  0 18:30 ?        00:00:00 redis-server *:7001 [cluster]\nroot       7429      1  0 18:30 ?        00:00:00 redis-server *:7002 [cluster]\nroot       7433      1  0 18:30 ?        00:00:00 redis-server *:7003 [cluster]\nroot       7437      1  0 18:30 ?        00:00:00 redis-server *:7004 [cluster]\nroot       7443      1  0 18:30 ?        00:00:00 redis-server *:7005 [cluster]\n')),(0,s.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"redis cluster-tutorial: ",(0,s.kt)("a",{parentName:"li",href:"https://redis.io/topics/cluster-tutorial/"},"https://redis.io/topics/cluster-tutorial/"))))}p.isMDXComponent=!0}}]);