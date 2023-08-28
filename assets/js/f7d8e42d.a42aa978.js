"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5662],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,g=m["".concat(a,".").concat(f)]||m[f]||u[f]||s;return r?t.createElement(g,p(p({ref:n},l),{},{components:r})):t.createElement(g,p({ref:n},l))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,p=new Array(s);p[0]=m;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<s;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34210:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(87462),i=(r(67294),r(3905));const s={},p="nginx php-fpm \u5feb\u901f\u624b\u518c",o={unversionedId:"LinuxBasics/Web-Servers/Nginx/Nginx php-fpm",id:"LinuxBasics/Web-Servers/Nginx/Nginx php-fpm",title:"nginx php-fpm \u5feb\u901f\u624b\u518c",description:"",source:"@site/docs/LinuxBasics/Web-Servers/Nginx/Nginx php-fpm.md",sourceDirName:"LinuxBasics/Web-Servers/Nginx",slug:"/LinuxBasics/Web-Servers/Nginx/Nginx php-fpm",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx php-fpm",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/Web-Servers/Nginx/Nginx php-fpm.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Nginx Rewrite \u5730\u5740\u91cd\u5199",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx Rewrite"},next:{title:"nginx try_files",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Nginx try_files"}},a={},c=[],l={toc:c};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nginx-php-fpm-\u5feb\u901f\u624b\u518c"},"nginx php-fpm \u5feb\u901f\u624b\u518c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt update -y\n\napt install nginx php-fpm -y\n\n# \u6dfb\u52a0\u7528\u6237\u548c\u7528\u6237\u7ec4\nsudo groupadd php_user\nsudo useradd -g php_user php_user\n\n\n$ cat /etc/php/8.2/fpm/pool.d/dnsmasq.conf\n[dnsmasq_gui]\nuser = php_user\ngroup = php_user\nlisten = /var/run/php-fpm-dnsmasq.sock\nlisten.owner = root\nlisten.group = root\nphp_admin_value[disable_functions] = exec,passthru,shell_exec,system\nphp_admin_flag[allow_url_fopen] = off\n; Choose how the process manager will control the number of child processes. \npm = dynamic \npm.max_children = 75 \npm.start_servers = 10 \npm.min_spare_servers = 5 \npm.max_spare_servers = 20 \npm.process_idle_timeout = 10s\n\n# \u6ce8\u610f\u4e0a\u9762\u7684listen.owner\u548cgroup\u662fnginx\u8fd0\u884c\u7684\u7528\u6237\u540d\u548c\u7528\u6237\u7ec4\n\nnginx config:\n\nserver {\n         listen       80;\n         server_name  _;\n         root         /var/www/html/dnsmasq;\n\n         access_log /var/log/nginx/dnsmasq-access.log;\n         error_log  /var/log/nginx/dnsmasq-error.log error;\n         index index.html index.htm index.php;\n\n         location / {\n                      try_files $uri $uri/ /index.php$is_args$args;\n         }\n\n         location ~ \\.php$ {\n            fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n            fastcgi_pass unix:/var/run/php-fpm-dnsmasq.sock;\n            fastcgi_index index.php;\n            include fastcgi.conf;\n    }\n}\n\n")))}u.isMDXComponent=!0}}]);