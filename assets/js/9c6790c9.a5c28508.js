"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[21],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=l,v=u["".concat(o,".").concat(c)]||u[c]||k[c]||r;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={},i=void 0,p={unversionedId:"LinuxBasics/LoadBalancer/Keepalived-Nginx/Nginx - keepalived\u5b9e\u73b0\u9ad8\u53ef\u7528\u96c6\u7fa4",id:"LinuxBasics/LoadBalancer/Keepalived-Nginx/Nginx - keepalived\u5b9e\u73b0\u9ad8\u53ef\u7528\u96c6\u7fa4",title:"Nginx - keepalived\u5b9e\u73b0\u9ad8\u53ef\u7528\u96c6\u7fa4",description:"1.\u56fe\u89e3Nginx\u4e03\u5c42\u4e0e\u56db\u5c42",source:"@site/docs/LinuxBasics/LoadBalancer/Keepalived-Nginx/Nginx - keepalived\u5b9e\u73b0\u9ad8\u53ef\u7528\u96c6\u7fa4.md",sourceDirName:"LinuxBasics/LoadBalancer/Keepalived-Nginx",slug:"/LinuxBasics/LoadBalancer/Keepalived-Nginx/Nginx - keepalived\u5b9e\u73b0\u9ad8\u53ef\u7528\u96c6\u7fa4",permalink:"/docs/LinuxBasics/LoadBalancer/Keepalived-Nginx/Nginx - keepalived\u5b9e\u73b0\u9ad8\u53ef\u7528\u96c6\u7fa4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/LoadBalancer/Keepalived-Nginx/Nginx - keepalived\u5b9e\u73b0\u9ad8\u53ef\u7528\u96c6\u7fa4.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Keepalived-Nginx",permalink:"/docs/category/keepalived-nginx"},next:{title:"Nginx + keepalived",permalink:"/docs/LinuxBasics/LoadBalancer/Keepalived-Nginx/Nginx - keepalived\u5feb\u901f\u914d\u7f6e\u53ca\u811a\u672c"}},o={},s=[{value:"1.\u56fe\u89e3Nginx\u4e03\u5c42\u4e0e\u56db\u5c42",id:"1\u56fe\u89e3nginx\u4e03\u5c42\u4e0e\u56db\u5c42",level:2},{value:"2.\u8d1f\u8f7d\u5747\u8861\u624b\u673a\u7aef\u914d\u7f6e",id:"2\u8d1f\u8f7d\u5747\u8861\u624b\u673a\u7aef\u914d\u7f6e",level:2},{value:"\u8fdb\u5165\u9ad8\u53ef\u7528\u73af\u8282",id:"\u8fdb\u5165\u9ad8\u53ef\u7528\u73af\u8282",level:2},{value:"3.\u9ad8\u53ef\u7528\u6982\u5ff5",id:"3\u9ad8\u53ef\u7528\u6982\u5ff5",level:2},{value:"3.1.\u4ec0\u4e48\u662f\u9ad8\u53ef\u7528",id:"31\u4ec0\u4e48\u662f\u9ad8\u53ef\u7528",level:3},{value:"3.2.\u9ad8\u53ef\u7528\u4f7f\u7528\u573a\u666f",id:"32\u9ad8\u53ef\u7528\u4f7f\u7528\u573a\u666f",level:3},{value:"4.Keepalive\u5de5\u4f5c \u539f\u7406",id:"4keepalive\u5de5\u4f5c-\u539f\u7406",level:2},{value:"5.keepalived\u9ad8\u53ef\u7528\u5b89\u88c5\u90e8\u7f72",id:"5keepalived\u9ad8\u53ef\u7528\u5b89\u88c5\u90e8\u7f72",level:2},{value:"5.1.\u73af\u5883\u89c4\u5212",id:"51\u73af\u5883\u89c4\u5212",level:3},{value:"5.2.\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u5206\u522b\u5b89\u88c5keepalive",id:"52\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u5206\u522b\u5b89\u88c5keepalive",level:3},{value:"5.3.\u914d\u7f6ekeepalive-master",id:"53\u914d\u7f6ekeepalive-master",level:3},{value:"5.4.\u914d\u7f6ekeepalive-backup",id:"54\u914d\u7f6ekeepalive-backup",level:3},{value:"5.5.\u542f\u52a8\u4e3b\u5907\u670d\u52a1\u5668\u7684keepalived",id:"55\u542f\u52a8\u4e3b\u5907\u670d\u52a1\u5668\u7684keepalived",level:3},{value:"6.\u68c0\u67e5\u865a\u62dfIP\u662f\u5426\u6f02\u79fb",id:"6\u68c0\u67e5\u865a\u62dfip\u662f\u5426\u6f02\u79fb",level:2},{value:"7.keepalived\u4e3b\u5907\u914d\u7f6e\u533a\u522b",id:"7keepalived\u4e3b\u5907\u914d\u7f6e\u533a\u522b",level:2},{value:"8.keepalived\u9ad8\u53ef\u7528\u914d\u7f6e",id:"8keepalived\u9ad8\u53ef\u7528\u914d\u7f6e",level:2},{value:"8.1.\u73af\u5883\u89c4\u5212",id:"81\u73af\u5883\u89c4\u5212",level:3},{value:"8.2.\u5b9e\u73b0\u601d\u8def",id:"82\u5b9e\u73b0\u601d\u8def",level:3},{value:"8.3.\u90e8\u7f72web\u8282\u70b9",id:"83\u90e8\u7f72web\u8282\u70b9",level:3},{value:"8.4.\u90e8\u7f72nginx\u8d1f\u8f7d\u5747\u8861",id:"84\u90e8\u7f72nginx\u8d1f\u8f7d\u5747\u8861",level:3},{value:"8.5.\u914d\u7f6ekeepalived\u4e3b\u5907",id:"85\u914d\u7f6ekeepalived\u4e3b\u5907",level:3},{value:"8.5.1.\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u5206\u522b\u5b89\u88c5keepalive",id:"851\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u5206\u522b\u5b89\u88c5keepalive",level:4},{value:"8.5.2.\u914d\u7f6ekeepalive-master",id:"852\u914d\u7f6ekeepalive-master",level:4},{value:"8.5.3.\u914d\u7f6ekeepalive-backup",id:"853\u914d\u7f6ekeepalive-backup",level:4},{value:"8.5.4.\u542f\u52a8\u4e3b\u5907\u670d\u52a1\u5668\u7684keepalived",id:"854\u542f\u52a8\u4e3b\u5907\u670d\u52a1\u5668\u7684keepalived",level:4},{value:"8.6.\u9875\u9762\u8bbf\u95ee",id:"86\u9875\u9762\u8bbf\u95ee",level:3},{value:"8.7.\u6293\u5305\u9a8c\u8bc1",id:"87\u6293\u5305\u9a8c\u8bc1",level:3}],d={toc:s};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u56fe\u89e3nginx\u4e03\u5c42\u4e0e\u56db\u5c42"},"1.\u56fe\u89e3Nginx\u4e03\u5c42\u4e0e\u56db\u5c42"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk1MzY1OA==,size_16,color_FFFFFF,t_70.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,l.kt)("p",null,"\u5927\u578b\u4f01\u4e1a\u67b6\u6784\u4e00\u822c\u662f\u7528\u6237\u5148\u8bbf\u95ee\u5230\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\uff0c\u5728\u7531\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u8f6c\u53d1\u81f3\u4e03\u5c42\u670d\u52a1\u5728\u5747\u8861\uff0c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u518d\u8f6c\u53d1\u81f3\u540e\u7aef\u670d\u52a1\u5668\uff0c\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u53ea\u8d77\u5230\u4e00\u4e2a\u5206\u6d41\u7684\u4f5c\u7528\uff0c\u6839\u636e\u7528\u6237\u8bbf\u95ee\u7684\u7aef\u53e3\uff0c\u6bd4\u5982\u8bf480\u7aef\u53e3\u5c31\u4f1a\u8df3\u8f6c\u81f3\u4e03\u5c42\u7684\u5bf9\u5e94\u7684\u96c6\u7fa4\uff0c\u4e24\u53f0\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\u662f\u4e00\u6a21\u4e00\u6837\u7684\uff0c\u5f62\u6210\u9ad8\u53ef\u7528\uff0c\u4e03\u5c42\u7684\u914d\u7f6e\u4e5f\u662f\u4e00\u6a21\u4e00\u6837\u7684\uff0c\u5f53\u67091500\u4e2a\u8bf7\u6c42\u9700\u8981\u54cd\u5e94\u65f6\uff0c\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5c31\u4f1a\u5e73\u5747\u5c061500\u4e2a\u8bf7\u6c42\u5206\u7ed9\u6025\u7fa4\u4e2d\u7684lb\uff0c\u6bcf\u4e2alb\u54cd\u5e94500\u4e2a\u8bf7\u6c42\uff0c\u51cf\u8f7b\u5355\u70b9\u7684\u538b\u529b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861\u7684\u9009\u62e9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Nginx \u56db\u5c42\u548c\u4e03\u5c42"),(0,l.kt)("li",{parentName:"ul"},"LVS \u56db\u5c42\uff0c\u9700\u8981\u61c2\u7f51\u7edc\uff08NAT\uff0ciptables\uff09"),(0,l.kt)("li",{parentName:"ul"},"HAproxy \u56db\u5c42\u548c\u4e03\u5c42"),(0,l.kt)("li",{parentName:"ul"},"F5 \u56db\u5c42\u548c\u4e03\u5c42\uff0c\u786c\u4ef6\u8bbe\u5907\uff0c\u4e0d\u9002\u5408\u4e91\u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},"SLB \u56db\u5c42"))),(0,l.kt)("li",{parentName:"ul"},"session",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u8bdd\u4fdd\u6301\uff0c\u53ef\u4ee5\u91c7\u7528ip_hash"),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u8bdd\u5171\u4eab\uff0c\u6700\u597d\u5199\u5165 redis\u6216\u8005mysql"),(0,l.kt)("li",{parentName:"ul"},"\u5199\u5165\u6d4f\u89c8\u5668\uff0c\u7531\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0")))),(0,l.kt)("h2",{id:"2\u8d1f\u8f7d\u5747\u8861\u624b\u673a\u7aef\u914d\u7f6e"},"2.\u8d1f\u8f7d\u5747\u8861\u624b\u673a\u7aef\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'upstream firefox {\n    server 172.31.57.133:80;\n}\n\nupstream chrome {\n    server 172.31.57.133:8080;\n}\n\nupstream iphone {\n    server 172.31.57.134:8081;\n}\n\nupstream android {\n    server172.31.57.134:8081\uff1b\n}\n\nupstream default {\n    server 172.31.57.134:80\uff1b\n}\n\nserver {\n    if ($http_user_agent ~* "iphone"){\n        proxy_pass http://iphone;\n    }\n    \n    if ($http_user_agent ~* "chrome"){\n        proxy_pass http://chrome\n    }\n}\n')),(0,l.kt)("h2",{id:"\u8fdb\u5165\u9ad8\u53ef\u7528\u73af\u8282"},"\u8fdb\u5165\u9ad8\u53ef\u7528\u73af\u8282"),(0,l.kt)("h2",{id:"3\u9ad8\u53ef\u7528\u6982\u5ff5"},"3.\u9ad8\u53ef\u7528\u6982\u5ff5"),(0,l.kt)("h3",{id:"31\u4ec0\u4e48\u662f\u9ad8\u53ef\u7528"},"3.1.\u4ec0\u4e48\u662f\u9ad8\u53ef\u7528"),(0,l.kt)("p",null,"\u4e00\u822c\u63072\u53f0\u673a\u5668\u542f\u52a8\u7740\u76f8\u540c\u7684\u4e1a\u52a1\u7cfb\u7edf\uff0c\u5f53\u6709\u4e00\u53f0\u673a\u5668down\u673a\u4e86\uff0c\u53e6\u5916\u4e00\u53f0\u670d\u52a1\u5668\u80fd\u5feb\u901f\u7684\u63a5\u7ba1\uff0c\u5bf9\u4e8e\u8bbf\u95ee\u5f53\u7528\u6237\u662f\u65e0\u611f\u77e5\u7684"),(0,l.kt)("h3",{id:"32\u9ad8\u53ef\u7528\u4f7f\u7528\u573a\u666f"},"3.2.\u9ad8\u53ef\u7528\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u4e1a\u52a1\u7cfb\u7edf\u9700\u8981\u4fdd\u8bc17x24\u5c0f\u65f6\u4e0ddown\u673a\uff0c\u4f5c\u4e3a\u4e1a\u52a1\u6765\u8bf4\u8981\u968f\u673a\u90fd\u53ef\u4ee5\u7528\uff0c\u8ba9\u4f60\u7684\u4e1a\u52a1\u7cfb\u7edf\u66f4\u987d\u5f3a\u3002"),(0,l.kt)("h2",{id:"4keepalive\u5de5\u4f5c-\u539f\u7406"},"4.Keepalive\u5de5\u4f5c \u539f\u7406"),(0,l.kt)("p",null,"vrrp\u5de5\u4f5c\u539f\u7406"),(0,l.kt)("p",null,"1.\u5c06\u6240\u6709\u8bbe\u5907\u52a0\u5165\u5230\u4e00\u4e2a\u865a\u62df\u7ec4"),(0,l.kt)("p",null,"2.\u5177\u6709\u76f8\u540c\u7684\u865a\u62dfip\uff08\u4f1a\u6709\u5bf9\u5e94\u7684\u865a\u62dfMAC\u5730\u5740\uff09"),(0,l.kt)("p",null,"3.\u4e3b\u673a\u4f1a\u5728\u53d1\u9001\u6570\u636e\u7684\u65f6\u5019\uff0c\u5728\u6570\u636e\u5305\u7684\u76ee\u6807\u5730\u5740\u5199\u4e0a\u865a\u62df\u7684IP\u53caMAC"),(0,l.kt)("p",null,"4.\u865a\u62df\u7ec4\u6536\u5230\u6570\u636e\u540e\uff0c\u4f1a\u5c06\u76ee\u6807\u5730\u5740\u8f6c\u6362\u6210\u5f53\u524d\u865a\u62df\u7ec4\u7684master\u8bbe\u5907\u7684IP\u548cMAC"),(0,l.kt)("p",null,"vrrp\u89d2\u8272\uff1a\u4e00\u4e3b\u591a\u5907"),(0,l.kt)("p",null,"\u5b9e\u9645\u5de5\u4f5c\u89d2\u8272\uff1a\u4e3b"),(0,l.kt)("p",null,"\u901a\u8fc7\u4f18\u5148\u7ea7\u6765\u9009\u4e3e\u4e3b\u5907\uff1a\u4f18\u5148\u7ea7\u8d8a\u9ad8\u8d8a\u4f18\u5148"),(0,l.kt)("p",null,"\u5982\u679c\u865a\u62df\u7ec4\u4e2d\u7684\u670d\u52a1\u5668\u90fd\u8ba4\u4e3a\u81ea\u5df1\u662fmaster\u8fd9\u65f6\u5c31\u4ea7\u751f\u4e86\u88c2\u8111"),(0,l.kt)("h2",{id:"5keepalived\u9ad8\u53ef\u7528\u5b89\u88c5\u90e8\u7f72"},"5.keepalived\u9ad8\u53ef\u7528\u5b89\u88c5\u90e8\u7f72"),(0,l.kt)("h3",{id:"51\u73af\u5883\u89c4\u5212"},"5.1.\u73af\u5883\u89c4\u5212"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u7cfb\u7edf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"ip\u5730\u5740"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"centos7.5"),(0,l.kt)("td",{parentName:"tr",align:null},"keepalive-master"),(0,l.kt)("td",{parentName:"tr",align:null},"ens33:192.168.81.210")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"centos7.5"),(0,l.kt)("td",{parentName:"tr",align:null},"keepalive-backup"),(0,l.kt)("td",{parentName:"tr",align:null},"ens33:192.168.81.220")))),(0,l.kt)("h3",{id:"52\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u5206\u522b\u5b89\u88c5keepalive"},"5.2.\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u5206\u522b\u5b89\u88c5keepalive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"1.\u914d\u7f6eyum\u4ed3\u5e93\uff0c\u4e0b\u8f7d\u955c\u50cf\u6e90\n[root@localhost ~]\\# curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo \n[root@localhost ~]\\# curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n\n2.\u5b89\u88c5keepalive\uff0c\u5c06\u8f6f\u4ef6\u5305\u4e0b\u8f7d\u81f3\u672c\u5730\u63a8\u9001\u81f3\u5176\u4ed6\u670d\u52a1\u5668\uff0c\u65b9\u4fbf\u673a\u5668\u5b89\u88c5\n[root@localhost ~]\\# yum -y install keepalived --downloaddir=/root/soft\n[root@localhost ~]\\# scp keepalived-1.3.5-16.el7.x86_64.rpm root@192.168.81.220:/root\n\n3.\u7b2c\u4e8c\u53f0\u673a\u5668\u76f4\u63a5\u5b89\u88c5\u4e0b\u8f7d\u597d\u7684rpm\u5305\u5373\u53ef\n[root@localhost ~]\\# yum localinstall /root/keepalived-1.3.5-16.el7.x86_64.rpm -y\n")),(0,l.kt)("h3",{id:"53\u914d\u7f6ekeepalive-master"},"5.3.\u914d\u7f6ekeepalive-master"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"[root@localhost keepalived]\\# cp keepalived.conf keepalived.conf.bak\n[root@localhost keepalived]\\# vim keepalived.conf\nglobal_defs {\n   router_id lb01           //\u8def\u7531\u540d\u79f0\uff0c\u4e0d\u80fd\u4f7f\u7528\u76f8\u540c\u7684\u8def\u7531\u540d\u79f0\n}\n\nvrrp_instance VI_1 {        //\u5b9a\u4e49\u4e00\u4e2a\u865a\u62df\u7ec4\u5b9e\u4f8b\uff0c\u5b9e\u4f8b\u540d\u662fVI_1\uff0c\u4e0d\u5efa\u8bae\u4fee\u6539\n    state MASTER                //\u670d\u52a1\u5668\u7684\u72b6\u6001\n    interface ens33             //\u63d0\u4f9b\u670d\u52a1\u7684\u7f51\u5361\u540d\u79f0\u5373\u901a\u4fe1\u7aef\u53e3\n    virtual_router_id 51            //\u5b9e\u4f8b\u7684ID\n    priority 150            //\u4f18\u5148\u7ea7\uff0cmaster\u8981\u6bd4backup\u7684\u9ad8\uff0c\u9ed8\u8ba4100\uff0c\u6700\u9ad8255\n    advert_int 1            //\u5fc3\u8df3\u5efa\u54e5\uff0c\u4e5f\u5c31\u662f\u5065\u5eb7\u68c0\u6d4b\u5468\u671f\uff0c1\u8868\u793a1\u79d2\u5185\u4e0ebackup\u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u68c0\u67e5\u5931\u8d25\u7acb\u523b\u62a2\u5360\n    authentication {        \n        auth_type PASS      //PASS\u8ba4\u8bc1\u7c7b\u578b\uff0c\u6b64\u53c2\u6570\u5907\u8282\u70b9\u548c\u4e3b\u8282\u70b9\u76f8\u540c\n        auth_pass 1111      //\u5bc6\u7801\u662f1111\uff0c\u6b64\u53c2\u6570\u5907\u8282\u70b9\u548c\u4e3b\u8282\u70b9\u76f8\u540c\n    }       \n    virtual_ipaddress {         //\u5b9a\u4e49\u4e00\u4e2a\u6f02\u79fbip\n       192.168.81.100\n    }\n}\n")),(0,l.kt)("h3",{id:"54\u914d\u7f6ekeepalive-backup"},"5.4.\u914d\u7f6ekeepalive-backup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"[root@localhost keepalived]\\# cp keepalived.conf keepalived.conf.bak\n[root@localhost keepalived]\\# vim keepalived.conf\nglobal_defs {\n    router_id lb02\n}\n\nvrrp_instance VI_1 {\n    state BACKUP\n    interface ens33\n    virtual_router_id 51\n    priority 100\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass 1111\n    }\n    virtual_ipaddress {\n       192.168.81.100\n    }\n}\n")),(0,l.kt)("h3",{id:"55\u542f\u52a8\u4e3b\u5907\u670d\u52a1\u5668\u7684keepalived"},"5.5.\u542f\u52a8\u4e3b\u5907\u670d\u52a1\u5668\u7684keepalived"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"keepalived-master\n[root@localhost keepalived]\\# systemctl start keepalived\n[root@localhost keepalived]\\# systemctl enable keepalived\n\nkeepalived-backup\n[root@localhost keepalived]\\# systemctl start keepalived\n[root@localhost keepalived]\\# systemctl enable keepalived\n")),(0,l.kt)("h2",{id:"6\u68c0\u67e5\u865a\u62dfip\u662f\u5426\u6f02\u79fb"},"6.\u68c0\u67e5\u865a\u62dfIP\u662f\u5426\u6f02\u79fb"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u865a\u62dfIP\u6f02\u79fb\u65f6\u4f1a\u4ea7\u751f\u4e00\u4e2a\u4e22\u5305\u73b0\u8c61\uff0cmaster\u6216\u8005slave\u5c06\u8fdb\u884c\u62a2\u5360")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk1MzY1OA==,size_16,color_FFFFFF,t_70-20220615154102444.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u4e0b\u9762\u5f00\u59cb\u9a8c\u8bc1\uff0c\u5177\u4f53\u601d\u8def\uff1a"),(0,l.kt)("p",null," 1.\u4e3b\u8282\u70b9\u67e5\u770b\u662f\u5426\u5b58\u5728\u865a\u62dfip"),(0,l.kt)("p",null," 2.\u4e3b\u8282\u70b9\u505c\u6389keepalived\u8fdb\u7a0b"),(0,l.kt)("p",null," 3.\u89c2\u5bdf\u4e22\u5305"),(0,l.kt)("p",null," 4.\u4ece\u8282\u70b9\u9a8c\u8bc1\u662f\u5426\u5b58\u5728\u865a\u62dfip"),(0,l.kt)("p",null," 5.\u4e3b\u8282\u70b9\u5f00\u542fkeepalived\u8fdb\u7a0b"),(0,l.kt)("p",null," 6.\u4e3b\u8282\u70b9\u67e5\u770b\u662f\u5426\u62a2\u5360\u6210\u529f\u865a\u62dfip"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728keepalive-master\u4e0a\u64cd\u4f5c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u5df2\u7ecf\u83b7\u5f97\u6f02\u79fbip\n[root@jxl ~]\\# ip add show dev ens33\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 00:0c:29:46:66:34 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.81.220/24 brd 192.168.81.255 scope global ens33\n       valid_lft forever preferred_lft forever\n    inet 192.168.81.100/32 scope global ens33\n       valid_lft forever preferred_lft forever\n    inet6 fe80::20c:29ff:fe46:6634/64 scope link \n       valid_lft forever preferred_lft forever\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728keepalive-master\u4e0a\u6062\u590dmaster\u8282\u70b9\u5e76\u9a8c\u8bc1\u662f\u5426\u5b58\u5728\u6f02\u79fbip")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"[root@localhost ~]\\# systemctl start keepalived\n[root@localhost ~]\\# ip add show dev ens33\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 00:0c:29:55:83:b7 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.81.210/24 brd 192.168.81.255 scope global ens33\n       valid_lft forever preferred_lft forever\n    inet 192.168.81.100/32 scope global ens33\n       valid_lft forever preferred_lft forever\n    inet6 fe80::20c:29ff:fe55:83b7/64 scope link \n       valid_lft forever preferred_lft forever\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728keepalive-backup\u4e0a\u9a8c\u8bc1\u6f02\u79fbip\u662f\u5426\u5df2\u4e22\u5931")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"[root@jxl ~]\\# ip add show dev ens33\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 00:0c:29:46:66:34 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.81.220/24 brd 192.168.81.255 scope global ens33\n       valid_lft forever preferred_lft forever\n    inet6 fe80::20c:29ff:fe46:6634/64 scope link \n       valid_lft forever preferred_lft forever\n\n")),(0,l.kt)("h2",{id:"7keepalived\u4e3b\u5907\u914d\u7f6e\u533a\u522b"},"7.keepalived\u4e3b\u5907\u914d\u7f6e\u533a\u522b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"master\u914d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"backup\u914d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"router_id lb01"),(0,l.kt)("td",{parentName:"tr",align:null},"router_id lb02"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state MASTER"),(0,l.kt)("td",{parentName:"tr",align:null},"state BACKUP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"priority 150"),(0,l.kt)("td",{parentName:"tr",align:null},"priority 100"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u4f18\u5148\u7ea7")))),(0,l.kt)("h2",{id:"8keepalived\u9ad8\u53ef\u7528\u914d\u7f6e"},"8.keepalived\u9ad8\u53ef\u7528\u914d\u7f6e"),(0,l.kt)("h3",{id:"81\u73af\u5883\u89c4\u5212"},"8.1.\u73af\u5883\u89c4\u5212"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"IP"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalived-master"),(0,l.kt)("td",{parentName:"tr",align:null},"keepalived\u4e3b"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.81.210")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalived-backup"),(0,l.kt)("td",{parentName:"tr",align:null},"keepalived\u5907"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.81.220")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nginx-\u8d1f\u8f7d1"),(0,l.kt)("td",{parentName:"tr",align:null},"nginx\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.81.210")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nginx-\u8d1f\u8f7d2"),(0,l.kt)("td",{parentName:"tr",align:null},"nginx\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.81.220")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"web01"),(0,l.kt)("td",{parentName:"tr",align:null},"nginx"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.81.230")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"web02"),(0,l.kt)("td",{parentName:"tr",align:null},"nginx"),(0,l.kt)("td",{parentName:"tr",align:null},"192.168.81.240")))),(0,l.kt)("h3",{id:"82\u5b9e\u73b0\u601d\u8def"},"8.2.\u5b9e\u73b0\u601d\u8def"),(0,l.kt)("p",null,"1.\u5148\u90e8\u7f72web\u8282\u70b9\uff0c\u5728web\u8282\u70b9\u4e0a\u90e8\u7f72LNMP\u5e73\u53f0\uff0c\u5e76\u90e8\u7f72\u7f51\u7ad9\u6e90\u7801\u5305"),(0,l.kt)("p",null,"2.\u90e8\u7f72nginx\u8d1f\u8f7d\u5747\u8861\uff0c\u518d\u7b2c\u4e00\u53f0\u90e8\u7f72\u597d\u540e\u76f4\u63a5\u63a8\u9001\u8fc7\u53bb"),(0,l.kt)("p",null,"3.\u90e8\u7f72keepalive\u4e3b\u5907"),(0,l.kt)("h3",{id:"83\u90e8\u7f72web\u8282\u70b9"},"8.3.\u90e8\u7f72web\u8282\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u8be6\u7ec6\u90e8\u7f72\u6b65\u9aa4\u8bf7\u53c2\u8003https://blog.csdn.net/weixin_44953658/article/details/105928687\n")),(0,l.kt)("h3",{id:"84\u90e8\u7f72nginx\u8d1f\u8f7d\u5747\u8861"},"8.4.\u90e8\u7f72nginx\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"lb01\u914d\u7f6e\n[root@localhost ~]\\# yum -y install nginx \n[root@localhost ~]\\# cd /etc/nginx/conf.d\n[root@localhost ~]\\# vim lb_wecenter.conf\nupstream lb_wecenter {\n    server 192.168.81.230 weight=1 max_fails=3 fail_timeout=60;\n    server 192.168.81.240 weight=1 max_fails=3 fail_timeout=60;\n}\n\nserver {\n    listen 80;\n    server_name jxl.wecenter.com;\n    client_max_body_size 200m;\n    access_log /nginx_log/lb_jxl_wecenter_access.log main;\n    \n    location / {\n        proxy_pass http://lb_wecenter;\n        proxy_set_header HOST $http_host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_connect_timeout 30;\n        proxy_send_timeout 60;\n        proxy_read_timeout 60;\n        proxy_buffering on;\n        proxy_buffer_size 256k;\n        proxy_buffers 4 256k;\n    }\n}\n\nlb02\u914d\u7f6e\n[root@localhost ~]\\# yum -y install nginx\n\u7136\u540e\u5728lb01\u4f7f\u7528scp\u5c06\u914d\u7f6e\u6587\u4ef6\u63a8\u9001\u5230lb02\u4e0a\n[root@localhost ~]\\# scp -rp /etc/nginx/* root@192.168.81.220:/etc/nginx/\n\n\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u542f\u52a8nginx\n[root@localhost ~]\\# systemctl start nginx \n[root@localhost ~]\\# systemctl enable nginx\n\n")),(0,l.kt)("h3",{id:"85\u914d\u7f6ekeepalived\u4e3b\u5907"},"8.5.\u914d\u7f6ekeepalived\u4e3b\u5907"),(0,l.kt)("h4",{id:"851\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u5206\u522b\u5b89\u88c5keepalive"},"8.5.1.\u5728\u4e24\u53f0\u673a\u5668\u4e0a\u5206\u522b\u5b89\u88c5keepalive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"1.\u914d\u7f6eyum\u4ed3\u5e93\uff0c\u4e0b\u8f7d\u955c\u50cf\u6e90\n[root@localhost ~]\\# curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo \n[root@localhost ~]\\# curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n\n2.\u5b89\u88c5keepalive\uff0c\u5c06\u8f6f\u4ef6\u5305\u4e0b\u8f7d\u81f3\u672c\u5730\u63a8\u9001\u81f3\u5176\u4ed6\u670d\u52a1\u5668\uff0c\u65b9\u4fbf\u673a\u5668\u5b89\u88c5\n[root@localhost ~]\\# yum -y install keepalived --downloaddir=/root/soft\n[root@localhost ~]\\# scp keepalived-1.3.5-16.el7.x86_64.rpm root@192.168.81.220:/root\n\n3.\u7b2c\u4e8c\u53f0\u673a\u5668\u76f4\u63a5\u5b89\u88c5\u4e0b\u8f7d\u597d\u7684rpm\u5305\u5373\u53ef\n[root@localhost ~]\\# yum localinstall /root/keepalived-1.3.5-16.el7.x86_64.rpm -y\n")),(0,l.kt)("h4",{id:"852\u914d\u7f6ekeepalive-master"},"8.5.2.\u914d\u7f6ekeepalive-master"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"[root@localhost keepalived]\\# cp keepalived.conf keepalived.conf.bak\n[root@localhost keepalived]\\# vim keepalived.conf\nglobal_defs {\n   router_id lb01           //\u8def\u7531\u540d\u79f0\uff0c\u4e0d\u80fd\u4f7f\u7528\u76f8\u540c\u7684\u8def\u7531\u540d\u79f0\n}\n\nvrrp_instance VI_1 {        //\u5b9a\u4e49\u4e00\u4e2a\u865a\u62df\u7ec4\u5b9e\u4f8b\uff0c\u5b9e\u4f8b\u540d\u662fVI_1\uff0c\u4e0d\u5efa\u8bae\u4fee\u6539\n    state MASTER                //\u670d\u52a1\u5668\u7684\u72b6\u6001\n    interface ens33             //\u63d0\u4f9b\u670d\u52a1\u7684\u7f51\u5361\u540d\u79f0\u5373\u901a\u4fe1\u7aef\u53e3\n    virtual_router_id 51            //\u5b9e\u4f8b\u7684ID\n    priority 150            //\u4f18\u5148\u7ea7\uff0cmaster\u8981\u6bd4backup\u7684\u9ad8\uff0c\u9ed8\u8ba4100\uff0c\u6700\u9ad8255\n    advert_int 1            //\u5fc3\u8df3\u5efa\u54e5\uff0c\u4e5f\u5c31\u662f\u5065\u5eb7\u68c0\u6d4b\u5468\u671f\uff0c1\u8868\u793a1\u79d2\u5185\u4e0ebackup\u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u68c0\u67e5\u5931\u8d25\u7acb\u523b\u62a2\u5360\n    authentication {        \n        auth_type PASS      //PASS\u8ba4\u8bc1\u7c7b\u578b\uff0c\u6b64\u53c2\u6570\u5907\u8282\u70b9\u548c\u4e3b\u8282\u70b9\u76f8\u540c\n        auth_pass 1111      //\u5bc6\u7801\u662f1111\uff0c\u6b64\u53c2\u6570\u5907\u8282\u70b9\u548c\u4e3b\u8282\u70b9\u76f8\u540c\n    }       \n    virtual_ipaddress {         //\u5b9a\u4e49\u4e00\u4e2a\u6f02\u79fbip\n       192.168.81.100\n    }\n}\n")),(0,l.kt)("h4",{id:"853\u914d\u7f6ekeepalive-backup"},"8.5.3.\u914d\u7f6ekeepalive-backup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"[root@localhost keepalived]\\# cp keepalived.conf keepalived.conf.bak\n[root@localhost keepalived]\\# vim keepalived.conf\nglobal_defs {\n    router_id lb02\n}\n\nvrrp_instance VI_1 {\n    state BACKUP\n    interface ens33\n    virtual_router_id 51\n    priority 100\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass 1111\n    }\n    virtual_ipaddress {\n       192.168.81.100\n    }\n}\n")),(0,l.kt)("h4",{id:"854\u542f\u52a8\u4e3b\u5907\u670d\u52a1\u5668\u7684keepalived"},"8.5.4.\u542f\u52a8\u4e3b\u5907\u670d\u52a1\u5668\u7684keepalived"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"keepalived-master\n[root@localhost keepalived]\\# systemctl start keepalived\n[root@localhost keepalived]\\# systemctl enable keepalived\n\nkeepalived-backup\n[root@localhost keepalived]\\# systemctl start keepalived\n[root@localhost keepalived]\\# systemctl enable keepalived\n")),(0,l.kt)("h3",{id:"86\u9875\u9762\u8bbf\u95ee"},"8.6.\u9875\u9762\u8bbf\u95ee"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk1MzY1OA==,size_16,color_FFFFFF,t_70-20220615154102658.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,l.kt)("h3",{id:"87\u6293\u5305\u9a8c\u8bc1"},"8.7.\u6293\u5305\u9a8c\u8bc1"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk1MzY1OA==,size_16,color_FFFFFF,t_70-20220615154102932.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u7ae0\u8f6c\u8f7d\u81ea\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://blog.51cto.com/jiangxl/5169896"},"https://blog.51cto.com/jiangxl/5169896")),(0,l.kt)("p",{parentName:"blockquote"},"\u4ec5\u505a\u4e2a\u4eba\u5907\u4efd\u5b66\u4e60\u4f7f\u7528\u3002")))}k.isMDXComponent=!0}}]);