"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[9571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"LinuxBasics/Nexus/nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c",id:"LinuxBasics/Nexus/nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c",title:"nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c",description:'curl -v --user "admin//192.168.1.5:8081/repository/local/',source:"@site/docs/LinuxBasics/Nexus/nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c.md",sourceDirName:"LinuxBasics/Nexus",slug:"/LinuxBasics/Nexus/nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c",permalink:"/docs/LinuxBasics/Nexus/nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/Nexus/nexus \u6279\u91cf\u4e0a\u4f20\u811a\u672c.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Nexus Basic + Maven \u79c1\u670d",permalink:"/docs/LinuxBasics/Nexus/Nexus Basic - Maven \u79c1\u670d"},next:{title:"RabbitMQ",permalink:"/docs/category/rabbitmq"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'curl -v --user "admin:admin" --upload-file ./ ',(0,a.kt)("a",{parentName:"p",href:"http://192.168.1.5:8081/repository/local/"},"http://192.168.1.5:8081/repository/local/")),(0,a.kt)("h1",{id:"\u6279\u91cf\u4e0a\u4f20\u811a\u672cjar\u5305"},"\u6279\u91cf\u4e0a\u4f20\u811a\u672cjar\u5305"),(0,a.kt)("p",null,"#!/bin/bash"),(0,a.kt)("h1",{id:"copy-and-run-this-script-to-the-root-of-the-repository-directory-containing-files"},"copy and run this script to the root of the repository directory containing files"),(0,a.kt)("h1",{id:"this-script-attempts-to-exclude-uploading-itself-explicitly-so-the-script-name-is-important"},"this script attempts to exclude uploading itself explicitly so the script name is important"),(0,a.kt)("h1",{id:"get-command-line-params"},"Get command line params"),(0,a.kt)("p",null,'while getopts ":r:u:p:" opt; do\ncase $opt in\nr) REPO_URL="$OPTARG"\n;;\nu) USERNAME="$OPTARG"\n;;\np) PASSWORD="$OPTARG"\n;;\nesac\ndone'),(0,a.kt)("p",null,"find . -type f -not -path './mavenimport",".","sh",(0,a.kt)("em",{parentName:"p"},"' -not -path '"),"/",".",(0,a.kt)("em",{parentName:"p"},"' -not -path '"),"/\\^archetype","-","catalog",".","xml",(0,a.kt)("em",{parentName:"p"},"' -not -path '"),"/\\^maven","-","metadata","-","local",(0,a.kt)("em",{parentName:"p"},".","xml' -not -path '"),"/\\^maven","-","metadata","-","deployment*",".","xml' | sed \"s|^",".",'/||" | xargs -I \'{}\' curl -u "$USERNAME:$PASSWORD" -X PUT -v -T {} ${REPO_URL}/{} ;'),(0,a.kt)("h1",{id:"\u6279\u91cf\u4e0a\u4f20rpm\u5305"},"\u6279\u91cf\u4e0a\u4f20rpm\u5305"),(0,a.kt)("p",null,"find . -type f -not -path './upload",".","sh' | sed \"s@^",".",'/@@" | xargs -I \'{}\' curl -u "$USERNAME:$PASSWORD" -X PUT -v -T {} ${REPO_URL}/{} ;'),(0,a.kt)("h1",{id:"\u8fd0\u884c\u811a\u672c"},"\u8fd0\u884c\u811a\u672c"),(0,a.kt)("p",null,"./import.sh -u admin -p admin -r ",(0,a.kt)("a",{parentName:"p",href:"http://192.168.1.5:8081/repository/local/"},"http://192.168.1.5:8081/repository/local/")))}u.isMDXComponent=!0}}]);