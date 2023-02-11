"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2116],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(t),m=r,d=h["".concat(o,".").concat(m)]||h[m]||u[m]||l;return t?n.createElement(d,s(s({ref:a},p),{},{components:t})):n.createElement(d,s({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=h;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7983:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const l={},s="varnish Basic",i={unversionedId:"LinuxBasics/Cache/Varnish/varnish Basic",id:"LinuxBasics/Cache/Varnish/varnish Basic",title:"varnish Basic",description:"\u4eceepel\u4ed3\u5e93\u4e2d\u5b89\u88c5",source:"@site/docs/LinuxBasics/Cache/Varnish/varnish Basic.md",sourceDirName:"LinuxBasics/Cache/Varnish",slug:"/LinuxBasics/Cache/Varnish/varnish Basic",permalink:"/docs/LinuxBasics/Cache/Varnish/varnish Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Cache/Varnish/varnish Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Varnish",permalink:"/docs/category/varnish"},next:{title:"varnish \u53c2\u8003\u793a\u4f8b",permalink:"/docs/LinuxBasics/Cache/Varnish/varnish \u53c2\u8003\u793a\u4f8b"}},o={},c=[{value:"\u4eceepel\u4ed3\u5e93\u4e2d\u5b89\u88c5",id:"\u4eceepel\u4ed3\u5e93\u4e2d\u5b89\u88c5",level:2},{value:"\u4ece\u5b98\u65b9\u4ed3\u5e93\u4e2d\u5b89\u88c5\u8f83\u65b0\u7248\u672c",id:"\u4ece\u5b98\u65b9\u4ed3\u5e93\u4e2d\u5b89\u88c5\u8f83\u65b0\u7248\u672c",level:2},{value:"\u7f16\u8bd1\u5b89\u88c5",id:"\u7f16\u8bd1\u5b89\u88c5",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"varnish-basic"},"varnish Basic"),(0,r.kt)("h2",{id:"\u4eceepel\u4ed3\u5e93\u4e2d\u5b89\u88c5"},"\u4eceepel\u4ed3\u5e93\u4e2d\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install epel-release -y\nyum install varnish\n")),(0,r.kt)("p",null,"epel\u4ed3\u5e93\u4e2d\u7684varnish\u7248\u672c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"4.0.5"),",\u622a\u6b62\u76ee\u524d,\u5b98\u65b9\u6700\u65b0\u7248\u672c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"6.4.0")),(0,r.kt)("h2",{id:"\u4ece\u5b98\u65b9\u4ed3\u5e93\u4e2d\u5b89\u88c5\u8f83\u65b0\u7248\u672c"},"\u4ece\u5b98\u65b9\u4ed3\u5e93\u4e2d\u5b89\u88c5\u8f83\u65b0\u7248\u672c"),(0,r.kt)("p",null,"\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"5.2.0"),"\u7248\u672c\u4e3a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s https://packagecloud.io/install/repositories/varnishcache/varnish52/script.rpm.sh | sudo bash\nyum install -y varnish\n")),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u5b89\u88c5"},"\u7f16\u8bd1\u5b89\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the appropriate release tarball, which you can find on ",(0,r.kt)("a",{parentName:"p",href:"https://varnish-cache.org/releases/"},"https://varnish-cache.org/releases/")," .")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To build Varnish on a Red Hat or CentOS system, this command should install required packages (replace sudo yum install if needed):"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install \\\n    make \\\n    autoconf \\\n    automake \\\n    jemalloc-devel \\\n    libedit-devel \\\n    libtool \\\n    ncurses-devel \\\n    pcre-devel \\\n    pkgconfig \\\n    python-docutils \\\n    python-sphinx\n")),(0,r.kt)("p",null,"Optionally, to rebuild the svg files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install graphviz\n")),(0,r.kt)("p",null,"Optionally, to pull from a repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install git\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The configuration will need the dependencies above satisfied. Once that is taken care of:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd varnish-cache\nsh autogen.sh\nsh configure\nmake\n")),(0,r.kt)("p",null,"The configure script takes some arguments, but more likely than not you can forget about that for now, almost everything in Varnish can be tweaked with run time parameters."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Before you install, you may want to run the test suite, make a cup of tea while it runs, it usually takes a couple of minutes:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make check\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"And finally, the true test of a brave heart: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo make install"))),(0,r.kt)("p",null,"Varnish will now be installed in /usr/local. The varnishd binary is in /usr/local/sbin/varnishd. To make sure that the necessary links and caches of the most recent shared libraries are found, run sudo ldconfig."),(0,r.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start varnish"),"\u5373\u53ef,\u624b\u52a8\u542f\u52a8\u4f7f\u7528\u4e00\u4e0b\u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"varnishd -a :6081 -T localhost:6082 -b localhost:8080\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u5b89\u88c5\u6307\u5357:",(0,r.kt)("a",{parentName:"li",href:"https://varnish-cache.org/docs/6.0/installation/install.html"},"https://varnish-cache.org/docs/6.0/installation/install.html")),(0,r.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u955c\u50cf\u4ed3\u5e93:",(0,r.kt)("a",{parentName:"li",href:"https://packagecloud.io/varnishcache"},"https://packagecloud.io/varnishcache"))))}u.isMDXComponent=!0}}]);