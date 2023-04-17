"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={},i="Redis \u5355\u673a\u90e8\u7f72",o={unversionedId:"LinuxBasics/DataBases/Redis/Redis Installation",id:"LinuxBasics/DataBases/Redis/Redis Installation",title:"Redis \u5355\u673a\u90e8\u7f72",description:"\u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5",source:"@site/docs/LinuxBasics/DataBases/Redis/Redis Installation.md",sourceDirName:"LinuxBasics/DataBases/Redis",slug:"/LinuxBasics/DataBases/Redis/Redis Installation",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/DataBases/Redis/Redis Installation.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Redis Codis",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Codis"},next:{title:"Resis Sentinel",permalink:"/docs/LinuxBasics/DataBases/Redis/Redis Sentinel"}},l={},c=[{value:"\u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5",id:"\u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5",level:2},{value:"\u7f16\u8bd1\u5b89\u88c5",id:"\u7f16\u8bd1\u5b89\u88c5",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"redis-\u5355\u673a\u90e8\u7f72"},"Redis \u5355\u673a\u90e8\u7f72"),(0,s.kt)("h2",{id:"\u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5"},"\u901a\u8fc7\u4ed3\u5e93\u5b89\u88c5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ yum install redis-server\n#  ubuntu debian\n$ apt install redis-server\n")),(0,s.kt)("h2",{id:"\u7f16\u8bd1\u5b89\u88c5"},"\u7f16\u8bd1\u5b89\u88c5"),(0,s.kt)("p",null,"\u5b89\u88c5\u96c6\u7fa4\u63d2\u4ef6\uff08\u65b0\u7248\u672c6.0\u4f3c\u4e4e\u5df2\u7ecf\u5185\u7f6e\uff09\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# EPEL\u6e90\u5b89\u88c5ruby\u652f\u6301\n$ yum install ruby rubygems -y\n\n# \u67e5\u770bgem\u6e90\n$ gem sources -l\n*** CURRENT SOURCES ***\n\nhttp://rubygems.org/\n# \u6dfb\u52a0\u963f\u91cc\u4e91\u7684gem\u6e90\n$ gem sources -a http://mirrors.aliyun.com/rubygems/\nhttp://mirrors.aliyun.com/rubygems/ added to sources \n# \u5220\u9664\u56fd\u5916gem\u6e90\n$ gem sources  --remove https://rubygems.org/\nhttp://rubygems.org/ removed from sources\n# \u518d\u6b21\u67e5\u770bgem\u6e90\n$ gem sources -l\n# \u4f7f\u7528gem\u5b89\u88c5redis\u7684ruby\u63d2\u4ef6\n$ gem install redis -v 3.3.3\nSuccessfully installed redis-3.3.3\n1 gem installed\nInstalling ri documentation for redis-3.3.3...\nInstalling RDoc documentation for redis-3.3.3...\n")),(0,s.kt)("p",null,"\u7f16\u8bd1\u5b89\u88c5\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e0b\u8f7d\n$ wget http://download.redis.io/releases/redis-3.2.12.tar.gz\n# \u89e3\u538b\n$ tar xf redis-3.2.12.tar.gz\n# \u79fb\u52a8\u5230\u6307\u5b9a\u76ee\u5f55\n$ mv redis-3.2.12 /application/\n# \u505a\u8f6f\u94fe\u63a5\n$ ln -s /application/redis-3.2.12 /application/redis\n# \u8fdb\u5165redis\u76ee\u5f55\n$ cd /application/redis\n# \u7f16\u8bd1\n$ make\n# \u6dfb\u52a0\u73af\u5883\u53d8\u91cf\n$ vim /etc/profile.d/redis.sh\nexport PATH="/application/redis/src:$PATH"\n')))}d.isMDXComponent=!0}}]);