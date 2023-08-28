"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[7940],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={},i=void 0,u={unversionedId:"ProgramLang/Lua/Lua continue Ex",id:"ProgramLang/Lua/Lua continue Ex",title:"Lua continue Ex",description:"Lua continue \u529f\u80fd\u5b9e\u73b0\u65b9\u6cd5\uff1a",source:"@site/docs/ProgramLang/Lua/Lua continue Ex.md",sourceDirName:"ProgramLang/Lua",slug:"/ProgramLang/Lua/Lua continue Ex",permalink:"/docs/ProgramLang/Lua/Lua continue Ex",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/ProgramLang/Lua/Lua continue Ex.md",tags:[],version:"current",frontMatter:{},sidebar:"programLang",previous:{title:"Lua Basic",permalink:"/docs/ProgramLang/Lua/Lua Baisc"}},c={},l=[],p={toc:l};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Lua continue \u529f\u80fd\u5b9e\u73b0\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- \u65b9\u6cd5\u4e00\n-- prints odd numbers in [|1,10|]\nfor i=1,10 do\n  if i % 2 == 0 then goto continue end\n  print(i)\n  ::continue::\nend\n\n-- \u65b9\u6cd5\u4e8c\nfor idx = 1, 5 do\n    repeat\n        print(1)\n        print(2)\n        print(3)\n        do break end -- goes to next iteration of for\n        -- or: if idx>3 then;print("continue");break;end\n        print(4)\n        print(5)\n    until true\nend\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ud83d\udd17 \u53c2\u8003\u94fe\u63a5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://lua-users.org/wiki/ContinueProposal"},"http://lua-users.org/wiki/ContinueProposal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3524970/why-does-lua-have-no-continue-statement"},"https://stackoverflow.com/questions/3524970/why-does-lua-have-no-continue-statement"))))}s.isMDXComponent=!0}}]);