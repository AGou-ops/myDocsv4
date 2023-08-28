"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[8610],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={},l="HAProxy \u914d\u7f6e\u8be6\u89e3",i={unversionedId:"LinuxBasics/LoadBalancer/HAProxy/HAProxy \u914d\u7f6e\u8be6\u89e3",id:"LinuxBasics/LoadBalancer/HAProxy/HAProxy \u914d\u7f6e\u8be6\u89e3",title:"HAProxy \u914d\u7f6e\u8be6\u89e3",description:"\u5b8c\u6574\u914d\u7f6e\u9009\u9879\u53c2\u8003:configuration.txt",source:"@site/docs/LinuxBasics/LoadBalancer/HAProxy/HAProxy \u914d\u7f6e\u8be6\u89e3.md",sourceDirName:"LinuxBasics/LoadBalancer/HAProxy",slug:"/LinuxBasics/LoadBalancer/HAProxy/HAProxy \u914d\u7f6e\u8be6\u89e3",permalink:"/docs/LinuxBasics/LoadBalancer/HAProxy/HAProxy \u914d\u7f6e\u8be6\u89e3",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/LoadBalancer/HAProxy/HAProxy \u914d\u7f6e\u8be6\u89e3.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"HAProxy \u53c2\u8003\u793a\u4f8b",permalink:"/docs/LinuxBasics/LoadBalancer/HAProxy/HAProxy \u53c2\u8003\u793a\u4f8b"},next:{title:"Keepalived - HAProxy",permalink:"/docs/LinuxBasics/LoadBalancer/HAProxy/Keepalived - HAProxy"}},p={},s=[{value:"\u914d\u7f6e\u8be6\u89e3",id:"\u914d\u7f6e\u8be6\u89e3",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f",id:"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f",level:3},{value:"global\u5168\u5c40\u914d\u7f6e",id:"global\u5168\u5c40\u914d\u7f6e",level:3},{value:"\u7efc\u5408\u914d\u7f6e",id:"\u7efc\u5408\u914d\u7f6e",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:s};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"haproxy-\u914d\u7f6e\u8be6\u89e3"},"HAProxy \u914d\u7f6e\u8be6\u89e3"),(0,a.kt)("p",null,"\u5b8c\u6574\u914d\u7f6e\u9009\u9879\u53c2\u8003:",(0,a.kt)("a",{target:"_blank",href:t(45310).Z},"configuration.txt")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u8be6\u89e3"},"\u914d\u7f6e\u8be6\u89e3"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f"},"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f"),(0,a.kt)("p",null,"haproxy \u914d\u7f6e\u4e2d\u5206\u6210\u4e94\u90e8\u5206\u5185\u5bb9\uff0c\u5206\u522b\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"global"),"\uff1a  \u8bbe\u7f6e\u5168\u5c40\u914d\u7f6e\u53c2\u6570\uff0c\u5c5e\u4e8e\u8fdb\u7a0b\u7684\u914d\u7f6e\uff0c\u901a\u5e38\u662f\u548c\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaults"),"\uff1a\u914d\u7f6e\u9ed8\u8ba4\u53c2\u6570\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u88ab\u7528\u5230frontend\uff0cbackend\uff0cListen\u7ec4\u4ef6"),"\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"frontend"),"\uff1a\u63a5\u6536\u8bf7\u6c42\u7684\u524d\u7aef\u865a\u62df\u8282\u70b9\uff0cFrontend\u53ef\u4ee5\u66f4\u52a0\u89c4\u5219\u76f4\u63a5\u6307\u5b9a\u5177\u4f53\u4f7f\u7528\u540e\u7aef\u7684backend\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"backend"),"\uff1a\u540e\u7aef\u670d\u52a1\u96c6\u7fa4\u7684\u914d\u7f6e\uff0c\u662f\u771f\u5b9e\u670d\u52a1\u5668\uff0c\u4e00\u4e2aBackend\u5bf9\u5e94\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5b9e\u4f53\u670d\u52a1\u5668\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Listen")," \uff1afrontend\u548cbackend\u7684\u7ec4\u5408\u4f53\u3002")),(0,a.kt)("p",null,"\u65f6\u95f4\u683c\u5f0f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"us: \u5fae\u79d2(microseconds)\uff0c\u53731/1000000\u79d2\uff1b"),(0,a.kt)("li",{parentName:"ul"},"ms: \u6beb\u79d2(milliseconds)\uff0c\u53731/1000\u79d2\uff1b"),(0,a.kt)("li",{parentName:"ul"},"s: \u79d2(seconds)\uff1b"),(0,a.kt)("li",{parentName:"ul"},"m: \u5206\u949f(minutes)\uff1b"),(0,a.kt)("li",{parentName:"ul"},"h\uff1a\u5c0f\u65f6(hours)\uff1b"),(0,a.kt)("li",{parentName:"ul"},"d: \u5929(days)\uff1b")),(0,a.kt)("h3",{id:"global\u5168\u5c40\u914d\u7f6e"},"global\u5168\u5c40\u914d\u7f6e"),(0,a.kt)("p",null,"\u201cglobal\u201d\u914d\u7f6e\u4e2d\u7684\u53c2\u6570\u4e3a\u8fdb\u7a0b\u7ea7\u522b\u7684\u53c2\u6570\uff0c\u4e14\u901a\u5e38\u4e0e\u5176\u8fd0\u884c\u7684OS\u76f8\u5173\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u7ba1\u7406\u53ca\u5b89\u5168\u76f8\u5173\u7684\u53c2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   - chroot <jail dir>\uff1a\u4fee\u6539haproxy\u7684\u5de5\u4f5c\u76ee\u5f55\u81f3\u6307\u5b9a\u7684\u76ee\u5f55\u5e76\u5728\u653e\u5f03\u6743\u9650\u4e4b\u524d\u6267\u884cchroot()\u64cd\u4f5c\uff0c\u53ef\u4ee5\u63d0\u5347haproxy\u7684\u5b89\u5168\u7ea7\u522b\uff0c\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f\u8981\u786e\u4fdd\u6307\u5b9a\u7684\u76ee\u5f55\u4e3a\u7a7a\u76ee\u5f55\u4e14\u4efb\u4f55\u7528\u6237\u5747\u4e0d\u80fd\u6709\u5199\u6743\u9650\uff1b\n   - daemon\uff1a\u8ba9haproxy\u4ee5\u5b88\u62a4\u8fdb\u7a0b\u7684\u65b9\u5f0f\u5de5\u4f5c\u4e8e\u540e\u53f0\uff0c\u5176\u7b49\u540c\u4e8e\u201c-D\u201d\u9009\u9879\u7684\u529f\u80fd\uff0c\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u4ee5\u201c-db\u201d\u9009\u9879\u5c06\u5176\u7981\u7528\uff1b\n   - gid <number>\uff1a\u4ee5\u6307\u5b9a\u7684GID\u8fd0\u884chaproxy\uff0c\u5efa\u8bae\u4f7f\u7528\u4e13\u7528\u4e8e\u8fd0\u884chaproxy\u7684GID\uff0c\u4ee5\u514d\u56e0\u6743\u9650\u95ee\u9898\u5e26\u6765\u98ce\u9669\uff1b\n   - group <group name>\uff1a\u540cgid\uff0c\u4e0d\u8fc7\u6307\u5b9a\u7684\u7ec4\u540d\uff1b\n   - log  <address> <facility> [max level [min level]]\uff1a\u5b9a\u4e49\u5168\u5c40\u7684syslog\u670d\u52a1\u5668\uff0c\u6700\u591a\u53ef\u4ee5\u5b9a\u4e49\u4e24\u4e2a\uff1b\n   - log-send-hostname [<string>]\uff1a\u5728syslog\u4fe1\u606f\u7684\u9996\u90e8\u6dfb\u52a0\u5f53\u524d\u4e3b\u673a\u540d\uff0c\u53ef\u4ee5\u4e3a\u201cstring\u201d\u6307\u5b9a\u7684\u540d\u79f0\uff0c\u4e5f\u53ef\u4ee5\u7f3a\u7701\u4f7f\u7528\u5f53\u524d\u4e3b\u673a\u540d\uff1b\n   - nbproc <number>\uff1a\u6307\u5b9a\u542f\u52a8\u7684haproxy\u8fdb\u7a0b\u4e2a\u6570\uff0c\u53ea\u80fd\u7528\u4e8e\u5b88\u62a4\u8fdb\u7a0b\u6a21\u5f0f\u7684haproxy\uff1b\u9ed8\u8ba4\u53ea\u542f\u52a8\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u9274\u4e8e\u8c03\u8bd5\u56f0\u96be\u7b49\u591a\u65b9\u9762\u7684\u539f\u56e0\uff0c\u4e00\u822c\u53ea\u5728\u5355\u8fdb\u7a0b\u4ec5\u80fd\u6253\u5f00\u5c11\u6570\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u573a\u666f\u4e2d\u624d\u4f7f\u7528\u591a\u8fdb\u7a0b\u6a21\u5f0f\uff1b\n   - pidfile\uff1a\n   - uid\uff1a\u4ee5\u6307\u5b9a\u7684UID\u8eab\u4efd\u8fd0\u884chaproxy\u8fdb\u7a0b\uff1b\n   - ulimit-n\uff1a\u8bbe\u5b9a\u6bcf\u8fdb\u7a0b\u6240\u80fd\u591f\u6253\u5f00\u7684\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u76ee\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5176\u4f1a\u81ea\u52a8\u8fdb\u884c\u8ba1\u7b97\uff0c\u56e0\u6b64\u4e0d\u63a8\u8350\u4fee\u6539\u6b64\u9009\u9879\uff1b\n   - user\uff1a\u540cuid\uff0c\u4f46\u4f7f\u7528\u7684\u662f\u7528\u6237\u540d\uff1b\n   - stats\uff1a\n   - node\uff1a\u5b9a\u4e49\u5f53\u524d\u8282\u70b9\u7684\u540d\u79f0\uff0c\u7528\u4e8eHA\u573a\u666f\u4e2d\u591ahaproxy\u8fdb\u7a0b\u5171\u4eab\u540c\u4e00\u4e2aIP\u5730\u5740\u65f6\uff1b\n   - description\uff1a\u5f53\u524d\u5b9e\u4f8b\u7684\u63cf\u8ff0\u4fe1\u606f\uff1b\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6027\u80fd\u8c03\u6574\u76f8\u5173\u7684\u53c2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   - maxconn <number>\uff1a\u8bbe\u5b9a\u6bcf\u4e2ahaproxy\u8fdb\u7a0b\u6240\u63a5\u53d7\u7684\u6700\u5927\u5e76\u53d1\u8fde\u63a5\u6570\uff0c\u5176\u7b49\u540c\u4e8e\u547d\u4ee4\u884c\u9009\u9879\u201c-n\u201d\uff1b\u201culimit -n\u201d\u81ea\u52a8\u8ba1\u7b97\u7684\u7ed3\u679c\u6b63\u662f\u53c2\u7167\u6b64\u53c2\u6570\u8bbe\u5b9a\u7684\uff1b\n   - maxpipes <number>\uff1ahaproxy\u4f7f\u7528pipe\u5b8c\u6210\u57fa\u4e8e\u5185\u6838\u7684tcp\u62a5\u6587\u91cd\u7ec4\uff0c\u6b64\u9009\u9879\u5219\u7528\u4e8e\u8bbe\u5b9a\u6bcf\u8fdb\u7a0b\u6240\u5141\u8bb8\u4f7f\u7528\u7684\u6700\u5927pipe\u4e2a\u6570\uff1b\u6bcf\u4e2apipe\u4f1a\u6253\u5f00\u4e24\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u56e0\u6b64\uff0c\u201culimit -n\u201d\u81ea\u52a8\u8ba1\u7b97\u65f6\u4f1a\u6839\u636e\u9700\u8981\u8c03\u5927\u6b64\u503c\uff1b\u9ed8\u8ba4\u4e3amaxconn/4\uff0c\u5176\u901a\u5e38\u4f1a\u663e\u5f97\u8fc7\u5927\uff1b\n   - noepoll\uff1a\u5728Linux\u7cfb\u7edf\u4e0a\u7981\u7528epoll\u673a\u5236\uff1b\n   - nokqueue\uff1a\u5728BSE\u7cfb\u7edf\u4e0a\u7981\u7528kqueue\u673a\u5236\uff1b\n   - nopoll\uff1a\u7981\u7528poll\u673a\u5236\uff1b\n   - nosepoll\uff1a\u5728Linux\u7981\u7528\u542f\u53d1\u5f0fepoll\u673a\u5236\uff1b\n   - nosplice\uff1a\u7981\u6b62\u5728Linux\u5957\u63a5\u5b57\u4e0a\u4f7f\u7528\u5185\u6838tcp\u91cd\u7ec4\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u66f4\u591a\u7684recv/send\u7cfb\u7edf\u8c03\u7528\uff1b\u4e0d\u8fc7\uff0c\u5728Linux 2.6.25-28\u7cfb\u5217\u7684\u5185\u6838\u4e0a\uff0ctcp\u91cd\u7ec4\u529f\u80fd\u6709bug\u5b58\u5728\uff1b\n   - spread-checks <0..50, in percent>\uff1a\u5728haproxy\u540e\u7aef\u6709\u7740\u4f17\u591a\u670d\u52a1\u5668\u7684\u573a\u666f\u4e2d\uff0c\u5728\u7cbe\u786e\u7684\u65f6\u95f4\u95f4\u9694\u540e\u7edf\u4e00\u5bf9\u4f17\u670d\u52a1\u5668\u8fdb\u884c\u5065\u5eb7\u72b6\u51b5\u68c0\u67e5\u53ef\u80fd\u4f1a\u5e26\u6765\u610f\u5916\u95ee\u9898\uff1b\u6b64\u9009\u9879\u7528\u4e8e\u5c06\u5176\u68c0\u67e5\u7684\u65f6\u95f4\u95f4\u9694\u957f\u5ea6\u4e0a\u589e\u52a0\u6216\u51cf\u5c0f\u4e00\u5b9a\u7684\u968f\u673a\u65f6\u957f\uff1b\n   - tune.bufsize <number>\uff1a\u8bbe\u5b9abuffer\u7684\u5927\u5c0f\uff0c\u540c\u6837\u7684\u5185\u5b58\u6761\u4ef6\u5c0f\uff0c\u8f83\u5c0f\u7684\u503c\u53ef\u4ee5\u8ba9haproxy\u6709\u80fd\u529b\u63a5\u53d7\u66f4\u591a\u7684\u5e76\u53d1\u8fde\u63a5\uff0c\u8f83\u5927\u7684\u503c\u53ef\u4ee5\u8ba9\u67d0\u4e9b\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u8f83\u5927\u7684cookie\u4fe1\u606f\uff1b\u9ed8\u8ba4\u4e3a16384\uff0c\u5176\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u4fee\u6539\uff0c\u4e0d\u8fc7\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u9ed8\u8ba4\u503c\uff1b\n   - tune.chksize <number>\uff1a\u8bbe\u5b9a\u68c0\u67e5\u7f13\u51b2\u533a\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff1b\u66f4\u5927\u7684\u503c\u6709\u52a9\u4e8e\u5728\u8f83\u5927\u7684\u9875\u9762\u4e2d\u5b8c\u6210\u57fa\u4e8e\u5b57\u7b26\u4e32\u6216\u6a21\u5f0f\u7684\u6587\u672c\u67e5\u627e\uff0c\u4f46\u4e5f\u4f1a\u5360\u7528\u66f4\u591a\u7684\u7cfb\u7edf\u8d44\u6e90\uff1b\u4e0d\u5efa\u8bae\u4fee\u6539\uff1b\n   - tune.maxaccept <number>\uff1a\u8bbe\u5b9ahaproxy\u8fdb\u7a0b\u5185\u6838\u8c03\u5ea6\u8fd0\u884c\u65f6\u4e00\u6b21\u6027\u53ef\u4ee5\u63a5\u53d7\u7684\u8fde\u63a5\u7684\u4e2a\u6570\uff0c\u8f83\u5927\u7684\u503c\u53ef\u4ee5\u5e26\u6765\u8f83\u5927\u7684\u541e\u5410\u7387\uff0c\u9ed8\u8ba4\u5728\u5355\u8fdb\u7a0b\u6a21\u5f0f\u4e0b\u4e3a100\uff0c\u591a\u8fdb\u7a0b\u6a21\u5f0f\u4e0b\u4e3a8\uff0c\u8bbe\u5b9a\u4e3a-1\u53ef\u4ee5\u7981\u6b62\u6b64\u9650\u5236\uff1b\u4e00\u822c\u4e0d\u5efa\u8bae\u4fee\u6539\uff1b\n   - tune.maxpollevents  <number>\uff1a\u8bbe\u5b9a\u4e00\u6b21\u7cfb\u7edf\u8c03\u7528\u53ef\u4ee5\u5904\u7406\u7684\u4e8b\u4ef6\u6700\u5927\u6570\uff0c\u9ed8\u8ba4\u503c\u53d6\u51b3\u4e8eOS\uff1b\u5176\u503c\u5c0f\u4e8e200\u65f6\u53ef\u8282\u7ea6\u5e26\u5bbd\uff0c\u4f46\u4f1a\u7565\u5fae\u589e\u5927\u7f51\u7edc\u5ef6\u8fdf\uff0c\u800c\u5927\u4e8e200\u65f6\u4f1a\u964d\u4f4e\u5ef6\u8fdf\uff0c\u4f46\u4f1a\u7a0d\u7a0d\u589e\u52a0\u7f51\u7edc\u5e26\u5bbd\u7684\u5360\u7528\u91cf\uff1b\n   - tune.maxrewrite <number>\uff1a\u8bbe\u5b9a\u4e3a\u9996\u90e8\u91cd\u5199\u6216\u8ffd\u52a0\u800c\u9884\u7559\u7684\u7f13\u51b2\u7a7a\u95f4\uff0c\u5efa\u8bae\u4f7f\u75281024\u5de6\u53f3\u7684\u5927\u5c0f\uff1b\u5728\u9700\u8981\u4f7f\u7528\u66f4\u5927\u7684\u7a7a\u95f4\u65f6\uff0chaproxy\u4f1a\u81ea\u52a8\u589e\u52a0\u5176\u503c\uff1b\n   - tune.rcvbuf.client <number>\uff1a\n   - tune.rcvbuf.server <number>\uff1a\u8bbe\u5b9a\u5185\u6838\u5957\u63a5\u5b57\u4e2d\u670d\u52a1\u7aef\u6216\u5ba2\u6237\u7aef\u63a5\u6536\u7f13\u51b2\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff1b\u5f3a\u70c8\u63a8\u8350\u4f7f\u7528\u9ed8\u8ba4\u503c\uff1b\n   - tune.sndbuf.client\uff1a\n   - tune.sndbuf.server\uff1a\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Debug\u76f8\u5173\u7684\u53c2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   - debug\n   - quiet\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8d85\u65f6\u65f6\u957f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"- timeout http request \uff1a\u5728\u5ba2\u6237\u7aef\u5efa\u7acb\u8fde\u63a5\u4f46\u4e0d\u8bf7\u6c42\u6570\u636e\u65f6\uff0c\u5173\u95ed\u5ba2\u6237\u7aef\u8fde\u63a5\n- timeout queue \uff1a\u7b49\u5f85\u6700\u5927\u65f6\u957f\n- timeout connect\uff1a \u5b9a\u4e49haproxy\u5c06\u5ba2\u6237\u7aef\u8bf7\u6c42\u8f6c\u53d1\u81f3\u540e\u7aef\u670d\u52a1\u5668\u6240\u7b49\u5f85\u7684\u8d85\u65f6\u65f6\u957f\n- timeout client\uff1a\u5ba2\u6237\u7aef\u975e\u6d3b\u52a8\u72b6\u6001\u7684\u8d85\u65f6\u65f6\u957f  \u9ed8\u8ba4\u5355\u4f4d\u662f\u6beb\u79d2\n- timeout server\uff1a\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u7aef\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u7b49\u5f85\u670d\u52a1\u5668\u7aef\u7684\u8d85\u65f6\u65f6\u957f\uff0c\n- timeout http-keep-alive \uff1a\u5b9a\u4e49\u4fdd\u6301\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u957f\n- timeout check\uff1a\u5065\u5eb7\u72b6\u6001\u76d1\u6d4b\u65f6\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u8fc7\u77ed\u4f1a\u8bef\u5224\uff0c\u8fc7\u957f\u8d44\u6e90\u6d88\u8017\n- maxconn :\u6bcf\u4e2aserver\u6700\u5927\u7684\u8fde\u63a5\u6570\n \n- http-server-close : \u5728\u4f7f\u7528\u957f\u8fde\u63a5\u65f6\uff0c\u4e3a\u4e86\u907f\u514d\u5ba2\u6237\u7aef\u8d85\u65f6\u6ca1\u6709\u5173\u95ed\u957f\u8fde\u63a5\uff0c\u6b64\u529f\u80fd\u53ef\u4ee5\u4f7f\u670d\u52a1\u5668\u7aef\u5173\u95ed\u957f\u8fde\u63a5\n- redispatch\uff1a \u5728\u4f7f\u7528\u57fa\u4e8ecookie\u5b9a\u5411\u65f6\uff0c\u4e00\u65e6\u540e\u7aef\u67d0\u4e00server\u5b95\u673a\u65f6\uff0c\u4f1a\u5c06\u4f1a\u8bdd\u91cd\u65b0\u5b9a\u5411\u81f3\u67d0\u4e00\u4e0a\u6e38\u670d\u52a1\u5668\uff0c\u5fc5\u987b\u4f7f\u7528 \u7684\u9009\u9879\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u8bbf\u95ee\u63a7\u5236\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"- http-request: 7\u5c42\u8fc7\u6ee4\n- tcp-request content: tcp\u5c42\u8fc7\u6ee4\uff0c\u56db\u5c42\u8fc7\u6ee4\n")),(0,a.kt)("h2",{id:"\u7efc\u5408\u914d\u7f6e"},"\u7efc\u5408\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\nglobal   # \u5168\u5c40\u53c2\u6570\u7684\u8bbe\u7f6e\n    log 127.0.0.1 local0 info\n    # log\u8bed\u6cd5\uff1alog <address_1>[max_level_1] # \u5168\u5c40\u7684\u65e5\u5fd7\u914d\u7f6e\uff0c\u4f7f\u7528log\u5173\u952e\u5b57\uff0c\u6307\u5b9a\u4f7f\u7528127.0.0.1\u4e0a\u7684syslog\u670d\u52a1\u4e2d\u7684local0\u65e5\u5fd7\u8bbe\u5907\uff0c\u8bb0\u5f55\u65e5\u5fd7\u7b49\u7ea7\u4e3ainfo\u7684\u65e5\u5fd7\n    user haproxy\n    group haproxy\n    # \u8bbe\u7f6e\u8fd0\u884chaproxy\u7684\u7528\u6237\u548c\u7ec4\uff0c\u4e5f\u53ef\u4f7f\u7528uid\uff0cgid\u5173\u952e\u5b57\u66ff\u4ee3\u4e4b\n    daemon\n    # \u4ee5\u5b88\u62a4\u8fdb\u7a0b\u7684\u65b9\u5f0f\u8fd0\u884c\n    nbproc 16\n    # \u8bbe\u7f6ehaproxy\u542f\u52a8\u65f6\u7684\u8fdb\u7a0b\u6570\uff0c\u6839\u636e\u5b98\u65b9\u6587\u6863\u7684\u89e3\u91ca\uff0c\u6211\u5c06\u5176\u7406\u89e3\u4e3a\uff1a\u8be5\u503c\u7684\u8bbe\u7f6e\u5e94\u8be5\u548c\u670d\u52a1\u5668\u7684CPU\u6838\u5fc3\u6570\u4e00\u81f4\uff0c\u5373\u5e38\u89c1\u76842\u98978\u6838\u5fc3CPU\u7684\u670d\u52a1\u5668\uff0c\u5373\u5171\u670916\u6838\u5fc3\uff0c\u5219\u53ef\u4ee5\u5c06\u5176\u503c\u8bbe\u7f6e\u4e3a\uff1a<=16 \uff0c\u521b\u5efa\u591a\u4e2a\u8fdb\u7a0b\u6570\uff0c\u53ef\u4ee5\u51cf\u5c11\u6bcf\u4e2a\u8fdb\u7a0b\u7684\u4efb\u52a1\u961f\u5217\uff0c\u4f46\u662f\u8fc7\u591a\u7684\u8fdb\u7a0b\u6570\u4e5f\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fdb\u7a0b\u7684\u5d29\u6e83\u3002\u8fd9\u91cc\u6211\u8bbe\u7f6e\u4e3a16\n    maxconn 4096\n    # \u5b9a\u4e49\u6bcf\u4e2ahaproxy\u8fdb\u7a0b\u7684\u6700\u5927\u8fde\u63a5\u6570 \uff0c\u7531\u4e8e\u6bcf\u4e2a\u8fde\u63a5\u5305\u62ec\u4e00\u4e2a\u5ba2\u6237\u7aef\u548c\u4e00\u4e2a\u670d\u52a1\u5668\u7aef\uff0c\u6240\u4ee5\u5355\u4e2a\u8fdb\u7a0b\u7684TCP\u4f1a\u8bdd\u6700\u5927\u6570\u76ee\u5c06\u662f\u8be5\u503c\u7684\u4e24\u500d\u3002\n    #ulimit -n 65536\n    # \u8bbe\u7f6e\u6700\u5927\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\uff0c\u57281.4\u7684\u5b98\u65b9\u6587\u6863\u4e2d\u63d0\u793a\uff0c\u8be5\u503c\u4f1a\u81ea\u52a8\u8ba1\u7b97\uff0c\u6240\u4ee5\u4e0d\u5efa\u8bae\u8fdb\u884c\u8bbe\u7f6e\n    pidfile /var/run/haproxy.pid\n    # \u5b9a\u4e49haproxy\u7684pid \ndefaults # \u9ed8\u8ba4\u90e8\u5206\u7684\u5b9a\u4e49\n    mode http\n    # mode\u8bed\u6cd5\uff1amode {http|tcp|health} \u3002http\u662f\u4e03\u5c42\u6a21\u5f0f\uff0ctcp\u662f\u56db\u5c42\u6a21\u5f0f\uff0chealth\u662f\u5065\u5eb7\u68c0\u6d4b\uff0c\u8fd4\u56deOK\n    log 127.0.0.1 local3 err\n    # \u4f7f\u7528127.0.0.1\u4e0a\u7684syslog\u670d\u52a1\u7684local3\u8bbe\u5907\u8bb0\u5f55\u9519\u8bef\u4fe1\u606f\n    retries 3\n    # \u5b9a\u4e49\u8fde\u63a5\u540e\u7aef\u670d\u52a1\u5668\u7684\u5931\u8d25\u91cd\u8fde\u6b21\u6570\uff0c\u8fde\u63a5\u5931\u8d25\u6b21\u6570\u8d85\u8fc7\u6b64\u503c\u540e\u5c06\u4f1a\u5c06\u5bf9\u5e94\u540e\u7aef\u670d\u52a1\u5668\u6807\u8bb0\u4e3a\u4e0d\u53ef\u7528\n    option httplog\n    # \u542f\u7528\u65e5\u5fd7\u8bb0\u5f55HTTP\u8bf7\u6c42\uff0c\u9ed8\u8ba4haproxy\u65e5\u5fd7\u8bb0\u5f55\u662f\u4e0d\u8bb0\u5f55HTTP\u8bf7\u6c42\u7684\uff0c\u53ea\u8bb0\u5f55\u201c\u65f6\u95f4[Jan 5 13:23:46] \u65e5\u5fd7\u670d\u52a1\u5668[127.0.0.1] \u5b9e\u4f8b\u540d\u5df2\u7ecfpid[haproxy[25218]] \u4fe1\u606f[Proxy http_80_in stopped.]\u201d\uff0c\u65e5\u5fd7\u683c\u5f0f\u5f88\u7b80\u5355\u3002\n    option redispatch\n    # \u5f53\u4f7f\u7528\u4e86cookie\u65f6\uff0chaproxy\u5c06\u4f1a\u5c06\u5176\u8bf7\u6c42\u7684\u540e\u7aef\u670d\u52a1\u5668\u7684serverID\u63d2\u5165\u5230cookie\u4e2d\uff0c\u4ee5\u4fdd\u8bc1\u4f1a\u8bdd\u7684SESSION\u6301\u4e45\u6027\uff1b\u800c\u6b64\u65f6\uff0c\u5982\u679c\u540e\u7aef\u7684\u670d\u52a1\u5668\u5b95\u6389\u4e86\uff0c\u4f46\u662f\u5ba2\u6237\u7aef\u7684cookie\u662f\u4e0d\u4f1a\u5237\u65b0\u7684\uff0c\u5982\u679c\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u5c06\u4f1a\u5c06\u5ba2\u6237\u7684\u8bf7\u6c42\u5f3a\u5236\u5b9a\u5411\u5230\u53e6\u5916\u4e00\u4e2a\u540e\u7aefserver\u4e0a\uff0c\u4ee5\u4fdd\u8bc1\u670d\u52a1\u7684\u6b63\u5e38\u3002\n    option abortonclose\n    # \u5f53\u670d\u52a1\u5668\u8d1f\u8f7d\u5f88\u9ad8\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u7ed3\u675f\u6389\u5f53\u524d\u961f\u5217\u5904\u7406\u6bd4\u8f83\u4e45\u7684\u94fe\u63a5\n    option dontlognull\n    # \u542f\u7528\u8be5\u9879\uff0c\u65e5\u5fd7\u4e2d\u5c06\u4e0d\u4f1a\u8bb0\u5f55\u7a7a\u8fde\u63a5\u3002\u6240\u8c13\u7a7a\u8fde\u63a5\u5c31\u662f\u5728\u4e0a\u6e38\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u6216\u8005\u76d1\u63a7\u7cfb\u7edf\u4e3a\u4e86\u63a2\u6d4b\u8be5\u670d\u52a1\u662f\u5426\u5b58\u6d3b\u53ef\u7528\u65f6\uff0c\u9700\u8981\u5b9a\u671f\u7684\u8fde\u63a5\u6216\u8005\u83b7\u53d6\u67d0\u4e00\u56fa\u5b9a\u7684\u7ec4\u4ef6\u6216\u9875\u9762\uff0c\u6216\u8005\u63a2\u6d4b\u626b\u63cf\u7aef\u53e3\u662f\u5426\u5728\u76d1\u542c\u6216\u5f00\u653e\u7b49\u52a8\u4f5c\u88ab\u79f0\u4e3a\u7a7a\u8fde\u63a5\uff1b\u5b98\u65b9\u6587\u6863\u4e2d\u6807\u6ce8\uff0c\u5982\u679c\u8be5\u670d\u52a1\u4e0a\u6e38\u6ca1\u6709\u5176\u4ed6\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u8bdd\uff0c\u5efa\u8bae\u4e0d\u8981\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u56e0\u4e3a\u4e92\u8054\u7f51\u4e0a\u7684\u6076\u610f\u626b\u63cf\u6216\u5176\u4ed6\u52a8\u4f5c\u5c31\u4e0d\u4f1a\u88ab\u8bb0\u5f55\u4e0b\u6765\n    option httpclose\n    # \u8fd9\u4e2a\u53c2\u6570\u6211\u662f\u8fd9\u6837\u7406\u89e3\u7684\uff1a\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u6bcf\u5904\u7406\u5b8c\u4e00\u4e2arequest\u65f6\uff0chaproxy\u90fd\u4f1a\u53bb\u68c0\u67e5http\u5934\u4e2d\u7684Connection\u7684\u503c\uff0c\u5982\u679c\u8be5\u503c\u4e0d\u662fclose\uff0chaproxy\u5c06\u4f1a\u5c06\u5176\u5220\u9664\uff0c\u5982\u679c\u8be5\u503c\u4e3a\u7a7a\u5c06\u4f1a\u6dfb\u52a0\u4e3a\uff1aConnection: close\u3002\u4f7f\u6bcf\u4e2a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7aef\u5728\u5b8c\u6210\u4e00\u6b21\u4f20\u8f93\u540e\u90fd\u4f1a\u4e3b\u52a8\u5173\u95edTCP\u8fde\u63a5\u3002\u4e0e\u8be5\u53c2\u6570\u7c7b\u4f3c\u7684\u53e6\u5916\u4e00\u4e2a\u53c2\u6570\u662f\u201coption forceclose\u201d\uff0c\u8be5\u53c2\u6570\u7684\u4f5c\u7528\u662f\u5f3a\u5236\u5173\u95ed\u5bf9\u5916\u7684\u670d\u52a1\u901a\u9053\uff0c\u56e0\u4e3a\u6709\u7684\u670d\u52a1\u5668\u7aef\u6536\u5230Connection: close\u65f6\uff0c\u4e5f\u4e0d\u4f1a\u81ea\u52a8\u5173\u95edTCP\u8fde\u63a5\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u4e5f\u4e0d\u5173\u95ed\uff0c\u8fde\u63a5\u5c31\u4f1a\u4e00\u76f4\u5904\u4e8e\u6253\u5f00\uff0c\u76f4\u5230\u8d85\u65f6\u3002\n    contimeout 5000\n    # \u8bbe\u7f6e\u6210\u529f\u8fde\u63a5\u5230\u4e00\u53f0\u670d\u52a1\u5668\u7684\u6700\u957f\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u5355\u4f4d\u662f\u6beb\u79d2\uff0c\u65b0\u7248\u672c\u7684haproxy\u4f7f\u7528timeout connect\u66ff\u4ee3\uff0c\u8be5\u53c2\u6570\u5411\u540e\u517c\u5bb9\n    clitimeout 3000\n    # \u8bbe\u7f6e\u8fde\u63a5\u5ba2\u6237\u7aef\u53d1\u9001\u6570\u636e\u65f6\u7684\u6210\u529f\u8fde\u63a5\u6700\u957f\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u5355\u4f4d\u662f\u6beb\u79d2\uff0c\u65b0\u7248\u672chaproxy\u4f7f\u7528timeout client\u66ff\u4ee3\u3002\u8be5\u53c2\u6570\u5411\u540e\u517c\u5bb9\n    srvtimeout 3000\n    # \u8bbe\u7f6e\u670d\u52a1\u5668\u7aef\u56de\u5e94\u5ba2\u6237\u5ea6\u6570\u636e\u53d1\u9001\u7684\u6700\u957f\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u5355\u4f4d\u662f\u6beb\u79d2\uff0c\u65b0\u7248\u672chaproxy\u4f7f\u7528timeout server\u66ff\u4ee3\u3002\u8be5\u53c2\u6570\u5411\u540e\u517c\u5bb9\n \nlisten status # \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3astatus\u7684\u90e8\u5206\n    bind 0.0.0.0:1080\n    # \u5b9a\u4e49\u76d1\u542c\u7684\u5957\u63a5\u5b57\n    mode http\n    # \u5b9a\u4e49\u4e3aHTTP\u6a21\u5f0f\n    log global\n    # \u7ee7\u627fglobal\u4e2dlog\u7684\u5b9a\u4e49\n    stats refresh 30s\n    # stats\u662fhaproxy\u7684\u4e00\u4e2a\u7edf\u8ba1\u9875\u9762\u7684\u5957\u63a5\u5b57\uff0c\u8be5\u53c2\u6570\u8bbe\u7f6e\u7edf\u8ba1\u9875\u9762\u7684\u5237\u65b0\u95f4\u9694\u4e3a30s\n    stats uri /admin?stats\n    # \u8bbe\u7f6e\u7edf\u8ba1\u9875\u9762\u7684uri\u4e3a/admin?stats\n    stats realm Private lands\n    # \u8bbe\u7f6e\u7edf\u8ba1\u9875\u9762\u8ba4\u8bc1\u65f6\u7684\u63d0\u793a\u5185\u5bb9\n    stats auth admin:password\n    # \u8bbe\u7f6e\u7edf\u8ba1\u9875\u9762\u8ba4\u8bc1\u7684\u7528\u6237\u548c\u5bc6\u7801\uff0c\u5982\u679c\u8981\u8bbe\u7f6e\u591a\u4e2a\uff0c\u53e6\u8d77\u4e00\u884c\u5199\u5165\u5373\u53ef\n    stats hide-version\n    # \u9690\u85cf\u7edf\u8ba1\u9875\u9762\u4e0a\u7684haproxy\u7248\u672c\u4fe1\u606f\n \nfrontend http_80_in # \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3ahttp_80_in\u7684\u524d\u7aef\u90e8\u5206\n    bind 0.0.0.0:80\n    # http_80_in\u5b9a\u4e49\u524d\u7aef\u90e8\u5206\u76d1\u542c\u7684\u5957\u63a5\u5b57\n    mode http\n    # \u5b9a\u4e49\u4e3aHTTP\u6a21\u5f0f\n    log global\n    # \u7ee7\u627fglobal\u4e2dlog\u7684\u5b9a\u4e49\n    option forwardfor\n    # \u542f\u7528X-Forwarded-For\uff0c\u5728requests\u5934\u90e8\u63d2\u5165\u5ba2\u6237\u7aefIP\u53d1\u9001\u7ed9\u540e\u7aef\u7684server\uff0c\u4f7f\u540e\u7aefserver\u83b7\u53d6\u5230\u5ba2\u6237\u7aef\u7684\u771f\u5b9eIP\n    acl static_down nbsrv(static_server) lt 1\n    # \u5b9a\u4e49\u4e00\u4e2a\u540d\u53ebstatic_down\u7684acl\uff0c\u5f53backend static_sever\u4e2d\u5b58\u6d3b\u673a\u5668\u6570\u5c0f\u4e8e1\u65f6\u4f1a\u88ab\u5339\u914d\u5230\n    acl php_web url_reg /*.php$\n    #acl php_web path_end .php\n    # \u5b9a\u4e49\u4e00\u4e2a\u540d\u53ebphp_web\u7684acl\uff0c\u5f53\u8bf7\u6c42\u7684url\u672b\u5c3e\u662f\u4ee5.php\u7ed3\u5c3e\u7684\uff0c\u5c06\u4f1a\u88ab\u5339\u914d\u5230\uff0c\u4e0a\u9762\u4e24\u79cd\u5199\u6cd5\u4efb\u9009\u5176\u4e00\n    acl static_web url_reg /*.(css|jpg|png|jpeg|js|gif)$\n    #acl static_web path_end .gif .png .jpg .css .js .jpeg\n    # \u5b9a\u4e49\u4e00\u4e2a\u540d\u53ebstatic_web\u7684acl\uff0c\u5f53\u8bf7\u6c42\u7684url\u672b\u5c3e\u662f\u4ee5.css\u3001.jpg\u3001.png\u3001.jpeg\u3001.js\u3001.gif\u7ed3\u5c3e\u7684\uff0c\u5c06\u4f1a\u88ab\u5339\u914d\u5230\uff0c\u4e0a\u9762\u4e24\u79cd\u5199\u6cd5\u4efb\u9009\u5176\u4e00\n    use_backend php_server if static_down\n    # \u5982\u679c\u6ee1\u8db3\u7b56\u7565static_down\u65f6\uff0c\u5c31\u5c06\u8bf7\u6c42\u4ea4\u4e88backend php_server\n    use_backend php_server if php_web\n    # \u5982\u679c\u6ee1\u8db3\u7b56\u7565php_web\u65f6\uff0c\u5c31\u5c06\u8bf7\u6c42\u4ea4\u4e88backend php_server\n    use_backend static_server if static_web\n    # \u5982\u679c\u6ee1\u8db3\u7b56\u7565static_web\u65f6\uff0c\u5c31\u5c06\u8bf7\u6c42\u4ea4\u4e88backend static_server\n \nbackend php_server #\u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3aphp_server\u7684\u540e\u7aef\u90e8\u5206\n    mode http\n    # \u8bbe\u7f6e\u4e3ahttp\u6a21\u5f0f\n    balance source\n    # \u8bbe\u7f6ehaproxy\u7684\u8c03\u5ea6\u7b97\u6cd5\u4e3a\u6e90\u5730\u5740hash\n    cookie SERVERID\n    # \u5141\u8bb8\u5411cookie\u63d2\u5165SERVERID\uff0c\u6bcf\u53f0\u670d\u52a1\u5668\u7684SERVERID\u53ef\u5728\u4e0b\u9762\u4f7f\u7528cookie\u5173\u952e\u5b57\u5b9a\u4e49\n    option httpchk GET /test/index.php\n    # \u5f00\u542f\u5bf9\u540e\u7aef\u670d\u52a1\u5668\u7684\u5065\u5eb7\u68c0\u6d4b\uff0c\u901a\u8fc7GET /test/index.php\u6765\u5224\u65ad\u540e\u7aef\u670d\u52a1\u5668\u7684\u5065\u5eb7\u60c5\u51b5\n    server php_server_1 10.12.25.68:80 cookie 1 check inter 2000 rise 3 fall 3 weight 2\n    server php_server_2 10.12.25.72:80 cookie 2 check inter 2000 rise 3 fall 3 weight 1\n    server php_server_bak 10.12.25.79:80 cookie 3 check inter 1500 rise 3 fall 3 backup\n    # server\u8bed\u6cd5\uff1aserver [:port] [param*] # \u4f7f\u7528server\u5173\u952e\u5b57\u6765\u8bbe\u7f6e\u540e\u7aef\u670d\u52a1\u5668\uff1b\u4e3a\u540e\u7aef\u670d\u52a1\u5668\u6240\u8bbe\u7f6e\u7684\u5185\u90e8\u540d\u79f0[php_server_1]\uff0c\u8be5\u540d\u79f0\u5c06\u4f1a\u5448\u73b0\u5728\u65e5\u5fd7\u6216\u8b66\u62a5\u4e2d\u3001\u540e\u7aef\u670d\u52a1\u5668\u7684IP\u5730\u5740\uff0c\u652f\u6301\u7aef\u53e3\u6620\u5c04[10.12.25.68:80]\u3001\u6307\u5b9a\u8be5\u670d\u52a1\u5668\u7684SERVERID\u4e3a1[cookie 1]\u3001\u63a5\u53d7\u5065\u5eb7\u76d1\u6d4b[check]\u3001\u76d1\u6d4b\u7684\u95f4\u9694\u65f6\u957f\uff0c\u5355\u4f4d\u6beb\u79d2[inter 2000]\u3001\u76d1\u6d4b\u6b63\u5e38\u591a\u5c11\u6b21\u540e\u88ab\u8ba4\u4e3a\u540e\u7aef\u670d\u52a1\u5668\u662f\u53ef\u7528\u7684[rise 3]\u3001\u76d1\u6d4b\u5931\u8d25\u591a\u5c11\u6b21\u540e\u88ab\u8ba4\u4e3a\u540e\u7aef\u670d\u52a1\u5668\u662f\u4e0d\u53ef\u7528\u7684[fall 3]\u3001\u5206\u53d1\u7684\u6743\u91cd[weight 2]\u3001\u6700\u540e\u4e3a\u5907\u4efd\u7528\u7684\u540e\u7aef\u670d\u52a1\u5668\uff0c\u5f53\u6b63\u5e38\u7684\u670d\u52a1\u5668\u5168\u90e8\u90fd\u5b95\u673a\u540e\uff0c\u624d\u4f1a\u542f\u7528\u5907\u4efd\u670d\u52a1\u5668[backup]\n \nbackend static_server\n    mode http\n    option httpchk GET /test/index.html\n    server static_server_1 10.12.25.83:80 cookie 3 check inter 2000 rise 3 fall 3\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"haproxy\u5b98\u65b9\u4e2d\u6587\u5165\u95e8\u6587\u6863\u6559\u7a0b(mage):",(0,a.kt)("a",{parentName:"li",href:"https://blog.51cto.com/mageedu/1744420"},"https://blog.51cto.com/mageedu/1744420")),(0,a.kt)("li",{parentName:"ul"},"csdn@Resines:",(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/genglei1022/article/details/83374188"},"https://blog.csdn.net/genglei1022/article/details/83374188"))))}u.isMDXComponent=!0},45310:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/configuration-7386e1343a3d5f60b332bdfab171ef03.txt"}}]);