"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6824],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),g=o,m=f["".concat(s,".").concat(g)]||f[g]||l[g]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62961:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"LinuxBasics/Web-Servers/Nginx/Others/\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u652f\u6301gzip",id:"LinuxBasics/Web-Servers/Nginx/Others/\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u652f\u6301gzip",title:"\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u652f\u6301gzip",description:"",source:"@site/docs/LinuxBasics/Web-Servers/Nginx/Others/\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u652f\u6301gzip.md",sourceDirName:"LinuxBasics/Web-Servers/Nginx/Others",slug:"/LinuxBasics/Web-Servers/Nginx/Others/\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u652f\u6301gzip",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Others/\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u652f\u6301gzip",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Web-Servers/Nginx/Others/\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u652f\u6301gzip.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"nginx\u5229\u7528logrotate\u65e5\u5fd7\u5207\u5272",permalink:"/docs/LinuxBasics/Web-Servers/Nginx/Others/\u4f7f\u7528logrotate\u5207\u5272nginx\u65e5\u5fd7"},next:{title:"Problems",permalink:"/docs/category/problems"}},s={},p=[],u={toc:p};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -I -H \u2018Accept-Encoding: gzip,deflate\u2019 -H \u201cHost:\u57df\u540d\u201d  http://ip/url\n# \nContent-Encoding: gzip          # \u4e3b\u8981\u67e5\u770b\u8fd9\u4e2a\n")))}l.isMDXComponent=!0}}]);