"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||l;return t?r.createElement(d,o(o({ref:n},i),{},{components:t})):r.createElement(d,o({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={},o="Nginx \u7f13\u5b58",c={unversionedId:"LinuxBasics/Web-Servers/Nginx/Nginx Cache",id:"LinuxBasics/Web-Servers/Nginx/Nginx Cache",title:"Nginx \u7f13\u5b58",description:"Nginx\u672c\u8eab\u5c31\u6709\u7f13\u5b58\u529f\u80fd\uff0c\u80fd\u591f\u7f13\u5b58\u9759\u6001\u5bf9\u8c61\uff0c\u6bd4\u5982\u56fe\u7247\u3001CSS\u3001JS\u7b49\u5185\u5bb9\u76f4\u63a5\u7f13\u5b58\u5230\u672c\u5730\uff0c\u4e0b\u6b21\u8bbf\u95ee\u76f8\u540c\u5bf9\u8c61\u65f6\uff0c\u76f4\u63a5\u4ece\u7f13\u5b58\u5373\u53ef\uff0c\u65e0\u9700\u8bbf\u95ee\u540e\u7aef\u9759\u6001\u670d\u52a1\u5668\u4ee5\u53ca\u5b58\u50a8\u5b58\u50a8\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u66ff\u4ee3squid\u529f\u80fd\u3002",source:"@site/docs/LinuxBasics/Web-Servers/Nginx/Nginx Cache.md",sourceDirName:"LinuxBasics/Web-Servers/Nginx",slug:"/LinuxBasics/Web-Servers/Nginx/Nginx Cache",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx Cache",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/Web-Servers/Nginx/Nginx Cache.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Nginx+uWSGI\u90e8\u7f72Django\u9879\u76ee",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx - uWSGI \u90e8\u7f72Django"},next:{title:"Nginx Rewrite \u5730\u5740\u91cd\u5199",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx Rewrite"}},p={},s=[{value:"1 \u73af\u5883\u51c6\u5907",id:"1-\u73af\u5883\u51c6\u5907",level:2},{value:"2 \u914d\u7f6ecache",id:"2-\u914d\u7f6ecache",level:2},{value:"2.1 \u521b\u5efa\u76ee\u5f55\u5e76\u6302\u8f7dtmpfs",id:"21-\u521b\u5efa\u76ee\u5f55\u5e76\u6302\u8f7dtmpfs",level:3},{value:"2.2 \u914d\u7f6e\u7f13\u5b58\u76ee\u5f55\u5927\u5c0f\u4ee5\u53cakey\u7a7a\u95f4\u540d",id:"22-\u914d\u7f6e\u7f13\u5b58\u76ee\u5f55\u5927\u5c0f\u4ee5\u53cakey\u7a7a\u95f4\u540d",level:3},{value:"2.3 \u914d\u7f6e\u53cd\u5411\u4ee3\u7406",id:"23-\u914d\u7f6e\u53cd\u5411\u4ee3\u7406",level:3},{value:"2.4 \u914d\u7f6e\u65e5\u5fd7",id:"24-\u914d\u7f6e\u65e5\u5fd7",level:3},{value:"2.5 \u76d1\u6d4b\u7f13\u5b58",id:"25-\u76d1\u6d4b\u7f13\u5b58",level:3},{value:"\u901a\u8fc7url\u6e05\u7406\u7f13\u5b58",id:"\u901a\u8fc7url\u6e05\u7406\u7f13\u5b58",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],i={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nginx-\u7f13\u5b58"},"Nginx \u7f13\u5b58"),(0,a.kt)("p",null,"Nginx\u672c\u8eab\u5c31\u6709\u7f13\u5b58\u529f\u80fd\uff0c\u80fd\u591f\u7f13\u5b58\u9759\u6001\u5bf9\u8c61\uff0c\u6bd4\u5982\u56fe\u7247\u3001CSS\u3001JS\u7b49\u5185\u5bb9\u76f4\u63a5\u7f13\u5b58\u5230\u672c\u5730\uff0c\u4e0b\u6b21\u8bbf\u95ee\u76f8\u540c\u5bf9\u8c61\u65f6\uff0c\u76f4\u63a5\u4ece\u7f13\u5b58\u5373\u53ef\uff0c\u65e0\u9700\u8bbf\u95ee\u540e\u7aef\u9759\u6001\u670d\u52a1\u5668\u4ee5\u53ca\u5b58\u50a8\u5b58\u50a8\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u66ff\u4ee3squid\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"1-\u73af\u5883\u51c6\u5907"},"1 \u73af\u5883\u51c6\u5907"),(0,a.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u53ea\u6d4b\u8bd5nginx\u7684proxy_cache\u7684\u7f13\u5b58\u529f\u80fd\uff0c\u6240\u4ee5\u7ed3\u6784\u8d8a\u7b80\u5355\u8d8a\u597d\uff0c\u8fd9\u91cc\u6211\u4eec\u53ea\u9700\u8981\u51c6\u5907\u4e00\u53f0nginx\u7684\u865a\u62df\u673a\u5373\u53ef\uff0c\u5982\u679c\u6ca1\u6709nginx\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528epel\u6e90\uff0cyum\u5b89\u88c5\u4e00\u4e2a\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#\u6dfb\u52a0epel\u6e90\nroot@~$ wget -O /etc/yum.repos.d/epel.repohttp://mirrors.aliyun.com/repo/epel-6.repo\n#yum\u5b89\u88c5nginx\nroot@~$ yum install nginx -y\n#rpm -ql\u67e5\u770b\u4e3b\u8981\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\nroot@~$ rpm -ql nginx\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u4e3a\u4e86\u7b80\u5355\uff0c\u53ea\u4f7f\u7528\u7b80\u5355\u7684nginx.conf\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'root@nginx$ cat nginx.conf\nuser              nginx;\nworker_processes  1;\nerror_log /var/log/nginx/error.log;\npid       /var/run/nginx.pid;\nevents {\n   worker_connections  1024;\n}\nhttp {\n   include      /etc/nginx/mime.types;\n   default_type application/octet-stream;\n   log_format  main  \'$remote_addr - $remote_user [$time_local]"$request" \'\n                      \'$status $body_bytes_sent"$http_referer" \'\n                     \'"$http_user_agent" "$http_x_forwarded_for"\';\n   sendfile        on;\n   keepalive_timeout  65;\n   server {\n       listen 80;\n       location / {\n            root   /usr/share/nginx/html;\n            index  index.html index.htm;\n       }\n   }\n}\n')),(0,a.kt)("p",null,"\u542f\u52a8\u67e5\u770b\u521d\u59cb\u754c\u9762\u662f\u5426\u6b63\u5e38\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@nginx$ nginx\nroot@nginx$ netstat -tupln|grepnginx\ntcp       0      0 0.0.0.0:80           0.0.0.0:*                   LISTEN      1043/nginx\nroot@nginx$ curl -I 192.168.16.199\nHTTP/1.1 200 OK\nServer: nginx/1.0.15\nDate: Mon, 14 Sep 2015 09:40:53 GMT\nContent-Type: text/html\nContent-Length: 3698\nLast-Modified: Tue, 16 Jun 2015 21:34:15GMT\nConnection: keep-alive\nAccept-Ranges: bytes\n")),(0,a.kt)("p",null,"\u4e00\u5207\u6b63\u5e38\uff0c\u9996\u9875\u67092\u5f20\u56fe\u7247\uff0c\u6b63\u597d\u7528\u4e8e\u5b9e\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@html$ tree/usr/share/nginx/html/\n/usr/share/nginx/html/\n|-- 404.html\n|-- 50x.html\n|-- index.html\n|-- nginx-logo.png\n`-- poweredby.png\n")),(0,a.kt)("p",null,"\u81f3\u6b64\u73af\u5883\u51c6\u5907\u5b8c\u6bd5\u3002"),(0,a.kt)("h2",{id:"2-\u914d\u7f6ecache"},"2 \u914d\u7f6ecache"),(0,a.kt)("h3",{id:"21-\u521b\u5efa\u76ee\u5f55\u5e76\u6302\u8f7dtmpfs"},"2.1 \u521b\u5efa\u76ee\u5f55\u5e76\u6302\u8f7dtmpfs"),(0,a.kt)("p",null,"nginx\u7684proxy_cache\u662f\u57fa\u4e8e\u5185\u5b58\u548c\u78c1\u76d8\u7684\u7f13\u5b58\uff0c\u9700\u8981\u6307\u5b9a\u7f13\u5b58\u76ee\u5f55\u548c\u4e34\u65f6\u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@nginx$ mkdir /tmp/{ngx_tmp,ngx_cache}-p\n")),(0,a.kt)("p",null,"\u7f13\u5b58\u5b58\u653e\u4e8e\u78c1\u76d8\uff0c\u78c1\u76d8IO\u4f1a\u5f71\u54cd\u7f13\u5b58\u7684\u901f\u5ea6\uff0c\u6240\u4ee5\u6211\u4eec\u5728\u5c06tmpfs\u6302\u8f7d\u4e8engx_cache\u76ee\u5f55\u4e0a\u6765\u52a0\u901f\u7f13\u5b58\u7684\u8bfb\u53d6\u548c\u5199\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@nginx$ mount -t tmpfs -osize=100M tmpfs /tmp/ngx_cache\nroot@nginx$ mount|grep tmpfs\ntmpfs on /dev/shm type tmpfs (rw)\ntmpfs on /tmp/ngx_cache type tmpfs (rw,size=100M)\n")),(0,a.kt)("h3",{id:"22-\u914d\u7f6e\u7f13\u5b58\u76ee\u5f55\u5927\u5c0f\u4ee5\u53cakey\u7a7a\u95f4\u540d"},"2.2 \u914d\u7f6e\u7f13\u5b58\u76ee\u5f55\u5927\u5c0f\u4ee5\u53cakey\u7a7a\u95f4\u540d"),(0,a.kt)("p",null,"\u5c06\u4e0b\u9762\u914d\u7f6e\u653e\u81f3http\u6807\u7b7e\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@nginx$ grep proxy_cache_pathnginx.conf\n\n       proxy_cache_path /tmp/ngx_cache levels=1:2 keys_zone=cache_one:100minactive=1d max_size=5g;\n\n#\u6307\u5b9a\u7f13\u5b58\u76ee\u5f55\uff0c\u7f13\u5b58\u7b49\u7ea7\uff0c\u952e\u7a7a\u95f4\u540d\uff0c\u952e\u7a7a\u95f4\u5927\u5c0f\uff0c\u5931\u6548\u65f6\u95f4\uff0c\u4ee5\u53ca\u78c1\u76d8\u6700\u5927\u7f13\u5b58\u5927\u5c0f\n")),(0,a.kt)("h3",{id:"23-\u914d\u7f6e\u53cd\u5411\u4ee3\u7406"},"2.3 \u914d\u7f6e\u53cd\u5411\u4ee3\u7406"),(0,a.kt)("p",null,"\u9996\u5148\u914d\u7f6eupstream\u8282\u70b9\u6c60\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"upstream server_pool {\n   server 127.0.0.1:8080;\n}\n")),(0,a.kt)("p",null,"\u5728server\u6807\u7b7e\u7684location\u6bb5\u4e2d\u914d\u7f6e\u4ee3\u7406\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"proxy_pass http://server_pool;\n")),(0,a.kt)("p",null,"\u914d\u7f6e8080\u7aef\u53e3\u7684\u6807\u7b7e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n   listen 8080;\n   location / {\n       root /usr/share/nginx/html;\n       index index.html index.htm;\n   }\n   access_log /var/log/nginx/access.log  main;\n}\n")),(0,a.kt)("p",null,"\u914d\u7f6eproxy_cache\u76f8\u5173\u53c2\u6570\u542f\u7528\u7f13\u5b58\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"proxy_pass http://server_pool;\nproxy_next_upstream http_502 http_504error timeout invalid_header; #\u51fa\u9519\u5c1d\u8bd5\u4e0b\u4e00\u4e2a\u8282\u70b9\nproxy_cache cache_one;      #\u7f13\u5b58\u952e\u7a7a\u95f4\u540d\nproxy_cache_valid 200 304 12h; #\u6307\u5b9a\u5bf9\u5e94\u72b6\u6001\u7801\u7684\u7f13\u5b58\u65f6\u95f4\nproxy_cache_valid 301 302 1m;\nproxy_cache_valid any 1m;\nproxy_cache_key $host$uri$is_args$args; #\u6307\u5b9a\u952ekey\u7684\u683c\u5f0f\nproxy_set_header Host $host;        #\u4f20\u9012\u4e3b\u673a\u540d\u7ed9\u540e\u7aef\u8282\u70b9\nproxy_set_header X-Forwarded-For$remote_addr; #\u4f20\u9012\u5ba2\u6237\u7aefIP\u7ed9\u540e\u7aef\u8282\u70b9\nexpires 1d; #\u8d85\u671f\u65f6\u95f4\n")),(0,a.kt)("p",null,"\u6700\u7ec8\u7684nginx.conf\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'root@nginx$ cat nginx.conf\nuser              nginx;\nworker_processes  1;\nerror_log /var/log/nginx/error.log;\npid       /var/run/nginx.pid;\nevents {\n   worker_connections  1024;\n}\nhttp {\n   include      /etc/nginx/mime.types;\n   default_type application/octet-stream;\n   log_format  main  \'$remote_addr - $remote_user [$time_local]"$request" \'\n                      \'$status $body_bytes_sent"$http_referer" \'\n                     \'"$http_user_agent" "$http_x_forwarded_for"\'\n                                         \'"addr:$upstream_addr-status:$upstream_status-cachestatus:$upstream_cache_status"\';\n   sendfile        on;\n   keepalive_timeout  65;\n       proxy_cache_path /tmp/ngx_cache levels=1:2 keys_zone=cache_one:100m inactive=1dmax_size=5g;\n       upstream server_pool {\n                server 127.0.0.1:8080;\n       }\n   server {\n                listen 80;\n       location / {\n                        proxy_passhttp://server_pool;\n                        proxy_next_upstreamhttp_502 http_504 error timeout invalid_header;\n                        proxy_cache cache_one;\n                        proxy_cache_valid 200304 12h;\n                        proxy_cache_valid 301302 1m;\n                        proxy_cache_valid any 1m;\n                        proxy_cache_key$host$uri$is_args$args;\n                        proxy_set_header Host$host;\n                        proxy_set_headerX-Forwarded-For $remote_addr;\n                        expires 1d;\n       }\n       access_log /var/log/nginx/cache_access.log main;\n   }\n       server {\n                listen 8080;\n                location / {\n                        root/usr/share/nginx/html;\n                        index index.htmlindex.htm;\n                }\n       }\n}\n')),(0,a.kt)("h3",{id:"24-\u914d\u7f6e\u65e5\u5fd7"},"2.4 \u914d\u7f6e\u65e5\u5fd7"),(0,a.kt)("p",null,"\u4e3a\u4e86\u89c2\u5bdf\u7f13\u5b58\u7684\u547d\u4e2d\u72b6\u6001\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u7f13\u5b58\u76f8\u5173\u7684\u53d8\u91cf\u8bb0\u5f55\u5728\u65e5\u5fd7\u4e2d\u3002"),(0,a.kt)("p",null,"\u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'log_format main  \'$remote_addr - $remote_user[$time_local] "$request" \'\n                  \'$status $body_bytes_sent"$http_referer" \'\n                  \'"$http_user_agent""$http_x_forwarded_for"\'\n                 \'"addr:$upstream_addr-status:$upstream_status-cachestatus:$upstream_cache_status"\';\n#\u5176\u4e2dupstream_addr\u8bb0\u5f55\u5206\u53d1\u7684\u540e\u7aef\u8282\u70b9IP\uff1bupstream_status\u8bb0\u5f55\u540e\u7aef\u8282\u70b9\u8fd4\u56de\u7684\u72b6\u6001\u7801\uff1bupstream_cache_status\u8bb0\u5f55\u7f13\u5b58\u7684\u547d\u4e2d\u60c5\u51b5\u3002\n')),(0,a.kt)("p",null,"\u5728\u53cd\u5411\u4ee3\u7406\u6807\u7b7e\u4e2d\u5f15\u7528\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"access_log /var/log/nginx/cache_access.log  main;\n")),(0,a.kt)("p",null,"nginx\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@nginx$ nginx -s reload\n")),(0,a.kt)("h3",{id:"25-\u76d1\u6d4b\u7f13\u5b58"},"2.5 \u76d1\u6d4b\u7f13\u5b58"),(0,a.kt)("p",null,"\u76d1\u6d4b\u7f13\u5b58\u6587\u4ef6\u7684\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u6d4f\u89c8\u7f51\u7ad9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@ngx_cache$ inotifywait -mrq/tmp/ngx_cache/\n/tmp/ngx_cache/ CREATE,ISDIR 6\n/tmp/ngx_cache/ OPEN,ISDIR 6\n/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR6\n/tmp/ngx_cache/ CREATE,ISDIR 1\n/tmp/ngx_cache/ OPEN,ISDIR 1\n/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR1\n/tmp/ngx_cache/ CREATE,ISDIR 3\n/tmp/ngx_cache/ OPEN,ISDIR 3\n/tmp/ngx_cache/ CLOSE_NOWRITE,CLOSE,ISDIR3\n/tmp/ngx_cache/3/ CREATE,ISDIR fd\n/tmp/ngx_cache/3/ OPEN,ISDIR fd\n/tmp/ngx_cache/3/CLOSE_NOWRITE,CLOSE,ISDIR fd\n/tmp/ngx_cache/3/fd/ CREATEdd404cd351f6b9efb072e5806dc2efd3.0000000026\n/tmp/ngx_cache/3/fd/ OPENdd404cd351f6b9efb072e5806dc2efd3.0000000026\n/tmp/ngx_cache/3/fd/ MODIFYdd404cd351f6b9efb072e5806dc2efd3.0000000026\n/tmp/ngx_cache/3/fd/ CLOSE_WRITE,CLOSEdd404cd351f6b9efb072e5806dc2efd3.0000000026\n/tmp/ngx_cache/3/fd/ MOVED_FROMdd404cd351f6b9efb072e5806dc2efd3.0000000026\n/tmp/ngx_cache/3/fd/ MOVED_TOdd404cd351f6b9efb072e5806dc2efd3\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u6709\u6700\u540e\u51e0\u884c\u53ef\u77e5\uff0c\u56fe\u7247\u7f13\u5b58\u5230\u76ee\u5f55\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u901a\u8fc7url\u6e05\u7406\u7f13\u5b58"},"\u901a\u8fc7url\u6e05\u7406\u7f13\u5b58"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"# \u5728\u914d\u7f6e\u6bb5\u4e2d\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9\nlocation ~ /purge(/.*) {\n        allow    all;\n        proxy_cache_purge    cache_one   $1;\n}\n\nlocation ~ /purge2(/.*) {\n        allow    all;\n        proxy_cache_purge    cache_two    $1;\n}\n")),(0,a.kt)("p",null,"\u968f\u540e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),"\u547d\u4ee4\u8fdb\u884c\u6e05\u7406\u7f13\u5b58\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," curl -s http://YOUR_IP/purge/<YOUR_RESOURCES>\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nginx cache path: ",(0,a.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path"},"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path"))))}u.isMDXComponent=!0}}]);