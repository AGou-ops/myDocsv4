"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[1541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,d=u["".concat(o,".").concat(k)]||u[k]||c[k]||l;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},i="KVM Basic",s={unversionedId:"LinuxBasics/KVM/KVM Basic",id:"LinuxBasics/KVM/KVM Basic",title:"KVM Basic",description:"KVM \u7b80\u4ecb",source:"@site/docs/LinuxBasics/KVM/KVM Basic.md",sourceDirName:"LinuxBasics/KVM",slug:"/LinuxBasics/KVM/KVM Basic",permalink:"/docs/LinuxBasics/KVM/KVM Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/KVM/KVM Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"KVM <2> VMware Station",permalink:"/docs/LinuxBasics/KVM/KVM 2 VMware Station"},next:{title:"kvm_install.sh",permalink:"/docs/LinuxBasics/KVM/kvm_install.sh"}},o={},p=[{value:"KVM \u7b80\u4ecb",id:"kvm-\u7b80\u4ecb",level:2},{value:"kvm \u73af\u5883\u914d\u7f6e\u4e0e\u5b89\u88c5",id:"kvm-\u73af\u5883\u914d\u7f6e\u4e0e\u5b89\u88c5",level:2},{value:"\u521b\u5efa\u3001\u514b\u9686\u865a\u62df\u673a",id:"\u521b\u5efa\u514b\u9686\u865a\u62df\u673a",level:2},{value:"\u7ba1\u7406\u865a\u62df\u673a\u5e38\u7528\u547d\u4ee4",id:"\u7ba1\u7406\u865a\u62df\u673a\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u4f7f\u7528 WebVirtMgr \u865a\u62df\u673a\u7ba1\u7406\u7684 web gui",id:"\u4f7f\u7528-webvirtmgr-\u865a\u62df\u673a\u7ba1\u7406\u7684-web-gui",level:2},{value:"\u89e3\u51b3\u865a\u62df\u673a\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\u95ee\u9898",id:"\u89e3\u51b3\u865a\u62df\u673a\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\u95ee\u9898",level:2},{value:"\u9644\uff1akvm \u5b89\u88c5\u811a\u672c",id:"\u9644kvm-\u5b89\u88c5\u811a\u672c",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kvm-basic"},"KVM Basic"),(0,a.kt)("h1",{id:"kvm"},"KVM"),(0,a.kt)("h2",{id:"kvm-\u7b80\u4ecb"},"KVM \u7b80\u4ecb"),(0,a.kt)("p",null,"KVM (\u5168\u79f0\u662f Kernel-based Virtual Machine) \u662f Linux \u4e0b x86 \u786c\u4ef6\u5e73\u53f0\u4e0a\u7684\u5168\u529f\u80fd\u865a\u62df\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u4e00\u4e2a\u53ef\u52a0\u8f7d\u7684\u5185\u6838\u6a21\u5757 kvm.ko \u63d0\u4f9b\u548c\u865a\u62df\u5316\u6838\u5fc3\u67b6\u6784\u548c\u5904\u7406\u5668\u89c4\u8303\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 KVM \u53ef\u5141\u8bb8\u591a\u4e2a\u5305\u62ec Linux \u548c Windows \u6bcf\u4e2a\u865a\u62df\u673a\u6709\u79c1\u6709\u7684\u786c\u4ef6\uff0c\u5305\u62ec\u7f51\u5361\u3001\u78c1\u76d8\u4ee5\u53ca\u56fe\u5f62\u9002\u914d\u5361\u7b49\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u865a\u62df\u5316\u662f\u4e91\u8ba1\u7b97\u7684\u57fa\u7840\u3002\u7b80\u5355\u7684\u8bf4\uff0c\u865a\u62df\u5316\u4f7f\u5f97\u5728\u4e00\u53f0\u7269\u7406\u7684\u670d\u52a1\u5668\u4e0a\u53ef\u4ee5\u8dd1\u591a\u53f0\u865a\u62df\u673a\uff0c\u865a\u62df\u673a\u5171\u4eab\u7269\u7406\u673a\u7684 CPU\u3001\u5185\u5b58\u3001IO \u786c\u4ef6\u8d44\u6e90\uff0c\u4f46\u903b\u8f91\u4e0a\u865a\u62df\u673a\u4e4b\u95f4\u662f\u76f8\u4e92\u9694\u79bb\u7684\u3002\n\u7269\u7406\u673a\u6211\u4eec\u4e00\u822c\u79f0\u4e3a\u5bbf\u4e3b\u673a\uff08Host\uff09\uff0c\u5bbf\u4e3b\u673a\u4e0a\u9762\u7684\u865a\u62df\u673a\u79f0\u4e3a\u5ba2\u6237\u673a\uff08Guest\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"KVM\u5de5\u4f5c\u539f\u7406"),"\uff1a\u7528\u6237\u6a21\u5f0f\u7684QEMU\u901a\u8fc7ioctl\u8fdb\u5165\u5185\u6838\u6a21\u5f0f\uff0ckvm\u6a21\u5757\u4e3a\u865a\u62df\u673a\u521b\u5efa\u865a\u62df\u5185\u5b58\uff0c\u865a\u62dfCPU\u540e\u6267\u884cVMLAUCH\u6307\u4ee4\u8fdb\u5165\u5ba2\u6237\u6a21\u5f0f\u3002\u52a0\u8f7dGuest OS\u5e76\u6267\u884c\u3002\u5982\u679cGuest OS\u53d1\u751f\u5916\u90e8\u4e2d\u65ad\u6216\u8005\u5f71\u5b50\u9875\u8868\u5374\u4e5f\u4e4b\u7c7b\u7684\u60c5\u51b5\uff0c\u4f1a\u6682\u505cGuest OS\u7684\u6267\u884c\uff0c\u9000\u51fa\u5ba2\u6237\u6a21\u5f0f\u8fdb\u884c\u5f02\u5e38\u5904\u7406\uff0c\u6267\u884c\u5ba2\u6237\u4ee3\u7801\u3002\u5982\u679c\u53d1\u751fI/O\u4e8b\u4ef6\u6216\u8005\u4fe1\u53f7\u961f\u5217\u6709\u4fe1\u53f7\u5230\u8fbe\uff0c\u5c31\u4f1a\u8fdb\u5165\u7528\u6237\u6a21\u5f0f\u5904\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img2018.cnblogs.com/blog/1630703/201910/1630703-20191007235241385-873683991.png",alt:null,title:"kvm\u539f\u7406"})),(0,a.kt)("p",null,"KVM \u7531\u5904\u4e8e\u5185\u6838\u6001\u7684 KVM \u6a21\u5757\u548c\u7528\u6237\u6001\u7684 QEMU \u4e24\u90e8\u5206\u6784\u6210\u3002\u5185\u6838\u6a21\u5757\u5b9e\u73b0\u4e86 CPU \u548c\u5185\u5b58\u865a\u62df\u5316\u7b49\u51b3\u5b9a\u5173\u952e\u6027\u80fd\u548c\u6838\u5fc3\u5b89\u5168\u7684\u529f\u80fd\u5e76\u5411\u7528\u6237\u7a7a\u95f4\u63d0\u4f9b\u4e86\u4f7f\u7528\u8fd9\u4e9b\u529f\u80fd\u7684\u63a5\u53e3\uff0cQEMU \u5229\u7528 KVM \u6a21\u5757\u63d0\u4f9b\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u8bbe\u5907\u6a21\u62df\u3001 IO \u865a\u62df\u5316\u548c\u7f51\u7edc\u865a\u62df\u5316\u7b49\u3002\u5355\u4e2a\u865a\u62df\u673a\u662f\u5bbf\u4e3b\u673a\u4e0a\u7684\u4e00\u4e2a\u666e\u901a QEMU \u8fdb\u7a0b\uff0c\u865a\u62df\u673a\u4e2d\u7684 CPU \u6838\uff08vCPU\uff09\u662f QEMU \u7684\u4e00\u4e2a\u7ebf\u7a0b\uff0cVM \u7684\u7269\u7406\u5730\u5740\u7a7a\u95f4\u662f QEMU \u7684\u865a\u62df\u5730\u5740\u7a7a\u95f4"),(0,a.kt)("p",null,"\u56e0\u6b64\u5728\u865a\u62df\u673a\u8fd0\u884c\u65f6\uff0c\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a"),(0,a.kt)("p",null,"\u5ba2\u6237\u6a21\u5f0f\uff1a\u6267\u884c\u975eI/O\u7684\u5ba2\u6237\u4ee3\u7801\uff0c\u865a\u62df\u673a\u8fd0\u884c\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u6a21\u5f0f\uff1a\u4ee3\u8868\u7528\u6237\u6267\u884cI/O\u6307\u4ee4\uff0cQEMU\u8fd0\u884c\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\u3002"),(0,a.kt)("p",null,"\u5185\u6838\u6a21\u5f0f\uff1a\u5b9e\u73b0\u5ba2\u6237\u6a21\u5f0f\u7684\u5207\u6362\uff0c\u5904\u7406\u56e0\u4e3aI/O\u6216\u8005\u5176\u4ed6\u6307\u4ee4\u5f15\u8d77\u7684\u4ece\u5ba2\u6237\u6a21\u5f0f\u9000\u51fa\uff08VM_EXIT\uff09\u3002kvm\u6a21\u5757\u8fd0\u884c\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\u3002"),(0,a.kt)("p",null,"kvm\u6a21\u578b\u4e2d\uff0c\u6bcf\u4e00\u4e2aGuest OS\u90fd\u662f\u4f5c\u4e3a\u4e00\u4e2a\u6807\u51c6\u7684Linux\u8fdb\u7a0b\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528Linux\u8fdb\u7a0b\u7ba1\u7406\u547d\u4ee4\u7ba1\u7406\u3002"),(0,a.kt)("h2",{id:"kvm-\u73af\u5883\u914d\u7f6e\u4e0e\u5b89\u88c5"},"kvm \u73af\u5883\u914d\u7f6e\u4e0e\u5b89\u88c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u68c0\u67e5\u4e3b\u673a\u662f\u5426\u652f\u6301\u865a\u62df\u5316\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"egrep -o 'vmx|svm' /proc/cpuinfo\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c\u5173\u95ed\u9632\u706b\u5899\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"SElinux"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop firewalld\nsystemctl disable firewalld\nsetenforce 0\nsed -ri 's/^(SELINUX=).*/\\1disabled/g' /etc/selinux/config\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5fc5\u8981\u5de5\u5177\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install epel-release vim wget net-tools unzip zip gcc gcc-c++ bridge-utils\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5 kvm\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install kvm qemu-kvm qemu-kvm-tools qemu-img virt-manager libvirt libvirt-python libvirt-client virt-install virt-viewer bridge-utils libguestfs-tools python-virtinst\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"libvirtd"),"\u4e3a\u5f00\u673a\u81ea\u542f\u9879\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable libvirtd\n# \u91cd\u542f\u4e3b\u673a\nreboot\n")),(0,a.kt)("p",null,"\u91cd\u542f\u4e4b\u540e\u68c0\u67e5\u662f\u5426\u52a0\u8f7d",(0,a.kt)("inlineCode",{parentName:"p"},"kvm"),"\u6a21\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@kvm ~]\\# lsmod | grep kvm\nkvm_intel             188688  0 \nkvm                   636965  1 kvm_intel\nirqbypass              13503  1 kvm\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e kvm \u670d\u52a1\u5668\u7f51\u7edc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/sysconfig/network-scripts/\ncp ifcfg-ens33 ifcfg-br0\n\n# \u7f16\u8f91 ifcfg-ens33 \u6587\u4ef6\uff0c\u5728\u539f\u5148\u57fa\u7840\u4e0a\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\nNM_CONTROLLED=no\nBRIDGE=br0\n\n# \u7f16\u8f91 ifcfg-br0 \u6587\u4ef6\uff0c\u4fee\u6539\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\nTYPE=Bridge\nNAME=br0\nDEVICE=br0\n")),(0,a.kt)("p",null,"\u91cd\u542f\u7f51\u7edc\u670d\u52a1\uff0c\u67e5\u770b\u7f51\u5361\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@kvm network-scripts]\\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host \n       valid_lft forever preferred_lft forever\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast master br0 state UP group default qlen 1000\n    link/ether 00:0c:29:db:c4:08 brd ff:ff:ff:ff:ff:ff\n3: br0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000\n    link/ether 00:0c:29:db:c4:08 brd ff:ff:ff:ff:ff:ff\n    inet 172.16.1.140/24 brd 172.16.1.255 scope global noprefixroute br0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::20c:29ff:fedb:c408/64 scope link \n       valid_lft forever preferred_lft forever\n")),(0,a.kt)("p",null,"\u53d1\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"ens33"),"\u539f\u6765\u7684ip\u662f\u4e0d\u663e\u793a\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"br0"),"\u7f51\u5361\u5360\u7528\u4e86\uff0c\u5e76\u4e14\u6b64\u65f6\u7269\u7406\u673a\u4e0a\u7684Linux\u7cfb\u7edf\u7684ip\u662f\u88abbr0\u8986\u76d6\u6389\u7684\uff0c\u539f\u5148\u7684ip\u5730\u5740\u4e0d\u80fd\u518d\u4f7f\u7528\u4e86\u3002\u6b64\u65f6\u6211\u4eec\u770b\u5230br0\u7684ip\u5730\u5740\u5c31\u662f\u8fd9\u53f0\u7269\u7406\u673aip\u5730\u5740\uff0c\u8fd9\u4e0d\u662f\u865a\u62df\u673a\u7684\u5730\u5740"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img2018.cnblogs.com/blog/1501874/201902/1501874-20190227234758267-625194066.png",alt:null,title:"\u6865\u63a5\u7f51\u7edc\u6a21\u578b"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"virsh -c qemu:///system list\nvirsh --version\nvirt-install --version\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8f6f\u8fde\u63a5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /usr/libexec/qemu-kvm /usr/bin/qemu-kvm\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5f53\u524d\u7f51\u6865\u4fe1\u606f\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@kvm ~]\\# brctl show\nbridge name     bridge id               STP enabled     interfaces\nbr0             8000.000c29dbc408       no              ens33\nvirbr0          8000.5254008ad9e8       yes             virbr0-nic\n")),(0,a.kt)("p",null,"\u7531\u4e8e\u5f53\u524d\u672a\u521b\u5efa\u4efb\u4f55\u865a\u62df\u673a\uff0c\u6240\u4ee5\u6682\u65f6\u6ca1\u6709\u865a\u62df\u7f51\u5361\u51fa\u73b0\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u514b\u9686\u865a\u62df\u673a"},"\u521b\u5efa\u3001\u514b\u9686\u865a\u62df\u673a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'virt-install --name=elk01 --memory=2048,maxmemory=3072 --vcpus=2,maxvcpus=2 --os-type=linux --os-variant=rhel6 --location=/data/iso/CentOS-6.10-x86_64-minimal.iso --disk path=/data/elk01.img,size=30 --bridge=br0 --graphics=none --console=pty,target_type=serial --extra-args="console=tty0 console=ttyS0"\n')),(0,a.kt)("p",null,"\u26a0\ufe0f\u6ce8\u610f\uff1a\u955c\u50cf\u6587\u4ef6\u4e0d\u8981\u653e\u7f6e\u4e8e\u6839\u5bb6\u76ee\u5f55\u4e0b\uff0c\u4e0d\u7136\u4f1a\u8fd0\u884c\u5931\u8d25\uff0c\u663e\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"Permission Denied"),"\u9519\u8bef"),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--name "),"\u6307\u5b9a\u865a\u62df\u673a\u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--memory "),"\u6307\u5b9a\u5206\u914d\u7ed9\u865a\u62df\u673a\u7684\u5185\u5b58\u8d44\u6e90\u5927\u5c0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxmemory "),"\u6307\u5b9a\u53ef\u8c03\u8282\u7684\u6700\u5927\u5185\u5b58\u8d44\u6e90\u5927\u5c0f\uff0c\u56e0\u4e3aKVM\u652f\u6301\u70ed\u8c03\u6574\u865a\u62df\u673a\u7684\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--vcpus "),"\u6307\u5b9a\u5206\u914d\u7ed9\u865a\u62df\u673a\u7684CPU\u6838\u5fc3\u6570\u91cf"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxvcpus "),"\u6307\u5b9a\u53ef\u8c03\u8282\u7684\u6700\u5927CPU\u6838\u5fc3\u6570\u91cf"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--os-type")," \u6307\u5b9a\u865a\u62df\u673a\u5b89\u88c5\u7684\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--os-variant "),"\u6307\u5b9a\u7cfb\u7edf\u7684\u53d1\u884c\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--location "),"\u6307\u5b9aISO\u955c\u50cf\u6587\u4ef6\u6240\u5728\u7684\u8def\u5f84\uff0c\u652f\u6301\u4f7f\u7528\u7f51\u7edc\u8d44\u6e90\u8def\u5f84\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ef\u4ee5\u4f7f\u7528URL"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--disk path "),"\u6307\u5b9a\u865a\u62df\u786c\u76d8\u6240\u5b58\u653e\u7684\u8def\u5f84\u53ca\u540d\u79f0\uff0csize \u5219\u662f\u6307\u5b9a\u8be5\u786c\u76d8\u7684\u53ef\u7528\u5927\u5c0f\uff0c\u5355\u4f4d\u662fG"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--bridge "),"\u6307\u5b9a\u4f7f\u7528\u54ea\u4e00\u4e2a\u6865\u63a5\u7f51\u5361\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f7f\u7528\u6865\u63a5\u7684\u7f51\u7edc\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--graphics "),"\u6307\u5b9a\u662f\u5426\u5f00\u542f\u56fe\u5f62"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--console "),"\u5b9a\u4e49\u7ec8\u7aef\u7684\u5c5e\u6027\uff0ctarget_type \u5219\u662f\u5b9a\u4e49\u7ec8\u7aef\u7684\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--extra-args "),"\u5b9a\u4e49\u7ec8\u7aef\u989d\u5916\u7684\u53c2\u6570")),(0,a.kt)("p",null,"\u514b\u9686\u865a\u62df\u673a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"virt-clone -o elk04 -n elk05 -f /data/elk05.img\n")),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-o"),"\u540e\u8ddf\u65e7\u7684\u7cfb\u7edf\u7684\u540d\u79f0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-n"),"\u540e\u8ddf\u514b\u9686\u540e\u7684\u65b0\u7cfb\u7edf\u7684\u540d\u79f0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-f"),"\u540e\u8ddf\u514b\u9686\u540e\u7684\u7cfb\u7edf\u5b58\u653e\u7684\u4f4d\u7f6e"))),(0,a.kt)("p",null,"\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"windows server 2008"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"virt-install -n windows_vm04 -r 8196 --vcpus=4 --os-type=windows --accelerate -c /data/vpsdata/img/virtio-win.iso --disk path=/data/vpsdata/img/cn_windows_server_2008_r2.iso,device=cdrom --disk path=/data/vpsdata/vps/vm04.img,format=qcow2,bus=virtio --network bridge=br0 --vnc --vncport=5904 --vnclisten=0.0.0.0 --force --autostart\n")),(0,a.kt)("p",null,"\u521b\u5efa\u5b8c\u6210\u4e4b\u540e\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"VNC"),"\u8fdc\u7a0b\u8fde\u63a5\u8f6f\u4ef6\u8fdb\u884c\u5b89\u88c5."),(0,a.kt)("h2",{id:"\u7ba1\u7406\u865a\u62df\u673a\u5e38\u7528\u547d\u4ee4"},"\u7ba1\u7406\u865a\u62df\u673a\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("p",null,"\u67e5\u770b\u865a\u62df\u673a\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"virsh list --all        # \u5217\u51fa\u6240\u6709\u865a\u62df\u673a\nvirsh dominfo elk01     # \u663e\u793a\u865a\u62df\u673a\u4fe1\u606f\nvirt-top        # \u663e\u793a\u865a\u62df\u673a\u5185\u5b58\u548ccpu\u4f7f\u7528\u60c5\u51b5\uff0c\u8be5\u5de5\u5177\u9700\u8981\u5355\u72ec\u5b89\u88c5\nvirt-df elk01       # \u663e\u793a\u865a\u62df\u673a\u5206\u533a\u6302\u8f7d\u4fe1\u606f\n")),(0,a.kt)("p",null,"\u7ba1\u7406\u865a\u62df\u673a\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"virsh console elk01          # \u8fdb\u5165\u6307\u5b9a\u7684\u865a\u62df\u673a\uff0c\u8fdb\u5165\u7684\u65f6\u5019\u8fd8\u9700\u8981\u6309\u4e00\u4e0b\u56de\u8f66\nvirsh start elk01          # \u542f\u52a8\u865a\u62df\u673a\nvirsh shutdown elk01          # \u5173\u95ed\u865a\u62df\u673a\nvirsh destroy elk01          # \u5f3a\u5236\u505c\u6b62\u865a\u62df\u673a\nvirsh undefine elk01          # \u5f7b\u5e95\u9500\u6bc1\u865a\u62df\u673a\uff0c\u4f1a\u5220\u9664\u865a\u62df\u673a\u914d\u7f6e\u6587\u4ef6\uff0c\u4f46\u4e0d\u4f1a\u5220\u9664\u865a\u62df\u78c1\u76d8\nvirsh autostart elk01          # \u8bbe\u7f6e\u5bbf\u4e3b\u673a\u5f00\u673a\u65f6\u8be5\u865a\u62df\u673a\u4e5f\u5f00\u673a\nvirsh autostart --disable elk01          # \u89e3\u9664\u5f00\u673a\u542f\u52a8\nvirsh suspend elk01         # \u6302\u8d77\u865a\u62df\u673a\nvirsh resume elk01         # \u6062\u590d\u6302\u8d77\u7684\u865a\u62df\u673a\n")),(0,a.kt)("p",null,"\u7ed9\u865a\u62df\u673a\u6dfb\u52a0\u3001\u5220\u9664\u786c\u76d8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"virsh attach-disk kvm-1 /dev/sdb vbd --driver qemu --mode shareable\nvirsh detach-disk kvm vdb\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-webvirtmgr-\u865a\u62df\u673a\u7ba1\u7406\u7684-web-gui"},"\u4f7f\u7528 WebVirtMgr \u865a\u62df\u673a\u7ba1\u7406\u7684 web gui"),(0,a.kt)("p",null,"\u9879\u76ee\u5f00\u6e90\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/retspen/webvirtmgr"},"https://github.com/retspen/webvirtmgr")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u6240\u9700\u7a0b\u5e8f\u5305\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9996\u5148\u786e\u4fdd\u4e3b\u673a\u6709epel\u4ed3\u5e93\uff0c\u6ca1\u6709\u5219\u9700\u8981\u5148\u5b89\u88c5\nyum install epel-release\n\nyum -y install git python-pip libvirt-python libxml2-python python-websockify supervisor nginx\nyum -y install gcc python-devel\npip install numpy\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5python\u4f9d\u8d56\u5e76\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"Django"),"\u73af\u5883")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git://github.com/retspen/webvirtmgr.git\ncd webvirtmgr\nsudo pip install -r requirements.txt   # or python-pip (RedHat, Fedora, CentOS, OpenSuse)\n# \u521d\u59cb\u5316\u8d26\u6237\n./manage.py syncdb\n./manage.py collectstatic\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"nginx"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\nsudo mv webvirtmgr /var/www/\n")),(0,a.kt)("p",null,"Add file ",(0,a.kt)("inlineCode",{parentName:"p"},"webvirtmgr.conf")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"server {\n    listen 80 default_server;\n\n    server_name $hostname;\n    #access_log /var/log/nginx/webvirtmgr_access_log; \n\n    location /static/ {\n        root /var/www/webvirtmgr/webvirtmgr; # or /srv instead of /var\n        expires max;\n    }\n\n    location ~ .*\\.(js|css)$ {\n           proxy_pass http://127.0.0.1:8000;\n    }\n\n    location / {\n        proxy_pass http://127.0.0.1:8000;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-for $proxy_add_x_forwarded_for;\n        proxy_set_header Host $host:$server_port;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_connect_timeout 600;\n        proxy_read_timeout 600;\n        proxy_send_timeout 600;\n        client_max_body_size 1024M; # Set higher depending on your needs \n    }\n}\n")),(0,a.kt)("p",null,"Open nginx.conf out of ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6ce8\u91ca\u6389\u4ee5\u4e0b\u4fe1\u606f\n#    server {\n#        listen       80 default_server;\n#        server_name  localhost;\n#        root         /usr/share/nginx/html;\n#\n#        #charset koi8-r;\n#\n#        #access_log  /var/log/nginx/host.access.log  main;\n#\n#        # Load configuration files for the default server block.\n#        include /etc/nginx/default.d/*.conf;\n#\n#        location / {\n#        }\n#\n#        # redirect server error pages to the static page /40x.html\n#        #\n#        error_page  404              /404.html;\n#        location = /40x.html {\n#        }\n#\n#        # redirect server error pages to the static page /50x.html\n#        #\n#        error_page   500 502 503 504  /50x.html;\n#        location = /50x.html {\n#        }\n#    }\n")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c\u91cd\u542f nginx \u670d\u52a1\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl restart nginx")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"Supervisor"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bbe\u7f6eSupervisor\u5f00\u673a\u542f\u52a8\nsystemctl enable supervisor\n\nchown -R nginx:nginx /var/www/webvirtmgr\n")),(0,a.kt)("p",null,"Create file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/supervisord.d/webvirtmgr.ini")," with following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[program:webvirtmgr]\ncommand=/usr/bin/python /var/www/webvirtmgr/manage.py run_gunicorn -c /var/www/webvirtmgr/conf/gunicorn.conf.py\ndirectory=/var/www/webvirtmgr\nautostart=true\nautorestart=true\nlogfile=/var/log/supervisor/webvirtmgr.log\nlog_stderr=true\nuser=nginx\n\n[program:webvirtmgr-console]\ncommand=/usr/bin/python /var/www/webvirtmgr/console/webvirtmgr-console\ndirectory=/var/www/webvirtmgr\nautostart=true\nautorestart=true\nstdout_logfile=/var/log/supervisor/webvirtmgr-console.log\nredirect_stderr=true\nuser=nginx\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./manage.py runserver 0:8000\n")),(0,a.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"http://x.x.x.x:8000 (x.x.x.x - your server IP address )")),(0,a.kt)("h2",{id:"\u89e3\u51b3\u865a\u62df\u673a\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\u95ee\u9898"},"\u89e3\u51b3\u865a\u62df\u673a\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\u95ee\u9898"),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/zhydream77/article/details/81629586"},"https://blog.csdn.net/zhydream77/article/details/81629586")),(0,a.kt)("h2",{id:"\u9644kvm-\u5b89\u88c5\u811a\u672c"},"\u9644\uff1akvm \u5b89\u88c5\u811a\u672c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/LinuxBasics/KVM/kvm_install.sh"},"kvm_install.sh")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kvm \u865a\u62df\u5316\u4ecb\u7ecd: ",(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/wete/p/11099339.html"},"https://www.cnblogs.com/wete/p/11099339.html")),(0,a.kt)("li",{parentName:"ul"},"Kvm \u57fa\u672c\u8fd0\u7ef4\u547d\u4ee4\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/zy-303/p/9930353.html"},"https://www.cnblogs.com/zy-303/p/9930353.html")),(0,a.kt)("li",{parentName:"ul"},"webvirtmgr installation: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/retspen/webvirtmgr/wiki/Install-WebVirtMgr"},"https://github.com/retspen/webvirtmgr/wiki/Install-WebVirtMgr"))))}c.isMDXComponent=!0}}]);