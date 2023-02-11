"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[3497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={},i="TFTP",o={unversionedId:"LinuxBasics/FileSystem/TFTP",id:"LinuxBasics/FileSystem/TFTP",title:"TFTP",description:"\u5b98\u65b9\u7ad9\u70b9\uff1ahttps://www.tftp-server.com/",source:"@site/docs/LinuxBasics/FileSystem/TFTP.md",sourceDirName:"LinuxBasics/FileSystem",slug:"/LinuxBasics/FileSystem/TFTP",permalink:"/docs/LinuxBasics/FileSystem/TFTP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/FileSystem/TFTP.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"SAMBA \u57fa\u7840\u53ca\u5b9e\u6218",permalink:"/docs/LinuxBasics/FileSystem/SAMBA \u57fa\u7840\u53ca\u5b9e\u6218"},next:{title:"Samba\u914d\u7f6e\u6587\u4ef6\u5e38\u7528\u53c2\u6570\u8be6\u89e3",permalink:"/docs/LinuxBasics/FileSystem/smb.conf\u8be6\u89e3"}},p={},s=[{value:"tftp\u7684\u5b89\u88c5",id:"tftp\u7684\u5b89\u88c5",level:2},{value:"\u670d\u52a1\u5668\u7aef",id:"\u670d\u52a1\u5668\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"tftp\u7684\u4f7f\u7528",id:"tftp\u7684\u4f7f\u7528",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tftp"},"TFTP"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b98\u65b9\u7ad9\u70b9\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.tftp-server.com/"},"https://www.tftp-server.com/"))),(0,a.kt)("p",null,"TFTP\uff08Trivial File Transfer Protocol,\u7b80\u5355\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\uff09\u662fTCP/IP\u534f\u8bae\u65cf\u4e2d\u7684\u4e00\u4e2a\u7528\u6765\u5728\u5ba2\u6237\u673a\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u8fdb\u884c\u7b80\u5355\u6587\u4ef6\u4f20\u8f93\u7684\u534f\u8bae\uff0c\u63d0\u4f9b\u4e0d\u590d\u6742\u3001\u5f00\u9500\u4e0d\u5927\u7684\u6587\u4ef6\u4f20\u8f93\u670d\u52a1\u3002\u7aef\u53e3\u53f7\u4e3a69\u3002"),(0,a.kt)("p",null,"TFTP\u662f\u4e00\u4e2a\u4f20\u8f93\u6587\u4ef6\u7684\u7b80\u5355\u534f\u8bae\uff0c\u5b83\u57fa\u4e8eUDP\u534f\u8bae\u800c\u5b9e\u73b0\uff0c\u4f46\u662f\u6211\u4eec\u4e5f\u4e0d\u80fd\u786e\u5b9a\u6709\u4e9bTFTP\u534f\u8bae\u662f\u57fa\u4e8e\u5176\u5b83\u4f20\u8f93\u534f\u8bae\u5b8c\u6210\u7684\u3002\u6b64\u534f\u8bae\u8bbe\u8ba1\u7684\u65f6\u5019\u662f\u8fdb\u884c\u5c0f\u6587\u4ef6\u4f20\u8f93\u7684\u3002",(0,a.kt)("strong",{parentName:"p"},"\u56e0\u6b64\u5b83\u4e0d\u5177\u5907\u901a\u5e38\u7684FTP\u7684\u8bb8\u591a\u529f\u80fd\uff0c\u5b83\u53ea\u80fd\u4ece\u6587\u4ef6\u670d\u52a1\u5668\u4e0a\u83b7\u5f97\u6216\u5199\u5165\u6587\u4ef6\uff0c\u4e0d\u80fd\u5217\u51fa\u76ee\u5f55\uff0c\u4e0d\u8fdb\u884c\u8ba4\u8bc1\uff0c\u5b83\u4f20\u8f938\u4f4d\u6570\u636e"),"\u3002\u4f20\u8f93\u4e2d\u6709\u4e09\u79cd\u6a21\u5f0f\uff1anetascii\uff0c\u8fd9\u662f8\u4f4d\u7684ASCII\u7801\u5f62\u5f0f\uff0c\u53e6\u4e00\u79cd\u662foctet\uff0c\u8fd9\u662f8\u4f4d\u6e90\u6570\u636e\u7c7b\u578b\uff1b\u6700\u540e\u4e00\u79cdmail\u5df2\u7ecf\u4e0d\u518d\u652f\u6301\uff0c\u5b83\u5c06\u8fd4\u56de\u7684\u6570\u636e\u76f4\u63a5\u8fd4\u56de\u7ed9\u7528\u6237\u800c\u4e0d\u662f\u4fdd\u5b58\u4e3a\u6587\u4ef6\u3002\uff08\u6458\u81ea\u767e\u5ea6\u767e\u79d1",(0,a.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/tftp/455170?fr=aladdin"},"tftp"),"\uff09"),(0,a.kt)("h2",{id:"tftp\u7684\u5b89\u88c5"},"tftp\u7684\u5b89\u88c5"),(0,a.kt)("h3",{id:"\u670d\u52a1\u5668\u7aef"},"\u670d\u52a1\u5668\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y tftp-server\n")),(0,a.kt)("p",null,"\u542f\u52a8\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl start tftp.service")),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ss -tnulp | grep 69"),"\u547d\u4ee4\u67e5\u770btftp\u662f\u5426\u5df2\u7ecf\u542f\u52a8"),(0,a.kt)("h3",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y tftp\n")),(0,a.kt)("h2",{id:"tftp\u7684\u4f7f\u7528"},"tftp\u7684\u4f7f\u7528"),(0,a.kt)("p",null,"tftp\u9ed8\u8ba4\u7684\u6570\u636e\u6587\u4ef6\u5939\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/tftpboot/")),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u7aef\u4e0a\u4f20\u6587\u4ef6\u5230\u4e0a\u9762\u90a3\u4e2a\u76ee\u5f55\u5373\u53ef."),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tftp 172.16.122.135\n# \u4f7f\u7528get\u547d\u4ee4\u5c06\u6587\u4ef6\u4e0b\u8f7d\u5230\u672c\u5730\ntftp> get file\n")),(0,a.kt)("p",null,"TFTP\u5de5\u5177\u6bd4\u8f83\u7b80\u5355\u53ea\u80fd\u4e0b\u8f7d\u4e00\u4e9b\u76f8\u5bf9\u5c0f\u4e00\u70b9\u7684\u6587\u4ef6"))}u.isMDXComponent=!0}}]);