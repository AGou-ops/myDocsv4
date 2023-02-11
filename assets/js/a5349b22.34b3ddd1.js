"use strict";(self.webpackChunkmy_docsv_4=self.webpackChunkmy_docsv_4||[]).push([[9471],{3905:(n,o,e)=>{e.d(o,{Zo:()=>i,kt:()=>d});var t=e(67294);function a(n,o,e){return o in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function r(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),e.push.apply(e,t)}return e}function p(n){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?r(Object(e),!0).forEach((function(o){a(n,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))}))}return n}function l(n,o){if(null==n)return{};var e,t,a=function(n,o){if(null==n)return{};var e,t,a={},r=Object.keys(n);for(t=0;t<r.length;t++)e=r[t],o.indexOf(e)>=0||(a[e]=n[e]);return a}(n,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)e=r[t],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var s=t.createContext({}),m=function(n){var o=t.useContext(s),e=o;return n&&(e="function"==typeof n?n(o):p(p({},o),n)),e},i=function(n){var o=m(n.components);return t.createElement(s.Provider,{value:o},n.children)},c={inlineCode:"code",wrapper:function(n){var o=n.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(n,o){var e=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,i=l(n,["components","mdxType","originalType","parentName"]),u=m(e),d=a,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return e?t.createElement(g,p(p({ref:o},i),{},{components:e})):t.createElement(g,p({ref:o},i))}));function d(n,o){var e=arguments,a=o&&o.mdxType;if("string"==typeof n||a){var r=e.length,p=new Array(r);p[0]=u;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=n,l.mdxType="string"==typeof n?n:a,p[1]=l;for(var m=2;m<r;m++)p[m]=e[m];return t.createElement.apply(null,p)}return t.createElement.apply(null,e)}u.displayName="MDXCreateElement"},94527:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var t=e(87462),a=(e(67294),e(3905));const r={},p="MongoDB \u6570\u636e\u5907\u4efd\u548c\u8fd8\u539f",l={unversionedId:"LinuxBasics/DataBases/MongoDB/MongoDB Backup",id:"LinuxBasics/DataBases/MongoDB/MongoDB Backup",title:"MongoDB \u6570\u636e\u5907\u4efd\u548c\u8fd8\u539f",description:"MongoDB\u6570\u636e\u5907\u4efd\uff08\u6062\u590d\uff09\u7684\u51e0\u79cd\u65b9\u5f0f\u6216\u5de5\u5177\uff1a",source:"@site/docs/LinuxBasics/DataBases/MongoDB/MongoDB Backup.md",sourceDirName:"LinuxBasics/DataBases/MongoDB",slug:"/LinuxBasics/DataBases/MongoDB/MongoDB Backup",permalink:"/docs/LinuxBasics/DataBases/MongoDB/MongoDB Backup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LinuxBasics/DataBases/MongoDB/MongoDB Backup.md",tags:[],version:"current",frontMatter:{},sidebar:"linuxBasics",previous:{title:"MongoDB",permalink:"/docs/category/mongodb"},next:{title:"MongoDB Basic",permalink:"/docs/LinuxBasics/DataBases/MongoDB/MongoDB Basic"}},s={},m=[{value:"mongodbexport\u3001mongoimport",id:"mongodbexportmongoimport",level:2},{value:"mongodbexport",id:"mongodbexport",level:3},{value:"mongoimport",id:"mongoimport",level:3},{value:"mongodump\u3001mongorestore",id:"mongodumpmongorestore",level:2},{value:"mongodump",id:"mongodump",level:3},{value:"mongorestore",id:"mongorestore",level:3},{value:"\u76f4\u63a5\u62f7\u8d1d\u6216\u5feb\u7167\u6570\u636e\u6587\u4ef6",id:"\u76f4\u63a5\u62f7\u8d1d\u6216\u5feb\u7167\u6570\u636e\u6587\u4ef6",level:2},{value:"\u62f7\u8d1d\u6570\u636e\u6587\u4ef6",id:"\u62f7\u8d1d\u6570\u636e\u6587\u4ef6",level:3},{value:"\u4f7f\u7528\u7cfb\u7edf\u5feb\u7167\u5907\u4efd",id:"\u4f7f\u7528\u7cfb\u7edf\u5feb\u7167\u5907\u4efd",level:3},{value:"\u9644\u5f55\uff1a\u5b9a\u671f\u5907\u4efd\u811a\u672c",id:"\u9644\u5f55\u5b9a\u671f\u5907\u4efd\u811a\u672c",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],i={toc:m};function c(n){let{components:o,...e}=n;return(0,a.kt)("wrapper",(0,t.Z)({},i,e,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb-\u6570\u636e\u5907\u4efd\u548c\u8fd8\u539f"},"MongoDB \u6570\u636e\u5907\u4efd\u548c\u8fd8\u539f"),(0,a.kt)("p",null,"MongoDB\u6570\u636e\u5907\u4efd\uff08\u6062\u590d\uff09\u7684\u51e0\u79cd\u65b9\u5f0f\u6216\u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mongoexport\u3001mongoimport\uff1a\u5907\u4efd\u5bfc\u51fa\u683c\u5f0f\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"JSON"),"\u683c\u5f0f\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"li"},"CSV"),"\u683c\u5f0f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"mongodump\u3001mongorestore\uff1a\u5907\u4efd\u5bfc\u51fa\u683c\u5f0f\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"BSON"),"\u683c\u5f0f\uff1b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"JSON\u53ef\u8bfb\u6027\u5f3a\u4f46\u4f53\u79ef\u8f83\u5927\uff0cBSON\u5219\u662f\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4f53\u79ef\u5c0f\u4f46\u5bf9\u4eba\u7c7b\u51e0\u4e4e\u6ca1\u6709\u53ef\u8bfb\u6027\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Back Up with Filesystem Snapshots"),(0,a.kt)("li",{parentName:"ul"},"Back Up with cp or rsync")),(0,a.kt)("h2",{id:"mongodbexportmongoimport"},"mongodbexport\u3001mongoimport"),(0,a.kt)("h3",{id:"mongodbexport"},"mongodbexport"),(0,a.kt)("p",null,"Mongodb\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"mongoexport"),"\u5de5\u5177\u53ef\u4ee5\u628a\u4e00\u4e2acollection\u5bfc\u51fa\u6210JSON\u683c\u5f0f\u6216CSV\u683c\u5f0f\u7684\u6587\u4ef6\u3002\n\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u6307\u5b9a\u5bfc\u51fa\u7684\u6570\u636e\u9879\uff0c\u4e5f\u53ef\u4ee5\u6839\u636e\u6307\u5b9a\u7684\u6761\u4ef6\u5bfc\u51fa\u6570\u636e\u3002\n\uff081\uff09\u7248\u672c\u5dee\u5f02\u8f83\u5927\n\uff082\uff09\u5f02\u6784\u5e73\u53f0\u6570\u636e\u8fc1\u79fb"),(0,a.kt)("p",null,"mongoexport\u5177\u4f53\u7528\u6cd5\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"$ mongoexport --help  \n* \u53c2\u6570\u8bf4\u660e\uff1a\n-h:\u6307\u660e\u6570\u636e\u5e93\u5bbf\u4e3b\u673a\u7684IP\n-u:\u6307\u660e\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\n-p:\u6307\u660e\u6570\u636e\u5e93\u7684\u5bc6\u7801\n-d:\u6307\u660e\u6570\u636e\u5e93\u7684\u540d\u5b57\n-c:\u6307\u660ecollection\u7684\u540d\u5b57\n-f:\u6307\u660e\u8981\u5bfc\u51fa\u90a3\u4e9b\u5217\n-o:\u6307\u660e\u5230\u8981\u5bfc\u51fa\u7684\u6587\u4ef6\u540d\n-q:\u6307\u660e\u5bfc\u51fa\u6570\u636e\u7684\u8fc7\u6ee4\u6761\u4ef6\n--authenticationDatabase admin\n")),(0,a.kt)("p",null,"\u5907\u4efdapp\u5e93\u4e0b\u7684vast\u96c6\u5408\n\u521b\u5efa\u96c6\u5408\u5e76\u63d2\u5165\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'admin> use app\nswitched to db app\n\napp> for(i=0;i<200;i++){ db.vast.insert({"id":i,"name":"test","age":70,"date":new Date()}); }\napp> db.vast.find()\nmongoexport --port 28018 -d app -c vast  -o /mongodb/vast.json\n')),(0,a.kt)("p",null,"\u6ce8\uff1a\u5907\u4efd\u6587\u4ef6\u7684\u540d\u5b57\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u9ed8\u8ba4\u5bfc\u51fa\u4e86JSON\u683c\u5f0f\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u5bfc\u51faCSV\u683c\u5f0f\u7684\u6570\u636e\uff0c\u5219\u9700\u8981\u4f7f\u7528\u2014-type=csv\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"$ mongoexport --port 28018 -d app -c vast --type=csv -f id,name,age,date  -o /mongodb/vast.csv\n")),(0,a.kt)("h3",{id:"mongoimport"},"mongoimport"),(0,a.kt)("p",null,"Mongodb\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"mongoimport"),"\u5de5\u5177\u53ef\u4ee5\u628a\u4e00\u4e2a\u7279\u5b9a\u683c\u5f0f\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u5bfc\u5165\u5230\u6307\u5b9a\u7684collection\u4e2d\u3002\u8be5\u5de5\u5177\u53ef\u4ee5\u5bfc\u5165JSON\u683c\u5f0f\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u5bfc\u5165CSV\u683c\u5f0f\u6570\u636e\u3002\u5177\u4f53\u4f7f\u7528\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"$ mongoimport --help\n\xd7 \u53c2\u6570\u8bf4\u660e\uff1a\n-h:\u6307\u660e\u6570\u636e\u5e93\u5bbf\u4e3b\u673a\u7684IP\n-u:\u6307\u660e\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\n-p:\u6307\u660e\u6570\u636e\u5e93\u7684\u5bc6\u7801\n-d:\u6307\u660e\u6570\u636e\u5e93\u7684\u540d\u5b57\n-c:\u6307\u660ecollection\u7684\u540d\u5b57\n-f:\u6307\u660e\u8981\u5bfc\u5165\u90a3\u4e9b\u5217\n-j, --numInsertionWorkers=<number>  number of insert operations to run concurrently                                                  (defaults to 1)\n//\u5e76\u884c\n")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a\u5148\u5220\u9664vast\u4e2d\u7684\u6570\u636e\uff0c\u5e76\u9a8c\u8bc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"app> db.vast.remove({})\n")),(0,a.kt)("p",null,"\u7136\u540e\u518d\u5bfc\u5165\u4e0a\u9762\u5bfc\u51fa\u7684vasts.dat\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"mongoimport --port 28018 -d app  -c vast    /mongodb/vast.json\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u6f14\u793a\u7684\u662f\u5bfc\u5165JSON\u683c\u5f0f\u7684\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\uff0c\u5982\u679c\u8981\u5bfc\u5165CSV\u683c\u5f0f\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\uff0c\u5219\u9700\u8981\u901a\u8fc7\u2013type\u53c2\u6570\u6307\u5b9a\u5bfc\u5165\u683c\u5f0f\uff0c\u5177\u4f53\u5982\u4e0b\u6240\u793a\uff1a\n\u5148\u5220\u9664\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"app> db.vast.remove({})\n")),(0,a.kt)("p",null,"\u518d\u5bfc\u5165\u4e4b\u524d\u5bfc\u51fa\u7684vast.csv\u6587\u4ef6\n\u9519\u8bef\u7684\u6062\u590d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"mongoimport  --port 28018 -d app  -c vast --type=csv -f id,name,age,date  --file   /mongodb/vast.csv\n\u6216\nmongoimport  --port 28018   -d app  -c vast --type=csv --headerline --file  /mongodb/vast.csv\n\n\u63d0\u793a\uff1a--headerline:\u6307\u660e\u7b2c\u4e00\u884c\u662f\u5217\u540d\uff0c\u4e0d\u9700\u8981\u5bfc\u5165\u3002\n")),(0,a.kt)("h2",{id:"mongodumpmongorestore"},"mongodump\u3001mongorestore"),(0,a.kt)("p",null,"mongodump\u80fd\u591f\u5728Mongodb\u8fd0\u884c\u65f6\u8fdb\u884c\u5907\u4efd\uff0c\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u662f\u5bf9\u8fd0\u884c\u7684Mongodb\u505a\u67e5\u8be2\uff0c\u7136\u540e\u5c06\u6240\u6709\u67e5\u5230\u7684\u6587\u6863\u5199\u5165\u78c1\u76d8\u3002\u4f46\u662f\u5b58\u5728\u7684\u95ee\u9898\u65f6\u4f7f\u7528mongodump\u4ea7\u751f\u7684\u5907\u4efd\u4e0d\u4e00\u5b9a\u662f\u6570\u636e\u5e93\u7684\u5b9e\u65f6\u5feb\u7167\uff0c\u5982\u679c\u6211\u4eec\u5728\u5907\u4efd\u65f6\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u4e86\u5199\u5165\u64cd\u4f5c\uff0c\u5219\u5907\u4efd\u51fa\u6765\u7684\u6587\u4ef6\u53ef\u80fd\u4e0d\u5b8c\u5168\u548cMongodb\u5b9e\u65f6\u6570\u636e\u76f8\u7b49\u3002\u53e6\u5916\u5728\u5907\u4efd\u65f6\u53ef\u80fd\u4f1a\u5bf9\u5176\u5b83\u5ba2\u6237\u7aef\u6027\u80fd\u4ea7\u751f\u4e0d\u5229\u7684\u5f71\u54cd\u3002"),(0,a.kt)("h3",{id:"mongodump"},"mongodump"),(0,a.kt)("p",null,"\u547d\u4ee4\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"mongodump <options>\n\n--host <hostname><:port>, -h <hostname><:port>  # \u6307\u5b9a\u5907\u4efd\u7684\u4e3b\u673aip\u548c\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u503clocalhost:27017\n--port # \u6307\u5b9a\u7aef\u53e3\u53f7 \u9ed8\u8ba427017\n\n--username <username>, -u <username> # \u6307\u5b9a\u7528\u6237\u540d\n--password <password>, -p <password> # \u6307\u5b9a\u5bc6\u7801\n--authenticationDatabase <dbname> # \u6307\u5b9a\u8ba4\u8bc1\u7684\u6570\u636e\u5e93\n--authenticationMechanism <name> # \u6307\u5b9a\u8ba4\u8bc1\u7684\u7b97\u6cd5 \uff0c\u9ed8\u8ba4\u503c SCRAM-SHA-1\n--db <database>, -d <database> # \u6307\u5b9a\u5907\u4efd\u7684\u6570\u636e\u5e93\uff0c\u672a\u6307\u5b9a\u7684\u8bdd\uff0c\u5907\u4efd\u6240\u6709\u7684\u6570\u636e\u5e93\uff0c\u4f46\u4e0d\u5305\u542blocal\u5e93\n--collection <collection>, -c <collection> # \u6307\u5b9a\u5907\u4efd\u7684\u96c6\u5408\uff0c\u672a\u6307\u5b9a\u5219\u5907\u4efd\u6307\u5b9a\u5e93\u4e2d\u7684\u6240\u6709\u96c6\u5408\u3002\n--query <json>, -q <json>  # \u6307\u5b9a json \u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\u3002\u6765\u5907\u4efd\u6211\u4eec\u8fc7\u6ee4\u540e\u7684\u6570\u636e\u3002\n--queryFile <path>  # \u6307\u5b9a json \u6587\u6863\u8def\u5f84\uff0c\u4ee5\u8be5\u6587\u6863\u7684\u5185\u5bb9\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\uff0c\u6765\u5907\u4efd\u6211\u4eec\u8fc7\u6ee4\u540e\u7684\u6570\u636e\u3002\n--quit # \u901a\u8fc7\u6291\u5236 MongoDB\u7684\u590d\u5236\uff0c\u8fde\u63a5\u7b49\u6d3b\u52a8\uff0c\u6765\u5b9e\u73b0\u5907\u4efd\u3002\n--gzip  # \u5f00\u542f\u538b\u7f29\uff0c3.2\u7248\u672c\u540e\u53ef\u4ee5\u4f7f\u7528\uff0c\u8f93\u51fa\u4e3a\u6587\u4ef6\u7684\u8bdd\u4f1a\u5e26\u6709\u540e\u7f00.gz\n--out <path>, -o <path>  # \u8f93\u51fa\u7684\u76ee\u5f55\u8def\u5f84\n--repir # \u4fee\u590d\u6570\u636e\u65f6\u4f7f\u7528 \u4e0b\u9762\u6709\u8be6\u7ec6\u4ecb\u7ecd\n--oplog # mongodump \u4f1a\u5c06 mongodump \u6267\u884c\u671f\u95f4\u7684 oplog \u65e5\u5fd7 \u8f93\u51fa\u5230\u6587\u4ef6 oplog.bson\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u4ece\u5907\u4efd\u5f00\u59cb\u5230\u5907\u4efd\u7ed3\u675f\u7684\u6570\u636e\u64cd\u4f5c\u6211\u4eec\u90fd\u53ef\u4ee5\u8bb0\u5f55\u4e0b\u6765\u3002\n--archive <file> # \u8f93\u51fa\u5230\u5355\u4e2a\u5b58\u6863\u6587\u4ef6\u6216\u8005\u662f\u76f4\u63a5\u8f93\u51fa\u3002\n--dumpDbUsersAndRoles # \u53ea\u6709\u5728 \u4f7f\u7528 --db \u65f6\u624d\u9002\u7528\uff0c\u5907\u4efd\u6570\u636e\u5e93\u7684\u5305\u542b\u7684\u7528\u6237\u548c\u89d2\u8272\u3002\n--excludeCollection string # \u6392\u9664\u6307\u5b9a\u7684\u96c6\u5408\uff0c\u5982\u679c\u8981\u6392\u9664\u591a\u4e2a\uff0c\u4f7f\u7528\u591a\u4e2a--excludeCollection \n--numParallelCollections int, -j int # \u5e76\u884c\u5bfc\u51fa\u7684\u96c6\u5408\u6570\uff0c\u9ed8\u8ba4\u4e3a4\n")),(0,a.kt)("p",null,"\u57fa\u7840\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5168\u5e93\u5907\u4efd\nmkdir /mongodb/backup\n$ mongodump --host=test.agou-ops.top  --port 28018 -o /mongodb/backup\n\n# \u5907\u4efdtest\u5e93\n$ mongodump  --port 28018 -d test -o /mongodb/backup/\n\n# \u5907\u4efdworld\u5e93\u4e0b\u7684city\u96c6\u5408\n$ mongodump  --port 28018 -d world -c city -o /mongodb/backup/\n\n# \u538b\u7f29\u5907\u4efd\n$ mongodump  --port 28018 -d app -o -c vast /mongodb/backup/ --gzip\n")),(0,a.kt)("h3",{id:"mongorestore"},"mongorestore"),(0,a.kt)("p",null,"\u547d\u4ee4\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mongorestore <options> <directory or file to restore>\n  \n--help # \u67e5\u770b\u5e2e\u52a9\n--quiet # \u901a\u8fc7\u6291\u5236 MongoDB\u7684\u590d\u5236\uff0c\u8fde\u63a5\u7b49\u6d3b\u52a8\uff0c\u6765\u5b9e\u73b0\u6570\u636e\u6062\u590d\u3002\n\n--host <hostname><:port>, -h <hostname><:port>  # \u6307\u5b9a\u6062\u590d\u7684\u4e3b\u673aip\u548c\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u503clocalhost:27017\n--port # \u6307\u5b9a\u7aef\u53e3\u53f7 \u9ed8\u8ba427017\n\n--username <username>, -u <username> # \u6307\u5b9a\u7528\u6237\u540d\n--password <password>, -p <password> # \u6307\u5b9a\u5bc6\u7801\n--authenticationDatabase <dbname> # \u6307\u5b9a\u8ba4\u8bc1\u7684\u6570\u636e\u5e93\n--authenticationMechanism <name> # \u6307\u5b9a\u8ba4\u8bc1\u7684\u7b97\u6cd5 \uff0c\u9ed8\u8ba4\u503c SCRAM-SHA-1\n--objcheck # \u5f00\u542f\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u8fd8\u539f\u64cd\u4f5c\uff0c\u786e\u4fdd\u6ca1\u6709\u65e0\u6548\u7684\u6587\u6863\u63d2\u5165\u6570\u636e\u5e93\u3002\u4f1a\u6709\u8f83\u5c0f\u7684\u6027\u80fd\u5f71\u54cd\n--oplogReplay # \u6062\u590d\u5907\u4efd\u6570\u636e\u5e76\u5c06 mongodump \u6267\u884c\u671f\u95f4\u7684\u64cd\u4f5c(\u8bb0\u5f55\u5728\u5bfc\u51fa\u7684\u65e5\u5fd7)\u6062\u590d\u3002\n--oplogLimit  # \u6307\u5b9a\u6062\u590d\n--oplogFile # \u6307\u5b9a Oplog \u8def\u5f84\n--keepIndexVersion # \u963b\u6b62mongorestore\u5728\u8fd8\u539f\u8fc7\u7a0b\u4e2d\u5c06\u7d22\u5f15\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u3002\n--restoreDbUsersAndRoles # \u8fd8\u539f\u6307\u5b9a\u7684\u6570\u636e\u5e93\u7528\u6237\u548c\u89d2\u8272\u3002\n--maintainInsertionOrder # \u9ed8\u8ba4\u503c\u4e3aFalse,\u5982\u679c\u4e3a True,mongorestore \u5c06\u6309\u7167\u8f93\u5165\u6e90\u7684\u6587\u6863\u987a\u5e8f\u63d2\u5165\uff0c\u5426\u5219\u662f \u968f\u673a\u6267\u884c\u63d2\u5165\u3002\n--numParallelCollections int, -j int # \u6307\u5b9a\u5e76\u884c\u6062\u590d\u7684\u96c6\u5408\u6570\u3002\n--numInsertionWorkersPerCollection int # \u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u6307\u5b9a\u6bcf\u4e2a\u96c6\u5408\u6062\u590d\u7684\u5e76\u53d1\u6570\uff0c\u5927\u6570\u636e\u91cf\u5bfc\u5165\u589e\u52a0\u8be5\u503c\u53ef\u63d0\u9ad8 \u6062\u590d\u901f\u5ea6\u3002\n--gzip # \u4ece\u538b\u7f29\u6587\u6863\u4e2d \u6062\u590d\u3002\n--archive # \u4ece\u5f52\u6863\u6587\u4ef6\u4e2d\u6062\u590d\u3002\n--dir # \u6307\u5b9a\u8fd8\u539f\u6570\u636e\u50a8\u5b58\u76ee\u5f55\u3002\n")),(0,a.kt)("p",null,"\u57fa\u7840\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6062\u590dapp1\u5e93\n$ mongorestore --host=test.agou-ops.top  --port 28018 -d app1  /mongodb/backup/app/\n\n# \u6062\u590dtest\u5e93\u4e0b\u7684vast\u96c6\u5408\n$ mongorestore  --port 28018 -d app2 -c vast /mongodb/backup/app/vast.bson\n\n# drop\u8868\u793a\u6062\u590d\u7684\u65f6\u5019\u628a\u4e4b\u524d\u7684\u96c6\u5408drop\u6389\n$ mongorestore  --port 28018 -d app -c vast --drop /mongodb/backup/app/vast.bson\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," \u26a0\ufe0f\u6ce8\u610f\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"1\u3001\u5982\u679c\u8981\u6062\u590d\u7684\u8868\u5df2\u7ecf\u5b58\u5728\uff0c\u53ef\u4ee5\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"--drop")," \uff0c\u81ea\u52a8\u5220\u9664\u539f\u8868\n2\u3001\u5982\u679c\u6709\u7528\u6237\u9a8c\u8bc1\uff0c\u9700\u8981\u4f7f\u7528root\u6216\u8005\u9700\u8981\u5907\u4efd\u7684\u5bf9\u8c61\u6709\u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u800c\u4e14\u8981\u6dfb\u52a0\u5bf9\u7528\u6237\u7684\u9a8c\u8bc1\u5e93   --authenticationDatabase\n-uroot -proot123 --authenticationDatabase admin\n"))),(0,a.kt)("h2",{id:"\u76f4\u63a5\u62f7\u8d1d\u6216\u5feb\u7167\u6570\u636e\u6587\u4ef6"},"\u76f4\u63a5\u62f7\u8d1d\u6216\u5feb\u7167\u6570\u636e\u6587\u4ef6"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5907\u4efd\u6570\u636e\u5e93\u6700\u6700\u7b80\u5355\u7684\u65b9\u6848\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"data/")," \u91cc\u7684\u6240\u6709\u6587\u4ef6\u4e00\u5e76\u590d\u5236\u5230\u4efb\u610f\u5b89\u5168\u7684\u5730\u65b9\uff0c\u5728\u590d\u5236\u4e4b\u524d\u5e94\u5148\u505c\u6b62\u5bf9\u6570\u636e\u5e93\u7684\u5199\u5165\u64cd\u4f5c\uff0c\u4ee5\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"db.fsyncLock()")," \u547d\u4ee4\u505c\u6b62\u5199\u5165\u64cd\u4f5c\u3002"),(0,a.kt)("h3",{id:"\u62f7\u8d1d\u6570\u636e\u6587\u4ef6"},"\u62f7\u8d1d\u6570\u636e\u6587\u4ef6"),(0,a.kt)("p",null,"\u76f4\u63a5\u62f7\u8d1d\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6570\u636e\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u26a0\ufe0f\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u4e00\u70b9\u662f\uff1a\u5907\u4efd\u590d\u5236\u4ea7\u751f\u7684\u5e95\u5c42\u6570\u636e",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301\u65f6\u95f4\u70b9\u6062\u590d\u526f\u672c\u96c6\u548c\u96be\u4ee5\u7ba1\u7406\u5bf9\u4e8e\u8f83\u5927\u7684\u5206\u7247\u96c6\u7fa4"),"(sharded-cluster)\u3002\u6b64\u5916,\u8fd9\u4e9b\u5907\u4efd\u66f4\u5927\uff0c\u56e0\u4e3a\u5b83\u4eec\u5305\u62ec\u7d22\u5f15\u548c\u590d\u5236\u5e95\u5c42\u5b58\u50a8\u586b\u5145\u548c\u788e\u7247\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0cmongodump\u521b\u5efa\u5360\u7a7a\u95f4\u66f4\u5c0f\u7684\u5907\u4efd\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u4e0d\u63a8\u8350\u4f7f\u7528\u8be5\u5907\u4efd\u65b9\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u7cfb\u7edf\u5feb\u7167\u5907\u4efd"},"\u4f7f\u7528\u7cfb\u7edf\u5feb\u7167\u5907\u4efd"),(0,a.kt)("p",null,"\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/backup-with-filesystem-snapshots/"},"https://docs.mongodb.com/manual/tutorial/backup-with-filesystem-snapshots/")),(0,a.kt)("h2",{id:"\u9644\u5f55\u5b9a\u671f\u5907\u4efd\u811a\u672c"},"\u9644\u5f55\uff1a\u5b9a\u671f\u5907\u4efd\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#--------------------------------------------\n# mongodb\u5b9a\u65f6\u5907\u4efd\u811a\u672c\n#--------------------------------------------\n#! /bin/bash\n\n# \u547d\u4ee4\u6267\u884c\u8def\u5f84\nMONGOD=/usr/bin/mongodump\nOUT_DIR=/data/backup/mongo/mongod_bak_tmp\n# \u538b\u7f29\u540e\u7684\u5907\u4efd\u5b58\u653e\u8def\u5f84\nTAR_DIR=/data/backup/mongo/mongod_bak_list\n# \u538b\u7f29\u65f6\u95f4\u4e3a\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4/\u5220\u9664\u65f6\u95f4\u4e3a\u4e03\u5929\u524d\nTAR_DATE=$(date +%F)\nDEL_DATE=$(date +%F -d "-7 day")\n\n# \u6570\u636e\u5e93\u914d\u7f6e\nDB_HOST=ip:port\nDB_NAME==******\nDB_AUTHSOURCE=admin\nDB_USERNAME=******\nDB_PASSWORD=******\n\nif [[ ! -d ${OUT_DIR} ]];then\nmkdir -p ${OUT_DIR}\nfi\n\nif [[ ! -d ${TAR_DIR} ]];then\nmkdir -p ${TAR_DIR}\nfi\n\nTAR_BAK="mongo_bak_${TAR_DATE}.tar.gz"\ncd ${OUT_DIR}\nrm -rf ${OUT_DIR}/*\n${MONGOD} -h ${DB_HOST} -u ${DB_USERNAME} -p ${DB_PASSWORD} --authenticationDatabase ${DB_AUTHSOURCE} -d ${DB_NAME} -o ${OUT_DIR}\n# \u538b\u7f29\u5f52\u6863\ntar -zcvPf ${TAR_DIR}/${TAR_BAK} ${OUT_DIR}\n# \u6e05\u9664\u5386\u53f2\u5f52\u6863(\u4e03\u5929\u524d)\nfor i in `find ${TAR_DIR} -maxdepth 1 \\( -type d -o -type l \\)`;\ndo\n        find -L $i -maxdepth 1 -type f \\( -name "*${DEL_DATE}*" -a -name "*.tar.gz" \\) -exec rm -f {} \\;\ndone\n\n\n## \ncrontab_reload(){\n    echo "30 0 * * * ${SCRIPT_DIR}/auto/crontab/mongo_back.sh" > /var/spool/cron/root\n    # \u91cd\u542fcrontab\n    /sbin/service crond restart\n    service crond status\n    echo "get current crontab"\n    crontab -l\n    echo "crontab reload done"\n}\n')),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MongoDB database-tools: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/database-tools/"},"https://docs.mongodb.com/database-tools/")),(0,a.kt)("li",{parentName:"ul"},"MongoDB backups documentation: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/core/backups/"},"https://docs.mongodb.com/manual/core/backups/"))))}c.isMDXComponent=!0}}]);