"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[7021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,N=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(N,i(i({ref:t},d),{},{components:n})):a.createElement(N,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i="NFS \u57fa\u7840\u53ca\u5b9e\u6218",s={unversionedId:"LinuxBasics/FileSystem/NFS \u57fa\u7840\u53ca\u5b9e\u6218",id:"LinuxBasics/FileSystem/NFS \u57fa\u7840\u53ca\u5b9e\u6218",title:"NFS \u57fa\u7840\u53ca\u5b9e\u6218",description:"NFS \u7b80\u4ecb",source:"@site/docs/LinuxBasics/FileSystem/NFS \u57fa\u7840\u53ca\u5b9e\u6218.md",sourceDirName:"LinuxBasics/FileSystem",slug:"/LinuxBasics/FileSystem/NFS \u57fa\u7840\u53ca\u5b9e\u6218",permalink:"/docs/LinuxBasics/FileSystem/NFS \u57fa\u7840\u53ca\u5b9e\u6218",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/FileSystem/NFS \u57fa\u7840\u53ca\u5b9e\u6218.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"MinIO in Docker",permalink:"/docs/LinuxBasics/FileSystem/MinIO/MinIO in Docker"},next:{title:"SAMBA \u57fa\u7840\u53ca\u5b9e\u6218",permalink:"/docs/LinuxBasics/FileSystem/SAMBA \u57fa\u7840\u53ca\u5b9e\u6218"}},o={},p=[{value:"NFS \u7b80\u4ecb",id:"nfs-\u7b80\u4ecb",level:2},{value:"\u5b9e\u8df5",id:"\u5b9e\u8df5",level:2},{value:"Server",id:"server",level:3},{value:"Client",id:"client",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u63d0\u5347\u5b89\u5168\u6027",id:"\u63d0\u5347\u5b89\u5168\u6027",level:3},{value:"\u63d0\u5347\u6027\u80fd",id:"\u63d0\u5347\u6027\u80fd",level:3},{value:"NFS\u5171\u4eab\u53c2\u6570",id:"nfs\u5171\u4eab\u53c2\u6570",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nfs-\u57fa\u7840\u53ca\u5b9e\u6218"},"NFS \u57fa\u7840\u53ca\u5b9e\u6218"),(0,r.kt)("h2",{id:"nfs-\u7b80\u4ecb"},"NFS \u7b80\u4ecb"),(0,r.kt)("p",null,"NFS\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Network File System"),"\u7684\u7f29\u5199\u53ca\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"NFS"),"\u4e3b\u8981\u529f\u80fd\u662f\u901a\u8fc7\u5c40\u57df\u7f51\u7edc\u8ba9\u4e0d\u540c\u7684\u4e3b\u673a\u7cfb\u7edf\u4e4b\u95f4\u53ef\u4ee5\u5171\u4eab\u6587\u4ef6\u6216\u76ee\u5f55\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"NFS"),"\u7cfb\u7edf\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Windows"),"\u7f51\u7edc\u5171\u4eab\u3001\u7f51\u7edc\u9a71\u52a8\u5668\u7c7b\u4f3c, \u53ea\u4e0d\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"windows"),"\u7528\u4e8e\u5c40\u57df\u7f51, NFS\u7528\u4e8e\u4f01\u4e1a\u96c6\u7fa4\u67b6\u6784\u4e2d, \u5982\u679c\u662f\u5927\u578b\u7f51\u7ad9, \u4f1a\u7528\u5230\u66f4\u590d\u6742\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf",(0,r.kt)("inlineCode",{parentName:"p"},"FastDFS,glusterfs,HDFS")),(0,r.kt)("p",null,"NFS \u5b9e\u73b0\u539f\u7406\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/4809537-7571bd5bc6c54b05.png",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u8fdb\u7a0b\u8bbf\u95eeNFS\u5ba2\u6237\u7aef\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u51fd\u6570\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406"),(0,r.kt)("li",{parentName:"ol"},"NFS\u5ba2\u6237\u7aef\u901a\u8fc7TCP/IP\u7684\u65b9\u5f0f\u4f20\u9012\u7ed9NFS\u670d\u52a1\u7aef\u3002"),(0,r.kt)("li",{parentName:"ol"},"NFS\u670d\u52a1\u7aef\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u4f1a\u5148\u8c03\u7528portmap\u8fdb\u7a0b\u8fdb\u884c\u7aef\u53e3\u6620\u5c04\u3002"),(0,r.kt)("li",{parentName:"ol"},"nfsd\u8fdb\u7a0b\u7528\u4e8e\u5224\u65adNFS\u5ba2\u6237\u7aef\u662f\u5426\u62e5\u6709\u6743\u9650\u8fde\u63a5NFS\u670d\u52a1\u7aef\u3002"),(0,r.kt)("li",{parentName:"ol"},"Rpc.mount\u8fdb\u7a0b\u5224\u65ad\u5ba2\u6237\u7aef\u662f\u5426\u6709\u5bf9\u5e94\u7684\u6743\u9650\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ol"},"idmap\u8fdb\u7a0b\u5b9e\u73b0\u7528\u6237\u6620\u5c04\u548c\u538b\u7f29"),(0,r.kt)("li",{parentName:"ol"},"\u6700\u540eNFS\u670d\u52a1\u7aef\u4f1a\u5c06\u5bf9\u5e94\u8bf7\u6c42\u7684\u51fd\u6570\u8f6c\u6362\u4e3a\u672c\u5730\u80fd\u8bc6\u522b\u7684\u547d\u4ee4\uff0c\u4f20\u9012\u81f3\u5185\u6838\uff0c\u7531\u5185\u6838\u9a71\u52a8\u786c\u4ef6\u3002")),(0,r.kt)("h2",{id:"\u5b9e\u8df5"},"\u5b9e\u8df5"),(0,r.kt)("h3",{id:"server"},"Server"),(0,r.kt)("p",null,"\u9884\u5148\u51c6\u5907\u4e0e\u5b89\u88c5\u542f\u52a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9884\u5148\u51c6\u5907\n$ systemctl disable firewalld\n$ systemctl disable firewalld\n$ sed -ri '#^SELINUX=#cSELINUX=Disabled' /etc/selinux/config\n$ setenforce 0\n# \u5b89\u88c5nfs\n$ yum -y install nfs-utils\n# \u542f\u52a8\n$ systemctl enable rpcbind nfs-server\n$ systemctl restart rpcbind nfs-server\n")),(0,r.kt)("p",null,"NFS\u670d\u52a1\u7a0b\u5e8f\u7684\u914d\u7f6e\u6587\u4ef6\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/exports"),"\u3002"),(0,r.kt)("p",null,"\u8f93\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"/data"),"\u76ee\u5f55\u4ee5\u5171\u4eab\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vim /etc/exports   \n/data   172.16.1.0/24(rw,sync,all_squash)\n$ mkdir /data\n$ chown -R nfsnobody.nfsnobody /data\n# \u68c0\u67e5\u6587\u4ef6\n$  cat /var/lib/nfs/etab\n")),(0,r.kt)("p",null,"\ud83d\udc81\u200d\u2640\ufe0f\u6ce8\u610f\uff1aNFS\u5171\u4eab\u76ee\u5f55\u4f1a\u8bb0\u5f55\u81f3",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/nfs/etab"),"\uff0c\u5982\u679c\u8be5\u76ee\u5f55\u4e0d\u5b58\u5728\u5171\u4eab\u4fe1\u606f\uff0c\u8bf7\u68c0\u67e5/",(0,r.kt)("inlineCode",{parentName:"p"},"etc/exports"),"\u662f\u5426\u914d\u7f6e\u9519\u8bef\u3002"),(0,r.kt)("h3",{id:"client"},"Client"),(0,r.kt)("p",null,"NFS\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u6b65\u9aa4\u4e5f\u5341\u5206\u7b80\u5355\u3002\u5148\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"showmount"),"\u547d\u4ee4,\u67e5\u8be2",(0,r.kt)("inlineCode",{parentName:"p"},"NFS"),"\u670d\u52a1\u5668\u7684\u8fdc\u7a0b\u5171\u4eab\u4fe1\u606f\uff0c\u5176\u8f93\u51fa\u683c\u5f0f\u4e3a\u201c\u5171\u4eab\u7684\u76ee\u5f55\u540d\u79f0 \u5141\u8bb8\u4f7f\u7528\u5ba2\u6237\u7aef\u5730\u5740\u201d\u3002"),(0,r.kt)("p",null,"\u5b89\u88c5\u5ba2\u6237\u7aef\u5de5\u5177\u5e76\u67e5\u770b\u6302\u8f7d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yum -y install nfs-utils rpcbind\n# \u4ec5\u542f\u52a8rpc\u670d\u52a1\u5373\u53ef\n$ systemctl restart rpcbind\n\n# \u5ba2\u6237\u7aef\u67e5\u770b\u670d\u52a1\u5668\u7aefnfs\u4fe1\u606f\n$ showmount -e 172.16.1.111\nExport list for 172.16.1.111:\n/data 172.16.1.0/24\n\n# \u6302\u8f7d\n$ mkdir /nfsdir\n$ mount -t nfs 172.16.1.111:/data /nfsdir\n")),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u8bbe\u7f6e\u5f00\u673a\u81ea\u52a8\u6302\u8f7d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8f91fstab\u6587\u4ef6\n$ sudo vim /etc/fstab\n172.16.1.111:/data /nfsdir nfs defaults 0 0\n\n# \u9a8c\u8bc1fstab\u662f\u5426\u5199\u6b63\u786e\n$ mount -a\n")),(0,r.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("h3",{id:"\u63d0\u5347\u5b89\u5168\u6027"},"\u63d0\u5347\u5b89\u5168\u6027"),(0,r.kt)("p",null,"\u5728\u4f01\u4e1a\u5de5\u4f5c\u573a\u666f\uff0c\u901a\u5e38\u60c5\u51b5NFS\u670d\u52a1\u5668\u5171\u4eab\u7684\u53ea\u662f\u666e\u901a\u9759\u6001\u6570\u636e\uff08\u56fe\u7247\u3001\u9644\u4ef6\u3001\u89c6\u9891\uff09\uff0c\u4e0d\u9700\u8981\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"suid\u3001exec"),"\u7b49\u6743\u9650\uff0c\u6302\u8f7d\u7684\u8fd9\u4e2a\u6587\u4ef6\u7cfb\u7edf\u53ea\u80fd\u4f5c\u4e3a\u6570\u636e\u5b58\u53d6\u4e4b\u7528\uff0c\u65e0\u6cd5\u6267\u884c\u7a0b\u5e8f\uff0c\u5bf9\u4e8e\u5ba2\u6237\u7aef\u6765\u8bb2\u589e\u52a0\u4e86\u5b89\u5168\u6027\u3002\u4f8b\u5982: \u5f88\u591a\u6728\u9a6c\u7be1\u6539\u7ad9\u70b9\u6587\u4ef6\u90fd\u662f\u7531\u4e0a\u4f20\u5165\u53e3\u4e0a\u4f20\u7684\u7a0b\u5e8f\u5230\u5b58\u50a8\u76ee\u5f55\u3002\u7136\u540e\u6267\u884c\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u901a\u8fc7mount -o\u6307\u5b9a\u6302\u8f7d\u53c2\u6570\uff0c\u7981\u6b62\u4f7f\u7528suid\uff0cexec\uff0c\u589e\u52a0\u5b89\u5168\u6027\u80fd\n$mount -t nfs -o nosuid,noexec,nodev 172.16.1.111:/data /mnt\n")),(0,r.kt)("h3",{id:"\u63d0\u5347\u6027\u80fd"},"\u63d0\u5347\u6027\u80fd"),(0,r.kt)("p",null,"\u6709\u65f6\u4e5f\u9700\u8981\u8003\u8651\u6027\u80fd\u76f8\u5173\u53c2\u6570","[\u53ef\u9009]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#\u901a\u8fc7mount -o\u6307\u5b9a\u6302\u8f7d\u53c2\u6570\uff0c\u7981\u6b62\u66f4\u65b0\u76ee\u5f55\u53ca\u6587\u4ef6\u65f6\u95f4\u6233\u6302\u8f7d\n$ mount -t nfs -o noatime,nodiratime 172.16.1.111:/data /mnt\n")),(0,r.kt)("h3",{id:"nfs\u5171\u4eab\u53c2\u6570"},"NFS\u5171\u4eab\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"nfs\u5171\u4eab\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u4f5c\u7528"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rw*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bfb\u5199\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ro"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ea\u8bfb\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"root_squash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53NFS\u5ba2\u6237\u7aef\u4ee5root\u7ba1\u7406\u5458\u8bbf\u95ee\u65f6\uff0c\u6620\u5c04\u4e3aNFS\u670d\u52a1\u5668\u7684\u533f\u540d\u7528\u6237(\u4e0d\u5e38\u7528)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"no_root_squash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53NFS\u5ba2\u6237\u7aef\u4ee5root\u7ba1\u7406\u5458\u8bbf\u95ee\u65f6\uff0c\u6620\u5c04\u4e3aNFS\u670d\u52a1\u5668\u7684root\u7ba1\u7406\u5458(\u4e0d\u5e38\u7528)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"all_squash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u8bbaNFS\u5ba2\u6237\u7aef\u4f7f\u7528\u4ec0\u4e48\u8d26\u6237\u8bbf\u95ee\uff0c\u5747\u6620\u5c04\u4e3aNFS\u670d\u52a1\u5668\u7684\u533f\u540d\u7528\u6237(\u5e38\u7528)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"no_all_squash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u8bbaNFS\u5ba2\u6237\u7aef\u4f7f\u7528\u4ec0\u4e48\u8d26\u6237\u8bbf\u95ee\uff0c\u90fd\u4e0d\u8fdb\u884c\u538b\u7f29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sync*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u540c\u65f6\u5c06\u6570\u636e\u5199\u5165\u5230\u5185\u5b58\u4e0e\u786c\u76d8\u4e2d\uff0c\u4fdd\u8bc1\u4e0d\u4e22\u5931\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"async"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f18\u5148\u5c06\u6570\u636e\u4fdd\u5b58\u5230\u5185\u5b58\uff0c\u7136\u540e\u518d\u5199\u5165\u786c\u76d8\uff1b\u8fd9\u6837\u6548\u7387\u66f4\u9ad8\uff0c\u4f46\u53ef\u80fd\u4f1a\u4e22\u5931\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"anonuid*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6eall_squash\u4f7f\u7528,\u6307\u5b9aNFS\u7684\u7528\u6237UID,\u5fc5\u987b\u5b58\u5728\u7cfb\u7edf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"anongid*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6eall_squash\u4f7f\u7528,\u6307\u5b9aNFS\u7684\u7528\u6237UID,\u5fc5\u987b\u5b58\u5728\u7cfb\u7edf")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);