"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[7173],{3905:(e,n,l)=>{l.d(n,{Zo:()=>i,kt:()=>d});var t=l(67294);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function p(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function o(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),l=n;return e&&(l="function"==typeof e?e(n):p(p({},n),e)),l},i=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),k=s(l),d=a,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||r;return l?t.createElement(m,p(p({ref:n},i),{},{components:l})):t.createElement(m,p({ref:n},i))}));function d(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=l.length,p=new Array(r);p[0]=k;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<r;s++)p[s]=l[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,l)}k.displayName="MDXCreateElement"},86439:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=l(87462),a=(l(67294),l(3905));const r={},p="\u5341\u516d \u7f51\u7edc\u901a\u4fe1",o={unversionedId:"CloudNative/k8s/Quicklystart/\u5341\u516d \u7f51\u7edc\u901a\u4fe1",id:"CloudNative/k8s/Quicklystart/\u5341\u516d \u7f51\u7edc\u901a\u4fe1",title:"\u5341\u516d \u7f51\u7edc\u901a\u4fe1",description:"K8S \u7684\u7f51\u7edc\u901a\u4fe1\u5b8c\u5168\u7531 CNI \u63a5\u53e3\u4e0a\u7684\u63d2\u4ef6\u6765\u5b9e\u73b0\uff0c\u63d2\u4ef6\u9700\u8981\u5b9e\u73b0\u4ee5\u4e0b\u96c6\u4e2d\u901a\u4fe1\u6a21\u578b\u3002",source:"@site/docs/CloudNative/k8s/Quicklystart/\u5341\u516d \u7f51\u7edc\u901a\u4fe1.md",sourceDirName:"CloudNative/k8s/Quicklystart",slug:"/CloudNative/k8s/Quicklystart/\u5341\u516d \u7f51\u7edc\u901a\u4fe1",permalink:"/docs/CloudNative/k8s/Quicklystart/\u5341\u516d \u7f51\u7edc\u901a\u4fe1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/k8s/Quicklystart/\u5341\u516d \u7f51\u7edc\u901a\u4fe1.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"\u5341\u516b \u9ad8\u7ea7\u8c03\u5ea6\u8bbe\u7f6e",permalink:"/docs/CloudNative/k8s/Quicklystart/\u5341\u516b \u9ad8\u7ea7\u8c03\u5ea6\u8bbe\u7f6e"},next:{title:"\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf",permalink:"/docs/CloudNative/k8s/Quicklystart/\u5341\u56db \u7528\u6237\u6743\u9650\u7cfb\u7edf"}},c={},s=[{value:"16.1 \u901a\u4fe1\u6a21\u578b",id:"161-\u901a\u4fe1\u6a21\u578b",level:2},{value:"16.2 \u901a\u4fe1\u6a21\u578b\u5e95\u5c42",id:"162-\u901a\u4fe1\u6a21\u578b\u5e95\u5c42",level:2},{value:"16.3 K8S \u540d\u79f0\u7a7a\u95f4",id:"163-k8s-\u540d\u79f0\u7a7a\u95f4",level:2},{value:"16.4 K8S\u7f51\u7edc\u62d3\u6251",id:"164-k8s\u7f51\u7edc\u62d3\u6251",level:2},{value:"16.5 flannel",id:"165-flannel",level:2},{value:"16.5.1 flannel \u5de5\u4f5c\u6a21\u5f0f",id:"1651-flannel-\u5de5\u4f5c\u6a21\u5f0f",level:3},{value:"16.5.2 VXLAN \u901a\u4fe1\u8fc7\u7a0b",id:"1652-vxlan-\u901a\u4fe1\u8fc7\u7a0b",level:3},{value:"16.5.3 flannel \u90e8\u7f72\u65b9\u5f0f",id:"1653-flannel-\u90e8\u7f72\u65b9\u5f0f",level:3},{value:"16.5.4flannel \u914d\u7f6e\u6587\u4ef6",id:"1654flannel-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"16.5.5 \u4fee\u6539\u5de5\u4f5c\u6a21\u5f0f",id:"1655-\u4fee\u6539\u5de5\u4f5c\u6a21\u5f0f",level:3},{value:"16.6 Calico",id:"166-calico",level:2},{value:"16.6.1 \u5b89\u88c5 canal",id:"1661-\u5b89\u88c5-canal",level:3},{value:"16.6.2 \u6e05\u5355\u5b9a\u4e49",id:"1662-\u6e05\u5355\u5b9a\u4e49",level:3},{value:"16.6.3 policyTypes",id:"1663-policytypes",level:3}],i={toc:s};function u(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,t.Z)({},i,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5341\u516d-\u7f51\u7edc\u901a\u4fe1"},"\u5341\u516d \u7f51\u7edc\u901a\u4fe1"),(0,a.kt)("p",null,"K8S \u7684\u7f51\u7edc\u901a\u4fe1\u5b8c\u5168\u7531 CNI \u63a5\u53e3\u4e0a\u7684\u63d2\u4ef6\u6765\u5b9e\u73b0\uff0c\u63d2\u4ef6\u9700\u8981\u5b9e\u73b0\u4ee5\u4e0b\u96c6\u4e2d\u901a\u4fe1\u6a21\u578b\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\u6bd4\u8f83\u6d41\u884c\u7684\u63d2\u4ef6\u6709\uff1aflannel\u3001calico\u3001canel\u3001kube-router ..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u52a0\u8f7d\u63d2\u4ef6")),(0,a.kt)("p",null,"k8s \u5728\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u53bb\uff1a/etc/cni/net.d/ \u76ee\u5f55\u4e0b\u5bfb\u627e\u7f51\u7edc\u63d2\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\uff0cPOD \u5728\u521b\u5efa\u65f6\u5019 k8s \u8c03\u7528\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u7531\u63d2\u4ef6\u6839\u636e\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u521b\u5efa\u7f51\u7edc\u3002"),(0,a.kt)("h2",{id:"161-\u901a\u4fe1\u6a21\u578b"},"16.1 \u901a\u4fe1\u6a21\u578b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bb9\u5668\u95f4\u901a\u4fe1\uff1a\u540c\u4e00\u4e2a POD \u5185\u591a\u4e2a\u5bb9\u5668\u95f4\u7684\u901a\u4fe1\uff0c\u4f7f\u7528 lo \u7f51\u5361\u901a\u4fe1"),(0,a.kt)("li",{parentName:"ol"},"POD\u95f4\u901a\u4fe1\uff1aPOD IP \u76f4\u63a5\u4e0e POD IP \u901a\u4fe1"),(0,a.kt)("li",{parentName:"ol"},"POD \u4e0e Service\uff1aPOD IP \u76f4\u63a5\u4e0e Cluster IP"),(0,a.kt)("li",{parentName:"ol"},"Service \u4e0e\u96c6\u7fa4\u5916\u90e8\u5ba2\u6237\u7aef\u7684\u901a\u4fe1\uff0cingress\u3001NodePort\u3001Loadbacer")),(0,a.kt)("h2",{id:"162-\u901a\u4fe1\u6a21\u578b\u5e95\u5c42"},"16.2 \u901a\u4fe1\u6a21\u578b\u5e95\u5c42"),(0,a.kt)("p",null,"\u65e0\u8bba\u54ea\u4e00\u79cd\u7f51\u7edc\u63d2\u4ef6\uff0c\u5b83\u4eec\u7528\u5230\u7684\u5e95\u5c42\u65b9\u6848\u90fd\u662f\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u865a\u62df\u7f51\u6865\uff1abrg\uff0c\u7528\u7eaf\u8f6f\u4ef6\u5b9e\u73b0\u4e00\u4e2a\u865a\u62df\u7f51\u5361\uff0c\u4e00\u7aef\u5728POD\u4e0a\uff0c\u4e00\u7aef\u5728\u5bbf\u4e3b\u673a\u4e0a\u63a5\u5165\u5230\u7f51\u6865\u6216\u7269\u7406\u63a5\u53e3\u6865\u4e0a\uff0c\u79f0\u4e3a\u96a7\u9053\u7f51\u7edc\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u591a\u8def\u590d\u7528\uff1aMacVLAN\uff0c\u57fa\u4e8e MAC \u7684\u65b9\u5f0f\u521b\u5efa VLAN \uff0c\u4e3a\u6bcf\u4e2a\u865a\u62df\u63a5\u53e3\u914d\u7f6e\u4e00\u4e2a\u72ec\u7acb\u7684 MAC \u5730\u5740\uff0c\u4f7f\u5f97\u4e00\u4e2a\u7269\u7406\u7f51\u5361\u627f\u8f7d\u591a\u4e2a\u5bb9\u5668\u4f7f\u7528\uff0c\u8fd9\u6837\u5bb9\u5668\u76f4\u63a5\u4f7f\u7528\u7269\u7406\u7f51\u5361\uff0c\u57fa\u4e8e MacVLAN \u8fdb\u884c\u8de8\u8282\u70b9\u901a\u4fe1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u786c\u4ef6\u4ea4\u6362\uff1a\u7f51\u5361\u652f\u6301\u786c\u4ef6\u4ea4\u6362\uff0cSR-IOV \uff08\u5355\u6839-IO\u865a\u62df\u5316\uff09 \u65b9\u5f0f\uff0c\u8fd9\u79cd\u7f51\u5361\u652f\u6301\u76f4\u63a5\u5728\u7269\u7406\u7ea7\u522b\u865a\u62df\u51fa\u591a\u4e2a\u63a5\u53e3\uff0c\u9ad8\u6027\u80fd\u3002")),(0,a.kt)("h2",{id:"163-k8s-\u540d\u79f0\u7a7a\u95f4"},"16.3 K8S \u540d\u79f0\u7a7a\u95f4"),(0,a.kt)("p",null,"K8S \u540d\u79f0\u7a7a\u95f4\u4e0e POD \u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\u4e0d\u5728\u4e00\u4e2a\u7ef4\u5ea6\uff0c\u6240\u4ee5\u5373\u4f7f\u5728\u4e0d\u540c\u7684 K8S \u96c6\u7fa4\u540d\u79f0\u7a7a\u95f4\u5185\u521b\u5efa\u7684\u4e0d\u540c POD\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u76f4\u63a5\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u800c\u76ee\u524d\u5e94\u7528\u6700\u5e7f\u7684 flannel \u7f51\u7edc\u63d2\u4ef6\uff0c\u662f\u4e0d\u652f\u6301\u8fd9\u79cd\u4e0d\u540c\u96c6\u7fa4\u547d\u540d\u7a7a\u95f4\u7684\u7f51\u7edc\u9694\u79bb\u7b56\u7565\u7684\u3002"),(0,a.kt)("p",null,"calico \u652f\u6301\u5730\u5740\u5206\u914d\uff0c\u4e5f\u652f\u6301\u4e0d\u540c\u96c6\u7fa4\u547d\u540d\u7a7a\u95f4\u7684\u7f51\u7edc\u9694\u79bb\u7b56\u7565\uff0c\u4f46\u662f\u5b83\u4f7f\u7528\u8f83\u4e3a\u590d\u6742\uff0c\u652f\u6301 BGP \u4e09\u5c42\u7f51\u7edc\u8f6c\u53d1\uff0c\u6027\u80fd\u6bd4 flannel \u5f3a\u3002"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528 flannel \u6765\u505a\u7f51\u7edc\u7ba1\u7406\uff0c\u518d\u5b89\u88c5 calico \u4ec5\u4ec5\u505a\u96c6\u7fa4\u547d\u540d\u7a7a\u95f4\u7f51\u8def\u9694\u79bb\u7b56\u7565\uff0c\u8fd9\u79cd\u642d\u914d\u65b9\u6848\u3002"),(0,a.kt)("h2",{id:"164-k8s\u7f51\u7edc\u62d3\u6251"},"16.4 K8S\u7f51\u7edc\u62d3\u6251"),(0,a.kt)("p",null,"\u6240\u6709 POD \u8fde\u63a5\u5230\uff0c\u672c\u673a cni0 \u63a5\u53e3\u8fd9\u4e2a\u7f51\u7edc\uff0ccni0 \u63a5\u53e3\u53d1\u51fa\u7684\u62a5\u6587\u5230\u8fbe flannel.1 \u8fd9\u4e2a\u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u5c06\u62a5\u6587\u5c01\u88c5\u4e3a\u96a7\u9053\u534f\u8bae\uff0c\u901a\u8fc7\u672c\u673a\u7684\u771f\u5b9e\u7684\u7269\u7406\u7f51\u5361\u53d1\u51fa\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u672c\u673a\u7684\u63a5\u53e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"1: lo:                       # \u672c\u5730\u56de\u73af\n2: ens33:                    # \u4e3b\u673a\u7269\u7406\u7f51\u5361\n3: docker0:                  # docker \u9ed8\u8ba4\u7684\u6865\u63a5\u7f51\u7edc\uff0c\u5728 k8s \u4e2d\u65e0\u7528\u53ef\u4ee5\u5220\u9664\n4: dummy0:                   # \n5: kube-ipvs0:               # \n6: flannel.1:                # flannel \u865a\u62df\u7f51\u5361\uff0c\u5c01\u88c5\u96a7\u9053\u62a5\u6587\n7: cni0:                     # \u6240\u6709\u5bb9\u5668\u5904\u4e8e\u8fd9\u4e2a\u7f51\u6865\n8: veth0c014b8b@if3:         # \u5bb9\u5668\u7684\u7f51\u5361\u8fde\u63a5\u5230 cni0\n9: veth97c048e5@if3:         # \u5bb9\u5668\u7684\u7f51\u5361\u8fde\u63a5\u5230 cni0\n11: vethd2f0bf2b@if3:        # \u5bb9\u5668\u7684\u7f51\u5361\u8fde\u63a5\u5230 cni0\n12: veth648a500f@if3:        # \u5bb9\u5668\u7684\u7f51\u5361\u8fde\u63a5\u5230 cni0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d bridge-utils \u5305\u4f7f\u7528\u547d\u4ee4 brctl show cni0 \u67e5\u770b cni0 \u63a5\u53e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bridge    name    bridge id           STP    enabled    interfaces\ncni0              8000.9a6ec95f8285   no                veth0c014b8b\n                                                        veth648a500f\n                                                        veth7a3f56b7\n                                                        veth97c048e5\n                                                        vethd2f0bf2b\n")),(0,a.kt)("h2",{id:"165-flannel"},"16.5 flannel"),(0,a.kt)("p",null,"flannel \u662f\u4e00\u4e2a\u4e13\u4e3a kubernetes \u5b9a\u5236\u7684\u4e09\u5c42\u7f51\u7edc\u89e3\u51b3\u65b9\u6848\uff0c\u4e3b\u8981\u7528\u4e8e\u89e3\u51b3\u5bb9\u5668\u7684\u8de8\u4e3b\u673a\u901a\u4fe1\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"1651-flannel-\u5de5\u4f5c\u6a21\u5f0f"},"16.5.1 flannel \u5de5\u4f5c\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flannel.1 \u8fd9\u4e2a\u865a\u62df\u7f51\u5361\u652f\u6301\u591a\u79cd\u4f20\u8f93\u6a21\u5f0f\uff1aVxLAN\u3001host-gw\u3001Directrouting\u3001udp ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4ecb\u7ecd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VXLAN"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 VxLAN \u4f5c\u4e3a\u96a7\u9053\u5c01\u88c5\u62a5\u6587")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host-gw"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4f7f\u7528\u53e0\u52a0\u7f51\u7edc\uff0c\u800c\u662f\u5728\u4e3b\u673a\u7684\u8def\u7531\u8868\u4e2d\u521b\u5efa\u5230\u5176\u4ed6\u4e3b\u673a subnet \u7684\u8def\u7531\u6761\u76ee\uff0c\u6027\u80fd\u8f83\u597d\uff0c\u7f3a\u9677\u662f\uff1a\u6240\u6709 node \u8282\u70b9\u5fc5\u987b\u5904\u4e8e\u540c\u4e00\u4e2a\u4e8c\u5c42\u7f51\u7edc\u4e2d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DirectRouting"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u4e3b\u673a\u4f4d\u4e8e\u540c\u4e00\u5b50\u7f51\u65f6\u542f\u7528\u76f4\u63a5\u8def\u7531\uff0c\u4e0d\u5728\u56de\u9000\u5230 VxLAN\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UDP"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u4f7f\u7528 UDP \u534f\u8bae\uff0c\u6027\u80fd\u5dee")))),(0,a.kt)("h3",{id:"1652-vxlan-\u901a\u4fe1\u8fc7\u7a0b"},"16.5.2 VXLAN \u901a\u4fe1\u8fc7\u7a0b"),(0,a.kt)("p",null,"Flannel VXLAN \u5b9e\u8d28\u4e0a\u662f\u4e00\u79cd \u201c\u8986\u76d6\u7f51\u7edc(overlay network)\u201d \uff0c\u4e5f\u5c31\u662f\u5c06TCP\u6570\u636e\u5305\u88c5\u5728\u53e6\u4e00\u79cd\u7f51\u7edc\u5305\u91cc\u9762\u8fdb\u884c\u8def\u7531\u8f6c\u53d1\u548c\u901a\u4fe1\uff0c\u76ee\u524d\u5df2\u7ecf\u652f\u6301UDP\u3001VxLAN\u3001AWS VPC\u548cGCE\u8def\u7531\u7b49\u6570\u636e\u8f6c\u53d1\u65b9\u5f0f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flannel VXLAN \u901a\u4fe1\u8fc7\u7a0b")),(0,a.kt)("p",null,"\u5728 K8S \u4e0a POD \u4e0e POD \u662f\u76f4\u63a5\u901a\u8fc7\u5bf9\u65b9\u7684 IP \u5730\u5740\u8fdb\u884c\u901a\u4fe1\u7684\uff0cPOD \u53d1\u51fa\u7684\u62a5\u6587\u7ecf\u8fc7 cni0 \u7f51\u6865\u5230\u8fbe flannel \uff0cflannel \u5c06\u62a5\u6587\u5c01\u88c5\u4e0a\u4e00\u5c42 VxLAN \u7684\u9996\u90e8\uff0c\u5916\u5c42\u53c8\u88ab\u5c01\u88c5\u4e00\u5c42 UDP \u534f\u8bae\u7684\u9996\u90e8\uff0c\u53d1\u9001\u7ed9\u672c\u673a\u7269\u7406\u7f51\u5361\uff0c\u672c\u673a\u7269\u7406\u7f51\u5361\u53c8\u5c06 flannel \u53d1\u8fc7\u6765\u7684\u62a5\u6587\u5916\u5c42\u5c01\u88c5\u4e0a IP \u9996\u90e8\u548c\u4ee5\u592a\u7f51\u5e27\u9996\u90e8\uff08MAC\uff09\u7531\u7f51\u5361\u53d1\u51fa\uff0c\u53e6\u5916\u4e00\u4e2a node \u8282\u70b9\u6536\u5230\u62a5\u6587\uff0c\u5185\u6838\u53d1\u73b0\u662f\u4e00\u4e2a VxLAN \u7684\u5305\uff0c\u62c6\u6389 IP \u9996\u90e8\u9001\u7ed9 flannel \u5e94\u7528\u7a0b\u5e8f\uff0cflannel \u62c6\u6389 VxLAN \u9996\u90e8\u5e76\u5c06\u5185\u90e8\u7684\u6570\u636e\u53d1\u9001\u7ed9\uff0ccni0 \u7f51\u6865\uff0ccni0 \u6536\u5230\u540e\u8f6c\u53d1\u7ed9 POD\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|                                               |                                   |\n|<------------------ VxLAN\u5c01\u88c5 -----------------\x3e|<----------- \u539f\u59cb\u62a5\u6587 -------------\x3e|\n+-----------+-----------+-----------+-----------+-----------+-----------+-----------+\n|  node \u7f51\u7edc |  node\u7f51\u7edc  | node \u7f51\u7edc |  VxLan    |   POD MAC |  POD IP   |    data   |\n|  \u5e27\u9996\u90e8MAC |   IP\u9996\u90e8   | UDP \u9996\u90e8  |   \u9996\u90e8     |    \u9996\u90e8    |   \u9996\u90e8    |  Payload  |\n+-----------+-----------+-----------+-----------+-----------+-----------+-----------+\n")),(0,a.kt)("h3",{id:"1653-flannel-\u90e8\u7f72\u65b9\u5f0f"},"16.5.3 flannel \u90e8\u7f72\u65b9\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 k8s \u96c6\u7fa4\u542f\u52a8\u524d\uff0cflannel \u76f4\u63a5\u90e8\u7f72\u5230\u8282\u70b9\u4e0a\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u5b88\u62a4\u8fdb\u7a0b\u8fd0\u884c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u4efb\u4f55\u4e00\u4e2a\u90e8\u7f72\u4e86 kubelet \u7684\u8282\u70b9\u90fd\u5e94\u8be5\u90e8\u7f72 flannel \uff0c\u56e0\u4e3a kubelet \u8981\u501f\u52a9 flannel \u4e3a POD \u8bbe\u7f6e\u7f51\u7edc\u63a5\u53e3\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 kube-admin \u76f4\u63a5\u5c06 k8s \u81ea\u5df1\u7684\u7ec4\u4ef6\u5305\u62ec flannel \u8fd0\u884c\u5728 k8s \u4e4b\u4e0a\u7684\u9759\u6001 POD\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u5fc5\u987b\u914d\u7f6e\u4e3a\u5171\u4eab node \u8282\u70b9\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\u7684 POD\uff0c\u6240\u4ee5 flannel POD \u63a7\u5236\u5668\u4e3a DaemonSet\u3002\n")),(0,a.kt)("h3",{id:"1654flannel-\u914d\u7f6e\u6587\u4ef6"},"16.5.4flannel \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u9009\u9879\u542b\u4e49")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "Network": "10.244.0.0/16",     // flannel \u4f7f\u7528\u7684 CIDR \u683c\u5f0f\u7684\u7f51\u7edc\u5730\u5740\uff0c\u7528\u4e8e\u4e3a POD \u914d\u7f6e\u7f51\u7edc\u529f\u80fd\n    "SubnetLen": 24,                // \u628a Network \u5207\u5206\u4e3a\u5b50\u7f51\u4f9b\u5404 node \u8282\u70b9\u4f7f\u7528\u65f6\uff0c\u4f7f\u7528\u591a\u957f\u7684\u63a9\u7801\u5207\u5206\uff0c\u9ed8\u8ba4\u4e3a 24\n    "SubnetMin": "10.244.10.0/24",  // \u7528\u4e8e\u5206\u914d\u7ed9 node \u7684\u5b50\u7f51\u8d77\u59cb\u5730\u5740\uff0c\u4ece\u8fd9\u4e2a\u7f51\u7edc\u5f00\u59cb\u5206\u914d\u7f51\u7edc\n    "SubnetMax": "10.244.255.0/24"  // \u7528\u4e8e\u5206\u914d\u7ed9 nide \u7684\u5b50\u7f51\u7ed3\u675f\u4f4d\u7f6e\uff0c\u8fd9\u4e2a\u662f\u6700\u5927\u5206\u914d\u7684\u7f51\u8def  \n    "Backend": {                    // \u6307\u660e POD \u4e0e POD \u8de8\u8282\u70b9\u901a\u4fe1\u65f6\u5019\u4f7f\u7528\u7684 flannel \u5de5\u4f5c\u6a21\u5f0f\n        "Type": "vxlan",            // \u5de5\u4f5c\u6a21\u5f0f\n        "Directrouting": true       // \u662f\u5426\u4f7f\u7528\u76f4\u63a5\u8def\u7531\u6a21\u5f0f\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flannel \u6258\u7ba1\u5230 k8s \u4e0a\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5904\u4e8e kube-flannel-cfg \u8fd9\u4e2a configmap \u4e2d\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get configmap kube-flannel-cfg -n kube-system -o json\n")),(0,a.kt)("h3",{id:"1655-\u4fee\u6539\u5de5\u4f5c\u6a21\u5f0f"},"16.5.5 \u4fee\u6539\u5de5\u4f5c\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539 flannel \u5de5\u4f5c\u6a21\u5f0f\uff0c\u6dfb\u52a0 Directrouting\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u5e94\u8be5\u5728\u521a\u521a\u90e8\u7f72\u5b8c k8s \u96c6\u7fa4\u65f6\u5019\u4fee\u6539\uff0c\u63a8\u8350\u4fee\u6539")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit configmap kube-flannel-cfg -n kube-system\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'"Backend": {\n    "Type": "vxlan",\n    "Directrouting": true\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u672c\u673a\u8def\u7531\u8868")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip route show\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"default via 172.16.100.254 dev ens33 proto static metric 100 \n10.244.1.0/24 via 10.244.1.0 dev ens33             # \u5fc5\u987b\u4e3a dev \u7269\u7406\u7f51\u5361\u63a5\u53e3\uff0c\u5426\u5219 Directrouting \u6ca1\u6709\u8bbe\u7f6e\u6210\u529f\n10.244.2.0/24 via 10.244.2.0 dev ens33             # \u5fc5\u987b\u4e3a dev \u7269\u7406\u7f51\u5361\u63a5\u53e3\uff0c\u5426\u5219 Directrouting \u6ca1\u6709\u8bbe\u7f6e\u6210\u529f\n172.16.100.0/24 dev ens33 proto kernel scope link src 172.16.100.101 metric 100 \n172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 \n")),(0,a.kt)("h2",{id:"166-calico"},"16.6 Calico"),(0,a.kt)("p",null,"Calico \u521b\u5efa\u548c\u7ba1\u7406\u2f00\u4e2a\u6241\u5e73\u7684\u4e09\u5c42\u7f51\u7edc(\u4e0d\u9700\u8981 overlay)\uff0c\u6bcf\u4e2a\u5bb9\u5668\u4f1a\u5206\u914d\u4e00\u4e2a\u53ef\u8def\u7531\u7684 ip\u3002\u7531\u4e8e\u901a\u4fe1\u65f6\u4e0d\u9700\u8981\u89e3\u5305\u548c\u5c01\u5305\uff0c\u7f51\u7edc\u6027\u80fd\u635f\u8017\u5c0f\uff0c\u6613\u4e8e\u6392\u67e5\uff0c\u4e14\u6613\u4e8e\u6c34\u5e73\u6269\u5c55\u3002"),(0,a.kt)("p",null,"\u5c0f\u89c4\u6a21\u90e8\u7f72\u65f6\u53ef\u4ee5\u901a\u8fc7 bgp client \u76f4\u63a5\u4e92\u8054\uff0c\u5927\u89c4\u6a21\u4e0b\u53ef\u901a\u8fc7\u6307\u5b9a\u7684 BGP route reflector \u6765\u5b8c\u6210\uff0c\u8fd9\u6837\u4fdd\u8bc1\u6240\u6709\u7684\u6570\u636e\u6d41\u91cf\u90fd\u662f\u901a\u8fc7 IP \u8def\u7531\u7684\u65b9\u5f0f\u5b8c\u6210\u4e92\u8054\u7684\u3002 "),(0,a.kt)("p",null,"Calico \u57fa\u4e8e iptables \u8fd8\u63d0\u4f9b\u4e86\u4e30\u5bcc\u800c\u7075\u6d3b\u7684\u7f51\u7edc Policy\uff0c\u4fdd\u8bc1\u901a\u8fc7\u5404\u4e2a\u8282\u70b9\u4e0a\u7684 ACLs \u6765\u63d0\u4f9b Workload \u7684\u591a\u79df\u6237\u9694\u79bb\u3001\u5b89\u5168\u7ec4\u4ee5\u53ca\u5176\u4ed6\u53ef\u8fbe\u6027\u9650\u5236\u7b49\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u6709\u4e2a\u65b0\u7684\u9879\u76ee\uff1acanel\uff0c\u5b83\u96c6\u5408\u4e86 flannel \u548c calico \u7684\u4f18\u70b9\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f")),(0,a.kt)("p",null,"Calico \u76ee\u524d\u4e0d\u652f\u6301\u5de5\u4f5c\u5728 iptables \u4e0b\u7684 kube-proxy\uff0c\u4e0b\u9762\u4ecb\u7ecd canal \u7f51\u7edc\u7b56\u7565\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"1661-\u5b89\u88c5-canal"},"16.6.1 \u5b89\u88c5 canal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u6e05\u5355\u6587\u4ef6\uff0c\u9700\u8981\u7ffb\u5899")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://docs.projectcalico.org/v3.6/getting-started/kubernetes/installation/hosted/canal/canal.yaml\n")),(0,a.kt)("h3",{id:"1662-\u6e05\u5355\u5b9a\u4e49"},"16.6.2 \u6e05\u5355\u5b9a\u4e49"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6e05\u5355\u683c\u5f0f\uff0c\u8be6\u89c1\uff1akubectl explain networkpolicy")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'egress                  <[]Object>    # \u51fa\u7ad9\u89c4\u5219\u7684\u5bf9\u8c61\u5217\u8868\n  ports                 <[]Object>    # \u76ee\u6807\u7aef\u53e3\u7684\u5bf9\u8c61\u5217\u8868\n    port                <string>      # \u6570\u5b57\u5f62\u5f0f\u6216\u8005\u662f\u547d\u540d\u7684\u7aef\u53e3\n    protocol                          # \u534f\u8bae TCP\u3001UDP\n  to                    <[]Object>    # \u76ee\u6807\u5730\u5740\u5bf9\u8c61\u5217\u8868\n    ipBlock             <Object>      # \u4e00\u7ec4 IP \u5730\u5740\n      cidr              <string>      # CIDR \u8868\u793a\u7684 IP \u8303\u56f4\n      except            <[]string>    # \u6392\u9664 CIDR \u4e2d\u7684\u67d0\u4e9b\u5730\u5740\n    namespaceSelector   <Object>      # \u540d\u79f0\u7a7a\u95f4\u9009\u62e9\u5668\n    podSelector         <Object>      # POD \u9009\u62e9\u5668\uff0c\u76ee\u6807\u5730\u5740\u53ef\u4ee5\u4e5f\u662f\u4e00\u7ec4 POD\ningress                 <[]Object>    # \u5165\u7ad9\u89c4\u5219\u7684\u5bf9\u8c61\u5217\u8868\n  from                  <[]Object>    # \u6e90\u5730\u5740\u5bf9\u8c61\u5217\u8868\n    ipBlock             <Object>      # \u4e00\u7ec4 IP \u5730\u5740\n      cidr              <string>      # CIDR \u8868\u793a\u7684 IP \u8303\u56f4\n      except            <[]string>    # \u6392\u9664 CIDR \u4e2d\u7684\u67d0\u4e9b\u5730\u5740\n    namespaceSelector   <Object>      # \u540d\u79f0\u7a7a\u95f4\u9009\u62e9\u5668\n    podSelector         <Object>      # POD \u9009\u62e9\u5668\uff0c\u6e90\u5730\u5740\u4e5f\u53ef\u4ee5\u662f\u4e00\u7ec4 POD\n  ports                 <[]Object>    # POD \u81ea\u5df1\u7684\u7aef\u53e3\uff0c\u8868\u793a\u63a7\u5236\u81ea\u5df1\u7684\u7aef\u53e3\u662f\u5426\u53ef\u4ee5\u88ab\u8bbf\u95ee\uff0c\u7684\u5bf9\u8c61\u5217\u8868\n    port                              # \u6570\u5b57\u5f62\u5f0f\u6216\u8005\u662f\u547d\u540d\u7684\u7aef\u53e3\n    protocol                          # \u534f\u8bae TCP\u3001UDP\npodSelector             <Object>      # POD \u9009\u62e9\u5668\u51b3\u5b9a\u89c4\u5219\u5e94\u7528\u5728\u54ea\u4e9b POD \u4e0a\npolicyTypes             <[]string>    # \u53ef\u4ee5\u662f "Ingress", "Egress", \u6216\u8005 "Ingress,Egress" \uff0c\u8868\u793a\u653e\u884c\u6ee1\u8db3\u8fd9\u4e9b\u89c4\u5219\u8bbf\u95ee\n')),(0,a.kt)("h3",{id:"1663-policytypes"},"16.6.3 policyTypes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5b9a\u4e49 \u540d\u79f0\u7a7a\u95f4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace dev\nkubectl create namespace prod\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e24\u4e2a\u547d\u540d\u7a7a\u95f4\u5206\u522b\u521b\u5efa\u4e00\u4e2a POD")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod1\n  namespace: dev\n  labels:\n    app: myapp\nspec:\n  containers:\n  - name: myapp\n    image: ikubernetes/myapp:v1\n    \n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pod1\n  namespace: prod\n  labels:\n    app: myapp\nspec:\n  containers:\n  - name: myapp\n    image: ikubernetes/myapp:v1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f pod-a.yaml -n dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62d2\u7edd\u6240\u6709 dev \u7a7a\u95f4\u7684\u62a5\u6587")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: deny-all-ingress\n  namespace: dev\nspec:\n  podSelector: {}            # {} \u7a7a\u7684\u9009\u62e9\u5668\u8868\u793a\u9009\u62e9\u5168\u90e8\n  policyTypes:\n  - Ingress                  # \u6307\u660e Ingress \u89c4\u5219\u751f\u6548\uff0c\u5339\u914d Ingress \u5c06\u88ab\u653e\u884c\uff0c\u5982\u679c\u6ca1\u5b9a\u4e49 Ingress \u5219\u4e0d\u80fd\u5339\u914d\u6240\u6709\uff0c\u4f1a\u62d2\u7edd\u5168\u90e8\n                             # policyTypes \u6ca1\u6709 Egress \u8868\u793a\u4e0d\u63a7\u5236 Egress \uff0c\u9ed8\u8ba4\u4e3a\u5141\u8bb8\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u5e94\u7528\u89c4\u5219\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deny-all-ingress.yaml -n dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u89c4\u5219")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get networkpolicy -n dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b dev \u7a7a\u95f4\u4e2d\u7684 POD \u5730\u5740\u5e76\u8bbf\u95ee\uff0c\u7ed3\u679c\u662f\u4e0d\u80fd\u8bbf\u95ee\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u547d\u540d\u7a7a\u95f4\u62d2\u7edd\u5916\u90e8\u8bbf\u95ee")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n dev -o wide\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl 10.244.1.2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b prod \u7a7a\u95f4\u4e2d\u7684 POD \u5730\u5740\u5e76\u8bbf\u95ee\uff0c\u7ed3\u679c\u53ef\u4ee5\u8bbf\u95ee\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u547d\u540d\u7a7a\u95f4\u6ca1\u6709\u5b9a\u4e49\u89c4\u5219")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n dev -o wide\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl 10.244.2.2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u6307\u5b9a\u7f51\u6bb5\u7684 POD \u8bbf\u95ee\u672c POD \u7684 80 \u7aef\u53e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-80-ingress\n  namespace: dev\nspec:\n  podSelector:\n    matchLabels:\n      app: myapp\n  ingress:\n  - from:\n    - ipBlock:                   # \u6307\u5b9a\u6e90\u5730\u5740\u4e3a IP \u5730\u5740\u5757 \n        cidr: 10.244.0.0/16    # \u63a9\u7801\u5f62\u5f0f\u6307\u51fa\u6e90\u5730\u5740 IP \u5730\u5740\u8303\u56f4\n        except:                  # \u6392\u9664 cidr \u8303\u56f4\u5185\u7684\u67d0\u4e2a\u5730\u5740\n        - 10.244.1.2/32\n    ports:\n    - port: 80                   # \u5165\u6808\u4e14\u76ee\u6807\u7aef\u53e3\u4e3a 80 \u7684\u5219\u5339\u914d\n      protocol: TCP\n    - port: 443\n      protocol: TCP\n  policyTypes:\n  - Ingress                  # \u6307\u660e Ingress \u89c4\u5219\u751f\u6548\uff0c\u5339\u914d Ingress \u5c06\u88ab\u653e\u884c\uff0c\u5982\u679c\u6ca1\u5b9a\u4e49 Ingress \u5219\u4e0d\u80fd\u5339\u914d\u6240\u6709\uff0c\u62d2\u7edd\u5168\u90e8\n                             # policyTypes \u6ca1\u6709 Egress \u8868\u793a\u4e0d\u63a7\u5236 Egress \uff0c\u9ed8\u8ba4\u4e3a\u5141\u8bb8\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u89c4\u5219")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get networkpolicy -n dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62d2\u7edd\u51fa\u6808\u7684\u6240\u6709\u8bf7\u6c42")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: deny-all-egress\n  namespace: prod\nspec:\n  podSelector: {}            # {} \u7a7a\u7684\u9009\u62e9\u5668\u8868\u793a\u9009\u62e9\u5168\u90e8\n  policyTypes:\n  - Egress                   # \u6307\u660e Egress \u89c4\u5219\u751f\u6548\uff0c\u5339\u914d Egress \u5c06\u88ab\u653e\u884c\uff0c\u5982\u679c\u6ca1\u5b9a\u4e49 Egress \u5219\u4e0d\u80fd\u5339\u914d\u6240\u6709\uff0c\u62d2\u7edd\u5168\u90e8\n                             # policyTypes \u6ca1\u6709 Ingress \u8868\u793a\u4e0d\u63a7\u5236 Egress \uff0c\u9ed8\u8ba4\u4e3a\u5141\u8bb8\n")))}u.isMDXComponent=!0}}]);