"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5967],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),b=r,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41501:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={},l=void 0,o={unversionedId:"LinuxBasics/Fail2ban \u7b80\u5355\u4f7f\u7528",id:"LinuxBasics/Fail2ban \u7b80\u5355\u4f7f\u7528",title:"Fail2ban \u7b80\u5355\u4f7f\u7528",description:"Fail2ban\u662f\u4e00\u6b3e\u7528\u4f86\u963b\u64cb\u4f7f\u7528\u66b4\u529b\u7834\u89e3\u6cd5\u767b\u5165\u4f3a\u670d\u5668\u7684\u5de5\u5177\uff0c\u6700\u5e38\u88ab\u61c9\u7528\u5728SSH\u4f3a\u670d\u5668\u4e0a\u3002\u5b83\u6703\u53bb\u6aa2\u67e5\u4f3a\u670d\u5668\u7684\u65e5\u8a8c(Log)\uff0c\u4e26\u5c07\u767b\u5165\u5931\u6557\u7684IP\u4f4d\u5740\u8a18\u9304\u4e0b\u4f86\uff0c\u5982\u679c\u8a72IP\u5728\u4e00\u6bb5\u6642\u9593\u5167\u932f\u4e86\u8d85\u904e\u898f\u5b9a\u7684\u6b21\u6578\uff0c\u5c31\u6703\u81ea\u52d5\u6dfb\u52a0\u898f\u5247\u81f3\u9632\u706b\u7246\u4e2d\uff0c\u963b\u64cb\u8a72IP\u4e00\u6bb5\u6642\u9593\u7684\u9023\u5165\u3002",source:"@site/docs/LinuxBasics/Fail2ban \u7b80\u5355\u4f7f\u7528.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/Fail2ban \u7b80\u5355\u4f7f\u7528",permalink:"/docs/LinuxBasics/Fail2ban \u7b80\u5355\u4f7f\u7528",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Fail2ban \u7b80\u5355\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"CertBot Nginx SSL",permalink:"/docs/LinuxBasics/CertBot Nginx SSL"},next:{title:"firewalld iptables\u5feb\u901f\u624b\u518c",permalink:"/docs/LinuxBasics/Firewalld IPtables\u5feb\u901f\u624b\u518c"}},s={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fail2ban\u662f\u4e00\u6b3e\u7528\u4f86\u963b\u64cb\u4f7f\u7528\u66b4\u529b\u7834\u89e3\u6cd5\u767b\u5165\u4f3a\u670d\u5668\u7684\u5de5\u5177\uff0c\u6700\u5e38\u88ab\u61c9\u7528\u5728SSH\u4f3a\u670d\u5668\u4e0a\u3002\u5b83\u6703\u53bb\u6aa2\u67e5\u4f3a\u670d\u5668\u7684\u65e5\u8a8c(Log)\uff0c\u4e26\u5c07\u767b\u5165\u5931\u6557\u7684IP\u4f4d\u5740\u8a18\u9304\u4e0b\u4f86\uff0c\u5982\u679c\u8a72IP\u5728\u4e00\u6bb5\u6642\u9593\u5167\u932f\u4e86\u8d85\u904e\u898f\u5b9a\u7684\u6b21\u6578\uff0c\u5c31\u6703\u81ea\u52d5\u6dfb\u52a0\u898f\u5247\u81f3\u9632\u706b\u7246\u4e2d\uff0c\u963b\u64cb\u8a72IP\u4e00\u6bb5\u6642\u9593\u7684\u9023\u5165\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# debain\u7cfb\napt install fail2ban\n# REHL\u7cfb\ndnf install fail2ban\n\nsudo systemctl enable --now fail2ban\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u914d\u7f6essh\u8fdc\u7a0b\u767b\u5f55\u6b21\u6570\uff08/etc/fail2ban/jail.d/sshd.local\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[sshd]\nenabled = true\n \nbantime = 10m\nbantime.increment = true\nbantime.maxtime = 1d\n \nfindtime = 10m\n \nmaxretry = 5\n")),(0,r.kt)("p",null,"\u91cd\u8f7d\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fail2ban-client reload\nsudo fail2ban-client status\nsudo fail2ban-client status sshd\nsudo fail2ban-client set sshd unbanip 192.168.56.1\n# \u67e5\u770b\u6240\u6709\u88abban\u7684IP\nsudo fail2ban-client banned\n# \u89e3\u5c01\u6240\u6709\u88abban\u7684IP\nsudo fail2ban-client unban --all\n\n")))}p.isMDXComponent=!0}}]);