"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[1683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Sonarqube + Jenkins",l={unversionedId:"CloudNative/CICD/Sonarqube/Sonarqube with Jenkins",id:"CloudNative/CICD/Sonarqube/Sonarqube with Jenkins",title:"Sonarqube + Jenkins",description:"Installation",source:"@site/docs/CloudNative/CICD/Sonarqube/Sonarqube with Jenkins.md",sourceDirName:"CloudNative/CICD/Sonarqube",slug:"/CloudNative/CICD/Sonarqube/Sonarqube with Jenkins",permalink:"/docs/CloudNative/CICD/Sonarqube/Sonarqube with Jenkins",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/CICD/Sonarqube/Sonarqube with Jenkins.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Sonarqube Basic",permalink:"/docs/CloudNative/CICD/Sonarqube/Sonarqube Basic"},next:{title:"Gogs Basic",permalink:"/docs/CloudNative/CICD/Gogs Basic"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sonarqube--jenkins"},"Sonarqube + Jenkins"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://plugins.jenkins.io/sonar"},"Install the SonarScanner for Jenkins via the Jenkins Update Center"),"."),(0,o.kt)("li",{parentName:"ol"},"Configure your SonarQube server(s):",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Log into Jenkins as an administrator and go to ",(0,o.kt)("strong",{parentName:"li"},"Manage Jenkins > Configure System"),"."),(0,o.kt)("li",{parentName:"ol"},"Scroll down to the SonarQube configuration section, click ",(0,o.kt)("strong",{parentName:"li"},"Add SonarQube"),", and add the values you're prompted for."),(0,o.kt)("li",{parentName:"ol"},"The server authentication token should be created as a 'Secret Text' credential.")))),(0,o.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://my.oschina.net/u/4222971/blog/3115616"},"https://my.oschina.net/u/4222971/blog/3115616"))))}p.isMDXComponent=!0}}]);