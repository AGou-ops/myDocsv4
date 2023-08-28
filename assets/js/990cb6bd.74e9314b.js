"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,c=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?i.createElement(c,l(l({ref:t},k),{},{components:n})):i.createElement(c,l({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={},l="Minikube Basic",o={unversionedId:"CloudNative/k8s/Minikube Basic",id:"CloudNative/k8s/Minikube Basic",title:"Minikube Basic",description:"minikube \u7b80\u4ecb",source:"@site/docs/CloudNative/k8s/Minikube Basic.md",sourceDirName:"CloudNative/k8s",slug:"/CloudNative/k8s/Minikube Basic",permalink:"/docs/CloudNative/k8s/Minikube Basic",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/k8s/Minikube Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"\u57fa\u4e8ekubernetes\u5e73\u53f0\u7684CICD\u6301\u7eed\u96c6\u6210",permalink:"/docs/CloudNative/k8s/Kubernetes with Jenkins CICD"},next:{title:"Prometheus+Grafana\u5168\u65b9\u4f4d\u76d1\u63a7Kubernetes\u96c6\u7fa4",permalink:"/docs/CloudNative/k8s/Prometheus-Grafana\u5168\u65b9\u4f4d\u76d1\u63a7Kubernetes\u96c6\u7fa4"}},u={},s=[{value:"minikube \u7b80\u4ecb",id:"minikube-\u7b80\u4ecb",level:2},{value:"minikube \u5b89\u88c5\u4e0e\u542f\u52a8",id:"minikube-\u5b89\u88c5\u4e0e\u542f\u52a8",level:2},{value:"Windows \u7cfb\u7edf\u4e0b",id:"windows-\u7cfb\u7edf\u4e0b",level:3},{value:"\u5b89\u88c5 kubectl",id:"\u5b89\u88c5-kubectl",level:4},{value:"\u5b89\u88c5 Hypervisor",id:"\u5b89\u88c5-hypervisor",level:4},{value:"\u4f7f\u7528 Chocolatey \u5b89\u88c5 Minikube",id:"\u4f7f\u7528-chocolatey-\u5b89\u88c5-minikube",level:4},{value:"\u4f7f\u7528\u5b89\u88c5\u7a0b\u5e8f\u5b89\u88c5 Minikube",id:"\u4f7f\u7528\u5b89\u88c5\u7a0b\u5e8f\u5b89\u88c5-minikube",level:4},{value:"\u76f4\u63a5\u4e0b\u8f7d\u5e76\u5b89\u88c5 Minikube",id:"\u76f4\u63a5\u4e0b\u8f7d\u5e76\u5b89\u88c5-minikube",level:4},{value:"Linux \u7cfb\u7edf\u4e0b",id:"linux-\u7cfb\u7edf\u4e0b",level:3},{value:"\u542f\u52a8 minikube",id:"\u542f\u52a8-minikube",level:2},{value:"Windows \u7cfb\u7edf\u4e0b",id:"windows-\u7cfb\u7edf\u4e0b-1",level:3},{value:"Linux\u7cfb\u7edf\u4e0b",id:"linux\u7cfb\u7edf\u4e0b",level:3},{value:"\u591a\u8282\u70b9Minikube",id:"\u591a\u8282\u70b9minikube",level:2},{value:"\u542f\u7528 DashBoard",id:"\u542f\u7528-dashboard",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u90e8\u7f72 minikube \u65f6\u51fa\u73b0<code>* The &quot;docker&quot; driver should not be used with root privileges.</code>:",id:"\u90e8\u7f72-minikube-\u65f6\u51fa\u73b0-the-docker-driver-should-not-be-used-with-root-privileges",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],k={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minikube-basic"},"Minikube Basic"),(0,a.kt)("h2",{id:"minikube-\u7b80\u4ecb"},"minikube \u7b80\u4ecb"),(0,a.kt)("p",null,"Minikube \u662f\u4e00\u79cd\u53ef\u4ee5\u8ba9\u60a8\u5728\u672c\u5730\u8f7b\u677e\u8fd0\u884c Kubernetes \u7684\u5de5\u5177\u3002Minikube \u5728\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\u7684\u865a\u62df\u673a\uff08VM\uff09\u4e2d\u8fd0\u884c\u5355\u8282\u70b9 Kubernetes \u96c6\u7fa4\uff0c\u4f9b\u90a3\u4e9b\u5e0c\u671b\u5c1d\u8bd5 Kubernetes \u6216\u8fdb\u884c\u65e5\u5e38\u5f00\u53d1\u7684\u7528\u6237\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"minikube-\u5b89\u88c5\u4e0e\u542f\u52a8"},"minikube \u5b89\u88c5\u4e0e\u542f\u52a8"),(0,a.kt)("h3",{id:"windows-\u7cfb\u7edf\u4e0b"},"Windows \u7cfb\u7edf\u4e0b"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"windows"),"\u64cd\u4f5c\u7cfb\u7edf\u4e0b, \u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"choco"),"\u5305\u7ba1\u7406\u5668\u8fdb\u884c\u5feb\u901f\u5b89\u88c5."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# \u5b89\u88c5 choco \u5305\u7ba1\u7406\u5668, \u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u6253\u5f00 powershell, \u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4.\nPS C:\\Users\\Administrator> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5-kubectl"},"\u5b89\u88c5 kubectl"),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u5df2\u6b63\u786e\u5b89\u88c5 kubectl\u3002\u60a8\u53ef\u4ee5\u6839\u636e",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows"},"\u5b89\u88c5\u5e76\u8bbe\u7f6e kubectl")," \u7684\u8bf4\u660e\u6765\u5b89\u88c5 kubectl\u3002"),(0,a.kt)("h4",{id:"\u5b89\u88c5-hypervisor"},"\u5b89\u88c5 Hypervisor"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 hypervisor\uff0c\u8bf7\u9009\u62e9\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/virtualization/hyperv_on_windows/quick_start/walkthrough_install"},"Hyper-V")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")),(0,a.kt)("p",{parentName:"blockquote"},"Hyper-V \u53ef\u4ee5\u8fd0\u884c\u5728\u4e09\u4e2a\u7248\u672c\u7684 Windows 10 \u4e0a\uff1a\u4f01\u4e1a\u7248\u3001\u4e13\u4e1a\u7248\u548c\u6559\u80b2\u7248\uff08Enterprise, Professional, Education\uff09\u3002")),(0,a.kt)("h4",{id:"\u4f7f\u7528-chocolatey-\u5b89\u88c5-minikube"},"\u4f7f\u7528 Chocolatey \u5b89\u88c5 Minikube"),(0,a.kt)("p",null,"Windows \u5b89\u88c5 Minikube \u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," \uff08\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"choco install minikube\n")),(0,a.kt)("p",null,"\u5b8c\u6210 Minikube \u7684\u5b89\u88c5\u540e\uff0c\u5173\u95ed\u5f53\u524d CLI \u754c\u9762\u518d\u91cd\u65b0\u6253\u5f00\u3002 Minikube \u5e94\u8be5\u5df2\u7ecf\u81ea\u52a8\u6dfb\u52a0\u81f3 path \u4e2d\u3002"),(0,a.kt)("h4",{id:"\u4f7f\u7528\u5b89\u88c5\u7a0b\u5e8f\u5b89\u88c5-minikube"},"\u4f7f\u7528\u5b89\u88c5\u7a0b\u5e8f\u5b89\u88c5 Minikube"),(0,a.kt)("p",null,"\u5728 Windows \u4e0a\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/msi/windows-installer-portal"},"Windows Installer")," \u624b\u52a8\u5b89\u88c5 Minikube\uff0c\u4e0b\u8f7d\u5e76\u8fd0\u884c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/minikube/releases/latest/download/minikube-installer.exe"},(0,a.kt)("inlineCode",{parentName:"a"},"minikube-installer.exe"))," \u5373\u53ef\u3002"),(0,a.kt)("h4",{id:"\u76f4\u63a5\u4e0b\u8f7d\u5e76\u5b89\u88c5-minikube"},"\u76f4\u63a5\u4e0b\u8f7d\u5e76\u5b89\u88c5 Minikube"),(0,a.kt)("p",null,"Run kubectl version to verify that the version you\u2019ve installed is sufficiently up-to-date."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl version\n")),(0,a.kt)("h3",{id:"linux-\u7cfb\u7edf\u4e0b"},"Linux \u7cfb\u7edf\u4e0b"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04"),"\u4e3a\u4f8b\uff0c\u9996\u5148\u8fd0\u884c\u4e0b\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),"\u547d\u4ee4\u6765\u9a8c\u8bc1\u60a8\u7684\u5904\u7406\u5668\u652f\u6301\u786c\u4ef6\u865a\u62df\u5316\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grep -Eoc '(vmx|svm)' /proc/cpuinfo\n")),(0,a.kt)("p",null,"\u68c0\u67e5",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"BIOS\u7684VT\u662f\u5426\u5f00\u542f")),"\uff0c\u4f7f\u7528\u4ee5\u4e0b\u5de5\u5177\u8fdb\u884c\u68c0\u6d4b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install cpu-checker\n\n# \u5b89\u88c5\u5b8c\u6bd5\u4e4b\u540e\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u68c0\u67e5\n$ kvm-ok\nINFO: /dev/kvm exists\nKVM acceleration can be used</pre>\n")),(0,a.kt)("p",null,"\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"kvm"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virtinst virt-manager -y\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl is-active libvirtd\nvirt-host-validate          # \u65e0\u62a5\u9519\u5373\u53ef\n\nsudo usermod -aG libvirt $USER\nsudo usermod -aG kvm $USER\n")),(0,a.kt)("p",null,"\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"minikube"),"\u4e4b\u524d\uff0c\u5148\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"minikube"),(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"\u4e8c\u8fdb\u5236\u5305"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64\nsudo install minikube-linux-amd64 /usr/local/bin/minikube\n")),(0,a.kt)("h2",{id:"\u542f\u52a8-minikube"},"\u542f\u52a8 minikube"),(0,a.kt)("h3",{id:"windows-\u7cfb\u7edf\u4e0b-1"},"Windows \u7cfb\u7edf\u4e0b"),(0,a.kt)("p",null,"\u5b8c\u6210\u4e4b\u540e\u8fd0\u884c\u542f\u52a8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube start --vm-driver=\"hyperv\" --memory='5g' --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers\n* Microsoft Windows 10 Pro 10.0.18363 Build 18363 \u4e0a\u7684 minikube v1.12.1\n* Automatically selected the hyperv driver\n* \u6b63\u5728\u4e0b\u8f7d VM boot image...\n    > minikube-v1.12.0.iso.sha256: 65 B / 65 B [-------------] 100.00% ? p/s 0s\n* Starting control plane node minikube in cluster minikube\n* Downloading Kubernetes v1.18.3 preload ...\n    > preloaded-images-k8s-v4-v1.18.3-docker-overlay2-amd64.tar.lz4: 82.39 MiB\n* Creating hyperv VM (CPUs=2, Memory=3000MB, Disk=20000MB) ...\n...\n")),(0,a.kt)("p",null,"\u7b49\u5f85\u955c\u50cf\u5305",(0,a.kt)("inlineCode",{parentName:"p"},"minikube-v1.12.0.iso"),"\u4e0b\u8f7d\u5b8c\u6210\u5373\u53ef."),(0,a.kt)("h3",{id:"linux\u7cfb\u7edf\u4e0b"},"Linux\u7cfb\u7edf\u4e0b"),(0,a.kt)("p",null,"Start a cluster using the kvm2 driver:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"minikube start --driver=kvm2 --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers\n")),(0,a.kt)("p",null,"To make kvm2 the default driver:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"minikube config set driver kvm2\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4e00\u65e6 ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube start")," \u5b8c\u6210\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u68c0\u67e5\u96c6\u7fa4\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"minikube status\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u6b63\u5728\u8fd0\u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"minikube status")," \u7684\u8f93\u51fa\u7ed3\u679c\u5e94\u8be5\u7c7b\u4f3c\u4e8e\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"host: Running\nkubelet: Running\napiserver: Running\nkubeconfig: Configured\n")),(0,a.kt)("p",null,"\u5728\u786e\u8ba4 Minikube \u4e0e hypervisor \u5747\u6b63\u5e38\u5de5\u4f5c\u540e\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 Minikube \u6216\u505c\u6b62\u96c6\u7fa4\u3002\u8981\u505c\u6b62\u96c6\u7fa4\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"minikube stop\n")),(0,a.kt)("h2",{id:"\u591a\u8282\u70b9minikube"},"\u591a\u8282\u70b9Minikube"),(0,a.kt)("p",null,"\u524d\u63d0\u8981\u6c42\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"minikube version > 1.10.1"),(0,a.kt)("li",{parentName:"ul"},"kubectl installed")),(0,a.kt)("p",null,"\u5f00\u59cb\u5427\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --nodes 2 -p multinode-demo\n")),(0,a.kt)("h2",{id:"\u542f\u7528-dashboard"},"\u542f\u7528 DashBoard"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube addons enable dashboard\nminikube dashboard\n")),(0,a.kt)("p",null,"\u542f\u52a8\u5b8c\u6bd5\u4e4b\u540e, \u4f1a\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u5e76\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/minikube/minikube-dashboard.png",alt:null})),(0,a.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minikube start --driver=<driver_name>"),": \u542f\u52a8minikube;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minikube status"),": \u67e5\u770b minikube \u8fd0\u884c\u72b6\u6001;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minikube stop"),": \u505c\u6b62\u8fd0\u884c minikube;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minikube delete"),": \u5f53 minikube \u65e0\u6cd5\u8fd0\u884c\u6216\u8005\u60f3\u5b8c\u5168\u6e05\u7406\u6389 minikube \u65f6\u4f7f\u7528, \u7528\u6765\u5220\u9664 minikube."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minikube service --url <service-name> "),"\uff1a\u66b4\u9732NodePort\u5230\u672c\u673a\u672c\u5730\u5730\u5740\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minikube tunnel"),"\uff1a\u66b4\u9732LoadBalancer\u5230\u672c\u673a\u672c\u5730\u5730\u5740\uff1b")),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("h3",{id:"\u90e8\u7f72-minikube-\u65f6\u51fa\u73b0-the-docker-driver-should-not-be-used-with-root-privileges"},"\u90e8\u7f72 minikube \u65f6\u51fa\u73b0",(0,a.kt)("inlineCode",{parentName:"h3"},'* The "docker" driver should not be used with root privileges.'),":"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"add-new-user"},"Add new User"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"adduser developer\n# password@7\nusermod -aG sudo developer\nsu - developer\n")),(0,a.kt)("h3",{parentName:"blockquote",id:"login-to-the-newly-created-user"},"Login to the newly created User"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"su - developer\n# password@7\n")),(0,a.kt)("h3",{parentName:"blockquote",id:"add-user-to-the-docker-group"},"Add User to the Docker Group"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\nsudo usermod -aG docker $USER\n- Re-Login or Restart the Server\n")),(0,a.kt)("h4",{parentName:"blockquote",id:"install-minicube"},"Install Minicube"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64\nchmod +x minikube\nmv ./minikube /usr/local/bin/minikube\n")),(0,a.kt)("h4",{parentName:"blockquote",id:"start-minikube-with-docker-driver"},"Start minikube with Docker Driver"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --driver=docker\n")),(0,a.kt)("h4",{parentName:"blockquote",id:"verify-minikube-installation"},"Verify minikube Installation"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n"))),(0,a.kt)("p",null,"\u53c2\u8003\u6765\u6e90\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/minikube/issues/7903#issuecomment-624074810"},"https://github.com/kubernetes/minikube/issues/7903#issuecomment-624074810")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"minikube installation: ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/tasks/tools/install-minikube/#%E5%AE%89%E8%A3%85-minikube"},"https://kubernetes.io/zh/docs/tasks/tools/install-minikube/#%E5%AE%89%E8%A3%85-minikube")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/learning-environment/minikube/"},"https://kubernetes.io/docs/setup/learning-environment/minikube/")),(0,a.kt)("li",{parentName:"ul"},"minikube \u4ee3\u7406\u76f8\u5173: ",(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/handbook/vpn_and_proxy/"},"https://minikube.sigs.k8s.io/docs/handbook/vpn_and_proxy/"))))}p.isMDXComponent=!0}}]);