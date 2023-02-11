"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[4070],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),o=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<s;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const s={},l="Nuster Basic",u={unversionedId:"LinuxBasics/Cache/Nuster/Nuster Basic",id:"LinuxBasics/Cache/Nuster/Nuster Basic",title:"Nuster Basic",description:"\u7b80\u4ecb",source:"@site/docs/LinuxBasics/Cache/Nuster/Nuster Basic.md",sourceDirName:"LinuxBasics/Cache/Nuster",slug:"/LinuxBasics/Cache/Nuster/Nuster Basic",permalink:"/docs/LinuxBasics/Cache/Nuster/Nuster Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Cache/Nuster/Nuster Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Nuster",permalink:"/docs/category/nuster"},next:{title:"Varnish",permalink:"/docs/category/varnish"}},i={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7f16\u8bd1\u5b89\u88c5",id:"\u7f16\u8bd1\u5b89\u88c5",level:2},{value:"\u914d\u7f6e\u4e0e\u4f7f\u7528",id:"\u914d\u7f6e\u4e0e\u4f7f\u7528",level:2},{value:"\u5b98\u65b9\u793a\u4f8b",id:"\u5b98\u65b9\u793a\u4f8b",level:3},{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:o};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nuster-basic"},"Nuster Basic"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"nuster\u662f\u4e00\u4e2a\u57fa\u4e8eHAProxy\u7684\u9ad8\u6027\u80fdHTTP\u7f13\u5b58\u670d\u52a1\u5668\u548cRESTful NoSQL\u7f13\u5b58\u670d\u52a1\u5668\uff0c\u5b8c\u5168\u517c\u5bb9HAProxy\uff0c\u5e76\u4e14\u5229\u7528HAProxy\u7684ACL\u529f\u80fd\u6765\u63d0\u4f9b\u975e\u5e38\u7ec6\u81f4\u7684\u7f13\u5b58\u89c4\u5219\u3002"),(0,a.kt)("p",null,"\u6027\u80fd:\u975e\u5e38\u5feb, \u5355\u8fdb\u7a0b\u6a21\u5f0f\u4e0b\u662fnginx\u76843\u500d\uff0c\u591a\u8fdb\u7a0b\u4e0bnginx\u76842\u500d\uff0cvarnish\u76843\u500d\u3002\u8be6\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jiangwenyuan/nuster/wiki/Web-cache-server-performance-benchmark:-nuster-vs-nginx-vs-varnish-vs-squid"},"\u6027\u80fd\u6bd4\u8f83")),(0,a.kt)("p",null,"\u7279\u6027\u53ca\u6027\u80fd\u53c2\u8003:",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jiangwenyuan/nuster/blob/master/README.md#features"},"https://github.com/jiangwenyuan/nuster/blob/master/README.md#features")),(0,a.kt)("h2",{id:"\u7f16\u8bd1\u5b89\u88c5"},"\u7f16\u8bd1\u5b89\u88c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ecegithub\u5b98\u65b9\u62c9\u53d6\u6e90\u7801\u5305\u5e76\u89e3\u538b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/jiangwenyuan/nuster/releases/download/v5.0.2.21/nuster-5.0.2.21.tar.gz\ntar xf nuster-5.0.2.21.tar.gz\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b89\u88c5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd nuster-5.0.2.21\n# \u5982\u679c\u6ca1\u6709\u914d\u7f6e\u597dLUA,openssl,pcre\u548czlib\u7684\u8bdd\u53ef\u4ee5\u5ffd\u7565\u7f16\u8bd1\u9009\u9879USE_LUA=1 LUA_INC=/usr/include/lua5.3 USE_OPENSSL=1 USE_PCRE=1 USE_ZLIB=1\nmake TARGET=linux2628 USE_LUA=1 LUA_INC=/usr/include/lua5.3 USE_OPENSSL=1 USE_PCRE=1 USE_ZLIB=1\nmake install PREFIX=/usr/local/nuster\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8nuster")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/nuster/sbin/nuster -f nuster.cfg\n")),(0,a.kt)("p",null,"\u2139\ufe0f \u5728Docker\u4e2d\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull nuster/nuster\ndocker run -d -v /path/to/nuster.cfg:/etc/nuster/nuster.cfg:ro -p 8080:8080 nuster/nuster\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u4e0e\u4f7f\u7528"},"\u914d\u7f6e\u4e0e\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u5b98\u65b9\u793a\u4f8b"},"\u5b98\u65b9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"global\n    nuster cache on data-size 100m\n    nuster nosql on data-size 200m\n    master-worker # v3\ndefaults\n    mode http\nfrontend fe\n    bind *:8080\n    #bind *:4433 ssl crt example.com.pem alpn h2,http/1.1\n    use_backend be2 if { path_beg /_kv/ }\n    default_backend be1\nbackend be1\n    nuster cache on\n    nuster rule img ttl 1d if { path_beg /img/ }\n    nuster rule api ttl 30s if { path /api/some/api }\n    server s1 127.0.0.1:80\n    server s2 127.0.0.1:80\nbackend be2\n    nuster nosql on\n    nuster rule r1 ttl 3600\n")),(0,a.kt)("p",null,"nuster\u76d1\u542c8080\u7aef\u53e3\uff0c\u63a5\u53d7HTTP\u8bf7\u6c42\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"/_kv/"),"\u5f00\u5934\u7684\u8bf7\u6c42\u5206\u914d\u5230backend ",(0,a.kt)("inlineCode",{parentName:"p"},"be2"),", \u53ef\u4ee5\u53d1\u9001HTTP ",(0,a.kt)("inlineCode",{parentName:"p"},"POST/GET/DELETE"),"\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"/_kv/any_key")," \u6765 \u6dfb\u52a0/\u53d6\u5f97/\u5220\u9664 Key/Value. \u5176\u4ed6\u7684\u8bf7\u6c42\u90fd\u88ab\u5206\u914d\u5230backend ",(0,a.kt)("inlineCode",{parentName:"p"},"be1"),", \u5e76\u4e14\u4f1a\u88ab\u8f6c\u53d1\u5230\u670d\u52a1\u5668",(0,a.kt)("inlineCode",{parentName:"p"},"s1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"s2"),". \u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"/img/*"),"\u8bf7\u6c42\u4f1a\u88ab\u7f13\u5b581\u5929\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"/api/some/api"),"\u4f1a\u88ab\u7f13\u5b5830\u79d2\u3002"),(0,a.kt)("h2",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,a.kt)("p",null,"\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP/HTTPS")," \u8d1f\u8f7d\u5747\u8861\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"defaults\n    retries 3\n    option redispatch\n    timeout client  30s\n    timeout connect 30s\n    timeout server  30s\nfrontend web-lb\n   bind *:8080\n   #bind *:443 ssl crt XXX.pem\n   mode http\n   default_backend apps\nbackend apps\n   balance roundrobin\n   mode http\n   server s1 127.0.0.1:80\n   server s2 node01:80\n   #server s3 10.0.0.103:8080\n   #server s4 10.0.0.101:8443 ssl verify none\n")),(0,a.kt)("p",null,"\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"TCP")," \u8d1f\u8f7d\u5747\u8861\u5668(\u8fd9\u91cc\u4ee5mysql\u670d\u52a1\u4e3a\u4f8b)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"frontend mysql-lb\n   bind *:3306\n   mode tcp\n   default_backend mysql-cluster\nbackend mysql-cluster\n   balance roundrobin\n   mode tcp\n   server s1 127.0.0.1:3306\n   server s2 node01:3306\n   #server s3 10.0.0.103:3306\n")),(0,a.kt)("p",null,"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP-CACHE"),"\u7f13\u5b58\u670d\u52a1\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"global\n    nuster cache on data-size 200m\nfrontend fe\n    bind *:8080\n    default_backend be\nbackend be\n    nuster cache on\n    nuster rule all\n    server s1 127.0.0.1:8081\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u6587\u6863:",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jiangwenyuan/nuster/blob/master/README.md"},"https://github.com/jiangwenyuan/nuster/blob/master/README.md"))))}p.isMDXComponent=!0}}]);