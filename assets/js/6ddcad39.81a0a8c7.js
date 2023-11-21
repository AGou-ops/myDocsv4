"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[2100],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),f=n,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return t?a.createElement(d,l(l({ref:r},u),{},{components:t})):a.createElement(d,l({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38360:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const i={},l="Terraform \u53d8\u91cf",o={unversionedId:"LinuxBasics/Terraform/Terraform Variable",id:"LinuxBasics/Terraform/Terraform Variable",title:"Terraform \u53d8\u91cf",description:"Input Vars(\u8f93\u5165\u53d8\u91cf)",source:"@site/docs/LinuxBasics/Terraform/Terraform Variable.md",sourceDirName:"LinuxBasics/Terraform",slug:"/LinuxBasics/Terraform/Terraform Variable",permalink:"/docs/LinuxBasics/Terraform/Terraform Variable",draft:!1,editUrl:"https://github.com/AGou-ops/myDocsv4/edit/main/docs/LinuxBasics/Terraform/Terraform Variable.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Terraform \u793a\u4f8b",permalink:"/docs/LinuxBasics/Terraform/Terraform Examples"},next:{title:"Web-Servers",permalink:"/docs/category/web-servers"}},p={},s=[{value:"Input Vars(\u8f93\u5165\u53d8\u91cf)",id:"input-vars\u8f93\u5165\u53d8\u91cf",level:2},{value:"\u4ece\u6587\u4ef6\u8bfb\u53d6",id:"\u4ece\u6587\u4ef6\u8bfb\u53d6",level:3},{value:"\u4ece\u547d\u4ee4\u884c\u4f20\u9012",id:"\u4ece\u547d\u4ee4\u884c\u4f20\u9012",level:3},{value:"\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u8bfb\u5165",id:"\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u8bfb\u5165",level:3},{value:"\u4ececli\u8fd0\u884c\u65f6\u8bfb\u5165",id:"\u4ececli\u8fd0\u884c\u65f6\u8bfb\u5165",level:3},{value:"\u5bcc\u6570\u636e\u7c7b\u578b\u53d8\u91cf",id:"\u5bcc\u6570\u636e\u7c7b\u578b\u53d8\u91cf",level:3},{value:"Query Data with Output Vars",id:"query-data-with-output-vars",level:2},{value:"\u5b9a\u4e49\u8f93\u51fa",id:"\u5b9a\u4e49\u8f93\u51fa",level:3}],u={toc:s};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terraform-\u53d8\u91cf"},"Terraform \u53d8\u91cf"),(0,n.kt)("h2",{id:"input-vars\u8f93\u5165\u53d8\u91cf"},"Input Vars(\u8f93\u5165\u53d8\u91cf)"),(0,n.kt)("p",null,"\u5982\u679c\u53d8\u91cf\u4e3a\u88ab\u5b9a\u4e49, \u5219\u4f1a\u8bfb\u53d6",(0,n.kt)("inlineCode",{parentName:"p"},"default"),"\u952e\u7684\u503c\u4f5c\u4e3a\u9ed8\u8ba4\u53d8\u91cf\u503c."),(0,n.kt)("h3",{id:"\u4ece\u6587\u4ef6\u8bfb\u53d6"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),(0,n.kt)("p",null,"\u521b\u5efa\u6587\u4ef6, \u540d\u79f0\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),", \u793a\u4f8b\u5185\u5bb9\u5982\u4e0b\u6240\u793a:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'region = "us-west-2"\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Terraform"),"\u4f1a\u81ea\u52a8\u8bfb\u5165\u8be5\u6587\u4ef6, \u6b64\u5916\u8fd8\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"*.auto.tfvars"),"\u4e3a\u540d\u7684\u6587\u4ef6\u4e5f\u4f1a\u88ab\u81ea\u52a8\u8bfb\u53d6."),(0,n.kt)("p",null,"\u82e5\u8981\u6307\u5b9a\u8bfb\u53d6\u7684\u6587\u4ef6, \u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply -var-file <TF_VAR_FILE>"),"\u6307\u5b9a\u6240\u8981\u4f7f\u7528\u7684\u53d8\u91cf\u6587\u4ef6."),(0,n.kt)("h3",{id:"\u4ece\u547d\u4ee4\u884c\u4f20\u9012"},"\u4ece\u547d\u4ee4\u884c\u4f20\u9012"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform apply -var 'region=us-west-2'\n")),(0,n.kt)("h3",{id:"\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u8bfb\u5165"},"\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u8bfb\u5165"),(0,n.kt)("p",null,"\u5b9a\u4e49\u7cfb\u7edf\u73af\u5883\u53d8\u91cf, \u4ee5",(0,n.kt)("inlineCode",{parentName:"p"},"TF_VAR_"),"\u5f00\u5934, \u6bd4\u5982:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export TF_VAR_region=us-west-2\n")),(0,n.kt)("h3",{id:"\u4ececli\u8fd0\u884c\u65f6\u8bfb\u5165"},"\u4ececli\u8fd0\u884c\u65f6\u8bfb\u5165"),(0,n.kt)("p",null,"\u5f53\u53d8\u91cf\u672a\u8d4b\u4e88\u9ed8\u8ba4\u503c\u5e76\u672a\u6307\u5b9a\u5176\u503c\u65f6, \u8fd0\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply"),"\u65f6\u4f1a\u63d0\u793a\u8f93\u5165\u53d8\u91cf."),(0,n.kt)("h3",{id:"\u5bcc\u6570\u636e\u7c7b\u578b\u53d8\u91cf"},"\u5bcc\u6570\u636e\u7c7b\u578b\u53d8\u91cf"),(0,n.kt)("p",null,"\u5bcc\u6570\u636e\u7c7b\u578b\u5305\u62ec",(0,n.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Maps"),", \u5982\u4e0b\u6240\u793a:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Lists\nvariable "cidrs" { \n  type = list \n  default = []\n}\n\n# Maps\nvariable "amis" {\n  type = "map"\n  default = {\n    "us-east-1" = "ami-b374d5a5"\n    "us-west-2" = "ami-fc0b939c"\n  }\n}\n# \u5f15\u7528\nresource "aws_instance" "example" {\n  ami           = var.amis[var.region]\n  instance_type = "t2.micro"\n}\n')),(0,n.kt)("h2",{id:"query-data-with-output-vars"},"Query Data with Output Vars"),(0,n.kt)("h3",{id:"\u5b9a\u4e49\u8f93\u51fa"},"\u5b9a\u4e49\u8f93\u51fa"),(0,n.kt)("p",null,"\u521b\u5efa\u8f93\u51fa\u6587\u4ef6",(0,n.kt)("inlineCode",{parentName:"p"},"outputest.tf"),", \u793a\u4f8b\u5185\u5bb9\u5982\u4e0b\u6240\u793a:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'output "ip" {\n  value = aws_eip.ip.public_ip\n}\n')),(0,n.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"terraform output ip"),"\u4e5f\u53ef\u4ee5\u83b7\u5f97\u6240\u9700\u7684\u8f93\u51fa\u53d8\u91cf."))}c.isMDXComponent=!0}}]);