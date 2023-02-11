"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Logstash \u65e5\u5fd7\u5206\u6d41",s={unversionedId:"CloudNative/ELFK/Logstash \u65e5\u5fd7\u5206\u6d41",id:"CloudNative/ELFK/Logstash \u65e5\u5fd7\u5206\u6d41",title:"Logstash \u65e5\u5fd7\u5206\u6d41",description:"",source:"@site/docs/CloudNative/ELFK/Logstash \u65e5\u5fd7\u5206\u6d41.md",sourceDirName:"CloudNative/ELFK",slug:"/CloudNative/ELFK/Logstash \u65e5\u5fd7\u5206\u6d41",permalink:"/docs/CloudNative/ELFK/Logstash \u65e5\u5fd7\u5206\u6d41",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CloudNative/ELFK/Logstash \u65e5\u5fd7\u5206\u6d41.md",tags:[],version:"current",frontMatter:{},sidebar:"cloudNative",previous:{title:"Logstash Basic & Plugins",permalink:"/docs/CloudNative/ELFK/Logstash Basic - Plugins"},next:{title:"TCP + ELK \u65e5\u5fd7\u6536\u96c6",permalink:"/docs/CloudNative/ELFK/TCP-ELK\u65e5\u5fd7\u6536\u96c6"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logstash-\u65e5\u5fd7\u5206\u6d41"},"Logstash \u65e5\u5fd7\u5206\u6d41"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'1.\u914d\u7f6elogstash\n[root@elkstack-1 ~]\\# vim /data/elk/logstash/conf.d/nginx_tomcat.conf \ninput {\n    file {\n        path => "/var/log/test/nginx.log"\n        add_field => {\n            "app" => "nginx"                #\u641c\u96c6nginx\u7684\u65e5\u5fd7\uff0c\u5728\u65e5\u5fd7\u4e2d\u589e\u52a0\u4e00\u4e2aapp=nginx\u7684\u5b57\u6bb5\n        }\n    }\n    file {\n        path => "/var/log/test/tomcat.log"\n        add_field => {\n            "app" => "tomcat"\n        }\n    }\n}\n\nfilter {\n    if [app] in ["nginx","tengine"] {           #\u5224\u65adapp\u7684\u5b57\u6bb5\u503c\u4e3anginx\u6216\u8005tengine\n        mutate {                        #\u5b9a\u4e49mutate\n            add_field => {                  #\u589e\u52a0\u4e00\u4e2a\u5b57\u6bb5\n                "[@metadata][target_index]" => "nginx-app-%{+YYYY.MM.dd}"       #\u58f0\u660e\u5b57\u6bb5\u662f\u5143\u6570\u636e\uff0c\u5b57\u6bb5\u540d\u4e3atarget_index\uff0c\u503c\u4e3anginx\u65e5\u5fd7\u5b58\u50a8\u7684\u7d22\u5f15\u5e93\u540d\u79f0\n            }\n        }\n    }\n    else if [app] == "tomcat" {                 #\u5224\u65adapp\u7684\u5b57\u6bb5\u503c\u4e3atomcat\n        mutate {                        #\u5b9a\u4e49mutate\n            add_field => {                  #\u589e\u52a0\u4e00\u4e2a\u5b57\u6bb5\n                "[@metadata][target_index]" => "tomcat-app-%{+YYYY.MM.dd}"      #\u58f0\u660e\u5b57\u6bb5\u662f\u5143\u6570\u636e\uff0c\u5b57\u6bb5\u540d\u4e3atarget_index\uff0c\u503c\u4e3atomcat\u65e5\u5fd7\u5b58\u50a8\u7684\u7d22\u5f15\u5e93\u540d\u79f0\n            }\n        }\n    }   \n    else {                      #\u5982\u679c\u6240\u6709\u6761\u4ef6\u90fd\u4e0d\u6ee1\u8db3\uff0c\u90a3\u4e48\u5c31\u5b58\u50a8\u5230\u4e0b\u9762\u7684\u8fd9\u4e2a\u7d22\u5f15\u5e93\n        mutate {\n            add_field => {\n                "[@metadata][target_index]" => "unknown-app-%{+YYYY.MM.dd}"         #\u503c\u4e3aunknown\n            }\n        }\n    }\n}\n\noutput {\n    elasticsearch {\n        hosts => ["192.168.20.11:9200","192.168.20.12:9200","192.168.20.13:9200"]\n        index =>  "%{[@metadata][target_index]}"        #\u5f15\u7528\u5143\u6570\u636etarget_index\uff0c\u5c06\u5bf9\u5e94\u7684\u65e5\u5fd7\u5b58\u50a8\u5230\u5bf9\u5e94\u7684\u7d22\u5f15\u5e93\u4e2d\n    }\n}\n\n2.\u91cd\u542flogstash\n[root@elkstack-1 conf.d]\\# systemctl restart logstash\n')))}d.isMDXComponent=!0}}]);