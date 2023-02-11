"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},k=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},i=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),i=p(r),d=l,m=i["".concat(o,".").concat(d)]||i[d]||c[d]||a;return r?n.createElement(m,u(u({ref:t},k),{},{components:r})):n.createElement(m,u({ref:t},k))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,u=new Array(a);u[0]=i;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,u[1]=s;for(var p=2;p<a;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}i.displayName="MDXCreateElement"},78896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={},u="\u4e00 Kubernetes\u6982\u8ff0",s={unversionedId:"CloudNative/k8s/Quicklystart/\u4e00 Kubernetes\u6982\u8ff0",id:"CloudNative/k8s/Quicklystart/\u4e00 Kubernetes\u6982\u8ff0",title:"\u4e00 Kubernetes\u6982\u8ff0",description:"1.1 \u5bb9\u5668\u7f16\u6392\u5de5\u5177",source:"@site/docs/CloudNative/k8s/Quicklystart/\u4e00 Kubernetes\u6982\u8ff0.md",sourceDirName:"CloudNative/k8s/Quicklystart",slug:"/CloudNative/k8s/Quicklystart/\u4e00 Kubernetes\u6982\u8ff0",permalink:"/docs/CloudNative/k8s/Quicklystart/\u4e00 Kubernetes\u6982\u8ff0",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/k8s/Quicklystart/\u4e00 Kubernetes\u6982\u8ff0.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Quicklystart",permalink:"/docs/category/quicklystart"},next:{title:"\u4e03 \u63a7\u5236\u5668\u914d\u7f6e\u6e05\u5355",permalink:"/docs/CloudNative/k8s/Quicklystart/\u4e03 \u63a7\u5236\u5668\u914d\u7f6e\u6e05\u5355"}},o={},p=[{value:"1.1 \u5bb9\u5668\u7f16\u6392\u5de5\u5177",id:"11-\u5bb9\u5668\u7f16\u6392\u5de5\u5177",level:2},{value:"1.2 kubernetes",id:"12-kubernetes",level:2},{value:"1.3 \u73af\u5883\u67b6\u6784",id:"13-\u73af\u5883\u67b6\u6784",level:2},{value:"1.4 \u67b6\u6784\u548c\u7ec4\u4ef6",id:"14-\u67b6\u6784\u548c\u7ec4\u4ef6",level:2}],k={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e00-kubernetes\u6982\u8ff0"},"\u4e00 Kubernetes\u6982\u8ff0"),(0,l.kt)("h2",{id:"11-\u5bb9\u5668\u7f16\u6392\u5de5\u5177"},"1.1 \u5bb9\u5668\u7f16\u6392\u5de5\u5177"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"docker \u5b98\u65b9\u7f16\u6392\u5de5\u5177")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker compose    # \u5355\u673a\u7f16\u6392\u5de5\u5177\ndocker swarm      # \u5c06\u591a\u53f0 docker \u63d0\u4f9b\u7684\u8ba1\u7b97\u8d44\u6e90\u6574\u5408\u7684\u63a5\u53e3\uff0c\u968f\u540e docker compose \u7f16\u6392\u7684\u65f6\u5019\u53ea\u9700\u8981\u9762\u5411\u8fd9\u4e2a\u6574\u5408\u7684\u63a5\u53e3\u8fdb\u884c\u7f16\u6392\u5c31\u884c\uff0c\u65e0\u8bba\u63a5\u53e3\u4e0b\u6709\u591a\u5c11\u4e2a\u4e3b\u673a\u3002\ndocker mechine    # \u5c06\u4e00\u4e2a\u4e3b\u673a\u521d\u59cb\u5316\u4e3a\u4e00\u4e2a\u80fd\u591f\u52a0\u5165 docker swarm \u96c6\u7fa4\u4e2d\u7684\u9884\u7f6e\u7a0b\u5e8f\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mesos IDC \u64cd\u4f5c\u7cfb\u7edf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"IDC \u64cd\u4f5c\u7cfb\u7edf\uff0c\u80fd\u5c06\u4e00\u4e2a IDC \u63d0\u4f9b\u7684\u786c\u4ef6\u8d44\u6e90\uff0c\u7edf\u4e00\u8c03\u5ea6\u548c\u5206\u914d\uff0c\u5b83\u53ea\u662f\u4e00\u4e2a\u8d44\u6e90\u5206\u914d\u5de5\u5177\uff0c\u975e\u80fd\u591f\u76f4\u63a5\u6258\u7ba1\u5bb9\u5668\u7684\uff0c\u6240\u4ee5\u5b83\u63d0\u4f9b\u4e86\u4ee5\u4e2a\u80fd\u591f\u76f4\u63a5\u7f16\u6392\u6846\u67b6\uff0cmarathon\u3002\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kubernetes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u76ee\u524d\u6700\u6d41\u884c\u7684\u5bb9\u5668\u7f16\u6392\u5de5\u5177,\u5e02\u573a\u5360\u6709\u7387\u6700\u9ad8\n")),(0,l.kt)("h2",{id:"12-kubernetes"},"1.2 kubernetes"),(0,l.kt)("p",null,"kubernetes \u662f\u5e0c\u814a\u8bed\uff0c\u7ffb\u8bd1\u8fc7\u6765\u662f\uff1a\u8235\u624b\u7684\u610f\u601d\uff0c\u5b83\u7684\u539f\u578b\u662f\u8c37\u6b4c\u5185\u90e8\u4f7f\u7528 Borg \u96c6\u7fa4\u7ba1\u7406\u7cfb\u7edf\uff0c\u53ef\u4ee5\u8bf4\u662f\u96c6\u7ed3\u4e86 Borg \u8bbe\u8ba1\u601d\u60f3\u7684\u7cbe\u534e\uff0c\u5e76\u4e14\u5438\u6536\u4e86 Borg \u7cfb\u7edf\u4e2d\u7684\u7ecf\u9a8c\u548c\u6559\u8bad\u3002"),(0,l.kt)("p",null,"\u5b83\u7684\u76ee\u6807\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u7f16\u6392\u7cfb\u7edf\uff0c\u800c\u662f\u63d0\u4f9b\u4e00\u4e2a\u89c4\u8303\uff0c\u53ef\u4ee5\u8ba9\u4f60\u6765\u63cf\u8ff0\u96c6\u7fa4\u7684\u67b6\u6784\uff0c\u5b9a\u4e49\u670d\u52a1\u7684\u6700\u7ec8\u72b6\u6001\uff0cKubernetes\u53ef\u4ee5\u5e2e\u4f60\u5c06\u7cfb\u7edf\u81ea\u52a8\u5730\u8fbe\u5230\u548c\u7ef4\u6301\u5728\u8fd9\u4e2a\u72b6\u6001\u3002Kubernetes\u4f5c\u4e3a\u4e91\u539f\u751f\u5e94\u7528\u7684\u57fa\u77f3\uff0c\u76f8\u5f53\u4e8e\u4e00\u4e2a\u4e91\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5176\u91cd\u8981\u6027\u4e0d\u8a00\u800c\u55bb\u3002"),(0,l.kt)("p",null,"kubernetes \u5728 2014 \u5e74\u53d1\u5e03\u4e86\u7b2c\u4e00\u4e2a\u7248\u672c\uff0c\u76ee\u524d\u5f00\u6e90\u5e76\u6258\u7ba1\u5728 Github \u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kubernetes"},"https://github.com/Kubernetes")),(0,l.kt)("p",null,"\u76ee\u524d\uff0cAWS\u3001\u963f\u91cc\u4e91\u3001\u5fae\u8f6f\u4e91\uff0c\u76ee\u524d\u5df2\u7ecf\u539f\u751f\u652f\u6301 K8S \uff0c\u76ee\u524d\u5df2\u7ecf\u53ef\u4ee5\u8ba9\u7528\u6237\u76f4\u63a5\u90e8\u7f72\u4e91\u539f\u751f\u7684\u670d\u52a1\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u4ec0\u4e48\u4f18\u52bf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"- \u57fa\u4e8e Borg \u7cfb\u7edf\uff0c\u8bbe\u8ba1\u6210\u719f\uff0c\u5f00\u6e90\u3001\u4e14\u8f7b\u91cf\u7ea7\uff0c\u7b80\u5355\u6613\u5b66\u3001\u5bb9\u6613\u7406\u89e3\uff1b\n- \u6a21\u5757\u5316\uff0c\u53ef\u63d2\u62d4\uff0c\u652f\u6301\u94a9\u5b50\uff0c\u53ef\u4efb\u610f\u7ec4\u5408\uff0c\u4f8b\u5982\uff1a\u7f51\u7edc\u7ec4\u4ef6 flannel\uff0c\u5b58\u50a8\u63d2\u4ef6\uff1b\n- \u6545\u969c\u53d1\u73b0\uff08\u5b58\u6d3b\u6027\u63a2\u9488\uff09\u548c\u81ea\u6211\u4fee\u590d\u80fd\u529b\uff08\u526f\u672c\u6570\u91cf\uff09\u3001\u670d\u52a1\u6eda\u52a8\u5347\u7ea7\uff08\u5c31\u7eea\u63a2\u9488\uff09\u548c\u5728\u7ebf\u6269\u5bb9\uff08\u526f\u672c\u6570\u91cf\uff09\u5bc6\u94a5\u548c\u914d\u7f6e\u7ba1\u7406\uff1b\n- \u53ef\u6269\u5c55\u7684\u8d44\u6e90\u81ea\u52a8\u8c03\u5ea6\u673a\u5236\uff08\u591a\u7ef4\u5ea6\u7684\u6c34\u5e73\u81ea\u52a8\u6269\u5bb9\uff09\u3001\u591a\u7c92\u5ea6\u7684\u8d44\u6e90\u914d\u989d\u7ba1\u7406\u80fd\u529b\uff08\u8d44\u6e90\u9650\u5236\uff09\u3002\n")),(0,l.kt)("h2",{id:"13-\u73af\u5883\u67b6\u6784"},"1.3 \u73af\u5883\u67b6\u6784"),(0,l.kt)("p",null,"Kubernetes \u662f\u4e00\u4e2a\u96c6\u7fa4\uff0c\u6574\u5408\u591a\u53f0\u8ba1\u7b97\u673a\u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u5b83\u662f\u4e00\u79cd\u6709\u4e2d\u5fc3\u8282\u70b9\u6a21\u5f0f\u7684\u96c6\u7fa4\uff0c\u5728 K8S \u96c6\u7fa4\u4e2d\u4e3b\u673a\u5206\u4e3a\u4e24\u79cd\u89d2\u8272\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Master\uff1a\u96c6\u7fa4\u7684\u7ba1\u7406\u8282\u70b9\uff0c\u6709\u4e00\u4e2a\u6216\u8005\u4e00\u7ec4\u8282\u70b9\uff0c\u4e00\u822c 3 \u4e2a\u8db3\u591f\u4e86\u3002\nnodes\uff1a\u63d0\u4f9b\u8ba1\u7b97\u8d44\u6e90\u7684\u8282\u70b9\uff0c\u5c31\u662f\u8fd0\u884c\u5bb9\u5668\u7684\u8282\u70b9\uff0c\u53ef\u4ee5\u6269\u5c55\u3002\n")),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u521b\u5efa\u542f\u52a8\u5bb9\u5668\u7684\u8bf7\u6c42\u4ea4\u7ed9 Master \uff0cMaster \u4e0a\u6709\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u8c03\u5ea6\u5668"),"\u5b83\u80fd\u5206\u6790\u5404 nodes \u8282\u70b9\u4e0a\u7684\u8d44\u6e90\u72b6\u6001\uff0c\u627e\u4e00\u4e2a\u6700\u9002\u5408\u8fd0\u884c\u7528\u6237\u5bb9\u5668\u7684\u8282\u70b9\uff0c\u5e76\u5728\u8fd9\u4e2a\u8282\u70b9\u4e0a\u4f7f\u7528 Docker \u542f\u52a8\u8fd9\u4e2a\u5bb9\u5668\uff0cnode \u8282\u70b9\u7684 Docker \u5728\u542f\u52a8\u5bb9\u5668\u65f6\u5019\u4f1a\u9996\u5148\u68c0\u67e5\u672c\u5730\u6709\u6ca1\u6709\u955c\u50cf\uff0c\u5982\u679c\u6ca1\u6709\u5c31\u4ece\u4ed3\u5e93\u4e2d pull \u7136\u540e\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\u4ed3\u5e93\u53ef\u4ee5\u8fd0\u884c\u4e3a\u5bb9\u5668\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u6258\u7ba1\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u5176\u5b9e Kubernetes \u53ef\u4ee5\u6258\u7ba1\u81ea\u8eab\uff0c\u5373\u81ea\u6258\u7ba1\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ApiServer")),(0,l.kt)("p",null,"kubernetes \u63a5\u6536\u7528\u6237\u521b\u5efa\u5bb9\u5668\u7b49\u8bf7\u6c42\u7684\u662f Kubernetes Cluster\uff0c\u90a3\u4e48\u5b83\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684\u63a5\u53e3\u5c31\u662f\u4e00\u4e2a API \u63a5\u53e3 \uff0c\u8fd9\u4e2a\u63a5\u53e3\u9700\u8981\u7f16\u7a0b\u6765\u8bbf\u95ee\uff0c\u6216\u8005\u901a\u8fc7\u7f16\u5199\u597d\u7684\u5ba2\u6237\u7aef\u7a0b\u5e8f\u6765\u8bbf\u95ee\uff0cKubernetes Master \u4e0a\u6709\u4e00\u4e2a\u7ec4\u4ef6\u5c31\u662f ApiServer\uff0c\u6765\u63a5\u6536\u5ba2\u7aef\u8bf7\u6c42\uff0c\u89e3\u6790\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u5176\u4e3b\u8981\u529f\u80fd\u5305\u62ec\u8ba4\u8bc1\u6388\u6743\u3001\u6570\u636e\u6821\u9a8c\u4ee5\u53ca\u96c6\u7fa4\u72b6\u6001\u53d8\u66f4\uff0c\u4ee5\u53ca\u8d1f\u8d23\u5176\u4ed6\u6a21\u5757\u76f4\u63a5\u7684\u76f8\u4e92\u901a\u8baf\u548c\u6570\u636e\u4ea4\u4e92\uff0c\u53ea\u6709api server\u624d\u80fd\u64cd\u4f5cetcd\uff0c\u5176\u4ed6\u6a21\u5757\u60f3\u8981\u83b7\u53d6\u6570\u636e\u9700\u8981\u901a\u8fc7api server\u63d0\u4f9b\u7684\u63a5\u53e3\u8fdb\u884c\u76f8\u5173\u6570\u636e\u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scheduler")),(0,l.kt)("p",null,"scheduler watch apiserver\uff0c\u63a5\u53d7\u7cfb\u7edf\u6216\u7528\u6237\u8bf7\u6c42\u662f\u8fd0\u884c\uff0c\u5982\u4f55\u8981\u8fd0\u884c\u4e00\u4e2apod\uff0c\u90a3\u4e48 Master \u4f1a\u4f7f\u7528\u8c03\u5ea6\u5668\uff08scheduler\uff09\u6839\u636e\u8bf7\u6c42\u6765\u5206\u914d\u4e00\u4e2a\u80fd\u591f\u8fd0\u884c\u5bb9\u5668\u7684 nodes \u8282\u70b9\uff0c\u4f8b\u5982\uff1a\u6839\u636e\u7528\u6237\u5bf9\u8d44\u6e90\u8981\u6c42\uff0cCPU\u3001\u5185\u5b58\u3001\u6765\u8bc4\u4f30\u54ea\u4e2a nodes \u6700\u5408\u9002\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"\u5927\u6982\u7684\u8fc7\u7a0b\u5c31\u662f\uff1a\u9996\u5148\u662f\u9884\u9009\uff0c\u4ece nodes \u4e2d\u6311\u9009\u51fa\u7b26\u5408\u7528\u6237\u5bb9\u5668\u8fd0\u884c\u8981\u6c42\u7684\uff0c\u7136\u540e\u5728\u8fd9\u4e9b\u9884\u9009\u7ed3\u679c\u4e2d\u8fdb\u884c\u4f18\u9009\uff0c\u9009\u51fa\u6700\u4f73\u7684\u9002\u914d node\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Controller\uff08\u63a7\u5236\u5668\uff09")),(0,l.kt)("p",null,"\u5982\u679c\u8fd0\u884c\u5bb9\u5668\u7684\u8282\u70b9\u5b95\u673a\u6216\u8005\u5bb9\u5668\u672c\u8eab\u8fd0\u884c\u51fa\u73b0\u95ee\u9898\uff0ckubernetes \u80fd\u591f\u5728\u5176\u4ed6\u8282\u70b9\u518d\u542f\u52a8\u4e00\u4e2a\u4e00\u6a21\u4e00\u6837\u7684\u5bb9\u5668\uff0c\u8fd9\u5c31\u662f Kubernetes \u63d0\u4f9b\u7684\u81ea\u6108\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u63a7\u5236\u5668\u5c31\u5b9e\u73b0\u4e86\u76d1\u63a7\u5b83\u6240\u8d1f\u8d23\u7684\u6bcf\u4e00\u4e2a\u5bb9\u5668\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u4e00\u65e6\u53d1\u73b0\u4e0d\u5065\u5eb7\u4e86\uff0c\u90a3\u4e48\u63a7\u5236\u5668\u4f1a\u5411 Master \u53d1\u9001\u8bf7\u6c42\uff0cMaster \u4f1a\u518d\u6b21\u7531\u8c03\u5ea6\u5668\u6311\u9009\u51fa\u5408\u9002\u7684\u8282\u70b9\u518d\u6b21\u8fd0\u884c\u8fd9\u4e2a\u5bb9\u5668\u3002"),(0,l.kt)("p",null,"\u5b83\u80fd\u6301\u7eed\u6027\u63a2\u6d4b\u6240\u7ba1\u7406\u7684\u5bb9\u5668\uff0c\u4e00\u65e6\u4e0d\u5065\u5eb7\uff0c\u6216\u4e0d\u7b26\u5408\u7528\u6237\u5b9a\u4e49\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u5c31\u4f1a\u7531\u5b83\u53d1\u8d77\u6765\u8bf7\u6c42\uff0c\u6765\u4fdd\u8bc1\u5bb9\u5668\u5411\u7528\u6237\u5e0c\u671b\u7684\u5065\u5eb7\u72b6\u6001\u8fc1\u5f99\u3002"),(0,l.kt)("p",null,"\u800c Kubernets \u652f\u6301\u4f17\u591a\u7684\u63a7\u5236\u5668\uff0c\u652f\u6301\u5bb9\u5668\u5065\u5eb7\u7684\u63a7\u5236\u5668\u53ea\u662f\u5176\u4e2d\u4e00\u79cd\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ControllerManager\uff08\u5236\u5668\u7ba1\u7406\u5668\uff09")),(0,l.kt)("p",null,"\u5728 Master \u5185\u7f6e\u7ec4\u4ef6\u4e2d\u6709\u4e00\u4e2a\u63a7\u5236\u5668\u7ba1\u7406\u5668\uff0c\u5b83\u8d1f\u8d23\u76d1\u89c6\u7740\u6bcf\u4e00\u4e2a\u63a7\u5236\u5668\uff0c\u5982\u679c\u63a7\u5236\u5668\u4e0d\u5065\u5eb7\u65e0\u6cd5\u5de5\u4f5c\uff0c\u90a3\u4e48\u7531\u63a7\u5236\u5668\u7ba1\u7406\u5668\u6765\u786e\u4fdd\u63a7\u5236\u5668\u7684\u5065\u5eb7\uff0c\u7531\u4e8e Master \u6709\u591a\u4e2a\uff0c\u6240\u4ee5\u5177\u6709\u5197\u4f59\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pod\uff08\u539f\u5b50\u8c03\u5ea6\u5355\u5143\uff0c\u662f\u5bb9\u5668\u7684\u5c01\u88c5\uff09")),(0,l.kt)("p",null,"\u5728 Kubernetes \u4e0a\u8c03\u5ea6\u7684\u539f\u5b50\u5355\u5143\uff0cKubernetes \u4e0d\u76f4\u63a5\u8c03\u5ea6\u5bb9\u5668\uff0c\u800c\u662f Pod\uff0cPod\u53ef\u4ee5\u7406\u89e3\u4e3a\u5bb9\u5668\u7684\u4e8c\u6b21\u5c01\u88c5\uff0c\u53ef\u4ee5\u7531\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5bb9\u5668\u7ec4\u6210\uff0c\u591a\u4e2a\u5bb9\u5668\u5171\u4eab\u540c\u4e00\u4e2a\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\uff1aNET\u3001UTS\u3001IPC\u3002"),(0,l.kt)("p",null,"\u540c\u4e00\u4e2a POD \u91cc\u7684\u5bb9\u5668\uff0c\u8fd8\u80fd\u5171\u4eab\u540c\u4e00\u4e2a\u5b58\u50a8\u5377\uff0c\u5b58\u50a8\u5377\u53ef\u4ee5\u5c5e\u4e8e POD\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u4e00\u4e2a POD \u53ea\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\uff0c\u5982\u679c\u9700\u8981\u5728POD\u653e\u591a\u4e2a\u5bb9\u5668\uff0c\u90a3\u4e48\u4e00\u822c\u6709\u4e00\u4e2a\u4e3b\u5bb9\u5668\uff0c\u5176\u4ed6\u5bb9\u5668\u662f\u4e3a\u4e3b\u5bb9\u5668\u63d0\u4f9b\u670d\u52a1\u7684\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node\uff08\u5de5\u4f5c\u8282\u70b9\uff09")),(0,l.kt)("p",null,"\u63d0\u4f9b\u8ba1\u7b97\u8d44\u6e90\u7684\u8282\u70b9\uff0c\u5c31\u662f\u8fd0\u884c Pod \u7684\u4e3b\u673a\uff0cKubenetes Cluster \u7edf\u4e00\u7ba1\u7406\u6240\u6709\u7684 node \u8282\u70b9\u7684\u8ba1\u7b97\u8d44\u6e90\uff0c\u5f53\u7528\u6237\u8bf7\u6c42\u521b\u5efa\u8d44\u6e90\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u68c0\u67e5\u76ee\u524d\u96c6\u7fa4\u8fd8\u6709\u6ca1\u6709\u8d44\u6e90\u53ef\u4ee5\u8fd0\u884c\u7528\u6237\u7684\u5bb9\u5668\uff0c\u8fd9\u5b9e\u73b0\u4e86\u7edf\u4e00\u8c03\u5ea6\u7edf\u4e00\u7ba1\u7406\u7684\u4e00\u4e2a\u5e73\u53f0\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Label\uff08\u6807\u7b7e\uff09")),(0,l.kt)("p",null,"\u4e00\u4e2a\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"key = value")," \u7ec4\u6210\u7684\u6807\u7b7e\uff0c\u53ef\u4ee5\u4e3a POD \u6253\u4e0a\u4e00\u4e2a\u6807\u7b7e\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Selecter\uff08\u6807\u7b7e\u9009\u62e9\u5668\uff09")),(0,l.kt)("p",null,"\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u4f17\u591a POD \uff0c\u524d\u9762\u63d0\u5230\u4e00\u4e2a\u63a7\u5236\u5668\u53ef\u4ee5\u7ba1\u7406\u82e5\u5e72\u4e2a POD \uff0c\u90a3\u4e48\u63a7\u5236\u5668\u5982\u4f55\u4ece\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u6240\u6709 POD \u4e2d\u6311\u9009\u51fa\u6765\u81ea\u5df1\u9700\u8981\u7ba1\u7406\u7684 POD \u5462?"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u4e00\u4e2a POD \u7684\u65f6\u5019\u4e3a POD \u6253\u4e0a\u4e00\u4e2a\u6807\u7b7e\uff0c\u8ba9\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u6807\u7b7e\u6765\u8bc6\u522b\u51fa\u6765\u8fd9\u4e2aPOD\uff0c\u8fd8\u53ef\u4ee5\u7528\u6765\u533a\u5206\u4e00\u7ec4\u76f8\u540c\u529f\u80fd\u7684POD\uff0c\u4f8b\u5982\uff1a\u521b\u5efa\u56db\u4e2anginx pod\uff0c\u53ef\u4ee5\u7ed9\u6bcf\u4e2apod\u52a0\u4e00\u4e2a K/V\u7c7b\u578b\u7684\u6807\u7b7e\u5982\uff1aapp=nginx\uff0c\u5c06\u6765\u627e\u51fa\u8fd9\u56db\u4e2a nginx pod\uff0c\u90a3\u4e48\u6761\u4ef6\u5c31\u662f\u6839\u636e \u62e5\u6709 key \u4e3a app \u7684pod \u5e76\u4e14 value \u4e3a nginx \u6765\u6311\u51fa\u8fd9\u7ec4 POD\u3002"),(0,l.kt)("p",null,"\u6807\u7b7e\u4e0d\u662f POD \u552f\u4e00\u5177\u6709\u7684\u673a\u5236\uff0c\u5176\u4ed6\u7684\u7ec4\u4ef6\u540c\u6837\u53ef\u4ee5\u6709\u6807\u7b7e\u3002"),(0,l.kt)("h2",{id:"14-\u67b6\u6784\u548c\u7ec4\u4ef6"},"1.4 \u67b6\u6784\u548c\u7ec4\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Etcd")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u7528\u4e8e Kubernetes \u7684\u540e\u7aef\u6570\u636e\u5b58\u50a8,\u6240\u6709\u96c6\u7fa4\u6570\u636e\u90fd\u5b58\u50a8\u5728\u6b64\u5904\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Master \u8282\u70b9\u8d1f\u8d23\u7ef4\u62a4\u96c6\u7fa4\u7684\u76ee\u6807\u72b6\u6001\uff0c\u4e0a\u9762\u8fd0\u884c\u7684\u4e3b\u63a7\u7ec4\u4ef6\u6709")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kube-apiserver                 # \u5bf9\u5916\u66b4\u9732\u4e86 Kubernetes API\uff0c\u5b83\u662f\u7684 Kubernetes \u524d\u7aef\u63a7\u5236\u5c42\uff0c\u53ea\u6709 API Server \u4f1a\u4e0e etcd \u901a\u4fe1\uff0c\u5176\u5b83\u6a21\u5757\u90fd\u5fc5\u987b\u901a\u8fc7 API Server \u8bbf\u95ee\u96c6\u7fa4\u72b6\u6001\nkube-controller-manager        # \u5904\u7406\u96c6\u7fa4\u4e2d\u5e38\u89c4\u4efb\u52a1\uff0c\u5b83\u662f\u5355\u72ec\u7684\u8fdb\u7a0b\uff0c\u5185\u90e8\u5305\u542b\u591a\u4e2a\u63a7\u5236\u5668\uff0c\u4f8b\u5982\u7ef4\u62a4 POD \u6570\u91cf\nkube-scheduler                 # \u76d1\u89c6\u65b0\u521b\u5efa\u7684 Pod \u4e3a\u65b0\u521b\u5efa\u7684 POD \u5206\u914d\u5408\u9002\u7684 node \u8282\u70b9\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node \u8282\u70b9\u5b9e\u9645\u8d1f\u8d23\u5b9e\u65bd\uff0c\u4e5f\u5c31\u662f\u8fd0\u884c POD \u7684\u8282\u70b9\uff0c\u4e0a\u9762\u8fd0\u884c\u7684\u7ec4\u4ef6\u6709")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubelet                        # \u8282\u70b9\u81ea\u6ce8\u518c\u548c\u8282\u70b9\u72b6\u6001\u66f4\u65b0\uff0c\u5b83\u76d1\u6d4b\u5df2\u7ecf\u5206\u914d\u7ed9\u81ea\u5df1\u7684 Pod\uff0c\u4e3a POD \u51c6\u5907\u5377\uff0c\u4e0b\u8f7d POD \u6240\u9700\u7684 Secret\uff0c\u4e0b\u8f7d\u955c\u50cf\u5e76\u8fd0\u884c\uff0c\u8fdb\u884c\u751f\u547d\u5468\u671f\u63a2\u6d4b\uff0c\u4e0a\u62a5 POD \u548c\u8282\u70b9\u72b6\u6001\nkube-proxy                     # \u901a\u8fc7\u7ef4\u62a4\u4e3b\u673a\u4e0a\u7684\u7f51\u7edc\u89c4\u5219\u5e76\u6267\u884c\u8fde\u63a5\u8f6c\u53d1\uff0c\u5c06 Kubernetes \u63d0\u4f9b\u7684\u7f51\u7edc\u670d\u52a1\u4ee3\u7406\u5230\u6bcf\u4e2a\u8282\u70b9\u4e0a\uff0c\u5b9e\u73b0\u4e86Kubernetes\u670d\u52a1\u62bd\u8c61\ndocker                         # \u7528\u4e8e\u8fd0\u884c\u5bb9\u5668\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u63d2\u4ef6\u662f\u589e\u5f3a\u96c6\u7fa4\u529f\u80fd\u7684 Pod \u548c Service,\u63d2\u4ef6\u5bf9\u8c61\u672c\u8eab\u662f\u53d7\u547d\u540d\u7a7a\u95f4\u9650\u5236\u7684,\u88ab\u521b\u5efa\u4e8e kube-system \u547d\u540d\u7a7a\u95f4.\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DNS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u867d\u7136\u5176\u4ed6\u63d2\u4ef6\u5e76\u4e0d\u662f\u5fc5\u9700\u7684,\u4f46\u6240\u6709 Kubernetes \u96c6\u7fa4\u90fd\u5e94\u8be5\u5177\u6709Cluster DNS,\u8bb8\u591a\u5e94\u7528\u4f9d\u8d56\u4e8e\u5b83,\u4e3a Kubernetes \u670d\u52a1\u63d0\u4f9bDNS\u8bb0\u5f55,\u5bb9\u5668\u542f\u52a8\u8be5\u540e\u4f1a\u81ea\u52a8\u5c06 DNS \u670d\u52a1\u5668\u5305\u542b\u5728 resolv.conf \u4e2d.\n")))}c.isMDXComponent=!0}}]);