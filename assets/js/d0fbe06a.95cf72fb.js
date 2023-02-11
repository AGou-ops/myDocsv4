"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,k=c["".concat(p,".").concat(g)]||c[g]||o[g]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},i="WireGuard VPN for Ubuntu",u={unversionedId:"LinuxBasics/WireGuard VPN for Ubuntu",id:"LinuxBasics/WireGuard VPN for Ubuntu",title:"WireGuard VPN for Ubuntu",description:"WireGuard \u7b80\u4ecb",source:"@site/docs/LinuxBasics/WireGuard VPN for Ubuntu.md",sourceDirName:"LinuxBasics",slug:"/LinuxBasics/WireGuard VPN for Ubuntu",permalink:"/docs/LinuxBasics/WireGuard VPN for Ubuntu",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/WireGuard VPN for Ubuntu.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"windows \u547d\u4ee4\u6307\u793a\u7b26",permalink:"/docs/LinuxBasics/Windows useful cmd"},next:{title:"dnsmasq \u90e8\u7f72\u4e0e\u4f7f\u7528",permalink:"/docs/LinuxBasics/dnsmasq"}},p={},s=[{value:"WireGuard \u7b80\u4ecb",id:"wireguard-\u7b80\u4ecb",level:2},{value:"WG\u5b89\u88c5",id:"wg\u5b89\u88c5",level:2},{value:"\u914d\u7f6eWG",id:"\u914d\u7f6ewg",level:2},{value:"\u670d\u52a1\u5668\u7f51\u7edc\u548c\u9632\u706b\u5899\u914d\u7f6e",id:"\u670d\u52a1\u5668\u7f51\u7edc\u548c\u9632\u706b\u5899\u914d\u7f6e",level:2},{value:"\u5ba2\u6237\u7aef\u914d\u7f6e",id:"\u5ba2\u6237\u7aef\u914d\u7f6e",level:2},{value:"Linux &amp; macOS",id:"linux--macos",level:3},{value:"Windows",id:"windows",level:3},{value:"\u5c06\u5ba2\u6237\u7aef\u5bf9\u7b49\u65b9\u6dfb\u52a0\u5230\u670d\u52a1\u5668",id:"\u5c06\u5ba2\u6237\u7aef\u5bf9\u7b49\u65b9\u6dfb\u52a0\u5230\u670d\u52a1\u5668",level:2},{value:"Linux \u548c macos \u5ba2\u6237\u7aef",id:"linux-\u548c-macos-\u5ba2\u6237\u7aef",level:3},{value:"Windows \u5ba2\u6237\u7aef",id:"windows-\u5ba2\u6237\u7aef",level:3},{value:"\u4e00\u952e\u5b89\u88c5 wireguard",id:"\u4e00\u952e\u5b89\u88c5-wireguard",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],d={toc:s};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wireguard-vpn-for-ubuntu"},"WireGuard VPN for Ubuntu"),(0,r.kt)("h2",{id:"wireguard-\u7b80\u4ecb"},"WireGuard \u7b80\u4ecb"),(0,r.kt)("p",null,"\u200b\t\tWireGuard\u662f\u5177\u6709\u6700\u65b0\u52a0\u5bc6\u6280\u672f\u7684\u73b0\u4ee3VPN\uff08\u865a\u62df\u4e13\u7528\u7f51\uff09\u6280\u672f\u3002\u4e0eIPsec\u548cOpenVPN\u7b49\u5176\u4ed6\u7c7b\u4f3c\u89e3\u51b3\u65b9\u6848\u76f8\u6bd4\uff0cWireGuard\u66f4\u5feb\uff0c\u66f4\u6613\u4e8e\u914d\u7f6e\u4e14\u6027\u80fd\u66f4\u9ad8\u3002\u5b83\u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\uff0c\u51e0\u4e4e\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u8fd0\u884c\uff0c\u5305\u62ecLinux\uff0cWindows\uff0cAndroid\u548cmacOS\u3002 Wireguard\u662f\u5bf9\u7b49VPN\u3002\u5b83\u4e0d\u4f7f\u7528\u5ba2\u6237\u7aef-\u670d\u52a1\u5668\u6a21\u578b\u3002\u6839\u636e\u5176\u914d\u7f6e\uff0c\u5bf9\u7b49\u65b9\u53ef\u4ee5\u5145\u5f53\u4f20\u7edf\u7684\u670d\u52a1\u5668\u6216\u5ba2\u6237\u7aef\u3002 WireGuard\u901a\u8fc7\u5728\u5145\u5f53\u96a7\u9053\u7684\u6bcf\u4e2a\u5bf9\u7b49\u8bbe\u5907\u4e0a\u521b\u5efa\u7f51\u7edc\u63a5\u53e3\u6765\u5de5\u4f5c\u3002\u5bf9\u7b49\u4f53\u901a\u8fc7\u4ea4\u6362\u548c\u9a8c\u8bc1\u516c\u5171\u5bc6\u94a5\uff08\u7c7b\u4f3c\u4e8eSSH\u6a21\u578b\uff09\u6765\u76f8\u4e92\u8ba4\u8bc1\u3002\u516c\u94a5\u4e0e\u96a7\u9053\u4e2d\u5141\u8bb8\u7684IP\u5730\u5740\u5217\u8868\u8fdb\u884c\u6620\u5c04\u3002 VPN\u6d41\u91cf\u5c01\u88c5\u5728UDP\u4e2d\u3002\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u5728\u5145\u5f53VPN\u670d\u52a1\u5668\u7684Ubuntu 18.04\u8ba1\u7b97\u673a\u4e0a\u8bbe\u7f6eWireGuard\u3002\u6211\u4eec\u8fd8\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5c06WireGuard\u914d\u7f6e\u4e3a\u5ba2\u6237\u7aef\u3002\u5ba2\u6237\u7aef\u7684\u6d41\u91cf\u5c06\u901a\u8fc7Ubuntu 18.04\u670d\u52a1\u5668\u8fdb\u884c\u8def\u7531\u3002\u6b64\u8bbe\u7f6e\u53ef\u7528\u4e8e\u9632\u5fa1\u4e2d\u95f4\u4eba\u653b\u51fb\uff0c\u533f\u540d\u6d4f\u89c8\u7f51\u7edc\uff0c\u7ed5\u8fc7\u53d7\u5730\u57df\u9650\u5236\u7684\u5185\u5bb9\uff0c\u6216\u5141\u8bb8\u60a8\u7684\u540c\u4e8b\u5728\u8fdc\u7a0b\u5de5\u4f5c\u65f6\u5b89\u5168\u5730\u8fde\u63a5\u5230\u516c\u53f8\u7f51\u7edc\u3002"),(0,r.kt)("h2",{id:"wg\u5b89\u88c5"},"WG\u5b89\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u8f6f\u4ef6\u5305\u5217\u8868\uff0c\u5e76\u5b89\u88c5\u7ba1\u7406\u7cfb\u7edf\u5b58\u50a8\u5e93\u6240\u9700\u7684\u5de5\u5177\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install software-properties-common\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 WireGuard \u4ed3\u5e93\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:wireguard/wireguard\n")),(0,r.kt)("p",null,"\u51fa\u73b0\u63d0\u793a\u65f6\uff0c\u6309Enter\u952e\u7ee7\u7eed\u3002 add-apt-repository\u4e5f\u5c06\u81ea\u52a8\u66f4\u65b0\u8f6f\u4ef6\u5305\u5217\u8868\u3002"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5WireGuard\u8f6f\u4ef6\u5305\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install wireguard\n")),(0,r.kt)("p",null,"WireGuard\u4f5c\u4e3a\u5185\u6838\u6a21\u5757\u8fd0\u884c\uff0c\u8be5\u6a21\u5757\u88ab\u7f16\u8bd1\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"DKMS"),"\u6a21\u5757\u3002\u6210\u529f\u5b8c\u6210\u540e\uff0c\u60a8\u5c06\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wireguard:\nRunning module version sanity check.\n - Original module\n   - No original module exists within this kernel\n - Installation\n   - Installing to /lib/modules/4.15.0-88-generic/updates/dkms/\n\ndepmod...\n\nDKMS: install completed.\n")),(0,r.kt)("p",null,"\u66f4\u65b0\u5185\u6838\u65f6\uff0c\u9700\u8981\u5c06\u9488\u5bf9\u65b0\u5185\u6838\u7f16\u8bd1WireGuard\u6a21\u5757\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6ewg"},"\u914d\u7f6eWG"),(0,r.kt)("p",null,"WireGuard \u7a0b\u5e8f\u5305\u9644\u5e26\u4e86\u4e24\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"wg"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"wg-quick"),"\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u7528\u4e8e\u914d\u7f6e\u548c\u7ba1\u7406WireGuard\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u751f\u6210\u516c\u94a5\u548c\u79c1\u94a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wg genkey | sudo tee /etc/wireguard/privatekey | wg pubkey | sudo tee /etc/wireguard/publickey\n")),(0,r.kt)("p",null,"\u2139\ufe0f \u516c\u79c1\u94a5\u653e\u7f6e\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/wireguard"),"\u76ee\u5f55,\u5176\u4e2d\u79c1\u94a5\u7edd\u5bf9\u4e0d\u80fd\u4e0e\u4efb\u4f55\u4eba\u5171\u4eab"),(0,r.kt)("p",null,"\u751f\u6210\u5bc6\u94a5\u540e\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u8def\u7531VPN\u7684\u96a7\u9053\u8bbe\u5907"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528ip\u548cwg\u4ece\u547d\u4ee4\u884c\u8bbe\u7f6e\u8bbe\u5907\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"wg0.conf"),"(\u6587\u4ef6\u540d\u53ef\u4ee5\u968f\u610f)\u7684\u65b0\u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat >> /etc/wireguard/wg0.conf << EOF\n[Interface]\nAddress = 192.168.159.0/24      # \u586b\u5199\u7f51\u7edc\u5730\u5740\u6bb5\nSaveConfig = true       # \u5173\u95ed\u65f6\uff0c\u63a5\u53e3\u7684\u5f53\u524d\u72b6\u6001\u5c06\u4fdd\u5b58\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d\nListenPort = 51820          # \u76d1\u542c\u7aef\u53e3\nPrivateKey = QNKQCtPo2E5saDnXORaIORhZH6NtcvIJPHqF9EdEL1o=   # \u79c1\u94a5\u6587\u4ef6,\u5373/etc/wireguard/privatekey\nPostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o ens33 -j MASQUERADE     # \u5728\u542f\u52a8\u4e4b\u524d\u6267\u884c\u7684\u547d\u4ee4\u6216\u811a\u672c,\u4f7f\u7528iptables\u542f\u7528\u4f2a\u88c5,\u5141\u8bb8\u6d41\u91cf\u79bb\u5f00\u670d\u52a1\u5668\uff0c\u4ece\u800c\u4f7fVPN\u5ba2\u6237\u7aef\u53ef\u4ee5\u8bbf\u95eeInternet\u3002\nPostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o ens33 -j MASQUERADE       # \u5728\u542f\u52a8\u4e4b\u540e\u6267\u884c\u7684\u547d\u4ee4\u6216\u811a\u672c,\u63a5\u53e3\u5173\u95ed\u540e\uff0ciptables\u89c4\u5219\u5c06\u88ab\u5220\u9664\nEOF\n")),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"privatekey"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"wg0.conf"),"\u7684\u6743\u9650, \u4fdd\u8bc1\u5176\u5b89\u5168\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod 600 /etc/wireguard/{privatekey,wg0.conf}\n")),(0,r.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u5c5e\u6027\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"wg0"),"\u63a5\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo wg-quick up wg0\n\n* \u8f93\u51fa\u5185\u5bb9\u5982\u4e0b\u6240\u793a:\n[#] ip link add wg0 type wireguard\n[#] wg setconf wg0 /dev/fd/63\n[#] ip -4 address add 192.168.159.0/24 dev wg0\n[#] ip link set mtu 1420 up dev wg0\n[#] iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o ens33 -j MASQUERADE\n")),(0,r.kt)("p",null,"\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"wg show wg0"),"\u68c0\u67e5\u63a5\u53e3\u72b6\u6001\u548c\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo wg show wg0\n\n* \u8f93\u51fa\u5185\u5bb9\u5982\u4e0b\u6240\u793a:\ninterface: wg0\n  public key: uD6Xex2eP5CEUVcVP3EZB5csh2JReWXthoVZMzURwCQ=\n  private key: (hidden)\n  listening port: 51820\n")),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"ip a show wg0"),"\u6765\u9a8c\u8bc1\u63a5\u53e3\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ip a show wg0\n\n* \u8f93\u51fa\u5185\u5bb9\u5982\u4e0b\u6240\u793a:\n4: wg0: <POINTOPOINT,NOARP,UP,LOWER_UP> mtu 1420 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/none\n    inet 192.168.159.0/24 scope global wg0\n       valid_lft forever preferred_lft forever\n")),(0,r.kt)("p",null,"\u8bbe\u7f6ewireguard \u5f00\u673a\u81ea\u542f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable wg-quick@wg0\n")),(0,r.kt)("h2",{id:"\u670d\u52a1\u5668\u7f51\u7edc\u548c\u9632\u706b\u5899\u914d\u7f6e"},"\u670d\u52a1\u5668\u7f51\u7edc\u548c\u9632\u706b\u5899\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f",(0,r.kt)("inlineCode",{parentName:"p"},"NAT"),"\u6b63\u5e38\u5de5\u4f5c\uff0c\u6211\u4eec\u9700\u8981\u542f\u7528IP\u8f6c\u53d1\uff0c\u6253\u5f00",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf"),"\u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u6216\u53d6\u6d88\u6ce8\u91ca\u4ee5\u4e0b\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"...\nnet.ipv4.ip_forward=1\n...\n")),(0,r.kt)("p",null,"\u4fee\u6539\u5b8c\u6210\u4e4b\u540e, \u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"sudo sysctl -p"),"\u4f7f\u914d\u7f6e\u6c38\u4e45\u751f\u6548"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"UFW"),"\u6765\u7ba1\u7406\u9632\u706b\u5899\uff0c\u5219\u9700\u8981\u5728\u7aef\u53e351820\u4e0a\u6253\u5f00UDP\u901a\u4fe1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 51820/udp\n")),(0,r.kt)("p",null,"\u81f3\u6b64,WG SERVER \u5df2\u5b8c\u6210\u914d\u7f6e"),(0,r.kt)("h2",{id:"\u5ba2\u6237\u7aef\u914d\u7f6e"},"\u5ba2\u6237\u7aef\u914d\u7f6e"),(0,r.kt)("h3",{id:"linux--macos"},"Linux & macOS"),(0,r.kt)("p",null,"\u53bb\u5f80\u5b98\u65b9\u4e0b\u8f7d\u7ad9\u70b9(",(0,r.kt)("a",{parentName:"p",href:"https://wireguard.com/install/"},"https://wireguard.com/install/"),"), \u67e5\u770b\u5982\u4f55\u5b89\u88c5WireGuard"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"macOS App Store: ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/wireguard/id1441195209?ls=1"},"https://apps.apple.com/us/app/wireguard/id1441195209?ls=1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"ubuntu--1904-module--v1020200413--tools--v1020200319"},"Ubuntu \u2264 19.04 [",(0,r.kt)("a",{parentName:"h4",href:"https://launchpad.net/~wireguard/+archive/ubuntu/wireguard"},"module")," \u2013 v1.0.20200413 & ",(0,r.kt)("a",{parentName:"h4",href:"https://launchpad.net/~wireguard/+archive/ubuntu/wireguard"},"tools")," \u2013 v1.0.20200319]"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ sudo add-apt-repository ppa:wireguard/wireguard\n$ sudo apt-get update\n$ sudo apt-get install wireguard\n")))),(0,r.kt)("p",null,"\u8bbe\u7f6eLinux\u548cmacOS\u5ba2\u6237\u7aef\u8fc7\u7a0b\u57fa\u672c\u76f8\u540c, \u9996\u5148\u751f\u6210\u516c\u94a5\u4e0e\u79c1\u94a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wg genkey | sudo tee /etc/wireguard/privatekey | wg pubkey | sudo tee /etc/wireguard/publickey\n")),(0,r.kt)("p",null,"\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/wireguard/wg0.conf"),"\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[Interface]\nPrivateKey = CLIENT_PRIVATE_KEY         # /etc/wireguard/privatekey\nAddress = 192.168.43.0/24\n\n\n[Peer]\nPublicKey = SERVER_PUBLIC_KEY       # /etc/wireguard/publickey\nEndpoint = SERVER_IP_ADDRESS:51820      # \u5bf9\u65b9wireguard server\u7684ip\u548c\u7aef\u53e3\nAllowedIPs = 0.0.0.0/0\n")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"\u76f4\u63a5\u4e0b\u8f7d\u5ba2\u6237\u7aef\u5de5\u5177: ",(0,r.kt)("a",{parentName:"p",href:"https://download.wireguard.com/windows-client/wireguard-amd64-0.1.0.msi"},"https://download.wireguard.com/windows-client/wireguard-amd64-0.1.0.msi")),(0,r.kt)("p",null,"\u5b89\u88c5\u597d\u8f6f\u4ef6\u4e4b\u540e, \u70b9\u51fb\u5de6\u4e0b\u89d2\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Add Tunnel"),", \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u96a7\u9053",(0,r.kt)("inlineCode",{parentName:"p"},"Create new tunnel")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u968f\u4fbf\u8d77\u55bd, \u5185\u5bb9\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[Interface]\nPrivateKey = MOeXEby5OG1xQBCP9AJEJEsxmxYDG1FHHzlcOgi/ClI=\nAddress = 192.168.43.0/24\n\n[Peer]\nPublicKey = uD6Xex2eP5CEUVcVP3EZB5csh2JReWXthoVZMzURwCQ=            # \u670d\u52a1\u5668\u7aef\u516c\u94a5\nEndpoint = 192.168.159.132:51820        # \u670d\u52a1\u5668ip\u4ee5\u53ca\u7aef\u53e3\nAllowedIPs = 0.0.0.0/0\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s1.ax1x.com/2020/04/20/JQBW4K.png",alt:"wg"})),(0,r.kt)("h2",{id:"\u5c06\u5ba2\u6237\u7aef\u5bf9\u7b49\u65b9\u6dfb\u52a0\u5230\u670d\u52a1\u5668"},"\u5c06\u5ba2\u6237\u7aef\u5bf9\u7b49\u65b9\u6dfb\u52a0\u5230\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u6700\u540e\u4e00\u6b65\u662f\u5c06\u5ba2\u6237\u7aef\u516c\u94a5\u548cIP\u5730\u5740\u6dfb\u52a0\u5230\u670d\u52a1\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# sudo wg set wg0 peer CLIENT_PUBLIC_KEY allowed-ips 10.0.0.2\nsudo wg set wg0 peer T5ZTibLaWh9/3EzA1ZfCdiojM0HfXvh99mfVlqHpaU0= allowed-ips 192.168.43.0/24\nsudo wg set wg0 peer UqF/BDwShHFulAUN4yx0latMIiIW0Cbb+IuNHEYEBj0= allowed-ips 192.168.43.0/24\n")),(0,r.kt)("p",null,"\u786e\u4fdd\u4f7f\u7528\u5728\u5ba2\u6237\u7aef\u8ba1\u7b97\u673a\u4e0a\u751f\u6210\u7684\u516c\u7528\u5bc6\u94a5\xb7\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"sudo cat /etc/wireguard/publickey"),"\uff09\xb7\u66f4\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"CLIENT_PUBLIC_KEY"),"\u5e76\u8c03\u6574\u5ba2\u6237\u7aefIP\u5730\u5740\uff08\u5982\u679c\u4e0d\u540c\u7684\u8bdd\uff09\uff0cWindows\u7528\u6237\u53ef\u4ee5\u4eceWireGuard\u8f6f\u4ef6\u5f53\u4e2d\u590d\u5236\u516c\u94a5"),(0,r.kt)("h3",{id:"linux-\u548c-macos-\u5ba2\u6237\u7aef"},"Linux \u548c macos \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u5728Linux\u5ba2\u6237\u7aef\u4e0a\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u6253\u5f00\u754c\u9762\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wg-quick up wg0\n")),(0,r.kt)("p",null," \u73b0\u5728\uff0c\u5e94\u8be5\u5df2\u8fde\u63a5\u5230Ubuntu\u670d\u52a1\u5668\uff0c\u5e76\u4e14\u6765\u81ea\u5ba2\u6237\u7aef\u8ba1\u7b97\u673a\u7684\u6d41\u91cf\u5e94\u901a\u8fc7\u8be5\u670d\u52a1\u5668\u8fdb\u884c\u8def\u7531\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u68c0\u67e5\u8fde\u63a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo wg\n\n* \u8f93\u51fa\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a\ninterface: wg0\n  public key: sZThYo/0oECwzUsIKTa6LYXLhk+Jb/nqK4kCCP2pyFg=\n  private key: (hidden)\n  listening port: 48052\n  fwmark: 0xca6c\n\npeer: r3imyh3MCYggaZACmkx+CxlD6uAmICI8pe/PGq8+qCg=\n  endpoint: XXX.XXX.XXX.XXX:51820\n  allowed ips: 0.0.0.0/0\n  latest handshake: 1 minute, 22 seconds ago\n  transfer: 58.43 KiB received, 70.82 KiB sent\n")),(0,r.kt)("p",null,"\u505c\u6b62\u548c\u5173\u95ed\u96a7\u9053\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wg-quick down wg0\n")),(0,r.kt)("h3",{id:"windows-\u5ba2\u6237\u7aef"},"Windows \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u70b9\u51fb\u8f6f\u4ef6\u4e0a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Activate")," \u5373\u53ef"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s1.ax1x.com/2020/04/20/JQBuAP.png",alt:"wg-2"})),(0,r.kt)("h2",{id:"\u4e00\u952e\u5b89\u88c5-wireguard"},"\u4e00\u952e\u5b89\u88c5 wireguard"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/angristan/wireguard-install"},"https://github.com/angristan/wireguard-install")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/l-n-s/wireguard-install"},"https://github.com/l-n-s/wireguard-install"))),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wireguard Quick Start : ",(0,r.kt)("a",{parentName:"li",href:"https://www.wireguard.com/quickstart/"},"https://www.wireguard.com/quickstart/")),(0,r.kt)("li",{parentName:"ul"},"wireguard Install : ",(0,r.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/"},"https://www.wireguard.com/install/"))))}o.isMDXComponent=!0}}]);