"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[4641],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(g,p(p({ref:n},c),{},{components:t})):a.createElement(g,p({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={},p="Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168",o={unversionedId:"LinuxBasics/Web-Servers/Nginx/Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168",id:"LinuxBasics/Web-Servers/Nginx/Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168",title:"Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168",description:"\u7cfb\u7edf\u53c2\u6570\u4f18\u5316",source:"@site/docs/LinuxBasics/Web-Servers/Nginx/Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168.md",sourceDirName:"LinuxBasics/Web-Servers/Nginx",slug:"/LinuxBasics/Web-Servers/Nginx/Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Web-Servers/Nginx/Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Nginx \u5feb\u901f\u624b\u518c",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx \u5feb\u901f\u914d\u7f6e\u624b\u518c"},next:{title:"Nginx \u722c\u866b\u9650\u5236",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx \u722c\u866b\u9650\u5236"}},i={},s=[{value:"\u7cfb\u7edf\u53c2\u6570\u4f18\u5316",id:"\u7cfb\u7edf\u53c2\u6570\u4f18\u5316",level:2},{value:"\u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u4f18\u5316",id:"\u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u4f18\u5316",level:2},{value:"\u9759\u6001\u8d44\u6e90\u4f18\u5316",id:"\u9759\u6001\u8d44\u6e90\u4f18\u5316",level:2},{value:"\u9759\u6001\u6587\u4ef6\u8bfb\u53d6\u4f18\u5316",id:"\u9759\u6001\u6587\u4ef6\u8bfb\u53d6\u4f18\u5316",level:2},{value:"\u9759\u6001\u8d44\u6e90\u538b\u7f29",id:"\u9759\u6001\u8d44\u6e90\u538b\u7f29",level:2},{value:"\u9632\u76d7\u94fe",id:"\u9632\u76d7\u94fe",level:2},{value:"\u4f7f\u7528\u5185\u7f6e\u6a21\u5757",id:"\u4f7f\u7528\u5185\u7f6e\u6a21\u5757",level:2},{value:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u6a21\u5757",id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u6a21\u5757",level:3},{value:"\u8de8\u57df\u8bbf\u95ee",id:"\u8de8\u57df\u8bbf\u95ee",level:2},{value:"\u7981\u6b62IP\u76f4\u63a5\u8bbf\u95ee",id:"\u7981\u6b62ip\u76f4\u63a5\u8bbf\u95ee",level:2},{value:"\u9644\u5f55\uff1a\u793a\u4f8b\u5b8c\u6574\u901a\u7528\u914d\u7f6e",id:"\u9644\u5f55\u793a\u4f8b\u5b8c\u6574\u901a\u7528\u914d\u7f6e",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nginx-\u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168"},"Nginx \u6027\u80fd\u4f18\u5316\u4e0e\u5b89\u5168"),(0,r.kt)("h2",{id:"\u7cfb\u7edf\u53c2\u6570\u4f18\u5316"},"\u7cfb\u7edf\u53c2\u6570\u4f18\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vim /etc/security/limits.conf\n# ---------------------------\n# 1\u3001\u7cfb\u7edf\u5168\u5c40\u6027\u4fee\u6539\u3002\n# * \u4ee3\u8868\u6240\u6709\u666e\u901a\u7528\u6237\n* soft nofile 25535\n* hard nofile 25535\n\n# 2.\u7528\u6237\u5c40\u90e8\u6027\u4fee\u6539\n# \u9488\u5bf9root\u7528\u6237\uff0csoft\u4ec5\u63d0\u9192\uff0chard\u9650\u5236\uff0cnofile\u6253\u5f00\u6700\u5927\u6587\u4ef6\u6570\nroot soft nofile 65535\nroot hard nofile 65535\n# ---------------------------\n# 3.\u8fdb\u7a0b\u5c40\u90e8\u6027\u4fee\u6539\n# \u9488\u5bf9nginx\u8fdb\u7a0b\uff0cnginx\u81ea\u5e26\u914d\u7f6e\nworker_rlimit_nofile 30000\n\n# 4.\u8c03\u6574\u5185\u6838\u53c2\u6570\uff1a\u8ba9time_wait\u72b6\u6001\u91cd\u7528(\u7aef\u53e3\u91cd\u7528)[flag]\n$ vim /etc/sysctl.conf\nnet.ipv4.tcp_tw_reuse = 1\nnet.ipv4.tcp_timestamps = 1\n$ sysctl -p    # \u53ef\u4ee5\u67e5\u770b\u6211\u4eec\u6dfb\u52a0\u7684\u5185\u6838\u53c2\u6570\n$ sysctl -a    # \u53ef\u4ee5\u67e5\u770b\u6240\u6709\u5185\u6838\u53c2\u6570\n\n# ---------------------- \u5185\u6838\u53c2\u6570\u4f18\u5316\nnet.ipv4.tcp_max_tw_buckets = 6000         #\u9ed8\u8ba4\u503c180000 \u8bbe\u7f6etimewait\u7684\u503c\n\nnet.ipv4.ip_local_port_range = 1024 65000  #\u9ed8\u8ba4\u503c32768 61000 \u8bbe\u7f6e\u5141\u8bb8\u7cfb\u7edf\u6253\u5f00\u7684\u7aef\u53e3\u8303\u56f4\n\nnet.ipv4.tcp_tw_recycle = 1              #\u9ed8\u8ba4\u503c0 \u8bbe\u7f6e\u662f\u5426\u542f\u7528timewait\n\nnet.ipv4.tcp_tw_reuse = 1       #\u9ed8\u8ba4\u503c0 \u8bbe\u7f6e\u662f\u5426\u5f00\u542f\u91cd\u65b0\u4f7f\u7528\uff0c\u5141\u8bb8\u5c06TIME-WAIT sockets \u91cd\u65b0\u7528\u4e8e\u65b0\u7684TCP\u8fde\u63a5\n\nnet.ipv4.tcp_syncookies = 1           #\u9ed8\u8ba4\u503c0 \u8bbe\u7f6e\u662f\u5426\u5f00\u542fSYN Cookies\uff0c\u5982\u679c\u542f\u7528\u8be5\u529f\u80fd\uff0c\u90a3\u4e48\u5f53\u51fa\u73b0SYN\u7b49\u5f85\u6392\u961f\u6ea2\u51fa\u65f6\uff0c\u5219\u4f7f\u7528Cookies\u6765\u5904\u7406\n\nnet.core.somaxconn = 262144            #\u9ed8\u8ba4\u503c32768 Web\u5e94\u7528\u4e2dlisten\u51fd\u6570\u7684backlog\u9ed8\u8ba4\u4f1a\u5c06\u5185\u6838\u53c2\u6570\u7684net.core.somaxconn\u9650\u5236\u5230128\uff0c\u800cNginx\u5b9a\u4e49\u7684NGX_LISTEN_BACKLOG\u9ed8\u8ba4\u4e3a511\uff0c\u6240\u4ee5\u6709\u5fc5\u8981\u8c03\u6574\u8fd9\u4e2a\u503c\n\nnet.core.netdev_max_backlog = 262144   #\u9ed8\u8ba4\u503c300 \u8bbe\u7f6e\u88ab\u8f93\u9001\u5230\u961f\u5217\u6570\u636e\u5305\u7684\u6700\u5927\u6570\u76ee\uff0c\u5728\u7f51\u5361\u63a5\u6536\u6570\u636e\u5305\u7684\u901f\u7387\u6bd4\u5185\u6838\u5904\u7406\u6570\u636e\u5305\u7684\u901f\u7387\u5feb\u65f6\uff0c\u90a3\u4e48\u4f1a\u51fa\u73b0\u6392\u961f\u73b0\u8c61\uff0c\u8fd9\u4e2a\u53c2\u6570\u5c31\u662f\u7528\u4e8e\u8bbe\u7f6e\u8be5\u961f\u5217\u7684\u5927\u5c0f\n\nnet.ipv4.tcp_max_orphans = 262144        #\u9ed8\u8ba4\u503c32768 \u8bbe\u7f6eLinux\u80fd\u591f\u5904\u7406\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u8fdb\u7a0b\u7684\u5957\u63a5\u5b57\u6570\u91cf\uff0c\u6240\u8c13\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u8fdb\u7a0b\u7684\u8fdb\u7a0b\u5c31\u662f\u201c\u5b64\u513f\u201d\uff08orphan\uff09\u8fdb\u7a0b\uff0c\u5728\u5feb\u901f\u3001\u5927\u91cf\u7684\u8fde\u63a5\u4e2d\u8fd9\u79cd\u8fdb\u7a0b\u4f1a\u5f88\u591a\uff0c\u56e0\u6b64\u8981\u9002\u5f53\u5730\u8bbe\u7f6e\u8be5\u53c2\u6570\uff0c\u5982\u679c\u8fd9\u79cd\u201c\u5b64\u513f\u201d\u8fdb\u7a0b\u5957\u63a5\u5b57\u6570\u91cf\u5927\u4e8e\u8fd9\u4e2a\u6307\u5b9a\u7684\u503c\uff0c\u90a3\u4e48\u5728\u4f7f\u7528dmesg\u67e5\u770b\u65f6\u4f1a\u51fa\u73b0\u201ctoo many of orphaned sockets\u201d\u7684\u8b66\u544a\n\nnet.ipv4.tcp_max_syn_backlog = 262144    #\u9ed8\u8ba4\u503c1024 \u8bb0\u5f55\u5c1a\u672a\u6536\u5230\u5ba2\u6237\u7aef\u786e\u8ba4\u4fe1\u606f\u7684\u8fde\u63a5\u8bf7\u6c42\u7684\u6700\u5927\u503c\n\nnet.ipv4.tcp_timestamps = 0             #\u9ed8\u8ba4\u503c1 \u8bbe\u7f6e\u4f7f\u7528\u65f6\u95f4\u6233\u4f5c\u4e3a\u5e8f\u5217\u53f7\uff0c\u901a\u8fc7\u8fd9\u6837\u7684\u8bbe\u7f6e\u53ef\u4ee5\u907f\u514d\u5e8f\u5217\u53f7\u500d\u91cd\u590d\u4f7f\u7528\u3002\u5728\u9ad8\u901f\u3001\u9ad8\u5e76\u53d1\u7684\u73af\u5883\u4e2d\uff0c\u8fd9\u79cd\u60c5\u51b5\u662f\u5b58\u5728\u7684\uff0c\u56e0\u6b64\u901a\u8fc7\u65f6\u95f4\u6233\u80fd\u591f\u8ba9\u8fd9\u4e9b\u88ab\u770b\u505a\u662f\u5f02\u5e38\u7684\u6570\u636e\u5305\u88ab\u5185\u6838\u63a5\u6536\u30020\u8868\u793a\u5173\u95ed\n\nnet.ipv4.tcp_synack_retries = 1     #\u9ed8\u8ba4\u503c5 \u8bbe\u7f6eSYN\u91cd\u8bd5\u7684\u6b21\u6570\uff0c\u5728TCP\u76843\u6b21\u63e1\u624b\u4e2d\u7684\u7b2c\u4e8c\u6b21\u63e1\u624b\uff0c\u5185\u6838\u9700\u8981\u53d1\u9001\u4e00\u4e2a\u56de\u5e94\u524d\u9762\u4e00\u4e2aSYN\u7684ACK\u7684SYN\uff0c\u5c31\u662f\u8bf4\u4e3a\u4e86\u6253\u5f00\u5bf9\u65b9\u7684\u8fde\u63a5\uff0c\u5185\u6838\u53d1\u51fa\u7684SYN\u7684\u6b21\u6570\u3002\u51cf\u5c0f\u8be5\u53c2\u6570\u7684\u503c\u6709\u5229\u4e8e\u907f\u514dDDoS\u653b\u51fb\u3002\n\nnet.ipv4.tcp_syn_retries = 1                  #\u9ed8\u8ba4\u503c5 \u8bbe\u7f6e\u5728\u5185\u6838\u653e\u5f03\u5efa\u7acb\u8fde\u63a5\u4e4b\u524d\u53d1\u9001SYN\u5305\u7684\u6570\u91cf\n\nnet.ipv4.tcp_fin_timeout = 1                    #\u9ed8\u8ba4\u503c60 \u8868\u793a\u5982\u679c\u5957\u63a5\u5b57\u7531\u672c\u7aef\u8981\u6c42\u5173\u95ed\uff0c\u8fd9\u4e2a\u53c2\u6570\u51b3\u5b9a\u4e86\u5b83\u4fdd\u6301\u5728FIN-WAIT-2\u72b6\u6001\u7684\u65f6\u95f4\u3002\u5bf9\u7aef\u53ef\u4ee5\u51fa\u9519\u5e76\u6c38\u8fdc\u4e0d\u5173\u95ed\u8fde\u63a5\uff0c\u751a\u81f3\u610f\u5916\u5b95\u673a\u3002\u53ef\u4ee5\u6309\u6b64\u8bbe\u7f6e\uff0c\u4f46\u662f\u8981\u8bb0\u4f4f\u7684\u662f\uff0c\u5373\u4f7f\u662f\u4e00\u4e2a\u8f7b\u8f7d\u7684Web\u670d\u52a1\u5668\uff0c\u4e5f\u6709\u56e0\u4e3a\u5927\u91cf\u7684\u6b7b\u5957\u63a5\u5b57\u800c\u5185\u5b58\u6ea2\u51fa\u7684\u98ce\u9669\uff0cFIN-WAIT-2\u7684\u5371\u9669\u6027\u6bd4FIN-WAIT-1\u8981\u5c0f\uff0c\u56e0\u4e3a\u5b83\u6700\u591a\u53ea\u80fd\u6d88\u80171.5KB\u7684\u5185\u5b58\uff0c\u4f46\u662f\u4ed6\u7684\u751f\u5b58\u671f\u8981\u957f\u4e9b\u3002\n\nnet.ipv4.tcp_keepalive_time = 30               #\u9ed8\u8ba4\u503c7200 \u5f53\u542f\u7528keepalive\u7684\u65f6\u5019\uff0c\u8bbe\u7f6eTCP\u53d1\u9001keepalive\u6d88\u606f\u7684\u9891\u5ea6\u3002\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u8bf4\u660e\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u53e5\u67c4\uff0cLinux\u4e00\u5207\u7686\u6587\u4ef6\uff0c\u6587\u4ef6\u53e5\u67c4\u53ef\u4ee5\u7406\u89e3\u4e3a\u5c31\u662f\u4e00\u4e2a\u7d22\u5f15\uff0c\u6587\u4ef6\u53e5\u67c4\u4f1a\u968f\u7740\u6211\u4eec\u8fdb\u7a0b\u7684\u8c03\u7528\u9891\u7e41\u589e\u52a0\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u6587\u4ef6\u53e5\u67c4\u662f\u6709\u9650\u5236\u7684\uff0c\u4e0d\u80fd\u8ba9\u4e00\u4e2a\u8fdb\u7a0b\u65e0\u9650\u7684\u8c03\u7528\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u9650\u5236\u6bcf\u4e2a \u8fdb\u7a0b\u548c\u6bcf\u4e2a\u670d\u52a1\u4f7f\u7528\u591a\u5927\u7684\u6587\u4ef6\u53e5\u67c4\uff0c\u6587\u4ef6\u53e5\u67c4\u4e5f\u662f\u5fc5\u987b\u8981\u8c03\u6574\u7684\u4f18\u5316\u53c2\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u9ad8\u5e76\u53d1\u77ed\u8fde\u63a5\u7684TCP\u670d\u52a1\u5668\u4e0a\uff0c\u5f53\u670d\u52a1\u5668\u5904\u7406\u5b8c\u8bf7\u6c42\u540e\u7acb\u523b\u4e3b\u52a8\u6b63\u5e38\u5173\u95ed\u8fde\u63a5\u3002\u8fd9\u4e2a\u573a\u666f\u4e0b\u4f1a\u51fa\u73b0\u5927\u91cfsocket\u5904\u4e8eTIME_WAIT\u72b6\u6001\u3002\u5982\u679c\u5ba2\u6237\u7aef\u7684\u5e76\u53d1\u91cf\u6301\u7eed\u5f88\u9ad8\uff0c\u6b64\u65f6\u90e8\u5206\u5ba2\u6237\u7aef\u5c31\u4f1a\u663e\u793a\u8fde\u63a5\u4e0d\u4e0a\u3002 \u6211\u6765\u89e3\u91ca\u4e0b\u8fd9\u4e2a\u573a\u666f\u3002\u4e3b\u52a8\u6b63\u5e38\u5173\u95edTCP\u8fde\u63a5\uff0c\u90fd\u4f1a\u51fa\u73b0TIMEWAIT\u3002"))),(0,r.kt)("h2",{id:"\u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u4f18\u5316"},"\u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u4f18\u5316"),(0,r.kt)("p",null,"\u901a\u5e38nginx\u4f5c\u4e3a\u4ee3\u7406\u670d\u52a1\uff0c\u8d1f\u8d23\u8f6c\u53d1\u7528\u6237\u7684\u8bf7\u6c42\uff0c\u90a3\u4e48\u5728\u8f6c\u53d1\u7684\u8fc7\u7a0b\u4e2d\u5efa\u8bae\u5f00\u542fHTTP\u957f\u8fde\u63a5\uff0c\u7528\u4e8e\u51cf\u5c11\u63e1\u624b\u6b21\u6570\uff0c\u964d\u4f4e\u670d\u52a1\u5668\u635f\u8017\u3002"),(0,r.kt)("p",null,"\u914d\u7f6enginx\u4f7f\u7528\u957f\u8fde\u63a5\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'upstream http_backend {\n    server 127.0.0.1:8080;\n    keepalive 16;   #\u957f\u8fde\u63a5\n}\n\nserver {\n    ...\n    location /http/ {\n        proxy_pass http://http_backend;\n        proxy_http_version 1.1;         #\u5bf9\u4e8ehttp\u534f\u8bae\u5e94\u8be5\u6307\u5b9a\u4e3a1.1\n        proxy_set_header Connection ""; #\u6e05\u9664\u201cconnection\u201d\u5934\u5b57\u6bb5\n        proxy_next_upstream error timeout http_500 http_502 http_503 http_504;  #\u5e73\u6ed1\u8fc7\u6e21\n        proxy_set_header Host $http_host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwared-For $proxy_add_x_forwarded_for;\n        proxy_connect_timeout 30s;      # \u4ee3\u7406\u8fde\u63a5web\u8d85\u65f6\u65f6\u95f4\n        proxy_read_timeout 60s;         # \u4ee3\u7406\u7b49\u5f85web\u54cd\u5e94\u8d85\u65f6\u65f6\u95f4\n        proxy_send_timeout 60s;         # web\u56de\u4f20\u6570\u636e\u81f3\u4ee3\u7406\u8d85\u65f6\u65f6\u95f4\n        proxy_buffering on;             # \u5f00\u542f\u4ee3\u7406\u7f13\u51b2\u533a,web\u56de\u4f20\u6570\u636e\u81f3\u7f13\u51b2\u533a,\u4ee3\u7406\u8fb9\u6536\u8fb9\u4f20\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\n        proxy_buffer_size 32k;          # \u4ee3\u7406\u63a5\u6536web\u54cd\u5e94\u7684\u5934\u4fe1\u606f\u7684\u7f13\u51b2\u533a\u5927\u5c0f\n        proxy_buffers 4 128k;           # \u7f13\u51b2\u4ee3\u7406\u63a5\u6536\u5355\u4e2a\u957f\u8fde\u63a5\u5185\u5305\u542b\u7684web\u54cd\u5e94\u7684\u6570\u91cf\u548c\u5927\u5c0f\n    ...\n    }\n    # \u5bf9\u4e8efastcgi\n    location /fastcgi/ {\n        fastcgi_pass fastcgi_backend;\n        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;\n        fastcgi_keep_conn on;   \n        fastcgi_connect_timeout 60s;\n        include fastcgi_params;\n        ...\n    }\n}\n')),(0,r.kt)("h2",{id:"\u9759\u6001\u8d44\u6e90\u4f18\u5316"},"\u9759\u6001\u8d44\u6e90\u4f18\u5316"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9759\u6001\u8d44\u6e90\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u79cd\u7c7b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u7aef\u6e32\u67d3"),(0,r.kt)("td",{parentName:"tr",align:null},"HTML\u3001CSS\u3001JS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247"),(0,r.kt)("td",{parentName:"tr",align:null},"JPEG GIF PNG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891"),(0,r.kt)("td",{parentName:"tr",align:null},"FLV MPEG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"TXT \u7b49\u4efb\u610f\u4e0b\u8f7d\u6587\u4ef6")))),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u7f13\u5b58\u8fc7\u671f\u673a\u5236\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/v2-28160195deb51a7ff988ce0e6fe47996_720w.jpg",alt:"img"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u53d1\u9001\u8bf7\u6c42\u524d\uff0c\u6839\u636e\u8bf7\u6c42\u5934\u7684expires\u548ccache-control\u5224\u65ad\u662f\u5426\u547d\u4e2d\uff08\u5305\u62ec\u662f\u5426\u8fc7\u671f\uff09\u5f3a\u7f13\u5b58\u7b56\u7565\uff0c\u5982\u679c\u547d\u4e2d\uff0c\u76f4\u63a5\u4ece\u7f13\u5b58\u83b7\u53d6\u8d44\u6e90\uff0c\u5e76\u4e0d\u4f1a\u53d1\u9001\u8bf7\u6c42\u3002\u5982\u679c\u6ca1\u6709\u547d\u4e2d\uff0c\u5219\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u547d\u4e2d\u5f3a\u7f13\u5b58\u89c4\u5219\uff0c\u6d4f\u89c8\u5668\u4f1a\u53d1\u9001\u8bf7\u6c42\uff0c\u6839\u636e\u8bf7\u6c42\u5934\u7684last-modified\u548cetag\u5224\u65ad\u662f\u5426\u547d\u4e2d\u534f\u5546\u7f13\u5b58\uff0c\u5982\u679c\u547d\u4e2d\uff0c\u76f4\u63a5\u4ece\u7f13\u5b58\u83b7\u53d6\u8d44\u6e90\u3002\u5982\u679c\u6ca1\u6709\u547d\u4e2d\uff0c\u5219\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u524d\u4e24\u6b65\u90fd\u6ca1\u6709\u547d\u4e2d\uff0c\u5219\u76f4\u63a5\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u8d44\u6e90\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e13\u4e1a\u672f\u8bed\u8bf4\u660e\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Last-Modified"),"\uff1a\u670d\u52a1\u5668\u4e0a\u6587\u4ef6\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4"),(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"Etag"),"\uff1a\u6587\u4ef6\u6807\u8bc6 Expires\uff1a\u672c\u5730\u7f13\u5b58\u76ee\u5f55\u4e2d\uff0c\u6587\u4ef6\u8fc7\u671f\u7684\u65f6\u95f4\uff08\u7531\u670d\u52a1\u5668\u6307\u5b9a\u5177\u4f53\u7684\u65f6\u95f4\uff09"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"}," Cache-control"),"\uff1a\u672c\u5730\u7f13\u5b58\u76ee\u5f55\u4e2d\uff0c\u6587\u4ef6\u8fc7\u671f\u7684\u65f6\u95f4\uff08\u7531\u670d\u52a1\u5668\u6307\u5b9a\u8fc7\u671f\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u7531\u4e8e\u6d4f\u89c8\u5668\u6839\u636e\u95f4\u9694\u751f\u6210\u5177\u4f53\u7684\u65f6\u95f4\uff09")),(0,r.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n    listen 80;\n    server_name example.com;\n\n    location ~ .*\\.(jpg|gif|png)$ {\n        expires      7d;\n    }\n    location ~ .*\\.(js|css)$ {\n        expires      30d;\n    }\n    # \u53d6\u6d88js\u3001css\u3001html\u7b49\u9759\u6001\u6587\u4ef6\u7f13\u5b58\n    location ~ .*\\.(js|css|html)$ {\n        add_header Cache-Control no-store;\n        add_header Pragma no-cache;\n    }\n}\n")),(0,r.kt)("h2",{id:"\u9759\u6001\u6587\u4ef6\u8bfb\u53d6\u4f18\u5316"},"\u9759\u6001\u6587\u4ef6\u8bfb\u53d6\u4f18\u5316"),(0,r.kt)("p",null,"\u4f7f\u7528nginx\u4f5c\u4e3a\u9759\u6001\u8d44\u6e90\u670d\u52a1\u65f6\uff0c\u901a\u8fc7\u914d\u7f6esendfile\u53ef\u4ee5\u6709\u6548\u63d0\u9ad8\u6587\u4ef6\u8bfb\u53d6\u6548\u7387\uff0c \u8bbe\u7f6e\u4e3aon\u8868\u793a\u542f\u52a8\u9ad8\u6548\u4f20\u8f93\u6587\u4ef6\u7684\u6a21\u5f0f\u3002sendfile\u53ef\u4ee5\u8ba9Nginx\u5728\u4f20\u8f93\u6587\u4ef6\u65f6\u76f4\u63a5\u5728\u78c1\u76d8\u548ctcp socket\u4e4b\u95f4\u4f20\u8f93\u6570\u636e\u3002\u5982\u679c\u8fd9\u4e2a\u53c2\u6570\u4e0d\u5f00\u542f\uff0c\u4f1a\u5148\u5728\u7528\u6237\u7a7a\u95f4\uff08Nginx\u8fdb\u7a0b\u7a7a\u95f4\uff09\u7533\u8bf7\u4e00\u4e2abuffer\uff0c\u7528read\u51fd\u6570\u628a\u6570\u636e\u4ece\u78c1\u76d8\u8bfb\u5230cache\uff0c\u518d\u4ececache\u8bfb\u53d6\u5230\u7528\u6237\u7a7a\u95f4\u7684buffer\uff0c\u518d\u7528write\u51fd\u6570\u628a\u6570\u636e\u4ece\u7528\u6237\u7a7a\u95f4\u7684buffer\u5199\u5165\u5230\u5185\u6838\u7684buffer\uff0c\u6700\u540e\u5230tcp socket\u3002\u5f00\u542f\u8fd9\u4e2a\u53c2\u6570\u540e\u53ef\u4ee5\u8ba9\u6570\u636e\u4e0d\u7528\u7ecf\u8fc7\u7528\u6237buffer\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sendfile"))),(0,r.kt)("p",null,"\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"sendfile"),"\u529f\u80fd\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"sendfile"),"\u529f\u80fd\u53ef\u4ee5\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"p"},"Nginx"),"\u9759\u6001\u8d44\u6e90\u7684\u6258\u7ba1\u6548\u7387\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"sendfile"),"\u662f\u4e00\u4e2a\u7cfb\u7edf\u8c03\u7528\uff0c\u76f4\u63a5\u5728\u5185\u6838\u4e2d\u5b8c\u6210\u6587\u4ef6\u53d1\u9001\uff0c\u4e0d\u9700\u8981\u5148",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u518d",(0,r.kt)("inlineCode",{parentName:"p"},"write"),"\uff0c\u6ca1\u6709\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"syntax: sendfile on | off;\ndefault: sendfile off;\ncontext: server, location\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tcp_nopush"))),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"sendfile"),"\u6307\u4ee4\u5f00\u542f\u7684\u60c5\u51b5\u4e0b\uff0c\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"tcp_nopush"),"\u3002\u542f\u7528\u4e86\u8fd9\u4e2a\u6307\u4ee4\u540e\uff0c\u6570\u636e\u5305\u4f1a\u88ab\u7d2f\u79ef\u5230\u4e00\u5b9a\u5927\u5c0f\u624d\u53d1\u9001\uff0c\u51cf\u5c11\u989d\u5916\u7684\u5f00\u9500\uff0c\u63d0\u5347\u4e86\u7f51\u7edc\u6548\u7387\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"syntax: tcp_nopush on | off;\ndefault: tcp_nopush off;\ncontext: http, server, location\n")),(0,r.kt)("p",null,"\u2139\ufe0f \u8fd9\u4e2a\u6307\u4ee4\u53ea\u6709\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"sendfile"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"on"),"\u7684\u65f6\u5019\u624d\u8d77\u4f5c\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tcp_nodelay"))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6307\u4ee4\u7684\u76ee\u7684\u5c31\u662f\u5c3d\u5feb\u53d1\u9001\u6570\u636e\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Nginx"),"\u53ea\u4f1a\u9488\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"keep-alive"),"\u72b6\u6001\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"TCP"),"\u8fde\u63a5\u542f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"tcp_nodelay"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"tcp_nopush"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"tcp_nodelay"),"\u7ed3\u5408\u5728\u4e00\u8d77\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u586b\u6ee1\u5305\uff0c\u7136\u540e\u518d\u5c3d\u5feb\u53d1\u9001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"syntax: tcp_nodelay on | off;\ndefault: tcp_nodelay on;\ncontext: http, server, location\n")),(0,r.kt)("h2",{id:"\u9759\u6001\u8d44\u6e90\u538b\u7f29"},"\u9759\u6001\u8d44\u6e90\u538b\u7f29"),(0,r.kt)("p",null,"Nginx \u5c06\u54cd\u5e94\u62a5\u6587\u53d1\u9001\u81f3\u5ba2\u6237\u7aef\u4e4b\u524d\u53ef\u4ee5\u542f\u7528\u538b\u7f29\u529f\u80fd\uff0c\u8fd9\u80fd\u591f\u6709\u6548\u5730",(0,r.kt)("strong",{parentName:"p"},"\u8282\u7ea6\u5e26\u5bbd"),"\uff0c\u5e76",(0,r.kt)("strong",{parentName:"p"},"\u63d0\u9ad8\u54cd\u5e94\u81f3\u5ba2\u6237\u7aef\u7684\u901f"),"\u5ea6\u3002\u4f46\u662f\u9700\u8981\u6d88\u8017\u4e00\u5b9a\u7684\u670d\u52a1\u5668\u6027\u80fd\u3002\u538b\u7f29\u540e\u7684\u8d44\u6e90\u5728\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u8bc6\u522b\u5e76\u89e3\u538b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f00\u542f\u6216\u5173\u95edgzip")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"syntax: gzip on | off;\ndefault: gzip off;\ncontext: http, server, location\n")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"gzip"),"\u6307\u4ee4\u5f00\u542f\u7684\u60c5\u51b5\u4e0b\uff0c\u6709\u5f88\u591a\u5176\u5b83\u8f85\u52a9\u7684\u6307\u4ee4\u5bf9\u538b\u7f29\u7684\u7279\u6027\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u538b\u7f29\u7c7b\u578b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"Syntax: gzip_types mime-type ...;\nDefault: gzip_types text/html;\nContext: http, server, location\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u538b\u7f29\u6bd4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"syntax: gzip_comp_level level;\ndefault: gzip_comp_level 1;\ncontext: http, server, location\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u5728\u54ea\u4e2a\u7248\u672c\u7684http\u534f\u8bae\u4e0b\u624d\u4f1a\u5bf9\u8d44\u6e90\u8fdb\u884c\u538b\u7f29")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"syntax: gzip_http_version 1.0|1.1;\ndefault: gzip_http_version 1.1;\ncontext: http, server, location\n")),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"http_gzip_static_module"),"\u6a21\u5757\u6765\u5f00\u542f\u9884\u8bfb",(0,r.kt)("inlineCode",{parentName:"p"},"gzip"),"\u6570\u636e\u7684\u529f\u80fd\u3002\u8fd9\u4e2a\u6a21\u5757\u5c31\u662f\u5728\u83b7\u53d6\u8d44\u6e90\u7684\u65f6\u5019\u9884\u5148\u8bfb\u53d6\u88ab\u538b\u7f29\u7684\u8d44\u6e90\uff0c\u5982\u679c\u538b\u7f29\u8d44\u6e90\u5b58\u5728\uff0c\u76f4\u63a5\u8bfb\u53d6\u3002\u5426\u5219\u5c31\u8bfb\u53d6\u6e90\u6587\u4ef6\u7136\u540e\u538b\u7f29\u8fd4\u56de\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location .. {\n  gzip_static on | off;\n}\n")),(0,r.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name example.com\uff1b\n\n    location ~ .*\\.(jpg|png|gif) {\n        root /code/images;\n        # gzip on;\n        # gzip_types image/jpeg image/gif image/png;\n        # gzip_comp_level 2;\n        # gzip_http_version 1.1; \n    }\n    location ~ .*\\.(txt|xml|html|json|js|css)$ {\n        gzip on;\n        gzip_http_version 1.1;\n        gzip_comp_level 1;\n        gzip_types text/plain application/json application/x-javascript application/css application/xml text/javascript;\n    }\n        # \u5982\u679c\u662f\u4e0b\u8f7d\u8d44\u6e90\n    location ~ ^/download  {\n        # \u653e\u7f6e\u4e0b\u8f7d\u8d44\u6e90\u7684\u5730\u65b9\n        root /opt/app/code;\n        # \u9884\u5148\u8bfb\u53d6\u538b\u7f29\u6587\u4ef6\n        gzip_static on;\n        # \u5f00\u542f tcp_nopush\uff0c\u9700\u63d0\u5f00\u542fsendfile\n        tcp_nopush on;\n    }\n}\n\n")),(0,r.kt)("h2",{id:"\u9632\u76d7\u94fe"},"\u9632\u76d7\u94fe"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5185\u7f6e\u6a21\u5757"},"\u4f7f\u7528\u5185\u7f6e\u6a21\u5757"),(0,r.kt)("p",null,"\u9632\u76d7\u94fe\u7684\u76ee\u7684\u5c31\u662f\u9632\u6b62\u8d44\u6e90\u88ab\u76d7\u7528\u3002\u9632\u76d7\u94fe\u8bbe\u7f6e\u601d\u8def\uff0c\u4e3b\u8981\u662f\u9488\u5bf9\u5ba2\u6237\u7aef\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u6240\u643a\u5e26\u7684\u4e00\u4e9bHeader\u4fe1\u606f\u6765\u9a8c\u8bc1\u8bf7\u6c42\u7684\u5408\u6cd5\u6027\uff0c\u6bd4\u5982\u5ba2\u6237\u7aef\u5728\u8bf7\u6c42\u7684\u8fc7\u7a0b\u4e2d\u90fd\u4f1a\u643a\u5e26",(0,r.kt)("inlineCode",{parentName:"p"},"referer"),"\u4fe1\u606f\u3002\u4f18\u70b9\u662f\u89c4\u5219\u7b80\u5355\uff0c\u914d\u7f6e\u548c\u4f7f\u7528\u90fd\u5f88\u65b9\u4fbf\uff0c\u7f3a\u70b9\u662f\u9632\u76d7\u94fe\u6240\u4f9d\u8d56\u7684Referer\u9a8c\u8bc1\u4fe1\u606f\u662f\u53ef\u4ee5\u4f2a\u9020\u7684\uff0c\u6240\u4ee5\u901a\u8fc7referer\u4fe1\u606f\u9632\u76d7\u94fe\u5e76\u975e100%\u53ef\u9760\uff08\u6bd5\u7adf\u6709\u80fd\u591f\u4f2a\u9020\u8bf7\u6c42\u5934\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},'curl -e "https://www.baidu.com ..."'),"\uff09\uff0c\u4f46\u662f\u4ed6\u80fd\u591f\u9650\u5236\u5927\u90e8\u5206\u7684\u76d7\u94fe\u60c5\u51b5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"Syntax: valid_referers none | blocked | server_names | string ...;\nDefault: -;\nContext: server, location\n# none: referer\u6765\u6e90\u5934\u90e8\u4e3a\u7a7a\u7684\u60c5\u51b5\n# blocked: referer\u6765\u6e90\u5934\u90e8\u4e0d\u4e3a\u7a7a\uff0c\u8fd9\u4e9b\u90fd\u4e0d\u4ee5http://\u6216\u8005https://\u5f00\u5934\n# server_names: \u6765\u6e90\u5934\u90e8\u4fe1\u606f\u5305\u542b\u5f53\u524d\u57df\u540d\uff0c\u53ef\u4ee5\u6b63\u5219\u5339\u914d\n")),(0,r.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~ .*\\.(jpg|png|gif) {\n         root /var/www/html;\n         valid_referers none blocked *.example.com server_names\n               *.example.com example.* www.example.org/galleries/\n               ~\\.google\\.; \n         if ( $invalid_referer ) {\n            return 403;\n        # \u4e5f\u53ef\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u56fe\u7247\n        rewrite ^(.*)$ /var/www/html/pic/fangdaolan.png break;\n        }\n}\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u6a21\u5757"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u6a21\u5757"),(0,r.kt)("p",null,"\u3002\u3002\u3002"),(0,r.kt)("h2",{id:"\u8de8\u57df\u8bbf\u95ee"},"\u8de8\u57df\u8bbf\u95ee"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u4f55\u4e3a\u540c\u6e90\u7b56\u7565\uff1a")),(0,r.kt)("p",{parentName:"blockquote"},"\u540c\u6e90\u7b56\u7565\u662f\u4e00\u4e2a\u5b89\u5168\u7b56\u7565\u3002\u540c\u6e90\uff0c\u6307\u7684\u662f\u534f\u8bae\uff0c\u57df\u540d\uff0c\u7aef\u53e3\u76f8\u540c\u3002\u6d4f\u89c8\u5668\u5904\u4e8e\u5b89\u5168\u65b9\u9762\u7684\u8003\u8651\uff0c\u53ea\u5141\u8bb8\u672c\u57df\u540d\u4e0b\u7684\u63a5\u53e3\u4ea4\u4e92\uff0c\u4e0d\u540c\u6e90\u7684\u5ba2\u6237\u7aef\u811a\u672c\uff0c\u5728\u6ca1\u6709\u660e\u786e\u6388\u6743\u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u80fd\u8bfb\u5199\u5bf9\u65b9\u7684\u8d44\u6e90\u3002"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u4f55\u4e3a\u8de8\u57df\uff1a")),(0,r.kt)("p",{parentName:"blockquote"},"CORS\u662f\u4e00\u4e2aW3C\u6807\u51c6\uff0c\u5168\u79f0\u662f\u8de8\u57df\u8d44\u6e90\u5171\u4eab(Cross-origin resource sharing)\u3002\u5373\u4ece\u4e00\u4e2a\u57df\u540d\u7684\u7f51\u9875\u53bb\u8bf7\u6c42\u53e6\u4e00\u4e2a\u57df\u540d\u7684\u8d44\u6e90\u3002\u672c\u8d28\u4e0a\u5bf9\u4e8e\u6b64\u7c7b\u8bf7\u6c42\uff0c\u53ea\u8981\u534f\u8bae\u3001\u57df\u540d\u3001\u7aef\u53e3\u6709\u4efb\u4f55\u4e00\u4e2a\u7684\u4e0d\u540c\uff0c\u5c31\u88ab\u5f53\u4f5c\u662f\u8de8\u57df\uff0c\u5373\u90fd\u88ab\u5f53\u6210\u4e0d\u540c\u6e90\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u5e38\u57fa\u4e8e\u5b89\u5168\u8003\u8651\uff0cNginx\u542f\u7528\u4e86\u540c\u6e90\u7b56\u7565\uff0c\u5373\u9650\u5236\u4e86\u4ece\u540c\u4e00\u4e2a\u6e90\u52a0\u8f7d\u7684\u6587\u6863\u6216\u811a\u672c\u5982\u4f55\u4e0e\u6765\u81ea\u53e6\u4e00\u4e2a\u6e90\u7684\u8d44\u6e90\u8fdb\u884c\u4ea4\u4e92\u3002\u8fd9\u662f\u4e00\u4e2a\u7528\u4e8e\u9694\u79bb\u6f5c\u5728\u6076\u610f\u6587\u4ef6\u7684\u91cd\u8981\u5b89\u5168\u673a\u5236\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u4f46\u82e5\u540c\u4e00\u4e2a\u516c\u53f8\u5185\u90e8\u5b58\u5728\u591a\u4e2a\u4e0d\u540c\u7684\u5b50\u57df\uff0c\u5b50\u57df\u4e4b\u95f4\u9700\u8981\u4e92\u8bbf\uff0c\u6b64\u65f6\u53ef\u901a\u8fc7\u8de8\u57df\u8fdb\u884c\u5b9e\u73b0\u3002\u8de8\u57df\u53ef\u901a\u8fc7JSONP\u548cCORS\u8fdb\u884c\u5b9e\u73b0\u3002")),(0,r.kt)("p",null,"\u90a3Nginx\u8bed\u5e8f\u8de8\u7ad9\u8bbf\u95ee\u4e0e\u6d4f\u89c8\u5668\u6709\u4ec0\u4e48\u5173\u7cfb\u5462\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u4f1a\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin"),"\u7684\u5934\u4fe1\u606f\uff0c\u5982\u679c\u670d\u52a1\u7aef\u5141\u8bb8\uff0c\u5219\u6d4f\u89c8\u5668\u4e0d\u4f1a\u8fdb\u884c\u62e6\u622a\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n        listen 80;\n        server_name example.com;\n        root /var/www/html;\n        index index.html;\n        charset utf-8;\n\n        location ~ .*\\.(html|htm)$ {\n            add_header Access-Control-Allow-Origin *;\n            add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;\n        }\n}\n")),(0,r.kt)("h2",{id:"\u7981\u6b62ip\u76f4\u63a5\u8bbf\u95ee"},"\u7981\u6b62IP\u76f4\u63a5\u8bbf\u95ee"),(0,r.kt)("p",null,"\u5173\u95ed\u7a7a\u4e3b\u673a\u5934\uff0c\u9632\u6b62\u672a\u5907\u6848\u7684\u57df\u540d\u6307\u5411\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80 default_server;           # \u9ed8\u8ba4\u4f18\u5148\u8fd4\u56de\uff1b\n    server_name _;                      # \u7a7a\u4e3b\u673a\u5934\u6216\u8005IP\uff1b\n    return 500;                         # \u76f4\u63a5\u8fd4\u56de500\u9519\u8bef\uff1b\n    # \u6216\u8005\u5f15\u6d41\u81f3\u5176\u4ed6\u7ad9\u70b9\n    # return 302 http://example.com\n}\n")),(0,r.kt)("h2",{id:"\u9644\u5f55\u793a\u4f8b\u5b8c\u6574\u901a\u7528\u914d\u7f6e"},"\u9644\u5f55\uff1a\u793a\u4f8b\u5b8c\u6574\u901a\u7528\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},'user www;                   # nginx\u8fdb\u7a0b\u542f\u52a8\u7528\u6237\nworker_processes auto;      # \u4e0ecpu\u6838\u5fc3\u4e00\u81f4\u5373\u53ef\nworker_cpu_affinity auto;   # cpu\u4eb2\u548c\n\nerror_log /var/log/nginx/error.log warn;    # \u9519\u8bef\u65e5\u5fd7\npid /run/nginx.pid;\nworker_rlimit_nofile 35535;     #\u6bcf\u4e2awork\u80fd\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u8c03\u6574\u81f31w\u4ee5\u4e0a,\u8d1f\u8377\u8f83\u9ad8\u5efa\u8bae2-3w\n\nevents {\n    use epoll;                  # \u4f7f\u7528epoll\u9ad8\u6548\u7f51\u7edc\u6a21\u578b\n    worker_connections 10240;   # \u9650\u5236\u6bcf\u4e2a\u8fdb\u7a0b\u80fd\u5904\u7406\u591a\u5c11\u4e2a\u8fde\u63a5\uff0c10240x[cpu\u6838\u5fc3]\n}\n\nhttp {\n    include             mime.types;\n    default_type        application/octet-stream;\n    charset utf-8;      # \u7edf\u4e00\u4f7f\u7528utf-8\u5b57\u7b26\u96c6\n\n    # \u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n    \n    #\u5b9a\u4e49json\u65e5\u5fd7\u683c\u5f0f              \n    log_format json_access \'{"@timestamp":"$time_iso8601",\'\n                      \'"host":"$server_addr",\'\n                      \'"clientip":"$remote_addr",\'\n                      \'"size":$body_bytes_sent,\'\n                      \'"responsetime":$request_time,\'\n                      \'"upstreamtime":"$upstream_response_time",\'\n                      \'"upstreamhost":"$upstream_addr",\'\n                      \'"http_host":"$host",\'\n                      \'"url":"$uri",\'\n                      \'"domain":"$host",\'\n                      \'"xff":"$http_x_forwarded_for",\'\n                      \'"referer":"$http_referer",\'\n                      \'"status":"$status"}\';\n\n    access_log  /var/log/nginx/access.log  main;    # \u8bbf\u95ee\u65e5\u5fd7\n\n    server_tokens off;  # \u7981\u6b62\u6d4f\u89c8\u5668\u663e\u793anginx\u7248\u672c\u53f7\n    client_max_body_size 200m;  # \u6587\u4ef6\u4e0a\u4f20\u5927\u5c0f\u9650\u5236\u8c03\u6574\n\n    # \u6587\u4ef6\u9ad8\u6548\u4f20\u8f93\uff0c\u9759\u6001\u8d44\u6e90\u670d\u52a1\u5668\u5efa\u8bae\u6253\u5f00\n    sendfile            on;\n    tcp_nopush          on;\n    # \u6587\u4ef6\u5b9e\u65f6\u4f20\u8f93\uff0c\u52a8\u6001\u8d44\u6e90\u670d\u52a1\u5efa\u8bae\u6253\u5f00,\u9700\u8981\u6253\u5f00keepalive\n    tcp_nodelay         on;\n    keepalive_timeout   65;\n\n    # Gzip \u538b\u7f29\n    gzip on;\n    gzip_disable "MSIE [1-6]\\.";    #\u9488\u5bf9IE\u6d4f\u89c8\u5668\u4e0d\u8fdb\u884c\u538b\u7f29\n    gzip_http_version 1.1;\n    gzip_comp_level 2;      #\u538b\u7f29\u7ea7\u522b\n    gzip_buffers 16 8k;     #\u538b\u7f29\u7684\u7f13\u51b2\u533a\n    gzip_min_length 1024;   #\u6587\u4ef6\u5927\u4e8e1024\u5b57\u8282\u624d\u8fdb\u884c\u538b\u7f29\uff0c\u9ed8\u8ba4\u503c20\n    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript image/jpeg;\n\n    # \u865a\u62df\u4e3b\u673a\n    include /etc/nginx/conf.d/*.conf;\n}\n')),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gzip \u4e2d\u6587\u8be6\u89e3\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/zhuyiquan/article/details/52709864"},"https://blog.csdn.net/zhuyiquan/article/details/52709864")),(0,r.kt)("li",{parentName:"ul"},"ngx refer module: ",(0,r.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_referer_module.html"},"http://nginx.org/en/docs/http/ngx_http_referer_module.html"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6587\u7ae0\u5185\u5bb9\u6536\u96c6\u4e8e\u7f51\u7edc\u3002")))}u.isMDXComponent=!0}}]);