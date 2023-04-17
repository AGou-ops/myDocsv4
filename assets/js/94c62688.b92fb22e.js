"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[1096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(r),m=a,d=k["".concat(s,".").concat(m)]||k[m]||p[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l="\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177",i={unversionedId:"CloudNative/k8s/Installation/\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177",id:"CloudNative/k8s/Installation/\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177",title:"\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177",description:"\u56fd\u5185\u955c\u50cf\u6e90",source:"@site/docs/CloudNative/k8s/Installation/\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177.md",sourceDirName:"CloudNative/k8s/Installation",slug:"/CloudNative/k8s/Installation/\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177",permalink:"/docs/CloudNative/k8s/Installation/\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/k8s/Installation/\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"\u4f7f\u7528 Kubespray \u90e8\u7f72",permalink:"/docs/CloudNative/k8s/Installation/\u4f7f\u7528 Kubespray \u90e8\u7f72"},next:{title:"Quicklystart",permalink:"/docs/category/quicklystart"}},s={},c=[{value:"\u56fd\u5185\u955c\u50cf\u6e90",id:"\u56fd\u5185\u955c\u50cf\u6e90",level:2},{value:"kubeadm\u6e90",id:"kubeadm\u6e90",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177"},"\u4f7f\u7528\u56fd\u5185\u6e90\u53ca\u76f8\u5173\u5c0f\u5de5\u5177"),(0,a.kt)("h2",{id:"\u56fd\u5185\u955c\u50cf\u6e90"},"\u56fd\u5185\u955c\u50cf\u6e90"),(0,a.kt)("p",null,"Azure China\u63d0\u4f9b\u4e86\u76ee\u524d\u7528\u8fc7\u7684\u8d28\u91cf\u6700\u597d\u7684\u955c\u50cf\u6e90\uff0c\u6db5\u76d6\u4e86docker.io\uff0cgcr.io\uff0cquay.io\u3002\u65e0\u8bba\u662f\u901f\u5ea6\u8fd8\u662f\u8986\u76d6\u8303\u56f4\uff0c\u4f53\u9a8c\u90fd\u6781\u4f73\u3002\u800c\u4e14\u90fd\u652f\u6301\u533f\u540d\u62c9\u53d6\uff0c\u4e5f\u5c31\u662f\u4e0d\u9700\u8981\u767b\u5f55\u3002\u8fd9\u70b9\u7279\u522b\u53cb\u597d\u3002azk8s.cn\u652f\u6301\u7684\u955c\u50cf\u4ee3\u7406\u8f6c\u6362\u5982\u4e0b\u5217\u8868\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"global"),(0,a.kt)("th",{parentName:"tr",align:"left"},"proxy in China"),(0,a.kt)("th",{parentName:"tr",align:"left"},"format"),(0,a.kt)("th",{parentName:"tr",align:"left"},"example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://xuxinkun.github.io/2019/06/11/cn-registry/hub.docker.com"},"dockerhub")," (docker.io)"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"http://mirror.azk8s.cn/help/docker-registry-proxy-cache.html"},"dockerhub.azk8s.cn")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dockerhub.azk8s.cn//:")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dockerhub.azk8s.cn/microsoft/azure-cli:2.0.61")," ",(0,a.kt)("inlineCode",{parentName:"td"},"dockerhub.azk8s.cn/library/nginx:1.15"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"gcr.io"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"http://mirror.azk8s.cn/help/gcr-proxy-cache.html"},"gcr.azk8s.cn")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"gcr.azk8s.cn//:")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"gcr.azk8s.cn/google_containers/hyperkube-amd64:v1.13.5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"quay.io"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"http://mirror.azk8s.cn/help/quay-proxy-cache.html"},"quay.azk8s.cn")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"quay.azk8s.cn//:")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"quay.azk8s.cn/deis/go-dev:v1.10.0"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.gcr.io")," would redirect to ",(0,a.kt)("inlineCode",{parentName:"p"},"gcr.io/google-containers"),", following image urls are identical:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"k8s.gcr.io/pause-amd64:3.1\ngcr.io/google_containers/pause-amd64:3.1\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u5f00\u53d1\u4e86\u4e00\u4e2a\u5c0f\u7684\u811a\u672cazk8spull\uff0c\u8fd9\u4e2a\u811a\u672c\u53ef\u4ee5\u81ea\u52a8\u6839\u636e\u955c\u50cf\u540d\u79f0\u8fdb\u884c\u89e3\u6790\uff0c\u8f6c\u6362\u4e3aazure\u7684mirror\u955c\u50cf\u6e90\u57df\u540d\u3002\u5e76\u8fdb\u884c\u62c9\u53d6\u3002\u62c9\u53d6\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u8fdb\u884ctag\u91cd\u547d\u540d\u4e3a\u539f\u672c\u7684\u955c\u50cf\u540d\u3002\u8be5\u811a\u672c\u5df2\u7ecf\u5f00\u6e90\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xuxinkun/littleTools#azk8spull"},"https://github.com/xuxinkun/littleTools#azk8spull")," \u4e0a\u3002\u4ee5\u4e0b\u662f\u4f7f\u7528\u6837\u4f8b\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"}," azk8spull")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/xuxinkun/littleTools\ncd littleTools\nchmod +x install.sh\n./install.sh\nsource /etc/profile\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@node-64-216 ~]\\# azk8spull quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.24.1\n## azk8spull try to pull image from mirror quay.azk8s.cn/kubernetes-ingress-controller/nginx-ingress-controller:0.24.1.\n0.24.1: Pulling from kubernetes-ingress-controller/nginx-ingress-controller\nDigest: sha256:76861d167e4e3db18f2672fd3435396aaa898ddf4d1128375d7c93b91c59f87f\nStatus: Image is up to date for quay.azk8s.cn/kubernetes-ingress-controller/nginx-ingress-controller:0.24.1\n## azk8spull try to tag quay.azk8s.cn/kubernetes-ingress-controller/nginx-ingress-controller:0.24.1 to quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.24.1.\n## azk8spull finish pulling.\n\n[root@node-64-216 ~]\\# azk8spull k8s.gcr.io/pause-amd64:3.1\n## azk8spull try to pull image from mirror gcr.azk8s.cn/google_containers/pause-amd64:3.1.\n3.1: Pulling from google_containers/pause-amd64\nDigest: sha256:59eec8837a4d942cc19a52b8c09ea75121acc38114a2c68b98983ce9356b8610\nStatus: Image is up to date for gcr.azk8s.cn/google_containers/pause-amd64:3.1\n## azk8spull try to tag gcr.azk8s.cn/google_containers/pause-amd64:3.1 to k8s.gcr.io/pause-amd64:3.1.\n## azk8spull finish pulling.\n")),(0,a.kt)("h2",{id:"kubeadm\u6e90"},"kubeadm\u6e90"),(0,a.kt)("p",null,"kubeadm\u76f4\u63a5\u4f7f\u7528\u963f\u91cc\u4e91\u7684\u6e90\u5373\u53ef\u3002\u901f\u5ea6\u4e5f\u6bd4\u8f83\u5feb\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Debian/Ubuntu\napt-get update && apt-get install -y apt-transport-https\ncurl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add -\ncat <<EOF >/etc/apt/sources.list.d/kubernetes.list\ndeb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\nEOF\napt-get update\napt-get install -y kubelet kubeadm kubectl\n\n# CentOS/RHEL/Fedora\ncat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\nsetenforce 0\nyum install -y kubelet kubeadm kubectl\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://mirror.azure.cn/help/docker-registry-proxy-cache.html"},"Docker Registry Proxy Cache \u5e2e\u52a9 http://mirror.azure.cn/help/docker-registry-proxy-cache.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Azure/container-service-for-azure-china/tree/master/aks#22-container-registry-proxy"},"Azure China container registry proxy https://github.com/Azure/container-service-for-azure-china/tree/master/aks#22-container-registry-proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/maguowei/kubernetes-for-china"},"k8s for China https://github.com/maguowei/kubernetes-for-china")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://mirror.azure.cn/"},"http://mirror.azure.cn/"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8be5\u6587\u7ae0\u8f6c\u8f7d\u81ea\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://xuxinkun.github.io/2019/06/11/cn-registry/"},"https://xuxinkun.github.io/2019/06/11/cn-registry/"))))}p.isMDXComponent=!0}}]);