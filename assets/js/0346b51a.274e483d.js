"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[3314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),f=c,m=u["".concat(o,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:c,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),c=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"LinuxBasics/DataBases/Etcd/etcd \u5907\u4efd\u4e0e\u6062\u590d",id:"LinuxBasics/DataBases/Etcd/etcd \u5907\u4efd\u4e0e\u6062\u590d",title:"etcd \u5907\u4efd\u4e0e\u6062\u590d",description:"etcd\u7684\u5907\u4efd\u4e0e\u6062\u590d\u5341\u5206\u7b80\u5355\uff0c\u4f7f\u7528etcdctl\u547d\u4ee4\u5373\u53ef.",source:"@site/docs/LinuxBasics/DataBases/Etcd/etcd \u5907\u4efd\u4e0e\u6062\u590d.md",sourceDirName:"LinuxBasics/DataBases/Etcd",slug:"/LinuxBasics/DataBases/Etcd/etcd \u5907\u4efd\u4e0e\u6062\u590d",permalink:"/docs/LinuxBasics/DataBases/Etcd/etcd \u5907\u4efd\u4e0e\u6062\u590d",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/DataBases/Etcd/etcd \u5907\u4efd\u4e0e\u6062\u590d.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"etcd Basic",permalink:"/docs/LinuxBasics/DataBases/Etcd/etcd Basic"},next:{title:"etcd \u6dfb\u52a0leaner\u8282\u70b9",permalink:"/docs/LinuxBasics/DataBases/Etcd/etcd \u6dfb\u52a0leaner\u8282\u70b9"}},o={},d=[],p={toc:d};function l(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"etcd\u7684\u5907\u4efd\u4e0e\u6062\u590d\u5341\u5206\u7b80\u5355\uff0c\u4f7f\u7528",(0,c.kt)("inlineCode",{parentName:"p"},"etcdctl"),"\u547d\u4ee4\u5373\u53ef."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5907\u4efd\nETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \\  \n--cacert=/etc/kubernetes/pki/etcd/ca.crt \\  \n--cert=/etc/kubernetes/pki/etcd/server.crt \\  \n--key=/etc/kubernetes/pki/etcd/server.key \\  \nsnapshot save <backup-file-location>\n# \u6062\u590d\nETCDCTL_API=3 etcdctl --data-dir="/var/lib/etcd-backup" \\  \n--endpoints=https://127.0.0.1:2379 \\  \n--cacert=/etc/kubernetes/pki/etcd/ca.crt \\  \n--cert=/etc/kubernetes/pki/etcd/server.crt \\  \n--key=/etc/kubernetes/pki/etcd/server.key \\  \nsnapshot restore backup.db\n\n# \u53e6\u5916\netcdctl snapshot restore /usr/local/etcd-v3.4.27/snapshot/snapshot.db \\\n--name etcd-server-159 \\\n--initial-cluster=etcd-server-157=https://172.19.82.157:2380,etcd-server-158=https://172.19.82.158:2380,etcd-server-159=https://172.19.82.159:2380 \\\n  --initial-advertise-peer-urls=https://172.19.82.159:2380 \\\n  --data-dir=/data/etcd\n')))}l.isMDXComponent=!0}}]);