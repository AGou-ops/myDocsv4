"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[3323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var p=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,p,a=function(e,t){if(null==e)return{};var n,p,a={},l=Object.keys(e);for(p=0;p<l.length;p++)n=l[p],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(p=0;p<l.length;p++)n=l[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=p.createContext({}),c=function(e){var t=p.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=c(e.components);return p.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},h=p.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(o,".").concat(m)]||h[m]||u[m]||l;return n?p.createElement(d,r(r({ref:t},i),{},{components:n})):p.createElement(d,r({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return p.createElement.apply(null,r)}return p.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var p=n(87462),a=(n(67294),n(3905));const l={},r="CephFS",s={unversionedId:"LinuxBasics/FileSystem/Ceph/CephFS",id:"LinuxBasics/FileSystem/Ceph/CephFS",title:"CephFS",description:"CephFS \u7b80\u4ecb",source:"@site/docs/LinuxBasics/FileSystem/Ceph/CephFS.md",sourceDirName:"LinuxBasics/FileSystem/Ceph",slug:"/LinuxBasics/FileSystem/Ceph/CephFS",permalink:"/docs/LinuxBasics/FileSystem/Ceph/CephFS",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/FileSystem/Ceph/CephFS.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Ceph- eploy \u96c6\u7fa4\u5feb\u901f\u90e8\u7f72",permalink:"/docs/LinuxBasics/FileSystem/Ceph/Ceph-deploy \u96c6\u7fa4\u5feb\u901f\u90e8\u7f72"},next:{title:"Cepha   \u90e8\u7f72octopus",permalink:"/docs/LinuxBasics/FileSystem/Ceph/Cephadm \u90e8\u7f72octopus"}},o={},c=[{value:"CephFS \u7b80\u4ecb",id:"cephfs-\u7b80\u4ecb",level:2},{value:"CephFS \u90e8\u7f72",id:"cephfs-\u90e8\u7f72",level:2},{value:"\u90e8\u7f72 MDS",id:"\u90e8\u7f72-mds",level:3},{value:"\u521b\u5efa\u6240\u9700\u5b58\u50a8\u6c60 Pool",id:"\u521b\u5efa\u6240\u9700\u5b58\u50a8\u6c60-pool",level:3},{value:"\u65b0\u5efa CephFS",id:"\u65b0\u5efa-cephfs",level:3},{value:"\u6302\u8f7d CephFS",id:"\u6302\u8f7d-cephfs",level:2},{value:"MOUNT CEPHFS USING FUSE",id:"mount-cephfs-using-fuse",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],i={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,p.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cephfs"},"CephFS"),(0,a.kt)("h2",{id:"cephfs-\u7b80\u4ecb"},"CephFS \u7b80\u4ecb"),(0,a.kt)("p",null,"Ceph\u6587\u4ef6\u7cfb\u7edf\uff08CephFS\uff09\u662f\u4e00\u4e2aPOSIX\u517c\u5bb9\u6587\u4ef6\u7cfb\u7edf\uff0c\u5b83\u4f7f\u7528 Ceph \u5b58\u50a8\u7fa4\u96c6\u5b58\u50a8\u5176\u6570\u636e\u3002 Ceph\u6587\u4ef6\u7cfb\u7edf\u4f7f\u7528\u4e0eCeph\u5757\u8bbe\u5907\uff0c\u5177\u6709S3\u548cSwift API\u7684Ceph\u5bf9\u8c61\u5b58\u50a8\u6216\u672c\u673a\u7ed1\u5b9a\uff08librados\uff09\u76f8\u540c\u7684Ceph\u5b58\u50a8\u7fa4\u96c6\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"CephFS \u5141\u8bb8Linux\u76f4\u63a5\u5c06Ceph\u5b58\u50a8mount\u5230\u672c\u5730\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.ceph.com/docs/nautilus/_images/ditaa-b5a320fc160057a1a7da010b4215489fa66de242.png",alt:null,title:"CephFS Arch"})),(0,a.kt)("h2",{id:"cephfs-\u90e8\u7f72"},"CephFS \u90e8\u7f72"),(0,a.kt)("p",null,"\u4f7f\u7528Ceph\u6587\u4ef6\u7cfb\u7edf\u9700\u8981\u5728\u60a8\u7684Ceph\u5b58\u50a8\u96c6\u7fa4\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2aCeph\u5143\u6570\u636e\u670d\u52a1\u5668\uff08MDS\uff09\u3002"),(0,a.kt)("h3",{id:"\u90e8\u7f72-mds"},"\u90e8\u7f72 MDS"),(0,a.kt)("p",null,"\u5b88\u62a4\u8fdb\u7a0b\uff08ceph-mgr\uff09\u8d1f\u8d23\u8ddf\u8e2a\u8fd0\u884c\u65f6\u95f4\u6307\u6807\u548cCeph\u7fa4\u96c6\u7684",(0,a.kt)("em",{parentName:"p"},"\u5f53\u524d\u72b6\u6001\uff0c\u5305\u62ec\u5b58\u50a8\u5229\u7528\u7387\uff0c\u5f53\u524d\u6027\u80fd\u6307\u6807\u548c\u7cfb\u7edf\u8d1f\u8f7d"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"}," Ceph Manager"),"\u5b88\u62a4\u7a0b\u5e8f\u8fd8\u6258\u7ba1",(0,a.kt)("em",{parentName:"p"},"\u57fa\u4e8epython\u7684\u63d2\u4ef6\u6765\u7ba1\u7406\u548c\u516c\u5f00Ceph\u96c6\u7fa4\u4fe1\u606f\uff0c\u5305\u62ec\u57fa\u4e8eWeb\u7684\u4eea\u8868\u677f\u548cREST API"),"\u3002 \u901a\u5e38\uff0c\u81f3\u5c11\u6709\u4e24\u540dManager\u9700\u8981\u9ad8\u53ef\u7528\u6027\uff0c\u5728\u8fd9\u91cc\uff0c\u6211\u8d44\u6e90\u6709\u9650\uff0c\u53ea\u90e8\u7f72\u5355\u53f0",(0,a.kt)("inlineCode",{parentName:"p"},"MDS"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ceph-deploy mds create stor1\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u6240\u9700\u5b58\u50a8\u6c60-pool"},"\u521b\u5efa\u6240\u9700\u5b58\u50a8\u6c60 Pool"),(0,a.kt)("p",null,"CephFS \u9700\u8981\u4e24\u4e2a Pool\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"data pool"),"\uff1a\u5b58\u653eobject"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"data pool"),"\uff1a\u5b58\u653e\u5143\u6570\u636e\uff0c\u53ef\u8bbe\u7f6e\u8f83\u9ad8\u526f\u672c\u7ea7\u522b\uff0c\u4e5f\u53ef\u8c03\u6574pool\u7684crush_ruleset\uff0c\u4f7f\u5176\u5728ssd\u4e0a\u5b58\u50a8\uff0c\u52a0\u5feb\u5ba2\u6237\u7aef\u54cd\u5e94\u901f\u5ea6\uff0c\u6211\u8fd9\u91cc\u76f4\u63a5\u4f7f\u7528\u9ed8\u8ba4",(0,a.kt)("inlineCode",{parentName:"li"},"crush_ruleset"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," # ceph osd pool create cephfs_data <pg_num>\n ceph osd pool create cephfs_data 128\n # ceph osd pool create cephfs_metadata <pg_num>\n ceph osd pool create cephfs_metadata 128\n")),(0,a.kt)("p",null,"\u901a\u5e38\uff0c\u5143\u6570\u636e\u6c60\u6700\u591a\u5177\u6709\u51e0GB\u7684\u6570\u636e\u3002\u56e0\u6b64\uff0c\u901a\u5e38\u5efa\u8bae\u4f7f\u7528\u8f83\u5c11\u7684PG\u3002\u5b9e\u9645\u4e0a\uff0c\u5927\u578b\u7fa4\u96c6\u901a\u5e38\u4f7f\u752864\u6216128\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8ba1\u7b97pg\u6570\u91cf\uff1a"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u96c6\u7fa4pg \u603b\u6570 = \uff08OSD \u603b\u6570* 100 \uff09/\u6700\u5927\u526f\u672c\u6570"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u4e2apool\u4e2dpg\u603b\u6570=\uff08OSD\u603b\u6570*100\uff09/ \u6700\u5927\u526f\u672c\u6570 \uff09/ \u6c60\u6570"),(0,a.kt)("li",{parentName:"ol"},"pg\u6570\u9700\u8981\u662f2\u7684\u6307\u6570\u5e42"))),(0,a.kt)("h3",{id:"\u65b0\u5efa-cephfs"},"\u65b0\u5efa CephFS"),(0,a.kt)("p",null,"\u65b0\u5efa CephFS \uff0c\u4f7f\u7528\u5148\u524d\u51c6\u5907\u597d\u7684\u5b58\u50a8\u6c60\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ceph fs new cephfs cephfs_metadata cephfs_data\n# \u67e5\u770bCephFS\n[root@stor1 ceph-cluster]\\# ceph fs ls\nname: cephfs, metadata pool: cephfs_metadata, data pools: [cephfs_data ]\n")),(0,a.kt)("p",null,"\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf\u540e\uff0c\u60a8\u7684MDS\u5c06\u80fd\u591f\u8fdb\u5165\u6d3b\u52a8\u72b6\u6001\u3002\u4f8b\u5982\uff0c\u5728\u5355\u4e2aMDS\u7cfb\u7edf\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@stor1 ceph-cluster]\\# ceph mds stat\ncephfs:1 {0=stor1=up:active}\n")),(0,a.kt)("h2",{id:"\u6302\u8f7d-cephfs"},"\u6302\u8f7d CephFS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir /mnt/mycephfs\n# \u5728\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u4e0b\n[root@stor1 ceph-cluster]\\# cat ceph.client.admin.keyring \n[client.admin]\n        key = AQCKK9peJI/5LhAAyxIQ8TSsIugVQLpbz5EyOg==\n        caps mds = "allow *"\n        caps mgr = "allow *"\n        caps mon = "allow *"\n        caps osd = "allow *"\n')),(0,a.kt)("p",null,"\u8bb0\u5f55\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u503c\uff0c\u5e76\u521b\u5efa\u7ba1\u7406\u8d26\u6237\u5bc6\u94a5\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8f91\u8be5\u6587\u4ef6\nvim /etc/ceph/admin.secret\n# -------- \u5c06\u4e0a\u65b9\u8bb0\u5f55\u7684key\u503c\u653e\u7f6e\u4e8e\u6b64 ----------\nAQCKK9peJI/5LhAAyxIQ8TSsIugVQLpbz5EyOg==\n")),(0,a.kt)("p",null,"\u2139\ufe0f \u8981\u5b89\u88c5\u542f\u7528\u4e86cephx\u8eab\u4efd\u9a8c\u8bc1\u7684Ceph\u6587\u4ef6\u7cfb\u7edf\uff0c\u5185\u6838\u5fc5\u987b\u901a\u8fc7\u96c6\u7fa4\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u9ed8\u8ba4\u540d\u79f0\u9009\u9879\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"guest"),"\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"mount.ceph"),"\u5c06\u81ea\u52a8\u5c1d\u8bd5\u5728\u5bc6\u94a5\u73af\u4e2d\u67e5\u627e\u79d8\u5bc6\u5bc6\u94a5\u3002"),(0,a.kt)("p",null,"\u6302\u8f7d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mount -t ceph 172.16.1.128:6789:/ /mnt/mycephfs -o name=admin,secretfile=/etc/ceph/admin.secret\n# \u6216\u8005\u76f4\u63a5\u4f7f\u7528\nsudo mount -t ceph 172.16.1.128:6789:/ /mnt/mycephfs -o name=admin,secret=AQCKK9peJI/5LhAAyxIQ8TSsIugVQLpbz5EyOg==\n")),(0,a.kt)("p",null,"\u2139\ufe0f\u6ce8\u610f\uff1amount\u65f6\uff0cmon\u8282\u70b9\u6709\u51e0\u4e2a\u5199\u51e0\u4e2a\uff0c\u5176\u95f4\u7528\u9017\u53f7\u8fdb\u884c\u5206\u5272\uff0c\u6bd4\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"mount -t ceph 172.16.1.128:6789,172.16.1.136:6789:/")),(0,a.kt)("p",null,"\u68c0\u67e5\u6302\u8f7d\u72b6\u51b5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@stor1 ceph-cluster]\\# mount | grep /mnt/mycephfs\n172.16.1.128:6789:/ on /mnt/mycephfs type ceph (rw,relatime,name=admin,secret=<hidden>,acl,wsize=16777216)\n")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard"),"\u4e2d\u67e5\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"CephFS"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/ceph-dashboard/ceph-dashboard-2.png",alt:null,title:"\u5728`Dashboard`\u4e2d\u67e5\u770b`CephFS`"})),(0,a.kt)("h2",{id:"mount-cephfs-using-fuse"},"MOUNT CEPHFS USING FUSE"),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://docs.ceph.com/docs/nautilus/cephfs/fuse/#mount-cephfs-using-fuse"},"https://docs.ceph.com/docs/nautilus/cephfs/fuse/#mount-cephfs-using-fuse")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cephFS Documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ceph.com/docs/nautilus/cephfs/"},"https://docs.ceph.com/docs/nautilus/cephfs/")),(0,a.kt)("li",{parentName:"ul"},"mount cephFS: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ceph.com/docs/nautilus/cephfs/kernel/"},"https://docs.ceph.com/docs/nautilus/cephfs/kernel/")),(0,a.kt)("li",{parentName:"ul"},"PG \u5728\u7ebf\u8ba1\u7b97\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://ceph.io/pgcalc/"},"https://ceph.io/pgcalc/"))))}u.isMDXComponent=!0}}]);