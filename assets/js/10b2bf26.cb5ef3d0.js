"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2252],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),c=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},g=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,g=m(t,["components","mdxType","originalType","parentName"]),d=c(a),N=n,o=d["".concat(i,".").concat(N)]||d[N]||k[N]||l;return a?r.createElement(o,p(p({ref:e},g),{},{components:a})):r.createElement(o,p({ref:e},g))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=d;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m.mdxType="string"==typeof t?t:n,p[1]=m;for(var c=2;c<l;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72385:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},p="Golang fmt\u5360\u4f4d\u7b26",m={unversionedId:"ProgramLang/Golang/Golang fmt\u5360\u4f4d\u7b26",id:"ProgramLang/Golang/Golang fmt\u5360\u4f4d\u7b26",title:"Golang fmt\u5360\u4f4d\u7b26",description:"golang \u7684fmt \u5305\u5b9e\u73b0\u4e86\u683c\u5f0f\u5316I/O\u51fd\u6570\uff0c\u7c7b\u4f3c\u4e8eC\u7684 printf \u548c scanf\u3002",source:"@site/docs/ProgramLang/Golang/Golang fmt\u5360\u4f4d\u7b26.md",sourceDirName:"ProgramLang/Golang",slug:"/ProgramLang/Golang/Golang fmt\u5360\u4f4d\u7b26",permalink:"/docs/ProgramLang/Golang/Golang fmt\u5360\u4f4d\u7b26",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/ProgramLang/Golang/Golang fmt\u5360\u4f4d\u7b26.md",tags:[],version:"current",frontMatter:{},sidebar:"programLang",previous:{title:"Golang \u6d4b\u8bd5",permalink:"/docs/ProgramLang/Golang/Golang Testing"},next:{title:"Golang \u5e76\u53d1",permalink:"/docs/ProgramLang/Golang/Golang \u5e76\u53d1"}},i={},c=[{value:"\u666e\u901a\u5360\u4f4d\u7b26",id:"\u666e\u901a\u5360\u4f4d\u7b26",level:2},{value:"\u5e03\u5c14\u5360\u4f4d\u7b26",id:"\u5e03\u5c14\u5360\u4f4d\u7b26",level:2},{value:"\u6574\u6570\u5360\u4f4d\u7b26",id:"\u6574\u6570\u5360\u4f4d\u7b26",level:2},{value:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\uff08\u5b9e\u90e8\u548c\u865a\u90e8\uff09",id:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\u5b9e\u90e8\u548c\u865a\u90e8",level:2},{value:"\u5b57\u7b26\u4e32\u4e0e\u5b57\u8282\u5207\u7247",id:"\u5b57\u7b26\u4e32\u4e0e\u5b57\u8282\u5207\u7247",level:2},{value:"\u6307\u9488",id:"\u6307\u9488",level:2},{value:"\u5176\u5b83\u6807\u8bb0",id:"\u5176\u5b83\u6807\u8bb0",level:2}],g={toc:c};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"golang-fmt\u5360\u4f4d\u7b26"},"Golang fmt\u5360\u4f4d\u7b26"),(0,n.kt)("p",null,"golang \u7684fmt \u5305\u5b9e\u73b0\u4e86\u683c\u5f0f\u5316I/O\u51fd\u6570\uff0c\u7c7b\u4f3c\u4e8eC\u7684 printf \u548c scanf\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'// \u5b9a\u4e49\u793a\u4f8b\u7c7b\u578b\u548c\u53d8\u91cf\ntype Human struct {\n    Name string\n}\n\nvar people = Human{Name:"zhangsan"}\n')),(0,n.kt)("h2",{id:"\u666e\u901a\u5360\u4f4d\u7b26"},"\u666e\u901a\u5360\u4f4d\u7b26"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u4e3e\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u51fa"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%v"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u76f8\u5e94\u503c\u7684\u9ed8\u8ba4\u683c\u5f0f\u3002"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%v", people)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"{zhangsan}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%+v"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6253\u5370\u7ed3\u6784\u4f53\u65f6\uff0c\u4f1a\u6dfb\u52a0\u5b57\u6bb5\u540d"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%+v", people)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"{Name:zhangsan}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%#v"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u76f8\u5e94\u503c\u7684Go\u8bed\u6cd5\u8868\u793a"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("#v", people)'),(0,n.kt)("td",{parentName:"tr",align:"center"},'main.Human{Name:"zhangsan"}')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%T"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u76f8\u5e94\u503c\u7684\u7c7b\u578b\u7684Go\u8bed\u6cd5\u8868\u793a"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%T", people)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"main.Human")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%%"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5b57\u9762\u4e0a\u7684\u767e\u5206\u53f7\uff0c\u5e76\u975e\u503c\u7684\u5360\u4f4d\u7b26"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%%")'),(0,n.kt)("td",{parentName:"tr",align:"center"},"%")))),(0,n.kt)("h2",{id:"\u5e03\u5c14\u5360\u4f4d\u7b26"},"\u5e03\u5c14\u5360\u4f4d\u7b26"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u4e3e\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u51fa"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%t"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true \u6216 false\u3002"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%t", true)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,n.kt)("h2",{id:"\u6574\u6570\u5360\u4f4d\u7b26"},"\u6574\u6570\u5360\u4f4d\u7b26"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u4e3e\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u51fa"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e8c\u8fdb\u5236\u8868\u793a"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%b", 5)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"101")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u76f8\u5e94Unicode\u7801\u70b9\u6240\u8868\u793a\u7684\u5b57\u7b26"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%c", 0x4E2D)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e2d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%d"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5341\u8fdb\u5236\u8868\u793a"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%d", 0x12)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%o"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u516b\u8fdb\u5236\u8868\u793a"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%d", 10)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%q"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5355\u5f15\u53f7\u56f4\u7ed5\u7684\u5b57\u7b26\u5b57\u9762\u503c\uff0c\u7531Go\u8bed\u6cd5\u5b89\u5168\u5730\u8f6c\u4e49"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%q", 0x4E2D)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"'\u4e2d'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u5b57\u6bcd\u5f62\u5f0f\u4e3a\u5c0f\u5199 a-f"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%x", 13)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u5b57\u6bcd\u5f62\u5f0f\u4e3a\u5927\u5199 A-F"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%x", 13)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%U"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Unicode\u683c\u5f0f\uff1aU+1234\uff0c\u7b49\u540c\u4e8e "U+%04X"'),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%U", 0x4E2D)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"U+4E2D")))),(0,n.kt)("h2",{id:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\u5b9e\u90e8\u548c\u865a\u90e8"},"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\uff08\u5b9e\u90e8\u548c\u865a\u90e8\uff09"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u4e3e\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u51fa"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u5c0f\u6570\u90e8\u5206\u7684\uff0c\u6307\u6570\u4e3a\u4e8c\u7684\u5e42\u7684\u79d1\u5b66\u8ba1\u6570\u6cd5\uff0c\u4e0e strconv.FormatFloat \u7684 'b' \u8f6c\u6362\u683c\u5f0f\u4e00\u81f4\u3002\u4f8b\u5982 -123456p-78"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%e"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u79d1\u5b66\u8ba1\u6570\u6cd5\uff0c\u4f8b\u5982 -1234.456e+78"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%e", 10.2)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"1.020000e+01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%E"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u79d1\u5b66\u8ba1\u6570\u6cd5\uff0c\u4f8b\u5982 -1234.456E+78"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%e", 10.2)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"1.020000E+01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6709\u5c0f\u6570\u70b9\u800c\u65e0\u6307\u6570\uff0c\u4f8b\u5982 123.456"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%f", 10.2)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"10.200000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%g"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6839\u636e\u60c5\u51b5\u9009\u62e9 %e \u6216 %f \u4ee5\u4ea7\u751f\u66f4\u7d27\u51d1\u7684\uff08\u65e0\u672b\u5c3e\u76840\uff09\u8f93\u51fa"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%g", 10.20)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"10.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%G"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u6839\u636e\u60c5\u51b5\u9009\u62e9 %E \u6216 %f \u4ee5\u4ea7\u751f\u66f4\u7d27\u51d1\u7684\uff08\u65e0\u672b\u5c3e\u76840\uff09\u8f93\u51fa"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%G", 10.20+2i)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"(10.2+2i)")))),(0,n.kt)("h2",{id:"\u5b57\u7b26\u4e32\u4e0e\u5b57\u8282\u5207\u7247"},"\u5b57\u7b26\u4e32\u4e0e\u5b57\u8282\u5207\u7247"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u4e3e\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u51fa"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u8f93\u51fa\u5b57\u7b26\u4e32\u8868\u793a\uff08string\u7c7b\u578b\u6216[]byte)"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%s", []byte("Go\u8bed\u8a00"))'),(0,n.kt)("td",{parentName:"tr",align:"center"},"Go\u8bed\u8a00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%q"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u53cc\u5f15\u53f7\u56f4\u7ed5\u7684\u5b57\u7b26\u4e32\uff0c\u7531Go\u8bed\u6cd5\u5b89\u5168\u5730\u8f6c\u4e49"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%q", "Go\u8bed\u8a00")'),(0,n.kt)("td",{parentName:"tr",align:"center"},'"Go\u8bed\u8a00"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5341\u516d\u8fdb\u5236\uff0c\u5c0f\u5199\u5b57\u6bcd\uff0c\u6bcf\u5b57\u8282\u4e24\u4e2a\u5b57\u7b26"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%x", "golang")'),(0,n.kt)("td",{parentName:"tr",align:"center"},"676f6c616e67")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5341\u516d\u8fdb\u5236\uff0c\u5927\u5199\u5b57\u6bcd\uff0c\u6bcf\u5b57\u8282\u4e24\u4e2a\u5b57\u7b26"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%X", "golang")'),(0,n.kt)("td",{parentName:"tr",align:"center"},"676F6C616E67")))),(0,n.kt)("h2",{id:"\u6307\u9488"},"\u6307\u9488"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u4e3e\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u51fa"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"%p"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u524d\u7f00 0x"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%p", &people)'),(0,n.kt)("td",{parentName:"tr",align:"center"},"0x4f57f0")))),(0,n.kt)("h2",{id:"\u5176\u5b83\u6807\u8bb0"},"\u5176\u5b83\u6807\u8bb0"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u4e3e\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8f93\u51fa"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u603b\u6253\u5370\u6570\u503c\u7684\u6b63\u8d1f\u53f7\uff1b\u5bf9\u4e8e%q\uff08%+q\uff09\u4fdd\u8bc1\u53ea\u8f93\u51faASCII\u7f16\u7801\u7684\u5b57\u7b26\u3002"),(0,n.kt)("td",{parentName:"tr",align:"center"},'Printf("%+q", "\u4e2d\u6587")'),(0,n.kt)("td",{parentName:"tr",align:"center"},'"\\u4e2d\\u6587"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5728\u53f3\u4fa7\u800c\u975e\u5de6\u4fa7\u586b\u5145\u7a7a\u683c\uff08\u5de6\u5bf9\u9f50\u8be5\u533a\u57df\uff09"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"#"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u5907\u7528\u683c\u5f0f\uff1a\u4e3a\u516b\u8fdb\u5236\u6dfb\u52a0\u524d\u5bfc 0\uff08%#o\uff09"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Printf(\"%#U\", '\u4e2d')"),(0,n.kt)("td",{parentName:"tr",align:"center"},"U+4E2D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"' '"),(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u7a7a\u683c)\u4e3a\u6570\u503c\u4e2d\u7701\u7565\u7684\u6b63\u8d1f\u53f7\u7559\u51fa\u7a7a\u767d\uff08% d\uff09\uff1b\u4ee5\u5341\u516d\u8fdb\u5236\uff08% x, % X\uff09\u6253\u5370\u5b57\u7b26\u4e32\u6216\u5207\u7247\u65f6\uff0c\u5728\u5b57\u8282\u4e4b\u95f4\u7528\u7a7a\u683c\u9694\u5f00"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u586b\u5145\u524d\u5bfc\u76840\u800c\u975e\u7a7a\u683c\uff1b\u5bf9\u4e8e\u6570\u5b57\uff0c\u8fd9\u4f1a\u5c06\u586b\u5145\u79fb\u5230\u6b63\u8d1f\u53f7\u4e4b\u540e"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"golang\u6ca1\u6709 '%u' \u70b9\u4f4d\u7b26\uff0c\u82e5\u6574\u6570\u4e3a\u65e0\u7b26\u53f7\u7c7b\u578b\uff0c\u9ed8\u8ba4\u5c31\u4f1a\u88ab\u6253\u5370\u6210\u65e0\u7b26\u53f7\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5bbd\u5ea6\u4e0e\u7cbe\u5ea6\u7684\u63a7\u5236\u683c\u5f0f\u4ee5Unicode\u7801\u70b9\u4e3a\u5355\u4f4d\u3002\u5bbd\u5ea6\u4e3a\u8be5\u6570\u503c\u5360\u7528\u533a\u57df\u7684\u6700\u5c0f\u5bbd\u5ea6\uff1b\u7cbe\u5ea6\u4e3a\u5c0f\u6570\u70b9\u4e4b\u540e\u7684\u4f4d\u6570\u3002\n\u64cd\u4f5c\u6570\u7684\u7c7b\u578b\u4e3aint\u65f6\uff0c\u5bbd\u5ea6\u4e0e\u7cbe\u5ea6\u90fd\u53ef\u7528\u5b57\u7b26 '*' \u8868\u793a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e %g/%G \u800c\u8a00\uff0c\u7cbe\u5ea6\u4e3a\u6240\u6709\u6570\u5b57\u7684\u603b\u6570\uff0c\u4f8b\u5982\uff1a123.45\uff0c%.4g \u4f1a\u6253\u5370123.5\uff0c\uff08\u800c %6.2f \u4f1a\u6253\u5370123.45\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"%e \u548c %f \u7684\u9ed8\u8ba4\u7cbe\u5ea6\u4e3a6"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u5927\u591a\u6570\u7684\u6570\u503c\u7c7b\u578b\u800c\u8a00\uff0c\u5bbd\u5ea6\u4e3a\u8f93\u51fa\u7684\u6700\u5c0f\u5b57\u7b26\u6570\uff0c\u5982\u679c\u5fc5\u8981\u7684\u8bdd\u4f1a\u4e3a\u5df2\u683c\u5f0f\u5316\u7684\u5f62\u5f0f\u586b\u5145\u7a7a\u683c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u800c\u4ee5\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u7cbe\u5ea6\u4e3a\u8f93\u51fa\u7684\u6700\u5927\u5b57\u7b26\u6570\uff0c\u5982\u679c\u5fc5\u8981\u7684\u8bdd\u4f1a\u76f4\u63a5\u622a\u65ad\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8be5\u6587\u7ae0\u4e3a\u8f6c\u8f7d\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/qing123/articles/4353353.html"},"https://www.cnblogs.com/qing123/articles/4353353.html"))))}k.isMDXComponent=!0}}]);