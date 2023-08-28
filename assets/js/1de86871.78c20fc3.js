"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[9284],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),v=p(t),u=a,m=v["".concat(s,".").concat(u)]||v[u]||c[u]||l;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=v;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},64562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={},i="LVS + keepalived",o={unversionedId:"LinuxBasics/LoadBalancer/LVS/LVS - keepalived",id:"LinuxBasics/LoadBalancer/LVS/LVS - keepalived",title:"LVS + keepalived",description:"LVS/NAT + keepalived\t|\tLVS/DR + keepalived",source:"@site/docs/LinuxBasics/LoadBalancer/LVS/LVS - keepalived.md",sourceDirName:"LinuxBasics/LoadBalancer/LVS",slug:"/LinuxBasics/LoadBalancer/LVS/LVS - keepalived",permalink:"/docs/LinuxBasics/LoadBalancer/LVS/LVS - keepalived",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/LoadBalancer/LVS/LVS - keepalived.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"LVS",permalink:"/docs/category/lvs"},next:{title:"LVS \u56db\u79cd\u6a21\u578b\u8be6\u89e3",permalink:"/docs/LinuxBasics/LoadBalancer/LVS/LVS \u56db\u79cd\u6a21\u578b\u8be6\u89e3"}},s={},p=[{value:"LVS-NAT \u6a21\u5f0f",id:"lvs-nat-\u6a21\u5f0f",level:2},{value:"LVS-DR \u6a21\u5f0f",id:"lvs-dr-\u6a21\u5f0f",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lvs--keepalived"},"LVS + keepalived"),(0,a.kt)("p",null,"[LVS/NAT + keepalived]","(#LVS-NAT \u6a21\u5f0f)\t|\t","[LVS/DR + keepalived]","(#LVS-DR \u6a21\u5f0f)"),(0,a.kt)("h2",{id:"lvs-nat-\u6a21\u5f0f"},"LVS-NAT \u6a21\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u73af\u5883")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u516c\u7f51ip"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5185\u7f51ip"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"LVS VIP")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"172.16.1.99")),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.1.2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Keepalived Master")),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.134"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.1.131")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Keepalived Backup")),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.138"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.1.138")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Realserver 1")),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.1.130")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Realserver 2")),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.1.129")))),(0,a.kt)("p",null,"\u26a0\ufe0f",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," MASTER\u548cBACKUP\u4e3b\u673a\u4e0a\u9700\u5f00\u542f",(0,a.kt)("inlineCode",{parentName:"p"},"net.ipv4.ip_forward"),"\u5185\u6838\u8f6c\u53d1\uff0c\u5e76\u4e14\u540e\u7aefRS1\u548cRS2\u7684\u9ed8\u8ba4\u7f51\u5173\u5e94\u6307\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.2")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Keepalived \u5b8c\u6574\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"! Configuration File for keepalived\n\nglobal_defs {\n   notification_email {\n        agou-ops@foxmail.com\n    }\n   notification_email_from Alexandre.Cassen@firewall.loc\n   smtp_server 127.0.0.1\n   smtp_connect_timeout 30\n   router_id master\n   vrrp_mcast_group4  224.1.111.1\n}\n\nvrrp_sync_group VG1 {\n   group {\n      VI_1\n      VI_GATEWAY\n   }\n}\n\nvrrp_instance VI_1 {\n    state MASTER            # ---\u5907\u7528\u4e3b\u673a\u66f4\u6362\u4e3aBACKUP\n    interface ens33\n    lvs_sync_daemon_inteface ens33\n    virtual_router_id 51\n    priority 100            # ---\u5907\u7528\u4e3b\u673a\u9002\u5f53\u964d\u4f4e\u4f18\u5148\u7ea7\n    advert_int 1\n    authentication {\n        auth_type PASS\n                auth_pass GU6hbFS4\n    }\n    virtual_ipaddress {\n        172.16.1.99         # LVS VIP\u516c\u7f51IP\u5730\u5740\n    }\n}\n\n\nvrrp_instance VI_GATEWAY {\n    state MASTER            # ---\u5907\u7528\u4e3b\u673a\u66f4\u6362\u4e3aBACKUP\n    interface ens37\n    lvs_sync_daemon_inteface ens37\n    virtual_router_id 51\n    priority 100            # ---\u5907\u7528\u4e3b\u673a\u9002\u5f53\u964d\u4f4e\u4f18\u5148\u7ea7\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass GU6hbFS4\n    }\n    virtual_ipaddress {\n        192.168.1.2         # LVS VIP\u5185\u7f51IP\u5730\u5740\n    }\n}\n\n\nvirtual_server 172.16.1.99 80 {\n    delay_loop 1\n    lb_algo wrr\n    lb_kind NAT\n    protocol TCP\n    sorry_server 127.0.0.1 80\n\n    real_server 192.168.1.130 80 {          # RS1\n    weight 2\n    HTTP_GET {\n        url {\n            path /index.html\n            status_code 200\n        }\n        nb_get_retry 3\n        delay_before_retry 2\n        connect_timeout 4\n      }\n    }\n    real_server 192.168.1.129 80 {          # RS2\n    weight 1\n    HTTP_GET {\n        url {\n            path /index.html\n            status_code 200\n        }\n        nb_get_retry 3\n        delay_before_retry 2\n        connect_timeout 4\n        }\n    }\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u673a\u7f51\u7ad9\u6d4b\u8bd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"suofeiya@suofeiya-15ISK:~$ while true;do curl 172.16.1.99;sleep 1;done\n<h1>Backend RS1</h1>\n<h1>Backend RS2</h1>\n<h1>Backend RS1</h1>\n<h1>Backend RS1</h1>\n<h1>Backend RS2</h1>\n<h1>Backend RS1</h1>\n<h1>Backend RS1</h1>\n<h1>Backend RS2</h1> \n...\n")),(0,a.kt)("p",null,"\u4e3b\u5907\u8282\u70b9\u5b95\u673aVIP\u8f6c\u79fb\u6d4b\u8bd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u624b\u52a8\u5173\u95edmaster\u8282\u70b9\u7684keepalived\u6a21\u62df\u5b95\u673a\u884c\u4e3a\n[root@master ~]\\# systemctl stop keepalived  \n# \u5728\u5907\u7528\u8282\u70b9\u4e0a\u67e5\u770b\u72b6\u6001\n[root@master-1 ~]\\# systemctl status keepalived\n\u25cf keepalived.service - LVS and VRRP High Availability Monitor\n   Loaded: loaded (/usr/lib/systemd/system/keepalived.service; disabled; vendor preset: disabled)\n   Active: active (running) since Sat 2020-04-04 18:42:27 CST; 1s ago\n  Process: 4556 ExecStart=/usr/sbin/keepalived $KEEPALIVED_OPTIONS (code=exited, status=0/SUCCESS)\n Main PID: 4557 (keepalived)\n   CGroup: /system.slice/keepalived.service\n           \u251c\u25004557 /usr/sbin/keepalived -D\n           \u251c\u25004558 /usr/sbin/keepalived -D\n           \u2514\u25004559 /usr/sbin/keepalived -D\n\nApr 04 18:42:27 master Keepalived_vrrp[4559]: Unknown keyword 'lvs_sync_daemon_inteface'\nApr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP_Instance(VI_1) removing protocol VIPs.\nApr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP_Instance(VI_GATEWAY) removing protocol VIPs.\nApr 04 18:42:27 master Keepalived_vrrp[4559]: Using LinkWatch kernel netlink reflector...\nApr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP_Instance(VI_1) Entering BACKUP STATE\nApr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP_Instance(VI_GATEWAY) Entering BACKUP STATE\nApr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP sockpool: [ifindex(2), proto(112), unicast(0), fd(10,11)]\nApr 04 18:42:27 master Keepalived_vrrp[4559]: VRRP sockpool: [ifindex(3), proto(112), unicast(0), fd(12,13)]\nApr 04 18:42:27 master Keepalived_healthcheckers[4558]: Activating healthchecker for service [172.16.1.99]:80\nApr 04 18:42:27 master Keepalived_healthcheckers[4558]: Activating healthchecker for service [172.16.1.99]:80\n# \u67e5\u770bVIP\u662f\u5426\u5230\u624b\n[root@master ~]\\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host \n       valid_lft forever preferred_lft forever\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 00:0c:29:50:bb:aa brd ff:ff:ff:ff:ff:ff\n    inet 172.16.1.138/24 brd 172.16.1.255 scope global noprefixroute dynamic ens33\n       valid_lft 1058sec preferred_lft 1058sec\n    inet` 172.16.1.99/32` scope global ens33\n       valid_lft forever preferred_lft forever\n3: ens37: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 00:0c:29:50:bb:b4 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.1.132/24 brd 192.168.1.255 scope global noprefixroute dynamic ens37\n       valid_lft 1561sec preferred_lft 1561sec\n    inet 192.168.1.2/32 scope global ens37\n       valid_lft forever preferred_lft forever\n    inet6 fe80::991a:e225:4c8c:1cf9/64 scope link noprefixroute \n       valid_lft forever preferred_lft forever\n\n# \u5728master\u8282\u70b9\u4e0a\u67e5\u770b\u7ec4\u64ad\u60c5\u51b5\n[root@master ~]\\# tcpdump -i ens33 -nn host 224.1.111.1\n18:46:04.783459 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20\n18:46:05.784773 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20\n18:46:06.786493 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20\n18:46:07.788104 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 100, authtype simple, intvl 1s, length 20\n18:46:08.055519 IP 172.16.1.134 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 0, authtype simple, intvl 1s, length 20\n18:46:08.680212 IP 172.16.1.138 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20\n18:46:09.304072 IP 172.16.1.138 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20\n18:46:10.304891 IP 172.16.1.138 > 224.1.111.1: VRRPv2, Advertisement, vrid 51, prio 97, authtype simple, intvl 1s, length 20\n# \u6b64\u5904\u53ef\u53d1\u73b0\u5907\u7528\u8282\u70b9\u5df2\u6536\u5230\u7ec4\u64ad\u901a\u544a\n")),(0,a.kt)("h2",{id:"lvs-dr-\u6a21\u5f0f"},"LVS-DR \u6a21\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u73af\u5883")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u670d\u52a1\u5668\u7c7b\u578b")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"IP"),"\u5730\u5740"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Lvs VIP")),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.99")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Keepalived Master")),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.134")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Keepalived Backup")),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.138")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Realserver 1")),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.135")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Realserver 2")),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.1.136")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u540e\u7aef RS1\u548cRS2 \u6240\u9700\u64cd\u4f5c(\u4ee5RS1\u4e3a\u4f8b)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u6b64\u5904\u4f7f\u7528shell\u811a\u672c\uff0c\u811a\u672c\u5185\u5bb9\u5982\u4e0b\n[root@node01 ~]\\# cat lvs-rs.sh \n#!/bin/bash\nvip='172.16.1.99'\nmask='255.255.255.255'\ndev='lo:1'\n\ncase $1 in\nstart)\n    echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore\n    echo 1 > /proc/sys/net/ipv4/conf/lo/arp_ignore\n    echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce\n    echo 2 > /proc/sys/net/ipv4/conf/lo/arp_announce\n    #ifconfig $dev $vip netmask $mask\n    ip addr add $vip/32 label lo:1 dev lo\n    #route add -host $vip dev $dev\n    echo \"The RS Server is Ready!\"\n    ;;\nstop)\n    ifconfig $dev down\n    echo 0 > /proc/sys/net/ipv4/conf/all/arp_ignore\n    echo 0 > /proc/sys/net/ipv4/conf/lo/arp_ignore\n    echo 0 > /proc/sys/net/ipv4/conf/all/arp_announce\n    echo 0 > /proc/sys/net/ipv4/conf/lo/arp_announce\n    echo \"The RS Server is Canceled!\"\n    ;;\n*)\n    echo \"Usage: $(basename $0) start|stop\"\n    exit 1\n    ;;\nesac\n")),(0,a.kt)("p",null,"\u5206\u522b\u5728 RS1\u548cRS2 \u4e0a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"sh lvs-rs.sh start "),"\u547d\u4ee4\uff0c\u7136\u540e\u67e5\u770bVIP\u4fe1\u606f(\u4ee5RS1\u4e3a\u4f8b)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[root@node01 ~]\\# ip a\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet` 172.16.1.99/32` scope global lo:1\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host \n       valid_lft forever preferred_lft forever\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Keepalived \u5b8c\u6574\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"! Configuration File for keepalived\n\nglobal_defs {\n   notification_email {\n        agou-ops@foxmail.com\n    }\n   notification_email_from Alexandre.Cassen@firewall.loc\n   smtp_server 127.0.0.1\n   smtp_connect_timeout 30\n   router_id master\n   vrrp_mcast_group4  224.1.111.1\n}\n\nvrrp_instance VI_1 {\n    state MASTER                        # ---\u5907\u7528\u4e3b\u673a\u66f4\u6362\u4e3aBACKUP\n    interface ens33\n    lvs_sync_daemon_inteface ens33\n    virtual_router_id 51\n    priority 100                        # ---\u5907\u7528\u4e3b\u673a\u9002\u5f53\u964d\u4f4e\u4f18\u5148\u7ea7\n    advert_int 1\n    authentication {\n        auth_type PASS\n                auth_pass GU6hbFS4\n    }\n    virtual_ipaddress {\n        172.16.1.99/32 dev ens33 label ens33:0                  # LVS VIP\u5730\u5740\n    }\n}\nvirtual_server 172.16.1.99 80 {\n    delay_loop 1\n    lb_algo wrr\n    lb_kind DR\n    protocol TCP\n    sorry_server 127.0.0.1 80\n\n    real_server 172.16.1.135 80 {                      # RS1\n    weight 2\n    HTTP_GET {\n        url {\n            path /index.html\n            status_code 200\n        }\n        nb_get_retry 3\n        delay_before_retry 2\n        connect_timeout 4\n      }\n    }\n    real_server 172.16.1.136 80 {                      # RS2\n    weight 1\n    HTTP_GET {\n        url {\n            path /index.html\n            status_code 200\n        }\n        nb_get_retry 3\n        delay_before_retry 2\n        connect_timeout 4\n                }\n    }\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u7f51\u7ad9\u6d4b\u8bd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"suofeiya@suofeiya-15ISK:~$ while true;do curl 172.16.1.99;sleep 1;done\n<h1>Backend RS2</h1>\n<h1>Backend RS1</h1>\n<h1>Backend RS1</h1>\n<h1>Backend RS2</h1>\n<h1>Backend RS1</h1>\n...\n")),(0,a.kt)("p",null,"\u4e3b\u5907\u8282\u70b9\u5b95\u673aVIP\u8f6c\u79fb\u6d4b\u8bd5\uff1a\u53c2\u8003\u4e0a\u9762NAT\u6a21\u5f0f\u7684\u6b65\u9aa4"))}c.isMDXComponent=!0}}]);