"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[1789],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?t.createElement(g,a(a({ref:n},u),{},{components:r})):t.createElement(g,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78440:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const i={},a=void 0,c={unversionedId:"CloudNative/CICD/Jenkins/Generic Webhook Trigger",id:"CloudNative/CICD/Jenkins/Generic Webhook Trigger",title:"Generic Webhook Trigger",description:"\u521d\u59cb\u5316:",source:"@site/docs/CloudNative/CICD/Jenkins/Generic Webhook Trigger.md",sourceDirName:"CloudNative/CICD/Jenkins",slug:"/CloudNative/CICD/Jenkins/Generic Webhook Trigger",permalink:"/docs/CloudNative/CICD/Jenkins/Generic Webhook Trigger",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/CICD/Jenkins/Generic Webhook Trigger.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Docker Jenkins \u6267\u884c\u5bbf\u4e3b\u673a\u547d\u4ee4",permalink:"/docs/CloudNative/CICD/Jenkins/Docker Jenkins \u6267\u884c\u5bbf\u4e3b\u673a\u547d\u4ee4"},next:{title:"Jenkins Backup Restore",permalink:"/docs/CloudNative/CICD/Jenkins/Jenkins Backup Restore"}},s={},l=[],u={toc:l};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521d\u59cb\u5316:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n    agent {\n        node {\n            label 'testserver-agent'\n        }\n    }\n    triggers {\n        GenericTrigger(\n            genericVariables: [\n              [key: 'ref', value: '$. ref']\n            ],\n            token: 'secret' ,\n            causeString: ' Triggered on $ref' ,\n            printContributedVariables: true,\n            printPostContent: true\n        )\n    }\n    stages {\n        stage('GWT env') {\n            steps {\n                sh \"echo $ref\"\n                sh \"printenv\"\n            }\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);