"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const p={},o="LAMP\u5feb\u901f\u90e8\u7f72",c={unversionedId:"LinuxBasics/Web-Servers/Apache/LAMP \u5feb\u901f\u90e8\u7f72",id:"LinuxBasics/Web-Servers/Apache/LAMP \u5feb\u901f\u90e8\u7f72",title:"LAMP\u5feb\u901f\u90e8\u7f72",description:"Ubuntu 18\u7248\u672c",source:"@site/docs/LinuxBasics/Web-Servers/Apache/LAMP \u5feb\u901f\u90e8\u7f72.md",sourceDirName:"LinuxBasics/Web-Servers/Apache",slug:"/LinuxBasics/Web-Servers/Apache/LAMP \u5feb\u901f\u90e8\u7f72",permalink:"/docs/LinuxBasics/Web-Servers/Apache/LAMP \u5feb\u901f\u90e8\u7f72",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Web-Servers/Apache/LAMP \u5feb\u901f\u90e8\u7f72.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Apache",permalink:"/docs/category/apache"},next:{title:"Jvm-Tomcat",permalink:"/docs/category/jvm-tomcat"}},s={},i=[{value:"Ubuntu 18\u7248\u672c",id:"ubuntu-18\u7248\u672c",level:2}],l={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lamp\u5feb\u901f\u90e8\u7f72"},"LAMP\u5feb\u901f\u90e8\u7f72"),(0,a.kt)("h2",{id:"ubuntu-18\u7248\u672c"},"Ubuntu 18\u7248\u672c"),(0,a.kt)("p",null,"\u5feb\u901f\u90e8\u7f72\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5php7.2-fpm\nsudo apt -y install software-properties-common apt-transport-https lsb-release ca-certificates\nsudo add-apt-repository ppa:ondrej/php  \nsudo apt-get update\nsudo apt install php7.2-fpm php7.2-mysql php7.2-curl php7.2-gd php7.2-mbstring php7.2-xml php7.2-xmlrpc php7.2-zip php7.2-opcache -y\nsed -i 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/' /etc/php/7.2/fpm/php.ini \nsystemctl restart php7.2-fpm\n# \u5b89\u88c5apache2\nsudo apt-get install apache2\n# \u5b89\u88c5Apache2\u6a21\u5757\uff0c\u4f7f\u5176\u652f\u6301php\nsudo apt-get install libapache2-mod-php7.2\n# \u5b89\u88c5MySQL\nsudo apt-get install mysql-server\n")),(0,a.kt)("p",null,"\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"mod_rewrite"),"\u6a21\u5757\uff0c\u89e3\u51b3\u9664\u4e86index.php\u5176\u4ed6\u9875\u9762404\u7684\u95ee\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo a2enmod rewrite\n\n# \u4fee\u6539\u914d\u7f6e\u6587\u4ef6/etc/apache2/apache2.conf\n<Directory /var/www/>\n        Options Indexes FollowSymLinks\n        # \u4e3b\u8981\u662f\u4e0b\u9762\u8fd9\u884c\uff0c\u6539\u4e3aall\n        AllowOverride all\n        Require all granted\n</Directory>\n# \u6700\u540e\u91cd\u542fApache2\u670d\u52a1\u5373\u53ef.\nsytemctl restart apache2\n")))}u.isMDXComponent=!0}}]);