"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||k[m]||l;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},s="kubectl\u8fdc\u7a0b\u8fde\u63a5k8s",u={unversionedId:"CloudNative/k8s/Remote access k8s",id:"CloudNative/k8s/Remote access k8s",title:"kubectl\u8fdc\u7a0b\u8fde\u63a5k8s",description:"\u65b9\u6848\u4e00\uff1a\u901a\u8fc7\u5b89\u5168\u4e0a\u4e0b\u6587\u8bbf\u95ee\u672c\u5730\u7f51\u7edck8s",source:"@site/docs/CloudNative/k8s/Remote access k8s.md",sourceDirName:"CloudNative/k8s",slug:"/CloudNative/k8s/Remote access k8s",permalink:"/docs/CloudNative/k8s/Remote access k8s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/k8s/Remote access k8s.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Prometheus+Grafana\u5168\u65b9\u4f4d\u76d1\u63a7Kubernetes\u96c6\u7fa4",permalink:"/docs/CloudNative/k8s/Prometheus-Grafana\u5168\u65b9\u4f4d\u76d1\u63a7Kubernetes\u96c6\u7fa4"},next:{title:"k3d",permalink:"/docs/CloudNative/k8s/k3d"}},o={},i=[{value:"\u65b9\u6848\u4e00\uff1a\u901a\u8fc7\u5b89\u5168\u4e0a\u4e0b\u6587\u8bbf\u95ee\u672c\u5730\u7f51\u7edck8s",id:"\u65b9\u6848\u4e00\u901a\u8fc7\u5b89\u5168\u4e0a\u4e0b\u6587\u8bbf\u95ee\u672c\u5730\u7f51\u7edck8s",level:2},{value:"\u57fa\u672c\u6d41\u7a0b\u64cd\u4f5c",id:"\u57fa\u672c\u6d41\u7a0b\u64cd\u4f5c",level:3},{value:"\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848",id:"\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u65b9\u6848\u4e8c\uff1a\u4fee\u6539\u8bc1\u4e66\u57df",id:"\u65b9\u6848\u4e8c\u4fee\u6539\u8bc1\u4e66\u57df",level:2},{value:"\u67e5\u770b Apiserver \u8bc1\u4e66\u5305\u542b\u54ea\u4e9b\u5730\u5740",id:"\u67e5\u770b-apiserver-\u8bc1\u4e66\u5305\u542b\u54ea\u4e9b\u5730\u5740",level:3},{value:"\u6dfb\u52a0\u65b0\u7684\u57df\u540d\u6216 IP \u5230\u8bc1\u4e66",id:"\u6dfb\u52a0\u65b0\u7684\u57df\u540d\u6216-ip-\u5230\u8bc1\u4e66",level:3},{value:"\u8bbf\u95ee\u4e91\u7aefk8s",id:"\u8bbf\u95ee\u4e91\u7aefk8s",level:2}],c={toc:i};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubectl\u8fdc\u7a0b\u8fde\u63a5k8s"},"kubectl\u8fdc\u7a0b\u8fde\u63a5k8s"),(0,r.kt)("h2",{id:"\u65b9\u6848\u4e00\u901a\u8fc7\u5b89\u5168\u4e0a\u4e0b\u6587\u8bbf\u95ee\u672c\u5730\u7f51\u7edck8s"},"\u65b9\u6848\u4e00\uff1a\u901a\u8fc7\u5b89\u5168\u4e0a\u4e0b\u6587\u8bbf\u95ee\u672c\u5730\u7f51\u7edck8s"),(0,r.kt)("h3",{id:"\u57fa\u672c\u6d41\u7a0b\u64cd\u4f5c"},"\u57fa\u672c\u6d41\u7a0b\u64cd\u4f5c"),(0,r.kt)("p",null,"\u9996\u5148\u8981\u786e\u4fddk8s\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"apiServer"),"\u53ef\u4ee5\u88ab\u5f53\u524d\u7f51\u7edc\u8bbf\u95ee\uff0c\u786e\u4fdd\u7f51\u6bb5\u5728\u5176\u76d1\u542c\u7684\u8303\u56f4\u4e4b\u5185\u3002\uff08\u91cd\u8981\uff09"),(0,r.kt)("p",null,"\u767b\u5f55\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u4e3b\u673a\u4e0a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl cluster-info\nKubernetes control plane is running at https://0.0.0.0:6443 \nCoreDNS is running at https://0.0.0.0:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy \n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")),(0,r.kt)("p",null,"\u26a0\ufe0f\u6781\u4e0d\u63a8\u8350\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"\uff0c\u8fd9\u91cc\u6211\u53ea\u662f\u56fe\u65b9\u4fbf\u8fdb\u884c\u6d4b\u8bd5\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u96c6\u7fa4\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat ~/.kube/config\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiB\u3010\u6b64\u5904\u7701\u7565\u3002\u3002\u3002\u3011==\n    server: https://0.0.0.0:6443\n  name: kind-my-cluster\ncontexts:\n- context:\n    cluster: kind-my-cluster\n    user: kind-my-cluster\n  name: kind-my-cluster\ncurrent-context: kind-my-cluster\nkind: Config\npreferences: {}\nusers:\n- name: kind-my-cluster\n  user:\n    client-certificate-data: LS0tLS1\u3010\u6b64\u5904\u7701\u7565\u3002\u3002\u3002\u3011==\n    client-key-data: LS0t\u3010\u6b64\u5904\u7701\u7565\u3002\u3002\u3002\u3011=\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"certificate-authority-data\u3010\u670d\u52a1\u5668\u7aefCA\u3011"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"client-certificate-data\u3010\u5ba2\u6237\u7aef\u8bc1\u4e66\u3011"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"client-key-data\u3010\u5ba2\u6237\u7aef\u79c1\u94a5\u3011"),"\u90fd\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"base64"),"\u7b80\u5355\u52a0\u5bc6\u8fc7\u7684\uff0c\u6240\u4ee5\u5728\u5f15\u5165\u4e0a\u4e0b\u6587\u4e4b\u524d\u5148\u5c06\u5176\u89e3\u5bc6\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"base64"),"\u547d\u4ee4\u8fdb\u884c\u89e3\u5bc6\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"echo <data> | base64 -d")),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5728\u7ebf\u7f51\u7ad9\u8fdb\u884c\u89e3\u5bc6\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.base64decode.org/"},"https://www.base64decode.org/"))),(0,r.kt)("p",null,"\u5c06\u89e3\u5bc6\u4e4b\u540e\u7684\u6587\u4ef6\u4fdd\u5b58\u5728\u5f53\u524d\u4e3b\u673a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/"),"\u76ee\u5f55\u4e4b\u4e0b\uff0c\u5206\u522b\u547d\u540d\u4e3a\uff08\u540d\u5b57\u968f\u610f\uff0c\u8bb0\u4f4f\u5c31\u597d\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"my-cluster.ca"),(0,r.kt)("li",{parentName:"ul"},"k8s.crt"),(0,r.kt)("li",{parentName:"ul"},"k8s.key")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u524d\u4e3b\u673a\u8fd8\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff1f\u4e09\u6761\u547d\u4ee4\u5feb\u901f\u5b89\u88c5\u3002"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n')),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl version --client\n"))),(0,r.kt)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u786e\u4fdd",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u5df2\u6b63\u786e\u5b89\u88c5\u540e\u8fd0\u884c\u4ee5\u4e0b\u51e0\u6761\u547d\u4ee4\u6765\u6dfb\u52a0\u5b89\u5168\u4e0a\u4e0b\u6587\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0\u96c6\u7fa4\u5730\u5740\uff0c\u5e76\u8bbe\u7f6e\u96c6\u7fa4ca\nkubectl config set-cluster my-k8s --server https://10.0.0.18:6443  --certificate-authority=/home/agou-ops/.kube/my-cluster.ca   \n\n# \u6dfb\u52a0\u7528\u6237\uff0c\u4ee5\u53ca\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8bc1\u4e66\u53ca\u79c1\u94a5\nkubectl config set-credentials kubernetes-admin     --client-certificate=/home/agou-ops/.kube/k8s.crt     --client-key=/home/agou-ops/.kube/k8s.key\n\n# \u6307\u5b9a\u4e0a\u4e0b\u6587\uff0cset-context\u540d\u79f0\u53ef\u968f\u4fbf\u53d6\nkubectl config set-context ubuntu --cluster=my-k8s  --namespace=default --user=kubernetes-admin \n\n# \u6fc0\u6d3b\u4e0a\u4e0b\u6587\nkubectl config use-context ubuntu \n")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl config view"),"\u547d\u4ee4\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u6700\u540e\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl cluster info"),"\u8fdb\u884c\u67e5\u770b\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl --insecure-skip-tls-verify cluster-info\nKubernetes control plane is running at https://10.0.0.18:6443\nCoreDNS is running at https://10.0.0.18:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")),(0,r.kt)("p",null,"Done. \ud83d\ude04"),(0,r.kt)("h3",{id:"\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848"},"\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Unable to connect to the server: x509: certificate is valid for 10.96.0.1, 172.18.0.4, 0.0.0.0, not 10.0.0.18"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"One option is to tell ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," that you don't want the certificate to be validated. Obviously this brings up security issues but I guess you are only testing so here you go:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --insecure-skip-tls-verify --context=employee-context get pods\n")),(0,r.kt)("p",{parentName:"blockquote"},"\u6216\u8005\u5c06\u5176\u5199\u5165\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-cluster my-k8s --insecure-skip-tls-verify=true\n")),(0,r.kt)("p",{parentName:"blockquote"},"The better option is to fix the certificate. Easiest if you reinitialize the cluster by running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm reset")," on all nodes including the master and then do"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm init --apiserver-cert-extra-sans=114.215.201.87\n")),(0,r.kt)("p",{parentName:"blockquote"},"It's also possible to fix that certificate without wiping everything, but that's a bit more tricky. Execute something like this on the master as root:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm /etc/kubernetes/pki/apiserver.*\nkubeadm init phase certs all --apiserver-advertise-address=0.0.0.0 --apiserver-cert-extra-sans=10.161.233.80,114.215.201.87\ndocker rm `docker ps -q -f 'name=k8s_kube-apiserver*'`\nsystemctl restart kubelet\n")),(0,r.kt)("p",{parentName:"blockquote"},"\u6765\u81ea\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/46360852"},"https://stackoverflow.com/a/46360852"))),(0,r.kt)("h2",{id:"\u65b9\u6848\u4e8c\u4fee\u6539\u8bc1\u4e66\u57df"},"\u65b9\u6848\u4e8c\uff1a\u4fee\u6539\u8bc1\u4e66\u57df"),(0,r.kt)("h3",{id:"\u67e5\u770b-apiserver-\u8bc1\u4e66\u5305\u542b\u54ea\u4e9b\u5730\u5740"},"\u67e5\u770b Apiserver \u8bc1\u4e66\u5305\u542b\u54ea\u4e9b\u5730\u5740"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u8bc1\u4e66\u76ee\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/kubernetes/pki  \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8bc1\u4e66")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ openssl x509 -in apiserver.crt -noout -text|grep -A  2 'Alternative'\n\nX509v3 Subject Alternative Name:  \n                DNS:1-1-1-1, DNS:kubernetes, DNS:kubernetes.default, DNS:kubernetes.default.svc, DNS:kubernetes.default.svc.cluster.local, DNS:lb-apiserver.kubernetes.local, DNS:localhost, IP Address:1.1.1.1\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5982\u679c\u53ea\u5141\u8bb8\u901a\u8fc7 1.1.1.1 \u8bbf\u95ee\u96c6\u7fa4\u7684 Apiserver\u3002\u5982\u679c\u9700\u8981\u4f7f\u7528\u57df\u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes\u3001kubernetes.default\u3001kubernetes.default.svc")," \u7b49\uff0c\u5219\u9700\u8981\u914d\u7f6e hosts \u5c06\u5176\u6307\u5411 1.1.1.1 \u3002"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u65b0\u7684\u57df\u540d\u6216-ip-\u5230\u8bc1\u4e66"},"\u6dfb\u52a0\u65b0\u7684\u57df\u540d\u6216 IP \u5230\u8bc1\u4e66"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5907\u4efd\u8bc1\u4e66")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /etc/kubernetes/pki  \n$ mv apiserver.crt apiserver.crt.bak  \n$ mv apiserver.key apiserver.key.bak  \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/kubernetes/kubeadm-config.yaml"))),(0,r.kt)("p",null,"\u5728 ClusterConfiguration \u7684 apiServer \u5b57\u6bb5\u4e0b\uff0c\u627e\u5230 certSANs\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kubeadm.k8s.io/v1beta2  \nkind: ClusterConfiguration  \n...  \n  certSANs:  \n    - kubernetes  \n    - kubernetes.default  \n    - kubernetes.default.svc  \n    - kubernetes.default.svc.cluster.local  \n    - 10.233.0.1  \n")),(0,r.kt)("p",null,"\u5728 certSANs \u4e2d\u6dfb\u52a0\u8fdc\u7a0b\u8bbf\u95ee\u7684\u57df\u540d\u6216 IP \u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"certSANs:  \n    - remote.doamin.com  \n    - 1.2.3.4  \n    - kubernetes  \n    - kubernetes.default  \n    - kubernetes.default.svc  \n    - kubernetes.default.svc.cluster.local  \n    - 10.233.0.1\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/")," \u76ee\u5f55\u4e2d\u6ca1\u6709\u627e\u5230 kubeadm-config.yaml \u6587\u4ef6\uff0c\u4e0d\u8981\u7d27\u5f20\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u751f\u6210\u4e00\u4e2a\u5f53\u524d\u96c6\u7fa4\u7684\u914d\u7f6e\u6587\u4ef6\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get cm kubeadm-config  -n kube-system -o yaml > /etc/kubernetes/kubeadm-config.yaml  \n\u6216\u8005  \n$ kubeadm config view | tee /etc/kubernetes/kubeadm-config.yaml  \n")),(0,r.kt)("p",null,"\u5f53\u7136\u4f60\u7684\u96c6\u7fa4\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u53ef\u80fd\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"certSANs")," \u914d\u7f6e\u6bb5\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u52a0\u5728\u7c7b\u4f3c\u4e0b\u9762\u7684\u4f4d\u7f6e\u5904\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiServer:  \n  certSANs:  \n\n   - remote.doamin.com  \n     - 1.2.3.4  \n       - kubernetes  \n       - kubernetes.default  \n       - kubernetes.default.svc  \n       - kubernetes.default.svc.cluster.local  \n       - 10.233.0.1  \n         extraArgs:  \n         authorization-mode: Node,RBAC  \n         timeoutForControlPlane: 4m0s  \n         apiVersion: kubeadm.k8s.io/v1beta2  \n         ....  \n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u751f\u6210\u8bc1\u4e66")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubeadm init phase certs apiserver --config /etc/kubernetes/kubeadm-config.yaml  \n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u518d\u6b21\u67e5\u770b\u8bc1\u4e66")),(0,r.kt)("p",null,"\u68c0\u67e5\u8f93\u51fa\u7684\u7ed3\u679c\u4e2d\uff0c\u662f\u5426\u5305\u542b\u524d\u9762\u589e\u52a0\u7684\u516c\u7f51 IP\uff0c\u5982\u6709\u5219\u8bc1\u660e\u64cd\u4f5c\u6210\u529f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ openssl x509 -in pki/apiserver.crt -noout -text | grep 1.2.3.4  \n                IP Address:192.168.0.8, IP Address: 1.2.3.4  \n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u91cd\u542f kube-apiserver")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u9ad8\u53ef\u7528\u96c6\u7fa4")),(0,r.kt)("p",null,"\u76f4\u63a5\u6740\u6b7b\u5f53\u524d\u8282\u70b9\u7684 kube-apiserver \u8fdb\u7a0b\uff0c\u7b49\u5f85 kubelet \u62c9\u8d77 kube-apiserver \u5373\u53ef\u3002\u9700\u8981\u5728\u4e09\u4e2a\u8282\u70b9\u6267\u884c\u6b65\u9aa4 1 \u5230\u6b65\u9aa4 4\uff0c\u9010\u4e00\u66f4\u65b0\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u975e\u9ad8\u53ef\u7528\u96c6\u7fa4")),(0,r.kt)("p",null,"\u6740\u6b7b kube-apiserver \u53ef\u80fd\u4f1a\u5bfc\u81f4\u670d\u52a1\u6709\u4e2d\u65ad\uff0c\u9700\u8981\u5728\u4e1a\u52a1\u4f4e\u5cf0\u7684\u65f6\u5019\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifests")," \u76ee\u5f55\u4e0b\uff0c\u79fb\u52a8 kube-apiserver.yaml \u6587\u4ef6\u81f3\u5176\u5b83\u4f4d\u7f6e\uff0c\u7136\u540e\u53c8\u79fb\u56de\u6765\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mv /etc/kubernetes/manifests/kube-apiserver.yaml /root/  \n$ mv /root/kube-apiserver.yaml /etc/kubernetes/manifests  \n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 kubeconfig \u4e2d\u7684 server ip")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u53ea\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," \u5730\u5740\u4fee\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.3.4"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1  \nclusters:  \n\n- cluster:  \n  ...  \n    server: https://1.2.3.4:6443  \n  ...  \n")),(0,r.kt)("p",null,"\u4fdd\u5b58\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u516c\u7f51 IP \u8bbf\u95ee Kubernetes \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ kubectl get node  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be5\u90e8\u5206\u5185\u5bb9\u8f6c\u8f7d\u81ea\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://kubesphereio.com/post/add-public-ip-to-kubernetes-apiserver-operation-guide/"},"https://kubesphereio.com/post/add-public-ip-to-kubernetes-apiserver-operation-guide/"))),(0,r.kt)("h2",{id:"\u8bbf\u95ee\u4e91\u7aefk8s"},"\u8bbf\u95ee\u4e91\u7aefk8s"),(0,r.kt)("h2",{id:""}),(0,r.kt)("p",null,"\u672a\u5b8c\u3002"))}k.isMDXComponent=!0}}]);