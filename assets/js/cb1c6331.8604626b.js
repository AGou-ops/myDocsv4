"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[3698],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),i=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=i(t),u=n,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return t?r.createElement(m,s(s({ref:a},c),{},{components:t})):r.createElement(m,s({ref:a},c))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=h;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},51134:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=t(87462),n=(t(67294),t(3905));const o={},s="Ceph Manager Dashboar",p={unversionedId:"LinuxBasics/FileSystem/Ceph/Ceph Manager Dashboard",id:"LinuxBasics/FileSystem/Ceph/Ceph Manager Dashboard",title:"Ceph Manager Dashboar",description:"Ceph Manager Dashboard \u7b80\u4ecb",source:"@site/docs/LinuxBasics/FileSystem/Ceph/Ceph Manager Dashboard.md",sourceDirName:"LinuxBasics/FileSystem/Ceph",slug:"/LinuxBasics/FileSystem/Ceph/Ceph Manager Dashboard",permalink:"/docs/LinuxBasics/FileSystem/Ceph/Ceph Manager Dashboard",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/FileSystem/Ceph/Ceph Manager Dashboard.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Ceph Cluster \u79fb\u9664",permalink:"/docs/LinuxBasics/FileSystem/Ceph/Ceph Cluster \u79fb\u9664"},next:{title:"Ceph RGW",permalink:"/docs/LinuxBasics/FileSystem/Ceph/Ceph RGW"}},l={},i=[{value:"Ceph Manager Dashboard \u7b80\u4ecb",id:"ceph-manager-dashboard-\u7b80\u4ecb",level:2},{value:"<code>Dashboard</code>\u5b89\u88c5",id:"dashboard\u5b89\u88c5",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:i};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ceph-manager-dashboar"},"Ceph Manager Dashboar"),(0,n.kt)("h2",{id:"ceph-manager-dashboard-\u7b80\u4ecb"},"Ceph Manager Dashboard \u7b80\u4ecb"),(0,n.kt)("p",null,"Ceph\u4eea\u8868\u677f\u662f\u57fa\u4e8eWeb\u7684\u5185\u7f6eCeph\u7ba1\u7406\u548c\u76d1\u89c6\u5e94\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u7ba1\u7406\u96c6\u7fa4\u7684\u5404\u4e2a\u65b9\u9762\u548c\u5bf9\u8c61\u3002\u5b83\u4f5c\u4e3aCeph Manager\u5b88\u62a4\u7a0b\u5e8f\u6a21\u5757\u5b9e\u73b0\u3002"),(0,n.kt)("p",null,"Ceph ",(0,n.kt)("inlineCode",{parentName:"p"},"luminous")," \u7248\u672c\u968f\u9644\u7684\u539f\u59cbCeph\u4eea\u8868\u677f\u6700\u521d\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u53ea\u8bfb\u89c6\u56fe\uff0c\u53ef\u67e5\u770bCeph\u96c6\u7fa4\u7684\u5404\u79cd\u8fd0\u884c\u65f6\u4fe1\u606f\u548c\u6027\u80fd\u6570\u636e\u3002 \u5b83\u4f7f\u7528\u4e86\u975e\u5e38\u7b80\u5355\u7684\u67b6\u6784\u6765\u5b9e\u73b0\u6700\u521d\u7684\u76ee\u6807\u3002 \u4f46\u662f\uff0c\u5bf9\u4e8e\u6dfb\u52a0\u66f4\u591a\u57fa\u4e8eWeb\u7684\u7ba1\u7406\u529f\u80fd\u7684\u9700\u6c42\u4e0d\u65ad\u589e\u957f\uff0c\u4ee5\u4f7f\u66f4\u559c\u6b22\u4f7f\u7528WebUI\u800c\u4e0d\u662f\u4f7f\u7528\u547d\u4ee4\u884c\u7684\u7528\u6237\u66f4\u6613\u4e8e\u7ba1\u7406Ceph\u3002\u65b0\u7684Ceph\u4eea\u8868\u677f\u6a21\u5757\u66ff\u4ee3\u4e86\u4e4b\u524d\u7684\u6a21\u5757\uff0c\u5e76\u5411Ceph Manager\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684\u57fa\u4e8eWeb\u7684\u76d1\u89c6\u548c\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u3002 \u8fd9\u4e2a\u65b0\u63d2\u4ef6\u7684\u67b6\u6784\u548c\u529f\u80fd\u6e90\u81eaopenATTIC Ceph\u7ba1\u7406\u548c\u76d1\u89c6\u5de5\u5177\uff0c\u5e76\u53d7\u5176\u542f\u53d1\u3002 SUSE openATTIC\u80cc\u540e\u7684\u56e2\u961f\u79ef\u6781\u63a8\u52a8\u5f00\u53d1\uff0c\u5e76\u83b7\u5f97\u4e86Red Hat\u7b49\u516c\u53f8\u548cCeph\u793e\u533a\u5176\u4ed6\u6210\u5458\u7684\u5927\u529b\u652f\u6301\u3002"),(0,n.kt)("p",null,"\u4eea\u8868\u677f\u6a21\u5757\u7684\u540e\u7aef\u4ee3\u7801\u4f7f\u7528CherryPy\u6846\u67b6\u548c\u81ea\u5b9a\u4e49REST API\u5b9e\u73b0\u3002 WebUI\u5b9e\u73b0\u57fa\u4e8eAngular / TypeScript\uff0c\u5408\u5e76\u4e86\u6765\u81ea\u539f\u59cb\u4eea\u8868\u677f\u7684\u529f\u80fd\uff0c\u5e76\u6dfb\u52a0\u4e86\u6700\u521d\u4e3a\u72ec\u7acb\u7248\u672c\u7684openATTIC\u5f00\u53d1\u7684\u65b0\u529f\u80fd\u3002 Ceph\u4eea\u8868\u677f\u6a21\u5757\u88ab\u5b9e\u73b0\u4e3aWeb\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u4f7f\u7528ceph-mgr\u6258\u7ba1\u7684Web\u670d\u52a1\u5668\u53ef\u89c6\u5316\u6709\u5173Ceph\u7fa4\u96c6\u7684\u4fe1\u606f\u548c\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,n.kt)("h2",{id:"dashboard\u5b89\u88c5"},(0,n.kt)("inlineCode",{parentName:"h2"},"Dashboard"),"\u5b89\u88c5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u7ebf\u5b89\u88c5\u7a0b\u5e8f\u5305\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y http://mirrors.aliyun.com/ceph/rpm-nautilus/el7/noarch/ceph-grafana-dashboards-14.2.9-0.el7.noarch.rpm\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u542f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"Ceph Mgr Dashboard"),"\u6a21\u5757\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'ceph mgr module enable dashboard\n# ceph mgr module disable dashboard     # \u7981\u7528\n\n# \u67e5\u770b\u6a21\u5757\u662f\u5426\u6210\u529f\u88c5\u8f7d\n[root@stor1 ~]\\# ceph mgr module ls | grep -A 2 -B 1 dashboard\n    "enabled_modules": [\n        "dashboard",\n        "iostat",\n        "restful"\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u751f\u6210\u5e76\u5b89\u88c5\u81ea\u7b7e\u540d\u8bc1\u4e66\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0e\u4eea\u8868\u677f\u7684\u6240\u6709HTTP\u8fde\u63a5\u5747\u4f7f\u7528SSL / TLS\u4fdd\u62a4\uff09\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ceph dashboard create-self-signed-cert\n")),(0,n.kt)("p",null,"\u5176\u4ed6\u8be6\u7ec6\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://docs.ceph.com/docs/nautilus/mgr/dashboard/#ssl-tls-support"},"https://docs.ceph.com/docs/nautilus/mgr/dashboard/#ssl-tls-support")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u8bbf\u95ee",(0,n.kt)("inlineCode",{parentName:"p"},"IP"),"\u53ca",(0,n.kt)("inlineCode",{parentName:"p"},"PORT"),"\uff08\u53ef\u9009\u64cd\u4f5c\uff09\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://docs.ceph.com/docs/nautilus/mgr/dashboard/#host-name-and-port"},"https://docs.ceph.com/docs/nautilus/mgr/dashboard/#host-name-and-port"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"Dashboard"),"\u521b\u5efa\u7528\u6237\uff1a"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# ceph dashboard ac-user-create <username> <password> administrator\nceph dashboard ac-user-create suofeiya suofeiya administrator\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u67e5\u770b",(0,n.kt)("inlineCode",{parentName:"li"},"Dashboard"),"\u72b6\u6001\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'[root@stor1 ~]\\# ceph mgr services \n{\n    "dashboard": "https://stor1:8443/"\n}\n')),(0,n.kt)("p",null,"\u6700\u540e\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\u5bf9\u5e94\u5730\u5740 ",(0,n.kt)("a",{parentName:"p",href:"https://172.16.1.128:8443"},"https://172.16.1.128:8443")," \uff0c\u9700\u6ce8\u610f",(0,n.kt)("strong",{parentName:"p"},"\u534f\u8bae\u4e3a HTTPS")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/ceph-dashboard/ceph-dashboard-1.png",alt:null,title:"ceph-dashboard"})),(0,n.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ansible"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"prometheus"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"zabbix"),"\u652f\u6301\u53c2\u8003\u5b98\u65b9\u6587\u6863\u3002"),(0,n.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ceph Mgr Dashboard Documentation: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.ceph.com/docs/nautilus/mgr/dashboard/"},"https://docs.ceph.com/docs/nautilus/mgr/dashboard/"))))}d.isMDXComponent=!0}}]);