"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6040],{3905:(e,n,r)=>{r.d(n,{Zo:()=>f,kt:()=>p});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),i=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},f=function(e){var n=i(e.components);return t.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,f=d(e,["components","mdxType","originalType","parentName"]),k=i(r),p=o,u=k["".concat(a,".").concat(p)]||k[p]||s[p]||c;return r?t.createElement(u,l(l({ref:n},f),{},{components:r})):t.createElement(u,l({ref:n},f))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,l=new Array(c);l[0]=k;var d={};for(var a in n)hasOwnProperty.call(n,a)&&(d[a]=n[a]);d.originalType=e,d.mdxType="string"==typeof e?e:o,l[1]=d;for(var i=2;i<c;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},91860:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>s,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var t=r(87462),o=(r(67294),r(3905));const c={},l="Docker Network",d={unversionedId:"CloudNative/Docker/Docker Network",id:"CloudNative/Docker/Docker Network",title:"Docker Network",description:"Docker \u865a\u62df\u5316\u7f51\u7edc",source:"@site/docs/CloudNative/Docker/Docker Network.md",sourceDirName:"CloudNative/Docker",slug:"/CloudNative/Docker/Docker Network",permalink:"/docs/CloudNative/Docker/Docker Network",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/Docker/Docker Network.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Docker Compose",permalink:"/docs/CloudNative/Docker/Docker Compose"},next:{title:"Docker Portainer",permalink:"/docs/CloudNative/Docker/Docker Portainer"}},a={},i=[{value:"Docker \u865a\u62df\u5316\u7f51\u7edc",id:"docker-\u865a\u62df\u5316\u7f51\u7edc",level:2},{value:"\u4e00\u3001docker\u7f51\u7edc\u4ecb\u7ecd",id:"\u4e00docker\u7f51\u7edc\u4ecb\u7ecd",level:3},{value:"\u4e8c\u3001docker\u7f51\u7edc\u7c7b\u578b",id:"\u4e8cdocker\u7f51\u7edc\u7c7b\u578b",level:3},{value:"\u4e09\u3001docker\u5bb9\u5668\u7c7b\u578b",id:"\u4e09docker\u5bb9\u5668\u7c7b\u578b",level:3},{value:"\u56db\u3001docker\u7f51\u7edc\u5b9e\u8df5",id:"\u56dbdocker\u7f51\u7edc\u5b9e\u8df5",level:3}],f={toc:i};function s(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-network"},"Docker Network"),(0,o.kt)("h2",{id:"docker-\u865a\u62df\u5316\u7f51\u7edc"},"Docker \u865a\u62df\u5316\u7f51\u7edc"),(0,o.kt)("h3",{id:"\u4e00docker\u7f51\u7edc\u4ecb\u7ecd"},"\u4e00\u3001docker\u7f51\u7edc\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u2003\u2003\u5728\u5f00\u59cb\u7684\u535a\u5ba2\u4e2d\u5c31\u6709\u63d0\u8fc7\uff0c\u73b0\u5728\u7684linux\u5185\u6838\u5df2\u7ecf\u652f\u6301\u516d\u79cd\u540d\u79f0\u7a7a\u95f4\uff1auser\u3001uts\uff0cmount\uff0cipc\uff0cpid\uff0cnet\uff0c\u800cnet\u4e3b\u8981\u5c31\u662f\u7528\u4e8e\u7f51\u7edc\u8bbe\u5907\u3001\u534f\u8bae\u6808\u7684\u9694\u79bb\u3002inux\u5185\u6838\u652f\u6301\u4e8c\u5c42\u548c\u4e09\u5c42\u8bbe\u5907\u7684\u6a21\u62df\uff0c\u5bbf\u4e3b\u673a\u7684docker0\u5c31\u662f\u7528\u8f6f\u4ef6\u6765\u5b9e\u73b0\u7684\u5177\u6709\u4ea4\u6362\u529f\u80fd\u7684\u865a\u62df\u4e8c\u5c42\u8bbe\u5907\uff0cdocker\u4e2d\u7684\u7f51\u5361\u8bbe\u5907\u662f\u6210\u5bf9\u51fa\u73b0\u7684\uff0c\u597d\u6bd4\u7f51\u7ebf\u7684\u4e24\u5934\uff0c\u4e00\u5934\u5904\u4e8edocker\u4e2d\uff0c\u53e6\u5916\u4e00\u5934\u5728docker0\u6865\u4e0a\uff0c\u8fd9\u4e2a\u4f7f\u7528brctl\u5de5\u5177\u5c31\u80fd\u5b9e\u73b0\u3002\u6240\u4ee5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker1 ~]\\# ip a | grep docker0\n3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN \n    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0\n")),(0,o.kt)("p",null,"\u2003\u2003\u4e0b\u9762\u6211\u4eec\u4f7f\u7528ip\u547d\u4ee4\u64cd\u4f5c\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\uff0c\u7b80\u5355\u6a21\u62df\u5bb9\u5668\u95f4\u7684\u7f51\u7edc\u901a\u4fe1\uff08\u5f53\u6211\u4eec\u4f7f\u7528ip\u547d\u4ee4\u53bb\u7ba1\u7406\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\u7684\u65f6\u5019\uff0c\u53ea\u6709\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\u662f\u88ab\u9694\u79bb\u7684\uff0c\u5176\u5b83\u540d\u79f0\u7a7a\u95f4\u90fd\u662f\u5171\u4eab\u7684\u3002\uff09\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e00\u53f0\u6ca1\u6709\u5b89\u88c5docker\u7684\u4e3b\u673a\uff0c\u907f\u514d\u6df7\u6dc6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\\# \u9996\u5148\u786e\u5b9a\u7cfb\u7edf\u4e2d\u662f\u5426\u6709iproute\u7684\u5305\uff0cip\u547d\u4ee4\u5c31\u5305\u542b\u5728\u8fd9\u4e2a\u5305\u4e2d\n[root@docker3 ~]\\# rpm -qa iproute\niproute-3.10.0-87.el7.x86_64\n\\# \u6dfb\u52a0\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\n[root@docker3 ~]\\# ip netns help\n[root@docker3 ~]\\# ip netns add ns1\n[root@docker3 ~]\\# ip netns add ns2\n[root@docker3 ~]\\# ip netns ls\nns2\nns1\n\\# \u5982\u679c\u6211\u4eec\u6ca1\u6709\u5355\u72ec\u7ed9\u8fd9\u4e24\u4e2a\u540d\u79f0\u7a7a\u95f4\u521b\u5efa\u7f51\u5361\u7684\u8bdd\uff0c\u9ed8\u8ba4\u662f\u53ea\u6709\u4e00\u4e2alo\u7684\u3002\n[root@docker3 ~]\\# ip netns exec ns1 ip a\n1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n[root@docker3 ~]\\# ip netns exec ns2 ip a\n1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n\\# \u521b\u5efa\u7f51\u5361\u5bf9\n[root@docker3 ~]\\# ip link help\n[root@docker3 ~]\\# ip link add name veth1.1 type veth peer name veth1.2\n[root@docker3 ~]\\# ip link show\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT qlen 1000\n    link/ether 00:0c:29:c4:4a:ca brd ff:ff:ff:ff:ff:ff\n3: veth1.2@veth1.1: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000\n    link/ether 5e:b2:bb:e4:bc:a7 brd ff:ff:ff:ff:ff:ff\n4: veth1.1@veth1.2: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000\n    link/ether 06:5f:16:be:a1:56 brd ff:ff:ff:ff:ff:ff\n\\# \u53ef\u4ee5\u770b\u5230veth1.1\u7684\u53e6\u4e00\u534a\u662fveth1.2\uff0cveth1.2\u7684\u53e6\u4e00\u534a\u662fveth1.1\uff0c\u6b64\u65f6\u8fd9\u4e24\u5757\u7f51\u5361\u5b58\u5728\u4e8e\u6211\u4eec\u7684\u7269\u7406\u673a\u4e0a\uff0c\u4f46\u662f\u5904\u4e8e\u672a\u6fc0\u6d3b\u72b6\u6001\uff0c\u73b0\u5728\u6211\u4eec\u628aveth1.2\u653e\u5230ns1\u540d\u79f0\u7a7a\u95f4\u4e2d\n[root@docker3 ~]\\# ip link set dev veth1.2 netns ns1\n\\# \u4e00\u4e2a\u865a\u62df\u7f51\u5361\u53ea\u80fd\u5c5e\u4e8e\u4e00\u4e2a\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\uff0c\u6240\u4ee5\u5728\u7269\u7406\u673a\u4e0a\u53ea\u5269veth1.1\u4e86\u3002\u800cns1\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\u4e2d\u5df2\u7ecf\u591a\u4e86\u4e00\u4e2aveth1.2\u3002\n[root@docker3 ~]\\# ip link show\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT qlen 1000\n    link/ether 00:0c:29:c4:4a:ca brd ff:ff:ff:ff:ff:ff\n4: veth1.1@if3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000\n    link/ether 06:5f:16:be:a1:56 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n[root@docker3 ~]\\# ip netns exec ns1 ip a \n1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n3: veth1.2@if4: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000\n    link/ether 5e:b2:bb:e4:bc:a7 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n\\# \u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u7ed9\u7f51\u5361\u6539\u540d\u5b57\uff0c\u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u67e5\u770b\u5c31\u4e0d\u4fee\u6539\u4e86\u3002\u547d\u4ee4\u5982\u4e0b\uff1a\n[root@docker3 ~]\\# ip netns exec ns1 ip link set dev veth1.2 name eth0\n\\# \u914d\u7f6e\u5730\u5740\u5e76\u6fc0\u6d3b\u7f51\u5361\u4f7f\u5bbf\u4e3b\u673a\u80fd\u4e0ens1\u901a\u4fe1\n[root@docker3 ~]\\# ifconfig veth1.1 10.0.0.1/24 up\n[root@docker3 ~]\\# ip netns exec ns1 ifconfig veth1.2 10.0.0.2/24 up\n[root@docker3 ~]\\# ping 10.0.0.2\nPING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.\n64 bytes from 10.0.0.2: icmp_seq=1 ttl=64 time=0.047 ms\n\\# \u63a5\u4e0b\u6765\u6211\u4eec\u518d\u628aveth1.1\u653e\u5230ns2\u4e3a\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\u4e2d\uff0c\u5e76\u5b9e\u73b0ns1\u548cns2\u7684\u901a\u4fe1\n[root@docker3 ~]\\# ip link set dev veth1.1 netns ns2\n[root@docker3 ~]\\# ip netns exec ns2 ifconfig veth1.1 10.0.0.3/24 up\n[root@docker3 ~]\\# ip netns exec ns2 ping 10.0.0.2\nPING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.\n64 bytes from 10.0.0.2: icmp_seq=1 ttl=64 time=0.027 ms\n")),(0,o.kt)("h3",{id:"\u4e8cdocker\u7f51\u7edc\u7c7b\u578b"},"\u4e8c\u3001docker\u7f51\u7edc\u7c7b\u578b"),(0,o.kt)("p",null,"\u2003\u2003docker\u652f\u6301\u4e94\u79cd\u7f51\u7edc\u7c7b\u578b\uff0c\u4f46\u662f\u5b89\u88c5\u540e\u53ea\u9ed8\u8ba4\u63d0\u4f9b\u4e09\u79cd\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[root@docker2 ~]\\# docker info | grep -w Network\nWARNING: bridge-nf-call-iptables is disabled\nWARNING: bridge-nf-call-ip6tables is disabled\n Network: bridge host macvlan null overlay\n\\# \u4e24\u6761\u547d\u4ee4\u89e3\u9664\u4e0a\u9762\u7684\u8b66\u544a\u4fe1\u606f\n[root@docker2 ~]\\# echo -e \'bridge-nf-call-iptables = 1\\nbridge-nf-call-ip6tables = 1\' >>/etc/sysctl.conf \n[root@docker2 ~]\\# reboot\n\\# \u5b89\u88c5docker\u540e\uff0c\u9ed8\u8ba4\u63d0\u4f9b\u7684\u4e09\u79cd\u7f51\u7edc\u7c7b\u578b\n[root@docker2 ~]\\# docker network ls\nNETWORK ID          NAME                DRIVER              SCOPE\n4784b8e4f640        bridge              bridge              local\nf5a426943455        host                host                local\n61be1051e1fe        none                null                local\n\\# bridge\u662f\u9ed8\u8ba4\u7684\u7f51\u7edc\u7c7b\u578b\n[root@docker2 ~]\\# docker network inspect bridge | grep bridge.name\n            "com.docker.network.bridge.name": "docker0"\n')),(0,o.kt)("h3",{id:"\u4e09docker\u5bb9\u5668\u7c7b\u578b"},"\u4e09\u3001docker\u5bb9\u5668\u7c7b\u578b"),(0,o.kt)("p",null,"\u2003\u2003docker\u7684\u7f51\u7edc\u7c7b\u578b\u548c\u5bb9\u5668\u6a21\u578b\u662f\u76f8\u5173\u8054\u7684\uff0c\u6240\u4ee5\u5c31\u90fd\u653e\u5728\u4e0b\u9762\u8bf4\u5427\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img2018.cnblogs.com/blog/1419513/201906/1419513-20190613161543999-1823209267.png",alt:"img"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c01\u95ed\u5f0f\u5bb9\u5668\n\u2003\u2003\u4f7f\u7528\u540d\u79f0\u7a7a\u95f4\uff0c\u4f46\u662f\u4e0d\u521b\u5efa\u7f51\u8def\u8bbe\u5907\uff0c\u53ea\u6709\u4e00\u4e2alo\u63a5\u53e3\u3002\u5b9e\u73b0\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker2 ~]\\# docker run --name busy01 -it --network none --rm busybox\n/ \\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6865\u63a5\u5f0f\u5bb9\u5668\n\u2003\u2003")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/others/640.jpeg",alt:"\u56fe\u7247"})),(0,o.kt)("p",null,"  \u2003\u2003\n\u9ed8\u8ba4\u7684\u5bb9\u5668\u7c7b\u578b\uff0c\u6545\u53ef\u4ee5\u7701\u53bbnetwork\u7684\u53c2\u6570\u3002\u521b\u5efa\u7f51\u7edc\u8bbe\u5907\u65f6\uff0c\u4e00\u534a\u5728\u5bb9\u5668\u5185\u90e8\uff0c\u4e00\u534a\u5728\u5bbf\u4e3b\u673a\u7684docker0\u4e0a\u3002\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker2 ~]\\# docker run --name busy01 -it --network bridge --rm busybox\n/ \\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n4: eth0@if5: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue \n    link/ether 02:42:0a:00:00:02 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.2/16 brd 10.0.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8054\u76df\u5f0f\u5bb9\u5668"),"\n\u2003\u2003\u521b\u5efa\u4e00\u4e2a\u5bb9\u5668\u52a0\u5165\u53e6\u4e00\u4e2a\u5bb9\u5668\uff0c\u5171\u4eab",(0,o.kt)("inlineCode",{parentName:"li"},"net"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"uts"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"ipc"),"\u540d\u79f0\u7a7a\u95f4\uff0c\u72ec\u4eab\u5176\u5b83\u540d\u79f0\u7a7a\u95f4\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker2 ~]\\# docker run --name busy01 -it --rm busybox\n/ \\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n8: eth0@if9: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue \n    link/ether 02:42:0a:00:00:03 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.3/16 brd 10.0.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n/ \\# hostname \n4a5449c67f3a\n\\# \u6b64\u65f6\u53e6\u5f00\u4e00\u7a97\u53e3\uff0c\u5728\u542f\u52a8\u53e6\u5916\u4e00\u4e2a\u5bb9\u5668\uff0c\u53ef\u4ee5\u770b\u5230ip\u548c\u4e3b\u673a\u540d\u5565\u7684\u90fd\u662f\u4e00\u6837\u7684\n[root@docker2 ~]\\# docker run --name busy02 -it --network container:busy01 --rm busybox\n/ \\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n8: eth0@if9: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue \n    link/ether 02:42:0a:00:00:03 brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.3/16 brd 10.0.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n/ \\# hostname \n4a5449c67f3a\n\\# \u505a\u4e2a\u6d4b\u8bd5\uff0c\u8bc1\u660e\u4e24\u4e2a\u5bb9\u5668\u65f6\u5171\u7528lo\u63a5\u53e3\u7684\uff0c\u5728busy01\u4e0a\u9762\u542f\u52a8\u4e00\u4e2ahttpd\n/ \\# echo 'I am very happy' >/tmp/test/index.html\n/ \\# httpd -f -h /tmp/test/\n\\# \u5728busy02\u4e0a\u8bbf\u95ee\u672c\u5730\u63a5\u53e3lo\uff0c\u53ef\u4ee5\u770b\u5230\u662f\u6210\u529f\u7684\n/ \\# wget -O - -q 127.0.0.1\nI am very happy\n\\# \u4f46\u662f\u6587\u4ef6\u7cfb\u7edf\u8fd8\u662f\u9694\u79bb\u7684\uff0c\u5728busy01\u5bb9\u5668\u4e2d\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\n/ \\# mkdir /tmp/test\n\\# \u5728busy02\u4e2d\u67e5\u770b\uff0c\u662f\u6728\u5f97\u7684\n/ \\# ls /tmp/\n/ \\# \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f00\u653e\u5f0f\u5bb9\u5668\n\u2003\u2003\u5f00\u653e\u5f0f\u5bb9\u5668\u65f6\u8054\u76df\u662f\u5bb9\u5668\u7684\u4e00\u4e2a\u5ef6\u4f38\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684\u5bb9\u5668\u76f4\u63a5\u5171\u4eab\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u540d\u79f0\u7a7a\u95f4\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker2 ~]\\# docker run --name busy01 -it --network host --rm busybox\n/ \\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host \n       valid_lft forever preferred_lft forever\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast qlen 1000\n    link/ether 00:0c:29:90:c4:6e brd ff:ff:ff:ff:ff:ff\n    inet 10.0.0.12/24 brd 10.10.10.255 scope global ens33\n       valid_lft forever preferred_lft forever\n    inet6 fe80::20c:29ff:fe90:c46e/64 scope link \n       valid_lft forever preferred_lft forever\n3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue \n    link/ether 02:42:6a:2a:e2:bb brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.1/16 brd 10.0.255.255 scope global docker0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::42:6aff:fe2a:e2bb/64 scope link \n       valid_lft forever preferred_lft forever\n7: veth340cf79@if6: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue master docker0 \n    link/ether 0a:29:9a:4d:3b:da brd ff:ff:ff:ff:ff:ff\n    inet6 fe80::829:9aff:fe4d:3bda/64 scope link \n       valid_lft forever preferred_lft forever\n\\# \u53ef\u4ee5\u770b\u5230\u76f4\u63a5\u4f7f\u7528\u7269\u7406\u673a\u7684\u7f51\u7edc\u8bbe\u5907\uff0c\u6b64\u65f6\u6211\u4eec\u542f\u52a8\u4e00\u4e2ahttpd\u3002\n/ \\# echo 'good good study' >/tmp/index.html\n/ \\# httpd -h /tmp/\n/ \\# netstat -lntp\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -\ntcp        0      0 :::80                   :::*                    LISTEN      8/httpd\ntcp        0      0 :::22                   :::*                    LISTEN      -\n\\# \u8fd9\u5176\u5b9e\u662f\u76f4\u63a5\u76d1\u542c\u5728\u7269\u7406\u673a\u7f51\u5361\u5730\u5740\u768480\u7aef\u53e3\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u505a\u8bbf\u95ee\u6d4b\u8bd5\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img2018.cnblogs.com/blog/1419513/201906/1419513-20190619170253139-457341143.png",alt:"img"})),(0,o.kt)("h3",{id:"\u56dbdocker\u7f51\u7edc\u5b9e\u8df5"},"\u56db\u3001docker\u7f51\u7edc\u5b9e\u8df5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539docker0\u6865\u7684\u5730\u5740\uff0c\u6dfb\u52a0bip\u8bbe\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[root@docker2 ~]\\# ip a | grep docker0\n3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP \n    inet 172.17.0.1/16 brd 10.0.255.255 scope global docker0\n\\# docker0\u6865\u9ed8\u8ba4\u5730\u5740\u662f172.17.\u7f51\u6bb5\u7684\uff0c\u73b0\u5728\u6211\u4fee\u6539\u4e3a172.16\u7f51\u7edc\u7684\u3002\n[root@docker2 ~]\\# vim /etc/docker/daemon.json\n{\n  "registry-mirrors": ["https://p4y8tfz4.mirror.aliyuncs.com"],\n  "bip": "172.16.0.1/16"\n}\n[root@docker2 ~]\\# systemctl restart docker.service \n[root@docker2 ~]\\# ip a |grep docker0\n3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN \n    inet 172.16.0.1/16 brd 10.0.255.255 scope global docker0\n\\# \u5f53\u7136\u4e5f\u53ef\u4ee5\u6307\u5b9adns\u548cdefault-gateway\uff0c\u683c\u5f0f\u4e0ebip\u4e00\u6837\u7684\u3002\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fdc\u7a0b\u7ba1\u7406docker\u5bb9\u5668\uff0c",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/linux/linux-postinstall/#control-where-the-docker-daemon-listens-for-connections"},"\u5b98\u7f51"),"\u6709\u4e24\u79cd\u65b9\u6cd5\uff0c\u6211\u53ea\u5b9e\u73b0\u4e86\u4e00\u79cd\u3002\u3002\u3002\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\\# \u73b0\u5728\u6211\u7684docker1\u548cdocker2\u4e3b\u673a\u90fd\u662f\u6709\u5b89\u88c5docker\u7684\uff0c\u6211\u73b0\u5728\u4fee\u6539\u914d\u7f6e\uff0c\u4f7fdocker1\u80fd\u591f\u63a7\u5236docker2\u7684\u5bb9\u5668\n[root@docker2 ~]\\# docker ps -a\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS               NAMES\n2157de82161a        hamerle/httpd:v1    "/bin/httpd -f -h /d\u2026"   6 days ago          Exited (137) 2 hours ago                       web007\n[root@docker2 ~]\\# systemctl edit docker.service\n[Service]\nExecStart=\nExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375\n[root@docker2 ~]\\# systemctl daemon-reload \n[root@docker2 ~]\\# systemctl restart docker.service \n[root@docker2 ~]\\# netstat -lntp\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      765/sshd            \ntcp        0      0 127.0.0.1:2375          0.0.0.0:*               LISTEN      5180/dockerd        \ntcp6       0      0 :::22                   :::*                    LISTEN      765/sshd \n\\# docke daemon\u5df2\u7ecf\u76d1\u542c\u52302375\u7684\u7aef\u53e3\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7docker1\u8fdc\u7a0b\u542f\u52a8docker2\u4e0a\u7684web007\u5bb9\u5668\n[root@docker1 ~]\\# docker -H 10.0.0.12:2375 ps -a\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS               NAMES\n2157de82161a        hamerle/httpd:v1    "/bin/httpd -f -h /d\u2026"   6 days ago          Exited (137) 2 hours ago                       web007\n[root@docker1 ~]\\# docker -H 10.0.0.12:2375 start web007 \nweb007\n[root@docker2 ~]\\# docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES\n2157de82161a        hamerle/httpd:v1    "/bin/httpd -f -h /d\u2026"   6 days ago          Up 58 seconds                           web007\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u624b\u52a8\u521b\u5efa\u4e00\u4e2a\u7f51\u7edc\u7c7b\u578b\uff0c\u5e76\u6307\u5b9a\u5bf9\u5e94\u7f51\u6865\u8bbe\u5907\u7684\u540d\u79f0\u4e3adocker1\uff0c\u5b8c\u6574\u7684\u53c2\u6570\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/network_create/"},"\u5b98\u7f51"),"\uff0c\u6700\u7ec8\u5b9e\u73b0\u57fa\u4e8e\u4e24\u4e2a\u4e0d\u540c\u7f51\u7edc\u542f\u52a8\u7684\u5bb9\u5668\u95f4\u4e92\u76f8\u901a\u4fe1\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@docker2 ~]\\# docker network ls\nNETWORK ID          NAME                DRIVER              SCOPE\n56e76e104239        bridge              bridge              local\naf5460d6727a        host                host                local\n2305ac12c2f1        none                null                local\n[root@docker2 ~]\\# docker network create --help\n[root@docker2 ~]\\# docker network create -o com.docker.network.bridge.name=docker1 -d bridge --subnet '172.18.0.0/16' bridge-test\n32cc657f5b673d989a00555f9f9e5c37d470a5ba4e9b5f24918d163ae364e82e\n    \\# -o\uff1a\u5728\u4f7f\u7528bridge\u7684driver\u7c7b\u578b\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528-o\u7684\u9644\u52a0\u53c2\u6570\u3002\u4e0a\u9762\u5b9e\u4f8b\u4e2d\u7684\u53c2\u6570\u610f\u601d\u662f\u6307\u5b9a\u521b\u5efabridge\u7c7b\u578b\u7f51\u7edc\u65f6\u5bf9\u5e94\u865a\u62df\u7f51\u6865\u8bbe\u5907\u7684\u540d\u5b57\u3002\uff08\u5c31\u662fip a\u547d\u4ee4\u770b\u5230\u7684\u540d\u5b57\uff09\n    \\# -d\uff1a\u6307\u5b9adriver\uff0c\u9ed8\u8ba4\u7c7b\u578b\u5c31\u662fbridge\u3002\n    \\# --subnet\uff1a\u6307\u5b9a\u65b0\u5efa\u7684docker\u7f51\u7edc\u7684\u7f51\u6bb5\n    \\# \u6700\u540e\u7684bridg-test\u662f\u5373\u5c06\u8981\u5c06\u521b\u5efa\u51fa\u7684\u7f51\u7edc\u7684\u540d\u5b57.\n[root@docker2 ~]\\# docker network ls \nNETWORK ID          NAME                DRIVER              SCOPE\n56e76e104239        bridge              bridge              local\n32cc657f5b67        bridge-test         bridge              local\naf5460d6727a        host                host                local\n2305ac12c2f1        none                null                local\n[root@docker2 ~]\\# ip a | grep docker1\n19: docker1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN \n    inet 172.18.0.1/16 brd 172.16.255.255 scope global docker1\n\\# \u6211\u4eec\u4ee5bridge-test\u7f51\u7edc\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\n[root@docker2 ~]\\# docker run --name busy01 -it --network bridge-test --rm busybox\n/ \\# ip a \n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n20: eth0@if21: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue \n    link/ether 02:42:ac:10:00:02 brd ff:ff:ff:ff:ff:ff\n    inet 172.18.0.2/16 brd 172.16.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n/ \\# \n\\# \u53e6\u5f00\u4e00\u4e2a\u7a97\u53e3\uff0c\u4f7f\u7528bridge\u7f51\u7edc\u518d\u8d77\u4e00\u4e2a\u5bb9\u5668\n[root@docker2 ~]\\# docker run --name busy02 -it --network bridge --rm busybox\n/ \\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n22: eth0@if23: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue \n    link/ether 02:42:0a:00:00:03 brd ff:ff:ff:ff:ff:ff\n    inet 172.16.0.2/16 brd 10.0.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n\\# \u53ef\u4ee5\u770b\u5230\u4e24\u4e2a\u5bb9\u5668\uff0c\u4e00\u4e2a\u662f172.18\u7f51\u6bb5\uff0c\u4e00\u4e2a\u662f172.16\u7f51\u6bb5\uff0c\u6b64\u65f6\u505a\u8fde\u901a\u6027\u6d4b\u8bd5\u3002\n/ \\# ping 172.18.0.2\n\\# \u4e0d\u901a\uff0c\u6b64\u65f6\u786e\u5b9a\u5bbf\u4e3b\u673a\u7684ip_forward\u662f\u5426\u5f00\u542f\uff0c\u5982\u679c\u5f00\u542f\u8fd8\u4e0d\u901a\uff0c\u5219\u9700\u8981\u53e6\u5f00\u4e00\u4e2a\u7a97\u53e3\u6392\u67e5\u9632\u706b\u5899\u89c4\u5219\u3002\n[root@docker2 ~]\\# cat /proc/sys/net/ipv4/ip_forward\n1\n[root@docker2 ~]\\# iptables -nvL\n\\# \u6392\u67e5\u9632\u706b\u5899\u89c4\u5219\uff0c\u5176\u5b9e\u5f88\u7b80\u5355\uff0c\u628atarget\u7c7b\u578b\u4e3aDROP\u7684\u5220\u6389\u5c31\u597d\u4e86\u3002\u6211\u8fd9\u53ea\u5217\u51fa\u6709DROP\u7684\u94fe\uff0c\u5e76\u5220\u9664\n[root@docker2 ~]\\# iptables -nvL DOCKER-ISOLATION-STAGE-2 --line-number \nChain DOCKER-ISOLATION-STAGE-2 (2 references)\nnum   pkts bytes target     prot opt in     out     source               destination         \n1       22  1848 DROP       all  --  *      docker1  0.0.0.0/0            0.0.0.0/0           \n2        0     0 DROP       all  --  *      docker0  0.0.0.0/0            0.0.0.0/0           \n3        0     0 RETURN     all  --  *      *       0.0.0.0/0            0.0.0.0/0 \n[root@docker2 ~]\\# iptables -D DOCKER-ISOLATION-STAGE-2 2\n[root@docker2 ~]\\# iptables -D DOCKER-ISOLATION-STAGE-2 1\n\\# \u5220\u9664\u5b8c\u540e\u518dping\n/ \\# ping 172.18.0.2\nPING 172.18.0.2 (172.18.0.2): 56 data bytes\n64 bytes from 172.18.0.2: seq=0 ttl=63 time=0.262 ms\n64 bytes from 172.18.0.2: seq=1 ttl=63 time=0.082 ms\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u81ea\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/ccbloom/p/10997452.html"},"https://www.cnblogs.com/ccbloom/p/10997452.html"))))}s.isMDXComponent=!0}}]);