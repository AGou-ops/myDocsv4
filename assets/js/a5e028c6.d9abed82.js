"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[697],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={},o="Nexus Basic + Maven \u79c1\u670d",s={unversionedId:"LinuxBasics/Nexus/Nexus Basic - Maven \u79c1\u670d",id:"LinuxBasics/Nexus/Nexus Basic - Maven \u79c1\u670d",title:"Nexus Basic + Maven \u79c1\u670d",description:"[TOC]",source:"@site/docs/LinuxBasics/Nexus/Nexus Basic - Maven \u79c1\u670d.md",sourceDirName:"LinuxBasics/Nexus",slug:"/LinuxBasics/Nexus/Nexus Basic - Maven \u79c1\u670d",permalink:"/docs/LinuxBasics/Nexus/Nexus Basic - Maven \u79c1\u670d",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Nexus/Nexus Basic - Maven \u79c1\u670d.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Nexus + yum \u79c1\u670d",permalink:"/docs/LinuxBasics/Nexus/Nexus - yum \u79c1\u670d"},next:{title:"nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c",permalink:"/docs/LinuxBasics/Nexus/nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c"}},l={},p=[{value:"Nexus \u7b80\u4ecb",id:"nexus-\u7b80\u4ecb",level:2},{value:"Nexus  \u56db\u79cd\u4ed3\u5e93\u7c7b\u578b\u4ecb\u7ecd",id:"nexus--\u56db\u79cd\u4ed3\u5e93\u7c7b\u578b\u4ecb\u7ecd",level:2},{value:"Nexus  \u9884\u7f6e\u4ed3\u5e93",id:"nexus--\u9884\u7f6e\u4ed3\u5e93",level:2},{value:"Repositories\u8bf4\u660e",id:"repositories\u8bf4\u660e",level:2},{value:"Linux \u4e0a\u5b89\u88c5",id:"linux-\u4e0a\u5b89\u88c5",level:2},{value:"\u521b\u5efa\u4ed3\u5e93(\u963f\u91cc\u7684\u4e2d\u592e\u4ed3\u5e93)",id:"\u521b\u5efa\u4ed3\u5e93\u963f\u91cc\u7684\u4e2d\u592e\u4ed3\u5e93",level:3},{value:"Docker \u4e2d\u8fd0\u884c",id:"docker-\u4e2d\u8fd0\u884c",level:2},{value:"Windows \u4e0a\u5b89\u88c5",id:"windows-\u4e0a\u5b89\u88c5",level:2},{value:"\u9879\u76ee\u914d\u7f6e",id:"\u9879\u76ee\u914d\u7f6e",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nexus-basic--maven-\u79c1\u670d"},"Nexus Basic + Maven \u79c1\u670d"),(0,i.kt)("h1",{id:"nexus-\u79c1\u670d\u642d\u5efa"},"Nexus \u79c1\u670d\u642d\u5efa"),(0,i.kt)("p",null,"[TOC]"),(0,i.kt)("h2",{id:"nexus-\u7b80\u4ecb"},"Nexus \u7b80\u4ecb"),(0,i.kt)("p",null,"nexus\u662f\u4e00\u4e2a\u5f3a\u5927\u7684maven\u4ed3\u5e93\u7ba1\u7406\u5668,\u5b83\u6781\u5927\u7684\u7b80\u5316\u4e86\u672c\u5730\u5185\u90e8\u4ed3\u5e93\u7684\u7ef4\u62a4\u548c\u5916\u90e8\u4ed3\u5e93\u7684\u8bbf\u95ee."),(0,i.kt)("p",null,"nexus\u662f\u4e00\u5957\u5f00\u7bb1\u5373\u7528\u7684\u7cfb\u7edf\u4e0d\u9700\u8981\u6570\u636e\u5e93,\u5b83\u4f7f\u7528\u6587\u4ef6\u7cfb\u7edf\u52a0Lucene\u6765\u7ec4\u7ec7\u6570\u636e"),(0,i.kt)("p",null,"nexus\u4f7f\u7528ExtJS\u6765\u5f00\u53d1\u754c\u9762,\u5229\u7528Restlet\u6765\u63d0\u4f9b\u5b8c\u6574\u7684REST APIs,\u901a\u8fc7IDEA\u548cEclipse\u96c6\u6210\u4f7f\u7528"),(0,i.kt)("p",null,"nexus\u652f\u6301webDAV\u4e0eLDAP\u5b89\u5168\u8eab\u4efd\u8ba4\u8bc1."),(0,i.kt)("p",null,"nexus\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u4ed3\u5e93\u7ba1\u7406\u529f\u80fd,\u6784\u4ef6\u641c\u7d22\u529f\u80fd,\u5b83\u57fa\u4e8eREST,\u53cb\u597d\u7684UI\u662f\u4e00\u4e2aextjs\u7684REST\u5ba2\u6237\u7aef,\u5360\u7528\u8f83\u5c11\u7684\u5185\u5b58,\u57fa\u4e8e\u7b80\u5355\u6587\u4ef6\u7cfb\u7edf\u800c\u975e\u6570\u636e\u5e93."),(0,i.kt)("p",null,"\u79c1\u670d\u4ed3\u5e93\u7684\u5de5\u4f5c\u6d41\u7a0b:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/Maven/Nexus-1.jpg",alt:null})),(0,i.kt)("p",null,"Nexus Repository Manager, \u4ed3\u5e93\u7ba1\u7406\u5668, \u53ef\u4ee5\u7528\u6765\u642d\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),",",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),",",(0,i.kt)("inlineCode",{parentName:"p"},"maven2"),",",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),",",(0,i.kt)("inlineCode",{parentName:"p"},"nuget"),",",(0,i.kt)("inlineCode",{parentName:"p"},"pypi"),",",(0,i.kt)("inlineCode",{parentName:"p"},"yum"),"\u79c1\u670d."),(0,i.kt)("p",null,"\u5b98\u65b9\u6587\u6863:",(0,i.kt)("a",{parentName:"p",href:"https://help.sonatype.com/repomanager3"},"https://help.sonatype.com/repomanager3")),(0,i.kt)("h2",{id:"nexus--\u56db\u79cd\u4ed3\u5e93\u7c7b\u578b\u4ecb\u7ecd"},"Nexus  \u56db\u79cd\u4ed3\u5e93\u7c7b\u578b\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hosted"),"\uff0c\u672c\u5730\u4ed3\u5e93\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u90e8\u7f72\u81ea\u5df1\u7684\u6784\u4ef6\u5230\u8fd9\u4e00\u7c7b\u578b\u7684\u4ed3\u5e93\u3002\u6bd4\u5982\u516c\u53f8\u7684\u7b2c\u4e8c\u65b9\u5e93\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"proxy"),"\uff0c\u4ee3\u7406\u4ed3\u5e93\uff0c\u5b83\u4eec\u88ab\u7528\u6765\u4ee3\u7406\u8fdc\u7a0b\u7684\u516c\u5171\u4ed3\u5e93\uff0c\u5982maven\u4e2d\u592e\u4ed3\u5e93\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"group"),"\uff0c\u4ed3\u5e93\u7ec4\uff0c\u7528\u6765\u5408\u5e76\u591a\u4e2ahosted/proxy\u4ed3\u5e93\uff0c\u5f53\u4f60\u7684\u9879\u76ee\u5e0c\u671b\u5728\u591a\u4e2arepository\u4f7f\u7528\u8d44\u6e90\u65f6\u5c31\u4e0d\u9700\u8981\u591a\u6b21\u5f15\u7528\u4e86\uff0c\u53ea\u9700\u8981\u5f15\u7528\u4e00\u4e2agroup\u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"nexus--\u9884\u7f6e\u4ed3\u5e93"},"Nexus  \u9884\u7f6e\u4ed3\u5e93"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Releases:")," \u3010\u79c1\u5e93\u53d1\u884c\u7248jar\u3011\u8fd9\u91cc\u5b58\u653e\u6211\u4eec\u81ea\u5df1\u9879\u76ee\u4e2d\u53d1\u5e03\u7684\u6784\u5efa, \u901a\u5e38\u662fRelease\u7248\u672c\u7684, \u6bd4\u5982\u6211\u4eec\u81ea\u5df1\u505a\u4e86\u4e00\u4e2aFTP Server\u7684\u9879\u76ee, \u751f\u6210\u7684\u6784\u4ef6\u4e3aftpserver.war, \u6211\u4eec\u5c31\u53ef\u4ee5\u628a\u8fd9\u4e2a\u6784\u5efa\u53d1\u5e03\u5230Nexus\u7684Releases\u672c\u5730\u4ed3\u5e93. \u5173\u4e8e\u7b26\u5408\u53d1\u5e03\u540e\u9762\u4f1a\u6709\u4ecb\u7ecd."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Snapshots:"),"\u8fd9\u4e2a\u4ed3\u5e93\u975e\u5e38\u7684\u6709\u7528, \u5b83\u7684\u76ee\u7684\u662f\u8ba9\u6211\u4eec\u53ef\u4ee5\u53d1\u5e03\u90a3\u4e9b\u975erelease\u7248\u672c, \u975e\u7a33\u5b9a\u7248\u672c, \u6bd4\u5982\u6211\u4eec\u5728trunk\u4e0b\u5f00\u53d1\u4e00\u4e2a\u9879\u76ee,\u5728\u6b63\u5f0frelease\u4e4b\u524d\u4f60\u53ef\u80fd\u9700\u8981\u4e34\u65f6\u53d1\u5e03\u4e00\u4e2a\u7248\u672c\u7ed9\u4f60\u7684\u540c\u4f34\u4f7f\u7528, \u56e0\u4e3a\u4f60\u7684\u540c\u4f34\u6b63\u5728\u4f9d\u8d56\u4f60\u7684\u6a21\u5757\u5f00\u53d1, \u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u53d1\u5e03Snapshot\u7248\u672c\u5230\u8fd9\u4e2a\u4ed3\u5e93, \u4f60\u7684\u540c\u4f34\u5c31\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u547d\u4ee4\u6765\u83b7\u53d6\u548c\u4f7f\u7528\u8fd9\u4e2a\u4e34\u65f6\u7248\u672c."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3rd Party:"),"\u987e\u540d\u601d\u4e49, \u7b2c\u4e09\u65b9\u5e93, \u4f60\u53ef\u80fd\u4f1a\u95ee\u4e0d\u662f\u6709\u4e2d\u592e\u4ed3\u5e93\u6765\u7ba1\u7406\u7b2c\u4e09\u65b9\u5e93\u561b,\u6ca1\u9519, \u8fd9\u91cc\u7684\u662f\u6307\u53ef\u4ee5\u8ba9\u4f60\u6dfb\u52a0\u81ea\u5df1\u7684\u7b2c\u4e09\u65b9\u5e93, \u6bd4\u5982\u6709\u4e9b\u6784\u4ef6\u5728\u4e2d\u592e\u4ed3\u5e93\u662f\u4e0d\u5b58\u5728\u7684. \u6bd4\u5982\u4f60\u5728\u4e2d\u592e\u4ed3\u5e93\u627e\u4e0d\u5230Oracle \u7684JDBC\u9a71\u52a8, \u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u81ea\u5df1\u6dfb\u52a0\u52303rdparty\u4ed3\u5e93\u3002"),(0,i.kt)("h2",{id:"repositories\u8bf4\u660e"},"Repositories\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u4ed3\u5e93\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"maven-central"),(0,i.kt)("td",{parentName:"tr",align:"left"},"maven\u4e2d\u592e\u5e93\uff0c\u9ed8\u8ba4\u4ece",(0,i.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/%E6%8B%89%E5%8F%96jar"},"https://repo1.maven.org/maven2/\u62c9\u53d6jar"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"maven-releases"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u79c1\u5e93\u53d1\u884c\u7248jar")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"maven-snapshots"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u79c1\u5e93\u5feb\u7167\uff08\u8c03\u8bd5\u7248\u672c\uff09jar")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"maven-public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4ed3\u5e93\u5206\u7ec4\uff0c\u628a\u4e0a\u9762\u4e09\u4e2a\u4ed3\u5e93\u7ec4\u5408\u5728\u4e00\u8d77\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u5728\u672c\u5730maven\u57fa\u7840\u914d\u7f6esettings.xml\u4e2d\u4f7f\u7528")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/Maven/Nexus-3.png",alt:null,title:"**Repositories**"})),(0,i.kt)("h2",{id:"linux-\u4e0a\u5b89\u88c5"},"Linux \u4e0a\u5b89\u88c5"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528tar xvzf\u547d\u4ee4\u63d0\u53d6\u4e0b\u8f7d\u7684GZip\u7684TAR\u5f52\u6863\u6587\u4ef6\u3002 \u5bf9\u4e8e\u751f\u4ea7\u800c\u8a00\uff0c\u5efa\u8bae\u4e0d\u8981\u4ece\u7528\u6237\u7684\u4e3b\u76ee\u5f55\u8fd0\u884cnexus\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u662f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"/opt"),"\u3002 \u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u8981\u5728\u7c7b\u4f3cLinux\u7684\u7c7bUnix\u5e73\u53f0\u4e0a\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"bin"),"\u6587\u4ef6\u5939\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u76ee\u5f55\u542f\u52a8\u5b58\u50a8\u5e93\u7ba1\u7406\u5668\uff0c\u8bf7\u4f7f\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./nexus run\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nexus")," script can be used to manage the repository manager as a background application on OSX and Unix with the ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"restart"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"force-reload")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," commands."),(0,i.kt)("p",null,"\u6700\u540e\u901a\u8fc7 http://ip:8081 \u5373\u53ef\u8bbf\u95ee, \u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\u5206\u522b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/admin123")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/Maven/Nexus-2.png",alt:null,title:"\u622a\u56fe"})),(0,i.kt)("h3",{id:"\u521b\u5efa\u4ed3\u5e93\u963f\u91cc\u7684\u4e2d\u592e\u4ed3\u5e93"},"\u521b\u5efa\u4ed3\u5e93(\u963f\u91cc\u7684\u4e2d\u592e\u4ed3\u5e93)"),(0,i.kt)("p",null,"proxy\u4ee3\u7406\u4ed3\u5e93"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/Maven/Nexus-4.png",alt:null})),(0,i.kt)("p",null,"hosted\u5bbf\u4e3b\u4ed3\u5e93"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/Maven/Nexus-6.png",alt:null})),(0,i.kt)("p",null,"group\u4ed3\u5e93\u7ec4"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.agou-ops.cn/blog-images/Maven/Nexus-5.png",alt:null})),(0,i.kt)("h2",{id:"docker-\u4e2d\u8fd0\u884c"},"Docker \u4e2d\u8fd0\u884c"),(0,i.kt)("p",null,"\u4ed3\u5e93\u5730\u5740:",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/sonatype/nexus3/"},"https://hub.docker.com/r/sonatype/nexus3/")),(0,i.kt)("p",null,"1\u3001\u521b\u5efa\u5b58\u653e\u6570\u636e\u7684\u4f4d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u4e2a\u6587\u4ef6\u5939\nmkdir /data/nexus-data\n# \u8d4b\u4e88\u6743\u9650\uff0c\u4e0d\u7136\u542f\u52a8\u4f1a\u62a5\u9519\uff0c\u65e0\u64cd\u4f5c\u6743\u9650\nchmod 755 nexus-data\n")),(0,i.kt)("p",null,"2\u3001\u542f\u52a8"),(0,i.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\uff0c\u4f1a\u81ea\u52a8\u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 8081:8081 --ulimit nofile=65536:65536 --name nexus -v /data/nexus-data:/nexus-data --restart=always sonatype/nexus3\n")),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"docker logs -f nexus"),"\u67e5\u770b\u542f\u52a8\u65e5\u5fd7\uff0c\u5f53\u51fa\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"Started Sonatype Nexus OSS"),"\u8bf4\u660e\u542f\u52a8\u6210\u529f\uff0c\u8fd9\u65f6\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"http://ip:8081"),"\u5373\u53ef\u8bbf\u95ee"),(0,i.kt)("h2",{id:"windows-\u4e0a\u5b89\u88c5"},"Windows \u4e0a\u5b89\u88c5"),(0,i.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406",(0,i.kt)("inlineCode",{parentName:"p"},"Nexus"),", \u53ef\u4ee5\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"nexus"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"bin"),"\u76ee\u5f55\u6dfb\u52a0\u8fdb\u73af\u5883\u53d8\u91cf, \u5177\u4f53\u65b9\u6cd5\u53ef\u4ee5\u7f51\u4e0a\u641c\u7d22, \u5728\u6b64\u4e0d\u518d\u8d58\u8ff0."),(0,i.kt)("p",null,"Windows \u76f4\u63a5\u8fd0\u884c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nexus.exe /run\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nexus.exe")," executable can be used to manage the repository manager as a service with the ",(0,i.kt)("inlineCode",{parentName:"p"},"/start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/stop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/restart"),",",(0,i.kt)("inlineCode",{parentName:"p"}," /force-reload")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/``status")," commands."),(0,i.kt)("p",null,"\u6700\u540e, \u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:8081/"},"http://127.0.0.1:8081/")," \u5373\u53ef."),(0,i.kt)("p",null,"\u2139\ufe0f\u6ce8\u610f: ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"\u8d26\u6237\u7684\u9ed8\u8ba4\u5bc6\u7801\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"[Nexus\u5b89\u88c5\u76ee\u5f55]\\sonatype-work\\nexus3\\admin.password"),", \u7b2c\u4e00\u6b21\u5f15\u5bfc\u65f6\u4f1a\u63d0\u793a\u4f60\u4fee\u6539\u5bc6\u7801."),(0,i.kt)("h2",{id:"\u9879\u76ee\u914d\u7f6e"},"\u9879\u76ee\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\n\x3c!--\nLicensed to the Apache Software Foundation (ASF) under one\nor more contributor license agreements.  See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership.  The ASF licenses this file\nto you under the Apache License, Version 2.0 (the\n\"License\"); you may not use this file except in compliance\nwith the License.  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing,\nsoftware distributed under the License is distributed on an\n\"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either express or implied.  See the License for the\nspecific language governing permissions and limitations\nunder the License.\n--\x3e\n\n\x3c!--\n | This is the configuration file for Maven. It can be specified at two levels:\n |\n |  1. User Level. This settings.xml file provides configuration for a single user,\n |                 and is normally provided in ${user.home}/.m2/settings.xml.\n |\n |                 NOTE: This location can be overridden with the CLI option:\n |\n |                 -s /path/to/user/settings.xml\n |\n |  2. Global Level. This settings.xml file provides configuration for all Maven\n |                 users on a machine (assuming they're all using the same Maven\n |                 installation). It's normally provided in\n |                 ${maven.home}/conf/settings.xml.\n |\n |                 NOTE: This location can be overridden with the CLI option:\n |\n |                 -gs /path/to/global/settings.xml\n |\n | The sections in this sample file are intended to give you a running start at\n | getting the most out of your Maven installation. Where appropriate, the default\n | values (values used when the setting is not specified) are provided.\n |\n |--\x3e\n<settings xmlns=\"http://maven.apache.org/SETTINGS/1.0.0\"\n          xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n          xsi:schemaLocation=\"http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd\">\n  \x3c!-- localRepository\n   | The path to the local repository maven will use to store artifacts.\n   |\n   | Default: ${user.home}/.m2/repository\n    --\x3e\n  <localRepository>D:\\Maven\\repository</localRepository>\n \n\n  \x3c!-- interactiveMode\n   | This will determine whether maven prompts you when it needs input. If set to false,\n   | maven will use a sensible default value, perhaps based on some other setting, for\n   | the parameter in question.\n   |\n   | Default: true\n  <interactiveMode>true</interactiveMode>\n  --\x3e\n\n  \x3c!-- offline\n   | Determines whether maven should attempt to connect to the network when executing a build.\n   | This will have an effect on artifact downloads, artifact deployment, and others.\n   |\n   | Default: false\n  <offline>false</offline>\n  --\x3e\n\n  \x3c!-- pluginGroups\n   | This is a list of additional group identifiers that will be searched when resolving plugins by their prefix, i.e.\n   | when invoking a command line like \"mvn prefix:goal\". Maven will automatically add the group identifiers\n   | \"org.apache.maven.plugins\" and \"org.codehaus.mojo\" if these are not already contained in the list.\n   |--\x3e\n  <pluginGroups>\n    \x3c!-- pluginGroup\n     | Specifies a further group identifier to use for plugin lookup.\n    <pluginGroup>com.your.plugins</pluginGroup>\n    --\x3e\n  </pluginGroups>\n\n  \x3c!-- proxies\n   | This is a list of proxies which can be used on this machine to connect to the network.\n   | Unless otherwise specified (by system property or command-line switch), the first proxy\n   | specification in this list marked as active will be used.\n   |--\x3e\n  <proxies>\n    \x3c!-- proxy\n     | Specification for one proxy, to be used in connecting to the network.\n     |\n    <proxy>\n      <id>optional</id>\n      <active>true</active>\n      <protocol>http</protocol>\n      <username>proxyuser</username>\n      <password>proxypass</password>\n      <host>proxy.host.net</host>\n      <port>80</port>\n      <nonProxyHosts>local.net|some.host.com</nonProxyHosts>\n    </proxy>\n    --\x3e\n  </proxies>\n\n  \x3c!-- servers\n   | This is a list of authentication profiles, keyed by the server-id used within the system.\n   | Authentication profiles can be used whenever maven must make a connection to a remote server.\n   |--\x3e\n  <servers>\n    \x3c!-- server\n     | Specifies the authentication information to use when connecting to a particular server, identified by\n     | a unique name within the system (referred to by the 'id' attribute below).\n     |\n     | NOTE: You should either specify username/password OR privateKey/passphrase, since these pairings are\n     |       used together.\n     |\n     --\x3e\n    <server>\n      <id>release</id>\n      <username>admin</username>\n      <password>admin123</password>\n    </server>\n    \n    <server>\n      <id>snapshots</id>\n      <username>admin</username>\n      <password>admin123</password>\n    </server>\n    \n    \n\n    \x3c!-- Another sample, using keys to authenticate.\n    <server>\n      <id>release</id>\n      <privateKey>/path/to/private/key</privateKey>\n      <passphrase>optional; leave empty if not used.</passphrase>\n    </server>\n    --\x3e\n  </servers>\n\n  \x3c!-- mirrors\n   | This is a list of mirrors to be used in downloading artifacts from remote repositories.\n   |\n   | It works like this: a POM may declare a repository to use in resolving certain artifacts.\n   | However, this repository may have problems with heavy traffic at times, so people have mirrored\n   | it to several places.\n   |\n   | That repository definition will have a unique id, so we can create a mirror reference for that\n   | repository, to be used as an alternate download site. The mirror site will be the preferred\n   | server for that repository.\n   |--\x3e\n  <mirrors>\n    \x3c!-- mirror\n     | Specifies a repository mirror site to use instead of a given repository. The repository that\n     | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used\n     | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.\n     |\n    <mirror>\n      <id>mirrorId</id>\n      <mirrorOf>repositoryId</mirrorOf>\n      <name>Human Readable Name for this Mirror.</name>\n      <url>http://my.repository.com/repo/path</url>\n    </mirror>\n     --\x3e\n  </mirrors>\n\n  \x3c!-- profiles\n   | This is a list of profiles which can be activated in a variety of ways, and which can modify\n   | the build process. Profiles provided in the settings.xml are intended to provide local machine-\n   | specific paths and repository locations which allow the build to work in the local environment.\n   |\n   | For example, if you have an integration testing plugin - like cactus - that needs to know where\n   | your Tomcat instance is installed, you can provide a variable here such that the variable is\n   | dereferenced during the build process to configure the cactus plugin.\n   |\n   | As noted above, profiles can be activated in a variety of ways. One way - the activeProfiles\n   | section of this document (settings.xml) - will be discussed later. Another way essentially\n   | relies on the detection of a system property, either matching a particular value for the property,\n   | or merely testing its existence. Profiles can also be activated by JDK version prefix, where a\n   | value of '1.4' might activate a profile when the build is executed on a JDK version of '1.4.2_07'.\n   | Finally, the list of active profiles can be specified directly from the command line.\n   |\n   | NOTE: For profiles defined in the settings.xml, you are restricted to specifying only artifact\n   |       repositories, plugin repositories, and free-form properties to be used as configuration\n   |       variables for plugins in the POM.\n   |\n   |--\x3e\n  <profiles>\n    \x3c!-- profile\n     | Specifies a set of introductions to the build process, to be activated using one or more of the\n     | mechanisms described above. For inheritance purposes, and to activate profiles via <activatedProfiles/>\n     | or the command line, profiles have to have an ID that is unique.\n     |\n     | An encouraged best practice for profile identification is to use a consistent naming convention\n     | for profiles, such as 'env-dev', 'env-test', 'env-production', 'user-jdcasey', 'user-brett', etc.\n     | This will make it more intuitive to understand what the set of introduced profiles is attempting\n     | to accomplish, particularly when you only have a list of profile id's for debug.\n     |\n     | This profile example uses the JDK version to trigger activation, and provides a JDK-specific repo.\n    <profile>\n      <id>jdk-1.4</id>\n\n      <activation>\n        <jdk>1.4</jdk>\n      </activation>\n\n      <repositories>\n        <repository>\n          <id>jdk14</id>\n          <name>Repository for JDK 1.4 builds</name>\n          <url>http://www.myhost.com/maven/jdk14</url>\n          <layout>default</layout>\n          <snapshotPolicy>always</snapshotPolicy>\n        </repository>\n      </repositories>\n    </profile>\n    --\x3e\n\n    \x3c!--\n     | Here is another profile, activated by the system property 'target-env' with a value of 'dev',\n     | which provides a specific path to the Tomcat instance. To use this, your plugin configuration\n     | might hypothetically look like:\n     |\n     | ...\n     | <plugin>\n     |   <groupId>org.myco.myplugins</groupId>\n     |   <artifactId>myplugin</artifactId>\n     |\n     |   <configuration>\n     |     <tomcatLocation>${tomcatPath}</tomcatLocation>\n     |   </configuration>\n     | </plugin>\n     | ...\n     |\n     | NOTE: If you just wanted to inject this configuration whenever someone set 'target-env' to\n     |       anything, you could just leave off the <value/> inside the activation-property.\n     |\n    \n    <profile>\n      <id>env-dev</id>\n\n      <activation>\n        <property>\n          <name>target-env</name>\n          <value>dev</value>\n        </property>\n      </activation>\n\n    </profile>\n    --\x3e\n    \n     <profile>\n      <id>default_profile</id>\n      <repositories>\n        \x3c!--\u5305\u542b\u9700\u8981\u8fde\u63a5\u5230\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4fe1\u606f --\x3e\n        <repository>\n          \x3c!--\u8fdc\u7a0b\u4ed3\u5e93\u552f\u4e00\u6807\u8bc6 --\x3e\n          <id>zhanglonghao_repo</id>\n          \x3c!--\u8fdc\u7a0b\u4ed3\u5e93\u540d\u79f0 --\x3e\n          <name>zhanglonghao_repo</name>\n          \x3c!--\u5982\u4f55\u5904\u7406\u8fdc\u7a0b\u4ed3\u5e93\u91cc\u53d1\u5e03\u7248\u672c\u7684\u4e0b\u8f7d --\x3e\n          <releases>\n            \x3c!--true\u6216\u8005false\u8868\u793a\u8be5\u4ed3\u5e93\u662f\u5426\u4e3a\u4e0b\u8f7d\u67d0\u79cd\u7c7b\u578b\u6784\u4ef6\uff08\u53d1\u5e03\u7248\uff0c\u5feb\u7167\u7248\uff09\u5f00\u542f\u3002 --\x3e\n            <enabled>true</enabled>\n            \x3c!--\u8be5\u5143\u7d20\u6307\u5b9a\u66f4\u65b0\u53d1\u751f\u7684\u9891\u7387\u3002Maven\u4f1a\u6bd4\u8f83\u672c\u5730POM\u548c\u8fdc\u7a0bPOM\u7684\u65f6\u95f4\u6233\u3002\u8fd9\u91cc\u7684\u9009\u9879\u662f\uff1aalways\uff08\u4e00\u76f4\uff09\uff0cdaily\uff08\u9ed8\u8ba4\uff0c\u6bcf\u65e5\uff09\uff0cinterval\uff1aX\uff08\u8fd9\u91ccX\u662f\u4ee5\u5206\u949f\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u95f4\u9694\uff09\uff0c\u6216\u8005never\uff08\u4ece\u4e0d\uff09\u3002 --\x3e\n            <updatePolicy>never</updatePolicy>\n            \x3c!--\u5f53Maven\u9a8c\u8bc1\u6784\u4ef6\u6821\u9a8c\u6587\u4ef6\u5931\u8d25\u65f6\u8be5\u600e\u4e48\u505a-ignore\uff08\u5ffd\u7565\uff09\uff0cfail\uff08\u5931\u8d25\uff09\uff0c\u6216\u8005warn\uff08\u8b66\u544a\uff09\u3002 --\x3e\n            <checksumPolicy>warn</checksumPolicy>\n          </releases>\n          \x3c!--\u5982\u4f55\u5904\u7406\u8fdc\u7a0b\u4ed3\u5e93\u91cc\u5feb\u7167\u7248\u672c\u7684\u4e0b\u8f7d\u3002\u6709\u4e86releases\u548csnapshots\u8fd9\u4e24\u7ec4\u914d\u7f6e\uff0cPOM\u5c31\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5355\u72ec\u7684\u4ed3\u5e93\u4e2d\uff0c\u4e3a\u6bcf\u79cd\u7c7b\u578b\u7684\u6784\u4ef6\u91c7\u53d6\u4e0d\u540c\u7684\u7b56\u7565\u3002\u4f8b\u5982\uff0c\u53ef\u80fd\u6709\u4eba\u4f1a\u51b3\u5b9a\u53ea\u4e3a\u5f00\u53d1\u76ee\u7684\u5f00\u542f\u5bf9\u5feb\u7167\u7248\u672c\u4e0b\u8f7d\u7684\u652f\u6301\u3002\u53c2\u89c1repositories/repository/releases\u5143\u7d20 --\x3e\n          <snapshots>\n            \x3c!--true\u6216\u8005false\u8868\u793a\u8be5\u4ed3\u5e93\u662f\u5426\u4e3a\u4e0b\u8f7d\u67d0\u79cd\u7c7b\u578b\u6784\u4ef6\uff08\u53d1\u5e03\u7248\uff0c\u5feb\u7167\u7248\uff09\u5f00\u542f\u3002 --\x3e\n            <enabled>true</enabled>\n            \x3c!--\u8be5\u5143\u7d20\u6307\u5b9a\u66f4\u65b0\u53d1\u751f\u7684\u9891\u7387\u3002Maven\u4f1a\u6bd4\u8f83\u672c\u5730POM\u548c\u8fdc\u7a0bPOM\u7684\u65f6\u95f4\u6233\u3002\u8fd9\u91cc\u7684\u9009\u9879\u662f\uff1aalways\uff08\u4e00\u76f4\uff09\uff0cdaily\uff08\u9ed8\u8ba4\uff0c\u6bcf\u65e5\uff09\uff0cinterval\uff1aX\uff08\u8fd9\u91ccX\u662f\u4ee5\u5206\u949f\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u95f4\u9694\uff09\uff0c\u6216\u8005never\uff08\u4ece\u4e0d\uff09\u3002 --\x3e\n            <updatePolicy>always</updatePolicy>\n            \x3c!--\u5f53Maven\u9a8c\u8bc1\u6784\u4ef6\u6821\u9a8c\u6587\u4ef6\u5931\u8d25\u65f6\u8be5\u600e\u4e48\u505a-ignore\uff08\u5ffd\u7565\uff09\uff0cfail\uff08\u5931\u8d25\uff09\uff0c\u6216\u8005warn\uff08\u8b66\u544a\uff09\u3002 --\x3e\n            <checksumPolicy>warn</checksumPolicy>\n          </snapshots>\n          \x3c!--\u8fdc\u7a0b\u4ed3\u5e93URL\uff0c\u6309protocol://hostname/path\u5f62\u5f0f --\x3e\n          <url>http://maven.zhanglonghao.work:8081/nexus/content/groups/public</url>\n          \x3c!--\u7528\u4e8e\u5b9a\u4f4d\u548c\u6392\u5e8f\u6784\u4ef6\u7684\u4ed3\u5e93\u5e03\u5c40\u7c7b\u578b-\u53ef\u4ee5\u662fdefault\uff08\u9ed8\u8ba4\uff09\u6216\u8005legacy\uff08\u9057\u7559\uff09\u3002Maven 2\u4e3a\u5176\u4ed3\u5e93\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5e03\u5c40\uff1b\u7136\u800c\uff0cMaven 1.x\u6709\u4e00\u79cd\u4e0d\u540c\u7684\u5e03\u5c40\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8be5\u5143\u7d20\u6307\u5b9a\u5e03\u5c40\u662fdefault\uff08\u9ed8\u8ba4\uff09\u8fd8\u662flegacy\uff08\u9057\u7559\uff09\u3002 --\x3e\n          <layout>default</layout>\n        </repository>\n      </repositories>\n      \n      <pluginRepositories>  \n        <pluginRepository>  \n          <id>maven-net-cn</id>  \n          <name>Maven China Mirror</name>  \n          <url>http://maven.zhanglonghao.work:8081/nexus/content/groups/public</url>  \n          <releases>  \n            <enabled>true</enabled>  \n          </releases>  \n          <snapshots>  \n            <enabled>true</enabled>  \n          </snapshots>      \n        </pluginRepository>  \n      </pluginRepositories> \n  \n    </profile>\n  </profiles>\n \n\n\n  \x3c!-- activeProfiles\n   | List of profiles that are active for all builds.\n   --\x3e\n  <activeProfiles>\n    <activeProfile>default_profile</activeProfile>\n  </activeProfiles>\n\n</settings>\n")),(0,i.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b98\u65b9\u5b89\u88c5\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://help.sonatype.com/repomanager3/installation/installation-methods"},"https://help.sonatype.com/repomanager3/installation/installation-methods"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Linux\u642d\u5efa\u81ea\u5df1Nexus\u79c1\u670d\u7684\u5b9e\u73b0\u65b9\u6cd5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.jb51.net/article/171427.htm"},"https://www.jb51.net/article/171427.htm")))))}c.isMDXComponent=!0}}]);