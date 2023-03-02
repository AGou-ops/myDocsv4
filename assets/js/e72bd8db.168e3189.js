"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[4377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const l={},o="Amazon EKS Basic",r={unversionedId:"CloudNative/CloudComptering/Amazon EKS Basic",id:"CloudNative/CloudComptering/Amazon EKS Basic",title:"Amazon EKS Basic",description:"\u5b89\u88c5aws cli\u5ba2\u6237\u7aef\u5de5\u5177",source:"@site/docs/CloudNative/CloudComptering/Amazon EKS Basic.md",sourceDirName:"CloudNative/CloudComptering",slug:"/CloudNative/CloudComptering/Amazon EKS Basic",permalink:"/docs/CloudNative/CloudComptering/Amazon EKS Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/CloudComptering/Amazon EKS Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"\u4e34\u65f6",permalink:"/docs/CloudNative/CloudComptering/Aliyun/Untitled"},next:{title:"Amazon Web Services",permalink:"/docs/CloudNative/CloudComptering/Amazon Web Services"}},i={},c=[{value:"\u5b89\u88c5<code>aws cli</code>\u5ba2\u6237\u7aef\u5de5\u5177",id:"\u5b89\u88c5aws-cli\u5ba2\u6237\u7aef\u5de5\u5177",level:2},{value:"\u4e3a\u7528\u6237\u751f\u6210\u53ef\u4f9b\u4f7f\u7528\u7684\u5b89\u5168\u8bc1\u4e66",id:"\u4e3a\u7528\u6237\u751f\u6210\u53ef\u4f9b\u4f7f\u7528\u7684\u5b89\u5168\u8bc1\u4e66",level:3},{value:"\u6dfb\u52a0<code>IAM</code>\u7528\u6237\u6388\u6743",id:"\u6dfb\u52a0iam\u7528\u6237\u6388\u6743",level:2},{value:"\u5b89\u88c5<code>eksctl</code>\u5ba2\u6237\u7aef\u5de5\u5177",id:"\u5b89\u88c5eksctl\u5ba2\u6237\u7aef\u5de5\u5177",level:2},{value:"\u90e8\u7f72<code>EKS</code>\u96c6\u7fa4",id:"\u90e8\u7f72eks\u96c6\u7fa4",level:2},{value:"\u4f7f\u7528<code>kubectl</code>\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",id:"\u4f7f\u7528kubectl\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u4f7f\u7528<code>eksctl</code>\u5220\u9664<code>EKS</code>\u96c6\u7fa4",id:"\u4f7f\u7528eksctl\u5220\u9664eks\u96c6\u7fa4",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"amazon-eks-basic"},"Amazon EKS Basic"),(0,s.kt)("h2",{id:"\u5b89\u88c5aws-cli\u5ba2\u6237\u7aef\u5de5\u5177"},"\u5b89\u88c5",(0,s.kt)("inlineCode",{parentName:"h2"},"aws cli"),"\u5ba2\u6237\u7aef\u5de5\u5177"),(0,s.kt)("p",null,"\u53c2\u8003\u6307\u5357: ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/cli-chap-install.html"},"https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/cli-chap-install.html")),(0,s.kt)("h3",{id:"\u4e3a\u7528\u6237\u751f\u6210\u53ef\u4f9b\u4f7f\u7528\u7684\u5b89\u5168\u8bc1\u4e66"},"\u4e3a\u7528\u6237\u751f\u6210\u53ef\u4f9b\u4f7f\u7528\u7684\u5b89\u5168\u8bc1\u4e66"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/aws%20iam-2.png",alt:null})),(0,s.kt)("h2",{id:"\u6dfb\u52a0iam\u7528\u6237\u6388\u6743"},"\u6dfb\u52a0",(0,s.kt)("inlineCode",{parentName:"h2"},"IAM"),"\u7528\u6237\u6388\u6743"),(0,s.kt)("p",null,"\u53ef\u7ed9\u4e88\u7ba1\u7406\u5458\u6743\u9650(\u5982\u4e0b\u56fe\u6240\u793a):"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/aws%20iam.png",alt:null})),(0,s.kt)("p",null,"\u5176\u4ed6",(0,s.kt)("inlineCode",{parentName:"p"},"IAM"),"\u7ba1\u7406\u53c2\u8003\u5b98\u65b9\u6307\u5357: ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/introduction.html"},"https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/introduction.html")),(0,s.kt)("h2",{id:"\u5b89\u88c5eksctl\u5ba2\u6237\u7aef\u5de5\u5177"},"\u5b89\u88c5",(0,s.kt)("inlineCode",{parentName:"h2"},"eksctl"),"\u5ba2\u6237\u7aef\u5de5\u5177"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"eks"),"ctl\u5b98\u65b9\u4ed3\u5e93: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/eksctl"},"https://github.com/weaveworks/eksctl")),(0,s.kt)("p",null,"\u4e0b\u8f7d\u5408\u9002\u7248\u672c\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u5305: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/eksctl/releases"},"https://github.com/weaveworks/eksctl/releases")),(0,s.kt)("p",null,"\u5c06\u4e0b\u8f7d\u597d\u7684\u7a0b\u5e8f\u653e\u7f6e\u5230\u73af\u5883\u53d8\u91cf\u5305\u542b\u7684\u6587\u4ef6\u5939\u4e4b\u4e2d\u5373\u53ef, ",(0,s.kt)("inlineCode",{parentName:"p"},"Linux"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Windows"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"MacOS"),"\u7cfb\u7edf\u90fd\u662f\u5982\u6b64."),(0,s.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e\u68c0\u67e5\u662f\u5426\u6210\u529f\u5b89\u88c5, \u6253\u5f00",(0,s.kt)("inlineCode",{parentName:"p"},"cmd \u547d\u4ee4\u6307\u793a\u7b26"),"(Windows \u7cfb\u7edf):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\Users\\Administrator>eksctl version\n0.27.0\n# \u8f93\u51fa\u4ee5\u4e0a\u7248\u672c\u4fe1\u606f\u5219\u8868\u660e\u5b89\u88c5\u5df2\u7ecf\u5b8c\u6210\n")),(0,s.kt)("h2",{id:"\u90e8\u7f72eks\u96c6\u7fa4"},"\u90e8\u7f72",(0,s.kt)("inlineCode",{parentName:"h2"},"EKS"),"\u96c6\u7fa4"),(0,s.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\u4ee5\u90e8\u7f72\u96c6\u7fa4\u670d\u52a1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'C:\\Users\\Administrator>eksctl create cluster --name test-cluster --version 1.17 --region ap-east-1 --nodegroup-name linux-nodes --node-type=t3.micro --nodes 2\n[\u2139]  eksctl version 0.27.0\n[\u2139]  using region ap-east-1\n[\u2139]  setting availability zones to [ap-east-1a ap-east-1c ap-east-1b]\n[\u2139]  subnets for ap-east-1a - public:192.168.0.0/19 private:192.168.96.0/19\n[\u2139]  subnets for ap-east-1c - public:192.168.32.0/19 private:192.168.128.0/19\n[\u2139]  subnets for ap-east-1b - public:192.168.64.0/19 private:192.168.160.0/19\n[\u2139]  nodegroup "linux-nodes" will use "ami-004c6d9e8cfe1a936" [AmazonLinux2/1.17]\n[\u2139]  using Kubernetes version 1.17\n[\u2139]  creating EKS cluster "test-cluste" in "ap-east-1" region with un-managed nodes\n[\u2139]  will create 2 separate CloudFormation stacks for cluster itself and the initial nodegroup\n[\u2139]  if you encounter any issues, check CloudFormation console or try \'eksctl utils describe-stacks --region=ap-east-1 --cluster=test-cluste\'\n[\u2139]  CloudWatch logging will not be enabled for cluster "test-cluste" in "ap-east-1"\n[\u2139]  you can enable it with \'eksctl utils update-cluster-logging --region=ap-east-1 --cluster=test-cluste\'\n[\u2139]  Kubernetes API endpoint access will use default of {publicAccess=true, privateAccess=false} for cluster "test-cluste" in "ap-east-1"\n[\u2139]  2 sequential tasks: { create cluster control plane "test-cluste", 2 sequential sub-tasks: { no tasks, create nodegroup "linux-nodes" } }\n[\u2139]  building cluster stack "eksctl-test-cluste-cluster"\n[\u2139]  deploying stack "eksctl-test-cluste-cluster"\n[\u2139]  building nodegroup stack "eksctl-test-cluste-nodegroup-linux-nodes"\n[\u2139]  --nodes-min=2 was set automatically for nodegroup linux-nodes\n[\u2139]  --nodes-max=2 was set automatically for nodegroup linux-nodes\n[\u2139]  deploying stack "eksctl-test-cluste-nodegroup-linux-nodes"\n[\u2139]  waiting for the control plane availability...\n[\u2714]  saved kubeconfig as "C:\\\\Users\\\\Administrator/.kube/config"\n[\u2139]  no tasks\n[\u2714]  all EKS cluster resources for "test-cluste" have been created\n[\u2139]  adding identity "arn:aws:iam::657565858235:role/eksctl-test-cluste-nodegroup-linu-NodeInstanceRole-18M4CYW81A99T" to auth ConfigMap\n[\u2139]  nodegroup "linux-nodes" has 1 node(s)\n[\u2139]  node "ip-192-168-89-250.ap-east-1.compute.internal" is not ready\n[\u2139]  waiting for at least 2 node(s) to become ready in "linux-nodes"\n[\u2139]  nodegroup "linux-nodes" has 2 node(s)\n[\u2139]  node "ip-192-168-23-105.ap-east-1.compute.internal" is ready\n[\u2139]  node "ip-192-168-89-250.ap-east-1.compute.internal" is ready\n[\u2139]  kubectl command should work with "C:\\\\Users\\\\Administrator/.kube/config", try \'kubectl get nodes\'\n[\u2714]  EKS cluster "test-cluste" in "ap-east-1" region is ready\n')),(0,s.kt)("p",null,"\u53c2\u6570\u8bf4\u660e:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--name"),": \u5373\u96c6\u7fa4\u7684\u540d\u79f0;."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--version"),": k8s\u7248\u672c;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--region"),": \u521b\u5efa",(0,s.kt)("inlineCode",{parentName:"li"},"ec2"),"\u4e3b\u673a\u7684\u5730\u57df;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--nodegroup"),": \u8282\u70b9\u6240\u5c5e\u7ec4;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--node-type"),": \u5b9e\u4f8b\u4e3b\u673a(node)\u7684\u7c7b\u578b;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--nodes"),": \u8282\u70b9\u6570.")),(0,s.kt)("p",null,"\u7b49\u5f85",(0,s.kt)("inlineCode",{parentName:"p"},"Ready"),"\u4e4b\u540e, \u5206\u522b\u767b\u5f55",(0,s.kt)("inlineCode",{parentName:"p"},"Amazon EKS"),"\u63a7\u5236\u53f0\u548c",(0,s.kt)("inlineCode",{parentName:"p"},"aws"),"\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"ec2"),"\u63a7\u5236\u53f0, \u53ef\u4ee5\u53d1\u73b0\u521b\u5efa\u597d\u7684\u5b9e\u4f8b:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/amazon%20EKS.png",alt:"Amazon EKS"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/others/20200913163437.png",alt:"EC2 dashboard"})),(0,s.kt)("h3",{id:"\u4f7f\u7528kubectl\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"},"\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"h3"},"kubectl"),"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"),(0,s.kt)("p",null,"\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"eksctl"),"\u90e8\u7f72\u597d\u96c6\u7fa4\u4e4b\u540e, \u4f1a\u81ea\u52a8\u751f\u6210",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig"),", \u53ef\u4ee5\u76f4\u63a5\u5728\u5ba2\u6237\u673a\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u5de5\u5177\u8fde\u63a5\u81f3\u96c6\u7fa4:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\Users\\Administrator>kubectl cluster-info\nKubernetes master is running at https://100AE2D3CC8AE36B32810F469B566E5B.yl4.ap-east-1.eks.amazonaws.com\nCoreDNS is running at https://100AE2D3CC8AE36B32810F469B566E5B.yl4.ap-east-1.eks.amazonaws.com/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n\nC:\\Users\\Administrator>kubectl get nodes\nNAME                                           STATUS   ROLES    AGE   VERSION\nip-192-168-23-105.ap-east-1.compute.internal   Ready    <none>   18m   v1.17.9-eks-4c6976\nip-192-168-89-250.ap-east-1.compute.internal   Ready    <none>   18m   v1.17.9-eks-4c6976\n")),(0,s.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,s.kt)("h3",{id:"\u4f7f\u7528eksctl\u5220\u9664eks\u96c6\u7fa4"},"\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"h3"},"eksctl"),"\u5220\u9664",(0,s.kt)("inlineCode",{parentName:"h3"},"EKS"),"\u96c6\u7fa4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'C:\\Users\\Administrator>eksctl delete cluster --name test-cluste\n[\u2139]  eksctl version 0.27.0\n[\u2139]  using region ap-east-1\n[\u2139]  deleting EKS cluster "test-cluste"\n[\u2139]  either account is not authorized to use Fargate or region ap-east-1 is not supported. Ignoring error\n[\u2714]  kubeconfig has been updated\n[\u2139]  cleaning up AWS load balancers created by Kubernetes objects of Kind Service or Ingress\n[\u2139]  2 sequential tasks: { delete nodegroup "linux-nodes", delete cluster control plane "test-cluste" [async] }\n[\u2139]  will delete stack "eksctl-test-cluste-nodegroup-linux-nodes"\n[\u2139]  waiting for stack "eksctl-test-cluste-nodegroup-linux-nodes" to get deleted\n[\u2139]  will delete stack "eksctl-test-cluste-cluster"\n[\u2714]  all cluster resources were deleted\n')),(0,s.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Amazon EKS Documentation: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/zh_cn/eks/index.html"},"https://docs.aws.amazon.com/zh_cn/eks/index.html"))))}p.isMDXComponent=!0}}]);