"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6094],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={},o="pipeline - Jenkinsfile",l={unversionedId:"CloudNative/CICD/Jenkins/Jenkinsfile",id:"CloudNative/CICD/Jenkins/Jenkinsfile",title:"pipeline - Jenkinsfile",description:"\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u5f00\u59cb:",source:"@site/docs/CloudNative/CICD/Jenkins/Jenkinsfile.md",sourceDirName:"CloudNative/CICD/Jenkins",slug:"/CloudNative/CICD/Jenkins/Jenkinsfile",permalink:"/docs/CloudNative/CICD/Jenkins/Jenkinsfile",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/CICD/Jenkins/Jenkinsfile.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Jenkins \u5e38\u7528\u63d2\u4ef6\u5217\u8868",permalink:"/docs/CloudNative/CICD/Jenkins/Jenkins Plugins"},next:{title:"Sonarqube",permalink:"/docs/category/sonarqube"}},s={},p=[{value:"\u5e38\u7528\u9009\u9879\u8bf4\u660e",id:"\u5e38\u7528\u9009\u9879\u8bf4\u660e",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipeline---jenkinsfile"},"pipeline - Jenkinsfile"),(0,i.kt)("p",null,"\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u5f00\u59cb:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pipeline {\n    agent any\n    stages {\n        stage('Example') {\n            steps { \n                echo 'Hello World'\n            }\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"\u5e38\u7528\u9009\u9879\u8bf4\u660e"},"\u5e38\u7528\u9009\u9879\u8bf4\u660e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pipeline {\n    agent any\n    environment {       // \u5168\u5c40\u53d8\u91cf\n        CC = 'clang'\n    }\n    stages {\n        stage('Example') {\n            environment { \n                AN_ACCESS_KEY = credentials('my-prefined-secret-text')      // \u5c40\u90e8\u53d8\u91cf\n            }\n            steps {\n                sh 'printenv'\n            }\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"groovy documentation: ",(0,i.kt)("a",{parentName:"li",href:"http://groovy-lang.org/semantics.html"},"http://groovy-lang.org/semantics.html")),(0,i.kt)("li",{parentName:"ul"},"pipeline syntax: ",(0,i.kt)("a",{parentName:"li",href:"https://www.jenkins.io/zh/doc/book/pipeline/syntax/"},"https://www.jenkins.io/zh/doc/book/pipeline/syntax/"))))}u.isMDXComponent=!0}}]);