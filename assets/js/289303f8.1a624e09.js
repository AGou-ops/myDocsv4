"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[4064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),o=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=o(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),u=a,T=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?l.createElement(T,r(r({ref:t},c),{},{components:n})):l.createElement(T,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var o=2;o<i;o++)r[o]=n[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var l=n(87462),a=(n(67294),n(3905));const i={},r="firewalld iptables\u5feb\u901f\u624b\u518c",p={unversionedId:"LinuxBasics/Firewalld IPtables\u5feb\u901f\u624b\u518c",id:"LinuxBasics/Firewalld IPtables\u5feb\u901f\u624b\u518c",title:"firewalld iptables\u5feb\u901f\u624b\u518c",description:"Netfilter \u673a\u5236",source:"@site/docs/LinuxBasics/Firewalld IPtables\u5feb\u901f\u624b\u518c.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/Firewalld IPtables\u5feb\u901f\u624b\u518c",permalink:"/docs/LinuxBasics/Firewalld IPtables\u5feb\u901f\u624b\u518c",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Firewalld IPtables\u5feb\u901f\u624b\u518c.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"CertBot Nginx SSL",permalink:"/docs/LinuxBasics/CertBot Nginx SSL"},next:{title:"JumpServer",permalink:"/docs/LinuxBasics/JumpServer"}},s={},o=[{value:"Netfilter \u673a\u5236",id:"netfilter-\u673a\u5236",level:2},{value:"iptables",id:"iptables",level:2},{value:"\u4e94\u94fe\uff1a",id:"\u4e94\u94fe",level:3},{value:"\u56db\u8868",id:"\u56db\u8868",level:3},{value:"\u8868\u94fe\u5173\u7cfb",id:"\u8868\u94fe\u5173\u7cfb",level:3},{value:"\u76f8\u5173\u547d\u4ee4\uff08CRUD\uff09",id:"\u76f8\u5173\u547d\u4ee4crud",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"firewalld",id:"firewalld",level:2},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:3},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6-1",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"firewalld-iptables\u5feb\u901f\u624b\u518c"},"firewalld iptables\u5feb\u901f\u624b\u518c"),(0,a.kt)("h2",{id:"netfilter-\u673a\u5236"},"Netfilter \u673a\u5236"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHlnZw==,size_16,color_FFFFFF,t_70.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u62a5\u6587\u6d41\u5411\uff1a\n\n     \u6d41\u5165\u672c\u673a\uff1aPREROUTING --\x3e INPUT--\x3e\u7528\u6237\u7a7a\u95f4\u8fdb\u7a0b\n\n     \u6d41\u51fa\u672c\u673a\uff1a\u7528\u6237\u7a7a\u95f4\u8fdb\u7a0b--\x3eOUTPUT--\x3e POSTROUTING\n\n     \u8f6c\u53d1\uff1aPREROUTING --\x3e FORWARD --\x3e POSTROUTING\n     \n\u5185\u6838\u4e2d\u6570\u636e\u5305\u7684\u4f20\u8f93\u8fc7\u7a0b\uff1a\n\n   (1)\u5f53\u4e00\u4e2a\u6570\u636e\u5305\u8fdb\u5165\u7f51\u5361\u65f6\uff0c\u6570\u636e\u5305\u9996\u5148\u8fdb\u5165PREROUTING\u94fe\uff0c\u5185\u6838\u6839\u636e\u6570\u636e\u5305\u76ee\u7684IP\u5224\u65ad\u662f\u5426\u9700\u8981\u8f6c\u9001\u51fa\u53bb\n   \n   (2)\u5982\u679c\u6570\u636e\u5305\u5c31\u662f\u8fdb\u5165\u672c\u673a\u7684\uff0c\u6570\u636e\u5305\u5c31\u4f1a\u5230\u8fbeINPUT\u94fe\u3002\u7ecfINPUT\u94fe\u68c0\u67e5\u540e\uff0c\u6570\u636e\u5305\u88ab\u53d1\u5f80\u672c\u5730\u8fdb\u7a0b\u3002\n      \u672c\u5730\u8fdb\u7a0b\u8fdb\u884c\u76f8\u5e94\u5904\u7406\u540e\u53d1\u9001\u54cd\u5e94\u6570\u636e\u5305\uff0c\u6570\u636e\u5305\u7ecf\u8fc7OUTPUT\u94fe\uff0c\u7136\u540e\u5230\u8fbePOSTROUTING\u94fe\u8f93\u51fa\uff1b\n      \u5982\u679c\u6570\u636e\u5305\u662f\u8981\u8f6c\u53d1\u51fa\u53bb\u7684\uff0c\u4e14\u5185\u6838\u5141\u8bb8\u8f6c\u53d1\uff0c\u6570\u636e\u5305\u5c31\u4f1a\u5411\u53f3\u79fb\u52a8\uff0c\u7ecf\u8fc7FORWARD\u94fe\uff0c\u7136\u540e\u5230\u8fbePOSTROUTING\u94fe\u8f93\u51fa\u3002\n")),(0,a.kt)("h2",{id:"iptables"},"iptables"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/ac586d71025972c3c200ca6bc96917c5.png",alt:"iptables dataflo"})),(0,a.kt)("h3",{id:"\u4e94\u94fe"},"\u4e94\u94fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"INPUT\u94fe\uff1a\u5f53\u63a5\u6536\u5230\u9632\u706b\u5899\u672c\u673a\u5730\u5740\u7684\u6570\u636e\u5305(\u5165\u7ad9)\u65f6\uff0c\u5e94\u7528\u6b64\u94fe\u4e2d\u7684\u89c4\u5219\uff1b\nOUTPUT\u94fe\uff1a\u5f53\u9632\u706b\u5899\u672c\u673a\u5411\u5916\u53d1\u9001\u6570\u636e\u5305(\u51fa\u7ad9)\u65f6\uff0c\u5e94\u7528\u6b64\u94fe\u4e2d\u7684\u89c4\u5219\uff1b\nFORWARD\u94fe\uff1a\u5f53\u63a5\u6536\u5230\u9700\u8981\u901a\u8fc7\u9632\u706b\u5899\u53d1\u9001\u7ed9\u5176\u4ed6\u5730\u5740\u7684\u6570\u636e\u5305(\u8f6c\u53d1)\u65f6\uff0c\u5e94\u7528\u6b64\u94fe\u4e2d\u7684\u89c4\u5219\uff1b\nPREROUTING\u94fe\uff1a\u5728\u5bf9\u6570\u636e\u5305\u4f5c\u8def\u7531\u9009\u62e9\u4e4b\u524d\uff0c\u5e94\u7528\u6b64\u94fe\u4e2d\u7684\u89c4\u5219\uff0c\u5982DNAT\uff1b\nPOSTROUTING\u94fe\uff1a\u5728\u5bf9\u6570\u636e\u5305\u4f5c\u8def\u7531\u9009\u62e9\u4e4b\u540e\uff0c\u5e94\u7528\u6b64\u94fe\u4e2d\u7684\u89c4\u5219\uff0c\u5982SNAT\u3002\n")),(0,a.kt)("h3",{id:"\u56db\u8868"},"\u56db\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u2013 filter\u8868\uff1a\u4e3b\u8981\u7528\u4e8e\u5bf9\u6570\u636e\u5305\u8fdb\u884c\u8fc7\u6ee4\uff0c\u6839\u636e\u5177\u4f53\u7684\u89c4\u5219\u51b3\u5b9a\u662f\u5426\u653e\u884c\u8be5\u6570\u636e\u5305(\u5982DROP\u3001ACCEPT\u3001REJECT;\u3001LOG[`\u8bb0\u5f55\u65e5\u5fd7\u4fe1\u606f\uff1f`])\uff0c\u6240\u8c13\u7684\u9632\u706b\u5899\u5176\u5b9e\u57fa\u672c\u4e0a\u662f\u6307\u8fd9\u5f20\u8868\u4e0a\u7684\u8fc7\u6ee4\u89c4\u5219\uff0c\u5bf9\u5e94\u5185\u6838\u6a21\u5757iptables_filter\uff1b\n\u2013 nat\u8868\uff1anetwork address translation\uff0c\u7f51\u7edc\u5730\u5740\u8f6c\u6362\u529f\u80fd\uff0c\u4e3b\u8981\u7528\u4e8e\u4fee\u6539\u6570\u636e\u5305\u7684IP\u5730\u5740\u3001\u7aef\u53e3\u53f7\u7b49\u4fe1\u606f(\u7f51\u7edc\u5730\u5740\u8f6c\u6362\uff0c\u5982SNAT\u3001DNAT\u3001MASQUERADE[`SNAT\u7684\u4e00\u79cd\u7279\u6b8a\u5f62\u5f0f\uff0c\u9002\u7528\u4e8e\u52a8\u6001\u7684\u3001\u4e34\u65f6\u4f1a\u53d8\u5f97IP\u4e0a`]\u3001REDIRECT[`\u5728\u672c\u673a\u505a\u7aef\u53e3\u6620\u5c04`])\u3002\u5c5e\u4e8e\u4e00\u4e2a\u6d41\u7684\u5305(\u56e0\u4e3a\u5305\u7684\u5927\u5c0f\u9650\u5236\u5bfc\u81f4\u6570\u636e\u53ef\u80fd\u4f1a\u88ab\u5206\u6210\u591a\u4e2a\u6570\u636e\u5305)\u53ea\u4f1a\u7ecf\u8fc7\u8fd9\u4e2a\u8868\u4e00\u6b21\uff0c\u5982\u679c\u7b2c\u4e00\u4e2a\u5305\u88ab\u5141\u8bb8\u505aNAT\u6216Masqueraded\uff0c\u90a3\u4e48\u4f59\u4e0b\u7684\u5305\u90fd\u4f1a\u81ea\u52a8\u5730\u88ab\u505a\u76f8\u540c\u7684\u64cd\u4f5c\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f59\u4e0b\u7684\u5305\u4e0d\u4f1a\u518d\u901a\u8fc7\u8fd9\u4e2a\u8868\u3002\u5bf9\u5e94\u5185\u6838\u6a21\u5757iptables_nat\uff1b\n\u2013 mangle\u8868\uff1a\u62c6\u89e3\u62a5\u6587\uff0c\u505a\u51fa\u4fee\u6539\uff0c\u5e76\u91cd\u65b0\u5c01\u88c5\uff0c\u4e3b\u8981\u7528\u4e8e\u4fee\u6539\u6570\u636e\u5305\u7684TOS(Type Of Service\uff0c\u670d\u52a1\u7c7b\u578b)\u3001TTL(Time To Live\uff0c\u751f\u5b58\u5468\u671f)\u6307\u4ee5\u53ca\u4e3a\u6570\u636e\u5305\u8bbe\u7f6eMark\u6807\u8bb0\uff0c\u4ee5\u5b9e\u73b0Qos(Quality Of Service\uff0c\u670d\u52a1\u8d28\u91cf)\u8c03\u6574\u4ee5\u53ca\u7b56\u7565\u8def\u7531\u7b49\u5e94\u7528\uff0c\u7531\u4e8e\u9700\u8981\u76f8\u5e94\u7684\u8def\u7531\u8bbe\u5907\u652f\u6301\uff0c\u56e0\u6b64\u5e94\u7528\u5e76\u4e0d\u5e7f\u6cdb\u3002\u5bf9\u5e94\u5185\u6838\u6a21\u5757iptables_mangle\uff1b\n\u2013 raw\u8868\uff1a\u662f\u81ea1.2.9\u4ee5\u540e\u7248\u672c\u7684iptables\u65b0\u589e\u7684\u8868\uff0c\u4e3b\u8981\u7528\u4e8e\u51b3\u5b9a\u6570\u636e\u5305\u662f\u5426\u88ab\u72b6\u6001\u8ddf\u8e2a\u673a\u5236\u5904\u7406\uff0c\u5728\u5339\u914d\u6570\u636e\u5305\u65f6\uff0craw\u8868\u7684\u89c4\u5219\u8981\u4f18\u5148\u4e8e\u5176\u4ed6\u8868\uff0c\u5bf9\u5e94\u5185\u6838\u6a21\u5757iptables_raw\u3002\n")),(0,a.kt)("h3",{id:"\u8868\u94fe\u5173\u7cfb"},"\u8868\u94fe\u5173\u7cfb"),(0,a.kt)("p",null,"\u5e76\u975e\u6240\u6709\u7684\u94fe\u90fd\u53ef\u4ee5\u5e94\u7528\u6240\u6709\u7684\u8868\uff0c\u4ee5\u4e0b\u662f\u4ed6\u4eec\u7684\u5bf9\u5e94\u5173\u7cfb\uff08\u4e0a\u4e0b\u987a\u5e8f\u4e3a\u8868\u7684\u4f18\u5148\u7ea7\uff09\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/55afd069e4f1ba01d87cee0b9322c6c7.png",alt:"hook point chain - table"})),(0,a.kt)("p",null,"\u7b80\u5355\u8bb0\u4f4f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"filter"),"\u8868\u53ef\u4ee5\u7ba1\u7406",(0,a.kt)("inlineCode",{parentName:"p"},"INPUT/FORWARD/OUTPUT"),"\u94fe\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"nat"),"\u8868\u53ef\u4ee5\u7ba1\u7406",(0,a.kt)("inlineCode",{parentName:"p"},"PREROUTING/INPUT/OUTPUT/POSTROUTING"),"\u94fe\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"mangle"),"\u8868\u53ef\u4ee5\u7ba1\u7406\u6240\u6709\u94fe\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"raw"),"\u8868\u53ef\u4ee5\u7ba1\u7406",(0,a.kt)("inlineCode",{parentName:"p"},"PREROUTING/OUTPUT"),"\u94fe\uff0c\u8fd9\u4e24\u4e2a\u8868\u5176\u5b9e\u5f88\u5c11\u7528\u5230."),(0,a.kt)("h3",{id:"\u76f8\u5173\u547d\u4ee4crud"},"\u76f8\u5173\u547d\u4ee4\uff08CRUD\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6307\u5b9a\u94fe\u4e0a\u7684\u89c4\u5219\u4fe1\u606f\uff0c\u4e0d\u6307\u5b9a\u94fe\u5219\u67e5\u8be2\u5168\u90e8\niptables -L INPUT\n# -t\u6307\u5b9a\u8868\u540d\uff0c\u9ed8\u8ba4\u4e0d\u5199\u5c31\u662ffilter\u8868\uff0c\niptables -t nat -L\n# \u5e38\u7528\u7ec4\u5408\niptables -vnL --line-numbers\n\n# \u589e\u52a0\u89c4\u5219\uff0c-A\u540e\u9762\u6dfb\u52a0\u89c4\u5219\uff0c-I\u5728\u524d\u9762\u6dfb\u52a0\u89c4\u5219\niptables -t filter -I INPUT -s 10.37.129.2 -j DROP\n# * \u53c2\u6570\uff1a\n# * -s \u6e90ip\uff0csource\n# * -j \u8df3\u8f6cjump\uff0c\u540e\u9762\u53ef\u4ee5\u63a5`target`\u6216\u8005`action`\n\n# \u5220\u9664INPUT\u94fefilter\u8868\u7684\u7b2c\u4e8c\u6761\u89c4\u5219\niptables -t filter -D INPUT 2\n# \u6839\u636e\u6761\u4ef6\u8fdb\u884c\u5220\u9664\niptables -t filter -D INPUT -s 10.37.129.2 -j DROP\n\n# \u6e05\u7a7a\u67d0\u94fe\u67d0\u8868\u4e0b\u7684\u6240\u6709\u89c4\u5219\niptables -t filter -F INPUT\n# \u4e0d\u6307\u5b9a\u8868\u548c\u94fe\u5219\u6e05\u7a7a\u6240\u6709\niptables -F\n\n# \u66ff\u6362\uff08\u4fee\u6539\uff09\u89c4\u5219\niptables -t filter -R INPUT 1 -s 10.37.129.3 -j ACCEPT\n# \u53c2\u6570\uff1a -R replace \u66ff\u6362\u89c4\u5219\n\n# \u9ed8\u8ba4\u89c4\u5219\u4f5c\u7528\u4e8e\u6574\u4e2a\u94fe\uff0c\u4e0d\u9488\u5bf9\u67d0\u4e2a\u8868\n# \u4fee\u6539\u7b56\u7565\uff0c\u5c06FORWARD\u94fe\u7684\u9ed8\u8ba4\u89c4\u5219\u8bbe\u7f6e\u4e3aDROP\niptables -P FORWARD DROP\n\n# \u4fdd\u5b58\u89c4\u5219\uff0c\u5bf9\u4e8eCentOS7\uff0c\u9700\u8981yum install -y iptables-services\nservices iptables save\n")),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# -d\uff1adestination\uff0c\u7528\u4e8e\u5339\u914d\u62a5\u6587\u7684\u76ee\u6807\u5730\u5740\uff0c\u53ef\u4ee5\u540c\u65f6\u6307\u5b9a\u591a\u4e2aip(\u9017\u53f7\u9694\u5f00\uff0c\u9017\u53f7\u4e24\u4fa7\u90fd\u4e0d\u5141\u8bb8\u6709\u7a7a\u683c)\uff0c\u4e5f\u53ef\u6307\u5b9aip\u6bb5\uff1a\niptables\xa0-t\xa0filter\xa0-I\xa0OUTPUT\xa0-d\xa0192.168.1.111,192.168.1.118\xa0-j\xa0DROP\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0-d\xa0192.168.1.0/24\xa0-j\xa0ACCEPT\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0!\xa0-d\xa0192.168.1.0/24\xa0-j\xa0ACCEPT\n\n# \u5c06\u672c\u673a\u76847777\u7aef\u53e3\u8f6c\u53d1\u52306666\u7aef\u53e3\niptables -t nat -A PREROUTING -p tcp --dport 7777 -j REDIRECT --to-port 6666\n\n# \u5f00\u542f\u8f6c\u53d1\u529f\u80fd\nsysctl -w net.ipv4.ip_forward=1\n# client -> 192.168.1.168:6666 -> 192.168.1.8:7777\n# \u5c06\u672c\u673a\u76846666\u7aef\u63a5\u53e3\u8f6c\u53d1\u5230 192.168.1.8 \u4e3b\u673a\u76847777\u7aef\u53e3\niptables -t nat -A PREROUTING -p tcp --dport 6666 -j DNAT --to-destination 192.168.1.8:7777\n# \u5c06client\u7684\u5730\u5740\u8f6c\u6362\u4e3a192.168.1.168\uff0c\niptables -t nat -A POSTROUTING -p tcp -d 192.168.1.8 --dport 7777 -j SNAT --to-source 192.168.1.168\n\n# \u8bbf\u95ee\u672c\u673a\u768480\u7aef\u53e3\uff0c\u8f6c\u53d1\u52308080\u7aef\u53e3\niptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080\n# \u5c06\u672c\u673a\u8bbf\u95ee80\u7aef\u53e3\u7684\u8f6c\u53d1\u5230\u672c\u673a8080\niptables -t nat -A OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j DNAT --to 127.0.0.1:8080\niptables -t nat -A OUTPUT -p tcp -d 192.168.4.177 --dport 80 -j DNAT --to 127.0.0.1:8080\n\n# \u5c06192.168.75.3 8000\u7aef\u53e3\u5c06\u6570\u636e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u65f6\uff0c\u5c06\u6e90ip\u6539\u4e3a192.168.75.5\niptables -t nat -A POSTROUTING -d 192.168.75.3 -p tcp --dport 8000 -j SNAT --to 192.168.75.5\n\n# -p\uff1a\u7528\u4e8e\u5339\u914d\u62a5\u6587\u7684\u534f\u8bae\u7c7b\u578b,\u53ef\u4ee5\u5339\u914d\u7684\u534f\u8bae\u7c7b\u578btcp\u3001udp\u3001udplite\u3001icmp\u3001esp\u3001ah\u3001sctp\u7b49\uff08centos7\u4e2d\u8fd8\u652f\u6301icmpv6\u3001mh\uff09\uff1a\niptables -t filter -I INPUT -p tcp -s 192.168.1.146 -j ACCEPT\n# \u611f\u53f9\u53f7\u8868\u793a\u201c\u975e\u201d\uff0c\u5373\u9664\u4e86\u5339\u914d\u8fd9\u4e2a\u6761\u4ef6\u7684\u90fdACCEPT\uff0c\u4f46\u5339\u914d\u8fd9\u4e2a\u6761\u4ef6\u4e0d\u4e00\u5b9a\u5c31\u662fREJECT\u6216DROP\uff1f\u8fd9\u8981\u770b\u662f\u5426\u6709\u4e3a\u5b83\u7279\u522b\u5199\u4e00\u6761\u89c4\u5219\uff0c\u5982\u679c\u6ca1\u6709\u5199\u5c31\u4f1a\u7528\u9ed8\u8ba4\u7b56\u7565\uff1a\niptables -t filter -I INPUT ! -p udp -s 192.168.1.146 -j ACCEPT\n\n# -i\uff1a\u7528\u4e8e\u5339\u914d\u62a5\u6587\u662f\u4ece\u54ea\u4e2a\u7f51\u5361\u63a5\u53e3\u6d41\u5165\u672c\u673a\u7684\uff0c\u7531\u4e8e\u5339\u914d\u6761\u4ef6\u53ea\u662f\u7528\u4e8e\u5339\u914d\u62a5\u6587\u6d41\u5165\u7684\u7f51\u5361\uff0c\u6240\u4ee5\u5728OUTPUT\u94fe\u4e0ePOSTROUTING\u94fe\u4e2d\u4e0d\u80fd\u4f7f\u7528\u6b64\u9009\u9879\uff1a\niptables -t filter -I INPUT -p icmp -i eth0 -j DROP\niptables -t filter -I INPUT -p icmp ! -i eth0 -j DROP\n\n# -o\uff1a\u7528\u4e8e\u5339\u914d\u62a5\u6587\u5c06\u8981\u4ece\u54ea\u4e2a\u7f51\u5361\u63a5\u53e3\u6d41\u51fa\u672c\u673a\uff0c\u4e8e\u5339\u914d\u6761\u4ef6\u53ea\u662f\u7528\u4e8e\u5339\u914d\u62a5\u6587\u6d41\u51fa\u7684\u7f51\u5361\uff0c\u6240\u4ee5\u5728INPUT\u94fe\u4e0ePREROUTING\u94fe\u4e2d\u4e0d\u80fd\u4f7f\u7528\u6b64\u9009\u9879\niptables\xa0-t\xa0filter\xa0-I\xa0OUTPUT\xa0-p\xa0icmp\xa0-o\xa0eth0\xa0-j\xa0DROP\niptables\xa0-t\xa0filter\xa0-I\xa0OUTPUT\xa0-p\xa0icmp\xa0!\xa0-o\xa0eth0\xa0-j\xa0DROP\n\n# iptables\u6269\u5c55\u6a21\u5757\n# TCP\u3001UDP\u6a21\u5757\niptables\xa0-t\xa0filter\xa0-I\xa0OUTPUT\xa0-d\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0tcp\xa0--sport\xa022\xa0-j\xa0REJECT\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0-s\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0tcp\xa0--dport\xa022:25\xa0-j\xa0REJECT\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0-s\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0tcp\xa0--dport\xa0:22\xa0-j\xa0REJECT\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0-s\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0tcp\xa0--dport\xa080:\xa0-j\xa0REJECT\niptables\xa0-t\xa0filter\xa0-I\xa0OUTPUT\xa0-d\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0tcp\xa0!\xa0--sport\xa022\xa0-j\xa0ACCEPT\n# multiport\u6a21\u5757\niptables\xa0-t\xa0filter\xa0-I\xa0OUTPUT\xa0-d\xa0192.168.1.146\xa0-p\xa0udp\xa0-m\xa0multiport\xa0--sports\xa0137,138\xa0-j\xa0REJECT\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0-s\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0multiport\xa0--dports\xa022,80\xa0-j\xa0REJECT\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0-s\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0multiport\xa0!\xa0--dports\xa022,80\xa0-j\xa0REJECT\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0-s\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0multiport\xa0--dports\xa080:88\xa0-j\xa0REJECT\niptables\xa0-t\xa0filter\xa0-I\xa0INPUT\xa0-s\xa0192.168.1.146\xa0-p\xa0tcp\xa0-m\xa0multiport\xa0--dports\xa022,80:88\xa0-j\xa0REJECT\n# ip-range\n# --src-range(\u5339\u914d\u6e90\u5730\u5740\u8303\u56f4)\n# --dst-range(\u5339\u914d\u76ee\u6807\u5730\u5740\u8303\u56f4)\niptables -t filter -I INPUT -m iprange --src-range 192.168.1.127-192.168.1.146 -j DROP\n# string\uff0c\u7528\u6765\u62e6\u622a\u6570\u636e\u5305\u4e2d\u7684\u67d0\u4e2a\u5b57\u7b26\u4e32\n# --algo \u6307\u5b9a\u7b97\u6cd5\u5339\u914d\u5b57\u7b26\u4e32\niptables -t filter -I INPUT -m string --algo bm --string "XXOO" -j REJECT\n# time\uff0c\u89c4\u5b9a\u67d0\u6bb5\u65f6\u95f4\u7684\u52a8\u4f5c\niptables -t filter -I INPUT -p tcp --dport 80 -m time --timestart 09:00:00 --timestop 18:00:00 -j REJECT\niptables -t filter -I INPUT -p tcp --dport 443 -m time --timestart 09:00:00 --timestop 18:00:00 -j REJECT\n# connlimit\n# \u9650\u5236ssh\u7aef\u53e3\u7684\u8fde\u63a5\u6570\u4e0d\u80fd\u8d85\u8fc7\u4e24\u4e2a\niptables -t filter -I INPUT -p tcp --dport 22 -m connlimit --connlimit-above 2 -j REJECT\n# limit\n# \u9650\u5236icmp\u7684\u6d41\u5165\u901f\u5ea6 \niptables -t filter -I INPUT -p icmp -m limit --limit 10/minite -j ACCEPT\n# icmp\u6a21\u5757\n# * icmp type\n# 0 Echo Reply\u2014\u2014\u56de\u663e\u5e94\u7b54\uff08Ping\u5e94\u7b54\uff09\n# 8 Echo request\u2014\u2014\u56de\u663e\u8bf7\u6c42\uff08Ping\u8bf7\u6c42\uff09  \n# \u7981\u6b62\u6240\u6709icmp\u5305\niptables -t filter -I INPUT -p icmp -j REJECT\n# \u53ef\u4ee5ping\u522b\u4eba\uff0c\u522b\u4ebaping\u4e0d\u4e86\u81ea\u5df1\niptables -t filter -I INPUT -p icmp --icmp-type 8/0 -j REJECT\n# state\u6a21\u5757\uff0c\u7528\u4e8e\u5904\u7406\u62a5\u6587\u72b6\u6001\niptables -t filter -I INPUT -m state --state RELATED, ESTABLISHED -j ACCEPT\n')),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u94fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u5efa\u81ea\u5b9a\u4e49\u94fe\niptables -N IN_WEB\n# \u5f15\u7528\u8df3\u8f6c\u81ea\u5b9a\u4e49\u94fe\niptables -I INPUT -p tcp --dport 80 -j IN_WEB\n# \u4fee\u6539\u81ea\u5b9a\u4e49\u94fe\u7684\u540d\u79f0\niptables -E IN_WEB WEB\n# \u5220\u9664\u81ea\u5b9a\u4e49\u94fe\niptables -X IN_WEB\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"filter"),"\u8868\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"DROP"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"REJECT"),"\u7684\u533a\u522b\uff1a\u524d\u8005\u4f1a\u76f4\u63a5\u4e22\u5f03\u6570\u636e\u5305\u5e76\u4e0d\u8fd4\u56de\u4efb\u4f55\u54cd\u5e94\uff0c\u540e\u8005\u5728\u4e22\u5f03\u6570\u636e\u5305\u7684\u540c\u65f6\u8fd4\u56de\u54cd\u5e94\u7ed9\u5ba2\u6237\u7aef.")),(0,a.kt)("p",null,"\u6bd4\u5982\u4e24\u8005\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"ping"),"\u547d\u4ee4\u4e0b\u7684\u4e0d\u540c\u8868\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# DROP\nPING 10.37.129.9 (10.37.129.9): 56 data bytes\nRequest timeout for icmp_seq 0\nRequest timeout for icmp_seq 1\nRequest timeout for icmp_seq 2\nRequest timeout for icmp_seq 3\nRequest timeout for icmp_seq 4\n\n# REJECT\nPING 10.37.129.9 (10.37.129.9): 56 data bytes\n92 bytes from centos-linux-6.5.host-only (10.37.129.9): Destination Port Unreachable\nVr HL TOS  Len   ID Flg  off TTL Pro  cks      Src      Dst\n 4  5  00 5400 29a3   0 0000  40  01 3ab1 10.37.129.2  10.37.129.9\n\nRequest timeout for icmp_seq 0\n92 bytes from centos-linux-6.5.host-only (10.37.129.9): Destination Port Unreachable\nVr HL TOS  Len   ID Flg  off TTL Pro  cks      Src      Dst\n 4  5  00 5400 999d   0 0000  40  01 cab6 10.37.129.2  10.37.129.9\n")),(0,a.kt)("h2",{id:"firewalld"},"firewalld"),(0,a.kt)("p",null,"(1). \u533a\u57df\u7ba1\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u901a\u8fc7\u5c06\u7f51\u7edc\u5212\u5206\u6210\u4e0d\u540c\u7684\u533a\u57df\uff0c\u5236\u5b9a\u51fa\u4e0d\u540c\u533a\u57df\u4e4b\u95f4\u7684\u8bbf\u95ee\u63a7\u5236\u7b56\u7565\u6765\u63a7\u5236\u4e0d\u540c\u7a0b\u5e8f\u533a\u57df\u95f4\u4f20\u9001\u7684\u6570\u636e\u6d41\u3002\n\u4f8b\u5982\uff0c\u4e92\u8054\u7f51\u662f\u4e0d\u53ef\u4fe1\u4efb\u7684\u533a\u57df\uff0c\u800c\u5185\u90e8\u7f51\u7edc\u662f\u9ad8\u5ea6\u4fe1\u4efb\u7684\u533a\u57df\u3002\u7f51\u7edc\u5b89\u5168\u6a21\u578b\u53ef\u4ee5\u5728\u5b89\u88c5\uff0c\n\u521d\u6b21\u542f\u52a8\u548c\u9996\u6b21\u5efa\u7acb\u7f51\u7edc\u8fde\u63a5\u65f6\u9009\u62e9\u521d\u59cb\u5316\u3002\u8be5\u6a21\u578b\u63cf\u8ff0\u4e86\u4e3b\u673a\u6240\u8fde\u63a5\u7684\u6574\u4e2a\u7f51\u7edc\u73af\u5883\u7684\u53ef\u4fe1\u7ea7\u522b\uff0c\u5e76\u5b9a\u4e49\u4e86\u65b0\u8fde\u63a5\u7684\u5904\u7406\u65b9\u5f0f\u3002\n")),(0,a.kt)("p",null,"(2). firewalld\u57df\n",(0,a.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHlnZw==,size_16,color_FFFFFF,t_70-20220617134856888.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u6ce8\uff1afirewalld\u7684\u9ed8\u8ba4\u533a\u57df\u662fpublic"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0a\u6765\u81ea\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/lilygg/article/details/84981537"},"https://blog.csdn.net/lilygg/article/details/84981537"))),(0,a.kt)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install firewalld firewalld-config\nfirewall-cmd --state        # \u67e5\u770b\u72b6\u6001\nsystemctl status firewalld.service      # \u670d\u52a1\u76f8\u5173\nfirewall-cmd --reload       # \u91cd\u8f7d\u9632\u706b\u5899\u914d\u7f6e\n")),(0,a.kt)("h3",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u652f\u6301\u7684\u533a\u57df\u5217\u5217\u8868\nfirewall-cmd --get-zones\n# \u5217\u51fa\u5168\u90e8\u542f\u7528\u7684\u533a\u57df\u7684\u7279\u6027\nfirewall-cmd --list-all-zones\nfirewall-cmd --get-default-zone\n\n# \u67e5\u770b\u9632\u706b\u5899\u5df2\u653e\u884c\u7aef\u53e3(\u5916\u90e8\u53ef\u901a\u8fc7\u6b64\u7aef\u53e3\u8bbf\u95ee\u670d\u52a1\u5668)\nfirewall-cmd --permanent --list-port\n# \u67e5\u770b\u5f53\u524d\u5f00\u4e86\u54ea\u4e9b\u7aef\u53e3,\u6bcf\u4e2a\u670d\u52a1\u5bf9\u5e94/usr/lib/firewalld/services\u4e0b\u9762\u4e00\u4e2axml\u6587\u4ef6\nfirewall-cmd --list-services\n# \u67e5\u770b\u8fd8\u6709\u54ea\u4e9b\u670d\u52a1\u53ef\u4ee5\u6253\u5f00\nfirewall-cmd --get-services\n# \u67e5\u770b\u7aef\u53e3\u76f8\u5173\u60c5\u51b5\nfirewall-cmd --zone=public --query-port=80/tcp\n\n# \u5220\u9664\nfirewall-cmd --zone=public --remove-port=80/tcp --permanent\n\n# \u5f00\u542f\u67d0\u7aef\u53e3(\u653e\u884c\u6b64\u7aef\u53e3) --permanent\u6807\u8bc6\u6c38\u4e45\u751f\u6548\uff0c\u6ca1\u6709\u6b64\u53c2\u6570\u91cd\u542f\u540e\u7aef\u53e3\u5931\u6548\nfirewall-cmd --zone=public --add-port=80/tcp --permanent\n# \u6279\u91cf\u653e\u884c\nfirewall-cmd --zone=public --add-port=7000-7005/udp --permanent\n# \u5173\u95ed\nfirewall-cmd --zone=public --remove-port=80/tcp --permanent\n\n# \u7aef\u53e3\u8f6c\u53d1\uff0cex: \u8f6c\u53d122\u7aef\u53e3\u5230123\u7aef\u53e3\nfirewall-cmd --zone=external --add-forward-port=22:porto=tcp:toport=123\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6-1"},"\u5176\u4ed6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," # \u542f\u7528\u5e94\u6025\u6a21\u5f0f\uff0c\u963b\u65ad\u6240\u6709\u7f51\u7edc\u8fde\u63a5\uff0c\u4ee5\u9632\u51fa\u73b0\u7d27\u6025\u72b6\u51b5\n firewall-cmd --panic-on\n firewall-cmd --panic-off\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d45\u6790Firewalld\u4e0eIptables\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/lilygg/article/details/84981537"},"https://blog.csdn.net/lilygg/article/details/84981537")),(0,a.kt)("li",{parentName:"ul"},"iptables\u8be6\u89e3\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://www.xiebruce.top/1071.html"},"https://www.xiebruce.top/1071.html"))))}m.isMDXComponent=!0}}]);