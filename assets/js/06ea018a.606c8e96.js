"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[9705],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(k,o(o({ref:n},i),{},{components:t})):r.createElement(k,o({ref:n},i))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(87462),l=(t(67294),t(3905));const a={},o="Consul \u5165\u95e8",s={unversionedId:"CloudNative/Consul \u5165\u95e8",id:"CloudNative/Consul \u5165\u95e8",title:"Consul \u5165\u95e8",description:"Consul \u7b80\u4ecb",source:"@site/docs/CloudNative/Consul \u5165\u95e8.md",sourceDirName:"CloudNative",slug:"/CloudNative/Consul \u5165\u95e8",permalink:"/docs/CloudNative/Consul \u5165\u95e8",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/Consul \u5165\u95e8.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"\u4f7f\u7528curl\u8bbf\u95eek8s\u7684REST API",permalink:"/docs/CloudNative/k8s/\u5c0f\u6280\u5de7/\u4f7f\u7528curl\u8bbf\u95eek8s\u7684REST API"},next:{title:"Dubbo Basic",permalink:"/docs/CloudNative/Dubbo Basic"}},c={},u=[{value:"Consul \u7b80\u4ecb",id:"consul-\u7b80\u4ecb",level:2},{value:"Consul \u57fa\u7840\u67b6\u6784",id:"consul-\u57fa\u7840\u67b6\u6784",level:3},{value:"Consul \u5b89\u88c5\u4e0e\u914d\u7f6e",id:"consul-\u5b89\u88c5\u4e0e\u914d\u7f6e",level:2},{value:"\u4f7f\u7528\u5b98\u65b9\u4e8c\u8fdb\u5236\u5305",id:"\u4f7f\u7528\u5b98\u65b9\u4e8c\u8fdb\u5236\u5305",level:3},{value:"\u4f7f\u7528 Docker \u90e8\u7f72",id:"\u4f7f\u7528-docker-\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 docker-compose \u5feb\u901f\u90e8\u7f72",id:"\u4f7f\u7528-docker-compose-\u5feb\u901f\u90e8\u7f72",level:4},{value:"\u670d\u52a1\u6ce8\u518c",id:"\u670d\u52a1\u6ce8\u518c",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],i={toc:u};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"consul-\u5165\u95e8"},"Consul \u5165\u95e8"),(0,l.kt)("h2",{id:"consul-\u7b80\u4ecb"},"Consul \u7b80\u4ecb"),(0,l.kt)("p",null,"Consul \u662f\u57fa\u4e8e GO \u8bed\u8a00\u5f00\u53d1\u7684\u5f00\u6e90\u5de5\u5177\uff0c\u4e3b\u8981\u9762\u5411\u5206\u5e03\u5f0f\uff0c\u670d\u52a1\u5316\u7684\u7cfb\u7edf\u63d0\u4f9b\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u7684\u529f\u80fd\u3002Consul \u63d0\u4f9b\u670d\u52a1\u6ce8\u518c/\u53d1\u73b0\u3001\u5065\u5eb7\u68c0\u67e5\u3001Key/Value\u5b58\u50a8\u3001\u591a\u6570\u636e\u4e2d\u5fc3\u548c\u5206\u5e03\u5f0f\u4e00\u81f4\u6027\u4fdd\u8bc1\u7b49\u529f\u80fd\u3002\u4e4b\u524d\u6211\u4eec\u901a\u8fc7 Prometheus \u5b9e\u73b0\u76d1\u63a7\uff0c\u5f53\u65b0\u589e\u4e00\u4e2a Target \u65f6\uff0c\u9700\u8981\u53d8\u66f4\u670d\u52a1\u5668\u4e0a\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5373\u4f7f\u4f7f\u7528 file_sd_configs \u914d\u7f6e\uff0c\u4e5f\u9700\u8981\u767b\u5f55\u670d\u52a1\u5668\u4fee\u6539\u5bf9\u5e94 Json \u6587\u4ef6\uff0c\u4f1a\u975e\u5e38\u9ebb\u70e6\u3002\u4e0d\u8fc7 Prometheus \u5b98\u65b9\u652f\u6301\u591a\u79cd\u81ea\u52a8\u670d\u52a1\u53d1\u73b0\u7684\u7c7b\u578b\uff0c\u5176\u4e2d\u5c31\u652f\u6301 Consul\u3002"),(0,l.kt)("h3",{id:"consul-\u57fa\u7840\u67b6\u6784"},"Consul \u57fa\u7840\u67b6\u6784"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/promethues%20%2B%20consul/consul-arch.png",alt:null})),(0,l.kt)("h2",{id:"consul-\u5b89\u88c5\u4e0e\u914d\u7f6e"},"Consul \u5b89\u88c5\u4e0e\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u5b98\u65b9\u4e8c\u8fdb\u5236\u5305"},"\u4f7f\u7528\u5b98\u65b9\u4e8c\u8fdb\u5236\u5305"),(0,l.kt)("p",null,"\u5b98\u65b9\u4e0b\u8f7d\u7ad9\u70b9\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.consul.io/downloads.html"},"https://www.consul.io/downloads.html")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://releases.hashicorp.com/consul/1.7.2/consul_1.7.2_linux_amd64.zip\nunzip consul_1.7.2_linux_amd64.zip\n")),(0,l.kt)("p",null,"\u89e3\u538b\u5b8c\u6210\u4e4b\u540e\u53d1\u73b0\u53ea\u6709\u4e00\u4e2a\u4e8c\u8fdb\u5236\u7a0b\u5e8f\uff0c\u5373",(0,l.kt)("inlineCode",{parentName:"p"},"consul"),"\uff0c\u5c06\u5176\u6dfb\u52a0\u81f3\u73af\u5883\u53d8\u91cf\uff0c\u6216\u8005\u76f4\u63a5\u94fe\u63a5\u5230\u73af\u5883\u53d8\u91cf\u5f53\u4e2d\u53bb."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ln -sv /root/consul /usr/bin/consul\n")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"consul"),"\u662f\u5426\u6210\u529f\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@master ~]\\# consul -v\nConsul v1.7.2\nProtocol 2 spoken by default, understands 2 to 3 (agent will automatically use protocol >2 when speaking to compatible agents)\n")),(0,l.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"consul agent"),"\uff08\u5f00\u53d1\u6a21\u5f0f\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@master ~]\\# ./consul agent -dev   \n==> Starting Consul agent...\n           Version: 'v1.7.2'\n           Node ID: '23e32a9f-73d8-48c9-27e9-adb38a069a83'\n         Node name: 'master'\n        Datacenter: 'dc1' (Segment: '<all>')\n            Server: true (Bootstrap: false)\n       Client Addr: [127.0.0.1] (HTTP: 8500, HTTPS: -1, gRPC: 8502, DNS: 8600)\n      Cluster Addr: 127.0.0.1 (LAN: 8301, WAN: 8302)\n           Encrypt: Gossip: false, TLS-Outgoing: false, TLS-Incoming: false, Auto-Encrypt-TLS: false\n           ...\n")),(0,l.kt)("p",null,"\u5207\u8bb0\uff0c\u4e0d\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u5f00\u53d1\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u6b64\u65f6\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8f93\u5165",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:8500"},"http://127.0.0.1:8500")," \u5373\u53ef\u770b\u5230 consul \u7684web\u7aef"),(0,l.kt)("p",null,"\u901a\u8fc7\u5728\u65b0\u7684\u7ec8\u7aef\u7a97\u53e3\u4e2d\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"consul Members"),"\u547d\u4ee4\uff0c\u68c0\u67e5Consul\u6570\u636e\u4e2d\u5fc3\u7684\u6210\u5458\u8eab\u4efd\uff0c\u8f93\u51fa\u5185\u5bb9\u5217\u51fa\u4e86\u6570\u636e\u4e2d\u5fc3\u4e2d\u7684\u4ee3\u7406\uff08\u76ee\u524d\u53ea\u6709\u4e3b\u673a\u81ea\u5df1\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@master ~]\\# consul members\nNode    Address         Status  Type    Build  Protocol  DC   Segment\nmaster  127.0.0.1:8301  alive   server  1.7.2  2         dc1  <all>\n")),(0,l.kt)("p",null,"\u83b7\u53d6\u8282\u70b9\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u4f7f\u7528\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"curl localhost:8500/v1/catalog/nodes")),(0,l.kt)("p",null,"\u9664\u4e86HTTP API\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528DNS\u63a5\u53e3\u6765\u53d1\u73b0\u8282\u70b9\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"dig @127.0.0.1 -p 8600 master.node.consul")),(0,l.kt)("p",null,"\u505c\u6b62\u4ee3\u7406\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"consul leave\n")),(0,l.kt)("h3",{id:"\u4f7f\u7528-docker-\u90e8\u7f72"},"\u4f7f\u7528 Docker \u90e8\u7f72"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9996\u5148\u4ece Docker Hub \u4e0a\u62c9\u53d6\u955c\u50cf\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"docker pull consul"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u542f\u52a8\u96c6\u7fa4\u4e4b\u524d\uff0c\u5efa\u7acb ",(0,l.kt)("inlineCode",{parentName:"p"},"/data/consul")," \u6587\u4ef6\u5939, \u7528\u4e8e\u4fdd\u5b58 consul \u7684\u6570\u636e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"mkdir -pv /data/consul"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u672c\u5730\u542f\u52a8 Consul \u96c6\u7fa4\u8fdb\u884c\u6d4b\u8bd5\uff1a"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 8500:8500 -v /data/consul:/consul/data -e CONSUL_BIND_INTERFACE='eth0' --name=consul1 consul agent -server -bootstrap -ui -client='0.0.0.0'\n\n* \u53c2\u6570\u8bf4\u660e\uff1a\n    agent: \u8868\u793a\u542f\u52a8 agent \u8fdb\u7a0b\n    server: \u8868\u793a consul \u4e3a server \u6a21\u5f0f\n    client: \u8868\u793a consul \u4e3a client \u6a21\u5f0f\n    bootstrap: \u8868\u793a\u8fd9\u4e2a\u8282\u70b9\u662f Server-Leader\n    ui: \u542f\u52a8 Web UI, \u9ed8\u8ba4\u7aef\u53e3 8500\n    node: \u6307\u5b9a\u8282\u70b9\u540d\u79f0, \u96c6\u7fa4\u4e2d\u8282\u70b9\u540d\u79f0\u552f\u4e00\n    client: \u7ed1\u5b9a\u5ba2\u6237\u7aef\u63a5\u53e3\u5730\u5740, 0.0.0.0 \u8868\u793a\u6240\u6709\u5730\u5740\u90fd\u53ef\u4ee5\u8bbf\u95ee\n    datacenter:\u8981\u521b\u5efa\u591a\u4e2adatacenter\u7684\u8bdd\uff0c\u9700\u8981\u6307\u5b9a\u8be5\u53c2\u6570\n\n# \u4e0b\u9762\u521b\u5efa\u4e863\u4e2aServer\uff0c\u4f7f\u7528`--bootstrap-expect`\u6765\u89e6\u53d1\u9009\u4e3e\u529f\u80fd\n# docker run -d --name=consul1 -p 8500:8500 -e CONSUL_BIND_INTERFACE=eth0 consul agent --server=true --bootstrap-expect=3 --client=0.0.0.0 -ui --datacenter=dc2\n* \u5173\u8054dc1\u548cdc2\ndocker exec -it [CONSUL_SERVER] consul join -wan 172.17.0.2  \n")),(0,l.kt)("p",null,"\u4e00\u822c\u7b2c\u4e00\u4e2a\u5bb9\u5668\u7684ip\u5730\u5740\u662f",(0,l.kt)("inlineCode",{parentName:"p"}," 172.17.0.2"),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u8be2\u5bb9\u5668ip\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker inspect --format '\u3010\u3010 .NetworkSettings.IPAddress \u3011\u3011' consul1\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u8282\u70b9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name=consul2 -e CONSUL_BIND_INTERFACE='eth0' consul agent --server=false --client=0.0.0.0 --join 172.17.0.2     # join\u52a0\u5165\u96c6\u7fa4\ndocker run -d --name=consul3 -e CONSUL_BIND_INTERFACE='eth0' consul agent --server=false --client=0.0.0.0 --join 172.17.0.2     # join\u52a0\u5165\u96c6\u7fa4\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5bb9\u5668\u4e2d\u96c6\u7fa4\u8282\u70b9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@master ~]\\# docker exec -it consul1 consul members\nNode          Address          Status  Type    Build  Protocol  DC   Segment\n8b90d158b4f5  172.17.0.2:8301  alive   server  1.7.2  2         dc1  <all>\n3a639e89644c  172.17.0.5:8301  alive   client  1.7.2  2         dc1  <default>\na21fff77c185  172.17.0.4:8301  alive   client  1.7.2  2         dc1  <default>\n")),(0,l.kt)("h4",{id:"\u4f7f\u7528-docker-compose-\u5feb\u901f\u90e8\u7f72"},"\u4f7f\u7528 docker-compose \u5feb\u901f\u90e8\u7f72"),(0,l.kt)("p",null,"\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml "),"\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'version: "3.0"\n\nservices:\n    # consul server\uff0c\u5bf9\u5916\u66b4\u9732\u7684ui\u63a5\u53e3\u4e3a8500\uff0c\u53ea\u6709\u57282\u53f0consul\u670d\u52a1\u5668\u7684\u60c5\u51b5\u4e0b\u96c6\u7fa4\u624d\u8d77\u4f5c\u7528\n    consulserver:\n        image: consul:latest\n        hostname: consulserver\n        ports:\n            - "8300"\n            - "8400"\n            - "8500:8500"\n            - "53"\n        command: agent -server --bootstrap-expect=3 -ui -client=\'0.0.0.0\' \n\n    # consul server1\u5728consul server\u670d\u52a1\u8d77\u6765\u540e\uff0c\u52a0\u5165\u96c6\u7fa4\u4e2d\n    consulserver1:\n        image: consul:latest\n        hostname: consulserver1\n        depends_on:\n            - "consulserver"\n        ports:\n            - "8300"\n            - "8400"\n            - "8500"\n            - "53"\n        command: agent --server=true --client=0.0.0.0 --join consulserver\n\n    # consul server2\u5728consul server\u670d\u52a1\u8d77\u6765\u540e\uff0c\u52a0\u5165\u96c6\u7fa4\u4e2d\n    consulserver2:\n        image: consul:latest\n        hostname: consulserver2\n        depends_on:\n            - "consulserver"\n        ports:\n            - "8300"\n            - "8400"\n            - "8500"\n            - "53"\n        command: agent --server=true --client=0.0.0.0 --join consulserver\n   \n   # \u6dfb\u52a0registrator\uff0c\u5982\u679c\u670d\u52a1\u5df2\u505c\u6b62\uff0c\u5219\u4ece\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u79fb\u9664\n   registrator:\n        image: gliderlabs/registrator:master\n        hostname: registrator\n        depends_on:\n            - "consulserver"\n        volumes:\n            - "/var/run/docker.sock:/tmp/docker.sock"\n        command: -internal consul://consulserver:8500\n')),(0,l.kt)("p",null,"\u7136\u540e\u8fd0\u884c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),"\u5373\u53ef"),(0,l.kt)("h3",{id:"\u670d\u52a1\u6ce8\u518c"},"\u670d\u52a1\u6ce8\u518c"),(0,l.kt)("p",null,"\u7f16\u5199\u6d4b\u8bd5\u670d\u52a1\uff0c\u5728\u8fd9\u91cc\u6211\u4f7f\u7528 nginx \u6765\u8fdb\u884c\u6d4b\u8bd5."),(0,l.kt)("p",null,"\u5c06\u4e0b\u9762\u7684\u5185\u5bb9\u4fdd\u5b58\u6210\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"nginx.json"),"\uff0c\u5e76\u4e0a\u4f20\u5230\u5bb9\u5668\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"/consul/config"),"\u76ee\u5f55\u4e2d\uff0c\u6216\u8005\u5bb9\u5668\u521b\u5efa\u65f6\u6307\u660e\u5b58\u50a8\u5377\u4e5f\u53ef."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "ID": "test-nginx",\n    "Name": "test-nginx",\n    "Tags": [\n        "test",\n        "nginx"\n    ],\n    "address":"172.16.1.132",\n    "port":8080,\n    "Meta": {\n        "X-TAG": "test_nginx"\n    },\n    "EnableTagOverride": false,\n    "Check": {\n#        "DeregisterCriticalServiceAfter": "90m",\n        "http":"http://172.16.1.132:8080/",\n        "Interval": "10s"\n    }\n}\n')),(0,l.kt)("p",null,"\u5c06\u6587\u4ef6\u590d\u5236\u5230\u5bb9\u5668\u4e2d\uff0c\u5e76\u91cd\u8f7d\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp nginx.json consul2:/consul/config\ndocker exec consul2 consul reload\n")),(0,l.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP API"),"\u7684\u65b9\u5f0f\u8fdb\u884c\u6ce8\u518c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT -d \'{"id": "nginx","name": "nginx","address": "172.16.1.132","port": 80,"checks": [{"http": "http://172.16.1.132/","interval": "5s"}]}\' http://127.0.0.1:8500/v1/agent/service/register\n# \u6216\u8005\ncurl -X PUT --data @nginx.json http://127.0.0.1:8500/v1/agent/service/register\n')),(0,l.kt)("p",null,"\u6ce8\u9500\u670d\u52a1\u4f7f\u7528\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"curl -X PUT http://172.16.1.132:8500/v1/agent/service/deregister/nginx_test")),(0,l.kt)("p",null,"\u67e5\u770b\u670d\u52a1\u5065\u5eb7\u72b6\u6001\u68c0\u67e5\uff1a"),(0,l.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://172.16.1.132:8500/v1/health/service/test-nginx"},"http://172.16.1.132:8500/v1/health/service/test-nginx")," \u5373\u53ef."),(0,l.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Consul Get-Started \uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/consul/getting-started/agent"},"https://learn.hashicorp.com/consul/getting-started/agent")),(0,l.kt)("li",{parentName:"ul"},"Consul Arch \uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.consul.io/docs/internals/architecture.html"},"https://www.consul.io/docs/internals/architecture.html"))))}p.isMDXComponent=!0}}]);