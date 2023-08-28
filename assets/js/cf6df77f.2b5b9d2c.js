"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2664],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>O});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),O=i,d=u["".concat(s,".").concat(O)]||u[O]||m[O]||a;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function O(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33670:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const a={},o=void 0,c={unversionedId:"Scripts/shell/Dokcer \u955c\u50cf\u5907\u4efd",id:"Scripts/shell/Dokcer \u955c\u50cf\u5907\u4efd",title:"Dokcer \u955c\u50cf\u5907\u4efd",description:"",source:"@site/docs/Scripts/shell/Dokcer \u955c\u50cf\u5907\u4efd.md",sourceDirName:"Scripts/shell",slug:"/Scripts/shell/Dokcer \u955c\u50cf\u5907\u4efd",permalink:"/docs/Scripts/shell/Dokcer \u955c\u50cf\u5907\u4efd",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/Scripts/shell/Dokcer \u955c\u50cf\u5907\u4efd.md",tags:[],version:"current",frontMatter:{},sidebar:"scripts",previous:{title:"CentOS \u7cfb\u7edf\u4fe1\u606f\u7edf\u8ba1",permalink:"/docs/Scripts/shell/CentOS sys information"},next:{title:"Nginx\u65e5\u5fd7\u5206\u6790",permalink:"/docs/Scripts/shell/Nginx Log Check"}},s={},l=[],p={toc:l};function m(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\nGREEN_COLOR='\\e[032m'   #\u7eff     \nRED_COLOR='\\e[031m'     #\u7ea2\nYELLOW_COLOR='\\e[033m'  #\u9ec4\nBLACK_COLOR='\\e[0m'     #\u9ed1\ndeclare image_id=(`docker images | grep -Ev '^k8s|^harbor|^rancher' | tail -20 |  awk '{print $3}'`)\ndeclare image_name=(`docker images | grep -Ev '^k8s|^harbor|^rancher' | tail -20 |  awk '{print $1}' | awk -F/ '{print $NF}'`)\ndeclare image_version=(`docker images | grep -Ev '^k8s|^harbor|^rancher' | tail -20 | awk '{print $2}'`)\ndeclare image_nameqc=(`docker images | grep -Ev '^k8s|^harbor|^rancher' | tail -20 |  awk '{print $1}'`)\n\n\nfor i in ${!image_id[@]}\ndo\n        docker save ${image_id[i]} > ${image_name[i]}_${image_version[i]}.tar.gz\n        if [ $? -eq 0 ];then\n                echo -e \"${YELLOW_COLOR}${image_id[i]} ${BLACK_COLOR} in ${YELLOW_COLOR} ${image_nameqc[i]} ${BLACK_COLOR} =====> ${GREEN_COLOR}back finish!!!${BLACK_COLOR} =====> back file is ${RED_COLOR} ${image_name[i]}_${image_version[i]}.tar.gz ${BLACK_COLOR}\"\n                echo \"\"\n        fi\ndone\n")))}m.isMDXComponent=!0}}]);