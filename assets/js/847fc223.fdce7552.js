"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6663],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={},s=void 0,a={unversionedId:"Scripts/windows/\u901a\u7528\u4fee\u6539dns",id:"Scripts/windows/\u901a\u7528\u4fee\u6539dns",title:"\u901a\u7528\u4fee\u6539dns",description:"",source:"@site/docs/Scripts/windows/\u901a\u7528\u4fee\u6539dns.md",sourceDirName:"Scripts/windows",slug:"/Scripts/windows/\u901a\u7528\u4fee\u6539dns",permalink:"/docs/Scripts/windows/\u901a\u7528\u4fee\u6539dns",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Scripts/windows/\u901a\u7528\u4fee\u6539dns.md",tags:[],version:"current",frontMatter:{},sidebar:"scripts",previous:{title:"windows",permalink:"/docs/category/windows"},next:{title:"Scripts.",permalink:"/docs/Scripts/"}},c={},d=[],p={toc:d};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bat"},'@echo off\n\nsysteminfo\n\nif "%OS \u540d\u79f0%"=="%7%" goto windows7\n:windows7\necho \u6b63\u5728\u8bbe\u7f6e\u672c\u673a\u4e3bDNS ,\u8bf7\u7a0d\u7b49\u2026\u2026\nnetsh interface ip set dns name="\u672c\u5730\u8fde\u63a5" source=static addr=114.114.114.114 register=PRIMARY\necho \u6b63\u5728\u8bbe\u7f6e\u672c\u673a\u5907\u7528DNS ,\u8bf7\u7a0d\u7b49\u2026\u2026\nnetsh interface ip add dns name="\u672c\u5730\u8fde\u63a5" addr=223.5.5.5 index=2\n\n\nif "%OS \u540d\u79f0%"=="%10%" goto windows10\n\n:windows10\n:: BatchGotAdmin\n:-------------------------------------\nREM --\x3e Check for permissions\n>nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system"\nREM --\x3e If error flag set, we do not have admin.\nif \'%errorlevel%\' NEQ \'0\' (\necho Requesting administrative privileges...\ngoto UACPrompt\n) else ( goto gotAdmin )\n:UACPrompt\necho Set UAC = CreateObject^("Shell.Application"^) > "%temp%\\getadmin.vbs"\necho UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\\getadmin.vbs"\n"%temp%\\getadmin.vbs"\nexit /B\n:gotAdmin\nif exist "%temp%\\getadmin.vbs" ( del "%temp%\\getadmin.vbs" )\npushd "%CD%"\nCD /D "%~dp0"\n:--------------------------------------\n\necho \u6b63\u5728\u8bbe\u7f6e\u672c\u673a\u4e3bDNS ,\u8bf7\u7a0d\u7b49\u2026\u2026\nnetsh interface ip set dns name="\u4ee5\u592a\u7f51" source=static addr=114.114.114.114 register=PRIMARY\necho \u6b63\u5728\u8bbe\u7f6e\u672c\u673a\u5907\u7528DNS ,\u8bf7\u7a0d\u7b49\u2026\u2026\nnetsh interface ip add dns name="\u4ee5\u592a\u7f51" addr=223.5.5.5 index=2\necho \u8bbe\u7f6e\u5b8c\u6210!\nexit\n')))}l.isMDXComponent=!0}}]);