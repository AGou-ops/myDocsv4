"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[1494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>v,kt:()=>d});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),u=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},v=function(e){var n=u(e.components);return l.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,v=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,m=c["".concat(i,".").concat(d)]||c[d]||p[d]||r;return t?l.createElement(m,s(s({ref:n},v),{},{components:t})):l.createElement(m,s({ref:n},v))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<r;u++)s[u]=t[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},62312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=t(87462),a=(t(67294),t(3905));const r={},s="lvm \u8bb2\u89e3",o={unversionedId:"LinuxBasics/lvm \u8bb2\u89e3",id:"LinuxBasics/lvm \u8bb2\u89e3",title:"lvm \u8bb2\u89e3",description:"\u4e00\u3001lvm\u8bb2\u89e3",source:"@site/docs/LinuxBasics/lvm \u8bb2\u89e3.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/lvm \u8bb2\u89e3",permalink:"/docs/LinuxBasics/lvm \u8bb2\u89e3",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/lvm \u8bb2\u89e3.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"lsyncd",permalink:"/docs/LinuxBasics/lsyncd"},next:{title:"rsync + inotify(sersync)",permalink:"/docs/LinuxBasics/rsync - inotify\uff08sersync\uff09"}},i={},u=[{value:"\u4e00\u3001lvm\u8bb2\u89e3",id:"\u4e00lvm\u8bb2\u89e3",level:3},{value:"1. \u7b80\u4ecb\uff1a",id:"1-\u7b80\u4ecb",level:5},{value:"2. \u57fa\u672c\u6982\u5ff5\uff1a",id:"2-\u57fa\u672c\u6982\u5ff5",level:5},{value:"3. \u5de5\u4f5c\u539f\u7406",id:"3-\u5de5\u4f5c\u539f\u7406",level:5},{value:"4. \u64cd\u4f5c\u5b9e\u9a8c",id:"4-\u64cd\u4f5c\u5b9e\u9a8c",level:5},{value:"\u4e8c\u3001\u78c1\u76d8\u6545\u969c\u5c0f\u6848\u4f8b",id:"\u4e8c\u78c1\u76d8\u6545\u969c\u5c0f\u6848\u4f8b",level:3}],v={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lvm-\u8bb2\u89e3"},"lvm \u8bb2\u89e3"),(0,a.kt)("h3",{id:"\u4e00lvm\u8bb2\u89e3"},"\u4e00\u3001lvm\u8bb2\u89e3"),(0,a.kt)("h5",{id:"1-\u7b80\u4ecb"},"1. \u7b80\u4ecb\uff1a"),(0,a.kt)("p",null,"LVM\u662f Logical Volume Manager(\u903b\u8f91\u5377\u7ba1\u7406)\u7684\u7b80\u5199\uff0c\u5b83\u662fLinux\u73af\u5883\u4e0b\u5bf9\u78c1\u76d8\u5206\u533a\u8fdb\u884c\u7ba1\u7406\u7684\u4e00\u79cd\u673a\u5236\u3002LVM\u53ef\u4ee5\u5c06\u591a\u4e2a\u786c\u76d8\u548c\u786c\u76d8\u5206\u533a\u505a\u6210\u4e00\u4e2a\u903b\u8f91\u5377\uff0c\u5e76\u628a\u8fd9\u4e2a\u903b\u8f91\u5377\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u6765\u7edf\u4e00\u7ba1\u7406\uff0c\u52a8\u6001\u5bf9\u5206\u533a\u8fdb\u884c\u6269\u7f29\u7a7a\u95f4\u5927\u5c0f\uff0c\u5b89\u5168\u5feb\u6377\u65b9\u4fbf\u7ba1\u7406\u3002"),(0,a.kt)("h5",{id:"2-\u57fa\u672c\u6982\u5ff5"},"2. \u57fa\u672c\u6982\u5ff5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7269\u7406\u5377-----PV\uff08Physical Volume\uff09\n\u7269\u7406\u5377\u5728\u903b\u8f91\u5377\u7ba1\u7406\u4e2d\u5904\u4e8e\u6700\u5e95\u5c42\uff0c\u5b83\u53ef\u4ee5\u662f\u5b9e\u9645\u7269\u7406\u786c\u76d8\u4e0a\u7684\u5206\u533a\uff0c\u4e5f\u53ef\u4ee5\u662f\u6574\u4e2a\u7269\u7406\u786c\u76d8\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5377\u7ec4-----VG\uff08Volumne Group\uff09\n\u5377\u7ec4\u5efa\u7acb\u5728\u7269\u7406\u5377\u4e4b\u4e0a\uff0c\u4e00\u4e2a\u5377\u7ec4\u4e2d\u81f3\u5c11\u8981\u5305\u62ec\u4e00\u4e2a\u7269\u7406\u5377\uff0c\u5728\u5377\u7ec4\u5efa\u7acb\u4e4b\u540e\u53ef\u52a8\u6001\u6dfb\u52a0\u7269\u7406\u5377\u5230\u5377\u7ec4\u4e2d\u3002\u4e00\u4e2a\u903b\u8f91\u5377\u7ba1\u7406\u7cfb\u7edf\u5de5\u7a0b\u4e2d\u53ef\u4ee5\u53ea\u6709\u4e00\u4e2a\u5377\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u62e5\u6709\u591a\u4e2a\u5377\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u903b\u8f91\u5377-----LV\uff08Logical Volume\uff09\n\u903b\u8f91\u5377\u5efa\u7acb\u5728\u5377\u7ec4\u4e4b\u4e0a\uff0c\u5377\u7ec4\u4e2d\u7684\u672a\u5206\u914d\u7a7a\u95f4\u53ef\u4ee5\u7528\u4e8e\u5efa\u7acb\u65b0\u7684\u903b\u8f91\u5377\uff0c\u903b\u8f91\u5377\u5efa\u7acb\u540e\u53ef\u4ee5\u52a8\u6001\u5730\u6269\u5c55\u548c\u7f29\u5c0f\u7a7a\u95f4\u3002\u7cfb\u7edf\u4e2d\u7684\u591a\u4e2a\u903b\u8f91\u5377\u8981\u4ee5\u5c5e\u4e8e\u540c\u4e00\u4e2a\u5377\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u5c5e\u4e8e\u4e0d\u540c\u7684\u591a\u4e2a\u5377\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7269\u7406\u533a\u57df-----PE\uff08Physical Extent\uff09\n\u7269\u7406\u533a\u57df\u662f\u7269\u7406\u5377\u4e2d\u53ef\u7528\u4e8e\u5206\u914d\u7684\u6700\u5c0f\u5b58\u50a8\u5355\u5143\uff0c\u7269\u7406\u533a\u57df\u7684\u5927\u5c0f\u53ef\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u5728\u5efa\u7acb\u7269\u7406\u5377\u65f6\u6307\u5b9a\u3002\u7269\u7406\u533a\u57df\u5927\u5c0f\u4e00\u65e6\u786e\u5b9a\u5c06\n\u4e0d\u80fd\u66f4\u6539\uff0c\u540c\u4e00\u5377\u7ec4\u4e2d\u7684\u6240\u6709\u7269\u7406\u5377\u7684\u7269\u7406\u533a\u57df\u5927\u5c0f\u9700\u8981\u4e00\u81f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u903b\u8f91\u533a\u57df-----LE\uff08Logical Extent\uff09\n\u903b\u8f91\u533a\u57df\u662f\u903b\u8f91\u5377\u4e2d\u53ef\u7528\u4e8e\u5206\u914d\u7684\u6700\u5c0f\u5b58\u50a8\u5355\u5143\uff0c\u903b\u8f91\u533a\u57df\u7684\u5927\u5c0f\u53d6\u51b3\u4e8e\u903b\u8f91\u5377\u6240\u5728\u5377\u7ec4\u4e2d\u7684\u7269\u7406\u533a\u57df\u7684\u5927\u5c0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5377\u7ec4\u63cf\u8ff0\u533a\u57df-----\uff08Volume Group Descriptor Area\uff09\n\u5377\u7ec4\u63cf\u8ff0\u533a\u57df\u5b58\u5728\u4e8e\u6bcf\u4e2a\u7269\u7406\u5377\u4e2d\uff0c\u7528\u4e8e\u63cf\u8ff0\u7269\u7406\u5377\u672c\u8eab\u3001\u7269\u7406\u5377\u6240\u5c5e\u5377\u7ec4\u3001\u5377\u7ec4\u4e2d\u7684\u903b\u8f91\u5377\u53ca\u903b\u8f91\u5377\u4e2d\u7269\u7406\u533a\u57df\u7684\u5206\u914d\u7b49\u6240\u6709\u4fe1\u606f\uff0c\u5377\u7ec4\u63cf\u8ff0\u533a\u57df\u662f\u5728\u4f7f\u7528pvcreate\u5efa\u7acb\u7269\u7406\u5377\u65f6\u5efa\u7acb\u7684\u3002")),(0,a.kt)("h5",{id:"3-\u5de5\u4f5c\u539f\u7406"},"3. \u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"\uff081\uff09\u7269\u7406\u78c1\u76d8\u88ab\u683c\u5f0f\u5316\u4e3aPV\uff0c\u7a7a\u95f4\u88ab\u5212\u5206\u4e3a\u4e00\u4e2a\u4e2a\u7684PE\u3002\n\uff082\uff09\u4e0d\u540c\u7684PV\u52a0\u5165\u5230\u540c\u4e00\u4e2aVG\u4e2d\uff0c\u4e0d\u540cPV\u7684PE\u5168\u90e8\u8fdb\u5165\u5230\u4e86VG\u7684PE\u6c60\u5185\u3002\n\uff083\uff09LV\u57fa\u4e8ePE\u521b\u5efa\uff0c\u5927\u5c0f\u4e3aPE\u7684\u6574\u6570\u500d\uff0c\u7ec4\u6210LV\u7684PE\u53ef\u80fd\u6765\u81ea\u4e0d\u540c\u7684\u7269\u7406\u78c1\u76d8\u3002\n\uff084\uff09LV\u73b0\u5728\u5c31\u76f4\u63a5\u53ef\u4ee5\u683c\u5f0f\u5316\u540e\u6302\u8f7d\u4f7f\u7528\u4e86\u3002\n\uff085\uff09LV\u7684\u6269\u5145\u7f29\u51cf\u5b9e\u9645\u4e0a\u5c31\u662f\u589e\u52a0\u6216\u51cf\u5c11\u7ec4\u6210\u8be5LV\u7684PE\u6570\u91cf\uff0c\u5176\u8fc7\u7a0b\u4e0d\u4f1a\u4e22\u5931\u539f\u59cb\u6570\u636e \u3002"),(0,a.kt)("h5",{id:"4-\u64cd\u4f5c\u5b9e\u9a8c"},"4. \u64cd\u4f5c\u5b9e\u9a8c"),(0,a.kt)("p",null,"\u2139\ufe0f\u589e\u52a0\u786c\u76d8\u6216\u8005\u865a\u62df\u78c1\u76d8\u4e4b\u540e\u65e0\u9700\u91cd\u542f\u4e3b\u673a\u5c31\u53ef\u8ba9\u5185\u6838\u91cd\u626b\u63cf\u78c1\u76d8\u4fe1\u606f\uff08\u865a\u62df\u78c1\u76d8\u6269\u5bb9\u53ef\u80fd\u5f97\u91cd\u542f\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'for host in /sys/class/scsi_host/*; do echo "- - -" | sudo tee $host/scan; ls /dev/sd* ; done\n')),(0,a.kt)("p",null,"\uff081\uff09\u51c6\u5907\u78c1\u76d8\u5206\u533a"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"fdisk /dev/sdb"),(0,a.kt)("li",{parentName:"ul"},"n \u521b\u5efa\u4e09\u4e2a\u65b0\u5206\u533a\uff0c\u5206\u522b\u4e3a1G"),(0,a.kt)("li",{parentName:"ul"},"t \u6539\u53d8\u5206\u533a\u7c7b\u578b\u4e3a8e"))),(0,a.kt)("p",null,"\u5b8c\u6210\u521b\u5efa\u540e\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u547d\u4ee4(\u8f93\u5165 m \u83b7\u53d6\u5e2e\u52a9)\uff1ap\n\n\u78c1\u76d8 /dev/sdb\uff1a10.7 GB, 10737418240 \u5b57\u8282\uff0c20971520 \u4e2a\u6247\u533a\nUnits = \u6247\u533a of 1 * 512 = 512 bytes\n\u6247\u533a\u5927\u5c0f(\u903b\u8f91/\u7269\u7406)\uff1a512 \u5b57\u8282 / 512 \u5b57\u8282\nI/O \u5927\u5c0f(\u6700\u5c0f/\u6700\u4f73)\uff1a512 \u5b57\u8282 / 512 \u5b57\u8282\n\u78c1\u76d8\u6807\u7b7e\u7c7b\u578b\uff1ados\n\u78c1\u76d8\u6807\u8bc6\u7b26\uff1a0xbffc2ce5\n\n   \u8bbe\u5907 Boot      Start         End      Blocks   Id  System\n/dev/sdb1            2048     2099199     1048576   8e  Linux LVM\n/dev/sdb2         2099200     4196351     1048576   8e  Linux LVM\n/dev/sdb3         4196352     6293503     1048576   8e  Linux LVM\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# fdisk -l\n\n\u78c1\u76d8 /dev/sda\uff1a32.2 GB, 32212254720 \u5b57\u8282\uff0c62914560 \u4e2a\u6247\u533a\nUnits = \u6247\u533a of 1 * 512 = 512 bytes\n\u6247\u533a\u5927\u5c0f(\u903b\u8f91/\u7269\u7406)\uff1a512 \u5b57\u8282 / 512 \u5b57\u8282\nI/O \u5927\u5c0f(\u6700\u5c0f/\u6700\u4f73)\uff1a512 \u5b57\u8282 / 512 \u5b57\u8282\n\u78c1\u76d8\u6807\u7b7e\u7c7b\u578b\uff1ados\n\u78c1\u76d8\u6807\u8bc6\u7b26\uff1a0x000236bc\n\n   \u8bbe\u5907 Boot      Start         End      Blocks   Id  System\n/dev/sda1   *        2048      411647      204800   83  Linux\n/dev/sda2          411648     4605951     2097152   82  Linux swap / Solaris\n/dev/sda3         4605952    62914559    29154304   83  Linux\n\n\u78c1\u76d8 /dev/sdb\uff1a10.7 GB, 10737418240 \u5b57\u8282\uff0c20971520 \u4e2a\u6247\u533a\nUnits = \u6247\u533a of 1 * 512 = 512 bytes\n\u6247\u533a\u5927\u5c0f(\u903b\u8f91/\u7269\u7406)\uff1a512 \u5b57\u8282 / 512 \u5b57\u8282\nI/O \u5927\u5c0f(\u6700\u5c0f/\u6700\u4f73)\uff1a512 \u5b57\u8282 / 512 \u5b57\u8282\n\u78c1\u76d8\u6807\u7b7e\u7c7b\u578b\uff1ados\n\u78c1\u76d8\u6807\u8bc6\u7b26\uff1a0xbffc2ce5\n\n   \u8bbe\u5907 Boot      Start         End      Blocks   Id  System\n/dev/sdb1            2048     2099199     1048576   8e  Linux LVM\n/dev/sdb2         2099200     4196351     1048576   8e  Linux LVM\n/dev/sdb3         4196352     6293503     1048576   8e  Linux LVM\n")),(0,a.kt)("p",null,"\uff082\uff09\u521b\u5efa\u903b\u8f91\u5377\n\u7cfb\u7edf\u9ed8\u8ba4\u672a\u5b89\u88c5lvm\u5305\uff0c\u9996\u5148\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},'yum provides "/*/pvcreate"'),"\u641c\u7d22\u8f6f\u4ef6\u5305\uff0c\u7136\u540e\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"yum install -y lvm2")," \u5b89\u88c5lvm\u8f6f\u4ef6\u5305\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u547d\u4ee4\uff1a")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"pvcreate /dev/sdb1"),(0,a.kt)("li",{parentName:"ul"},"pvcreate /dev/sdb2"),(0,a.kt)("li",{parentName:"ul"},"pvcreate /dev/sdb3"),(0,a.kt)("li",{parentName:"ul"},"pvdisplay \u5217\u51fa\u5f53\u524d\u7684\u7269\u7406\u5377"),(0,a.kt)("li",{parentName:"ul"},"pvs  \u5217\u51fa\u5df2\u5b58\u5728\u7269\u7406\u5377"),(0,a.kt)("li",{parentName:"ul"},"pvremove /dev/sdb3 \u5220\u9664\u7269\u7406\u5377"),(0,a.kt)("li",{parentName:"ul"},"vgcreate \u521b\u5efa\u5377\u7ec4"),(0,a.kt)("li",{parentName:"ul"},"vgremove \u5220\u9664\u5377\u7ec4"),(0,a.kt)("li",{parentName:"ul"},"vgdisplay \u5217\u51fa\u5377\u7ec4\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"vgs \u5217\u51fa\u5df2\u5b58\u5728\u5377\u7ec4"),(0,a.kt)("li",{parentName:"ul"},"lvcreate  -L \u5927\u5c0f -n \u540d\u5b57 vg\u540d   \u521b\u5efa\u903b\u8f91\u5377"),(0,a.kt)("li",{parentName:"ul"},"lvremove  \u5220\u9664\u903b\u8f91\u5377"))),(0,a.kt)("p",null,"pvcreate\u521b\u5efa\u7269\u7406\u5377\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[root@minglinux-01 ~]\\# pvcreate /dev/sdb1\nWARNING: dos signature detected on /dev/sdb1 at offset 510. Wipe it? [y/n]: y\n  Wiping dos signature on /dev/sdb1.\n  Physical volume "/dev/sdb1" successfully created.\n[root@minglinux-01 ~]\\# pvcreate /dev/sdb2\n  Physical volume "/dev/sdb2" successfully created.\n[root@minglinux-01 ~]\\# pvcreate /dev/sdb3\n  Physical volume "/dev/sdb3" successfully created.\n')),(0,a.kt)("p",null,"pvdisplay\u67e5\u770b\u521b\u5efa\u7684\u7269\u7406\u5377\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[root@minglinux-01 ~]\\# pvdisplay\n  "/dev/sdb2" is a new physical volume of "1.00 GiB"\n  --- NEW Physical volume ---\n  PV Name               /dev/sdb2\n  VG Name               \n  PV Size               1.00 GiB\n  Allocatable           NO\n  PE Size               0   \n  Total PE              0\n  Free PE               0\n  Allocated PE          0\n  PV UUID               0bKnTB-IMd3-UJQl-93tE-9x3z-pkkt-6J2epS\n   \n  "/dev/sdb1" is a new physical volume of "1.00 GiB"\n  --- NEW Physical volume ---\n  PV Name               /dev/sdb1\n  VG Name               \n  PV Size               1.00 GiB\n  Allocatable           NO\n  PE Size               0   \n  Total PE              0\n  Free PE               0\n  Allocated PE          0\n  PV UUID               2z8qv8-978f-cK0P-RwxG-T9aE-j1mA-gkiZi8\n   \n  "/dev/sdb3" is a new physical volume of "1.00 GiB"\n  --- NEW Physical volume ---\n  PV Name               /dev/sdb3\n  VG Name               \n  PV Size               1.00 GiB\n  Allocatable           NO\n  PE Size               0   \n  Total PE              0\n  Free PE               0\n  Allocated PE          0\n  PV UUID               vo47c6-ITPt-RsXZ-wfs4-nzBe-bJMa-KGbqV4\n')),(0,a.kt)("p",null,"pvs\u67e5\u770b\u5df2\u5b58\u5728\u7269\u7406\u5377\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# pvs\n  PV         VG Fmt  Attr PSize PFree\n  /dev/sdb1     lvm2 ---  1.00g 1.00g\n  /dev/sdb2     lvm2 ---  1.00g 1.00g\n  /dev/sdb3     lvm2 ---  1.00g 1.00g\n")),(0,a.kt)("p",null,"vgcreate\u521b\u5efa\u5377\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[root@minglinux-01 ~]\\# vgcreate vg1 /dev/sdb1 /dev/sdb2\n  Volume group "vg1" successfully created\n')),(0,a.kt)("p",null,"vgdisplay\u548cvgs\u67e5\u770b\u5377\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# vgdisplay \n  --- Volume group ---\n  VG Name               vg1\n  System ID             \n  Format                lvm2\n  Metadata Areas        2\n  Metadata Sequence No  1\n  VG Access             read/write\n  VG Status             resizable\n  MAX LV                0\n  Cur LV                0\n  Open LV               0\n  Max PV                0\n  Cur PV                2\n  Act PV                2\n  VG Size               1.99 GiB\n  PE Size               4.00 MiB\n  Total PE              510\n  Alloc PE / Size       0 / 0   \n  Free  PE / Size       510 / 1.99 GiB\n  VG UUID               mWCQjl-Jehp-2fDc-INsd-3K3E-8d3t-ROinr1\n   \n[root@minglinux-01 ~]\\# vgs\n  VG  #PV #LV #SN Attr   VSize VFree\n  vg1   2   0   0 wz--n- 1.99g 1.99g\n")),(0,a.kt)("p",null,"lvcreate\u521b\u5efa\u903b\u8f91\u5377\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[root@minglinux-01 ~]\\# lvcreate -L 100M -n lv1 vg1\nWARNING: ext4 signature detected on /dev/vg1/lv1 at offset 1080. Wipe it? [y/n]: y\n  Wiping ext4 signature on /dev/vg1/lv1.\n  Logical volume "lv1" created.\n')),(0,a.kt)("p",null,"\u683c\u5f0f\u5316\u903b\u8f91\u5377lv1\u4e3aext4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# mkfs.ext4 /dev/vg1/lv1\nmke2fs 1.42.9 (28-Dec-2013)\n\u6587\u4ef6\u7cfb\u7edf\u6807\u7b7e=\nOS type: Linux\n\u5757\u5927\u5c0f=1024 (log=0)\n\u5206\u5757\u5927\u5c0f=1024 (log=0)\nStride=0 blocks, Stripe width=0 blocks\n25688 inodes, 102400 blocks\n5120 blocks (5.00%) reserved for the super user\n\u7b2c\u4e00\u4e2a\u6570\u636e\u5757=1\nMaximum filesystem blocks=33685504\n13 block groups\n8192 blocks per group, 8192 fragments per group\n1976 inodes per group\nSuperblock backups stored on blocks: \n    8193, 24577, 40961, 57345, 73729\n\nAllocating group tables: \u5b8c\u6210                            \n\u6b63\u5728\u5199\u5165inode\u8868: \u5b8c\u6210                            \nCreating journal (4096 blocks): \u5b8c\u6210\nWriting superblocks and filesystem accounting information: \u5b8c\u6210 \n")),(0,a.kt)("p",null,"\u6302\u8f7d\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# mount /dev/vg1/lv1 /mnt/\n[root@minglinux-01 ~]\\# df -h\n\u6587\u4ef6\u7cfb\u7edf             \u5bb9\u91cf  \u5df2\u7528  \u53ef\u7528 \u5df2\u7528% \u6302\u8f7d\u70b9\n/dev/sda3             28G  2.4G   26G    9% /\ndevtmpfs             901M     0  901M    0% /dev\ntmpfs                911M     0  911M    0% /dev/shm\ntmpfs                911M  9.5M  902M    2% /run\ntmpfs                911M     0  911M    0% /sys/fs/cgroup\n/dev/sda1            197M  140M   58M   71% /boot\ntmpfs                183M     0  183M    0% /run/user/0\n/dev/mapper/vg1-lv1   93M  1.6M   85M    2% /mnt\n")),(0,a.kt)("p",null,"/dev/vg1/lv1\u548c/dev/mapper/vg1-lv1\u90fd\u6307\u5411\u4e86\u540c\u4e00\u4e2a\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# ls -l /dev/vg1/lv1\nlrwxrwxrwx. 1 root root 7 9\u6708  27 23:35 /dev/vg1/lv1 -> ../dm-0\n[root@minglinux-01 ~]\\# ls -l /dev/mapper/vg1-lv1\nlrwxrwxrwx. 1 root root 7 9\u6708  27 23:35 /dev/mapper/vg1-lv1 -> ../dm-0\n")),(0,a.kt)("p",null,"\uff083\uff09\u6269\u5bb9\u903b\u8f91\u5377"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"lvresize -L 300M /dev/vg1/lv1 \u91cd\u65b0\u8bbe\u7f6e\u5377\u5927\u5c0f"),(0,a.kt)("li",{parentName:"ul"},"e2fsck -f /dev/vg1/lv1 \u68c0\u67e5\u78c1\u76d8\u9519\u8bef\uff08ext4\u6267\u884c\uff09"),(0,a.kt)("li",{parentName:"ul"},"resize2fs /dev/vg1/lv1 \u66f4\u65b0\u903b\u8f91\u5377\u4fe1\u606f\uff08ext4\u6267\u884c\uff09"),(0,a.kt)("li",{parentName:"ul"},"xfs_growfs /dev/vg1/lv1 xfs \u6587\u4ef6\u7cfb\u7edf\u9700\u8981\u6267\u884c"))),(0,a.kt)("p",null,"\u793a\u4f8b\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"[root@minglinux-01 ~]\\# umount /mnt/\n[root@minglinux-01 ~]\\# lvresize -L 200M /dev/vg1/lv1\n  New size (50 extents) matches existing size (50 extents).\n[root@minglinux-01 ~]\\# e2fsck -f /dev/vg1/lv1\ne2fsck 1.42.9 (28-Dec-2013)\n\u7b2c\u4e00\u6b65: \u68c0\u67e5inode,\u5757,\u548c\u5927\u5c0f\n\u7b2c\u4e8c\u6b65: \u68c0\u67e5\u76ee\u5f55\u7ed3\u6784\n\u7b2c3\u6b65: \u68c0\u67e5\u76ee\u5f55\u8fde\u63a5\u6027\nPass 4: Checking reference counts\n\u7b2c5\u6b65: \u68c0\u67e5\u7c07\u6982\u8981\u4fe1\u606f\n/dev/vg1/lv1: 11/25688 files (9.1% non-contiguous), 8896/102400 blocks\n[root@minglinux-01 ~]\\# resize2fs /dev/vg1/lv1\nresize2fs 1.42.9 (28-Dec-2013)\nResizing the filesystem on /dev/vg1/lv1 to 204800 (1k) blocks.\nThe filesystem on /dev/vg1/lv1 is now 204800 blocks long.\n\n[root@minglinux-01 ~]\\# !mount \nmount /dev/vg1/lv1 /mnt/ \n[root@minglinux-01 ~]\\# df -h \n\u6587\u4ef6\u7cfb\u7edf             \u5bb9\u91cf  \u5df2\u7528  \u53ef\u7528 \u5df2\u7528% \u6302\u8f7d\u70b9\n/dev/sda3             28G  2.4G   26G    9% /\ndevtmpfs             901M     0  901M    0% /dev\ntmpfs                911M     0  911M    0% /dev/shm\ntmpfs                911M  9.5M  902M    2% /run\ntmpfs                911M     0  911M    0% /sys/fs/cgroup\n/dev/sda1            197M  140M   58M   71% /boot\ntmpfs                183M     0  183M    0% /run/user/0\n/dev/mapper/vg1-lv1  190M  1.6M  175M    1% /mnt\n")),(0,a.kt)("p",null,"\uff084\uff09\u7f29\u51cf\u903b\u8f91\u5377\uff08xfs\u4e0d\u652f\u6301\uff09"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5148umount"),(0,a.kt)("li",{parentName:"ul"},"e2fsck -f /dev/vg1/lv1 \u68c0\u67e5\u78c1\u76d8\u9519\u8bef\uff08ext\uff09"),(0,a.kt)("li",{parentName:"ul"},"resize2fs /dev/vg1/lv1 100M \u66f4\u65b0\u903b\u8f91\u5377\u4fe1\u606f\uff08ext\uff09"),(0,a.kt)("li",{parentName:"ul"},"lvresize -L 100M /dev/vg1/lv1 \u91cd\u65b0\u8bbe\u7f6e\u5377\u5927\u5c0f"))),(0,a.kt)("p",null,"\u793a\u4f8b\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# umount /mnt/\n[root@minglinux-01 ~]\\# e2fsck -f /dev/vg1/lv1\ne2fsck 1.42.9 (28-Dec-2013)\n\u7b2c\u4e00\u6b65: \u68c0\u67e5inode,\u5757,\u548c\u5927\u5c0f\n\u7b2c\u4e8c\u6b65: \u68c0\u67e5\u76ee\u5f55\u7ed3\u6784\n\u7b2c3\u6b65: \u68c0\u67e5\u76ee\u5f55\u8fde\u63a5\u6027\nPass 4: Checking reference counts\n\u7b2c5\u6b65: \u68c0\u67e5\u7c07\u6982\u8981\u4fe1\u606f\n/dev/vg1/lv1: 11/49400 files (9.1% non-contiguous), 11884/204800 blocks\n[root@minglinux-01 ~]\\# resize2fs /dev/vg1/lv1 100M\nresize2fs 1.42.9 (28-Dec-2013)\nResizing the filesystem on /dev/vg1/lv1 to 102400 (1k) blocks.\nThe filesystem on /dev/vg1/lv1 is now 102400 blocks long.\n\n[root@minglinux-01 ~]\\# lvresize -L 100M /dev/vg1/lv1\n  WARNING: Reducing active logical volume to 100.00 MiB.\n  THIS MAY DESTROY YOUR DATA (filesystem etc.)\nDo you really want to reduce vg1/lv1? [y/n]: y\n  Size of logical volume vg1/lv1 changed from 200.00 MiB (50 extents) to 100.00 MiB (25 extents).\n  Logical volume vg1/lv1 successfully resized.\n[root@minglinux-01 ~]\\# lvs\n  LV   VG  Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv1  vg1 -wi-a----- 100.00m \n")),(0,a.kt)("p",null,"\u6700\u540e\u518d\u6b21\u6302\u8f7d\u5373\u53ef\u3002"),(0,a.kt)("p",null,"xfs\u6269\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[root@minglinux-01 ~]\\# !mount\nmount /dev/vg1/lv1 /mnt/ \n[root@minglinux-01 ~]\\# ls /mnt/\n[root@minglinux-01 ~]\\# touch /mnt/123.txt\n[root@minglinux-01 ~]\\# echo "abc" > !$\necho "abc" > /mnt/123.txt\n[root@minglinux-01 ~]\\# lvs\n  LV   VG  Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv1  vg1 -wi-ao---- 100.00m                                                    \n[root@minglinux-01 ~]\\# lvresize -L 300M /dev/vg1/lv1\n  Size of logical volume vg1/lv1 changed from 100.00 MiB (25 extents) to 300.00 MiB (75 extents).\n  Logical volume vg1/lv1 successfully resized.\n[root@minglinux-01 ~]\\# lvs\n  LV   VG  Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv1  vg1 -wi-ao---- 300.00m\n')),(0,a.kt)("p",null,"\u6b64\u65f6",(0,a.kt)("inlineCode",{parentName:"p"},"df -h"),"\u67e5\u770b\u78c1\u76d8\u6ca1\u6709\u6539\u53d8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# df -h\n\u6587\u4ef6\u7cfb\u7edf             \u5bb9\u91cf  \u5df2\u7528  \u53ef\u7528 \u5df2\u7528% \u6302\u8f7d\u70b9\n/dev/sda3             28G  2.4G   26G    9% /\ndevtmpfs             901M     0  901M    0% /dev\ntmpfs                911M     0  911M    0% /dev/shm\ntmpfs                911M  9.5M  902M    2% /run\ntmpfs                911M     0  911M    0% /sys/fs/cgroup\n/dev/sda1            197M  140M   58M   71% /boot\ntmpfs                183M     0  183M    0% /run/user/0\n/dev/mapper/vg1-lv1   97M  5.2M   92M    6% /mnt\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u6267\u884c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"xfs_growfs"),"\u547d\u4ee4\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@minglinux-01 ~]\\# xfs_growfs /dev/vg1/lv1\nmeta-data=/dev/mapper/vg1-lv1    isize=512    agcount=4, agsize=6400 blks\n         =                       sectsz=512   attr=2, projid32bit=1\n         =                       crc=1        finobt=0 spinodes=0\ndata     =                       bsize=4096   blocks=25600, imaxpct=25\n         =                       sunit=0      swidth=0 blks\nnaming   =version 2              bsize=4096   ascii-ci=0 ftype=1\nlog      =internal               bsize=4096   blocks=855, version=2\n         =                       sectsz=512   sunit=0 blks, lazy-count=1\nrealtime =none                   extsz=4096   blocks=0, rtextents=0\ndata blocks changed from 25600 to 76800\n[root@minglinux-01 ~]\\# df -h\n\u6587\u4ef6\u7cfb\u7edf             \u5bb9\u91cf  \u5df2\u7528  \u53ef\u7528 \u5df2\u7528% \u6302\u8f7d\u70b9\n/dev/sda3             28G  2.4G   26G    9% /\ndevtmpfs             901M     0  901M    0% /dev\ntmpfs                911M     0  911M    0% /dev/shm\ntmpfs                911M  9.5M  902M    2% /run\ntmpfs                911M     0  911M    0% /sys/fs/cgroup\n/dev/sda1            197M  140M   58M   71% /boot\ntmpfs                183M     0  183M    0% /run/user/0\n/dev/mapper/vg1-lv1  297M  5.5M  292M    2% /mnt\n")),(0,a.kt)("p",null,"\uff085\uff09\u6269\u5c55\u5377\u7ec4"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"fdisk /dev/sdb \u65b0\u589e/dev/sdb5\uff08\u903b\u8f91\u5206\u533a8e\uff092G"),(0,a.kt)("li",{parentName:"ul"},"pvreate /dev/sdb5"),(0,a.kt)("li",{parentName:"ul"},"vgextend vg1 /dev/sdb5"),(0,a.kt)("li",{parentName:"ul"},"lvresize -L 100M /dev/vg1/lv1"))),(0,a.kt)("p",null,"\u8fd9\u91cc\u5c06/dev/sdb3\u52a0\u5165\u5230vg1\u5377\u7ec4\uff0cvg1\u5927\u5c0f\u5c31\u6269\u5c55\u4e3a3G\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u91cd\u65b0\u8bbe\u7f6e\u903b\u8f91\u5377\u7684\u5927\u5c0f\u3002\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[root@minglinux-01 ~]\\# vgextend vg1 /dev/sdb3\n  Volume group "vg1" successfully extended\n[root@minglinux-01 ~]\\# vgs\n  VG  #PV #LV #SN Attr   VSize  VFree \n  vg1   3   1   0 wz--n- <2.99g <2.70g\n')),(0,a.kt)("p",null,"\u6269\u5bb9lv(vg\u6ee1\u8db3\u5bb9\u91cf\u8981\u6c42)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," lvextend -L +20GB /dev/mapper/ubuntu--vg-ubuntu--lv\n\n \u3001 /dev/mapper/ubuntu--vg-ubuntu--lv\n")),(0,a.kt)("h3",{id:"\u4e8c\u78c1\u76d8\u6545\u969c\u5c0f\u6848\u4f8b"},"\u4e8c\u3001\u78c1\u76d8\u6545\u969c\u5c0f\u6848\u4f8b"),(0,a.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u4e4b\u524d\u5199\u4e86\u914d\u7f6e\u547d\u4ee4\u5230/etc/fstab\u6587\u4ef6\u91cc\u9762\uff0c\u5f53\u6211\u4eec\u505a\u5b8clvm\u5b9e\u9a8c\u540e\u91cd\u542f\u865a\u5047\u673a\u53d1\u73b0\u8fdb\u4e0d\u4e86\u7cfb\u7edf\u4e86\u3002\u7c7b\u4f3c\u8fd9\u6837\u7684\u95ee\u9898\u5f80\u5f80\u662f\u56e0\u4e3a\u78c1\u76d8\u6302\u8f7d\u5f02\u5e38\u7684\u95ee\u9898\u3002\n\u8fd9\u91cc\u6211\u4eec\u77e5\u9053\u95ee\u9898\u6240\u5728\uff0c\u6240\u4ee5\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u8f93\u5165root\u5bc6\u7801\u540e\u5728\u547d\u4ee4\u884c\u91cc\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"vi /etc/fstab"),"\u7f16\u8f91\u8be5\u914d\u7f6e\u6587\u4ef6\u6309",(0,a.kt)("inlineCode",{parentName:"p"},"dd"),"\u5220\u9664\u6211\u4eec\u4e4b\u524d\u589e\u52a0\u7684\u884c\uff0c\u7136\u540e",(0,a.kt)("inlineCode",{parentName:"p"},"reboot"),"\u5373\u53ef\u6b63\u5e38\u767b\u5f55\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"\u8f6c\u8f7d\u81ea\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/154c69a7a5d2"},"https://www.jianshu.com/p/154c69a7a5d2")))}p.isMDXComponent=!0}}]);