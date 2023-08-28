"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[5948],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>p});var t=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=l,m=d["".concat(i,".").concat(p)]||d[p]||k[p]||a;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function p(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48208:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=r(87462),l=(r(67294),r(3905));const a={},o="\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf",s={unversionedId:"CloudNative/k8s/Quicklystart/\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf",id:"CloudNative/k8s/Quicklystart/\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf",title:"\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf",description:"\u5728 k8s \u4e2d\u7684\u7528\u6237\u6743\u9650\u7cfb\u7edf\u662f\u4f7f\u7528 RBAC \u6a21\u5f0f\u7684\uff0cRBAC \u662f Role-Based AC \u7684\u7f29\u5199\uff0c\u5168\u79f0\uff1a\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u3002",source:"@site/docs/CloudNative/k8s/Quicklystart/\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf.md",sourceDirName:"CloudNative/k8s/Quicklystart",slug:"/CloudNative/k8s/Quicklystart/\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf",permalink:"/docs/CloudNative/k8s/Quicklystart/\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/k8s/Quicklystart/\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"\u5341\u516d \u7f51\u7edc\u901a\u4fe1",permalink:"/docs/CloudNative/k8s/Quicklystart/\u5341\u516d \u7f51\u7edc\u901a\u4fe1"},next:{title:"\u56db \u5165\u95e8\u547d\u4ee4",permalink:"/docs/CloudNative/k8s/Quicklystart/\u56db \u5165\u95e8\u547d\u4ee4"}},i={},u=[{value:"14.1 \u6743\u9650\u5217\u8868",id:"141-\u6743\u9650\u5217\u8868",level:2},{value:"14.2 \u521b\u5efa Role",id:"142-\u521b\u5efa-role",level:2},{value:"14.3 \u521b\u5efa rolebinding",id:"143-\u521b\u5efa-rolebinding",level:2},{value:"14.4 \u521b\u5efa clusterrole",id:"144-\u521b\u5efa-clusterrole",level:2},{value:"14.5 \u521b\u5efa clusterrolebinding",id:"145-\u521b\u5efa-clusterrolebinding",level:2},{value:"14.6 rolebinding \u4e0e clusterrole",id:"146-rolebinding-\u4e0e-clusterrole",level:2},{value:"14.7 RBAC\u6388\u6743",id:"147-rbac\u6388\u6743",level:2}],c={toc:u};function k(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5341\u56db-\u7528\u6237\u6743\u9650\u7cfb\u7edf"},"\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf"),(0,l.kt)("p",null,"\u5728 k8s \u4e2d\u7684\u7528\u6237\u6743\u9650\u7cfb\u7edf\u662f\u4f7f\u7528 RBAC \u6a21\u5f0f\u7684\uff0cRBAC \u662f Role-Based AC \u7684\u7f29\u5199\uff0c\u5168\u79f0\uff1a\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8ba9\u4e00\u4e2a\u7528\u6237\u626e\u6f14\u4e00\u4e2a\u89d2\u8272\uff0c\u800c\u8fd9\u4e2a\u89d2\u8272\u62e5\u6709\u6743\u9650\uff0c\u800c\u8fd9\u4e2a\u7528\u6237\u5c31\u62e5\u6709\u4e86\u8fd9\u4e2a\u6743\u9650\uff0c\u6240\u4ee5\u5728 RBAC \u4e2d\uff0c\u7528\u6237\u6388\u6743\u5c31\u662f\u6388\u6743\u67d0\u4e2a\u89d2\u8272\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u7528\u6237\uff08user\uff09\uff1a\u7528\u6237\u53ef\u4ee5\u62e5\u6709\u67d0\u4e2a\u89d2\u8272\u3002\n\n\u89d2\u8272\uff08role\uff09\uff1a\u89d2\u8272\u53ef\u4ee5\u62e5\u6709\u67d0\u4e9b\u8bb8\u53ef\u3002\n    1. \u64cd\u4f5c\n    2. \u5bf9\u8c61\n\n\u8bb8\u53ef\uff08permission\uff09\uff1a \u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u80fd\u65bd\u52a0\u7684\u64cd\u4f5c\u7ec4\u5408\u8d77\u6765\uff0c\u79f0\u4e4b\u4e3a\u4e00\u4e2a\u8bb8\u53ef\u6743\u9650\u3002\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Human User\uff1a              # \u7528\u6237\u8d26\u53f7\nPod Service Account\uff1a     # \u670d\u52a1\u8d26\u53f7\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u89d2\u8272\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"- role\uff08\u89d2\u8272\uff09\u3001rolebinding\uff08\u89d2\u8272\u7ed1\u5b9a\uff09\n- clusterrole\uff08\u96c6\u7fa4\u89d2\u8272\uff09\u3001clusterrolebinding\uff08\u96c6\u7fa4\u89d2\u8272\u7ed1\u5b9a\uff09\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6388\u6743\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"- \u7528\u6237\u901a\u8fc7 rolebinding \u53bb bind rule\uff0crolebinding \u53ea\u80fd\u662f\u5f53\u524d\u547d\u540d\u7a7a\u95f4\u4e2d\n- \u901a\u8fc7 clusterrolebinding \u53bb bind clausterrole\uff0cclusterrolebinding\u4f1a\u5728\u6240\u6709\u540d\u79f0\u7a7a\u95f4\u751f\u6548\n- \u901a\u8fc7 rolebinding \u53bb bind clausterrole\uff0c\u7531\u4e8e rolebinding \u53ea\u5728\u5f53\u524d\u540d\u79f0\u7a7a\u95f4\uff0c\u6240\u4ee5 clusterrole \u6743\u9650\u88ab\u9650\u5236\u4e3a\u5f53\u524d\u540d\u79f0\u7a7a\u95f4\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 rolebinding \u53bb bind clusterrole \u7684\u597d\u5904")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u5982\u679c\u6709\u5f88\u591a\u540d\u79f0\u7a7a\u95f4\u3001\u5982\u679c\u7528 rolebinding \u7ed1\u5b9a role\uff0c\u90a3\u4e48\u5219\u9700\u8981\u5728\u6bcf\u4e2a\u540d\u79f0\u7a7a\u95f4\u90fd\u5b9a\u4e49 role\n\u5982\u679c\u4f7f\u7528 rolebinding \u7ed1\u5b9a\u4e00\u4e2a clausterrole \uff0c\u7531\u4e8e clusterrole \u62e5\u6709\u6240\u6709\u540d\u79f0\u7a7a\u95f4\u7684\u6743\u9650\uff0c\u800c rolebinding  \u53ea\u80fd\u7ed1\u5b9a\u5f53\u524d\u540d\u79f0\u7a7a\u95f4\uff0c\u90a3\u4e48\u5c31\u7701\u53bb\u4e3a\u6bcf\u4e2a\u540d\u79f0\u7a7a\u95f4\u90fd\u65b0\u5efa\u4e00\u4e2a role \u7684\u8fc7\u7a0b\u4e86\u3002\n\n")),(0,l.kt)("h2",{id:"141-\u6743\u9650\u5217\u8868"},"14.1 \u6743\u9650\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get clusterrole admin -o yaml\n\n")),(0,l.kt)("h2",{id:"142-\u521b\u5efa-role"},"14.2 \u521b\u5efa Role"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create role pods-reader --verb=get,list,watch --resource=pods\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6e05\u5355\u65b9\u5f0f\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: pods-reder\n  namespace: default\nrules:\n- apiGroups:                           # \u5bf9\u54ea\u4e9b api \u7fa4\u7ec4\u5185\u7684\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c\n  - ""\n  resources:                           # \u5bf9\u54ea\u4e9b\u8d44\u6e90\u6388\u6743\n  - pods\n  verbs:                               # \u6388\u6743\u505a\u54ea\u4e9b\u64cd\u4f5c\n  - get\n  - list\n  - watch\n\n')),(0,l.kt)("h2",{id:"143-\u521b\u5efa-rolebinding"},"14.3 \u521b\u5efa rolebinding"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 rolebinding \u5bf9\u8c61\u521b\u5efa\uff0c\u7528\u6237\u4e0e role \u7684\u7ed1\u5b9a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create rolebinding kaliarch-read-pods --role=pods-reader --user=kaliarch\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6e05\u5355\u65b9\u5f0f\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: kaliarch-read-pods\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: pods-reader\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: User\n  name: kaliarch\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5207\u6362\u7528\u6237\u548c\u73af\u5883\u4e0a\u4e0b\u6587")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl config use-context kaliarch@kubernetes\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7528\u6237\u662f\u5426\u62e5\u6709 get \u6743\u9650")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n\n")),(0,l.kt)("h2",{id:"144-\u521b\u5efa-clusterrole"},"14.4 \u521b\u5efa clusterrole"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create clusterrole cluster-reader --verb=get,list,watch --resource=pods\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6e05\u5355\u65b9\u5f0f\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: cluster-reader\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  verbs:\n  - get\n  - list\n  - watch\n\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5185\u7f6e\u6709\u975e\u5e38\u591a\u7684 clusterrole\uff0c\u8be6\u89c1\uff1akubectl get clusterrole")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                                   AGE\nadmin                                                                  5d16h\ncluster-admin                                                          5d16h\ncluster-reader                                                         4m32s\nedit                                                                   5d16h\nflannel                                                                5d6h\nsystem:aggregate-to-admin                                              5d16h\nsystem:aggregate-to-edit                                               5d16h\nsystem:aggregate-to-view                                               5d16h\nsystem:auth-delegator                                                  5d16h\nsystem:aws-cloud-provider                                              5d16h\nsystem:basic-user                                                      5d16h\nsystem:certificates.k8s.io:certificatesigningrequests:nodeclient       5d16h\nsystem:certificates.k8s.io:certificatesigningrequests:selfnodeclient   5d16h\nsystem:controller:attachdetach-controller                              5d16h\nsystem:controller:certificate-controller                               5d16h\nsystem:controller:clusterrole-aggregation-controller                   5d16h\nsystem:controller:cronjob-controller                                   5d16h\nsystem:controller:daemon-set-controller                                5d16h\n\n")),(0,l.kt)("h2",{id:"145-\u521b\u5efa-clusterrolebinding"},"14.5 \u521b\u5efa clusterrolebinding"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create clusterrolebinding kaliarch-read-all-pods --clusterrole=cluster-reader --user=kaliarch\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e05\u5355\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: kaliarch-read-all-pods\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-reader\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: User\n  name: kaliarch\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5207\u6362\u7528\u6237\u548c\u73af\u5883\u4e0a\u4e0b\u6587")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl config use-context kaliarch@kubernetes\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7528\u6237\u662f\u5426\u62e5\u6709 get \u6743\u9650")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods -n kube-system\n$ kubectl config use-context kubernetes-admin@kubernetes\n")),(0,l.kt)("h2",{id:"146-rolebinding-\u4e0e-clusterrole"},"14.6 rolebinding \u4e0e clusterrole"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528 rolebinding \u7ed1\u5b9a\u4e00\u4e2a clusterrole \uff0c\u7531\u4e8e clusterrole \u62e5\u6709\u6240\u6709\u540d\u79f0\u7a7a\u95f4\u7684\u6743\u9650\uff0c\u800c rolebinding  \u53ea\u80fd\u7ed1\u5b9a\u5f53\u524d\u540d\u79f0\u7a7a\u95f4\uff0c\u90a3\u4e48\u5c31\u7701\u53bb\u4e3a\u6bcf\u4e2a\u540d\u79f0\u7a7a\u95f4\u90fd\u65b0\u5efa\u4e00\u4e2a role \u7684\u8fc7\u7a0b\u4e86\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create rolebinding kaliarch-cluster-reader --clusterrole=cluster-reader --user=kaliarch\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e05\u5355\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: kaliarch-admin\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: admin\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: User\n  name: kaliarch\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5207\u6362\u7528\u6237\u548c\u73af\u5883\u4e0a\u4e0b\u6587")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl config use-context kaliarch@kubernetes\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7528\u6237\u662f\u5426\u62e5\u6709 get \u6743\u9650\uff0c\u7531\u4e8e\u4f7f\u7528\u4e86 rolebinding \uff0c\u6240\u4ee5 cluster-reader \u88ab\u9650\u5236\u5230\u5f53\u524d\u547d\u540d\u7a7a\u95f4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods -n kube-system\n$ kubectl config use-context kubernetes-admin@kubernetes\n")),(0,l.kt)("h2",{id:"147-rbac\u6388\u6743"},"14.7 RBAC\u6388\u6743"),(0,l.kt)("p",null,"\u5728 bind \u6388\u6743\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u7ed1\u5b9a\u7684\u7528\u6237\u4e3b\u4f53\u6709\uff1auser\u3001group"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 rolebinding \u548c clusterrolebinding \u7ed1\u5b9a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u7ed1\u5b9a\u5230 user\uff1a\u8868\u793a\u53ea\u6709\u8fd9\u4e00\u4e2a\u7528\u6237\u62e5\u6709 role \u6216\u8005 clusterrole \u7684\u6743\u9650\n\u7ed1\u5b9a\u5230 group\uff1a\u8868\u793a\u8fd9\u4e2a\u7ec4\u5185\u7684\u6240\u6709\u7528\u6237\u90fd\u5177\u6709\u4e86 role \u6216\u8005 clusterrole \u7684\u6743\u9650\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7528\u6237\u65f6\u5019\u52a0\u5165\u7ec4\uff0c\u52a0\u5165\u7ec4\u540e\u8d26\u6237\u81ea\u52a8\u96c6\u6210\u8be5\u7ec4\u7684\u6743\u9650")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efa\u79c1\u94a5\n(umask 077; openssl genrsa -out kaliarch.key 2048)\n\n# \u751f\u6210\u8bc1\u4e66\u7b7e\u7f72\u8bf7\u6c42\uff0cO \u662f\u7ec4\uff0cCN \u5c31\u662f\u8d26\u53f7\uff0c\u8fd9\u4e2a\u8d26\u53f7\u88ab k8s \u7528\u6765\u8bc6\u522b\u8eab\u4efd\uff0c\u6388\u6743\u4e5f\u9700\u8981\u6388\u6743\u8fd9\u4e2a\u8d26\u53f7\nopenssl req -new -key kaliarch.key -out kaliarch.csr -subj "O=system:masters/CN=kaliarch/"\n\n# \u4f7f\u7528 CA \u7b7e\u7f72\u8bc1\u4e66\uff0c\u5e76\u4e14\u5728 1800 \u5929\u5185\u6709\u6548\nopenssl x509 -req -in kaliarch.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -out kaliarch.crt -days 1800\n\n# \u67e5\u770b\u8bc1\u4e66\nopenssl x509 -in kaliarch.crt -text -noout\n')))}k.isMDXComponent=!0}}]);