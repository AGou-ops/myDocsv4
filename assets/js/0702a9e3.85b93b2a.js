"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[6690],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(y,s(s({ref:n},c),{},{components:t})):a.createElement(y,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},s="Django \u8fde\u63a5\u5916\u90e8\u6570\u636e\u5e93",l={unversionedId:"LinuxBasics/Web-Servers/Python-Django/Access to Database",id:"LinuxBasics/Web-Servers/Python-Django/Access to Database",title:"Django \u8fde\u63a5\u5916\u90e8\u6570\u636e\u5e93",description:"Mariadb\u3001MySQL",source:"@site/docs/LinuxBasics/Web-Servers/Python-Django/Access to Database.md",sourceDirName:"LinuxBasics/Web-Servers/Python-Django",slug:"/LinuxBasics/Web-Servers/Python-Django/Access to Database",permalink:"/docs/LinuxBasics/Web-Servers/Python-Django/Access to Database",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/Web-Servers/Python-Django/Access to Database.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"Python-Django",permalink:"/docs/category/python-django"},next:{title:"Django Basic",permalink:"/docs/LinuxBasics/Web-Servers/Python-Django/Django Basic"}},i={},p=[{value:"Mariadb\u3001MySQL",id:"mariadbmysql",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"django-\u8fde\u63a5\u5916\u90e8\u6570\u636e\u5e93"},"Django \u8fde\u63a5\u5916\u90e8\u6570\u636e\u5e93"),(0,r.kt)("h2",{id:"mariadbmysql"},"Mariadb\u3001MySQL"),(0,r.kt)("p",null,"1\u3001\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"pymsql"),"\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install pymysql\n")),(0,r.kt)("p",null,"2\u3001\u5728\u5f53\u524dapp\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"__init__.py"),"\u6587\u4ef6\u4e2d\u5f15\u5165\u8be5\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pymysql \npymysql.install_as_MySQLdb()\n")),(0,r.kt)("p",null,"3\u3001\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"settings.py"),"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# \u627e\u5230Database\u914d\u7f6e\u6bb5\uff0c \u53c2\u8003\u5982\u4e0b\u914d\u7f6e\n\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.mysql',\n        'NAME': 'test_application',\n        'USER': 'root',\n        'PASSWORD': '123',\n        'HOST': '172.12.0.2',\n        'PORT': '3306',\n    }\n}\n")),(0,r.kt)("p",null,"4\u3001\u7f16\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"models.py"),"\u6a21\u578b\u6587\u4ef6 "),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"pycharm"),"\u7684\u8bdd\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u4f7f\u7528\u6570\u636e\u5e93\u63d2\u4ef6\u8fdb\u884c\u6d4b\u8bd5\u8fde\u63a5\u6570\u636e\u5e93 \uff0c\u5982\u679c\u6ca1\u6709\u95ee\u9898\u7684\u8bdd\uff0c\u5c31\u53ef\u4ee5\u7ee7\u7eed\u4e0b\u9762\u7684\u64cd\u4f5c\u4e86\u3002\uff08\u53ef\u9009\uff09"),(0,r.kt)("p",null,"\u5728\u9879\u76eeapp\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"models.py"),"\u6a21\u578b\u6587\u4ef6\u4e2d\uff0c\u8f93\u5165\u4ee5\u4e0b\u6d4b\u8bd5\u5185\u5bb9\uff08\u8be5\u793a\u4f8b\u4ee3\u7801\u6765\u6e90\u4e8e\u5b98\u65b9\u7ad9\u70b9\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from django.db import models\n\n\nclass Question(models.Model):\n    question_text = models.CharField(max_length=200)\n    pub_date = models.DateTimeField('date published')\n\n\nclass Choice(models.Model):\n    question = models.ForeignKey(Question, on_delete=models.CASCADE)\n    choice_text = models.CharField(max_length=200)\n    votes = models.IntegerField(default=0)\n")),(0,r.kt)("p",null,"5\u3001\u8fdb\u884c\u6570\u636e\u8fc1\u79fb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5728\u7ec8\u7aef\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\npython manage.py makemigrations [\u6307\u5b9a\u7279\u5b9a\u7684APP\uff0c\u53ef\u65e0]       # \u68c0\u6d4b\u5bf9\u6a21\u578b\u6587\u4ef6\u7684\u4fee\u6539\uff0c\u5e76\u628a\u4fee\u6539\u7684\u90e8\u5206\u5b58\u50a8\u4e3a\u4e00\u6b21\u8fc1\u79fb\npython manage.py sqlmigrate test_application 0001   # \u67e5\u770b\u6a21\u578b\u6587\u4ef6\u751f\u6210\u7684sql\u8bed\u53e5\npython manage.py migrate        # \u5728\u6570\u636e\u5e93\u91cc\u521b\u5efa\u65b0\u5b9a\u4e49\u7684\u6a21\u578b\u7684\u6570\u636e\u8868\n")),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u7b80\u5355\u7684\u8fde\u63a5\u81f3",(0,r.kt)("inlineCode",{parentName:"p"},"Mairadb/mysql"),"\u6570\u636e\u5e93\u5c31\u5b8c\u6210\u4e86\u3002"))}u.isMDXComponent=!0}}]);