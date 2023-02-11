"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[9415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=l,d=c["".concat(o,".").concat(u)]||c[u]||h[u]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45751:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={},i="Helm Basic",s={unversionedId:"CloudNative/k8s/Helm/Helm Basic",id:"CloudNative/k8s/Helm/Helm Basic",title:"Helm Basic",description:"## The package manager for Kubernetes",source:"@site/docs/CloudNative/k8s/Helm/Helm Basic.md",sourceDirName:"CloudNative/k8s/Helm",slug:"/CloudNative/k8s/Helm/Helm Basic",permalink:"/docs/CloudNative/k8s/Helm/Helm Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/k8s/Helm/Helm Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Helm",permalink:"/docs/category/helm"},next:{title:"Helm/GO Template",permalink:"/docs/CloudNative/k8s/Helm/Helm\uff08Go\uff09template"}},o={},m=[{value:"Helm Installation",id:"helm-installation",level:2},{value:"From the Binary Releases",id:"from-the-binary-releases",level:3},{value:"Helm command",id:"helm-command",level:2},{value:"\u81ea\u5b9a\u4e49<code>chart</code>",id:"\u81ea\u5b9a\u4e49chart",level:2},{value:"\u5168\u5c40<code>value</code>",id:"\u5168\u5c40value",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],p={toc:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"helm-basic"},"Helm Basic"),(0,l.kt)("blockquote",null,(0,l.kt)("h2",{parentName:"blockquote",id:"the-package-manager-for-kubernetes"},"The package manager for Kubernetes"),(0,l.kt)("h3",{parentName:"blockquote",id:"helm-is-the-best-way-to-find-share-and-use-software-built-for-kubernetes"},"Helm is the best way to find, share, and use software built for Kubernetes.")),(0,l.kt)("h2",{id:"helm-installation"},"Helm Installation"),(0,l.kt)("h3",{id:"from-the-binary-releases"},"From the Binary Releases"),(0,l.kt)("p",null,"Every ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"release")," of Helm provides binary releases for a variety of OSes. These binary versions can be manually downloaded and installed."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download your ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/helm/releases"},"desired version")),(0,l.kt)("li",{parentName:"ol"},"Unpack it (",(0,l.kt)("inlineCode",{parentName:"li"},"tar -zxvf helm-v2.0.0-linux-amd64.tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"Find the ",(0,l.kt)("inlineCode",{parentName:"li"},"helm")," binary in the unpacked directory, and move it to its desired destination (",(0,l.kt)("inlineCode",{parentName:"li"},"mv linux-amd64/helm /usr/local/bin/helm"),")")),(0,l.kt)("h2",{id:"helm-command"},"Helm command"),(0,l.kt)("p",null,"\u2139\ufe0f\u6ce8\u610f: \u4ee5\u4e0b\u4f7f\u7528\u7684\u5747\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Helm v3.0+"),"\u7248\u672c, ",(0,l.kt)("inlineCode",{parentName:"p"},"helm v2.0+"),"\u7248\u672c\u7565\u6709\u4e0d\u540c."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5f53\u524d\u4ed3\u5e93\u4fe1\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo list\nNAME    URL\nenapter https://enapter.github.io/charts/\nhkube   https://hkube.io/helm\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4ed3\u5e93")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo add https://enapter.github.io/charts/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,l.kt)("inlineCode",{parentName:"li"},"repo"),"\u76f8\u5173\u5b50\u547d\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm remove <REPO_NAME>   # \u79fb\u9664\u4e00\u4e2a\u4ed3\u5e93\n$ helm repo update      # \u540c\u6b65\u4ed3\u5e93\u5185\u5bb9\nHang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "enapter" chart repository\n...Successfully got an update from the "hkube" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u641c\u5bfb\u672c\u5730/\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"charts"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u6240\u6709\n$ helm search hub\nURL                                                     CHART VERSION           APP VERSION                             DESCRIPTION      \nhttps://hub.helm.sh/charts/citrix/citrix-cloud-...      1.0.0                   1.0.0                                   A Helm chart for deploying all Citrix Cloud Nat...\nhttps://hub.helm.sh/charts/citrix/citrix-node-c...      2.0.0                   2.0.0                                   A Helm chart for Citrix k8s node controller\nhttps://hub.helm.sh/charts/citrix/citrix-ipam-c...      0.0.1                   0.0.1                                   A Helm chart for Citrix IPAM Controller which a...\nhttps://hub.helm.sh/charts/citrix/citrix-observ...      1.2.001                 1.2.001                                 A Helm chart for Citrix Observability Exporter\n...\n# \u83b7\u53d6hub\u4e0a\u7684\u6307\u5b9acharts\n$ helm search hub redis-ha\nURL                                                     CHART VERSION   APP VERSION     DESCRIPTION                                      \nhttps://hub.helm.sh/charts/stable/redis-ha              4.4.4           5.0.6           Highly available Kubernetes implementation of R...\nhttps://hub.helm.sh/charts/hkube/redis-ha               3.6.1005        5.0.5           Highly available Kubernetes implementation of R...\nhttps://hub.helm.sh/charts/dandydeveloper/redis-ha      4.9.3           5.0.6           Highly available Kubernetes implementation of R...\n# \u83b7\u53d6\u672c\u5730charts\n$ helm search repo redis\nNAME            CHART VERSION   APP VERSION     DESCRIPTION\nhkube/redis-ha  3.6.1005        5.0.5           Highly available Kubernetes implementation of R...\nenapter/keydb   0.14.0          6.0.16          A Helm chart for KeyDB multimaster setup\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"li"},"chart"),"\u7684\u4ecb\u7ecd\u4fe1\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm inspect chart hkube/redis-ha\napiVersion: v1\nappVersion: 5.0.5\ndescription: Highly available Kubernetes implementation of Redis\nhome: http://redis.io/\nicon: https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Redis_Logo.svg/1200px-Redis_Logo.svg.png\nkeywords:\n- redis\n- keyvalue\n- database\nmaintainers:\n- email: salimsalaues@gmail.com\n  name: ssalaues\nname: redis-ha\nsources:\n- https://redis.io/download\n- https://github.com/scality/Zenko/tree/development/1.0/kubernetes/zenko/charts/redis-ha\n- https://github.com/oliver006/redis_exporter\nversion: 3.6.1005\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"li"},"chart"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install hkube/redis-ha --version 3.6.1005  --generate-name\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,l.kt)("inlineCode",{parentName:"li"},"install"),"\u76f8\u5173\u5b50\u547d\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u672c\u5730chart\n$ helm install -f myvalues.yaml myredis ./redis\n* `-f`: \u6307\u660e\u6587\u4ef6,\u8986\u76d6\u53d8\u91cf\n* `--set name=prod`: \u547d\u4ee4\u884c\u5408\u5e76\u6216\u8986\u76d6\u53d8\u91cf\n$ helm install --dry-run --debug --set test_var=NEW test ../../test/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5378\u8f7d",(0,l.kt)("inlineCode",{parentName:"li"},"chart"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall redis-ha-1601859332\nrelease "redis-ha-1601859332" uninstalled\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5e76\u89e3\u538b\u7f29",(0,l.kt)("inlineCode",{parentName:"li"},"chart"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm pull hkube/redis-ha --untar --untardir .\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6253\u5305",(0,l.kt)("inlineCode",{parentName:"li"},"chart"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm package keydb\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u62c9\u53d6\u4f9d\u8d56")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm dependency update\n")),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49chart"},"\u81ea\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"h2"},"chart")),(0,l.kt)("p",null,"\u521b\u5efa\u81ea\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"chart"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm create mychart\n# \u521d\u59cb\u5316\u76ee\u5f55\u5982\u4e0b\u6240\u793a\n$ helm create mychart\nCreating mychart\n$ tree mychart/\nmychart/\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 charts\n\u251c\u2500\u2500 templates\n\u2502\xa0\xa0 \u251c\u2500\u2500 NOTES.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 _helpers.tpl\n\u2502\xa0\xa0 \u251c\u2500\u2500 deployment.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 hpa.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 ingress.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 service.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 serviceaccount.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u2502\xa0\xa0     \u2514\u2500\u2500 test-connection.yaml\n\u2514\u2500\u2500 values.yaml\n\n3 directories, 10 files\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),"\u6587\u4ef6\u662fchart\u5fc5\u9700\u7684\u3002\u5305\u542b\u4e86\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chart API \u7248\u672c \uff08\u5fc5\u9700\uff09\nname: chart\u540d\u79f0 \uff08\u5fc5\u9700\uff09\nversion: \u8bed\u4e49\u53162 \u7248\u672c\uff08\u5fc5\u9700\uff09\nkubeVersion: \u517c\u5bb9Kubernetes\u7248\u672c\u7684\u8bed\u4e49\u5316\u7248\u672c\uff08\u53ef\u9009\uff09   \u793a\u4f8b: >= 1.13.0 < 1.15.0\ndescription: \u4e00\u53e5\u8bdd\u5bf9\u8fd9\u4e2a\u9879\u76ee\u7684\u63cf\u8ff0\uff08\u53ef\u9009\uff09\ntype: chart\u7c7b\u578b \uff08\u53ef\u9009\uff09\nkeywords:\n  - \u5173\u4e8e\u9879\u76ee\u7684\u4e00\u7ec4\u5173\u952e\u5b57\uff08\u53ef\u9009\uff09\nhome: \u9879\u76eehome\u9875\u9762\u7684URL \uff08\u53ef\u9009\uff09\nsources:\n  - \u9879\u76ee\u6e90\u7801\u7684URL\u5217\u8868\uff08\u53ef\u9009\uff09\ndependencies: # chart \u5fc5\u8981\u6761\u4ef6\u5217\u8868 \uff08\u53ef\u9009\uff09\n  - name: chart\u540d\u79f0 (nginx)\n    version: chart\u7248\u672c ("1.2.3")\n    repository: \u4ed3\u5e93URL ("https://example.com/charts") \u6216\u522b\u540d ("@repo-name")\n    condition: \uff08\u53ef\u9009\uff09 \u89e3\u6790\u4e3a\u5e03\u5c14\u503c\u7684yaml\u8def\u5f84\uff0c\u7528\u4e8e\u542f\u7528/\u7981\u7528chart (e.g. subchart1.enabled )\n    tags: # \uff08\u53ef\u9009\uff09\n      - \u7528\u4e8e\u4e00\u6b21\u542f\u7528/\u7981\u7528 \u4e00\u7ec4chart\u7684tag\n    enabled: \uff08\u53ef\u9009\uff09 \u51b3\u5b9a\u662f\u5426\u52a0\u8f7dchart\u7684\u5e03\u5c14\u503c\n    import-values: # \uff08\u53ef\u9009\uff09\n      - ImportValue \u4fdd\u5b58\u6e90\u503c\u5230\u5bfc\u5165\u7236\u952e\u7684\u6620\u5c04\u3002\u6bcf\u9879\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u8005\u4e00\u5bf9\u5b50/\u7236\u5217\u8868\u9879\n    alias: \uff08\u53ef\u9009\uff09 chart\u4e2d\u4f7f\u7528\u7684\u522b\u540d\u3002\u5f53\u4f60\u8981\u591a\u6b21\u6dfb\u52a0\u76f8\u540c\u7684chart\u65f6\u4f1a\u5f88\u6709\u7528\nmaintainers: # \uff08\u53ef\u9009\uff09\n  - name: \u7ef4\u62a4\u8005\u540d\u5b57 \uff08\u6bcf\u4e2a\u7ef4\u62a4\u8005\u90fd\u9700\u8981\uff09\n    email: \u7ef4\u62a4\u8005\u90ae\u7bb1 \uff08\u6bcf\u4e2a\u7ef4\u62a4\u8005\u53ef\u9009\uff09\n    url: \u7ef4\u62a4\u8005URL \uff08\u6bcf\u4e2a\u7ef4\u62a4\u8005\u53ef\u9009\uff09\nicon: \u7528\u505aicon\u7684SVG\u6216PNG\u56fe\u7247URL \uff08\u53ef\u9009\uff09\nappVersion: \u5305\u542b\u7684\u5e94\u7528\u7248\u672c\uff08\u53ef\u9009\uff09\u3002\u4e0d\u9700\u8981\u662f\u8bed\u4e49\u5316\u7684\ndeprecated: \u4e0d\u88ab\u63a8\u8350\u7684chart/\u88ab\u5f03\u7528chart \uff08\u53ef\u9009\uff0c\u5e03\u5c14\u503c\uff09\nannotations:\n  example: \u6309\u540d\u79f0\u8f93\u5165\u7684\u6279\u6ce8\u5217\u8868 \uff08\u53ef\u9009\uff09.\n')),(0,l.kt)("p",null,"\u5176\u4ed6\u5b57\u6bb5\u5c06\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("h3",{id:"\u5168\u5c40value"},"\u5168\u5c40",(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,'\u4ece2.0.0-Alpha.2\u5f00\u59cb\uff0cHelm \u652f\u6301\u7279\u6b8a\u7684"global"\u503c\u3002(\u5982\u679c\u4e0d\u5355\u72ec\u8bbe\u7f6e, \u5219',(0,l.kt)("inlineCode",{parentName:"p"},"charts"),"\u6587\u4ef6\u5939\u4e2d\u7684chart\u65e0\u6cd5\u5171\u4eab\u4f7f\u7528\u8be5\u53d8\u91cf)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  app: MyWordPress\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u6dfb\u52a0\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"global"),"\u90e8\u5206\u548c\u4e00\u4e2a\u503c",(0,l.kt)("inlineCode",{parentName:"p"},"app: MyWordPress"),"\u3002\u8fd9\u4e2a\u503c\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},".Values.global.app"),"\u5728 ",(0,l.kt)("em",{parentName:"p"},"\u6240\u6709")," chart\u4e2d\u6709\u6548, ",(0,l.kt)("strong",{parentName:"p"},"\u7236chart\u7684\u5168\u5c40\u53d8\u91cf\u4f18\u5148\u4e8e\u5b50chart\u4e2d\u7684\u5168\u5c40\u53d8\u91cf\u3002")),(0,l.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Helm Docs: ",(0,l.kt)("a",{parentName:"li",href:"https://v2.helm.sh/docs"},"https://v2.helm.sh/docs")),(0,l.kt)("li",{parentName:"ul"},"Helm commands: ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/"},"https://helm.sh/docs/helm/")),(0,l.kt)("li",{parentName:"ul"},"Helm Variables: ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/builtin_objects/"},"https://helm.sh/docs/chart_template_guide/builtin_objects/"))))}h.isMDXComponent=!0}}]);