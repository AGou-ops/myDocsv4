"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[8386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,u=m["".concat(i,".").concat(k)]||m[k]||d[k]||l;return t?a.createElement(u,s(s({ref:n},p),{},{components:t})):a.createElement(u,s({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const l={},s="\u4f7f\u7528 Kubeadm \u90e8\u7f72(\u5355master)",o={unversionedId:"CloudNative/k8s/Installation/\u4f7f\u7528 Kubeadm \u90e8\u7f72\uff08\u5355master\uff09",id:"CloudNative/k8s/Installation/\u4f7f\u7528 Kubeadm \u90e8\u7f72\uff08\u5355master\uff09",title:"\u4f7f\u7528 Kubeadm \u90e8\u7f72(\u5355master)",description:"\u9884\u5148\u51c6\u5907",source:"@site/docs/CloudNative/k8s/Installation/\u4f7f\u7528 Kubeadm \u90e8\u7f72\uff08\u5355master\uff09.md",sourceDirName:"CloudNative/k8s/Installation",slug:"/CloudNative/k8s/Installation/\u4f7f\u7528 Kubeadm \u90e8\u7f72\uff08\u5355master\uff09",permalink:"/docs/CloudNative/k8s/Installation/\u4f7f\u7528 Kubeadm \u90e8\u7f72\uff08\u5355master\uff09",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/k8s/Installation/\u4f7f\u7528 Kubeadm \u90e8\u7f72\uff08\u5355master\uff09.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"k8s Debian12\u4e8c\u8fdb\u5236\u5b89\u88c5",permalink:"/docs/CloudNative/k8s/Installation/k8s Debian12\u4e8c\u8fdb\u5236\u5b89\u88c5"},next:{title:"\u4f7f\u7528 Kubespray \u90e8\u7f72",permalink:"/docs/CloudNative/k8s/Installation/\u4f7f\u7528 Kubespray \u90e8\u7f72"}},i={},c=[{value:"\u9884\u5148\u51c6\u5907",id:"\u9884\u5148\u51c6\u5907",level:2},{value:"\u521d\u59cb\u5316 master \u8282\u70b9",id:"\u521d\u59cb\u5316-master-\u8282\u70b9",level:2},{value:"\u521d\u59cb\u5316 node \u8282\u70b9",id:"\u521d\u59cb\u5316-node-\u8282\u70b9",level:2},{value:"\u83b7\u5f97 join\u547d\u4ee4\u53c2\u6570",id:"\u83b7\u5f97-join\u547d\u4ee4\u53c2\u6570",level:3},{value:"\u521d\u59cb\u5316 node \u8282\u70b9",id:"\u521d\u59cb\u5316-node-\u8282\u70b9-1",level:3},{value:"\u68c0\u67e5\u521d\u59cb\u5316\u7ed3\u679c",id:"\u68c0\u67e5\u521d\u59cb\u5316\u7ed3\u679c",level:3},{value:"\u5b89\u88c5 Ingress Controller",id:"\u5b89\u88c5-ingress-controller",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-kubeadm-\u90e8\u7f72\u5355master"},"\u4f7f\u7528 Kubeadm \u90e8\u7f72(\u5355master)"),(0,r.kt)("h2",{id:"\u9884\u5148\u51c6\u5907"},"\u9884\u5148\u51c6\u5907"),(0,r.kt)("p",null,"\u73af\u5883\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,r.kt)("th",{parentName:"tr",align:null},"IP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master"),(0,r.kt)("td",{parentName:"tr",align:null},"172.16.1.129")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node01"),(0,r.kt)("td",{parentName:"tr",align:null},"172.16.1.133")))),(0,r.kt)("p",null,"\u4fee\u6539\u5f53\u524d\u7684\u4e3b\u673a\u540d\uff0c\u786e\u4fdd\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hostnamectl set-hostname master\n")),(0,r.kt)("p",null,"\u4e3a\u5404\u8282\u70b9\u6dfb\u52a0\u4e3b\u673a\u540d\u89e3\u6790\uff0c \u7f16\u8f91",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"...\n172.16.1 master master.agou-ops.com\n172.16.1 node01 node01.aogu-ops.com\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u786e\u4fdd\u4efb\u610f\u8282\u70b9\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubelet"),"\u4f7f\u7528\u7684 IP \u5730\u5740\u53ef\u4e92\u901a\uff08\u65e0\u9700 NAT \u6620\u5c04\u5373\u53ef\u76f8\u4e92\u8bbf\u95ee\uff09\uff0c\u4e14\u6ca1\u6709\u9632\u706b\u5899\u3001\u5b89\u5168\u7ec4\u9694\u79bb")),(0,r.kt)("p",null,"\u5173\u95ed",(0,r.kt)("inlineCode",{parentName:"p"},"\u9632\u706b\u5899"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"SElinux"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's/SELINUX=*/SELINUX=disabled/' /etc/selinux/config\n# getenforce \u786e\u5b9a\u5f53\u524dSElinux\u72b6\u6001\nsystemctl disable firewalld && systemctl stop firewalld\n")),(0,r.kt)("p",null,"\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet")," \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# --------- \u5728 master \u548c node \u8282\u70b9\u6267\u884c -----------\n\n# \u4f7f\u7528\u963f\u91cc\u4e91 docker \u955c\u50cf\u52a0\u901f\uff0c\u53ef\u4ee5\u81ea\u884c\u53bb\u63a7\u5236\u53f0\u7533\u8bf7\uff0c\u5728\u8fd9\u91cc\u6211\u4f7f\u7528\u516c\u5171\u52a0\u901f\u955c\u50cf\nexport REGISTRY_MIRROR=https://registry.cn-hangzhou.aliyuncs.com\n\n# \u7f16\u8f91\u811a\u672c\u5feb\u901f\u5b89\u88c5\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a\n\n#!/bin/bash\n\n# \u5728 master \u8282\u70b9\u548c worker \u8282\u70b9\u90fd\u8981\u6267\u884c\n\n# \u5b89\u88c5 docker\n# \u53c2\u8003\u6587\u6863\u5982\u4e0b\n# https://docs.docker.com/install/linux/docker-ce/centos/ \n# https://docs.docker.com/install/linux/linux-postinstall/\n\n# \u5378\u8f7d\u65e7\u7248\u672c\nyum remove -y docker \\\ndocker-client \\\ndocker-client-latest \\\ndocker-common \\\ndocker-latest \\\ndocker-latest-logrotate \\\ndocker-logrotate \\\ndocker-selinux \\\ndocker-engine-selinux \\\ndocker-engine\n\n# \u8bbe\u7f6e yum repository\nyum install -y yum-utils \\\ndevice-mapper-persistent-data \\\nlvm2\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\n# \u5b89\u88c5\u5e76\u542f\u52a8 docker\nyum install -y docker-ce-19.03.8 docker-ce-cli-19.03.8 containerd.io\nsystemctl enable docker\nsystemctl start docker\n\n# \u5b89\u88c5 nfs-utils\n# \u5fc5\u987b\u5148\u5b89\u88c5 nfs-utils \u624d\u80fd\u6302\u8f7d nfs \u7f51\u7edc\u5b58\u50a8\nyum install -y nfs-utils\nyum install -y wget\n\n# \u5173\u95ed swap \xd7\xd7\u91cd\u8981\xd7\xd7\nswapoff -a && echo "vm.swappiness=0" >> /etc/sysctl.conf && sysctl -p && free \u2013h\n\n# \u4fee\u6539 /etc/sysctl.conf\n# \u5982\u679c\u6709\u914d\u7f6e\uff0c\u5219\u4fee\u6539\nsed -i "s#^net.ipv4.ip_forward.*#net.ipv4.ip_forward=1#g"  /etc/sysctl.conf\nsed -i "s#^net.bridge.bridge-nf-call-ip6tables.*#net.bridge.bridge-nf-call-ip6tables=1#g"  /etc/sysctl.conf\nsed -i "s#^net.bridge.bridge-nf-call-iptables.*#net.bridge.bridge-nf-call-iptables=1#g"  /etc/sysctl.conf\nsed -i "s#^net.ipv6.conf.all.disable_ipv6.*#net.ipv6.conf.all.disable_ipv6=1#g"  /etc/sysctl.conf\nsed -i "s#^net.ipv6.conf.default.disable_ipv6.*#net.ipv6.conf.default.disable_ipv6=1#g"  /etc/sysctl.conf\nsed -i "s#^net.ipv6.conf.lo.disable_ipv6.*#net.ipv6.conf.lo.disable_ipv6=1#g"  /etc/sysctl.conf\nsed -i "s#^net.ipv6.conf.all.forwarding.*#net.ipv6.conf.all.forwarding=1#g"  /etc/sysctl.conf\n# \u53ef\u80fd\u6ca1\u6709\uff0c\u8ffd\u52a0\necho "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf\necho "net.bridge.bridge-nf-call-ip6tables = 1" >> /etc/sysctl.conf\necho "net.bridge.bridge-nf-call-iptables = 1" >> /etc/sysctl.conf\necho "net.ipv6.conf.all.disable_ipv6 = 1" >> /etc/sysctl.conf\necho "net.ipv6.conf.default.disable_ipv6 = 1" >> /etc/sysctl.conf\necho "net.ipv6.conf.lo.disable_ipv6 = 1" >> /etc/sysctl.conf\necho "net.ipv6.conf.all.forwarding = 1"  >> /etc/sysctl.conf\n# \u6267\u884c\u547d\u4ee4\u4ee5\u5e94\u7528\nsysctl -p\n\n# \u914d\u7f6eK8S\u7684yum\u6e90\ncat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=0\ngpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n\n# \u5378\u8f7d\u65e7\u7248\u672c\nyum remove -y kubelet kubeadm kubectl\n\n# \u5b89\u88c5kubelet\u3001kubeadm\u3001kubectl\n# \u5c06 ${1} \u66ff\u6362\u4e3a kubernetes \u7248\u672c\u53f7\uff0c\u4f8b\u5982 1.17.2\nyum install -y kubelet-${1} kubeadm-${1} kubectl-${1}\n\n# \u4fee\u6539docker Cgroup Driver\u4e3asystemd\n# # \u5c06/usr/lib/systemd/system/docker.service\u6587\u4ef6\u4e2d\u7684\u8fd9\u4e00\u884c ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock\n# # \u4fee\u6539\u4e3a ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd\n# \u5982\u679c\u4e0d\u4fee\u6539\uff0c\u5728\u6dfb\u52a0 worker \u8282\u70b9\u65f6\u53ef\u80fd\u4f1a\u78b0\u5230\u5982\u4e0b\u9519\u8bef\n# [WARNING IsDockerSystemdCheck]: detected "cgroupfs" as the Docker cgroup driver. The recommended driver is "systemd". \n# Please follow the guide at https://kubernetes.io/docs/setup/cri/\nsed -i "s#^ExecStart=/usr/bin/dockerd.*#ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd#g" /usr/lib/systemd/system/docker.service\n\n# \u8bbe\u7f6e docker \u955c\u50cf\uff0c\u63d0\u9ad8 docker \u955c\u50cf\u4e0b\u8f7d\u901f\u5ea6\u548c\u7a33\u5b9a\u6027\n# \u5982\u679c\u60a8\u8bbf\u95ee https://hub.docker.io \u901f\u5ea6\u975e\u5e38\u7a33\u5b9a\uff0c\u4ea6\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e2a\u6b65\u9aa4\ncurl -sSL https://kuboard.cn/install-script/set_mirror.sh | sh -s ${REGISTRY_MIRROR}\n\n# \u91cd\u542f docker\uff0c\u5e76\u542f\u52a8 kubelet\nsystemctl daemon-reload\nsystemctl restart docker\nsystemctl enable kubelet && systemctl start kubelet\n\ndocker version\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"WARNING")),(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6b64\u65f6\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"service status kubelet")," \u547d\u4ee4\uff0c\u5c06\u5f97\u5230 kubelet \u542f\u52a8\u5931\u8d25\u7684\u9519\u8bef\u63d0\u793a\uff0c\u8bf7\u5ffd\u7565\u6b64\u9519\u8bef\uff0c\u56e0\u4e3a\u5fc5\u987b\u5b8c\u6210\u540e\u7eed\u6b65\u9aa4\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm init")," \u7684\u64cd\u4f5c\uff0ckubelet \u624d\u80fd\u6b63\u5e38\u542f\u52a8")),(0,r.kt)("p",null,"\u8d4b\u4e88\u6743\u9650\u53ca\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x preinstall.sh\n./preinstall.sh 1.18.2\n")),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316-master-\u8282\u70b9"},"\u521d\u59cb\u5316 master \u8282\u70b9"),(0,r.kt)("p",null,"\u5173\u4e8e\u521d\u59cb\u5316\u65f6\u7528\u5230\u7684\u73af\u5883\u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"APISERVER_NAME"))," \u4e0d\u80fd\u662f master \u7684 hostname"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"APISERVER_NAME"))," \u5fc5\u987b\u5168\u4e3a\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u5c0f\u6570\u70b9\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u80fd\u5305\u542b\u51cf\u53f7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"POD_SUBNET"))," \u6240\u4f7f\u7528\u7684\u7f51\u6bb5\u4e0d\u80fd\u4e0e ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"master\u8282\u70b9/worker\u8282\u70b9"))," \u6240\u5728\u7684\u7f51\u6bb5\u91cd\u53e0\u3002\u8be5\u5b57\u6bb5\u7684\u53d6\u503c\u4e3a\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"li",href:"https://kuboard.cn/glossary/cidr.html"},"CIDR")," \u503c\uff0c\u5982\u679c\u60a8\u5bf9 CIDR \u8fd9\u4e2a\u6982\u5ff5\u8fd8\u4e0d\u719f\u6089\uff0c\u8bf7\u4ecd\u7136\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"export POD_SUBNET=10.100.0.1/16 "),"\u547d\u4ee4\uff0c\u4e0d\u505a\u4fee\u6539")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," \u8282\u70b9\u4e0a\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u66ff\u6362 x.x.x.x \u4e3a master \u8282\u70b9\u7684\u5185\u7f51IP\n# export \u547d\u4ee4\u53ea\u5728\u5f53\u524d shell \u4f1a\u8bdd\u4e2d\u6709\u6548\uff0c\u5f00\u542f\u65b0\u7684 shell \u7a97\u53e3\u540e\uff0c\u5982\u679c\u8981\u7ee7\u7eed\u5b89\u88c5\u8fc7\u7a0b\uff0c\u8bf7\u91cd\u65b0\u6267\u884c\u6b64\u5904\u7684 export \u547d\u4ee4\nexport MASTER_IP=172.16.1.129\n# \u66ff\u6362 apiserver.demo \u4e3a \u60a8\u60f3\u8981\u7684 dnsName\nexport APISERVER_NAME=apiserver.agou.com\n# Kubernetes \u5bb9\u5668\u7ec4\u6240\u5728\u7684\u7f51\u6bb5\uff0c\u8be5\u7f51\u6bb5\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u7531 kubernetes \u521b\u5efa\uff0c\u4e8b\u5148\u5e76\u4e0d\u5b58\u5728\u4e8e\u60a8\u7684\u7269\u7406\u7f51\u7edc\u4e2d\nexport POD_SUBNET=10.100.0.1/16\necho "${MASTER_IP}    ${APISERVER_NAME}" >> /etc/hosts\n')),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u8282\u70b9\u4e0a\u6dfb\u52a0\u4ee5\u4e0b\u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# \u53ea\u5728 master \u8282\u70b9\u6267\u884c\n\n# \u811a\u672c\u51fa\u9519\u65f6\u7ec8\u6b62\u6267\u884c\nset -e\n\nif [ ${#POD_SUBNET} -eq 0 ] || [ ${#APISERVER_NAME} -eq 0 ]; then\n  echo -e "\\033[31;1m\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u73af\u5883\u53d8\u91cf POD_SUBNET \u548c APISERVER_NAME \\033[0m"\n  echo \u5f53\u524dPOD_SUBNET=$POD_SUBNET\n  echo \u5f53\u524dAPISERVER_NAME=$APISERVER_NAME\n  exit 1\nfi\n\n\n# \u67e5\u770b\u5b8c\u6574\u914d\u7f6e\u9009\u9879 https://godoc.org/k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/v1beta2\nrm -f ./kubeadm-config.yaml\ncat <<EOF > ./kubeadm-config.yaml\napiVersion: kubeadm.k8s.io/v1beta2\nkind: ClusterConfiguration\nkubernetesVersion: v${1}\nimageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers\ncontrolPlaneEndpoint: "${APISERVER_NAME}:6443"\nnetworking:\n  serviceSubnet: "10.96.0.0/16"\n  podSubnet: "${POD_SUBNET}"\n  dnsDomain: "cluster.local"\nEOF\n\n# kubeadm init\n# \u6839\u636e\u60a8\u670d\u52a1\u5668\u7f51\u901f\u7684\u60c5\u51b5\uff0c\u60a8\u9700\u8981\u7b49\u5019 3 - 10 \u5206\u949f\nkubeadm init --config=kubeadm-config.yaml --upload-certs\n\n# \u914d\u7f6e kubectl\nrm -rf /root/.kube/\nmkdir /root/.kube/\ncp -i /etc/kubernetes/admin.conf /root/.kube/config\n\n# \u5b89\u88c5 calico \u7f51\u7edc\u63d2\u4ef6\n# \u53c2\u8003\u6587\u6863 https://docs.projectcalico.org/v3.13/getting-started/kubernetes/self-managed-onprem/onpremises\necho "\u5b89\u88c5calico-3.13.1"\nrm -f calico-3.13.1.yaml\nwget https://kuboard.cn/install-script/calico/calico-3.13.1.yaml\nkubectl apply -f calico-3.13.1.yaml\n')),(0,r.kt)("p",null,"\u6267\u884c\u8be5\u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bash master_init.sh 1.18.2\n")),(0,r.kt)("p",null,"\u68c0\u67e5",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u521d\u59cb\u5316\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u7b49\u5f85 3-10 \u5206\u949f\uff0c\u76f4\u5230\u6240\u6709\u7684\u5bb9\u5668\u7ec4\u5904\u4e8e Running \u72b6\u6001\nwatch kubectl get pod -n kube-system -o wide\n\n# \u67e5\u770b master \u8282\u70b9\u521d\u59cb\u5316\u7ed3\u679c\nkubectl get nodes -o wide\n")),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316-node-\u8282\u70b9"},"\u521d\u59cb\u5316 node \u8282\u70b9"),(0,r.kt)("h3",{id:"\u83b7\u5f97-join\u547d\u4ee4\u53c2\u6570"},"\u83b7\u5f97 join\u547d\u4ee4\u53c2\u6570"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"master")," \u8282\u70b9\u4e0a\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"join"),"\u547d\u4ee4\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm token create --print-join-command\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"\u6709\u6548\u65f6\u95f4")),(0,r.kt)("p",{parentName:"blockquote"},"\u8be5",(0,r.kt)("inlineCode",{parentName:"p"}," token")," \u7684\u6709\u6548\u65f6\u95f4\u4e3a 2 \u4e2a\u5c0f\u65f6\uff0c2\u5c0f\u65f6\u5185\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64 token \u521d\u59cb\u5316\u4efb\u610f\u6570\u91cf\u7684 worker \u8282\u70b9\u3002")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316-node-\u8282\u70b9-1"},"\u521d\u59cb\u5316 node \u8282\u70b9"),(0,r.kt)("p",null,"\u7f16\u8f91\u672c\u5730\u4e3b\u673a\u89e3\u6790\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\n172.16.1.129    apiserver.agou.com\n")),(0,r.kt)("p",null,"\u6267\u884c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u8282\u70b9\u4e0a\u83b7\u53d6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"join"),"\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm join apiserver.agou.com:6443 --token 7t8xh1.2y6pzjpgl9eai0kd     --discovery-token-ca-cert-hash sha256:a57479ae585f0c0a617d890c62c15c71023d85d4d55f4dd8fffeb56d9a467ef7 \n")),(0,r.kt)("h3",{id:"\u68c0\u67e5\u521d\u59cb\u5316\u7ed3\u679c"},"\u68c0\u67e5\u521d\u59cb\u5316\u7ed3\u679c"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u8282\u70b9\u4e0a\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o wide\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5-ingress-controller"},"\u5b89\u88c5 Ingress Controller"),(0,r.kt)("p",null,"\u7f16\u8f91\u521d\u59cb\u5316\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"nginx-ingress.yaml"),"\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u5982\u679c\u6253\u7b97\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u8bf7\u53c2\u8003 https://github.com/nginxinc/kubernetes-ingress/blob/v1.5.5/docs/installation.md \u5e76\u6839\u636e\u60a8\u81ea\u5df1\u7684\u60c5\u51b5\u505a\u8fdb\u4e00\u6b65\u5b9a\u5236\n\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: nginx-ingress\n\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: nginx-ingress \n  namespace: nginx-ingress\n\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: default-server-secret\n  namespace: nginx-ingress\ntype: Opaque\ndata:\n  tls.crt: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN2akNDQWFZQ0NRREFPRjl0THNhWFhEQU5CZ2txaGtpRzl3MEJBUXNGQURBaE1SOHdIUVlEVlFRRERCWk8KUjBsT1dFbHVaM0psYzNORGIyNTBjbTlzYkdWeU1CNFhEVEU0TURreE1qRTRNRE16TlZvWERUSXpNRGt4TVRFNApNRE16TlZvd0lURWZNQjBHQTFVRUF3d1dUa2RKVGxoSmJtZHlaWE56UTI5dWRISnZiR3hsY2pDQ0FTSXdEUVlKCktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQUwvN2hIUEtFWGRMdjNyaUM3QlBrMTNpWkt5eTlyQ08KR2xZUXYyK2EzUDF0azIrS3YwVGF5aGRCbDRrcnNUcTZzZm8vWUk1Y2Vhbkw4WGM3U1pyQkVRYm9EN2REbWs1Qgo4eDZLS2xHWU5IWlg0Rm5UZ0VPaStlM2ptTFFxRlBSY1kzVnNPazFFeUZBL0JnWlJVbkNHZUtGeERSN0tQdGhyCmtqSXVuektURXUyaDU4Tlp0S21ScUJHdDEwcTNRYzhZT3ExM2FnbmovUWRjc0ZYYTJnMjB1K1lYZDdoZ3krZksKWk4vVUkxQUQ0YzZyM1lma1ZWUmVHd1lxQVp1WXN2V0RKbW1GNWRwdEMzN011cDBPRUxVTExSakZJOTZXNXIwSAo1TmdPc25NWFJNV1hYVlpiNWRxT3R0SmRtS3FhZ25TZ1JQQVpQN2MwQjFQU2FqYzZjNGZRVXpNQ0F3RUFBVEFOCkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQWpLb2tRdGRPcEsrTzhibWVPc3lySmdJSXJycVFVY2ZOUitjb0hZVUoKdGhrYnhITFMzR3VBTWI5dm15VExPY2xxeC9aYzJPblEwMEJCLzlTb0swcitFZ1U2UlVrRWtWcitTTFA3NTdUWgozZWI4dmdPdEduMS9ienM3bzNBaS9kclkrcUI5Q2k1S3lPc3FHTG1US2xFaUtOYkcyR1ZyTWxjS0ZYQU80YTY3Cklnc1hzYktNbTQwV1U3cG9mcGltU1ZmaXFSdkV5YmN3N0NYODF6cFErUyt1eHRYK2VBZ3V0NHh3VlI5d2IyVXYKelhuZk9HbWhWNThDd1dIQnNKa0kxNXhaa2VUWXdSN0diaEFMSkZUUkk3dkhvQXprTWIzbjAxQjQyWjNrN3RXNQpJUDFmTlpIOFUvOWxiUHNoT21FRFZkdjF5ZytVRVJxbStGSis2R0oxeFJGcGZnPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n  tls.key: LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBdi91RWM4b1JkMHUvZXVJTHNFK1RYZUprckxMMnNJNGFWaEMvYjVyYy9XMlRiNHEvClJOcktGMEdYaVN1eE9ycXgrajlnamx4NXFjdnhkenRKbXNFUkJ1Z1B0ME9hVGtIekhvb3FVWmcwZGxmZ1dkT0EKUTZMNTdlT1l0Q29VOUZ4amRXdzZUVVRJVUQ4R0JsRlNjSVo0b1hFTkhzbysyR3VTTWk2Zk1wTVM3YUhudzFtMApxWkdvRWEzWFNyZEJ6eGc2clhkcUNlUDlCMXl3VmRyYURiUzc1aGQzdUdETDU4cGszOVFqVUFQaHpxdmRoK1JWClZGNGJCaW9CbTVpeTlZTW1hWVhsMm0wTGZzeTZuUTRRdFFzdEdNVWozcGJtdlFmazJBNnljeGRFeFpkZFZsdmwKMm82MjBsMllxcHFDZEtCRThCay90elFIVTlKcU56cHpoOUJUTXdJREFRQUJBb0lCQVFDZklHbXowOHhRVmorNwpLZnZJUXQwQ0YzR2MxNld6eDhVNml4MHg4Mm15d1kxUUNlL3BzWE9LZlRxT1h1SENyUlp5TnUvZ2IvUUQ4bUFOCmxOMjRZTWl0TWRJODg5TEZoTkp3QU5OODJDeTczckM5bzVvUDlkazAvYzRIbjAzSkVYNzZ5QjgzQm9rR1FvYksKMjhMNk0rdHUzUmFqNjd6Vmc2d2szaEhrU0pXSzBwV1YrSjdrUkRWYmhDYUZhNk5nMUZNRWxhTlozVDhhUUtyQgpDUDNDeEFTdjYxWTk5TEI4KzNXWVFIK3NYaTVGM01pYVNBZ1BkQUk3WEh1dXFET1lvMU5PL0JoSGt1aVg2QnRtCnorNTZud2pZMy8yUytSRmNBc3JMTnIwMDJZZi9oY0IraVlDNzVWYmcydVd6WTY3TWdOTGQ5VW9RU3BDRkYrVm4KM0cyUnhybnhBb0dCQU40U3M0ZVlPU2huMVpQQjdhTUZsY0k2RHR2S2ErTGZTTXFyY2pOZjJlSEpZNnhubmxKdgpGenpGL2RiVWVTbWxSekR0WkdlcXZXaHFISy9iTjIyeWJhOU1WMDlRQ0JFTk5jNmtWajJTVHpUWkJVbEx4QzYrCk93Z0wyZHhKendWelU0VC84ajdHalRUN05BZVpFS2FvRHFyRG5BYWkyaW5oZU1JVWZHRXFGKzJyQW9HQkFOMVAKK0tZL0lsS3RWRzRKSklQNzBjUis3RmpyeXJpY05iWCtQVzUvOXFHaWxnY2grZ3l4b25BWlBpd2NpeDN3QVpGdwpaZC96ZFB2aTBkWEppc1BSZjRMazg5b2pCUmpiRmRmc2l5UmJYbyt3TFU4NUhRU2NGMnN5aUFPaTVBRHdVU0FkCm45YWFweUNweEFkREtERHdObit3ZFhtaTZ0OHRpSFRkK3RoVDhkaVpBb0dCQUt6Wis1bG9OOTBtYlF4VVh5YUwKMjFSUm9tMGJjcndsTmVCaWNFSmlzaEhYa2xpSVVxZ3hSZklNM2hhUVRUcklKZENFaHFsV01aV0xPb2I2NTNyZgo3aFlMSXM1ZUtka3o0aFRVdnpldm9TMHVXcm9CV2xOVHlGanIrSWhKZnZUc0hpOGdsU3FkbXgySkJhZUFVWUNXCndNdlQ4NmNLclNyNkQrZG8wS05FZzFsL0FvR0FlMkFVdHVFbFNqLzBmRzgrV3hHc1RFV1JqclRNUzRSUjhRWXQKeXdjdFA4aDZxTGxKUTRCWGxQU05rMXZLTmtOUkxIb2pZT2pCQTViYjhibXNVU1BlV09NNENoaFJ4QnlHbmR2eAphYkJDRkFwY0IvbEg4d1R0alVZYlN5T294ZGt5OEp0ek90ajJhS0FiZHd6NlArWDZDODhjZmxYVFo5MWpYL3RMCjF3TmRKS2tDZ1lCbyt0UzB5TzJ2SWFmK2UwSkN5TGhzVDQ5cTN3Zis2QWVqWGx2WDJ1VnRYejN5QTZnbXo5aCsKcDNlK2JMRUxwb3B0WFhNdUFRR0xhUkcrYlNNcjR5dERYbE5ZSndUeThXczNKY3dlSTdqZVp2b0ZpbmNvVlVIMwphdmxoTUVCRGYxSjltSDB5cDBwWUNaS2ROdHNvZEZtQktzVEtQMjJhTmtsVVhCS3gyZzR6cFE9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQo=\n\n---\nkind: ConfigMap\napiVersion: v1\nmetadata:\n  name: nginx-config\n  namespace: nginx-ingress\ndata:\n  server-names-hash-bucket-size: "1024"\n\n\n---\nkind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: nginx-ingress\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - services\n  - endpoints\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - ""\n  resources:\n  - secrets\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - ""\n  resources:\n  - configmaps\n  verbs:\n  - get\n  - list\n  - watch\n  - update\n  - create\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  verbs:\n  - list\n- apiGroups:\n  - ""\n  resources:\n  - events\n  verbs:\n  - create\n  - patch\n- apiGroups:\n  - extensions\n  resources:\n  - ingresses\n  verbs:\n  - list\n  - watch\n  - get\n- apiGroups:\n  - "extensions"\n  resources:\n  - ingresses/status\n  verbs:\n  - update\n- apiGroups:\n  - k8s.nginx.org\n  resources:\n  - virtualservers\n  - virtualserverroutes\n  verbs:\n  - list\n  - watch\n  - get\n\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: nginx-ingress\nsubjects:\n- kind: ServiceAccount\n  name: nginx-ingress\n  namespace: nginx-ingress\nroleRef:\n  kind: ClusterRole\n  name: nginx-ingress\n  apiGroup: rbac.authorization.k8s.io\n\n---\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: nginx-ingress\n  namespace: nginx-ingress\n  annotations:\n    prometheus.io/scrape: "true"\n    prometheus.io/port: "9113"\nspec:\n  selector:\n    matchLabels:\n      app: nginx-ingress\n  template:\n    metadata:\n      labels:\n        app: nginx-ingress\n    spec:\n      serviceAccountName: nginx-ingress\n      containers:\n      - image: nginx/nginx-ingress:1.5.5\n        name: nginx-ingress\n        ports:\n        - name: http\n          containerPort: 80\n          hostPort: 80\n        - name: https\n          containerPort: 443\n          hostPort: 443\n        - name: prometheus\n          containerPort: 9113\n        env:\n        - name: POD_NAMESPACE\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.namespace\n        - name: POD_NAME\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.name\n        args:\n          - -nginx-configmaps=$(POD_NAMESPACE)/nginx-config\n          - -default-server-tls-secret=$(POD_NAMESPACE)/default-server-secret\n         #- -v=3 # Enables extensive logging. Useful for troubleshooting.\n         #- -report-ingress-status\n         #- -external-service=nginx-ingress\n         #- -enable-leader-election\n          - -enable-prometheus-metrics\n         #- -enable-custom-resources\n')),(0,r.kt)("p",null,"\u6267\u884c\u521d\u59cb\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f nginx-ingress.yaml\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u81ea\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://kuboard.cn/"},"https://kuboard.cn/")," \u4ec5\u7a0d\u4f5c\u4fee\u6539\u3002")),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kuboard documetation\uff1a ",(0,r.kt)("a",{parentName:"li",href:"https://kuboard.cn/install/install-k8s.html"},"https://kuboard.cn/install/install-k8s.html")),(0,r.kt)("li",{parentName:"ul"},"image-pull-backoff\u89e3\u51b3\u65b9\u6848\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://kuboard.cn/learning/faq/image-pull-backoff.html"},"https://kuboard.cn/learning/faq/image-pull-backoff.html"))))}d.isMDXComponent=!0}}]);