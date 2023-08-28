"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[7839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,v=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(v,c(c({ref:t},l),{},{components:n})):r.createElement(v,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=n[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},c="Tomcat Session(memcached)",i={unversionedId:"LinuxBasics/Web-Servers/Jvm-Tomcat/Tomcat Session\uff08memcached\uff09",id:"LinuxBasics/Web-Servers/Jvm-Tomcat/Tomcat Session\uff08memcached\uff09",title:"Tomcat Session(memcached)",description:"\u73af\u5883\uff1a",source:"@site/docs/LinuxBasics/Web-Servers/Jvm-Tomcat/Tomcat Session\uff08memcached\uff09.md",sourceDirName:"LinuxBasics/Web-Servers/Jvm-Tomcat",slug:"/LinuxBasics/Web-Servers/Jvm-Tomcat/Tomcat Session\uff08memcached\uff09",permalink:"/docs/LinuxBasics/Web-Servers/Jvm-Tomcat/Tomcat Session\uff08memcached\uff09",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/Web-Servers/Jvm-Tomcat/Tomcat Session\uff08memcached\uff09.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"nginx+tomcat+redis\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u548csession\u5171\u4eab",permalink:"/docs/LinuxBasics/Web-Servers/Jvm-Tomcat/Tomcat Session\uff08Redis with Nginx\uff09"},next:{title:"Tomcat \u5e38\u7528\u8bbe\u7f6e\u53ca\u5b89\u5168\u7ba1\u7406\u89c4\u8303",permalink:"/docs/LinuxBasics/Web-Servers/Jvm-Tomcat/Tomcat \u5e38\u7528\u8bbe\u7f6e\u53ca\u5b89\u5168\u7ba1\u7406\u89c4\u8303"}},s={},m=[{value:"\u914d\u7f6e Nginx \u53cd\u5411\u4ee3\u7406",id:"\u914d\u7f6e-nginx-\u53cd\u5411\u4ee3\u7406",level:2}],l={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tomcat-sessionmemcached"},"Tomcat Session(memcached)"),(0,a.kt)("h1",{id:"nginx--tomcat--memcache-\u4f1a\u8bdd\u4fdd\u6301"},"nginx + tomcat + memcache \u4f1a\u8bdd\u4fdd\u6301"),(0,a.kt)("p",null,"\u73af\u5883\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,a.kt)("th",{parentName:"tr",align:null},"IP"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nginx\u3001tomcat-1\u3001memcached"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.128")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tomcat-2\u3001memcached"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.136")))),(0,a.kt)("h2",{id:"\u914d\u7f6e-nginx-\u53cd\u5411\u4ee3\u7406"},"\u914d\u7f6e Nginx \u53cd\u5411\u4ee3\u7406"),(0,a.kt)("p",null,"\u7f16\u8f91 nginx \u4e3b\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")," \uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    upstream tomcat-server {\n        server 172.16.1.128:8080 weight=1;\n        server 172.16.1.136:8080 weight=1;\n    }\n\n    # \u5e76\u76f4\u63a5\u4fee\u6539\u539f\u6765\u7684 server \u6bb5\u5185\u5bb9\n    server {\n            listen       80;\n            server_name  localhost;\n            root         /usr/share/nginx/html;\n\n            location ~* \\.jsp$ {\n                proxy_pass http://tomcat-server;\n                proxy_set_header Host $host;\n            }\n\n            location / {\n                index  index.html index.htm;\n            }\n    }\n")))}p.isMDXComponent=!0}}]);