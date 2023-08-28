"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6167],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),v=o,k=u["".concat(s,".").concat(v)]||u[v]||d[v]||a;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},l="Docker openvswitch",i={unversionedId:"CloudNative/Docker/Docker openvswitch",id:"CloudNative/Docker/Docker openvswitch",title:"Docker openvswitch",description:"openvswitch \u7b80\u4ecb",source:"@site/docs/CloudNative/Docker/Docker openvswitch.md",sourceDirName:"CloudNative/Docker",slug:"/CloudNative/Docker/Docker openvswitch",permalink:"/docs/CloudNative/Docker/Docker openvswitch",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/Docker/Docker openvswitch.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Docker Volume",permalink:"/docs/CloudNative/Docker/Docker Volume"},next:{title:"Docker \u56fa\u5b9aIP\u53ca\u8de8\u4e3b\u673a\u4e92\u901a",permalink:"/docs/CloudNative/Docker/Docker \u56fa\u5b9aIP\u53ca\u8de8\u4e3b\u673a\u4e92\u901a"}},s={},p=[{value:"openvswitch \u7b80\u4ecb",id:"openvswitch-\u7b80\u4ecb",level:2},{value:"openvswitch \u5b89\u88c5",id:"openvswitch-\u5b89\u88c5",level:2},{value:"\u5efa\u7acb vxLAN \u62d3\u6251",id:"\u5efa\u7acb-vxlan-\u62d3\u6251",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-openvswitch"},"Docker openvswitch"),(0,o.kt)("h2",{id:"openvswitch-\u7b80\u4ecb"},"openvswitch \u7b80\u4ecb"),(0,o.kt)("p",null,"openvswitch\u4e3a\u6211\u4eec\u5efa\u7acb\u4e00\u4e2a\u6269\u5c55\u5230\u4e09\u5c42\u7f51\u7edc\u7684\u7f51\u6865\uff0c\u6211\u4eec\u77e5\u9053vlan\u662f\u4e0d\u80fd\u8de8\u5b50\u7f51\u7684\uff0copenvswitch\u5229\u7528\u4e86\u96a7\u9053\u6280\u672f\uff0c\u5c06\u4e8c\u5c42\u7684\u62a5\u6587\u7528\u4e09\u5c42\u7684\u534f\u8bae(udp/sdn\uff09\u91cd\u65b0\u5c01\u88c5\uff0c\u4ece\u800c\u5b9e\u73b0\u4e8c\u5c42\u7f51\u7edc\u5728\u4e09\u5c42\u4e2d\u8fdb\u884c\u6269\u5c55\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://images2015.cnblogs.com/blog/659305/201604/659305-20160411021401410-1725005604.jpg",alt:null})),(0,o.kt)("h2",{id:"openvswitch-\u5b89\u88c5"},"openvswitch \u5b89\u88c5"),(0,o.kt)("p",null,"openvswitch \u5b98\u65b9\u5e76\u672a\u5728 REHL \u7cfb\u5217\u63d0\u4f9b\u73b0\u6210\u7684 RPM \u5305\uff0c\u6240\u4ee5\u9700\u8981\u6211\u4eec\u624b\u52a8\u7f16\u8bd1\u8fdb\u884c\u5b89\u88c5\uff0c\u5728\u8fd9\u91cc\u6211\u5236\u4f5c\u4e00\u4e2a\u53ef\u76f4\u63a5\u5b89\u88c5\u7684 RPM \u5305\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u5148\u4ece\u5b98\u7f51\u4e0b\u8f7d\u6700\u65b0\u7684 LTS \u7248\u672c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://www.openvswitch.org/releases/openvswitch-2.5.9.tar.gz\ntar xf openvswitch-2.5.9.tar.gz \n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u7f16\u8bd1\u6240\u9700\u7684\u4f9d\u8d56\u5305\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"   yum install gcc make python-devel openssl-devel kernel-devel graphviz \\\n       kernel-debug-devel autoconf automake rpm-build redhat-rpm-config \\\n       libtool -y\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5efa\u7acb",(0,o.kt)("inlineCode",{parentName:"li"},"rpmbuild"),"\u76ee\u5f55\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp openvswitch-2.5.9.tar.gz /root/rpmbuild/SOURCES\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u5185\u6838\u5f00\u53d1",(0,o.kt)("inlineCode",{parentName:"li"},"kernel-devel"),"\u6e90\u7801\u7684\u4f4d\u7f6e\u662f\u5426\u6b63\u786e\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@node01 ~]\\# ls /lib/modules/$(uname -r) -ln\ntotal 3276\nlrwxrwxrwx.  1 0 0     44 Apr 26 22:26 build -> `/usr/src/kernels/3.10.0-1062.18.1.el7.x86_64`          # \u5982\u679c\u8fd9\u91cc\u95ea\u7ea2\uff0c\u5219\u8868\u793a\u4e0d\u6b63\u786e\ndrwxr-xr-x.  2 0 0      6 Mar 18 07:53 extra\ndrwxr-xr-x. 12 0 0    128 Apr 26 22:26 kernel\n-rw-r--r--.  1 0 0 852612 Apr 26 22:28 modules.alias\n-rw-r--r--.  1 0 0 813600 Apr 26 22:28 modules.alias.bin\n-rw-r--r--.  1 0 0   1333 Mar 18 07:53 modules.block\n-rw-r--r--.  1 0 0   7357 Mar 18 07:53 modules.builtin\n-rw-r--r--.  1 0 0   9425 Apr 26 22:28 modules.builtin.bin\n-rw-r--r--.  1 0 0 271605 Apr 26 22:28 modules.dep\n-rw-r--r--.  1 0 0 379944 Apr 26 22:28 modules.dep.bin\n-rw-r--r--.  1 0 0    361 Apr 26 22:28 modules.devname\n-rw-r--r--.  1 0 0    140 Mar 18 07:53 modules.drm\n-rw-r--r--.  1 0 0     69 Mar 18 07:53 modules.modesetting\n-rw-r--r--.  1 0 0   1787 Mar 18 07:53 modules.networking\n-rw-r--r--.  1 0 0  97175 Mar 18 07:53 modules.order\n-rw-r--r--.  1 0 0    569 Apr 26 22:28 modules.softdep\n-rw-r--r--.  1 0 0 395089 Apr 26 22:28 modules.symbols\n-rw-r--r--.  1 0 0 483655 Apr 26 22:28 modules.symbols.bin\nlrwxrwxrwx.  1 0 0      5 Apr 26 22:26 source -> build\ndrwxr-xr-x.  2 0 0      6 Mar 18 07:53 updates\ndrwxr-xr-x.  2 0 0     95 Apr 26 22:26 vdso\ndrwxr-xr-x.  2 0 0      6 Apr 26 22:28 weak-updates\n")),(0,o.kt)("p",null,"build\u662f\u4e00\u4e2a\u65e0\u6548\u7684\u79f0\u53f7\u94fe\u63a5\uff0c\u5220\u9664\u8fd9\u4e2a\u94fe\u63a5\uff0c\u91cd\u65b0\u94fe\u63a5\u5230\u6b63\u786e\u76ee\u5f55\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm /lib/modules/$(uname -r)/build\nln -s /usr/src/kernels/3.10.0-1062.18.1.el7.x86_64 /lib/modules/$(uname -r)/build\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u5f00\u59cb\u5236\u4f5c",(0,o.kt)("inlineCode",{parentName:"li"},"RPM"),"\u5305")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd openvswitch-2.5.9\nrpmbuild -bb --without check rhel/openvswitch.spec\n\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u6700\u540e\u5b89\u88c5\u6240\u751f\u6210\u7684 RPM \u5305")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum localinstall -y /root/rpmbuild/RPMS/x86_64/openvswitch-2.5.9-1.x86_64.rpm \n")),(0,o.kt)("h2",{id:"\u5efa\u7acb-vxlan-\u62d3\u6251"},"\u5efa\u7acb vxLAN \u62d3\u6251"),(0,o.kt)("p",null,"\u73af\u5883:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u4e3b\u673aIP"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5bb9\u5668IP\u53ca\u7f51\u7edc"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"172.16.1.128"),(0,o.kt)("td",{parentName:"tr",align:null},"172.16.128.128\uff08172.16.128.0/24\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"172.16.1.129"),(0,o.kt)("td",{parentName:"tr",align:null},"172.16.129.129\uff08172.16.129.0/24\uff09")))),(0,o.kt)("p",null,"\u5c06\u5236\u4f5c\u597d\u7684 RPM \u5305\u53d1\u9001\u7ed9\u53e6\u4e00\u53f0\u4e3b\u673a\uff0c\u76f4\u63a5\u5b89\u88c5."),(0,o.kt)("p",null,"\u5728\u4e24\u4e3b\u673a\u4e0a\u542f\u52a8\u670d\u52a1\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl start openvswitch.service  ")),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"172.16.1.128"),"\u4e3b\u673a\u4e0a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /proc/sys/net/ipv4/ip_forward \n\novs-vsctl add-br obr0\novs-vsctl add-port obr0 gre0 -- set Interface gre0 type=gre options:remote_ip=172.16.1.128\nbrctl addbr kbr0\nbrctl addif kbr0 obr0\nip link set dev docker0 down\nip link del dev docker0\n\n# vi /etc/sysconfig/network-scripts/ifcfg-kbr0\nONBOOT=no\nBOOTPROTO=static\nIPADDR=172.16.128.1\nNETMASK=255.255.255.0\nGATEWAY=172.16.128.0\nUSERCTL=no\nTYPE=Bridge\nIPV6INIT=no\n\n# cat /etc/sysconfig/network-scripts/route-ens33 \n172.16.129.0/24 via 172.16.1.128 dev ens33\n# systemctl  restart network.service\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /proc/sys/net/ipv4/ip_forward \n\novs-vsctl add-br obr0\novs-vsctl add-port obr0 gre0 -- set Interface gre0 type=gre options:remote_ip=172.16.1.129\nbrctl addbr kbr0\nbrctl addif kbr0 obr0\nip link set dev docker0 down\nip link del dev docker0\n\n# vi /etc/sysconfig/network-scripts/ifcfg-kbr0\nONBOOT=no\nBOOTPROTO=static\nIPADDR=172.16.129.1\nNETMASK=255.255.255.0\nGATEWAY=172.16.129.0\nUSERCTL=no\nTYPE=Bridge\nIPV6INIT=no\n\n# cat /etc/sysconfig/network-scripts/route-ens33 \n172.16.128.0/24 via 172.16.1.129 dev ens33\n# systemctl  restart network.service\n")),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"172.16.1.128"),"\u4e3b\u673a\u6267\u884c\u4ee5\u4e0b\u811a\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6709\u9519\u8bef\u5219\u505c\u6b62\u6267\u884c\nset -e\n# \u521b\u5efa\u4e00\u4e2aopenvswitch bridge\novs-vsctl add-br ovs-br0\n# \u6dfb\u52a0\u4e00\u4e2a\u5230172.16.1.129\u7684\u63a5\u53e3\novs-vsctl add-port ovs-br0 vxlan-port-to-172.16.1.129 -- set  interface vxlan-port-to-172.16.1.129 type=vxlan option:remote_ip="172.16.1.129"\n\n# \u521b\u5efa\u4e00\u5bf9\u865a\u62df\u7f51\u5361veth\nip link add vethx type veth peer name vethContainer\n\n# sleep 3 seconds to wait for the completion of previous work.\nsleep 3\n\n# \u5c06vethx\u63a5\u5165\u5230ovs-br0\u4e2d\novs-vsctl add-port ovs-br0 vethx\nifconfig vethx up\n\n# \u542f\u52a8docker\u5bb9\u5668\uff0c\u4f7f\u7528--net=none\u7b56\u7565\nexport containerID=$(docker run -tid --net=none busybox:latest /bin/sh)\nexport pid=$(docker inspect -f "\u3010\u3010.State.Pid\u3011\u3011" ${containerID})\n\necho containerID=${containerID}\necho pid=${pid}\n\n# \u5982\u679cnet namespace\u76ee\u5f55\u6ca1\u6709\u521b\u5efa\u5219\u65b0\u5efa\u4e00\u4e2a\nif [ ! -d "/var/run/netns" ]; then\n  mkdir -p /var/run/netns\nfi\n\n# \u5c06docker\u5bb9\u5668\u4f7f\u7528\u7684net namespace \u6253\u56de\u539f\u5f62\nln -s /proc/${pid}/ns/net /var/run/netns/${pid}\nip netns list\n\n# \u5c06vethContainer\u52a0\u5165\u5230\u5bb9\u5668\u7684net namespace\u4e2d\nip link set vethContainer netns ${pid}\n\n# \u914d\u7f6evethContainer\u63a5\u53e3\nip netns exec ${pid} ifconfig vethContainer 172.16.128.128/24 up\nip netns exec ${pid} ifconfig -a\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u811a\u672c\u6765\u6e90\u4e8e\u7f51\u7edc\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6709\u9519\u8bef\u5219\u505c\u6b62\u6267\u884c\nset -e\n# \u521b\u5efa\u4e00\u4e2aopenvswitch bridge\novs-vsctl add-br ovs-br0\n# \u6dfb\u52a0\u4e00\u4e2a\u5230172.16.1.128\u7684\u63a5\u53e3\novs-vsctl add-port ovs-br0 vxlan-port-to-172.16.1.128 -- set  interface vxlan-port-to-172.16.1.128 type=vxlan option:remote_ip="172.16.1.128"\n\n# \u521b\u5efa\u4e00\u5bf9\u865a\u62df\u7f51\u5361veth\nip link add vethx type veth peer name vethContainer\n\n# sleep 3 seconds to wait for the completion of previous work.\nsleep 3\n\n# \u5c06vethx\u63a5\u5165\u5230ovs-br0\u4e2d\novs-vsctl add-port ovs-br0 vethx\nifconfig vethx up\n\n# \u542f\u52a8docker\u5bb9\u5668\uff0c\u4f7f\u7528--net=none\u7b56\u7565\nexport containerID=$(docker run -tid --net=none busybox:latest /bin/sh)\nexport pid=$(docker inspect -f "\u3010\u3010.State.Pid\u3011\u3011" ${containerID})\n\necho containerID=${containerID}\necho pid=${pid}\n\n# \u5982\u679cnet namespace\u76ee\u5f55\u6ca1\u6709\u521b\u5efa\u5219\u65b0\u5efa\u4e00\u4e2a\nif [ ! -d "/var/run/netns" ]; then\n  mkdir -p /var/run/netns\nfi\n\n# \u5c06docker\u5bb9\u5668\u4f7f\u7528\u7684net namespace \u6253\u56de\u539f\u5f62\nln -s /proc/${pid}/ns/net /var/run/netns/${pid}\nip netns list\n\n# \u5c06vethContainer\u52a0\u5165\u5230\u5bb9\u5668\u7684net namespace\u4e2d\nip link set vethContainer netns ${pid}\n\n# \u914d\u7f6evethContainer\u63a5\u53e3\nip netns exec ${pid} ifconfig vethContainer 172.16.129.129/24 up\nip netns exec ${pid} ifconfig -a\n')))}d.isMDXComponent=!0}}]);