"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5183],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,h=u["".concat(a,".").concat(f)]||u[f]||m[f]||s;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=u;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const s={},i="kvm_install.sh",c={unversionedId:"LinuxBasics/KVM/kvm_install.sh",id:"LinuxBasics/KVM/kvm_install.sh",title:"kvm_install.sh",description:"\u811a\u672c\u6765\u6e90\u4e8e\u7f51\u7edc\uff0c\u4ec5\u7a0d\u4f5c\u4fee\u6539\u3002",source:"@site/docs/LinuxBasics/KVM/kvm_install.sh.md",sourceDirName:"LinuxBasics/KVM",slug:"/LinuxBasics/KVM/kvm_install.sh",permalink:"/docs/LinuxBasics/KVM/kvm_install.sh",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/KVM/kvm_install.sh.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"KVM Basic",permalink:"/docs/LinuxBasics/KVM/KVM Basic"},next:{title:"Kafka",permalink:"/docs/category/kafka"}},a={},l=[],p={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kvm_installsh"},"kvm_install.sh"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho "[1] \u68c0\u67e5\u662f\u5426\u5f00\u542f\u865a\u62df\u5316"\necho "[2] \u914d\u7f6eYUM"\necho "[3] \u5b89\u88c5KVM"\necho "[4] \u5173\u95ed\u9632\u706b\u5899"\necho "[5] \u5173\u95edSElinux"\necho "[6] \u8bbe\u7f6e\u6865\u63a5"\necho "[7] \u5b89\u88c5\u865a\u62df\u673a"\necho "[8] \u67e5\u770b\u865a\u62df\u673a"\necho "[9] \u8fde\u63a5\u865a\u62df\u673a"\necho "[0] \u9000\u51fa"\nread -p "\u8bf7\u8f93\u5165\u60a8\u7684\u9009\u9879:"  NUM\nif [ $NUM = 0 ];then\n    exit;\nelif [ $NUM = 1 ];then\n#\u68c0\u67e5\u662f\u5426\u5f00\u542f\u865a\u62df\u5316\n    if $(egrep -o \'vmx|svm\' /proc/cpuinfo >>/dev/null);then\n        echo "[\u5f53\u524d\u8bbe\u5907\u5df2\u5f00\u542f\u865a\u62df\u5316]"\n    else\n        echo "[\u5f53\u524d\u8bbe\u5907\u672a\u5f00\u542f\u865a\u62df\u5316\uff0c\u8bf7\u53c2\u8003https://www.asfor.cn/archives/611.html\u6559\u7a0b\u5f00\u542f\u865a\u62df\u5316\u540e\u518d\u6b21\u4f7f\u7528\u6b64\u811a\u672c]";\n    fi\nelif [ $NUM = 2 ];then\n#\u914d\u7f6eyum\u6e90\n    mv /etc/yum.repos.d/* ~/;\n    echo "[\u6b64\u5904\u4f7f\u7528\u7f51\u6613163\u955c\u50cf\u6e90]"\n    echo "[\u5176\u4ed6\u955c\u50cf\u6e90\u53ef\u53c2\u8003https:/www.asfor.cn/server/mirror]";\n    echo "[\u60a8\u7684repo\u6587\u4ef6\u5df2\u88ab\u79fb\u52a8\u81f3\u5f53\u524d\u7528\u6237\u7684\u5bb6\u76ee\u5f55]"\n    # curl -o /etc/yum.repos.d/CentOS7-Base-163.repo http://mirrors.163.com/.help/CentOS7-Base-163.repo;\n    curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo;\n    # sed -i \'s/\\$releasever/7/g\' /etc/yum.repos.d/CentOS7-Base-163.repo;\n    # sed -i \'s/^enabled=.*/enabled=1/g\' /etc/yum.repos.d/CentOS7-Base-163.repo;\n    echo "[yum\u6e90\u6587\u4ef6\u914d\u7f6e\u6210\u529f\uff0c\u6b63\u5728\u6267\u884c\u68c0\u6d4b\u8f6f\u4ef6\u5305\u6570\u91cf]";\n    yum clean all;\n    yum makecache;\n    yum repolist;\nelif [ $NUM = 3 ];then\n#\u5b89\u88c5KVM\n    yum -y install epel-release vim wget net-tools unzip zip gcc gcc-c++;\n    yum -y install qemu-kvm qemu-kvm-tools qemu-img virt-manager libvirt libvirt-python libvirt-client virt-install virt-viewer bridge-utils libguestfs-tools;\n    echo "[KVM\u76f8\u5173\u5de5\u5177\u5df2\u5b89\u88c5\u6210\u529f]"\nelif [ $NUM = 4 ];then\n#\u5173\u95ed\u9632\u706b\u5899\nsystemctl stop firewalld;\necho "[\u9632\u706b\u5899\u5df2\u5173\u95ed]"\nsystemctl disable firewalld;\necho "[\u9632\u706b\u5899\u670d\u52a1\u5df2\u88ab\u79fb\u51fa\u5f00\u673a\u542f\u52a8\u5217\u8868]"\nelif [ $NUM = 5 ];then\n#\u5173\u95edSELINUX\nsetenforce 0;\nsed -ri \'s/^(SELINUX=).*/\\1disabled/g\' /etc/selinux/config;\necho "[SELINUX\u5df2\u88ab\u4e34\u65f6\u5173\u95ed\uff0c\u91cd\u542f\u540e\u5c06\u6c38\u4e45\u751f\u6548]";\nelif [ $NUM = 6 ];then\n#\u8bbe\u7f6e\u6865\u63a5\n    read -p "\u7f51\u5361\u540d\u79f0(example:ens33): " NETNAME\n    read -p "IP(example:192.168.81.134): " NETIP\n    read -p "\u7f51\u5173(example:192.168.81.1): " NETGATEWAY\n    read -p "\u5b50\u7f51\u63a9\u7801(example:255.255.255.0):" NETMASK\n    cp /etc/sysconfig/network-scripts/ifcfg-$NETNAME /etc/sysconfig/network-scripts/ifcfg-br0\ncat >> /etc/sysconfig/network-scripts/ifcfg-$NETNAME <<EOF\nBRIDGE=br0\nNM_CONTROLLED=no\nEOF\n\necho "[$NETNAME\u7f51\u5361\u5df2\u4fee\u6539\u5b8c\u6210]"\n\ncat > /etc/sysconfig/network-scripts/ifcfg-br0 <<EOF\nTYPE=Bridge\nDEVICE=br0\nNM_CONTROLLED=no\nBOOTPROTO=static\nNAME=br0\nONBOOT=yes\nIPADDR=$NETIP\nNETMASK=$NETMASK\nGATEWAY=$NETGATEWAY\nDNS1=114.114.114.114\nDNS2=8.8.8.8\nEOF\necho "[br0\u7f51\u5361\u5df2\u4fee\u6539\u5b8c\u6210]"\nsystemctl restart network\necho "[\u7f51\u7edc\u91cd\u542f\u5b8c\u6210\uff0c\u60a8\u7684\u7f51\u5361\u5217\u8868\u5982\u4e0b\uff0c\u8bf7\u68c0\u67e5\uff01]"\nip addr list\n\nelif [ $NUM = 7 ];then\n#\u5b89\u88c5\u865a\u62df\u673a\n    read -p "\u8f93\u5165\u865a\u62df\u673a\u7684\u540d\u5b57\uff1a"  NAME\n    read -p "CPU\u6838\u6570(example:1)" CPU\n    read -p "\u8f93\u5165\u865a\u62df\u673a\u5185\u5b58\u5927\u5c0f(M): "  MEM\n    read -p "\u8f93\u5165\u865a\u62df\u53ca\u786c\u76d8\u5927\u5c0f(G): "  SIZE\n    read -p "ISO\u955c\u50cf\u4f4d\u7f6e(example:/root/rhel-server-7.3-x84_64-dvd.iso):" ISOPATH\n    read -p "\u786c\u76d8\u955c\u50cf\u4f4d\u7f6e(example:/root):" DISKPATH\n    virt-install --virt-type=kvm --name=$NAME --vcpus=$CPU --memory=$MEM --location=$ISOPATH --disk path=$DISKPATH/$NAME.qcow2,size=$SIZE,format=qcow2 --network bridge=virbr0 --graphics none --extra-args=\'console=ttyS0\' --force\n\nelif [ $NUM = 8 ];then\n#\u67e5\u770b\u865a\u62df\u673a\nvirsh list --all\nelif [ $NUM = 9 ];then\n#\u8fde\u63a5\u865a\u62df\u673a\nread -p "\u865a\u62df\u673a\u540d\u79f0: " XNAME\nvirsh console $XNAME;\n\nelse\necho "\u8bf7\u8f93\u5165:0~9\u6570\u5b57!";\nfi\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u811a\u672c\u6765\u6e90\u4e8e\u7f51\u7edc\uff0c\u4ec5\u7a0d\u4f5c\u4fee\u6539\u3002")))}m.isMDXComponent=!0}}]);