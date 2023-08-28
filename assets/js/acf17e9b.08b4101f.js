"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||l;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="DockerFile",p={unversionedId:"CloudNative/Docker/DockerFile",id:"CloudNative/Docker/DockerFile",title:"DockerFile",description:"DockerFile \u5e38\u7528\u6307\u4ee4",source:"@site/docs/CloudNative/Docker/DockerFile.md",sourceDirName:"CloudNative/Docker",slug:"/CloudNative/Docker/DockerFile",permalink:"/docs/CloudNative/Docker/DockerFile",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/Docker/DockerFile.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Docker \u793a\u4f8b\u53ca\u591a\u67b6\u6784\u6784\u5efa",permalink:"/docs/CloudNative/Docker/Docker \u793a\u4f8b\u53ca\u591a\u67b6\u6784\u6784\u5efa"},next:{title:"SSH Docker container",permalink:"/docs/CloudNative/Docker/SSH Docker container"}},c={},s=[{value:"DockerFile \u5e38\u7528\u6307\u4ee4",id:"dockerfile-\u5e38\u7528\u6307\u4ee4",level:2},{value:"DockerFile \u6784\u5efa\u9009\u9879\u53ca\u6280\u5de7",id:"dockerfile-\u6784\u5efa\u9009\u9879\u53ca\u6280\u5de7",level:2},{value:"\u52a0\u901f\u955c\u50cf\u6784\u5efa",id:"\u52a0\u901f\u955c\u50cf\u6784\u5efa",level:3},{value:"DockerFile \u6700\u4f73\u5b9e\u8df5",id:"dockerfile-\u6700\u4f73\u5b9e\u8df5",level:2}],i={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dockerfile"},"DockerFile"),(0,a.kt)("h2",{id:"dockerfile-\u5e38\u7528\u6307\u4ee4"},"DockerFile \u5e38\u7528\u6307\u4ee4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FROM")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"* \u53ef\u4ee5\u4eceDockHub\u4e2d\u62c9\u53d6\u6307\u5b9a\u955c\u50cf(\u9ed8\u8ba4)\uff0c\u4e5f\u53ef\u4ee5\u62c9\u53d6\u7b2c\u4e09\u65b9\u955c\u50cf\u4ed3\u5e93\u7684\u955c\u50cf\uff0c\u6216\u8005\u76f4\u63a5\u62c9\u53d6\u672c\u5730\u5df2\u7ecf\u5236\u4f5c\u597d\u7684\u955c\u50cf\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MAINTAINER")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4f8b\u5b50\uff1a\nMAINTAINER "suofeiya <suofeiyaxx@gmail.com>"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LABEL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u8bed\u6cd5\uff1a\nLABEL <key>=<value> <key>=<value> <key>=<value> ...\n# \u4f8b\u5b50\uff1a\nLABEL maintainer="suofeiya <suofeiyaxx@gmail.com>"  \\ \ncomment="something here" \\ ...\n* \u6ce8\u610f\uff1a LABEL \u503c\u5982\u679c\u4e2d\u5305\u542b\u7a7a\u683c\uff0c\u9700\u8981\u4f7f\u7528\u5f15\u53f7\u548c\u53cd\u659c\u6760\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"RUN")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'RUN \u6307\u4ee4\uff1a\u7528\u4e8e\u6307\u5b9a** docker build **\u8fc7\u7a0b\u4e2d\u8981\u8fd0\u884c\u7684\u547d\u4ee4\u3002\n \u8bed\u6cd5\u683c\u5f0f\uff1a\n  RUN <command> \u6216       # <command>\u901a\u5e38\u662f\u4e00\u4e2ashell\u547d\u4ee4\uff0c\u4e14\u4ee5"/bin/sh -c" \u6765\u8fd0\u884c\u5b83\uff0c\u8fd9\u610f\u5473\u7740\u6b64\u8fdb\u7a0b\u5728\u5bb9\u5668\u4e2d\u7684PID\u53f7\u4e0d\u4e3a1\uff0c\u4e0d\u80fd\u63a5\u6536UNIX\u4fe1\u53f7\uff0c\u56e0\u6b64\uff0c\u5f53\u4f7f\u7528 docker stop \u547d\u4ee4\u6765\u505c\u6b62\u5bb9\u5668\u65f6\uff0c\u6b64\u8fdb\u7a0b\u63a5\u6536\u4e0d\u5230SIGTERM\u4fe1\u53f7\n  RUN ["<executeable>","<param1>","param2",...]\n  RUN ["/bin/bash","-c","<executeable>","param1","param2",...]\n         \n \u4f8b\u5982\uff1a\n     RUN yum install iproute nginx && yum clean all\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CMD")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'CMD \u6307\u4ee4\uff1a\u7c7b\u4f3c\u4e8e RUN \u6307\u4ee4\uff0c\u7528\u4e8e\u8fd0\u884c\u7a0b\u5e8f\uff0c\u4f46\u4e8c\u8005\u8fd0\u884c\u7684\u65f6\u95f4\u70b9\u4e0d\u540c\uff1bCMD \u5728** docker run **\u65f6\u8fd0\u884c\uff0c\u800c\u975e** docker build **\u9636\u6bb5.\nCMD \u6307\u4ee4\u7684\u9996\u8981\u76ee\u7684\u5728\u4e8e\u4e3a\u542f\u52a8\u7684\u5bb9\u5668\u6307\u5b9a\u9ed8\u8ba4\u8981\u8fd0\u884c\u7684\u7a0b\u5e8f\uff0c\u7a0b\u5e8f\u8fd0\u884c\u7ed3\u675f\uff0c\u5bb9\u5668\u4e5f\u5c31\u7ed3\u675f\n\u6ce8\u610f: CMD \u6307\u4ee4\u6307\u5b9a\u7684\u7a0b\u5e8f\u53ef\u88ab** docker run **\u547d\u4ee4\u884c\u53c2\u6570\u4e2d\u6307\u5b9a\u8981\u8fd0\u884c\u7684\u7a0b\u5e8f\u6240\u8986\u76d6\u3002\n \u8bed\u6cd5\u683c\u5f0f\uff1a\n CMD <command> \u6216\n CMD ["<executeable>","<param1>","<param2>",...] \n CMD ["<param1>","<param2>",...]  \u6ce8\u610f\uff1a\u8be5\u5199\u6cd5\u662f\u4e3a ENTRYPOINT \u6307\u4ee4\u6307\u5b9a\u7684\u7a0b\u5e8f\u63d0\u4f9b\u9ed8\u8ba4\u53c2\u6570\n\u6ce8\u610f\uff1a\u5982\u679c dockerfile \u4e2d\u5982\u679c\u5b58\u5728\u591a\u4e2aCMD\u6307\u4ee4\uff0c\u4ec5\u6700\u540e\u4e00\u4e2a\u751f\u6548\n     \n \u4f8b\u5982\uff1a\n         CMD ["/usr/sbin/httpd","-c","/etc/httpd/conf/httpd.conf"]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ENTRYPOINT")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ENTRYPOINT \u6307\u4ee4\uff1a\u7c7b\u4f3c\u4e8e CMD \u6307\u4ee4\uff0c\u4f46\u5176\u4e0d\u4f1a\u88ab** docker run **\u7684\u547d\u4ee4\u884c\u53c2\u6570\u6307\u5b9a\u7684\u6307\u4ee4\u6240\u8986\u76d6\uff0c\u800c\u4e14\u8fd9\u4e9b\u547d\u4ee4\u884c\u53c2\u6570\u4f1a\u88ab\u5f53\u4f5c\u53c2\u6570\u9001\u7ed9 ENTRYPOINT \u6307\u4ee4\u6307\u5b9a\u7684\u7a0b\u5e8f\uff1b\u4f46\u662f, \u5982\u679c\u8fd0\u884c** docker run **\u65f6\u4f7f\u7528\u4e86 --entrypoint \u9009\u9879\uff0c\u6b64\u9009\u9879\u7684\u53c2\u6570\u53ef\u5f53\u4f5c\u8981\u8fd0\u884c\u7684\u7a0b\u5e8f\u8986\u76d6 ENTRYPOINT \u6307\u4ee4\u6307\u5b9a\u7684\u7a0b\u5e8f\n \u8bed\u6cd5\u683c\u5f0f\uff1a\n ENTRYPOINT <command> \u6216\n ENTRYPOINT ["<executeable>","<param1>","<param2>",...]\n         \n \u4f8b\u5982\uff1a\n     CMD ["-c"]\n     ENTRYPOINT ["top","-b"]\n\u6ce8\u610f\uff1a\u4e00\u4e2adockefile\u4e2d\u53ef\u4ee5\u6709\u591a\u4e2a ENTRYPOINT \uff0c\u4f46\u4ec5\u6709\u6700\u540e\u4ee5\u4e00\u4e2aENTRYPOINT\u751f\u6548.\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ENTRYPOINT")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"strong"},"CMD")," \u533a\u522b\uff1f")),(0,a.kt)("p",{parentName:"blockquote"},"\u5982\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},'FROM busybox   ENTRYPOINT ["top", "-b"]    CMD ["-c"]'),"       \u628a\u53ef\u80fd\u9700\u8981\u53d8\u52a8\u7684\u53c2\u6570\u5199\u5230 CMD \u91cc\u9762\u3002\u7136\u540e\u4f60\u53ef\u4ee5\u5728",(0,a.kt)("strong",{parentName:"p"},"docker run"),"\u91cc\u6307\u5b9a\u53c2\u6570\uff0c\u8fd9\u6837 CMD \u91cc\u7684\u53c2\u6570(\u8fd9\u91cc\u662f-c) \u5c31\u4f1a\u88ab\u8986\u76d6\u6389\u800c ENTRYPOINT \u91cc\u7684\u4e0d\u88ab\u8986\u76d6\u3002 "),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a ENTRYPOINT\u6709\u4e24\u79cd\u5199\u6cd5\uff0c\u7b2c\u4e8c\u79cd(shell form)\u4f1a\u5c4f\u853d\u6389 docker run \u65f6\u540e\u9762\u52a0\u7684\u547d\u4ee4\u548c CMD \u91cc\u7684\u53c2\u6570")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"EXPOSE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"EXPOSE [PORT]/[PROTOCOL]        # \u66b4\u9732\u7aef\u53e3\uff0c\u53ef\u4ee5\u6307\u5b9a\u534f\u8bae(\u53ef\u7701\u7565)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ADD")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5176\u4e2d\uff0c<src>\u53ef\u4ee5\u662f\u538b\u7f29\u5305\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u662furl\n\n* \u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\uff1a\n      docker \u5b98\u65b9\u5efa\u8bae\u6211\u4eec\u5f53\u9700\u8981\u4ece\u8fdc\u7a0b\u590d\u5236\u6587\u4ef6\u65f6\uff0c\u6700\u597d\u4f7f\u7528 curl \u6216 wget \u547d\u4ee4\u6765\u4ee3\u66ff ADD \u547d\u4ee4\u3002\u539f\u56e0\u662f\uff0c\u5f53\u4f7f\u7528 ADD \u547d\u4ee4\u65f6\uff0c\u4f1a\u521b\u5efa\u66f4\u591a\u7684\u955c\u50cf\u5c42\uff0c\u5f53\u7136\u955c\u50cf\u7684 \u6587\u4ef6\u5927\u5c0f \u4e5f\u4f1a\u66f4\u5927\uff0c\u4f8b\u5982\uff1a\n# \u5b98\u65b9\u4e0d\u5efa\u8bae\u4f7f\u7528\u7684\u65b9\u6cd5\nADD http://example.com/big.tar.xz /usr/src/things/\nRUN tar -xJf /usr/src/things/big.tar.xz -C /usr/src/things\nRUN make -C /usr/src/things all\n\n# \u5b98\u65b9\u5efa\u8bae\u7684\u4f7f\u7528\u65b9\u6cd5\n# \u5982\u679c\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u4e0d\u4ec5\u955c\u50cf\u7684\u5c42\u6570\u51cf\u5c11\uff0c\u800c\u4e14\u955c\u50cf\u4e2d\u4e5f\u4e0d\u5305\u542b big.tar.xz \u6587\u4ef6\nRUN mkdir -p /usr/src/things \\\n&& curl -SL http://example.com/big.tar.xz \\\n| tar -xJC /usr/src/things \\\n&& make -C /usr/src/things all\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"COPY")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'COPY <src>... <dest>\n# \u6216\u8005\nCOPY ["<src>" ... "<dest>"]\n\n* \u6ce8\u610f\uff1adest\u76ee\u6807\u76ee\u5f55\u6700\u597d\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\uff0c\u82e5\u8981\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\uff0c\u5219\u9700\u8981\u8bbe\u7f6eworkdir\u5de5\u4f5c\u76ee\u5f55\u8def\uff0c\u53e6\u5916\u5982\u679c\u8def\u5f84\u4e2d\u5305\u542b\u6709\u7a7a\u683c\u5b57\u7b26\uff0c\u5e94\u5f53\u4f7f\u7528\u7b2c\u4e8c\u79cd\u683c\u5f0f\n\n\u6587\u4ef6\u590d\u5236\u51c6\u5219\uff1a\n* <src>\u5e94\u5f53\u662fbuild\u4e0a\u4e0b\u6587\u4e2d\u7684\u8def\u5f84\uff0c\u4e0d\u80fd\u662f\u5176\u7236\u76ee\u5f55\u6216\u8005\u5176\u4ed6\u4e0a\u7ea7\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\n* \u5982\u679c<src>\u4e3a\u76ee\u5f55\uff0c\u5219\u8be5\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u5747\u4f1a\u88ab\u590d\u5236\uff0c\u4f46<src>\u76ee\u5f55\u672c\u8eab\u4e0d\u4f1a\u88ab\u590d\u5236\n* \u5982\u679c\u6307\u5b9a\u4e86\u591a\u4e2a<src>\u76ee\u5f55\uff0c\u6216\u8005\u4f7f\u7528\u4e86\u6587\u4ef6\u901a\u914d\u7b26\uff0c\u5219<dest>\u76ee\u6807\u76ee\u5f55\u5728\u6587\u4ef6\u5939\u7ed3\u5c3e\u9700\u52a0\u5165"/"\n* \u5982\u82e5<dest>\u76ee\u5f55\u5728\u5bb9\u5668\u4e2d\u4e0d\u5b58\u5728\uff0c\u5219build\u6784\u5efa\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\uff0c\u5305\u542b\u5176\u7236\u76ee\u5f55\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ADD"),"\u547d\u4ee4\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"COPY"),"\u547d\u4ee4\u7684\u533a\u522b\uff1f")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"COPY "),"\u547d\u4ee4\u53ef\u4ee5\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"multistage")," \u573a\u666f\u4e0b\uff0c\u800cADD\u547d\u4ee4\u4e0d\u53ef\u4ee5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADD"),"\u547d\u4ee4\u53ef\u4ee5\u4f20\u5165\u538b\u7f29\u5305\u6587\u4ef6\uff0c\u5e76\u81ea\u52a8\u89e3\u538b\u81f3\u6307\u5b9a\u4f4d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165URL")),(0,a.kt)("hr",{parentName:"blockquote"}),(0,a.kt)("p",{parentName:"blockquote"},"docker\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"multistage")," \u573a\u666f\uff1a\u540c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"DockerFile"),"\u6587\u4ef6\u4e2d\u53ef\u4ee5\u5b58\u5728\u591a\u4e2aFROM\u6307\u4ee4\uff0c\u6bcf\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"FROM"),"\u6307\u4ee4\u4ee3\u8868stage\u7684\u5f00\u59cb."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4f7f\u7528\u65e0\u547d\u540d\u7684stage\uff0c\u52a0\u5165\u4ee5\u4e0b\u53c2\u6570\n--from=0\n# \u4f7f\u7528\u547d\u540d\u7684stage\nFROM busybox as builder\n...\nFROM centos\nCOPY --from builder /PATH/TO/FILE ./\n...\n")),(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u65e7\u7248\u672c\u7684 docker \u662f\u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-stage")," \u7684\uff0c\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"17.05 "),"\u4ee5\u53ca\u4e4b\u540e\u7684\u7248\u672c\u624d\u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"VOLUME")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u683c\u5f0f\uff1a\nVOLUME ["<\u8def\u5f841>", "<\u8def\u5f842>"...] \nVOLUME <\u8def\u5f84> \n* \u6ce8\u610f\uff1a\u901a\u8fc7 VOLUME \u6307\u4ee4\u521b\u5efa\u7684\u6302\u8f7d\u70b9\uff0c\u65e0\u6cd5\u6307\u5b9a\u4e3b\u673a\u4e0a\u5bf9\u5e94\u7684\u76ee\u5f55\uff0c\u662f\u81ea\u52a8\u751f\u6210\u7684\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"USER")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u683c\u5f0f\uff1a\nUSER <user>[:<group>] \nUSER <UID>[:<GID>]\n# \u4f5c\u7528\uff1a\u6307\u5b9a\u8fd0\u884c\u65f6\u7684\u7528\u6237\u540d\u6216UID\uff0c\u540e\u7eed\u7684RUN\u4e5f\u4f1a\u4f7f\u7528\u6307\u5b9a\u7684\u7528\u6237\uff0c\u5f53\u670d\u52a1\u4e0d\u9700\u8981\u7ba1\u7406\u6743\u9650\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u547d\u4ee4\u6307\u5b9a\u8fd0\u884c\u7528\u6237\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u4e4b\u524d\u521b\u5efa\u6240\u9700\u8981\u7684\u7528\u6237\n\n* \u6ce8\u610f\uff1a\u5f53\u8981\u4e34\u65f6\u83b7\u53d6\u7ba1\u7406\u6743\u9650\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528gosu\uff0c\u800c\u4e0d\u63a8\u8350\u4f7f\u7528sudo\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WORKDIR")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u683c\u5f0f\uff1a\nWORKDIR /PATH/TO/DIR\n\n* \u6ce8\u610f\uff1a\u4e00\u4e2aDockerFile\u4e2d\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2aWORKDIR\uff0c\u540e\u7eed\u547d\u4ee4\u5982\u679c\u662f\u76f8\u5bf9\u76ee\u5f55\uff0c\u5219\u4f1a\u57fa\u4e8e\u4e4b\u524d\u6307\u5b9a\u7684\u8def\u5f84\uff0c\u4f8b\u5982`WORKDiR /dir1 \\ WORKDIR dir2 \\ WORKDIR dir3 \\ RUN pwd`\uff0c\u5176\u7ed3\u679c\u662f`/dir1/dir2/dir3`\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ONBUILD")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7528\u4e8e\u5728DockerFile\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u89e6\u53d1\u5668\uff0c\u5f53\u4e00\u4e2a\u955c\u50cf\u88ab\u5f53\u505a\u57fa\u7840\u955c\u50cf\uff0c\u4e5f\u5c31\u662fFROM\u5bf9\u8c61\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1base image\u4e2d\u7684ONBUILD\u6307\u4ee4\u6240\u5b9a\u4e49\u7684\u89e6\u53d1\u5668\n\n* \u6ce8\u610f\uff1a\u4f7f\u7528\u5305\u542bONBUILD\u7684\u6307\u4ee4\u7684DockFIle\u6784\u5efa\u7684\u955c\u50cf\u65f6\uff0c\u5e94\u5f53\u4f7f\u7528\u7279\u6b8a\u7684\u6807\u7b7e\uff0c\u4f8b\u5982busybox-onbuild\n\u5728ONBUILD\u547d\u4ee4\u4e2d\u4f7f\u7528COPY\u547d\u4ee4\u548cADD\u547d\u4ee4\u65f6\u8981\u6ce8\u610f\uff0c\u5982\u679c\u5728\u6784\u5efa\u7684\u4e0a\u4e0b\u6587\u4e2d\u7f3a\u5c11\u6307\u5b9a\u7684\u6e90\u6587\u4ef6\u65f6\u4f1a\u62a5\u9519\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ARG")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bed\u6cd5\uff1a\nARG NAME[=<default-value>]\n# \u4f5c\u7528\uff1aARG \u6307\u4ee4\u4f7f\u7528 --build-arg = \u6807\u5fd7\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 docker build \u547d\u4ee4\u5728\u6784\u5efa\u65f6\u5c06\u8be5\u53d8\u91cf\u4f20\u9012\u7ed9\u6784\u5efa\u5668\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u672a\u5728 Dockerfile \u4e2d\u5b9a\u4e49\u7684\u6784\u5efa\u53c2\u6570\uff0c\u5219\u6784\u5efa\u4f1a\u8f93\u51fa\u544a\u8b66\n* \u53ef\u4ee5\u5728\u540c\u4e00\u4e2aDockerFile\u4e2d\u6307\u5b9a\u591a\u4e2a ARG \uff0cARG\u53ef\u4ee5\u6709\u9ed8\u8ba4\u503c\uff0c\u5f53\u5bb9\u5668\u6784\u5efa\u65f6\u672a\u6307\u5b9a\u53d8\u91cf\u7684\u9ed8\u8ba4\u503c\uff0c\u5c06\u4f7f\u7528dockerfile\u4e2d\u7684\u9ed8\u8ba4\u503c\n* \u6ce8\u610f\uff1aARG \u53d8\u91cf\u5b9a\u4e49\u4ece Dockerfile \u4e2d\u5b9a\u4e49\u7684\u884c\u5f00\u59cb\u751f\u6548\uff0c\u800c\u4e0d\u662f\u4ece\u547d\u4ee4\u884c\u6216\u5176\u5b83\u5730\u65b9\u7684\u53c2\u6570\u4f7f\u7528\uff0c\u7b80\u5355\u6765\u8bf4ARG\u53d8\u91cf\u5b9a\u4e49\u53ef\u4ee5\u5148\u4f7f\u7528\u540e\u58f0\u660e(\u5927\u6982\u8fd9\u4e2a\u610f\u601d\u5427...)\uff0c\u53e6\u5916\uff0c\u4f7f\u7528ENV \u6307\u4ee4\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\u59cb\u7ec8\u8986\u76d6\u540c\u540d\u7684 ARG \u6307\u4ee4\n\n# \u9884\u5b9a\u4e49\u7684ARG\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728DockerFile\u4e2d\u4f7f\u7528\uff0c\u800c\u65e0\u9700\u76f8\u5e94\u7684ARG\u6307\u4ee4\nHTTP_PROXY,http_proxy,HTTPS_PROXY,https_proxy,FTP_PROXY,ftp_proxy,NO_PROXY,no_proxy\n# \u5982\u4f55\u4f7f\u7528\uff1f\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u4f7f\u7528\u5373\u53ef\n--build-arg <varname>=<value>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ENV")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e24\u79cd\u683c\u5f0f\nENV ENV_NAME VARIABLE           # \u6307\u5b9a\u5355\u4e2a\u73af\u5883\u53d8\u91cf\nENV ENV_NAME="VARIABLE" ...         # \u4f20\u9012\u591a\u4e2a\u73af\u5883\u53d8\u91cf\n* \u901a\u8fc7ENV\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728dockerfile\u88ab\u540e\u9762\u7684\u6240\u6709\u6307\u4ee4\u4e2d\u4f7f\u7528\uff0c\u4f46\u4e0d\u80fd\u88abCMD\u6307\u4ee4\u4f7f\u7528\uff0c\u4e5f\u4e0d\u80fd\u88abdocker run \u7684\u547d\u4ee4\u53c2\u6570\u5f15\u7528\uff0c\u4f7f\u7528ENV \u6307\u4ee4\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\u59cb\u7ec8\u8986\u76d6\u540c\u540d\u7684 ARG \u6307\u4ee4\n* \u5982\u679c\u9700\u8981\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f7f\u7528\u73af\u5883\u53d8\u91cf\uff0c\u5728 docker run \u65f6\u4f7f\u7528 -e "ENV_NAME=VARIABLE" \u5373\u53ef\n\n* \u6ce8\u610f\uff1a\u4e0e ARG \u6307\u4ee4\u4e0d\u540c\uff0cENV \u503c\u59cb\u7ec8\u4fdd\u7559\u5728\u6784\u5efa\u7684\u955c\u50cf\u4e2d\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HEALTHCHECK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e24\u79cd\u683c\u5f0f\nHEALTHCHECK [OPTIONS] CMD COMMAND\nHEALTHCHECK NODE            # \u7981\u6b62\u4ece\u7236\u955c\u50cf\u7ee7\u627f\u7684HEALTHCHECK\u751f\u6548\n\n* \u53ef\u7528OPTOPNS\n--interval=DURATION(default:30s)        # \u95f4\u9694(s\u79d2\u3001m\u5206\u949f\u3001h\u5c0f\u65f6)\uff0c\u4ece\u5bb9\u5668\u8fd0\u884c\u8d77\u6765\u5f00\u59cb\u8ba1\u65f6interval\u79d2\uff08\u6216\u8005\u5206\u949f\u5c0f\u65f6\uff09\u8fdb\u884c\u7b2c\u4e00\u6b21\u5065\u5eb7\u68c0\u67e5\uff0c\u968f\u540e\u6bcf\u95f4\u9694interval\u79d2\u8fdb\u884c\u4e00\u6b21\u5065\u5eb7\u68c0\u67e5\uff1b\u8fd8\u6709\u4e00\u79cd\u7279\u4f8b\u8bf7\u770btimeout\u89e3\u6790\u3002\n--start-period=DURATION(default:0s)         #  \u542f\u52a8\u65f6\u95f4\uff0c \u9ed8\u8ba4 0s\uff0c \u5982\u679c\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\uff0c \u5219\u5fc5\u987b\u5927\u4e8e 0s \uff1b--start-period \u4e3a\u9700\u8981\u542f\u52a8\u7684\u5bb9\u5668\u63d0\u4f9b\u4e86\u521d\u59cb\u5316\u7684\u65f6\u95f4\u6bb5\uff0c \u5728\u8fd9\u4e2a\u65f6\u95f4\u6bb5\u5185\u5982\u679c\u68c0\u67e5\u5931\u8d25\uff0c \u5219\u4e0d\u4f1a\u8bb0\u5f55\u5931\u8d25\u6b21\u6570\u3002 \u5982\u679c\u5728\u542f\u52a8\u65f6\u95f4\u5185\u6210\u529f\u6267\u884c\u4e86\u5065\u5eb7\u68c0\u67e5\uff0c \u5219\u5bb9\u5668\u5c06\u88ab\u89c6\u4e3a\u5df2\u7ecf\u542f\u52a8\uff0c \u5982\u679c\u5728\u542f\u52a8\u65f6\u95f4\u5185\u518d\u6b21\u51fa\u73b0\u68c0\u67e5\u5931\u8d25\uff0c \u5219\u4f1a\u8bb0\u5f55\u5931\u8d25\u6b21\u6570\u3002\n--timeout=DURATION(default:30s)         # \u6267\u884ccommand\u9700\u8981\u65f6\u95f4\uff0c\u6bd4\u5982curl \u4e00\u4e2a\u5730\u5740\uff0c\u5982\u679c\u8d85\u8fc7timeout\u79d2\u5219\u8ba4\u4e3a\u8d85\u65f6\u662f\u9519\u8bef\u7684\u72b6\u6001\uff0c\u6b64\u65f6\u6bcf\u6b21\u5065\u5eb7\u68c0\u67e5\u7684\u65f6\u95f4\u662ftimeout+interval\u79d2\u3002\n--retries=N(default:3)          # \u8fde\u7eed\u68c0\u67e5retries\u6b21\uff0c\u5982\u679c\u7ed3\u679c\u90fd\u662f\u5931\u8d25\u72b6\u6001\uff0c\u5219\u8ba4\u4e3a\u8fd9\u4e2a\u5bb9\u5668\u662funhealth\u7684\n\n* \u5bb9\u5668\u9000\u51fa\u72b6\u6001\u7801\n*  0\u8868\u793a\u6b63\u5e38\u9000\u51fa\uff0c1\u8868\u793aunhealthy\uff0c2\u8868\u793areserved\n# \u4f8b\u5b50\uff1a\nHEALTHCHECK --interval=4m --timeout=3s \\ \nCMD curl -f http://127.0.0.1 || exit 1\n\n* \u603b\u7ed3\uff1a\u5f53\u5bb9\u5668\u542f\u52a8\u4e4b\u540e\uff0c\u9996\u5148\u95f4\u9694interval\u79d2\u7136\u540e\u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u5982\u679c\u4e00\u4e2a\u68c0\u67e5\u6240\u82b1\u7684\u65f6\u95f4\u8d85\u8fc7\u4e86timeout\u79d2\uff0c\u90a3\u4e48\u5c31\u8ba4\u4e3a\u8fd9\u6b21\u68c0\u67e5\u5931\u8d25\u4e86\uff0c\u5982\u679c\u8fde\u7eedretries\u6b21\u5931\u8d25\uff0c\u5c31\u8ba4\u4e3a\u6b64\u5bb9\u5668\u72b6\u6001\u4e3aunhealthy\n\n# \u4f7f\u7528\u4f8b\u5b50\uff1a\nHEALTHCHECK \u2013interval=10s \u2013timeout=3s \u2013retries=3 CMD curl http://127.0.0.1          #  \u53ef\u80fd\u4f1a\u51fa\u73b0curl\u8fd9\u4e2a\u5730\u57403\u79d2\u5185\u6ca1\u54cd\u5e94\u5219\u8ba4\u4e3a\u5931\u8d25\uff0c\u7136\u540e\u518d\u5f00\u59cbinterval\u7684\u65f6\u95f4\u8fdb\u884c\u4e0b\u6b21\u68c0\u6d4b\uff0c\u6700\u540e\u663e\u793aunhealthy\u7684\u72b6\u6001\u5e94\u8be5\u662f39s\n# \u83b7\u53d6\u6307\u5b9a\u5bb9\u5668\u7684\u5065\u5eb7\u72b6\u6001\ndocker inspect \u2013format \u2018\u3010\u3010json .State.Health.Status\u3011\u3011\u2019 41f1414fab75\n\n* \u6ce8\u610f\uff1a\u5f53dockfile\u6307\u5b9a\u591a\u4e2a HEALTHCHECK \u65f6\uff0c\u4ec5\u5bf9\u6700\u540e\u4e00\u4e2a HEALTHCHECK \u6709\u6548\n")),(0,a.kt)("h2",{id:"dockerfile-\u6784\u5efa\u9009\u9879\u53ca\u6280\u5de7"},"DockerFile \u6784\u5efa\u9009\u9879\u53ca\u6280\u5de7"),(0,a.kt)("p",null,"docker build\u7528\u4e8e\u4f7f\u7528 Dockerfile \u521b\u5efa\u955c\u50cf\uff0c\u4e0b\u9762\u662f\u53c2\u6570\u5217\u8868:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'--build-arg=\\[\\]                 # \u8bbe\u7f6e\u955c\u50cf\u521b\u5efa\u65f6\u7684\u53d8\u91cf\n--cpu-shares                 # \u8bbe\u7f6e cpu \u4f7f\u7528\u6743\u91cd\n--cpu-period                 # \u9650\u5236 CPU CFS\u5468\u671f\n--cpu-quota                 # \u9650\u5236 CPU CFS\u914d\u989d\n--cpuset-cpus                 # \u6307\u5b9a\u4f7f\u7528\u7684CPU id\n--cpuset-mems                 # \u6307\u5b9a\u4f7f\u7528\u7684\u5185\u5b58 id\n--disable-content-trust                 # \u5ffd\u7565\u6821\u9a8c\uff0c\u9ed8\u8ba4\u5f00\u542f\n-f                 # \u6307\u5b9a\u8981\u4f7f\u7528\u7684Dockerfile\u8def\u5f84\n#  \u4f8b\u5b50\uff1a\ndocker build -f /path/to/a/Dockerfile .\n--force-rm                 # \u8bbe\u7f6e\u955c\u50cf\u8fc7\u7a0b\u4e2d\u5220\u9664\u4e2d\u95f4\u5bb9\u5668\n--isolation                 # \u4f7f\u7528\u5bb9\u5668\u9694\u79bb\u6280\u672f\n--label=\\[\\]                 # \u8bbe\u7f6e\u955c\u50cf\u4f7f\u7528\u7684\u5143\u6570\u636e\n-m                 # \u8bbe\u7f6e\u5185\u5b58\u6700\u5927\u503c\n--memory-swap                 # \u8bbe\u7f6eSwap\u7684\u6700\u5927\u503c\u4e3a\u5185\u5b58+swap\uff0c"-1"\u8868\u793a\u4e0d\u9650swap\n--no-cache                 # \u521b\u5efa\u955c\u50cf\u7684\u8fc7\u7a0b\u4e0d\u4f7f\u7528\u7f13\u5b58\n--pull                 # \u5c1d\u8bd5\u53bb\u66f4\u65b0\u955c\u50cf\u7684\u65b0\u7248\u672c\n--quiet, -q                 # \u5b89\u9759\u6a21\u5f0f\uff0c\u6210\u529f\u540e\u53ea\u8f93\u51fa\u955c\u50cf ID\n--rm                 # \u8bbe\u7f6e\u955c\u50cf\u6210\u529f\u540e\u5220\u9664\u4e2d\u95f4\u5bb9\u5668\n--shm-size                 # \u8bbe\u7f6e/dev/shm\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u503c\u662f64M\n--ulimit                 # Ulimit\u914d\u7f6e\n--tag, -t                # \u955c\u50cf\u7684\u540d\u5b57\u53ca\u6807\u7b7e\uff0c\u901a\u5e38 name                # tag \u6216\u8005 name \u683c\u5f0f\u53ef\u4ee5\u5728\u4e00\u6b21\u6784\u5efa\u4e2d\u4e3a\u4e00\u4e2a\u955c\u50cf\u8bbe\u7f6e\u591a\u4e2a\u6807\u7b7e\n--network                # \u9ed8\u8ba4 default\u5728\u6784\u5efa\u671f\u95f4\u8bbe\u7f6eRUN\u6307\u4ee4\u7684\u7f51\u7edc\u6a21\u5f0f\n')),(0,a.kt)("h3",{id:"\u52a0\u901f\u955c\u50cf\u6784\u5efa"},"\u52a0\u901f\u955c\u50cf\u6784\u5efa"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD")," \u547d\u4ee4\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u6280\u5de7\u6765\u52a0\u901f\u955c\u50cf\u7684 build \u8fc7\u7a0b\u3002\u6bd4\u5982\u628a\u90a3\u4e9b\u6700\u4e0d\u5bb9\u6613\u53d1\u751f\u53d8\u5316\u7684\u6587\u4ef6\u7684\u62f7\u8d1d\u64cd\u4f5c\u653e\u5728\u8f83\u4f4e\u7684\u955c\u50cf\u5c42\u4e2d\uff0c\u8fd9\u6837\u5728\u91cd\u65b0 build \u955c\u50cf\u65f6\u5c31\u4f1a\u4f7f\u7528\u524d\u9762 build \u4ea7\u751f\u7684\u7f13\u5b58\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa\u6587\u4ef6\u5939\u4e2d\u5206\u522b\u6709 test.sh x1.sh x2.sh x3.sh \u56db\u4e2a\u6587\u4ef6\uff0c\u5176\u4e2d test.sh \u6587\u4ef6\u4e0d\u7ecf\u5e38\u4fee\u6539\uff0c\u800cx1-3.sh\u7ecf\u5e38\u6709\u53d8\u52a8\uff0c\u6240\u4ee5\u5c06 test.sh \u5355\u72ec\u7f6e\u4e8e\u4e00\u4e2a\u955c\u50cf\u5c42\u4e2d\uff0c\u4e14\u653e\u7f6e\u4e8e\u8f83\u4f4e\u7684\u955c\u50cf\u5c42\u4e2d\nWORKDIR /test\nCOPY test.sh .\nCOPY x*.sh ./\n# \u6784\u5efa\u65f6\uff0c\u5f53 x*.sh \u53d1\u751f\u53d8\u5316\u800c test.sh \u65e0\u53d8\u5316\u65f6\uff0c\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u65f6\u4f1a\u8df3\u8fc7 test.sh\n")),(0,a.kt)("h2",{id:"dockerfile-\u6700\u4f73\u5b9e\u8df5"},"DockerFile \u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"},"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/develop/dev-best-practices/"},"https://docs.docker.com/develop/dev-best-practices/")))}u.isMDXComponent=!0}}]);