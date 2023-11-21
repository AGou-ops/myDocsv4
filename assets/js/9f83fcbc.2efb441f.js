"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a=void 0,c={unversionedId:"CloudNative/CICD/Jenkins/Jenkins Backup Restore",id:"CloudNative/CICD/Jenkins/Jenkins Backup Restore",title:"Jenkins Backup Restore",description:"\u4f7f\u7528thinbackup\u63d2\u4ef6\u8fdb\u884c\u5907\u4efd",source:"@site/docs/CloudNative/CICD/Jenkins/Jenkins Backup Restore.md",sourceDirName:"CloudNative/CICD/Jenkins",slug:"/CloudNative/CICD/Jenkins/Jenkins Backup Restore",permalink:"/docs/CloudNative/CICD/Jenkins/Jenkins Backup Restore",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/CloudNative/CICD/Jenkins/Jenkins Backup Restore.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Generic Webhook Trigger",permalink:"/docs/CloudNative/CICD/Jenkins/Generic Webhook Trigger"},next:{title:"Jenkins Basic",permalink:"/docs/CloudNative/CICD/Jenkins/Jenkins Basic"}},s={},u=[{value:"\u4f7f\u7528thinbackup\u63d2\u4ef6\u8fdb\u884c\u5907\u4efd",id:"\u4f7f\u7528thinbackup\u63d2\u4ef6\u8fdb\u884c\u5907\u4efd",level:2},{value:"\u4f7f\u7528git\u4ed3\u5e93\u8fdb\u884c\u5907\u4efd",id:"\u4f7f\u7528git\u4ed3\u5e93\u8fdb\u884c\u5907\u4efd",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4f7f\u7528thinbackup\u63d2\u4ef6\u8fdb\u884c\u5907\u4efd"},"\u4f7f\u7528thinbackup\u63d2\u4ef6\u8fdb\u884c\u5907\u4efd"),(0,i.kt)("p",null,"\u7565"),(0,i.kt)("h2",{id:"\u4f7f\u7528git\u4ed3\u5e93\u8fdb\u884c\u5907\u4efd"},"\u4f7f\u7528git\u4ed3\u5e93\u8fdb\u884c\u5907\u4efd"),(0,i.kt)("p",null,"\u793a\u4f8b\u811a\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n# terminate on error\nset -e\n\ncd $JENKINS_HOME\necho "Recent changes:"\ngit log -5 --pretty=oneline --stat\n\necho "Checking status of $JENKINS_HOME"\ngit status\n\necho "Adding new files..."\ngit add .\n\necho "Git status:"\ngit status\n\necho "Committing changes..."\n# Only try commit if something changed, otherwise this produces an error.\ngit diff-index --quiet HEAD || git commit -m "$GIT_COMMENT"\n\n# Push changes upstream\ngit push\n')))}p.isMDXComponent=!0}}]);