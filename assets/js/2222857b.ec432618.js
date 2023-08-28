"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[1626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>_});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),_=o,m=u["".concat(c,".").concat(_)]||u[_]||d[_]||a;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function _(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},s=void 0,i={unversionedId:"LinuxBasics/VPS \u8282\u70b9\u642d\u5efa",id:"LinuxBasics/VPS \u8282\u70b9\u642d\u5efa",title:"VPS \u8282\u70b9\u642d\u5efa",description:"\u8282\u70b9\u642d\u5efa",source:"@site/docs/LinuxBasics/VPS \u8282\u70b9\u642d\u5efa.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/VPS \u8282\u70b9\u642d\u5efa",permalink:"/docs/LinuxBasics/VPS \u8282\u70b9\u642d\u5efa",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/VPS \u8282\u70b9\u642d\u5efa.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"\u547d\u4ee4\u7b14\u8bb0",permalink:"/docs/LinuxBasics/Useful Command"},next:{title:"Vagrant Basic",permalink:"/docs/LinuxBasics/Vagrant"}},c={},p=[{value:"\u8282\u70b9\u642d\u5efa",id:"\u8282\u70b9\u642d\u5efa",level:2},{value:"\u5bfb\u627e\u9002\u5408\u7684\u4f2a\u88c5\u7ad9",id:"\u5bfb\u627e\u9002\u5408\u7684\u4f2a\u88c5\u7ad9",level:2},{value:"\u914d\u7f6enginx",id:"\u914d\u7f6enginx",level:2},{value:"\u591a\u7528\u6237\u5408\u79df",id:"\u591a\u7528\u6237\u5408\u79df",level:2}],l={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8282\u70b9\u642d\u5efa"},"\u8282\u70b9\u642d\u5efa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'#\u66f4\u65b0\u8f6f\u4ef6\u6e90\napt update\n#\u542f\u7528 BBR TCP \u62e5\u585e\u63a7\u5236\u7b97\u6cd5\necho "net.core.default_qdisc=fq" >> /etc/sysctl.conf\necho "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf\nsysctl -p\n\n#\u5b89\u88c5x-ui\uff1a\nbash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)\n\n#\u5b89\u88c5nginx\napt install nginx\n#\u5b89\u88c5acme\uff1a\ncurl https://get.acme.sh | sh\n#\u6dfb\u52a0\u8f6f\u94fe\u63a5\uff1a\nln -s  /root/.acme.sh/acme.sh /usr/local/bin/acme.sh\n#\u5207\u6362CA\u673a\u6784\uff1a \nacme.sh --set-default-ca --server letsencrypt\n#\u7533\u8bf7\u8bc1\u4e66\uff1a \nacme.sh  --issue -d vir.freemyvps.xyz  --webroot  /var/www/html\nacme.sh  --issue  -d mydomain.com -d www.mydomain.com  --webroot  /home/wwwroot/mydomain.com/\n#\u5b89\u88c5\u8bc1\u4e66\uff1a\nacme.sh --install-cert -d \u4f60\u7684\u57df\u540d --ecc \\\n--key-file       /etc/x-ui/server.key  \\\n--fullchain-file /etc/x-ui/server.crt \\\n--reloadcmd     "systemctl force-reload nginx"\n')),(0,o.kt)("h2",{id:"\u5bfb\u627e\u9002\u5408\u7684\u4f2a\u88c5\u7ad9"},"\u5bfb\u627e\u9002\u5408\u7684\u4f2a\u88c5\u7ad9"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"http\u7ad9\u70b9\u4f18\u5148\uff0c\u4e2a\u4eba\u7f51\u76d8\u7b26\u5408\u5355\u8282\u70b9\u5927\u6d41\u91cf\u7279\u5f81")),(0,o.kt)("p",null,"\u793a\u4f8b\u5173\u952e\u5b57\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"intext:\u767b\u5f55 Cloudreve")),(0,o.kt)("h2",{id:"\u914d\u7f6enginx"},"\u914d\u7f6enginx"),(0,o.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},'user www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n    keepalive_timeout 65;\n    types_hash_max_size 2048;\n\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n    gzip on;\n\n    server {\n        listen 443 ssl;\n        \n        server_name nicename.co;  #\u4f60\u7684\u57df\u540d\n        ssl_certificate       /etc/x-ui/server.crt;  #\u8bc1\u4e66\u4f4d\u7f6e\n        ssl_certificate_key   /etc/x-ui/server.key; #\u79c1\u94a5\u4f4d\u7f6e\n        \n        ssl_session_timeout 1d;\n        ssl_session_cache shared:MozSSL:10m;\n        ssl_session_tickets off;\n        ssl_protocols    TLSv1.2 TLSv1.3;\n        ssl_prefer_server_ciphers off;\n\n        location / {\n            proxy_pass https://bing.com; #\u4f2a\u88c5\u7f51\u5740\n            proxy_redirect off;\n            proxy_ssl_server_name on;\n            sub_filter_once off;\n            sub_filter "bing.com" $server_name;\n            proxy_set_header Host "bing.com";\n            proxy_set_header Referer $http_referer;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header User-Agent $http_user_agent;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto https;\n            proxy_set_header Accept-Encoding "";\n            proxy_set_header Accept-Language "zh-CN";\n        }\n\n\n        location /ray {   #\u5206\u6d41\u8def\u5f84\n            proxy_redirect off;\n            proxy_pass http://127.0.0.1:10000; #Xray\u7aef\u53e3\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection "upgrade";\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        }\n        \n        location /xui {   #xui\u8def\u5f84\n            proxy_redirect off;\n            proxy_pass http://127.0.0.1:9999;  #xui\u76d1\u542c\u7aef\u53e3\n            proxy_http_version 1.1;\n            proxy_set_header Host $host;\n        }\n    }\n\n    server {\n        listen 80;\n        location /.well-known/ {\n               root /var/www/html;\n            }\n        location / {\n                rewrite ^(.*)$ https://$host$1 permanent;\n            }\n    }\n}\n')),(0,o.kt)("h2",{id:"\u591a\u7528\u6237\u5408\u79df"},"\u591a\u7528\u6237\u5408\u79df"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u4fee\u6539nginx\u7684\u914d\u7f6e\u6587\u4ef6\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"ws path"),"\u8def\u5f84\u5206\u6d41")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},'location /ray {   #\u5206\u6d41\u8def\u5f84\n    proxy_redirect off;\n    proxy_pass http://127.0.0.1:10000; #Xray\u7aef\u53e3\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "upgrade";\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n}\n')))}d.isMDXComponent=!0}}]);